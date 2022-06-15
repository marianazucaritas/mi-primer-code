def on_forever():
    for index in range(60):
        basic.show_leds("""
            . . . # .
                        # # # # #
                        # # # # #
                        . # # # .
                        . . # . .
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . # # # .
                        . . # . .
                        . . . . .
        """)
        basic.show_string("love ")
basic.forever(on_forever)
