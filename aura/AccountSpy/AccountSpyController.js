({
	handleMessage : function(component, event, helper) {
		const param = event.getParam('message');
		console.log(`Account "${param.sobject.Name}" with Id ${param.sobject.Id} is ${param.event.type}!!`);
	}
})