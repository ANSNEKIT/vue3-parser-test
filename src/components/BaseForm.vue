<template>
    <form class="form" @keydown="onEnterForm">
        <template v-if="formType === 'parser'">
            <BaseSelect
                id="exchange"
                class="form__select"
                v-model="parseForm.exchange"
                label="Выберите биржу"
                :options="exchangeOptions"
            />
            <BaseInput
                id="keyword"
                class="form__input"
                v-model.trim="parseForm.keyword"
                label="Ключевые слова"
                pattern="([0-9a-zа-я]+)([,][\s][0-9a-zа-я]+)*"
            />
        </template>

        <template v-else>
            <BaseInput
                id="title"
                class="form__input"
                v-model.trim="editForm.title"
                label="Заголовок"
                required
            />

            <ul class="form__tags">
                <BaseTag
                    v-for="(tag, idx) in editForm.keyword"
                    :key="idx + '-wgojojwd'"
                    :id="idx"
                    :is-edit="true"
                    @tag-delete="onDeleteTag"
                    >{{ tag }}</BaseTag
                >
            </ul>

            <BaseInput
                id="edit-keyword"
                class="form__input"
                v-model.trim="editForm.newKeyword"
                label="Добавить ключевое слово по Enter"
                pattern="[0-9a-zа-я]+"
                @keyup.enter.stop="onAddTag"
            />

            <BaseInput
                id="url"
                class="form__input"
                v-model.trim="editForm.url"
                label="Ссылка"
                type="url"
                placeholder="https://example.com"
                pattern="https://.*"
                max-length="450"
                required
            />

            <BaseTextarea id="article" label="Статья" v-model.trim.lazy="editForm.article" />
        </template>

        <div class="form__buttons">
            <BaseButton type="button" class="base-button--cancel" @click="onCancel"
                >Отмена</BaseButton
            >
            <BaseButton type="submit" class="base-button--ok" @click="onSubmit">{{
                submitName
            }}</BaseButton>
        </div>
    </form>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseTag from '@/components/BaseTag.vue';

export default {
    name: 'BaseForm',
    components: {
        BaseInput,
        BaseSelect,
        BaseButton,
        BaseTextarea,
        BaseTag,
    },
    props: {
        formType: {
            type: String,
            default: 'parser',
        },
        task: {
            type: Object,
            default: () => {},
        },
    },
    emits: ['submitForm'],
    data: () => ({
        parseForm: {
            exchange: '1',
            keyword: '',
        },
        editForm: {
            title: '',
            article: '',
            url: '',
            keyword: [],
            newKeyword: '',
        },

        exchangeOptions: [
            {
                id: 'freelance',
                value: '1',
                name: 'Freelance',
            },
            {
                id: 'kwork',
                value: '2',
                name: 'Kwork',
            },
            {
                id: 'all',
                value: '3',
                name: 'Выбрать все',
            },
        ],
    }),

    created() {
        if (this.formType === 'edit') {
            const loadTaskState = () => {
                return {
                    title: this.task.title,
                    article: this.task.article,
                    url: this.task.url,
                    keyword: this.task.keyword,
                };
            };
            this.editForm = loadTaskState();
        }
    },

    computed: {
        submitName() {
            return this.formType === 'edit' ? 'Сохранить' : 'Отправить';
        },
    },

    methods: {
        onEnterForm(evt) {
            if (evt.keyCode === 13) {
                evt.preventDefault();
                return false;
            }
        },

        onCancel() {
            if (this.formType === 'parser') {
                this.parseForm = {
                    exchange: '1',
                    keyword: '',
                };
            } else {
                this.$router.push({ name: 'Task', params: { id: this.task.id } });
            }
        },

        onAddTag() {
            this.editForm.keyword.push(this.editForm.newKeyword);
            this.editForm.newKeyword = '';
        },

        onDeleteTag(idx) {
            const cash = [...this.editForm.keyword];
            cash.splice(idx, 1);

            this.editForm.keyword = cash;
        },

        onSubmit(evt) {
            evt.preventDefault();

            if (this.formType === 'parser') {
                this.$emit('submitForm', this.parseForm);
            } else {
                this.$emit('submitForm', this.editForm);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    width: 50%;
    min-width: 290px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border: 1px solid black;
    border-radius: 4px;
    background-color: var(--color-yellow-light);

    margin: 0 auto;
    padding: 30px;

    &__select {
        margin-bottom: 30px;
    }

    &__input {
        margin-bottom: 30px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__tags {
        display: flex;
        gap: 5px;

        margin-bottom: 10px;
    }

    &__buttons {
        display: flex;
        gap: 20px;

        margin-top: 50px;
    }
}
</style>
