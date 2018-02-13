
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            //image: "img/malory.png",
	    text: { name: "Task" },
            children: [
                {
	    	    text: { name: "Information-Transfer" },
                    //collapsed: true,
                    children: [
                        {
		    		text: { name: "Information-Providing" },
                    children: [
                        {
		    		text: { name: "Statement" }
                        },
                        {
		    		text: { name: "Answer" },
                        }
                    ]
                        },
                        {
		    		text: { name: "Information-Seeking" },
                    children: [
                        {
		    		text: { name: "SetQ" },
                        },
                        {
		    		//text: { name: "PropQ" },
				innerHTML:"<b style=\"color:red\">PropQ</b>"
                        },
                        {
		    		text: { name: "ChoiceQ" },
                        }
                    ]
                        }
                    ]
                },
                {
		    text: { name: "Action-Discussion" },
                    //childrenDropLevel: 1,
                    children: [
                        {
		    		text: { name: "Directive" },
                        },
                        {
		    		text: { name: "Commissive" },
                        }
                    ]
                },
            ]
        }
    };

    var chart_config2 = {
        chart: {
            container: "#collapsable-example2",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            //image: "img/malory.png",
	    text: { name: "Task" },
            children: [
                {
	    	    text: { name: "Information-Transfer" },
                    //collapsed: true,
                    children: [
                        {
		    		text: { name: "Information-Providing" },
                    children: [
                        {
		    		text: { name: "Statement" }
                        },
                        {
		    		text: { name: "Answer" },
                        }
                    ]
                        },
                        {
		    		text: { name: "Information-Seeking" },
                    children: [
                        {
		    		text: { name: "SetQ" },
                        },
                        {
		    		text: { name: "PropQ" },
                        },
                        {
		    		text: { name: "ChoiceQ" },
                        }
                    ]
                        }
                    ]
                },
                {
		    text: { name: "Action-Discussion" },
                    //childrenDropLevel: 1,
                    children: [
                        {
		    		//text: { name: "Directive" },
				innerHTML:"<b style=\"color:red\">Directive</b>"
                        },
                        {
		    		text: { name: "Commissive" },
                        }
                    ]
                },
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/
