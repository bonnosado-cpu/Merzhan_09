// ===== DONORS DATA - БАРЛЫҚ ҚАЛАЛАРМЕН =====
let donorsData = [
    // Астана
    { name: 'Айдос Серіков', blood: 'I+', city: 'Астана', phone: '+7 701 234 56 78', donations: 12, avatar: 'А', lastDonation: '2024-02-10', age: 32, gender: 'Ер' },
    { name: 'Марлен', blood: 'II+', city: 'Астана', phone: '+7 777 123 45 67', donations: 8, avatar: 'М', lastDonation: '2024-02-12', age: 29, gender: 'Ер' },
    { name: 'Гүлмира Ахметова', blood: 'I+', city: 'Астана', phone: '+7 703 456 78 90', donations: 15, avatar: 'Г', lastDonation: '2024-02-01', age: 35, gender: 'Әйел' },
    // Алматы
    { name: 'Бекзат Нұрланұлы', blood: 'I+', city: 'Алматы', phone: '+7 702 345 67 89', donations: 8, avatar: 'Б', lastDonation: '2024-02-05', age: 28, gender: 'Ер' },
    { name: 'Нұргүл Аманжолова', blood: 'II+', city: 'Алматы', phone: '+7 710 123 45 67', donations: 11, avatar: 'Н', lastDonation: '2024-02-09', age: 34, gender: 'Әйел' },
    // Шымкент
    { name: 'Гүлмира Ахметова', blood: 'I+', city: 'Шымкент', phone: '+7 703 456 78 90', donations: 15, avatar: 'Г', lastDonation: '2024-02-01', age: 35, gender: 'Әйел' },
    // Қарағанды
    { name: 'Дархан Смағұлов', blood: 'I+', city: 'Қарағанды', phone: '+7 704 567 89 01', donations: 6, avatar: 'Д', lastDonation: '2024-01-28', age: 25, gender: 'Ер' },
    // Ақтөбе
    { name: 'Еркежан Төлегенова', blood: 'I+', city: 'Ақтөбе', phone: '+7 705 678 90 12', donations: 9, avatar: 'Е', lastDonation: '2024-01-20', age: 29, gender: 'Әйел' },
    // Тараз
    { name: 'Жандос Оспанов', blood: 'I+', city: 'Тараз', phone: '+7 706 789 01 23', donations: 7, avatar: 'Ж', lastDonation: '2024-01-15', age: 31, gender: 'Ер' },
    // Павлодар
    { name: 'Зере Қайратқызы', blood: 'I-', city: 'Павлодар', phone: '+7 707 890 12 34', donations: 5, avatar: 'З', lastDonation: '2024-02-08', age: 27, gender: 'Әйел' },
    // Өскемен
    { name: 'Ильяс Мұратов', blood: 'I-', city: 'Өскемен', phone: '+7 708 901 23 45', donations: 4, avatar: 'И', lastDonation: '2024-02-03', age: 24, gender: 'Ер' },
    // Семей
    { name: 'Кәмшат Серікқызы', blood: 'I-', city: 'Семей', phone: '+7 709 012 34 56', donations: 3, avatar: 'К', lastDonation: '2024-01-30', age: 26, gender: 'Әйел' },
    // Атырау
    { name: 'Халима Жүнісова', blood: 'III+', city: 'Атырау', phone: '+7 718 901 23 45', donations: 7, avatar: 'Х', lastDonation: '2024-02-06', age: 32, gender: 'Әйел' },
    // Қостанай
    { name: 'Шыңғыс Нұрпейісов', blood: 'III+', city: 'Қостанай', phone: '+7 719 012 34 56', donations: 5, avatar: 'Ш', lastDonation: '2024-01-27', age: 29, gender: 'Ер' },
    // Қызылорда
    { name: 'Ырысгүл Базарбаева', blood: 'III+', city: 'Қызылорда', phone: '+7 720 123 45 67', donations: 6, avatar: 'Ы', lastDonation: '2024-01-19', age: 30, gender: 'Әйел' },
    // Ақтау
    { name: 'Әділет Қасымов', blood: 'III-', city: 'Ақтау', phone: '+7 721 234 56 78', donations: 3, avatar: 'Ә', lastDonation: '2024-02-09', age: 27, gender: 'Ер' },
    // Талдықорған
    { name: 'Бибігүл Төреханова', blood: 'III-', city: 'Талдықорған', phone: '+7 722 345 67 89', donations: 2, avatar: 'Б', lastDonation: '2024-01-31', age: 25, gender: 'Әйел' },
    // Орал
    { name: 'Ғалымжан Мұқанов', blood: 'III-', city: 'Орал', phone: '+7 723 456 78 90', donations: 4, avatar: 'Ғ', lastDonation: '2024-01-16', age: 34, gender: 'Ер' },
    // Петропавл
    { name: 'Дина Сүлейменова', blood: 'IV+', city: 'Петропавл', phone: '+7 724 567 89 01', donations: 2, avatar: 'Д', lastDonation: '2024-02-08', age: 28, gender: 'Әйел' },
    // Көкшетау
    { name: 'Ерболат Рысқұлов', blood: 'IV+', city: 'Көкшетау', phone: '+7 725 678 90 12', donations: 3, avatar: 'Е', lastDonation: '2024-01-29', age: 33, gender: 'Ер' },
    // Жезқазған
    { name: 'Жанар Айтбаева', blood: 'IV+', city: 'Жезқазған', phone: '+7 726 789 01 23', donations: 1, avatar: 'Ж', lastDonation: '2024-01-12', age: 26, gender: 'Әйел' },
    // Балқаш
    { name: 'Зарина Мұстафина', blood: 'IV-', city: 'Балқаш', phone: '+7 727 890 12 34', donations: 1, avatar: 'З', lastDonation: '2024-01-05', age: 29, gender: 'Әйел' },
    // Риддер
    { name: 'Ислам Бекжанов', blood: 'IV-', city: 'Риддер', phone: '+7 728 901 23 45', donations: 2, avatar: 'И', lastDonation: '2023-12-28', age: 31, gender: 'Ер' }
];

