
$( function() {
    const radioBtn = $('input[type="radio"]')
    function hexFromRGB(r, g, b) {
        var hex = [
            r.toString( 16 ),
            g.toString( 16 ),
            b.toString( 16 )
        ];
        $.each( hex, function( nr, val ) {
            if ( val.length === 1 ) {
                hex[ nr ] = "0" + val;
            }
        });
        return hex.join( "" ).toUpperCase();
    }

    radioBtn.on('click', function (){
        if($("#radio-1").is(":checked")) {
            return $("#red, #green, #blue").slider({
                slide: refreshText,
                change: refreshText
            });
        }else {
            $( "#red, #green, #blue" ).slider({
                slide: refreshSwatch,
                change: refreshSwatch
            });
        }

    })

    function refreshSwatch() {
        let red = $( "#red" ).slider( "value" ),
            green = $( "#green" ).slider( "value" ),
            blue = $( "#blue" ).slider( "value" ),
            hex = hexFromRGB( red, green, blue );
        $( "#swatch" ).css( "background-color", "#" + hex );
    }
    function refreshText() {
        let red = $( "#red" ).slider( "value" ),
            green = $( "#green" ).slider( "value" ),
            blue = $( "#blue" ).slider( "value" ),
            hex = hexFromRGB( red, green, blue );
        $( "#text" ).css( "color", "#" + hex );
    }

    $( "#red, #green, #blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );

} );


$( function() {
    $( "input" ).checkboxradio({
        icon: false
    });
} );