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
                        <h5>Grace Effiom</h5>
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
                            <h6>Grace Effiom</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Phone Number</p>
                            <h6>07060780922</h6>
                        </div>
                        <div class="section-two-grid-item">
                            <p>Email Address</p>
                            <h6>grace@gmail.com</h6>
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

</script>

<style lang="scss" scoped>
a.router-link-active {
    background-color: rgb(57, 205, 204, 0.2);
    border-left: 3px solid #39CDCC;
}

.users-page {
    padding: 0 0 0 295px;
    margin-bottom: 40px;

}

a {
    text-decoration: none;
    color: #545F7D;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.users-container {
    padding: 0 60px;

    h3 {
        color: $blue;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .page-heading {
        display: flex;
        align-items: center;
        gap: 8px;

    }

    .page-sub-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .blacklist-btn {
            width: 170px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid #E4033B;
            background-color: transparent;
            color: #E4033B;
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            margin-right: 12px;
        }

        .active-btn {
            width: 170px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid $lime-green;
            background-color: transparent;
            color: $lime-green;
            text-align: center;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: 1.4px;
            text-transform: uppercase;
        }
    }

    .bar {
        border-right: 1px solid rgb(84, 95, 125, 0.09);
        border-left: 1px solid rgb(84, 95, 125, 0.09);
        height: 60%;
    }

    .section {
        background: $white;
    }

    .section-one {
        display: flex;
        align-items: start;
        background: $white;
        padding: 30px;
        gap: 20px;

        .section-item {
            padding: 19px 30px;

            h5 {
                color: $blue;
                font-size: 22px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin: 0;
            }

            h6 {
                color: $grey;
                font-family: "Work Sans";
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin: 8px 0;
            }

        }
    }

    .section-tabs {
        display: flex;
        justify-content: space-evenly;

        p {
            color: rgba(0, 0, 0, 0.80);
            text-align: center;
            font-family: "SF Compact Text";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        .active {
            font-family: "Work Sans";
            color: $lime-green;
            padding: 0 20px 20px 20px;
            border-bottom: 2px solid $lime-green;
        }
    }

    .section-two {
        padding: 30px;
        background: $white;
        margin-top: 30px;

        h3 {
            color: $blue;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .section-two-grid {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 30px;
            padding-bottom: 30px;
        }

        .section-two-grid:nth-child(2){
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 30px;
            padding-bottom: 30px;
        }

        .section-two-border{
            border-bottom: 1px solid rgb(33, 63, 125, 0.06);
        }
        .section-two-border:nth-child(5){
            border: none;
        }


        .section-two-grid-item {
            color: $grey;
            p {
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-transform: uppercase;
            }

            h6 {
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                margin: 0;
            }
        }
    }
}
</style>