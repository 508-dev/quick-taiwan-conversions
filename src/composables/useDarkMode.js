import { ref, watch } from 'vue';

const isDark = ref(false);

// Load theme from localStorage on init
const initTheme = () => {
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem('theme');
  } catch (_) {
    savedTheme = null;
  }
  if (savedTheme) {
    isDark.value = savedTheme === 'dark';
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  applyTheme();
};

// Apply theme to document
const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  try {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
  } catch (_) {}
  applyTheme();
};

// Watch for changes
watch(isDark, () => {
  applyTheme();
});

export const useDarkMode = () => {
  return {
    isDark,
    toggleDarkMode,
    initTheme,
  };
};
