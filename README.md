# transmit
streaming object data changes as a tree with it's root-node in the future (we won't hash, we'll just count nodes and store new data in a stack at index == count)

## idea notepad
this is just scribbles... hoping to summon terms to help with thinking about it and expressing it.

transmit-stream = (index , prefix , value) , transmit-stream | nothing
, = concat
| = select

parser-state(values-consumed):parser-effect
* store(key, value):null
* false():pop
* true():pop
* string(0):pop
* string(byte):string
* typesequence
* | (0):null
* | type:

index = (1 byte >= 128 , bytes * count(leading ones) | 1 byte < 128)
    if the byte is 255 then add 8 to the count of leading ones on the next byte
value = stream of bytes with length defined by prefix

predefined prefixes,

1. type:boolean value:false
1. type:boolean value:true

1. type:null value: null
1. type:undefined value:undefined

1. type:int8 (1 byte)
1. type:uint8 (1 byte)
1. type:int16 (2 bytes)
1. type:uint16 (2 bytes)
1. type:int32 (4 bytes)
1. type:uint32 (4 bytes)
1. type:float32 (4 bytes)
1. type:float64 (8 bytes)
1. type:boolean (1 byte)


1. string - a list of non-zero uint8s followed by a zero: zero | (uint8, string)

1. type:typesequence - a list of types followed by a zero: zero | (type, typesequence)
1. type:typedef - a list of typesequences followed by a zero: zero | (typesequence, typedef)

1. labeled-value : string, typedef
1. object : zero | (labeled-value, object)





1. typedef:shortFixedLengthTypedArray (this prefix : one byte [length] : prefix(typedef) : length * size(typedef) bytes)
1. typedef:mediumFixedLengthTypedArray (this prefix : two bytes [length] : prefix(typedef) : length * size(typedef) bytes)
1. typedef:longFixedLengthTypedArray (this prefix : four bytes [length] : prefix(typedef) : length * size(typedef) bytes)
1. typedef:extraLongFixedLengthTypedArray (this prefix : eight bytes [length] : prefix(typedef) : length * size(typedef) bytes)

1. typedef:typedArray (prefix(this) : prefix(typedef) : size(typedef) bytes) OR (prefix(another instance) : size(typedef) bytes)
1. typedef:object ((prefix(this) OR prefix(another instance) : string : value)


remaining - user prefixes
