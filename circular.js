const CIRC_CSS=`:root{
    --navy:#1B2A56;
    --gray:#4A4D63;
    --red:#B11E2A;
    --pink:#E8B4B8;
    --cream:#FBF7F0;
    --cream2:#FFFDF8;
    --page:#ffffff;
    --appbg:#e9e9ee;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:var(--appbg);
    font-family:"DM Sans",system-ui,Arial,sans-serif;
    color:var(--gray);
    line-height:1.3;
    padding:20px 12px;
    -webkit-font-smoothing:antialiased;
  }
  .page{
    background:var(--page);
    width:794px;            /* A4 width @96dpi */
    min-height:1123px;      /* A4 height @96dpi */
    max-width:100%;
    margin:0 auto;
    padding:26px 46px 24px;
    box-shadow:0 4px 22px rgba(0,0,0,.12);
    -webkit-print-color-adjust:exact;
    print-color-adjust:exact;
  }
  .logo{display:block;margin:0 auto;width:108px;height:auto;}
  .toprule{border:none;border-top:2px solid var(--red);margin:12px 0 0;}
  .banner{
    background:var(--navy);
    color:#fff;
    text-align:center;
    padding:13px 16px;
    margin:12px 0 15px;
  }
  .banner .k{
    font-family:"Fredoka",sans-serif;font-weight:500;
    letter-spacing:.32em;font-size:11px;text-transform:uppercase;
    opacity:.9;padding-left:.32em;
  }
  .banner .h{
    font-family:"Fredoka",sans-serif;font-weight:700;
    font-size:25px;margin-top:3px;
  }
  h2.sec{
    font-family:"Fredoka",sans-serif;color:var(--navy);
    font-weight:600;font-size:16px;margin:0 0 5px;
  }
  p{margin:0 0 9px;font-size:13.5px;}
  .navy{color:var(--navy);}
  .red{color:var(--red);}
  b,strong{font-weight:600;}
  .namebox{
    background:var(--cream);border-left:5px solid var(--red);
    padding:11px 18px;margin:12px 0 14px;
  }
  .namebox .n{font-family:"Fredoka",sans-serif;color:var(--navy);font-weight:600;font-size:17px;}
  ul.bul{margin:0 0 10px;padding-left:20px;}
  ul.bul li{font-size:13.5px;margin-bottom:2px;}
  ul.bul li::marker{color:var(--navy);}
  .paybox{
    background:var(--cream2);border:1px solid #efe7d8;
    padding:11px 18px;margin:4px 0 15px;
  }
  .paybox .lab{
    color:var(--red);font-family:"Fredoka",sans-serif;font-weight:500;
    letter-spacing:.2em;font-size:11px;text-transform:uppercase;
    display:block;margin-bottom:5px;
  }
  .paybox .body{font-size:13.5px;color:var(--gray);}
  .paybox .body .pix{color:var(--navy);font-weight:600;}
  .paybox .body .mid{color:var(--red);}
  .cols{display:flex;gap:12px;margin:0 0 15px;}
  .col{flex:1;background:var(--cream2);padding:11px 16px;}
  .col.l{border-left:5px solid var(--navy);}
  .col.r{border-left:5px solid var(--red);}
  .col .lab{
    font-family:"Fredoka",sans-serif;font-weight:500;letter-spacing:.18em;
    font-size:10px;text-transform:uppercase;color:var(--gray);
    display:block;margin-bottom:4px;
  }
  .col .txt{font-size:12.5px;}
  .col .txt b{color:var(--navy);}
  .col .txt .rd{color:var(--red);font-weight:600;}
  .fine{font-size:12px;color:var(--gray);margin:0 0 12px;}
  .sign{text-align:center;margin:12px 0 2px;}
  .sign .a{font-size:13.5px;margin:0;}
  .sign .dir{font-family:"Fredoka",sans-serif;font-weight:700;color:var(--navy);font-size:15px;margin:1px 0;}
  .sign .crm{font-family:"Caveat",cursive;font-weight:700;color:var(--red);font-size:23px;margin:0;}
  .scissors{
    text-align:center;color:var(--gray);letter-spacing:.22em;
    font-size:10px;text-transform:uppercase;margin:9px 0 0;
    font-family:"Fredoka",sans-serif;
  }
  .scissors .sc{color:var(--navy);font-size:13px;}
  .dashed{border:none;border-top:2px dashed var(--navy);margin:9px 0 16px;}
  /* form */
  .form{border:2px solid var(--navy);padding:16px 26px 20px;}
  .form .ct{
    text-align:center;font-family:"Fredoka",sans-serif;font-weight:700;
    color:var(--navy);font-size:17px;margin:0;
  }
  .form .cs{
    text-align:center;font-family:"Caveat",cursive;font-weight:700;
    color:var(--red);font-size:20px;margin:0 0 9px;
  }
  .form .fl{font-size:13.5px;margin:0 0 8px;color:var(--gray);}
  .form .fl .dots{color:var(--gray);letter-spacing:1px;}
  .form .opt-intro{font-size:13.5px;margin:0 0 9px;}
  .form .opt-intro .q{color:var(--gray);}
  .opts{margin:0 0 11px;}
  .opt{
    background:var(--cream);border-left:5px solid var(--pink);
    padding:9px 16px;font-size:13.5px;color:var(--navy);
  }
  .opt + .opt{border-top:3px solid #fff;}
  .opt .box{margin-right:7px;}
  .opt .rd{color:var(--red);font-weight:600;}
  .obs{font-size:12px;font-style:italic;color:var(--gray);border-top:1px solid #e2ddd3;padding-top:9px;margin:9px 0 0;}
  .norenew{
    font-size:13.5px;color:var(--navy);
    border-top:1px solid #e2ddd3;border-bottom:1px solid #e2ddd3;
    padding:9px 0;margin:0 0 22px;display:flex;align-items:center;
  }
  .norenew .box{margin-right:7px;}
  .sigline{text-align:center;margin-top:20px;}
  .sigline .ln{color:var(--gray);letter-spacing:1px;font-size:13.5px;}
  .sigline .cap{font-size:12.5px;color:var(--gray);margin-top:3px;}
  .sigline .cap .gap{display:inline-block;width:30px;}
  @media (max-width:640px){
    .page{padding:22px 18px;min-height:0;}
    .cols{flex-direction:column;}
    .banner .h{font-size:21px;}
  }

  /* ===== IMPRESSÃO: fundo branco, sem sombra, tudo em 1 folha A4 ===== */
  @page{ size:A4 portrait; margin:0; }
  @media print{
    html,body{ background:#fff !important; }
    body{ padding:0 !important; margin:0 !important; }
    .page{
      width:210mm; min-height:0; height:auto;
      margin:0; box-shadow:none;
      padding:9mm 12mm 8mm;
      page-break-after:avoid; page-break-inside:avoid;
    }
    .form{ page-break-inside:avoid; }
    /* compactação para caber em 1 A4 */
    .logo{ width:92px; }
    .toprule{ margin-top:9px; }
    .banner{ padding:10px 16px; margin:9px 0 11px; }
    .banner .h{ font-size:23px; }
    h2.sec{ font-size:15px; margin-bottom:4px; }
    p{ margin-bottom:7px; font-size:13px; }
    .namebox{ padding:9px 18px; margin:9px 0 10px; }
    .namebox .n{ font-size:16px; }
    ul.bul{ margin-bottom:8px; }
    ul.bul li{ font-size:13px; }
    .paybox{ padding:9px 18px; margin:3px 0 11px; }
    .paybox .body{ font-size:13px; }
    .cols{ gap:11px; margin-bottom:11px; }
    .col{ padding:9px 16px; }
    .col .txt{ font-size:12px; }
    .fine{ font-size:11.5px; margin-bottom:9px; }
    .sign{ margin:9px 0 2px; }
    .sign .a{ font-size:13px; }
    .sign .dir{ font-size:14px; }
    .sign .crm{ font-size:21px; }
    .scissors{ margin-top:7px; }
    .dashed{ margin:7px 0 12px; }
    .form{ padding:13px 22px 16px; }
    .form .ct{ font-size:16px; }
    .form .cs{ font-size:19px; margin-bottom:7px; }
    .form .fl{ font-size:13px; margin-bottom:7px; }
    .form .opt-intro{ font-size:13px; margin-bottom:7px; }
    .opts{ margin-bottom:9px; }
    .opt{ padding:7px 16px; font-size:13px; }
    .obs{ font-size:11.5px; padding-top:7px; margin-top:7px; }
    .norenew{ font-size:13px; padding:7px 0; margin-bottom:14px; }
    .sigline{ margin-top:14px; }
    .sigline .ln{ font-size:13px; }
    .sigline .cap{ font-size:12px; }
  }`;
