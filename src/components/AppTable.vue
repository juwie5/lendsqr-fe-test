<template>
    <div>


        <table class="user-table">
            <thead>
                <tr>
                    <th v-for="item in header" :key="item.key">
                        <slot v-if="slots[`header-${item.key}`]" :name="`header-${item.key}`" v-bind="item" />
                        <div v-else class="user-table-header">
                            <p>{{ item.label }}</p>
                            <VDropdown>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none">
                                    <path
                                        d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                                        fill="#545F7D" />
                                </svg>
                                <template #popper>
                                    <section>
                                        <div class="modal">
                                            <div class="modal-item">
                                                <label for="organization">Organization</label>
                                                <select class="input">
                                                    <option value="lengsqr">Lendsqr</option>
                                                    <option value="irorun">Irorun</option>
                                                    <option value="lendstar">Lendstar</option>
                                                </select>
                                            </div>
                                            <div class="modal-item">
                                                <label for="username">Username</label>
                                                <input class="input" type="text" name="username" id="">
                                            </div>
                                            <div class="modal-item">
                                                <label for="date">Date</label>
                                                <input class="input" type="date" name="date" id="">
                                            </div>
                                            <div class="modal-item">
                                                <label for="phone">Phone Number</label>
                                                <input class="input" type="text" name="date" id="">
                                            </div>
                                            <div class="modal-item">
                                                <label for="status">Status</label>
                                                <select class="input">
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="blacklisted">Blacklisted</option>
                                                </select>
                                            </div>
                                            <div class="modal-submit">
                                                <button class="modal-btn-reset">Reset</button>
                                                <button class="modal-btn-submit">Filter</button>
                                            </div>
                                        </div>
                                    </section>
                                </template>
                            </VDropdown>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr v-for="item in tableData">
                    <td class="user-table-content">{{ item.organization }}</td>
                    <td class="user-table-content">{{ item.username }}</td>
                    <td class="user-table-content">{{ item.email }}</td>
                    <td class="user-table-content">{{ item.phone }}</td>
                    <td class="user-table-content">{{ item.date }}</td>
                    <td>
                        <div v-if="item.status === 'Active'" class="status status-active">{{ item.status }}</div>
                        <div v-if="item.status === 'Inactive'" class="status status-inactive">{{ item.status }}</div>
                        <div v-if="item.status === 'Pending'" class="status status-pending">{{ item.status }}</div>
                        <div v-if="item.status === 'Blacklisted'" class="status status-blacklisted">{{ item.status }}</div>

                    </td>
                    <td class="user-table-content">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none">
                                <g clip-path="url(#clip0_5530_2613)">
                                    <path
                                        d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
                                        fill="#545F7D" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5530_2613">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg></button>
                    </td>
                </tr> -->
                <tr v-for="(item, id) in fields" :key="id">
                    <td class="user-table-content" v-for="headerItem in header" @click="$emit('rowClicked', item)">
                        <slot v-if="slots[`item-${headerItem.key}`]" :name="`item-${headerItem.key}`" v-bind="item" />
                        <span v-else>{{ item[headerItem.key] }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <div class="pag-item">
                <p>Showing</p>
                <select name="pageSize" id="" v-model="pageSize" @change="updatePageSize(value)">
                    <option :value="100">100</option>
                    <option :value="250">250</option>
                    <option :value="500">500</option>
                </select>
                <p>out of {{ pageSize }}</p>
            </div>

            <div class="pag-item">

                <div @click="prevPage">
                    <img src="@/assets/prev-btn.svg" alt="">
                </div>
                <div>
                    <span v-for="n in totalPages" @click="updatePage(n)" :class="[n === page ? 'active' : 'not-active']">{{
                        n
                    }}</span>
                </div>
                <div @click="nextPage">
                    <img src="@/assets/next-btn.svg" alt="">
                </div>

            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { ref, useSlots, computed } from 'vue';

let pageSize = ref(100);
let page = ref(1);
let show = ref(false);


const slots = useSlots();

const props = defineProps({
    header: Array,
    fields: Array,
    totalPages: Number,
    totalRecords: Number
})

const emit = defineEmits([
    'rowClicked',
    'pageSizeChange',
    'pageChange'
]);


const updatePageSize = () => {
    emit('pageSizeChange', pageSize.value)
};

const updatePage = (item) => {
    page.value = item;
    emit('pageChange', item);
};

const prevPage = () => {
    if (page.value == 1) {
        page.value = 1
        emit('pageChange', page.value)
    } else {
        page.value -= 1;
        emit('pageChange', page.value)
    }
};

const nextPage = () => {
    if (page.value >= props.totalPages) {
        page.value = props.totalPages
        emit('pageChange', page.value)
    } else {
        page.value += 1;
        emit('pageChange', page.value)

    }
};

</script>

<style lang="scss" >
.user-table {
    width: 100%;
    background: $white;
    margin-top: 40px;
    padding: 30px;
    border-radius: 4px;
    border: 1px solid rgba(33, 63, 125, 0.06);
    box-shadow: 3px 5px 20px 0px rgba(0, 0, 0, 0.04);


    .user-table-header {
        display: flex;
        align-items: center;
        gap: 10px;
        color: $grey;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
    }

    .status {
        text-align: center;
        height: 20px;
        padding: 6px;
        border-radius: 16px;
    }

    .status-active {
        color: #39CD62;
        background: rgb(57, 205, 98, 0.06)
    }

    .status-inactive {
        color: #545F7D;
        background: rgb(84, 95, 125, 0.06)
    }

    .status-pending {
        color: #E9B200;
        background: rgb(233, 178, 0, 0.06)
    }

    .status-blacklisted {
        color: #E4033B;
        background: rgb(228, 3, 59, 0.06)
    }

    .user-table-content {


        color: $grey;
        font-family: "Work Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border-bottom: 1px solid rgba(33, 63, 125, 0.10);
        // padding: 20px 0;
        margin: 10px 0;

        button {
            border: none;
            outline: none;
            background: transparent;
        }


    }

}

th {
    padding: 5px 15px;
}

td {
    padding: 15px;
    border-bottom: 1px solid rgba(33, 63, 125, 0.10);
}

.pagination {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    .pag-item {
        display: flex;
        align-items: center;
        gap: 16px;

        select {
            width: 80px;
            height: 30px;
            padding: 0 4px;
            border-radius: 4px;
            background: rgba(33, 63, 125, 0.10);
            border: none;
        }

        p {
            color: $grey;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

        span {
            margin-left: 8px;
            color: $grey-15;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            cursor: pointer;
        }

        .active {
            color: $grey;
        }

    }
}

.modal {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 16px;
    width: 230px;
    padding: 30px 20px;
    border-radius: 4px;
    border: 1px solid rgba(84, 95, 125, 0.14);
    background: #FFF;
    box-shadow: 3px 5px 20px 0px rgba(0, 0, 0, 0.04);

    .modal-item {
        display: flex;
        flex-direction: column;
        gap: 4px;

        label {
            color: $grey;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

        .input {
            width: 230px;
            border-radius: 8px;
            border: 1px solid #213F7D;
            padding: 10px 0;
            opacity: 0.2;
            background: #FFF;
        }
    }

    .modal-submit {
        display: flex;
        width: 100%;
        justify-content: space-around;

        .modal-btn-reset {
            padding: 12px 30px;
            border-radius: 8px;
            border: 1px solid $grey;
            background: transparent;
            color: $grey;
            text-align: center;
            font-family: "Work Sans";
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }

        .modal-btn-submit {
            padding: 12px 30px;
            border-radius: 8px;
            background: $lime-green;
            border: none;
            color: $white;
            text-align: center;
            font-family: "Work Sans";
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
    }
}
</style>