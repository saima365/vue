<template>
 <div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow">
                <div class="card-header text-center">
                    <h4>Add Transaction</h4>
                </div>

                <div class="card-body">

                    <!-- Validation Errors -->
                    <div class="alert alert-danger" style="display: none;">
                        <ul class="mb-0">
                            <!-- Error messages will be injected here -->
                        </ul>
                    </div>

                    <form method="POST" action="/transaction/save" enctype="multipart/form-data">
                        <!-- CSRF token placeholder -->
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <!-- Account Number -->
                        <label class="form-label"><strong>Account Number</strong></label>
                        <div class="input-group mb-3">
                            <input type="number" name="account_id" class="form-control account_number"
                                placeholder="account number" aria-label="Recipient's username"
                                aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>

                        <!-- Account Holder -->
                        <div class="mb-3">
                            <label class="form-label"><strong>Account Holder</strong></label>
                            <input type="text" name="account_holder" class="form-control account_holder" id="account_holder" required>
                            <input type="hidden" name="account_holder_id" id="account_holder_id">
                        </div>

                        <!-- Transaction Type -->
                        <div class="mb-3">
                            <label class="form-label"><strong>Transaction Type</strong></label>
                            <select name="transaction_type_id" class="form-control text-primary" required>
                                <option value="">Select type</option>
                                <!-- Transaction types will be dynamically injected here -->
                            </select>
                        </div>

                        <!-- Amount -->
                        <div class="mb-3">
                            <label class="form-label"><strong>Amount</strong></label>
                            <input type="number" name="amount" class="form-control" step="0.01" min="0" required>
                        </div>

                        <!-- Transaction Date -->
                        <div class="mb-3">
                            <label class="form-label"><strong>Date</strong></label>
                            <input type="date" name="date" class="form-control" required>
                        </div>

                        <!-- Submit -->
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

<script lang="ts" setup>

</script>

<style>

</style>