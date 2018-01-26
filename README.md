# transmit
idea for streaming changing object data

starting prefixes:

0 - value: type:boolean value:false
1 - value: type:boolean value:true

2 - value: null

3 - typedef:int8 (1 byte)
4 - typedef:uint8 (1 byte)
5 - typedef:int16 (2 bytes)
6 - typedef:uint16 (2 bytes)
7 - typedef:int32 (4 bytes)
8 - typedef:uint32 (4 bytes)
9 - typedef:float32 (4 bytes)
10 - typedef:float64 (4 bytes)

11 - typedef:string (any number of non-zero bytes followed by a zero byte)

1x - typedef:shortFixedLengthTypedArray (this prefix : one byte [length] : prefix(typedef) : length * size(typedef) bytes)
1x - typedef:mediumFixedLengthTypedArray (this prefix : two bytes [length] : prefix(typedef) : length * size(typedef) bytes)
1x - typedef:longFixedLengthTypedArray (this prefix : four bytes [length] : prefix(typedef) : length * size(typedef) bytes)
1x - typedef:extraLongFixedLengthTypedArray (this prefix : eight bytes [length] : prefix(typedef) : length * size(typedef) bytes)

1x - typedef:typedArray (prefix(this) : prefix(typedef) : size(typedef) bytes) OR (prefix(another instance) : size(typedef) bytes)
1x - typedef:object ((prefix(this) OR prefix(another instance) : string : value)

combine fixed and unfixed objects and arrays...

remaining - user prefixes
