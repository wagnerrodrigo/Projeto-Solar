(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  var links = nav.querySelectorAll('.header__link, .btn');

  function closeMenu() {
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }

  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  var form = document.getElementById('form-simulacao');
  var err = document.getElementById('sim-err');
  var consumo = document.getElementById('consumo');
  var ufEl = document.getElementById('uf');
  var result = document.getElementById('sim-result');
  var ref = document.getElementById('sim-ref');

  var ESTADOS = {
    AC: { tarifa: 0.71, irradiacao: 4.8 },
    AL: { tarifa: 0.68, irradiacao: 5.6 },
    AP: { tarifa: 0.65, irradiacao: 5.0 },
    AM: { tarifa: 0.72, irradiacao: 4.6 },
    BA: { tarifa: 0.67, irradiacao: 5.7 },
    CE: { tarifa: 0.66, irradiacao: 5.8 },
    DF: { tarifa: 0.65, irradiacao: 5.2 },
    ES: { tarifa: 0.68, irradiacao: 5.3 },
    GO: { tarifa: 0.64, irradiacao: 5.4 },
    MA: { tarifa: 0.69, irradiacao: 5.5 },
    MT: { tarifa: 0.66, irradiacao: 5.3 },
    MS: { tarifa: 0.64, irradiacao: 5.2 },
    MG: { tarifa: 0.67, irradiacao: 5.5 },
    PA: { tarifa: 0.71, irradiacao: 5.0 },
    PB: { tarifa: 0.67, irradiacao: 5.7 },
    PR: { tarifa: 0.63, irradiacao: 5.1 },
    PE: { tarifa: 0.68, irradiacao: 5.6 },
    PI: { tarifa: 0.70, irradiacao: 5.8 },
    RJ: { tarifa: 0.71, irradiacao: 5.0 },
    RN: { tarifa: 0.69, irradiacao: 5.7 },
    RS: { tarifa: 0.64, irradiacao: 4.9 },
    RO: { tarifa: 0.69, irradiacao: 4.8 },
    RR: { tarifa: 0.66, irradiacao: 5.1 },
    SC: { tarifa: 0.63, irradiacao: 4.8 },
    SP: { tarifa: 0.68, irradiacao: 5.0 },
    SE: { tarifa: 0.68, irradiacao: 5.6 },
    TO: { tarifa: 0.66, irradiacao: 5.3 }
  };

  var ESTADOS_NOMES = {
    AC: 'Acre', AL: 'Alagoas', AP: 'Amapá', AM: 'Amazonas', BA: 'Bahia',
    CE: 'Ceará', DF: 'Distrito Federal', ES: 'Espírito Santo', GO: 'Goiás',
    MA: 'Maranhão', MT: 'Mato Grosso', MS: 'Mato Grosso do Sul', MG: 'Minas Gerais',
    PA: 'Pará', PB: 'Paraíba', PR: 'Paraná', PE: 'Pernambuco', PI: 'Piauí',
    RJ: 'Rio de Janeiro', RN: 'Rio Grande do Norte', RS: 'Rio Grande do Sul',
    RO: 'Rondônia', RR: 'Roraima', SC: 'Santa Catarina', SP: 'São Paulo',
    SE: 'Sergipe', TO: 'Tocantins'
  };

  var CUSTO_KWP = 4500;
  var ABATIMENTO = 0.95;
  var FATOR_CO2 = 0.3;
  var WHATSAPP_NUMERO = '5532984327163';

  function formatBRL(v) {
    return 'R$ ' + v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function calcular(consumoKwh, uf) {
    var e = ESTADOS[uf];
    var kWp = consumoKwh / (e.irradiacao * 30 * 0.75);
    var economia = consumoKwh * e.tarifa * ABATIMENTO;
    var investimento = kWp * CUSTO_KWP;
    var payback = investimento / (economia * 12);
    var co2 = kWp * FATOR_CO2;

    return {
      sistema: kWp.toFixed(1) + ' kWp',
      economia: formatBRL(economia),
      investimento: formatBRL(investimento),
      payback: payback.toFixed(1) + ' anos',
      co2: co2.toFixed(1) + ' t',
      kWp: kWp,
      economiaVal: economia,
      uf: uf,
      consumo: consumoKwh
    };
  }

  function renderResultado(r) {
    document.getElementById('res-sistema').textContent = r.sistema;
    document.getElementById('res-economia').textContent = r.economia;
    document.getElementById('res-investimento').textContent = r.investimento;
    document.getElementById('res-payback').textContent = r.payback;
    document.getElementById('res-co2').textContent = r.co2;

    if (ref) ref.classList.add('is-hidden');
    result.style.display = 'grid';

    var waBtn = document.getElementById('sim-whatsapp');
    var ufNome = ESTADOS_NOMES[r.uf] || r.uf;
    var texto = 'Simula\u00e7\u00e3o de energia solar \u2014 Projeto Solar\n\n' +
      'Consumo: ' + r.consumo + ' kWh/m\u00eas\n' +
      'Estado: ' + ufNome + '\n' +
      'Tamanho do sistema: ' + r.sistema + '\n' +
      'Economia mensal: ' + r.economia + '\n' +
      'Investimento estimado: ' + r.investimento + '\n' +
      'Payback: ' + r.payback + '\n' +
      'CO\u2082 evitado/ano: ' + r.co2;
waBtn.href = 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(texto);
    result.style.display = 'grid';
  }

  consumo.addEventListener('input', function () {
    if (consumo.classList.contains('input--error')) {
      consumo.classList.remove('input--error');
      err.style.display = 'none';
    }
  });

  ufEl.addEventListener('change', function () {
    if (ufEl.classList.contains('input--error')) {
      ufEl.classList.remove('input--error');
      err.style.display = 'none';
    }
  });

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    var v = (consumo.value || '').trim().replace(/\D/g, '');
    var uf = ufEl.value;
    var hasError = false;

    if (!v || Number(v) <= 0) {
      consumo.classList.add('input--error');
      hasError = true;
    }
    if (!uf) {
      ufEl.classList.add('input--error');
      hasError = true;
    }
    if (hasError) {
      err.style.display = 'block';
      if (!v || Number(v) <= 0) consumo.focus();
      else ufEl.focus();
      return;
    }

    err.style.display = 'none';
    consumo.classList.remove('input--error');
    ufEl.classList.remove('input--error');

    var consumoKwh = Number(v);
    var res = calcular(consumoKwh, uf);

    var btn = form.querySelector('[data-od-id="btn-simular"]');
    btn.textContent = 'Calculando…';
    btn.disabled = true;
    btn.style.opacity = '0.72';

    setTimeout(function () {
      btn.disabled = false;
      btn.style.opacity = '1';
      btn.textContent = 'Simular economia';
      renderResultado(res);
    }, 800);
  });

  var contactForm = document.getElementById('form-contato');
  var contactErr = document.getElementById('contact-err');

  function limparErroContato(field) {
    field.addEventListener('input', function () {
      field.classList.remove('input--error');
      contactErr.style.display = 'none';
    });
  }

  ['nome', 'whatsapp', 'mensagem'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) limparErroContato(el);
  });

  contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();

    var nome = document.getElementById('nome');
    var whatsapp = document.getElementById('whatsapp');
    var mensagem = document.getElementById('mensagem');

    var hasError = false;
    [nome, whatsapp, mensagem].forEach(function (el) {
      if (!el.value || !el.value.trim()) {
        el.classList.add('input--error');
        hasError = true;
      } else {
        el.classList.remove('input--error');
      }
    });

    if (hasError) {
      contactErr.style.display = 'block';
      return;
    }

    contactErr.style.display = 'none';

    var texto = 'Novo contato — Projeto Solar\n\n' +
      'Nome: ' + nome.value.trim() + '\n' +
      'WhatsApp: ' + whatsapp.value.trim() + '\n' +
      'Mensagem: ' + mensagem.value.trim();

    var url = 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(texto);
    window.open(url, '_blank');
  });
})();