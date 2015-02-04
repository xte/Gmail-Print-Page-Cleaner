if($("body").is('[onload]')) {
  // works on gmail and gapps
	$("div.bodycontainer table tbody img[src*=logo]").first().parent().parent().hide();

	$("div.bodycontainer table hr").hide();
	$("div.bodycontainer hr").first().hide();
	$("div.bodycontainer div.maincontent hr").hide();

	$("div.bodycontainer div.maincontent table").first().hide();
	$("div.bodycontainer div.maincontent table.message tbody tr").first().hide();
	$("div.bodycontainer div.maincontent table.message tbody tr td font.recipient").parent().parent().hide()
}
