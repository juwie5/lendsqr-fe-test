<template>
    <section class="users-page">
        <TopNav />
        <section class="users-container">
            <router-link to="/users">
                <div class="page-heading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path
                            d="M1.94997 15.3564C1.9945 15.4712 2.0613 15.5767 2.14684 15.6658L5.89684 19.4157C6.07263 19.5927 6.31285 19.6935 6.56248 19.6935C6.81211 19.6935 7.05232 19.5927 7.22812 19.4157C7.40508 19.24 7.50586 18.9997 7.50586 18.7501C7.50586 18.5005 7.40508 18.2603 7.22812 18.0845L5.07187 15.9376H27.6562C28.1742 15.9376 28.5937 15.5181 28.5937 15.0001C28.5937 14.4821 28.1742 14.0626 27.6562 14.0626H5.07187L7.22812 11.9158C7.5961 11.5478 7.5961 10.9525 7.22812 10.5845C6.86014 10.2165 6.26485 10.2165 5.89687 10.5845L2.14687 14.3345C2.06133 14.4236 1.99453 14.529 1.95 14.6439C1.90195 14.7564 1.87617 14.8771 1.875 15.0001C1.87617 15.1232 1.90195 15.2439 1.95 15.3564L1.94997 15.3564Z"
                            fill="#545F7D" />
                    </svg>
                    <p>Back to Users</p>
                </div>
            </router-link>
            <section class="page-sub-heading">
                <h3>User Details</h3>
                <div class="page-sub-heading">
                    <button class="blacklist-btn">Blacklist User</button>
                    <button class="active-btn">Activate User</button>
                </div>
            </section>
            <section class="section">
                <div class="section-one">
                    <div>
                        <img src="@/assets/user-avatar.svg" alt="">
                    </div>
                    <div class="section-item">
                        <h5>{{ user.username }}</h5>
                        <p>LSQFf587g90</p>
                    </div>
                    <div class="section-item bar">
                        <h6>User’s Tier</h6>
                        <div>
                            <img src="@/assets/star.svg" alt="">
                            <img src="@/assets/star-1.svg" alt="">
                            <img src="@/assets/star-2.svg" alt="">
                        </div>
                    </div>
                    <div class="section-item ">
                        <h5>₦200,000.00</h5>
                        <p>9912345678/Providus Bank</p>
                    </div>
                </div>
                <div class="section-tabs">
                    <p class="active">General Details</p>
                    <p> Documents</p>
                    <p> Bank Details</p>
                    <p> Loans</p>
                    <p> Savings</p>
                    <p> App and System</p>
                </div>
            </section>

            <section class="section-two">
                <section class="section-two-border">
                    <h3>Personal Information</h3>
                    <div class="section-two-grid">
                        <div class="section-two-grid-item">
                            <p>full Name</p>
                            <h6>{{ user.username }}</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Phone Number</p>
                            <h6>{{ user.phone }}</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Email Address</p>
                            <h6>{{ user.email }}</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Bvn</p>
                            <h6>07060780922</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Gender</p>
                            <h6>Female</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Marital status</p>
                            <h6>Single</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Children</p>
                            <h6>None</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Type of residence</p>
                            <h6>Type of residence</h6>
                        </div>
                    </div>
                </section>
                <section class="section-two-border">
                    <h3>Education and Employment</h3>
                    <div class="section-two-grid">
                        <div class="section-two-grid-item">
                            <p>level of education</p>
                            <h6>B.Sc</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>employment status</p>
                            <h6>Employed</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>sector of employment</p>
                            <h6>FinTech</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Duration of employment</p>
                            <h6>2 years</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>office email</p>
                            <h6>grace@lendsqr.com</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Monthly income</p>
                            <h6>₦200,000.00- ₦400,000.00</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>loan repayment</p>
                            <h6>40,000</h6>
                        </div>
                    </div>
                </section>
                <section class="section-two-border">
                    <h3>Socials</h3>
                    <div class="section-two-grid">
                        <div class="section-two-grid-item">
                            <p>Twitter</p>
                            <h6>@grace_effiom</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Facebook</p>
                            <h6>Grace Effiom</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Instagram</p>
                            <h6>@grace_effiom</h6>
                        </div>
                    </div>
                </section>
                <section class="section-two-border">
                    <h3>Guarantor</h3>
                    <div class="section-two-grid">
                        <div class="section-two-grid-item">
                            <p>full Name</p>
                            <h6>Debby Ogana</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Phone Number</p>
                            <h6>07060780922</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Email Address</p>
                            <h6>debby@gmail.com</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Relationship</p>
                            <h6>Sister</h6>
                        </div>
                    </div>
                </section>
                <section class="section-two-border">
                    <h3></h3>
                    <div class="section-two-grid">
                        
                        <div class="section-two-grid-item">
                            <p>full Name</p>
                            <h6>Debby Ogana</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Phone Number</p>
                            <h6>07060780922</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Email Address</p>
                            <h6>debby@gmail.com</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Relationship</p>
                            <h6>Sister</h6>
                        </div>
                    </div>
                </section>

            </section>
        </section>

    </section>
</template>

<script setup lang="ts">
import TopNav from '@/components/TopNav.vue';

import {ref} from 'vue';

const user = ref< object | null>(JSON.parse(localStorage.getItem("user")))

</script>

<style lang="scss" scoped>
a.router-link-active {
    background-color: rgb(57, 205, 204, 0.2);
    border-left: 3px solid #39CDCC;
}

</style>