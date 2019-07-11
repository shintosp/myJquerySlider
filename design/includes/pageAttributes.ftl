<#compress>
	
	<#-- Assign default values here. -->
	<#assign pageSectionImage = "">
	<#assign pageSectionAlt = "">
	<#assign contentId = "content">


	<#-- Assign page specific values here. -->
	<#switch page.sectionTop>
		<#case "sectionTop">
			<#assign pageSectionImage = "img.jpg">
			<#assign pageSectionAlt = "alt">
		<#break>
	</#switch>
	
	<#switch page.section>
		<#case "section">
			<#assign pageSectionImage = "img.jpg">
			<#assign pageSectionAlt = "alt">
		<#break>
	</#switch>

	<#switch page.ID>
		<#case "page">
			<#assign pageSectionImage = "img.jpg">
			<#assign pageSectionAlt = "alt">
		<#break>
		<#case "About">
			<#assign contentId = "attorney-list">
		<#break>
	</#switch>

	<#-- Assign page specific values for child pages (but not the index page) here. -->
	<#if page.section != page.ID>
		<#switch page.section>
			<#case "Attorneys">
				<#assign pageSectionImage = "">
			<#break>
		</#switch>
	</#if>

</#compress>