# transmit
idea for streaming changing object data

transmit-stream = (index , prefix , value) , transmit-stream | nothing
, = concat
| = select

index = (1 byte >= 128 , bytes * count(leading ones) | 1 byte < 128)
    if the byte is 255 then add 8 to the count of leading ones on the next byte
value = stream of bytes with length defined by prefix

predefined prefixes,

0 - "zero" - type:boolean value:false
1 - type:boolean value:true

2 - type:null value: null
3 - type:undefined value:undefined

3 - type:int8 (1 byte)
4 - type:uint8 (1 byte)
5 - type:int16 (2 bytes)
6 - type:uint16 (2 bytes)
7 - type:int32 (4 bytes)
8 - type:uint32 (4 bytes)
9 - type:float32 (4 bytes)
10 - type:float64 (8 bytes)
11 - type:boolean (1 byte)


12 - string - a list of non-zero uint8s followed by a zero: zero | (uint8, string)

13 - type:typesequence - a list of types followed by a zero: zero | (type, typesequence)
14 - type:typedef - a list of typesequences followed by a zero: zero | (typesequence, typedef)

15 - labeled-value : string, typedef
16 - object : zero | (labeled-value, object)





1x - typedef:shortFixedLengthTypedArray (this prefix : one byte [length] : prefix(typedef) : length * size(typedef) bytes)
1x - typedef:mediumFixedLengthTypedArray (this prefix : two bytes [length] : prefix(typedef) : length * size(typedef) bytes)
1x - typedef:longFixedLengthTypedArray (this prefix : four bytes [length] : prefix(typedef) : length * size(typedef) bytes)
1x - typedef:extraLongFixedLengthTypedArray (this prefix : eight bytes [length] : prefix(typedef) : length * size(typedef) bytes)

1x - typedef:typedArray (prefix(this) : prefix(typedef) : size(typedef) bytes) OR (prefix(another instance) : size(typedef) bytes)
1x - typedef:object ((prefix(this) OR prefix(another instance) : string : value)


remaining - user prefixes
