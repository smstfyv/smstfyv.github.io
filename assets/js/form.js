/**
 * Consultation form — mailto submission with validation.
 * WhatsApp button opens mailto without validation.
 */
function initConsultationForm() {
    var form = document.getElementById('consultation-form');
    if (!form) return;

    var status = document.getElementById('form-status');
    var waBtn = document.getElementById('form-whatsapp-btn');
    var submitBtn = form.querySelector('[type="submit"]');
    var RECIPIENT = form.getAttribute('data-form-recipient') || 'info@emsargroup.az';

    var MSG = {
        az: {
            error: 'Bütün məcburi sahələri doldurun.',
            success: 'Email tətbiqi açıldı. Mesajı tamamlayib göndərin — 1 iş günü ərzində cavab veririk.'
        },
        en: {
            error: 'Please fill in all required fields.',
            success: 'Email app opened. Complete and send the message — we reply within 1 business day.'
        },
        ru: {
            error: 'Заполните все обязательные поля.',
            success: 'Приложение электронной почты открыто. Допишите и отправьте сообщение — ответим в течение 1 рабочего дня.'
        }
    };

    function getLang() {
        try { return localStorage.getItem('emsar.lang') || 'az'; } catch (e) { return 'az'; }
    }

    function showStatus(type) {
        if (!status) return;
        var lang = getLang();
        var msgs = MSG[lang] || MSG.az;
        status.textContent = msgs[type] || '';
        status.className = 'form-status form-status-' + (type === 'error' ? 'error' : 'success');
    }

    function clearStatus() {
        if (!status) return;
        status.textContent = '';
        status.className = 'form-status';
    }

    function collect() {
        var data = new FormData(form);
        return {
            name: (data.get('name') || '').toString().trim(),
            email: (data.get('email') || '').toString().trim(),
            company: (data.get('company') || '').toString().trim(),
            service: (data.get('service') || '').toString().trim(),
            message: (data.get('message') || '').toString().trim()
        };
    }

    function buildBody(d) {
        var lines = [
            'Yeni konsultasiya sorğusu — emsargroup.az',
            '',
            'Ad: ' + d.name,
            'Email: ' + d.email
        ];
        if (d.company) lines.push('Şirkət: ' + d.company);
        if (d.service) lines.push('Xidmət: ' + d.service);
        if (d.message) lines.push('', 'Layihə haqqında:', d.message);
        return lines.join('\n');
    }

    function buildSubject(d) {
        return 'Konsultasiya sorğusu — ' + d.name + (d.company ? ' (' + d.company + ')' : '');
    }

    function openMail(d) {
        var subject = encodeURIComponent(buildSubject(d));
        var body = encodeURIComponent(buildBody(d));
        window.location.href = 'mailto:' + RECIPIENT + '?subject=' + subject + '&body=' + body;
    }

    function validate() {
        var d = collect();
        return d.name && d.email && d.company && d.service;
    }

    // Submit button — validates first
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearStatus();
        if (!validate()) {
            showStatus('error');
            return;
        }
        var d = collect();
        openMail(d);
        showStatus('success');
    });

    // WhatsApp button — no validation, opens mailto directly
    if (waBtn) {
        waBtn.addEventListener('click', function () {
            clearStatus();
            var d = collect();
            openMail(d);
            showStatus('success');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConsultationForm);
} else {
    initConsultationForm();
}
