var ul1="<div class='ul1'><ul id='type-acompte'><li class='regler-totalite selected'><input id='modalites-paiement-radio-totalite' name='typeReglementChoisi' value='SOLDE' class='radio auto ' type='radio' checked='checked'><span class='radioInput'></span><div class='inputLabel display-ib'><div class='libelle display-ib'><span class='display-ib'>Régler en totalité</span><span class='display-ib cbs-images'><img alt='' src='/ebooking/static/base/images/cbs-ancv.jpg?4.17.1-20180403.123757'></span></div><div class='montants display-ib'><p><span>Payer ce jour : </span><span id='montant-total-total'>817,00&nbsp;€</span></p></div></div></li></ul></div>"
var ul2="<div id='wrapperMP2' style='border:1px solid black; margin-top:8px;'><div class='ul2'><ul id='type-acompte'><li class='regler-2x '><input class='radio auto' id='modalites-paiement-radio-acompte' name='typeReglementChoisi' value='ACOMPTE' type='radio'><span class='radioInput'></span><div class='inputLabel display-ib'><div class='libelle display-ib'><span class='display-ib'>Régler en <span class='big'>2X</span></span><span class='display-ib'><img alt='' src='/ebooking/static/base/images/cbs-ancv.jpg?4.17.1-20180403.123757'></span></div><div class='montants display-ib'><p>Payer ce jour un acompte : <span id='montant-acompte-total'>269,61&nbsp;€</span></p><p>Le solde à régler avant le 09/04/2018 : <span id='montant-solde-total'>539,22&nbsp;€</span></p></div></div></li></ul></div></div>"
var paiement="<div id='paiement-block'><div id='paiement-content' class='hide' style='display: block;'><ul id='type-paiement' class='display-ib'> <li>                <input id='paiement-carte' name='moyenPaiementCBSelectionneBis' value='' checked='checked' type='checkbox'>                <label for='paiement-carte' class='display-ib'>Par carte(s) bancaire(s)</label>                <div class='infoOver'><span class='picto-info display-ib'>i</span><p class='display-ib'>Recommandé</p><div class='infoOverPopin bgclr1 bclr9'><p>Recommandé pour un traitement rapide de votre réservation.</p></div></div>            </li>            <li>                <input id='paiement-cheque-bancaire' name='autreMoyenDePaiement.chequeBis' value='' type='checkbox'>                <label for='paiement-cheque-bancaire' class='display-ib'>Par chèque(s) bancaire(s)</label>            </li>            <li>                <input id='paiement-cheque-vacances' name='autreMoyenDePaiement.chequeVacancesBis' value='' type='checkbox'>                <label for='paiement-cheque-vacances' class='display-ib'>Par chèque(s) vacances(s)<img alt='ancv' class='display-ib' src='/ebooking/static/base/images/ancv.jpg?4.17.1-20180403.123757'></label>            </li>            <li>             <input id='paiement-virement' name='autreMoyenDePaiement.virementBis' value='' class='' type='checkbox'>             <label for='paiement-virement' class='display-ib'>Par virement(s)</label>            </li>            <li>                <input id='paiement.especes' name='autreMoyenDePaiement.especesBis' value='' class='' type='checkbox'>                <label for='paiement.especes' class='display-ib'>En espèces</label>            </li>        </ul>        <input value='' id='autreMoyenDePaiementHiddenBox' name='' type='hidden'>                    <div id='recommander' class='display-ib'>            <div class='crypto'>                <p class='clr3'>                   Paiement sécurisé                </p>            </div>            <img alt='' src='https://secure.service-voyages.com/ebooking/static/base/images/cbs.gif?4.17.1-20180403.123757'>       </div></div>";
var garan="<div id='garantie' style='clear:both;display:none;'><p class='info' style='background:#E9E9E9;margin-bottom:5px;'>Après validation de votre commande, un conseiller va vous contacter pour définir les montants réglés avec vos différents moyens de paiement. Une carte bancaire est demandée en garantie dans le cas où vous ne nous régleriez pas avec les moyens de paiement annoncés dans les délais contractuels.           </p><h4>SAISISSEZ LA CARTE BANCAIRE DE GARANTIE</h4><p>Cette carte bancaire sert de garantie et nous nous réservons le droit de la débiter en cas de non règlement du séjour avec vos autres moyens de paiement.</p></div>"
//fixer 4X au lieu de 3X
var x3x=$(".pl-casino_3xcb");
$(x3x[0]).removeClass("pl-casino_3xcb");
$(x3x[0]).addClass("pl-casino_4xcb");
//cacher ancv
var ancv =$("#pl-pmLayout-tab-tab_cheques-vacances-4");
$(ancv[0]).hide();
//cacher meomirisercarte
$("#pl-pm-cards_6-rememberContainer").hide();
//encart cb
var cont = $("#moyens-paiement").find("div").first();
cont.wrap("<div id='wrapperMP' style='border:1px solid black'></div>");
var w=$("#wrapperMP");
//ul1="<div>a</div>";
w.prepend(ul1);
w.after(ul2);
$(".ul1 .inputLabel").after(paiement);
$("#paiement-block").append(garan);
$('#paiement-content input[type=checkbox]').on('click',
function(id){
	var dis=false;
		var chkck =$('#paiement-content input[type=checkbox]:checked');
		console.log(chkck.length);
		if(chkck.length>1)
		{
		dis=true;
		}
		else
		{
		if(chkck[0].id!="paiement-carte")
			dis=true;
		}
		if(dis)
		{
		$("#garantie").show();
		$(x3x[0]).parent().parent().parent().hide();
		}
		else
		{
		$("#garantie").hide();
		$(x3x[0]).parent().parent().parent().show();
	}}
);

/*
$("#paiement-block").appendTo("#wrapperMP2");
*/
//$(".ul1 .inputLabel").after(paiement);
var  select = function(event)
{
	$(".ul2 .inputLabel").after($("#paiement-block"));
	$("#PaylineWidget").appendTo("#wrapperMP2");
	$(".regler-totalite").removeClass("selected");
	$(".regler-2x").addClass("selected");
}
var  select2 = function(event)
{
	$(".ul1 .inputLabel").after($("#paiement-block"));
	$("#PaylineWidget").appendTo("#wrapperMP");
	$(".regler-totalite").addClass("selected");
	$(".regler-2x").removeClass("selected");
}
$("input#modalites-paiement-radio-acompte").on('click',select);
$("input#modalites-paiement-radio-totalite").on('click',select2);
