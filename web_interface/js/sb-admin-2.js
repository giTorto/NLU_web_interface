/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});




/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
function build_qualifier(qualifier)
{
    console.log("building qualifier")
    return "<div class=\"col-lg-3 col-md-6 showable2\"><div class=\"panel "+qualifier.panel+" \"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa "+qualifier.icon+" fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"big\"><b>"+qualifier.type+"</b></div><div>"+qualifier.value+"</div></div></div></div><div class=\"panel-footer\"><span class=\"pull-left\" id="+qualifier.id+"onclick=\"showDetails(this.id)\" style=\"cursor: pointer\">View Details</span><span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span><div class=\"clearfix\"></div></div></div></div>"

}
function build_chart(tags)
{
    return {
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
                                    innerHTML:tags["Statement"]
                                },
                                {
                                    innerHTML:tags["Answer"]
                                }
                            ]
                        },
                        {
                            text: { name: "Information-Seeking" },
                            children: [
                                {
                                    innerHTML:tags["SetQ"]
                                },
                                {
                                    innerHTML:tags["PropQ"]
                                },
                                {
                                    innerHTML:tags["ChoiceQ"]
                                }
                            ]
                        }
                    ]
                },
                {
                    text: { name: "Action-Discussion" },
                    children: [
                        {
                            innerHTML:tags["Directive"]
                        },
                        {
                            innerHTML:tags["Commissive"]
                        }
                    ]
                },
            ]
        }
    }
}
$(function() {
    $('#side-menu').metisMenu();
});
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

current_units=[]

function parseSentence(){
    console.log("Parse sentence has been called");

    $.getJSON(//"http://passidin10.science.unitn.it:5000/generate_USR",
        "http://sisl-nlu.disi.unitn.it/parse_USR"+'?'+'sentence='+$('#form_text_to_pass').val(),
        function(data){
            console.log(data);
            //alert("Data: " + data );
            $("#functionalUnits").fadeIn();
            colors=["#87CEEB","rgb(33, 133, 208)"];
            current_units=data;
            $(data.utterances).each(function(i,e){
                console.log(e);
                fUnit=$("<span style=\"padding:25px;font-size:150%\"><b style=\"color:"+colors[i%2]+"; cursor: pointer\" onclick=\"showUnit("+i+")\">"+ e['final_utterance']+"</b></span> ");
                $("#fUnits").append(fUnit);
                console.log(e.unit);
            });
        });
}

function showQuestion(){
    $("#result-wrapper").fadeIn();
    $(".showable1").hide();
    $(".showable2").fadeIn();
}

function showDirective(){
    $(".showable2").hide();
    $(".showable1").fadeIn();
}
function showCommFunc(comm_func)
{
    tagsHTML={}
    $(["Statement","Answer","SetQ","PropQ","ChoiceQ","Directive","Commissive"]).each(function(i,e){tagsHTML[e]="<span>"+e+"</span>"});
    tagsHTML[comm_func]="<b style=\"color:red\">"+comm_func+"</b>"
    var chart_config=build_chart(tagsHTML)
    tree = new Treant( chart_config );

}
function showQualifier(q)
{
    console.log("showing qulifier")

    qualifiers={}
    qualifiers["subjIT"]={id:"subjIT",panel:"panel-primary",icon:"fa-comments",type:"Subjective InfoType"}
    qualifiers["func"]={id:"func",panel:"panel-primary",icon:"fa-gears",type:"Functionality"}
    qualifiers["factIT"]={id:"factIT",panel:"panel-primary",icon:"fa-comment",type:"Factual InfoType"}
    qualifiers["sentiment"]={id:"sentiment",panel:"panel-primary",icon:"fa-smile-o",type:"Sentiment"}
    qualifier=qualifiers[q.type]
    qualifier["value"]=q.value
    qualifierDIV=$(build_qualifier(qualifier))
    $("#qualifier_row").append(qualifierDIV)
}
function showUnit(index)
{
    console.log("showing unit");
    console.log(index);
    console.log(current_units[index])

    $("#result-wrapper").fadeIn();
    //1) Show communicative function
    $("#collapsable-example").html("")
    showCommFunc(current_units[index]['intent']['DA_tag'])
    $("#qualifier_row").html("")
    //2) Show qualifiers
    qualifiers=(current_units[index]["intent"])
    $(qualifiers).each(function(i,e){showQualifier(e);});
}
function showDetails(id){
    console.log(id)
    details={}
    details["gc"]="The user asked the system to discuss a <span style=\"color:red\"><b>topic</b></span>";
    details["pov"]="This information exchange is about a point-of-view. <br/> Confidence: <span style=\"color:green\"><b>very good</b></span>";
    details["pol"]="<b><i>politics</i></b> in this sentence can be used as a topic of discussion";
    $("#"+id).hide()
    $("#"+id).html((details[id]))
    $("#"+id).fadeIn()
}
$("#formParse").submit(function(e){
    //$.get(server,function(){
    console.log("Submit has been called");

    $.get("http://passidin10.science.unitn.it:5000/generate_USR"+'?'+'sentence='+text,
        function(data){
        alert("Data: " + data );
        console.log(data)
        current_units=data;
        colors=["#87CEEB","rgb(33, 133, 208)"];
        /*$(data).each(function(i,e){
            fUnit=$("<span style=\"padding:25px;font-size:150%\"><b style=\"color:"+colors[i%2]+"; cursor: pointer\" onclick=\"showUnit("+i+")\">"+e.unit+"</b></span> ");
            $("#fUnits").append(fUnit);
            console.log(e.unit);
        });*/
    });
});