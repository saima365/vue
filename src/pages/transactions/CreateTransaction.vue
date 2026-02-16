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
                <button class="btn btn-outline-secondary" @click="fetchUser">
                  Search
                </button>
              </div>

              <!-- Account Holder -->
              <div class="mb-3">
                <label class="form-label"
                  ><strong>Account Holder</strong></label
                >

                <input
                  name="customer_name"
                  type="text"
                  class="form-control"
                  v-model="accountHolder"
                  readonly
                />
              </div>

              <div class="mb-3">
                <label class="form-label"
                  ><strong>Transaction Type</strong></label
                >

                <select
                  class="form-control text-primary"
                  v-model="transactions.transaction_type_id"
                >
                  <option value="">Select type</option>
                  <option
                    v-for="transaction in transactions"
                    :key="type.id"
                    :value="type.id"
                    value="1"
                  >
                   {{ transaction.type_name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label class="form-label"><strong>Amount</strong></label>

                <input
                  type="number"
                  class="form-control"
                  v-model="transaction.amount"
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

import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const baseUrl = import.meta.env.VITE_BASE_URL;
const router = useRouter();

const transactions = reactive({
  account_id: "",
  transaction_type_id: "",
  amount: "",
  date: "",
});

const account_id = ref("");
const accountHolder = ref("");

const fetchUser = async () => {
  if (!accountNumber.value) {
    alert("Please enter account number");
    return;
  }

  try {
    const { data } = await axios.get(
      `/user_by_account_number/${accountNumber.value}`,
    );

    accountHolder.value = data.customer_name;

    transactions.account_id = data.customer_id;
  } catch (error) {
    alert("Account not found");
    accountHolder.value = "";
    transactions.account_id = "";
  }
};

const handleCreate = async () => {
  try {
    await axios.post(`${baseUrl}/transactions`, transaction);

    router.push("/transactions");
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
};
</script>

<style></style>
