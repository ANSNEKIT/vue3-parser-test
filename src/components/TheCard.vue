<template>
    <section class="card">
        <RouterLink :to="{ name: 'Task', params: { id: 1 } }" class="card__title-link">
            <h2 class="card__title">{{ title }}</h2>
        </RouterLink>
        <ul class="card__tags">
            <li class="card__tag">tag</li>
            <li class="card__tag">tagasdf</li>
        </ul>
        <p class="card__description">
            {{ article }}
        </p>
        <button class="card__close"></button>
    </section>
</template>

<script>
export default {
    name: 'TheCard',
    props: {
        id: {
            type: String,
            default: '',
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        url: {
            type: String,
            default: '',
        },
        article: {
            type: String,
            default: '',
        },
        keyword: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    padding: 30px;

    border-radius: 4px;
    border: 1px solid var(--color-border);
    background-color: var(--color-yellow-light);

    &:hover {
        .card__close {
            display: flex;
        }
    }

    &__title-link {
        display: block;
        max-width: 100%;

        color: var(--color-text);
        text-decoration: none;

        &:hover {
            color: var(--color-text-hover);
        }
    }

    &__title {
        display: block;

        font-size: 23px;
        line-height: 1.2em;
        font-weight: 800;
        text-align: left;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        margin-bottom: 20px;
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;

        margin-bottom: 30px;
    }

    &__tag {
        padding: 2px 8px;
        border: 1px solid var(--color-tag-border);
        border-radius: 6px;
        color: var(--color-tag);
        background-color: white;
        text-decoration: none;
        white-space: nowrap;
        font-size: 13px;
    }

    &__description {
        text-align: left;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    &__close {
        position: absolute;
        top: 5px;
        right: 5px;

        display: none;
        justify-content: center;
        align-items: center;

        width: 30px;
        height: 30px;

        padding: 3px;
        margin-left: 5px;

        border: none;
        outline: none;
        border-radius: 1000px;

        &::after {
            display: inline-block;
            content: '\00d7';
        }

        &:hover {
            background-color: var(--color-gray-hover);
        }
    }
}
</style>