const LOGO="data:image/png;base64,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";
function circularBody(a){var parc=Number(state.config&&state.config.parcelas)||12;var mensalNum=(typeof valorLiquido==='function')?valorLiquido(a):Number(a.mensalidade||0);var tem=Number(a.mensalidade)>0&&mensalNum>0;var mensal=tem?money(mensalNum).replace(/R\$\s*/,''):'_________';var anual=tem?money(mensalNum*parc).replace(/R\$\s*/,''):'_________';var nome=esc(a.nome||'');var nomeForm=nome;var ano=esc(a.serieDestino||'');var periodo=esc(a.periodo||'');return `<div class="page">
  <img class="logo" src="${LOGO}" alt="Colégio Rosa Machado">
  <hr class="toprule">

  <div class="banner">
    <div class="k">Circular de Renovação de Matrícula</div>
    <div class="h">Ano Letivo 2027</div>
  </div>

  <h2 class="sec">Senhores Pais e Responsáveis,</h2>
  <p>É com alegria que iniciamos o período de <span class="navy">renovação de matrícula para 2027</span>. Reafirmamos nosso compromisso de oferecer o melhor na continuidade do nosso trabalho e, nessa trajetória, desejamos que seu(sua) filho(a) permaneça conosco.</p>

  <div class="namebox">
    <span class="n">${nome}</span>
  </div>

  <p>O valor proposto para a mensalidade de 2027 será de <span class="red">R$</span> ${mensal} (anuidade de <span class="red">R$</span> ${anual}), desde que pagas na data do vencimento, da seguinte forma:</p>

  <ul class="bul">
    <li><span class="navy"><b>Renovação anual (garantia da vaga):</b></span> parcela com desconto conforme as opções do controle de vagas abaixo.</li>
  </ul>

  <div class="paybox">
    <span class="lab">Formas de Pagamento</span>
    <span class="body"><span class="pix">PIX</span>&nbsp;&nbsp;colegiorosamachado@gmail.com&nbsp;&nbsp;<span class="mid">·</span>&nbsp;&nbsp;ou em dinheiro na secretaria do colégio.</span>
  </div>

  <div class="cols">
    <div class="col l">
      <span class="lab">Entrega da Ficha</span>
      <div class="txt"><b>Até 21/09</b> — preenchida e em envelope.</div>
    </div>
    <div class="col r">
      <span class="lab">Abertura de Vagas</span>
      <div class="txt"><b>A partir de</b> <span class="rd">29/09</span> as vagas serão oferecidas a alunos de outras unidades.</div>
    </div>
  </div>

  <p class="fine">Para mudança de período ou opção pelo integral, favor entrar em contato com a secretaria. Alterações realizadas após o período de rematrícula ou o início das aulas serão acrescidas ao valor das parcelas já pagas.</p>

  <div class="sign">
    <p class="a">Atenciosamente,</p>
    <p class="dir">A Direção</p>
    <p class="crm">Colégio Rosa Machado</p>
  </div>

  <div class="scissors"><span class="sc">&#9986;</span>&nbsp;&nbsp;Preencher, recortar e devolver em envelope&nbsp;&nbsp;<span class="sc">&#9986;</span></div>
  <hr class="dashed">

  <div class="form">
    <p class="ct">CONTROLE DE VAGAS 2027</p>
    <p class="cs">Colégio Rosa Machado</p>

    <p class="fl">Aluno(a): <span class="dots">${nomeForm}</span></p>
    <p class="fl">Ano: <span class="dots">${ano}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Período: <span class="dots">${periodo}</span></p>
    <p class="opt-intro"><b class="navy">Opção para acerto da 1ª parcela / anuidade</b> <span class="q">(especificar a condição escolhida):</span></p>

    <div class="opts">
      <div class="opt"><span class="box">&#9744;</span> Parcela camarada — R$ 350,00, via PIX ou dinheiro até <span class="rd">30/09</span>.</div>
      <div class="opt"><span class="box">&#9744;</span> Desconto de 30% — R$ __________, via PIX até <span class="rd">16/10</span>.</div>
      <div class="opt"><span class="box">&#9744;</span> Sem desconto — R$ __________, via PIX até <span class="rd">30/10</span>.</div>
    </div>

    <p class="obs"><b style="font-style:normal">Obs.</b>&nbsp; Temos opções de parcelamento no cartão de crédito, com os juros da maquininha.</p>

    <div class="norenew"><span class="box">&#9744;</span> NÃO renovarei a matrícula do meu(minha) filho(a).</div>

    <div class="sigline">
      <div class="ln">__________________________________________________</div>
      <div class="cap">Assinatura do Responsável<span class="gap"></span>Data: ____ / ____ / 2026</div>
    </div>
  </div>
</div>`;}
function contratoHTML(a){var fname='Circular-'+(esc(a.nome).replace(/[^A-Za-z0-9]+/g,'-')||'aluno');return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Circular - ${esc(a.nome)}</title><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin><link href=\"https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Caveat:wght@600;700&display=swap\" rel=\"stylesheet\"><style>${CIRC_CSS}</style><style>.noprint{max-width:794px;margin:12px auto;text-align:center}.noprint button{font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 18px;border:none;border-radius:8px;background:#1B2A56;color:#fff;cursor:pointer;margin:0 4px}.noprint button.g{background:#eef0f7;color:#333}@media print{.noprint{display:none}}</style></head><body><div class="noprint"><button onclick="window.print()">Imprimir / Salvar PDF</button><button class="g" onclick="baixarDoc()">Baixar (.doc)</button></div>`+circularBody(a)+`<scr`+`ipt>function baixarDoc(){var st='';var ss=document.querySelectorAll('style');for(var i=0;i<ss.length;i++){st+=ss[i].outerHTML;}var page=document.querySelector('.page').outerHTML;var html="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'>"+st+"</head><body>"+page+"</body></html>";var blob=new Blob(['\ufeff'+html],{type:'application/msword'});var url=URL.createObjectURL(blob);var link=document.createElement('a');link.href=url;link.download='${fname}.doc';link.click();}<\/scr`+`ipt>`+`</body></html>`;}
function generateOne(id){var a=state.alunos.find(function(x){return x.id===id;});if(!a)return;var w=window.open('','_blank');if(!w){toast('Permita pop-ups para gerar o documento');return;}w.document.write(contratoHTML(a));w.document.close();}
function generateAll(){var rows=(typeof filteredAlunos==='function')?filteredAlunos():state.alunos;if(!rows||!rows.length){toast('Nenhum aluno para gerar');return;}var w=window.open('','_blank');if(!w){toast('Permita pop-ups para gerar');return;}var parts=rows.map(function(a){return '<div class="sheet">'+circularBody(a)+'</div>';}).join('');var doc=`<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8"><title>Circulares (${rows.length})</title><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin><link href=\"https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&family=Caveat:wght@600;700&display=swap\" rel=\"stylesheet\"><style>${CIRC_CSS}</style><style>.noprint{max-width:794px;margin:12px auto;text-align:center}.noprint button{font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600;padding:10px 18px;border:none;border-radius:8px;background:#1B2A56;color:#fff;cursor:pointer;margin:0 4px}.noprint button.g{background:#eef0f7;color:#333}@media print{.noprint{display:none}}.sheet{page-break-after:always}.sheet:last-child{page-break-after:auto}</style></head><body><div class="noprint"><button onclick="window.print()">Imprimir / Salvar todos em PDF</button></div>${parts}</body></html>`;w.document.write(doc);w.document.close();toast(rows.length+' circular(es) gerada(s)');}
