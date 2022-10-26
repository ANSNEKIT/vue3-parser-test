<template>
    <div class="page-tasks">
        <TheCard
            id="0"
            title="SDFlsdjkfj asdfl jasd fja sdf kljhsald"
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus, aspernatur sapiente repellendus ab accusantium dignissimos. Perferendis nisi minus dolore, harum ullam vel eius qui cum odit, maiores, quae distinctio aperiam? Ipsum consequatur, dolorum vero similique exercitationem modi deleniti consectetur necessitatibus? Eaque iusto temporibus possimus quos consequatur fugiat natus sit"
            keyword="one two"
            url="http://ya.ru"
        />

        <TheCard
            id="1"
            title="SDFlsdjkfj"
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus, aspernatur sapiente repellendus ab accusantium dignissimos. Perferendis nisi minus dolore, harum ullam vel eius qui cum odit, maiores, quae distinctio aperiam? Ipsum consequatur, dolorum vero similique exercitationem modi deleniti consectetur necessitatibus? Eaque iusto temporibus possimus quos consequatur fugiat natus sit"
            keyword="one two"
            url="http://ya.ru"
        />

        <TheCard
            id="2"
            title="SDFlsdjkfj asdfl jasd fja kljhsald"
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "
            keyword="one two"
            url="http://ya.ru"
        />

        <TheCard
            id="3"
            title="SDFlsdjkfj asdfl jasd fja sdf kljhsald asdfsdafasdfsadfasdf asdf sadfasdf "
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus, aspernatur sapiente repellendus ab accusantium dignissimos. Perferendis nisi minus dolore, harum ullam vel eius qui cum odit, maiores, quae distinctio aperiam? Ipsum consequatur, dolorum vero similique exercitationem modi deleniti consectetur necessitatibus? Eaque iusto temporibus possimus quos consequatur fugiat natus sit"
            keyword="one two"
            url="http://ya.ru"
        />

        <TheCard
            id="4"
            title="SDFlsdjkfj asdfl "
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus"
            keyword="one two"
            url="http://ya.ru"
        />

        <TheCard
            id="5"
            title="SDFlsdjkfj"
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus, aspernatur sapiente repellendus ab accusantium dignissimos. Perferendis nisi minus dolore, harum ullam vel eius qui cum odit, maiores, quae distinctio aperiam? "
            keyword="one two"
            url="http://ya.ru"
        />

        <TheCard
            id="6"
            title="SDFlsdjkfj"
            article="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatibus, aspernatur sapiente repellendus ab accusantium dignissimos. Perferendis nisi minus dolore, harum ullam vel eius qui cum odit, maiores, quae distinctio aperiam? "
            keyword="one two"
            url="http://ya.ru"
        />
    </div>
</template>

<script>
import TheCard from '../components/TheCard.vue';

export default {
    name: 'PageParsedList',
    components: { TheCard },
};
</script>

<style lang="scss" scoped>
.page-tasks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1rem;

    max-width: 1300px;
    margin: 0 auto;
    padding: 30px;
}
</style>
