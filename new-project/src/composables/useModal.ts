import {ref} from "vue";

export function useModal() {
    const isOpen = ref<boolean>(false);

    function closeModal() {
        isOpen.value = false;
    }

    function openModal() {
        isOpen.value = true;
    }

    return {isOpen, closeModal, openModal};
}