// ===== LOCALSTORAGE ФУНКЦИЯЛАРЫ =====
function saveDonorsToStorage() {
    localStorage.setItem('qandos_donors', JSON.stringify(donorsData));
    console.log('Donors saved to storage:', donorsData.length);
}

function loadDonorsFromStorage() {
    const stored = localStorage.getItem('qandos_donors');
    if (stored) {
        try {
            donorsData = JSON.parse(stored);
            console.log('Donors loaded from storage:', donorsData.length);
        } catch (e) {
            console.error('Error loading donors:', e);
        }
    }
}

// ===== ТІРКЕЛУ ФОРМАСЫ =====
function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const birthdate = document.getElementById('birthdate').value;
        const bloodType = document.getElementById('bloodType').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const weight = document.getElementById('weight').value;
        const gender = document.getElementById('gender').value;

        if (!fullname || !bloodType || !city || !phone || !email || !gender) {
            alert('Барлық міндетті өрістерді толтырыңыз!');
            return;
        }
        if (!document.getElementById('agree').checked) {
            alert('Келісім шартты қабылдауыңыз керек!');
            return;
        }

        // Жасты есептеу
        let age = 30;
        if (birthdate) {
            const birthDateObj = new Date(birthdate);
            const today = new Date();
            age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDiff = today.getMonth() - birthDateObj.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) age--;
        }

        const avatar = fullname.charAt(0).toUpperCase();

        const newDonor = {
            name: fullname,
            blood: bloodType,
            city: city,
            phone: phone,
            donations: 0,
            avatar: avatar,
            lastDonation: new Date().toISOString().split('T')[0],
            age: age,
            gender: gender,
            email: email,
            address: address,
            weight: weight
        };

        donorsData.push(newDonor);
        saveDonorsToStorage();

        alert(`Құттықтаймыз, ${fullname}! Сіз сәтті тіркелдіңіз. Донорлар тізіміне қосылдыңыз.`);
        window.location.href = 'donors.html';
    });

    // Телефон маскасы
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            if (x) {
                e.target.value = !x[2] ? x[1] : `+7 (${x[1]}) ${x[2]}-${x[3]}-${x[4]}`;
            }
        });
    }
}

