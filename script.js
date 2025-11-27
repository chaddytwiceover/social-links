// ChaddyTwiceOver - Interactions

document.addEventListener('DOMContentLoaded', () => {
    // --- Footer Year Auto-Fill ---
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --- Copy Email Functionality ---
    const copyBtn = document.getElementById('copy-email-btn');
    const feedback = document.getElementById('copy-feedback');

    if (copyBtn && feedback) {
        copyBtn.addEventListener('click', async () => {
            const email = copyBtn.dataset.email;
            
            try {
                await navigator.clipboard.writeText(email);
                showFeedback();
            } catch (err) {
                // Fallback
                fallbackCopy(email);
            }
        });

        function showFeedback() {
            feedback.classList.add('visible');
            setTimeout(() => {
                feedback.classList.remove('visible');
            }, 2000);
        }

        function fallbackCopy(text) {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                showFeedback();
            } catch (e) {
                console.error('Failed to copy email', e);
            }
            
            document.body.removeChild(textArea);
        }
    }
});
