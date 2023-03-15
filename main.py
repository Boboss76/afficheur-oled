OLED.init(128, 64)
for index in range(3):
    OLED.write_num_new_line(index)

def on_forever():
    pass
basic.forever(on_forever)
