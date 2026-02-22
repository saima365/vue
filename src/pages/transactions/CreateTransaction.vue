<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header text-center">
            <h4>Add Transaction</h4>
          </div>

          <div class="card-body">
            <form @submit.prevent="handleCreate">
              <!-- Account Number -->
              <label class="form-label"><strong>Account Number</strong></label>
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="transactions.account_id"
                  class="form-control"
                  placeholder="Account number"
                />
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="fetchUser"
                >
                  Search
                </button>
              </div>

              <!-- Account Holder -->
              <div class="mb-3">
                <label class="form-label"><strong>Account Holder</strong></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="transactions.name"
                  readonly
                />
              </div>

              <!-- Transaction Type -->
              <div class="mb-3">
                <label class="form-label"><strong>Transaction Type</strong></label>
                <select
                  class="form-control text-primary"
                  v-model="transactions.transaction_type_id"
                >
                  <option value="">Select type</option>
                  <option
                    v-for="type in transactionTypes"
                    :key="type.id"
                    :value="type.id"
                    
                  >
                    {{ type.type_name }}
                    
                  </option>
                </select>
              </div>

              <!-- Amount -->
              <div class="mb-3">
                <label class="form-label"><strong>Amount</strong></label>
                <input
                  type="number"
                  class="form-control"
                  v-model="transactions.amount"
                  step="0.01"
                  min="0"
                />
              </div>

              <!-- Date -->
              <div class="mb-3">
                <label class="form-label"><strong>Date</strong></label>
                <input
                  type="date"
                  class="form-control"
                  v-model="transactions.date"
                />
              </div>

              <div class="text-center">
                <button type="submit" class="btn btn-primary w-100">
                  Save Transaction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>



import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import api from "../../services/axios";


const router = useRouter();

const transactions = reactive({
  account_id: "",
  name:"",
  transaction_type_id: "",
  amount: "",
  date: "",
});

// const accountNumber = ref("");
// const accountHolder = ref("");
const transactionTypes = ref([]); 
// const account_number = ref([]); 




const fetchTransactionTypes = async () => {
  try {
    const { data } = await api.get(`/transaction_types`);
    transactionTypes.value = data.transaction_types;
    console.log(transactionTypes.value);
    
  } catch (error) {
    console.log(error);
  }
};

const fetchUser = async () => {
  if (!transactions.account_id) {
    alert("Please enter account number");
    return;
  }

  try {
    const { data } = await api.get(
      `/account_number/${transactions.account_id}`
    );
     console.log(data)
    transactions.name = data[0].customer.name;
    // account_number.account_id = data.customer.account_id
;
  } catch (error) {
    console.log(error);
    alert("Account not found");
    accountHolder.value = "";
    account_number.account_id = "";
  }
};

const handleCreate = async () => {
  try {
    let res = await api.post(`/transactions`, transactions);
    console.log(res);
    
   // router.push("/transactions");
  } catch (error) {
    console.log(error);
  }
};

fetchTransactionTypes();
</script>
<style>

</style>