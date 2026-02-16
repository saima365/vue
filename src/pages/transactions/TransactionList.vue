<template>
  <div class="content-body">
    <div class="container-fluid">
      <div class="d-flex align-items-center mb-4 flex-wrap">
        <div class="card-tabs mt-3 mt-sm-0 me-auto">
          <ul class="nav nav-tabs trans-tab" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link underline active"
                data-bs-toggle="tab"
                href="#all-transactions"
                role="tab"
                >All</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link underline"
                data-bs-toggle="tab"
                href="#completed"
                role="tab"
                >Completed</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link underline"
                data-bs-toggle="tab"
                href="#pending"
                role="tab"
                >Pending</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link underline"
                data-bs-toggle="tab"
                href="#canceled"
                role="tab"
                >Cancelled</a
              >
            </li>
          </ul>
        </div>
        <h4 class="fs-20 font-w600 me-2 mb-0 downlod-pdf">
          <a href="/transaction/create" class="btn btn-primary btn-sm">
            Create Transactions</a
          >
        </h4>
        <select class="form-select w-auto">
          <option data-display="newest">newest</option>
          <option value="1">newest</option>
          <option value="2">oldest</option>
        </select>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="tab-content">
            <input
              type="text"
              class="form-control w-25"
              id="search"
              placeholder="Search here..."
            />
            <div class="card-body" id="all-transactions" role="tabpanel">
              <div class="table-responsive">
                <table class="table table-responsive-md" id="example5">
                  <thead>
                    <tr>
                      <th>
                        <div class="checkbox mr-0 align-self-center">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="checkAll"
                            />
                            <label
                              class="custom-control-label"
                              for="checkAll"
                            ></label>
                          </div>
                        </div>
                      </th>
                      <th>ID Invoice</th>
                      <th>Date</th>
                      <th>Recipient</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Location</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Example Row -->
                    <tr v-for="transaction in transactions" :key="transaction.id">
                      <td>
                        <div class="checkbox mr-0 align-self-center">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="form-check-input"
                              id="check1"
                            />
                            <label
                              class="custom-control-label"
                              for="check1"
                            ></label>
                          </div>
                        </div>
                      </td>
                      <td>{{transaction.id }}</td>
                      <td class="whitesp-no">{{transaction.date}}</td>
                      <td class="whitesp-no p-0">
                        <div class="d-flex py-sm-3 py-1 align-items-center">
                          <span class="me-3">
                            <img
                              :src="`${imgUrl}/assets/images/profile/default.png`"
                              alt=""
                              width="50"
                              class="rounded-3 img-history"
                            />
                          </span>
                          <div>
                            <h6 class="font-w500 fs-16 mb-0">{{ transaction.customer?.name }}</h6>
                          </div>
                        </div>
                      </td>
                      <td class="whitesp-no amount"><a href="#">{{transaction.amount}}</a></td>
                      <td class="income">{{ transaction.transaction_type.type_name }}</td>
                      <td>{{ transaction.account.branch.name }}</td>
                      <td>
                        <div class="dropdown">
                          <a
                            href="javascript:void(0);"
                            class="btn-link btn sharp tp-btn-light btn-primary pill"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="bi bi-three-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="#"
                              >Cancel Transaction</a
                            >
                            <a class="dropdown-item" href="#">View Details</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <!-- Repeat rows dynamically with JS or backend -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const imgUrl = import.meta.env.VITE_IMG_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;

const transactions = ref([]);

const fetchTransactions = () => {
  axios
    .get(`${baseUrl}/transactions`)
    .then((res) => {
      console.log(res.data.transactions);
      transactions.value = res.data.transactions;
    })
    .catch();
};
onMounted(() => {
  fetchTransactions();
});

</script>

<style></style>