// ===== ДОНОРЛАР ТІЗІМІН КӨРСЕТУ =====
function loadDonors(filteredDonors = null) {
    const donorsGrid = document.getElementById('donorsGrid');
    if (!donorsGrid) return;

    loadDonorsFromStorage();
    const donorsToShow = filteredDonors || donorsData;

    if (donorsToShow.length === 0) {
        donorsGrid.innerHTML = '<div style="text-align:center; padding:50px; grid-column:1/-1;">Донорлар жоқ</div>';
        return;
    }

    donorsGrid.innerHTML = '';

    // Қан топтарының санын жаңарту
    updateBloodCounts();

    donorsToShow.forEach((donor, index) => {
        if (!donor || !donor.name) return;

        const card = document.createElement('div');
        card.className = 'donor-card';
        card.style.animationDelay = `${index * 0.05}s`;

        let bloodColor = '#E63946'; // I
        if (donor.blood?.includes('II')) bloodColor = '#457B9D';
        if (donor.blood?.includes('III')) bloodColor = '#2A9D8F';
        if (donor.blood?.includes('IV')) bloodColor = '#E9C46A';

        let lastDonationText = 'Жаңа донор';
        if (donor.lastDonation && donor.lastDonation !== 'Жаңа донор') {
            try {
                lastDonationText = new Date(donor.lastDonation).toLocaleDateString('kk-KZ');
            } catch (e) {
                lastDonationText = donor.lastDonation;
            }
        }

        card.innerHTML = `
            <div class="donor-avatar" style="background: linear-gradient(135deg, ${bloodColor}, ${bloodColor}dd);">${donor.avatar || 'Д'}</div>
            <div class="donor-info">
                <h3 class="donor-name">${donor.name}</h3>
                <span class="donor-blood" style="background: ${bloodColor};">${donor.blood || 'I+'}</span>
                <ul class="donor-details">
                    <li><i class="fas fa-city"></i> ${donor.city || 'Белгісіз'}</li>
                    <li><i class="fas fa-phone"></i> ${donor.phone || 'Белгісіз'}</li>
                    <li><i class="fas fa-tint"></i> ${donor.donations || 0} рет тапсырған</li>
                    <li><i class="fas fa-calendar"></i> Соңғы тапсыру: ${lastDonationText}</li>
                    <li><i class="fas fa-venus-mars"></i> ${donor.gender || 'Белгісіз'}, ${donor.age || '?'} жас</li>
                </ul>
                <button class="btn btn-primary" style="margin-top:15px; width:100%;" onclick="requestDonor('${donor.name}', '${donor.blood}', '${donor.phone}')">
                    <i class="fas fa-hand-holding-heart"></i> Сұраныс жіберу
                </button>
            </div>
        `;
        donorsGrid.appendChild(card);
    });
}

// ===== ҚАН ТОПТАРЫНЫҢ САНЫН ЖАҢАРТУ =====
function updateBloodCounts() {
    const counts = {
        'I+': 0, 'I-': 0, 'II+': 0, 'II-': 0,
        'III+': 0, 'III-': 0, 'IV+': 0, 'IV-': 0
    };
    donorsData.forEach(d => { if (d.blood && counts.hasOwnProperty(d.blood)) counts[d.blood]++; });
    for (let type in counts) {
        const el = document.getElementById(`count-${type}`);
        if (el) el.textContent = counts[type];
    }
}

// ===== ФИЛЬТРЛЕР =====
function filterBlood(bloodType) {
    const bloodFilter = document.getElementById('bloodFilter');
    if (bloodFilter) {
        bloodFilter.value = bloodType;
        applyFilters();
    }
}

function applyFilters() {
    const bloodFilter = document.getElementById('bloodFilter');
    const cityFilter = document.getElementById('cityFilter');
    if (!bloodFilter || !cityFilter) return;

    const selectedBlood = bloodFilter.value;
    const selectedCity = cityFilter.value;

    loadDonorsFromStorage();
    let filtered = donorsData.filter(d => d && d.name);

    if (selectedBlood !== 'all') filtered = filtered.filter(d => d.blood === selectedBlood);
    if (selectedCity !== 'all') filtered = filtered.filter(d => d.city === selectedCity);

    loadDonors(filtered);
    updateFilterTags(selectedBlood, selectedCity);
}

function updateFilterTags(blood, city) {
    const tagBlood = document.getElementById('activeBloodTag');
    const tagCity = document.getElementById('activeCityTag');
    if (tagBlood) tagBlood.textContent = blood === 'all' ? 'Барлық қан топтары' : blood;
    if (tagCity) tagCity.textContent = city === 'all' ? 'Барлық қалалар' : city;
}

function initDonorFilters() {
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    if (searchBtn) searchBtn.addEventListener('click', applyFilters);
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            const bloodFilter = document.getElementById('bloodFilter');
            const cityFilter = document.getElementById('cityFilter');
            if (bloodFilter) bloodFilter.value = 'all';
            if (cityFilter) cityFilter.value = 'all';
            loadDonors();
            updateFilterTags('all', 'all');
        });
    }
}

function requestDonor(name, blood, phone) {
    if (confirm(`${name} (${blood}) донорына сұраныс жіберу?`)) {
        alert(`Сұраныс жіберілді! Донор жауап күтіңіз. Тел: ${phone}`);
    }
}

// ===== БАСҚА ФУНКЦИЯЛАР =====
function initNavbar() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }
}

function initCounters() {
    // (қажет болса, қосуға болады)
}

function initAnimations() {
    const elements = document.querySelectorAll('.animate-left, .animate-right, .animate-up, .slide-up, .animate-hero, .animate-float, .animate-pop');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
}

// ===== БЕТ ЖҮКТЕЛГЕНДЕ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    loadDonorsFromStorage();

    if (document.getElementById('donorsGrid')) {
        loadDonors();
        initDonorFilters();
        updateBloodCounts();
    }

    if (document.getElementById('registerForm')) {
        initRegisterForm();
    }

    initNavbar();
    initCounters();
    initAnimations();
});