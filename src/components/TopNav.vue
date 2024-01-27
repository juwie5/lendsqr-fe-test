<template>
    <section>
        <div>
            <div class="top-nav">
                <div>
                    <img src="@/assets/logo.svg" alt="">
                </div>
                <div class="search">
                    <input class="top-nav-input" type="text" name="" id="" placeholder="Search for anything">  
                    <img class="searchButton" src="@/assets/search.svg" alt="">  
                </div>
                <div class="top-nav-end">
                    <a href="">Docs</a>
                    <img src="@/assets/bell-lend.svg" alt="">
                    <img class="top-nav-img" src="@/assets/ayodeji-img.png" alt="">
                    <div class="top-nav-end">
                        <p>Ayodeji</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z"
                                fill="#213F7D" />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $white;
    padding: 10px 30px;
    box-shadow: 3px 0px 20px 0px rgba(0, 0, 0, 0.04);

    .top-nav-img {
        width: 13%;
    }
    .search{
        position: relative;
      
    }

    .top-nav-input {
        width: 400px;
        padding: 12px 20px;
        border-radius: 8px;
        border: 1px solid $blue;
        opacity: 0.2;
    }

    .searchButton {
        position: absolute;
        right: 0px;
        top: 1px;
        border: 1px solid #39CDCC;
        background: #39CDCC;
        text-align: center;
        color: #fff;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
        font-size: 20px;
        padding: 12px 20px;
    }

    .top-nav-end {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 24px;
        color: $blue;


    }

    a:link {
        color: $blue;
        margin-right: 20px;
    }

    a:visited {
        color: $blue;
    }


}
</style>