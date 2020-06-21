<template>
    <div class="c-icon-list">
        <ul>
            <li>
                <c-icon name="collection"></c-icon>
                <span>collection</span>
            </li>
            <li>
                <c-icon name="collection-fill"></c-icon>
                <span>collection-fill</span>
            </li>
            <li>
                <c-icon name="favorites"></c-icon>
                <span>favorites</span>
            </li>
            <li>
                <c-icon name="favorites-fill"></c-icon>
                <span>favorites-fill</span>
            </li>
            <li>
                <c-icon name="download"></c-icon>
                <span>download</span>
            </li>
            <li>
                <c-icon name="left"></c-icon>
                <span>left</span>
            </li>
            <li>
                <c-icon name="right"></c-icon>
                <span>right</span>
            </li>
            <li>
                <c-icon name="up"></c-icon>
                <span>up</span>
            </li>
            <li>
                <c-icon name="down"></c-icon>
                <span>down</span>
            </li>
            <li>
                <c-icon name="search"></c-icon>
                <span>search</span>
            </li>
            <li>
                <c-icon name="Daytimemode"></c-icon>
                <span>Daytimemode</span>
            </li>
            <li>
                <c-icon name="Daytimemode-fill"></c-icon>
                <span>Daytimemode-fill</span>
            </li>
            <li>
                <c-icon name="nightmode"></c-icon>
                <span>nightmode</span>
            </li>
            <li>
                <c-icon name="nightmode-fill"></c-icon>
                <span>nightmode-fill</span>
            </li>
            <li>
                <c-icon name="error"></c-icon>
                <span>error</span>
            </li>
            <li>
                <c-icon name="error-fill"></c-icon>
                <span>error-fill</span>
            </li>
            <li>
                <c-icon name="success"></c-icon>
                <span>success</span>
            </li>
            <li>
                <c-icon name="success-fill"></c-icon>
                <span>success-fill</span>
            </li>
            <li>
                <c-icon name="settings"></c-icon>
                <span>settings</span>
            </li>
            <li>
                <c-icon name="settings-fill"></c-icon>
                <span>settings-fill</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Icon from '../../../../src/icon'
export default {
    components: {
        'c-icon': Icon
    }
}
</script>
<style lang="scss" scoped>
.c-icon-list {
    & * {
        box-sizing: border-box;
    }
    display: flex;
    align-items: center;
    border-left: 1px solid #d1d5da;
    border-top: 1px solid #d1d5da;
    border-bottom: 1px solid #d1d5da;
    margin: 1em 0;
    .c-icon {
        width: 1.4em;
        height: 1.4em;
        margin: 0 1em;
    }
    .c-icon:first-child {
        margin-left: 0;
    }
    ul {
        margin: 0;
        padding: 0;
        width: 100%;
        display: flex;
        list-style: none;
        flex-wrap: wrap;
        margin-bottom: -1px;
        li {
            width: 20%;
            height: 140px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #d1d5da;
            border-bottom: 1px solid #d1d5da;
            transition: all 0.3s;
        }
        li:hover {
            color: #1a73e8;
            fill: #1a73e8;
        }
        .c-icon {
            margin: 0;
            margin-bottom: 1em;
        }
    }
}

</style>