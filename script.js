
// Small helper: prefill plan from query string
(function(){
  try{
    const params = new URLSearchParams(location.search);
    const plan = params.get('plan');
    if(plan){
      const sel = document.querySelector('select[name="plan"]');
      if(sel) sel.value = plan;
    }
  }catch(e){}
})();
