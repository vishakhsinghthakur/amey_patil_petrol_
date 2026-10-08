(() => {
  const app = document.querySelector('#app');

  const copy = {
    en: {
      pumpReady: 'Pump ready', help: 'Need help? Press the assistance button',
      selectLanguage: 'Choose Language / भाषा चुनें', languageSub: 'Select the language you would like to continue in.',
      selectFuel: 'Select Fuel', fuelSub: 'Choose the fuel for your vehicle.',
      fillBy: 'How would you like to fill?', fillSub: 'Choose an amount, litres, or fill the tank completely.',
      amount: 'Amount / ₹', litres: 'Litres / L', fullTank: 'Full Tank',
      enterAmount: 'Enter Amount', enterLitres: 'Enter Litres', chooseAmount: 'Choose an amount', customAmount: 'Enter custom amount',
      estimatedFuel: 'You will receive', estimatedCost: 'Estimated amount', rate: 'Fuel price',
      payment: 'Mode of Transaction', paymentSub: 'Choose how you would like to pay.',
      upi: 'UPI', card: 'Card Transaction', scanPay: 'Scan to Pay', scanSub: 'Use any UPI app to scan this QR code.',
      insertCard: 'Tap or insert your card', cardSub: 'Follow the instructions on the card terminal beside the screen.',
      timeRemaining: 'Time Remaining ·', simulateUpi: 'Simulate payment received', simulateCard: 'Simulate card approved',
      verifying: 'Verifying payment…', paymentVerified: 'Payment Verified', paymentComplete: 'Your payment was successful.',
      getSms: 'Get SMS', printBill: 'Print Bill', tutorial: 'Tutorial', tutorialSub: 'A quick guide before you begin.',
      chooseNozzle: 'Choose the nozzle', nozzleSub: 'Take the highlighted nozzle from the pump.',
      petrolNozzle: 'PETROL nozzle', dieselNozzle: 'DIESEL nozzle',
      nozzleLifted: 'Nozzle lifted',
      fuelling: 'Fuelling in progress', placeNozzle: 'Place the nozzle in your tank and press the clutch.',
      complete: 'Fuelling complete', replaceNozzle: 'Please place the nozzle back on the pump.', done: 'Done', restart: 'Start another transaction',
      receiptChoice: 'Would you like a receipt?', receiptChoiceSub: 'Your fuel has been dispensed successfully.',
      getReceipt: 'Print receipt', enterMobile: 'Enter mobile number', mobileHint: '10-digit mobile number',
      sendReceipt: 'Send receipt', receiptSent: 'Receipt sent', receiptSentTo: 'We sent a receipt link to',
      receiptPrinting: 'Receipt printing', receiptPrintingSub: 'Please collect the receipt from the slot below.', noReceipt: 'Skip',
      back: 'Back', next: 'Next', skip: 'Skip tutorial', continue: 'Continue', step: 'Step'
    },
    hi: {
      pumpReady: 'पंप तैयार है', help: 'मदद चाहिए? सहायता बटन दबाएँ',
      selectLanguage: 'भाषा चुनें / Choose Language', languageSub: 'आगे बढ़ने के लिए अपनी भाषा चुनें।',
      selectFuel: 'ईंधन चुनें', fuelSub: 'अपने वाहन के लिए ईंधन चुनें।',
      fillBy: 'आप कितना भरना चाहते हैं?', fillSub: 'राशि, लीटर या पूरा टैंक चुनें।',
      amount: 'राशि / ₹', litres: 'लीटर / L', fullTank: 'पूरा टैंक',
      enterAmount: 'राशि दर्ज करें', enterLitres: 'लीटर दर्ज करें', chooseAmount: 'राशि चुनें', customAmount: 'अन्य राशि दर्ज करें',
      estimatedFuel: 'आपको मिलेगा', estimatedCost: 'अनुमानित राशि', rate: 'ईंधन की कीमत',
      payment: 'भुगतान का तरीका', paymentSub: 'भुगतान करने का तरीका चुनें।',
      upi: 'यूपीआई', card: 'कार्ड भुगतान', scanPay: 'स्कैन करके भुगतान करें', scanSub: 'किसी भी UPI ऐप से QR कोड स्कैन करें।',
      insertCard: 'कार्ड टैप या डालें', cardSub: 'स्क्रीन के पास कार्ड मशीन के निर्देशों का पालन करें।',
      timeRemaining: 'शेष समय ·', simulateUpi: 'भुगतान प्राप्त दिखाएँ', simulateCard: 'कार्ड भुगतान स्वीकार करें',
      verifying: 'भुगतान जाँचा जा रहा है…', paymentVerified: 'भुगतान सफल', paymentComplete: 'आपका भुगतान सफल रहा।',
      getSms: 'SMS पाएँ', printBill: 'बिल प्रिंट करें', tutorial: 'ट्यूटोरियल', tutorialSub: 'शुरू करने से पहले छोटा सा निर्देश।',
      chooseNozzle: 'नोज़ल चुनें', nozzleSub: 'पंप से चमकता हुआ नोज़ल उठाएँ।',
      petrolNozzle: 'पेट्रोल नोज़ल', dieselNozzle: 'डीज़ल नोज़ल',
      nozzleLifted: 'नोज़ल उठा लिया',
      fuelling: 'ईंधन भरा जा रहा है', placeNozzle: 'नोज़ल टैंक में रखें और लीवर दबाएँ।',
      complete: 'ईंधन भर गया', replaceNozzle: 'कृपया नोज़ल वापस पंप पर रखें।', done: 'पूरा हुआ', restart: 'नया लेन-देन',
      receiptChoice: 'क्या आपको रसीद चाहिए?', receiptChoiceSub: 'आपका ईंधन सफलतापूर्वक भर दिया गया है।',
      getReceipt: 'रसीद प्रिंट करें', enterMobile: 'मोबाइल नंबर दर्ज करें', mobileHint: '१० अंकों का मोबाइल नंबर',
      sendReceipt: 'रसीद भेजें', receiptSent: 'रसीद भेज दी गई', receiptSentTo: 'रसीद का लिंक इस नंबर पर भेजा गया',
      receiptPrinting: 'रसीद प्रिंट हो रही है', receiptPrintingSub: 'कृपया नीचे दिए गए स्लॉट से रसीद लें।', noReceipt: 'छोड़ें',
      back: 'पीछे', next: 'आगे', skip: 'ट्यूटोरियल छोड़ें', continue: 'जारी रखें', step: 'चरण'
    }
  };

  const steps = ['language','fuel','fill','value','payment','pay','verified','tutorial','nozzle','fuelling','complete','phone','receiptSent'];
  const state = { step: 'language', lang: null, fuel: null, fill: null, value: '', payment: null, tutorialIndex: 0, currentAmount: 0, phone: '', receiptMode: 'sms', timer: null };
  const t = key => copy[state.lang || 'en'][key] || copy.en[key] || key;
  const fuelLabel = () => state.fuel === 'diesel' ? (state.lang === 'hi' ? 'डीज़ल' : 'Diesel') : (state.lang === 'hi' ? 'पेट्रोल' : 'Petrol');
  const paymentLabel = () => state.payment === 'card' ? t('card') : t('upi');
  const unitPrice = () => state.fuel === 'diesel' ? 89 : 97;
  const targetAmount = () => {
    if (state.fill === 'amount') return Number(state.value || 0);
    if (state.fill === 'litres') return Math.round(Number(state.value || 0) * unitPrice());
    return 3500;
  };
  const targetLitres = () => state.fill === 'litres' ? Number(state.value || 0) : targetAmount() / unitPrice();
  const localDigits = value => state.lang === 'hi' ? String(value).replace(/\d/g, d => '०१२३४५६७८९'[Number(d)]) : String(value);
  const currency = n => `₹${localDigits(Math.round(Number(n || 0)).toLocaleString('en-IN'))}`;
  const litres = n => `${localDigits(Number(n || 0).toFixed(2))} ${state.lang === 'hi' ? 'ली' : 'L'}`;
  const compactLitres = n => `${localDigits(Number(n || 0).toFixed(1))}${state.lang === 'hi' ? ' ली' : 'L'}`;
  const transactionSummary = ({payment = false} = {}) => {
    const parts = [];
    if (state.fuel) parts.push(fuelLabel());
    if (state.fill) {
      if (state.fill === 'full') parts.push(t('fullTank'));
      else if (Number(state.value) > 0) parts.push(`${currency(targetAmount())} ≈ ${compactLitres(targetLitres())}`);
    }
    if (payment && state.payment) parts.push(paymentLabel());
    return parts.join(' · ');
  };
  const head = (title, meta = '') => `<div class="screen-head"><h1>${title}</h1>${meta ? `<p class="selection-summary">${meta}</p>` : ''}</div>`;
  const actions = (nextDisabled = false, nextLabel = t('next')) => `<div class="action-row">${state.step === 'language' ? '' : `<button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button>`}<button class="primary-button" data-action="next" ${nextDisabled ? 'disabled' : ''}>${nextLabel}</button></div>`;

  function render() {
    clearInterval(state.timer);
    document.documentElement.lang = state.lang === 'hi' ? 'hi' : 'en';
    const views = { language, fuel, fill, value, payment, pay, verified, tutorial, nozzle, fuelling, complete, phone, receiptSent };
    app.innerHTML = `<div class="screen ${state.step}-screen">${views[state.step]()}</div>`;
    app.focus({preventScroll:true});
    if (state.step === 'pay') runPaymentTimer();
    if (state.step === 'fuelling') runFuelling();
  }

  function language() {
    return `${head(t('selectLanguage'))}<img class="landing-illustration" src="fuel-kiosk-illustration.png" alt="${state.lang === 'hi' ? 'हरे पेट्रोल और नीले डीज़ल नोज़ल वाला ईंधन पंप' : 'Fuel pump with a green petrol nozzle and blue diesel nozzle'}"><div class="choices language-grid">
      <button class="choice-button ${state.lang === 'en' ? 'selected' : ''}" data-select="lang" data-value="en"><strong>English</strong></button>
      <button class="choice-button ${state.lang === 'hi' ? 'selected' : ''}" data-select="lang" data-value="hi"><strong>हिन्दी</strong></button>
    </div>`;
  }

  function fuel() {
    return `${head(t('selectFuel'))}<div class="choices">
      <button class="choice-button petrol ${state.fuel === 'petrol' ? 'selected' : ''}" data-select="fuel" data-value="petrol"><span class="fuel-swatch" aria-hidden="true"></span><strong>${state.lang === 'hi' ? 'पेट्रोल' : 'Petrol'}</strong></button>
      <button class="choice-button diesel ${state.fuel === 'diesel' ? 'selected' : ''}" data-select="fuel" data-value="diesel"><span class="fuel-swatch" aria-hidden="true"></span><strong>${state.lang === 'hi' ? 'डीज़ल' : 'Diesel'}</strong></button>
    </div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button></div>`;
  }

  function fill() {
    return `${head(t('fillBy'), transactionSummary())}<div class="choices">
      ${[['amount',t('amount')],['litres',t('litres')],['full',t('fullTank')]].map(([v,label]) => `<button class="choice-button ${state.fill === v ? 'selected' : ''}" data-select="fill" data-value="${v}">${label}</button>`).join('')}
    </div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button></div>`;
  }

  function value() {
    if (state.fill === 'full') return payment();
    if (!state.value) {
      const presets = state.fill === 'amount' ? [100,200,500,1000,2000,3000] : [1,2,5,10,20,30];
      const label = state.fill === 'amount' ? t('chooseAmount') : t('enterLitres');
      return `${head(label, transactionSummary())}<div class="rate-line">${t('rate')} · ${currency(unitPrice())}/${state.lang === 'hi' ? 'ली' : 'L'}</div><div class="choices amount-presets">
        ${presets.map(v => {
          const amountValue = state.fill === 'amount' ? v : Math.round(v * unitPrice());
          const litreValue = state.fill === 'litres' ? v : v / unitPrice();
          return `<button class="choice-button preset-relation" data-action="preset" data-value="${v}"><strong>${state.fill === 'amount' ? currency(v) : litres(v)}</strong><small>≈ ${state.fill === 'amount' ? compactLitres(litreValue) : currency(amountValue)}</small></button>`;
        }).join('')}
        <button class="choice-button lime" data-action="custom">${t('customAmount')}</button>
      </div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button></div>`;
    }
    const displayValue = state.fill === 'amount' ? currency(state.value) : `${localDigits(state.value || '0')} ${state.lang === 'hi' ? 'ली' : 'L'}`;
    const relation = `≈ ${state.fill === 'amount' ? compactLitres(targetLitres()) : currency(targetAmount())}`;
    return `${head(state.fill === 'amount' ? t('enterAmount') : t('enterLitres'), transactionSummary())}<div class="rate-line">${t('rate')} · ${currency(unitPrice())}/${state.lang === 'hi' ? 'ली' : 'L'}</div><div class="display"><strong>${displayValue}</strong><span>${relation}</span></div>
      <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(v => `<button class="key" data-action="key" data-value="${v}">${localDigits(v)}</button>`).join('')}<button class="key erase" data-action="erase" aria-label="${state.lang === 'hi' ? 'मिटाएँ' : 'Delete'}">⌫</button><button class="key zero" data-action="key" data-value="0">${localDigits(0)}</button></div>
      ${actions(Number(state.value) <= 0 || (state.fill === 'amount' && Number(state.value) < 50),t('continue'))}`;
  }

  function payment() {
    return `${head(t('payment'), transactionSummary())}<div class="choices">
      <button class="choice-button ${state.payment === 'upi' ? 'selected' : ''}" data-select="payment" data-value="upi"><strong>${t('upi')}</strong></button>
      <button class="choice-button ${state.payment === 'card' ? 'selected' : ''}" data-select="payment" data-value="card"><strong>${t('card')}</strong></button>
    </div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button></div>`;
  }

  function qrMarkup() {
    let cells = '';
    for (let i = 0; i < 121; i++) {
      const x = i % 11, y = Math.floor(i / 11);
      const finder = ((x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7));
      const on = finder ? (x % 2 === 0 || y % 2 === 0) : ((i * 7 + x * 3 + y) % 5 < 2);
      cells += `<i class="${on ? 'on' : ''}"></i>`;
    }
    return `<div class="qr-code" aria-label="Demo QR code">${cells}</div>`;
  }

  function pay() {
    const amount = currency(targetAmount());
    if (state.payment === 'upi') {
      return `${head(t('scanPay'), transactionSummary({payment:true}))}<div class="scan-layout"><div class="timer-line scan-timer"><span>${t('timeRemaining')} <strong id="timeLeft">${localDigits('4:59')}</strong></span><span class="timer-track"><span class="timer-fill" id="timerFill"></span></span></div><div class="qr-panel">${qrMarkup()}</div><div class="scan-total">${fuelLabel()} · ${amount} ≈ ${compactLitres(targetLitres())}</div><button class="primary-button dark" data-action="simulate-payment">${t('simulateUpi')}</button><p class="subhead" id="paymentStatus"></p></div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button></div>`;
    }
    return `${head(t('insertCard'), transactionSummary({payment:true}))}<div class="card-panel payment-card"><div class="card-icon pulse"></div><h2>${fuelLabel()} · ${amount} ≈ ${compactLitres(targetLitres())}</h2><button class="primary-button dark" data-action="simulate-payment">${t('simulateCard')}</button><p class="subhead" id="paymentStatus"></p></div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button></div>`;
  }

  function verified() {
    return `<div class="success-screen"><div class="success-badge"><span>✓</span></div><h1>${t('paymentVerified')}</h1><p class="verified-meta">${fuelLabel()} · ${currency(targetAmount())} ≈ ${compactLitres(targetLitres())}</p><button class="primary-button continue-button" data-action="next">${t('continue')}</button></div>`;
  }

  function tutorial() {
    const tutorialSlides = state.lang === 'hi' ? [
      ['⛽','चमकता हुआ नोज़ल चुनें','सही नोज़ल पंप पर चमकेगा।'],
      ['↘','नोज़ल पूरा अंदर डालें','इसे वाहन के टैंक में सुरक्षित रूप से लगाएँ।'],
      ['✋','लीवर दबाकर रखें','चुनी हुई मात्रा पर ईंधन अपने आप रुक जाएगा।']
    ] : [
      ['⛽','Choose the highlighted nozzle','The correct nozzle will blink on the pump.'],
      ['↘','Insert the nozzle fully','Push it into your vehicle tank until secure.'],
      ['✋','Press and hold the lever','Fuelling stops automatically at your selected value.']
    ];
    const [icon,title,body] = tutorialSlides[state.tutorialIndex];
    return `${head(t('tutorial'), transactionSummary({payment:true}))}<div class="tutorial-panel" role="region" aria-roledescription="carousel" aria-label="${t('tutorial')}"><div class="tutorial-visual"><div><div class="pump-symbol">${icon}</div><strong>${title}</strong></div></div><div class="tutorial-copy"><strong>${localDigits(state.tutorialIndex + 1)}. ${title}</strong><p>${body}</p><div class="tutorial-dots">${tutorialSlides.map((_,i)=>`<i class="${i===state.tutorialIndex?'active':''}"></i>`).join('')}</div></div></div><div class="action-row"><button class="link-button" data-action="skip">${t('skip')}</button><button class="primary-button" data-action="tutorial-next">${state.tutorialIndex === 2 ? t('continue') : t('next')}</button></div>`;
  }

  function nozzle() {
    return `${head(t('chooseNozzle'), transactionSummary({payment:true}))}<div class="nozzle-grid"><div class="nozzle petrol-nozzle ${state.fuel === 'petrol' ? 'active' : ''}"><div><span class="nozzle-icon">⛽</span><strong>${t('petrolNozzle')}</strong></div></div><div class="nozzle diesel-nozzle ${state.fuel === 'diesel' ? 'active' : ''}"><div><span class="nozzle-icon">⛽</span><strong>${t('dieselNozzle')}</strong></div></div></div><div class="action-row"><button class="primary-button dark" data-action="next">${t('nozzleLifted')}</button></div>`;
  }

  function fuelling() {
    return `${head(t('fuelling'), transactionSummary({payment:true}))}<div class="fuel-panel ${state.fuel}"><div class="live-amount" id="liveAmount">${currency(0)}</div><div class="live-litres" id="liveLitres">${litres(0)}</div><div class="progress-shell"><div class="progress-bar" id="fuelBar" style="--progress:0%"></div></div><p class="instruction">${t('placeNozzle')}</p></div>`;
  }

  function complete() {
    return `<div class="complete-screen"><div class="complete-card"><div class="check-circle">✓</div><h1>${t('complete')}</h1><p class="subhead">${t('replaceNozzle')}</p><div class="final-amount">${currency(targetAmount())}</div><strong class="compact-meta">${fuelLabel()} · ${compactLitres(targetLitres())}</strong><div class="receipt-choice"><h2>${t('receiptChoice')}</h2><p>${t('receiptChoiceSub')}</p><button class="primary-button dark" data-action="get-sms">${t('getSms')}</button><button class="primary-button receipt-button" data-action="print-receipt">${t('getReceipt')}</button><button class="link-button" data-action="restart">${t('noReceipt')}</button></div></div></div>`;
  }

  function phone() {
    const displayPhone = localDigits(state.phone.padEnd(10,'•').replace(/(.{5})/,'$1 '));
    return `${head(t('enterMobile'), transactionSummary({payment:true}))}<div class="phone-panel"><div class="phone-display"><span>+${localDigits(91)}</span><strong>${displayPhone}</strong></div><p class="phone-hint">${t('mobileHint')}</p><div class="keypad phone-keypad">${[1,2,3,4,5,6,7,8,9].map(v => `<button class="key" data-action="phone-key" data-value="${v}">${localDigits(v)}</button>`).join('')}<button class="key erase" data-action="phone-erase" aria-label="${state.lang === 'hi' ? 'मिटाएँ' : 'Delete'}">⌫</button><button class="key zero" data-action="phone-key" data-value="0">${localDigits(0)}</button></div><div class="action-row"><button class="nav-button" data-action="back" aria-label="${t('back')}">‹</button><button class="primary-button" data-action="send-receipt" ${state.phone.length !== 10 ? 'disabled' : ''}>${t('sendReceipt')}</button></div></div>`;
  }

  function receiptSent() {
    const sentBySms = state.receiptMode === 'sms';
    const masked = state.phone ? `+${localDigits(91)} ${localDigits(state.phone.slice(0,2))}••• ${localDigits(state.phone.slice(-5))}` : '';
    return `<div class="receipt-success"><div class="success-badge"><span>✓</span></div><h1>${sentBySms ? t('receiptSent') : t('receiptPrinting')}</h1><p>${sentBySms ? `${t('receiptSentTo')}<br><strong>${masked}</strong>` : t('receiptPrintingSub')}</p><div class="receipt-summary">${transactionSummary({payment:true})}</div><button class="primary-button" data-action="restart">${t('done')}</button></div>`;
  }

  function next() {
    const map = { language:'fuel', fuel:'fill', fill: state.fill === 'full' ? 'payment' : 'value', value:'payment', payment:'pay', verified:'tutorial', nozzle:'fuelling' };
    if (map[state.step]) { state.step = map[state.step]; render(); }
  }

  function back() {
    const map = { fuel:'language', fill:'fuel', value:'fill', payment: state.fill === 'full' ? 'fill' : 'value', pay:'payment', tutorial:'verified', nozzle:'tutorial', phone:'complete' };
    if (map[state.step]) { state.step = map[state.step]; if (state.step === 'value' && state.value === '__custom') state.value=''; render(); }
  }

  function runPaymentTimer() {
    if (state.payment !== 'upi') return;
    let seconds = 299;
    state.timer = setInterval(() => {
      seconds--;
      const label = document.querySelector('#timeLeft');
      const fill = document.querySelector('#timerFill');
      if (label) label.textContent = localDigits(`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`);
      if (fill) fill.style.width = `${seconds/299*100}%`;
    },1000);
  }

  function verifyPayment() {
    const status = document.querySelector('#paymentStatus');
    if (status) status.textContent = t('verifying');
    document.querySelectorAll('[data-action="simulate-payment"]').forEach(b => b.disabled = true);
    setTimeout(() => { state.step = 'verified'; render(); }, 1100);
  }

function runFuelling() {
  const total = targetAmount();
  const totalLitres = targetLitres();
  const start = performance.now();
  const duration = 8000;
    function tick(now) {
      if (state.step !== 'fuelling') return;
      const pct = Math.min(1,(now-start)/duration);
      const eased = 1 - Math.pow(1-pct,3);
    const a = total * eased, l = totalLitres * eased;
      const amountEl = document.querySelector('#liveAmount');
      const litreEl = document.querySelector('#liveLitres');
      const bar = document.querySelector('#fuelBar');
      if (amountEl) amountEl.textContent = currency(a);
      if (litreEl) litreEl.textContent = litres(l);
      if (bar) bar.style.setProperty('--progress',`${eased*100}%`);
      if (pct < 1) requestAnimationFrame(tick);
    else setTimeout(() => { if (state.step === 'fuelling') { state.step='complete'; render(); } },1000);
    }
    requestAnimationFrame(tick);
  }

  function toast(message) {
    document.querySelector('.toast')?.remove();
    const el = document.createElement('div'); el.className='toast'; el.textContent=message; document.body.append(el);
    setTimeout(()=>el.remove(),2400);
  }

  function restart() {
    Object.assign(state,{step:'language',lang:null,fuel:null,fill:null,value:'',payment:null,tutorialIndex:0,currentAmount:0,phone:'',receiptMode:'sms'});
    render();
  }

  document.addEventListener('click', e => {
    const button = e.target.closest('button');
    if (!button) return;
    if (button.dataset.select) {
      const kind = button.dataset.select;
      state[kind] = button.dataset.value;
      if (kind === 'lang') {
        Object.assign(state,{fuel:null,fill:null,value:'',payment:null,step:'fuel'});
      }
      if (kind === 'fuel') {
        Object.assign(state,{fill:null,value:'',payment:null,step:'fill'});
      }
      if (kind === 'fill') {
        Object.assign(state,{value:'',payment:null,step:state.fill === 'full' ? 'payment' : 'value'});
      }
      if (kind === 'payment') state.step = 'pay';
      render(); return;
    }
    const action = button.dataset.action;
    if (action === 'next') next();
    if (action === 'back') back();
    if (action === 'preset') { state.value=button.dataset.value; state.payment=null; state.step='payment'; render(); }
    if (action === 'custom') { state.value='0'; render(); }
    if (action === 'key') { state.value = state.value === '0' ? button.dataset.value : `${state.value}${button.dataset.value}`.slice(0,5); render(); }
    if (action === 'erase') { state.value = state.value.slice(0,-1) || '0'; render(); }
    if (action === 'get-sms') { state.phone=''; state.receiptMode='sms'; state.step='phone'; render(); }
    if (action === 'phone-key' && state.phone.length < 10) { state.phone += button.dataset.value; render(); }
    if (action === 'phone-erase') { state.phone = state.phone.slice(0,-1); render(); }
    if (action === 'send-receipt') { state.receiptMode='sms'; state.step='receiptSent'; render(); }
    if (action === 'print-receipt') { state.receiptMode='print'; state.step='receiptSent'; render(); }
    if (action === 'simulate-payment') verifyPayment();
    if (action === 'sms') toast(state.lang === 'hi' ? 'रसीद SMS भेज दिया गया' : 'Receipt sent by SMS');
    if (action === 'print') toast(state.lang === 'hi' ? 'बिल प्रिंट हो रहा है' : 'Printing receipt');
    if (action === 'tutorial-next') { if (state.tutorialIndex < 2) { state.tutorialIndex++; render(); } else { state.step='nozzle'; render(); } }
    if (action === 'skip') { state.step='nozzle'; render(); }
    if (action === 'restart') restart();
  });

  let swipeStartX = null;
  document.addEventListener('pointerdown', e => {
    if (e.target.closest('.tutorial-panel')) swipeStartX = e.clientX;
  });
  document.addEventListener('pointerup', e => {
    if (swipeStartX === null || !e.target.closest('.tutorial-panel')) { swipeStartX = null; return; }
    const distance = e.clientX - swipeStartX;
    swipeStartX = null;
    if (Math.abs(distance) < 48) return;
    if (distance < 0 && state.tutorialIndex < 2) state.tutorialIndex++;
    if (distance > 0 && state.tutorialIndex > 0) state.tutorialIndex--;
    render();
  });
  document.addEventListener('pointercancel', () => { swipeStartX = null; });

  window.fuelFlow = {
    startTransaction: ({language='en', fuel='petrol', fillBy='amount', value=500, payment='upi'}={}) => {
      Object.assign(state,{lang:language,fuel,fill:fillBy,value:String(value),payment,tutorialIndex:0,step:'pay'}); render();
      return {status:'ready_for_payment', amount:targetAmount(), fuel};
    },
    reset: restart,
    getState: () => ({...state, timer:undefined})
  };

  const modelContext = document.modelContext;
  if (modelContext?.registerTool) {
    const valid = {
      language: ['en','hi'], fuel: ['petrol','diesel'],
      fillBy: ['amount','litres','full'], payment: ['upi','card']
    };
    Promise.resolve(modelContext.registerTool({
      name: 'start_fuel_transaction',
      title: 'Start fuel transaction',
      description: 'Configure a fuel purchase and open the matching payment screen in the kiosk.',
      inputSchema: {
        type: 'object',
        properties: {
          language: {type:'string',enum:valid.language},
          fuel: {type:'string',enum:valid.fuel},
          fillBy: {type:'string',enum:valid.fillBy},
          value: {type:'number',minimum:0},
          payment: {type:'string',enum:valid.payment}
        },
        required: ['language','fuel','fillBy','payment'],
        additionalProperties: false
      },
      annotations: {readOnlyHint:false,untrustedContentHint:false},
      execute(input) {
        if (!input || !valid.language.includes(input.language) || !valid.fuel.includes(input.fuel) || !valid.fillBy.includes(input.fillBy) || !valid.payment.includes(input.payment)) throw new Error('Invalid transaction options.');
        if (input.fillBy !== 'full' && !(Number(input.value) > 0)) throw new Error('A positive value is required for amount or litres.');
        return window.fuelFlow.startTransaction(input);
      }
    })).catch(()=>{});
    Promise.resolve(modelContext.registerTool({
      name: 'read_fuel_transaction',
      title: 'Read fuel transaction',
      description: 'Read the current kiosk step and selected transaction options.',
      inputSchema: {type:'object',properties:{},additionalProperties:false},
      annotations: {readOnlyHint:true,untrustedContentHint:false},
      execute() { return window.fuelFlow.getState(); }
    })).catch(()=>{});
    Promise.resolve(modelContext.registerTool({
      name: 'reset_fuel_transaction',
      title: 'Reset fuel transaction',
      description: 'Clear the current choices and return the kiosk to language selection.',
      inputSchema: {type:'object',properties:{},additionalProperties:false},
      annotations: {readOnlyHint:false,untrustedContentHint:false},
      execute() { window.fuelFlow.reset(); return {status:'reset'}; }
    })).catch(()=>{});
  }

  render();
})();
