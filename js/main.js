// =============== COUNT ===============

document.addEventListener('DOMContentLoaded', () => {
    const numberInputs = document.querySelectorAll('.count');

    numberInputs.forEach((wrapper) => {
        const input = wrapper.querySelector('.count__input');
        const incrementBtn = wrapper.querySelector('.count__up');
        const decrementBtn = wrapper.querySelector('.count__down');

        const updateButtonsState = () => {
            const min = parseFloat(input.min) || -Infinity;
            const max = parseFloat(input.max) || Infinity;

            incrementBtn.disabled = parseFloat(input.value) >= max;
            decrementBtn.disabled = parseFloat(input.value) <= min;
        };

        incrementBtn.addEventListener('click', () => {
            const step = parseFloat(input.step) || 1;
            input.value = parseFloat(input.value || 0) + step;
            updateButtonsState();
        });

        decrementBtn.addEventListener('click', () => {
            const step = parseFloat(input.step) || 1;
            input.value = parseFloat(input.value || 0) - step;
            updateButtonsState();
        });

        input.addEventListener('input', updateButtonsState);
        updateButtonsState();
    });
});