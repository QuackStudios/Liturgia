(function () {
  (function (e, r) {
    var t = document.createElement('link');
    t.rel = 'preconnect';
    t.as = 'script';
    var n = document.createElement('link');
    n.rel = 'dns-prefetch';
    n.as = 'script';
    var i = document.createElement('script');
    i.id = 'spcloader';
    i.type = 'text/javascript';
    i['async'] = true;
    i.charset = 'utf-8';
    var o =
      'https://sdk.privacy-center.org/' +
      e +
      '/loader.js?target_type=notice&target=' +
      r;
    if (window.didomiConfig && window.didomiConfig.user) {
      var a = window.didomiConfig.user;
      var c = a.country;
      var d = a.region;
      if (c) {
        o = o + '&country=' + c;
        if (d) {
          o = o + '&region=' + d;
        }
      }
    }
    t.href = 'https://sdk.privacy-center.org/';
    n.href = 'https://sdk.privacy-center.org/';
    i.src = o;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
    s.parentNode.insertBefore(n, s);
    s.parentNode.insertBefore(i, s);
  })('f44ba9d2-c202-4577-a3c4-c5b7a0c73763', 'KbD8Mmc4');
})();

(function () {
  const consentFunction = (purposes) => {
    const purposeMap = {
      marketing: 'marketing-BmZeRMVZ',
      marketingUpdates: 'marketing-NK6hPpXW',
      necessary: 'necessary-WWLLKUHC',
      preferences: 'preference-HKKKAZYB',
      statistics: 'statistics-BKGd9XXA',
    };

    const enabledPurposes = {};
    Object.values(purposeMap).forEach((purpose, i) => {
      enabledPurposes[Object.keys(purposeMap)[i]] = purposes.includes(purpose);
    });
    const layerData = {
      event: 'didomiConsent',
      eventCategory: 'didomi',
      eventAction: 'consent',
      consent: enabledPurposes,
    };

    window.dataLayer.push(layerData);
  };
  window.dataLayer = window.dataLayer || [];

  window.didomiEventListeners = window.didomiEventListeners || [];
  window.didomiOnReady = window.didomiOnReady || [];
  window.didomiOnReady.push(function (Didomi) {
    window.dataLayer.push({
      event: 'didomiReady',
    });

    const userStatus = Didomi.getUserStatus();
    const purposes = userStatus.purposes.global.enabled;

    consentFunction(purposes);
  });
  window.didomiEventListeners.push({
    event: 'consent.changed',
    listener: function () {
      const userStatus = Didomi.getUserStatus();
      const purposes = userStatus.purposes.global.enabled;

      consentFunction(purposes);
    },
  });
})();
