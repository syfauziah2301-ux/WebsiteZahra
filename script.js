document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Profil Digital Saya',
                text: 'Hubungi saya melalui link ini:',
                url: window.location.href
            });
        } catch (err) {
            console.log('Batal berbagi:', err);
        }
    } else {
        // Fallback jika browser tidak mendukung Web Share API
        alert('Link profil telah disalin ke clipboard!');
        navigator.clipboard.writeText(window.location.href);
    }
});
