import { ref } from 'vue'

const isMenuOpen = ref(false)

export function useMenu() {
    return {
        isMenuOpen,
        toggleMenu: () => isMenuOpen.value = !isMenuOpen.value,
        closeMenu: () => isMenuOpen.value = false
    }
}
