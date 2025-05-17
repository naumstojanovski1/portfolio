window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const spinner = preloader.querySelector('.spinner-border');
    const portfolioText = document.getElementById('portfolioText');
    const portfolioId = document.getElementById('portfolioId');


    spinner.classList.add('fade-out');


    setTimeout(() => {
        spinner.style.display = 'none';

        portfolioText.textContent = 'Naum\'s Portfolio';
        portfolioText.classList.add('typing');
        portfolioText.style.opacity = '1';
        portfolioText.style.width = '15ch';
        setTimeout(() => {
            portfolioId.textContent = 'ID: 243006';
            portfolioId.style.opacity = '1';
            portfolioId.style.transition = 'opacity 1s ease';
        }, 3000);

        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 1s ease';

            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000);

        }, 5000);

    }, 1000);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const subject = encodeURIComponent(document.getElementById('emailSubject').value);
    const message = encodeURIComponent(document.getElementById('emailMessage').value);
    const mailtoLink = `mailto:naum.stojanovski@students.finki.ukim.mk?subject=${subject}&body=${message}`;
    window.location.href = mailtoLink;

});
