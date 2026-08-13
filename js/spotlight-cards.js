(function(){
  'use strict';

  const TARGET_SELECTOR = [
    '.hero',
    '.class-card',
    '.subclass-card',
    '.race-card',
    '.subrace-card',
    '.race-rule-card',
    '.ability-budget-card',
    '.ability-summary-card',
    '.equipment-row',
    '.equipment-glossary-grid article',
    '.feat-hero',
    '.feat-summary'
  ].join(',');

  const root = typeof window !== 'undefined' ? window : globalThis;
  const hasDocument = typeof document !== 'undefined';
  const reduceMotion = root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = root.matchMedia && root.matchMedia('(hover: hover) and (pointer: fine)');
  let activePointerTarget = null;

  function enabled(){
    return !(reduceMotion && reduceMotion.matches) && (!finePointer || finePointer.matches);
  }

  function targetFrom(node){
    return node && node.closest ? node.closest(TARGET_SELECTOR) : null;
  }

  function setPosition(el, clientX, clientY){
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
    el.style.setProperty('--spot-x', x.toFixed(1) + 'px');
    el.style.setProperty('--spot-y', y.toFixed(1) + 'px');
  }

  function deactivatePointer(){
    if (!activePointerTarget) return;
    if (activePointerTarget.getAttribute('data-spotlight-active') === 'true') {
      activePointerTarget.removeAttribute('data-spotlight-active');
    }
    activePointerTarget = null;
  }

  if (hasDocument) {
    document.addEventListener('pointermove', function(event){
      if (!enabled()) return;
      const el = targetFrom(event.target);
      if (!el) {
        deactivatePointer();
        return;
      }

      if (activePointerTarget && activePointerTarget !== el) deactivatePointer();
      activePointerTarget = el;
      setPosition(el, event.clientX, event.clientY);
      el.setAttribute('data-spotlight-active','true');
    }, {passive:true});

    document.addEventListener('pointerout', function(event){
      if (!activePointerTarget) return;
      const next = targetFrom(event.relatedTarget);
      if (next !== activePointerTarget) deactivatePointer();
    }, {passive:true});

    document.addEventListener('focusin', function(event){
      const el = targetFrom(event.target);
      if (!el) return;
      el.style.setProperty('--spot-x','50%');
      el.style.setProperty('--spot-y','50%');
      el.setAttribute('data-spotlight-active','keyboard');
    });

    document.addEventListener('focusout', function(event){
      const el = targetFrom(event.target);
      if (!el) return;
      requestAnimationFrame(function(){
        if (!el.contains(document.activeElement) && el !== activePointerTarget) {
          el.removeAttribute('data-spotlight-active');
        }
      });
    });

    function resetIfDisabled(){
      if (enabled()) return;
      deactivatePointer();
      document.querySelectorAll('[data-spotlight-active]').forEach(function(el){
        el.removeAttribute('data-spotlight-active');
      });
    }

    if (reduceMotion && reduceMotion.addEventListener) reduceMotion.addEventListener('change', resetIfDisabled);
    if (finePointer && finePointer.addEventListener) finePointer.addEventListener('change', resetIfDisabled);
  }

  root.GRIMORIO_SPOTLIGHT = {
    selector: TARGET_SELECTOR,
    enabled: enabled
  };
})();
