var tu = Object.defineProperty;
var nu = (e, t, n) => t in e ? tu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Lt = (e, t, n) => nu(e, typeof t != "symbol" ? t + "" : t, n);
var y;
(function(e) {
  e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(y || (y = {}));
class ru {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? wn.isErrorNoTelemetry(t) ? new wn(t.message + `

` + t.stack) : new Error(t.message + `

` + t.stack) : t;
      }, 0);
    };
  }
  addListener(t) {
    return this.listeners.push(t), () => {
      this._removeListener(t);
    };
  }
  emit(t) {
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  _removeListener(t) {
    this.listeners.splice(this.listeners.indexOf(t), 1);
  }
  setUnexpectedErrorHandler(t) {
    this.unexpectedErrorHandler = t;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(t) {
    this.unexpectedErrorHandler(t), this.emit(t);
  }
  onUnexpectedExternalError(t) {
    this.unexpectedErrorHandler(t);
  }
}
const iu = new ru();
function Bn(e) {
  su(e) || iu.onUnexpectedError(e);
}
function oi(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: r } = e, i = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: n,
      stack: i,
      noTelemetry: wn.isErrorNoTelemetry(e),
      cause: r ? oi(r) : void 0,
      code: e.code
    };
  }
  return e;
}
const li = "Canceled";
function su(e) {
  return e instanceof au ? !0 : e instanceof Error && e.name === li && e.message === li;
}
class au extends Error {
  constructor() {
    super(li), this.name = this.message;
  }
}
const un = class un extends Error {
  static is(t) {
    return t instanceof un || t instanceof Error && t.name === un._name;
  }
  constructor(t) {
    super(t), this.name = un._name;
  }
};
un._name = "PendingMigrationError";
let ps = un;
class wn extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof wn)
      return t;
    const n = new wn();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}
class he extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, he.prototype);
  }
}
function ou(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e) {
    const i = t(r);
    let s = n[i];
    s || (s = n[i] = []), s.push(r);
  }
  return n;
}
function lu(e, t) {
  const n = this;
  let r = !1, i;
  return function() {
    return r || (r = !0, i = e.apply(n, arguments)), i;
  };
}
function vn(e, t) {
  const n = Ln(e, t);
  return n === -1 ? void 0 : e[n];
}
function Ln(e, t, n = 0, r = e.length) {
  let i = n, s = r;
  for (; i < s; ) {
    const a = Math.floor((i + s) / 2);
    t(e[a]) ? i = a + 1 : s = a;
  }
  return i - 1;
}
function uu(e, t) {
  const n = ui(e, t);
  return n === e.length ? void 0 : e[n];
}
function ui(e, t, n = 0, r = e.length) {
  let i = n, s = r;
  for (; i < s; ) {
    const a = Math.floor((i + s) / 2);
    t(e[a]) ? s = a : i = a + 1;
  }
  return i;
}
const qr = class qr {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (qr.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const r of this._array)
          if (this._prevFindLastPredicate(r) && !t(r))
            throw new Error(
              "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
            );
      }
      this._prevFindLastPredicate = t;
    }
    const n = Ln(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
qr.assertInvariants = !1;
let wr = qr;
function sl(e, t, n = (r, i) => r === i) {
  if (e === t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let r = 0, i = e.length; r < i; r++)
    if (!n(e[r], t[r]))
      return !1;
  return !0;
}
function* cu(e, t) {
  let n, r;
  for (const i of e)
    r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
  n && (yield n);
}
function fu(e, t) {
  for (let n = 0; n <= e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function hu(e, t) {
  for (let n = 0; n < e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function gu(e, t) {
  for (const n of t)
    e.push(n);
}
var ci;
(function(e) {
  function t(s) {
    return s < 0;
  }
  e.isLessThan = t;
  function n(s) {
    return s <= 0;
  }
  e.isLessThanOrEqual = n;
  function r(s) {
    return s > 0;
  }
  e.isGreaterThan = r;
  function i(s) {
    return s === 0;
  }
  e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(ci || (ci = {}));
function Wt(e, t) {
  return (n, r) => t(e(n), e(r));
}
const dn = (e, t) => e - t;
function mu(e) {
  return (t, n) => -e(t, n);
}
const cn = class cn {
  constructor(t) {
    this.iterate = t;
  }
  forEach(t) {
    this.iterate((n) => (t(n), !0));
  }
  toArray() {
    const t = [];
    return this.iterate((n) => (t.push(n), !0)), t;
  }
  filter(t) {
    return new cn((n) => this.iterate((r) => t(r) ? n(r) : !0));
  }
  map(t) {
    return new cn((n) => this.iterate((r) => n(t(r))));
  }
  some(t) {
    let n = !1;
    return this.iterate((r) => (n = t(r), !n)), n;
  }
  findFirst(t) {
    let n;
    return this.iterate((r) => t(r) ? (n = r, !1) : !0), n;
  }
  findLast(t) {
    let n;
    return this.iterate((r) => (t(r) && (n = r), !0)), n;
  }
  findLastMaxBy(t) {
    let n, r = !0;
    return this.iterate((i) => ((r || ci.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
  }
};
cn.empty = new cn((t) => {
});
let bs = cn;
function du(e, t) {
  return e.reduce((n, r) => n + t(r), 0);
}
var _s, ws;
class pu {
  constructor(t, n) {
    this.uri = t, this.value = n;
  }
}
function bu(e) {
  return Array.isArray(e);
}
const Bt = class Bt {
  constructor(t, n) {
    if (this[_s] = "ResourceMap", t instanceof Bt)
      this.map = new Map(t.map), this.toKey = n ?? Bt.defaultToKey;
    else if (bu(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? Bt.defaultToKey;
      for (const [r, i] of t)
        this.set(r, i);
    } else
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? Bt.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new pu(t, n)), this;
  }
  get(t) {
    var n;
    return (n = this.map.get(this.toKey(t))) == null ? void 0 : n.value;
  }
  has(t) {
    return this.map.has(this.toKey(t));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(t) {
    return this.map.delete(this.toKey(t));
  }
  forEach(t, n) {
    typeof n < "u" && (t = t.bind(n));
    for (const [r, i] of this.map)
      t(i.value, i.uri, this);
  }
  *values() {
    for (const t of this.map.values())
      yield t.value;
  }
  *keys() {
    for (const t of this.map.values())
      yield t.uri;
  }
  *entries() {
    for (const t of this.map.values())
      yield [t.uri, t.value];
  }
  *[(_s = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map)
      yield [t.uri, t.value];
  }
};
Bt.defaultToKey = (t) => t.toString();
let fi = Bt;
var Te;
(function(e) {
  e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(Te || (Te = {}));
class _u {
  constructor() {
    this[ws] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
  }
  clear() {
    this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    var t;
    return (t = this._head) == null ? void 0 : t.value;
  }
  get last() {
    var t;
    return (t = this._tail) == null ? void 0 : t.value;
  }
  has(t) {
    return this._map.has(t);
  }
  get(t, n = Te.None) {
    const r = this._map.get(t);
    if (r)
      return n !== Te.None && this.touch(r, n), r.value;
  }
  set(t, n, r = Te.None) {
    let i = this._map.get(t);
    if (i)
      i.value = n, r !== Te.None && this.touch(i, r);
    else {
      switch (i = { key: t, value: n, next: void 0, previous: void 0 }, r) {
        case Te.None:
          this.addItemLast(i);
          break;
        case Te.AsOld:
          this.addItemFirst(i);
          break;
        case Te.AsNew:
          this.addItemLast(i);
          break;
        default:
          this.addItemLast(i);
          break;
      }
      this._map.set(t, i), this._size++;
    }
    return this;
  }
  delete(t) {
    return !!this.remove(t);
  }
  remove(t) {
    const n = this._map.get(t);
    if (n)
      return this._map.delete(t), this.removeItem(n), this._size--, n.value;
  }
  shift() {
    if (!this._head && !this._tail)
      return;
    if (!this._head || !this._tail)
      throw new Error("Invalid list");
    const t = this._head;
    return this._map.delete(t.key), this.removeItem(t), this._size--, t.value;
  }
  forEach(t, n) {
    const r = this._state;
    let i = this._head;
    for (; i; ) {
      if (n ? t.bind(n)(i.value, i.key, this) : t(i.value, i.key, this), this._state !== r)
        throw new Error("LinkedMap got modified during iteration.");
      i = i.next;
    }
  }
  keys() {
    const t = this, n = this._state;
    let r = this._head;
    const i = {
      [Symbol.iterator]() {
        return i;
      },
      next() {
        if (t._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        if (r) {
          const s = { value: r.key, done: !1 };
          return r = r.next, s;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return i;
  }
  values() {
    const t = this, n = this._state;
    let r = this._head;
    const i = {
      [Symbol.iterator]() {
        return i;
      },
      next() {
        if (t._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        if (r) {
          const s = { value: r.value, done: !1 };
          return r = r.next, s;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return i;
  }
  entries() {
    const t = this, n = this._state;
    let r = this._head;
    const i = {
      [Symbol.iterator]() {
        return i;
      },
      next() {
        if (t._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        if (r) {
          const s = { value: [r.key, r.value], done: !1 };
          return r = r.next, s;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return i;
  }
  [(ws = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(t) {
    if (t >= this.size)
      return;
    if (t === 0) {
      this.clear();
      return;
    }
    let n = this._head, r = this.size;
    for (; n && r > t; )
      this._map.delete(n.key), n = n.next, r--;
    this._head = n, this._size = r, n && (n.previous = void 0), this._state++;
  }
  trimNew(t) {
    if (t >= this.size)
      return;
    if (t === 0) {
      this.clear();
      return;
    }
    let n = this._tail, r = this.size;
    for (; n && r > t; )
      this._map.delete(n.key), n = n.previous, r--;
    this._tail = n, this._size = r, n && (n.next = void 0), this._state++;
  }
  addItemFirst(t) {
    if (!this._head && !this._tail)
      this._tail = t;
    else if (this._head)
      t.next = this._head, this._head.previous = t;
    else
      throw new Error("Invalid list");
    this._head = t, this._state++;
  }
  addItemLast(t) {
    if (!this._head && !this._tail)
      this._head = t;
    else if (this._tail)
      t.previous = this._tail, this._tail.next = t;
    else
      throw new Error("Invalid list");
    this._tail = t, this._state++;
  }
  removeItem(t) {
    if (t === this._head && t === this._tail)
      this._head = void 0, this._tail = void 0;
    else if (t === this._head) {
      if (!t.next)
        throw new Error("Invalid list");
      t.next.previous = void 0, this._head = t.next;
    } else if (t === this._tail) {
      if (!t.previous)
        throw new Error("Invalid list");
      t.previous.next = void 0, this._tail = t.previous;
    } else {
      const n = t.next, r = t.previous;
      if (!n || !r)
        throw new Error("Invalid list");
      n.previous = r, r.next = n;
    }
    t.next = void 0, t.previous = void 0, this._state++;
  }
  touch(t, n) {
    if (!this._head || !this._tail)
      throw new Error("Invalid list");
    if (!(n !== Te.AsOld && n !== Te.AsNew)) {
      if (n === Te.AsOld) {
        if (t === this._head)
          return;
        const r = t.next, i = t.previous;
        t === this._tail ? (i.next = void 0, this._tail = i) : (r.previous = i, i.next = r), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
      } else if (n === Te.AsNew) {
        if (t === this._tail)
          return;
        const r = t.next, i = t.previous;
        t === this._head ? (r.previous = void 0, this._head = r) : (r.previous = i, i.next = r), t.next = void 0, t.previous = this._tail, this._tail.next = t, this._tail = t, this._state++;
      }
    }
  }
  toJSON() {
    const t = [];
    return this.forEach((n, r) => {
      t.push([r, n]);
    }), t;
  }
  fromJSON(t) {
    this.clear();
    for (const [n, r] of t)
      this.set(n, r);
  }
}
class wu extends _u {
  constructor(t, n = 1) {
    super(), this._limit = t, this._ratio = Math.min(Math.max(0, n), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(t) {
    this._limit = t, this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(t) {
    this._ratio = Math.min(Math.max(0, t), 1), this.checkTrim();
  }
  get(t, n = Te.AsNew) {
    return super.get(t, n);
  }
  peek(t) {
    return super.get(t, Te.None);
  }
  set(t, n) {
    return super.set(t, n, Te.AsNew), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}
class vu extends wu {
  constructor(t, n = 1) {
    super(t, n);
  }
  trim(t) {
    this.trimOld(t);
  }
  set(t, n) {
    return super.set(t, n), this.checkTrim(), this;
  }
}
class al {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(t, n) {
    let r = this.map.get(t);
    r || (r = /* @__PURE__ */ new Set(), this.map.set(t, r)), r.add(n);
  }
  delete(t, n) {
    const r = this.map.get(t);
    r && (r.delete(n), r.size === 0 && this.map.delete(t));
  }
  forEach(t, n) {
    const r = this.map.get(t);
    r && r.forEach(n);
  }
  get(t) {
    const n = this.map.get(t);
    return n || /* @__PURE__ */ new Set();
  }
}
function Lu(e, t = "Unreachable") {
  throw new Error(t);
}
function Nu(e, t = "unexpected state") {
  if (!e)
    throw typeof t == "string" ? new he(`Assertion Failed: ${t}`) : t;
}
function zn(e) {
  if (!e()) {
    debugger;
    e(), Bn(new he("Assertion Failed"));
  }
}
function is(e, t) {
  let n = 0;
  for (; n < e.length - 1; ) {
    const r = e[n], i = e[n + 1];
    if (!t(r, i))
      return !1;
    n++;
  }
  return !0;
}
function xu(e) {
  return typeof e == "string";
}
function Au(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var vr;
(function(e) {
  function t(N) {
    return !!N && typeof N == "object" && typeof N[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function r() {
    return n;
  }
  e.empty = r;
  function* i(N) {
    yield N;
  }
  e.single = i;
  function s(N) {
    return t(N) ? N : i(N);
  }
  e.wrap = s;
  function a(N) {
    return N || n;
  }
  e.from = a;
  function* l(N) {
    for (let T = N.length - 1; T >= 0; T--)
      yield N[T];
  }
  e.reverse = l;
  function o(N) {
    return !N || N[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = o;
  function u(N) {
    return N[Symbol.iterator]().next().value;
  }
  e.first = u;
  function h(N, T) {
    let D = 0;
    for (const q of N)
      if (T(q, D++))
        return !0;
    return !1;
  }
  e.some = h;
  function c(N, T) {
    let D = 0;
    for (const q of N)
      if (!T(q, D++))
        return !1;
    return !0;
  }
  e.every = c;
  function g(N, T) {
    for (const D of N)
      if (T(D))
        return D;
  }
  e.find = g;
  function* d(N, T) {
    for (const D of N)
      T(D) && (yield D);
  }
  e.filter = d;
  function* m(N, T) {
    let D = 0;
    for (const q of N)
      yield T(q, D++);
  }
  e.map = m;
  function* p(N, T) {
    let D = 0;
    for (const q of N)
      yield* T(q, D++);
  }
  e.flatMap = p;
  function* _(...N) {
    for (const T of N)
      Au(T) ? yield* T : yield T;
  }
  e.concat = _;
  function L(N, T, D) {
    let q = D;
    for (const F of N)
      q = T(q, F);
    return q;
  }
  e.reduce = L;
  function A(N) {
    let T = 0;
    for (const D of N)
      T++;
    return T;
  }
  e.length = A;
  function* b(N, T, D = N.length) {
    for (T < -N.length && (T = 0), T < 0 && (T += N.length), D < 0 ? D += N.length : D > N.length && (D = N.length); T < D; T++)
      yield N[T];
  }
  e.slice = b;
  function E(N, T = Number.POSITIVE_INFINITY) {
    const D = [];
    if (T === 0)
      return [D, N];
    const q = N[Symbol.iterator]();
    for (let F = 0; F < T; F++) {
      const k = q.next();
      if (k.done)
        return [D, e.empty()];
      D.push(k.value);
    }
    return [D, { [Symbol.iterator]() {
      return q;
    } }];
  }
  e.consume = E;
  async function x(N) {
    const T = [];
    for await (const D of N)
      T.push(D);
    return T;
  }
  e.asyncToArray = x;
  async function S(N) {
    let T = [];
    for await (const D of N)
      T = T.concat(D);
    return T;
  }
  e.asyncToArrayFlat = S;
})(vr || (vr = {}));
const Hr = class Hr {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let n = this.livingDisposables.get(t);
    return n || (n = { parent: null, source: null, isSingleton: !1, value: t, idx: Hr.idx++ }, this.livingDisposables.set(t, n)), n;
  }
  trackDisposable(t) {
    const n = this.getDisposableData(t);
    n.source || (n.source = new Error().stack);
  }
  setParent(t, n) {
    const r = this.getDisposableData(t);
    r.parent = n;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = !0;
  }
  getRootParent(t, n) {
    const r = n.get(t);
    if (r)
      return r;
    const i = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
    return n.set(t, i), i;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, r]) => r.source !== null && !this.getRootParent(r, t).isSingleton).flatMap(([r]) => r);
  }
  computeLeakingDisposables(t = 10, n) {
    let r;
    if (n)
      r = n;
    else {
      const o = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, o).isSingleton);
      if (u.length === 0)
        return;
      const h = new Set(u.map((c) => c.value));
      if (r = u.filter((c) => !(c.parent && h.has(c.parent))), r.length === 0)
        throw new Error("There are cyclic diposable chains!");
    }
    if (!r)
      return;
    function i(o) {
      function u(c, g) {
        for (; c.length > 0 && g.some(
          (d) => typeof d == "string" ? d === c[0] : c[0].match(d)
        ); )
          c.shift();
      }
      const h = o.source.split(`
`).map((c) => c.trim().replace("at ", "")).filter((c) => c !== "");
      return u(h, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), h.reverse();
    }
    const s = new al();
    for (const o of r) {
      const u = i(o);
      for (let h = 0; h <= u.length; h++)
        s.add(u.slice(0, h).join(`
`), o);
    }
    r.sort(Wt((o) => o.idx, dn));
    let a = "", l = 0;
    for (const o of r.slice(0, t)) {
      l++;
      const u = i(o), h = [];
      for (let c = 0; c < u.length; c++) {
        let g = u[c];
        g = `(shared with ${s.get(u.slice(0, c + 1).join(`
`)).size}/${r.length} leaks) at ${g}`;
        const m = s.get(u.slice(0, c).join(`
`)), p = ou([...m].map((_) => i(_)[c]), (_) => _);
        delete p[u[c]];
        for (const [_, L] of Object.entries(p))
          h.unshift(`    - stacktraces of ${L.length} other leaks continue with ${_}`);
        h.unshift(g);
      }
      a += `


==================== Leaking disposable ${l}/${r.length}: ${o.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
    }
    return r.length > t && (a += `


... and ${r.length - t} more leaking disposables

`), { leaks: r, details: a };
  }
};
Hr.idx = 0;
let vs = Hr;
function ol(e) {
  if (vr.is(e)) {
    const t = [];
    for (const n of e)
      if (n)
        try {
          n.dispose();
        } catch (r) {
          t.push(r);
        }
    if (t.length === 1)
      throw t[0];
    if (t.length > 1)
      throw new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e)
    return e.dispose(), e;
}
function Eu(...e) {
  return Xn(() => ol(e));
}
function Xn(e) {
  return {
    dispose: lu(() => {
      e();
    })
  };
}
const Wr = class Wr {
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = !1;
  }
  dispose() {
    this._isDisposed || (this._isDisposed = !0, this.clear());
  }
  get isDisposed() {
    return this._isDisposed;
  }
  clear() {
    if (this._toDispose.size !== 0)
      try {
        ol(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
  }
  add(t) {
    if (!t)
      return t;
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? Wr.DISABLE_DISPOSED_WARNING || console.warn(new Error(
      "Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!"
    ).stack) : this._toDispose.add(t), t;
  }
  delete(t) {
    if (t) {
      if (t === this)
        throw new Error("Cannot dispose a disposable on itself!");
      this._toDispose.delete(t), t.dispose();
    }
  }
  deleteAndLeak(t) {
    t && this._toDispose.has(t) && this._toDispose.delete(t);
  }
};
Wr.DISABLE_DISPOSED_WARNING = !1;
let Jn = Wr;
const ms = class ms {
  constructor() {
    this._store = new Jn(), this._store;
  }
  dispose() {
    this._store.dispose();
  }
  _register(t) {
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._store.add(t);
  }
};
ms.None = Object.freeze({ dispose() {
} });
let Nn = ms;
const fn = class fn {
  constructor(t) {
    this.element = t, this.next = fn.Undefined, this.prev = fn.Undefined;
  }
};
fn.Undefined = new fn(void 0);
let ae = fn;
class Ru {
  constructor() {
    this._first = ae.Undefined, this._last = ae.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === ae.Undefined;
  }
  clear() {
    let t = this._first;
    for (; t !== ae.Undefined; ) {
      const n = t.next;
      t.prev = ae.Undefined, t.next = ae.Undefined, t = n;
    }
    this._first = ae.Undefined, this._last = ae.Undefined, this._size = 0;
  }
  unshift(t) {
    return this._insert(t, !1);
  }
  push(t) {
    return this._insert(t, !0);
  }
  _insert(t, n) {
    const r = new ae(t);
    if (this._first === ae.Undefined)
      this._first = r, this._last = r;
    else if (n) {
      const s = this._last;
      this._last = r, r.prev = s, s.next = r;
    } else {
      const s = this._first;
      this._first = r, r.next = s, s.prev = r;
    }
    this._size += 1;
    let i = !1;
    return () => {
      i || (i = !0, this._remove(r));
    };
  }
  shift() {
    if (this._first !== ae.Undefined) {
      const t = this._first.element;
      return this._remove(this._first), t;
    }
  }
  pop() {
    if (this._last !== ae.Undefined) {
      const t = this._last.element;
      return this._remove(this._last), t;
    }
  }
  _remove(t) {
    if (t.prev !== ae.Undefined && t.next !== ae.Undefined) {
      const n = t.prev;
      n.next = t.next, t.next.prev = n;
    } else t.prev === ae.Undefined && t.next === ae.Undefined ? (this._first = ae.Undefined, this._last = ae.Undefined) : t.next === ae.Undefined ? (this._last = this._last.prev, this._last.next = ae.Undefined) : t.prev === ae.Undefined && (this._first = this._first.next, this._first.prev = ae.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t = this._first;
    for (; t !== ae.Undefined; )
      yield t.element, t = t.next;
  }
}
const yu = globalThis.performance.now.bind(globalThis.performance);
class Jr {
  static create(t) {
    return new Jr(t);
  }
  constructor(t) {
    this._now = t === !1 ? Date.now : yu, this._startTime = this._now(), this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now(), this._stopTime = -1;
  }
  elapsed() {
    return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
  }
}
var Lr;
(function(e) {
  e.None = () => Nn.None;
  function t(I, U) {
    return g(I, () => {
    }, 0, void 0, !0, void 0, U);
  }
  e.defer = t;
  function n(I) {
    return (U, V = null, B) => {
      let $ = !1, J;
      return J = I((Y) => {
        if (!$)
          return J ? J.dispose() : $ = !0, U.call(V, Y);
      }, null, B), $ && J.dispose(), J;
    };
  }
  e.once = n;
  function r(I, U) {
    return e.once(e.filter(I, U));
  }
  e.onceIf = r;
  function i(I, U, V) {
    return h((B, $ = null, J) => I((Y) => B.call($, U(Y)), null, J), V);
  }
  e.map = i;
  function s(I, U, V) {
    return h((B, $ = null, J) => I((Y) => {
      U(Y), B.call($, Y);
    }, null, J), V);
  }
  e.forEach = s;
  function a(I, U, V) {
    return h((B, $ = null, J) => I((Y) => U(Y) && B.call($, Y), null, J), V);
  }
  e.filter = a;
  function l(I) {
    return I;
  }
  e.signal = l;
  function o(...I) {
    return (U, V = null, B) => {
      const $ = Eu(...I.map((J) => J((Y) => U.call(V, Y))));
      return c($, B);
    };
  }
  e.any = o;
  function u(I, U, V, B) {
    let $ = V;
    return i(I, (J) => ($ = U($, J), $), B);
  }
  e.reduce = u;
  function h(I, U) {
    let V;
    const B = {
      onWillAddFirstListener() {
        V = I($.fire, $);
      },
      onDidRemoveLastListener() {
        V == null || V.dispose();
      }
    }, $ = new Ge(B);
    return U == null || U.add($), $.event;
  }
  function c(I, U) {
    return U instanceof Array ? U.push(I) : U && U.add(I), I;
  }
  function g(I, U, V = 100, B = !1, $ = !1, J, Y) {
    let C, ge, Dt, rr = 0, Ft;
    const Kl = {
      leakWarningThreshold: J,
      onWillAddFirstListener() {
        C = I((Cl) => {
          rr++, ge = U(ge, Cl), B && !Dt && (ir.fire(ge), ge = void 0), Ft = () => {
            const eu = ge;
            ge = void 0, Dt = void 0, (!B || rr > 1) && ir.fire(eu), rr = 0;
          }, typeof V == "number" ? (Dt && clearTimeout(Dt), Dt = setTimeout(Ft, V)) : Dt === void 0 && (Dt = null, queueMicrotask(Ft));
        });
      },
      onWillRemoveListener() {
        $ && rr > 0 && (Ft == null || Ft());
      },
      onDidRemoveLastListener() {
        Ft = void 0, C.dispose();
      }
    }, ir = new Ge(Kl);
    return Y == null || Y.add(ir), ir.event;
  }
  e.debounce = g;
  function d(I, U = 0, V) {
    return e.debounce(I, (B, $) => B ? (B.push($), B) : [$], U, void 0, !0, void 0, V);
  }
  e.accumulate = d;
  function m(I, U = (B, $) => B === $, V) {
    let B = !0, $;
    return a(I, (J) => {
      const Y = B || !U(J, $);
      return B = !1, $ = J, Y;
    }, V);
  }
  e.latch = m;
  function p(I, U, V) {
    return [
      e.filter(I, U, V),
      e.filter(I, (B) => !U(B), V)
    ];
  }
  e.split = p;
  function _(I, U = !1, V = [], B) {
    let $ = V.slice(), J = I((ge) => {
      $ ? $.push(ge) : C.fire(ge);
    });
    B && B.add(J);
    const Y = () => {
      $ == null || $.forEach((ge) => C.fire(ge)), $ = null;
    }, C = new Ge({
      onWillAddFirstListener() {
        J || (J = I((ge) => C.fire(ge)), B && B.add(J));
      },
      onDidAddFirstListener() {
        $ && (U ? setTimeout(Y) : Y());
      },
      onDidRemoveLastListener() {
        J && J.dispose(), J = null;
      }
    });
    return B && B.add(C), C.event;
  }
  e.buffer = _;
  function L(I, U) {
    return (B, $, J) => {
      const Y = U(new b());
      return I(function(C) {
        const ge = Y.evaluate(C);
        ge !== A && B.call($, ge);
      }, void 0, J);
    };
  }
  e.chain = L;
  const A = Symbol("HaltChainable");
  class b {
    constructor() {
      this.steps = [];
    }
    map(U) {
      return this.steps.push(U), this;
    }
    forEach(U) {
      return this.steps.push((V) => (U(V), V)), this;
    }
    filter(U) {
      return this.steps.push((V) => U(V) ? V : A), this;
    }
    reduce(U, V) {
      let B = V;
      return this.steps.push(($) => (B = U(B, $), B)), this;
    }
    latch(U = (V, B) => V === B) {
      let V = !0, B;
      return this.steps.push(($) => {
        const J = V || !U($, B);
        return V = !1, B = $, J ? $ : A;
      }), this;
    }
    evaluate(U) {
      for (const V of this.steps)
        if (U = V(U), U === A)
          break;
      return U;
    }
  }
  function E(I, U, V = (B) => B) {
    const B = (...C) => Y.fire(V(...C)), $ = () => I.on(U, B), J = () => I.removeListener(U, B), Y = new Ge(
      { onWillAddFirstListener: $, onDidRemoveLastListener: J }
    );
    return Y.event;
  }
  e.fromNodeEventEmitter = E;
  function x(I, U, V = (B) => B) {
    const B = (...C) => Y.fire(V(...C)), $ = () => I.addEventListener(U, B), J = () => I.removeEventListener(U, B), Y = new Ge(
      { onWillAddFirstListener: $, onDidRemoveLastListener: J }
    );
    return Y.event;
  }
  e.fromDOMEventEmitter = x;
  function S(I, U) {
    let V;
    const B = new Promise(($, J) => {
      const Y = n(I)($, null, U);
      V = () => Y.dispose();
    });
    return B.cancel = V, B;
  }
  e.toPromise = S;
  function N(I) {
    const U = new Ge();
    return I.then((V) => {
      U.fire(V);
    }, () => {
      U.fire(void 0);
    }).finally(() => {
      U.dispose();
    }), U.event;
  }
  e.fromPromise = N;
  function T(I, U) {
    return I((V) => U.fire(V));
  }
  e.forward = T;
  function D(I, U, V) {
    return U(V), I((B) => U(B));
  }
  e.runAndSubscribe = D;
  class q {
    constructor(U, V) {
      this._observable = U, this._counter = 0, this._hasChanged = !1;
      const B = {
        onWillAddFirstListener: () => {
          U.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          U.removeObserver(this);
        }
      };
      this.emitter = new Ge(B), V && V.add(this.emitter);
    }
    beginUpdate(U) {
      this._counter++;
    }
    handlePossibleChange(U) {
    }
    handleChange(U, V) {
      this._hasChanged = !0;
    }
    endUpdate(U) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
    }
  }
  function F(I, U) {
    return new q(I, U).emitter.event;
  }
  e.fromObservable = F;
  function k(I) {
    return (U, V, B) => {
      let $ = 0, J = !1;
      const Y = {
        beginUpdate() {
          $++;
        },
        endUpdate() {
          $--, $ === 0 && (I.reportChanges(), J && (J = !1, U.call(V)));
        },
        handlePossibleChange() {
        },
        handleChange() {
          J = !0;
        }
      };
      I.addObserver(Y), I.reportChanges();
      const C = {
        dispose() {
          I.removeObserver(Y);
        }
      };
      return B instanceof Jn ? B.add(C) : Array.isArray(B) && B.push(C), C;
    };
  }
  e.fromObservableLight = k;
})(Lr || (Lr = {}));
const hn = class hn {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${hn._idPool++}`, hn.all.add(this);
  }
  start(t) {
    this._stopWatch = new Jr(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
hn.all = /* @__PURE__ */ new Set(), hn._idPool = 0;
let hi = hn, Tu = -1;
const jr = class jr {
  constructor(t, n, r = (jr._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = t, this.threshold = n, this.name = r, this._warnCountdown = 0;
  }
  dispose() {
    var t;
    (t = this._stacks) == null || t.clear();
  }
  check(t, n) {
    const r = this.threshold;
    if (r <= 0 || n < r)
      return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const i = this._stacks.get(t.value) || 0;
    if (this._stacks.set(t.value, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = r * 0.5;
      const [s, a] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${a}):`;
      console.warn(l), console.warn(s);
      const o = new ku(l, s);
      this._errorHandler(o);
    }
    return () => {
      const s = this._stacks.get(t.value) || 0;
      this._stacks.set(t.value, s - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks)
      return;
    let t, n = 0;
    for (const [r, i] of this._stacks)
      (!t || n < i) && (t = [r, i], n = i);
    return t;
  }
};
jr._idPool = 1;
let gi = jr;
class ss {
  static create() {
    const t = new Error();
    return new ss(t.stack ?? "");
  }
  constructor(t) {
    this.value = t;
  }
  print() {
    console.warn(this.value.split(`
`).slice(2).join(`
`));
  }
}
class ku extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerLeakError", this.stack = n;
  }
}
class Su extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerRefusalError", this.stack = n;
  }
}
let Mu = 0;
class Yr {
  constructor(t) {
    this.value = t, this.id = Mu++;
  }
}
const Iu = 2;
class Ge {
  constructor(t) {
    var n, r, i, s;
    this._size = 0, this._options = t, this._leakageMon = (n = this._options) != null && n.leakWarningThreshold ? new gi(
      (t == null ? void 0 : t.onListenerError) ?? Bn,
      ((r = this._options) == null ? void 0 : r.leakWarningThreshold) ?? Tu
    ) : void 0, this._perfMon = (i = this._options) != null && i._profName ? new hi(this._options._profName) : void 0, this._deliveryQueue = (s = this._options) == null ? void 0 : s.deliveryQueue;
  }
  dispose() {
    var t, n, r, i;
    this._disposed || (this._disposed = !0, ((t = this._deliveryQueue) == null ? void 0 : t.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (r = (n = this._options) == null ? void 0 : n.onDidRemoveLastListener) == null || r.call(n), (i = this._leakageMon) == null || i.dispose());
  }
  get event() {
    return this._event ?? (this._event = (t, n, r) => {
      var l, o, u, h, c, g, d;
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const m = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(m);
        const p = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], _ = new Su(
          `${m}. HINT: Stack shows most frequent listener (${p[1]}-times)`,
          p[0]
        );
        return (((l = this._options) == null ? void 0 : l.onListenerError) || Bn)(_), Nn.None;
      }
      if (this._disposed)
        return Nn.None;
      n && (t = t.bind(n));
      const i = new Yr(t);
      let s;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (i.stack = ss.create(), s = this._leakageMon.check(i.stack, this._size + 1)), this._listeners ? this._listeners instanceof Yr ? (this._deliveryQueue ?? (this._deliveryQueue = new Uu()), this._listeners = [this._listeners, i]) : this._listeners.push(i) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = i, (c = (h = this._options) == null ? void 0 : h.onDidAddFirstListener) == null || c.call(h, this)), (d = (g = this._options) == null ? void 0 : g.onDidAddListener) == null || d.call(g, this), this._size++;
      const a = Xn(() => {
        s == null || s(), this._removeListener(i);
      });
      return r instanceof Jn ? r.add(a) : Array.isArray(r) && r.push(a), a;
    }), this._event;
  }
  _removeListener(t) {
    var s, a, l, o;
    if ((a = (s = this._options) == null ? void 0 : s.onWillRemoveListener) == null || a.call(s, this), !this._listeners)
      return;
    if (this._size === 1) {
      this._listeners = void 0, (o = (l = this._options) == null ? void 0 : l.onDidRemoveLastListener) == null || o.call(l, this), this._size = 0;
      return;
    }
    const n = this._listeners, r = n.indexOf(t);
    if (r === -1)
      throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, n[r] = void 0;
    const i = this._deliveryQueue.current === this;
    if (this._size * Iu <= n.length) {
      let u = 0;
      for (let h = 0; h < n.length; h++)
        n[h] ? n[u++] = n[h] : i && u < this._deliveryQueue.end && (this._deliveryQueue.end--, u < this._deliveryQueue.i && this._deliveryQueue.i--);
      n.length = u;
    }
  }
  _deliver(t, n) {
    var i;
    if (!t)
      return;
    const r = ((i = this._options) == null ? void 0 : i.onListenerError) || Bn;
    if (!r) {
      t.value(n);
      return;
    }
    try {
      t.value(n);
    } catch (s) {
      r(s);
    }
  }
  _deliverQueue(t) {
    const n = t.current._listeners;
    for (; t.i < t.end; )
      this._deliver(n[t.i++], t.value);
    t.reset();
  }
  fire(t) {
    var n, r, i, s;
    if ((n = this._deliveryQueue) != null && n.current && (this._deliverQueue(this._deliveryQueue), (r = this._perfMon) == null || r.stop()), (i = this._perfMon) == null || i.start(this._size), this._listeners) if (this._listeners instanceof Yr)
      this._deliver(this._listeners, t);
    else {
      const a = this._deliveryQueue;
      a.enqueue(this, t, this._listeners.length), this._deliverQueue(a);
    }
    (s = this._perfMon) == null || s.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
}
class Uu {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(t, n, r) {
    this.i = 0, this.end = r, this.current = t, this.value = n;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}
function Du() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function ll() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
const Fu = ll() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Ls(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
    const s = i[0], a = t[s];
    let l = r;
    return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l;
  }), Fu && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function X(e, t, ...n) {
  return Ls(typeof e == "number" ? Pu(e, t) : t, n);
}
function Pu(e, t) {
  var r;
  const n = (r = Du()) == null ? void 0 : r[e];
  if (typeof n != "string") {
    if (typeof t == "string")
      return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
const an = "en";
let Yn = !1, Qn = !1, hr = !1, ul = !1, as = !1, cl = !1, sr, gr = an, Ns = an, Ou, Ye;
const _t = globalThis;
let Le;
var tl;
typeof _t.vscode < "u" && typeof _t.vscode.process < "u" ? Le = _t.vscode.process : typeof process < "u" && typeof ((tl = process == null ? void 0 : process.versions) == null ? void 0 : tl.node) == "string" && (Le = process);
var nl;
const Bu = typeof ((nl = Le == null ? void 0 : Le.versions) == null ? void 0 : nl.electron) == "string", Vu = Bu && (Le == null ? void 0 : Le.type) === "renderer";
var rl;
if (typeof Le == "object") {
  Yn = Le.platform === "win32", Qn = Le.platform === "darwin", hr = Le.platform === "linux", hr && Le.env.SNAP && Le.env.SNAP_REVISION, Le.env.CI || Le.env.BUILD_ARTIFACTSTAGINGDIRECTORY || Le.env.GITHUB_WORKSPACE, sr = an, gr = an;
  const e = Le.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      sr = t.userLocale, Ns = t.osLocale, gr = t.resolvedLanguage || an, Ou = (rl = t.languagePack) == null ? void 0 : rl.translationsConfigFile;
    } catch {
    }
  ul = !0;
} else typeof navigator == "object" && !Vu ? (Ye = navigator.userAgent, Yn = Ye.indexOf("Windows") >= 0, Qn = Ye.indexOf("Macintosh") >= 0, cl = (Ye.indexOf("Macintosh") >= 0 || Ye.indexOf("iPad") >= 0 || Ye.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, hr = Ye.indexOf("Linux") >= 0, (Ye == null ? void 0 : Ye.indexOf("Mobi")) >= 0, as = !0, gr = ll() || an, sr = navigator.language.toLowerCase(), Ns = sr) : console.error("Unable to resolve platform.");
var pn;
(function(e) {
  e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(pn || (pn = {}));
pn.Web;
Qn ? pn.Mac : Yn ? pn.Windows : hr && pn.Linux;
const xn = Yn, $u = Qn, qu = ul, Hu = as, Wu = as && typeof _t.importScripts == "function", ju = Wu ? _t.origin : void 0, ct = Ye, Nt = gr;
var xs;
(function(e) {
  function t() {
    return Nt;
  }
  e.value = t;
  function n() {
    return Nt.length === 2 ? Nt === "en" : Nt.length >= 3 ? Nt[0] === "e" && Nt[1] === "n" && Nt[2] === "-" : !1;
  }
  e.isDefaultVariant = n;
  function r() {
    return Nt === "en";
  }
  e.isDefault = r;
})(xs || (xs = {}));
const Gu = typeof _t.postMessage == "function" && !_t.importScripts;
(() => {
  if (Gu) {
    const e = [];
    _t.addEventListener("message", (n) => {
      if (n.data && n.data.vscodeScheduleAsyncWork)
        for (let r = 0, i = e.length; r < i; r++) {
          const s = e[r];
          if (s.id === n.data.vscodeScheduleAsyncWork) {
            e.splice(r, 1), s.callback();
            return;
          }
        }
    });
    let t = 0;
    return (n) => {
      const r = ++t;
      e.push({
        id: r,
        callback: n
      }), _t.postMessage({ vscodeScheduleAsyncWork: r }, "*");
    };
  }
  return (e) => setTimeout(e);
})();
var Vn;
(function(e) {
  e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(Vn || (Vn = {}));
Qn || cl ? Vn.Macintosh : Yn ? Vn.Windows : Vn.Linux;
const zu = !!(ct && ct.indexOf("Chrome") >= 0);
ct && ct.indexOf("Firefox") >= 0;
!zu && ct && ct.indexOf("Safari") >= 0;
ct && ct.indexOf("Edg/") >= 0;
ct && ct.indexOf("Android") >= 0;
const fl = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
});
var Nr;
(function(e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof mr ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: Lr.None
  }), e.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: fl
  });
})(Nr || (Nr = {}));
class mr {
  constructor() {
    this._isCancelled = !1, this._emitter = null;
  }
  cancel() {
    this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    return this._isCancelled ? fl : (this._emitter || (this._emitter = new Ge()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}
class Xu {
  constructor(t) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = t && t.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new mr()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof mr && this._token.cancel() : this._token = Nr.Cancelled;
  }
  dispose(t = !1) {
    var n;
    t && this.cancel(), (n = this._parentListener) == null || n.dispose(), this._token ? this._token instanceof mr && this._token.dispose() : this._token = Nr.None;
  }
}
function Ju(e) {
  return e;
}
class Yu {
  constructor(t, n) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = Ju) : (this._fn = n, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const n = this._computeKey(t);
    return this.lastArgKey !== n && (this.lastArgKey = n, this.lastCache = this._fn(t)), this.lastCache;
  }
}
class mi {
  constructor(t) {
    this.executor = t, this._didRun = !1;
  }
  get hasValue() {
    return this._didRun;
  }
  get value() {
    if (!this._didRun)
      try {
        this._value = this.executor();
      } catch (t) {
        this._error = t;
      } finally {
        this._didRun = !0;
      }
    if (this._error)
      throw this._error;
    return this._value;
  }
  get rawValue() {
    return this._value;
  }
}
var Je;
(function(e) {
  e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(Je || (Je = {}));
function As(e) {
  return e < 0 ? 0 : e > Je.MAX_UINT_8 ? Je.MAX_UINT_8 : e | 0;
}
function Qt(e) {
  return e < 0 ? 0 : e > Je.MAX_UINT_32 ? Je.MAX_UINT_32 : e | 0;
}
function Qu(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Zu(e) {
  return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
}
function hl(e) {
  return e.split(/\r\n|\r|\n/);
}
function Ku(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const r = e.charCodeAt(t);
    if (r !== y.Space && r !== y.Tab)
      return t;
  }
  return -1;
}
function Cu(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const r = e.charCodeAt(n);
    if (r !== y.Space && r !== y.Tab)
      return n;
  }
  return -1;
}
function ec(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function tc(e, t, n = 0, r = e.length, i = 0, s = t.length) {
  for (; n < r && i < s; n++, i++) {
    const o = e.charCodeAt(n), u = t.charCodeAt(i);
    if (o < u)
      return -1;
    if (o > u)
      return 1;
  }
  const a = r - n, l = s - i;
  return a < l ? -1 : a > l ? 1 : 0;
}
function gl(e, t, n = 0, r = e.length, i = 0, s = t.length) {
  for (; n < r && i < s; n++, i++) {
    let o = e.charCodeAt(n), u = t.charCodeAt(i);
    if (o === u)
      continue;
    if (o >= 128 || u >= 128)
      return tc(e.toLowerCase(), t.toLowerCase(), n, r, i, s);
    Es(o) && (o -= 32), Es(u) && (u -= 32);
    const h = o - u;
    if (h !== 0)
      return h;
  }
  const a = r - n, l = s - i;
  return a < l ? -1 : a > l ? 1 : 0;
}
function Es(e) {
  return e >= y.a && e <= y.z;
}
function ml(e) {
  return e >= y.A && e <= y.Z;
}
function nc(e, t) {
  return e.length === t.length && gl(e, t) === 0;
}
function rc(e, t) {
  const n = t.length;
  return t.length > e.length ? !1 : gl(e, t, 0, n) === 0;
}
function xr(e, t) {
  const n = Math.min(e.length, t.length);
  let r;
  for (r = 0; r < n; r++)
    if (e.charCodeAt(r) !== t.charCodeAt(r))
      return r;
  return n;
}
function Ar(e, t) {
  const n = Math.min(e.length, t.length);
  let r;
  const i = e.length - 1, s = t.length - 1;
  for (r = 0; r < n; r++)
    if (e.charCodeAt(i - r) !== t.charCodeAt(s - r))
      return r;
  return n;
}
function Er(e) {
  return 55296 <= e && e <= 56319;
}
function di(e) {
  return 56320 <= e && e <= 57343;
}
function dl(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function ic(e, t, n) {
  const r = e.charCodeAt(n);
  if (Er(r) && n + 1 < t) {
    const i = e.charCodeAt(n + 1);
    if (di(i))
      return dl(r, i);
  }
  return r;
}
const sc = /^[\t\n\r\x20-\x7E]*$/;
function ac(e) {
  return sc.test(e);
}
String.fromCharCode(y.UTF8_BOM);
var Ot;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(Ot || (Ot = {}));
const Vt = class Vt {
  static getInstance() {
    return Vt._INSTANCE || (Vt._INSTANCE = new Vt()), Vt._INSTANCE;
  }
  constructor() {
    this._data = oc();
  }
  getGraphemeBreakType(t) {
    if (t < 32)
      return t === y.LineFeed ? Ot.LF : t === y.CarriageReturn ? Ot.CR : Ot.Control;
    if (t < 127)
      return Ot.Other;
    const n = this._data, r = n.length / 3;
    let i = 1;
    for (; i <= r; )
      if (t < n[3 * i])
        i = 2 * i;
      else if (t > n[3 * i + 1])
        i = 2 * i + 1;
      else
        return n[3 * i + 2];
    return Ot.Other;
  }
};
Vt._INSTANCE = null;
let Rs = Vt;
function oc() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var pi;
(function(e) {
  e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(pi || (pi = {}));
const it = class it {
  static getInstance(t) {
    return it.cache.get(Array.from(t));
  }
  static getLocales() {
    return it._locales.value;
  }
  constructor(t) {
    this.confusableDictionary = t;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const r = t.codePointAt(n);
      if (typeof r == "number" && this.isAmbiguous(r))
        return !0;
    }
    return !1;
  }
  getPrimaryConfusable(t) {
    return this.confusableDictionary.get(t);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
};
it.ambiguousCharacterData = new mi(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), it.cache = new Yu({ getCacheKey: JSON.stringify }, (t) => {
  function n(h) {
    const c = /* @__PURE__ */ new Map();
    for (let g = 0; g < h.length; g += 2)
      c.set(h[g], h[g + 1]);
    return c;
  }
  function r(h, c) {
    const g = new Map(h);
    for (const [d, m] of c)
      g.set(d, m);
    return g;
  }
  function i(h, c) {
    if (!h)
      return c;
    const g = /* @__PURE__ */ new Map();
    for (const [d, m] of h)
      c.has(d) && g.set(d, m);
    return g;
  }
  const s = it.ambiguousCharacterData.value;
  let a = t.filter((h) => !h.startsWith("_") && h in s);
  a.length === 0 && (a = ["_default"]);
  let l;
  for (const h of a) {
    const c = n(s[h]);
    l = i(l, c);
  }
  const o = n(s._common), u = r(o, l);
  return new it(u);
}), it._locales = new mi(() => Object.keys(it.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
let Zn = it;
const $t = class $t {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values($t.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return $t.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const r = t.codePointAt(n);
      if (typeof r == "number" && ($t.isInvisibleCharacter(r) || r === pi.space))
        return !0;
    }
    return !1;
  }
  static get codePoints() {
    return $t.getData();
  }
};
$t._data = void 0;
let $n = $t;
const Qr = "default", lc = "$initialize";
var Pe;
(function(e) {
  e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(Pe || (Pe = {}));
class uc {
  constructor(t, n, r, i, s) {
    this.vsWorker = t, this.req = n, this.channel = r, this.method = i, this.args = s, this.type = Pe.Request;
  }
}
class ys {
  constructor(t, n, r, i) {
    this.vsWorker = t, this.seq = n, this.res = r, this.err = i, this.type = Pe.Reply;
  }
}
class cc {
  constructor(t, n, r, i, s) {
    this.vsWorker = t, this.req = n, this.channel = r, this.eventName = i, this.arg = s, this.type = Pe.SubscribeEvent;
  }
}
class fc {
  constructor(t, n, r) {
    this.vsWorker = t, this.req = n, this.event = r, this.type = Pe.Event;
  }
}
class hc {
  constructor(t, n) {
    this.vsWorker = t, this.req = n, this.type = Pe.UnsubscribeEvent;
  }
}
class gc {
  constructor(t) {
    this._workerId = -1, this._handler = t, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(t) {
    this._workerId = t;
  }
  sendMessage(t, n, r) {
    const i = String(++this._lastSentReq);
    return new Promise((s, a) => {
      this._pendingReplies[i] = {
        resolve: s,
        reject: a
      }, this._send(new uc(this._workerId, i, t, n, r));
    });
  }
  listen(t, n, r) {
    let i = null;
    const s = new Ge({
      onWillAddFirstListener: () => {
        i = String(++this._lastSentReq), this._pendingEmitters.set(i, s), this._send(new cc(this._workerId, i, t, n, r));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(i), this._send(new hc(this._workerId, i)), i = null;
      }
    });
    return s.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, n) {
    const r = {
      get: (i, s) => (typeof s == "string" && !i[s] && (bl(s) ? i[s] = (a) => this.listen(t, s, a) : pl(s) ? i[s] = this.listen(t, s, void 0) : s.charCodeAt(0) === y.DollarSign && (i[s] = async (...a) => (await (n == null ? void 0 : n()), this.sendMessage(t, s, a)))), i[s])
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), r);
  }
  _handleMessage(t) {
    switch (t.type) {
      case Pe.Reply:
        return this._handleReplyMessage(t);
      case Pe.Request:
        return this._handleRequestMessage(t);
      case Pe.SubscribeEvent:
        return this._handleSubscribeEventMessage(t);
      case Pe.Event:
        return this._handleEventMessage(t);
      case Pe.UnsubscribeEvent:
        return this._handleUnsubscribeEventMessage(t);
    }
  }
  _handleReplyMessage(t) {
    if (!this._pendingReplies[t.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const n = this._pendingReplies[t.seq];
    if (delete this._pendingReplies[t.seq], t.err) {
      let r = t.err;
      t.err.$isError && (r = new Error(), r.name = t.err.name, r.message = t.err.message, r.stack = t.err.stack), n.reject(r);
      return;
    }
    n.resolve(t.res);
  }
  _handleRequestMessage(t) {
    const n = t.req;
    this._handler.handleMessage(t.channel, t.method, t.args).then((i) => {
      this._send(new ys(this._workerId, n, i, void 0));
    }, (i) => {
      i.detail instanceof Error && (i.detail = oi(i.detail)), this._send(new ys(this._workerId, n, void 0, oi(i)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const n = t.req, r = this._handler.handleEvent(t.channel, t.eventName, t.arg)((i) => {
      this._send(new fc(this._workerId, n, i));
    });
    this._pendingEvents.set(n, r);
  }
  _handleEventMessage(t) {
    if (!this._pendingEmitters.has(t.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this._pendingEmitters.get(t.req).fire(t.event);
  }
  _handleUnsubscribeEventMessage(t) {
    if (!this._pendingEvents.has(t.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this._pendingEvents.get(t.req).dispose(), this._pendingEvents.delete(t.req);
  }
  _send(t) {
    const n = [];
    if (t.type === Pe.Request)
      for (let r = 0; r < t.args.length; r++)
        t.args[r] instanceof ArrayBuffer && n.push(t.args[r]);
    else t.type === Pe.Reply && t.res instanceof ArrayBuffer && n.push(t.res);
    this._handler.sendMessage(t, n);
  }
}
function pl(e) {
  return e[0] === "o" && e[1] === "n" && ml(e.charCodeAt(2));
}
function bl(e) {
  return /^onDynamic/.test(e) && ml(e.charCodeAt(9));
}
class mc {
  constructor(t, n) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new gc({
      sendMessage: (r, i) => {
        t(r, i);
      },
      handleMessage: (r, i, s) => this._handleMessage(r, i, s),
      handleEvent: (r, i, s) => this._handleEvent(r, i, s)
    }), this.requestHandler = n(this);
  }
  onmessage(t) {
    this._protocol.handleMessage(t);
  }
  _handleMessage(t, n, r) {
    if (t === Qr && n === lc)
      return this.initialize(r[0]);
    const i = t === Qr ? this.requestHandler : this._localChannels.get(t);
    if (!i)
      return Promise.reject(new Error(`Missing channel ${t} on worker thread`));
    if (typeof i[n] != "function")
      return Promise.reject(new Error(`Missing method ${n} on worker thread channel ${t}`));
    try {
      return Promise.resolve(i[n].apply(i, r));
    } catch (s) {
      return Promise.reject(s);
    }
  }
  _handleEvent(t, n, r) {
    const i = t === Qr ? this.requestHandler : this._localChannels.get(t);
    if (!i)
      throw new Error(`Missing channel ${t} on worker thread`);
    if (bl(n)) {
      const s = i[n].call(i, r);
      if (typeof s != "function")
        throw new Error(`Missing dynamic event ${n} on request handler.`);
      return s;
    }
    if (pl(n)) {
      const s = i[n];
      if (typeof s != "function")
        throw new Error(`Missing event ${n} on request handler.`);
      return s;
    }
    throw new Error(`Malformed event name ${n}`);
  }
  setChannel(t, n) {
    this._localChannels.set(t, n);
  }
  getChannel(t) {
    if (!this._remoteChannels.has(t)) {
      const n = this._protocol.createProxyToRemoteChannel(t);
      this._remoteChannels.set(t, n);
    }
    return this._remoteChannels.get(t);
  }
  async initialize(t) {
    this._protocol.setWorkerId(t);
  }
}
let bi = !1;
function _l(e) {
  if (bi)
    throw new Error("WebWorker already initialized!");
  bi = !0;
  const t = new mc(
    (n) => globalThis.postMessage(n),
    (n) => e(n)
  );
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function dc(e) {
  globalThis.onmessage = (t) => {
    bi || _l(e);
  };
}
class Rt {
  constructor(t, n, r, i) {
    this.originalStart = t, this.originalLength = n, this.modifiedStart = r, this.modifiedLength = i;
  }
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
}
const kn = typeof Buffer < "u", pc = new mi(() => new Uint8Array(256));
let Zr, Kr;
class Ve {
  static alloc(t) {
    return kn ? new Ve(Buffer.allocUnsafe(t)) : new Ve(new Uint8Array(t));
  }
  static wrap(t) {
    return kn && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)), new Ve(t);
  }
  static fromString(t, n) {
    return !((n == null ? void 0 : n.dontUseNodeBuffer) || !1) && kn ? new Ve(Buffer.from(t)) : (Zr || (Zr = new TextEncoder()), new Ve(Zr.encode(t)));
  }
  static fromByteArray(t) {
    const n = Ve.alloc(t.length);
    for (let r = 0, i = t.length; r < i; r++)
      n.buffer[r] = t[r];
    return n;
  }
  static concat(t, n) {
    if (typeof n > "u") {
      n = 0;
      for (let s = 0, a = t.length; s < a; s++)
        n += t[s].byteLength;
    }
    const r = Ve.alloc(n);
    let i = 0;
    for (let s = 0, a = t.length; s < a; s++) {
      const l = t[s];
      r.set(l, i), i += l.byteLength;
    }
    return r;
  }
  static isNativeBuffer(t) {
    return kn && Buffer.isBuffer(t);
  }
  constructor(t) {
    this.buffer = t, this.byteLength = this.buffer.byteLength;
  }
  clone() {
    const t = Ve.alloc(this.byteLength);
    return t.set(this), t;
  }
  toString() {
    return kn ? this.buffer.toString() : (Kr || (Kr = new TextDecoder()), Kr.decode(this.buffer));
  }
  slice(t, n) {
    return new Ve(this.buffer.subarray(t, n));
  }
  set(t, n) {
    if (t instanceof Ve)
      this.buffer.set(t.buffer, n);
    else if (t instanceof Uint8Array)
      this.buffer.set(t, n);
    else if (t instanceof ArrayBuffer)
      this.buffer.set(new Uint8Array(t), n);
    else if (ArrayBuffer.isView(t))
      this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
    else
      throw new Error("Unknown argument 'array'");
  }
  readUInt32BE(t) {
    return _c(this.buffer, t);
  }
  writeUInt32BE(t, n) {
    wc(this.buffer, t, n);
  }
  readUInt32LE(t) {
    return vc(this.buffer, t);
  }
  writeUInt32LE(t, n) {
    Lc(this.buffer, t, n);
  }
  readUInt8(t) {
    return Nc(this.buffer, t);
  }
  writeUInt8(t, n) {
    xc(this.buffer, t, n);
  }
  indexOf(t, n = 0) {
    return bc(this.buffer, t instanceof Ve ? t.buffer : t, n);
  }
  equals(t) {
    return this === t ? !0 : this.byteLength !== t.byteLength ? !1 : this.buffer.every((n, r) => n === t.buffer[r]);
  }
}
function bc(e, t, n = 0) {
  const r = t.byteLength, i = e.byteLength;
  if (r === 0)
    return 0;
  if (r === 1)
    return e.indexOf(t[0]);
  if (r > i - n)
    return -1;
  const s = pc.value;
  s.fill(t.length);
  for (let u = 0; u < t.length; u++)
    s[t[u]] = t.length - u - 1;
  let a = n + t.length - 1, l = a, o = -1;
  for (; a < i; )
    if (e[a] === t[l]) {
      if (l === 0) {
        o = a;
        break;
      }
      a--, l--;
    } else
      a += Math.max(t.length - l, s[e[a]]), l = t.length - 1;
  return o;
}
function _c(e, t) {
  return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function wc(e, t, n) {
  e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
function vc(e, t) {
  return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function Lc(e, t, n) {
  e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
function Nc(e, t) {
  return e[t];
}
function xc(e, t, n) {
  e[n] = t;
}
const Ts = "0123456789abcdef";
function Ac({ buffer: e }) {
  let t = "";
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t += Ts[r >>> 4], t += Ts[r & 15];
  }
  return t;
}
function ks(e, t) {
  return (t << 5) - t + e | 0;
}
function Ec(e, t) {
  t = ks(149417, t);
  for (let n = 0, r = e.length; n < r; n++)
    t = ks(e.charCodeAt(n), t);
  return t;
}
var je;
(function(e) {
  e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(je || (je = {}));
function Cr(e, t, n = 32) {
  const r = n - t, i = ~((1 << r) - 1);
  return (e << t | (i & e) >>> r) >>> 0;
}
function Sn(e, t = 32) {
  return e instanceof ArrayBuffer ? Ac(Ve.wrap(new Uint8Array(e))) : (e >>> 0).toString(16).padStart(t / 4, "0");
}
const Gr = class Gr {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(je.BLOCK_SIZE + 3), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
  }
  update(t) {
    const n = t.length;
    if (n === 0)
      return;
    const r = this._buff;
    let i = this._buffLen, s = this._leftoverHighSurrogate, a, l;
    for (s !== 0 ? (a = s, l = -1, s = 0) : (a = t.charCodeAt(0), l = 0); ; ) {
      let o = a;
      if (Er(a))
        if (l + 1 < n) {
          const u = t.charCodeAt(l + 1);
          di(u) ? (l++, o = dl(a, u)) : o = je.UNICODE_REPLACEMENT;
        } else {
          s = a;
          break;
        }
      else di(a) && (o = je.UNICODE_REPLACEMENT);
      if (i = this._push(r, i, o), l++, l < n)
        a = t.charCodeAt(l);
      else
        break;
    }
    this._buffLen = i, this._leftoverHighSurrogate = s;
  }
  _push(t, n, r) {
    return r < 128 ? t[n++] = r : r < 2048 ? (t[n++] = 192 | (r & 1984) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : r < 65536 ? (t[n++] = 224 | (r & 61440) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : (t[n++] = 240 | (r & 1835008) >>> 18, t[n++] = 128 | (r & 258048) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0), n >= je.BLOCK_SIZE && (this._step(), n -= je.BLOCK_SIZE, this._totalLen += je.BLOCK_SIZE, t[0] = t[je.BLOCK_SIZE + 0], t[1] = t[je.BLOCK_SIZE + 1], t[2] = t[je.BLOCK_SIZE + 2]), n;
  }
  digest() {
    return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, je.UNICODE_REPLACEMENT)), this._totalLen += this._buffLen, this._wrapUp()), Sn(this._h0) + Sn(this._h1) + Sn(this._h2) + Sn(this._h3) + Sn(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
  }
  _step() {
    const t = Gr._bigBlock32, n = this._buffDV;
    for (let c = 0; c < 64; c += 4)
      t.setUint32(c, n.getUint32(c, !1), !1);
    for (let c = 64; c < 320; c += 4)
      t.setUint32(c, Cr(t.getUint32(c - 12, !1) ^ t.getUint32(c - 32, !1) ^ t.getUint32(c - 56, !1) ^ t.getUint32(c - 64, !1), 1), !1);
    let r = this._h0, i = this._h1, s = this._h2, a = this._h3, l = this._h4, o, u, h;
    for (let c = 0; c < 80; c++)
      c < 20 ? (o = i & s | ~i & a, u = 1518500249) : c < 40 ? (o = i ^ s ^ a, u = 1859775393) : c < 60 ? (o = i & s | i & a | s & a, u = 2400959708) : (o = i ^ s ^ a, u = 3395469782), h = Cr(r, 5) + o + l + u + t.getUint32(c * 4, !1) & 4294967295, l = a, a = s, s = Cr(i, 30), i = r, r = h;
    this._h0 = this._h0 + r & 4294967295, this._h1 = this._h1 + i & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + l & 4294967295;
  }
};
Gr._bigBlock32 = new DataView(new ArrayBuffer(320));
let Ss = Gr;
class Ms {
  constructor(t) {
    this.source = t;
  }
  getElements() {
    const t = this.source, n = new Int32Array(t.length);
    for (let r = 0, i = t.length; r < i; r++)
      n[r] = t.charCodeAt(r);
    return n;
  }
}
function Rc(e, t, n) {
  return new Mt(new Ms(e), new Ms(t)).ComputeDiff(n).changes;
}
class Zt {
  static Assert(t, n) {
    if (!t)
      throw new Error(n);
  }
}
class Kt {
  static Copy(t, n, r, i, s) {
    for (let a = 0; a < s; a++)
      r[i + a] = t[n + a];
  }
  static Copy2(t, n, r, i, s) {
    for (let a = 0; a < s; a++)
      r[i + a] = t[n + a];
  }
}
var dt;
(function(e) {
  e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(dt || (dt = {}));
class Is {
  constructor() {
    this.m_changes = [], this.m_originalStart = Je.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = Je.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Rt(
      this.m_originalStart,
      this.m_originalCount,
      this.m_modifiedStart,
      this.m_modifiedCount
    )), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Je.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = Je.MAX_SAFE_SMALL_INTEGER;
  }
  AddOriginalElement(t, n) {
    this.m_originalStart = Math.min(this.m_originalStart, t), this.m_modifiedStart = Math.min(this.m_modifiedStart, n), this.m_originalCount++;
  }
  AddModifiedElement(t, n) {
    this.m_originalStart = Math.min(this.m_originalStart, t), this.m_modifiedStart = Math.min(this.m_modifiedStart, n), this.m_modifiedCount++;
  }
  getChanges() {
    return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
  }
  getReverseChanges() {
    return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
  }
}
class Mt {
  constructor(t, n, r = null) {
    this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
    const [i, s, a] = Mt._getElements(t), [l, o, u] = Mt._getElements(n);
    this._hasStrings = a && u, this._originalStringElements = i, this._originalElementsOrHash = s, this._modifiedStringElements = l, this._modifiedElementsOrHash = o, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (Mt._isStringArray(n)) {
      const r = new Int32Array(n.length);
      for (let i = 0, s = n.length; i < s; i++)
        r[i] = Ec(n[i], 0);
      return [n, r, !0];
    }
    return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
  }
  ElementsAreEqual(t, n) {
    return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
  }
  ElementsAreStrictEqual(t, n) {
    if (!this.ElementsAreEqual(t, n))
      return !1;
    const r = Mt._getStrictElement(this._originalSequence, t), i = Mt._getStrictElement(this._modifiedSequence, n);
    return r === i;
  }
  static _getStrictElement(t, n) {
    return typeof t.getStrictElement == "function" ? t.getStrictElement(n) : null;
  }
  OriginalElementsAreEqual(t, n) {
    return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[n] : !0;
  }
  ModifiedElementsAreEqual(t, n) {
    return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[n] : !0;
  }
  ComputeDiff(t) {
    return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t);
  }
  _ComputeDiff(t, n, r, i, s) {
    const a = [!1];
    let l = this.ComputeDiffRecursive(t, n, r, i, a);
    return s && (l = this.PrettifyChanges(l)), {
      quitEarly: a[0],
      changes: l
    };
  }
  ComputeDiffRecursive(t, n, r, i, s) {
    for (s[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r); )
      t++, r++;
    for (; n >= t && i >= r && this.ElementsAreEqual(n, i); )
      n--, i--;
    if (t > n || r > i) {
      let c;
      return r <= i ? (Zt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), c = [
        new Rt(t, 0, r, i - r + 1)
      ]) : t <= n ? (Zt.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), c = [
        new Rt(t, n - t + 1, r, 0)
      ]) : (Zt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), Zt.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), c = []), c;
    }
    const a = [0], l = [0], o = this.ComputeRecursionPoint(t, n, r, i, a, l, s), u = a[0], h = l[0];
    if (o !== null)
      return o;
    if (!s[0]) {
      const c = this.ComputeDiffRecursive(t, u, r, h, s);
      let g = [];
      return s[0] ? g = [
        new Rt(
          u + 1,
          n - (u + 1) + 1,
          h + 1,
          i - (h + 1) + 1
        )
      ] : g = this.ComputeDiffRecursive(u + 1, n, h + 1, i, s), this.ConcatenateChanges(c, g);
    }
    return [
      new Rt(
        t,
        n - t + 1,
        r,
        i - r + 1
      )
    ];
  }
  WALKTRACE(t, n, r, i, s, a, l, o, u, h, c, g, d, m, p, _, L, A) {
    let b = null, E = null, x = new Is(), S = n, N = r, T = d[0] - _[0] - i, D = Je.MIN_SAFE_SMALL_INTEGER, q = this.m_forwardHistory.length - 1;
    do {
      const F = T + t;
      F === S || F < N && u[F - 1] < u[F + 1] ? (c = u[F + 1], m = c - T - i, c < D && x.MarkNextChange(), D = c, x.AddModifiedElement(c + 1, m), T = F + 1 - t) : (c = u[F - 1] + 1, m = c - T - i, c < D && x.MarkNextChange(), D = c - 1, x.AddOriginalElement(c, m + 1), T = F - 1 - t), q >= 0 && (u = this.m_forwardHistory[q], t = u[0], S = 1, N = u.length - 1);
    } while (--q >= -1);
    if (b = x.getReverseChanges(), A[0]) {
      let F = d[0] + 1, k = _[0] + 1;
      if (b !== null && b.length > 0) {
        const I = b[b.length - 1];
        F = Math.max(F, I.getOriginalEnd()), k = Math.max(k, I.getModifiedEnd());
      }
      E = [
        new Rt(
          F,
          g - F + 1,
          k,
          p - k + 1
        )
      ];
    } else {
      x = new Is(), S = a, N = l, T = d[0] - _[0] - o, D = Je.MAX_SAFE_SMALL_INTEGER, q = L ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const F = T + s;
        F === S || F < N && h[F - 1] >= h[F + 1] ? (c = h[F + 1] - 1, m = c - T - o, c > D && x.MarkNextChange(), D = c + 1, x.AddOriginalElement(c + 1, m + 1), T = F + 1 - s) : (c = h[F - 1], m = c - T - o, c > D && x.MarkNextChange(), D = c, x.AddModifiedElement(c + 1, m + 1), T = F - 1 - s), q >= 0 && (h = this.m_reverseHistory[q], s = h[0], S = 1, N = h.length - 1);
      } while (--q >= -1);
      E = x.getChanges();
    }
    return this.ConcatenateChanges(b, E);
  }
  ComputeRecursionPoint(t, n, r, i, s, a, l) {
    let o = 0, u = 0, h = 0, c = 0, g = 0, d = 0;
    t--, r--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const m = n - t + (i - r), p = m + 1, _ = new Int32Array(p), L = new Int32Array(p), A = i - r, b = n - t, E = t - r, x = n - i, N = (b - A) % 2 === 0;
    _[A] = t, L[b] = n, l[0] = !1;
    for (let T = 1; T <= m / 2 + 1; T++) {
      let D = 0, q = 0;
      h = this.ClipDiagonalBound(A - T, T, A, p), c = this.ClipDiagonalBound(A + T, T, A, p);
      for (let k = h; k <= c; k += 2) {
        k === h || k < c && _[k - 1] < _[k + 1] ? o = _[k + 1] : o = _[k - 1] + 1, u = o - (k - A) - E;
        const I = o;
        for (; o < n && u < i && this.ElementsAreEqual(o + 1, u + 1); )
          o++, u++;
        if (_[k] = o, o + u > D + q && (D = o, q = u), !N && Math.abs(k - b) <= T - 1 && o >= L[k])
          return s[0] = o, a[0] = u, I <= L[k] && dt.MaxDifferencesHistory > 0 && T <= dt.MaxDifferencesHistory + 1 ? this.WALKTRACE(A, h, c, E, b, g, d, x, _, L, o, n, s, u, i, a, N, l) : null;
      }
      const F = (D - t + (q - r) - T) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(D, F))
        return l[0] = !0, s[0] = D, a[0] = q, F > 0 && dt.MaxDifferencesHistory > 0 && T <= dt.MaxDifferencesHistory + 1 ? this.WALKTRACE(A, h, c, E, b, g, d, x, _, L, o, n, s, u, i, a, N, l) : (t++, r++, [
          new Rt(
            t,
            n - t + 1,
            r,
            i - r + 1
          )
        ]);
      g = this.ClipDiagonalBound(b - T, T, b, p), d = this.ClipDiagonalBound(b + T, T, b, p);
      for (let k = g; k <= d; k += 2) {
        k === g || k < d && L[k - 1] >= L[k + 1] ? o = L[k + 1] - 1 : o = L[k - 1], u = o - (k - b) - x;
        const I = o;
        for (; o > t && u > r && this.ElementsAreEqual(o, u); )
          o--, u--;
        if (L[k] = o, N && Math.abs(k - A) <= T && o <= _[k])
          return s[0] = o, a[0] = u, I >= _[k] && dt.MaxDifferencesHistory > 0 && T <= dt.MaxDifferencesHistory + 1 ? this.WALKTRACE(A, h, c, E, b, g, d, x, _, L, o, n, s, u, i, a, N, l) : null;
      }
      if (T <= dt.MaxDifferencesHistory) {
        let k = new Int32Array(c - h + 2);
        k[0] = A - h + 1, Kt.Copy2(_, h, k, 1, c - h + 1), this.m_forwardHistory.push(k), k = new Int32Array(d - g + 2), k[0] = b - g + 1, Kt.Copy2(L, g, k, 1, d - g + 1), this.m_reverseHistory.push(k);
      }
    }
    return this.WALKTRACE(A, h, c, E, b, g, d, x, _, L, o, n, s, u, i, a, N, l);
  }
  PrettifyChanges(t) {
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, a = r.originalLength > 0, l = r.modifiedLength > 0;
      for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < s && (!a || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!l || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength)); ) {
        const u = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
        if (this.ElementsAreStrictEqual(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) && !u)
          break;
        r.originalStart++, r.modifiedStart++;
      }
      const o = [null];
      if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], o)) {
        t[n] = o[0], t.splice(n + 1, 1), n--;
        continue;
      }
    }
    for (let n = t.length - 1; n >= 0; n--) {
      const r = t[n];
      let i = 0, s = 0;
      if (n > 0) {
        const c = t[n - 1];
        i = c.originalStart + c.originalLength, s = c.modifiedStart + c.modifiedLength;
      }
      const a = r.originalLength > 0, l = r.modifiedLength > 0;
      let o = 0, u = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
      for (let c = 1; ; c++) {
        const g = r.originalStart - c, d = r.modifiedStart - c;
        if (g < i || d < s || a && !this.OriginalElementsAreEqual(g, g + r.originalLength) || l && !this.ModifiedElementsAreEqual(d, d + r.modifiedLength))
          break;
        const p = (g === i && d === s ? 5 : 0) + this._boundaryScore(g, r.originalLength, d, r.modifiedLength);
        p > u && (u = p, o = c);
      }
      r.originalStart -= o, r.modifiedStart -= o;
      const h = [null];
      if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], h)) {
        t[n - 1] = h[0], t.splice(n, 1), n++;
        continue;
      }
    }
    if (this._hasStrings)
      for (let n = 1, r = t.length; n < r; n++) {
        const i = t[n - 1], s = t[n], a = s.originalStart - i.originalStart - i.originalLength, l = i.originalStart, o = s.originalStart + s.originalLength, u = o - l, h = i.modifiedStart, c = s.modifiedStart + s.modifiedLength, g = c - h;
        if (a < 5 && u < 20 && g < 20) {
          const d = this._findBetterContiguousSequence(l, u, h, g, a);
          if (d) {
            const [m, p] = d;
            (m !== i.originalStart + i.originalLength || p !== i.modifiedStart + i.modifiedLength) && (i.originalLength = m - i.originalStart, i.modifiedLength = p - i.modifiedStart, s.originalStart = m + a, s.modifiedStart = p + a, s.originalLength = o - s.originalStart, s.modifiedLength = c - s.modifiedStart);
          }
        }
      }
    return t;
  }
  _findBetterContiguousSequence(t, n, r, i, s) {
    if (n < s || i < s)
      return null;
    const a = t + n - s + 1, l = r + i - s + 1;
    let o = 0, u = 0, h = 0;
    for (let c = t; c < a; c++)
      for (let g = r; g < l; g++) {
        const d = this._contiguousSequenceScore(c, g, s);
        d > 0 && d > o && (o = d, u = c, h = g);
      }
    return o > 0 ? [u, h] : null;
  }
  _contiguousSequenceScore(t, n, r) {
    let i = 0;
    for (let s = 0; s < r; s++) {
      if (!this.ElementsAreEqual(t + s, n + s))
        return 0;
      i += this._originalStringElements[t + s].length;
    }
    return i;
  }
  _OriginalIsBoundary(t) {
    return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
  }
  _OriginalRegionIsBoundary(t, n) {
    if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1))
      return !0;
    if (n > 0) {
      const r = t + n;
      if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r))
        return !0;
    }
    return !1;
  }
  _ModifiedIsBoundary(t) {
    return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]);
  }
  _ModifiedRegionIsBoundary(t, n) {
    if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1))
      return !0;
    if (n > 0) {
      const r = t + n;
      if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r))
        return !0;
    }
    return !1;
  }
  _boundaryScore(t, n, r, i) {
    const s = this._OriginalRegionIsBoundary(t, n) ? 1 : 0, a = this._ModifiedRegionIsBoundary(r, i) ? 1 : 0;
    return s + a;
  }
  ConcatenateChanges(t, n) {
    const r = [];
    if (t.length === 0 || n.length === 0)
      return n.length > 0 ? n : t;
    if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
      const i = new Array(t.length + n.length - 1);
      return Kt.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], Kt.Copy(n, 1, i, t.length, n.length - 1), i;
    } else {
      const i = new Array(t.length + n.length);
      return Kt.Copy(t, 0, i, 0, t.length), Kt.Copy(n, 0, i, t.length, n.length), i;
    }
  }
  ChangesOverlap(t, n, r) {
    if (Zt.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), Zt.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const i = t.originalStart;
      let s = t.originalLength;
      const a = t.modifiedStart;
      let l = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (l = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new Rt(i, s, a, l), !0;
    } else
      return r[0] = null, !1;
  }
  ClipDiagonalBound(t, n, r, i) {
    if (t >= 0 && t < i)
      return t;
    const s = r, a = i - r - 1, l = n % 2 === 0;
    if (t < 0) {
      const o = s % 2 === 0;
      return l === o ? 0 : 1;
    } else {
      const o = a % 2 === 0;
      return l === o ? i - 1 : i - 2;
    }
  }
}
let ee = class Pt {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new Pt(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return Pt.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return Pt.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return Pt.isBeforeOrEqual(this, t);
  }
  static isBeforeOrEqual(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
  }
  static compare(t, n) {
    const r = t.lineNumber | 0, i = n.lineNumber | 0;
    if (r === i) {
      const s = t.column | 0, a = n.column | 0;
      return s - a;
    }
    return r - i;
  }
  clone() {
    return new Pt(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new Pt(t.lineNumber, t.column);
  }
  static isIPosition(t) {
    return t && typeof t.lineNumber == "number" && typeof t.column == "number";
  }
  toJSON() {
    return {
      lineNumber: this.lineNumber,
      column: this.column
    };
  }
}, G = class de {
  constructor(t, n, r, i) {
    t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
  }
  isEmpty() {
    return de.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return de.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return de.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return de.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return de.plusRange(this, t);
  }
  static plusRange(t, n) {
    let r, i, s, a;
    return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new de(r, i, s, a);
  }
  intersectRanges(t) {
    return de.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let r = t.startLineNumber, i = t.startColumn, s = t.endLineNumber, a = t.endColumn;
    const l = n.startLineNumber, o = n.startColumn, u = n.endLineNumber, h = n.endColumn;
    return r < l ? (r = l, i = o) : r === l && (i = Math.max(i, o)), s > u ? (s = u, a = h) : s === u && (a = Math.min(a, h)), r > s || r === s && i > a ? null : new de(
      r,
      i,
      s,
      a
    );
  }
  equalsRange(t) {
    return de.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return de.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new ee(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return de.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new ee(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new de(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new de(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return de.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new de(
      t.startLineNumber,
      t.startColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  collapseToEnd() {
    return de.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new de(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new de(
      this.startLineNumber + t,
      this.startColumn,
      this.endLineNumber + t,
      this.endColumn
    );
  }
  isSingleLine() {
    return this.startLineNumber === this.endLineNumber;
  }
  static fromPositions(t, n = t) {
    return new de(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new de(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : null;
  }
  static isIRange(t) {
    return t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number";
  }
  static areIntersectingOrTouching(t, n) {
    return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn);
  }
  static areIntersecting(t, n) {
    return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn);
  }
  static areOnlyIntersecting(t, n) {
    return !(t.endLineNumber < n.startLineNumber - 1 || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn - 1 || n.endLineNumber < t.startLineNumber - 1 || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn - 1);
  }
  static compareRangesUsingStarts(t, n) {
    if (t && n) {
      const s = t.startLineNumber | 0, a = n.startLineNumber | 0;
      if (s === a) {
        const l = t.startColumn | 0, o = n.startColumn | 0;
        if (l === o) {
          const u = t.endLineNumber | 0, h = n.endLineNumber | 0;
          if (u === h) {
            const c = t.endColumn | 0, g = n.endColumn | 0;
            return c - g;
          }
          return u - h;
        }
        return l - o;
      }
      return s - a;
    }
    return (t ? 1 : 0) - (n ? 1 : 0);
  }
  static compareRangesUsingEnds(t, n) {
    return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber;
  }
  static spansMultipleLines(t) {
    return t.endLineNumber > t.startLineNumber;
  }
  toJSON() {
    return this;
  }
};
class os {
  constructor(t) {
    const n = As(t);
    this._defaultValue = n, this._asciiMap = os._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const r = As(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}
var Us;
(function(e) {
  e[e.False = 0] = "False", e[e.True = 1] = "True";
})(Us || (Us = {}));
var z;
(function(e) {
  e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})(z || (z = {}));
class yc {
  constructor(t, n, r) {
    const i = new Uint8Array(t * n);
    for (let s = 0, a = t * n; s < a; s++)
      i[s] = r;
    this._data = i, this.rows = t, this.cols = n;
  }
  get(t, n) {
    return this._data[t * this.cols + n];
  }
  set(t, n, r) {
    this._data[t * this.cols + n] = r;
  }
}
class Tc {
  constructor(t) {
    let n = 0, r = z.Invalid;
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      o > n && (n = o), l > r && (r = l), u > r && (r = u);
    }
    n++, r++;
    const i = new yc(r, n, z.Invalid);
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      i.set(l, o, u);
    }
    this._states = i, this._maxCharCode = n;
  }
  nextState(t, n) {
    return n < 0 || n >= this._maxCharCode ? z.Invalid : this._states.get(t, n);
  }
}
let ei = null;
function kc() {
  return ei === null && (ei = new Tc([
    [z.Start, y.h, z.H],
    [z.Start, y.H, z.H],
    [z.Start, y.f, z.F],
    [z.Start, y.F, z.F],
    [z.H, y.t, z.HT],
    [z.H, y.T, z.HT],
    [z.HT, y.t, z.HTT],
    [z.HT, y.T, z.HTT],
    [z.HTT, y.p, z.HTTP],
    [z.HTT, y.P, z.HTTP],
    [z.HTTP, y.s, z.BeforeColon],
    [z.HTTP, y.S, z.BeforeColon],
    [z.HTTP, y.Colon, z.AfterColon],
    [z.F, y.i, z.FI],
    [z.F, y.I, z.FI],
    [z.FI, y.l, z.FIL],
    [z.FI, y.L, z.FIL],
    [z.FIL, y.e, z.BeforeColon],
    [z.FIL, y.E, z.BeforeColon],
    [z.BeforeColon, y.Colon, z.AfterColon],
    [z.AfterColon, y.Slash, z.AlmostThere],
    [z.AlmostThere, y.Slash, z.End]
  ])), ei;
}
var oe;
(function(e) {
  e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(oe || (oe = {}));
let Mn = null;
function Sc() {
  if (Mn === null) {
    Mn = new os(oe.None);
    const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…|`;
    for (let n = 0; n < e.length; n++)
      Mn.set(e.charCodeAt(n), oe.ForceTermination);
    const t = ".,;:";
    for (let n = 0; n < t.length; n++)
      Mn.set(t.charCodeAt(n), oe.CannotEndIn);
  }
  return Mn;
}
class Rr {
  static _createLink(t, n, r, i, s) {
    let a = s - 1;
    do {
      const l = n.charCodeAt(a);
      if (t.get(l) !== oe.CannotEndIn)
        break;
      a--;
    } while (a > i);
    if (i > 0) {
      const l = n.charCodeAt(i - 1), o = n.charCodeAt(a);
      (l === y.OpenParen && o === y.CloseParen || l === y.OpenSquareBracket && o === y.CloseSquareBracket || l === y.OpenCurlyBrace && o === y.CloseCurlyBrace) && a--;
    }
    return {
      range: {
        startLineNumber: r,
        startColumn: i + 1,
        endLineNumber: r,
        endColumn: a + 2
      },
      url: n.substring(i, a + 1)
    };
  }
  static computeLinks(t, n = kc()) {
    const r = Sc(), i = [];
    for (let s = 1, a = t.getLineCount(); s <= a; s++) {
      const l = t.getLineContent(s), o = l.length;
      let u = 0, h = 0, c = 0, g = z.Start, d = !1, m = !1, p = !1, _ = !1;
      for (; u < o; ) {
        let L = !1;
        const A = l.charCodeAt(u);
        if (g === z.Accept) {
          let b;
          switch (A) {
            case y.OpenParen:
              d = !0, b = oe.None;
              break;
            case y.CloseParen:
              b = d ? oe.None : oe.ForceTermination;
              break;
            case y.OpenSquareBracket:
              p = !0, m = !0, b = oe.None;
              break;
            case y.CloseSquareBracket:
              p = !1, b = m ? oe.None : oe.ForceTermination;
              break;
            case y.OpenCurlyBrace:
              _ = !0, b = oe.None;
              break;
            case y.CloseCurlyBrace:
              b = _ ? oe.None : oe.ForceTermination;
              break;
            case y.SingleQuote:
            case y.DoubleQuote:
            case y.BackTick:
              c === A ? b = oe.ForceTermination : c === y.SingleQuote || c === y.DoubleQuote || c === y.BackTick ? b = oe.None : b = oe.ForceTermination;
              break;
            case y.Asterisk:
              b = c === y.Asterisk ? oe.ForceTermination : oe.None;
              break;
            case y.Space:
              b = p ? oe.None : oe.ForceTermination;
              break;
            default:
              b = r.get(A);
          }
          b === oe.ForceTermination && (i.push(Rr._createLink(r, l, s, h, u)), L = !0);
        } else if (g === z.End) {
          let b;
          A === y.OpenSquareBracket ? (m = !0, b = oe.None) : b = r.get(A), b === oe.ForceTermination ? L = !0 : g = z.Accept;
        } else
          g = n.nextState(g, A), g === z.Invalid && (L = !0);
        L && (g = z.Start, d = !1, m = !1, _ = !1, h = u + 1, c = A), u++;
      }
      g === z.Accept && i.push(Rr._createLink(r, l, s, h, o));
    }
    return i;
  }
}
function Mc(e) {
  return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : Rr.computeLinks(e);
}
const zr = class zr {
  constructor() {
    this._defaultValueSet = [
      ["true", "false"],
      ["True", "False"],
      ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
      ["public", "protected", "private"]
    ];
  }
  navigateValueSet(t, n, r, i, s) {
    if (t && n) {
      const a = this.doNavigateValueSet(n, s);
      if (a)
        return {
          range: t,
          value: a
        };
    }
    if (r && i) {
      const a = this.doNavigateValueSet(i, s);
      if (a)
        return {
          range: r,
          value: a
        };
    }
    return null;
  }
  doNavigateValueSet(t, n) {
    const r = this.numberReplace(t, n);
    return r !== null ? r : this.textReplace(t, n);
  }
  numberReplace(t, n) {
    const r = Math.pow(10, t.length - (t.lastIndexOf(".") + 1));
    let i = Number(t);
    const s = parseFloat(t);
    return !isNaN(i) && !isNaN(s) && i === s ? i === 0 && !n ? null : (i = Math.floor(i * r), i += n ? r : -r, String(i / r)) : null;
  }
  textReplace(t, n) {
    return this.valueSetsReplace(this._defaultValueSet, t, n);
  }
  valueSetsReplace(t, n, r) {
    let i = null;
    for (let s = 0, a = t.length; i === null && s < a; s++)
      i = this.valueSetReplace(t[s], n, r);
    return i;
  }
  valueSetReplace(t, n, r) {
    let i = t.indexOf(n);
    return i >= 0 ? (i += r ? 1 : -1, i < 0 ? i = t.length - 1 : i %= t.length, t[i]) : null;
  }
};
zr.INSTANCE = new zr();
let _i = zr;
var w;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(w || (w = {}));
var v;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(v || (v = {}));
class ls {
  constructor() {
    this._keyCodeToStr = [], this._strToKeyCode = /* @__PURE__ */ Object.create(null);
  }
  define(t, n) {
    this._keyCodeToStr[t] = n, this._strToKeyCode[n.toLowerCase()] = t;
  }
  keyCodeToStr(t) {
    return this._keyCodeToStr[t];
  }
  strToKeyCode(t) {
    return this._strToKeyCode[t.toLowerCase()] || w.Unknown;
  }
}
const dr = new ls(), wi = new ls(), vi = new ls(), Ic = new Array(230), Uc = /* @__PURE__ */ Object.create(null), Dc = /* @__PURE__ */ Object.create(null), Li = [];
for (let e = 0; e <= v.MAX_VALUE; e++)
  w.DependsOnKbLayout;
for (let e = 0; e <= w.MAX_VALUE; e++)
  Li[e] = v.DependsOnKbLayout;
(function() {
  const e = "", t = [
    [1, v.None, "None", w.Unknown, "unknown", 0, "VK_UNKNOWN", e, e],
    [1, v.Hyper, "Hyper", w.Unknown, e, 0, e, e, e],
    [1, v.Super, "Super", w.Unknown, e, 0, e, e, e],
    [1, v.Fn, "Fn", w.Unknown, e, 0, e, e, e],
    [1, v.FnLock, "FnLock", w.Unknown, e, 0, e, e, e],
    [1, v.Suspend, "Suspend", w.Unknown, e, 0, e, e, e],
    [1, v.Resume, "Resume", w.Unknown, e, 0, e, e, e],
    [1, v.Turbo, "Turbo", w.Unknown, e, 0, e, e, e],
    [1, v.Sleep, "Sleep", w.Unknown, e, 0, "VK_SLEEP", e, e],
    [1, v.WakeUp, "WakeUp", w.Unknown, e, 0, e, e, e],
    [0, v.KeyA, "KeyA", w.KeyA, "A", 65, "VK_A", e, e],
    [0, v.KeyB, "KeyB", w.KeyB, "B", 66, "VK_B", e, e],
    [0, v.KeyC, "KeyC", w.KeyC, "C", 67, "VK_C", e, e],
    [0, v.KeyD, "KeyD", w.KeyD, "D", 68, "VK_D", e, e],
    [0, v.KeyE, "KeyE", w.KeyE, "E", 69, "VK_E", e, e],
    [0, v.KeyF, "KeyF", w.KeyF, "F", 70, "VK_F", e, e],
    [0, v.KeyG, "KeyG", w.KeyG, "G", 71, "VK_G", e, e],
    [0, v.KeyH, "KeyH", w.KeyH, "H", 72, "VK_H", e, e],
    [0, v.KeyI, "KeyI", w.KeyI, "I", 73, "VK_I", e, e],
    [0, v.KeyJ, "KeyJ", w.KeyJ, "J", 74, "VK_J", e, e],
    [0, v.KeyK, "KeyK", w.KeyK, "K", 75, "VK_K", e, e],
    [0, v.KeyL, "KeyL", w.KeyL, "L", 76, "VK_L", e, e],
    [0, v.KeyM, "KeyM", w.KeyM, "M", 77, "VK_M", e, e],
    [0, v.KeyN, "KeyN", w.KeyN, "N", 78, "VK_N", e, e],
    [0, v.KeyO, "KeyO", w.KeyO, "O", 79, "VK_O", e, e],
    [0, v.KeyP, "KeyP", w.KeyP, "P", 80, "VK_P", e, e],
    [0, v.KeyQ, "KeyQ", w.KeyQ, "Q", 81, "VK_Q", e, e],
    [0, v.KeyR, "KeyR", w.KeyR, "R", 82, "VK_R", e, e],
    [0, v.KeyS, "KeyS", w.KeyS, "S", 83, "VK_S", e, e],
    [0, v.KeyT, "KeyT", w.KeyT, "T", 84, "VK_T", e, e],
    [0, v.KeyU, "KeyU", w.KeyU, "U", 85, "VK_U", e, e],
    [0, v.KeyV, "KeyV", w.KeyV, "V", 86, "VK_V", e, e],
    [0, v.KeyW, "KeyW", w.KeyW, "W", 87, "VK_W", e, e],
    [0, v.KeyX, "KeyX", w.KeyX, "X", 88, "VK_X", e, e],
    [0, v.KeyY, "KeyY", w.KeyY, "Y", 89, "VK_Y", e, e],
    [0, v.KeyZ, "KeyZ", w.KeyZ, "Z", 90, "VK_Z", e, e],
    [0, v.Digit1, "Digit1", w.Digit1, "1", 49, "VK_1", e, e],
    [0, v.Digit2, "Digit2", w.Digit2, "2", 50, "VK_2", e, e],
    [0, v.Digit3, "Digit3", w.Digit3, "3", 51, "VK_3", e, e],
    [0, v.Digit4, "Digit4", w.Digit4, "4", 52, "VK_4", e, e],
    [0, v.Digit5, "Digit5", w.Digit5, "5", 53, "VK_5", e, e],
    [0, v.Digit6, "Digit6", w.Digit6, "6", 54, "VK_6", e, e],
    [0, v.Digit7, "Digit7", w.Digit7, "7", 55, "VK_7", e, e],
    [0, v.Digit8, "Digit8", w.Digit8, "8", 56, "VK_8", e, e],
    [0, v.Digit9, "Digit9", w.Digit9, "9", 57, "VK_9", e, e],
    [0, v.Digit0, "Digit0", w.Digit0, "0", 48, "VK_0", e, e],
    [1, v.Enter, "Enter", w.Enter, "Enter", 13, "VK_RETURN", e, e],
    [1, v.Escape, "Escape", w.Escape, "Escape", 27, "VK_ESCAPE", e, e],
    [1, v.Backspace, "Backspace", w.Backspace, "Backspace", 8, "VK_BACK", e, e],
    [1, v.Tab, "Tab", w.Tab, "Tab", 9, "VK_TAB", e, e],
    [1, v.Space, "Space", w.Space, "Space", 32, "VK_SPACE", e, e],
    [0, v.Minus, "Minus", w.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, v.Equal, "Equal", w.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, v.BracketLeft, "BracketLeft", w.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, v.BracketRight, "BracketRight", w.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, v.Backslash, "Backslash", w.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, v.IntlHash, "IntlHash", w.Unknown, e, 0, e, e, e],
    [0, v.Semicolon, "Semicolon", w.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, v.Quote, "Quote", w.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, v.Backquote, "Backquote", w.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, v.Comma, "Comma", w.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, v.Period, "Period", w.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, v.Slash, "Slash", w.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, v.CapsLock, "CapsLock", w.CapsLock, "CapsLock", 20, "VK_CAPITAL", e, e],
    [1, v.F1, "F1", w.F1, "F1", 112, "VK_F1", e, e],
    [1, v.F2, "F2", w.F2, "F2", 113, "VK_F2", e, e],
    [1, v.F3, "F3", w.F3, "F3", 114, "VK_F3", e, e],
    [1, v.F4, "F4", w.F4, "F4", 115, "VK_F4", e, e],
    [1, v.F5, "F5", w.F5, "F5", 116, "VK_F5", e, e],
    [1, v.F6, "F6", w.F6, "F6", 117, "VK_F6", e, e],
    [1, v.F7, "F7", w.F7, "F7", 118, "VK_F7", e, e],
    [1, v.F8, "F8", w.F8, "F8", 119, "VK_F8", e, e],
    [1, v.F9, "F9", w.F9, "F9", 120, "VK_F9", e, e],
    [1, v.F10, "F10", w.F10, "F10", 121, "VK_F10", e, e],
    [1, v.F11, "F11", w.F11, "F11", 122, "VK_F11", e, e],
    [1, v.F12, "F12", w.F12, "F12", 123, "VK_F12", e, e],
    [1, v.PrintScreen, "PrintScreen", w.Unknown, e, 0, e, e, e],
    [1, v.ScrollLock, "ScrollLock", w.ScrollLock, "ScrollLock", 145, "VK_SCROLL", e, e],
    [1, v.Pause, "Pause", w.PauseBreak, "PauseBreak", 19, "VK_PAUSE", e, e],
    [1, v.Insert, "Insert", w.Insert, "Insert", 45, "VK_INSERT", e, e],
    [1, v.Home, "Home", w.Home, "Home", 36, "VK_HOME", e, e],
    [1, v.PageUp, "PageUp", w.PageUp, "PageUp", 33, "VK_PRIOR", e, e],
    [1, v.Delete, "Delete", w.Delete, "Delete", 46, "VK_DELETE", e, e],
    [1, v.End, "End", w.End, "End", 35, "VK_END", e, e],
    [1, v.PageDown, "PageDown", w.PageDown, "PageDown", 34, "VK_NEXT", e, e],
    [1, v.ArrowRight, "ArrowRight", w.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", e],
    [1, v.ArrowLeft, "ArrowLeft", w.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", e],
    [1, v.ArrowDown, "ArrowDown", w.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", e],
    [1, v.ArrowUp, "ArrowUp", w.UpArrow, "UpArrow", 38, "VK_UP", "Up", e],
    [1, v.NumLock, "NumLock", w.NumLock, "NumLock", 144, "VK_NUMLOCK", e, e],
    [1, v.NumpadDivide, "NumpadDivide", w.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", e, e],
    [1, v.NumpadMultiply, "NumpadMultiply", w.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e],
    [1, v.NumpadSubtract, "NumpadSubtract", w.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e],
    [1, v.NumpadAdd, "NumpadAdd", w.NumpadAdd, "NumPad_Add", 107, "VK_ADD", e, e],
    [1, v.NumpadEnter, "NumpadEnter", w.Enter, e, 0, e, e, e],
    [1, v.Numpad1, "Numpad1", w.Numpad1, "NumPad1", 97, "VK_NUMPAD1", e, e],
    [1, v.Numpad2, "Numpad2", w.Numpad2, "NumPad2", 98, "VK_NUMPAD2", e, e],
    [1, v.Numpad3, "Numpad3", w.Numpad3, "NumPad3", 99, "VK_NUMPAD3", e, e],
    [1, v.Numpad4, "Numpad4", w.Numpad4, "NumPad4", 100, "VK_NUMPAD4", e, e],
    [1, v.Numpad5, "Numpad5", w.Numpad5, "NumPad5", 101, "VK_NUMPAD5", e, e],
    [1, v.Numpad6, "Numpad6", w.Numpad6, "NumPad6", 102, "VK_NUMPAD6", e, e],
    [1, v.Numpad7, "Numpad7", w.Numpad7, "NumPad7", 103, "VK_NUMPAD7", e, e],
    [1, v.Numpad8, "Numpad8", w.Numpad8, "NumPad8", 104, "VK_NUMPAD8", e, e],
    [1, v.Numpad9, "Numpad9", w.Numpad9, "NumPad9", 105, "VK_NUMPAD9", e, e],
    [1, v.Numpad0, "Numpad0", w.Numpad0, "NumPad0", 96, "VK_NUMPAD0", e, e],
    [1, v.NumpadDecimal, "NumpadDecimal", w.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", e, e],
    [0, v.IntlBackslash, "IntlBackslash", w.IntlBackslash, "OEM_102", 226, "VK_OEM_102", e, e],
    [1, v.ContextMenu, "ContextMenu", w.ContextMenu, "ContextMenu", 93, e, e, e],
    [1, v.Power, "Power", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadEqual, "NumpadEqual", w.Unknown, e, 0, e, e, e],
    [1, v.F13, "F13", w.F13, "F13", 124, "VK_F13", e, e],
    [1, v.F14, "F14", w.F14, "F14", 125, "VK_F14", e, e],
    [1, v.F15, "F15", w.F15, "F15", 126, "VK_F15", e, e],
    [1, v.F16, "F16", w.F16, "F16", 127, "VK_F16", e, e],
    [1, v.F17, "F17", w.F17, "F17", 128, "VK_F17", e, e],
    [1, v.F18, "F18", w.F18, "F18", 129, "VK_F18", e, e],
    [1, v.F19, "F19", w.F19, "F19", 130, "VK_F19", e, e],
    [1, v.F20, "F20", w.F20, "F20", 131, "VK_F20", e, e],
    [1, v.F21, "F21", w.F21, "F21", 132, "VK_F21", e, e],
    [1, v.F22, "F22", w.F22, "F22", 133, "VK_F22", e, e],
    [1, v.F23, "F23", w.F23, "F23", 134, "VK_F23", e, e],
    [1, v.F24, "F24", w.F24, "F24", 135, "VK_F24", e, e],
    [1, v.Open, "Open", w.Unknown, e, 0, e, e, e],
    [1, v.Help, "Help", w.Unknown, e, 0, e, e, e],
    [1, v.Select, "Select", w.Unknown, e, 0, e, e, e],
    [1, v.Again, "Again", w.Unknown, e, 0, e, e, e],
    [1, v.Undo, "Undo", w.Unknown, e, 0, e, e, e],
    [1, v.Cut, "Cut", w.Unknown, e, 0, e, e, e],
    [1, v.Copy, "Copy", w.Unknown, e, 0, e, e, e],
    [1, v.Paste, "Paste", w.Unknown, e, 0, e, e, e],
    [1, v.Find, "Find", w.Unknown, e, 0, e, e, e],
    [1, v.AudioVolumeMute, "AudioVolumeMute", w.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e],
    [1, v.AudioVolumeUp, "AudioVolumeUp", w.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e],
    [1, v.AudioVolumeDown, "AudioVolumeDown", w.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e],
    [1, v.NumpadComma, "NumpadComma", w.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", e, e],
    [0, v.IntlRo, "IntlRo", w.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", e, e],
    [1, v.KanaMode, "KanaMode", w.Unknown, e, 0, e, e, e],
    [0, v.IntlYen, "IntlYen", w.Unknown, e, 0, e, e, e],
    [1, v.Convert, "Convert", w.Unknown, e, 0, e, e, e],
    [1, v.NonConvert, "NonConvert", w.Unknown, e, 0, e, e, e],
    [1, v.Lang1, "Lang1", w.Unknown, e, 0, e, e, e],
    [1, v.Lang2, "Lang2", w.Unknown, e, 0, e, e, e],
    [1, v.Lang3, "Lang3", w.Unknown, e, 0, e, e, e],
    [1, v.Lang4, "Lang4", w.Unknown, e, 0, e, e, e],
    [1, v.Lang5, "Lang5", w.Unknown, e, 0, e, e, e],
    [1, v.Abort, "Abort", w.Unknown, e, 0, e, e, e],
    [1, v.Props, "Props", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadParenLeft, "NumpadParenLeft", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadParenRight, "NumpadParenRight", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadBackspace, "NumpadBackspace", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadMemoryStore, "NumpadMemoryStore", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadMemoryRecall, "NumpadMemoryRecall", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadMemoryClear, "NumpadMemoryClear", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadMemoryAdd, "NumpadMemoryAdd", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadMemorySubtract, "NumpadMemorySubtract", w.Unknown, e, 0, e, e, e],
    [1, v.NumpadClear, "NumpadClear", w.Clear, "Clear", 12, "VK_CLEAR", e, e],
    [1, v.NumpadClearEntry, "NumpadClearEntry", w.Unknown, e, 0, e, e, e],
    [1, v.None, e, w.Ctrl, "Ctrl", 17, "VK_CONTROL", e, e],
    [1, v.None, e, w.Shift, "Shift", 16, "VK_SHIFT", e, e],
    [1, v.None, e, w.Alt, "Alt", 18, "VK_MENU", e, e],
    [1, v.None, e, w.Meta, "Meta", 91, "VK_COMMAND", e, e],
    [1, v.ControlLeft, "ControlLeft", w.Ctrl, e, 0, "VK_LCONTROL", e, e],
    [1, v.ShiftLeft, "ShiftLeft", w.Shift, e, 0, "VK_LSHIFT", e, e],
    [1, v.AltLeft, "AltLeft", w.Alt, e, 0, "VK_LMENU", e, e],
    [1, v.MetaLeft, "MetaLeft", w.Meta, e, 0, "VK_LWIN", e, e],
    [1, v.ControlRight, "ControlRight", w.Ctrl, e, 0, "VK_RCONTROL", e, e],
    [1, v.ShiftRight, "ShiftRight", w.Shift, e, 0, "VK_RSHIFT", e, e],
    [1, v.AltRight, "AltRight", w.Alt, e, 0, "VK_RMENU", e, e],
    [1, v.MetaRight, "MetaRight", w.Meta, e, 0, "VK_RWIN", e, e],
    [1, v.BrightnessUp, "BrightnessUp", w.Unknown, e, 0, e, e, e],
    [1, v.BrightnessDown, "BrightnessDown", w.Unknown, e, 0, e, e, e],
    [1, v.MediaPlay, "MediaPlay", w.Unknown, e, 0, e, e, e],
    [1, v.MediaRecord, "MediaRecord", w.Unknown, e, 0, e, e, e],
    [1, v.MediaFastForward, "MediaFastForward", w.Unknown, e, 0, e, e, e],
    [1, v.MediaRewind, "MediaRewind", w.Unknown, e, 0, e, e, e],
    [1, v.MediaTrackNext, "MediaTrackNext", w.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e],
    [1, v.MediaTrackPrevious, "MediaTrackPrevious", w.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e],
    [1, v.MediaStop, "MediaStop", w.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", e, e],
    [1, v.Eject, "Eject", w.Unknown, e, 0, e, e, e],
    [1, v.MediaPlayPause, "MediaPlayPause", w.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e],
    [1, v.MediaSelect, "MediaSelect", w.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e],
    [1, v.LaunchMail, "LaunchMail", w.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e],
    [1, v.LaunchApp2, "LaunchApp2", w.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e],
    [1, v.LaunchApp1, "LaunchApp1", w.Unknown, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e],
    [1, v.SelectTask, "SelectTask", w.Unknown, e, 0, e, e, e],
    [1, v.LaunchScreenSaver, "LaunchScreenSaver", w.Unknown, e, 0, e, e, e],
    [1, v.BrowserSearch, "BrowserSearch", w.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e],
    [1, v.BrowserHome, "BrowserHome", w.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", e, e],
    [1, v.BrowserBack, "BrowserBack", w.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", e, e],
    [1, v.BrowserForward, "BrowserForward", w.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e],
    [1, v.BrowserStop, "BrowserStop", w.Unknown, e, 0, "VK_BROWSER_STOP", e, e],
    [1, v.BrowserRefresh, "BrowserRefresh", w.Unknown, e, 0, "VK_BROWSER_REFRESH", e, e],
    [1, v.BrowserFavorites, "BrowserFavorites", w.Unknown, e, 0, "VK_BROWSER_FAVORITES", e, e],
    [1, v.ZoomToggle, "ZoomToggle", w.Unknown, e, 0, e, e, e],
    [1, v.MailReply, "MailReply", w.Unknown, e, 0, e, e, e],
    [1, v.MailForward, "MailForward", w.Unknown, e, 0, e, e, e],
    [1, v.MailSend, "MailSend", w.Unknown, e, 0, e, e, e],
    [1, v.None, e, w.KEY_IN_COMPOSITION, "KeyInComposition", 229, e, e, e],
    [1, v.None, e, w.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", e, e],
    [1, v.None, e, w.OEM_8, "OEM_8", 223, "VK_OEM_8", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_KANA", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_HANGUL", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_JUNJA", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_FINAL", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_HANJA", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_KANJI", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_CONVERT", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_NONCONVERT", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_ACCEPT", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_MODECHANGE", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_SELECT", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_PRINT", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_EXECUTE", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_SNAPSHOT", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_HELP", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_APPS", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_PROCESSKEY", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_PACKET", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_DBE_SBCSCHAR", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_DBE_DBCSCHAR", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_ATTN", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_CRSEL", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_EXSEL", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_EREOF", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_PLAY", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_ZOOM", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_NONAME", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_PA1", e, e],
    [1, v.None, e, w.Unknown, e, 0, "VK_OEM_CLEAR", e, e]
  ], n = [], r = [];
  for (const i of t) {
    const [s, a, l, o, u, h, c, g, d] = i;
    if (r[a] || (r[a] = !0, Uc[l] = a, Dc[l.toLowerCase()] = a, s && o !== w.Unknown && o !== w.Enter && o !== w.Ctrl && o !== w.Shift && o !== w.Alt && o !== w.Meta && (Li[o] = a)), !n[o]) {
      if (n[o] = !0, !u)
        throw new Error(
          `String representation missing for key code ${o} around scan code ${l}`
        );
      dr.define(o, u), wi.define(o, g || u), vi.define(o, d || g || u);
    }
    h && (Ic[h] = o);
  }
  Li[w.Enter] = v.Enter;
})();
var Ds;
(function(e) {
  function t(l) {
    return dr.keyCodeToStr(l);
  }
  e.toString = t;
  function n(l) {
    return dr.strToKeyCode(l);
  }
  e.fromString = n;
  function r(l) {
    return wi.keyCodeToStr(l);
  }
  e.toUserSettingsUS = r;
  function i(l) {
    return vi.keyCodeToStr(l);
  }
  e.toUserSettingsGeneral = i;
  function s(l) {
    return wi.strToKeyCode(l) || vi.strToKeyCode(l);
  }
  e.fromUserSettings = s;
  function a(l) {
    if (l >= w.Numpad0 && l <= w.NumpadDivide)
      return null;
    switch (l) {
      case w.UpArrow:
        return "Up";
      case w.DownArrow:
        return "Down";
      case w.LeftArrow:
        return "Left";
      case w.RightArrow:
        return "Right";
    }
    return dr.keyCodeToStr(l);
  }
  e.toElectronAccelerator = a;
})(Ds || (Ds = {}));
var on;
(function(e) {
  e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(on || (on = {}));
function Fc(e, t) {
  const n = (t & 65535) << 16 >>> 0;
  return (e | n) >>> 0;
}
var Ni;
(function(e) {
  e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart", e[e.ChatSessionContext = 24] = "ChatSessionContext", e[e.ChatResponsePullRequestPart = 25] = "ChatResponsePullRequestPart";
})(Ni || (Ni = {}));
let jt;
const ti = globalThis.vscode;
var il;
if (typeof ti < "u" && typeof ti.process < "u") {
  const e = ti.process;
  jt = {
    get platform() {
      return e.platform;
    },
    get arch() {
      return e.arch;
    },
    get env() {
      return e.env;
    },
    cwd() {
      return e.cwd();
    }
  };
} else typeof process < "u" && typeof ((il = process == null ? void 0 : process.versions) == null ? void 0 : il.node) == "string" ? jt = {
  get platform() {
    return process.platform;
  },
  get arch() {
    return process.arch;
  },
  get env() {
    return process.env;
  },
  cwd() {
    return process.env.VSCODE_CWD || process.cwd();
  }
} : jt = {
  get platform() {
    return xn ? "win32" : $u ? "darwin" : "linux";
  },
  get arch() {
  },
  get env() {
    return {};
  },
  cwd() {
    return "/";
  }
};
const yr = jt.cwd, Pc = jt.env, Oc = jt.platform;
jt.arch;
const Bc = 65, Vc = 97, $c = 90, qc = 122, Gt = 46, ve = 47, De = 92, ht = 58, Hc = 63;
class wl extends Error {
  constructor(t, n, r) {
    let i;
    typeof n == "string" && n.indexOf("not ") === 0 ? (i = "must not be", n = n.replace(/^not /, "")) : i = "must be";
    const s = t.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${t}" ${s} ${i} of type ${n}`;
    a += `. Received type ${typeof r}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
}
function Wc(e, t) {
  if (e === null || typeof e != "object")
    throw new wl(t, "Object", e);
}
function fe(e, t) {
  if (typeof e != "string")
    throw new wl(t, "string", e);
}
const nt = Oc === "win32";
function Q(e) {
  return e === ve || e === De;
}
function xi(e) {
  return e === ve;
}
function gt(e) {
  return e >= Bc && e <= $c || e >= Vc && e <= qc;
}
function Tr(e, t, n, r) {
  let i = "", s = 0, a = -1, l = 0, o = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length)
      o = e.charCodeAt(u);
    else {
      if (r(o))
        break;
      o = ve;
    }
    if (r(o)) {
      if (!(a === u - 1 || l === 1)) if (l === 2) {
        if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== Gt || i.charCodeAt(i.length - 2) !== Gt) {
          if (i.length > 2) {
            const h = i.lastIndexOf(n);
            h === -1 ? (i = "", s = 0) : (i = i.slice(0, h), s = i.length - 1 - i.lastIndexOf(n)), a = u, l = 0;
            continue;
          } else if (i.length !== 0) {
            i = "", s = 0, a = u, l = 0;
            continue;
          }
        }
        t && (i += i.length > 0 ? `${n}..` : "..", s = 2);
      } else
        i.length > 0 ? i += `${n}${e.slice(a + 1, u)}` : i = e.slice(a + 1, u), s = u - a - 1;
      a = u, l = 0;
    } else o === Gt && l !== -1 ? ++l : l = -1;
  }
  return i;
}
function jc(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function vl(e, t) {
  Wc(t, "pathObject");
  const n = t.dir || t.root, r = t.base || `${t.name || ""}${jc(t.ext)}`;
  return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
}
const Ne = {
  resolve(...e) {
    let t = "", n = "", r = !1;
    for (let i = e.length - 1; i >= -1; i--) {
      let s;
      if (i >= 0) {
        if (s = e[i], fe(s, `paths[${i}]`), s.length === 0)
          continue;
      } else t.length === 0 ? s = yr() : (s = Pc[`=${t}`] || yr(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === De) && (s = `${t}\\`));
      const a = s.length;
      let l = 0, o = "", u = !1;
      const h = s.charCodeAt(0);
      if (a === 1)
        Q(h) && (l = 1, u = !0);
      else if (Q(h))
        if (u = !0, Q(s.charCodeAt(1))) {
          let c = 2, g = c;
          for (; c < a && !Q(s.charCodeAt(c)); )
            c++;
          if (c < a && c !== g) {
            const d = s.slice(g, c);
            for (g = c; c < a && Q(s.charCodeAt(c)); )
              c++;
            if (c < a && c !== g) {
              for (g = c; c < a && !Q(s.charCodeAt(c)); )
                c++;
              (c === a || c !== g) && (o = `\\\\${d}\\${s.slice(g, c)}`, l = c);
            }
          }
        } else
          l = 1;
      else gt(h) && s.charCodeAt(1) === ht && (o = s.slice(0, 2), l = 2, a > 2 && Q(s.charCodeAt(2)) && (u = !0, l = 3));
      if (o.length > 0)
        if (t.length > 0) {
          if (o.toLowerCase() !== t.toLowerCase())
            continue;
        } else
          t = o;
      if (r) {
        if (t.length > 0)
          break;
      } else if (n = `${s.slice(l)}\\${n}`, r = u, u && t.length > 0)
        break;
    }
    return n = Tr(n, !r, "\\", Q), r ? `${t}\\${n}` : `${t}${n}` || ".";
  },
  normalize(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = 0, r, i = !1;
    const s = e.charCodeAt(0);
    if (t === 1)
      return xi(s) ? "\\" : e;
    if (Q(s))
      if (i = !0, Q(e.charCodeAt(1))) {
        let l = 2, o = l;
        for (; l < t && !Q(e.charCodeAt(l)); )
          l++;
        if (l < t && l !== o) {
          const u = e.slice(o, l);
          for (o = l; l < t && Q(e.charCodeAt(l)); )
            l++;
          if (l < t && l !== o) {
            for (o = l; l < t && !Q(e.charCodeAt(l)); )
              l++;
            if (l === t)
              return `\\\\${u}\\${e.slice(o)}\\`;
            l !== o && (r = `\\\\${u}\\${e.slice(o, l)}`, n = l);
          }
        }
      } else
        n = 1;
    else gt(s) && e.charCodeAt(1) === ht && (r = e.slice(0, 2), n = 2, t > 2 && Q(e.charCodeAt(2)) && (i = !0, n = 3));
    let a = n < t ? Tr(e.slice(n), !i, "\\", Q) : "";
    if (a.length === 0 && !i && (a = "."), a.length > 0 && Q(e.charCodeAt(t - 1)) && (a += "\\"), !i && r === void 0 && e.includes(":")) {
      if (a.length >= 2 && gt(a.charCodeAt(0)) && a.charCodeAt(1) === ht)
        return `.\\${a}`;
      let l = e.indexOf(":");
      do
        if (l === t - 1 || Q(e.charCodeAt(l + 1)))
          return `.\\${a}`;
      while ((l = e.indexOf(":", l + 1)) !== -1);
    }
    return r === void 0 ? i ? `\\${a}` : a : i ? `${r}\\${a}` : `${r}${a}`;
  },
  isAbsolute(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return !1;
    const n = e.charCodeAt(0);
    return Q(n) || t > 2 && gt(n) && e.charCodeAt(1) === ht && Q(e.charCodeAt(2));
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    let t, n;
    for (let s = 0; s < e.length; ++s) {
      const a = e[s];
      fe(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
    }
    if (t === void 0)
      return ".";
    let r = !0, i = 0;
    if (typeof n == "string" && Q(n.charCodeAt(0))) {
      ++i;
      const s = n.length;
      s > 1 && Q(n.charCodeAt(1)) && (++i, s > 2 && (Q(n.charCodeAt(2)) ? ++i : r = !1));
    }
    if (r) {
      for (; i < t.length && Q(t.charCodeAt(i)); )
        i++;
      i >= 2 && (t = `\\${t.slice(i)}`);
    }
    return Ne.normalize(t);
  },
  relative(e, t) {
    if (fe(e, "from"), fe(t, "to"), e === t)
      return "";
    const n = Ne.resolve(e), r = Ne.resolve(t);
    if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t))
      return "";
    if (n.length !== e.length || r.length !== t.length) {
      const m = n.split("\\"), p = r.split("\\");
      m[m.length - 1] === "" && m.pop(), p[p.length - 1] === "" && p.pop();
      const _ = m.length, L = p.length, A = _ < L ? _ : L;
      let b;
      for (b = 0; b < A && m[b].toLowerCase() === p[b].toLowerCase(); b++)
        ;
      return b === 0 ? r : b === A ? L > A ? p.slice(b).join("\\") : _ > A ? "..\\".repeat(_ - 1 - b) + ".." : "" : "..\\".repeat(_ - b) + p.slice(b).join("\\");
    }
    let i = 0;
    for (; i < e.length && e.charCodeAt(i) === De; )
      i++;
    let s = e.length;
    for (; s - 1 > i && e.charCodeAt(s - 1) === De; )
      s--;
    const a = s - i;
    let l = 0;
    for (; l < t.length && t.charCodeAt(l) === De; )
      l++;
    let o = t.length;
    for (; o - 1 > l && t.charCodeAt(o - 1) === De; )
      o--;
    const u = o - l, h = a < u ? a : u;
    let c = -1, g = 0;
    for (; g < h; g++) {
      const m = e.charCodeAt(i + g);
      if (m !== t.charCodeAt(l + g))
        break;
      m === De && (c = g);
    }
    if (g !== h) {
      if (c === -1)
        return r;
    } else {
      if (u > h) {
        if (t.charCodeAt(l + g) === De)
          return r.slice(l + g + 1);
        if (g === 2)
          return r.slice(l + g);
      }
      a > h && (e.charCodeAt(i + g) === De ? c = g : g === 2 && (c = 3)), c === -1 && (c = 0);
    }
    let d = "";
    for (g = i + c + 1; g <= s; ++g)
      (g === s || e.charCodeAt(g) === De) && (d += d.length === 0 ? ".." : "\\..");
    return l += c, d.length > 0 ? `${d}${r.slice(l, o)}` : (r.charCodeAt(l) === De && ++l, r.slice(l, o));
  },
  toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0)
      return e;
    const t = Ne.resolve(e);
    if (t.length <= 2)
      return e;
    if (t.charCodeAt(0) === De) {
      if (t.charCodeAt(1) === De) {
        const n = t.charCodeAt(2);
        if (n !== Hc && n !== Gt)
          return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (gt(t.charCodeAt(0)) && t.charCodeAt(1) === ht && t.charCodeAt(2) === De)
      return `\\\\?\\${t}`;
    return t;
  },
  dirname(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = -1, r = 0;
    const i = e.charCodeAt(0);
    if (t === 1)
      return Q(i) ? e : ".";
    if (Q(i)) {
      if (n = r = 1, Q(e.charCodeAt(1))) {
        let l = 2, o = l;
        for (; l < t && !Q(e.charCodeAt(l)); )
          l++;
        if (l < t && l !== o) {
          for (o = l; l < t && Q(e.charCodeAt(l)); )
            l++;
          if (l < t && l !== o) {
            for (o = l; l < t && !Q(e.charCodeAt(l)); )
              l++;
            if (l === t)
              return e;
            l !== o && (n = r = l + 1);
          }
        }
      }
    } else gt(i) && e.charCodeAt(1) === ht && (n = t > 2 && Q(e.charCodeAt(2)) ? 3 : 2, r = n);
    let s = -1, a = !0;
    for (let l = t - 1; l >= r; --l)
      if (Q(e.charCodeAt(l))) {
        if (!a) {
          s = l;
          break;
        }
      } else
        a = !1;
    if (s === -1) {
      if (n === -1)
        return ".";
      s = n;
    }
    return e.slice(0, s);
  },
  basename(e, t) {
    t !== void 0 && fe(t, "suffix"), fe(e, "path");
    let n = 0, r = -1, i = !0, s;
    if (e.length >= 2 && gt(e.charCodeAt(0)) && e.charCodeAt(1) === ht && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, l = -1;
      for (s = e.length - 1; s >= n; --s) {
        const o = e.charCodeAt(s);
        if (Q(o)) {
          if (!i) {
            n = s + 1;
            break;
          }
        } else
          l === -1 && (i = !1, l = s + 1), a >= 0 && (o === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1, r = l));
      }
      return n === r ? r = l : r === -1 && (r = e.length), e.slice(n, r);
    }
    for (s = e.length - 1; s >= n; --s)
      if (Q(e.charCodeAt(s))) {
        if (!i) {
          n = s + 1;
          break;
        }
      } else r === -1 && (i = !1, r = s + 1);
    return r === -1 ? "" : e.slice(n, r);
  },
  extname(e) {
    fe(e, "path");
    let t = 0, n = -1, r = 0, i = -1, s = !0, a = 0;
    e.length >= 2 && e.charCodeAt(1) === ht && gt(e.charCodeAt(0)) && (t = r = 2);
    for (let l = e.length - 1; l >= t; --l) {
      const o = e.charCodeAt(l);
      if (Q(o)) {
        if (!s) {
          r = l + 1;
          break;
        }
        continue;
      }
      i === -1 && (s = !1, i = l + 1), o === Gt ? n === -1 ? n = l : a !== 1 && (a = 1) : n !== -1 && (a = -1);
    }
    return n === -1 || i === -1 || a === 0 || a === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
  },
  format: vl.bind(null, "\\"),
  parse(e) {
    fe(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.length;
    let r = 0, i = e.charCodeAt(0);
    if (n === 1)
      return Q(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
    if (Q(i)) {
      if (r = 1, Q(e.charCodeAt(1))) {
        let c = 2, g = c;
        for (; c < n && !Q(e.charCodeAt(c)); )
          c++;
        if (c < n && c !== g) {
          for (g = c; c < n && Q(e.charCodeAt(c)); )
            c++;
          if (c < n && c !== g) {
            for (g = c; c < n && !Q(e.charCodeAt(c)); )
              c++;
            c === n ? r = c : c !== g && (r = c + 1);
          }
        }
      }
    } else if (gt(i) && e.charCodeAt(1) === ht) {
      if (n <= 2)
        return t.root = t.dir = e, t;
      if (r = 2, Q(e.charCodeAt(2))) {
        if (n === 3)
          return t.root = t.dir = e, t;
        r = 3;
      }
    }
    r > 0 && (t.root = e.slice(0, r));
    let s = -1, a = r, l = -1, o = !0, u = e.length - 1, h = 0;
    for (; u >= r; --u) {
      if (i = e.charCodeAt(u), Q(i)) {
        if (!o) {
          a = u + 1;
          break;
        }
        continue;
      }
      l === -1 && (o = !1, l = u + 1), i === Gt ? s === -1 ? s = u : h !== 1 && (h = 1) : s !== -1 && (h = -1);
    }
    return l !== -1 && (s === -1 || h === 0 || h === 1 && s === l - 1 && s === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, s), t.base = e.slice(a, l), t.ext = e.slice(s, l))), a > 0 && a !== r ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
}, Gc = (() => {
  if (nt) {
    const e = /\\/g;
    return () => {
      const t = yr().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => yr();
})(), se = {
  resolve(...e) {
    let t = "", n = !1;
    for (let r = e.length - 1; r >= 0 && !n; r--) {
      const i = e[r];
      fe(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === ve);
    }
    if (!n) {
      const r = Gc();
      t = `${r}/${t}`, n = r.charCodeAt(0) === ve;
    }
    return t = Tr(t, !n, "/", xi), n ? `/${t}` : t.length > 0 ? t : ".";
  },
  normalize(e) {
    if (fe(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === ve, n = e.charCodeAt(e.length - 1) === ve;
    return e = Tr(e, !t, "/", xi), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
  },
  isAbsolute(e) {
    return fe(e, "path"), e.length > 0 && e.charCodeAt(0) === ve;
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    const t = [];
    for (let n = 0; n < e.length; ++n) {
      const r = e[n];
      fe(r, "path"), r.length > 0 && t.push(r);
    }
    return t.length === 0 ? "." : se.normalize(t.join("/"));
  },
  relative(e, t) {
    if (fe(e, "from"), fe(t, "to"), e === t || (e = se.resolve(e), t = se.resolve(t), e === t))
      return "";
    const n = 1, r = e.length, i = r - n, s = 1, a = t.length - s, l = i < a ? i : a;
    let o = -1, u = 0;
    for (; u < l; u++) {
      const c = e.charCodeAt(n + u);
      if (c !== t.charCodeAt(s + u))
        break;
      c === ve && (o = u);
    }
    if (u === l)
      if (a > l) {
        if (t.charCodeAt(s + u) === ve)
          return t.slice(s + u + 1);
        if (u === 0)
          return t.slice(s + u);
      } else i > l && (e.charCodeAt(n + u) === ve ? o = u : u === 0 && (o = 0));
    let h = "";
    for (u = n + o + 1; u <= r; ++u)
      (u === r || e.charCodeAt(u) === ve) && (h += h.length === 0 ? ".." : "/..");
    return `${h}${t.slice(s + o)}`;
  },
  toNamespacedPath(e) {
    return e;
  },
  dirname(e) {
    if (fe(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === ve;
    let n = -1, r = !0;
    for (let i = e.length - 1; i >= 1; --i)
      if (e.charCodeAt(i) === ve) {
        if (!r) {
          n = i;
          break;
        }
      } else
        r = !1;
    return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
  },
  basename(e, t) {
    t !== void 0 && fe(t, "suffix"), fe(e, "path");
    let n = 0, r = -1, i = !0, s;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, l = -1;
      for (s = e.length - 1; s >= 0; --s) {
        const o = e.charCodeAt(s);
        if (o === ve) {
          if (!i) {
            n = s + 1;
            break;
          }
        } else
          l === -1 && (i = !1, l = s + 1), a >= 0 && (o === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1, r = l));
      }
      return n === r ? r = l : r === -1 && (r = e.length), e.slice(n, r);
    }
    for (s = e.length - 1; s >= 0; --s)
      if (e.charCodeAt(s) === ve) {
        if (!i) {
          n = s + 1;
          break;
        }
      } else r === -1 && (i = !1, r = s + 1);
    return r === -1 ? "" : e.slice(n, r);
  },
  extname(e) {
    fe(e, "path");
    let t = -1, n = 0, r = -1, i = !0, s = 0;
    for (let a = e.length - 1; a >= 0; --a) {
      const l = e[a];
      if (l === "/") {
        if (!i) {
          n = a + 1;
          break;
        }
        continue;
      }
      r === -1 && (i = !1, r = a + 1), l === "." ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1);
    }
    return t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
  },
  format: vl.bind(null, "/"),
  parse(e) {
    fe(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.charCodeAt(0) === ve;
    let r;
    n ? (t.root = "/", r = 1) : r = 0;
    let i = -1, s = 0, a = -1, l = !0, o = e.length - 1, u = 0;
    for (; o >= r; --o) {
      const h = e.charCodeAt(o);
      if (h === ve) {
        if (!l) {
          s = o + 1;
          break;
        }
        continue;
      }
      a === -1 && (l = !1, a = o + 1), h === Gt ? i === -1 ? i = o : u !== 1 && (u = 1) : i !== -1 && (u = -1);
    }
    if (a !== -1) {
      const h = s === 0 && n ? 1 : s;
      i === -1 || u === 0 || u === 1 && i === a - 1 && i === s + 1 ? t.base = t.name = e.slice(h, a) : (t.name = e.slice(h, i), t.base = e.slice(h, a), t.ext = e.slice(i, a));
    }
    return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
se.win32 = Ne.win32 = Ne;
se.posix = Ne.posix = se;
const zc = nt ? Ne.normalize : se.normalize;
nt ? Ne.isAbsolute : se.isAbsolute;
const Xc = nt ? Ne.join : se.join, Jc = nt ? Ne.resolve : se.resolve, Yc = nt ? Ne.relative : se.relative, Qc = nt ? Ne.dirname : se.dirname;
nt ? Ne.basename : se.basename;
nt ? Ne.extname : se.extname;
nt ? Ne.parse : se.parse;
const pr = nt ? Ne.sep : se.sep, Zc = /^\w[\w\d+.-]*$/, Kc = /^\//, Cc = /^\/\//;
function e0(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
    );
  if (e.scheme && !Zc.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Kc.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (Cc.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function t0(e, t) {
  return !e && !t ? "file" : e;
}
function n0(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Ce && (t = Ce + t) : t = Ce;
      break;
  }
  return t;
}
const ie = "", Ce = "/", r0 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
let Oe = class br {
  static isUri(t) {
    return t instanceof br ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
  }
  constructor(t, n, r, i, s, a = !1) {
    typeof t == "object" ? (this.scheme = t.scheme || ie, this.authority = t.authority || ie, this.path = t.path || ie, this.query = t.query || ie, this.fragment = t.fragment || ie) : (this.scheme = t0(t, a), this.authority = n || ie, this.path = n0(this.scheme, r || ie), this.query = i || ie, this.fragment = s || ie, e0(this, a));
  }
  get fsPath() {
    return kr(this, !1);
  }
  with(t) {
    if (!t)
      return this;
    let { scheme: n, authority: r, path: i, query: s, fragment: a } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = ie), r === void 0 ? r = this.authority : r === null && (r = ie), i === void 0 ? i = this.path : i === null && (i = ie), s === void 0 ? s = this.query : s === null && (s = ie), a === void 0 ? a = this.fragment : a === null && (a = ie), n === this.scheme && r === this.authority && i === this.path && s === this.query && a === this.fragment ? this : new Ct(n, r, i, s, a);
  }
  static parse(t, n = !1) {
    const r = r0.exec(t);
    return r ? new Ct(
      r[2] || ie,
      ar(r[4] || ie),
      ar(r[5] || ie),
      ar(r[7] || ie),
      ar(r[9] || ie),
      n
    ) : new Ct(ie, ie, ie, ie, ie);
  }
  static file(t) {
    let n = ie;
    if (xn && (t = t.replace(/\\/g, Ce)), t[0] === Ce && t[1] === Ce) {
      const r = t.indexOf(Ce, 2);
      r === -1 ? (n = t.substring(2), t = Ce) : (n = t.substring(2, r), t = t.substring(r) || Ce);
    }
    return new Ct("file", n, t, ie, ie);
  }
  static from(t, n) {
    return new Ct(
      t.scheme,
      t.authority,
      t.path,
      t.query,
      t.fragment,
      n
    );
  }
  static joinPath(t, ...n) {
    if (!t.path)
      throw new Error("[UriError]: cannot call joinPath on URI without path");
    let r;
    return xn && t.scheme === "file" ? r = br.file(Ne.join(kr(t, !0), ...n)).path : r = se.join(t.path, ...n), t.with({ path: r });
  }
  toString(t = !1) {
    return Ai(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof br)
        return t;
      {
        const n = new Ct(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === Ll ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
const Ll = xn ? 1 : void 0;
class Ct extends Oe {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = kr(this, !1)), this._fsPath;
  }
  toString(t = !1) {
    return t ? Ai(this, !0) : (this._formatted || (this._formatted = Ai(this, !1)), this._formatted);
  }
  toJSON() {
    const t = {
      $mid: Ni.Uri
    };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = Ll), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}
const Nl = {
  [y.Colon]: "%3A",
  [y.Slash]: "%2F",
  [y.QuestionMark]: "%3F",
  [y.Hash]: "%23",
  [y.OpenSquareBracket]: "%5B",
  [y.CloseSquareBracket]: "%5D",
  [y.AtSign]: "%40",
  [y.ExclamationMark]: "%21",
  [y.DollarSign]: "%24",
  [y.Ampersand]: "%26",
  [y.SingleQuote]: "%27",
  [y.OpenParen]: "%28",
  [y.CloseParen]: "%29",
  [y.Asterisk]: "%2A",
  [y.Plus]: "%2B",
  [y.Comma]: "%2C",
  [y.Semicolon]: "%3B",
  [y.Equals]: "%3D",
  [y.Space]: "%20"
};
function Fs(e, t, n) {
  let r, i = -1;
  for (let s = 0; s < e.length; s++) {
    const a = e.charCodeAt(s);
    if (a >= y.a && a <= y.z || a >= y.A && a <= y.Z || a >= y.Digit0 && a <= y.Digit9 || a === y.Dash || a === y.Period || a === y.Underline || a === y.Tilde || t && a === y.Slash || n && a === y.OpenSquareBracket || n && a === y.CloseSquareBracket || n && a === y.Colon)
      i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r !== void 0 && (r += e.charAt(s));
    else {
      r === void 0 && (r = e.substr(0, s));
      const l = Nl[a];
      l !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r += l) : i === -1 && (i = s);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function i0(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    r === y.Hash || r === y.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += Nl[r]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function kr(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === y.Slash && (e.path.charCodeAt(1) >= y.A && e.path.charCodeAt(1) <= y.Z || e.path.charCodeAt(1) >= y.a && e.path.charCodeAt(1) <= y.z) && e.path.charCodeAt(2) === y.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, xn && (n = n.replace(/\//g, "\\")), n;
}
function Ai(e, t) {
  const n = t ? i0 : Fs;
  let r = "", { scheme: i, authority: s, path: a, query: l, fragment: o } = e;
  if (i && (r += i, r += ":"), (s || i === "file") && (r += Ce, r += Ce), s) {
    let u = s.indexOf("@");
    if (u !== -1) {
      const h = s.substr(0, u);
      s = s.substr(u + 1), u = h.lastIndexOf(":"), u === -1 ? r += n(h, !1, !1) : (r += n(h.substr(0, u), !1, !1), r += ":", r += n(h.substr(u + 1), !1, !0)), r += "@";
    }
    s = s.toLowerCase(), u = s.lastIndexOf(":"), u === -1 ? r += n(s, !1, !0) : (r += n(s.substr(0, u), !1, !0), r += s.substr(u));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === y.Slash && a.charCodeAt(2) === y.Colon) {
      const u = a.charCodeAt(1);
      u >= y.A && u <= y.Z && (a = `/${String.fromCharCode(u + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === y.Colon) {
      const u = a.charCodeAt(0);
      u >= y.A && u <= y.Z && (a = `${String.fromCharCode(u + 32)}:${a.substr(2)}`);
    }
    r += n(a, !0, !1);
  }
  return l && (r += "?", r += n(l, !1, !1)), o && (r += "#", r += t ? o : Fs(o, !1, !1)), r;
}
function xl(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + xl(e.substr(3)) : e;
  }
}
const Ps = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function ar(e) {
  return e.match(Ps) ? e.replace(Ps, (t) => xl(t)) : e;
}
var Tt;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Tt || (Tt = {}));
class $e extends G {
  constructor(t, n, r, i) {
    super(t, n, r, i), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = r, this.positionColumn = i;
  }
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  equalsSelection(t) {
    return $e.selectionsEqual(this, t);
  }
  static selectionsEqual(t, n) {
    return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
  }
  getDirection() {
    return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? Tt.LTR : Tt.RTL;
  }
  setEndPosition(t, n) {
    return this.getDirection() === Tt.LTR ? new $e(this.startLineNumber, this.startColumn, t, n) : new $e(t, n, this.startLineNumber, this.startColumn);
  }
  getPosition() {
    return new ee(this.positionLineNumber, this.positionColumn);
  }
  getSelectionStart() {
    return new ee(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  setStartPosition(t, n) {
    return this.getDirection() === Tt.LTR ? new $e(t, n, this.endLineNumber, this.endColumn) : new $e(this.endLineNumber, this.endColumn, t, n);
  }
  static fromPositions(t, n = t) {
    return new $e(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static fromRange(t, n) {
    return n === Tt.LTR ? new $e(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : new $e(
      t.endLineNumber,
      t.endColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  static liftSelection(t) {
    return new $e(
      t.selectionStartLineNumber,
      t.selectionStartColumn,
      t.positionLineNumber,
      t.positionColumn
    );
  }
  static selectionsArrEqual(t, n) {
    if (t && !n || !t && n)
      return !1;
    if (!t && !n)
      return !0;
    if (t.length !== n.length)
      return !1;
    for (let r = 0, i = t.length; r < i; r++)
      if (!this.selectionsEqual(t[r], n[r]))
        return !1;
    return !0;
  }
  static isISelection(t) {
    return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number";
  }
  static createWithDirection(t, n, r, i, s) {
    return s === Tt.LTR ? new $e(t, n, r, i) : new $e(r, i, t, n);
  }
}
const Os = /* @__PURE__ */ Object.create(null);
function f(e, t) {
  if (xu(t)) {
    const n = Os[t];
    if (n === void 0)
      throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return Os[e] = t, { id: e };
}
const s0 = {
  add: f("add", 6e4),
  plus: f("plus", 6e4),
  gistNew: f("gist-new", 6e4),
  repoCreate: f("repo-create", 6e4),
  lightbulb: f("lightbulb", 60001),
  lightBulb: f("light-bulb", 60001),
  repo: f("repo", 60002),
  repoDelete: f("repo-delete", 60002),
  gistFork: f("gist-fork", 60003),
  repoForked: f("repo-forked", 60003),
  gitPullRequest: f("git-pull-request", 60004),
  gitPullRequestAbandoned: f("git-pull-request-abandoned", 60004),
  recordKeys: f("record-keys", 60005),
  keyboard: f("keyboard", 60005),
  tag: f("tag", 60006),
  gitPullRequestLabel: f("git-pull-request-label", 60006),
  tagAdd: f("tag-add", 60006),
  tagRemove: f("tag-remove", 60006),
  person: f("person", 60007),
  personFollow: f("person-follow", 60007),
  personOutline: f("person-outline", 60007),
  personFilled: f("person-filled", 60007),
  gitBranch: f("git-branch", 60008),
  gitBranchCreate: f("git-branch-create", 60008),
  gitBranchDelete: f("git-branch-delete", 60008),
  sourceControl: f("source-control", 60008),
  mirror: f("mirror", 60009),
  mirrorPublic: f("mirror-public", 60009),
  star: f("star", 60010),
  starAdd: f("star-add", 60010),
  starDelete: f("star-delete", 60010),
  starEmpty: f("star-empty", 60010),
  comment: f("comment", 60011),
  commentAdd: f("comment-add", 60011),
  alert: f("alert", 60012),
  warning: f("warning", 60012),
  search: f("search", 60013),
  searchSave: f("search-save", 60013),
  logOut: f("log-out", 60014),
  signOut: f("sign-out", 60014),
  logIn: f("log-in", 60015),
  signIn: f("sign-in", 60015),
  eye: f("eye", 60016),
  eyeUnwatch: f("eye-unwatch", 60016),
  eyeWatch: f("eye-watch", 60016),
  circleFilled: f("circle-filled", 60017),
  primitiveDot: f("primitive-dot", 60017),
  closeDirty: f("close-dirty", 60017),
  debugBreakpoint: f("debug-breakpoint", 60017),
  debugBreakpointDisabled: f("debug-breakpoint-disabled", 60017),
  debugHint: f("debug-hint", 60017),
  terminalDecorationSuccess: f("terminal-decoration-success", 60017),
  primitiveSquare: f("primitive-square", 60018),
  edit: f("edit", 60019),
  pencil: f("pencil", 60019),
  info: f("info", 60020),
  issueOpened: f("issue-opened", 60020),
  gistPrivate: f("gist-private", 60021),
  gitForkPrivate: f("git-fork-private", 60021),
  lock: f("lock", 60021),
  mirrorPrivate: f("mirror-private", 60021),
  close: f("close", 60022),
  removeClose: f("remove-close", 60022),
  x: f("x", 60022),
  repoSync: f("repo-sync", 60023),
  sync: f("sync", 60023),
  clone: f("clone", 60024),
  desktopDownload: f("desktop-download", 60024),
  beaker: f("beaker", 60025),
  microscope: f("microscope", 60025),
  vm: f("vm", 60026),
  deviceDesktop: f("device-desktop", 60026),
  file: f("file", 60027),
  fileText: f("file-text", 60027),
  more: f("more", 60028),
  ellipsis: f("ellipsis", 60028),
  kebabHorizontal: f("kebab-horizontal", 60028),
  mailReply: f("mail-reply", 60029),
  reply: f("reply", 60029),
  organization: f("organization", 60030),
  organizationFilled: f("organization-filled", 60030),
  organizationOutline: f("organization-outline", 60030),
  newFile: f("new-file", 60031),
  fileAdd: f("file-add", 60031),
  newFolder: f("new-folder", 60032),
  fileDirectoryCreate: f("file-directory-create", 60032),
  trash: f("trash", 60033),
  trashcan: f("trashcan", 60033),
  history: f("history", 60034),
  clock: f("clock", 60034),
  folder: f("folder", 60035),
  fileDirectory: f("file-directory", 60035),
  symbolFolder: f("symbol-folder", 60035),
  logoGithub: f("logo-github", 60036),
  markGithub: f("mark-github", 60036),
  github: f("github", 60036),
  terminal: f("terminal", 60037),
  console: f("console", 60037),
  repl: f("repl", 60037),
  zap: f("zap", 60038),
  symbolEvent: f("symbol-event", 60038),
  error: f("error", 60039),
  stop: f("stop", 60039),
  variable: f("variable", 60040),
  symbolVariable: f("symbol-variable", 60040),
  array: f("array", 60042),
  symbolArray: f("symbol-array", 60042),
  symbolModule: f("symbol-module", 60043),
  symbolPackage: f("symbol-package", 60043),
  symbolNamespace: f("symbol-namespace", 60043),
  symbolObject: f("symbol-object", 60043),
  symbolMethod: f("symbol-method", 60044),
  symbolFunction: f("symbol-function", 60044),
  symbolConstructor: f("symbol-constructor", 60044),
  symbolBoolean: f("symbol-boolean", 60047),
  symbolNull: f("symbol-null", 60047),
  symbolNumeric: f("symbol-numeric", 60048),
  symbolNumber: f("symbol-number", 60048),
  symbolStructure: f("symbol-structure", 60049),
  symbolStruct: f("symbol-struct", 60049),
  symbolParameter: f("symbol-parameter", 60050),
  symbolTypeParameter: f("symbol-type-parameter", 60050),
  symbolKey: f("symbol-key", 60051),
  symbolText: f("symbol-text", 60051),
  symbolReference: f("symbol-reference", 60052),
  goToFile: f("go-to-file", 60052),
  symbolEnum: f("symbol-enum", 60053),
  symbolValue: f("symbol-value", 60053),
  symbolRuler: f("symbol-ruler", 60054),
  symbolUnit: f("symbol-unit", 60054),
  activateBreakpoints: f("activate-breakpoints", 60055),
  archive: f("archive", 60056),
  arrowBoth: f("arrow-both", 60057),
  arrowDown: f("arrow-down", 60058),
  arrowLeft: f("arrow-left", 60059),
  arrowRight: f("arrow-right", 60060),
  arrowSmallDown: f("arrow-small-down", 60061),
  arrowSmallLeft: f("arrow-small-left", 60062),
  arrowSmallRight: f("arrow-small-right", 60063),
  arrowSmallUp: f("arrow-small-up", 60064),
  arrowUp: f("arrow-up", 60065),
  bell: f("bell", 60066),
  bold: f("bold", 60067),
  book: f("book", 60068),
  bookmark: f("bookmark", 60069),
  debugBreakpointConditionalUnverified: f("debug-breakpoint-conditional-unverified", 60070),
  debugBreakpointConditional: f("debug-breakpoint-conditional", 60071),
  debugBreakpointConditionalDisabled: f("debug-breakpoint-conditional-disabled", 60071),
  debugBreakpointDataUnverified: f("debug-breakpoint-data-unverified", 60072),
  debugBreakpointData: f("debug-breakpoint-data", 60073),
  debugBreakpointDataDisabled: f("debug-breakpoint-data-disabled", 60073),
  debugBreakpointLogUnverified: f("debug-breakpoint-log-unverified", 60074),
  debugBreakpointLog: f("debug-breakpoint-log", 60075),
  debugBreakpointLogDisabled: f("debug-breakpoint-log-disabled", 60075),
  briefcase: f("briefcase", 60076),
  broadcast: f("broadcast", 60077),
  browser: f("browser", 60078),
  bug: f("bug", 60079),
  calendar: f("calendar", 60080),
  caseSensitive: f("case-sensitive", 60081),
  check: f("check", 60082),
  checklist: f("checklist", 60083),
  chevronDown: f("chevron-down", 60084),
  chevronLeft: f("chevron-left", 60085),
  chevronRight: f("chevron-right", 60086),
  chevronUp: f("chevron-up", 60087),
  chromeClose: f("chrome-close", 60088),
  chromeMaximize: f("chrome-maximize", 60089),
  chromeMinimize: f("chrome-minimize", 60090),
  chromeRestore: f("chrome-restore", 60091),
  circleOutline: f("circle-outline", 60092),
  circle: f("circle", 60092),
  debugBreakpointUnverified: f("debug-breakpoint-unverified", 60092),
  terminalDecorationIncomplete: f("terminal-decoration-incomplete", 60092),
  circleSlash: f("circle-slash", 60093),
  circuitBoard: f("circuit-board", 60094),
  clearAll: f("clear-all", 60095),
  clippy: f("clippy", 60096),
  closeAll: f("close-all", 60097),
  cloudDownload: f("cloud-download", 60098),
  cloudUpload: f("cloud-upload", 60099),
  code: f("code", 60100),
  collapseAll: f("collapse-all", 60101),
  colorMode: f("color-mode", 60102),
  commentDiscussion: f("comment-discussion", 60103),
  creditCard: f("credit-card", 60105),
  dash: f("dash", 60108),
  dashboard: f("dashboard", 60109),
  database: f("database", 60110),
  debugContinue: f("debug-continue", 60111),
  debugDisconnect: f("debug-disconnect", 60112),
  debugPause: f("debug-pause", 60113),
  debugRestart: f("debug-restart", 60114),
  debugStart: f("debug-start", 60115),
  debugStepInto: f("debug-step-into", 60116),
  debugStepOut: f("debug-step-out", 60117),
  debugStepOver: f("debug-step-over", 60118),
  debugStop: f("debug-stop", 60119),
  debug: f("debug", 60120),
  deviceCameraVideo: f("device-camera-video", 60121),
  deviceCamera: f("device-camera", 60122),
  deviceMobile: f("device-mobile", 60123),
  diffAdded: f("diff-added", 60124),
  diffIgnored: f("diff-ignored", 60125),
  diffModified: f("diff-modified", 60126),
  diffRemoved: f("diff-removed", 60127),
  diffRenamed: f("diff-renamed", 60128),
  diff: f("diff", 60129),
  diffSidebyside: f("diff-sidebyside", 60129),
  discard: f("discard", 60130),
  editorLayout: f("editor-layout", 60131),
  emptyWindow: f("empty-window", 60132),
  exclude: f("exclude", 60133),
  extensions: f("extensions", 60134),
  eyeClosed: f("eye-closed", 60135),
  fileBinary: f("file-binary", 60136),
  fileCode: f("file-code", 60137),
  fileMedia: f("file-media", 60138),
  filePdf: f("file-pdf", 60139),
  fileSubmodule: f("file-submodule", 60140),
  fileSymlinkDirectory: f("file-symlink-directory", 60141),
  fileSymlinkFile: f("file-symlink-file", 60142),
  fileZip: f("file-zip", 60143),
  files: f("files", 60144),
  filter: f("filter", 60145),
  flame: f("flame", 60146),
  foldDown: f("fold-down", 60147),
  foldUp: f("fold-up", 60148),
  fold: f("fold", 60149),
  folderActive: f("folder-active", 60150),
  folderOpened: f("folder-opened", 60151),
  gear: f("gear", 60152),
  gift: f("gift", 60153),
  gistSecret: f("gist-secret", 60154),
  gist: f("gist", 60155),
  gitCommit: f("git-commit", 60156),
  gitCompare: f("git-compare", 60157),
  compareChanges: f("compare-changes", 60157),
  gitMerge: f("git-merge", 60158),
  githubAction: f("github-action", 60159),
  githubAlt: f("github-alt", 60160),
  globe: f("globe", 60161),
  grabber: f("grabber", 60162),
  graph: f("graph", 60163),
  gripper: f("gripper", 60164),
  heart: f("heart", 60165),
  home: f("home", 60166),
  horizontalRule: f("horizontal-rule", 60167),
  hubot: f("hubot", 60168),
  inbox: f("inbox", 60169),
  issueReopened: f("issue-reopened", 60171),
  issues: f("issues", 60172),
  italic: f("italic", 60173),
  jersey: f("jersey", 60174),
  json: f("json", 60175),
  kebabVertical: f("kebab-vertical", 60176),
  key: f("key", 60177),
  law: f("law", 60178),
  lightbulbAutofix: f("lightbulb-autofix", 60179),
  linkExternal: f("link-external", 60180),
  link: f("link", 60181),
  listOrdered: f("list-ordered", 60182),
  listUnordered: f("list-unordered", 60183),
  liveShare: f("live-share", 60184),
  loading: f("loading", 60185),
  location: f("location", 60186),
  mailRead: f("mail-read", 60187),
  mail: f("mail", 60188),
  markdown: f("markdown", 60189),
  megaphone: f("megaphone", 60190),
  mention: f("mention", 60191),
  milestone: f("milestone", 60192),
  gitPullRequestMilestone: f("git-pull-request-milestone", 60192),
  mortarBoard: f("mortar-board", 60193),
  move: f("move", 60194),
  multipleWindows: f("multiple-windows", 60195),
  mute: f("mute", 60196),
  noNewline: f("no-newline", 60197),
  note: f("note", 60198),
  octoface: f("octoface", 60199),
  openPreview: f("open-preview", 60200),
  package: f("package", 60201),
  paintcan: f("paintcan", 60202),
  pin: f("pin", 60203),
  play: f("play", 60204),
  run: f("run", 60204),
  plug: f("plug", 60205),
  preserveCase: f("preserve-case", 60206),
  preview: f("preview", 60207),
  project: f("project", 60208),
  pulse: f("pulse", 60209),
  question: f("question", 60210),
  quote: f("quote", 60211),
  radioTower: f("radio-tower", 60212),
  reactions: f("reactions", 60213),
  references: f("references", 60214),
  refresh: f("refresh", 60215),
  regex: f("regex", 60216),
  remoteExplorer: f("remote-explorer", 60217),
  remote: f("remote", 60218),
  remove: f("remove", 60219),
  replaceAll: f("replace-all", 60220),
  replace: f("replace", 60221),
  repoClone: f("repo-clone", 60222),
  repoForcePush: f("repo-force-push", 60223),
  repoPull: f("repo-pull", 60224),
  repoPush: f("repo-push", 60225),
  report: f("report", 60226),
  requestChanges: f("request-changes", 60227),
  rocket: f("rocket", 60228),
  rootFolderOpened: f("root-folder-opened", 60229),
  rootFolder: f("root-folder", 60230),
  rss: f("rss", 60231),
  ruby: f("ruby", 60232),
  saveAll: f("save-all", 60233),
  saveAs: f("save-as", 60234),
  save: f("save", 60235),
  screenFull: f("screen-full", 60236),
  screenNormal: f("screen-normal", 60237),
  searchStop: f("search-stop", 60238),
  server: f("server", 60240),
  settingsGear: f("settings-gear", 60241),
  settings: f("settings", 60242),
  shield: f("shield", 60243),
  smiley: f("smiley", 60244),
  sortPrecedence: f("sort-precedence", 60245),
  splitHorizontal: f("split-horizontal", 60246),
  splitVertical: f("split-vertical", 60247),
  squirrel: f("squirrel", 60248),
  starFull: f("star-full", 60249),
  starHalf: f("star-half", 60250),
  symbolClass: f("symbol-class", 60251),
  symbolColor: f("symbol-color", 60252),
  symbolConstant: f("symbol-constant", 60253),
  symbolEnumMember: f("symbol-enum-member", 60254),
  symbolField: f("symbol-field", 60255),
  symbolFile: f("symbol-file", 60256),
  symbolInterface: f("symbol-interface", 60257),
  symbolKeyword: f("symbol-keyword", 60258),
  symbolMisc: f("symbol-misc", 60259),
  symbolOperator: f("symbol-operator", 60260),
  symbolProperty: f("symbol-property", 60261),
  wrench: f("wrench", 60261),
  wrenchSubaction: f("wrench-subaction", 60261),
  symbolSnippet: f("symbol-snippet", 60262),
  tasklist: f("tasklist", 60263),
  telescope: f("telescope", 60264),
  textSize: f("text-size", 60265),
  threeBars: f("three-bars", 60266),
  thumbsdown: f("thumbsdown", 60267),
  thumbsup: f("thumbsup", 60268),
  tools: f("tools", 60269),
  triangleDown: f("triangle-down", 60270),
  triangleLeft: f("triangle-left", 60271),
  triangleRight: f("triangle-right", 60272),
  triangleUp: f("triangle-up", 60273),
  twitter: f("twitter", 60274),
  unfold: f("unfold", 60275),
  unlock: f("unlock", 60276),
  unmute: f("unmute", 60277),
  unverified: f("unverified", 60278),
  verified: f("verified", 60279),
  versions: f("versions", 60280),
  vmActive: f("vm-active", 60281),
  vmOutline: f("vm-outline", 60282),
  vmRunning: f("vm-running", 60283),
  watch: f("watch", 60284),
  whitespace: f("whitespace", 60285),
  wholeWord: f("whole-word", 60286),
  window: f("window", 60287),
  wordWrap: f("word-wrap", 60288),
  zoomIn: f("zoom-in", 60289),
  zoomOut: f("zoom-out", 60290),
  listFilter: f("list-filter", 60291),
  listFlat: f("list-flat", 60292),
  listSelection: f("list-selection", 60293),
  selection: f("selection", 60293),
  listTree: f("list-tree", 60294),
  debugBreakpointFunctionUnverified: f("debug-breakpoint-function-unverified", 60295),
  debugBreakpointFunction: f("debug-breakpoint-function", 60296),
  debugBreakpointFunctionDisabled: f("debug-breakpoint-function-disabled", 60296),
  debugStackframeActive: f("debug-stackframe-active", 60297),
  circleSmallFilled: f("circle-small-filled", 60298),
  debugStackframeDot: f("debug-stackframe-dot", 60298),
  terminalDecorationMark: f("terminal-decoration-mark", 60298),
  debugStackframe: f("debug-stackframe", 60299),
  debugStackframeFocused: f("debug-stackframe-focused", 60299),
  debugBreakpointUnsupported: f("debug-breakpoint-unsupported", 60300),
  symbolString: f("symbol-string", 60301),
  debugReverseContinue: f("debug-reverse-continue", 60302),
  debugStepBack: f("debug-step-back", 60303),
  debugRestartFrame: f("debug-restart-frame", 60304),
  debugAlt: f("debug-alt", 60305),
  callIncoming: f("call-incoming", 60306),
  callOutgoing: f("call-outgoing", 60307),
  menu: f("menu", 60308),
  expandAll: f("expand-all", 60309),
  feedback: f("feedback", 60310),
  gitPullRequestReviewer: f("git-pull-request-reviewer", 60310),
  groupByRefType: f("group-by-ref-type", 60311),
  ungroupByRefType: f("ungroup-by-ref-type", 60312),
  account: f("account", 60313),
  gitPullRequestAssignee: f("git-pull-request-assignee", 60313),
  bellDot: f("bell-dot", 60314),
  debugConsole: f("debug-console", 60315),
  library: f("library", 60316),
  output: f("output", 60317),
  runAll: f("run-all", 60318),
  syncIgnored: f("sync-ignored", 60319),
  pinned: f("pinned", 60320),
  githubInverted: f("github-inverted", 60321),
  serverProcess: f("server-process", 60322),
  serverEnvironment: f("server-environment", 60323),
  pass: f("pass", 60324),
  issueClosed: f("issue-closed", 60324),
  stopCircle: f("stop-circle", 60325),
  playCircle: f("play-circle", 60326),
  record: f("record", 60327),
  debugAltSmall: f("debug-alt-small", 60328),
  vmConnect: f("vm-connect", 60329),
  cloud: f("cloud", 60330),
  merge: f("merge", 60331),
  export: f("export", 60332),
  graphLeft: f("graph-left", 60333),
  magnet: f("magnet", 60334),
  notebook: f("notebook", 60335),
  redo: f("redo", 60336),
  checkAll: f("check-all", 60337),
  pinnedDirty: f("pinned-dirty", 60338),
  passFilled: f("pass-filled", 60339),
  circleLargeFilled: f("circle-large-filled", 60340),
  circleLarge: f("circle-large", 60341),
  circleLargeOutline: f("circle-large-outline", 60341),
  combine: f("combine", 60342),
  gather: f("gather", 60342),
  table: f("table", 60343),
  variableGroup: f("variable-group", 60344),
  typeHierarchy: f("type-hierarchy", 60345),
  typeHierarchySub: f("type-hierarchy-sub", 60346),
  typeHierarchySuper: f("type-hierarchy-super", 60347),
  gitPullRequestCreate: f("git-pull-request-create", 60348),
  runAbove: f("run-above", 60349),
  runBelow: f("run-below", 60350),
  notebookTemplate: f("notebook-template", 60351),
  debugRerun: f("debug-rerun", 60352),
  workspaceTrusted: f("workspace-trusted", 60353),
  workspaceUntrusted: f("workspace-untrusted", 60354),
  workspaceUnknown: f("workspace-unknown", 60355),
  terminalCmd: f("terminal-cmd", 60356),
  terminalDebian: f("terminal-debian", 60357),
  terminalLinux: f("terminal-linux", 60358),
  terminalPowershell: f("terminal-powershell", 60359),
  terminalTmux: f("terminal-tmux", 60360),
  terminalUbuntu: f("terminal-ubuntu", 60361),
  terminalBash: f("terminal-bash", 60362),
  arrowSwap: f("arrow-swap", 60363),
  copy: f("copy", 60364),
  personAdd: f("person-add", 60365),
  filterFilled: f("filter-filled", 60366),
  wand: f("wand", 60367),
  debugLineByLine: f("debug-line-by-line", 60368),
  inspect: f("inspect", 60369),
  layers: f("layers", 60370),
  layersDot: f("layers-dot", 60371),
  layersActive: f("layers-active", 60372),
  compass: f("compass", 60373),
  compassDot: f("compass-dot", 60374),
  compassActive: f("compass-active", 60375),
  azure: f("azure", 60376),
  issueDraft: f("issue-draft", 60377),
  gitPullRequestClosed: f("git-pull-request-closed", 60378),
  gitPullRequestDraft: f("git-pull-request-draft", 60379),
  debugAll: f("debug-all", 60380),
  debugCoverage: f("debug-coverage", 60381),
  runErrors: f("run-errors", 60382),
  folderLibrary: f("folder-library", 60383),
  debugContinueSmall: f("debug-continue-small", 60384),
  beakerStop: f("beaker-stop", 60385),
  graphLine: f("graph-line", 60386),
  graphScatter: f("graph-scatter", 60387),
  pieChart: f("pie-chart", 60388),
  bracket: f("bracket", 60175),
  bracketDot: f("bracket-dot", 60389),
  bracketError: f("bracket-error", 60390),
  lockSmall: f("lock-small", 60391),
  azureDevops: f("azure-devops", 60392),
  verifiedFilled: f("verified-filled", 60393),
  newline: f("newline", 60394),
  layout: f("layout", 60395),
  layoutActivitybarLeft: f("layout-activitybar-left", 60396),
  layoutActivitybarRight: f("layout-activitybar-right", 60397),
  layoutPanelLeft: f("layout-panel-left", 60398),
  layoutPanelCenter: f("layout-panel-center", 60399),
  layoutPanelJustify: f("layout-panel-justify", 60400),
  layoutPanelRight: f("layout-panel-right", 60401),
  layoutPanel: f("layout-panel", 60402),
  layoutSidebarLeft: f("layout-sidebar-left", 60403),
  layoutSidebarRight: f("layout-sidebar-right", 60404),
  layoutStatusbar: f("layout-statusbar", 60405),
  layoutMenubar: f("layout-menubar", 60406),
  layoutCentered: f("layout-centered", 60407),
  target: f("target", 60408),
  indent: f("indent", 60409),
  recordSmall: f("record-small", 60410),
  errorSmall: f("error-small", 60411),
  terminalDecorationError: f("terminal-decoration-error", 60411),
  arrowCircleDown: f("arrow-circle-down", 60412),
  arrowCircleLeft: f("arrow-circle-left", 60413),
  arrowCircleRight: f("arrow-circle-right", 60414),
  arrowCircleUp: f("arrow-circle-up", 60415),
  layoutSidebarRightOff: f("layout-sidebar-right-off", 60416),
  layoutPanelOff: f("layout-panel-off", 60417),
  layoutSidebarLeftOff: f("layout-sidebar-left-off", 60418),
  blank: f("blank", 60419),
  heartFilled: f("heart-filled", 60420),
  map: f("map", 60421),
  mapHorizontal: f("map-horizontal", 60421),
  foldHorizontal: f("fold-horizontal", 60421),
  mapFilled: f("map-filled", 60422),
  mapHorizontalFilled: f("map-horizontal-filled", 60422),
  foldHorizontalFilled: f("fold-horizontal-filled", 60422),
  circleSmall: f("circle-small", 60423),
  bellSlash: f("bell-slash", 60424),
  bellSlashDot: f("bell-slash-dot", 60425),
  commentUnresolved: f("comment-unresolved", 60426),
  gitPullRequestGoToChanges: f("git-pull-request-go-to-changes", 60427),
  gitPullRequestNewChanges: f("git-pull-request-new-changes", 60428),
  searchFuzzy: f("search-fuzzy", 60429),
  commentDraft: f("comment-draft", 60430),
  send: f("send", 60431),
  sparkle: f("sparkle", 60432),
  insert: f("insert", 60433),
  mic: f("mic", 60434),
  thumbsdownFilled: f("thumbsdown-filled", 60435),
  thumbsupFilled: f("thumbsup-filled", 60436),
  coffee: f("coffee", 60437),
  snake: f("snake", 60438),
  game: f("game", 60439),
  vr: f("vr", 60440),
  chip: f("chip", 60441),
  piano: f("piano", 60442),
  music: f("music", 60443),
  micFilled: f("mic-filled", 60444),
  repoFetch: f("repo-fetch", 60445),
  copilot: f("copilot", 60446),
  lightbulbSparkle: f("lightbulb-sparkle", 60447),
  robot: f("robot", 60448),
  sparkleFilled: f("sparkle-filled", 60449),
  diffSingle: f("diff-single", 60450),
  diffMultiple: f("diff-multiple", 60451),
  surroundWith: f("surround-with", 60452),
  share: f("share", 60453),
  gitStash: f("git-stash", 60454),
  gitStashApply: f("git-stash-apply", 60455),
  gitStashPop: f("git-stash-pop", 60456),
  vscode: f("vscode", 60457),
  vscodeInsiders: f("vscode-insiders", 60458),
  codeOss: f("code-oss", 60459),
  runCoverage: f("run-coverage", 60460),
  runAllCoverage: f("run-all-coverage", 60461),
  coverage: f("coverage", 60462),
  githubProject: f("github-project", 60463),
  mapVertical: f("map-vertical", 60464),
  foldVertical: f("fold-vertical", 60464),
  mapVerticalFilled: f("map-vertical-filled", 60465),
  foldVerticalFilled: f("fold-vertical-filled", 60465),
  goToSearch: f("go-to-search", 60466),
  percentage: f("percentage", 60467),
  sortPercentage: f("sort-percentage", 60467),
  attach: f("attach", 60468),
  goToEditingSession: f("go-to-editing-session", 60469),
  editSession: f("edit-session", 60470),
  codeReview: f("code-review", 60471),
  copilotWarning: f("copilot-warning", 60472),
  python: f("python", 60473),
  copilotLarge: f("copilot-large", 60474),
  copilotWarningLarge: f("copilot-warning-large", 60475),
  keyboardTab: f("keyboard-tab", 60476),
  copilotBlocked: f("copilot-blocked", 60477),
  copilotNotConnected: f("copilot-not-connected", 60478),
  flag: f("flag", 60479),
  lightbulbEmpty: f("lightbulb-empty", 60480),
  symbolMethodArrow: f("symbol-method-arrow", 60481),
  copilotUnavailable: f("copilot-unavailable", 60482),
  repoPinned: f("repo-pinned", 60483),
  keyboardTabAbove: f("keyboard-tab-above", 60484),
  keyboardTabBelow: f("keyboard-tab-below", 60485),
  gitPullRequestDone: f("git-pull-request-done", 60486),
  mcp: f("mcp", 60487),
  extensionsLarge: f("extensions-large", 60488),
  layoutPanelDock: f("layout-panel-dock", 60489),
  layoutSidebarLeftDock: f("layout-sidebar-left-dock", 60490),
  layoutSidebarRightDock: f("layout-sidebar-right-dock", 60491),
  copilotInProgress: f("copilot-in-progress", 60492),
  copilotError: f("copilot-error", 60493),
  copilotSuccess: f("copilot-success", 60494),
  chatSparkle: f("chat-sparkle", 60495),
  searchSparkle: f("search-sparkle", 60496),
  editSparkle: f("edit-sparkle", 60497),
  copilotSnooze: f("copilot-snooze", 60498),
  sendToRemoteAgent: f("send-to-remote-agent", 60499)
}, a0 = {
  dialogError: f("dialog-error", "error"),
  dialogWarning: f("dialog-warning", "warning"),
  dialogInfo: f("dialog-info", "info"),
  dialogClose: f("dialog-close", "close"),
  treeItemExpanded: f("tree-item-expanded", "chevron-down"),
  treeFilterOnTypeOn: f("tree-filter-on-type-on", "list-filter"),
  treeFilterOnTypeOff: f("tree-filter-on-type-off", "list-selection"),
  treeFilterClear: f("tree-filter-clear", "close"),
  treeItemLoading: f("tree-item-loading", "loading"),
  menuSelection: f("menu-selection", "check"),
  menuSubmenu: f("menu-submenu", "chevron-right"),
  menuBarMore: f("menubar-more", "more"),
  scrollbarButtonLeft: f("scrollbar-button-left", "triangle-left"),
  scrollbarButtonRight: f("scrollbar-button-right", "triangle-right"),
  scrollbarButtonUp: f("scrollbar-button-up", "triangle-up"),
  scrollbarButtonDown: f("scrollbar-button-down", "triangle-down"),
  toolBarMore: f("toolbar-more", "more"),
  quickInputBack: f("quick-input-back", "arrow-left"),
  dropDownButton: f("drop-down-button", 60084),
  symbolCustomColor: f("symbol-customcolor", 60252),
  exportIcon: f("export", 60332),
  workspaceUnspecified: f("workspace-unspecified", 60355),
  newLine: f("newline", 60394),
  thumbsDownFilled: f("thumbsdown-filled", 60435),
  thumbsUpFilled: f("thumbsup-filled", 60436),
  gitFetch: f("git-fetch", 60445),
  lightbulbSparkleAutofix: f("lightbulb-sparkle-autofix", 60447),
  debugBreakpointPending: f("debug-breakpoint-pending", 60377)
}, j = {
  ...s0,
  ...a0
};
var Bs;
(function(e) {
  e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(Bs || (Bs = {}));
var Vs;
(function(e) {
  e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(Vs || (Vs = {}));
var Sr;
(function(e) {
  e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(Sr || (Sr = {}));
var $s;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})($s || ($s = {}));
var qs;
(function(e) {
  e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(qs || (qs = {}));
class o0 {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new Ge(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(t) {
    this._onDidChange.fire({
      changedLanguages: t,
      changedColorMap: !1
    });
  }
  register(t, n) {
    return this._tokenizationSupports.set(t, n), this.handleChange([t]), Xn(() => {
      this._tokenizationSupports.get(t) === n && (this._tokenizationSupports.delete(t), this.handleChange([t]));
    });
  }
  get(t) {
    return this._tokenizationSupports.get(t) || null;
  }
  registerFactory(t, n) {
    var i;
    (i = this._factories.get(t)) == null || i.dispose();
    const r = new l0(this, t, n);
    return this._factories.set(t, r), Xn(() => {
      const s = this._factories.get(t);
      !s || s !== r || (this._factories.delete(t), s.dispose());
    });
  }
  async getOrCreate(t) {
    const n = this.get(t);
    if (n)
      return n;
    const r = this._factories.get(t);
    return !r || r.isResolved ? null : (await r.resolve(), this.get(t));
  }
  isResolved(t) {
    if (this.get(t))
      return !0;
    const r = this._factories.get(t);
    return !!(!r || r.isResolved);
  }
  setColorMap(t) {
    this._colorMap = t, this._onDidChange.fire({
      changedLanguages: Array.from(this._tokenizationSupports.keys()),
      changedColorMap: !0
    });
  }
  getColorMap() {
    return this._colorMap;
  }
  getDefaultBackground() {
    return this._colorMap && this._colorMap.length > Sr.DefaultBackground ? this._colorMap[Sr.DefaultBackground] : null;
  }
}
class l0 extends Nn {
  get isResolved() {
    return this._isResolved;
  }
  constructor(t, n, r) {
    super(), this._registry = t, this._languageId = n, this._factory = r, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1;
  }
  dispose() {
    this._isDisposed = !0, super.dispose();
  }
  async resolve() {
    return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise;
  }
  async _create() {
    const t = await this._factory.tokenizationSupport;
    this._isResolved = !0, t && !this._isDisposed && this._register(this._registry.register(this._languageId, t));
  }
}
class u0 {
  constructor(t, n, r) {
    this.offset = t, this.type = n, this.language = r, this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
}
var Hs;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Hs || (Hs = {}));
var O;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(O || (O = {}));
var Ws;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(O.Method, j.symbolMethod), t.set(O.Function, j.symbolFunction), t.set(O.Constructor, j.symbolConstructor), t.set(O.Field, j.symbolField), t.set(O.Variable, j.symbolVariable), t.set(O.Class, j.symbolClass), t.set(O.Struct, j.symbolStruct), t.set(O.Interface, j.symbolInterface), t.set(O.Module, j.symbolModule), t.set(O.Property, j.symbolProperty), t.set(O.Event, j.symbolEvent), t.set(O.Operator, j.symbolOperator), t.set(O.Unit, j.symbolUnit), t.set(O.Value, j.symbolValue), t.set(O.Enum, j.symbolEnum), t.set(O.Constant, j.symbolConstant), t.set(O.Enum, j.symbolEnum), t.set(O.EnumMember, j.symbolEnumMember), t.set(O.Keyword, j.symbolKeyword), t.set(O.Snippet, j.symbolSnippet), t.set(O.Text, j.symbolText), t.set(O.Color, j.symbolColor), t.set(O.File, j.symbolFile), t.set(O.Reference, j.symbolReference), t.set(O.Customcolor, j.symbolCustomColor), t.set(O.Folder, j.symbolFolder), t.set(O.TypeParameter, j.symbolTypeParameter), t.set(O.User, j.account), t.set(O.Issue, j.issues), t.set(O.Tool, j.tools);
  function n(a) {
    let l = t.get(a);
    return l || (console.info("No codicon found for CompletionItemKind " + a), l = j.symbolProperty), l;
  }
  e.toIcon = n;
  function r(a) {
    switch (a) {
      case O.Method:
        return X(786, "Method");
      case O.Function:
        return X(787, "Function");
      case O.Constructor:
        return X(788, "Constructor");
      case O.Field:
        return X(789, "Field");
      case O.Variable:
        return X(790, "Variable");
      case O.Class:
        return X(791, "Class");
      case O.Struct:
        return X(792, "Struct");
      case O.Interface:
        return X(793, "Interface");
      case O.Module:
        return X(794, "Module");
      case O.Property:
        return X(795, "Property");
      case O.Event:
        return X(796, "Event");
      case O.Operator:
        return X(797, "Operator");
      case O.Unit:
        return X(798, "Unit");
      case O.Value:
        return X(799, "Value");
      case O.Constant:
        return X(800, "Constant");
      case O.Enum:
        return X(801, "Enum");
      case O.EnumMember:
        return X(802, "Enum Member");
      case O.Keyword:
        return X(803, "Keyword");
      case O.Text:
        return X(804, "Text");
      case O.Color:
        return X(805, "Color");
      case O.File:
        return X(806, "File");
      case O.Reference:
        return X(807, "Reference");
      case O.Customcolor:
        return X(808, "Custom Color");
      case O.Folder:
        return X(809, "Folder");
      case O.TypeParameter:
        return X(810, "Type Parameter");
      case O.User:
        return X(811, "User");
      case O.Issue:
        return X(812, "Issue");
      case O.Tool:
        return X(813, "Tool");
      case O.Snippet:
        return X(814, "Snippet");
      default:
        return "";
    }
  }
  e.toLabel = r;
  const i = /* @__PURE__ */ new Map();
  i.set("method", O.Method), i.set("function", O.Function), i.set("constructor", O.Constructor), i.set("field", O.Field), i.set("variable", O.Variable), i.set("class", O.Class), i.set("struct", O.Struct), i.set("interface", O.Interface), i.set("module", O.Module), i.set("property", O.Property), i.set("event", O.Event), i.set("operator", O.Operator), i.set("unit", O.Unit), i.set("value", O.Value), i.set("constant", O.Constant), i.set("enum", O.Enum), i.set("enum-member", O.EnumMember), i.set("enumMember", O.EnumMember), i.set("keyword", O.Keyword), i.set("snippet", O.Snippet), i.set("text", O.Text), i.set("color", O.Color), i.set("file", O.File), i.set("reference", O.Reference), i.set("customcolor", O.Customcolor), i.set("folder", O.Folder), i.set("type-parameter", O.TypeParameter), i.set("typeParameter", O.TypeParameter), i.set("account", O.User), i.set("issue", O.Issue), i.set("tool", O.Tool);
  function s(a, l) {
    let o = i.get(a);
    return typeof o > "u" && !l && (o = O.Property), o;
  }
  e.fromString = s;
})(Ws || (Ws = {}));
var js;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(js || (js = {}));
var Gs;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Gs || (Gs = {}));
var zs;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(zs || (zs = {}));
var Xs;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Xs || (Xs = {}));
var Js;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(Js || (Js = {}));
var Ys;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(Ys || (Ys = {}));
var Qs;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Qs || (Qs = {}));
var Zs;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(Zs || (Zs = {}));
var Ks;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Ks || (Ks = {}));
var Cs;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Cs || (Cs = {}));
var H;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(H || (H = {}));
H.Array + "", X(815, "array"), H.Boolean + "", X(816, "boolean"), H.Class + "", X(817, "class"), H.Constant + "", X(818, "constant"), H.Constructor + "", X(819, "constructor"), H.Enum + "", X(820, "enumeration"), H.EnumMember + "", X(821, "enumeration member"), H.Event + "", X(822, "event"), H.Field + "", X(823, "field"), H.File + "", X(824, "file"), H.Function + "", X(825, "function"), H.Interface + "", X(826, "interface"), H.Key + "", X(827, "key"), H.Method + "", X(828, "method"), H.Module + "", X(829, "module"), H.Namespace + "", X(830, "namespace"), H.Null + "", X(831, "null"), H.Number + "", X(832, "number"), H.Object + "", X(833, "object"), H.Operator + "", X(834, "operator"), H.Package + "", X(835, "package"), H.Property + "", X(836, "property"), H.String + "", X(837, "string"), H.Struct + "", X(838, "struct"), H.TypeParameter + "", X(839, "type parameter"), H.Variable + "", X(840, "variable");
var ea;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(ea || (ea = {}));
var ta;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(H.File, j.symbolFile), t.set(H.Module, j.symbolModule), t.set(H.Namespace, j.symbolNamespace), t.set(H.Package, j.symbolPackage), t.set(H.Class, j.symbolClass), t.set(H.Method, j.symbolMethod), t.set(H.Property, j.symbolProperty), t.set(H.Field, j.symbolField), t.set(H.Constructor, j.symbolConstructor), t.set(H.Enum, j.symbolEnum), t.set(H.Interface, j.symbolInterface), t.set(H.Function, j.symbolFunction), t.set(H.Variable, j.symbolVariable), t.set(H.Constant, j.symbolConstant), t.set(H.String, j.symbolString), t.set(H.Number, j.symbolNumber), t.set(H.Boolean, j.symbolBoolean), t.set(H.Array, j.symbolArray), t.set(H.Object, j.symbolObject), t.set(H.Key, j.symbolKey), t.set(H.Null, j.symbolNull), t.set(H.EnumMember, j.symbolEnumMember), t.set(H.Struct, j.symbolStruct), t.set(H.Event, j.symbolEvent), t.set(H.Operator, j.symbolOperator), t.set(H.TypeParameter, j.symbolTypeParameter);
  function n(s) {
    let a = t.get(s);
    return a || (console.info("No codicon found for SymbolKind " + s), a = j.symbolProperty), a;
  }
  e.toIcon = n;
  const r = /* @__PURE__ */ new Map();
  r.set(H.File, O.File), r.set(H.Module, O.Module), r.set(H.Namespace, O.Module), r.set(H.Package, O.Module), r.set(H.Class, O.Class), r.set(H.Method, O.Method), r.set(H.Property, O.Property), r.set(H.Field, O.Field), r.set(H.Constructor, O.Constructor), r.set(H.Enum, O.Enum), r.set(H.Interface, O.Interface), r.set(H.Function, O.Function), r.set(H.Variable, O.Variable), r.set(H.Constant, O.Constant), r.set(H.String, O.Text), r.set(H.Number, O.Value), r.set(H.Boolean, O.Value), r.set(H.Array, O.Value), r.set(H.Object, O.Value), r.set(H.Key, O.Keyword), r.set(H.Null, O.Value), r.set(H.EnumMember, O.EnumMember), r.set(H.Struct, O.Struct), r.set(H.Event, O.Event), r.set(H.Operator, O.Operator), r.set(H.TypeParameter, O.TypeParameter);
  function i(s) {
    let a = r.get(s);
    return a === void 0 && (console.info("No completion kind found for SymbolKind " + s), a = O.File), a;
  }
  e.toCompletionKind = i;
})(ta || (ta = {}));
var Ie;
let Mh = (Ie = class {
  static fromValue(t) {
    switch (t) {
      case "comment":
        return Ie.Comment;
      case "imports":
        return Ie.Imports;
      case "region":
        return Ie.Region;
    }
    return new Ie(t);
  }
  constructor(t) {
    this.value = t;
  }
}, Ie.Comment = new Ie("comment"), Ie.Imports = new Ie("imports"), Ie.Region = new Ie("region"), Ie);
var na;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(na || (na = {}));
var ra;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(ra || (ra = {}));
var ia;
(function(e) {
  function t(n) {
    return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(ia || (ia = {}));
var sa;
(function(e) {
  e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(sa || (sa = {}));
var aa;
(function(e) {
  e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(aa || (aa = {}));
var oa;
(function(e) {
  e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(oa || (oa = {}));
var la;
(function(e) {
  e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(la || (la = {}));
var ua;
(function(e) {
  e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(ua || (ua = {}));
var ca;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(ca || (ca = {}));
new o0();
var fa;
(function(e) {
  e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(fa || (fa = {}));
var ha;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(ha || (ha = {}));
var ga;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(ga || (ga = {}));
var ma;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(ma || (ma = {}));
var da;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(da || (da = {}));
var pa;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(pa || (pa = {}));
var ba;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(ba || (ba = {}));
var _a;
(function(e) {
  e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(_a || (_a = {}));
var wa;
(function(e) {
  e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})(wa || (wa = {}));
var va;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(va || (va = {}));
var La;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(La || (La = {}));
var Na;
(function(e) {
  e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(Na || (Na = {}));
var xa;
(function(e) {
  e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowOverflow = 4] = "allowOverflow", e[e.allowVariableLineHeights = 5] = "allowVariableLineHeights", e[e.allowVariableFonts = 6] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 7] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 8] = "ariaLabel", e[e.ariaRequired = 9] = "ariaRequired", e[e.autoClosingBrackets = 10] = "autoClosingBrackets", e[e.autoClosingComments = 11] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 12] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 13] = "autoClosingDelete", e[e.autoClosingOvertype = 14] = "autoClosingOvertype", e[e.autoClosingQuotes = 15] = "autoClosingQuotes", e[e.autoIndent = 16] = "autoIndent", e[e.autoIndentOnPaste = 17] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 18] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 19] = "automaticLayout", e[e.autoSurround = 20] = "autoSurround", e[e.bracketPairColorization = 21] = "bracketPairColorization", e[e.guides = 22] = "guides", e[e.codeLens = 23] = "codeLens", e[e.codeLensFontFamily = 24] = "codeLensFontFamily", e[e.codeLensFontSize = 25] = "codeLensFontSize", e[e.colorDecorators = 26] = "colorDecorators", e[e.colorDecoratorsLimit = 27] = "colorDecoratorsLimit", e[e.columnSelection = 28] = "columnSelection", e[e.comments = 29] = "comments", e[e.contextmenu = 30] = "contextmenu", e[e.copyWithSyntaxHighlighting = 31] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 32] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 33] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 34] = "cursorStyle", e[e.cursorSurroundingLines = 35] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 36] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 37] = "cursorWidth", e[e.cursorHeight = 38] = "cursorHeight", e[e.disableLayerHinting = 39] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 40] = "disableMonospaceOptimizations", e[e.domReadOnly = 41] = "domReadOnly", e[e.dragAndDrop = 42] = "dragAndDrop", e[e.dropIntoEditor = 43] = "dropIntoEditor", e[e.editContext = 44] = "editContext", e[e.emptySelectionClipboard = 45] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 46] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 47] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 48] = "extraEditorClassName", e[e.fastScrollSensitivity = 49] = "fastScrollSensitivity", e[e.find = 50] = "find", e[e.fixedOverflowWidgets = 51] = "fixedOverflowWidgets", e[e.folding = 52] = "folding", e[e.foldingStrategy = 53] = "foldingStrategy", e[e.foldingHighlight = 54] = "foldingHighlight", e[e.foldingImportsByDefault = 55] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 56] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 57] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 58] = "fontFamily", e[e.fontInfo = 59] = "fontInfo", e[e.fontLigatures = 60] = "fontLigatures", e[e.fontSize = 61] = "fontSize", e[e.fontWeight = 62] = "fontWeight", e[e.fontVariations = 63] = "fontVariations", e[e.formatOnPaste = 64] = "formatOnPaste", e[e.formatOnType = 65] = "formatOnType", e[e.glyphMargin = 66] = "glyphMargin", e[e.gotoLocation = 67] = "gotoLocation", e[e.hideCursorInOverviewRuler = 68] = "hideCursorInOverviewRuler", e[e.hover = 69] = "hover", e[e.inDiffEditor = 70] = "inDiffEditor", e[e.inlineSuggest = 71] = "inlineSuggest", e[e.letterSpacing = 72] = "letterSpacing", e[e.lightbulb = 73] = "lightbulb", e[e.lineDecorationsWidth = 74] = "lineDecorationsWidth", e[e.lineHeight = 75] = "lineHeight", e[e.lineNumbers = 76] = "lineNumbers", e[e.lineNumbersMinChars = 77] = "lineNumbersMinChars", e[e.linkedEditing = 78] = "linkedEditing", e[e.links = 79] = "links", e[e.matchBrackets = 80] = "matchBrackets", e[e.minimap = 81] = "minimap", e[e.mouseStyle = 82] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 83] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 84] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 85] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 86] = "multiCursorModifier", e[e.multiCursorPaste = 87] = "multiCursorPaste", e[e.multiCursorLimit = 88] = "multiCursorLimit", e[e.occurrencesHighlight = 89] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 90] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 91] = "overtypeCursorStyle", e[e.overtypeOnPaste = 92] = "overtypeOnPaste", e[e.overviewRulerBorder = 93] = "overviewRulerBorder", e[e.overviewRulerLanes = 94] = "overviewRulerLanes", e[e.padding = 95] = "padding", e[e.pasteAs = 96] = "pasteAs", e[e.parameterHints = 97] = "parameterHints", e[e.peekWidgetDefaultFocus = 98] = "peekWidgetDefaultFocus", e[e.placeholder = 99] = "placeholder", e[e.definitionLinkOpensInPeek = 100] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 101] = "quickSuggestions", e[e.quickSuggestionsDelay = 102] = "quickSuggestionsDelay", e[e.readOnly = 103] = "readOnly", e[e.readOnlyMessage = 104] = "readOnlyMessage", e[e.renameOnType = 105] = "renameOnType", e[e.renderRichScreenReaderContent = 106] = "renderRichScreenReaderContent", e[e.renderControlCharacters = 107] = "renderControlCharacters", e[e.renderFinalNewline = 108] = "renderFinalNewline", e[e.renderLineHighlight = 109] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 110] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 111] = "renderValidationDecorations", e[e.renderWhitespace = 112] = "renderWhitespace", e[e.revealHorizontalRightPadding = 113] = "revealHorizontalRightPadding", e[e.roundedSelection = 114] = "roundedSelection", e[e.rulers = 115] = "rulers", e[e.scrollbar = 116] = "scrollbar", e[e.scrollBeyondLastColumn = 117] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 118] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 119] = "scrollPredominantAxis", e[e.selectionClipboard = 120] = "selectionClipboard", e[e.selectionHighlight = 121] = "selectionHighlight", e[e.selectionHighlightMaxLength = 122] = "selectionHighlightMaxLength", e[e.selectionHighlightMultiline = 123] = "selectionHighlightMultiline", e[e.selectOnLineNumbers = 124] = "selectOnLineNumbers", e[e.showFoldingControls = 125] = "showFoldingControls", e[e.showUnused = 126] = "showUnused", e[e.snippetSuggestions = 127] = "snippetSuggestions", e[e.smartSelect = 128] = "smartSelect", e[e.smoothScrolling = 129] = "smoothScrolling", e[e.stickyScroll = 130] = "stickyScroll", e[e.stickyTabStops = 131] = "stickyTabStops", e[e.stopRenderingLineAfter = 132] = "stopRenderingLineAfter", e[e.suggest = 133] = "suggest", e[e.suggestFontSize = 134] = "suggestFontSize", e[e.suggestLineHeight = 135] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 136] = "suggestOnTriggerCharacters", e[e.suggestSelection = 137] = "suggestSelection", e[e.tabCompletion = 138] = "tabCompletion", e[e.tabIndex = 139] = "tabIndex", e[e.trimWhitespaceOnDelete = 140] = "trimWhitespaceOnDelete", e[e.unicodeHighlighting = 141] = "unicodeHighlighting", e[e.unusualLineTerminators = 142] = "unusualLineTerminators", e[e.useShadowDOM = 143] = "useShadowDOM", e[e.useTabStops = 144] = "useTabStops", e[e.wordBreak = 145] = "wordBreak", e[e.wordSegmenterLocales = 146] = "wordSegmenterLocales", e[e.wordSeparators = 147] = "wordSeparators", e[e.wordWrap = 148] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 149] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 150] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 151] = "wordWrapColumn", e[e.wordWrapOverride1 = 152] = "wordWrapOverride1", e[e.wordWrapOverride2 = 153] = "wordWrapOverride2", e[e.wrappingIndent = 154] = "wrappingIndent", e[e.wrappingStrategy = 155] = "wrappingStrategy", e[e.showDeprecated = 156] = "showDeprecated", e[e.inertialScroll = 157] = "inertialScroll", e[e.inlayHints = 158] = "inlayHints", e[e.wrapOnEscapedLineFeeds = 159] = "wrapOnEscapedLineFeeds", e[e.effectiveCursorStyle = 160] = "effectiveCursorStyle", e[e.editorClassName = 161] = "editorClassName", e[e.pixelRatio = 162] = "pixelRatio", e[e.tabFocusMode = 163] = "tabFocusMode", e[e.layoutInfo = 164] = "layoutInfo", e[e.wrappingInfo = 165] = "wrappingInfo", e[e.defaultColorDecorators = 166] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 167] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 168] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 169] = "effectiveEditContext", e[e.scrollOnMiddleClick = 170] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 171] = "effectiveAllowVariableFonts";
})(xa || (xa = {}));
var Aa;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Aa || (Aa = {}));
var Ea;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Ea || (Ea = {}));
var Ra;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(Ra || (Ra = {}));
var ya;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(ya || (ya = {}));
var Ta;
(function(e) {
  e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(Ta || (Ta = {}));
var ka;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(ka || (ka = {}));
var Sa;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(Sa || (Sa = {}));
var Ma;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(Ma || (Ma = {}));
var Ia;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(Ia || (Ia = {}));
var Ei;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(Ei || (Ei = {}));
var Ri;
(function(e) {
  e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(Ri || (Ri = {}));
var yi;
(function(e) {
  e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})(yi || (yi = {}));
var Ua;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(Ua || (Ua = {}));
var Da;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(Da || (Da = {}));
var Fa;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(Fa || (Fa = {}));
var Pa;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(Pa || (Pa = {}));
var Oa;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Oa || (Oa = {}));
var Ba;
(function(e) {
  e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(Ba || (Ba = {}));
var Va;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(Va || (Va = {}));
var $a;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})($a || ($a = {}));
var qa;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(qa || (qa = {}));
var Ha;
(function(e) {
  e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(Ha || (Ha = {}));
var Wa;
(function(e) {
  e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(Wa || (Wa = {}));
var ja;
(function(e) {
  e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(ja || (ja = {}));
var Ga;
(function(e) {
  e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(Ga || (Ga = {}));
var Ti;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Ti || (Ti = {}));
var za;
(function(e) {
  e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(za || (za = {}));
var Xa;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Xa || (Xa = {}));
var Ja;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(Ja || (Ja = {}));
var Ya;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Ya || (Ya = {}));
var Qa;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Qa || (Qa = {}));
var Za;
(function(e) {
  e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(Za || (Za = {}));
var Ka;
(function(e) {
  e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(Ka || (Ka = {}));
var Ca;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(Ca || (Ca = {}));
var e1;
(function(e) {
  e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})(e1 || (e1 = {}));
const gn = class gn {
  static chord(t, n) {
    return Fc(t, n);
  }
};
gn.CtrlCmd = on.CtrlCmd, gn.Shift = on.Shift, gn.Alt = on.Alt, gn.WinCtrl = on.WinCtrl;
let ki = gn;
function c0() {
  return {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Xu,
    Emitter: Ge,
    KeyCode: Ei,
    KeyMod: ki,
    Position: ee,
    Range: G,
    Selection: $e,
    SelectionDirection: Ti,
    MarkerSeverity: Ri,
    MarkerTag: yi,
    Uri: Oe,
    Token: u0
  };
}
var An;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(An || (An = {}));
new vu(10);
var t1;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(t1 || (t1 = {}));
var n1;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(n1 || (n1 = {}));
var r1;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(r1 || (r1 = {}));
var i1;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(i1 || (i1 = {}));
var s1;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(s1 || (s1 = {}));
var a1;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(a1 || (a1 = {}));
var o1;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(o1 || (o1 = {}));
var l1;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(l1 || (l1 = {}));
var u1;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(u1 || (u1 = {}));
var c1;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(c1 || (c1 = {}));
var f1;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(f1 || (f1 = {}));
var h1;
(function(e) {
  e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(h1 || (h1 = {}));
function f0(e) {
  if (!e || e.length === 0)
    return !1;
  for (let t = 0, n = e.length; t < n; t++) {
    const r = e.charCodeAt(t);
    if (r === y.LineFeed)
      return !0;
    if (r === y.Backslash) {
      if (t++, t >= n)
        break;
      const i = e.charCodeAt(t);
      if (i === y.n || i === y.r || i === y.W)
        return !0;
    }
  }
  return !1;
}
function h0(e, t, n, r, i) {
  if (r === 0)
    return !0;
  const s = t.charCodeAt(r - 1);
  if (e.get(s) !== An.Regular || s === y.CarriageReturn || s === y.LineFeed)
    return !0;
  if (i > 0) {
    const a = t.charCodeAt(r);
    if (e.get(a) !== An.Regular)
      return !0;
  }
  return !1;
}
function g0(e, t, n, r, i) {
  if (r + i === n)
    return !0;
  const s = t.charCodeAt(r + i);
  if (e.get(s) !== An.Regular || s === y.CarriageReturn || s === y.LineFeed)
    return !0;
  if (i > 0) {
    const a = t.charCodeAt(r + i - 1);
    if (e.get(a) !== An.Regular)
      return !0;
  }
  return !1;
}
function m0(e, t, n, r, i) {
  return h0(e, t, n, r, i) && g0(e, t, n, r, i);
}
class d0 {
  constructor(t, n) {
    this._wordSeparators = t, this._searchRegex = n, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  reset(t) {
    this._searchRegex.lastIndex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  next(t) {
    const n = t.length;
    let r;
    do {
      if (this._prevMatchStartIndex + this._prevMatchLength === n || (r = this._searchRegex.exec(t), !r))
        return null;
      const i = r.index, s = r[0].length;
      if (i === this._prevMatchStartIndex && s === this._prevMatchLength) {
        if (s === 0) {
          ic(t, n, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = i, this._prevMatchLength = s, !this._wordSeparators || m0(this._wordSeparators, t, n, i, s))
        return r;
    } while (r);
    return null;
  }
}
const p0 = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function b0(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of p0)
    e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
const Al = b0();
function El(e) {
  let t = Al;
  if (e && e instanceof RegExp)
    if (e.global)
      t = e;
    else {
      let n = "g";
      e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
    }
  return t.lastIndex = 0, t;
}
const Rl = new Ru();
Rl.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function us(e, t, n, r, i) {
  if (t = El(t), i || (i = vr.first(Rl)), n.length > i.maxLen) {
    let u = e - i.maxLen / 2;
    return u < 0 ? u = 0 : r += u, n = n.substring(u, e + i.maxLen / 2), us(e, t, n, r, i);
  }
  const s = Date.now(), a = e - 1 - r;
  let l = -1, o = null;
  for (let u = 1; !(Date.now() - s >= i.timeBudget); u++) {
    const h = a - i.windowSize * u;
    t.lastIndex = Math.max(0, h);
    const c = _0(t, n, a, l);
    if (!c && o || (o = c, h <= 0))
      break;
    l = h;
  }
  if (o) {
    const u = {
      word: o[0],
      startColumn: r + 1 + o.index,
      endColumn: r + 1 + o.index + o[0].length
    };
    return t.lastIndex = 0, u;
  }
  return null;
}
function _0(e, t, n, r) {
  let i;
  for (; i = e.exec(t); ) {
    const s = i.index || 0;
    if (s <= n && e.lastIndex >= n)
      return i;
    if (r > 0 && s > r)
      return null;
  }
  return null;
}
class w0 {
  static computeUnicodeHighlights(t, n, r) {
    const i = r ? r.startLineNumber : 1, s = r ? r.endLineNumber : t.getLineCount(), a = new g1(n), l = a.getCandidateCodePoints();
    let o;
    l === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${v0(Array.from(l))}`, "g");
    const u = new d0(null, o), h = [];
    let c = !1, g, d = 0, m = 0, p = 0;
    e: for (let _ = i, L = s; _ <= L; _++) {
      const A = t.getLineContent(_), b = A.length;
      u.reset(0);
      do
        if (g = u.next(A), g) {
          let E = g.index, x = g.index + g[0].length;
          if (E > 0) {
            const D = A.charCodeAt(E - 1);
            Er(D) && E--;
          }
          if (x + 1 < b) {
            const D = A.charCodeAt(x - 1);
            Er(D) && x++;
          }
          const S = A.substring(E, x);
          let N = us(E + 1, Al, A, 0);
          N && N.endColumn <= E + 1 && (N = null);
          const T = a.shouldHighlightNonBasicASCII(S, N ? N.word : null);
          if (T !== ke.None) {
            if (T === ke.Ambiguous ? d++ : T === ke.Invisible ? m++ : T === ke.NonBasicASCII ? p++ : Lu(), h.length >= 1e3) {
              c = !0;
              break e;
            }
            h.push(new G(_, E + 1, _, x + 1));
          }
        }
      while (g);
    }
    return {
      ranges: h,
      hasMore: c,
      ambiguousCharacterCount: d,
      invisibleCharacterCount: m,
      nonBasicAsciiCharacterCount: p
    };
  }
  static computeUnicodeHighlightReason(t, n) {
    const r = new g1(n);
    switch (r.shouldHighlightNonBasicASCII(t, null)) {
      case ke.None:
        return null;
      case ke.Invisible:
        return { kind: qn.Invisible };
      case ke.Ambiguous: {
        const s = t.codePointAt(0), a = r.ambiguousCharacters.getPrimaryConfusable(s), l = Zn.getLocales().filter((o) => !Zn.getInstance(/* @__PURE__ */ new Set([...n.allowedLocales, o])).isAmbiguous(s));
        return { kind: qn.Ambiguous, confusableWith: String.fromCodePoint(a), notAmbiguousInLocales: l };
      }
      case ke.NonBasicASCII:
        return { kind: qn.NonBasicAscii };
    }
  }
}
function v0(e, t) {
  return `[${Qu(e.map((r) => String.fromCodePoint(r)).join(""))}]`;
}
var qn;
(function(e) {
  e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(qn || (qn = {}));
class g1 {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = Zn.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII)
      return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters)
      for (const n of $n.codePoints)
        m1(String.fromCodePoint(n)) || t.add(n);
    if (this.options.ambiguousCharacters)
      for (const n of this.ambiguousCharacters.getConfusableCodePoints())
        t.add(n);
    for (const n of this.allowedCodePoints)
      t.delete(n);
    return t;
  }
  shouldHighlightNonBasicASCII(t, n) {
    const r = t.codePointAt(0);
    if (this.allowedCodePoints.has(r))
      return ke.None;
    if (this.options.nonBasicASCII)
      return ke.NonBasicASCII;
    let i = !1, s = !1;
    if (n)
      for (const a of n) {
        const l = a.codePointAt(0), o = ac(a);
        i = i || o, !o && !this.ambiguousCharacters.isAmbiguous(l) && !$n.isInvisibleCharacter(l) && (s = !0);
      }
    return !i && s ? ke.None : this.options.invisibleCharacters && !m1(t) && $n.isInvisibleCharacter(r) ? ke.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(r) ? ke.Ambiguous : ke.None;
  }
}
function m1(e) {
  return e === " " || e === `
` || e === "	";
}
var ke;
(function(e) {
  e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(ke || (ke = {}));
class _r {
  constructor(t, n, r) {
    this.changes = t, this.moves = n, this.hitTimeout = r;
  }
}
class cs {
  constructor(t, n) {
    this.lineRangeMapping = t, this.changes = n;
  }
  flip() {
    return new cs(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
  }
}
class W {
  static fromTo(t, n) {
    return new W(t, n);
  }
  static addRange(t, n) {
    let r = 0;
    for (; r < n.length && n[r].endExclusive < t.start; )
      r++;
    let i = r;
    for (; i < n.length && n[i].start <= t.endExclusive; )
      i++;
    if (r === i)
      n.splice(r, 0, t);
    else {
      const s = Math.min(t.start, n[r].start), a = Math.max(t.endExclusive, n[i - 1].endExclusive);
      n.splice(r, i - r, new W(s, a));
    }
  }
  static tryCreate(t, n) {
    if (!(t > n))
      return new W(t, n);
  }
  static ofLength(t) {
    return new W(0, t);
  }
  static ofStartAndLength(t, n) {
    return new W(t, t + n);
  }
  static emptyAt(t) {
    return new W(t, t);
  }
  constructor(t, n) {
    if (this.start = t, this.endExclusive = n, t > n)
      throw new he(`Invalid range: ${this.toString()}`);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(t) {
    return new W(this.start + t, this.endExclusive + t);
  }
  deltaStart(t) {
    return new W(this.start + t, this.endExclusive);
  }
  deltaEnd(t) {
    return new W(this.start, this.endExclusive + t);
  }
  get length() {
    return this.endExclusive - this.start;
  }
  toString() {
    return `[${this.start}, ${this.endExclusive})`;
  }
  equals(t) {
    return this.start === t.start && this.endExclusive === t.endExclusive;
  }
  containsRange(t) {
    return this.start <= t.start && t.endExclusive <= this.endExclusive;
  }
  contains(t) {
    return this.start <= t && t < this.endExclusive;
  }
  join(t) {
    return new W(
      Math.min(this.start, t.start),
      Math.max(this.endExclusive, t.endExclusive)
    );
  }
  intersect(t) {
    const n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
    if (n <= r)
      return new W(n, r);
  }
  intersectionLength(t) {
    const n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
    return Math.max(0, r - n);
  }
  intersects(t) {
    const n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
    return n < r;
  }
  intersectsOrTouches(t) {
    const n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
    return n <= r;
  }
  isBefore(t) {
    return this.endExclusive <= t.start;
  }
  isAfter(t) {
    return this.start >= t.endExclusive;
  }
  slice(t) {
    return t.slice(this.start, this.endExclusive);
  }
  substring(t) {
    return t.substring(this.start, this.endExclusive);
  }
  clip(t) {
    if (this.isEmpty)
      throw new he(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, t));
  }
  clipCyclic(t) {
    if (this.isEmpty)
      throw new he(`Invalid clipping range: ${this.toString()}`);
    return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
  }
  map(t) {
    const n = [];
    for (let r = this.start; r < this.endExclusive; r++)
      n.push(t(r));
    return n;
  }
  forEach(t) {
    for (let n = this.start; n < this.endExclusive; n++)
      t(n);
  }
  joinRightTouching(t) {
    if (this.endExclusive !== t.start)
      throw new he(`Invalid join: ${this.toString()} and ${t.toString()}`);
    return new W(this.start, t.endExclusive);
  }
}
const xe = class xe {
  static ofLength(t, n) {
    return new xe(t, t + n);
  }
  static fromRange(t) {
    return new xe(t.startLineNumber, t.endLineNumber);
  }
  static fromRangeInclusive(t) {
    return new xe(t.startLineNumber, t.endLineNumber + 1);
  }
  static subtract(t, n) {
    return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [
      new xe(t.startLineNumber, n.startLineNumber),
      new xe(n.endLineNumberExclusive, t.endLineNumberExclusive)
    ] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new xe(
      Math.max(n.endLineNumberExclusive, t.startLineNumber),
      t.endLineNumberExclusive
    )] : [new xe(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
  }
  static joinMany(t) {
    if (t.length === 0)
      return [];
    let n = new st(t[0].slice());
    for (let r = 1; r < t.length; r++)
      n = n.getUnion(new st(t[r].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0)
      throw new he("lineRanges cannot be empty");
    let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
    for (let i = 1; i < t.length; i++)
      n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
    return new xe(n, r);
  }
  static deserialize(t) {
    return new xe(t[0], t[1]);
  }
  constructor(t, n) {
    if (t > n)
      throw new he(
        `startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`
      );
    this.startLineNumber = t, this.endLineNumberExclusive = n;
  }
  contains(t) {
    return this.startLineNumber <= t && t < this.endLineNumberExclusive;
  }
  containsRange(t) {
    return this.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= this.endLineNumberExclusive;
  }
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  delta(t) {
    return new xe(this.startLineNumber + t, this.endLineNumberExclusive + t);
  }
  deltaLength(t) {
    return new xe(this.startLineNumber, this.endLineNumberExclusive + t);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(t) {
    return new xe(
      Math.min(this.startLineNumber, t.startLineNumber),
      Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive)
    );
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  intersect(t) {
    const n = Math.max(this.startLineNumber, t.startLineNumber), r = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
    if (n <= r)
      return new xe(n, r);
  }
  intersectsStrict(t) {
    return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
  }
  intersectsOrTouches(t) {
    return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(t) {
    return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
  }
  toInclusiveRange() {
    return this.isEmpty ? null : new G(
      this.startLineNumber,
      1,
      this.endLineNumberExclusive - 1,
      Number.MAX_SAFE_INTEGER
    );
  }
  toExclusiveRange() {
    return new G(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(t) {
    const n = [];
    for (let r = this.startLineNumber; r < this.endLineNumberExclusive; r++)
      n.push(t(r));
    return n;
  }
  forEach(t) {
    for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++)
      t(n);
  }
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  toOffsetRange() {
    return new W(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(t) {
    return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
  }
  distanceToLine(t) {
    return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
  }
  addMargin(t, n) {
    return new xe(
      this.startLineNumber - t,
      this.endLineNumberExclusive + n
    );
  }
};
xe.compareByStart = Wt((t) => t.startLineNumber, dn);
let te = xe;
class st {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0)
      return;
    const n = ui(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = Ln(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === r)
      this._normalizedRanges.splice(n, 0, t);
    else if (n === r - 1) {
      const i = this._normalizedRanges[n];
      this._normalizedRanges[n] = i.join(t);
    } else {
      const i = this._normalizedRanges[n].join(this._normalizedRanges[r - 1]).join(t);
      this._normalizedRanges.splice(n, r - n, i);
    }
  }
  contains(t) {
    const n = vn(this._normalizedRanges, (r) => r.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = vn(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
    return !!n && n.endLineNumberExclusive > t.startLineNumber;
  }
  getUnion(t) {
    if (this._normalizedRanges.length === 0)
      return t;
    if (t._normalizedRanges.length === 0)
      return this;
    const n = [];
    let r = 0, i = 0, s = null;
    for (; r < this._normalizedRanges.length || i < t._normalizedRanges.length; ) {
      let a = null;
      if (r < this._normalizedRanges.length && i < t._normalizedRanges.length) {
        const l = this._normalizedRanges[r], o = t._normalizedRanges[i];
        l.startLineNumber < o.startLineNumber ? (a = l, r++) : (a = o, i++);
      } else r < this._normalizedRanges.length ? (a = this._normalizedRanges[r], r++) : (a = t._normalizedRanges[i], i++);
      s === null ? s = a : s.endLineNumberExclusive >= a.startLineNumber ? s = new te(
        s.startLineNumber,
        Math.max(s.endLineNumberExclusive, a.endLineNumberExclusive)
      ) : (n.push(s), s = a);
    }
    return s !== null && n.push(s), new st(n);
  }
  subtractFrom(t) {
    const n = ui(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), r = Ln(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === r)
      return new st([t]);
    const i = [];
    let s = t.startLineNumber;
    for (let a = n; a < r; a++) {
      const l = this._normalizedRanges[a];
      l.startLineNumber > s && i.push(new te(s, l.startLineNumber)), s = l.endLineNumberExclusive;
    }
    return s < t.endLineNumberExclusive && i.push(new te(s, t.endLineNumberExclusive)), new st(i);
  }
  toString() {
    return this._normalizedRanges.map((t) => t.toString()).join(", ");
  }
  getIntersection(t) {
    const n = [];
    let r = 0, i = 0;
    for (; r < this._normalizedRanges.length && i < t._normalizedRanges.length; ) {
      const s = this._normalizedRanges[r], a = t._normalizedRanges[i], l = s.intersect(a);
      l && !l.isEmpty && n.push(l), s.endLineNumberExclusive < a.endLineNumberExclusive ? r++ : i++;
    }
    return new st(n);
  }
  getWithDelta(t) {
    return new st(this._normalizedRanges.map((n) => n.delta(t)));
  }
}
const Fe = class Fe {
  static lengthDiffNonNegative(t, n) {
    return n.isLessThan(t) ? Fe.zero : t.lineCount === n.lineCount ? new Fe(0, n.columnCount - t.columnCount) : new Fe(n.lineCount - t.lineCount, n.columnCount);
  }
  static betweenPositions(t, n) {
    return t.lineNumber === n.lineNumber ? new Fe(0, n.column - t.column) : new Fe(n.lineNumber - t.lineNumber, n.column - 1);
  }
  static fromPosition(t) {
    return new Fe(t.lineNumber - 1, t.column - 1);
  }
  static ofRange(t) {
    return Fe.betweenPositions(t.getStartPosition(), t.getEndPosition());
  }
  static ofText(t) {
    let n = 0, r = 0;
    for (const i of t)
      i === `
` ? (n++, r = 0) : r++;
    return new Fe(n, r);
  }
  constructor(t, n) {
    this.lineCount = t, this.columnCount = n;
  }
  isZero() {
    return this.lineCount === 0 && this.columnCount === 0;
  }
  isLessThan(t) {
    return this.lineCount !== t.lineCount ? this.lineCount < t.lineCount : this.columnCount < t.columnCount;
  }
  isGreaterThan(t) {
    return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount > t.columnCount;
  }
  isGreaterThanOrEqualTo(t) {
    return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount >= t.columnCount;
  }
  equals(t) {
    return this.lineCount === t.lineCount && this.columnCount === t.columnCount;
  }
  compare(t) {
    return this.lineCount !== t.lineCount ? this.lineCount - t.lineCount : this.columnCount - t.columnCount;
  }
  add(t) {
    return t.lineCount === 0 ? new Fe(this.lineCount, this.columnCount + t.columnCount) : new Fe(this.lineCount + t.lineCount, t.columnCount);
  }
  createRange(t) {
    return this.lineCount === 0 ? new G(
      t.lineNumber,
      t.column,
      t.lineNumber,
      t.column + this.columnCount
    ) : new G(
      t.lineNumber,
      t.column,
      t.lineNumber + this.lineCount,
      this.columnCount + 1
    );
  }
  toRange() {
    return new G(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return te.ofLength(1, this.lineCount + 1);
  }
  addToPosition(t) {
    return this.lineCount === 0 ? new ee(t.lineNumber, t.column + this.columnCount) : new ee(t.lineNumber + this.lineCount, this.columnCount + 1);
  }
  addToRange(t) {
    return G.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
Fe.zero = new Fe(0, 0);
let Ut = Fe;
class L0 {
  getOffsetRange(t) {
    return new W(
      this.getOffset(t.getStartPosition()),
      this.getOffset(t.getEndPosition())
    );
  }
  getRange(t) {
    return G.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
  }
  getStringEdit(t) {
    const n = t.replacements.map((r) => this.getStringReplacement(r));
    return new pt.deps.StringEdit(n);
  }
  getStringReplacement(t) {
    return new pt.deps.StringReplacement(this.getOffsetRange(t.range), t.text);
  }
  getTextReplacement(t) {
    return new pt.deps.TextReplacement(this.getRange(t.replaceRange), t.newText);
  }
  getTextEdit(t) {
    const n = t.replacements.map((r) => this.getTextReplacement(r));
    return new pt.deps.TextEdit(n);
  }
}
const ds = class ds {
  static get deps() {
    if (!this._deps)
      throw new Error("Dependencies not set. Call _setDependencies first.");
    return this._deps;
  }
};
ds._deps = void 0;
let pt = ds;
function N0(e) {
  pt._deps = e;
}
class yl extends L0 {
  constructor(t) {
    super(), this.text = t, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
    for (let n = 0; n < t.length; n++)
      t.charAt(n) === `
` && (this.lineStartOffsetByLineIdx.push(n + 1), n > 0 && t.charAt(n - 1) === "\r" ? this.lineEndOffsetByLineIdx.push(n - 1) : this.lineEndOffsetByLineIdx.push(n));
    this.lineEndOffsetByLineIdx.push(t.length);
  }
  getOffset(t) {
    const n = this._validatePosition(t);
    return this.lineStartOffsetByLineIdx[n.lineNumber - 1] + n.column - 1;
  }
  _validatePosition(t) {
    if (t.lineNumber < 1)
      return new ee(1, 1);
    const n = this.textLength.lineCount + 1;
    if (t.lineNumber > n) {
      const i = this.getLineLength(n);
      return new ee(n, i + 1);
    }
    if (t.column < 1)
      return new ee(t.lineNumber, 1);
    const r = this.getLineLength(t.lineNumber);
    return t.column - 1 > r ? new ee(t.lineNumber, r + 1) : t;
  }
  getPosition(t) {
    const n = Ln(this.lineStartOffsetByLineIdx, (s) => s <= t), r = n + 1, i = t - this.lineStartOffsetByLineIdx[n] + 1;
    return new ee(r, i);
  }
  getTextLength(t) {
    return pt.deps.TextLength.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new pt.deps.TextLength(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}
class Tl {
  constructor() {
    this._transformer = void 0;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new ee(1, 1));
  }
  get lineRange() {
    return this.length.toLineRange();
  }
  getValue() {
    return this.getValueOfRange(this.length.toRange());
  }
  getValueOfOffsetRange(t) {
    return this.getValueOfRange(this.getTransformer().getRange(t));
  }
  getLineLength(t) {
    return this.getValueOfRange(new G(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    return this._transformer || (this._transformer = new yl(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new G(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return hl(t);
  }
  getLinesOfRange(t) {
    return t.mapToLineArray((n) => this.getLineAt(n));
  }
  equals(t) {
    return this === t ? !0 : this.getValue() === t.getValue();
  }
}
class x0 extends Tl {
  constructor(t, n) {
    Nu(n >= 1), super(), this._getLineContent = t, this._lineCount = n;
  }
  getValueOfRange(t) {
    if (t.startLineNumber === t.endLineNumber)
      return this._getLineContent(t.startLineNumber).substring(t.startColumn - 1, t.endColumn - 1);
    let n = this._getLineContent(t.startLineNumber).substring(t.startColumn - 1);
    for (let r = t.startLineNumber + 1; r < t.endLineNumber; r++)
      n += `
` + this._getLineContent(r);
    return n += `
` + this._getLineContent(t.endLineNumber).substring(0, t.endColumn - 1), n;
  }
  getLineLength(t) {
    return this._getLineContent(t).length;
  }
  get length() {
    const t = this._getLineContent(this._lineCount);
    return new Ut(this._lineCount - 1, t.length);
  }
}
class or extends x0 {
  constructor(t) {
    super((n) => t[n - 1], t.length);
  }
}
class Kn extends Tl {
  constructor(t) {
    super(), this.value = t, this._t = new yl(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}
let fs = class yt {
  static fromStringEdit(t, n) {
    const r = t.replacements.map((i) => Ae.fromStringReplacement(i, n));
    return new yt(r);
  }
  static replace(t, n) {
    return new yt([new Ae(t, n)]);
  }
  static delete(t) {
    return new yt([new Ae(t, "")]);
  }
  static insert(t, n) {
    return new yt([new Ae(G.fromPositions(t, t), n)]);
  }
  static fromParallelReplacementsUnsorted(t) {
    const n = t.slice().sort(Wt((r) => r.range, G.compareRangesUsingStarts));
    return new yt(n);
  }
  constructor(t) {
    this.replacements = t, zn(() => is(t, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
  }
  normalize() {
    const t = [];
    for (const n of this.replacements)
      if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
        const r = t[t.length - 1];
        t[t.length - 1] = new Ae(r.range.plusRange(n.range), r.text + n.text);
      } else n.isEmpty || t.push(n);
    return new yt(t);
  }
  mapPosition(t) {
    let n = 0, r = 0, i = 0;
    for (const s of this.replacements) {
      const a = s.range.getStartPosition();
      if (t.isBeforeOrEqual(a))
        break;
      const l = s.range.getEndPosition(), o = Ut.ofText(s.text);
      if (t.isBefore(l)) {
        const u = new ee(
          a.lineNumber + n,
          a.column + (a.lineNumber + n === r ? i : 0)
        ), h = o.addToPosition(u);
        return lr(u, h);
      }
      a.lineNumber + n !== r && (i = 0), n += o.lineCount - (s.range.endLineNumber - s.range.startLineNumber), o.lineCount === 0 ? l.lineNumber !== a.lineNumber ? i += o.columnCount - (l.column - 1) : i += o.columnCount - (l.column - a.column) : i = o.columnCount, r = l.lineNumber + n;
    }
    return new ee(
      t.lineNumber + n,
      t.column + (t.lineNumber + n === r ? i : 0)
    );
  }
  mapRange(t) {
    function n(a) {
      return a instanceof ee ? a : a.getStartPosition();
    }
    function r(a) {
      return a instanceof ee ? a : a.getEndPosition();
    }
    const i = n(this.mapPosition(t.getStartPosition())), s = r(this.mapPosition(t.getEndPosition()));
    return lr(i, s);
  }
  inverseMapPosition(t, n) {
    return this.inverse(n).mapPosition(t);
  }
  inverseMapRange(t, n) {
    return this.inverse(n).mapRange(t);
  }
  apply(t) {
    let n = "", r = new ee(1, 1);
    for (const s of this.replacements) {
      const a = s.range, l = a.getStartPosition(), o = a.getEndPosition(), u = lr(r, l);
      u.isEmpty() || (n += t.getValueOfRange(u)), n += s.text, r = o;
    }
    const i = lr(r, t.endPositionExclusive);
    return i.isEmpty() || (n += t.getValueOfRange(i)), n;
  }
  applyToString(t) {
    const n = new Kn(t);
    return this.apply(n);
  }
  inverse(t) {
    const n = this.getNewRanges();
    return new yt(this.replacements.map((r, i) => new Ae(n[i], t.getValueOfRange(r.range))));
  }
  getNewRanges() {
    const t = [];
    let n = 0, r = 0, i = 0;
    for (const s of this.replacements) {
      const a = Ut.ofText(s.text), l = ee.lift({
        lineNumber: s.range.startLineNumber + r,
        column: s.range.startColumn + (s.range.startLineNumber === n ? i : 0)
      }), o = a.createRange(l);
      t.push(o), r = o.endLineNumber - s.range.endLineNumber, i = o.endColumn - s.range.endColumn, n = s.range.endLineNumber;
    }
    return t;
  }
  toReplacement(t) {
    if (this.replacements.length === 0)
      throw new he();
    if (this.replacements.length === 1)
      return this.replacements[0];
    const n = this.replacements[0].range.getStartPosition(), r = this.replacements[this.replacements.length - 1].range.getEndPosition();
    let i = "";
    for (let s = 0; s < this.replacements.length; s++) {
      const a = this.replacements[s];
      if (i += a.text, s < this.replacements.length - 1) {
        const l = this.replacements[s + 1], o = G.fromPositions(a.range.getEndPosition(), l.range.getStartPosition()), u = t.getValueOfRange(o);
        i += u;
      }
    }
    return new Ae(G.fromPositions(n, r), i);
  }
  equals(t) {
    return sl(this.replacements, t.replacements, (n, r) => n.equals(r));
  }
  toString(t) {
    return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new Kn(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
      const i = t.getValueOfRange(n.range), s = G.fromPositions(new ee(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition());
      let a = t.getValueOfRange(s);
      a.length > 10 && (a = "..." + a.substring(a.length - 10));
      const l = G.fromPositions(n.range.getEndPosition(), new ee(n.range.endLineNumber + 1, 1));
      let o = t.getValueOfRange(l);
      o.length > 10 && (o = o.substring(0, 10) + "...");
      let u = i;
      if (u.length > 10) {
        const c = Math.floor(5);
        u = u.substring(0, c) + "..." + u.substring(u.length - c);
      }
      let h = n.text;
      if (h.length > 10) {
        const c = Math.floor(5);
        h = h.substring(0, c) + "..." + h.substring(h.length - c);
      }
      return u.length === 0 ? `${a}❰${h}❱${o}` : `${a}❰${u}↦${h}❱${o}`;
    }).join(`
`);
  }
};
class Ae {
  static joinReplacements(t, n) {
    if (t.length === 0)
      throw new he();
    if (t.length === 1)
      return t[0];
    const r = t[0].range.getStartPosition(), i = t[t.length - 1].range.getEndPosition();
    let s = "";
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if (s += l.text, a < t.length - 1) {
        const o = t[a + 1], u = G.fromPositions(l.range.getEndPosition(), o.range.getStartPosition()), h = n.getValueOfRange(u);
        s += h;
      }
    }
    return new Ae(G.fromPositions(r, i), s);
  }
  static fromStringReplacement(t, n) {
    return new Ae(
      n.getTransformer().getRange(t.replaceRange),
      t.newText
    );
  }
  static delete(t) {
    return new Ae(t, "");
  }
  constructor(t, n) {
    this.range = t, this.text = n;
  }
  get isEmpty() {
    return this.range.isEmpty() && this.text.length === 0;
  }
  static equals(t, n) {
    return t.range.equalsRange(n.range) && t.text === n.text;
  }
  toSingleEditOperation() {
    return {
      range: this.range,
      text: this.text
    };
  }
  toEdit() {
    return new fs([this]);
  }
  equals(t) {
    return Ae.equals(this, t);
  }
  extendToCoverRange(t, n) {
    if (this.range.containsRange(t))
      return this;
    const r = this.range.plusRange(t), i = n.getValueOfRange(G.fromPositions(r.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(G.fromPositions(this.range.getEndPosition(), r.getEndPosition())), a = i + this.text + s;
    return new Ae(r, a);
  }
  extendToFullLine(t) {
    const n = new G(
      this.range.startLineNumber,
      1,
      this.range.endLineNumber,
      t.getTransformer().getLineLength(this.range.endLineNumber) + 1
    );
    return this.extendToCoverRange(n, t);
  }
  removeCommonPrefixAndSuffix(t) {
    return this.removeCommonPrefix(t).removeCommonSuffix(t);
  }
  removeCommonPrefix(t) {
    const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = xr(n, r), s = Ut.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), a = r.substring(i), l = G.fromPositions(s, this.range.getEndPosition());
    return new Ae(l, a);
  }
  removeCommonSuffix(t) {
    const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = Ar(n, r), s = Ut.ofText(n.substring(0, n.length - i)).addToPosition(this.range.getStartPosition()), a = r.substring(0, r.length - i), l = G.fromPositions(this.range.getStartPosition(), s);
    return new Ae(l, a);
  }
  isEffectiveDeletion(t) {
    let n = this.text.replaceAll(`\r
`, `
`), r = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const i = xr(n, r);
    n = n.substring(i), r = r.substring(i);
    const s = Ar(n, r);
    return n = n.substring(0, n.length - s), r = r.substring(0, r.length - s), n === "";
  }
  toString() {
    const t = this.range.getStartPosition(), n = this.range.getEndPosition();
    return `(${t.lineNumber},${t.column} -> ${n.lineNumber},${n.column}): "${this.text}"`;
  }
}
function lr(e, t) {
  if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER)
    return G.fromPositions(t, t);
  if (!e.isBeforeOrEqual(t))
    throw new he("start must be before end");
  return new G(e.lineNumber, e.column, t.lineNumber, t.column);
}
class Xe {
  static inverse(t, n, r) {
    const i = [];
    let s = 1, a = 1;
    for (const o of t) {
      const u = new Xe(new te(s, o.original.startLineNumber), new te(a, o.modified.startLineNumber));
      u.modified.isEmpty || i.push(u), s = o.original.endLineNumberExclusive, a = o.modified.endLineNumberExclusive;
    }
    const l = new Xe(new te(s, n + 1), new te(a, r + 1));
    return l.modified.isEmpty || i.push(l), i;
  }
  static clip(t, n, r) {
    const i = [];
    for (const s of t) {
      const a = s.original.intersect(n), l = s.modified.intersect(r);
      a && !a.isEmpty && l && !l.isEmpty && i.push(new Xe(a, l));
    }
    return i;
  }
  constructor(t, n) {
    this.original = t, this.modified = n;
  }
  toString() {
    return `{${this.original.toString()}->${this.modified.toString()}}`;
  }
  flip() {
    return new Xe(this.modified, this.original);
  }
  join(t) {
    return new Xe(this.original.join(t.original), this.modified.join(t.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  toRangeMapping() {
    const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
    if (t && n)
      return new Ue(t, n);
    if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
        throw new he("not a valid diff");
      return new Ue(new G(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new G(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else
      return new Ue(new G(
        this.original.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.original.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ), new G(
        this.modified.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.modified.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ));
  }
  toRangeMapping2(t, n) {
    if (d1(this.original.endLineNumberExclusive, t) && d1(this.modified.endLineNumberExclusive, n))
      return new Ue(new G(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new G(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty)
      return new Ue(G.fromPositions(new ee(this.original.startLineNumber, 1), en(new ee(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), G.fromPositions(new ee(this.modified.startLineNumber, 1), en(new ee(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
      return new Ue(G.fromPositions(en(new ee(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), en(new ee(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), G.fromPositions(en(new ee(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), en(new ee(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new he();
  }
}
function en(e, t) {
  if (e.lineNumber < 1)
    return new ee(1, 1);
  if (e.lineNumber > t.length)
    return new ee(t.length, t[t.length - 1].length + 1);
  const n = t[e.lineNumber - 1];
  return e.column > n.length + 1 ? new ee(e.lineNumber, n.length + 1) : e;
}
function d1(e, t) {
  return e >= 1 && e <= t.length;
}
class ut extends Xe {
  static toTextEdit(t, n) {
    const r = [];
    for (const i of t)
      for (const s of i.innerChanges ?? []) {
        const a = s.toTextEdit(n);
        r.push(a);
      }
    return new fs(r);
  }
  static fromRangeMappings(t) {
    const n = te.join(t.map((i) => te.fromRangeInclusive(i.originalRange))), r = te.join(t.map((i) => te.fromRangeInclusive(i.modifiedRange)));
    return new ut(n, r, t);
  }
  constructor(t, n, r) {
    super(t, n), this.innerChanges = r;
  }
  flip() {
    var t;
    return new ut(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new ut(this.original, this.modified, [this.toRangeMapping()]);
  }
}
class Ue {
  static fromEdit(t) {
    const n = t.getNewRanges();
    return t.replacements.map((i, s) => new Ue(i.range, n[s]));
  }
  static fromEditJoin(t) {
    const n = t.getNewRanges(), r = t.replacements.map((i, s) => new Ue(i.range, n[s]));
    return Ue.join(r);
  }
  static join(t) {
    if (t.length === 0)
      throw new he("Cannot join an empty list of range mappings");
    let n = t[0];
    for (let r = 1; r < t.length; r++)
      n = n.join(t[r]);
    return n;
  }
  static assertSorted(t) {
    for (let n = 1; n < t.length; n++) {
      const r = t[n - 1], i = t[n];
      if (!(r.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) && r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition())))
        throw new he("Range mappings must be sorted");
    }
  }
  constructor(t, n) {
    this.originalRange = t, this.modifiedRange = n;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new Ue(this.modifiedRange, this.originalRange);
  }
  toTextEdit(t) {
    const n = t.getValueOfRange(this.modifiedRange);
    return new Ae(this.originalRange, n);
  }
  join(t) {
    return new Ue(
      this.originalRange.plusRange(t.originalRange),
      this.modifiedRange.plusRange(t.modifiedRange)
    );
  }
}
function p1(e, t, n, r = !1) {
  const i = [];
  for (const s of cu(e.map((a) => A0(a, t, n)), (a, l) => a.original.intersectsOrTouches(l.original) || a.modified.intersectsOrTouches(l.modified))) {
    const a = s[0], l = s[s.length - 1];
    i.push(new ut(
      a.original.join(l.original),
      a.modified.join(l.modified),
      s.map((o) => o.innerChanges[0])
    ));
  }
  return zn(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? !1 : is(i, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), i;
}
function A0(e, t, n) {
  let r = 0, i = 0;
  e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1);
  const s = new te(
    e.originalRange.startLineNumber + r,
    e.originalRange.endLineNumber + 1 + i
  ), a = new te(
    e.modifiedRange.startLineNumber + r,
    e.modifiedRange.endLineNumber + 1 + i
  );
  return new ut(s, a, [e]);
}
const E0 = 3;
class R0 {
  computeDiff(t, n, r) {
    var o;
    const s = new Sl(t, n, {
      maxComputationTime: r.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: r.ignoreTrimWhitespace,
      shouldComputeCharChanges: !0,
      shouldMakePrettyDiff: !0,
      shouldPostProcessCharChanges: !0
    }).computeDiff(), a = [];
    let l = null;
    for (const u of s.changes) {
      let h;
      u.originalEndLineNumber === 0 ? h = new te(u.originalStartLineNumber + 1, u.originalStartLineNumber + 1) : h = new te(u.originalStartLineNumber, u.originalEndLineNumber + 1);
      let c;
      u.modifiedEndLineNumber === 0 ? c = new te(u.modifiedStartLineNumber + 1, u.modifiedStartLineNumber + 1) : c = new te(u.modifiedStartLineNumber, u.modifiedEndLineNumber + 1);
      let g = new ut(h, c, (o = u.charChanges) == null ? void 0 : o.map((d) => new Ue(new G(
        d.originalStartLineNumber,
        d.originalStartColumn,
        d.originalEndLineNumber,
        d.originalEndColumn
      ), new G(
        d.modifiedStartLineNumber,
        d.modifiedStartColumn,
        d.modifiedEndLineNumber,
        d.modifiedEndColumn
      ))));
      l && (l.modified.endLineNumberExclusive === g.modified.startLineNumber || l.original.endLineNumberExclusive === g.original.startLineNumber) && (g = new ut(
        l.original.join(g.original),
        l.modified.join(g.modified),
        l.innerChanges && g.innerChanges ? l.innerChanges.concat(g.innerChanges) : void 0
      ), a.pop()), a.push(g), l = g;
    }
    return zn(() => is(a, (u, h) => h.original.startLineNumber - u.original.endLineNumberExclusive === h.modified.startLineNumber - u.modified.endLineNumberExclusive && u.original.endLineNumberExclusive < h.original.startLineNumber && u.modified.endLineNumberExclusive < h.modified.startLineNumber)), new _r(a, [], s.quitEarly);
  }
}
function kl(e, t, n, r) {
  return new Mt(e, t, n).ComputeDiff(r);
}
let b1 = class {
  constructor(t) {
    const n = [], r = [];
    for (let i = 0, s = t.length; i < s; i++)
      n[i] = Si(t[i], 1), r[i] = Mi(t[i], 1);
    this.lines = t, this._startColumns = n, this._endColumns = r;
  }
  getElements() {
    const t = [];
    for (let n = 0, r = this.lines.length; n < r; n++)
      t[n] = this.lines[n].substring(this._startColumns[n] - 1, this._endColumns[n] - 1);
    return t;
  }
  getStrictElement(t) {
    return this.lines[t];
  }
  getStartLineNumber(t) {
    return t + 1;
  }
  getEndLineNumber(t) {
    return t + 1;
  }
  createCharSequence(t, n, r) {
    const i = [], s = [], a = [];
    let l = 0;
    for (let o = n; o <= r; o++) {
      const u = this.lines[o], h = t ? this._startColumns[o] : 1, c = t ? this._endColumns[o] : u.length + 1;
      for (let g = h; g < c; g++)
        i[l] = u.charCodeAt(g - 1), s[l] = o + 1, a[l] = g, l++;
      !t && o < r && (i[l] = y.LineFeed, s[l] = o + 1, a[l] = u.length + 1, l++);
    }
    return new y0(i, s, a);
  }
};
class y0 {
  constructor(t, n, r) {
    this._charCodes = t, this._lineNumbers = n, this._columns = r;
  }
  toString() {
    return "[" + this._charCodes.map(
      (t, n) => (t === y.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[n]},${this._columns[n]})`
    ).join(", ") + "]";
  }
  _assertIndex(t, n) {
    if (t < 0 || t >= n.length)
      throw new Error("Illegal index");
  }
  getElements() {
    return this._charCodes;
  }
  getStartLineNumber(t) {
    return t > 0 && t === this._lineNumbers.length ? this.getEndLineNumber(t - 1) : (this._assertIndex(t, this._lineNumbers), this._lineNumbers[t]);
  }
  getEndLineNumber(t) {
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === y.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === y.LineFeed ? 1 : this._columns[t] + 1);
  }
}
class bn {
  constructor(t, n, r, i, s, a, l, o) {
    this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = l, this.modifiedEndColumn = o;
  }
  static createFromDiffChange(t, n, r) {
    const i = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), l = n.getEndColumn(t.originalStart + t.originalLength - 1), o = r.getStartLineNumber(t.modifiedStart), u = r.getStartColumn(t.modifiedStart), h = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), c = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
    return new bn(
      i,
      s,
      a,
      l,
      o,
      u,
      h,
      c
    );
  }
}
function T0(e) {
  if (e.length <= 1)
    return e;
  const t = [e[0]];
  let n = t[0];
  for (let r = 1, i = e.length; r < i; r++) {
    const s = e[r], a = s.originalStart - (n.originalStart + n.originalLength), l = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(a, l) < E0 ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
  }
  return t;
}
class Hn {
  constructor(t, n, r, i, s) {
    this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = s;
  }
  static createFromDiffResult(t, n, r, i, s, a, l) {
    let o, u, h, c, g;
    if (n.originalLength === 0 ? (o = r.getStartLineNumber(n.originalStart) - 1, u = 0) : (o = r.getStartLineNumber(n.originalStart), u = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (h = i.getStartLineNumber(n.modifiedStart) - 1, c = 0) : (h = i.getStartLineNumber(n.modifiedStart), c = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
      const d = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), m = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (d.getElements().length > 0 && m.getElements().length > 0) {
        let p = kl(d, m, s, !0).changes;
        l && (p = T0(p)), g = [];
        for (let _ = 0, L = p.length; _ < L; _++)
          g.push(bn.createFromDiffChange(p[_], d, m));
      }
    }
    return new Hn(
      o,
      u,
      h,
      c,
      g
    );
  }
}
class Sl {
  constructor(t, n, r) {
    this.shouldComputeCharChanges = r.shouldComputeCharChanges, this.shouldPostProcessCharChanges = r.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = r.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = n, this.original = new b1(t), this.modified = new b1(n), this.continueLineDiff = _1(r.maxComputationTime), this.continueCharDiff = _1(r.maxComputationTime === 0 ? 0 : Math.min(r.maxComputationTime, 5e3));
  }
  computeDiff() {
    if (this.original.lines.length === 1 && this.original.lines[0].length === 0)
      return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? {
        quitEarly: !1,
        changes: []
      } : {
        quitEarly: !1,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: 1,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: this.modified.lines.length,
          charChanges: void 0
        }]
      };
    if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0)
      return {
        quitEarly: !1,
        changes: [{
          originalStartLineNumber: 1,
          originalEndLineNumber: this.original.lines.length,
          modifiedStartLineNumber: 1,
          modifiedEndLineNumber: 1,
          charChanges: void 0
        }]
      };
    const t = kl(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), n = t.changes, r = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const l = [];
      for (let o = 0, u = n.length; o < u; o++)
        l.push(Hn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return {
        quitEarly: r,
        changes: l
      };
    }
    const i = [];
    let s = 0, a = 0;
    for (let l = -1, o = n.length; l < o; l++) {
      const u = l + 1 < o ? n[l + 1] : null, h = u ? u.originalStart : this.originalLines.length, c = u ? u.modifiedStart : this.modifiedLines.length;
      for (; s < h && a < c; ) {
        const g = this.originalLines[s], d = this.modifiedLines[a];
        if (g !== d) {
          {
            let m = Si(g, 1), p = Si(d, 1);
            for (; m > 1 && p > 1; ) {
              const _ = g.charCodeAt(m - 2), L = d.charCodeAt(p - 2);
              if (_ !== L)
                break;
              m--, p--;
            }
            (m > 1 || p > 1) && this._pushTrimWhitespaceCharChange(i, s + 1, 1, m, a + 1, 1, p);
          }
          {
            let m = Mi(g, 1), p = Mi(d, 1);
            const _ = g.length + 1, L = d.length + 1;
            for (; m < _ && p < L; ) {
              const A = g.charCodeAt(m - 1), b = g.charCodeAt(p - 1);
              if (A !== b)
                break;
              m++, p++;
            }
            (m < _ || p < L) && this._pushTrimWhitespaceCharChange(i, s + 1, m, _, a + 1, p, L);
          }
        }
        s++, a++;
      }
      u && (i.push(Hn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), s += u.originalLength, a += u.modifiedLength);
    }
    return {
      quitEarly: r,
      changes: i
    };
  }
  _pushTrimWhitespaceCharChange(t, n, r, i, s, a, l) {
    if (this._mergeTrimWhitespaceCharChange(t, n, r, i, s, a, l))
      return;
    let o;
    this.shouldComputeCharChanges && (o = [new bn(
      n,
      r,
      n,
      i,
      s,
      a,
      s,
      l
    )]), t.push(new Hn(
      n,
      n,
      s,
      s,
      o
    ));
  }
  _mergeTrimWhitespaceCharChange(t, n, r, i, s, a, l) {
    const o = t.length;
    if (o === 0)
      return !1;
    const u = t[o - 1];
    return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === n && u.modifiedEndLineNumber === s ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new bn(
      n,
      r,
      n,
      i,
      s,
      a,
      s,
      l
    )), !0) : u.originalEndLineNumber + 1 === n && u.modifiedEndLineNumber + 1 === s ? (u.originalEndLineNumber = n, u.modifiedEndLineNumber = s, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new bn(
      n,
      r,
      n,
      i,
      s,
      a,
      s,
      l
    )), !0) : !1;
  }
}
function Si(e, t) {
  const n = Ku(e);
  return n === -1 ? t : n + 1;
}
function Mi(e, t) {
  const n = Cu(e);
  return n === -1 ? t : n + 2;
}
function _1(e) {
  if (e === 0)
    return () => !0;
  const t = Date.now();
  return () => Date.now() - t < e;
}
class wt {
  static trivial(t, n) {
    return new wt([new ue(W.ofLength(t.length), W.ofLength(n.length))], !1);
  }
  static trivialTimedOut(t, n) {
    return new wt([new ue(W.ofLength(t.length), W.ofLength(n.length))], !0);
  }
  constructor(t, n) {
    this.diffs = t, this.hitTimeout = n;
  }
}
class ue {
  static invert(t, n) {
    const r = [];
    return fu(t, (i, s) => {
      r.push(ue.fromOffsetPairs(i ? i.getEndExclusives() : bt.zero, s ? s.getStarts() : new bt(
        n,
        (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n
      )));
    }), r;
  }
  static fromOffsetPairs(t, n) {
    return new ue(new W(t.offset1, n.offset1), new W(t.offset2, n.offset2));
  }
  static assertSorted(t) {
    let n;
    for (const r of t) {
      if (n && !(n.seq1Range.endExclusive <= r.seq1Range.start && n.seq2Range.endExclusive <= r.seq2Range.start))
        throw new he("Sequence diffs must be sorted");
      n = r;
    }
  }
  constructor(t, n) {
    this.seq1Range = t, this.seq2Range = n;
  }
  swap() {
    return new ue(this.seq2Range, this.seq1Range);
  }
  toString() {
    return `${this.seq1Range} <-> ${this.seq2Range}`;
  }
  join(t) {
    return new ue(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
  }
  delta(t) {
    return t === 0 ? this : new ue(this.seq1Range.delta(t), this.seq2Range.delta(t));
  }
  deltaStart(t) {
    return t === 0 ? this : new ue(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
  }
  deltaEnd(t) {
    return t === 0 ? this : new ue(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
  }
  intersectsOrTouches(t) {
    return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
  }
  intersect(t) {
    const n = this.seq1Range.intersect(t.seq1Range), r = this.seq2Range.intersect(t.seq2Range);
    if (!(!n || !r))
      return new ue(n, r);
  }
  getStarts() {
    return new bt(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new bt(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}
const qt = class qt {
  constructor(t, n) {
    this.offset1 = t, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(t) {
    return t === 0 ? this : new qt(this.offset1 + t, this.offset2 + t);
  }
  equals(t) {
    return this.offset1 === t.offset1 && this.offset2 === t.offset2;
  }
};
qt.zero = new qt(0, 0), qt.max = new qt(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
let bt = qt;
const Xr = class Xr {
  isValid() {
    return !0;
  }
};
Xr.instance = new Xr();
let Cn = Xr;
class k0 {
  constructor(t) {
    if (this.timeout = t, this.startTime = Date.now(), this.valid = !0, t <= 0)
      throw new he("timeout must be positive");
  }
  isValid() {
    return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
  }
}
class ni {
  constructor(t, n) {
    this.width = t, this.height = n, this.array = [], this.array = new Array(t * n);
  }
  get(t, n) {
    return this.array[t + n * this.width];
  }
  set(t, n, r) {
    this.array[t + n * this.width] = r;
  }
}
function Ii(e) {
  return e === y.Space || e === y.Tab;
}
const jn = class jn {
  static getKey(t) {
    let n = this.chrKeys.get(t);
    return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
  }
  constructor(t, n, r) {
    this.range = t, this.lines = n, this.source = r, this.histogram = [];
    let i = 0;
    for (let s = t.startLineNumber - 1; s < t.endLineNumberExclusive - 1; s++) {
      const a = n[s];
      for (let o = 0; o < a.length; o++) {
        i++;
        const u = a[o], h = jn.getKey(u);
        this.histogram[h] = (this.histogram[h] || 0) + 1;
      }
      i++;
      const l = jn.getKey(`
`);
      this.histogram[l] = (this.histogram[l] || 0) + 1;
    }
    this.totalCount = i;
  }
  computeSimilarity(t) {
    let n = 0;
    const r = Math.max(this.histogram.length, t.histogram.length);
    for (let i = 0; i < r; i++)
      n += Math.abs((this.histogram[i] ?? 0) - (t.histogram[i] ?? 0));
    return 1 - n / (this.totalCount + t.totalCount);
  }
};
jn.chrKeys = /* @__PURE__ */ new Map();
let Mr = jn;
class S0 {
  compute(t, n, r = Cn.instance, i) {
    if (t.length === 0 || n.length === 0)
      return wt.trivial(t, n);
    const s = new ni(t.length, n.length), a = new ni(t.length, n.length), l = new ni(t.length, n.length);
    for (let m = 0; m < t.length; m++)
      for (let p = 0; p < n.length; p++) {
        if (!r.isValid())
          return wt.trivialTimedOut(t, n);
        const _ = m === 0 ? 0 : s.get(m - 1, p), L = p === 0 ? 0 : s.get(m, p - 1);
        let A;
        t.getElement(m) === n.getElement(p) ? (m === 0 || p === 0 ? A = 0 : A = s.get(m - 1, p - 1), m > 0 && p > 0 && a.get(m - 1, p - 1) === 3 && (A += l.get(m - 1, p - 1)), A += i ? i(m, p) : 1) : A = -1;
        const b = Math.max(_, L, A);
        if (b === A) {
          const E = m > 0 && p > 0 ? l.get(m - 1, p - 1) : 0;
          l.set(m, p, E + 1), a.set(m, p, 3);
        } else b === _ ? (l.set(m, p, 0), a.set(m, p, 1)) : b === L && (l.set(m, p, 0), a.set(m, p, 2));
        s.set(m, p, b);
      }
    const o = [];
    let u = t.length, h = n.length;
    function c(m, p) {
      (m + 1 !== u || p + 1 !== h) && o.push(new ue(new W(m + 1, u), new W(p + 1, h))), u = m, h = p;
    }
    let g = t.length - 1, d = n.length - 1;
    for (; g >= 0 && d >= 0; )
      a.get(g, d) === 3 ? (c(g, d), g--, d--) : a.get(g, d) === 1 ? g-- : d--;
    return c(-1, -1), o.reverse(), new wt(o, !1);
  }
}
class Ml {
  compute(t, n, r = Cn.instance) {
    if (t.length === 0 || n.length === 0)
      return wt.trivial(t, n);
    const i = t, s = n;
    function a(p, _) {
      for (; p < i.length && _ < s.length && i.getElement(p) === s.getElement(_); )
        p++, _++;
      return p;
    }
    let l = 0;
    const o = new M0();
    o.set(0, a(0, 0));
    const u = new I0();
    u.set(0, o.get(0) === 0 ? null : new w1(null, 0, 0, o.get(0)));
    let h = 0;
    e: for (; ; ) {
      if (l++, !r.isValid())
        return wt.trivialTimedOut(i, s);
      const p = -Math.min(l, s.length + l % 2), _ = Math.min(l, i.length + l % 2);
      for (h = p; h <= _; h += 2) {
        const L = h === _ ? -1 : o.get(h + 1), A = h === p ? -1 : o.get(h - 1) + 1, b = Math.min(Math.max(L, A), i.length), E = b - h;
        if (b > i.length || E > s.length)
          continue;
        const x = a(b, E);
        o.set(h, x);
        const S = b === L ? u.get(h + 1) : u.get(h - 1);
        if (u.set(h, x !== b ? new w1(S, b, E, x - b) : S), o.get(h) === i.length && o.get(h) - h === s.length)
          break e;
      }
    }
    let c = u.get(h);
    const g = [];
    let d = i.length, m = s.length;
    for (; ; ) {
      const p = c ? c.x + c.length : 0, _ = c ? c.y + c.length : 0;
      if ((p !== d || _ !== m) && g.push(new ue(new W(p, d), new W(_, m))), !c)
        break;
      d = c.x, m = c.y, c = c.prev;
    }
    return g.reverse(), new wt(g, !1);
  }
}
class w1 {
  constructor(t, n, r, i) {
    this.prev = t, this.x = n, this.y = r, this.length = i;
  }
}
class M0 {
  constructor() {
    this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
  }
  get(t) {
    return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
  }
  set(t, n) {
    if (t < 0) {
      if (t = -t - 1, t >= this.negativeArr.length) {
        const r = this.negativeArr;
        this.negativeArr = new Int32Array(r.length * 2), this.negativeArr.set(r);
      }
      this.negativeArr[t] = n;
    } else {
      if (t >= this.positiveArr.length) {
        const r = this.positiveArr;
        this.positiveArr = new Int32Array(r.length * 2), this.positiveArr.set(r);
      }
      this.positiveArr[t] = n;
    }
  }
}
class I0 {
  constructor() {
    this.positiveArr = [], this.negativeArr = [];
  }
  get(t) {
    return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
  }
  set(t, n) {
    t < 0 ? (t = -t - 1, this.negativeArr[t] = n) : this.positiveArr[t] = n;
  }
}
class Ir {
  constructor(t, n, r) {
    this.lines = t, this.range = n, this.considerWhitespaceChanges = r, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
    for (let i = this.range.startLineNumber; i <= this.range.endLineNumber; i++) {
      let s = t[i - 1], a = 0;
      i === this.range.startLineNumber && this.range.startColumn > 1 && (a = this.range.startColumn - 1, s = s.substring(a)), this.lineStartOffsets.push(a);
      let l = 0;
      if (!r) {
        const u = s.trimStart();
        l = s.length - u.length, s = u.trimEnd();
      }
      this.trimmedWsLengthsByLineIdx.push(l);
      const o = i === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - a - l, s.length) : s.length;
      for (let u = 0; u < o; u++)
        this.elements.push(s.charCodeAt(u));
      i < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
    }
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new W(0, this.length));
  }
  getText(t) {
    return this.elements.slice(t.start, t.endExclusive).map((n) => String.fromCharCode(n)).join("");
  }
  getElement(t) {
    return this.elements[t];
  }
  get length() {
    return this.elements.length;
  }
  getBoundaryScore(t) {
    const n = N1(t > 0 ? this.elements[t - 1] : -1), r = N1(t < this.elements.length ? this.elements[t] : -1);
    if (n === le.LineBreakCR && r === le.LineBreakLF)
      return 0;
    if (n === le.LineBreakLF)
      return 150;
    let i = 0;
    return n !== r && (i += 10, n === le.WordLower && r === le.WordUpper && (i += 1)), i += L1(n), i += L1(r), i;
  }
  translateOffset(t, n = "right") {
    const r = Ln(this.firstElementOffsetByLineIdx, (s) => s <= t), i = t - this.firstElementOffsetByLineIdx[r];
    return new ee(
      this.range.startLineNumber + r,
      1 + this.lineStartOffsets[r] + i + (i === 0 && n === "left" ? 0 : this.trimmedWsLengthsByLineIdx[r])
    );
  }
  translateRange(t) {
    const n = this.translateOffset(t.start, "right"), r = this.translateOffset(t.endExclusive, "left");
    return r.isBefore(n) ? G.fromPositions(r, r) : G.fromPositions(n, r);
  }
  findWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !tn(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && tn(this.elements[n - 1]); )
      n--;
    let r = t;
    for (; r < this.elements.length && tn(this.elements[r]); )
      r++;
    return new W(n, r);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !tn(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && tn(this.elements[n - 1]) && !v1(this.elements[n]); )
      n--;
    let r = t;
    for (; r < this.elements.length && tn(this.elements[r]) && !v1(this.elements[r]); )
      r++;
    return new W(n, r);
  }
  countLinesIn(t) {
    return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
  }
  isStronglyEqual(t, n) {
    return this.elements[t] === this.elements[n];
  }
  extendToFullLines(t) {
    const n = vn(this.firstElementOffsetByLineIdx, (i) => i <= t.start) ?? 0, r = uu(this.firstElementOffsetByLineIdx, (i) => t.endExclusive <= i) ?? this.elements.length;
    return new W(n, r);
  }
}
function tn(e) {
  return e >= y.a && e <= y.z || e >= y.A && e <= y.Z || e >= y.Digit0 && e <= y.Digit9;
}
function v1(e) {
  return e >= y.A && e <= y.Z;
}
var le;
(function(e) {
  e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(le || (le = {}));
const U0 = {
  [le.WordLower]: 0,
  [le.WordUpper]: 0,
  [le.WordNumber]: 0,
  [le.End]: 10,
  [le.Other]: 2,
  [le.Separator]: 30,
  [le.Space]: 3,
  [le.LineBreakCR]: 10,
  [le.LineBreakLF]: 10
};
function L1(e) {
  return U0[e];
}
function N1(e) {
  return e === y.LineFeed ? le.LineBreakLF : e === y.CarriageReturn ? le.LineBreakCR : Ii(e) ? le.Space : e >= y.a && e <= y.z ? le.WordLower : e >= y.A && e <= y.Z ? le.WordUpper : e >= y.Digit0 && e <= y.Digit9 ? le.WordNumber : e === -1 ? le.End : e === y.Comma || e === y.Semicolon ? le.Separator : le.Other;
}
function D0(e, t, n, r, i, s) {
  let { moves: a, excludedChanges: l } = P0(e, t, n, s);
  if (!s.isValid())
    return [];
  const o = e.filter((h) => !l.has(h)), u = O0(o, r, i, t, n, s);
  return gu(a, u), a = B0(a), a = a.filter((h) => {
    const c = h.original.toOffsetRange().slice(t).map((d) => d.trim());
    return c.join(`
`).length >= 15 && F0(c, (d) => d.length >= 2) >= 2;
  }), a = V0(e, a), a;
}
function F0(e, t) {
  let n = 0;
  for (const r of e)
    t(r) && n++;
  return n;
}
function P0(e, t, n, r) {
  const i = [], s = e.filter((o) => o.modified.isEmpty && o.original.length >= 3).map((o) => new Mr(o.original, t, o)), a = new Set(e.filter((o) => o.original.isEmpty && o.modified.length >= 3).map((o) => new Mr(o.modified, n, o))), l = /* @__PURE__ */ new Set();
  for (const o of s) {
    let u = -1, h;
    for (const c of a) {
      const g = o.computeSimilarity(c);
      g > u && (u = g, h = c);
    }
    if (u > 0.9 && h && (a.delete(h), i.push(new Xe(o.range, h.range)), l.add(o.source), l.add(h.source)), !r.isValid())
      return { moves: i, excludedChanges: l };
  }
  return { moves: i, excludedChanges: l };
}
function O0(e, t, n, r, i, s) {
  const a = [], l = new al();
  for (const g of e)
    for (let d = g.original.startLineNumber; d < g.original.endLineNumberExclusive - 2; d++) {
      const m = `${t[d - 1]}:${t[d + 1 - 1]}:${t[d + 2 - 1]}`;
      l.add(m, { range: new te(d, d + 3) });
    }
  const o = [];
  e.sort(Wt((g) => g.modified.startLineNumber, dn));
  for (const g of e) {
    let d = [];
    for (let m = g.modified.startLineNumber; m < g.modified.endLineNumberExclusive - 2; m++) {
      const p = `${n[m - 1]}:${n[m + 1 - 1]}:${n[m + 2 - 1]}`, _ = new te(m, m + 3), L = [];
      l.forEach(p, ({ range: A }) => {
        for (const E of d)
          if (E.originalLineRange.endLineNumberExclusive + 1 === A.endLineNumberExclusive && E.modifiedLineRange.endLineNumberExclusive + 1 === _.endLineNumberExclusive) {
            E.originalLineRange = new te(
              E.originalLineRange.startLineNumber,
              A.endLineNumberExclusive
            ), E.modifiedLineRange = new te(
              E.modifiedLineRange.startLineNumber,
              _.endLineNumberExclusive
            ), L.push(E);
            return;
          }
        const b = {
          modifiedLineRange: _,
          originalLineRange: A
        };
        o.push(b), L.push(b);
      }), d = L;
    }
    if (!s.isValid())
      return [];
  }
  o.sort(mu(Wt((g) => g.modifiedLineRange.length, dn)));
  const u = new st(), h = new st();
  for (const g of o) {
    const d = g.modifiedLineRange.startLineNumber - g.originalLineRange.startLineNumber, m = u.subtractFrom(g.modifiedLineRange), p = h.subtractFrom(g.originalLineRange).getWithDelta(d), _ = m.getIntersection(p);
    for (const L of _.ranges) {
      if (L.length < 3)
        continue;
      const A = L, b = L.delta(-d);
      a.push(new Xe(b, A)), u.addRange(A), h.addRange(b);
    }
  }
  a.sort(Wt((g) => g.original.startLineNumber, dn));
  const c = new wr(e);
  for (let g = 0; g < a.length; g++) {
    const d = a[g], m = c.findLastMonotonous((S) => S.original.startLineNumber <= d.original.startLineNumber), p = vn(e, (S) => S.modified.startLineNumber <= d.modified.startLineNumber), _ = Math.max(d.original.startLineNumber - m.original.startLineNumber, d.modified.startLineNumber - p.modified.startLineNumber), L = c.findLastMonotonous((S) => S.original.startLineNumber < d.original.endLineNumberExclusive), A = vn(e, (S) => S.modified.startLineNumber < d.modified.endLineNumberExclusive), b = Math.max(L.original.endLineNumberExclusive - d.original.endLineNumberExclusive, A.modified.endLineNumberExclusive - d.modified.endLineNumberExclusive);
    let E;
    for (E = 0; E < _; E++) {
      const S = d.original.startLineNumber - E - 1, N = d.modified.startLineNumber - E - 1;
      if (S > r.length || N > i.length || u.contains(N) || h.contains(S) || !x1(r[S - 1], i[N - 1], s))
        break;
    }
    E > 0 && (h.addRange(new te(d.original.startLineNumber - E, d.original.startLineNumber)), u.addRange(new te(d.modified.startLineNumber - E, d.modified.startLineNumber)));
    let x;
    for (x = 0; x < b; x++) {
      const S = d.original.endLineNumberExclusive + x, N = d.modified.endLineNumberExclusive + x;
      if (S > r.length || N > i.length || u.contains(N) || h.contains(S) || !x1(r[S - 1], i[N - 1], s))
        break;
    }
    x > 0 && (h.addRange(new te(
      d.original.endLineNumberExclusive,
      d.original.endLineNumberExclusive + x
    )), u.addRange(new te(
      d.modified.endLineNumberExclusive,
      d.modified.endLineNumberExclusive + x
    ))), (E > 0 || x > 0) && (a[g] = new Xe(new te(
      d.original.startLineNumber - E,
      d.original.endLineNumberExclusive + x
    ), new te(
      d.modified.startLineNumber - E,
      d.modified.endLineNumberExclusive + x
    )));
  }
  return a;
}
function x1(e, t, n) {
  if (e.trim() === t.trim())
    return !0;
  if (e.length > 300 && t.length > 300)
    return !1;
  const i = new Ml().compute(new Ir([e], new G(1, 1, 1, e.length), !1), new Ir([t], new G(1, 1, 1, t.length), !1), n);
  let s = 0;
  const a = ue.invert(i.diffs, e.length);
  for (const h of a)
    h.seq1Range.forEach((c) => {
      Ii(e.charCodeAt(c)) || s++;
    });
  function l(h) {
    let c = 0;
    for (let g = 0; g < e.length; g++)
      Ii(h.charCodeAt(g)) || c++;
    return c;
  }
  const o = l(e.length > t.length ? e : t);
  return s / o > 0.6 && o > 10;
}
function B0(e) {
  if (e.length === 0)
    return e;
  e.sort(Wt((n) => n.original.startLineNumber, dn));
  const t = [e[0]];
  for (let n = 1; n < e.length; n++) {
    const r = t[t.length - 1], i = e[n], s = i.original.startLineNumber - r.original.endLineNumberExclusive, a = i.modified.startLineNumber - r.modified.endLineNumberExclusive;
    if (s >= 0 && a >= 0 && s + a <= 2) {
      t[t.length - 1] = r.join(i);
      continue;
    }
    t.push(i);
  }
  return t;
}
function V0(e, t) {
  const n = new wr(e);
  return t = t.filter((r) => {
    const i = n.findLastMonotonous((l) => l.original.startLineNumber < r.original.endLineNumberExclusive) || new Xe(new te(1, 1), new te(1, 1)), s = vn(e, (l) => l.modified.startLineNumber < r.modified.endLineNumberExclusive);
    return i !== s;
  }), t;
}
function A1(e, t, n) {
  let r = n;
  return r = E1(e, t, r), r = E1(e, t, r), r = $0(e, t, r), r;
}
function E1(e, t, n) {
  if (n.length === 0)
    return n;
  const r = [];
  r.push(n[0]);
  for (let s = 1; s < n.length; s++) {
    const a = r[r.length - 1];
    let l = n[s];
    if (l.seq1Range.isEmpty || l.seq2Range.isEmpty) {
      const o = l.seq1Range.start - a.seq1Range.endExclusive;
      let u;
      for (u = 1; u <= o && !(e.getElement(l.seq1Range.start - u) !== e.getElement(l.seq1Range.endExclusive - u) || t.getElement(l.seq2Range.start - u) !== t.getElement(l.seq2Range.endExclusive - u)); u++)
        ;
      if (u--, u === o) {
        r[r.length - 1] = new ue(new W(a.seq1Range.start, l.seq1Range.endExclusive - o), new W(a.seq2Range.start, l.seq2Range.endExclusive - o));
        continue;
      }
      l = l.delta(-u);
    }
    r.push(l);
  }
  const i = [];
  for (let s = 0; s < r.length - 1; s++) {
    const a = r[s + 1];
    let l = r[s];
    if (l.seq1Range.isEmpty || l.seq2Range.isEmpty) {
      const o = a.seq1Range.start - l.seq1Range.endExclusive;
      let u;
      for (u = 0; u < o && !(!e.isStronglyEqual(l.seq1Range.start + u, l.seq1Range.endExclusive + u) || !t.isStronglyEqual(l.seq2Range.start + u, l.seq2Range.endExclusive + u)); u++)
        ;
      if (u === o) {
        r[s + 1] = new ue(new W(l.seq1Range.start + o, a.seq1Range.endExclusive), new W(l.seq2Range.start + o, a.seq2Range.endExclusive));
        continue;
      }
      u > 0 && (l = l.delta(u));
    }
    i.push(l);
  }
  return r.length > 0 && i.push(r[r.length - 1]), i;
}
function $0(e, t, n) {
  if (!e.getBoundaryScore || !t.getBoundaryScore)
    return n;
  for (let r = 0; r < n.length; r++) {
    const i = r > 0 ? n[r - 1] : void 0, s = n[r], a = r + 1 < n.length ? n[r + 1] : void 0, l = new W(
      i ? i.seq1Range.endExclusive + 1 : 0,
      a ? a.seq1Range.start - 1 : e.length
    ), o = new W(
      i ? i.seq2Range.endExclusive + 1 : 0,
      a ? a.seq2Range.start - 1 : t.length
    );
    s.seq1Range.isEmpty ? n[r] = R1(s, e, t, l, o) : s.seq2Range.isEmpty && (n[r] = R1(s.swap(), t, e, o, l).swap());
  }
  return n;
}
function R1(e, t, n, r, i) {
  let a = 1;
  for (; e.seq1Range.start - a >= r.start && e.seq2Range.start - a >= i.start && n.isStronglyEqual(e.seq2Range.start - a, e.seq2Range.endExclusive - a) && a < 100; )
    a++;
  a--;
  let l = 0;
  for (; e.seq1Range.start + l < r.endExclusive && e.seq2Range.endExclusive + l < i.endExclusive && n.isStronglyEqual(e.seq2Range.start + l, e.seq2Range.endExclusive + l) && l < 100; )
    l++;
  if (a === 0 && l === 0)
    return e;
  let o = 0, u = -1;
  for (let h = -a; h <= l; h++) {
    const c = e.seq2Range.start + h, g = e.seq2Range.endExclusive + h, d = e.seq1Range.start + h, m = t.getBoundaryScore(d) + n.getBoundaryScore(c) + n.getBoundaryScore(g);
    m > u && (u = m, o = h);
  }
  return e.delta(o);
}
function q0(e, t, n) {
  const r = [];
  for (const i of n) {
    const s = r[r.length - 1];
    if (!s) {
      r.push(i);
      continue;
    }
    i.seq1Range.start - s.seq1Range.endExclusive <= 2 || i.seq2Range.start - s.seq2Range.endExclusive <= 2 ? r[r.length - 1] = new ue(s.seq1Range.join(i.seq1Range), s.seq2Range.join(i.seq2Range)) : r.push(i);
  }
  return r;
}
function y1(e, t, n, r, i = !1) {
  const s = ue.invert(n, e.length), a = [];
  let l = new bt(0, 0);
  function o(h, c) {
    if (h.offset1 < l.offset1 || h.offset2 < l.offset2)
      return;
    const g = r(e, h.offset1), d = r(t, h.offset2);
    if (!g || !d)
      return;
    let m = new ue(g, d);
    const p = m.intersect(c);
    let _ = p.seq1Range.length, L = p.seq2Range.length;
    for (; s.length > 0; ) {
      const A = s[0];
      if (!(A.seq1Range.intersects(m.seq1Range) || A.seq2Range.intersects(m.seq2Range)))
        break;
      const E = r(e, A.seq1Range.start), x = r(t, A.seq2Range.start), S = new ue(E, x), N = S.intersect(A);
      if (_ += N.seq1Range.length, L += N.seq2Range.length, m = m.join(S), m.seq1Range.endExclusive >= A.seq1Range.endExclusive)
        s.shift();
      else
        break;
    }
    (i && _ + L < m.seq1Range.length + m.seq2Range.length || _ + L < (m.seq1Range.length + m.seq2Range.length) * 2 / 3) && a.push(m), l = m.getEndExclusives();
  }
  for (; s.length > 0; ) {
    const h = s.shift();
    h.seq1Range.isEmpty || (o(h.getStarts(), h), o(h.getEndExclusives().delta(-1), h));
  }
  return H0(n, a);
}
function H0(e, t) {
  const n = [];
  for (; e.length > 0 || t.length > 0; ) {
    const r = e[0], i = t[0];
    let s;
    r && (!i || r.seq1Range.start < i.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function W0(e, t, n) {
  let r = n;
  if (r.length === 0)
    return r;
  let i = 0, s;
  do {
    s = !1;
    const a = [
      r[0]
    ];
    for (let l = 1; l < r.length; l++) {
      let h = function(g, d) {
        const m = new W(u.seq1Range.endExclusive, o.seq1Range.start);
        return e.getText(m).replace(/\s/g, "").length <= 4 && (g.seq1Range.length + g.seq2Range.length > 5 || d.seq1Range.length + d.seq2Range.length > 5);
      };
      const o = r[l], u = a[a.length - 1];
      h(u, o) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(o)) : a.push(o);
    }
    r = a;
  } while (i++ < 10 && s);
  return r;
}
function j0(e, t, n) {
  let r = n;
  if (r.length === 0)
    return r;
  let i = 0, s;
  do {
    s = !1;
    const l = [
      r[0]
    ];
    for (let o = 1; o < r.length; o++) {
      let c = function(d, m) {
        const p = new W(h.seq1Range.endExclusive, u.seq1Range.start);
        if (e.countLinesIn(p) > 5 || p.length > 500)
          return !1;
        const L = e.getText(p).trim();
        if (L.length > 20 || L.split(/\r\n|\r|\n/).length > 1)
          return !1;
        const A = e.countLinesIn(d.seq1Range), b = d.seq1Range.length, E = t.countLinesIn(d.seq2Range), x = d.seq2Range.length, S = e.countLinesIn(m.seq1Range), N = m.seq1Range.length, T = t.countLinesIn(m.seq2Range), D = m.seq2Range.length, q = 2 * 40 + 50;
        function F(k) {
          return Math.min(k, q);
        }
        return Math.pow(Math.pow(F(A * 40 + b), 1.5) + Math.pow(F(E * 40 + x), 1.5), 1.5) + Math.pow(Math.pow(F(S * 40 + N), 1.5) + Math.pow(F(T * 40 + D), 1.5), 1.5) > (q ** 1.5) ** 1.5 * 1.3;
      };
      const u = r[o], h = l[l.length - 1];
      c(h, u) ? (s = !0, l[l.length - 1] = l[l.length - 1].join(u)) : l.push(u);
    }
    r = l;
  } while (i++ < 10 && s);
  const a = [];
  return hu(r, (l, o, u) => {
    let h = o;
    function c(L) {
      return L.length > 0 && L.trim().length <= 3 && o.seq1Range.length + o.seq2Range.length > 100;
    }
    const g = e.extendToFullLines(o.seq1Range), d = e.getText(new W(g.start, o.seq1Range.start));
    c(d) && (h = h.deltaStart(-d.length));
    const m = e.getText(new W(o.seq1Range.endExclusive, g.endExclusive));
    c(m) && (h = h.deltaEnd(m.length));
    const p = ue.fromOffsetPairs(l ? l.getEndExclusives() : bt.zero, u ? u.getStarts() : bt.max), _ = h.intersect(p);
    a.length > 0 && _.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(_) : a.push(_);
  }), a;
}
class T1 {
  constructor(t, n) {
    this.trimmedHash = t, this.lines = n;
  }
  getElement(t) {
    return this.trimmedHash[t];
  }
  get length() {
    return this.trimmedHash.length;
  }
  getBoundaryScore(t) {
    const n = t === 0 ? 0 : k1(this.lines[t - 1]), r = t === this.lines.length ? 0 : k1(this.lines[t]);
    return 1e3 - (n + r);
  }
  getText(t) {
    return this.lines.slice(t.start, t.endExclusive).join(`
`);
  }
  isStronglyEqual(t, n) {
    return this.lines[t] === this.lines[n];
  }
}
function k1(e) {
  let t = 0;
  for (; t < e.length && (e.charCodeAt(t) === y.Space || e.charCodeAt(t) === y.Tab); )
    t++;
  return t;
}
class G0 {
  constructor() {
    this.dynamicProgrammingDiffing = new S0(), this.myersDiffingAlgorithm = new Ml();
  }
  computeDiff(t, n, r) {
    if (t.length <= 1 && sl(t, n, (N, T) => N === T))
      return new _r([], [], !1);
    if (t.length === 1 && t[0].length === 0 || n.length === 1 && n[0].length === 0)
      return new _r([
        new ut(new te(1, t.length + 1), new te(1, n.length + 1), [
          new Ue(new G(
            1,
            1,
            t.length,
            t[t.length - 1].length + 1
          ), new G(
            1,
            1,
            n.length,
            n[n.length - 1].length + 1
          ))
        ])
      ], [], !1);
    const i = r.maxComputationTimeMs === 0 ? Cn.instance : new k0(r.maxComputationTimeMs), s = !r.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
    function l(N) {
      let T = a.get(N);
      return T === void 0 && (T = a.size, a.set(N, T)), T;
    }
    const o = t.map((N) => l(N.trim())), u = n.map((N) => l(N.trim())), h = new T1(o, t), c = new T1(u, n), g = h.length + c.length < 1700 ? this.dynamicProgrammingDiffing.compute(h, c, i, (N, T) => t[N] === n[T] ? n[T].length === 0 ? 0.1 : 1 + Math.log(1 + n[T].length) : 0.99) : this.myersDiffingAlgorithm.compute(h, c, i);
    let d = g.diffs, m = g.hitTimeout;
    d = A1(h, c, d), d = W0(h, c, d);
    const p = [], _ = (N) => {
      if (s)
        for (let T = 0; T < N; T++) {
          const D = L + T, q = A + T;
          if (t[D] !== n[q]) {
            const F = this.refineDiff(t, n, new ue(new W(D, D + 1), new W(q, q + 1)), i, s, r);
            for (const k of F.mappings)
              p.push(k);
            F.hitTimeout && (m = !0);
          }
        }
    };
    let L = 0, A = 0;
    for (const N of d) {
      zn(() => N.seq1Range.start - L === N.seq2Range.start - A);
      const T = N.seq1Range.start - L;
      _(T), L = N.seq1Range.endExclusive, A = N.seq2Range.endExclusive;
      const D = this.refineDiff(t, n, N, i, s, r);
      D.hitTimeout && (m = !0);
      for (const q of D.mappings)
        p.push(q);
    }
    _(t.length - L);
    const b = new or(t), E = new or(n), x = p1(p, b, E);
    let S = [];
    return r.computeMoves && (S = this.computeMoves(x, t, n, o, u, i, s, r)), zn(() => {
      function N(D, q) {
        if (D.lineNumber < 1 || D.lineNumber > q.length)
          return !1;
        const F = q[D.lineNumber - 1];
        return !(D.column < 1 || D.column > F.length + 1);
      }
      function T(D, q) {
        return !(D.startLineNumber < 1 || D.startLineNumber > q.length + 1 || D.endLineNumberExclusive < 1 || D.endLineNumberExclusive > q.length + 1);
      }
      for (const D of x) {
        if (!D.innerChanges)
          return !1;
        for (const q of D.innerChanges)
          if (!(N(q.modifiedRange.getStartPosition(), n) && N(q.modifiedRange.getEndPosition(), n) && N(q.originalRange.getStartPosition(), t) && N(q.originalRange.getEndPosition(), t)))
            return !1;
        if (!T(D.modified, n) || !T(D.original, t))
          return !1;
      }
      return !0;
    }), new _r(x, S, m);
  }
  computeMoves(t, n, r, i, s, a, l, o) {
    return D0(t, n, r, i, s, a).map((c) => {
      const g = this.refineDiff(n, r, new ue(c.original.toOffsetRange(), c.modified.toOffsetRange()), a, l, o), d = p1(g.mappings, new or(n), new or(r), !0);
      return new cs(c, d);
    });
  }
  refineDiff(t, n, r, i, s, a) {
    const o = z0(r).toRangeMapping2(t, n), u = new Ir(t, o.originalRange, s), h = new Ir(n, o.modifiedRange, s), c = u.length + h.length < 500 ? this.dynamicProgrammingDiffing.compute(u, h, i) : this.myersDiffingAlgorithm.compute(u, h, i);
    let g = c.diffs;
    return g = A1(u, h, g), g = y1(u, h, g, (m, p) => m.findWordContaining(p)), a.extendToSubwords && (g = y1(u, h, g, (m, p) => m.findSubWordContaining(p), !0)), g = q0(u, h, g), g = j0(u, h, g), {
      mappings: g.map((m) => new Ue(u.translateRange(m.seq1Range), h.translateRange(m.seq2Range))),
      hitTimeout: c.hitTimeout
    };
  }
}
function z0(e) {
  return new Xe(new te(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new te(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const In = {
  getLegacy: () => new R0(),
  getDefault: () => new G0()
};
function It(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
class R {
  constructor(t, n, r, i = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, r)) | 0, this.a = It(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}
class ze {
  constructor(t, n, r, i) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = It(Math.max(Math.min(1, n), 0), 3), this.l = It(Math.max(Math.min(1, r), 0), 3), this.a = It(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, r = t.g / 255, i = t.b / 255, s = t.a, a = Math.max(n, r, i), l = Math.min(n, r, i);
    let o = 0, u = 0;
    const h = (l + a) / 2, c = a - l;
    if (c > 0) {
      switch (u = Math.min(h <= 0.5 ? c / (2 * h) : c / (2 - 2 * h), 1), a) {
        case n:
          o = (r - i) / c + (r < i ? 6 : 0);
          break;
        case r:
          o = (i - n) / c + 2;
          break;
        case i:
          o = (n - r) / c + 4;
          break;
      }
      o *= 60, o = Math.round(o);
    }
    return new ze(o, u, h, s);
  }
  static _hue2rgb(t, n, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
  }
  static toRGBA(t) {
    const n = t.h / 360, { s: r, l: i, a: s } = t;
    let a, l, o;
    if (r === 0)
      a = l = o = i;
    else {
      const u = i < 0.5 ? i * (1 + r) : i + r - i * r, h = 2 * i - u;
      a = ze._hue2rgb(h, u, n + 1 / 3), l = ze._hue2rgb(h, u, n), o = ze._hue2rgb(h, u, n - 1 / 3);
    }
    return new R(Math.round(a * 255), Math.round(l * 255), Math.round(o * 255), s);
  }
}
class ln {
  constructor(t, n, r, i) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = It(Math.max(Math.min(1, n), 0), 3), this.v = It(Math.max(Math.min(1, r), 0), 3), this.a = It(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, r = t.g / 255, i = t.b / 255, s = Math.max(n, r, i), a = Math.min(n, r, i), l = s - a, o = s === 0 ? 0 : l / s;
    let u;
    return l === 0 ? u = 0 : s === n ? u = ((r - i) / l % 6 + 6) % 6 : s === r ? u = (i - n) / l + 2 : u = (n - r) / l + 4, new ln(Math.round(u * 60), o, s, t.a);
  }
  static toRGBA(t) {
    const { h: n, s: r, v: i, a: s } = t, a = i * r, l = a * (1 - Math.abs(n / 60 % 2 - 1)), o = i - a;
    let [u, h, c] = [0, 0, 0];
    return n < 60 ? (u = a, h = l) : n < 120 ? (u = l, h = a) : n < 180 ? (h = a, c = l) : n < 240 ? (h = l, c = a) : n < 300 ? (u = l, c = a) : n <= 360 && (u = a, c = l), u = Math.round((u + o) * 255), h = Math.round((h + o) * 255), c = Math.round((c + o) * 255), new R(u, h, c, s);
  }
}
var Z;
let Ur = (Z = class {
  static fromHex(t) {
    return Z.Format.CSS.parseHex(t) || Z.red;
  }
  static equals(t, n) {
    return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : ze.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : ln.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t)
      if (t instanceof R)
        this.rgba = t;
      else if (t instanceof ze)
        this._hsla = t, this.rgba = ze.toRGBA(t);
      else if (t instanceof ln)
        this._hsva = t, this.rgba = ln.toRGBA(t);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && R.equals(this.rgba, t.rgba) && ze.equals(this.hsla, t.hsla) && ln.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = Z._relativeLuminanceForComponent(this.rgba.r), n = Z._relativeLuminanceForComponent(this.rgba.g), r = Z._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * t + 0.7152 * n + 0.0722 * r;
    return It(i, 4);
  }
  reduceRelativeLuminace(t, n) {
    let { r, g: i, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (r > 0 || i > 0 || s > 0); )
      r -= Math.max(0, Math.ceil(r * 0.1)), i -= Math.max(0, Math.ceil(i * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), a = this.getContrastRatio(new Z(new R(r, i, s)));
    return new Z(new R(r, i, s));
  }
  increaseRelativeLuminace(t, n) {
    let { r, g: i, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (r < 255 || i < 255 || s < 255); )
      r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), a = this.getContrastRatio(new Z(new R(r, i, s)));
    return new Z(new R(r, i, s));
  }
  static _relativeLuminanceForComponent(t) {
    const n = t / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  }
  getContrastRatio(t) {
    const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
    return n > r ? (n + 0.05) / (r + 0.05) : (r + 0.05) / (n + 0.05);
  }
  isDarker() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
  }
  isLighter() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
  }
  isLighterThan(t) {
    const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
    return n > r;
  }
  isDarkerThan(t) {
    const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
    return n < r;
  }
  ensureConstrast(t, n) {
    const r = this.getRelativeLuminance(), i = t.getRelativeLuminance();
    if (this.getContrastRatio(t) < n) {
      if (i < r) {
        const o = this.reduceRelativeLuminace(t, n), u = this.getContrastRatio(o);
        if (u < n) {
          const h = this.increaseRelativeLuminace(t, n), c = this.getContrastRatio(h);
          return u > c ? o : h;
        }
        return o;
      }
      const a = this.increaseRelativeLuminace(t, n), l = this.getContrastRatio(a);
      if (l < n) {
        const o = this.reduceRelativeLuminace(t, n), u = this.getContrastRatio(o);
        return l > u ? a : o;
      }
      return a;
    }
    return t;
  }
  lighten(t) {
    return new Z(new ze(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new Z(new ze(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: n, g: r, b: i, a: s } = this.rgba;
    return new Z(new R(n, r, i, s * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new Z(new R(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const n = t.rgba, r = this.rgba.a, i = n.a, s = r + i * (1 - r);
    if (s < 1e-6)
      return Z.transparent;
    const a = this.rgba.r * r / s + n.r * i * (1 - r) / s, l = this.rgba.g * r / s + n.g * i * (1 - r) / s, o = this.rgba.b * r / s + n.b * i * (1 - r) / s;
    return new Z(new R(a, l, o, s));
  }
  mix(t, n = 0.5) {
    const r = Math.min(Math.max(n, 0), 1), i = this.rgba, s = t.rgba, a = i.r + (s.r - i.r) * r, l = i.g + (s.g - i.g) * r, o = i.b + (s.b - i.b) * r, u = i.a + (s.a - i.a) * r;
    return new Z(new R(a, l, o, u));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1)
      return this;
    const { r: n, g: r, b: i, a: s } = this.rgba;
    return new Z(new R(
      t.rgba.r - s * (t.rgba.r - n),
      t.rgba.g - s * (t.rgba.g - r),
      t.rgba.b - s * (t.rgba.b - i),
      1
    ));
  }
  flatten(...t) {
    const n = t.reduceRight((r, i) => Z._flatten(i, r));
    return Z._flatten(this, n);
  }
  static _flatten(t, n) {
    const r = 1 - t.rgba.a;
    return new Z(new R(
      r * n.rgba.r + t.rgba.a * t.rgba.r,
      r * n.rgba.g + t.rgba.a * t.rgba.g,
      r * n.rgba.b + t.rgba.a * t.rgba.b
    ));
  }
  toString() {
    return this._toString || (this._toString = Z.Format.CSS.format(this)), this._toString;
  }
  toNumber32Bit() {
    return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
  }
  static getLighterColor(t, n, r) {
    if (t.isLighterThan(n))
      return t;
    r = r || 0.5;
    const i = t.getRelativeLuminance(), s = n.getRelativeLuminance();
    return r = r * (s - i) / s, t.lighten(r);
  }
  static getDarkerColor(t, n, r) {
    if (t.isDarkerThan(n))
      return t;
    r = r || 0.5;
    const i = t.getRelativeLuminance(), s = n.getRelativeLuminance();
    return r = r * (i - s) / i, t.darken(r);
  }
}, Z.white = new Z(new R(255, 255, 255, 1)), Z.black = new Z(new R(0, 0, 0, 1)), Z.red = new Z(new R(255, 0, 0, 1)), Z.blue = new Z(new R(0, 0, 255, 1)), Z.green = new Z(new R(0, 255, 0, 1)), Z.cyan = new Z(new R(0, 255, 255, 1)), Z.lightgrey = new Z(new R(211, 211, 211, 1)), Z.transparent = new Z(new R(0, 0, 0, 0)), Z);
(function(e) {
  (function(t) {
    (function(n) {
      function r(p) {
        return p.rgba.a === 1 ? `rgb(${p.rgba.r}, ${p.rgba.g}, ${p.rgba.b})` : e.Format.CSS.formatRGBA(p);
      }
      n.formatRGB = r;
      function i(p) {
        return `rgba(${p.rgba.r}, ${p.rgba.g}, ${p.rgba.b}, ${+p.rgba.a.toFixed(2)})`;
      }
      n.formatRGBA = i;
      function s(p) {
        return p.hsla.a === 1 ? `hsl(${p.hsla.h}, ${Math.round(p.hsla.s * 100)}%, ${Math.round(p.hsla.l * 100)}%)` : e.Format.CSS.formatHSLA(p);
      }
      n.formatHSL = s;
      function a(p) {
        return `hsla(${p.hsla.h}, ${Math.round(p.hsla.s * 100)}%, ${Math.round(p.hsla.l * 100)}%, ${p.hsla.a.toFixed(2)})`;
      }
      n.formatHSLA = a;
      function l(p) {
        const _ = p.toString(16);
        return _.length !== 2 ? "0" + _ : _;
      }
      function o(p) {
        return `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}`;
      }
      n.formatHex = o;
      function u(p, _ = !1) {
        return _ && p.rgba.a === 1 ? e.Format.CSS.formatHex(p) : `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}${l(Math.round(p.rgba.a * 255))}`;
      }
      n.formatHexA = u;
      function h(p) {
        return p.isOpaque() ? e.Format.CSS.formatHex(p) : e.Format.CSS.formatRGBA(p);
      }
      n.format = h;
      function c(p) {
        var _, L, A, b, E, x, S;
        if (p === "transparent")
          return e.transparent;
        if (p.startsWith("#"))
          return d(p);
        if (p.startsWith("rgba(")) {
          const N = p.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!N)
            throw new Error("Invalid color format " + p);
          const T = parseInt(((_ = N.groups) == null ? void 0 : _.r) ?? "0"), D = parseInt(((L = N.groups) == null ? void 0 : L.g) ?? "0"), q = parseInt(((A = N.groups) == null ? void 0 : A.b) ?? "0"), F = parseFloat(((b = N.groups) == null ? void 0 : b.a) ?? "0");
          return new e(new R(T, D, q, F));
        }
        if (p.startsWith("rgb(")) {
          const N = p.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!N)
            throw new Error("Invalid color format " + p);
          const T = parseInt(((E = N.groups) == null ? void 0 : E.r) ?? "0"), D = parseInt(((x = N.groups) == null ? void 0 : x.g) ?? "0"), q = parseInt(((S = N.groups) == null ? void 0 : S.b) ?? "0");
          return new e(new R(T, D, q));
        }
        return g(p);
      }
      n.parse = c;
      function g(p) {
        switch (p) {
          case "aliceblue":
            return new e(new R(240, 248, 255, 1));
          case "antiquewhite":
            return new e(new R(250, 235, 215, 1));
          case "aqua":
            return new e(new R(0, 255, 255, 1));
          case "aquamarine":
            return new e(new R(127, 255, 212, 1));
          case "azure":
            return new e(new R(240, 255, 255, 1));
          case "beige":
            return new e(new R(245, 245, 220, 1));
          case "bisque":
            return new e(new R(255, 228, 196, 1));
          case "black":
            return new e(new R(0, 0, 0, 1));
          case "blanchedalmond":
            return new e(new R(255, 235, 205, 1));
          case "blue":
            return new e(new R(0, 0, 255, 1));
          case "blueviolet":
            return new e(new R(138, 43, 226, 1));
          case "brown":
            return new e(new R(165, 42, 42, 1));
          case "burlywood":
            return new e(new R(222, 184, 135, 1));
          case "cadetblue":
            return new e(new R(95, 158, 160, 1));
          case "chartreuse":
            return new e(new R(127, 255, 0, 1));
          case "chocolate":
            return new e(new R(210, 105, 30, 1));
          case "coral":
            return new e(new R(255, 127, 80, 1));
          case "cornflowerblue":
            return new e(new R(100, 149, 237, 1));
          case "cornsilk":
            return new e(new R(255, 248, 220, 1));
          case "crimson":
            return new e(new R(220, 20, 60, 1));
          case "cyan":
            return new e(new R(0, 255, 255, 1));
          case "darkblue":
            return new e(new R(0, 0, 139, 1));
          case "darkcyan":
            return new e(new R(0, 139, 139, 1));
          case "darkgoldenrod":
            return new e(new R(184, 134, 11, 1));
          case "darkgray":
            return new e(new R(169, 169, 169, 1));
          case "darkgreen":
            return new e(new R(0, 100, 0, 1));
          case "darkgrey":
            return new e(new R(169, 169, 169, 1));
          case "darkkhaki":
            return new e(new R(189, 183, 107, 1));
          case "darkmagenta":
            return new e(new R(139, 0, 139, 1));
          case "darkolivegreen":
            return new e(new R(85, 107, 47, 1));
          case "darkorange":
            return new e(new R(255, 140, 0, 1));
          case "darkorchid":
            return new e(new R(153, 50, 204, 1));
          case "darkred":
            return new e(new R(139, 0, 0, 1));
          case "darksalmon":
            return new e(new R(233, 150, 122, 1));
          case "darkseagreen":
            return new e(new R(143, 188, 143, 1));
          case "darkslateblue":
            return new e(new R(72, 61, 139, 1));
          case "darkslategray":
            return new e(new R(47, 79, 79, 1));
          case "darkslategrey":
            return new e(new R(47, 79, 79, 1));
          case "darkturquoise":
            return new e(new R(0, 206, 209, 1));
          case "darkviolet":
            return new e(new R(148, 0, 211, 1));
          case "deeppink":
            return new e(new R(255, 20, 147, 1));
          case "deepskyblue":
            return new e(new R(0, 191, 255, 1));
          case "dimgray":
            return new e(new R(105, 105, 105, 1));
          case "dimgrey":
            return new e(new R(105, 105, 105, 1));
          case "dodgerblue":
            return new e(new R(30, 144, 255, 1));
          case "firebrick":
            return new e(new R(178, 34, 34, 1));
          case "floralwhite":
            return new e(new R(255, 250, 240, 1));
          case "forestgreen":
            return new e(new R(34, 139, 34, 1));
          case "fuchsia":
            return new e(new R(255, 0, 255, 1));
          case "gainsboro":
            return new e(new R(220, 220, 220, 1));
          case "ghostwhite":
            return new e(new R(248, 248, 255, 1));
          case "gold":
            return new e(new R(255, 215, 0, 1));
          case "goldenrod":
            return new e(new R(218, 165, 32, 1));
          case "gray":
            return new e(new R(128, 128, 128, 1));
          case "green":
            return new e(new R(0, 128, 0, 1));
          case "greenyellow":
            return new e(new R(173, 255, 47, 1));
          case "grey":
            return new e(new R(128, 128, 128, 1));
          case "honeydew":
            return new e(new R(240, 255, 240, 1));
          case "hotpink":
            return new e(new R(255, 105, 180, 1));
          case "indianred":
            return new e(new R(205, 92, 92, 1));
          case "indigo":
            return new e(new R(75, 0, 130, 1));
          case "ivory":
            return new e(new R(255, 255, 240, 1));
          case "khaki":
            return new e(new R(240, 230, 140, 1));
          case "lavender":
            return new e(new R(230, 230, 250, 1));
          case "lavenderblush":
            return new e(new R(255, 240, 245, 1));
          case "lawngreen":
            return new e(new R(124, 252, 0, 1));
          case "lemonchiffon":
            return new e(new R(255, 250, 205, 1));
          case "lightblue":
            return new e(new R(173, 216, 230, 1));
          case "lightcoral":
            return new e(new R(240, 128, 128, 1));
          case "lightcyan":
            return new e(new R(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new e(new R(250, 250, 210, 1));
          case "lightgray":
            return new e(new R(211, 211, 211, 1));
          case "lightgreen":
            return new e(new R(144, 238, 144, 1));
          case "lightgrey":
            return new e(new R(211, 211, 211, 1));
          case "lightpink":
            return new e(new R(255, 182, 193, 1));
          case "lightsalmon":
            return new e(new R(255, 160, 122, 1));
          case "lightseagreen":
            return new e(new R(32, 178, 170, 1));
          case "lightskyblue":
            return new e(new R(135, 206, 250, 1));
          case "lightslategray":
            return new e(new R(119, 136, 153, 1));
          case "lightslategrey":
            return new e(new R(119, 136, 153, 1));
          case "lightsteelblue":
            return new e(new R(176, 196, 222, 1));
          case "lightyellow":
            return new e(new R(255, 255, 224, 1));
          case "lime":
            return new e(new R(0, 255, 0, 1));
          case "limegreen":
            return new e(new R(50, 205, 50, 1));
          case "linen":
            return new e(new R(250, 240, 230, 1));
          case "magenta":
            return new e(new R(255, 0, 255, 1));
          case "maroon":
            return new e(new R(128, 0, 0, 1));
          case "mediumaquamarine":
            return new e(new R(102, 205, 170, 1));
          case "mediumblue":
            return new e(new R(0, 0, 205, 1));
          case "mediumorchid":
            return new e(new R(186, 85, 211, 1));
          case "mediumpurple":
            return new e(new R(147, 112, 219, 1));
          case "mediumseagreen":
            return new e(new R(60, 179, 113, 1));
          case "mediumslateblue":
            return new e(new R(123, 104, 238, 1));
          case "mediumspringgreen":
            return new e(new R(0, 250, 154, 1));
          case "mediumturquoise":
            return new e(new R(72, 209, 204, 1));
          case "mediumvioletred":
            return new e(new R(199, 21, 133, 1));
          case "midnightblue":
            return new e(new R(25, 25, 112, 1));
          case "mintcream":
            return new e(new R(245, 255, 250, 1));
          case "mistyrose":
            return new e(new R(255, 228, 225, 1));
          case "moccasin":
            return new e(new R(255, 228, 181, 1));
          case "navajowhite":
            return new e(new R(255, 222, 173, 1));
          case "navy":
            return new e(new R(0, 0, 128, 1));
          case "oldlace":
            return new e(new R(253, 245, 230, 1));
          case "olive":
            return new e(new R(128, 128, 0, 1));
          case "olivedrab":
            return new e(new R(107, 142, 35, 1));
          case "orange":
            return new e(new R(255, 165, 0, 1));
          case "orangered":
            return new e(new R(255, 69, 0, 1));
          case "orchid":
            return new e(new R(218, 112, 214, 1));
          case "palegoldenrod":
            return new e(new R(238, 232, 170, 1));
          case "palegreen":
            return new e(new R(152, 251, 152, 1));
          case "paleturquoise":
            return new e(new R(175, 238, 238, 1));
          case "palevioletred":
            return new e(new R(219, 112, 147, 1));
          case "papayawhip":
            return new e(new R(255, 239, 213, 1));
          case "peachpuff":
            return new e(new R(255, 218, 185, 1));
          case "peru":
            return new e(new R(205, 133, 63, 1));
          case "pink":
            return new e(new R(255, 192, 203, 1));
          case "plum":
            return new e(new R(221, 160, 221, 1));
          case "powderblue":
            return new e(new R(176, 224, 230, 1));
          case "purple":
            return new e(new R(128, 0, 128, 1));
          case "rebeccapurple":
            return new e(new R(102, 51, 153, 1));
          case "red":
            return new e(new R(255, 0, 0, 1));
          case "rosybrown":
            return new e(new R(188, 143, 143, 1));
          case "royalblue":
            return new e(new R(65, 105, 225, 1));
          case "saddlebrown":
            return new e(new R(139, 69, 19, 1));
          case "salmon":
            return new e(new R(250, 128, 114, 1));
          case "sandybrown":
            return new e(new R(244, 164, 96, 1));
          case "seagreen":
            return new e(new R(46, 139, 87, 1));
          case "seashell":
            return new e(new R(255, 245, 238, 1));
          case "sienna":
            return new e(new R(160, 82, 45, 1));
          case "silver":
            return new e(new R(192, 192, 192, 1));
          case "skyblue":
            return new e(new R(135, 206, 235, 1));
          case "slateblue":
            return new e(new R(106, 90, 205, 1));
          case "slategray":
            return new e(new R(112, 128, 144, 1));
          case "slategrey":
            return new e(new R(112, 128, 144, 1));
          case "snow":
            return new e(new R(255, 250, 250, 1));
          case "springgreen":
            return new e(new R(0, 255, 127, 1));
          case "steelblue":
            return new e(new R(70, 130, 180, 1));
          case "tan":
            return new e(new R(210, 180, 140, 1));
          case "teal":
            return new e(new R(0, 128, 128, 1));
          case "thistle":
            return new e(new R(216, 191, 216, 1));
          case "tomato":
            return new e(new R(255, 99, 71, 1));
          case "turquoise":
            return new e(new R(64, 224, 208, 1));
          case "violet":
            return new e(new R(238, 130, 238, 1));
          case "wheat":
            return new e(new R(245, 222, 179, 1));
          case "white":
            return new e(new R(255, 255, 255, 1));
          case "whitesmoke":
            return new e(new R(245, 245, 245, 1));
          case "yellow":
            return new e(new R(255, 255, 0, 1));
          case "yellowgreen":
            return new e(new R(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function d(p) {
        const _ = p.length;
        if (_ === 0 || p.charCodeAt(0) !== y.Hash)
          return null;
        if (_ === 7) {
          const L = 16 * m(p.charCodeAt(1)) + m(p.charCodeAt(2)), A = 16 * m(p.charCodeAt(3)) + m(p.charCodeAt(4)), b = 16 * m(p.charCodeAt(5)) + m(p.charCodeAt(6));
          return new e(new R(L, A, b, 1));
        }
        if (_ === 9) {
          const L = 16 * m(p.charCodeAt(1)) + m(p.charCodeAt(2)), A = 16 * m(p.charCodeAt(3)) + m(p.charCodeAt(4)), b = 16 * m(p.charCodeAt(5)) + m(p.charCodeAt(6)), E = 16 * m(p.charCodeAt(7)) + m(p.charCodeAt(8));
          return new e(new R(L, A, b, E / 255));
        }
        if (_ === 4) {
          const L = m(p.charCodeAt(1)), A = m(p.charCodeAt(2)), b = m(p.charCodeAt(3));
          return new e(new R(16 * L + L, 16 * A + A, 16 * b + b));
        }
        if (_ === 5) {
          const L = m(p.charCodeAt(1)), A = m(p.charCodeAt(2)), b = m(p.charCodeAt(3)), E = m(p.charCodeAt(4));
          return new e(new R(16 * L + L, 16 * A + A, 16 * b + b, (16 * E + E) / 255));
        }
        return null;
      }
      n.parseHex = d;
      function m(p) {
        switch (p) {
          case y.Digit0:
            return 0;
          case y.Digit1:
            return 1;
          case y.Digit2:
            return 2;
          case y.Digit3:
            return 3;
          case y.Digit4:
            return 4;
          case y.Digit5:
            return 5;
          case y.Digit6:
            return 6;
          case y.Digit7:
            return 7;
          case y.Digit8:
            return 8;
          case y.Digit9:
            return 9;
          case y.a:
            return 10;
          case y.A:
            return 10;
          case y.b:
            return 11;
          case y.B:
            return 11;
          case y.c:
            return 12;
          case y.C:
            return 12;
          case y.d:
            return 13;
          case y.D:
            return 13;
          case y.e:
            return 14;
          case y.E:
            return 14;
          case y.f:
            return 15;
          case y.F:
            return 15;
        }
        return 0;
      }
    })(t.CSS || (t.CSS = {}));
  })(e.Format || (e.Format = {}));
})(Ur || (Ur = {}));
function Il(e) {
  const t = [];
  for (const n of e) {
    const r = Number(n);
    (r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
  }
  return t;
}
function hs(e, t, n, r) {
  return {
    red: e / 255,
    blue: n / 255,
    green: t / 255,
    alpha: r
  };
}
function Un(e, t) {
  const n = t.index, r = t[0].length;
  if (n === void 0)
    return;
  const i = e.positionAt(n);
  return {
    startLineNumber: i.lineNumber,
    startColumn: i.column,
    endLineNumber: i.lineNumber,
    endColumn: i.column + r
  };
}
function X0(e, t) {
  if (!e)
    return;
  const n = Ur.Format.CSS.parseHex(t);
  if (n)
    return {
      range: e,
      color: hs(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
    };
}
function S1(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const i = t[0].values(), s = Il(i);
  return {
    range: e,
    color: hs(s[0], s[1], s[2], n ? s[3] : 1)
  };
}
function M1(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const i = t[0].values(), s = Il(i), a = new Ur(new ze(
    s[0],
    s[1] / 100,
    s[2] / 100,
    n ? s[3] : 1
  ));
  return {
    range: e,
    color: hs(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a)
  };
}
function Dn(e, t) {
  return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function J0(e) {
  const t = [], n = new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{3})\\b|^(#)([A-Fa-f0-9]{4})\\b|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{3})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{4})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"), r = Dn(e, n);
  if (r.length > 0)
    for (const i of r) {
      const s = i.filter((u) => u !== void 0), a = s[1], l = s[2];
      if (!l)
        continue;
      let o;
      if (a === "rgb") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        o = S1(Un(e, i), Dn(l, u), !1);
      } else if (a === "rgba") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = S1(Un(e, i), Dn(l, u), !0);
      } else if (a === "hsl") {
        const u = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        o = M1(Un(e, i), Dn(l, u), !1);
      } else if (a === "hsla") {
        const u = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm;
        o = M1(Un(e, i), Dn(l, u), !0);
      } else a === "#" && (o = X0(Un(e, i), a + l));
      o && t.push(o);
    }
  return t;
}
function Y0(e) {
  return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : J0(e);
}
const Q0 = /^-+|-+$/g, I1 = 100, Z0 = 5;
function K0(e, t) {
  var r;
  let n = [];
  if (t.findRegionSectionHeaders && ((r = t.foldingRules) != null && r.markers)) {
    const i = C0(e, t);
    n = n.concat(i);
  }
  if (t.findMarkSectionHeaders) {
    const i = ef(e, t);
    n = n.concat(i);
  }
  return n;
}
function C0(e, t) {
  const n = [], r = e.getLineCount();
  for (let i = 1; i <= r; i++) {
    const s = e.getLineContent(i), a = s.match(t.foldingRules.markers.start);
    if (a) {
      const l = { startLineNumber: i, startColumn: a[0].length + 1, endLineNumber: i, endColumn: s.length + 1 };
      if (l.endColumn > l.startColumn) {
        const o = {
          range: l,
          ...tf(s.substring(a[0].length)),
          shouldBeInComments: !1
        };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  return n;
}
function ef(e, t) {
  const n = [], r = e.getLineCount();
  if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "")
    return n;
  const i = f0(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
  if (Zu(s))
    return n;
  for (let a = 1; a <= r; a += I1 - Z0) {
    const l = Math.min(a + I1 - 1, r), o = [];
    for (let c = a; c <= l; c++)
      o.push(e.getLineContent(c));
    const u = o.join(`
`);
    s.lastIndex = 0;
    let h;
    for (; (h = s.exec(u)) !== null; ) {
      const c = u.substring(0, h.index), g = (c.match(/\n/g) || []).length, d = a + g, m = h[0].split(`
`), p = m.length, _ = d + p - 1, L = c.lastIndexOf(`
`) + 1, A = h.index - L + 1, b = m[m.length - 1], E = p === 1 ? A + h[0].length : b.length + 1, x = {
        startLineNumber: d,
        startColumn: A,
        endLineNumber: _,
        endColumn: E
      }, S = (h.groups ?? {}).label ?? "", N = ((h.groups ?? {}).separator ?? "") !== "", T = {
        range: x,
        text: S,
        hasSeparatorLine: N,
        shouldBeInComments: !0
      };
      (T.text || T.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < T.range.startLineNumber) && n.push(T), s.lastIndex = h.index + h[0].length;
    }
  }
  return n;
}
function tf(e) {
  e = e.trim();
  const t = e.startsWith("-");
  return e = e.replace(Q0, ""), { text: e, hasSeparatorLine: t };
}
function xt(e) {
  return e === y.Slash || e === y.Backslash;
}
function Ul(e) {
  return e.replace(/[\\/]/g, se.sep);
}
function nf(e) {
  return e.indexOf("/") === -1 && (e = Ul(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function U1(e, t = se.sep) {
  if (!e)
    return "";
  const n = e.length, r = e.charCodeAt(0);
  if (xt(r)) {
    if (xt(e.charCodeAt(1)) && !xt(e.charCodeAt(2))) {
      let s = 3;
      const a = s;
      for (; s < n && !xt(e.charCodeAt(s)); s++)
        ;
      if (a !== s && !xt(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (xt(e.charCodeAt(s)))
            return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (rf(r) && e.charCodeAt(1) === y.Colon)
    return xt(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let i = e.indexOf("://");
  if (i !== -1) {
    for (i += 3; i < n; i++)
      if (xt(e.charCodeAt(i)))
        return e.slice(0, i + 1);
  }
  return "";
}
function D1(e, t, n, r = pr) {
  if (e === t)
    return !0;
  if (!e || !t || t.length > e.length)
    return !1;
  if (n) {
    if (!rc(e, t))
      return !1;
    if (t.length === e.length)
      return !0;
    let s = t.length;
    return t.charAt(t.length - 1) === r && s--, e.charAt(s) === r;
  }
  return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
}
function rf(e) {
  return e >= y.A && e <= y.Z || e >= y.a && e <= y.z;
}
var Ee;
(function(e) {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatEditor = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.vscodeChatSession = "vscode-chat-session", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
})(Ee || (Ee = {}));
const sf = "tkn";
class af {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null), this._ports = /* @__PURE__ */ Object.create(null), this._connectionTokens = /* @__PURE__ */ Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
  }
  setPreferredWebSchema(t) {
    this._preferredWebSchema = t;
  }
  setDelegate(t) {
    this._delegate = t;
  }
  setServerRootPath(t, n) {
    this._serverRootPath = se.join(n ?? "/", lf(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return se.join(this._serverRootPath, Ee.vscodeRemoteResource);
  }
  set(t, n, r) {
    this._hosts[t] = n, this._ports[t] = r;
  }
  setConnectionToken(t, n) {
    this._connectionTokens[t] = n;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(t) {
    if (this._delegate)
      try {
        return this._delegate(t);
      } catch (l) {
        return Bn(l), t;
      }
    const n = t.authority;
    let r = this._hosts[n];
    r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
    const i = this._ports[n], s = this._connectionTokens[n];
    let a = `path=${encodeURIComponent(t.path)}`;
    return typeof s == "string" && (a += `&${sf}=${encodeURIComponent(s)}`), Oe.from({
      scheme: Hu ? this._preferredWebSchema : Ee.vscodeRemoteResource,
      authority: `${r}:${i}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const of = new af();
function lf(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const uf = "vscode-app", mn = class mn {
  constructor() {
    this.staticBrowserUris = new fi(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
  }
  registerAppResourcePathUrl(t, n) {
    this.appResourcePathUrls.set(t, n);
  }
  toUrl(t) {
    var r;
    let n = this.appResourcePathUrls.get(t);
    return typeof n == "function" && (n = n()), new URL(n ?? t, ((r = globalThis.location) == null ? void 0 : r.href) ?? import.meta.url).toString();
  }
  asBrowserUri(t) {
    const n = this.toUri(t);
    return this.uriToBrowserUri(n);
  }
  uriToBrowserUri(t) {
    return t.scheme === Ee.vscodeRemote ? of.rewrite(t) : t.scheme === Ee.file && (qu || ju === `${Ee.vscodeFileResource}://${mn.FALLBACK_AUTHORITY}`) ? t.with({
      scheme: Ee.vscodeFileResource,
      authority: t.authority || mn.FALLBACK_AUTHORITY,
      query: null,
      fragment: null
    }) : this.staticBrowserUris.get(t) ?? t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Ee.vscodeFileResource ? t.with({
      scheme: Ee.file,
      authority: t.authority !== mn.FALLBACK_AUTHORITY ? t.authority : null,
      query: null,
      fragment: null
    }) : t;
  }
  toUri(t) {
    if (Oe.isUri(t))
      return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n))
        return Oe.joinPath(Oe.parse(n, !0), t);
      const r = Xc(n, t);
      return Oe.file(r);
    }
    return Oe.parse(this.toUrl(t));
  }
  registerStaticBrowserUri(t, n) {
    return this.staticBrowserUris.set(t, n), Xn(() => {
      this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
    });
  }
  getRegisteredBrowserUris() {
    return this.staticBrowserUris.keys();
  }
};
mn.FALLBACK_AUTHORITY = uf;
let Ui = mn;
new Ui();
var F1;
(function(e) {
  const t = /* @__PURE__ */ new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
  ]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const n = "vscode-coi";
  function r(s) {
    let a;
    typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : Oe.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
    const l = a == null ? void 0 : a.get(n);
    if (l)
      return t.get(l);
  }
  e.getHeadersFromQuery = r;
  function i(s, a, l) {
    if (!globalThis.crossOriginIsolated)
      return;
    const o = a && l ? "3" : l ? "2" : "1";
    s instanceof URLSearchParams ? s.set(n, o) : s[n] = o;
  }
  e.addSearchParam = i;
})(F1 || (F1 = {}));
function mt(e) {
  return kr(e, !0);
}
class cf {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, n, r = !1) {
    return t === n ? 0 : ec(this.getComparisonKey(t, r), this.getComparisonKey(n, r));
  }
  isEqual(t, n, r = !1) {
    return t === n ? !0 : !t || !n ? !1 : this.getComparisonKey(t, r) === this.getComparisonKey(n, r);
  }
  getComparisonKey(t, n = !1) {
    return t.with({
      path: this._ignorePathCasing(t) ? t.path.toLowerCase() : void 0,
      fragment: n ? null : void 0
    }).toString();
  }
  ignorePathCasing(t) {
    return this._ignorePathCasing(t);
  }
  isEqualOrParent(t, n, r = !1) {
    if (t.scheme === n.scheme) {
      if (t.scheme === Ee.file)
        return D1(mt(t), mt(n), this._ignorePathCasing(t)) && t.query === n.query && (r || t.fragment === n.fragment);
      if (P1(t.authority, n.authority))
        return D1(t.path, n.path, this._ignorePathCasing(t), "/") && t.query === n.query && (r || t.fragment === n.fragment);
    }
    return !1;
  }
  joinPath(t, ...n) {
    return Oe.joinPath(t, ...n);
  }
  basenameOrAuthority(t) {
    return ff(t) || t.authority;
  }
  basename(t) {
    return se.basename(t.path);
  }
  extname(t) {
    return se.extname(t.path);
  }
  dirname(t) {
    if (t.path.length === 0)
      return t;
    let n;
    return t.scheme === Ee.file ? n = Oe.file(Qc(mt(t))).path : (n = se.dirname(t.path), t.authority && n.length && n.charCodeAt(0) !== y.Slash && (console.error(`dirname("${t.toString})) resulted in a relative path`), n = "/")), t.with({
      path: n
    });
  }
  normalizePath(t) {
    if (!t.path.length)
      return t;
    let n;
    return t.scheme === Ee.file ? n = Oe.file(zc(mt(t))).path : n = se.normalize(t.path), t.with({
      path: n
    });
  }
  relativePath(t, n) {
    if (t.scheme !== n.scheme || !P1(t.authority, n.authority))
      return;
    if (t.scheme === Ee.file) {
      const s = Yc(mt(t), mt(n));
      return xn ? Ul(s) : s;
    }
    let r = t.path || "/";
    const i = n.path || "/";
    if (this._ignorePathCasing(t)) {
      let s = 0;
      for (const a = Math.min(r.length, i.length); s < a && !(r.charCodeAt(s) !== i.charCodeAt(s) && r.charAt(s).toLowerCase() !== i.charAt(s).toLowerCase()); s++)
        ;
      r = i.substr(0, s) + r.substr(s);
    }
    return se.relative(r, i);
  }
  resolvePath(t, n) {
    if (t.scheme === Ee.file) {
      const r = Oe.file(Jc(mt(t), n));
      return t.with({
        authority: r.authority,
        path: r.path
      });
    }
    return n = nf(n), t.with({
      path: se.resolve(t.path, n)
    });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, n) {
    return t === n || t !== void 0 && n !== void 0 && nc(t, n);
  }
  hasTrailingPathSeparator(t, n = pr) {
    if (t.scheme === Ee.file) {
      const r = mt(t);
      return r.length > U1(r).length && r[r.length - 1] === n;
    } else {
      const r = t.path;
      return r.length > 1 && r.charCodeAt(r.length - 1) === y.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, n = pr) {
    return O1(t, n) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, n = pr) {
    let r = !1;
    if (t.scheme === Ee.file) {
      const i = mt(t);
      r = i !== void 0 && i.length === U1(i).length && i[i.length - 1] === n;
    } else {
      n = "/";
      const i = t.path;
      r = i.length === 1 && i.charCodeAt(i.length - 1) === y.Slash;
    }
    return !r && !O1(t, n) ? t.with({ path: t.path + "/" }) : t;
  }
}
const re = new cf(() => !1);
re.isEqual.bind(re);
re.isEqualOrParent.bind(re);
re.getComparisonKey.bind(re);
re.basenameOrAuthority.bind(re);
const ff = re.basename.bind(re);
re.extname.bind(re);
re.dirname.bind(re);
re.joinPath.bind(re);
re.normalizePath.bind(re);
re.relativePath.bind(re);
re.resolvePath.bind(re);
re.isAbsolutePath.bind(re);
const P1 = re.isEqualAuthority.bind(re), O1 = re.hasTrailingPathSeparator.bind(re);
re.removeTrailingPathSeparator.bind(re);
re.addTrailingPathSeparator.bind(re);
var B1;
(function(e) {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(n) {
    const r = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((a) => {
      const [l, o] = a.split(":");
      l && o && r.set(l, o);
    });
    const s = n.path.substring(0, n.path.indexOf(";"));
    return s && r.set(e.META_DATA_MIME, s), r;
  }
  e.parseMetaData = t;
})(B1 || (B1 = {}));
var V1;
(function(e) {
  e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(V1 || (V1 = {}));
var $1;
(function(e) {
  async function t(r) {
    let i;
    const s = await Promise.all(r.map((a) => a.then((l) => l, (l) => {
      i || (i = l);
    })));
    if (typeof i < "u")
      throw i;
    return s;
  }
  e.settled = t;
  function n(r) {
    return new Promise(async (i, s) => {
      try {
        await r(i, s);
      } catch (a) {
        s(a);
      }
    });
  }
  e.withAsyncBody = n;
})($1 || ($1 = {}));
var Ze;
(function(e) {
  e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(Ze || (Ze = {}));
const Se = class Se {
  static fromArray(t) {
    return new Se((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new Se(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new Se(async (n) => {
      await Promise.all(t.map(async (r) => n.emitOne(await r)));
    });
  }
  static merge(t) {
    return new Se(async (n) => {
      await Promise.all(t.map(async (r) => {
        for await (const i of r)
          n.emitOne(i);
      }));
    });
  }
  constructor(t, n) {
    this._state = Ze.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new Ge(), queueMicrotask(async () => {
      const r = {
        emitOne: (i) => this.emitOne(i),
        emitMany: (i) => this.emitMany(i),
        reject: (i) => this.reject(i)
      };
      try {
        await Promise.resolve(t(r)), this.resolve();
      } catch (i) {
        this.reject(i);
      } finally {
        r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return {
      next: async () => {
        do {
          if (this._state === Ze.DoneError)
            throw this._error;
          if (t < this._results.length)
            return { done: !1, value: this._results[t++] };
          if (this._state === Ze.DoneOK)
            return { done: !0, value: void 0 };
          await Lr.toPromise(this._onStateChanged.event);
        } while (!0);
      },
      return: async () => {
        var n;
        return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
      }
    };
  }
  static map(t, n) {
    return new Se(async (r) => {
      for await (const i of t)
        r.emitOne(n(i));
    });
  }
  map(t) {
    return Se.map(this, t);
  }
  static filter(t, n) {
    return new Se(async (r) => {
      for await (const i of t)
        n(i) && r.emitOne(i);
    });
  }
  filter(t) {
    return Se.filter(this, t);
  }
  static coalesce(t) {
    return Se.filter(t, (n) => !!n);
  }
  coalesce() {
    return Se.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const r of t)
      n.push(r);
    return n;
  }
  toPromise() {
    return Se.toPromise(this);
  }
  emitOne(t) {
    this._state === Ze.Initial && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === Ze.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === Ze.Initial && (this._state = Ze.DoneOK, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === Ze.Initial && (this._state = Ze.DoneError, this._error = t, this._onStateChanged.fire());
  }
};
Se.EMPTY = Se.fromArray([]);
let q1 = Se;
class hf {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, n) {
    t = Qt(t);
    const r = this.values, i = this.prefixSum, s = n.length;
    return s === 0 ? !1 : (this.values = new Uint32Array(r.length + s), this.values.set(r.subarray(0, t), 0), this.values.set(r.subarray(t), t + s), this.values.set(n, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  setValue(t, n) {
    return t = Qt(t), n = Qt(n), this.values[t] === n ? !1 : (this.values[t] = n, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
  }
  removeValues(t, n) {
    t = Qt(t), n = Qt(n);
    const r = this.values, i = this.prefixSum;
    if (t >= r.length)
      return !1;
    const s = r.length - t;
    return n >= s && (n = s), n === 0 ? !1 : (this.values = new Uint32Array(r.length - n), this.values.set(r.subarray(0, t), 0), this.values.set(r.subarray(t + n), t), this.prefixSum = new Uint32Array(this.values.length), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  getTotalSum() {
    return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
  }
  getPrefixSum(t) {
    return t < 0 ? 0 : (t = Qt(t), this._getPrefixSum(t));
  }
  _getPrefixSum(t) {
    if (t <= this.prefixSumValidIndex[0])
      return this.prefixSum[t];
    let n = this.prefixSumValidIndex[0] + 1;
    n === 0 && (this.prefixSum[0] = this.values[0], n++), t >= this.values.length && (t = this.values.length - 1);
    for (let r = n; r <= t; r++)
      this.prefixSum[r] = this.prefixSum[r - 1] + this.values[r];
    return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t), this.prefixSum[t];
  }
  getIndexOf(t) {
    t = Math.floor(t), this.getTotalSum();
    let n = 0, r = this.values.length - 1, i = 0, s = 0, a = 0;
    for (; n <= r; )
      if (i = n + (r - n) / 2 | 0, s = this.prefixSum[i], a = s - this.values[i], t < a)
        r = i - 1;
      else if (t >= s)
        n = i + 1;
      else
        break;
    return new gf(i, t - a);
  }
}
class gf {
  constructor(t, n) {
    this.index = t, this.remainder = n, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = n;
  }
}
class mf {
  constructor(t, n, r, i) {
    this._uri = t, this._lines = n, this._eol = r, this._versionId = i, this._lineStarts = null, this._cachedTextValue = null;
  }
  dispose() {
    this._lines.length = 0;
  }
  get version() {
    return this._versionId;
  }
  getText() {
    return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue;
  }
  onEvents(t) {
    t.eol && t.eol !== this._eol && (this._eol = t.eol, this._lineStarts = null);
    const n = t.changes;
    for (const r of n)
      this._acceptDeleteRange(r.range), this._acceptInsertText(new ee(r.range.startLineNumber, r.range.startColumn), r.text);
    this._versionId = t.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const t = this._eol.length, n = this._lines.length, r = new Uint32Array(n);
      for (let i = 0; i < n; i++)
        r[i] = this._lines[i].length + t;
      this._lineStarts = new hf(r);
    }
  }
  _setLineText(t, n) {
    this._lines[t] = n, this._lineStarts && this._lineStarts.setValue(t, this._lines[t].length + this._eol.length);
  }
  _acceptDeleteRange(t) {
    if (t.startLineNumber === t.endLineNumber) {
      if (t.startColumn === t.endColumn)
        return;
      this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.startLineNumber - 1].substring(t.endColumn - 1));
      return;
    }
    this._setLineText(t.startLineNumber - 1, this._lines[t.startLineNumber - 1].substring(0, t.startColumn - 1) + this._lines[t.endLineNumber - 1].substring(t.endColumn - 1)), this._lines.splice(t.startLineNumber, t.endLineNumber - t.startLineNumber), this._lineStarts && this._lineStarts.removeValues(t.startLineNumber, t.endLineNumber - t.startLineNumber);
  }
  _acceptInsertText(t, n) {
    if (n.length === 0)
      return;
    const r = hl(n);
    if (r.length === 1) {
      this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
      return;
    }
    r[r.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1), this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + r[0]);
    const i = new Uint32Array(r.length - 1);
    for (let s = 1; s < r.length; s++)
      this._lines.splice(t.lineNumber + s - 1, 0, r[s]), i[s - 1] = r[s].length + this._eol.length;
    this._lineStarts && this._lineStarts.insertValues(t.lineNumber, i);
  }
}
const df = "workerTextModelSync";
class pf {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(df, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new bf(Oe.parse(t.url), t.lines, t.EOL, t.versionId);
  }
  $acceptModelChanged(t, n) {
    if (!this._models[t])
      return;
    this._models[t].onEvents(n);
  }
  $acceptRemovedModel(t) {
    this._models[t] && delete this._models[t];
  }
}
class bf extends mf {
  get uri() {
    return this._uri;
  }
  get eol() {
    return this._eol;
  }
  getValue() {
    return this.getText();
  }
  findMatches(t) {
    const n = [];
    for (let r = 0; r < this._lines.length; r++) {
      const i = this._lines[r], s = this.offsetAt(new ee(r + 1, 1)), a = i.matchAll(t);
      for (const l of a)
        (l.index || l.index === 0) && (l.index = l.index + s), n.push(l);
    }
    return n;
  }
  getLinesContent() {
    return this._lines.slice(0);
  }
  getLineCount() {
    return this._lines.length;
  }
  getLineContent(t) {
    return this._lines[t - 1];
  }
  getWordAtPosition(t, n) {
    const r = us(t.column, El(n), this._lines[t.lineNumber - 1], 0);
    return r ? new G(
      t.lineNumber,
      r.startColumn,
      t.lineNumber,
      r.endColumn
    ) : null;
  }
  getWordUntilPosition(t, n) {
    const r = this.getWordAtPosition(t, n);
    return r ? {
      word: this._lines[t.lineNumber - 1].substring(r.startColumn - 1, t.column - 1),
      startColumn: r.startColumn,
      endColumn: t.column
    } : {
      word: "",
      startColumn: t.column,
      endColumn: t.column
    };
  }
  words(t) {
    const n = this._lines, r = this._wordenize.bind(this);
    let i = 0, s = "", a = 0, l = [];
    return {
      *[Symbol.iterator]() {
        for (; ; )
          if (a < l.length) {
            const o = s.substring(l[a].start, l[a].end);
            a += 1, yield o;
          } else if (i < n.length)
            s = n[i], l = r(s, t), a = 0, i += 1;
          else
            break;
      }
    };
  }
  getLineWords(t, n) {
    const r = this._lines[t - 1], i = this._wordenize(r, n), s = [];
    for (const a of i)
      s.push({
        word: r.substring(a.start, a.end),
        startColumn: a.start + 1,
        endColumn: a.end + 1
      });
    return s;
  }
  _wordenize(t, n) {
    const r = [];
    let i;
    for (n.lastIndex = 0; (i = n.exec(t)) && i[0].length !== 0; )
      r.push({ start: i.index, end: i.index + i[0].length });
    return r;
  }
  getValueInRange(t) {
    if (t = this._validateRange(t), t.startLineNumber === t.endLineNumber)
      return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1);
    const n = this._eol, r = t.startLineNumber - 1, i = t.endLineNumber - 1, s = [];
    s.push(this._lines[r].substring(t.startColumn - 1));
    for (let a = r + 1; a < i; a++)
      s.push(this._lines[a]);
    return s.push(this._lines[i].substring(0, t.endColumn - 1)), s.join(n);
  }
  offsetAt(t) {
    return t = this._validatePosition(t), this._ensureLineStarts(), this._lineStarts.getPrefixSum(t.lineNumber - 2) + (t.column - 1);
  }
  positionAt(t) {
    t = Math.floor(t), t = Math.max(0, t), this._ensureLineStarts();
    const n = this._lineStarts.getIndexOf(t), r = this._lines[n.index].length;
    return {
      lineNumber: 1 + n.index,
      column: 1 + Math.min(n.remainder, r)
    };
  }
  _validateRange(t) {
    const n = this._validatePosition({ lineNumber: t.startLineNumber, column: t.startColumn }), r = this._validatePosition({ lineNumber: t.endLineNumber, column: t.endColumn });
    return n.lineNumber !== t.startLineNumber || n.column !== t.startColumn || r.lineNumber !== t.endLineNumber || r.column !== t.endColumn ? {
      startLineNumber: n.lineNumber,
      startColumn: n.column,
      endLineNumber: r.lineNumber,
      endColumn: r.column
    } : t;
  }
  _validatePosition(t) {
    if (!ee.isIPosition(t))
      throw new Error("bad position");
    let { lineNumber: n, column: r } = t, i = !1;
    if (n < 1)
      n = 1, r = 1, i = !0;
    else if (n > this._lines.length)
      n = this._lines.length, r = this._lines[n - 1].length + 1, i = !0;
    else {
      const s = this._lines[n - 1].length + 1;
      r < 1 ? (r = 1, i = !0) : r > s && (r = s, i = !0);
    }
    return i ? { lineNumber: n, column: r } : t;
  }
}
class Dl {
  constructor(t) {
    this.replacements = t;
    let n = -1;
    for (const r of t) {
      if (!(r.replaceRange.start >= n))
        throw new he(
          `Edits must be disjoint and sorted. Found ${r} after ${n}`
        );
      n = r.replaceRange.endExclusive;
    }
  }
  equals(t) {
    if (this.replacements.length !== t.replacements.length)
      return !1;
    for (let n = 0; n < this.replacements.length; n++)
      if (!this.replacements[n].equals(t.replacements[n]))
        return !1;
    return !0;
  }
  toString() {
    return `[${this.replacements.map((n) => n.toString()).join(", ")}]`;
  }
  normalize() {
    const t = [];
    let n;
    for (const r of this.replacements)
      if (!(r.getNewLength() === 0 && r.replaceRange.length === 0)) {
        if (n && n.replaceRange.endExclusive === r.replaceRange.start) {
          const i = n.tryJoinTouching(r);
          if (i) {
            n = i;
            continue;
          }
        }
        n && t.push(n), n = r;
      }
    return n && t.push(n), this._createNew(t);
  }
  compose(t) {
    const n = this.normalize(), r = t.normalize();
    if (n.isEmpty())
      return r;
    if (r.isEmpty())
      return n;
    const i = [...n.replacements], s = [];
    let a = 0;
    for (const l of r.replacements) {
      for (; ; ) {
        const c = i[0];
        if (!c || c.replaceRange.start + a + c.getNewLength() >= l.replaceRange.start)
          break;
        i.shift(), s.push(c), a += c.getNewLength() - c.replaceRange.length;
      }
      const o = a;
      let u, h;
      for (; ; ) {
        const c = i[0];
        if (!c || c.replaceRange.start + a > l.replaceRange.endExclusive)
          break;
        u || (u = c), h = c, i.shift(), a += c.getNewLength() - c.replaceRange.length;
      }
      if (!u)
        s.push(l.delta(-a));
      else {
        const c = Math.min(u.replaceRange.start, l.replaceRange.start - o), g = l.replaceRange.start - (u.replaceRange.start + o);
        if (g > 0) {
          const _ = u.slice(W.emptyAt(c), new W(0, g));
          s.push(_);
        }
        if (!h)
          throw new he("Invariant violation: lastIntersecting is undefined");
        const d = h.replaceRange.endExclusive + a - l.replaceRange.endExclusive;
        if (d > 0) {
          const _ = h.slice(W.ofStartAndLength(h.replaceRange.endExclusive, 0), new W(
            h.getNewLength() - d,
            h.getNewLength()
          ));
          i.unshift(_), a -= _.getNewLength() - _.replaceRange.length;
        }
        const m = new W(c, l.replaceRange.endExclusive - a), p = l.slice(m, new W(0, l.getNewLength()));
        s.push(p);
      }
    }
    for (; ; ) {
      const l = i.shift();
      if (!l)
        break;
      s.push(l);
    }
    return this._createNew(s).normalize();
  }
  decomposeSplit(t) {
    const n = [], r = [];
    let i = 0;
    for (const s of this.replacements)
      t(s) ? (n.push(s), i += s.getNewLength() - s.replaceRange.length) : r.push(s.slice(s.replaceRange.delta(i), new W(0, s.getNewLength())));
    return { e1: this._createNew(n), e2: this._createNew(r) };
  }
  getNewRanges() {
    const t = [];
    let n = 0;
    for (const r of this.replacements)
      t.push(W.ofStartAndLength(r.replaceRange.start + n, r.getNewLength())), n += r.getLengthDelta();
    return t;
  }
  getJoinedReplaceRange() {
    if (this.replacements.length !== 0)
      return this.replacements[0].replaceRange.join(this.replacements.at(-1).replaceRange);
  }
  isEmpty() {
    return this.replacements.length === 0;
  }
  getLengthDelta() {
    return du(this.replacements, (t) => t.getLengthDelta());
  }
  getNewDataLength(t) {
    return t + this.getLengthDelta();
  }
  applyToOffset(t) {
    let n = 0;
    for (const r of this.replacements)
      if (r.replaceRange.start <= t) {
        if (t < r.replaceRange.endExclusive)
          return r.replaceRange.start + n;
        n += r.getNewLength() - r.replaceRange.length;
      } else
        break;
    return t + n;
  }
  applyToOffsetRange(t) {
    return new W(
      this.applyToOffset(t.start),
      this.applyToOffset(t.endExclusive)
    );
  }
  applyInverseToOffset(t) {
    let n = 0;
    for (const r of this.replacements) {
      const i = r.getNewLength();
      if (r.replaceRange.start <= t - n) {
        if (t - n < r.replaceRange.start + i)
          return r.replaceRange.start;
        n += i - r.replaceRange.length;
      } else
        break;
    }
    return t - n;
  }
  applyToOffsetOrUndefined(t) {
    let n = 0;
    for (const r of this.replacements)
      if (r.replaceRange.start <= t) {
        if (t < r.replaceRange.endExclusive)
          return;
        n += r.getNewLength() - r.replaceRange.length;
      } else
        break;
    return t + n;
  }
  applyToOffsetRangeOrUndefined(t) {
    const n = this.applyToOffsetOrUndefined(t.start);
    if (n === void 0)
      return;
    const r = this.applyToOffsetOrUndefined(t.endExclusive);
    if (r !== void 0)
      return new W(n, r);
  }
}
class _f {
  constructor(t) {
    this.replaceRange = t;
  }
  delta(t) {
    return this.slice(this.replaceRange.delta(t), new W(0, this.getNewLength()));
  }
  getLengthDelta() {
    return this.getNewLength() - this.replaceRange.length;
  }
  toString() {
    return `{ ${this.replaceRange.toString()} -> ${this.getNewLength()} }`;
  }
  get isEmpty() {
    return this.getNewLength() === 0 && this.replaceRange.length === 0;
  }
  getRangeAfterReplace() {
    return new W(this.replaceRange.start, this.replaceRange.start + this.getNewLength());
  }
}
const Ht = class Ht extends Dl {
  static create(t) {
    return new Ht(t);
  }
  static single(t) {
    return new Ht([t]);
  }
  _createNew(t) {
    return new Ht(t);
  }
};
Ht.empty = new Ht([]);
let H1 = Ht;
class Fl extends Dl {
  get TReplacement() {
    throw new Error("TReplacement is not defined for BaseStringEdit");
  }
  static composeOrUndefined(t) {
    if (t.length === 0)
      return;
    let n = t[0];
    for (let r = 1; r < t.length; r++)
      n = n.compose(t[r]);
    return n;
  }
  static trySwap(t, n) {
    const r = t.inverseOnSlice((a, l) => " ".repeat(l - a)), i = n.tryRebase(r);
    if (!i)
      return;
    const s = t.tryRebase(i);
    if (s)
      return { e1: i, e2: s };
  }
  apply(t) {
    const n = [];
    let r = 0;
    for (const i of this.replacements)
      n.push(t.substring(r, i.replaceRange.start)), n.push(i.newText), r = i.replaceRange.endExclusive;
    return n.push(t.substring(r)), n.join("");
  }
  inverseOnSlice(t) {
    const n = [];
    let r = 0;
    for (const i of this.replacements)
      n.push(_e.replace(W.ofStartAndLength(i.replaceRange.start + r, i.newText.length), t(i.replaceRange.start, i.replaceRange.endExclusive))), r += i.newText.length - i.replaceRange.length;
    return new at(n);
  }
  inverse(t) {
    return this.inverseOnSlice((n, r) => t.substring(n, r));
  }
  rebaseSkipConflicting(t) {
    return this._tryRebase(t, !1);
  }
  tryRebase(t) {
    return this._tryRebase(t, !0);
  }
  _tryRebase(t, n) {
    const r = [];
    let i = 0, s = 0, a = 0;
    for (; s < this.replacements.length || i < t.replacements.length; ) {
      const l = t.replacements[i], o = this.replacements[s];
      if (o)
        if (!l)
          r.push(new _e(o.replaceRange.delta(a), o.newText)), s++;
        else if (o.replaceRange.intersectsOrTouches(l.replaceRange)) {
          if (s++, n)
            return;
        } else o.replaceRange.start < l.replaceRange.start ? (r.push(new _e(o.replaceRange.delta(a), o.newText)), s++) : (i++, a += l.newText.length - l.replaceRange.length);
      else break;
    }
    return new at(r);
  }
  toJson() {
    return this.replacements.map((t) => t.toJson());
  }
  isNeutralOn(t) {
    return this.replacements.every((n) => n.isNeutralOn(t));
  }
  removeCommonSuffixPrefix(t) {
    const n = [];
    for (const r of this.replacements) {
      const i = r.removeCommonSuffixPrefix(t);
      i.isEmpty || n.push(i);
    }
    return new at(n);
  }
  normalizeEOL(t) {
    return new at(this.replacements.map((n) => n.normalizeEOL(t)));
  }
  normalizeOnSource(t) {
    const n = this.apply(t), i = _e.replace(W.ofLength(t.length), n).removeCommonSuffixAndPrefix(t);
    return i.isEmpty ? at.empty : i.toEdit();
  }
  removeCommonSuffixAndPrefix(t) {
    return this._createNew(this.replacements.map((n) => n.removeCommonSuffixAndPrefix(t))).normalize();
  }
  applyOnText(t) {
    return new Kn(this.apply(t.value));
  }
  mapData(t) {
    return new Di(this.replacements.map((n) => new ot(n.replaceRange, n.newText, t(n))));
  }
}
class Pl extends _f {
  constructor(t, n) {
    super(t), this.newText = n;
  }
  getNewLength() {
    return this.newText.length;
  }
  toString() {
    return `${this.replaceRange} -> "${this.newText}"`;
  }
  replace(t) {
    return t.substring(0, this.replaceRange.start) + this.newText + t.substring(this.replaceRange.endExclusive);
  }
  isNeutralOn(t) {
    return this.newText === t.substring(this.replaceRange.start, this.replaceRange.endExclusive);
  }
  removeCommonSuffixPrefix(t) {
    const n = t.substring(this.replaceRange.start, this.replaceRange.endExclusive), r = xr(n, this.newText), i = Math.min(n.length - r, this.newText.length - r, Ar(n, this.newText)), s = new W(
      this.replaceRange.start + r,
      this.replaceRange.endExclusive - i
    ), a = this.newText.substring(r, this.newText.length - i);
    return new _e(s, a);
  }
  normalizeEOL(t) {
    const n = this.newText.replace(/\r\n|\n/g, t);
    return new _e(this.replaceRange, n);
  }
  removeCommonSuffixAndPrefix(t) {
    return this.removeCommonSuffix(t).removeCommonPrefix(t);
  }
  removeCommonPrefix(t) {
    const n = this.replaceRange.substring(t), r = xr(n, this.newText);
    return r === 0 ? this : this.slice(this.replaceRange.deltaStart(r), new W(r, this.newText.length));
  }
  removeCommonSuffix(t) {
    const n = this.replaceRange.substring(t), r = Ar(n, this.newText);
    return r === 0 ? this : this.slice(this.replaceRange.deltaEnd(-r), new W(0, this.newText.length - r));
  }
  toEdit() {
    return new at([this]);
  }
  toJson() {
    return {
      txt: this.newText,
      pos: this.replaceRange.start,
      len: this.replaceRange.length
    };
  }
}
const Me = class Me extends Fl {
  static create(t) {
    return new Me(t);
  }
  static single(t) {
    return new Me([t]);
  }
  static replace(t, n) {
    return new Me([new _e(t, n)]);
  }
  static insert(t, n) {
    return new Me([new _e(W.emptyAt(t), n)]);
  }
  static delete(t) {
    return new Me([new _e(t, "")]);
  }
  static fromJson(t) {
    return new Me(t.map(_e.fromJson));
  }
  static compose(t) {
    if (t.length === 0)
      return Me.empty;
    let n = t[0];
    for (let r = 1; r < t.length; r++)
      n = n.compose(t[r]);
    return n;
  }
  static composeSequentialReplacements(t) {
    let n = Me.empty, r = [];
    for (const i of t) {
      const s = r.at(-1);
      !s || i.replaceRange.isBefore(s.replaceRange) ? r.push(i) : (n = n.compose(Me.create(r.reverse())), r = [i]);
    }
    return n = n.compose(Me.create(r.reverse())), n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new Me(t);
  }
};
Me.empty = new Me([]);
let at = Me;
class _e extends Pl {
  static insert(t, n) {
    return new _e(W.emptyAt(t), n);
  }
  static replace(t, n) {
    return new _e(t, n);
  }
  static delete(t) {
    return new _e(t, "");
  }
  static fromJson(t) {
    return new _e(W.ofStartAndLength(t.pos, t.len), t.txt);
  }
  equals(t) {
    return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
  }
  tryJoinTouching(t) {
    return new _e(
      this.replaceRange.joinRightTouching(t.replaceRange),
      this.newText + t.newText
    );
  }
  slice(t, n) {
    return new _e(
      t,
      n ? n.substring(this.newText) : this.newText
    );
  }
}
const Ke = class Ke extends Fl {
  static create(t) {
    return new Ke(t);
  }
  static single(t) {
    return new Ke([t]);
  }
  static replace(t, n, r) {
    return new Ke([new ot(t, n, r)]);
  }
  static insert(t, n, r) {
    return new Ke([new ot(W.emptyAt(t), n, r)]);
  }
  static delete(t, n) {
    return new Ke([new ot(t, "", n)]);
  }
  static compose(t) {
    if (t.length === 0)
      return Ke.empty;
    let n = t[0];
    for (let r = 1; r < t.length; r++)
      n = n.compose(t[r]);
    return n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new Ke(t);
  }
  toStringEdit() {
    return new at(this.replacements.map((t) => new _e(t.replaceRange, t.newText)));
  }
};
Ke.empty = new Ke([]);
let Di = Ke;
class ot extends Pl {
  static insert(t, n, r) {
    return new ot(W.emptyAt(t), n, r);
  }
  static replace(t, n, r) {
    return new ot(t, n, r);
  }
  static delete(t, n) {
    return new ot(t, "", n);
  }
  constructor(t, n, r) {
    super(t, n), this.data = r;
  }
  equals(t) {
    return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText && this.data === t.data;
  }
  tryJoinTouching(t) {
    const n = this.data.join(t.data);
    if (n !== void 0)
      return new ot(
        this.replaceRange.joinRightTouching(t.replaceRange),
        this.newText + t.newText,
        n
      );
  }
  slice(t, n) {
    return new ot(
      t,
      n ? n.substring(this.newText) : this.newText,
      this.data
    );
  }
}
N0({
  StringEdit: at,
  StringReplacement: _e,
  TextReplacement: Ae,
  TextEdit: fs,
  TextLength: Ut
});
const St = class St {
  constructor(t = null) {
    this._foreignModule = t, this._workerTextModelSyncServer = new pf();
  }
  dispose() {
  }
  async $ping() {
    return "pong";
  }
  _getModel(t) {
    return this._workerTextModelSyncServer.getModel(t);
  }
  getModels() {
    return this._workerTextModelSyncServer.getModels();
  }
  $acceptNewModel(t) {
    this._workerTextModelSyncServer.$acceptNewModel(t);
  }
  $acceptModelChanged(t, n) {
    this._workerTextModelSyncServer.$acceptModelChanged(t, n);
  }
  $acceptRemovedModel(t) {
    this._workerTextModelSyncServer.$acceptRemovedModel(t);
  }
  async $computeUnicodeHighlights(t, n, r) {
    const i = this._getModel(t);
    return i ? w0.computeUnicodeHighlights(i, n, r) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(t, n) {
    const r = this._getModel(t);
    return r ? K0(r, n) : [];
  }
  async $computeDiff(t, n, r, i) {
    const s = this._getModel(t), a = this._getModel(n);
    return !s || !a ? null : St.computeDiff(s, a, r, i);
  }
  static computeDiff(t, n, r, i) {
    const s = i === "advanced" ? In.getDefault() : In.getLegacy(), a = t.getLinesContent(), l = n.getLinesContent(), o = s.computeDiff(a, l, r), u = o.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
    function h(c) {
      return c.map(
        (g) => {
          var d;
          return [g.original.startLineNumber, g.original.endLineNumberExclusive, g.modified.startLineNumber, g.modified.endLineNumberExclusive, (d = g.innerChanges) == null ? void 0 : d.map((m) => [
            m.originalRange.startLineNumber,
            m.originalRange.startColumn,
            m.originalRange.endLineNumber,
            m.originalRange.endColumn,
            m.modifiedRange.startLineNumber,
            m.modifiedRange.startColumn,
            m.modifiedRange.endLineNumber,
            m.modifiedRange.endColumn
          ])];
        }
      );
    }
    return {
      identical: u,
      quitEarly: o.hitTimeout,
      changes: h(o.changes),
      moves: o.moves.map((c) => [
        c.lineRangeMapping.original.startLineNumber,
        c.lineRangeMapping.original.endLineNumberExclusive,
        c.lineRangeMapping.modified.startLineNumber,
        c.lineRangeMapping.modified.endLineNumberExclusive,
        h(c.changes)
      ])
    };
  }
  static _modelsAreIdentical(t, n) {
    const r = t.getLineCount(), i = n.getLineCount();
    if (r !== i)
      return !1;
    for (let s = 1; s <= r; s++) {
      const a = t.getLineContent(s), l = n.getLineContent(s);
      if (a !== l)
        return !1;
    }
    return !0;
  }
  async $computeDirtyDiff(t, n, r) {
    const i = this._getModel(t), s = this._getModel(n);
    if (!i || !s)
      return null;
    const a = i.getLinesContent(), l = s.getLinesContent();
    return new Sl(a, l, {
      shouldComputeCharChanges: !1,
      shouldPostProcessCharChanges: !1,
      shouldIgnoreTrimWhitespace: r,
      shouldMakePrettyDiff: !0,
      maxComputationTime: 1e3
    }).computeDiff().changes;
  }
  $computeStringDiff(t, n, r, i) {
    const s = i === "advanced" ? In.getDefault() : In.getLegacy(), a = new Kn(t), l = a.getLines(), o = new Kn(n), u = o.getLines(), h = s.computeDiff(l, u, { ignoreTrimWhitespace: !1, maxComputationTimeMs: r.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), c = ut.toTextEdit(h.changes, o);
    return a.getTransformer().getStringEdit(c).toJson();
  }
  async $computeMoreMinimalEdits(t, n, r) {
    const i = this._getModel(t);
    if (!i)
      return n;
    const s = [];
    let a;
    n = n.slice(0).sort((o, u) => {
      if (o.range && u.range)
        return G.compareRangesUsingStarts(o.range, u.range);
      const h = o.range ? 0 : 1, c = u.range ? 0 : 1;
      return h - c;
    });
    let l = 0;
    for (let o = 1; o < n.length; o++)
      G.getEndPosition(n[l].range).equals(G.getStartPosition(n[o].range)) ? (n[l].range = G.fromPositions(G.getStartPosition(n[l].range), G.getEndPosition(n[o].range)), n[l].text += n[o].text) : (l++, n[l] = n[o]);
    n.length = l + 1;
    for (let { range: o, text: u, eol: h } of n) {
      if (typeof h == "number" && (a = h), G.isEmpty(o) && !u)
        continue;
      const c = i.getValueInRange(o);
      if (u = u.replace(/\r\n|\n|\r/g, i.eol), c === u)
        continue;
      if (Math.max(u.length, c.length) > St._diffLimit) {
        s.push({ range: o, text: u });
        continue;
      }
      const g = Rc(c, u, r), d = i.offsetAt(G.lift(o).getStartPosition());
      for (const m of g) {
        const p = i.positionAt(d + m.originalStart), _ = i.positionAt(d + m.originalStart + m.originalLength), L = {
          text: u.substr(m.modifiedStart, m.modifiedLength),
          range: { startLineNumber: p.lineNumber, startColumn: p.column, endLineNumber: _.lineNumber, endColumn: _.column }
        };
        i.getValueInRange(L.range) !== L.text && s.push(L);
      }
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  $computeHumanReadableDiff(t, n, r) {
    const i = this._getModel(t);
    if (!i)
      return n;
    const s = [];
    let a;
    n = n.slice(0).sort((l, o) => {
      if (l.range && o.range)
        return G.compareRangesUsingStarts(l.range, o.range);
      const u = l.range ? 0 : 1, h = o.range ? 0 : 1;
      return u - h;
    });
    for (let { range: l, text: o, eol: u } of n) {
      let p = function(L, A) {
        return new ee(
          L.lineNumber + A.lineNumber - 1,
          A.lineNumber === 1 ? L.column + A.column - 1 : A.column
        );
      }, _ = function(L, A) {
        const b = [];
        for (let E = A.startLineNumber; E <= A.endLineNumber; E++) {
          const x = L[E - 1];
          E === A.startLineNumber && E === A.endLineNumber ? b.push(x.substring(A.startColumn - 1, A.endColumn - 1)) : E === A.startLineNumber ? b.push(x.substring(A.startColumn - 1)) : E === A.endLineNumber ? b.push(x.substring(0, A.endColumn - 1)) : b.push(x);
        }
        return b;
      };
      if (typeof u == "number" && (a = u), G.isEmpty(l) && !o)
        continue;
      const h = i.getValueInRange(l);
      if (o = o.replace(/\r\n|\n|\r/g, i.eol), h === o)
        continue;
      if (Math.max(o.length, h.length) > St._diffLimit) {
        s.push({ range: l, text: o });
        continue;
      }
      const c = h.split(/\r\n|\n|\r/), g = o.split(/\r\n|\n|\r/), d = In.getDefault().computeDiff(c, g, r), m = G.lift(l).getStartPosition();
      for (const L of d.changes)
        if (L.innerChanges)
          for (const A of L.innerChanges)
            s.push({
              range: G.fromPositions(p(m, A.originalRange.getStartPosition()), p(m, A.originalRange.getEndPosition())),
              text: _(g, A.modifiedRange).join(i.eol)
            });
        else
          throw new he("The experimental diff algorithm always produces inner changes");
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(t) {
    const n = this._getModel(t);
    return n ? Mc(n) : null;
  }
  async $computeDefaultDocumentColors(t) {
    const n = this._getModel(t);
    return n ? Y0(n) : null;
  }
  async $textualSuggest(t, n, r, i) {
    const s = new Jr(), a = new RegExp(r, i), l = /* @__PURE__ */ new Set();
    e: for (const o of t) {
      const u = this._getModel(o);
      if (u) {
        for (const h of u.words(a))
          if (!(h === n || !isNaN(Number(h))) && (l.add(h), l.size > St._suggestionsLimit))
            break e;
      }
    }
    return { words: Array.from(l), duration: s.elapsed() };
  }
  async $computeWordRanges(t, n, r, i) {
    const s = this._getModel(t);
    if (!s)
      return /* @__PURE__ */ Object.create(null);
    const a = new RegExp(r, i), l = /* @__PURE__ */ Object.create(null);
    for (let o = n.startLineNumber; o < n.endLineNumber; o++) {
      const u = s.getLineWords(o, a);
      for (const h of u) {
        if (!isNaN(Number(h.word)))
          continue;
        let c = l[h.word];
        c || (c = [], l[h.word] = c), c.push({
          startLineNumber: o,
          startColumn: h.startColumn,
          endLineNumber: o,
          endColumn: h.endColumn
        });
      }
    }
    return l;
  }
  async $navigateValueSet(t, n, r, i, s) {
    const a = this._getModel(t);
    if (!a)
      return null;
    const l = new RegExp(i, s);
    n.startColumn === n.endColumn && (n = {
      startLineNumber: n.startLineNumber,
      startColumn: n.startColumn,
      endLineNumber: n.endLineNumber,
      endColumn: n.endColumn + 1
    });
    const o = a.getValueInRange(n), u = a.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, l);
    if (!u)
      return null;
    const h = a.getValueInRange(u);
    return _i.INSTANCE.navigateValueSet(n, o, u, h, r);
  }
  $fmr(t, n) {
    if (!this._foreignModule || typeof this._foreignModule[t] != "function")
      return Promise.reject(new Error("Missing requestHandler or method: " + t));
    try {
      return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n));
    } catch (r) {
      return Promise.reject(r);
    }
  }
};
St._diffLimit = 1e5, St._suggestionsLimit = 1e4;
let Dr = St;
typeof importScripts == "function" && (globalThis.monaco = c0());
dc(() => new Dr(null));
const Gn = class Gn {
  static getChannel(t) {
    return t.getChannel(Gn.CHANNEL_NAME);
  }
  static setChannel(t, n) {
    t.setChannel(Gn.CHANNEL_NAME, n);
  }
};
Gn.CHANNEL_NAME = "editorWorkerHost";
let Fi = Gn;
function wf(e) {
  let t;
  const n = _l((r) => {
    const i = Fi.getChannel(r), a = {
      host: new Proxy({}, {
        get(l, o, u) {
          if (o !== "then") {
            if (typeof o != "string")
              throw new Error("Not supported");
            return (...h) => i.$fhr(o, h);
          }
        }
      }),
      getMirrorModels: () => n.requestHandler.getModels()
    };
    return t = e(a), new Dr(t);
  });
  return t;
}
function vf(e) {
  wf((t) => {
    let n;
    return new Proxy({}, {
      get(r, i) {
        if (i === "$initialize")
          return async (a) => {
            n || (n = e(t, a));
          };
        const s = n == null ? void 0 : n[i];
        return typeof s == "function" ? s.bind(n) : s;
      }
    });
  });
}
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.2(undefined)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
function gs(e, t = !1) {
  const n = e.length;
  let r = 0, i = "", s = 0, a = 16, l = 0, o = 0, u = 0, h = 0, c = 0;
  function g(b, E) {
    let x = 0, S = 0;
    for (; x < b; ) {
      let N = e.charCodeAt(r);
      if (N >= 48 && N <= 57)
        S = S * 16 + N - 48;
      else if (N >= 65 && N <= 70)
        S = S * 16 + N - 65 + 10;
      else if (N >= 97 && N <= 102)
        S = S * 16 + N - 97 + 10;
      else
        break;
      r++, x++;
    }
    return x < b && (S = -1), S;
  }
  function d(b) {
    r = b, i = "", s = 0, a = 16, c = 0;
  }
  function m() {
    let b = r;
    if (e.charCodeAt(r) === 48)
      r++;
    else
      for (r++; r < e.length && nn(e.charCodeAt(r)); )
        r++;
    if (r < e.length && e.charCodeAt(r) === 46)
      if (r++, r < e.length && nn(e.charCodeAt(r)))
        for (r++; r < e.length && nn(e.charCodeAt(r)); )
          r++;
      else
        return c = 3, e.substring(b, r);
    let E = r;
    if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101))
      if (r++, (r < e.length && e.charCodeAt(r) === 43 || e.charCodeAt(r) === 45) && r++, r < e.length && nn(e.charCodeAt(r))) {
        for (r++; r < e.length && nn(e.charCodeAt(r)); )
          r++;
        E = r;
      } else
        c = 3;
    return e.substring(b, E);
  }
  function p() {
    let b = "", E = r;
    for (; ; ) {
      if (r >= n) {
        b += e.substring(E, r), c = 2;
        break;
      }
      const x = e.charCodeAt(r);
      if (x === 34) {
        b += e.substring(E, r), r++;
        break;
      }
      if (x === 92) {
        if (b += e.substring(E, r), r++, r >= n) {
          c = 2;
          break;
        }
        switch (e.charCodeAt(r++)) {
          case 34:
            b += '"';
            break;
          case 92:
            b += "\\";
            break;
          case 47:
            b += "/";
            break;
          case 98:
            b += "\b";
            break;
          case 102:
            b += "\f";
            break;
          case 110:
            b += `
`;
            break;
          case 114:
            b += "\r";
            break;
          case 116:
            b += "	";
            break;
          case 117:
            const N = g(4);
            N >= 0 ? b += String.fromCharCode(N) : c = 4;
            break;
          default:
            c = 5;
        }
        E = r;
        continue;
      }
      if (x >= 0 && x <= 31)
        if (Fn(x)) {
          b += e.substring(E, r), c = 2;
          break;
        } else
          c = 6;
      r++;
    }
    return b;
  }
  function _() {
    if (i = "", c = 0, s = r, o = l, h = u, r >= n)
      return s = n, a = 17;
    let b = e.charCodeAt(r);
    if (ri(b)) {
      do
        r++, i += String.fromCharCode(b), b = e.charCodeAt(r);
      while (ri(b));
      return a = 15;
    }
    if (Fn(b))
      return r++, i += String.fromCharCode(b), b === 13 && e.charCodeAt(r) === 10 && (r++, i += `
`), l++, u = r, a = 14;
    switch (b) {
      case 123:
        return r++, a = 1;
      case 125:
        return r++, a = 2;
      case 91:
        return r++, a = 3;
      case 93:
        return r++, a = 4;
      case 58:
        return r++, a = 6;
      case 44:
        return r++, a = 5;
      case 34:
        return r++, i = p(), a = 10;
      case 47:
        const E = r - 1;
        if (e.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !Fn(e.charCodeAt(r)); )
            r++;
          return i = e.substring(E, r), a = 12;
        }
        if (e.charCodeAt(r + 1) === 42) {
          r += 2;
          const x = n - 1;
          let S = !1;
          for (; r < x; ) {
            const N = e.charCodeAt(r);
            if (N === 42 && e.charCodeAt(r + 1) === 47) {
              r += 2, S = !0;
              break;
            }
            r++, Fn(N) && (N === 13 && e.charCodeAt(r) === 10 && r++, l++, u = r);
          }
          return S || (r++, c = 1), i = e.substring(E, r), a = 13;
        }
        return i += String.fromCharCode(b), r++, a = 16;
      case 45:
        if (i += String.fromCharCode(b), r++, r === n || !nn(e.charCodeAt(r)))
          return a = 16;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return i += m(), a = 11;
      default:
        for (; r < n && L(b); )
          r++, b = e.charCodeAt(r);
        if (s !== r) {
          switch (i = e.substring(s, r), i) {
            case "true":
              return a = 8;
            case "false":
              return a = 9;
            case "null":
              return a = 7;
          }
          return a = 16;
        }
        return i += String.fromCharCode(b), r++, a = 16;
    }
  }
  function L(b) {
    if (ri(b) || Fn(b))
      return !1;
    switch (b) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function A() {
    let b;
    do
      b = _();
    while (b >= 12 && b <= 15);
    return b;
  }
  return {
    setPosition: d,
    getPosition: () => r,
    scan: t ? A : _,
    getToken: () => a,
    getTokenValue: () => i,
    getTokenOffset: () => s,
    getTokenLength: () => r - s,
    getTokenStartLine: () => o,
    getTokenStartCharacter: () => s - h,
    getTokenError: () => c
  };
}
function ri(e) {
  return e === 32 || e === 9;
}
function Fn(e) {
  return e === 10 || e === 13;
}
function nn(e) {
  return e >= 48 && e <= 57;
}
var W1;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(W1 || (W1 = {}));
var We = new Array(20).fill(0).map((e, t) => " ".repeat(t)), rn = 200, j1 = {
  " ": {
    "\n": new Array(rn).fill(0).map((e, t) => `
` + " ".repeat(t)),
    "\r": new Array(rn).fill(0).map((e, t) => "\r" + " ".repeat(t)),
    "\r\n": new Array(rn).fill(0).map((e, t) => `\r
` + " ".repeat(t))
  },
  "	": {
    "\n": new Array(rn).fill(0).map((e, t) => `
` + "	".repeat(t)),
    "\r": new Array(rn).fill(0).map((e, t) => "\r" + "	".repeat(t)),
    "\r\n": new Array(rn).fill(0).map((e, t) => `\r
` + "	".repeat(t))
  }
}, Lf = [`
`, "\r", `\r
`];
function Nf(e, t, n) {
  let r, i, s, a, l;
  if (t) {
    for (a = t.offset, l = a + t.length, s = a; s > 0 && !G1(e, s - 1); )
      s--;
    let x = l;
    for (; x < e.length && !G1(e, x); )
      x++;
    i = e.substring(s, x), r = xf(i, n);
  } else
    i = e, r = 0, s = 0, a = 0, l = e.length;
  const o = Af(n, e), u = Lf.includes(o);
  let h = 0, c = 0, g;
  n.insertSpaces ? g = We[n.tabSize || 4] ?? sn(We[1], n.tabSize || 4) : g = "	";
  const d = g === "	" ? "	" : " ";
  let m = gs(i, !1), p = !1;
  function _() {
    if (h > 1)
      return sn(o, h) + sn(g, r + c);
    const x = g.length * (r + c);
    return !u || x > j1[d][o].length ? o + sn(g, r + c) : x <= 0 ? o : j1[d][o][x];
  }
  function L() {
    let x = m.scan();
    for (h = 0; x === 15 || x === 14; )
      x === 14 && n.keepLines ? h += 1 : x === 14 && (h = 1), x = m.scan();
    return p = x === 16 || m.getTokenError() !== 0, x;
  }
  const A = [];
  function b(x, S, N) {
    !p && (!t || S < l && N > a) && e.substring(S, N) !== x && A.push({ offset: S, length: N - S, content: x });
  }
  let E = L();
  if (n.keepLines && h > 0 && b(sn(o, h), 0, 0), E !== 17) {
    let x = m.getTokenOffset() + s, S = g.length * r < 20 && n.insertSpaces ? We[g.length * r] : sn(g, r);
    b(S, s, x);
  }
  for (; E !== 17; ) {
    let x = m.getTokenOffset() + m.getTokenLength() + s, S = L(), N = "", T = !1;
    for (; h === 0 && (S === 12 || S === 13); ) {
      let q = m.getTokenOffset() + s;
      b(We[1], x, q), x = m.getTokenOffset() + m.getTokenLength() + s, T = S === 12, N = T ? _() : "", S = L();
    }
    if (S === 2)
      E !== 1 && c--, n.keepLines && h > 0 || !n.keepLines && E !== 1 ? N = _() : n.keepLines && (N = We[1]);
    else if (S === 4)
      E !== 3 && c--, n.keepLines && h > 0 || !n.keepLines && E !== 3 ? N = _() : n.keepLines && (N = We[1]);
    else {
      switch (E) {
        case 3:
        case 1:
          c++, n.keepLines && h > 0 || !n.keepLines ? N = _() : N = We[1];
          break;
        case 5:
          n.keepLines && h > 0 || !n.keepLines ? N = _() : N = We[1];
          break;
        case 12:
          N = _();
          break;
        case 13:
          h > 0 ? N = _() : T || (N = We[1]);
          break;
        case 6:
          n.keepLines && h > 0 ? N = _() : T || (N = We[1]);
          break;
        case 10:
          n.keepLines && h > 0 ? N = _() : S === 6 && !T && (N = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          n.keepLines && h > 0 ? N = _() : (S === 12 || S === 13) && !T ? N = We[1] : S !== 5 && S !== 17 && (p = !0);
          break;
        case 16:
          p = !0;
          break;
      }
      h > 0 && (S === 12 || S === 13) && (N = _());
    }
    S === 17 && (n.keepLines && h > 0 ? N = _() : N = n.insertFinalNewline ? o : "");
    const D = m.getTokenOffset() + s;
    b(N, x, D), E = S;
  }
  return A;
}
function sn(e, t) {
  let n = "";
  for (let r = 0; r < t; r++)
    n += e;
  return n;
}
function xf(e, t) {
  let n = 0, r = 0;
  const i = t.tabSize || 4;
  for (; n < e.length; ) {
    let s = e.charAt(n);
    if (s === We[1])
      r++;
    else if (s === "	")
      r += i;
    else
      break;
    n++;
  }
  return Math.floor(r / i);
}
function Af(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t.charAt(n);
    if (r === "\r")
      return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
    if (r === `
`)
      return `
`;
  }
  return e && e.eol || `
`;
}
function G1(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var Fr;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(Fr || (Fr = {}));
function Ef(e, t = [], n = Fr.DEFAULT) {
  let r = null, i = [];
  const s = [];
  function a(o) {
    Array.isArray(i) ? i.push(o) : r !== null && (i[r] = o);
  }
  return yf(e, {
    onObjectBegin: () => {
      const o = {};
      a(o), s.push(i), i = o, r = null;
    },
    onObjectProperty: (o) => {
      r = o;
    },
    onObjectEnd: () => {
      i = s.pop();
    },
    onArrayBegin: () => {
      const o = [];
      a(o), s.push(i), i = o, r = null;
    },
    onArrayEnd: () => {
      i = s.pop();
    },
    onLiteralValue: a,
    onError: (o, u, h) => {
      t.push({ error: o, offset: u, length: h });
    }
  }, n), i[0];
}
function Ol(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = Ol(e.parent);
  if (e.parent.type === "property") {
    const n = e.parent.children[0].value;
    t.push(n);
  } else if (e.parent.type === "array") {
    const n = e.parent.children.indexOf(e);
    n !== -1 && t.push(n);
  }
  return t;
}
function Pi(e) {
  switch (e.type) {
    case "array":
      return e.children.map(Pi);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let n of e.children) {
        const r = n.children[1];
        r && (t[n.children[0].value] = Pi(r));
      }
      return t;
    case "null":
    case "string":
    case "number":
    case "boolean":
      return e.value;
    default:
      return;
  }
}
function Rf(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function Bl(e, t, n = !1) {
  if (Rf(e, t, n)) {
    const r = e.children;
    if (Array.isArray(r))
      for (let i = 0; i < r.length && r[i].offset <= t; i++) {
        const s = Bl(r[i], t, n);
        if (s)
          return s;
      }
    return e;
  }
}
function yf(e, t, n = Fr.DEFAULT) {
  const r = gs(e, !1), i = [];
  function s(k) {
    return k ? () => k(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => !0;
  }
  function a(k) {
    return k ? () => k(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) : () => !0;
  }
  function l(k) {
    return k ? (I) => k(I, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => !0;
  }
  function o(k) {
    return k ? (I) => k(I, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) : () => !0;
  }
  const u = a(t.onObjectBegin), h = o(t.onObjectProperty), c = s(t.onObjectEnd), g = a(t.onArrayBegin), d = s(t.onArrayEnd), m = o(t.onLiteralValue), p = l(t.onSeparator), _ = s(t.onComment), L = l(t.onError), A = n && n.disallowComments, b = n && n.allowTrailingComma;
  function E() {
    for (; ; ) {
      const k = r.scan();
      switch (r.getTokenError()) {
        case 4:
          x(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          x(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          x(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          A || x(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          x(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          x(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (k) {
        case 12:
        case 13:
          A ? x(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : _();
          break;
        case 16:
          x(
            1
            /* ParseErrorCode.InvalidSymbol */
          );
          break;
        case 15:
        case 14:
          break;
        default:
          return k;
      }
    }
  }
  function x(k, I = [], U = []) {
    if (L(k), I.length + U.length > 0) {
      let V = r.getToken();
      for (; V !== 17; ) {
        if (I.indexOf(V) !== -1) {
          E();
          break;
        } else if (U.indexOf(V) !== -1)
          break;
        V = E();
      }
    }
  }
  function S(k) {
    const I = r.getTokenValue();
    return k ? m(I) : (h(I), i.push(I)), E(), !0;
  }
  function N() {
    switch (r.getToken()) {
      case 11:
        const k = r.getTokenValue();
        let I = Number(k);
        isNaN(I) && (x(
          2
          /* ParseErrorCode.InvalidNumberFormat */
        ), I = 0), m(I);
        break;
      case 7:
        m(null);
        break;
      case 8:
        m(!0);
        break;
      case 9:
        m(!1);
        break;
      default:
        return !1;
    }
    return E(), !0;
  }
  function T() {
    return r.getToken() !== 10 ? (x(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (S(!1), r.getToken() === 6 ? (p(":"), E(), F() || x(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : x(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), i.pop(), !0);
  }
  function D() {
    u(), E();
    let k = !1;
    for (; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (k || x(4, [], []), p(","), E(), r.getToken() === 2 && b)
          break;
      } else k && x(6, [], []);
      T() || x(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), k = !0;
    }
    return c(), r.getToken() !== 2 ? x(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : E(), !0;
  }
  function q() {
    g(), E();
    let k = !0, I = !1;
    for (; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (I || x(4, [], []), p(","), E(), r.getToken() === 4 && b)
          break;
      } else I && x(6, [], []);
      k ? (i.push(0), k = !1) : i[i.length - 1]++, F() || x(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), I = !0;
    }
    return d(), k || i.pop(), r.getToken() !== 4 ? x(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : E(), !0;
  }
  function F() {
    switch (r.getToken()) {
      case 3:
        return q();
      case 1:
        return D();
      case 10:
        return S(!0);
      default:
        return N();
    }
  }
  return E(), r.getToken() === 17 ? n.allowEmptyContent ? !0 : (x(4, [], []), !1) : F() ? (r.getToken() !== 17 && x(9, [], []), !0) : (x(4, [], []), !1);
}
var zt = gs, z1;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(z1 || (z1 = {}));
var X1;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(X1 || (X1 = {}));
var Tf = Ef, kf = Bl, Sf = Ol, Mf = Pi, J1;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(J1 || (J1 = {}));
function If(e, t, n) {
  return Nf(e, t, n);
}
function _n(e, t) {
  if (e === t)
    return !0;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t))
    return !1;
  let n, r;
  if (Array.isArray(e)) {
    if (e.length !== t.length)
      return !1;
    for (n = 0; n < e.length; n++)
      if (!_n(e[n], t[n]))
        return !1;
  } else {
    const i = [];
    for (r in e)
      i.push(r);
    i.sort();
    const s = [];
    for (r in t)
      s.push(r);
    if (s.sort(), !_n(i, s))
      return !1;
    for (n = 0; n < i.length; n++)
      if (!_n(e[i[n]], t[i[n]]))
        return !1;
  }
  return !0;
}
function Re(e) {
  return typeof e == "number";
}
function Qe(e) {
  return typeof e < "u";
}
function lt(e) {
  return typeof e == "boolean";
}
function Vl(e) {
  return typeof e == "string";
}
function kt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Uf(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function er(e, t) {
  const n = e.length - t.length;
  return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : !1;
}
function Pr(e) {
  let t = "";
  Uf(e, "(?i)") && (e = e.substring(4), t = "i");
  try {
    return new RegExp(e, t + "u");
  } catch {
    try {
      return new RegExp(e, t);
    } catch {
      return;
    }
  }
}
function Y1(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    t++;
    const r = e.charCodeAt(n);
    55296 <= r && r <= 56319 && n++;
  }
  return t;
}
var Q1;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(Q1 || (Q1 = {}));
var Oi;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(Oi || (Oi = {}));
var Z1;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Z1 || (Z1 = {}));
var Or;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Or || (Or = {}));
var ce;
(function(e) {
  function t(r, i) {
    return r === Number.MAX_VALUE && (r = Or.MAX_VALUE), i === Number.MAX_VALUE && (i = Or.MAX_VALUE), { line: r, character: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.objectLiteral(i) && M.uinteger(i.line) && M.uinteger(i.character);
  }
  e.is = n;
})(ce || (ce = {}));
var K;
(function(e) {
  function t(r, i, s, a) {
    if (M.uinteger(r) && M.uinteger(i) && M.uinteger(s) && M.uinteger(a))
      return { start: ce.create(r, i), end: ce.create(s, a) };
    if (ce.is(r) && ce.is(i))
      return { start: r, end: i };
    throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`);
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.objectLiteral(i) && ce.is(i.start) && ce.is(i.end);
  }
  e.is = n;
})(K || (K = {}));
var En;
(function(e) {
  function t(r, i) {
    return { uri: r, range: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.objectLiteral(i) && K.is(i.range) && (M.string(i.uri) || M.undefined(i.uri));
  }
  e.is = n;
})(En || (En = {}));
var K1;
(function(e) {
  function t(r, i, s, a) {
    return { targetUri: r, targetRange: i, targetSelectionRange: s, originSelectionRange: a };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.objectLiteral(i) && K.is(i.targetRange) && M.string(i.targetUri) && K.is(i.targetSelectionRange) && (K.is(i.originSelectionRange) || M.undefined(i.originSelectionRange));
  }
  e.is = n;
})(K1 || (K1 = {}));
var Bi;
(function(e) {
  function t(r, i, s, a) {
    return {
      red: r,
      green: i,
      blue: s,
      alpha: a
    };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && M.numberRange(i.red, 0, 1) && M.numberRange(i.green, 0, 1) && M.numberRange(i.blue, 0, 1) && M.numberRange(i.alpha, 0, 1);
  }
  e.is = n;
})(Bi || (Bi = {}));
var C1;
(function(e) {
  function t(r, i) {
    return {
      range: r,
      color: i
    };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && K.is(i.range) && Bi.is(i.color);
  }
  e.is = n;
})(C1 || (C1 = {}));
var eo;
(function(e) {
  function t(r, i, s) {
    return {
      label: r,
      textEdit: i,
      additionalTextEdits: s
    };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && M.string(i.label) && (M.undefined(i.textEdit) || ft.is(i)) && (M.undefined(i.additionalTextEdits) || M.typedArray(i.additionalTextEdits, ft.is));
  }
  e.is = n;
})(eo || (eo = {}));
var Wn;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(Wn || (Wn = {}));
var to;
(function(e) {
  function t(r, i, s, a, l, o) {
    const u = {
      startLine: r,
      endLine: i
    };
    return M.defined(s) && (u.startCharacter = s), M.defined(a) && (u.endCharacter = a), M.defined(l) && (u.kind = l), M.defined(o) && (u.collapsedText = o), u;
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && M.uinteger(i.startLine) && M.uinteger(i.startLine) && (M.undefined(i.startCharacter) || M.uinteger(i.startCharacter)) && (M.undefined(i.endCharacter) || M.uinteger(i.endCharacter)) && (M.undefined(i.kind) || M.string(i.kind));
  }
  e.is = n;
})(to || (to = {}));
var Vi;
(function(e) {
  function t(r, i) {
    return {
      location: r,
      message: i
    };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && En.is(i.location) && M.string(i.message);
  }
  e.is = n;
})(Vi || (Vi = {}));
var He;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(He || (He = {}));
var no;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(no || (no = {}));
var ro;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(r) && M.string(r.href);
  }
  e.is = t;
})(ro || (ro = {}));
var vt;
(function(e) {
  function t(r, i, s, a, l, o) {
    let u = { range: r, message: i };
    return M.defined(s) && (u.severity = s), M.defined(a) && (u.code = a), M.defined(l) && (u.source = l), M.defined(o) && (u.relatedInformation = o), u;
  }
  e.create = t;
  function n(r) {
    var i;
    let s = r;
    return M.defined(s) && K.is(s.range) && M.string(s.message) && (M.number(s.severity) || M.undefined(s.severity)) && (M.integer(s.code) || M.string(s.code) || M.undefined(s.code)) && (M.undefined(s.codeDescription) || M.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (M.string(s.source) || M.undefined(s.source)) && (M.undefined(s.relatedInformation) || M.typedArray(s.relatedInformation, Vi.is));
  }
  e.is = n;
})(vt || (vt = {}));
var Rn;
(function(e) {
  function t(r, i, ...s) {
    let a = { title: r, command: i };
    return M.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.string(i.title) && M.string(i.command);
  }
  e.is = n;
})(Rn || (Rn = {}));
var ft;
(function(e) {
  function t(s, a) {
    return { range: s, newText: a };
  }
  e.replace = t;
  function n(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  e.insert = n;
  function r(s) {
    return { range: s, newText: "" };
  }
  e.del = r;
  function i(s) {
    const a = s;
    return M.objectLiteral(a) && M.string(a.newText) && K.is(a.range);
  }
  e.is = i;
})(ft || (ft = {}));
var $i;
(function(e) {
  function t(r, i, s) {
    const a = { label: r };
    return i !== void 0 && (a.needsConfirmation = i), s !== void 0 && (a.description = s), a;
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && M.string(i.label) && (M.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) && (M.string(i.description) || i.description === void 0);
  }
  e.is = n;
})($i || ($i = {}));
var yn;
(function(e) {
  function t(n) {
    const r = n;
    return M.string(r);
  }
  e.is = t;
})(yn || (yn = {}));
var io;
(function(e) {
  function t(s, a, l) {
    return { range: s, newText: a, annotationId: l };
  }
  e.replace = t;
  function n(s, a, l) {
    return { range: { start: s, end: s }, newText: a, annotationId: l };
  }
  e.insert = n;
  function r(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  e.del = r;
  function i(s) {
    const a = s;
    return ft.is(a) && ($i.is(a.annotationId) || yn.is(a.annotationId));
  }
  e.is = i;
})(io || (io = {}));
var qi;
(function(e) {
  function t(r, i) {
    return { textDocument: r, edits: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && zi.is(i.textDocument) && Array.isArray(i.edits);
  }
  e.is = n;
})(qi || (qi = {}));
var Hi;
(function(e) {
  function t(r, i, s) {
    let a = {
      kind: "create",
      uri: r
    };
    return i !== void 0 && (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return i && i.kind === "create" && M.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || M.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || M.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || yn.is(i.annotationId));
  }
  e.is = n;
})(Hi || (Hi = {}));
var Wi;
(function(e) {
  function t(r, i, s, a) {
    let l = {
      kind: "rename",
      oldUri: r,
      newUri: i
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (l.options = s), a !== void 0 && (l.annotationId = a), l;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return i && i.kind === "rename" && M.string(i.oldUri) && M.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || M.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || M.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || yn.is(i.annotationId));
  }
  e.is = n;
})(Wi || (Wi = {}));
var ji;
(function(e) {
  function t(r, i, s) {
    let a = {
      kind: "delete",
      uri: r
    };
    return i !== void 0 && (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) && (a.options = i), s !== void 0 && (a.annotationId = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return i && i.kind === "delete" && M.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || M.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || M.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || yn.is(i.annotationId));
  }
  e.is = n;
})(ji || (ji = {}));
var Gi;
(function(e) {
  function t(n) {
    let r = n;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => M.string(i.kind) ? Hi.is(i) || Wi.is(i) || ji.is(i) : qi.is(i)));
  }
  e.is = t;
})(Gi || (Gi = {}));
var so;
(function(e) {
  function t(r) {
    return { uri: r };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.string(i.uri);
  }
  e.is = n;
})(so || (so = {}));
var ao;
(function(e) {
  function t(r, i) {
    return { uri: r, version: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.string(i.uri) && M.integer(i.version);
  }
  e.is = n;
})(ao || (ao = {}));
var zi;
(function(e) {
  function t(r, i) {
    return { uri: r, version: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.string(i.uri) && (i.version === null || M.integer(i.version));
  }
  e.is = n;
})(zi || (zi = {}));
var oo;
(function(e) {
  function t(r, i, s, a) {
    return { uri: r, languageId: i, version: s, text: a };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.string(i.uri) && M.string(i.languageId) && M.integer(i.version) && M.string(i.text);
  }
  e.is = n;
})(oo || (oo = {}));
var Jt;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
  function t(n) {
    const r = n;
    return r === e.PlainText || r === e.Markdown;
  }
  e.is = t;
})(Jt || (Jt = {}));
var tr;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(n) && Jt.is(r.kind) && M.string(r.value);
  }
  e.is = t;
})(tr || (tr = {}));
var qe;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(qe || (qe = {}));
var pe;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(pe || (pe = {}));
var lo;
(function(e) {
  e.Deprecated = 1;
})(lo || (lo = {}));
var uo;
(function(e) {
  function t(r, i, s) {
    return { newText: r, insert: i, replace: s };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return i && M.string(i.newText) && K.is(i.insert) && K.is(i.replace);
  }
  e.is = n;
})(uo || (uo = {}));
var co;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(co || (co = {}));
var fo;
(function(e) {
  function t(n) {
    const r = n;
    return r && (M.string(r.detail) || r.detail === void 0) && (M.string(r.description) || r.description === void 0);
  }
  e.is = t;
})(fo || (fo = {}));
var Xi;
(function(e) {
  function t(n) {
    return { label: n };
  }
  e.create = t;
})(Xi || (Xi = {}));
var ho;
(function(e) {
  function t(n, r) {
    return { items: n || [], isIncomplete: !!r };
  }
  e.create = t;
})(ho || (ho = {}));
var Br;
(function(e) {
  function t(r) {
    return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  e.fromPlainText = t;
  function n(r) {
    const i = r;
    return M.string(i) || M.objectLiteral(i) && M.string(i.language) && M.string(i.value);
  }
  e.is = n;
})(Br || (Br = {}));
var go;
(function(e) {
  function t(n) {
    let r = n;
    return !!r && M.objectLiteral(r) && (tr.is(r.contents) || Br.is(r.contents) || M.typedArray(r.contents, Br.is)) && (n.range === void 0 || K.is(n.range));
  }
  e.is = t;
})(go || (go = {}));
var mo;
(function(e) {
  function t(n, r) {
    return r ? { label: n, documentation: r } : { label: n };
  }
  e.create = t;
})(mo || (mo = {}));
var po;
(function(e) {
  function t(n, r, ...i) {
    let s = { label: n };
    return M.defined(r) && (s.documentation = r), M.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  e.create = t;
})(po || (po = {}));
var bo;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(bo || (bo = {}));
var _o;
(function(e) {
  function t(n, r) {
    let i = { range: n };
    return M.number(r) && (i.kind = r), i;
  }
  e.create = t;
})(_o || (_o = {}));
var rt;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(rt || (rt = {}));
var wo;
(function(e) {
  e.Deprecated = 1;
})(wo || (wo = {}));
var vo;
(function(e) {
  function t(n, r, i, s, a) {
    let l = {
      name: n,
      kind: r,
      location: { uri: s, range: i }
    };
    return a && (l.containerName = a), l;
  }
  e.create = t;
})(vo || (vo = {}));
var Lo;
(function(e) {
  function t(n, r, i, s) {
    return s !== void 0 ? { name: n, kind: r, location: { uri: i, range: s } } : { name: n, kind: r, location: { uri: i } };
  }
  e.create = t;
})(Lo || (Lo = {}));
var No;
(function(e) {
  function t(r, i, s, a, l, o) {
    let u = {
      name: r,
      detail: i,
      kind: s,
      range: a,
      selectionRange: l
    };
    return o !== void 0 && (u.children = o), u;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return i && M.string(i.name) && M.number(i.kind) && K.is(i.range) && K.is(i.selectionRange) && (i.detail === void 0 || M.string(i.detail)) && (i.deprecated === void 0 || M.boolean(i.deprecated)) && (i.children === void 0 || Array.isArray(i.children)) && (i.tags === void 0 || Array.isArray(i.tags));
  }
  e.is = n;
})(No || (No = {}));
var xo;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(xo || (xo = {}));
var Vr;
(function(e) {
  e.Invoked = 1, e.Automatic = 2;
})(Vr || (Vr = {}));
var Ao;
(function(e) {
  function t(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.typedArray(i.diagnostics, vt.is) && (i.only === void 0 || M.typedArray(i.only, M.string)) && (i.triggerKind === void 0 || i.triggerKind === Vr.Invoked || i.triggerKind === Vr.Automatic);
  }
  e.is = n;
})(Ao || (Ao = {}));
var Eo;
(function(e) {
  function t(r, i, s) {
    let a = { title: r }, l = !0;
    return typeof i == "string" ? (l = !1, a.kind = i) : Rn.is(i) ? a.command = i : a.edit = i, l && s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return i && M.string(i.title) && (i.diagnostics === void 0 || M.typedArray(i.diagnostics, vt.is)) && (i.kind === void 0 || M.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || Rn.is(i.command)) && (i.isPreferred === void 0 || M.boolean(i.isPreferred)) && (i.edit === void 0 || Gi.is(i.edit));
  }
  e.is = n;
})(Eo || (Eo = {}));
var Ro;
(function(e) {
  function t(r, i) {
    let s = { range: r };
    return M.defined(i) && (s.data = i), s;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && K.is(i.range) && (M.undefined(i.command) || Rn.is(i.command));
  }
  e.is = n;
})(Ro || (Ro = {}));
var yo;
(function(e) {
  function t(r, i) {
    return { tabSize: r, insertSpaces: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.uinteger(i.tabSize) && M.boolean(i.insertSpaces);
  }
  e.is = n;
})(yo || (yo = {}));
var To;
(function(e) {
  function t(r, i, s) {
    return { range: r, target: i, data: s };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && K.is(i.range) && (M.undefined(i.target) || M.string(i.target));
  }
  e.is = n;
})(To || (To = {}));
var $r;
(function(e) {
  function t(r, i) {
    return { range: r, parent: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.objectLiteral(i) && K.is(i.range) && (i.parent === void 0 || e.is(i.parent));
  }
  e.is = n;
})($r || ($r = {}));
var ko;
(function(e) {
  e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
})(ko || (ko = {}));
var So;
(function(e) {
  e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
})(So || (So = {}));
var Mo;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  e.is = t;
})(Mo || (Mo = {}));
var Io;
(function(e) {
  function t(r, i) {
    return { range: r, text: i };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return i != null && K.is(i.range) && M.string(i.text);
  }
  e.is = n;
})(Io || (Io = {}));
var Uo;
(function(e) {
  function t(r, i, s) {
    return { range: r, variableName: i, caseSensitiveLookup: s };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return i != null && K.is(i.range) && M.boolean(i.caseSensitiveLookup) && (M.string(i.variableName) || i.variableName === void 0);
  }
  e.is = n;
})(Uo || (Uo = {}));
var Do;
(function(e) {
  function t(r, i) {
    return { range: r, expression: i };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return i != null && K.is(i.range) && (M.string(i.expression) || i.expression === void 0);
  }
  e.is = n;
})(Do || (Do = {}));
var Fo;
(function(e) {
  function t(r, i) {
    return { frameId: r, stoppedLocation: i };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.defined(i) && K.is(r.stoppedLocation);
  }
  e.is = n;
})(Fo || (Fo = {}));
var Ji;
(function(e) {
  e.Type = 1, e.Parameter = 2;
  function t(n) {
    return n === 1 || n === 2;
  }
  e.is = t;
})(Ji || (Ji = {}));
var Yi;
(function(e) {
  function t(r) {
    return { value: r };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && (i.tooltip === void 0 || M.string(i.tooltip) || tr.is(i.tooltip)) && (i.location === void 0 || En.is(i.location)) && (i.command === void 0 || Rn.is(i.command));
  }
  e.is = n;
})(Yi || (Yi = {}));
var Po;
(function(e) {
  function t(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && ce.is(i.position) && (M.string(i.label) || M.typedArray(i.label, Yi.is)) && (i.kind === void 0 || Ji.is(i.kind)) && i.textEdits === void 0 || M.typedArray(i.textEdits, ft.is) && (i.tooltip === void 0 || M.string(i.tooltip) || tr.is(i.tooltip)) && (i.paddingLeft === void 0 || M.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || M.boolean(i.paddingRight));
  }
  e.is = n;
})(Po || (Po = {}));
var Oo;
(function(e) {
  function t(n) {
    return { kind: "snippet", value: n };
  }
  e.createSnippet = t;
})(Oo || (Oo = {}));
var Bo;
(function(e) {
  function t(n, r, i, s) {
    return { insertText: n, filterText: r, range: i, command: s };
  }
  e.create = t;
})(Bo || (Bo = {}));
var Vo;
(function(e) {
  function t(n) {
    return { items: n };
  }
  e.create = t;
})(Vo || (Vo = {}));
var $o;
(function(e) {
  e.Invoked = 0, e.Automatic = 1;
})($o || ($o = {}));
var qo;
(function(e) {
  function t(n, r) {
    return { range: n, text: r };
  }
  e.create = t;
})(qo || (qo = {}));
var Ho;
(function(e) {
  function t(n, r) {
    return { triggerKind: n, selectedCompletionInfo: r };
  }
  e.create = t;
})(Ho || (Ho = {}));
var Wo;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(r) && Oi.is(r.uri) && M.string(r.name);
  }
  e.is = t;
})(Wo || (Wo = {}));
var jo;
(function(e) {
  function t(s, a, l, o) {
    return new Df(s, a, l, o);
  }
  e.create = t;
  function n(s) {
    let a = s;
    return !!(M.defined(a) && M.string(a.uri) && (M.undefined(a.languageId) || M.string(a.languageId)) && M.uinteger(a.lineCount) && M.func(a.getText) && M.func(a.positionAt) && M.func(a.offsetAt));
  }
  e.is = n;
  function r(s, a) {
    let l = s.getText(), o = i(a, (h, c) => {
      let g = h.range.start.line - c.range.start.line;
      return g === 0 ? h.range.start.character - c.range.start.character : g;
    }), u = l.length;
    for (let h = o.length - 1; h >= 0; h--) {
      let c = o[h], g = s.offsetAt(c.range.start), d = s.offsetAt(c.range.end);
      if (d <= u)
        l = l.substring(0, g) + c.newText + l.substring(d, l.length);
      else
        throw new Error("Overlapping edit");
      u = g;
    }
    return l;
  }
  e.applyEdits = r;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const l = s.length / 2 | 0, o = s.slice(0, l), u = s.slice(l);
    i(o, a), i(u, a);
    let h = 0, c = 0, g = 0;
    for (; h < o.length && c < u.length; )
      a(o[h], u[c]) <= 0 ? s[g++] = o[h++] : s[g++] = u[c++];
    for (; h < o.length; )
      s[g++] = o[h++];
    for (; c < u.length; )
      s[g++] = u[c++];
    return s;
  }
})(jo || (jo = {}));
var Df = class {
  constructor(e, t, n, r) {
    this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
      return this._content.substring(t, n);
    }
    return this._content;
  }
  update(e, t) {
    this._content = e.text, this._version = t, this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let e = [], t = this._content, n = !0;
      for (let r = 0; r < t.length; r++) {
        n && (e.push(r), n = !1);
        let i = t.charAt(r);
        n = i === "\r" || i === `
`, i === "\r" && r + 1 < t.length && t.charAt(r + 1) === `
` && r++;
      }
      n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let t = this.getLineOffsets(), n = 0, r = t.length;
    if (r === 0)
      return ce.create(0, e);
    for (; n < r; ) {
      let s = Math.floor((n + r) / 2);
      t[s] > e ? r = s : n = s + 1;
    }
    let i = n - 1;
    return ce.create(i, e - t[i]);
  }
  offsetAt(e) {
    let t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, r), n);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
}, M;
(function(e) {
  const t = Object.prototype.toString;
  function n(d) {
    return typeof d < "u";
  }
  e.defined = n;
  function r(d) {
    return typeof d > "u";
  }
  e.undefined = r;
  function i(d) {
    return d === !0 || d === !1;
  }
  e.boolean = i;
  function s(d) {
    return t.call(d) === "[object String]";
  }
  e.string = s;
  function a(d) {
    return t.call(d) === "[object Number]";
  }
  e.number = a;
  function l(d, m, p) {
    return t.call(d) === "[object Number]" && m <= d && d <= p;
  }
  e.numberRange = l;
  function o(d) {
    return t.call(d) === "[object Number]" && -2147483648 <= d && d <= 2147483647;
  }
  e.integer = o;
  function u(d) {
    return t.call(d) === "[object Number]" && 0 <= d && d <= 2147483647;
  }
  e.uinteger = u;
  function h(d) {
    return t.call(d) === "[object Function]";
  }
  e.func = h;
  function c(d) {
    return d !== null && typeof d == "object";
  }
  e.objectLiteral = c;
  function g(d, m) {
    return Array.isArray(d) && d.every(m);
  }
  e.typedArray = g;
})(M || (M = {}));
var Go = class Qi {
  constructor(t, n, r, i) {
    this._uri = t, this._languageId = n, this._version = r, this._content = i, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(t) {
    if (t) {
      const n = this.offsetAt(t.start), r = this.offsetAt(t.end);
      return this._content.substring(n, r);
    }
    return this._content;
  }
  update(t, n) {
    for (let r of t)
      if (Qi.isIncremental(r)) {
        const i = $l(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const l = Math.max(i.start.line, 0), o = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const h = zo(r.text, !1, s);
        if (o - l === h.length)
          for (let g = 0, d = h.length; g < d; g++)
            u[g + l + 1] = h[g];
        else
          h.length < 1e4 ? u.splice(l + 1, o - l, ...h) : this._lineOffsets = u = u.slice(0, l + 1).concat(h, u.slice(o + 1));
        const c = r.text.length - (a - s);
        if (c !== 0)
          for (let g = l + 1 + h.length, d = u.length; g < d; g++)
            u[g] = u[g] + c;
      } else if (Qi.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = zo(this._content, !0)), this._lineOffsets;
  }
  positionAt(t) {
    t = Math.max(Math.min(t, this._content.length), 0);
    let n = this.getLineOffsets(), r = 0, i = n.length;
    if (i === 0)
      return { line: 0, character: t };
    for (; r < i; ) {
      let a = Math.floor((r + i) / 2);
      n[a] > t ? i = a : r = a + 1;
    }
    let s = r - 1;
    return { line: s, character: t - n[s] };
  }
  offsetAt(t) {
    let n = this.getLineOffsets();
    if (t.line >= n.length)
      return this._content.length;
    if (t.line < 0)
      return 0;
    let r = n[t.line], i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
    return Math.max(Math.min(r + t.character, i), r);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(t) {
    let n = t;
    return n != null && typeof n.text == "string" && n.range !== void 0 && (n.rangeLength === void 0 || typeof n.rangeLength == "number");
  }
  static isFull(t) {
    let n = t;
    return n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0;
  }
}, tt;
(function(e) {
  function t(i, s, a, l) {
    return new Go(i, s, a, l);
  }
  e.create = t;
  function n(i, s, a) {
    if (i instanceof Go)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  e.update = n;
  function r(i, s) {
    let a = i.getText(), l = Zi(s.map(Ff), (h, c) => {
      let g = h.range.start.line - c.range.start.line;
      return g === 0 ? h.range.start.character - c.range.start.character : g;
    }), o = 0;
    const u = [];
    for (const h of l) {
      let c = i.offsetAt(h.range.start);
      if (c < o)
        throw new Error("Overlapping edit");
      c > o && u.push(a.substring(o, c)), h.newText.length && u.push(h.newText), o = i.offsetAt(h.range.end);
    }
    return u.push(a.substr(o)), u.join("");
  }
  e.applyEdits = r;
})(tt || (tt = {}));
function Zi(e, t) {
  if (e.length <= 1)
    return e;
  const n = e.length / 2 | 0, r = e.slice(0, n), i = e.slice(n);
  Zi(r, t), Zi(i, t);
  let s = 0, a = 0, l = 0;
  for (; s < r.length && a < i.length; )
    t(r[s], i[a]) <= 0 ? e[l++] = r[s++] : e[l++] = i[a++];
  for (; s < r.length; )
    e[l++] = r[s++];
  for (; a < i.length; )
    e[l++] = i[a++];
  return e;
}
function zo(e, t, n = 0) {
  const r = t ? [n] : [];
  for (let i = 0; i < e.length; i++) {
    let s = e.charCodeAt(i);
    (s === 13 || s === 10) && (s === 13 && i + 1 < e.length && e.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function $l(e) {
  const t = e.start, n = e.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e;
}
function Ff(e) {
  const t = $l(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var ne;
(function(e) {
  e[e.Undefined = 0] = "Undefined", e[e.EnumValueMismatch = 1] = "EnumValueMismatch", e[e.Deprecated = 2] = "Deprecated", e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 260] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 262] = "InvalidCharacter", e[e.PropertyExpected = 513] = "PropertyExpected", e[e.CommaExpected = 514] = "CommaExpected", e[e.ColonExpected = 515] = "ColonExpected", e[e.ValueExpected = 516] = "ValueExpected", e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected", e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected", e[e.TrailingComma = 519] = "TrailingComma", e[e.DuplicateKey = 520] = "DuplicateKey", e[e.CommentNotPermitted = 521] = "CommentNotPermitted", e[e.PropertyKeysMustBeDoublequoted = 528] = "PropertyKeysMustBeDoublequoted", e[e.SchemaResolveError = 768] = "SchemaResolveError", e[e.SchemaUnsupportedFeature = 769] = "SchemaUnsupportedFeature";
})(ne || (ne = {}));
var et;
(function(e) {
  e[e.v3 = 3] = "v3", e[e.v4 = 4] = "v4", e[e.v6 = 6] = "v6", e[e.v7 = 7] = "v7", e[e.v2019_09 = 19] = "v2019_09", e[e.v2020_12 = 20] = "v2020_12";
})(et || (et = {}));
var Ki;
(function(e) {
  e.LATEST = {
    textDocument: {
      completion: {
        completionItem: {
          documentationFormat: [Jt.Markdown, Jt.PlainText],
          commitCharactersSupport: !0,
          labelDetailsSupport: !0
        }
      }
    }
  };
})(Ki || (Ki = {}));
function P(...e) {
  const t = e[0];
  let n, r, i;
  if (typeof t == "string")
    n = t, r = t, e.splice(0, 1), i = !e || typeof e[0] != "object" ? e : e[0];
  else if (t instanceof Array) {
    const s = e.slice(1);
    if (t.length !== s.length + 1)
      throw new Error("expected a string as the first argument to l10n.t");
    let a = t[0];
    for (let l = 1; l < t.length; l++)
      a += `{${l - 1}}` + t[l];
    return P(a, ...s);
  } else
    r = t.message, n = r, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), i = t.args ?? {};
  return Of(r, i);
}
var Pf = /{([^}]+)}/g;
function Of(e, t) {
  return Object.keys(t).length === 0 ? e : e.replace(Pf, (n, r) => t[r] ?? n);
}
var Bf = {
  "color-hex": { errorMessage: P("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."), pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/ },
  "date-time": { errorMessage: P("String is not a RFC3339 date-time."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
  date: { errorMessage: P("String is not a RFC3339 date."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i },
  time: { errorMessage: P("String is not a RFC3339 time."), pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
  email: { errorMessage: P("String is not an e-mail address."), pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/ },
  hostname: { errorMessage: P("String is not a hostname."), pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i },
  ipv4: { errorMessage: P("String is not an IPv4 address."), pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/ },
  ipv6: { errorMessage: P("String is not an IPv6 address."), pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i }
}, Yt = class {
  constructor(e, t, n = 0) {
    this.offset = t, this.length = n, this.parent = e;
  }
  get children() {
    return [];
  }
  toString() {
    return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
  }
}, Vf = class extends Yt {
  constructor(e, t) {
    super(e, t), this.type = "null", this.value = null;
  }
}, Xo = class extends Yt {
  constructor(e, t, n) {
    super(e, n), this.type = "boolean", this.value = t;
  }
}, $f = class extends Yt {
  constructor(e, t) {
    super(e, t), this.type = "array", this.items = [];
  }
  get children() {
    return this.items;
  }
}, qf = class extends Yt {
  constructor(e, t) {
    super(e, t), this.type = "number", this.isInteger = !0, this.value = Number.NaN;
  }
}, ii = class extends Yt {
  constructor(e, t, n) {
    super(e, t, n), this.type = "string", this.value = "";
  }
}, Hf = class extends Yt {
  constructor(e, t, n) {
    super(e, t), this.type = "property", this.colonOffset = -1, this.keyNode = n;
  }
  get children() {
    return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
  }
}, Wf = class extends Yt {
  constructor(e, t) {
    super(e, t), this.type = "object", this.properties = [];
  }
  get children() {
    return this.properties;
  }
};
function Be(e) {
  return lt(e) ? e ? {} : { not: {} } : e;
}
var Jo;
(function(e) {
  e[e.Key = 0] = "Key", e[e.Enum = 1] = "Enum";
})(Jo || (Jo = {}));
var jf = {
  "http://json-schema.org/draft-03/schema#": et.v3,
  "http://json-schema.org/draft-04/schema#": et.v4,
  "http://json-schema.org/draft-06/schema#": et.v6,
  "http://json-schema.org/draft-07/schema#": et.v7,
  "https://json-schema.org/draft/2019-09/schema": et.v2019_09,
  "https://json-schema.org/draft/2020-12/schema": et.v2020_12
}, Yo = class {
  constructor(e) {
    this.schemaDraft = e;
  }
}, Gf = class ql {
  constructor(t = -1, n) {
    this.focusOffset = t, this.exclude = n, this.schemas = [];
  }
  add(t) {
    this.schemas.push(t);
  }
  merge(t) {
    Array.prototype.push.apply(this.schemas, t.schemas);
  }
  include(t) {
    return (this.focusOffset === -1 || Hl(t, this.focusOffset)) && t !== this.exclude;
  }
  newSub() {
    return new ql(-1, this.exclude);
  }
}, nr = class {
  constructor() {
  }
  get schemas() {
    return [];
  }
  add(e) {
  }
  merge(e) {
  }
  include(e) {
    return !0;
  }
  newSub() {
    return this;
  }
};
nr.instance = new nr();
var ye = class {
  constructor() {
    this.problems = [], this.propertiesMatches = 0, this.processedProperties = /* @__PURE__ */ new Set(), this.propertiesValueMatches = 0, this.primaryValueMatches = 0, this.enumValueMatch = !1, this.enumValues = void 0;
  }
  hasProblems() {
    return !!this.problems.length;
  }
  merge(e) {
    this.problems = this.problems.concat(e.problems), this.propertiesMatches += e.propertiesMatches, this.propertiesValueMatches += e.propertiesValueMatches, this.mergeProcessedProperties(e);
  }
  mergeEnumValues(e) {
    if (!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues) {
      this.enumValues = this.enumValues.concat(e.enumValues);
      for (const t of this.problems)
        t.code === ne.EnumValueMismatch && (t.message = P("Value is not accepted. Valid values: {0}.", this.enumValues.map((n) => JSON.stringify(n)).join(", ")));
    }
  }
  mergePropertyMatch(e) {
    this.problems = this.problems.concat(e.problems), this.propertiesMatches++, (e.enumValueMatch || !e.hasProblems() && e.propertiesMatches) && this.propertiesValueMatches++, e.enumValueMatch && e.enumValues && e.enumValues.length === 1 && this.primaryValueMatches++;
  }
  mergeProcessedProperties(e) {
    e.processedProperties.forEach((t) => this.processedProperties.add(t));
  }
  compare(e) {
    const t = this.hasProblems();
    return t !== e.hasProblems() ? t ? -1 : 1 : this.enumValueMatch !== e.enumValueMatch ? e.enumValueMatch ? -1 : 1 : this.primaryValueMatches !== e.primaryValueMatches ? this.primaryValueMatches - e.primaryValueMatches : this.propertiesValueMatches !== e.propertiesValueMatches ? this.propertiesValueMatches - e.propertiesValueMatches : this.propertiesMatches - e.propertiesMatches;
  }
};
function zf(e, t = []) {
  return new Wl(e, t, []);
}
function Xt(e) {
  return Mf(e);
}
function Ci(e) {
  return Sf(e);
}
function Hl(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
var Wl = class {
  constructor(e, t = [], n = []) {
    this.root = e, this.syntaxErrors = t, this.comments = n;
  }
  getNodeFromOffset(e, t = !1) {
    if (this.root)
      return kf(this.root, e, t);
  }
  visit(e) {
    if (this.root) {
      const t = (n) => {
        let r = e(n);
        const i = n.children;
        if (Array.isArray(i))
          for (let s = 0; s < i.length && r; s++)
            r = t(i[s]);
        return r;
      };
      t(this.root);
    }
  }
  validate(e, t, n = He.Warning, r) {
    if (this.root && t) {
      const i = new ye();
      return we(this.root, t, i, nr.instance, new Yo(r ?? Qo(t))), i.problems.map((s) => {
        const a = K.create(e.positionAt(s.location.offset), e.positionAt(s.location.offset + s.location.length));
        return vt.create(a, s.message, s.severity ?? n, s.code);
      });
    }
  }
  getMatchingSchemas(e, t = -1, n) {
    if (this.root && e) {
      const r = new Gf(t, n), i = Qo(e), s = new Yo(i);
      return we(this.root, e, new ye(), r, s), r.schemas;
    }
    return [];
  }
};
function Qo(e, t = et.v2020_12) {
  let n = e.$schema;
  return n ? jf[n] ?? t : t;
}
function we(e, t, n, r, i) {
  if (!e || !r.include(e))
    return;
  if (e.type === "property")
    return we(e.valueNode, t, n, r, i);
  const s = e;
  switch (a(), s.type) {
    case "object":
      h(s);
      break;
    case "array":
      u(s);
      break;
    case "string":
      o(s);
      break;
    case "number":
      l(s);
      break;
  }
  r.add({ node: s, schema: t });
  function a() {
    var A;
    function c(b) {
      return s.type === b || b === "integer" && s.type === "number" && s.isInteger;
    }
    if (Array.isArray(t.type) ? t.type.some(c) || n.problems.push({
      location: { offset: s.offset, length: s.length },
      message: t.errorMessage || P("Incorrect type. Expected one of {0}.", t.type.join(", "))
    }) : t.type && (c(t.type) || n.problems.push({
      location: { offset: s.offset, length: s.length },
      message: t.errorMessage || P('Incorrect type. Expected "{0}".', t.type)
    })), Array.isArray(t.allOf))
      for (const b of t.allOf) {
        const E = new ye(), x = r.newSub();
        we(s, Be(b), E, x, i), n.merge(E), r.merge(x);
      }
    const g = Be(t.not);
    if (g) {
      const b = new ye(), E = r.newSub();
      we(s, g, b, E, i), b.hasProblems() || n.problems.push({
        location: { offset: s.offset, length: s.length },
        message: t.errorMessage || P("Matches a schema that is not allowed.")
      });
      for (const x of E.schemas)
        x.inverted = !x.inverted, r.add(x);
    }
    const d = (b, E) => {
      const x = [];
      let S;
      for (const N of b) {
        const T = Be(N), D = new ye(), q = r.newSub();
        if (we(s, T, D, q, i), D.hasProblems() || x.push(T), !S)
          S = { schema: T, validationResult: D, matchingSchemas: q };
        else if (!E && !D.hasProblems() && !S.validationResult.hasProblems())
          S.matchingSchemas.merge(q), S.validationResult.propertiesMatches += D.propertiesMatches, S.validationResult.propertiesValueMatches += D.propertiesValueMatches, S.validationResult.mergeProcessedProperties(D);
        else {
          const F = D.compare(S.validationResult);
          F > 0 ? S = { schema: T, validationResult: D, matchingSchemas: q } : F === 0 && (S.matchingSchemas.merge(q), S.validationResult.mergeEnumValues(D));
        }
      }
      return x.length > 1 && E && n.problems.push({
        location: { offset: s.offset, length: 1 },
        message: P("Matches multiple schemas when only one must validate.")
      }), S && (n.merge(S.validationResult), r.merge(S.matchingSchemas)), x.length;
    };
    Array.isArray(t.anyOf) && d(t.anyOf, !1), Array.isArray(t.oneOf) && d(t.oneOf, !0);
    const m = (b) => {
      const E = new ye(), x = r.newSub();
      we(s, Be(b), E, x, i), n.merge(E), r.merge(x);
    }, p = (b, E, x) => {
      const S = Be(b), N = new ye(), T = r.newSub();
      we(s, S, N, T, i), r.merge(T), n.mergeProcessedProperties(N), N.hasProblems() ? x && m(x) : E && m(E);
    }, _ = Be(t.if);
    if (_ && p(_, Be(t.then), Be(t.else)), Array.isArray(t.enum)) {
      const b = Xt(s);
      let E = !1;
      for (const x of t.enum)
        if (_n(b, x)) {
          E = !0;
          break;
        }
      n.enumValues = t.enum, n.enumValueMatch = E, E || n.problems.push({
        location: { offset: s.offset, length: s.length },
        code: ne.EnumValueMismatch,
        message: t.errorMessage || P("Value is not accepted. Valid values: {0}.", t.enum.map((x) => JSON.stringify(x)).join(", "))
      });
    }
    if (Qe(t.const)) {
      const b = Xt(s);
      _n(b, t.const) ? n.enumValueMatch = !0 : (n.problems.push({
        location: { offset: s.offset, length: s.length },
        code: ne.EnumValueMismatch,
        message: t.errorMessage || P("Value must be {0}.", JSON.stringify(t.const))
      }), n.enumValueMatch = !1), n.enumValues = [t.const];
    }
    let L = t.deprecationMessage;
    if (L || t.deprecated) {
      L = L || P("Value is deprecated");
      let b = ((A = s.parent) == null ? void 0 : A.type) === "property" ? s.parent : s;
      n.problems.push({
        location: { offset: b.offset, length: b.length },
        severity: He.Warning,
        message: L,
        code: ne.Deprecated
      });
    }
  }
  function l(c) {
    const g = c.value;
    function d(E) {
      var S;
      const x = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(E.toString());
      return x && {
        value: Number(x[1] + (x[2] || "")),
        multiplier: (((S = x[2]) == null ? void 0 : S.length) || 0) - (parseInt(x[3]) || 0)
      };
    }
    if (Re(t.multipleOf)) {
      let E = -1;
      if (Number.isInteger(t.multipleOf))
        E = g % t.multipleOf;
      else {
        let x = d(t.multipleOf), S = d(g);
        if (x && S) {
          const N = 10 ** Math.abs(S.multiplier - x.multiplier);
          S.multiplier < x.multiplier ? S.value *= N : x.value *= N, E = S.value % x.value;
        }
      }
      E !== 0 && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: P("Value is not divisible by {0}.", t.multipleOf)
      });
    }
    function m(E, x) {
      if (Re(x))
        return x;
      if (lt(x) && x)
        return E;
    }
    function p(E, x) {
      if (!lt(x) || !x)
        return E;
    }
    const _ = m(t.minimum, t.exclusiveMinimum);
    Re(_) && g <= _ && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Value is below the exclusive minimum of {0}.", _)
    });
    const L = m(t.maximum, t.exclusiveMaximum);
    Re(L) && g >= L && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Value is above the exclusive maximum of {0}.", L)
    });
    const A = p(t.minimum, t.exclusiveMinimum);
    Re(A) && g < A && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Value is below the minimum of {0}.", A)
    });
    const b = p(t.maximum, t.exclusiveMaximum);
    Re(b) && g > b && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Value is above the maximum of {0}.", b)
    });
  }
  function o(c) {
    if (Re(t.minLength) && Y1(c.value) < t.minLength && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("String is shorter than the minimum length of {0}.", t.minLength)
    }), Re(t.maxLength) && Y1(c.value) > t.maxLength && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("String is longer than the maximum length of {0}.", t.maxLength)
    }), Vl(t.pattern)) {
      const g = Pr(t.pattern);
      g != null && g.test(c.value) || n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.patternErrorMessage || t.errorMessage || P('String does not match the pattern of "{0}".', t.pattern)
      });
    }
    if (t.format)
      switch (t.format) {
        case "uri":
        case "uri-reference":
          {
            let d;
            if (!c.value)
              d = P("URI expected.");
            else {
              const m = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(c.value);
              m ? !m[2] && t.format === "uri" && (d = P("URI with a scheme is expected.")) : d = P("URI is expected.");
            }
            d && n.problems.push({
              location: { offset: c.offset, length: c.length },
              message: t.patternErrorMessage || t.errorMessage || P("String is not a URI: {0}", d)
            });
          }
          break;
        case "color-hex":
        case "date-time":
        case "date":
        case "time":
        case "email":
        case "hostname":
        case "ipv4":
        case "ipv6":
          const g = Bf[t.format];
          (!c.value || !g.pattern.exec(c.value)) && n.problems.push({
            location: { offset: c.offset, length: c.length },
            message: t.patternErrorMessage || t.errorMessage || g.errorMessage
          });
      }
  }
  function u(c) {
    let g, d;
    i.schemaDraft >= et.v2020_12 ? (g = t.prefixItems, d = Array.isArray(t.items) ? void 0 : t.items) : (g = Array.isArray(t.items) ? t.items : void 0, d = Array.isArray(t.items) ? t.additionalItems : t.items);
    let m = 0;
    if (g !== void 0) {
      const L = Math.min(g.length, c.items.length);
      for (; m < L; m++) {
        const A = g[m], b = Be(A), E = new ye(), x = c.items[m];
        x && (we(x, b, E, r, i), n.mergePropertyMatch(E)), n.processedProperties.add(String(m));
      }
    }
    if (d !== void 0 && m < c.items.length)
      if (typeof d == "boolean")
        for (d === !1 && n.problems.push({
          location: { offset: c.offset, length: c.length },
          message: P("Array has too many items according to schema. Expected {0} or fewer.", m)
        }); m < c.items.length; m++)
          n.processedProperties.add(String(m)), n.propertiesValueMatches++;
      else
        for (; m < c.items.length; m++) {
          const L = new ye();
          we(c.items[m], d, L, r, i), n.mergePropertyMatch(L), n.processedProperties.add(String(m));
        }
    const p = Be(t.contains);
    if (p) {
      let L = 0;
      for (let A = 0; A < c.items.length; A++) {
        const b = c.items[A], E = new ye();
        we(b, p, E, nr.instance, i), E.hasProblems() || (L++, i.schemaDraft >= et.v2020_12 && n.processedProperties.add(String(A)));
      }
      L === 0 && !Re(t.minContains) && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.errorMessage || P("Array does not contain required item.")
      }), Re(t.minContains) && L < t.minContains && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.errorMessage || P("Array has too few items that match the contains contraint. Expected {0} or more.", t.minContains)
      }), Re(t.maxContains) && L > t.maxContains && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.errorMessage || P("Array has too many items that match the contains contraint. Expected {0} or less.", t.maxContains)
      });
    }
    const _ = t.unevaluatedItems;
    if (_ !== void 0)
      for (let L = 0; L < c.items.length; L++) {
        if (!n.processedProperties.has(String(L)))
          if (_ === !1)
            n.problems.push({
              location: { offset: c.offset, length: c.length },
              message: P("Item does not match any validation rule from the array.")
            });
          else {
            const A = new ye();
            we(c.items[L], t.unevaluatedItems, A, r, i), n.mergePropertyMatch(A);
          }
        n.processedProperties.add(String(L)), n.propertiesValueMatches++;
      }
    if (Re(t.minItems) && c.items.length < t.minItems && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Array has too few items. Expected {0} or more.", t.minItems)
    }), Re(t.maxItems) && c.items.length > t.maxItems && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Array has too many items. Expected {0} or fewer.", t.maxItems)
    }), t.uniqueItems === !0) {
      let L = function() {
        for (let b = 0; b < A.length - 1; b++) {
          const E = A[b];
          for (let x = b + 1; x < A.length; x++)
            if (_n(E, A[x]))
              return !0;
        }
        return !1;
      };
      const A = Xt(c);
      L() && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: P("Array has duplicate items.")
      });
    }
  }
  function h(c) {
    const g = /* @__PURE__ */ Object.create(null), d = /* @__PURE__ */ new Set();
    for (const b of c.properties) {
      const E = b.keyNode.value;
      g[E] = b.valueNode, d.add(E);
    }
    if (Array.isArray(t.required)) {
      for (const b of t.required)
        if (!g[b]) {
          const E = c.parent && c.parent.type === "property" && c.parent.keyNode, x = E ? { offset: E.offset, length: E.length } : { offset: c.offset, length: 1 };
          n.problems.push({
            location: x,
            message: P('Missing property "{0}".', b)
          });
        }
    }
    const m = (b) => {
      d.delete(b), n.processedProperties.add(b);
    };
    if (t.properties)
      for (const b of Object.keys(t.properties)) {
        m(b);
        const E = t.properties[b], x = g[b];
        if (x)
          if (lt(E))
            if (E)
              n.propertiesMatches++, n.propertiesValueMatches++;
            else {
              const S = x.parent;
              n.problems.push({
                location: { offset: S.keyNode.offset, length: S.keyNode.length },
                message: t.errorMessage || P("Property {0} is not allowed.", b)
              });
            }
          else {
            const S = new ye();
            we(x, E, S, r, i), n.mergePropertyMatch(S);
          }
      }
    if (t.patternProperties)
      for (const b of Object.keys(t.patternProperties)) {
        const E = Pr(b);
        if (E) {
          const x = [];
          for (const S of d)
            if (E.test(S)) {
              x.push(S);
              const N = g[S];
              if (N) {
                const T = t.patternProperties[b];
                if (lt(T))
                  if (T)
                    n.propertiesMatches++, n.propertiesValueMatches++;
                  else {
                    const D = N.parent;
                    n.problems.push({
                      location: { offset: D.keyNode.offset, length: D.keyNode.length },
                      message: t.errorMessage || P("Property {0} is not allowed.", S)
                    });
                  }
                else {
                  const D = new ye();
                  we(N, T, D, r, i), n.mergePropertyMatch(D);
                }
              }
            }
          x.forEach(m);
        }
      }
    const p = t.additionalProperties;
    if (p !== void 0)
      for (const b of d) {
        m(b);
        const E = g[b];
        if (E) {
          if (p === !1) {
            const x = E.parent;
            n.problems.push({
              location: { offset: x.keyNode.offset, length: x.keyNode.length },
              message: t.errorMessage || P("Property {0} is not allowed.", b)
            });
          } else if (p !== !0) {
            const x = new ye();
            we(E, p, x, r, i), n.mergePropertyMatch(x);
          }
        }
      }
    const _ = t.unevaluatedProperties;
    if (_ !== void 0) {
      const b = [];
      for (const E of d)
        if (!n.processedProperties.has(E)) {
          b.push(E);
          const x = g[E];
          if (x) {
            if (_ === !1) {
              const S = x.parent;
              n.problems.push({
                location: { offset: S.keyNode.offset, length: S.keyNode.length },
                message: t.errorMessage || P("Property {0} is not allowed.", E)
              });
            } else if (_ !== !0) {
              const S = new ye();
              we(x, _, S, r, i), n.mergePropertyMatch(S);
            }
          }
        }
      b.forEach(m);
    }
    if (Re(t.maxProperties) && c.properties.length > t.maxProperties && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Object has more properties than limit of {0}.", t.maxProperties)
    }), Re(t.minProperties) && c.properties.length < t.minProperties && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: P("Object has fewer properties than the required number of {0}", t.minProperties)
    }), t.dependentRequired)
      for (const b in t.dependentRequired) {
        const E = g[b], x = t.dependentRequired[b];
        E && Array.isArray(x) && A(b, x);
      }
    if (t.dependentSchemas)
      for (const b in t.dependentSchemas) {
        const E = g[b], x = t.dependentSchemas[b];
        E && kt(x) && A(b, x);
      }
    if (t.dependencies)
      for (const b in t.dependencies)
        g[b] && A(b, t.dependencies[b]);
    const L = Be(t.propertyNames);
    if (L)
      for (const b of c.properties) {
        const E = b.keyNode;
        E && we(E, L, n, nr.instance, i);
      }
    function A(b, E) {
      if (Array.isArray(E))
        for (const x of E)
          g[x] ? n.propertiesValueMatches++ : n.problems.push({
            location: { offset: c.offset, length: c.length },
            message: P("Object is missing property {0} required by property {1}.", x, b)
          });
      else {
        const x = Be(E);
        if (x) {
          const S = new ye();
          we(c, x, S, r, i), n.mergePropertyMatch(S);
        }
      }
    }
  }
}
function Xf(e, t) {
  const n = [];
  let r = -1;
  const i = e.getText(), s = zt(i, !1), a = t && t.collectComments ? [] : void 0;
  function l() {
    for (; ; ) {
      const S = s.scan();
      switch (h(), S) {
        case 12:
        case 13:
          Array.isArray(a) && a.push(K.create(e.positionAt(s.getTokenOffset()), e.positionAt(s.getTokenOffset() + s.getTokenLength())));
          break;
        case 15:
        case 14:
          break;
        default:
          return S;
      }
    }
  }
  function o(S, N, T, D, q = He.Error) {
    if (n.length === 0 || T !== r) {
      const F = K.create(e.positionAt(T), e.positionAt(D));
      n.push(vt.create(F, S, q, N, e.languageId)), r = T;
    }
  }
  function u(S, N, T = void 0, D = [], q = []) {
    let F = s.getTokenOffset(), k = s.getTokenOffset() + s.getTokenLength();
    if (F === k && F > 0) {
      for (F--; F > 0 && /\s/.test(i.charAt(F)); )
        F--;
      k = F + 1;
    }
    if (o(S, N, F, k), T && c(T, !1), D.length + q.length > 0) {
      let I = s.getToken();
      for (; I !== 17; ) {
        if (D.indexOf(I) !== -1) {
          l();
          break;
        } else if (q.indexOf(I) !== -1)
          break;
        I = l();
      }
    }
    return T;
  }
  function h() {
    switch (s.getTokenError()) {
      case 4:
        return u(P("Invalid unicode sequence in string."), ne.InvalidUnicode), !0;
      case 5:
        return u(P("Invalid escape character in string."), ne.InvalidEscapeCharacter), !0;
      case 3:
        return u(P("Unexpected end of number."), ne.UnexpectedEndOfNumber), !0;
      case 1:
        return u(P("Unexpected end of comment."), ne.UnexpectedEndOfComment), !0;
      case 2:
        return u(P("Unexpected end of string."), ne.UnexpectedEndOfString), !0;
      case 6:
        return u(P("Invalid characters in string. Control characters must be escaped."), ne.InvalidCharacter), !0;
    }
    return !1;
  }
  function c(S, N) {
    return S.length = s.getTokenOffset() + s.getTokenLength() - S.offset, N && l(), S;
  }
  function g(S) {
    if (s.getToken() !== 3)
      return;
    const N = new $f(S, s.getTokenOffset());
    l();
    let T = !1;
    for (; s.getToken() !== 4 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        T || u(P("Value expected"), ne.ValueExpected);
        const q = s.getTokenOffset();
        if (l(), s.getToken() === 4) {
          T && o(P("Trailing comma"), ne.TrailingComma, q, q + 1);
          continue;
        }
      } else T && u(P("Expected comma"), ne.CommaExpected);
      const D = b(N);
      D ? N.items.push(D) : u(P("Value expected"), ne.ValueExpected, void 0, [], [
        4,
        5
        /* Json.SyntaxKind.CommaToken */
      ]), T = !0;
    }
    return s.getToken() !== 4 ? u(P("Expected comma or closing bracket"), ne.CommaOrCloseBacketExpected, N) : c(N, !0);
  }
  const d = new ii(void 0, 0, 0);
  function m(S, N) {
    const T = new Hf(S, s.getTokenOffset(), d);
    let D = _(T);
    if (!D)
      if (s.getToken() === 16) {
        u(P("Property keys must be doublequoted"), ne.PropertyKeysMustBeDoublequoted);
        const F = new ii(T, s.getTokenOffset(), s.getTokenLength());
        F.value = s.getTokenValue(), D = F, l();
      } else
        return;
    if (T.keyNode = D, D.value !== "//") {
      const F = N[D.value];
      F ? (o(P("Duplicate object key"), ne.DuplicateKey, T.keyNode.offset, T.keyNode.offset + T.keyNode.length, He.Warning), kt(F) && o(P("Duplicate object key"), ne.DuplicateKey, F.keyNode.offset, F.keyNode.offset + F.keyNode.length, He.Warning), N[D.value] = !0) : N[D.value] = T;
    }
    if (s.getToken() === 6)
      T.colonOffset = s.getTokenOffset(), l();
    else if (u(P("Colon expected"), ne.ColonExpected), s.getToken() === 10 && e.positionAt(D.offset + D.length).line < e.positionAt(s.getTokenOffset()).line)
      return T.length = D.length, T;
    const q = b(T);
    return q ? (T.valueNode = q, T.length = q.offset + q.length - T.offset, T) : u(P("Value expected"), ne.ValueExpected, T, [], [
      2,
      5
      /* Json.SyntaxKind.CommaToken */
    ]);
  }
  function p(S) {
    if (s.getToken() !== 1)
      return;
    const N = new Wf(S, s.getTokenOffset()), T = /* @__PURE__ */ Object.create(null);
    l();
    let D = !1;
    for (; s.getToken() !== 2 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        D || u(P("Property expected"), ne.PropertyExpected);
        const F = s.getTokenOffset();
        if (l(), s.getToken() === 2) {
          D && o(P("Trailing comma"), ne.TrailingComma, F, F + 1);
          continue;
        }
      } else D && u(P("Expected comma"), ne.CommaExpected);
      const q = m(N, T);
      q ? N.properties.push(q) : u(P("Property expected"), ne.PropertyExpected, void 0, [], [
        2,
        5
        /* Json.SyntaxKind.CommaToken */
      ]), D = !0;
    }
    return s.getToken() !== 2 ? u(P("Expected comma or closing brace"), ne.CommaOrCloseBraceExpected, N) : c(N, !0);
  }
  function _(S) {
    if (s.getToken() !== 10)
      return;
    const N = new ii(S, s.getTokenOffset());
    return N.value = s.getTokenValue(), c(N, !0);
  }
  function L(S) {
    if (s.getToken() !== 11)
      return;
    const N = new qf(S, s.getTokenOffset());
    if (s.getTokenError() === 0) {
      const T = s.getTokenValue();
      try {
        const D = JSON.parse(T);
        if (!Re(D))
          return u(P("Invalid number format."), ne.Undefined, N);
        N.value = D;
      } catch {
        return u(P("Invalid number format."), ne.Undefined, N);
      }
      N.isInteger = T.indexOf(".") === -1;
    }
    return c(N, !0);
  }
  function A(S) {
    switch (s.getToken()) {
      case 7:
        return c(new Vf(S, s.getTokenOffset()), !0);
      case 8:
        return c(new Xo(S, !0, s.getTokenOffset()), !0);
      case 9:
        return c(new Xo(S, !1, s.getTokenOffset()), !0);
      default:
        return;
    }
  }
  function b(S) {
    return g(S) || p(S) || _(S) || L(S) || A(S);
  }
  let E;
  return l() !== 17 && (E = b(E), E ? s.getToken() !== 17 && u(P("End of file expected."), ne.Undefined) : u(P("Expected a JSON object, array or literal."), ne.Undefined)), new Wl(E, n, a);
}
function es(e, t, n) {
  if (e !== null && typeof e == "object") {
    const r = t + "	";
    if (Array.isArray(e)) {
      if (e.length === 0)
        return "[]";
      let i = `[
`;
      for (let s = 0; s < e.length; s++)
        i += r + es(e[s], r, n), s < e.length - 1 && (i += ","), i += `
`;
      return i += t + "]", i;
    } else {
      const i = Object.keys(e);
      if (i.length === 0)
        return "{}";
      let s = `{
`;
      for (let a = 0; a < i.length; a++) {
        const l = i[a];
        s += r + JSON.stringify(l) + ": " + es(e[l], r, n), a < i.length - 1 && (s += ","), s += `
`;
      }
      return s += t + "}", s;
    }
  }
  return n(e);
}
var Jf = class {
  constructor(e, t = [], n = Promise, r = {}) {
    this.schemaService = e, this.contributions = t, this.promiseConstructor = n, this.clientCapabilities = r;
  }
  doResolve(e) {
    for (let t = this.contributions.length - 1; t >= 0; t--) {
      const n = this.contributions[t].resolveCompletion;
      if (n) {
        const r = n(e);
        if (r)
          return r;
      }
    }
    return this.promiseConstructor.resolve(e);
  }
  doComplete(e, t, n) {
    const r = {
      items: [],
      isIncomplete: !1
    }, i = e.getText(), s = e.offsetAt(t);
    let a = n.getNodeFromOffset(s, !0);
    if (this.isInComment(e, a ? a.offset : 0, s))
      return Promise.resolve(r);
    if (a && s === a.offset + a.length && s > 0) {
      const c = i[s - 1];
      (a.type === "object" && c === "}" || a.type === "array" && c === "]") && (a = a.parent);
    }
    const l = this.getCurrentWord(e, s);
    let o;
    if (a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null"))
      o = K.create(e.positionAt(a.offset), e.positionAt(a.offset + a.length));
    else {
      let c = s - l.length;
      c > 0 && i[c - 1] === '"' && c--, o = K.create(e.positionAt(c), t);
    }
    const u = /* @__PURE__ */ new Map(), h = {
      add: (c) => {
        let g = c.label;
        const d = u.get(g);
        if (d)
          d.documentation || (d.documentation = c.documentation), d.detail || (d.detail = c.detail), d.labelDetails || (d.labelDetails = c.labelDetails);
        else {
          if (g = g.replace(/[\n]/g, "↵"), g.length > 60) {
            const m = g.substr(0, 57).trim() + "...";
            u.has(m) || (g = m);
          }
          c.textEdit = ft.replace(o, c.insertText), c.label = g, u.set(g, c), r.items.push(c);
        }
      },
      setAsIncomplete: () => {
        r.isIncomplete = !0;
      },
      error: (c) => {
        console.error(c);
      },
      getNumberOfProposals: () => r.items.length
    };
    return this.schemaService.getSchemaForResource(e.uri, n).then((c) => {
      const g = [];
      let d = !0, m = "", p;
      if (a && a.type === "string") {
        const L = a.parent;
        L && L.type === "property" && L.keyNode === a && (d = !L.valueNode, p = L, m = i.substr(a.offset + 1, a.length - 2), L && (a = L.parent));
      }
      if (a && a.type === "object") {
        if (a.offset === s)
          return r;
        a.properties.forEach((E) => {
          (!p || p !== E) && u.set(E.keyNode.value, Xi.create("__"));
        });
        let A = "";
        d && (A = this.evaluateSeparatorAfter(e, e.offsetAt(o.end))), c ? this.getPropertyCompletions(c, n, a, d, A, h) : this.getSchemaLessPropertyCompletions(n, a, m, h);
        const b = Ci(a);
        this.contributions.forEach((E) => {
          const x = E.collectPropertyCompletions(e.uri, b, l, d, A === "", h);
          x && g.push(x);
        }), !c && l.length > 0 && i.charAt(s - l.length - 1) !== '"' && (h.add({
          kind: qe.Property,
          label: this.getLabelForValue(l),
          insertText: this.getInsertTextForProperty(l, void 0, !1, A),
          insertTextFormat: pe.Snippet,
          documentation: ""
        }), h.setAsIncomplete());
      }
      const _ = {};
      return c ? this.getValueCompletions(c, n, a, s, e, h, _) : this.getSchemaLessValueCompletions(n, a, s, e, h), this.contributions.length > 0 && this.getContributedValueCompletions(n, a, s, e, h, g), this.promiseConstructor.all(g).then(() => {
        if (h.getNumberOfProposals() === 0) {
          let L = s;
          a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null") && (L = a.offset + a.length);
          const A = this.evaluateSeparatorAfter(e, L);
          this.addFillerValueCompletions(_, A, h);
        }
        return r;
      });
    });
  }
  getPropertyCompletions(e, t, n, r, i, s) {
    t.getMatchingSchemas(e.schema, n.offset).forEach((l) => {
      if (l.node === n && !l.inverted) {
        const o = l.schema.properties;
        o && Object.keys(o).forEach((h) => {
          const c = o[h];
          if (typeof c == "object" && !c.deprecationMessage && !c.doNotSuggest) {
            const g = {
              kind: qe.Property,
              label: h,
              insertText: this.getInsertTextForProperty(h, c, r, i),
              insertTextFormat: pe.Snippet,
              filterText: this.getFilterTextForValue(h),
              documentation: this.fromMarkup(c.markdownDescription) || c.description || ""
            };
            c.suggestSortText !== void 0 && (g.sortText = c.suggestSortText), g.insertText && er(g.insertText, `$1${i}`) && (g.command = {
              title: "Suggest",
              command: "editor.action.triggerSuggest"
            }), s.add(g);
          }
        });
        const u = l.schema.propertyNames;
        if (typeof u == "object" && !u.deprecationMessage && !u.doNotSuggest) {
          const h = (c, g = void 0) => {
            const d = {
              kind: qe.Property,
              label: c,
              insertText: this.getInsertTextForProperty(c, void 0, r, i),
              insertTextFormat: pe.Snippet,
              filterText: this.getFilterTextForValue(c),
              documentation: g || this.fromMarkup(u.markdownDescription) || u.description || ""
            };
            u.suggestSortText !== void 0 && (d.sortText = u.suggestSortText), d.insertText && er(d.insertText, `$1${i}`) && (d.command = {
              title: "Suggest",
              command: "editor.action.triggerSuggest"
            }), s.add(d);
          };
          if (u.enum)
            for (let c = 0; c < u.enum.length; c++) {
              let g;
              u.markdownEnumDescriptions && c < u.markdownEnumDescriptions.length ? g = this.fromMarkup(u.markdownEnumDescriptions[c]) : u.enumDescriptions && c < u.enumDescriptions.length && (g = u.enumDescriptions[c]), h(u.enum[c], g);
            }
          u.const && h(u.const);
        }
      }
    });
  }
  getSchemaLessPropertyCompletions(e, t, n, r) {
    const i = (s) => {
      s.properties.forEach((a) => {
        const l = a.keyNode.value;
        r.add({
          kind: qe.Property,
          label: l,
          insertText: this.getInsertTextForValue(l, ""),
          insertTextFormat: pe.Snippet,
          filterText: this.getFilterTextForValue(l),
          documentation: ""
        });
      });
    };
    if (t.parent)
      if (t.parent.type === "property") {
        const s = t.parent.keyNode.value;
        e.visit((a) => (a.type === "property" && a !== t.parent && a.keyNode.value === s && a.valueNode && a.valueNode.type === "object" && i(a.valueNode), !0));
      } else t.parent.type === "array" && t.parent.items.forEach((s) => {
        s.type === "object" && s !== t && i(s);
      });
    else t.type === "object" && r.add({
      kind: qe.Property,
      label: "$schema",
      insertText: this.getInsertTextForProperty("$schema", void 0, !0, ""),
      insertTextFormat: pe.Snippet,
      documentation: "",
      filterText: this.getFilterTextForValue("$schema")
    });
  }
  getSchemaLessValueCompletions(e, t, n, r, i) {
    let s = n;
    if (t && (t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") && (s = t.offset + t.length, t = t.parent), !t) {
      i.add({
        kind: this.getSuggestionKind("object"),
        label: "Empty object",
        insertText: this.getInsertTextForValue({}, ""),
        insertTextFormat: pe.Snippet,
        documentation: ""
      }), i.add({
        kind: this.getSuggestionKind("array"),
        label: "Empty array",
        insertText: this.getInsertTextForValue([], ""),
        insertTextFormat: pe.Snippet,
        documentation: ""
      });
      return;
    }
    const a = this.evaluateSeparatorAfter(r, s), l = (o) => {
      o.parent && !Hl(o.parent, n, !0) && i.add({
        kind: this.getSuggestionKind(o.type),
        label: this.getLabelTextForMatchingNode(o, r),
        insertText: this.getInsertTextForMatchingNode(o, r, a),
        insertTextFormat: pe.Snippet,
        documentation: ""
      }), o.type === "boolean" && this.addBooleanValueCompletion(!o.value, a, i);
    };
    if (t.type === "property" && n > (t.colonOffset || 0)) {
      const o = t.valueNode;
      if (o && (n > o.offset + o.length || o.type === "object" || o.type === "array"))
        return;
      const u = t.keyNode.value;
      e.visit((h) => (h.type === "property" && h.keyNode.value === u && h.valueNode && l(h.valueNode), !0)), u === "$schema" && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(a, i);
    }
    if (t.type === "array")
      if (t.parent && t.parent.type === "property") {
        const o = t.parent.keyNode.value;
        e.visit((u) => (u.type === "property" && u.keyNode.value === o && u.valueNode && u.valueNode.type === "array" && u.valueNode.items.forEach(l), !0));
      } else
        t.items.forEach(l);
  }
  getValueCompletions(e, t, n, r, i, s, a) {
    let l = r, o, u;
    if (n && (n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null") && (l = n.offset + n.length, u = n, n = n.parent), !n) {
      this.addSchemaValueCompletions(e.schema, "", s, a);
      return;
    }
    if (n.type === "property" && r > (n.colonOffset || 0)) {
      const h = n.valueNode;
      if (h && r > h.offset + h.length)
        return;
      o = n.keyNode.value, n = n.parent;
    }
    if (n && (o !== void 0 || n.type === "array")) {
      const h = this.evaluateSeparatorAfter(i, l), c = t.getMatchingSchemas(e.schema, n.offset, u);
      for (const g of c)
        if (g.node === n && !g.inverted && g.schema) {
          if (n.type === "array" && g.schema.items) {
            let d = s;
            if (g.schema.uniqueItems) {
              const m = /* @__PURE__ */ new Set();
              n.children.forEach((p) => {
                p.type !== "array" && p.type !== "object" && m.add(this.getLabelForValue(Xt(p)));
              }), d = {
                ...s,
                add(p) {
                  m.has(p.label) || s.add(p);
                }
              };
            }
            if (Array.isArray(g.schema.items)) {
              const m = this.findItemAtOffset(n, i, r);
              m < g.schema.items.length && this.addSchemaValueCompletions(g.schema.items[m], h, d, a);
            } else
              this.addSchemaValueCompletions(g.schema.items, h, d, a);
          }
          if (o !== void 0) {
            let d = !1;
            if (g.schema.properties) {
              const m = g.schema.properties[o];
              m && (d = !0, this.addSchemaValueCompletions(m, h, s, a));
            }
            if (g.schema.patternProperties && !d)
              for (const m of Object.keys(g.schema.patternProperties)) {
                const p = Pr(m);
                if (p != null && p.test(o)) {
                  d = !0;
                  const _ = g.schema.patternProperties[m];
                  this.addSchemaValueCompletions(_, h, s, a);
                }
              }
            if (g.schema.additionalProperties && !d) {
              const m = g.schema.additionalProperties;
              this.addSchemaValueCompletions(m, h, s, a);
            }
          }
        }
      o === "$schema" && !n.parent && this.addDollarSchemaCompletions(h, s), a.boolean && (this.addBooleanValueCompletion(!0, h, s), this.addBooleanValueCompletion(!1, h, s)), a.null && this.addNullValueCompletion(h, s);
    }
  }
  getContributedValueCompletions(e, t, n, r, i, s) {
    if (!t)
      this.contributions.forEach((a) => {
        const l = a.collectDefaultCompletions(r.uri, i);
        l && s.push(l);
      });
    else if ((t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") && (t = t.parent), t && t.type === "property" && n > (t.colonOffset || 0)) {
      const a = t.keyNode.value, l = t.valueNode;
      if ((!l || n <= l.offset + l.length) && t.parent) {
        const o = Ci(t.parent);
        this.contributions.forEach((u) => {
          const h = u.collectValueCompletions(r.uri, o, a, i);
          h && s.push(h);
        });
      }
    }
  }
  addSchemaValueCompletions(e, t, n, r) {
    typeof e == "object" && (this.addEnumValueCompletions(e, t, n), this.addDefaultValueCompletions(e, t, n), this.collectTypes(e, r), Array.isArray(e.allOf) && e.allOf.forEach((i) => this.addSchemaValueCompletions(i, t, n, r)), Array.isArray(e.anyOf) && e.anyOf.forEach((i) => this.addSchemaValueCompletions(i, t, n, r)), Array.isArray(e.oneOf) && e.oneOf.forEach((i) => this.addSchemaValueCompletions(i, t, n, r)));
  }
  addDefaultValueCompletions(e, t, n, r = 0) {
    let i = !1;
    if (Qe(e.default)) {
      let s = e.type, a = e.default;
      for (let o = r; o > 0; o--)
        a = [a], s = "array";
      const l = {
        kind: this.getSuggestionKind(s),
        label: this.getLabelForValue(a),
        insertText: this.getInsertTextForValue(a, t),
        insertTextFormat: pe.Snippet
      };
      this.doesSupportsLabelDetails() ? l.labelDetails = { description: P("Default value") } : l.detail = P("Default value"), n.add(l), i = !0;
    }
    Array.isArray(e.examples) && e.examples.forEach((s) => {
      let a = e.type, l = s;
      for (let o = r; o > 0; o--)
        l = [l], a = "array";
      n.add({
        kind: this.getSuggestionKind(a),
        label: this.getLabelForValue(l),
        insertText: this.getInsertTextForValue(l, t),
        insertTextFormat: pe.Snippet
      }), i = !0;
    }), Array.isArray(e.defaultSnippets) && e.defaultSnippets.forEach((s) => {
      let a = e.type, l = s.body, o = s.label, u, h;
      if (Qe(l)) {
        e.type;
        for (let c = r; c > 0; c--)
          l = [l];
        u = this.getInsertTextForSnippetValue(l, t), h = this.getFilterTextForSnippetValue(l), o = o || this.getLabelForSnippetValue(l);
      } else if (typeof s.bodyText == "string") {
        let c = "", g = "", d = "";
        for (let m = r; m > 0; m--)
          c = c + d + `[
`, g = g + `
` + d + "]", d += "	", a = "array";
        u = c + d + s.bodyText.split(`
`).join(`
` + d) + g + t, o = o || u, h = u.replace(/[\n]/g, "");
      } else
        return;
      n.add({
        kind: this.getSuggestionKind(a),
        label: o,
        documentation: this.fromMarkup(s.markdownDescription) || s.description,
        insertText: u,
        insertTextFormat: pe.Snippet,
        filterText: h
      }), i = !0;
    }), !i && typeof e.items == "object" && !Array.isArray(e.items) && r < 5 && this.addDefaultValueCompletions(e.items, t, n, r + 1);
  }
  addEnumValueCompletions(e, t, n) {
    if (Qe(e.const) && n.add({
      kind: this.getSuggestionKind(e.type),
      label: this.getLabelForValue(e.const),
      insertText: this.getInsertTextForValue(e.const, t),
      insertTextFormat: pe.Snippet,
      documentation: this.fromMarkup(e.markdownDescription) || e.description
    }), Array.isArray(e.enum))
      for (let r = 0, i = e.enum.length; r < i; r++) {
        const s = e.enum[r];
        let a = this.fromMarkup(e.markdownDescription) || e.description;
        e.markdownEnumDescriptions && r < e.markdownEnumDescriptions.length && this.doesSupportMarkdown() ? a = this.fromMarkup(e.markdownEnumDescriptions[r]) : e.enumDescriptions && r < e.enumDescriptions.length && (a = e.enumDescriptions[r]), n.add({
          kind: this.getSuggestionKind(e.type),
          label: this.getLabelForValue(s),
          insertText: this.getInsertTextForValue(s, t),
          insertTextFormat: pe.Snippet,
          documentation: a
        });
      }
  }
  collectTypes(e, t) {
    if (Array.isArray(e.enum) || Qe(e.const))
      return;
    const n = e.type;
    Array.isArray(n) ? n.forEach((r) => t[r] = !0) : n && (t[n] = !0);
  }
  addFillerValueCompletions(e, t, n) {
    e.object && n.add({
      kind: this.getSuggestionKind("object"),
      label: "{}",
      insertText: this.getInsertTextForGuessedValue({}, t),
      insertTextFormat: pe.Snippet,
      detail: P("New object"),
      documentation: ""
    }), e.array && n.add({
      kind: this.getSuggestionKind("array"),
      label: "[]",
      insertText: this.getInsertTextForGuessedValue([], t),
      insertTextFormat: pe.Snippet,
      detail: P("New array"),
      documentation: ""
    });
  }
  addBooleanValueCompletion(e, t, n) {
    n.add({
      kind: this.getSuggestionKind("boolean"),
      label: e ? "true" : "false",
      insertText: this.getInsertTextForValue(e, t),
      insertTextFormat: pe.Snippet,
      documentation: ""
    });
  }
  addNullValueCompletion(e, t) {
    t.add({
      kind: this.getSuggestionKind("null"),
      label: "null",
      insertText: "null" + e,
      insertTextFormat: pe.Snippet,
      documentation: ""
    });
  }
  addDollarSchemaCompletions(e, t) {
    this.schemaService.getRegisteredSchemaIds((r) => r === "http" || r === "https").forEach((r) => {
      r.startsWith("http://json-schema.org/draft-") && (r = r + "#"), t.add({
        kind: qe.Module,
        label: this.getLabelForValue(r),
        filterText: this.getFilterTextForValue(r),
        insertText: this.getInsertTextForValue(r, e),
        insertTextFormat: pe.Snippet,
        documentation: ""
      });
    });
  }
  getLabelForValue(e) {
    return JSON.stringify(e);
  }
  getValueFromLabel(e) {
    return JSON.parse(e);
  }
  getFilterTextForValue(e) {
    return JSON.stringify(e);
  }
  getFilterTextForSnippetValue(e) {
    return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
  }
  getLabelForSnippetValue(e) {
    return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
  }
  getInsertTextForPlainText(e) {
    return e.replace(/[\\\$\}]/g, "\\$&");
  }
  getInsertTextForValue(e, t) {
    const n = JSON.stringify(e, null, "	");
    return n === "{}" ? "{$1}" + t : n === "[]" ? "[$1]" + t : this.getInsertTextForPlainText(n + t);
  }
  getInsertTextForSnippetValue(e, t) {
    return es(e, "", (r) => typeof r == "string" && r[0] === "^" ? r.substr(1) : JSON.stringify(r)) + t;
  }
  getInsertTextForGuessedValue(e, t) {
    switch (typeof e) {
      case "object":
        return e === null ? "${1:null}" + t : this.getInsertTextForValue(e, t);
      case "string":
        let n = JSON.stringify(e);
        return n = n.substr(1, n.length - 2), n = this.getInsertTextForPlainText(n), '"${1:' + n + '}"' + t;
      case "number":
      case "boolean":
        return "${1:" + JSON.stringify(e) + "}" + t;
    }
    return this.getInsertTextForValue(e, t);
  }
  getSuggestionKind(e) {
    if (Array.isArray(e)) {
      const t = e;
      e = t.length > 0 ? t[0] : void 0;
    }
    if (!e)
      return qe.Value;
    switch (e) {
      case "string":
        return qe.Value;
      case "object":
        return qe.Module;
      case "property":
        return qe.Property;
      default:
        return qe.Value;
    }
  }
  getLabelTextForMatchingNode(e, t) {
    switch (e.type) {
      case "array":
        return "[]";
      case "object":
        return "{}";
      default:
        return t.getText().substr(e.offset, e.length);
    }
  }
  getInsertTextForMatchingNode(e, t, n) {
    switch (e.type) {
      case "array":
        return this.getInsertTextForValue([], n);
      case "object":
        return this.getInsertTextForValue({}, n);
      default:
        const r = t.getText().substr(e.offset, e.length) + n;
        return this.getInsertTextForPlainText(r);
    }
  }
  getInsertTextForProperty(e, t, n, r) {
    const i = this.getInsertTextForValue(e, "");
    if (!n)
      return i;
    const s = i + ": ";
    let a, l = 0;
    if (t) {
      if (Array.isArray(t.defaultSnippets)) {
        if (t.defaultSnippets.length === 1) {
          const o = t.defaultSnippets[0].body;
          Qe(o) && (a = this.getInsertTextForSnippetValue(o, ""));
        }
        l += t.defaultSnippets.length;
      }
      if (t.enum && (!a && t.enum.length === 1 && (a = this.getInsertTextForGuessedValue(t.enum[0], "")), l += t.enum.length), Qe(t.const) && (a || (a = this.getInsertTextForGuessedValue(t.const, "")), l++), Qe(t.default) && (a || (a = this.getInsertTextForGuessedValue(t.default, "")), l++), Array.isArray(t.examples) && t.examples.length && (a || (a = this.getInsertTextForGuessedValue(t.examples[0], "")), l += t.examples.length), l === 0) {
        let o = Array.isArray(t.type) ? t.type[0] : t.type;
        switch (o || (t.properties ? o = "object" : t.items && (o = "array")), o) {
          case "boolean":
            a = "$1";
            break;
          case "string":
            a = '"$1"';
            break;
          case "object":
            a = "{$1}";
            break;
          case "array":
            a = "[$1]";
            break;
          case "number":
          case "integer":
            a = "${1:0}";
            break;
          case "null":
            a = "${1:null}";
            break;
          default:
            return i;
        }
      }
    }
    return (!a || l > 1) && (a = "$1"), s + a + r;
  }
  getCurrentWord(e, t) {
    let n = t - 1;
    const r = e.getText();
    for (; n >= 0 && ` 	
\r\v":{[,]}`.indexOf(r.charAt(n)) === -1; )
      n--;
    return r.substring(n + 1, t);
  }
  evaluateSeparatorAfter(e, t) {
    const n = zt(e.getText(), !0);
    switch (n.setPosition(t), n.scan()) {
      case 5:
      case 2:
      case 4:
      case 17:
        return "";
      default:
        return ",";
    }
  }
  findItemAtOffset(e, t, n) {
    const r = zt(t.getText(), !0), i = e.items;
    for (let s = i.length - 1; s >= 0; s--) {
      const a = i[s];
      if (n > a.offset + a.length)
        return r.setPosition(a.offset + a.length), r.scan() === 5 && n >= r.getTokenOffset() + r.getTokenLength() ? s + 1 : s;
      if (n >= a.offset)
        return s;
    }
    return 0;
  }
  isInComment(e, t, n) {
    const r = zt(e.getText(), !1);
    r.setPosition(t);
    let i = r.scan();
    for (; i !== 17 && r.getTokenOffset() + r.getTokenLength() < n; )
      i = r.scan();
    return (i === 12 || i === 13) && r.getTokenOffset() <= n;
  }
  fromMarkup(e) {
    if (e && this.doesSupportMarkdown())
      return {
        kind: Jt.Markdown,
        value: e
      };
  }
  doesSupportMarkdown() {
    var e, t, n;
    if (!Qe(this.supportsMarkdown)) {
      const r = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.documentationFormat;
      this.supportsMarkdown = Array.isArray(r) && r.indexOf(Jt.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
  doesSupportsCommitCharacters() {
    var e, t, n;
    return Qe(this.supportsCommitCharacters) || (this.labelDetailsSupport = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.commitCharactersSupport), this.supportsCommitCharacters;
  }
  doesSupportsLabelDetails() {
    var e, t, n;
    return Qe(this.labelDetailsSupport) || (this.labelDetailsSupport = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.labelDetailsSupport), this.labelDetailsSupport;
  }
}, Yf = class {
  constructor(e, t = [], n) {
    this.schemaService = e, this.contributions = t, this.promise = n || Promise;
  }
  doHover(e, t, n) {
    const r = e.offsetAt(t);
    let i = n.getNodeFromOffset(r);
    if (!i || (i.type === "object" || i.type === "array") && r > i.offset + 1 && r < i.offset + i.length - 1)
      return this.promise.resolve(null);
    const s = i;
    if (i.type === "string") {
      const u = i.parent;
      if (u && u.type === "property" && u.keyNode === i && (i = u.valueNode, !i))
        return this.promise.resolve(null);
    }
    const a = K.create(e.positionAt(s.offset), e.positionAt(s.offset + s.length)), l = (u) => ({
      contents: u,
      range: a
    }), o = Ci(i);
    for (let u = this.contributions.length - 1; u >= 0; u--) {
      const c = this.contributions[u].getInfoContribution(e.uri, o);
      if (c)
        return c.then((g) => l(g));
    }
    return this.schemaService.getSchemaForResource(e.uri, n).then((u) => {
      if (u && i) {
        const h = n.getMatchingSchemas(u.schema, i.offset);
        let c, g, d, m;
        h.every((_) => {
          if (_.node === i && !_.inverted && _.schema && (c = c || _.schema.title, g = g || _.schema.markdownDescription || si(_.schema.description), _.schema.enum)) {
            const L = _.schema.enum.indexOf(Xt(i));
            _.schema.markdownEnumDescriptions ? d = _.schema.markdownEnumDescriptions[L] : _.schema.enumDescriptions && (d = si(_.schema.enumDescriptions[L])), d && (m = _.schema.enum[L], typeof m != "string" && (m = JSON.stringify(m)));
          }
          return !0;
        });
        let p = "";
        return c && (p = si(c)), g && (p.length > 0 && (p += `

`), p += g), d && (p.length > 0 && (p += `

`), p += `\`${Qf(m)}\`: ${d}`), l([p]);
      }
      return null;
    });
  }
};
function si(e) {
  if (e)
    return e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, `$1

$3`).replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
}
function Qf(e) {
  return e.indexOf("`") !== -1 ? "`` " + e + " ``" : e;
}
var Zf = class {
  constructor(e, t) {
    this.jsonSchemaService = e, this.promise = t, this.validationEnabled = !0;
  }
  configure(e) {
    e && (this.validationEnabled = e.validate !== !1, this.commentSeverity = e.allowComments ? void 0 : He.Error);
  }
  doValidation(e, t, n, r) {
    if (!this.validationEnabled)
      return this.promise.resolve([]);
    const i = [], s = {}, a = (o) => {
      const u = o.range.start.line + " " + o.range.start.character + " " + o.message;
      s[u] || (s[u] = !0, i.push(o));
    }, l = (o) => {
      let u = n != null && n.trailingCommas ? ur(n.trailingCommas) : He.Error, h = n != null && n.comments ? ur(n.comments) : this.commentSeverity, c = n != null && n.schemaValidation ? ur(n.schemaValidation) : He.Warning, g = n != null && n.schemaRequest ? ur(n.schemaRequest) : He.Warning;
      if (o) {
        const d = (m, p) => {
          if (t.root && g) {
            const _ = t.root, L = _.type === "object" ? _.properties[0] : void 0;
            if (L && L.keyNode.value === "$schema") {
              const A = L.valueNode || L, b = K.create(e.positionAt(A.offset), e.positionAt(A.offset + A.length));
              a(vt.create(b, m, g, p));
            } else {
              const A = K.create(e.positionAt(_.offset), e.positionAt(_.offset + 1));
              a(vt.create(A, m, g, p));
            }
          }
        };
        if (o.errors.length)
          d(o.errors[0], ne.SchemaResolveError);
        else if (c) {
          for (const p of o.warnings)
            d(p, ne.SchemaUnsupportedFeature);
          const m = t.validate(e, o.schema, c, n == null ? void 0 : n.schemaDraft);
          m && m.forEach(a);
        }
        jl(o.schema) && (h = void 0), Gl(o.schema) && (u = void 0);
      }
      for (const d of t.syntaxErrors) {
        if (d.code === ne.TrailingComma) {
          if (typeof u != "number")
            continue;
          d.severity = u;
        }
        a(d);
      }
      if (typeof h == "number") {
        const d = P("Comments are not permitted in JSON.");
        t.comments.forEach((m) => {
          a(vt.create(m, d, h, ne.CommentNotPermitted));
        });
      }
      return i;
    };
    if (r) {
      const o = r.id || "schemaservice://untitled/" + Kf++;
      return this.jsonSchemaService.registerExternalSchema({ uri: o, schema: r }).getResolvedSchema().then((h) => l(h));
    }
    return this.jsonSchemaService.getSchemaForResource(e.uri, t).then((o) => l(o));
  }
  getLanguageStatus(e, t) {
    return { schemas: this.jsonSchemaService.getSchemaURIsForResource(e.uri, t) };
  }
}, Kf = 0;
function jl(e) {
  if (e && typeof e == "object") {
    if (lt(e.allowComments))
      return e.allowComments;
    if (e.allOf)
      for (const t of e.allOf) {
        const n = jl(t);
        if (lt(n))
          return n;
      }
  }
}
function Gl(e) {
  if (e && typeof e == "object") {
    if (lt(e.allowTrailingCommas))
      return e.allowTrailingCommas;
    const t = e;
    if (lt(t.allowsTrailingCommas))
      return t.allowsTrailingCommas;
    if (e.allOf)
      for (const n of e.allOf) {
        const r = Gl(n);
        if (lt(r))
          return r;
      }
  }
}
function ur(e) {
  switch (e) {
    case "error":
      return He.Error;
    case "warning":
      return He.Warning;
    case "ignore":
      return;
  }
}
var Zo = 48, Cf = 57, eh = 65, cr = 97, th = 102;
function me(e) {
  return e < Zo ? 0 : e <= Cf ? e - Zo : (e < cr && (e += cr - eh), e >= cr && e <= th ? e - cr + 10 : 0);
}
function nh(e) {
  if (e[0] === "#")
    switch (e.length) {
      case 4:
        return {
          red: me(e.charCodeAt(1)) * 17 / 255,
          green: me(e.charCodeAt(2)) * 17 / 255,
          blue: me(e.charCodeAt(3)) * 17 / 255,
          alpha: 1
        };
      case 5:
        return {
          red: me(e.charCodeAt(1)) * 17 / 255,
          green: me(e.charCodeAt(2)) * 17 / 255,
          blue: me(e.charCodeAt(3)) * 17 / 255,
          alpha: me(e.charCodeAt(4)) * 17 / 255
        };
      case 7:
        return {
          red: (me(e.charCodeAt(1)) * 16 + me(e.charCodeAt(2))) / 255,
          green: (me(e.charCodeAt(3)) * 16 + me(e.charCodeAt(4))) / 255,
          blue: (me(e.charCodeAt(5)) * 16 + me(e.charCodeAt(6))) / 255,
          alpha: 1
        };
      case 9:
        return {
          red: (me(e.charCodeAt(1)) * 16 + me(e.charCodeAt(2))) / 255,
          green: (me(e.charCodeAt(3)) * 16 + me(e.charCodeAt(4))) / 255,
          blue: (me(e.charCodeAt(5)) * 16 + me(e.charCodeAt(6))) / 255,
          alpha: (me(e.charCodeAt(7)) * 16 + me(e.charCodeAt(8))) / 255
        };
    }
}
var rh = class {
  constructor(e) {
    this.schemaService = e;
  }
  findDocumentSymbols(e, t, n = { resultLimit: Number.MAX_VALUE }) {
    const r = t.root;
    if (!r)
      return [];
    let i = n.resultLimit || Number.MAX_VALUE;
    const s = e.uri;
    if ((s === "vscode://defaultsettings/keybindings.json" || er(s.toLowerCase(), "/user/keybindings.json")) && r.type === "array") {
      const c = [];
      for (const g of r.items)
        if (g.type === "object") {
          for (const d of g.properties)
            if (d.keyNode.value === "key" && d.valueNode) {
              const m = En.create(e.uri, At(e, g));
              if (c.push({ name: Ko(d.valueNode), kind: rt.Function, location: m }), i--, i <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), c;
            }
        }
      return c;
    }
    const a = [
      { node: r, containerName: "" }
    ];
    let l = 0, o = !1;
    const u = [], h = (c, g) => {
      c.type === "array" ? c.items.forEach((d) => {
        d && a.push({ node: d, containerName: g });
      }) : c.type === "object" && c.properties.forEach((d) => {
        const m = d.valueNode;
        if (m)
          if (i > 0) {
            i--;
            const p = En.create(e.uri, At(e, d)), _ = g ? g + "." + d.keyNode.value : d.keyNode.value;
            u.push({ name: this.getKeyLabel(d), kind: this.getSymbolKind(m.type), location: p, containerName: g }), a.push({ node: m, containerName: _ });
          } else
            o = !0;
      });
    };
    for (; l < a.length; ) {
      const c = a[l++];
      h(c.node, c.containerName);
    }
    return o && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), u;
  }
  findDocumentSymbols2(e, t, n = { resultLimit: Number.MAX_VALUE }) {
    const r = t.root;
    if (!r)
      return [];
    let i = n.resultLimit || Number.MAX_VALUE;
    const s = e.uri;
    if ((s === "vscode://defaultsettings/keybindings.json" || er(s.toLowerCase(), "/user/keybindings.json")) && r.type === "array") {
      const c = [];
      for (const g of r.items)
        if (g.type === "object") {
          for (const d of g.properties)
            if (d.keyNode.value === "key" && d.valueNode) {
              const m = At(e, g), p = At(e, d.keyNode);
              if (c.push({ name: Ko(d.valueNode), kind: rt.Function, range: m, selectionRange: p }), i--, i <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), c;
            }
        }
      return c;
    }
    const a = [], l = [
      { node: r, result: a }
    ];
    let o = 0, u = !1;
    const h = (c, g) => {
      c.type === "array" ? c.items.forEach((d, m) => {
        if (d)
          if (i > 0) {
            i--;
            const p = At(e, d), _ = p, A = { name: String(m), kind: this.getSymbolKind(d.type), range: p, selectionRange: _, children: [] };
            g.push(A), l.push({ result: A.children, node: d });
          } else
            u = !0;
      }) : c.type === "object" && c.properties.forEach((d) => {
        const m = d.valueNode;
        if (m)
          if (i > 0) {
            i--;
            const p = At(e, d), _ = At(e, d.keyNode), L = [], A = { name: this.getKeyLabel(d), kind: this.getSymbolKind(m.type), range: p, selectionRange: _, children: L, detail: this.getDetail(m) };
            g.push(A), l.push({ result: L, node: m });
          } else
            u = !0;
      });
    };
    for (; o < l.length; ) {
      const c = l[o++];
      h(c.node, c.result);
    }
    return u && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), a;
  }
  getSymbolKind(e) {
    switch (e) {
      case "object":
        return rt.Module;
      case "string":
        return rt.String;
      case "number":
        return rt.Number;
      case "array":
        return rt.Array;
      case "boolean":
        return rt.Boolean;
      default:
        return rt.Variable;
    }
  }
  getKeyLabel(e) {
    let t = e.keyNode.value;
    return t && (t = t.replace(/[\n]/g, "↵")), t && t.trim() ? t : `"${t}"`;
  }
  getDetail(e) {
    if (e) {
      if (e.type === "boolean" || e.type === "number" || e.type === "null" || e.type === "string")
        return String(e.value);
      if (e.type === "array")
        return e.children.length ? void 0 : "[]";
      if (e.type === "object")
        return e.children.length ? void 0 : "{}";
    }
  }
  findDocumentColors(e, t, n) {
    return this.schemaService.getSchemaForResource(e.uri, t).then((r) => {
      const i = [];
      if (r) {
        let s = n && typeof n.resultLimit == "number" ? n.resultLimit : Number.MAX_VALUE;
        const a = t.getMatchingSchemas(r.schema), l = {};
        for (const o of a)
          if (!o.inverted && o.schema && (o.schema.format === "color" || o.schema.format === "color-hex") && o.node && o.node.type === "string") {
            const u = String(o.node.offset);
            if (!l[u]) {
              const h = nh(Xt(o.node));
              if (h) {
                const c = At(e, o.node);
                i.push({ color: h, range: c });
              }
              if (l[u] = !0, s--, s <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(e.uri), i;
            }
          }
      }
      return i;
    });
  }
  getColorPresentations(e, t, n, r) {
    const i = [], s = Math.round(n.red * 255), a = Math.round(n.green * 255), l = Math.round(n.blue * 255);
    function o(h) {
      const c = h.toString(16);
      return c.length !== 2 ? "0" + c : c;
    }
    let u;
    return n.alpha === 1 ? u = `#${o(s)}${o(a)}${o(l)}` : u = `#${o(s)}${o(a)}${o(l)}${o(Math.round(n.alpha * 255))}`, i.push({ label: u, textEdit: ft.replace(r, JSON.stringify(u)) }), i;
  }
};
function At(e, t) {
  return K.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
}
function Ko(e) {
  return Xt(e) || P("<empty>");
}
var ts = {
  schemaAssociations: [],
  schemas: {
    // bundle the schema-schema to include (localized) descriptions
    "http://json-schema.org/draft-04/schema#": {
      $schema: "http://json-schema.org/draft-04/schema#",
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: {
            $ref: "#"
          }
        },
        positiveInteger: {
          type: "integer",
          minimum: 0
        },
        positiveIntegerDefault0: {
          allOf: [
            {
              $ref: "#/definitions/positiveInteger"
            },
            {
              default: 0
            }
          ]
        },
        simpleTypes: {
          type: "string",
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string"
          ]
        },
        stringArray: {
          type: "array",
          items: {
            type: "string"
          },
          minItems: 1,
          uniqueItems: !0
        }
      },
      type: "object",
      properties: {
        id: {
          type: "string",
          format: "uri"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: {},
        multipleOf: {
          type: "number",
          minimum: 0,
          exclusiveMinimum: !0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "boolean",
          default: !1
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "boolean",
          default: !1
        },
        maxLength: {
          allOf: [
            {
              $ref: "#/definitions/positiveInteger"
            }
          ]
        },
        minLength: {
          allOf: [
            {
              $ref: "#/definitions/positiveIntegerDefault0"
            }
          ]
        },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: {
          anyOf: [
            {
              type: "boolean"
            },
            {
              $ref: "#"
            }
          ],
          default: {}
        },
        items: {
          anyOf: [
            {
              $ref: "#"
            },
            {
              $ref: "#/definitions/schemaArray"
            }
          ],
          default: {}
        },
        maxItems: {
          allOf: [
            {
              $ref: "#/definitions/positiveInteger"
            }
          ]
        },
        minItems: {
          allOf: [
            {
              $ref: "#/definitions/positiveIntegerDefault0"
            }
          ]
        },
        uniqueItems: {
          type: "boolean",
          default: !1
        },
        maxProperties: {
          allOf: [
            {
              $ref: "#/definitions/positiveInteger"
            }
          ]
        },
        minProperties: {
          allOf: [
            {
              $ref: "#/definitions/positiveIntegerDefault0"
            }
          ]
        },
        required: {
          allOf: [
            {
              $ref: "#/definitions/stringArray"
            }
          ]
        },
        additionalProperties: {
          anyOf: [
            {
              type: "boolean"
            },
            {
              $ref: "#"
            }
          ],
          default: {}
        },
        definitions: {
          type: "object",
          additionalProperties: {
            $ref: "#"
          },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: {
            $ref: "#"
          },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: {
            $ref: "#"
          },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [
              {
                $ref: "#"
              },
              {
                $ref: "#/definitions/stringArray"
              }
            ]
          }
        },
        enum: {
          type: "array",
          minItems: 1,
          uniqueItems: !0
        },
        type: {
          anyOf: [
            {
              $ref: "#/definitions/simpleTypes"
            },
            {
              type: "array",
              items: {
                $ref: "#/definitions/simpleTypes"
              },
              minItems: 1,
              uniqueItems: !0
            }
          ]
        },
        format: {
          anyOf: [
            {
              type: "string",
              enum: [
                "date-time",
                "uri",
                "email",
                "hostname",
                "ipv4",
                "ipv6",
                "regex"
              ]
            },
            {
              type: "string"
            }
          ]
        },
        allOf: {
          allOf: [
            {
              $ref: "#/definitions/schemaArray"
            }
          ]
        },
        anyOf: {
          allOf: [
            {
              $ref: "#/definitions/schemaArray"
            }
          ]
        },
        oneOf: {
          allOf: [
            {
              $ref: "#/definitions/schemaArray"
            }
          ]
        },
        not: {
          allOf: [
            {
              $ref: "#"
            }
          ]
        }
      },
      dependencies: {
        exclusiveMaximum: [
          "maximum"
        ],
        exclusiveMinimum: [
          "minimum"
        ]
      },
      default: {}
    },
    "http://json-schema.org/draft-07/schema#": {
      definitions: {
        schemaArray: {
          type: "array",
          minItems: 1,
          items: { $ref: "#" }
        },
        nonNegativeInteger: {
          type: "integer",
          minimum: 0
        },
        nonNegativeIntegerDefault0: {
          allOf: [
            { $ref: "#/definitions/nonNegativeInteger" },
            { default: 0 }
          ]
        },
        simpleTypes: {
          enum: [
            "array",
            "boolean",
            "integer",
            "null",
            "number",
            "object",
            "string"
          ]
        },
        stringArray: {
          type: "array",
          items: { type: "string" },
          uniqueItems: !0,
          default: []
        }
      },
      type: ["object", "boolean"],
      properties: {
        $id: {
          type: "string",
          format: "uri-reference"
        },
        $schema: {
          type: "string",
          format: "uri"
        },
        $ref: {
          type: "string",
          format: "uri-reference"
        },
        $comment: {
          type: "string"
        },
        title: {
          type: "string"
        },
        description: {
          type: "string"
        },
        default: !0,
        readOnly: {
          type: "boolean",
          default: !1
        },
        examples: {
          type: "array",
          items: !0
        },
        multipleOf: {
          type: "number",
          exclusiveMinimum: 0
        },
        maximum: {
          type: "number"
        },
        exclusiveMaximum: {
          type: "number"
        },
        minimum: {
          type: "number"
        },
        exclusiveMinimum: {
          type: "number"
        },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: {
          type: "string",
          format: "regex"
        },
        additionalItems: { $ref: "#" },
        items: {
          anyOf: [
            { $ref: "#" },
            { $ref: "#/definitions/schemaArray" }
          ],
          default: !0
        },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: {
          type: "boolean",
          default: !1
        },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        properties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          default: {}
        },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: {
            anyOf: [
              { $ref: "#" },
              { $ref: "#/definitions/stringArray" }
            ]
          }
        },
        propertyNames: { $ref: "#" },
        const: !0,
        enum: {
          type: "array",
          items: !0,
          minItems: 1,
          uniqueItems: !0
        },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: !0
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: !0
    }
  }
}, ih = {
  id: P("A unique identifier for the schema."),
  $schema: P("The schema to verify this document against."),
  title: P("A descriptive title of the element."),
  description: P("A long description of the element. Used in hover menus and suggestions."),
  default: P("A default value. Used by suggestions."),
  multipleOf: P("A number that should cleanly divide the current value (i.e. have no remainder)."),
  maximum: P("The maximum numerical value, inclusive by default."),
  exclusiveMaximum: P("Makes the maximum property exclusive."),
  minimum: P("The minimum numerical value, inclusive by default."),
  exclusiveMinimum: P("Makes the minimum property exclusive."),
  maxLength: P("The maximum length of a string."),
  minLength: P("The minimum length of a string."),
  pattern: P("A regular expression to match the string against. It is not implicitly anchored."),
  additionalItems: P("For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."),
  items: P("For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),
  maxItems: P("The maximum number of items that can be inside an array. Inclusive."),
  minItems: P("The minimum number of items that can be inside an array. Inclusive."),
  uniqueItems: P("If all of the items in the array must be unique. Defaults to false."),
  maxProperties: P("The maximum number of properties an object can have. Inclusive."),
  minProperties: P("The minimum number of properties an object can have. Inclusive."),
  required: P("An array of strings that lists the names of all properties required on this object."),
  additionalProperties: P("Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."),
  definitions: P("Not used for validation. Place subschemas here that you wish to reference inline with $ref."),
  properties: P("A map of property names to schemas for each property."),
  patternProperties: P("A map of regular expressions on property names to schemas for matching properties."),
  dependencies: P("A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),
  enum: P("The set of literal values that are valid."),
  type: P("Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),
  format: P("Describes the format expected for the value."),
  allOf: P("An array of schemas, all of which must match."),
  anyOf: P("An array of schemas, where at least one must match."),
  oneOf: P("An array of schemas, exactly one of which must match."),
  not: P("A schema which must not match."),
  $id: P("A unique identifier for the schema."),
  $ref: P("Reference a definition hosted on any location."),
  $comment: P("Comments from schema authors to readers or maintainers of the schema."),
  readOnly: P("Indicates that the value of the instance is managed exclusively by the owning authority."),
  examples: P("Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),
  contains: P('An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'),
  propertyNames: P("If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),
  const: P("An instance validates successfully against this keyword if its value is equal to the value of the keyword."),
  contentMediaType: P("Describes the media type of a string property."),
  contentEncoding: P("Describes the content encoding of a string property."),
  if: P('The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'),
  then: P('The "if" subschema is used for validation when the "if" subschema succeeds.'),
  else: P('The "else" subschema is used for validation when the "if" subschema fails.')
};
for (const e in ts.schemas) {
  const t = ts.schemas[e];
  for (const n in t.properties) {
    let r = t.properties[n];
    typeof r == "boolean" && (r = t.properties[n] = {});
    const i = ih[n];
    i && (r.description = i);
  }
}
var zl;
(() => {
  var e = { 470: (i) => {
    function s(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function a(o, u) {
      for (var h, c = "", g = 0, d = -1, m = 0, p = 0; p <= o.length; ++p) {
        if (p < o.length)
          h = o.charCodeAt(p);
        else {
          if (h === 47)
            break;
          h = 47;
        }
        if (h === 47) {
          if (!(d === p - 1 || m === 1))
            if (d !== p - 1 && m === 2) {
              if (c.length < 2 || g !== 2 || c.charCodeAt(c.length - 1) !== 46 || c.charCodeAt(c.length - 2) !== 46) {
                if (c.length > 2) {
                  var _ = c.lastIndexOf("/");
                  if (_ !== c.length - 1) {
                    _ === -1 ? (c = "", g = 0) : g = (c = c.slice(0, _)).length - 1 - c.lastIndexOf("/"), d = p, m = 0;
                    continue;
                  }
                } else if (c.length === 2 || c.length === 1) {
                  c = "", g = 0, d = p, m = 0;
                  continue;
                }
              }
              u && (c.length > 0 ? c += "/.." : c = "..", g = 2);
            } else
              c.length > 0 ? c += "/" + o.slice(d + 1, p) : c = o.slice(d + 1, p), g = p - d - 1;
          d = p, m = 0;
        } else
          h === 46 && m !== -1 ? ++m : m = -1;
      }
      return c;
    }
    var l = { resolve: function() {
      for (var o, u = "", h = !1, c = arguments.length - 1; c >= -1 && !h; c--) {
        var g;
        c >= 0 ? g = arguments[c] : (o === void 0 && (o = process.cwd()), g = o), s(g), g.length !== 0 && (u = g + "/" + u, h = g.charCodeAt(0) === 47);
      }
      return u = a(u, !h), h ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
    }, normalize: function(o) {
      if (s(o), o.length === 0)
        return ".";
      var u = o.charCodeAt(0) === 47, h = o.charCodeAt(o.length - 1) === 47;
      return (o = a(o, !u)).length !== 0 || u || (o = "."), o.length > 0 && h && (o += "/"), u ? "/" + o : o;
    }, isAbsolute: function(o) {
      return s(o), o.length > 0 && o.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var o, u = 0; u < arguments.length; ++u) {
        var h = arguments[u];
        s(h), h.length > 0 && (o === void 0 ? o = h : o += "/" + h);
      }
      return o === void 0 ? "." : l.normalize(o);
    }, relative: function(o, u) {
      if (s(o), s(u), o === u || (o = l.resolve(o)) === (u = l.resolve(u)))
        return "";
      for (var h = 1; h < o.length && o.charCodeAt(h) === 47; ++h)
        ;
      for (var c = o.length, g = c - h, d = 1; d < u.length && u.charCodeAt(d) === 47; ++d)
        ;
      for (var m = u.length - d, p = g < m ? g : m, _ = -1, L = 0; L <= p; ++L) {
        if (L === p) {
          if (m > p) {
            if (u.charCodeAt(d + L) === 47)
              return u.slice(d + L + 1);
            if (L === 0)
              return u.slice(d + L);
          } else
            g > p && (o.charCodeAt(h + L) === 47 ? _ = L : L === 0 && (_ = 0));
          break;
        }
        var A = o.charCodeAt(h + L);
        if (A !== u.charCodeAt(d + L))
          break;
        A === 47 && (_ = L);
      }
      var b = "";
      for (L = h + _ + 1; L <= c; ++L)
        L !== c && o.charCodeAt(L) !== 47 || (b.length === 0 ? b += ".." : b += "/..");
      return b.length > 0 ? b + u.slice(d + _) : (d += _, u.charCodeAt(d) === 47 && ++d, u.slice(d));
    }, _makeLong: function(o) {
      return o;
    }, dirname: function(o) {
      if (s(o), o.length === 0)
        return ".";
      for (var u = o.charCodeAt(0), h = u === 47, c = -1, g = !0, d = o.length - 1; d >= 1; --d)
        if ((u = o.charCodeAt(d)) === 47) {
          if (!g) {
            c = d;
            break;
          }
        } else
          g = !1;
      return c === -1 ? h ? "/" : "." : h && c === 1 ? "//" : o.slice(0, c);
    }, basename: function(o, u) {
      if (u !== void 0 && typeof u != "string")
        throw new TypeError('"ext" argument must be a string');
      s(o);
      var h, c = 0, g = -1, d = !0;
      if (u !== void 0 && u.length > 0 && u.length <= o.length) {
        if (u.length === o.length && u === o)
          return "";
        var m = u.length - 1, p = -1;
        for (h = o.length - 1; h >= 0; --h) {
          var _ = o.charCodeAt(h);
          if (_ === 47) {
            if (!d) {
              c = h + 1;
              break;
            }
          } else
            p === -1 && (d = !1, p = h + 1), m >= 0 && (_ === u.charCodeAt(m) ? --m == -1 && (g = h) : (m = -1, g = p));
        }
        return c === g ? g = p : g === -1 && (g = o.length), o.slice(c, g);
      }
      for (h = o.length - 1; h >= 0; --h)
        if (o.charCodeAt(h) === 47) {
          if (!d) {
            c = h + 1;
            break;
          }
        } else
          g === -1 && (d = !1, g = h + 1);
      return g === -1 ? "" : o.slice(c, g);
    }, extname: function(o) {
      s(o);
      for (var u = -1, h = 0, c = -1, g = !0, d = 0, m = o.length - 1; m >= 0; --m) {
        var p = o.charCodeAt(m);
        if (p !== 47)
          c === -1 && (g = !1, c = m + 1), p === 46 ? u === -1 ? u = m : d !== 1 && (d = 1) : u !== -1 && (d = -1);
        else if (!g) {
          h = m + 1;
          break;
        }
      }
      return u === -1 || c === -1 || d === 0 || d === 1 && u === c - 1 && u === h + 1 ? "" : o.slice(u, c);
    }, format: function(o) {
      if (o === null || typeof o != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
      return function(u, h) {
        var c = h.dir || h.root, g = h.base || (h.name || "") + (h.ext || "");
        return c ? c === h.root ? c + g : c + "/" + g : g;
      }(0, o);
    }, parse: function(o) {
      s(o);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (o.length === 0)
        return u;
      var h, c = o.charCodeAt(0), g = c === 47;
      g ? (u.root = "/", h = 1) : h = 0;
      for (var d = -1, m = 0, p = -1, _ = !0, L = o.length - 1, A = 0; L >= h; --L)
        if ((c = o.charCodeAt(L)) !== 47)
          p === -1 && (_ = !1, p = L + 1), c === 46 ? d === -1 ? d = L : A !== 1 && (A = 1) : d !== -1 && (A = -1);
        else if (!_) {
          m = L + 1;
          break;
        }
      return d === -1 || p === -1 || A === 0 || A === 1 && d === p - 1 && d === m + 1 ? p !== -1 && (u.base = u.name = m === 0 && g ? o.slice(1, p) : o.slice(m, p)) : (m === 0 && g ? (u.name = o.slice(1, d), u.base = o.slice(1, p)) : (u.name = o.slice(m, d), u.base = o.slice(m, p)), u.ext = o.slice(d, p)), m > 0 ? u.dir = o.slice(0, m - 1) : g && (u.dir = "/"), u;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    l.posix = l, i.exports = l;
  } }, t = {};
  function n(i) {
    var s = t[i];
    if (s !== void 0)
      return s.exports;
    var a = t[i] = { exports: {} };
    return e[i](a, a.exports, n), a.exports;
  }
  n.d = (i, s) => {
    for (var a in s)
      n.o(s, a) && !n.o(i, a) && Object.defineProperty(i, a, { enumerable: !0, get: s[a] });
  }, n.o = (i, s) => Object.prototype.hasOwnProperty.call(i, s), n.r = (i) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
  };
  var r = {};
  (() => {
    let i;
    n.r(r), n.d(r, { URI: () => g, Utils: () => q }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, l = /^\/\//;
    function o(F, k) {
      if (!F.scheme && k)
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${F.authority}", path: "${F.path}", query: "${F.query}", fragment: "${F.fragment}"}`);
      if (F.scheme && !s.test(F.scheme))
        throw new Error("[UriError]: Scheme contains illegal characters.");
      if (F.path) {
        if (F.authority) {
          if (!a.test(F.path))
            throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(F.path))
          throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", h = "/", c = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class g {
      constructor(k, I, U, V, B, $ = !1) {
        Lt(this, "scheme");
        Lt(this, "authority");
        Lt(this, "path");
        Lt(this, "query");
        Lt(this, "fragment");
        typeof k == "object" ? (this.scheme = k.scheme || u, this.authority = k.authority || u, this.path = k.path || u, this.query = k.query || u, this.fragment = k.fragment || u) : (this.scheme = /* @__PURE__ */ function(J, Y) {
          return J || Y ? J : "file";
        }(k, $), this.authority = I || u, this.path = function(J, Y) {
          switch (J) {
            case "https":
            case "http":
            case "file":
              Y ? Y[0] !== h && (Y = h + Y) : Y = h;
          }
          return Y;
        }(this.scheme, U || u), this.query = V || u, this.fragment = B || u, o(this, $));
      }
      static isUri(k) {
        return k instanceof g || !!k && typeof k.authority == "string" && typeof k.fragment == "string" && typeof k.path == "string" && typeof k.query == "string" && typeof k.scheme == "string" && typeof k.fsPath == "string" && typeof k.with == "function" && typeof k.toString == "function";
      }
      get fsPath() {
        return A(this);
      }
      with(k) {
        if (!k)
          return this;
        let { scheme: I, authority: U, path: V, query: B, fragment: $ } = k;
        return I === void 0 ? I = this.scheme : I === null && (I = u), U === void 0 ? U = this.authority : U === null && (U = u), V === void 0 ? V = this.path : V === null && (V = u), B === void 0 ? B = this.query : B === null && (B = u), $ === void 0 ? $ = this.fragment : $ === null && ($ = u), I === this.scheme && U === this.authority && V === this.path && B === this.query && $ === this.fragment ? this : new m(I, U, V, B, $);
      }
      static parse(k, I = !1) {
        const U = c.exec(k);
        return U ? new m(U[2] || u, S(U[4] || u), S(U[5] || u), S(U[7] || u), S(U[9] || u), I) : new m(u, u, u, u, u);
      }
      static file(k) {
        let I = u;
        if (i && (k = k.replace(/\\/g, h)), k[0] === h && k[1] === h) {
          const U = k.indexOf(h, 2);
          U === -1 ? (I = k.substring(2), k = h) : (I = k.substring(2, U), k = k.substring(U) || h);
        }
        return new m("file", I, k, u, u);
      }
      static from(k) {
        const I = new m(k.scheme, k.authority, k.path, k.query, k.fragment);
        return o(I, !0), I;
      }
      toString(k = !1) {
        return b(this, k);
      }
      toJSON() {
        return this;
      }
      static revive(k) {
        if (k) {
          if (k instanceof g)
            return k;
          {
            const I = new m(k);
            return I._formatted = k.external, I._fsPath = k._sep === d ? k.fsPath : null, I;
          }
        }
        return k;
      }
    }
    const d = i ? 1 : void 0;
    class m extends g {
      constructor() {
        super(...arguments);
        Lt(this, "_formatted", null);
        Lt(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = A(this)), this._fsPath;
      }
      toString(I = !1) {
        return I ? b(this, !0) : (this._formatted || (this._formatted = b(this, !1)), this._formatted);
      }
      toJSON() {
        const I = { $mid: 1 };
        return this._fsPath && (I.fsPath = this._fsPath, I._sep = d), this._formatted && (I.external = this._formatted), this.path && (I.path = this.path), this.scheme && (I.scheme = this.scheme), this.authority && (I.authority = this.authority), this.query && (I.query = this.query), this.fragment && (I.fragment = this.fragment), I;
      }
    }
    const p = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function _(F, k, I) {
      let U, V = -1;
      for (let B = 0; B < F.length; B++) {
        const $ = F.charCodeAt(B);
        if ($ >= 97 && $ <= 122 || $ >= 65 && $ <= 90 || $ >= 48 && $ <= 57 || $ === 45 || $ === 46 || $ === 95 || $ === 126 || k && $ === 47 || I && $ === 91 || I && $ === 93 || I && $ === 58)
          V !== -1 && (U += encodeURIComponent(F.substring(V, B)), V = -1), U !== void 0 && (U += F.charAt(B));
        else {
          U === void 0 && (U = F.substr(0, B));
          const J = p[$];
          J !== void 0 ? (V !== -1 && (U += encodeURIComponent(F.substring(V, B)), V = -1), U += J) : V === -1 && (V = B);
        }
      }
      return V !== -1 && (U += encodeURIComponent(F.substring(V))), U !== void 0 ? U : F;
    }
    function L(F) {
      let k;
      for (let I = 0; I < F.length; I++) {
        const U = F.charCodeAt(I);
        U === 35 || U === 63 ? (k === void 0 && (k = F.substr(0, I)), k += p[U]) : k !== void 0 && (k += F[I]);
      }
      return k !== void 0 ? k : F;
    }
    function A(F, k) {
      let I;
      return I = F.authority && F.path.length > 1 && F.scheme === "file" ? `//${F.authority}${F.path}` : F.path.charCodeAt(0) === 47 && (F.path.charCodeAt(1) >= 65 && F.path.charCodeAt(1) <= 90 || F.path.charCodeAt(1) >= 97 && F.path.charCodeAt(1) <= 122) && F.path.charCodeAt(2) === 58 ? F.path[1].toLowerCase() + F.path.substr(2) : F.path, i && (I = I.replace(/\//g, "\\")), I;
    }
    function b(F, k) {
      const I = k ? L : _;
      let U = "", { scheme: V, authority: B, path: $, query: J, fragment: Y } = F;
      if (V && (U += V, U += ":"), (B || V === "file") && (U += h, U += h), B) {
        let C = B.indexOf("@");
        if (C !== -1) {
          const ge = B.substr(0, C);
          B = B.substr(C + 1), C = ge.lastIndexOf(":"), C === -1 ? U += I(ge, !1, !1) : (U += I(ge.substr(0, C), !1, !1), U += ":", U += I(ge.substr(C + 1), !1, !0)), U += "@";
        }
        B = B.toLowerCase(), C = B.lastIndexOf(":"), C === -1 ? U += I(B, !1, !0) : (U += I(B.substr(0, C), !1, !0), U += B.substr(C));
      }
      if ($) {
        if ($.length >= 3 && $.charCodeAt(0) === 47 && $.charCodeAt(2) === 58) {
          const C = $.charCodeAt(1);
          C >= 65 && C <= 90 && ($ = `/${String.fromCharCode(C + 32)}:${$.substr(3)}`);
        } else if ($.length >= 2 && $.charCodeAt(1) === 58) {
          const C = $.charCodeAt(0);
          C >= 65 && C <= 90 && ($ = `${String.fromCharCode(C + 32)}:${$.substr(2)}`);
        }
        U += I($, !0, !1);
      }
      return J && (U += "?", U += I(J, !1, !1)), Y && (U += "#", U += k ? Y : _(Y, !1, !1)), U;
    }
    function E(F) {
      try {
        return decodeURIComponent(F);
      } catch {
        return F.length > 3 ? F.substr(0, 3) + E(F.substr(3)) : F;
      }
    }
    const x = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function S(F) {
      return F.match(x) ? F.replace(x, (k) => E(k)) : F;
    }
    var N = n(470);
    const T = N.posix || N, D = "/";
    var q;
    (function(F) {
      F.joinPath = function(k, ...I) {
        return k.with({ path: T.join(k.path, ...I) });
      }, F.resolvePath = function(k, ...I) {
        let U = k.path, V = !1;
        U[0] !== D && (U = D + U, V = !0);
        let B = T.resolve(U, ...I);
        return V && B[0] === D && !k.authority && (B = B.substring(1)), k.with({ path: B });
      }, F.dirname = function(k) {
        if (k.path.length === 0 || k.path === D)
          return k;
        let I = T.dirname(k.path);
        return I.length === 1 && I.charCodeAt(0) === 46 && (I = ""), k.with({ path: I });
      }, F.basename = function(k) {
        return T.basename(k.path);
      }, F.extname = function(k) {
        return T.extname(k.path);
      };
    })(q || (q = {}));
  })(), zl = r;
})();
var { URI: Tn, Utils: Uh } = zl;
function sh(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  const n = String(e);
  let r = "";
  const i = !!t, s = !!t;
  let a = !1;
  const l = t && typeof t.flags == "string" ? t.flags : "";
  let o;
  for (let u = 0, h = n.length; u < h; u++)
    switch (o = n[u], o) {
      case "/":
      case "$":
      case "^":
      case "+":
      case ".":
      case "(":
      case ")":
      case "=":
      case "!":
      case "|":
        r += "\\" + o;
        break;
      case "?":
        if (i) {
          r += ".";
          break;
        }
      case "[":
      case "]":
        if (i) {
          r += o;
          break;
        }
      case "{":
        if (i) {
          a = !0, r += "(";
          break;
        }
      case "}":
        if (i) {
          a = !1, r += ")";
          break;
        }
      case ",":
        if (a) {
          r += "|";
          break;
        }
        r += "\\" + o;
        break;
      case "*":
        const c = n[u - 1];
        let g = 1;
        for (; n[u + 1] === "*"; )
          g++, u++;
        const d = n[u + 1];
        s ? g > 1 && (c === "/" || c === void 0 || c === "{" || c === ",") && (d === "/" || d === void 0 || d === "," || d === "}") ? (d === "/" ? u++ : c === "/" && r.endsWith("\\/") && (r = r.substr(0, r.length - 2)), r += "((?:[^/]*(?:/|$))*)") : r += "([^/]*)" : r += ".*";
        break;
      default:
        r += o;
    }
  return (!l || !~l.indexOf("g")) && (r = "^" + r + "$"), new RegExp(r, l);
}
var ah = "!", oh = "/", lh = class {
  constructor(e, t, n) {
    this.folderUri = t, this.uris = n, this.globWrappers = [];
    try {
      for (let r of e) {
        const i = r[0] !== ah;
        i || (r = r.substring(1)), r.length > 0 && (r[0] === oh && (r = r.substring(1)), this.globWrappers.push({
          regexp: sh("**/" + r, { extended: !0, globstar: !0 }),
          include: i
        }));
      }
      t && (t = Xl(t), t.endsWith("/") || (t = t + "/"), this.folderUri = t);
    } catch {
      this.globWrappers.length = 0, this.uris = [];
    }
  }
  matchesPattern(e) {
    if (this.folderUri && !e.startsWith(this.folderUri))
      return !1;
    let t = !1;
    for (const { regexp: n, include: r } of this.globWrappers)
      n.test(e) && (t = r);
    return t;
  }
  getURIs() {
    return this.uris;
  }
}, uh = class {
  constructor(e, t, n) {
    this.service = e, this.uri = t, this.dependencies = /* @__PURE__ */ new Set(), this.anchors = void 0, n && (this.unresolvedSchema = this.service.promise.resolve(new On(n)));
  }
  getUnresolvedSchema() {
    return this.unresolvedSchema || (this.unresolvedSchema = this.service.loadSchema(this.uri)), this.unresolvedSchema;
  }
  getResolvedSchema() {
    return this.resolvedSchema || (this.resolvedSchema = this.getUnresolvedSchema().then((e) => this.service.resolveSchemaContent(e, this))), this.resolvedSchema;
  }
  clearSchema() {
    const e = !!this.unresolvedSchema;
    return this.resolvedSchema = void 0, this.unresolvedSchema = void 0, this.dependencies.clear(), this.anchors = void 0, e;
  }
}, On = class {
  constructor(e, t = []) {
    this.schema = e, this.errors = t;
  }
}, Co = class {
  constructor(e, t = [], n = [], r) {
    this.schema = e, this.errors = t, this.warnings = n, this.schemaDraft = r;
  }
  getSection(e) {
    const t = this.getSectionRecursive(e, this.schema);
    if (t)
      return Be(t);
  }
  getSectionRecursive(e, t) {
    if (!t || typeof t == "boolean" || e.length === 0)
      return t;
    const n = e.shift();
    if (t.properties && typeof t.properties[n])
      return this.getSectionRecursive(e, t.properties[n]);
    if (t.patternProperties)
      for (const r of Object.keys(t.patternProperties)) {
        const i = Pr(r);
        if (i != null && i.test(n))
          return this.getSectionRecursive(e, t.patternProperties[r]);
      }
    else {
      if (typeof t.additionalProperties == "object")
        return this.getSectionRecursive(e, t.additionalProperties);
      if (n.match("[0-9]+")) {
        if (Array.isArray(t.items)) {
          const r = parseInt(n, 10);
          if (!isNaN(r) && t.items[r])
            return this.getSectionRecursive(e, t.items[r]);
        } else if (t.items)
          return this.getSectionRecursive(e, t.items);
      }
    }
  }
}, ch = class {
  constructor(e, t, n) {
    this.contextService = t, this.requestService = e, this.promiseConstructor = n || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = [], this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {};
  }
  getRegisteredSchemaIds(e) {
    return Object.keys(this.registeredSchemasIds).filter((t) => {
      const n = Tn.parse(t).scheme;
      return n !== "schemaservice" && (!e || e(n));
    });
  }
  get promise() {
    return this.promiseConstructor;
  }
  dispose() {
    for (; this.callOnDispose.length > 0; )
      this.callOnDispose.pop()();
  }
  onResourceChange(e) {
    this.cachedSchemaForResource = void 0;
    let t = !1;
    e = Et(e);
    const n = [e], r = Object.keys(this.schemasById).map((i) => this.schemasById[i]);
    for (; n.length; ) {
      const i = n.pop();
      for (let s = 0; s < r.length; s++) {
        const a = r[s];
        a && (a.uri === i || a.dependencies.has(i)) && (a.uri !== i && n.push(a.uri), a.clearSchema() && (t = !0), r[s] = void 0);
      }
    }
    return t;
  }
  setSchemaContributions(e) {
    if (e.schemas) {
      const t = e.schemas;
      for (const n in t) {
        const r = Et(n);
        this.contributionSchemas[r] = this.addSchemaHandle(r, t[n]);
      }
    }
    if (Array.isArray(e.schemaAssociations)) {
      const t = e.schemaAssociations;
      for (let n of t) {
        const r = n.uris.map(Et), i = this.addFilePatternAssociation(n.pattern, n.folderUri, r);
        this.contributionAssociations.push(i);
      }
    }
  }
  addSchemaHandle(e, t) {
    const n = new uh(this, e, t);
    return this.schemasById[e] = n, n;
  }
  getOrAddSchemaHandle(e, t) {
    return this.schemasById[e] || this.addSchemaHandle(e, t);
  }
  addFilePatternAssociation(e, t, n) {
    const r = new lh(e, t, n);
    return this.filePatternAssociations.push(r), r;
  }
  registerExternalSchema(e) {
    const t = Et(e.uri);
    return this.registeredSchemasIds[t] = !0, this.cachedSchemaForResource = void 0, e.fileMatch && e.fileMatch.length && this.addFilePatternAssociation(e.fileMatch, e.folderUri, [t]), e.schema ? this.addSchemaHandle(t, e.schema) : this.getOrAddSchemaHandle(t);
  }
  clearExternalSchemas() {
    this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {}, this.cachedSchemaForResource = void 0;
    for (const e in this.contributionSchemas)
      this.schemasById[e] = this.contributionSchemas[e], this.registeredSchemasIds[e] = !0;
    for (const e of this.contributionAssociations)
      this.filePatternAssociations.push(e);
  }
  getResolvedSchema(e) {
    const t = Et(e), n = this.schemasById[t];
    return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
  }
  loadSchema(e) {
    if (!this.requestService) {
      const t = P("Unable to load schema from '{0}'. No schema request service available", Pn(e));
      return this.promise.resolve(new On({}, [t]));
    }
    return e.startsWith("http://json-schema.org/") && (e = "https" + e.substring(4)), this.requestService(e).then((t) => {
      if (!t) {
        const s = P("Unable to load schema from '{0}': No content.", Pn(e));
        return new On({}, [s]);
      }
      const n = [];
      t.charCodeAt(0) === 65279 && (n.push(P("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", Pn(e))), t = t.trimStart());
      let r = {};
      const i = [];
      return r = Tf(t, i), i.length && n.push(P("Unable to parse content from '{0}': Parse error at offset {1}.", Pn(e), i[0].offset)), new On(r, n);
    }, (t) => {
      let n = t.toString();
      const r = t.toString().split("Error: ");
      return r.length > 1 && (n = r[1]), er(n, ".") && (n = n.substr(0, n.length - 1)), new On({}, [P("Unable to load schema from '{0}': {1}.", Pn(e), n)]);
    });
  }
  resolveSchemaContent(e, t) {
    const n = e.errors.slice(0), r = e.schema;
    let i = r.$schema ? Et(r.$schema) : void 0;
    if (i === "http://json-schema.org/draft-03/schema")
      return this.promise.resolve(new Co({}, [P("Draft-03 schemas are not supported.")], [], i));
    let s = /* @__PURE__ */ new Set();
    const a = this.contextService, l = (m, p) => {
      p = decodeURIComponent(p);
      let _ = m;
      return p[0] === "/" && (p = p.substring(1)), p.split("/").some((L) => (L = L.replace(/~1/g, "/").replace(/~0/g, "~"), _ = _[L], !_)), _;
    }, o = (m, p, _) => (p.anchors || (p.anchors = d(m)), p.anchors.get(_)), u = (m, p) => {
      for (const _ in p)
        p.hasOwnProperty(_) && _ !== "id" && _ !== "$id" && (m[_] = p[_]);
    }, h = (m, p, _, L) => {
      let A;
      L === void 0 || L.length === 0 ? A = p : L.charAt(0) === "/" ? A = l(p, L) : A = o(p, _, L), A ? u(m, A) : n.push(P("$ref '{0}' in '{1}' can not be resolved.", L || "", _.uri));
    }, c = (m, p, _, L) => {
      a && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(p) && (p = a.resolveRelativePath(p, L.uri)), p = Et(p);
      const A = this.getOrAddSchemaHandle(p);
      return A.getUnresolvedSchema().then((b) => {
        if (L.dependencies.add(p), b.errors.length) {
          const E = _ ? p + "#" + _ : p;
          n.push(P("Problems loading reference '{0}': {1}", E, b.errors[0]));
        }
        return h(m, b.schema, A, _), g(m, b.schema, A);
      });
    }, g = (m, p, _) => {
      const L = [];
      return this.traverseNodes(m, (A) => {
        const b = /* @__PURE__ */ new Set();
        for (; A.$ref; ) {
          const E = A.$ref, x = E.split("#", 2);
          if (delete A.$ref, x[0].length > 0) {
            L.push(c(A, x[0], x[1], _));
            return;
          } else if (!b.has(E)) {
            const S = x[1];
            h(A, p, _, S), b.add(E);
          }
        }
        A.$recursiveRef && s.add("$recursiveRef"), A.$dynamicRef && s.add("$dynamicRef");
      }), this.promise.all(L);
    }, d = (m) => {
      const p = /* @__PURE__ */ new Map();
      return this.traverseNodes(m, (_) => {
        const L = _.$id || _.id, A = Vl(L) && L.charAt(0) === "#" ? L.substring(1) : _.$anchor;
        A && (p.has(A) ? n.push(P("Duplicate anchor declaration: '{0}'", A)) : p.set(A, _)), _.$recursiveAnchor && s.add("$recursiveAnchor"), _.$dynamicAnchor && s.add("$dynamicAnchor");
      }), p;
    };
    return g(r, r, t).then((m) => {
      let p = [];
      return s.size && p.push(P("The schema uses meta-schema features ({0}) that are not yet supported by the validator.", Array.from(s.keys()).join(", "))), new Co(r, n, p, i);
    });
  }
  traverseNodes(e, t) {
    if (!e || typeof e != "object")
      return Promise.resolve(null);
    const n = /* @__PURE__ */ new Set(), r = (...u) => {
      for (const h of u)
        kt(h) && l.push(h);
    }, i = (...u) => {
      for (const h of u)
        if (kt(h))
          for (const c in h) {
            const d = h[c];
            kt(d) && l.push(d);
          }
    }, s = (...u) => {
      for (const h of u)
        if (Array.isArray(h))
          for (const c of h)
            kt(c) && l.push(c);
    }, a = (u) => {
      if (Array.isArray(u))
        for (const h of u)
          kt(h) && l.push(h);
      else kt(u) && l.push(u);
    }, l = [e];
    let o = l.pop();
    for (; o; )
      n.has(o) || (n.add(o), t(o), r(o.additionalItems, o.additionalProperties, o.not, o.contains, o.propertyNames, o.if, o.then, o.else, o.unevaluatedItems, o.unevaluatedProperties), i(o.definitions, o.$defs, o.properties, o.patternProperties, o.dependencies, o.dependentSchemas), s(o.anyOf, o.allOf, o.oneOf, o.prefixItems), a(o.items)), o = l.pop();
  }
  getSchemaFromProperty(e, t) {
    var n, r;
    if (((n = t.root) == null ? void 0 : n.type) === "object") {
      for (const i of t.root.properties)
        if (i.keyNode.value === "$schema" && ((r = i.valueNode) == null ? void 0 : r.type) === "string") {
          let s = i.valueNode.value;
          return this.contextService && !/^\w[\w\d+.-]*:/.test(s) && (s = this.contextService.resolveRelativePath(s, e)), s;
        }
    }
  }
  getAssociatedSchemas(e) {
    const t = /* @__PURE__ */ Object.create(null), n = [], r = Xl(e);
    for (const i of this.filePatternAssociations)
      if (i.matchesPattern(r))
        for (const s of i.getURIs())
          t[s] || (n.push(s), t[s] = !0);
    return n;
  }
  getSchemaURIsForResource(e, t) {
    let n = t && this.getSchemaFromProperty(e, t);
    return n ? [n] : this.getAssociatedSchemas(e);
  }
  getSchemaForResource(e, t) {
    if (t) {
      let i = this.getSchemaFromProperty(e, t);
      if (i) {
        const s = Et(i);
        return this.getOrAddSchemaHandle(s).getResolvedSchema();
      }
    }
    if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === e)
      return this.cachedSchemaForResource.resolvedSchema;
    const n = this.getAssociatedSchemas(e), r = n.length > 0 ? this.createCombinedSchema(e, n).getResolvedSchema() : this.promise.resolve(void 0);
    return this.cachedSchemaForResource = { resource: e, resolvedSchema: r }, r;
  }
  createCombinedSchema(e, t) {
    if (t.length === 1)
      return this.getOrAddSchemaHandle(t[0]);
    {
      const n = "schemaservice://combinedSchema/" + encodeURIComponent(e), r = {
        allOf: t.map((i) => ({ $ref: i }))
      };
      return this.addSchemaHandle(n, r);
    }
  }
  getMatchingSchemas(e, t, n) {
    if (n) {
      const r = n.id || "schemaservice://untitled/matchingSchemas/" + fh++;
      return this.addSchemaHandle(r, n).getResolvedSchema().then((s) => t.getMatchingSchemas(s.schema).filter((a) => !a.inverted));
    }
    return this.getSchemaForResource(e.uri, t).then((r) => r ? t.getMatchingSchemas(r.schema).filter((i) => !i.inverted) : []);
  }
}, fh = 0;
function Et(e) {
  try {
    return Tn.parse(e).toString(!0);
  } catch {
    return e;
  }
}
function Xl(e) {
  try {
    return Tn.parse(e).with({ fragment: null, query: null }).toString(!0);
  } catch {
    return e;
  }
}
function Pn(e) {
  try {
    const t = Tn.parse(e);
    if (t.scheme === "file")
      return t.fsPath;
  } catch {
  }
  return e;
}
function hh(e, t) {
  const n = [], r = [], i = [];
  let s = -1;
  const a = zt(e.getText(), !1);
  let l = a.scan();
  function o(m) {
    n.push(m), r.push(i.length);
  }
  for (; l !== 17; ) {
    switch (l) {
      case 1:
      case 3: {
        const m = e.positionAt(a.getTokenOffset()).line, p = { startLine: m, endLine: m, kind: l === 1 ? "object" : "array" };
        i.push(p);
        break;
      }
      case 2:
      case 4: {
        const m = l === 2 ? "object" : "array";
        if (i.length > 0 && i[i.length - 1].kind === m) {
          const p = i.pop(), _ = e.positionAt(a.getTokenOffset()).line;
          p && _ > p.startLine + 1 && s !== p.startLine && (p.endLine = _ - 1, o(p), s = p.startLine);
        }
        break;
      }
      case 13: {
        const m = e.positionAt(a.getTokenOffset()).line, p = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;
        a.getTokenError() === 1 && m + 1 < e.lineCount ? a.setPosition(e.offsetAt(ce.create(m + 1, 0))) : m < p && (o({ startLine: m, endLine: p, kind: Wn.Comment }), s = m);
        break;
      }
      case 12: {
        const p = e.getText().substr(a.getTokenOffset(), a.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);
        if (p) {
          const _ = e.positionAt(a.getTokenOffset()).line;
          if (p[1]) {
            const L = { startLine: _, endLine: _, kind: Wn.Region };
            i.push(L);
          } else {
            let L = i.length - 1;
            for (; L >= 0 && i[L].kind !== Wn.Region; )
              L--;
            if (L >= 0) {
              const A = i[L];
              i.length = L, _ > A.startLine && s !== A.startLine && (A.endLine = _, o(A), s = A.startLine);
            }
          }
        }
        break;
      }
    }
    l = a.scan();
  }
  const u = t && t.rangeLimit;
  if (typeof u != "number" || n.length <= u)
    return n;
  t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri);
  const h = [];
  for (let m of r)
    m < 30 && (h[m] = (h[m] || 0) + 1);
  let c = 0, g = 0;
  for (let m = 0; m < h.length; m++) {
    const p = h[m];
    if (p) {
      if (p + c > u) {
        g = m;
        break;
      }
      c += p;
    }
  }
  const d = [];
  for (let m = 0; m < n.length; m++) {
    const p = r[m];
    typeof p == "number" && (p < g || p === g && c++ < u) && d.push(n[m]);
  }
  return d;
}
function gh(e, t, n) {
  function r(l) {
    let o = e.offsetAt(l), u = n.getNodeFromOffset(o, !0);
    const h = [];
    for (; u; ) {
      switch (u.type) {
        case "string":
        case "object":
        case "array":
          const g = u.offset + 1, d = u.offset + u.length - 1;
          g < d && o >= g && o <= d && h.push(i(g, d)), h.push(i(u.offset, u.offset + u.length));
          break;
        case "number":
        case "boolean":
        case "null":
        case "property":
          h.push(i(u.offset, u.offset + u.length));
          break;
      }
      if (u.type === "property" || u.parent && u.parent.type === "array") {
        const g = a(
          u.offset + u.length,
          5
          /* SyntaxKind.CommaToken */
        );
        g !== -1 && h.push(i(u.offset, g));
      }
      u = u.parent;
    }
    let c;
    for (let g = h.length - 1; g >= 0; g--)
      c = $r.create(h[g], c);
    return c || (c = $r.create(K.create(l, l))), c;
  }
  function i(l, o) {
    return K.create(e.positionAt(l), e.positionAt(o));
  }
  const s = zt(e.getText(), !0);
  function a(l, o) {
    return s.setPosition(l), s.scan() === o ? s.getTokenOffset() + s.getTokenLength() : -1;
  }
  return t.map(r);
}
function ns(e, t, n) {
  let r;
  if (n) {
    const s = e.offsetAt(n.start), a = e.offsetAt(n.end) - s;
    r = { offset: s, length: a };
  }
  const i = {
    tabSize: t ? t.tabSize : 4,
    insertSpaces: (t == null ? void 0 : t.insertSpaces) === !0,
    insertFinalNewline: (t == null ? void 0 : t.insertFinalNewline) === !0,
    eol: `
`,
    keepLines: (t == null ? void 0 : t.keepLines) === !0
  };
  return If(e.getText(), r, i).map((s) => ft.replace(K.create(e.positionAt(s.offset), e.positionAt(s.offset + s.length)), s.content));
}
var be;
(function(e) {
  e[e.Object = 0] = "Object", e[e.Array = 1] = "Array";
})(be || (be = {}));
var fr = class {
  constructor(e, t) {
    this.propertyName = e ?? "", this.beginningLineNumber = t, this.childrenProperties = [], this.lastProperty = !1, this.noKeyName = !1;
  }
  addChildProperty(e) {
    if (e.parent = this, this.childrenProperties.length > 0) {
      let t = 0;
      e.noKeyName ? t = this.childrenProperties.length : t = dh(this.childrenProperties, e, mh), t < 0 && (t = t * -1 - 1), this.childrenProperties.splice(t, 0, e);
    } else
      this.childrenProperties.push(e);
    return e;
  }
};
function mh(e, t) {
  const n = e.propertyName.toLowerCase(), r = t.propertyName.toLowerCase();
  return n < r ? -1 : n > r ? 1 : 0;
}
function dh(e, t, n) {
  const r = t.propertyName.toLowerCase(), i = e[0].propertyName.toLowerCase(), s = e[e.length - 1].propertyName.toLowerCase();
  if (r < i)
    return 0;
  if (r > s)
    return e.length;
  let a = 0, l = e.length - 1;
  for (; a <= l; ) {
    let o = l + a >> 1, u = n(t, e[o]);
    if (u > 0)
      a = o + 1;
    else if (u < 0)
      l = o - 1;
    else
      return o;
  }
  return -a - 1;
}
function ph(e, t) {
  const n = {
    ...t,
    keepLines: !1
    // keepLines must be false so that the properties are on separate lines for the sorting
  }, r = tt.applyEdits(e, ns(e, n, void 0)), i = tt.create("test://test.json", "json", 0, r), s = bh(i), a = _h(i, s), l = ns(a, n, void 0), o = tt.applyEdits(a, l);
  return [ft.replace(K.create(ce.create(0, 0), e.positionAt(e.getText().length)), o)];
}
function bh(e) {
  const t = e.getText(), n = zt(t, !1);
  let r = new fr(), i = r, s = r, a = r, l, o = 0, u = 0, h, c, g = -1, d = -1, m = 0, p = 0, _ = [], L = !1, A = !1;
  for (; (l = n.scan()) !== 17; ) {
    if (L === !0 && l !== 14 && l !== 15 && l !== 12 && l !== 13 && s.endLineNumber === void 0) {
      let b = n.getTokenStartLine();
      c === 2 || c === 4 ? a.endLineNumber = b - 1 : s.endLineNumber = b - 1, m = b, L = !1;
    }
    if (A === !0 && l !== 14 && l !== 15 && l !== 12 && l !== 13 && (m = n.getTokenStartLine(), A = !1), n.getTokenStartLine() !== o) {
      for (let b = o; b < n.getTokenStartLine(); b++) {
        const E = e.getText(K.create(ce.create(b, 0), ce.create(b + 1, 0))).length;
        u = u + E;
      }
      o = n.getTokenStartLine();
    }
    switch (l) {
      case 10: {
        if (h === void 0 || h === 1 || h === 5 && _[_.length - 1] === be.Object) {
          const b = new fr(n.getTokenValue(), m);
          a = s, s = i.addChildProperty(b);
        }
        break;
      }
      case 3: {
        if (r.beginningLineNumber === void 0 && (r.beginningLineNumber = n.getTokenStartLine()), _[_.length - 1] === be.Object)
          i = s;
        else if (_[_.length - 1] === be.Array) {
          const b = new fr(n.getTokenValue(), m);
          b.noKeyName = !0, a = s, s = i.addChildProperty(b), i = s;
        }
        _.push(be.Array), s.type = be.Array, m = n.getTokenStartLine(), m++;
        break;
      }
      case 1: {
        if (r.beginningLineNumber === void 0)
          r.beginningLineNumber = n.getTokenStartLine();
        else if (_[_.length - 1] === be.Array) {
          const b = new fr(n.getTokenValue(), m);
          b.noKeyName = !0, a = s, s = i.addChildProperty(b);
        }
        s.type = be.Object, _.push(be.Object), i = s, m = n.getTokenStartLine(), m++;
        break;
      }
      case 4: {
        p = n.getTokenStartLine(), _.pop(), s.endLineNumber === void 0 && (h === 2 || h === 4) && (s.endLineNumber = p - 1, s.lastProperty = !0, s.lineWhereToAddComma = g, s.indexWhereToAddComa = d, a = s, s = s ? s.parent : void 0, i = s), r.endLineNumber = p, m = p + 1;
        break;
      }
      case 2: {
        p = n.getTokenStartLine(), _.pop(), h !== 1 && (s.endLineNumber === void 0 && (s.endLineNumber = p - 1, s.lastProperty = !0, s.lineWhereToAddComma = g, s.indexWhereToAddComa = d), a = s, s = s ? s.parent : void 0, i = s), r.endLineNumber = n.getTokenStartLine(), m = p + 1;
        break;
      }
      case 5: {
        p = n.getTokenStartLine(), s.endLineNumber === void 0 && (_[_.length - 1] === be.Object || _[_.length - 1] === be.Array && (h === 2 || h === 4)) && (s.endLineNumber = p, s.commaIndex = n.getTokenOffset() - u, s.commaLine = p), (h === 2 || h === 4) && (a = s, s = s ? s.parent : void 0, i = s), m = p + 1;
        break;
      }
      case 13: {
        h === 5 && g === n.getTokenStartLine() && (_[_.length - 1] === be.Array && (c === 2 || c === 4) || _[_.length - 1] === be.Object) && (_[_.length - 1] === be.Array && (c === 2 || c === 4) || _[_.length - 1] === be.Object) && (s.endLineNumber = void 0, L = !0), (h === 1 || h === 3) && g === n.getTokenStartLine() && (A = !0);
        break;
      }
    }
    l !== 14 && l !== 13 && l !== 12 && l !== 15 && (c = h, h = l, g = n.getTokenStartLine(), d = n.getTokenOffset() + n.getTokenLength() - u);
  }
  return r;
}
function _h(e, t) {
  if (t.childrenProperties.length === 0)
    return e;
  const n = tt.create("test://test.json", "json", 0, e.getText()), r = [];
  for (el(r, t, t.beginningLineNumber); r.length > 0; ) {
    const i = r.shift(), s = i.propertyTreeArray;
    let a = i.beginningLineNumber;
    for (let l = 0; l < s.length; l++) {
      const o = s[l], u = K.create(ce.create(o.beginningLineNumber, 0), ce.create(o.endLineNumber + 1, 0)), h = e.getText(u), c = tt.create("test://test.json", "json", 0, h);
      if (o.lastProperty === !0 && l !== s.length - 1) {
        const m = o.lineWhereToAddComma - o.beginningLineNumber, p = o.indexWhereToAddComa, _ = {
          range: K.create(ce.create(m, p), ce.create(m, p)),
          text: ","
        };
        tt.update(c, [_], 1);
      } else if (o.lastProperty === !1 && l === s.length - 1) {
        const m = o.commaIndex, _ = o.commaLine - o.beginningLineNumber, L = {
          range: K.create(ce.create(_, m), ce.create(_, m + 1)),
          text: ""
        };
        tt.update(c, [L], 1);
      }
      const g = o.endLineNumber - o.beginningLineNumber + 1, d = {
        range: K.create(ce.create(a, 0), ce.create(a + g, 0)),
        text: c.getText()
      };
      tt.update(n, [d], 1), el(r, o, a), a = a + g;
    }
  }
  return n;
}
function el(e, t, n) {
  if (t.childrenProperties.length !== 0)
    if (t.type === be.Object) {
      let r = 1 / 0;
      for (const s of t.childrenProperties)
        s.beginningLineNumber < r && (r = s.beginningLineNumber);
      const i = r - t.beginningLineNumber;
      n = n + i, e.push(new Yl(n, t.childrenProperties));
    } else t.type === be.Array && Jl(e, t, n);
}
function Jl(e, t, n) {
  for (const r of t.childrenProperties) {
    if (r.type === be.Object) {
      let i = 1 / 0;
      for (const a of r.childrenProperties)
        a.beginningLineNumber < i && (i = a.beginningLineNumber);
      const s = i - r.beginningLineNumber;
      e.push(new Yl(n + r.beginningLineNumber - t.beginningLineNumber + s, r.childrenProperties));
    }
    r.type === be.Array && Jl(e, r, n + r.beginningLineNumber - t.beginningLineNumber);
  }
}
var Yl = class {
  constructor(e, t) {
    this.beginningLineNumber = e, this.propertyTreeArray = t;
  }
};
function wh(e, t) {
  const n = [];
  return t.visit((r) => {
    var i;
    if (r.type === "property" && r.keyNode.value === "$ref" && ((i = r.valueNode) == null ? void 0 : i.type) === "string") {
      const s = r.valueNode.value, a = Lh(t, s);
      if (a) {
        const l = e.positionAt(a.offset);
        n.push({
          target: `${e.uri}#${l.line + 1},${l.character + 1}`,
          range: vh(e, r.valueNode)
        });
      }
    }
    return !0;
  }), Promise.resolve(n);
}
function vh(e, t) {
  return K.create(e.positionAt(t.offset + 1), e.positionAt(t.offset + t.length - 1));
}
function Lh(e, t) {
  const n = Nh(t);
  return n ? rs(n, e.root) : null;
}
function rs(e, t) {
  if (!t)
    return null;
  if (e.length === 0)
    return t;
  const n = e.shift();
  if (t && t.type === "object") {
    const r = t.properties.find((i) => i.keyNode.value === n);
    return r ? rs(e, r.valueNode) : null;
  } else if (t && t.type === "array" && n.match(/^(0|[1-9][0-9]*)$/)) {
    const r = Number.parseInt(n), i = t.items[r];
    return i ? rs(e, i) : null;
  }
  return null;
}
function Nh(e) {
  return e === "#" ? [] : e[0] !== "#" || e[1] !== "/" ? null : e.substring(2).split(/\//).map(xh);
}
function xh(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function Ah(e) {
  const t = e.promiseConstructor || Promise, n = new ch(e.schemaRequestService, e.workspaceContext, t);
  n.setSchemaContributions(ts);
  const r = new Jf(n, e.contributions, t, e.clientCapabilities), i = new Yf(n, e.contributions, t), s = new rh(n), a = new Zf(n, t);
  return {
    configure: (l) => {
      var o;
      n.clearExternalSchemas(), (o = l.schemas) == null || o.forEach(n.registerExternalSchema.bind(n)), a.configure(l);
    },
    resetSchema: (l) => n.onResourceChange(l),
    doValidation: a.doValidation.bind(a),
    getLanguageStatus: a.getLanguageStatus.bind(a),
    parseJSONDocument: (l) => Xf(l, { collectComments: !0 }),
    newJSONDocument: (l, o) => zf(l, o),
    getMatchingSchemas: n.getMatchingSchemas.bind(n),
    doResolve: r.doResolve.bind(r),
    doComplete: r.doComplete.bind(r),
    findDocumentSymbols: s.findDocumentSymbols.bind(s),
    findDocumentSymbols2: s.findDocumentSymbols2.bind(s),
    findDocumentColors: s.findDocumentColors.bind(s),
    getColorPresentations: s.getColorPresentations.bind(s),
    doHover: i.doHover.bind(i),
    getFoldingRanges: hh,
    getSelectionRanges: gh,
    findDefinition: () => Promise.resolve([]),
    findLinks: wh,
    format: (l, o, u) => ns(l, u, o),
    sort: (l, o) => ph(l, o)
  };
}
var Ql;
typeof fetch < "u" && (Ql = function(e) {
  return fetch(e).then((t) => t.text());
});
var Eh = class {
  constructor(e, t) {
    this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = Ah({
      workspaceContext: {
        resolveRelativePath: (n, r) => {
          const i = r.substr(0, r.lastIndexOf("/") + 1);
          return Th(i, n);
        }
      },
      schemaRequestService: t.enableSchemaRequest ? Ql : void 0,
      clientCapabilities: Ki.LATEST
    }), this._languageService.configure(this._languageSettings);
  }
  async doValidation(e) {
    let t = this._getTextDocument(e);
    if (t) {
      let n = this._languageService.parseJSONDocument(t);
      return this._languageService.doValidation(t, n, this._languageSettings);
    }
    return Promise.resolve([]);
  }
  async doComplete(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return null;
    let r = this._languageService.parseJSONDocument(n);
    return this._languageService.doComplete(n, t, r);
  }
  async doResolve(e) {
    return this._languageService.doResolve(e);
  }
  async doHover(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return null;
    let r = this._languageService.parseJSONDocument(n);
    return this._languageService.doHover(n, t, r);
  }
  async format(e, t, n) {
    let r = this._getTextDocument(e);
    if (!r)
      return [];
    let i = this._languageService.format(r, t, n);
    return Promise.resolve(i);
  }
  async resetSchema(e) {
    return Promise.resolve(this._languageService.resetSchema(e));
  }
  async findDocumentSymbols(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.parseJSONDocument(t), r = this._languageService.findDocumentSymbols2(t, n);
    return Promise.resolve(r);
  }
  async findDocumentColors(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.parseJSONDocument(t), r = this._languageService.findDocumentColors(t, n);
    return Promise.resolve(r);
  }
  async getColorPresentations(e, t, n) {
    let r = this._getTextDocument(e);
    if (!r)
      return [];
    let i = this._languageService.parseJSONDocument(r), s = this._languageService.getColorPresentations(
      r,
      i,
      t,
      n
    );
    return Promise.resolve(s);
  }
  async getFoldingRanges(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return [];
    let r = this._languageService.getFoldingRanges(n, t);
    return Promise.resolve(r);
  }
  async getSelectionRanges(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return [];
    let r = this._languageService.parseJSONDocument(n), i = this._languageService.getSelectionRanges(n, t, r);
    return Promise.resolve(i);
  }
  async parseJSONDocument(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return null;
    let n = this._languageService.parseJSONDocument(t);
    return Promise.resolve(n);
  }
  async getMatchingSchemas(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.parseJSONDocument(t);
    return Promise.resolve(this._languageService.getMatchingSchemas(t, n));
  }
  _getTextDocument(e) {
    let t = this._ctx.getMirrorModels();
    for (let n of t)
      if (n.uri.toString() === e)
        return tt.create(
          e,
          this._languageId,
          n.version,
          n.getValue()
        );
    return null;
  }
}, Rh = 47, ai = 46;
function yh(e) {
  return e.charCodeAt(0) === Rh;
}
function Th(e, t) {
  if (yh(t)) {
    const n = Tn.parse(e), r = t.split("/");
    return n.with({ path: Zl(r) }).toString();
  }
  return kh(e, t);
}
function Zl(e) {
  const t = [];
  for (const r of e)
    r.length === 0 || r.length === 1 && r.charCodeAt(0) === ai || (r.length === 2 && r.charCodeAt(0) === ai && r.charCodeAt(1) === ai ? t.pop() : t.push(r));
  e.length > 1 && e[e.length - 1].length === 0 && t.push("");
  let n = t.join("/");
  return e[0].length === 0 && (n = "/" + n), n;
}
function kh(e, ...t) {
  const n = Tn.parse(e), r = n.path.split("/");
  for (let i of t)
    r.push(...i.split("/"));
  return n.with({ path: Zl(r) }).toString();
}
self.onmessage = () => {
  vf((e, t) => new Eh(e, t));
};
