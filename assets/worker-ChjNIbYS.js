var Vu = Object.defineProperty;
var $u = (e, t, n) => t in e ? Vu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wt = (e, t, n) => $u(e, typeof t != "symbol" ? t + "" : t, n);
var T;
(function(e) {
  e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(T || (T = {}));
class qu {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? gn.isErrorNoTelemetry(t) ? new gn(t.message + `

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
const Hu = new qu();
function Mn(e) {
  Wu(e) || Hu.onUnexpectedError(e);
}
function Yr(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: r } = e, i = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: n,
      stack: i,
      noTelemetry: gn.isErrorNoTelemetry(e),
      cause: r ? Yr(r) : void 0,
      code: e.code
    };
  }
  return e;
}
const Qr = "Canceled";
function Wu(e) {
  return e instanceof ju ? !0 : e instanceof Error && e.name === Qr && e.message === Qr;
}
class ju extends Error {
  constructor() {
    super(Qr), this.name = this.message;
  }
}
const rn = class rn extends Error {
  static is(t) {
    return t instanceof rn || t instanceof Error && t.name === rn._name;
  }
  constructor(t) {
    super(t), this.name = rn._name;
  }
};
rn._name = "PendingMigrationError";
let rs = rn;
class gn extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof gn)
      return t;
    const n = new gn();
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
function Gu(e, t) {
  const n = this;
  let r = !1, i;
  return function() {
    return r || (r = !0, i = e.apply(n, arguments)), i;
  };
}
function pn(e, t) {
  const n = dn(e, t);
  return n === -1 ? void 0 : e[n];
}
function dn(e, t, n = 0, r = e.length) {
  let i = n, s = r;
  for (; i < s; ) {
    const a = Math.floor((i + s) / 2);
    t(e[a]) ? i = a + 1 : s = a;
  }
  return i - 1;
}
function zu(e, t) {
  const n = Zr(e, t);
  return n === e.length ? void 0 : e[n];
}
function Zr(e, t, n = 0, r = e.length) {
  let i = n, s = r;
  for (; i < s; ) {
    const a = Math.floor((i + s) / 2);
    t(e[a]) ? s = a : i = a + 1;
  }
  return i;
}
const Fr = class Fr {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (Fr.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const r of this._array)
          if (this._prevFindLastPredicate(r) && !t(r))
            throw new Error(
              "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
            );
      }
      this._prevFindLastPredicate = t;
    }
    const n = dn(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
Fr.assertInvariants = !1;
let mr = Fr;
function Gl(e, t, n = (r, i) => r === i) {
  if (e === t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let r = 0, i = e.length; r < i; r++)
    if (!n(e[r], t[r]))
      return !1;
  return !0;
}
function* Xu(e, t) {
  let n, r;
  for (const i of e)
    r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
  n && (yield n);
}
function Ju(e, t) {
  for (let n = 0; n <= e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function Yu(e, t) {
  for (let n = 0; n < e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function Qu(e, t) {
  for (const n of t)
    e.push(n);
}
var Kr;
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
})(Kr || (Kr = {}));
function cn(e, t) {
  return (n, r) => t(e(n), e(r));
}
const In = (e, t) => e - t;
function Zu(e) {
  return (t, n) => -e(t, n);
}
const sn = class sn {
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
    return new sn((n) => this.iterate((r) => t(r) ? n(r) : !0));
  }
  map(t) {
    return new sn((n) => this.iterate((r) => n(t(r))));
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
    return this.iterate((i) => ((r || Kr.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
  }
};
sn.empty = new sn((t) => {
});
let is = sn;
function Ku(e, t) {
  return e.reduce((n, r) => n + t(r), 0);
}
var ss, as;
class Cu {
  constructor(t, n) {
    this.uri = t, this.value = n;
  }
}
function ec(e) {
  return Array.isArray(e);
}
const Ut = class Ut {
  constructor(t, n) {
    if (this[ss] = "ResourceMap", t instanceof Ut)
      this.map = new Map(t.map), this.toKey = n ?? Ut.defaultToKey;
    else if (ec(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? Ut.defaultToKey;
      for (const [r, i] of t)
        this.set(r, i);
    } else
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? Ut.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new Cu(t, n)), this;
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
  *[(ss = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map)
      yield [t.uri, t.value];
  }
};
Ut.defaultToKey = (t) => t.toString();
let Cr = Ut;
var Te;
(function(e) {
  e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(Te || (Te = {}));
class tc {
  constructor() {
    this[as] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  [(as = Symbol.toStringTag, Symbol.iterator)]() {
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
class nc extends tc {
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
class rc extends nc {
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
class ic {
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
function sc(e, t = "Unreachable") {
  throw new Error(t);
}
function ac(e, t = "unexpected state") {
  if (!e)
    throw typeof t == "string" ? new he(`Assertion Failed: ${t}`) : t;
}
function $n(e) {
  if (!e()) {
    debugger;
    e(), Mn(new he("Assertion Failed"));
  }
}
function Gi(e, t) {
  let n = 0;
  for (; n < e.length - 1; ) {
    const r = e[n], i = e[n + 1];
    if (!t(r, i))
      return !1;
    n++;
  }
  return !0;
}
function oc(e) {
  return typeof e == "string";
}
function lc(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var gr;
(function(e) {
  function t(L) {
    return !!L && typeof L == "object" && typeof L[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function r() {
    return n;
  }
  e.empty = r;
  function* i(L) {
    yield L;
  }
  e.single = i;
  function s(L) {
    return t(L) ? L : i(L);
  }
  e.wrap = s;
  function a(L) {
    return L || n;
  }
  e.from = a;
  function* l(L) {
    for (let R = L.length - 1; R >= 0; R--)
      yield L[R];
  }
  e.reverse = l;
  function o(L) {
    return !L || L[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = o;
  function u(L) {
    return L[Symbol.iterator]().next().value;
  }
  e.first = u;
  function h(L, R) {
    let F = 0;
    for (const q of L)
      if (R(q, F++))
        return !0;
    return !1;
  }
  e.some = h;
  function f(L, R) {
    let F = 0;
    for (const q of L)
      if (!R(q, F++))
        return !1;
    return !0;
  }
  e.every = f;
  function m(L, R) {
    for (const F of L)
      if (R(F))
        return F;
  }
  e.find = m;
  function* p(L, R) {
    for (const F of L)
      R(F) && (yield F);
  }
  e.filter = p;
  function* g(L, R) {
    let F = 0;
    for (const q of L)
      yield R(q, F++);
  }
  e.map = g;
  function* d(L, R) {
    let F = 0;
    for (const q of L)
      yield* R(q, F++);
  }
  e.flatMap = d;
  function* _(...L) {
    for (const R of L)
      lc(R) ? yield* R : yield R;
  }
  e.concat = _;
  function y(L, R, F) {
    let q = F;
    for (const U of L)
      q = R(q, U);
    return q;
  }
  e.reduce = y;
  function x(L) {
    let R = 0;
    for (const F of L)
      R++;
    return R;
  }
  e.length = x;
  function* b(L, R, F = L.length) {
    for (R < -L.length && (R = 0), R < 0 && (R += L.length), F < 0 ? F += L.length : F > L.length && (F = L.length); R < F; R++)
      yield L[R];
  }
  e.slice = b;
  function A(L, R = Number.POSITIVE_INFINITY) {
    const F = [];
    if (R === 0)
      return [F, L];
    const q = L[Symbol.iterator]();
    for (let U = 0; U < R; U++) {
      const k = q.next();
      if (k.done)
        return [F, e.empty()];
      F.push(k.value);
    }
    return [F, { [Symbol.iterator]() {
      return q;
    } }];
  }
  e.consume = A;
  async function N(L) {
    const R = [];
    for await (const F of L)
      R.push(F);
    return R;
  }
  e.asyncToArray = N;
  async function S(L) {
    let R = [];
    for await (const F of L)
      R = R.concat(F);
    return R;
  }
  e.asyncToArrayFlat = S;
})(gr || (gr = {}));
function zl(e) {
  if (gr.is(e)) {
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
function uc(...e) {
  return qn(() => zl(e));
}
function qn(e) {
  return {
    dispose: Gu(() => {
      e();
    })
  };
}
const Ur = class Ur {
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
        zl(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
  }
  add(t) {
    if (!t)
      return t;
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? Ur.DISABLE_DISPOSED_WARNING || console.warn(new Error(
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
Ur.DISABLE_DISPOSED_WARNING = !1;
let Hn = Ur;
const ts = class ts {
  constructor() {
    this._store = new Hn(), this._store;
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
ts.None = Object.freeze({ dispose() {
} });
let bn = ts;
const an = class an {
  constructor(t) {
    this.element = t, this.next = an.Undefined, this.prev = an.Undefined;
  }
};
an.Undefined = new an(void 0);
let ae = an;
class cc {
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
const fc = globalThis.performance.now.bind(globalThis.performance);
class Vr {
  static create(t) {
    return new Vr(t);
  }
  constructor(t) {
    this._now = t === !1 ? Date.now : fc, this._startTime = this._now(), this._stopTime = -1;
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
var pr;
(function(e) {
  e.None = () => bn.None;
  function t(I, P) {
    return m(I, () => {
    }, 0, void 0, !0, void 0, P);
  }
  e.defer = t;
  function n(I) {
    return (P, V = null, B) => {
      let $ = !1, J;
      return J = I((Y) => {
        if (!$)
          return J ? J.dispose() : $ = !0, P.call(V, Y);
      }, null, B), $ && J.dispose(), J;
    };
  }
  e.once = n;
  function r(I, P) {
    return e.once(e.filter(I, P));
  }
  e.onceIf = r;
  function i(I, P, V) {
    return h((B, $ = null, J) => I((Y) => B.call($, P(Y)), null, J), V);
  }
  e.map = i;
  function s(I, P, V) {
    return h((B, $ = null, J) => I((Y) => {
      P(Y), B.call($, Y);
    }, null, J), V);
  }
  e.forEach = s;
  function a(I, P, V) {
    return h((B, $ = null, J) => I((Y) => P(Y) && B.call($, Y), null, J), V);
  }
  e.filter = a;
  function l(I) {
    return I;
  }
  e.signal = l;
  function o(...I) {
    return (P, V = null, B) => {
      const $ = uc(...I.map((J) => J((Y) => P.call(V, Y))));
      return f($, B);
    };
  }
  e.any = o;
  function u(I, P, V, B) {
    let $ = V;
    return i(I, (J) => ($ = P($, J), $), B);
  }
  e.reduce = u;
  function h(I, P) {
    let V;
    const B = {
      onWillAddFirstListener() {
        V = I($.fire, $);
      },
      onDidRemoveLastListener() {
        V == null || V.dispose();
      }
    }, $ = new We(B);
    return P == null || P.add($), $.event;
  }
  function f(I, P) {
    return P instanceof Array ? P.push(I) : P && P.add(I), I;
  }
  function m(I, P, V = 100, B = !1, $ = !1, J, Y) {
    let C, me, It, Zn = 0, Pt;
    const Du = {
      leakWarningThreshold: J,
      onWillAddFirstListener() {
        C = I((Ou) => {
          Zn++, me = P(me, Ou), B && !It && (Kn.fire(me), me = void 0), Pt = () => {
            const Bu = me;
            me = void 0, It = void 0, (!B || Zn > 1) && Kn.fire(Bu), Zn = 0;
          }, typeof V == "number" ? (It && clearTimeout(It), It = setTimeout(Pt, V)) : It === void 0 && (It = null, queueMicrotask(Pt));
        });
      },
      onWillRemoveListener() {
        $ && Zn > 0 && (Pt == null || Pt());
      },
      onDidRemoveLastListener() {
        Pt = void 0, C.dispose();
      }
    }, Kn = new We(Du);
    return Y == null || Y.add(Kn), Kn.event;
  }
  e.debounce = m;
  function p(I, P = 0, V) {
    return e.debounce(I, (B, $) => B ? (B.push($), B) : [$], P, void 0, !0, void 0, V);
  }
  e.accumulate = p;
  function g(I, P = (B, $) => B === $, V) {
    let B = !0, $;
    return a(I, (J) => {
      const Y = B || !P(J, $);
      return B = !1, $ = J, Y;
    }, V);
  }
  e.latch = g;
  function d(I, P, V) {
    return [
      e.filter(I, P, V),
      e.filter(I, (B) => !P(B), V)
    ];
  }
  e.split = d;
  function _(I, P = !1, V = [], B) {
    let $ = V.slice(), J = I((me) => {
      $ ? $.push(me) : C.fire(me);
    });
    B && B.add(J);
    const Y = () => {
      $ == null || $.forEach((me) => C.fire(me)), $ = null;
    }, C = new We({
      onWillAddFirstListener() {
        J || (J = I((me) => C.fire(me)), B && B.add(J));
      },
      onDidAddFirstListener() {
        $ && (P ? setTimeout(Y) : Y());
      },
      onDidRemoveLastListener() {
        J && J.dispose(), J = null;
      }
    });
    return B && B.add(C), C.event;
  }
  e.buffer = _;
  function y(I, P) {
    return (B, $, J) => {
      const Y = P(new b());
      return I(function(C) {
        const me = Y.evaluate(C);
        me !== x && B.call($, me);
      }, void 0, J);
    };
  }
  e.chain = y;
  const x = Symbol("HaltChainable");
  class b {
    constructor() {
      this.steps = [];
    }
    map(P) {
      return this.steps.push(P), this;
    }
    forEach(P) {
      return this.steps.push((V) => (P(V), V)), this;
    }
    filter(P) {
      return this.steps.push((V) => P(V) ? V : x), this;
    }
    reduce(P, V) {
      let B = V;
      return this.steps.push(($) => (B = P(B, $), B)), this;
    }
    latch(P = (V, B) => V === B) {
      let V = !0, B;
      return this.steps.push(($) => {
        const J = V || !P($, B);
        return V = !1, B = $, J ? $ : x;
      }), this;
    }
    evaluate(P) {
      for (const V of this.steps)
        if (P = V(P), P === x)
          break;
      return P;
    }
  }
  function A(I, P, V = (B) => B) {
    const B = (...C) => Y.fire(V(...C)), $ = () => I.on(P, B), J = () => I.removeListener(P, B), Y = new We(
      { onWillAddFirstListener: $, onDidRemoveLastListener: J }
    );
    return Y.event;
  }
  e.fromNodeEventEmitter = A;
  function N(I, P, V = (B) => B) {
    const B = (...C) => Y.fire(V(...C)), $ = () => I.addEventListener(P, B), J = () => I.removeEventListener(P, B), Y = new We(
      { onWillAddFirstListener: $, onDidRemoveLastListener: J }
    );
    return Y.event;
  }
  e.fromDOMEventEmitter = N;
  function S(I, P) {
    let V;
    const B = new Promise(($, J) => {
      const Y = n(I)($, null, P);
      V = () => Y.dispose();
    });
    return B.cancel = V, B;
  }
  e.toPromise = S;
  function L(I) {
    const P = new We();
    return I.then((V) => {
      P.fire(V);
    }, () => {
      P.fire(void 0);
    }).finally(() => {
      P.dispose();
    }), P.event;
  }
  e.fromPromise = L;
  function R(I, P) {
    return I((V) => P.fire(V));
  }
  e.forward = R;
  function F(I, P, V) {
    return P(V), I((B) => P(B));
  }
  e.runAndSubscribe = F;
  class q {
    constructor(P, V) {
      this._observable = P, this._counter = 0, this._hasChanged = !1;
      const B = {
        onWillAddFirstListener: () => {
          P.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          P.removeObserver(this);
        }
      };
      this.emitter = new We(B), V && V.add(this.emitter);
    }
    beginUpdate(P) {
      this._counter++;
    }
    handlePossibleChange(P) {
    }
    handleChange(P, V) {
      this._hasChanged = !0;
    }
    endUpdate(P) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
    }
  }
  function U(I, P) {
    return new q(I, P).emitter.event;
  }
  e.fromObservable = U;
  function k(I) {
    return (P, V, B) => {
      let $ = 0, J = !1;
      const Y = {
        beginUpdate() {
          $++;
        },
        endUpdate() {
          $--, $ === 0 && (I.reportChanges(), J && (J = !1, P.call(V)));
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
      return B instanceof Hn ? B.add(C) : Array.isArray(B) && B.push(C), C;
    };
  }
  e.fromObservableLight = k;
})(pr || (pr = {}));
const on = class on {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${on._idPool++}`, on.all.add(this);
  }
  start(t) {
    this._stopWatch = new Vr(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
on.all = /* @__PURE__ */ new Set(), on._idPool = 0;
let ei = on, hc = -1;
const Dr = class Dr {
  constructor(t, n, r = (Dr._idPool++).toString(16).padStart(3, "0")) {
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
      const o = new mc(l, s);
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
Dr._idPool = 1;
let ti = Dr;
class zi {
  static create() {
    const t = new Error();
    return new zi(t.stack ?? "");
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
class mc extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerLeakError", this.stack = n;
  }
}
class gc extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerRefusalError", this.stack = n;
  }
}
let pc = 0;
class $r {
  constructor(t) {
    this.value = t, this.id = pc++;
  }
}
const dc = 2;
class We {
  constructor(t) {
    var n, r, i, s;
    this._size = 0, this._options = t, this._leakageMon = (n = this._options) != null && n.leakWarningThreshold ? new ti(
      (t == null ? void 0 : t.onListenerError) ?? Mn,
      ((r = this._options) == null ? void 0 : r.leakWarningThreshold) ?? hc
    ) : void 0, this._perfMon = (i = this._options) != null && i._profName ? new ei(this._options._profName) : void 0, this._deliveryQueue = (s = this._options) == null ? void 0 : s.deliveryQueue;
  }
  dispose() {
    var t, n, r, i;
    this._disposed || (this._disposed = !0, ((t = this._deliveryQueue) == null ? void 0 : t.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (r = (n = this._options) == null ? void 0 : n.onDidRemoveLastListener) == null || r.call(n), (i = this._leakageMon) == null || i.dispose());
  }
  get event() {
    return this._event ?? (this._event = (t, n, r) => {
      var l, o, u, h, f, m, p;
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const g = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(g);
        const d = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], _ = new gc(
          `${g}. HINT: Stack shows most frequent listener (${d[1]}-times)`,
          d[0]
        );
        return (((l = this._options) == null ? void 0 : l.onListenerError) || Mn)(_), bn.None;
      }
      if (this._disposed)
        return bn.None;
      n && (t = t.bind(n));
      const i = new $r(t);
      let s;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (i.stack = zi.create(), s = this._leakageMon.check(i.stack, this._size + 1)), this._listeners ? this._listeners instanceof $r ? (this._deliveryQueue ?? (this._deliveryQueue = new bc()), this._listeners = [this._listeners, i]) : this._listeners.push(i) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = i, (f = (h = this._options) == null ? void 0 : h.onDidAddFirstListener) == null || f.call(h, this)), (p = (m = this._options) == null ? void 0 : m.onDidAddListener) == null || p.call(m, this), this._size++;
      const a = qn(() => {
        s == null || s(), this._removeListener(i);
      });
      return r instanceof Hn ? r.add(a) : Array.isArray(r) && r.push(a), a;
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
    if (this._size * dc <= n.length) {
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
    const r = ((i = this._options) == null ? void 0 : i.onListenerError) || Mn;
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
    if ((n = this._deliveryQueue) != null && n.current && (this._deliverQueue(this._deliveryQueue), (r = this._perfMon) == null || r.stop()), (i = this._perfMon) == null || i.start(this._size), this._listeners) if (this._listeners instanceof $r)
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
class bc {
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
function _c() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Xl() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
const wc = Xl() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function os(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
    const s = i[0], a = t[s];
    let l = r;
    return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l;
  }), wc && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function X(e, t, ...n) {
  return os(typeof e == "number" ? vc(e, t) : t, n);
}
function vc(e, t) {
  var r;
  const n = (r = _c()) == null ? void 0 : r[e];
  if (typeof n != "string") {
    if (typeof t == "string")
      return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
const en = "en";
let Wn = !1, jn = !1, ar = !1, Jl = !1, Xi = !1, Yl = !1, Cn, or = en, ls = en, yc, Xe;
const dt = globalThis;
let ye;
var ql;
typeof dt.vscode < "u" && typeof dt.vscode.process < "u" ? ye = dt.vscode.process : typeof process < "u" && typeof ((ql = process == null ? void 0 : process.versions) == null ? void 0 : ql.node) == "string" && (ye = process);
var Hl;
const Lc = typeof ((Hl = ye == null ? void 0 : ye.versions) == null ? void 0 : Hl.electron) == "string", Nc = Lc && (ye == null ? void 0 : ye.type) === "renderer";
var Wl;
if (typeof ye == "object") {
  Wn = ye.platform === "win32", jn = ye.platform === "darwin", ar = ye.platform === "linux", ar && ye.env.SNAP && ye.env.SNAP_REVISION, ye.env.CI || ye.env.BUILD_ARTIFACTSTAGINGDIRECTORY || ye.env.GITHUB_WORKSPACE, Cn = en, or = en;
  const e = ye.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      Cn = t.userLocale, ls = t.osLocale, or = t.resolvedLanguage || en, yc = (Wl = t.languagePack) == null ? void 0 : Wl.translationsConfigFile;
    } catch {
    }
  Jl = !0;
} else typeof navigator == "object" && !Nc ? (Xe = navigator.userAgent, Wn = Xe.indexOf("Windows") >= 0, jn = Xe.indexOf("Macintosh") >= 0, Yl = (Xe.indexOf("Macintosh") >= 0 || Xe.indexOf("iPad") >= 0 || Xe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, ar = Xe.indexOf("Linux") >= 0, (Xe == null ? void 0 : Xe.indexOf("Mobi")) >= 0, Xi = !0, or = Xl() || en, Cn = navigator.language.toLowerCase(), ls = Cn) : console.error("Unable to resolve platform.");
var fn;
(function(e) {
  e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(fn || (fn = {}));
fn.Web;
jn ? fn.Mac : Wn ? fn.Windows : ar && fn.Linux;
const _n = Wn, xc = jn, Ac = Jl, Ec = Xi, Rc = Xi && typeof dt.importScripts == "function", Tc = Rc ? dt.origin : void 0, lt = Xe, vt = or;
var us;
(function(e) {
  function t() {
    return vt;
  }
  e.value = t;
  function n() {
    return vt.length === 2 ? vt === "en" : vt.length >= 3 ? vt[0] === "e" && vt[1] === "n" && vt[2] === "-" : !1;
  }
  e.isDefaultVariant = n;
  function r() {
    return vt === "en";
  }
  e.isDefault = r;
})(us || (us = {}));
const kc = typeof dt.postMessage == "function" && !dt.importScripts;
(() => {
  if (kc) {
    const e = [];
    dt.addEventListener("message", (n) => {
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
      }), dt.postMessage({ vscodeScheduleAsyncWork: r }, "*");
    };
  }
  return (e) => setTimeout(e);
})();
var Pn;
(function(e) {
  e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(Pn || (Pn = {}));
jn || Yl ? Pn.Macintosh : Wn ? Pn.Windows : Pn.Linux;
const Sc = !!(lt && lt.indexOf("Chrome") >= 0);
lt && lt.indexOf("Firefox") >= 0;
!Sc && lt && lt.indexOf("Safari") >= 0;
lt && lt.indexOf("Edg/") >= 0;
lt && lt.indexOf("Android") >= 0;
const Ql = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
});
var dr;
(function(e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof lr ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: pr.None
  }), e.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: Ql
  });
})(dr || (dr = {}));
class lr {
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
    return this._isCancelled ? Ql : (this._emitter || (this._emitter = new We()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}
class Mc {
  constructor(t) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = t && t.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new lr()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof lr && this._token.cancel() : this._token = dr.Cancelled;
  }
  dispose(t = !1) {
    var n;
    t && this.cancel(), (n = this._parentListener) == null || n.dispose(), this._token ? this._token instanceof lr && this._token.dispose() : this._token = dr.None;
  }
}
function Ic(e) {
  return e;
}
class Pc {
  constructor(t, n) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = Ic) : (this._fn = n, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const n = this._computeKey(t);
    return this.lastArgKey !== n && (this.lastArgKey = n, this.lastCache = this._fn(t)), this.lastCache;
  }
}
class cs {
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
var ze;
(function(e) {
  e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(ze || (ze = {}));
function fs(e) {
  return e < 0 ? 0 : e > ze.MAX_UINT_8 ? ze.MAX_UINT_8 : e | 0;
}
function Gt(e) {
  return e < 0 ? 0 : e > ze.MAX_UINT_32 ? ze.MAX_UINT_32 : e | 0;
}
function Fc(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Uc(e) {
  return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
}
function Zl(e) {
  return e.split(/\r\n|\r|\n/);
}
function Dc(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const r = e.charCodeAt(t);
    if (r !== T.Space && r !== T.Tab)
      return t;
  }
  return -1;
}
function Oc(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const r = e.charCodeAt(n);
    if (r !== T.Space && r !== T.Tab)
      return n;
  }
  return -1;
}
function Bc(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Vc(e, t, n = 0, r = e.length, i = 0, s = t.length) {
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
function Kl(e, t, n = 0, r = e.length, i = 0, s = t.length) {
  for (; n < r && i < s; n++, i++) {
    let o = e.charCodeAt(n), u = t.charCodeAt(i);
    if (o === u)
      continue;
    if (o >= 128 || u >= 128)
      return Vc(e.toLowerCase(), t.toLowerCase(), n, r, i, s);
    hs(o) && (o -= 32), hs(u) && (u -= 32);
    const h = o - u;
    if (h !== 0)
      return h;
  }
  const a = r - n, l = s - i;
  return a < l ? -1 : a > l ? 1 : 0;
}
function hs(e) {
  return e >= T.a && e <= T.z;
}
function Cl(e) {
  return e >= T.A && e <= T.Z;
}
function $c(e, t) {
  return e.length === t.length && Kl(e, t) === 0;
}
function qc(e, t) {
  const n = t.length;
  return t.length > e.length ? !1 : Kl(e, t, 0, n) === 0;
}
function br(e, t) {
  const n = Math.min(e.length, t.length);
  let r;
  for (r = 0; r < n; r++)
    if (e.charCodeAt(r) !== t.charCodeAt(r))
      return r;
  return n;
}
function _r(e, t) {
  const n = Math.min(e.length, t.length);
  let r;
  const i = e.length - 1, s = t.length - 1;
  for (r = 0; r < n; r++)
    if (e.charCodeAt(i - r) !== t.charCodeAt(s - r))
      return r;
  return n;
}
function ni(e) {
  return 55296 <= e && e <= 56319;
}
function Hc(e) {
  return 56320 <= e && e <= 57343;
}
function Wc(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function jc(e, t, n) {
  const r = e.charCodeAt(n);
  if (ni(r) && n + 1 < t) {
    const i = e.charCodeAt(n + 1);
    if (Hc(i))
      return Wc(r, i);
  }
  return r;
}
const Gc = /^[\t\n\r\x20-\x7E]*$/;
function zc(e) {
  return Gc.test(e);
}
String.fromCharCode(T.UTF8_BOM);
var ms;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(ms || (ms = {}));
var ri;
(function(e) {
  e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(ri || (ri = {}));
const nt = class nt {
  static getInstance(t) {
    return nt.cache.get(Array.from(t));
  }
  static getLocales() {
    return nt._locales.value;
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
nt.ambiguousCharacterData = new cs(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), nt.cache = new Pc({ getCacheKey: JSON.stringify }, (t) => {
  function n(h) {
    const f = /* @__PURE__ */ new Map();
    for (let m = 0; m < h.length; m += 2)
      f.set(h[m], h[m + 1]);
    return f;
  }
  function r(h, f) {
    const m = new Map(h);
    for (const [p, g] of f)
      m.set(p, g);
    return m;
  }
  function i(h, f) {
    if (!h)
      return f;
    const m = /* @__PURE__ */ new Map();
    for (const [p, g] of h)
      f.has(p) && m.set(p, g);
    return m;
  }
  const s = nt.ambiguousCharacterData.value;
  let a = t.filter((h) => !h.startsWith("_") && h in s);
  a.length === 0 && (a = ["_default"]);
  let l;
  for (const h of a) {
    const f = n(s[h]);
    l = i(l, f);
  }
  const o = n(s._common), u = r(o, l);
  return new nt(u);
}), nt._locales = new cs(() => Object.keys(nt.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
let Gn = nt;
const Dt = class Dt {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(Dt.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return Dt.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const r = t.codePointAt(n);
      if (typeof r == "number" && (Dt.isInvisibleCharacter(r) || r === ri.space))
        return !0;
    }
    return !1;
  }
  static get codePoints() {
    return Dt.getData();
  }
};
Dt._data = void 0;
let Fn = Dt;
const qr = "default", Xc = "$initialize";
var De;
(function(e) {
  e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(De || (De = {}));
class Jc {
  constructor(t, n, r, i, s) {
    this.vsWorker = t, this.req = n, this.channel = r, this.method = i, this.args = s, this.type = De.Request;
  }
}
class gs {
  constructor(t, n, r, i) {
    this.vsWorker = t, this.seq = n, this.res = r, this.err = i, this.type = De.Reply;
  }
}
class Yc {
  constructor(t, n, r, i, s) {
    this.vsWorker = t, this.req = n, this.channel = r, this.eventName = i, this.arg = s, this.type = De.SubscribeEvent;
  }
}
class Qc {
  constructor(t, n, r) {
    this.vsWorker = t, this.req = n, this.event = r, this.type = De.Event;
  }
}
class Zc {
  constructor(t, n) {
    this.vsWorker = t, this.req = n, this.type = De.UnsubscribeEvent;
  }
}
class Kc {
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
      }, this._send(new Jc(this._workerId, i, t, n, r));
    });
  }
  listen(t, n, r) {
    let i = null;
    const s = new We({
      onWillAddFirstListener: () => {
        i = String(++this._lastSentReq), this._pendingEmitters.set(i, s), this._send(new Yc(this._workerId, i, t, n, r));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(i), this._send(new Zc(this._workerId, i)), i = null;
      }
    });
    return s.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, n) {
    const r = {
      get: (i, s) => (typeof s == "string" && !i[s] && (tu(s) ? i[s] = (a) => this.listen(t, s, a) : eu(s) ? i[s] = this.listen(t, s, void 0) : s.charCodeAt(0) === T.DollarSign && (i[s] = async (...a) => (await (n == null ? void 0 : n()), this.sendMessage(t, s, a)))), i[s])
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), r);
  }
  _handleMessage(t) {
    switch (t.type) {
      case De.Reply:
        return this._handleReplyMessage(t);
      case De.Request:
        return this._handleRequestMessage(t);
      case De.SubscribeEvent:
        return this._handleSubscribeEventMessage(t);
      case De.Event:
        return this._handleEventMessage(t);
      case De.UnsubscribeEvent:
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
      this._send(new gs(this._workerId, n, i, void 0));
    }, (i) => {
      i.detail instanceof Error && (i.detail = Yr(i.detail)), this._send(new gs(this._workerId, n, void 0, Yr(i)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const n = t.req, r = this._handler.handleEvent(t.channel, t.eventName, t.arg)((i) => {
      this._send(new Qc(this._workerId, n, i));
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
    if (t.type === De.Request)
      for (let r = 0; r < t.args.length; r++)
        t.args[r] instanceof ArrayBuffer && n.push(t.args[r]);
    else t.type === De.Reply && t.res instanceof ArrayBuffer && n.push(t.res);
    this._handler.sendMessage(t, n);
  }
}
function eu(e) {
  return e[0] === "o" && e[1] === "n" && Cl(e.charCodeAt(2));
}
function tu(e) {
  return /^onDynamic/.test(e) && Cl(e.charCodeAt(9));
}
class Cc {
  constructor(t, n) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new Kc({
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
    if (t === qr && n === Xc)
      return this.initialize(r[0]);
    const i = t === qr ? this.requestHandler : this._localChannels.get(t);
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
    const i = t === qr ? this.requestHandler : this._localChannels.get(t);
    if (!i)
      throw new Error(`Missing channel ${t} on worker thread`);
    if (tu(n)) {
      const s = i[n].call(i, r);
      if (typeof s != "function")
        throw new Error(`Missing dynamic event ${n} on request handler.`);
      return s;
    }
    if (eu(n)) {
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
let ii = !1;
function nu(e) {
  if (ii)
    throw new Error("WebWorker already initialized!");
  ii = !0;
  const t = new Cc(
    (n) => globalThis.postMessage(n),
    (n) => e(n)
  );
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function e1(e) {
  globalThis.onmessage = (t) => {
    ii || nu(e);
  };
}
class xt {
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
function ps(e, t) {
  return (t << 5) - t + e | 0;
}
function t1(e, t) {
  t = ps(149417, t);
  for (let n = 0, r = e.length; n < r; n++)
    t = ps(e.charCodeAt(n), t);
  return t;
}
var ds;
(function(e) {
  e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(ds || (ds = {}));
class bs {
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
function n1(e, t, n) {
  return new kt(new bs(e), new bs(t)).ComputeDiff(n).changes;
}
class zt {
  static Assert(t, n) {
    if (!t)
      throw new Error(n);
  }
}
class Xt {
  static Copy(t, n, r, i, s) {
    for (let a = 0; a < s; a++)
      r[i + a] = t[n + a];
  }
  static Copy2(t, n, r, i, s) {
    for (let a = 0; a < s; a++)
      r[i + a] = t[n + a];
  }
}
var mt;
(function(e) {
  e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(mt || (mt = {}));
class _s {
  constructor() {
    this.m_changes = [], this.m_originalStart = ze.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = ze.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new xt(
      this.m_originalStart,
      this.m_originalCount,
      this.m_modifiedStart,
      this.m_modifiedCount
    )), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = ze.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = ze.MAX_SAFE_SMALL_INTEGER;
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
class kt {
  constructor(t, n, r = null) {
    this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
    const [i, s, a] = kt._getElements(t), [l, o, u] = kt._getElements(n);
    this._hasStrings = a && u, this._originalStringElements = i, this._originalElementsOrHash = s, this._modifiedStringElements = l, this._modifiedElementsOrHash = o, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (kt._isStringArray(n)) {
      const r = new Int32Array(n.length);
      for (let i = 0, s = n.length; i < s; i++)
        r[i] = t1(n[i], 0);
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
    const r = kt._getStrictElement(this._originalSequence, t), i = kt._getStrictElement(this._modifiedSequence, n);
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
      let f;
      return r <= i ? (zt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), f = [
        new xt(t, 0, r, i - r + 1)
      ]) : t <= n ? (zt.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = [
        new xt(t, n - t + 1, r, 0)
      ]) : (zt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), zt.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), f = []), f;
    }
    const a = [0], l = [0], o = this.ComputeRecursionPoint(t, n, r, i, a, l, s), u = a[0], h = l[0];
    if (o !== null)
      return o;
    if (!s[0]) {
      const f = this.ComputeDiffRecursive(t, u, r, h, s);
      let m = [];
      return s[0] ? m = [
        new xt(
          u + 1,
          n - (u + 1) + 1,
          h + 1,
          i - (h + 1) + 1
        )
      ] : m = this.ComputeDiffRecursive(u + 1, n, h + 1, i, s), this.ConcatenateChanges(f, m);
    }
    return [
      new xt(
        t,
        n - t + 1,
        r,
        i - r + 1
      )
    ];
  }
  WALKTRACE(t, n, r, i, s, a, l, o, u, h, f, m, p, g, d, _, y, x) {
    let b = null, A = null, N = new _s(), S = n, L = r, R = p[0] - _[0] - i, F = ze.MIN_SAFE_SMALL_INTEGER, q = this.m_forwardHistory.length - 1;
    do {
      const U = R + t;
      U === S || U < L && u[U - 1] < u[U + 1] ? (f = u[U + 1], g = f - R - i, f < F && N.MarkNextChange(), F = f, N.AddModifiedElement(f + 1, g), R = U + 1 - t) : (f = u[U - 1] + 1, g = f - R - i, f < F && N.MarkNextChange(), F = f - 1, N.AddOriginalElement(f, g + 1), R = U - 1 - t), q >= 0 && (u = this.m_forwardHistory[q], t = u[0], S = 1, L = u.length - 1);
    } while (--q >= -1);
    if (b = N.getReverseChanges(), x[0]) {
      let U = p[0] + 1, k = _[0] + 1;
      if (b !== null && b.length > 0) {
        const I = b[b.length - 1];
        U = Math.max(U, I.getOriginalEnd()), k = Math.max(k, I.getModifiedEnd());
      }
      A = [
        new xt(
          U,
          m - U + 1,
          k,
          d - k + 1
        )
      ];
    } else {
      N = new _s(), S = a, L = l, R = p[0] - _[0] - o, F = ze.MAX_SAFE_SMALL_INTEGER, q = y ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const U = R + s;
        U === S || U < L && h[U - 1] >= h[U + 1] ? (f = h[U + 1] - 1, g = f - R - o, f > F && N.MarkNextChange(), F = f + 1, N.AddOriginalElement(f + 1, g + 1), R = U + 1 - s) : (f = h[U - 1], g = f - R - o, f > F && N.MarkNextChange(), F = f, N.AddModifiedElement(f + 1, g + 1), R = U - 1 - s), q >= 0 && (h = this.m_reverseHistory[q], s = h[0], S = 1, L = h.length - 1);
      } while (--q >= -1);
      A = N.getChanges();
    }
    return this.ConcatenateChanges(b, A);
  }
  ComputeRecursionPoint(t, n, r, i, s, a, l) {
    let o = 0, u = 0, h = 0, f = 0, m = 0, p = 0;
    t--, r--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const g = n - t + (i - r), d = g + 1, _ = new Int32Array(d), y = new Int32Array(d), x = i - r, b = n - t, A = t - r, N = n - i, L = (b - x) % 2 === 0;
    _[x] = t, y[b] = n, l[0] = !1;
    for (let R = 1; R <= g / 2 + 1; R++) {
      let F = 0, q = 0;
      h = this.ClipDiagonalBound(x - R, R, x, d), f = this.ClipDiagonalBound(x + R, R, x, d);
      for (let k = h; k <= f; k += 2) {
        k === h || k < f && _[k - 1] < _[k + 1] ? o = _[k + 1] : o = _[k - 1] + 1, u = o - (k - x) - A;
        const I = o;
        for (; o < n && u < i && this.ElementsAreEqual(o + 1, u + 1); )
          o++, u++;
        if (_[k] = o, o + u > F + q && (F = o, q = u), !L && Math.abs(k - b) <= R - 1 && o >= y[k])
          return s[0] = o, a[0] = u, I <= y[k] && mt.MaxDifferencesHistory > 0 && R <= mt.MaxDifferencesHistory + 1 ? this.WALKTRACE(x, h, f, A, b, m, p, N, _, y, o, n, s, u, i, a, L, l) : null;
      }
      const U = (F - t + (q - r) - R) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(F, U))
        return l[0] = !0, s[0] = F, a[0] = q, U > 0 && mt.MaxDifferencesHistory > 0 && R <= mt.MaxDifferencesHistory + 1 ? this.WALKTRACE(x, h, f, A, b, m, p, N, _, y, o, n, s, u, i, a, L, l) : (t++, r++, [
          new xt(
            t,
            n - t + 1,
            r,
            i - r + 1
          )
        ]);
      m = this.ClipDiagonalBound(b - R, R, b, d), p = this.ClipDiagonalBound(b + R, R, b, d);
      for (let k = m; k <= p; k += 2) {
        k === m || k < p && y[k - 1] >= y[k + 1] ? o = y[k + 1] - 1 : o = y[k - 1], u = o - (k - b) - N;
        const I = o;
        for (; o > t && u > r && this.ElementsAreEqual(o, u); )
          o--, u--;
        if (y[k] = o, L && Math.abs(k - x) <= R && o <= _[k])
          return s[0] = o, a[0] = u, I >= _[k] && mt.MaxDifferencesHistory > 0 && R <= mt.MaxDifferencesHistory + 1 ? this.WALKTRACE(x, h, f, A, b, m, p, N, _, y, o, n, s, u, i, a, L, l) : null;
      }
      if (R <= mt.MaxDifferencesHistory) {
        let k = new Int32Array(f - h + 2);
        k[0] = x - h + 1, Xt.Copy2(_, h, k, 1, f - h + 1), this.m_forwardHistory.push(k), k = new Int32Array(p - m + 2), k[0] = b - m + 1, Xt.Copy2(y, m, k, 1, p - m + 1), this.m_reverseHistory.push(k);
      }
    }
    return this.WALKTRACE(x, h, f, A, b, m, p, N, _, y, o, n, s, u, i, a, L, l);
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
        const f = t[n - 1];
        i = f.originalStart + f.originalLength, s = f.modifiedStart + f.modifiedLength;
      }
      const a = r.originalLength > 0, l = r.modifiedLength > 0;
      let o = 0, u = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
      for (let f = 1; ; f++) {
        const m = r.originalStart - f, p = r.modifiedStart - f;
        if (m < i || p < s || a && !this.OriginalElementsAreEqual(m, m + r.originalLength) || l && !this.ModifiedElementsAreEqual(p, p + r.modifiedLength))
          break;
        const d = (m === i && p === s ? 5 : 0) + this._boundaryScore(m, r.originalLength, p, r.modifiedLength);
        d > u && (u = d, o = f);
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
        const i = t[n - 1], s = t[n], a = s.originalStart - i.originalStart - i.originalLength, l = i.originalStart, o = s.originalStart + s.originalLength, u = o - l, h = i.modifiedStart, f = s.modifiedStart + s.modifiedLength, m = f - h;
        if (a < 5 && u < 20 && m < 20) {
          const p = this._findBetterContiguousSequence(l, u, h, m, a);
          if (p) {
            const [g, d] = p;
            (g !== i.originalStart + i.originalLength || d !== i.modifiedStart + i.modifiedLength) && (i.originalLength = g - i.originalStart, i.modifiedLength = d - i.modifiedStart, s.originalStart = g + a, s.modifiedStart = d + a, s.originalLength = o - s.originalStart, s.modifiedLength = f - s.modifiedStart);
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
    for (let f = t; f < a; f++)
      for (let m = r; m < l; m++) {
        const p = this._contiguousSequenceScore(f, m, s);
        p > 0 && p > o && (o = p, u = f, h = m);
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
      return Xt.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], Xt.Copy(n, 1, i, t.length, n.length - 1), i;
    } else {
      const i = new Array(t.length + n.length);
      return Xt.Copy(t, 0, i, 0, t.length), Xt.Copy(n, 0, i, t.length, n.length), i;
    }
  }
  ChangesOverlap(t, n, r) {
    if (zt.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), zt.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const i = t.originalStart;
      let s = t.originalLength;
      const a = t.modifiedStart;
      let l = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (l = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new xt(i, s, a, l), !0;
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
let ee = class Ft {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new Ft(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return Ft.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return Ft.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return Ft.isBeforeOrEqual(this, t);
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
    return new Ft(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new Ft(t.lineNumber, t.column);
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
}, G = class pe {
  constructor(t, n, r, i) {
    t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
  }
  isEmpty() {
    return pe.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return pe.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return pe.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return pe.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return pe.plusRange(this, t);
  }
  static plusRange(t, n) {
    let r, i, s, a;
    return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new pe(r, i, s, a);
  }
  intersectRanges(t) {
    return pe.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let r = t.startLineNumber, i = t.startColumn, s = t.endLineNumber, a = t.endColumn;
    const l = n.startLineNumber, o = n.startColumn, u = n.endLineNumber, h = n.endColumn;
    return r < l ? (r = l, i = o) : r === l && (i = Math.max(i, o)), s > u ? (s = u, a = h) : s === u && (a = Math.min(a, h)), r > s || r === s && i > a ? null : new pe(
      r,
      i,
      s,
      a
    );
  }
  equalsRange(t) {
    return pe.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return pe.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new ee(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return pe.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new ee(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new pe(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new pe(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return pe.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new pe(
      t.startLineNumber,
      t.startColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  collapseToEnd() {
    return pe.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new pe(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new pe(
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
    return new pe(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new pe(
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
            const f = t.endColumn | 0, m = n.endColumn | 0;
            return f - m;
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
class Ji {
  constructor(t) {
    const n = fs(t);
    this._defaultValue = n, this._asciiMap = Ji._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const r = fs(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}
var ws;
(function(e) {
  e[e.False = 0] = "False", e[e.True = 1] = "True";
})(ws || (ws = {}));
var z;
(function(e) {
  e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})(z || (z = {}));
class r1 {
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
class i1 {
  constructor(t) {
    let n = 0, r = z.Invalid;
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      o > n && (n = o), l > r && (r = l), u > r && (r = u);
    }
    n++, r++;
    const i = new r1(r, n, z.Invalid);
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
let Hr = null;
function s1() {
  return Hr === null && (Hr = new i1([
    [z.Start, T.h, z.H],
    [z.Start, T.H, z.H],
    [z.Start, T.f, z.F],
    [z.Start, T.F, z.F],
    [z.H, T.t, z.HT],
    [z.H, T.T, z.HT],
    [z.HT, T.t, z.HTT],
    [z.HT, T.T, z.HTT],
    [z.HTT, T.p, z.HTTP],
    [z.HTT, T.P, z.HTTP],
    [z.HTTP, T.s, z.BeforeColon],
    [z.HTTP, T.S, z.BeforeColon],
    [z.HTTP, T.Colon, z.AfterColon],
    [z.F, T.i, z.FI],
    [z.F, T.I, z.FI],
    [z.FI, T.l, z.FIL],
    [z.FI, T.L, z.FIL],
    [z.FIL, T.e, z.BeforeColon],
    [z.FIL, T.E, z.BeforeColon],
    [z.BeforeColon, T.Colon, z.AfterColon],
    [z.AfterColon, T.Slash, z.AlmostThere],
    [z.AlmostThere, T.Slash, z.End]
  ])), Hr;
}
var oe;
(function(e) {
  e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(oe || (oe = {}));
let xn = null;
function a1() {
  if (xn === null) {
    xn = new Ji(oe.None);
    const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…|`;
    for (let n = 0; n < e.length; n++)
      xn.set(e.charCodeAt(n), oe.ForceTermination);
    const t = ".,;:";
    for (let n = 0; n < t.length; n++)
      xn.set(t.charCodeAt(n), oe.CannotEndIn);
  }
  return xn;
}
class wr {
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
      (l === T.OpenParen && o === T.CloseParen || l === T.OpenSquareBracket && o === T.CloseSquareBracket || l === T.OpenCurlyBrace && o === T.CloseCurlyBrace) && a--;
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
  static computeLinks(t, n = s1()) {
    const r = a1(), i = [];
    for (let s = 1, a = t.getLineCount(); s <= a; s++) {
      const l = t.getLineContent(s), o = l.length;
      let u = 0, h = 0, f = 0, m = z.Start, p = !1, g = !1, d = !1, _ = !1;
      for (; u < o; ) {
        let y = !1;
        const x = l.charCodeAt(u);
        if (m === z.Accept) {
          let b;
          switch (x) {
            case T.OpenParen:
              p = !0, b = oe.None;
              break;
            case T.CloseParen:
              b = p ? oe.None : oe.ForceTermination;
              break;
            case T.OpenSquareBracket:
              d = !0, g = !0, b = oe.None;
              break;
            case T.CloseSquareBracket:
              d = !1, b = g ? oe.None : oe.ForceTermination;
              break;
            case T.OpenCurlyBrace:
              _ = !0, b = oe.None;
              break;
            case T.CloseCurlyBrace:
              b = _ ? oe.None : oe.ForceTermination;
              break;
            case T.SingleQuote:
            case T.DoubleQuote:
            case T.BackTick:
              f === x ? b = oe.ForceTermination : f === T.SingleQuote || f === T.DoubleQuote || f === T.BackTick ? b = oe.None : b = oe.ForceTermination;
              break;
            case T.Asterisk:
              b = f === T.Asterisk ? oe.ForceTermination : oe.None;
              break;
            case T.Space:
              b = d ? oe.None : oe.ForceTermination;
              break;
            default:
              b = r.get(x);
          }
          b === oe.ForceTermination && (i.push(wr._createLink(r, l, s, h, u)), y = !0);
        } else if (m === z.End) {
          let b;
          x === T.OpenSquareBracket ? (g = !0, b = oe.None) : b = r.get(x), b === oe.ForceTermination ? y = !0 : m = z.Accept;
        } else
          m = n.nextState(m, x), m === z.Invalid && (y = !0);
        y && (m = z.Start, p = !1, g = !1, _ = !1, h = u + 1, f = x), u++;
      }
      m === z.Accept && i.push(wr._createLink(r, l, s, h, o));
    }
    return i;
  }
}
function o1(e) {
  return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : wr.computeLinks(e);
}
const Or = class Or {
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
Or.INSTANCE = new Or();
let si = Or;
var w;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(w || (w = {}));
var v;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(v || (v = {}));
class Yi {
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
const ur = new Yi(), ai = new Yi(), oi = new Yi(), l1 = new Array(230), u1 = /* @__PURE__ */ Object.create(null), c1 = /* @__PURE__ */ Object.create(null), li = [];
for (let e = 0; e <= v.MAX_VALUE; e++)
  w.DependsOnKbLayout;
for (let e = 0; e <= w.MAX_VALUE; e++)
  li[e] = v.DependsOnKbLayout;
(function() {
  const t = [
    [1, v.None, "None", w.Unknown, "unknown", 0, "VK_UNKNOWN", "", ""],
    [1, v.Hyper, "Hyper", w.Unknown, "", 0, "", "", ""],
    [1, v.Super, "Super", w.Unknown, "", 0, "", "", ""],
    [1, v.Fn, "Fn", w.Unknown, "", 0, "", "", ""],
    [1, v.FnLock, "FnLock", w.Unknown, "", 0, "", "", ""],
    [1, v.Suspend, "Suspend", w.Unknown, "", 0, "", "", ""],
    [1, v.Resume, "Resume", w.Unknown, "", 0, "", "", ""],
    [1, v.Turbo, "Turbo", w.Unknown, "", 0, "", "", ""],
    [1, v.Sleep, "Sleep", w.Unknown, "", 0, "VK_SLEEP", "", ""],
    [1, v.WakeUp, "WakeUp", w.Unknown, "", 0, "", "", ""],
    [0, v.KeyA, "KeyA", w.KeyA, "A", 65, "VK_A", "", ""],
    [0, v.KeyB, "KeyB", w.KeyB, "B", 66, "VK_B", "", ""],
    [0, v.KeyC, "KeyC", w.KeyC, "C", 67, "VK_C", "", ""],
    [0, v.KeyD, "KeyD", w.KeyD, "D", 68, "VK_D", "", ""],
    [0, v.KeyE, "KeyE", w.KeyE, "E", 69, "VK_E", "", ""],
    [0, v.KeyF, "KeyF", w.KeyF, "F", 70, "VK_F", "", ""],
    [0, v.KeyG, "KeyG", w.KeyG, "G", 71, "VK_G", "", ""],
    [0, v.KeyH, "KeyH", w.KeyH, "H", 72, "VK_H", "", ""],
    [0, v.KeyI, "KeyI", w.KeyI, "I", 73, "VK_I", "", ""],
    [0, v.KeyJ, "KeyJ", w.KeyJ, "J", 74, "VK_J", "", ""],
    [0, v.KeyK, "KeyK", w.KeyK, "K", 75, "VK_K", "", ""],
    [0, v.KeyL, "KeyL", w.KeyL, "L", 76, "VK_L", "", ""],
    [0, v.KeyM, "KeyM", w.KeyM, "M", 77, "VK_M", "", ""],
    [0, v.KeyN, "KeyN", w.KeyN, "N", 78, "VK_N", "", ""],
    [0, v.KeyO, "KeyO", w.KeyO, "O", 79, "VK_O", "", ""],
    [0, v.KeyP, "KeyP", w.KeyP, "P", 80, "VK_P", "", ""],
    [0, v.KeyQ, "KeyQ", w.KeyQ, "Q", 81, "VK_Q", "", ""],
    [0, v.KeyR, "KeyR", w.KeyR, "R", 82, "VK_R", "", ""],
    [0, v.KeyS, "KeyS", w.KeyS, "S", 83, "VK_S", "", ""],
    [0, v.KeyT, "KeyT", w.KeyT, "T", 84, "VK_T", "", ""],
    [0, v.KeyU, "KeyU", w.KeyU, "U", 85, "VK_U", "", ""],
    [0, v.KeyV, "KeyV", w.KeyV, "V", 86, "VK_V", "", ""],
    [0, v.KeyW, "KeyW", w.KeyW, "W", 87, "VK_W", "", ""],
    [0, v.KeyX, "KeyX", w.KeyX, "X", 88, "VK_X", "", ""],
    [0, v.KeyY, "KeyY", w.KeyY, "Y", 89, "VK_Y", "", ""],
    [0, v.KeyZ, "KeyZ", w.KeyZ, "Z", 90, "VK_Z", "", ""],
    [0, v.Digit1, "Digit1", w.Digit1, "1", 49, "VK_1", "", ""],
    [0, v.Digit2, "Digit2", w.Digit2, "2", 50, "VK_2", "", ""],
    [0, v.Digit3, "Digit3", w.Digit3, "3", 51, "VK_3", "", ""],
    [0, v.Digit4, "Digit4", w.Digit4, "4", 52, "VK_4", "", ""],
    [0, v.Digit5, "Digit5", w.Digit5, "5", 53, "VK_5", "", ""],
    [0, v.Digit6, "Digit6", w.Digit6, "6", 54, "VK_6", "", ""],
    [0, v.Digit7, "Digit7", w.Digit7, "7", 55, "VK_7", "", ""],
    [0, v.Digit8, "Digit8", w.Digit8, "8", 56, "VK_8", "", ""],
    [0, v.Digit9, "Digit9", w.Digit9, "9", 57, "VK_9", "", ""],
    [0, v.Digit0, "Digit0", w.Digit0, "0", 48, "VK_0", "", ""],
    [1, v.Enter, "Enter", w.Enter, "Enter", 13, "VK_RETURN", "", ""],
    [1, v.Escape, "Escape", w.Escape, "Escape", 27, "VK_ESCAPE", "", ""],
    [1, v.Backspace, "Backspace", w.Backspace, "Backspace", 8, "VK_BACK", "", ""],
    [1, v.Tab, "Tab", w.Tab, "Tab", 9, "VK_TAB", "", ""],
    [1, v.Space, "Space", w.Space, "Space", 32, "VK_SPACE", "", ""],
    [0, v.Minus, "Minus", w.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, v.Equal, "Equal", w.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, v.BracketLeft, "BracketLeft", w.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, v.BracketRight, "BracketRight", w.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, v.Backslash, "Backslash", w.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, v.IntlHash, "IntlHash", w.Unknown, "", 0, "", "", ""],
    [0, v.Semicolon, "Semicolon", w.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, v.Quote, "Quote", w.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, v.Backquote, "Backquote", w.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, v.Comma, "Comma", w.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, v.Period, "Period", w.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, v.Slash, "Slash", w.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, v.CapsLock, "CapsLock", w.CapsLock, "CapsLock", 20, "VK_CAPITAL", "", ""],
    [1, v.F1, "F1", w.F1, "F1", 112, "VK_F1", "", ""],
    [1, v.F2, "F2", w.F2, "F2", 113, "VK_F2", "", ""],
    [1, v.F3, "F3", w.F3, "F3", 114, "VK_F3", "", ""],
    [1, v.F4, "F4", w.F4, "F4", 115, "VK_F4", "", ""],
    [1, v.F5, "F5", w.F5, "F5", 116, "VK_F5", "", ""],
    [1, v.F6, "F6", w.F6, "F6", 117, "VK_F6", "", ""],
    [1, v.F7, "F7", w.F7, "F7", 118, "VK_F7", "", ""],
    [1, v.F8, "F8", w.F8, "F8", 119, "VK_F8", "", ""],
    [1, v.F9, "F9", w.F9, "F9", 120, "VK_F9", "", ""],
    [1, v.F10, "F10", w.F10, "F10", 121, "VK_F10", "", ""],
    [1, v.F11, "F11", w.F11, "F11", 122, "VK_F11", "", ""],
    [1, v.F12, "F12", w.F12, "F12", 123, "VK_F12", "", ""],
    [1, v.PrintScreen, "PrintScreen", w.Unknown, "", 0, "", "", ""],
    [1, v.ScrollLock, "ScrollLock", w.ScrollLock, "ScrollLock", 145, "VK_SCROLL", "", ""],
    [1, v.Pause, "Pause", w.PauseBreak, "PauseBreak", 19, "VK_PAUSE", "", ""],
    [1, v.Insert, "Insert", w.Insert, "Insert", 45, "VK_INSERT", "", ""],
    [1, v.Home, "Home", w.Home, "Home", 36, "VK_HOME", "", ""],
    [1, v.PageUp, "PageUp", w.PageUp, "PageUp", 33, "VK_PRIOR", "", ""],
    [1, v.Delete, "Delete", w.Delete, "Delete", 46, "VK_DELETE", "", ""],
    [1, v.End, "End", w.End, "End", 35, "VK_END", "", ""],
    [1, v.PageDown, "PageDown", w.PageDown, "PageDown", 34, "VK_NEXT", "", ""],
    [1, v.ArrowRight, "ArrowRight", w.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", ""],
    [1, v.ArrowLeft, "ArrowLeft", w.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", ""],
    [1, v.ArrowDown, "ArrowDown", w.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", ""],
    [1, v.ArrowUp, "ArrowUp", w.UpArrow, "UpArrow", 38, "VK_UP", "Up", ""],
    [1, v.NumLock, "NumLock", w.NumLock, "NumLock", 144, "VK_NUMLOCK", "", ""],
    [1, v.NumpadDivide, "NumpadDivide", w.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", "", ""],
    [1, v.NumpadMultiply, "NumpadMultiply", w.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", "", ""],
    [1, v.NumpadSubtract, "NumpadSubtract", w.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", "", ""],
    [1, v.NumpadAdd, "NumpadAdd", w.NumpadAdd, "NumPad_Add", 107, "VK_ADD", "", ""],
    [1, v.NumpadEnter, "NumpadEnter", w.Enter, "", 0, "", "", ""],
    [1, v.Numpad1, "Numpad1", w.Numpad1, "NumPad1", 97, "VK_NUMPAD1", "", ""],
    [1, v.Numpad2, "Numpad2", w.Numpad2, "NumPad2", 98, "VK_NUMPAD2", "", ""],
    [1, v.Numpad3, "Numpad3", w.Numpad3, "NumPad3", 99, "VK_NUMPAD3", "", ""],
    [1, v.Numpad4, "Numpad4", w.Numpad4, "NumPad4", 100, "VK_NUMPAD4", "", ""],
    [1, v.Numpad5, "Numpad5", w.Numpad5, "NumPad5", 101, "VK_NUMPAD5", "", ""],
    [1, v.Numpad6, "Numpad6", w.Numpad6, "NumPad6", 102, "VK_NUMPAD6", "", ""],
    [1, v.Numpad7, "Numpad7", w.Numpad7, "NumPad7", 103, "VK_NUMPAD7", "", ""],
    [1, v.Numpad8, "Numpad8", w.Numpad8, "NumPad8", 104, "VK_NUMPAD8", "", ""],
    [1, v.Numpad9, "Numpad9", w.Numpad9, "NumPad9", 105, "VK_NUMPAD9", "", ""],
    [1, v.Numpad0, "Numpad0", w.Numpad0, "NumPad0", 96, "VK_NUMPAD0", "", ""],
    [1, v.NumpadDecimal, "NumpadDecimal", w.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", "", ""],
    [0, v.IntlBackslash, "IntlBackslash", w.IntlBackslash, "OEM_102", 226, "VK_OEM_102", "", ""],
    [1, v.ContextMenu, "ContextMenu", w.ContextMenu, "ContextMenu", 93, "", "", ""],
    [1, v.Power, "Power", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadEqual, "NumpadEqual", w.Unknown, "", 0, "", "", ""],
    [1, v.F13, "F13", w.F13, "F13", 124, "VK_F13", "", ""],
    [1, v.F14, "F14", w.F14, "F14", 125, "VK_F14", "", ""],
    [1, v.F15, "F15", w.F15, "F15", 126, "VK_F15", "", ""],
    [1, v.F16, "F16", w.F16, "F16", 127, "VK_F16", "", ""],
    [1, v.F17, "F17", w.F17, "F17", 128, "VK_F17", "", ""],
    [1, v.F18, "F18", w.F18, "F18", 129, "VK_F18", "", ""],
    [1, v.F19, "F19", w.F19, "F19", 130, "VK_F19", "", ""],
    [1, v.F20, "F20", w.F20, "F20", 131, "VK_F20", "", ""],
    [1, v.F21, "F21", w.F21, "F21", 132, "VK_F21", "", ""],
    [1, v.F22, "F22", w.F22, "F22", 133, "VK_F22", "", ""],
    [1, v.F23, "F23", w.F23, "F23", 134, "VK_F23", "", ""],
    [1, v.F24, "F24", w.F24, "F24", 135, "VK_F24", "", ""],
    [1, v.Open, "Open", w.Unknown, "", 0, "", "", ""],
    [1, v.Help, "Help", w.Unknown, "", 0, "", "", ""],
    [1, v.Select, "Select", w.Unknown, "", 0, "", "", ""],
    [1, v.Again, "Again", w.Unknown, "", 0, "", "", ""],
    [1, v.Undo, "Undo", w.Unknown, "", 0, "", "", ""],
    [1, v.Cut, "Cut", w.Unknown, "", 0, "", "", ""],
    [1, v.Copy, "Copy", w.Unknown, "", 0, "", "", ""],
    [1, v.Paste, "Paste", w.Unknown, "", 0, "", "", ""],
    [1, v.Find, "Find", w.Unknown, "", 0, "", "", ""],
    [1, v.AudioVolumeMute, "AudioVolumeMute", w.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", "", ""],
    [1, v.AudioVolumeUp, "AudioVolumeUp", w.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", "", ""],
    [1, v.AudioVolumeDown, "AudioVolumeDown", w.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", "", ""],
    [1, v.NumpadComma, "NumpadComma", w.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", "", ""],
    [0, v.IntlRo, "IntlRo", w.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", "", ""],
    [1, v.KanaMode, "KanaMode", w.Unknown, "", 0, "", "", ""],
    [0, v.IntlYen, "IntlYen", w.Unknown, "", 0, "", "", ""],
    [1, v.Convert, "Convert", w.Unknown, "", 0, "", "", ""],
    [1, v.NonConvert, "NonConvert", w.Unknown, "", 0, "", "", ""],
    [1, v.Lang1, "Lang1", w.Unknown, "", 0, "", "", ""],
    [1, v.Lang2, "Lang2", w.Unknown, "", 0, "", "", ""],
    [1, v.Lang3, "Lang3", w.Unknown, "", 0, "", "", ""],
    [1, v.Lang4, "Lang4", w.Unknown, "", 0, "", "", ""],
    [1, v.Lang5, "Lang5", w.Unknown, "", 0, "", "", ""],
    [1, v.Abort, "Abort", w.Unknown, "", 0, "", "", ""],
    [1, v.Props, "Props", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadParenLeft, "NumpadParenLeft", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadParenRight, "NumpadParenRight", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadBackspace, "NumpadBackspace", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadMemoryStore, "NumpadMemoryStore", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadMemoryRecall, "NumpadMemoryRecall", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadMemoryClear, "NumpadMemoryClear", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadMemoryAdd, "NumpadMemoryAdd", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadMemorySubtract, "NumpadMemorySubtract", w.Unknown, "", 0, "", "", ""],
    [1, v.NumpadClear, "NumpadClear", w.Clear, "Clear", 12, "VK_CLEAR", "", ""],
    [1, v.NumpadClearEntry, "NumpadClearEntry", w.Unknown, "", 0, "", "", ""],
    [1, v.None, "", w.Ctrl, "Ctrl", 17, "VK_CONTROL", "", ""],
    [1, v.None, "", w.Shift, "Shift", 16, "VK_SHIFT", "", ""],
    [1, v.None, "", w.Alt, "Alt", 18, "VK_MENU", "", ""],
    [1, v.None, "", w.Meta, "Meta", 91, "VK_COMMAND", "", ""],
    [1, v.ControlLeft, "ControlLeft", w.Ctrl, "", 0, "VK_LCONTROL", "", ""],
    [1, v.ShiftLeft, "ShiftLeft", w.Shift, "", 0, "VK_LSHIFT", "", ""],
    [1, v.AltLeft, "AltLeft", w.Alt, "", 0, "VK_LMENU", "", ""],
    [1, v.MetaLeft, "MetaLeft", w.Meta, "", 0, "VK_LWIN", "", ""],
    [1, v.ControlRight, "ControlRight", w.Ctrl, "", 0, "VK_RCONTROL", "", ""],
    [1, v.ShiftRight, "ShiftRight", w.Shift, "", 0, "VK_RSHIFT", "", ""],
    [1, v.AltRight, "AltRight", w.Alt, "", 0, "VK_RMENU", "", ""],
    [1, v.MetaRight, "MetaRight", w.Meta, "", 0, "VK_RWIN", "", ""],
    [1, v.BrightnessUp, "BrightnessUp", w.Unknown, "", 0, "", "", ""],
    [1, v.BrightnessDown, "BrightnessDown", w.Unknown, "", 0, "", "", ""],
    [1, v.MediaPlay, "MediaPlay", w.Unknown, "", 0, "", "", ""],
    [1, v.MediaRecord, "MediaRecord", w.Unknown, "", 0, "", "", ""],
    [1, v.MediaFastForward, "MediaFastForward", w.Unknown, "", 0, "", "", ""],
    [1, v.MediaRewind, "MediaRewind", w.Unknown, "", 0, "", "", ""],
    [1, v.MediaTrackNext, "MediaTrackNext", w.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", "", ""],
    [1, v.MediaTrackPrevious, "MediaTrackPrevious", w.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", "", ""],
    [1, v.MediaStop, "MediaStop", w.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", "", ""],
    [1, v.Eject, "Eject", w.Unknown, "", 0, "", "", ""],
    [1, v.MediaPlayPause, "MediaPlayPause", w.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", "", ""],
    [1, v.MediaSelect, "MediaSelect", w.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", "", ""],
    [1, v.LaunchMail, "LaunchMail", w.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", "", ""],
    [1, v.LaunchApp2, "LaunchApp2", w.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", "", ""],
    [1, v.LaunchApp1, "LaunchApp1", w.Unknown, "", 0, "VK_MEDIA_LAUNCH_APP1", "", ""],
    [1, v.SelectTask, "SelectTask", w.Unknown, "", 0, "", "", ""],
    [1, v.LaunchScreenSaver, "LaunchScreenSaver", w.Unknown, "", 0, "", "", ""],
    [1, v.BrowserSearch, "BrowserSearch", w.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", "", ""],
    [1, v.BrowserHome, "BrowserHome", w.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", "", ""],
    [1, v.BrowserBack, "BrowserBack", w.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", "", ""],
    [1, v.BrowserForward, "BrowserForward", w.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", "", ""],
    [1, v.BrowserStop, "BrowserStop", w.Unknown, "", 0, "VK_BROWSER_STOP", "", ""],
    [1, v.BrowserRefresh, "BrowserRefresh", w.Unknown, "", 0, "VK_BROWSER_REFRESH", "", ""],
    [1, v.BrowserFavorites, "BrowserFavorites", w.Unknown, "", 0, "VK_BROWSER_FAVORITES", "", ""],
    [1, v.ZoomToggle, "ZoomToggle", w.Unknown, "", 0, "", "", ""],
    [1, v.MailReply, "MailReply", w.Unknown, "", 0, "", "", ""],
    [1, v.MailForward, "MailForward", w.Unknown, "", 0, "", "", ""],
    [1, v.MailSend, "MailSend", w.Unknown, "", 0, "", "", ""],
    [1, v.None, "", w.KEY_IN_COMPOSITION, "KeyInComposition", 229, "", "", ""],
    [1, v.None, "", w.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", "", ""],
    [1, v.None, "", w.OEM_8, "OEM_8", 223, "VK_OEM_8", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_KANA", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_HANGUL", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_JUNJA", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_FINAL", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_HANJA", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_KANJI", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_CONVERT", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_NONCONVERT", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_ACCEPT", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_MODECHANGE", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_SELECT", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_PRINT", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_EXECUTE", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_SNAPSHOT", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_HELP", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_APPS", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_PROCESSKEY", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_PACKET", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_DBE_SBCSCHAR", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_DBE_DBCSCHAR", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_ATTN", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_CRSEL", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_EXSEL", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_EREOF", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_PLAY", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_ZOOM", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_NONAME", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_PA1", "", ""],
    [1, v.None, "", w.Unknown, "", 0, "VK_OEM_CLEAR", "", ""]
  ], n = [], r = [];
  for (const i of t) {
    const [s, a, l, o, u, h, f, m, p] = i;
    if (r[a] || (r[a] = !0, u1[l] = a, c1[l.toLowerCase()] = a, s && o !== w.Unknown && o !== w.Enter && o !== w.Ctrl && o !== w.Shift && o !== w.Alt && o !== w.Meta && (li[o] = a)), !n[o]) {
      if (n[o] = !0, !u)
        throw new Error(
          `String representation missing for key code ${o} around scan code ${l}`
        );
      ur.define(o, u), ai.define(o, m || u), oi.define(o, p || m || u);
    }
    h && (l1[h] = o);
  }
  li[w.Enter] = v.Enter;
})();
var vs;
(function(e) {
  function t(l) {
    return ur.keyCodeToStr(l);
  }
  e.toString = t;
  function n(l) {
    return ur.strToKeyCode(l);
  }
  e.fromString = n;
  function r(l) {
    return ai.keyCodeToStr(l);
  }
  e.toUserSettingsUS = r;
  function i(l) {
    return oi.keyCodeToStr(l);
  }
  e.toUserSettingsGeneral = i;
  function s(l) {
    return ai.strToKeyCode(l) || oi.strToKeyCode(l);
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
    return ur.keyCodeToStr(l);
  }
  e.toElectronAccelerator = a;
})(vs || (vs = {}));
var tn;
(function(e) {
  e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(tn || (tn = {}));
function f1(e, t) {
  const n = (t & 65535) << 16 >>> 0;
  return (e | n) >>> 0;
}
var ui;
(function(e) {
  e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart", e[e.ChatSessionContext = 24] = "ChatSessionContext", e[e.ChatResponsePullRequestPart = 25] = "ChatResponsePullRequestPart";
})(ui || (ui = {}));
let Vt;
const Wr = globalThis.vscode;
var jl;
if (typeof Wr < "u" && typeof Wr.process < "u") {
  const e = Wr.process;
  Vt = {
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
} else typeof process < "u" && typeof ((jl = process == null ? void 0 : process.versions) == null ? void 0 : jl.node) == "string" ? Vt = {
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
} : Vt = {
  get platform() {
    return _n ? "win32" : xc ? "darwin" : "linux";
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
const vr = Vt.cwd, h1 = Vt.env, m1 = Vt.platform;
Vt.arch;
const g1 = 65, p1 = 97, d1 = 90, b1 = 122, $t = 46, ve = 47, Fe = 92, ct = 58, _1 = 63;
class ru extends Error {
  constructor(t, n, r) {
    let i;
    typeof n == "string" && n.indexOf("not ") === 0 ? (i = "must not be", n = n.replace(/^not /, "")) : i = "must be";
    const s = t.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${t}" ${s} ${i} of type ${n}`;
    a += `. Received type ${typeof r}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
}
function w1(e, t) {
  if (e === null || typeof e != "object")
    throw new ru(t, "Object", e);
}
function fe(e, t) {
  if (typeof e != "string")
    throw new ru(t, "string", e);
}
const et = m1 === "win32";
function Q(e) {
  return e === ve || e === Fe;
}
function ci(e) {
  return e === ve;
}
function ft(e) {
  return e >= g1 && e <= d1 || e >= p1 && e <= b1;
}
function yr(e, t, n, r) {
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
        if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== $t || i.charCodeAt(i.length - 2) !== $t) {
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
    } else o === $t && l !== -1 ? ++l : l = -1;
  }
  return i;
}
function v1(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function iu(e, t) {
  w1(t, "pathObject");
  const n = t.dir || t.root, r = t.base || `${t.name || ""}${v1(t.ext)}`;
  return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
}
const Le = {
  resolve(...e) {
    let t = "", n = "", r = !1;
    for (let i = e.length - 1; i >= -1; i--) {
      let s;
      if (i >= 0) {
        if (s = e[i], fe(s, `paths[${i}]`), s.length === 0)
          continue;
      } else t.length === 0 ? s = vr() : (s = h1[`=${t}`] || vr(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === Fe) && (s = `${t}\\`));
      const a = s.length;
      let l = 0, o = "", u = !1;
      const h = s.charCodeAt(0);
      if (a === 1)
        Q(h) && (l = 1, u = !0);
      else if (Q(h))
        if (u = !0, Q(s.charCodeAt(1))) {
          let f = 2, m = f;
          for (; f < a && !Q(s.charCodeAt(f)); )
            f++;
          if (f < a && f !== m) {
            const p = s.slice(m, f);
            for (m = f; f < a && Q(s.charCodeAt(f)); )
              f++;
            if (f < a && f !== m) {
              for (m = f; f < a && !Q(s.charCodeAt(f)); )
                f++;
              (f === a || f !== m) && (o = `\\\\${p}\\${s.slice(m, f)}`, l = f);
            }
          }
        } else
          l = 1;
      else ft(h) && s.charCodeAt(1) === ct && (o = s.slice(0, 2), l = 2, a > 2 && Q(s.charCodeAt(2)) && (u = !0, l = 3));
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
    return n = yr(n, !r, "\\", Q), r ? `${t}\\${n}` : `${t}${n}` || ".";
  },
  normalize(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = 0, r, i = !1;
    const s = e.charCodeAt(0);
    if (t === 1)
      return ci(s) ? "\\" : e;
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
    else ft(s) && e.charCodeAt(1) === ct && (r = e.slice(0, 2), n = 2, t > 2 && Q(e.charCodeAt(2)) && (i = !0, n = 3));
    let a = n < t ? yr(e.slice(n), !i, "\\", Q) : "";
    if (a.length === 0 && !i && (a = "."), a.length > 0 && Q(e.charCodeAt(t - 1)) && (a += "\\"), !i && r === void 0 && e.includes(":")) {
      if (a.length >= 2 && ft(a.charCodeAt(0)) && a.charCodeAt(1) === ct)
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
    return Q(n) || t > 2 && ft(n) && e.charCodeAt(1) === ct && Q(e.charCodeAt(2));
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
    return Le.normalize(t);
  },
  relative(e, t) {
    if (fe(e, "from"), fe(t, "to"), e === t)
      return "";
    const n = Le.resolve(e), r = Le.resolve(t);
    if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t))
      return "";
    if (n.length !== e.length || r.length !== t.length) {
      const g = n.split("\\"), d = r.split("\\");
      g[g.length - 1] === "" && g.pop(), d[d.length - 1] === "" && d.pop();
      const _ = g.length, y = d.length, x = _ < y ? _ : y;
      let b;
      for (b = 0; b < x && g[b].toLowerCase() === d[b].toLowerCase(); b++)
        ;
      return b === 0 ? r : b === x ? y > x ? d.slice(b).join("\\") : _ > x ? "..\\".repeat(_ - 1 - b) + ".." : "" : "..\\".repeat(_ - b) + d.slice(b).join("\\");
    }
    let i = 0;
    for (; i < e.length && e.charCodeAt(i) === Fe; )
      i++;
    let s = e.length;
    for (; s - 1 > i && e.charCodeAt(s - 1) === Fe; )
      s--;
    const a = s - i;
    let l = 0;
    for (; l < t.length && t.charCodeAt(l) === Fe; )
      l++;
    let o = t.length;
    for (; o - 1 > l && t.charCodeAt(o - 1) === Fe; )
      o--;
    const u = o - l, h = a < u ? a : u;
    let f = -1, m = 0;
    for (; m < h; m++) {
      const g = e.charCodeAt(i + m);
      if (g !== t.charCodeAt(l + m))
        break;
      g === Fe && (f = m);
    }
    if (m !== h) {
      if (f === -1)
        return r;
    } else {
      if (u > h) {
        if (t.charCodeAt(l + m) === Fe)
          return r.slice(l + m + 1);
        if (m === 2)
          return r.slice(l + m);
      }
      a > h && (e.charCodeAt(i + m) === Fe ? f = m : m === 2 && (f = 3)), f === -1 && (f = 0);
    }
    let p = "";
    for (m = i + f + 1; m <= s; ++m)
      (m === s || e.charCodeAt(m) === Fe) && (p += p.length === 0 ? ".." : "\\..");
    return l += f, p.length > 0 ? `${p}${r.slice(l, o)}` : (r.charCodeAt(l) === Fe && ++l, r.slice(l, o));
  },
  toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0)
      return e;
    const t = Le.resolve(e);
    if (t.length <= 2)
      return e;
    if (t.charCodeAt(0) === Fe) {
      if (t.charCodeAt(1) === Fe) {
        const n = t.charCodeAt(2);
        if (n !== _1 && n !== $t)
          return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (ft(t.charCodeAt(0)) && t.charCodeAt(1) === ct && t.charCodeAt(2) === Fe)
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
    } else ft(i) && e.charCodeAt(1) === ct && (n = t > 2 && Q(e.charCodeAt(2)) ? 3 : 2, r = n);
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
    if (e.length >= 2 && ft(e.charCodeAt(0)) && e.charCodeAt(1) === ct && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
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
    e.length >= 2 && e.charCodeAt(1) === ct && ft(e.charCodeAt(0)) && (t = r = 2);
    for (let l = e.length - 1; l >= t; --l) {
      const o = e.charCodeAt(l);
      if (Q(o)) {
        if (!s) {
          r = l + 1;
          break;
        }
        continue;
      }
      i === -1 && (s = !1, i = l + 1), o === $t ? n === -1 ? n = l : a !== 1 && (a = 1) : n !== -1 && (a = -1);
    }
    return n === -1 || i === -1 || a === 0 || a === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
  },
  format: iu.bind(null, "\\"),
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
        let f = 2, m = f;
        for (; f < n && !Q(e.charCodeAt(f)); )
          f++;
        if (f < n && f !== m) {
          for (m = f; f < n && Q(e.charCodeAt(f)); )
            f++;
          if (f < n && f !== m) {
            for (m = f; f < n && !Q(e.charCodeAt(f)); )
              f++;
            f === n ? r = f : f !== m && (r = f + 1);
          }
        }
      }
    } else if (ft(i) && e.charCodeAt(1) === ct) {
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
      l === -1 && (o = !1, l = u + 1), i === $t ? s === -1 ? s = u : h !== 1 && (h = 1) : s !== -1 && (h = -1);
    }
    return l !== -1 && (s === -1 || h === 0 || h === 1 && s === l - 1 && s === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, s), t.base = e.slice(a, l), t.ext = e.slice(s, l))), a > 0 && a !== r ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
}, y1 = (() => {
  if (et) {
    const e = /\\/g;
    return () => {
      const t = vr().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => vr();
})(), se = {
  resolve(...e) {
    let t = "", n = !1;
    for (let r = e.length - 1; r >= 0 && !n; r--) {
      const i = e[r];
      fe(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === ve);
    }
    if (!n) {
      const r = y1();
      t = `${r}/${t}`, n = r.charCodeAt(0) === ve;
    }
    return t = yr(t, !n, "/", ci), n ? `/${t}` : t.length > 0 ? t : ".";
  },
  normalize(e) {
    if (fe(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === ve, n = e.charCodeAt(e.length - 1) === ve;
    return e = yr(e, !t, "/", ci), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
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
      const f = e.charCodeAt(n + u);
      if (f !== t.charCodeAt(s + u))
        break;
      f === ve && (o = u);
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
  format: iu.bind(null, "/"),
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
      a === -1 && (l = !1, a = o + 1), h === $t ? i === -1 ? i = o : u !== 1 && (u = 1) : i !== -1 && (u = -1);
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
se.win32 = Le.win32 = Le;
se.posix = Le.posix = se;
const L1 = et ? Le.normalize : se.normalize;
et ? Le.isAbsolute : se.isAbsolute;
const N1 = et ? Le.join : se.join, x1 = et ? Le.resolve : se.resolve, A1 = et ? Le.relative : se.relative, E1 = et ? Le.dirname : se.dirname;
et ? Le.basename : se.basename;
et ? Le.extname : se.extname;
et ? Le.parse : se.parse;
const cr = et ? Le.sep : se.sep, R1 = /^\w[\w\d+.-]*$/, T1 = /^\//, k1 = /^\/\//;
function S1(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
    );
  if (e.scheme && !R1.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!T1.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (k1.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function M1(e, t) {
  return !e && !t ? "file" : e;
}
function I1(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Ze && (t = Ze + t) : t = Ze;
      break;
  }
  return t;
}
const ie = "", Ze = "/", P1 = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
let Oe = class fr {
  static isUri(t) {
    return t instanceof fr ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
  }
  constructor(t, n, r, i, s, a = !1) {
    typeof t == "object" ? (this.scheme = t.scheme || ie, this.authority = t.authority || ie, this.path = t.path || ie, this.query = t.query || ie, this.fragment = t.fragment || ie) : (this.scheme = M1(t, a), this.authority = n || ie, this.path = I1(this.scheme, r || ie), this.query = i || ie, this.fragment = s || ie, S1(this, a));
  }
  get fsPath() {
    return Lr(this, !1);
  }
  with(t) {
    if (!t)
      return this;
    let { scheme: n, authority: r, path: i, query: s, fragment: a } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = ie), r === void 0 ? r = this.authority : r === null && (r = ie), i === void 0 ? i = this.path : i === null && (i = ie), s === void 0 ? s = this.query : s === null && (s = ie), a === void 0 ? a = this.fragment : a === null && (a = ie), n === this.scheme && r === this.authority && i === this.path && s === this.query && a === this.fragment ? this : new Jt(n, r, i, s, a);
  }
  static parse(t, n = !1) {
    const r = P1.exec(t);
    return r ? new Jt(
      r[2] || ie,
      er(r[4] || ie),
      er(r[5] || ie),
      er(r[7] || ie),
      er(r[9] || ie),
      n
    ) : new Jt(ie, ie, ie, ie, ie);
  }
  static file(t) {
    let n = ie;
    if (_n && (t = t.replace(/\\/g, Ze)), t[0] === Ze && t[1] === Ze) {
      const r = t.indexOf(Ze, 2);
      r === -1 ? (n = t.substring(2), t = Ze) : (n = t.substring(2, r), t = t.substring(r) || Ze);
    }
    return new Jt("file", n, t, ie, ie);
  }
  static from(t, n) {
    return new Jt(
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
    return _n && t.scheme === "file" ? r = fr.file(Le.join(Lr(t, !0), ...n)).path : r = se.join(t.path, ...n), t.with({ path: r });
  }
  toString(t = !1) {
    return fi(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof fr)
        return t;
      {
        const n = new Jt(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === su ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
const su = _n ? 1 : void 0;
class Jt extends Oe {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Lr(this, !1)), this._fsPath;
  }
  toString(t = !1) {
    return t ? fi(this, !0) : (this._formatted || (this._formatted = fi(this, !1)), this._formatted);
  }
  toJSON() {
    const t = {
      $mid: ui.Uri
    };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = su), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}
const au = {
  [T.Colon]: "%3A",
  [T.Slash]: "%2F",
  [T.QuestionMark]: "%3F",
  [T.Hash]: "%23",
  [T.OpenSquareBracket]: "%5B",
  [T.CloseSquareBracket]: "%5D",
  [T.AtSign]: "%40",
  [T.ExclamationMark]: "%21",
  [T.DollarSign]: "%24",
  [T.Ampersand]: "%26",
  [T.SingleQuote]: "%27",
  [T.OpenParen]: "%28",
  [T.CloseParen]: "%29",
  [T.Asterisk]: "%2A",
  [T.Plus]: "%2B",
  [T.Comma]: "%2C",
  [T.Semicolon]: "%3B",
  [T.Equals]: "%3D",
  [T.Space]: "%20"
};
function ys(e, t, n) {
  let r, i = -1;
  for (let s = 0; s < e.length; s++) {
    const a = e.charCodeAt(s);
    if (a >= T.a && a <= T.z || a >= T.A && a <= T.Z || a >= T.Digit0 && a <= T.Digit9 || a === T.Dash || a === T.Period || a === T.Underline || a === T.Tilde || t && a === T.Slash || n && a === T.OpenSquareBracket || n && a === T.CloseSquareBracket || n && a === T.Colon)
      i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r !== void 0 && (r += e.charAt(s));
    else {
      r === void 0 && (r = e.substr(0, s));
      const l = au[a];
      l !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r += l) : i === -1 && (i = s);
    }
  }
  return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function F1(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    r === T.Hash || r === T.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += au[r]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function Lr(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === T.Slash && (e.path.charCodeAt(1) >= T.A && e.path.charCodeAt(1) <= T.Z || e.path.charCodeAt(1) >= T.a && e.path.charCodeAt(1) <= T.z) && e.path.charCodeAt(2) === T.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, _n && (n = n.replace(/\//g, "\\")), n;
}
function fi(e, t) {
  const n = t ? F1 : ys;
  let r = "", { scheme: i, authority: s, path: a, query: l, fragment: o } = e;
  if (i && (r += i, r += ":"), (s || i === "file") && (r += Ze, r += Ze), s) {
    let u = s.indexOf("@");
    if (u !== -1) {
      const h = s.substr(0, u);
      s = s.substr(u + 1), u = h.lastIndexOf(":"), u === -1 ? r += n(h, !1, !1) : (r += n(h.substr(0, u), !1, !1), r += ":", r += n(h.substr(u + 1), !1, !0)), r += "@";
    }
    s = s.toLowerCase(), u = s.lastIndexOf(":"), u === -1 ? r += n(s, !1, !0) : (r += n(s.substr(0, u), !1, !0), r += s.substr(u));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === T.Slash && a.charCodeAt(2) === T.Colon) {
      const u = a.charCodeAt(1);
      u >= T.A && u <= T.Z && (a = `/${String.fromCharCode(u + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === T.Colon) {
      const u = a.charCodeAt(0);
      u >= T.A && u <= T.Z && (a = `${String.fromCharCode(u + 32)}:${a.substr(2)}`);
    }
    r += n(a, !0, !1);
  }
  return l && (r += "?", r += n(l, !1, !1)), o && (r += "#", r += t ? o : ys(o, !1, !1)), r;
}
function ou(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + ou(e.substr(3)) : e;
  }
}
const Ls = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function er(e) {
  return e.match(Ls) ? e.replace(Ls, (t) => ou(t)) : e;
}
var Et;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Et || (Et = {}));
class Ve extends G {
  constructor(t, n, r, i) {
    super(t, n, r, i), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = r, this.positionColumn = i;
  }
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  equalsSelection(t) {
    return Ve.selectionsEqual(this, t);
  }
  static selectionsEqual(t, n) {
    return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
  }
  getDirection() {
    return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? Et.LTR : Et.RTL;
  }
  setEndPosition(t, n) {
    return this.getDirection() === Et.LTR ? new Ve(this.startLineNumber, this.startColumn, t, n) : new Ve(t, n, this.startLineNumber, this.startColumn);
  }
  getPosition() {
    return new ee(this.positionLineNumber, this.positionColumn);
  }
  getSelectionStart() {
    return new ee(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  setStartPosition(t, n) {
    return this.getDirection() === Et.LTR ? new Ve(t, n, this.endLineNumber, this.endColumn) : new Ve(this.endLineNumber, this.endColumn, t, n);
  }
  static fromPositions(t, n = t) {
    return new Ve(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static fromRange(t, n) {
    return n === Et.LTR ? new Ve(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : new Ve(
      t.endLineNumber,
      t.endColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  static liftSelection(t) {
    return new Ve(
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
    return s === Et.LTR ? new Ve(t, n, r, i) : new Ve(r, i, t, n);
  }
}
const Ns = /* @__PURE__ */ Object.create(null);
function c(e, t) {
  if (oc(t)) {
    const n = Ns[t];
    if (n === void 0)
      throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return Ns[e] = t, { id: e };
}
const U1 = {
  add: c("add", 6e4),
  plus: c("plus", 6e4),
  gistNew: c("gist-new", 6e4),
  repoCreate: c("repo-create", 6e4),
  lightbulb: c("lightbulb", 60001),
  lightBulb: c("light-bulb", 60001),
  repo: c("repo", 60002),
  repoDelete: c("repo-delete", 60002),
  gistFork: c("gist-fork", 60003),
  repoForked: c("repo-forked", 60003),
  gitPullRequest: c("git-pull-request", 60004),
  gitPullRequestAbandoned: c("git-pull-request-abandoned", 60004),
  recordKeys: c("record-keys", 60005),
  keyboard: c("keyboard", 60005),
  tag: c("tag", 60006),
  gitPullRequestLabel: c("git-pull-request-label", 60006),
  tagAdd: c("tag-add", 60006),
  tagRemove: c("tag-remove", 60006),
  person: c("person", 60007),
  personFollow: c("person-follow", 60007),
  personOutline: c("person-outline", 60007),
  personFilled: c("person-filled", 60007),
  gitBranch: c("git-branch", 60008),
  gitBranchCreate: c("git-branch-create", 60008),
  gitBranchDelete: c("git-branch-delete", 60008),
  sourceControl: c("source-control", 60008),
  mirror: c("mirror", 60009),
  mirrorPublic: c("mirror-public", 60009),
  star: c("star", 60010),
  starAdd: c("star-add", 60010),
  starDelete: c("star-delete", 60010),
  starEmpty: c("star-empty", 60010),
  comment: c("comment", 60011),
  commentAdd: c("comment-add", 60011),
  alert: c("alert", 60012),
  warning: c("warning", 60012),
  search: c("search", 60013),
  searchSave: c("search-save", 60013),
  logOut: c("log-out", 60014),
  signOut: c("sign-out", 60014),
  logIn: c("log-in", 60015),
  signIn: c("sign-in", 60015),
  eye: c("eye", 60016),
  eyeUnwatch: c("eye-unwatch", 60016),
  eyeWatch: c("eye-watch", 60016),
  circleFilled: c("circle-filled", 60017),
  primitiveDot: c("primitive-dot", 60017),
  closeDirty: c("close-dirty", 60017),
  debugBreakpoint: c("debug-breakpoint", 60017),
  debugBreakpointDisabled: c("debug-breakpoint-disabled", 60017),
  debugHint: c("debug-hint", 60017),
  terminalDecorationSuccess: c("terminal-decoration-success", 60017),
  primitiveSquare: c("primitive-square", 60018),
  edit: c("edit", 60019),
  pencil: c("pencil", 60019),
  info: c("info", 60020),
  issueOpened: c("issue-opened", 60020),
  gistPrivate: c("gist-private", 60021),
  gitForkPrivate: c("git-fork-private", 60021),
  lock: c("lock", 60021),
  mirrorPrivate: c("mirror-private", 60021),
  close: c("close", 60022),
  removeClose: c("remove-close", 60022),
  x: c("x", 60022),
  repoSync: c("repo-sync", 60023),
  sync: c("sync", 60023),
  clone: c("clone", 60024),
  desktopDownload: c("desktop-download", 60024),
  beaker: c("beaker", 60025),
  microscope: c("microscope", 60025),
  vm: c("vm", 60026),
  deviceDesktop: c("device-desktop", 60026),
  file: c("file", 60027),
  fileText: c("file-text", 60027),
  more: c("more", 60028),
  ellipsis: c("ellipsis", 60028),
  kebabHorizontal: c("kebab-horizontal", 60028),
  mailReply: c("mail-reply", 60029),
  reply: c("reply", 60029),
  organization: c("organization", 60030),
  organizationFilled: c("organization-filled", 60030),
  organizationOutline: c("organization-outline", 60030),
  newFile: c("new-file", 60031),
  fileAdd: c("file-add", 60031),
  newFolder: c("new-folder", 60032),
  fileDirectoryCreate: c("file-directory-create", 60032),
  trash: c("trash", 60033),
  trashcan: c("trashcan", 60033),
  history: c("history", 60034),
  clock: c("clock", 60034),
  folder: c("folder", 60035),
  fileDirectory: c("file-directory", 60035),
  symbolFolder: c("symbol-folder", 60035),
  logoGithub: c("logo-github", 60036),
  markGithub: c("mark-github", 60036),
  github: c("github", 60036),
  terminal: c("terminal", 60037),
  console: c("console", 60037),
  repl: c("repl", 60037),
  zap: c("zap", 60038),
  symbolEvent: c("symbol-event", 60038),
  error: c("error", 60039),
  stop: c("stop", 60039),
  variable: c("variable", 60040),
  symbolVariable: c("symbol-variable", 60040),
  array: c("array", 60042),
  symbolArray: c("symbol-array", 60042),
  symbolModule: c("symbol-module", 60043),
  symbolPackage: c("symbol-package", 60043),
  symbolNamespace: c("symbol-namespace", 60043),
  symbolObject: c("symbol-object", 60043),
  symbolMethod: c("symbol-method", 60044),
  symbolFunction: c("symbol-function", 60044),
  symbolConstructor: c("symbol-constructor", 60044),
  symbolBoolean: c("symbol-boolean", 60047),
  symbolNull: c("symbol-null", 60047),
  symbolNumeric: c("symbol-numeric", 60048),
  symbolNumber: c("symbol-number", 60048),
  symbolStructure: c("symbol-structure", 60049),
  symbolStruct: c("symbol-struct", 60049),
  symbolParameter: c("symbol-parameter", 60050),
  symbolTypeParameter: c("symbol-type-parameter", 60050),
  symbolKey: c("symbol-key", 60051),
  symbolText: c("symbol-text", 60051),
  symbolReference: c("symbol-reference", 60052),
  goToFile: c("go-to-file", 60052),
  symbolEnum: c("symbol-enum", 60053),
  symbolValue: c("symbol-value", 60053),
  symbolRuler: c("symbol-ruler", 60054),
  symbolUnit: c("symbol-unit", 60054),
  activateBreakpoints: c("activate-breakpoints", 60055),
  archive: c("archive", 60056),
  arrowBoth: c("arrow-both", 60057),
  arrowDown: c("arrow-down", 60058),
  arrowLeft: c("arrow-left", 60059),
  arrowRight: c("arrow-right", 60060),
  arrowSmallDown: c("arrow-small-down", 60061),
  arrowSmallLeft: c("arrow-small-left", 60062),
  arrowSmallRight: c("arrow-small-right", 60063),
  arrowSmallUp: c("arrow-small-up", 60064),
  arrowUp: c("arrow-up", 60065),
  bell: c("bell", 60066),
  bold: c("bold", 60067),
  book: c("book", 60068),
  bookmark: c("bookmark", 60069),
  debugBreakpointConditionalUnverified: c("debug-breakpoint-conditional-unverified", 60070),
  debugBreakpointConditional: c("debug-breakpoint-conditional", 60071),
  debugBreakpointConditionalDisabled: c("debug-breakpoint-conditional-disabled", 60071),
  debugBreakpointDataUnverified: c("debug-breakpoint-data-unverified", 60072),
  debugBreakpointData: c("debug-breakpoint-data", 60073),
  debugBreakpointDataDisabled: c("debug-breakpoint-data-disabled", 60073),
  debugBreakpointLogUnverified: c("debug-breakpoint-log-unverified", 60074),
  debugBreakpointLog: c("debug-breakpoint-log", 60075),
  debugBreakpointLogDisabled: c("debug-breakpoint-log-disabled", 60075),
  briefcase: c("briefcase", 60076),
  broadcast: c("broadcast", 60077),
  browser: c("browser", 60078),
  bug: c("bug", 60079),
  calendar: c("calendar", 60080),
  caseSensitive: c("case-sensitive", 60081),
  check: c("check", 60082),
  checklist: c("checklist", 60083),
  chevronDown: c("chevron-down", 60084),
  chevronLeft: c("chevron-left", 60085),
  chevronRight: c("chevron-right", 60086),
  chevronUp: c("chevron-up", 60087),
  chromeClose: c("chrome-close", 60088),
  chromeMaximize: c("chrome-maximize", 60089),
  chromeMinimize: c("chrome-minimize", 60090),
  chromeRestore: c("chrome-restore", 60091),
  circleOutline: c("circle-outline", 60092),
  circle: c("circle", 60092),
  debugBreakpointUnverified: c("debug-breakpoint-unverified", 60092),
  terminalDecorationIncomplete: c("terminal-decoration-incomplete", 60092),
  circleSlash: c("circle-slash", 60093),
  circuitBoard: c("circuit-board", 60094),
  clearAll: c("clear-all", 60095),
  clippy: c("clippy", 60096),
  closeAll: c("close-all", 60097),
  cloudDownload: c("cloud-download", 60098),
  cloudUpload: c("cloud-upload", 60099),
  code: c("code", 60100),
  collapseAll: c("collapse-all", 60101),
  colorMode: c("color-mode", 60102),
  commentDiscussion: c("comment-discussion", 60103),
  creditCard: c("credit-card", 60105),
  dash: c("dash", 60108),
  dashboard: c("dashboard", 60109),
  database: c("database", 60110),
  debugContinue: c("debug-continue", 60111),
  debugDisconnect: c("debug-disconnect", 60112),
  debugPause: c("debug-pause", 60113),
  debugRestart: c("debug-restart", 60114),
  debugStart: c("debug-start", 60115),
  debugStepInto: c("debug-step-into", 60116),
  debugStepOut: c("debug-step-out", 60117),
  debugStepOver: c("debug-step-over", 60118),
  debugStop: c("debug-stop", 60119),
  debug: c("debug", 60120),
  deviceCameraVideo: c("device-camera-video", 60121),
  deviceCamera: c("device-camera", 60122),
  deviceMobile: c("device-mobile", 60123),
  diffAdded: c("diff-added", 60124),
  diffIgnored: c("diff-ignored", 60125),
  diffModified: c("diff-modified", 60126),
  diffRemoved: c("diff-removed", 60127),
  diffRenamed: c("diff-renamed", 60128),
  diff: c("diff", 60129),
  diffSidebyside: c("diff-sidebyside", 60129),
  discard: c("discard", 60130),
  editorLayout: c("editor-layout", 60131),
  emptyWindow: c("empty-window", 60132),
  exclude: c("exclude", 60133),
  extensions: c("extensions", 60134),
  eyeClosed: c("eye-closed", 60135),
  fileBinary: c("file-binary", 60136),
  fileCode: c("file-code", 60137),
  fileMedia: c("file-media", 60138),
  filePdf: c("file-pdf", 60139),
  fileSubmodule: c("file-submodule", 60140),
  fileSymlinkDirectory: c("file-symlink-directory", 60141),
  fileSymlinkFile: c("file-symlink-file", 60142),
  fileZip: c("file-zip", 60143),
  files: c("files", 60144),
  filter: c("filter", 60145),
  flame: c("flame", 60146),
  foldDown: c("fold-down", 60147),
  foldUp: c("fold-up", 60148),
  fold: c("fold", 60149),
  folderActive: c("folder-active", 60150),
  folderOpened: c("folder-opened", 60151),
  gear: c("gear", 60152),
  gift: c("gift", 60153),
  gistSecret: c("gist-secret", 60154),
  gist: c("gist", 60155),
  gitCommit: c("git-commit", 60156),
  gitCompare: c("git-compare", 60157),
  compareChanges: c("compare-changes", 60157),
  gitMerge: c("git-merge", 60158),
  githubAction: c("github-action", 60159),
  githubAlt: c("github-alt", 60160),
  globe: c("globe", 60161),
  grabber: c("grabber", 60162),
  graph: c("graph", 60163),
  gripper: c("gripper", 60164),
  heart: c("heart", 60165),
  home: c("home", 60166),
  horizontalRule: c("horizontal-rule", 60167),
  hubot: c("hubot", 60168),
  inbox: c("inbox", 60169),
  issueReopened: c("issue-reopened", 60171),
  issues: c("issues", 60172),
  italic: c("italic", 60173),
  jersey: c("jersey", 60174),
  json: c("json", 60175),
  kebabVertical: c("kebab-vertical", 60176),
  key: c("key", 60177),
  law: c("law", 60178),
  lightbulbAutofix: c("lightbulb-autofix", 60179),
  linkExternal: c("link-external", 60180),
  link: c("link", 60181),
  listOrdered: c("list-ordered", 60182),
  listUnordered: c("list-unordered", 60183),
  liveShare: c("live-share", 60184),
  loading: c("loading", 60185),
  location: c("location", 60186),
  mailRead: c("mail-read", 60187),
  mail: c("mail", 60188),
  markdown: c("markdown", 60189),
  megaphone: c("megaphone", 60190),
  mention: c("mention", 60191),
  milestone: c("milestone", 60192),
  gitPullRequestMilestone: c("git-pull-request-milestone", 60192),
  mortarBoard: c("mortar-board", 60193),
  move: c("move", 60194),
  multipleWindows: c("multiple-windows", 60195),
  mute: c("mute", 60196),
  noNewline: c("no-newline", 60197),
  note: c("note", 60198),
  octoface: c("octoface", 60199),
  openPreview: c("open-preview", 60200),
  package: c("package", 60201),
  paintcan: c("paintcan", 60202),
  pin: c("pin", 60203),
  play: c("play", 60204),
  run: c("run", 60204),
  plug: c("plug", 60205),
  preserveCase: c("preserve-case", 60206),
  preview: c("preview", 60207),
  project: c("project", 60208),
  pulse: c("pulse", 60209),
  question: c("question", 60210),
  quote: c("quote", 60211),
  radioTower: c("radio-tower", 60212),
  reactions: c("reactions", 60213),
  references: c("references", 60214),
  refresh: c("refresh", 60215),
  regex: c("regex", 60216),
  remoteExplorer: c("remote-explorer", 60217),
  remote: c("remote", 60218),
  remove: c("remove", 60219),
  replaceAll: c("replace-all", 60220),
  replace: c("replace", 60221),
  repoClone: c("repo-clone", 60222),
  repoForcePush: c("repo-force-push", 60223),
  repoPull: c("repo-pull", 60224),
  repoPush: c("repo-push", 60225),
  report: c("report", 60226),
  requestChanges: c("request-changes", 60227),
  rocket: c("rocket", 60228),
  rootFolderOpened: c("root-folder-opened", 60229),
  rootFolder: c("root-folder", 60230),
  rss: c("rss", 60231),
  ruby: c("ruby", 60232),
  saveAll: c("save-all", 60233),
  saveAs: c("save-as", 60234),
  save: c("save", 60235),
  screenFull: c("screen-full", 60236),
  screenNormal: c("screen-normal", 60237),
  searchStop: c("search-stop", 60238),
  server: c("server", 60240),
  settingsGear: c("settings-gear", 60241),
  settings: c("settings", 60242),
  shield: c("shield", 60243),
  smiley: c("smiley", 60244),
  sortPrecedence: c("sort-precedence", 60245),
  splitHorizontal: c("split-horizontal", 60246),
  splitVertical: c("split-vertical", 60247),
  squirrel: c("squirrel", 60248),
  starFull: c("star-full", 60249),
  starHalf: c("star-half", 60250),
  symbolClass: c("symbol-class", 60251),
  symbolColor: c("symbol-color", 60252),
  symbolConstant: c("symbol-constant", 60253),
  symbolEnumMember: c("symbol-enum-member", 60254),
  symbolField: c("symbol-field", 60255),
  symbolFile: c("symbol-file", 60256),
  symbolInterface: c("symbol-interface", 60257),
  symbolKeyword: c("symbol-keyword", 60258),
  symbolMisc: c("symbol-misc", 60259),
  symbolOperator: c("symbol-operator", 60260),
  symbolProperty: c("symbol-property", 60261),
  wrench: c("wrench", 60261),
  wrenchSubaction: c("wrench-subaction", 60261),
  symbolSnippet: c("symbol-snippet", 60262),
  tasklist: c("tasklist", 60263),
  telescope: c("telescope", 60264),
  textSize: c("text-size", 60265),
  threeBars: c("three-bars", 60266),
  thumbsdown: c("thumbsdown", 60267),
  thumbsup: c("thumbsup", 60268),
  tools: c("tools", 60269),
  triangleDown: c("triangle-down", 60270),
  triangleLeft: c("triangle-left", 60271),
  triangleRight: c("triangle-right", 60272),
  triangleUp: c("triangle-up", 60273),
  twitter: c("twitter", 60274),
  unfold: c("unfold", 60275),
  unlock: c("unlock", 60276),
  unmute: c("unmute", 60277),
  unverified: c("unverified", 60278),
  verified: c("verified", 60279),
  versions: c("versions", 60280),
  vmActive: c("vm-active", 60281),
  vmOutline: c("vm-outline", 60282),
  vmRunning: c("vm-running", 60283),
  watch: c("watch", 60284),
  whitespace: c("whitespace", 60285),
  wholeWord: c("whole-word", 60286),
  window: c("window", 60287),
  wordWrap: c("word-wrap", 60288),
  zoomIn: c("zoom-in", 60289),
  zoomOut: c("zoom-out", 60290),
  listFilter: c("list-filter", 60291),
  listFlat: c("list-flat", 60292),
  listSelection: c("list-selection", 60293),
  selection: c("selection", 60293),
  listTree: c("list-tree", 60294),
  debugBreakpointFunctionUnverified: c("debug-breakpoint-function-unverified", 60295),
  debugBreakpointFunction: c("debug-breakpoint-function", 60296),
  debugBreakpointFunctionDisabled: c("debug-breakpoint-function-disabled", 60296),
  debugStackframeActive: c("debug-stackframe-active", 60297),
  circleSmallFilled: c("circle-small-filled", 60298),
  debugStackframeDot: c("debug-stackframe-dot", 60298),
  terminalDecorationMark: c("terminal-decoration-mark", 60298),
  debugStackframe: c("debug-stackframe", 60299),
  debugStackframeFocused: c("debug-stackframe-focused", 60299),
  debugBreakpointUnsupported: c("debug-breakpoint-unsupported", 60300),
  symbolString: c("symbol-string", 60301),
  debugReverseContinue: c("debug-reverse-continue", 60302),
  debugStepBack: c("debug-step-back", 60303),
  debugRestartFrame: c("debug-restart-frame", 60304),
  debugAlt: c("debug-alt", 60305),
  callIncoming: c("call-incoming", 60306),
  callOutgoing: c("call-outgoing", 60307),
  menu: c("menu", 60308),
  expandAll: c("expand-all", 60309),
  feedback: c("feedback", 60310),
  gitPullRequestReviewer: c("git-pull-request-reviewer", 60310),
  groupByRefType: c("group-by-ref-type", 60311),
  ungroupByRefType: c("ungroup-by-ref-type", 60312),
  account: c("account", 60313),
  gitPullRequestAssignee: c("git-pull-request-assignee", 60313),
  bellDot: c("bell-dot", 60314),
  debugConsole: c("debug-console", 60315),
  library: c("library", 60316),
  output: c("output", 60317),
  runAll: c("run-all", 60318),
  syncIgnored: c("sync-ignored", 60319),
  pinned: c("pinned", 60320),
  githubInverted: c("github-inverted", 60321),
  serverProcess: c("server-process", 60322),
  serverEnvironment: c("server-environment", 60323),
  pass: c("pass", 60324),
  issueClosed: c("issue-closed", 60324),
  stopCircle: c("stop-circle", 60325),
  playCircle: c("play-circle", 60326),
  record: c("record", 60327),
  debugAltSmall: c("debug-alt-small", 60328),
  vmConnect: c("vm-connect", 60329),
  cloud: c("cloud", 60330),
  merge: c("merge", 60331),
  export: c("export", 60332),
  graphLeft: c("graph-left", 60333),
  magnet: c("magnet", 60334),
  notebook: c("notebook", 60335),
  redo: c("redo", 60336),
  checkAll: c("check-all", 60337),
  pinnedDirty: c("pinned-dirty", 60338),
  passFilled: c("pass-filled", 60339),
  circleLargeFilled: c("circle-large-filled", 60340),
  circleLarge: c("circle-large", 60341),
  circleLargeOutline: c("circle-large-outline", 60341),
  combine: c("combine", 60342),
  gather: c("gather", 60342),
  table: c("table", 60343),
  variableGroup: c("variable-group", 60344),
  typeHierarchy: c("type-hierarchy", 60345),
  typeHierarchySub: c("type-hierarchy-sub", 60346),
  typeHierarchySuper: c("type-hierarchy-super", 60347),
  gitPullRequestCreate: c("git-pull-request-create", 60348),
  runAbove: c("run-above", 60349),
  runBelow: c("run-below", 60350),
  notebookTemplate: c("notebook-template", 60351),
  debugRerun: c("debug-rerun", 60352),
  workspaceTrusted: c("workspace-trusted", 60353),
  workspaceUntrusted: c("workspace-untrusted", 60354),
  workspaceUnknown: c("workspace-unknown", 60355),
  terminalCmd: c("terminal-cmd", 60356),
  terminalDebian: c("terminal-debian", 60357),
  terminalLinux: c("terminal-linux", 60358),
  terminalPowershell: c("terminal-powershell", 60359),
  terminalTmux: c("terminal-tmux", 60360),
  terminalUbuntu: c("terminal-ubuntu", 60361),
  terminalBash: c("terminal-bash", 60362),
  arrowSwap: c("arrow-swap", 60363),
  copy: c("copy", 60364),
  personAdd: c("person-add", 60365),
  filterFilled: c("filter-filled", 60366),
  wand: c("wand", 60367),
  debugLineByLine: c("debug-line-by-line", 60368),
  inspect: c("inspect", 60369),
  layers: c("layers", 60370),
  layersDot: c("layers-dot", 60371),
  layersActive: c("layers-active", 60372),
  compass: c("compass", 60373),
  compassDot: c("compass-dot", 60374),
  compassActive: c("compass-active", 60375),
  azure: c("azure", 60376),
  issueDraft: c("issue-draft", 60377),
  gitPullRequestClosed: c("git-pull-request-closed", 60378),
  gitPullRequestDraft: c("git-pull-request-draft", 60379),
  debugAll: c("debug-all", 60380),
  debugCoverage: c("debug-coverage", 60381),
  runErrors: c("run-errors", 60382),
  folderLibrary: c("folder-library", 60383),
  debugContinueSmall: c("debug-continue-small", 60384),
  beakerStop: c("beaker-stop", 60385),
  graphLine: c("graph-line", 60386),
  graphScatter: c("graph-scatter", 60387),
  pieChart: c("pie-chart", 60388),
  bracket: c("bracket", 60175),
  bracketDot: c("bracket-dot", 60389),
  bracketError: c("bracket-error", 60390),
  lockSmall: c("lock-small", 60391),
  azureDevops: c("azure-devops", 60392),
  verifiedFilled: c("verified-filled", 60393),
  newline: c("newline", 60394),
  layout: c("layout", 60395),
  layoutActivitybarLeft: c("layout-activitybar-left", 60396),
  layoutActivitybarRight: c("layout-activitybar-right", 60397),
  layoutPanelLeft: c("layout-panel-left", 60398),
  layoutPanelCenter: c("layout-panel-center", 60399),
  layoutPanelJustify: c("layout-panel-justify", 60400),
  layoutPanelRight: c("layout-panel-right", 60401),
  layoutPanel: c("layout-panel", 60402),
  layoutSidebarLeft: c("layout-sidebar-left", 60403),
  layoutSidebarRight: c("layout-sidebar-right", 60404),
  layoutStatusbar: c("layout-statusbar", 60405),
  layoutMenubar: c("layout-menubar", 60406),
  layoutCentered: c("layout-centered", 60407),
  target: c("target", 60408),
  indent: c("indent", 60409),
  recordSmall: c("record-small", 60410),
  errorSmall: c("error-small", 60411),
  terminalDecorationError: c("terminal-decoration-error", 60411),
  arrowCircleDown: c("arrow-circle-down", 60412),
  arrowCircleLeft: c("arrow-circle-left", 60413),
  arrowCircleRight: c("arrow-circle-right", 60414),
  arrowCircleUp: c("arrow-circle-up", 60415),
  layoutSidebarRightOff: c("layout-sidebar-right-off", 60416),
  layoutPanelOff: c("layout-panel-off", 60417),
  layoutSidebarLeftOff: c("layout-sidebar-left-off", 60418),
  blank: c("blank", 60419),
  heartFilled: c("heart-filled", 60420),
  map: c("map", 60421),
  mapHorizontal: c("map-horizontal", 60421),
  foldHorizontal: c("fold-horizontal", 60421),
  mapFilled: c("map-filled", 60422),
  mapHorizontalFilled: c("map-horizontal-filled", 60422),
  foldHorizontalFilled: c("fold-horizontal-filled", 60422),
  circleSmall: c("circle-small", 60423),
  bellSlash: c("bell-slash", 60424),
  bellSlashDot: c("bell-slash-dot", 60425),
  commentUnresolved: c("comment-unresolved", 60426),
  gitPullRequestGoToChanges: c("git-pull-request-go-to-changes", 60427),
  gitPullRequestNewChanges: c("git-pull-request-new-changes", 60428),
  searchFuzzy: c("search-fuzzy", 60429),
  commentDraft: c("comment-draft", 60430),
  send: c("send", 60431),
  sparkle: c("sparkle", 60432),
  insert: c("insert", 60433),
  mic: c("mic", 60434),
  thumbsdownFilled: c("thumbsdown-filled", 60435),
  thumbsupFilled: c("thumbsup-filled", 60436),
  coffee: c("coffee", 60437),
  snake: c("snake", 60438),
  game: c("game", 60439),
  vr: c("vr", 60440),
  chip: c("chip", 60441),
  piano: c("piano", 60442),
  music: c("music", 60443),
  micFilled: c("mic-filled", 60444),
  repoFetch: c("repo-fetch", 60445),
  copilot: c("copilot", 60446),
  lightbulbSparkle: c("lightbulb-sparkle", 60447),
  robot: c("robot", 60448),
  sparkleFilled: c("sparkle-filled", 60449),
  diffSingle: c("diff-single", 60450),
  diffMultiple: c("diff-multiple", 60451),
  surroundWith: c("surround-with", 60452),
  share: c("share", 60453),
  gitStash: c("git-stash", 60454),
  gitStashApply: c("git-stash-apply", 60455),
  gitStashPop: c("git-stash-pop", 60456),
  vscode: c("vscode", 60457),
  vscodeInsiders: c("vscode-insiders", 60458),
  codeOss: c("code-oss", 60459),
  runCoverage: c("run-coverage", 60460),
  runAllCoverage: c("run-all-coverage", 60461),
  coverage: c("coverage", 60462),
  githubProject: c("github-project", 60463),
  mapVertical: c("map-vertical", 60464),
  foldVertical: c("fold-vertical", 60464),
  mapVerticalFilled: c("map-vertical-filled", 60465),
  foldVerticalFilled: c("fold-vertical-filled", 60465),
  goToSearch: c("go-to-search", 60466),
  percentage: c("percentage", 60467),
  sortPercentage: c("sort-percentage", 60467),
  attach: c("attach", 60468),
  goToEditingSession: c("go-to-editing-session", 60469),
  editSession: c("edit-session", 60470),
  codeReview: c("code-review", 60471),
  copilotWarning: c("copilot-warning", 60472),
  python: c("python", 60473),
  copilotLarge: c("copilot-large", 60474),
  copilotWarningLarge: c("copilot-warning-large", 60475),
  keyboardTab: c("keyboard-tab", 60476),
  copilotBlocked: c("copilot-blocked", 60477),
  copilotNotConnected: c("copilot-not-connected", 60478),
  flag: c("flag", 60479),
  lightbulbEmpty: c("lightbulb-empty", 60480),
  symbolMethodArrow: c("symbol-method-arrow", 60481),
  copilotUnavailable: c("copilot-unavailable", 60482),
  repoPinned: c("repo-pinned", 60483),
  keyboardTabAbove: c("keyboard-tab-above", 60484),
  keyboardTabBelow: c("keyboard-tab-below", 60485),
  gitPullRequestDone: c("git-pull-request-done", 60486),
  mcp: c("mcp", 60487),
  extensionsLarge: c("extensions-large", 60488),
  layoutPanelDock: c("layout-panel-dock", 60489),
  layoutSidebarLeftDock: c("layout-sidebar-left-dock", 60490),
  layoutSidebarRightDock: c("layout-sidebar-right-dock", 60491),
  copilotInProgress: c("copilot-in-progress", 60492),
  copilotError: c("copilot-error", 60493),
  copilotSuccess: c("copilot-success", 60494),
  chatSparkle: c("chat-sparkle", 60495),
  searchSparkle: c("search-sparkle", 60496),
  editSparkle: c("edit-sparkle", 60497),
  copilotSnooze: c("copilot-snooze", 60498),
  sendToRemoteAgent: c("send-to-remote-agent", 60499)
}, D1 = {
  dialogError: c("dialog-error", "error"),
  dialogWarning: c("dialog-warning", "warning"),
  dialogInfo: c("dialog-info", "info"),
  dialogClose: c("dialog-close", "close"),
  treeItemExpanded: c("tree-item-expanded", "chevron-down"),
  treeFilterOnTypeOn: c("tree-filter-on-type-on", "list-filter"),
  treeFilterOnTypeOff: c("tree-filter-on-type-off", "list-selection"),
  treeFilterClear: c("tree-filter-clear", "close"),
  treeItemLoading: c("tree-item-loading", "loading"),
  menuSelection: c("menu-selection", "check"),
  menuSubmenu: c("menu-submenu", "chevron-right"),
  menuBarMore: c("menubar-more", "more"),
  scrollbarButtonLeft: c("scrollbar-button-left", "triangle-left"),
  scrollbarButtonRight: c("scrollbar-button-right", "triangle-right"),
  scrollbarButtonUp: c("scrollbar-button-up", "triangle-up"),
  scrollbarButtonDown: c("scrollbar-button-down", "triangle-down"),
  toolBarMore: c("toolbar-more", "more"),
  quickInputBack: c("quick-input-back", "arrow-left"),
  dropDownButton: c("drop-down-button", 60084),
  symbolCustomColor: c("symbol-customcolor", 60252),
  exportIcon: c("export", 60332),
  workspaceUnspecified: c("workspace-unspecified", 60355),
  newLine: c("newline", 60394),
  thumbsDownFilled: c("thumbsdown-filled", 60435),
  thumbsUpFilled: c("thumbsup-filled", 60436),
  gitFetch: c("git-fetch", 60445),
  lightbulbSparkleAutofix: c("lightbulb-sparkle-autofix", 60447),
  debugBreakpointPending: c("debug-breakpoint-pending", 60377)
}, j = {
  ...U1,
  ...D1
};
var xs;
(function(e) {
  e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(xs || (xs = {}));
var As;
(function(e) {
  e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(As || (As = {}));
var Nr;
(function(e) {
  e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(Nr || (Nr = {}));
var Es;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(Es || (Es = {}));
var Rs;
(function(e) {
  e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(Rs || (Rs = {}));
class O1 {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new We(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(t) {
    this._onDidChange.fire({
      changedLanguages: t,
      changedColorMap: !1
    });
  }
  register(t, n) {
    return this._tokenizationSupports.set(t, n), this.handleChange([t]), qn(() => {
      this._tokenizationSupports.get(t) === n && (this._tokenizationSupports.delete(t), this.handleChange([t]));
    });
  }
  get(t) {
    return this._tokenizationSupports.get(t) || null;
  }
  registerFactory(t, n) {
    var i;
    (i = this._factories.get(t)) == null || i.dispose();
    const r = new B1(this, t, n);
    return this._factories.set(t, r), qn(() => {
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
    return this._colorMap && this._colorMap.length > Nr.DefaultBackground ? this._colorMap[Nr.DefaultBackground] : null;
  }
}
class B1 extends bn {
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
class V1 {
  constructor(t, n, r) {
    this.offset = t, this.type = n, this.language = r, this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
}
var Ts;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Ts || (Ts = {}));
var O;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(O || (O = {}));
var ks;
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
})(ks || (ks = {}));
var Ss;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Ss || (Ss = {}));
var Ms;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Ms || (Ms = {}));
var Is;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(Is || (Is = {}));
var Ps;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Ps || (Ps = {}));
var Fs;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(Fs || (Fs = {}));
var Us;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(Us || (Us = {}));
var Ds;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Ds || (Ds = {}));
var Os;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(Os || (Os = {}));
var Bs;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Bs || (Bs = {}));
var Vs;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Vs || (Vs = {}));
var H;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(H || (H = {}));
H.Array + "", X(815, "array"), H.Boolean + "", X(816, "boolean"), H.Class + "", X(817, "class"), H.Constant + "", X(818, "constant"), H.Constructor + "", X(819, "constructor"), H.Enum + "", X(820, "enumeration"), H.EnumMember + "", X(821, "enumeration member"), H.Event + "", X(822, "event"), H.Field + "", X(823, "field"), H.File + "", X(824, "file"), H.Function + "", X(825, "function"), H.Interface + "", X(826, "interface"), H.Key + "", X(827, "key"), H.Method + "", X(828, "method"), H.Module + "", X(829, "module"), H.Namespace + "", X(830, "namespace"), H.Null + "", X(831, "null"), H.Number + "", X(832, "number"), H.Object + "", X(833, "object"), H.Operator + "", X(834, "operator"), H.Package + "", X(835, "package"), H.Property + "", X(836, "property"), H.String + "", X(837, "string"), H.Struct + "", X(838, "struct"), H.TypeParameter + "", X(839, "type parameter"), H.Variable + "", X(840, "variable");
var $s;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})($s || ($s = {}));
var qs;
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
})(qs || (qs = {}));
var Ie;
let om = (Ie = class {
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
var Hs;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(Hs || (Hs = {}));
var Ws;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Ws || (Ws = {}));
var js;
(function(e) {
  function t(n) {
    return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(js || (js = {}));
var Gs;
(function(e) {
  e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(Gs || (Gs = {}));
var zs;
(function(e) {
  e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(zs || (zs = {}));
var Xs;
(function(e) {
  e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(Xs || (Xs = {}));
var Js;
(function(e) {
  e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(Js || (Js = {}));
var Ys;
(function(e) {
  e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(Ys || (Ys = {}));
var Qs;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(Qs || (Qs = {}));
new O1();
var Zs;
(function(e) {
  e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(Zs || (Zs = {}));
var Ks;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(Ks || (Ks = {}));
var Cs;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Cs || (Cs = {}));
var ea;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(ea || (ea = {}));
var ta;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(ta || (ta = {}));
var na;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(na || (na = {}));
var ra;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(ra || (ra = {}));
var ia;
(function(e) {
  e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(ia || (ia = {}));
var sa;
(function(e) {
  e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})(sa || (sa = {}));
var aa;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(aa || (aa = {}));
var oa;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(oa || (oa = {}));
var la;
(function(e) {
  e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(la || (la = {}));
var ua;
(function(e) {
  e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowOverflow = 4] = "allowOverflow", e[e.allowVariableLineHeights = 5] = "allowVariableLineHeights", e[e.allowVariableFonts = 6] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 7] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 8] = "ariaLabel", e[e.ariaRequired = 9] = "ariaRequired", e[e.autoClosingBrackets = 10] = "autoClosingBrackets", e[e.autoClosingComments = 11] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 12] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 13] = "autoClosingDelete", e[e.autoClosingOvertype = 14] = "autoClosingOvertype", e[e.autoClosingQuotes = 15] = "autoClosingQuotes", e[e.autoIndent = 16] = "autoIndent", e[e.autoIndentOnPaste = 17] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 18] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 19] = "automaticLayout", e[e.autoSurround = 20] = "autoSurround", e[e.bracketPairColorization = 21] = "bracketPairColorization", e[e.guides = 22] = "guides", e[e.codeLens = 23] = "codeLens", e[e.codeLensFontFamily = 24] = "codeLensFontFamily", e[e.codeLensFontSize = 25] = "codeLensFontSize", e[e.colorDecorators = 26] = "colorDecorators", e[e.colorDecoratorsLimit = 27] = "colorDecoratorsLimit", e[e.columnSelection = 28] = "columnSelection", e[e.comments = 29] = "comments", e[e.contextmenu = 30] = "contextmenu", e[e.copyWithSyntaxHighlighting = 31] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 32] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 33] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 34] = "cursorStyle", e[e.cursorSurroundingLines = 35] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 36] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 37] = "cursorWidth", e[e.cursorHeight = 38] = "cursorHeight", e[e.disableLayerHinting = 39] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 40] = "disableMonospaceOptimizations", e[e.domReadOnly = 41] = "domReadOnly", e[e.dragAndDrop = 42] = "dragAndDrop", e[e.dropIntoEditor = 43] = "dropIntoEditor", e[e.editContext = 44] = "editContext", e[e.emptySelectionClipboard = 45] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 46] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 47] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 48] = "extraEditorClassName", e[e.fastScrollSensitivity = 49] = "fastScrollSensitivity", e[e.find = 50] = "find", e[e.fixedOverflowWidgets = 51] = "fixedOverflowWidgets", e[e.folding = 52] = "folding", e[e.foldingStrategy = 53] = "foldingStrategy", e[e.foldingHighlight = 54] = "foldingHighlight", e[e.foldingImportsByDefault = 55] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 56] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 57] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 58] = "fontFamily", e[e.fontInfo = 59] = "fontInfo", e[e.fontLigatures = 60] = "fontLigatures", e[e.fontSize = 61] = "fontSize", e[e.fontWeight = 62] = "fontWeight", e[e.fontVariations = 63] = "fontVariations", e[e.formatOnPaste = 64] = "formatOnPaste", e[e.formatOnType = 65] = "formatOnType", e[e.glyphMargin = 66] = "glyphMargin", e[e.gotoLocation = 67] = "gotoLocation", e[e.hideCursorInOverviewRuler = 68] = "hideCursorInOverviewRuler", e[e.hover = 69] = "hover", e[e.inDiffEditor = 70] = "inDiffEditor", e[e.inlineSuggest = 71] = "inlineSuggest", e[e.letterSpacing = 72] = "letterSpacing", e[e.lightbulb = 73] = "lightbulb", e[e.lineDecorationsWidth = 74] = "lineDecorationsWidth", e[e.lineHeight = 75] = "lineHeight", e[e.lineNumbers = 76] = "lineNumbers", e[e.lineNumbersMinChars = 77] = "lineNumbersMinChars", e[e.linkedEditing = 78] = "linkedEditing", e[e.links = 79] = "links", e[e.matchBrackets = 80] = "matchBrackets", e[e.minimap = 81] = "minimap", e[e.mouseStyle = 82] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 83] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 84] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 85] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 86] = "multiCursorModifier", e[e.multiCursorPaste = 87] = "multiCursorPaste", e[e.multiCursorLimit = 88] = "multiCursorLimit", e[e.occurrencesHighlight = 89] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 90] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 91] = "overtypeCursorStyle", e[e.overtypeOnPaste = 92] = "overtypeOnPaste", e[e.overviewRulerBorder = 93] = "overviewRulerBorder", e[e.overviewRulerLanes = 94] = "overviewRulerLanes", e[e.padding = 95] = "padding", e[e.pasteAs = 96] = "pasteAs", e[e.parameterHints = 97] = "parameterHints", e[e.peekWidgetDefaultFocus = 98] = "peekWidgetDefaultFocus", e[e.placeholder = 99] = "placeholder", e[e.definitionLinkOpensInPeek = 100] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 101] = "quickSuggestions", e[e.quickSuggestionsDelay = 102] = "quickSuggestionsDelay", e[e.readOnly = 103] = "readOnly", e[e.readOnlyMessage = 104] = "readOnlyMessage", e[e.renameOnType = 105] = "renameOnType", e[e.renderRichScreenReaderContent = 106] = "renderRichScreenReaderContent", e[e.renderControlCharacters = 107] = "renderControlCharacters", e[e.renderFinalNewline = 108] = "renderFinalNewline", e[e.renderLineHighlight = 109] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 110] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 111] = "renderValidationDecorations", e[e.renderWhitespace = 112] = "renderWhitespace", e[e.revealHorizontalRightPadding = 113] = "revealHorizontalRightPadding", e[e.roundedSelection = 114] = "roundedSelection", e[e.rulers = 115] = "rulers", e[e.scrollbar = 116] = "scrollbar", e[e.scrollBeyondLastColumn = 117] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 118] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 119] = "scrollPredominantAxis", e[e.selectionClipboard = 120] = "selectionClipboard", e[e.selectionHighlight = 121] = "selectionHighlight", e[e.selectionHighlightMaxLength = 122] = "selectionHighlightMaxLength", e[e.selectionHighlightMultiline = 123] = "selectionHighlightMultiline", e[e.selectOnLineNumbers = 124] = "selectOnLineNumbers", e[e.showFoldingControls = 125] = "showFoldingControls", e[e.showUnused = 126] = "showUnused", e[e.snippetSuggestions = 127] = "snippetSuggestions", e[e.smartSelect = 128] = "smartSelect", e[e.smoothScrolling = 129] = "smoothScrolling", e[e.stickyScroll = 130] = "stickyScroll", e[e.stickyTabStops = 131] = "stickyTabStops", e[e.stopRenderingLineAfter = 132] = "stopRenderingLineAfter", e[e.suggest = 133] = "suggest", e[e.suggestFontSize = 134] = "suggestFontSize", e[e.suggestLineHeight = 135] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 136] = "suggestOnTriggerCharacters", e[e.suggestSelection = 137] = "suggestSelection", e[e.tabCompletion = 138] = "tabCompletion", e[e.tabIndex = 139] = "tabIndex", e[e.trimWhitespaceOnDelete = 140] = "trimWhitespaceOnDelete", e[e.unicodeHighlighting = 141] = "unicodeHighlighting", e[e.unusualLineTerminators = 142] = "unusualLineTerminators", e[e.useShadowDOM = 143] = "useShadowDOM", e[e.useTabStops = 144] = "useTabStops", e[e.wordBreak = 145] = "wordBreak", e[e.wordSegmenterLocales = 146] = "wordSegmenterLocales", e[e.wordSeparators = 147] = "wordSeparators", e[e.wordWrap = 148] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 149] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 150] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 151] = "wordWrapColumn", e[e.wordWrapOverride1 = 152] = "wordWrapOverride1", e[e.wordWrapOverride2 = 153] = "wordWrapOverride2", e[e.wrappingIndent = 154] = "wrappingIndent", e[e.wrappingStrategy = 155] = "wrappingStrategy", e[e.showDeprecated = 156] = "showDeprecated", e[e.inertialScroll = 157] = "inertialScroll", e[e.inlayHints = 158] = "inlayHints", e[e.wrapOnEscapedLineFeeds = 159] = "wrapOnEscapedLineFeeds", e[e.effectiveCursorStyle = 160] = "effectiveCursorStyle", e[e.editorClassName = 161] = "editorClassName", e[e.pixelRatio = 162] = "pixelRatio", e[e.tabFocusMode = 163] = "tabFocusMode", e[e.layoutInfo = 164] = "layoutInfo", e[e.wrappingInfo = 165] = "wrappingInfo", e[e.defaultColorDecorators = 166] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 167] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 168] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 169] = "effectiveEditContext", e[e.scrollOnMiddleClick = 170] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 171] = "effectiveAllowVariableFonts";
})(ua || (ua = {}));
var ca;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(ca || (ca = {}));
var fa;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(fa || (fa = {}));
var ha;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(ha || (ha = {}));
var ma;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(ma || (ma = {}));
var ga;
(function(e) {
  e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(ga || (ga = {}));
var pa;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(pa || (pa = {}));
var da;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(da || (da = {}));
var ba;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(ba || (ba = {}));
var _a;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(_a || (_a = {}));
var hi;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(hi || (hi = {}));
var mi;
(function(e) {
  e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(mi || (mi = {}));
var gi;
(function(e) {
  e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})(gi || (gi = {}));
var wa;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(wa || (wa = {}));
var va;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(va || (va = {}));
var ya;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(ya || (ya = {}));
var La;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(La || (La = {}));
var Na;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Na || (Na = {}));
var xa;
(function(e) {
  e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(xa || (xa = {}));
var Aa;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(Aa || (Aa = {}));
var Ea;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(Ea || (Ea = {}));
var Ra;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(Ra || (Ra = {}));
var Ta;
(function(e) {
  e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(Ta || (Ta = {}));
var ka;
(function(e) {
  e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(ka || (ka = {}));
var Sa;
(function(e) {
  e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(Sa || (Sa = {}));
var Ma;
(function(e) {
  e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(Ma || (Ma = {}));
var pi;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(pi || (pi = {}));
var Ia;
(function(e) {
  e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(Ia || (Ia = {}));
var Pa;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Pa || (Pa = {}));
var Fa;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(Fa || (Fa = {}));
var Ua;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Ua || (Ua = {}));
var Da;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Da || (Da = {}));
var Oa;
(function(e) {
  e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(Oa || (Oa = {}));
var Ba;
(function(e) {
  e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(Ba || (Ba = {}));
var Va;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(Va || (Va = {}));
var $a;
(function(e) {
  e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})($a || ($a = {}));
const ln = class ln {
  static chord(t, n) {
    return f1(t, n);
  }
};
ln.CtrlCmd = tn.CtrlCmd, ln.Shift = tn.Shift, ln.Alt = tn.Alt, ln.WinCtrl = tn.WinCtrl;
let di = ln;
function $1() {
  return {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Mc,
    Emitter: We,
    KeyCode: hi,
    KeyMod: di,
    Position: ee,
    Range: G,
    Selection: Ve,
    SelectionDirection: pi,
    MarkerSeverity: mi,
    MarkerTag: gi,
    Uri: Oe,
    Token: V1
  };
}
var wn;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(wn || (wn = {}));
new rc(10);
var qa;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(qa || (qa = {}));
var Ha;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(Ha || (Ha = {}));
var Wa;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(Wa || (Wa = {}));
var ja;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(ja || (ja = {}));
var Ga;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Ga || (Ga = {}));
var za;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(za || (za = {}));
var Xa;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Xa || (Xa = {}));
var Ja;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Ja || (Ja = {}));
var Ya;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Ya || (Ya = {}));
var Qa;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(Qa || (Qa = {}));
var Za;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(Za || (Za = {}));
var Ka;
(function(e) {
  e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(Ka || (Ka = {}));
function q1(e) {
  if (!e || e.length === 0)
    return !1;
  for (let t = 0, n = e.length; t < n; t++) {
    const r = e.charCodeAt(t);
    if (r === T.LineFeed)
      return !0;
    if (r === T.Backslash) {
      if (t++, t >= n)
        break;
      const i = e.charCodeAt(t);
      if (i === T.n || i === T.r || i === T.W)
        return !0;
    }
  }
  return !1;
}
function H1(e, t, n, r, i) {
  if (r === 0)
    return !0;
  const s = t.charCodeAt(r - 1);
  if (e.get(s) !== wn.Regular || s === T.CarriageReturn || s === T.LineFeed)
    return !0;
  if (i > 0) {
    const a = t.charCodeAt(r);
    if (e.get(a) !== wn.Regular)
      return !0;
  }
  return !1;
}
function W1(e, t, n, r, i) {
  if (r + i === n)
    return !0;
  const s = t.charCodeAt(r + i);
  if (e.get(s) !== wn.Regular || s === T.CarriageReturn || s === T.LineFeed)
    return !0;
  if (i > 0) {
    const a = t.charCodeAt(r + i - 1);
    if (e.get(a) !== wn.Regular)
      return !0;
  }
  return !1;
}
function j1(e, t, n, r, i) {
  return H1(e, t, n, r, i) && W1(e, t, n, r, i);
}
class G1 {
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
          jc(t, n, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = i, this._prevMatchLength = s, !this._wordSeparators || j1(this._wordSeparators, t, n, i, s))
        return r;
    } while (r);
    return null;
  }
}
const z1 = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function X1(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of z1)
    e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
const lu = X1();
function uu(e) {
  let t = lu;
  if (e && e instanceof RegExp)
    if (e.global)
      t = e;
    else {
      let n = "g";
      e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
    }
  return t.lastIndex = 0, t;
}
const cu = new cc();
cu.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function Qi(e, t, n, r, i) {
  if (t = uu(t), i || (i = gr.first(cu)), n.length > i.maxLen) {
    let u = e - i.maxLen / 2;
    return u < 0 ? u = 0 : r += u, n = n.substring(u, e + i.maxLen / 2), Qi(e, t, n, r, i);
  }
  const s = Date.now(), a = e - 1 - r;
  let l = -1, o = null;
  for (let u = 1; !(Date.now() - s >= i.timeBudget); u++) {
    const h = a - i.windowSize * u;
    t.lastIndex = Math.max(0, h);
    const f = J1(t, n, a, l);
    if (!f && o || (o = f, h <= 0))
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
function J1(e, t, n, r) {
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
class Y1 {
  static computeUnicodeHighlights(t, n, r) {
    const i = r ? r.startLineNumber : 1, s = r ? r.endLineNumber : t.getLineCount(), a = new Ca(n), l = a.getCandidateCodePoints();
    let o;
    l === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${Q1(Array.from(l))}`, "g");
    const u = new G1(null, o), h = [];
    let f = !1, m, p = 0, g = 0, d = 0;
    e: for (let _ = i, y = s; _ <= y; _++) {
      const x = t.getLineContent(_), b = x.length;
      u.reset(0);
      do
        if (m = u.next(x), m) {
          let A = m.index, N = m.index + m[0].length;
          if (A > 0) {
            const F = x.charCodeAt(A - 1);
            ni(F) && A--;
          }
          if (N + 1 < b) {
            const F = x.charCodeAt(N - 1);
            ni(F) && N++;
          }
          const S = x.substring(A, N);
          let L = Qi(A + 1, lu, x, 0);
          L && L.endColumn <= A + 1 && (L = null);
          const R = a.shouldHighlightNonBasicASCII(S, L ? L.word : null);
          if (R !== ke.None) {
            if (R === ke.Ambiguous ? p++ : R === ke.Invisible ? g++ : R === ke.NonBasicASCII ? d++ : sc(), h.length >= 1e3) {
              f = !0;
              break e;
            }
            h.push(new G(_, A + 1, _, N + 1));
          }
        }
      while (m);
    }
    return {
      ranges: h,
      hasMore: f,
      ambiguousCharacterCount: p,
      invisibleCharacterCount: g,
      nonBasicAsciiCharacterCount: d
    };
  }
  static computeUnicodeHighlightReason(t, n) {
    const r = new Ca(n);
    switch (r.shouldHighlightNonBasicASCII(t, null)) {
      case ke.None:
        return null;
      case ke.Invisible:
        return { kind: Un.Invisible };
      case ke.Ambiguous: {
        const s = t.codePointAt(0), a = r.ambiguousCharacters.getPrimaryConfusable(s), l = Gn.getLocales().filter((o) => !Gn.getInstance(/* @__PURE__ */ new Set([...n.allowedLocales, o])).isAmbiguous(s));
        return { kind: Un.Ambiguous, confusableWith: String.fromCodePoint(a), notAmbiguousInLocales: l };
      }
      case ke.NonBasicASCII:
        return { kind: Un.NonBasicAscii };
    }
  }
}
function Q1(e, t) {
  return `[${Fc(e.map((r) => String.fromCodePoint(r)).join(""))}]`;
}
var Un;
(function(e) {
  e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(Un || (Un = {}));
class Ca {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = Gn.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII)
      return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters)
      for (const n of Fn.codePoints)
        eo(String.fromCodePoint(n)) || t.add(n);
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
        const l = a.codePointAt(0), o = zc(a);
        i = i || o, !o && !this.ambiguousCharacters.isAmbiguous(l) && !Fn.isInvisibleCharacter(l) && (s = !0);
      }
    return !i && s ? ke.None : this.options.invisibleCharacters && !eo(t) && Fn.isInvisibleCharacter(r) ? ke.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(r) ? ke.Ambiguous : ke.None;
  }
}
function eo(e) {
  return e === " " || e === `
` || e === "	";
}
var ke;
(function(e) {
  e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(ke || (ke = {}));
class hr {
  constructor(t, n, r) {
    this.changes = t, this.moves = n, this.hitTimeout = r;
  }
}
class Zi {
  constructor(t, n) {
    this.lineRangeMapping = t, this.changes = n;
  }
  flip() {
    return new Zi(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
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
const Ne = class Ne {
  static ofLength(t, n) {
    return new Ne(t, t + n);
  }
  static fromRange(t) {
    return new Ne(t.startLineNumber, t.endLineNumber);
  }
  static fromRangeInclusive(t) {
    return new Ne(t.startLineNumber, t.endLineNumber + 1);
  }
  static subtract(t, n) {
    return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [
      new Ne(t.startLineNumber, n.startLineNumber),
      new Ne(n.endLineNumberExclusive, t.endLineNumberExclusive)
    ] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new Ne(
      Math.max(n.endLineNumberExclusive, t.startLineNumber),
      t.endLineNumberExclusive
    )] : [new Ne(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
  }
  static joinMany(t) {
    if (t.length === 0)
      return [];
    let n = new rt(t[0].slice());
    for (let r = 1; r < t.length; r++)
      n = n.getUnion(new rt(t[r].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0)
      throw new he("lineRanges cannot be empty");
    let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
    for (let i = 1; i < t.length; i++)
      n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
    return new Ne(n, r);
  }
  static deserialize(t) {
    return new Ne(t[0], t[1]);
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
    return new Ne(this.startLineNumber + t, this.endLineNumberExclusive + t);
  }
  deltaLength(t) {
    return new Ne(this.startLineNumber, this.endLineNumberExclusive + t);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(t) {
    return new Ne(
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
      return new Ne(n, r);
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
    return new Ne(
      this.startLineNumber - t,
      this.endLineNumberExclusive + n
    );
  }
};
Ne.compareByStart = cn((t) => t.startLineNumber, In);
let te = Ne;
class rt {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0)
      return;
    const n = Zr(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = dn(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
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
    const n = pn(this._normalizedRanges, (r) => r.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = pn(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
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
    return s !== null && n.push(s), new rt(n);
  }
  subtractFrom(t) {
    const n = Zr(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), r = dn(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === r)
      return new rt([t]);
    const i = [];
    let s = t.startLineNumber;
    for (let a = n; a < r; a++) {
      const l = this._normalizedRanges[a];
      l.startLineNumber > s && i.push(new te(s, l.startLineNumber)), s = l.endLineNumberExclusive;
    }
    return s < t.endLineNumberExclusive && i.push(new te(s, t.endLineNumberExclusive)), new rt(i);
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
    return new rt(n);
  }
  getWithDelta(t) {
    return new rt(this._normalizedRanges.map((n) => n.delta(t)));
  }
}
const Ue = class Ue {
  static lengthDiffNonNegative(t, n) {
    return n.isLessThan(t) ? Ue.zero : t.lineCount === n.lineCount ? new Ue(0, n.columnCount - t.columnCount) : new Ue(n.lineCount - t.lineCount, n.columnCount);
  }
  static betweenPositions(t, n) {
    return t.lineNumber === n.lineNumber ? new Ue(0, n.column - t.column) : new Ue(n.lineNumber - t.lineNumber, n.column - 1);
  }
  static fromPosition(t) {
    return new Ue(t.lineNumber - 1, t.column - 1);
  }
  static ofRange(t) {
    return Ue.betweenPositions(t.getStartPosition(), t.getEndPosition());
  }
  static ofText(t) {
    let n = 0, r = 0;
    for (const i of t)
      i === `
` ? (n++, r = 0) : r++;
    return new Ue(n, r);
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
    return t.lineCount === 0 ? new Ue(this.lineCount, this.columnCount + t.columnCount) : new Ue(this.lineCount + t.lineCount, t.columnCount);
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
Ue.zero = new Ue(0, 0);
let Mt = Ue;
class Z1 {
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
    return new gt.deps.StringEdit(n);
  }
  getStringReplacement(t) {
    return new gt.deps.StringReplacement(this.getOffsetRange(t.range), t.text);
  }
  getTextReplacement(t) {
    return new gt.deps.TextReplacement(this.getRange(t.replaceRange), t.newText);
  }
  getTextEdit(t) {
    const n = t.replacements.map((r) => this.getTextReplacement(r));
    return new gt.deps.TextEdit(n);
  }
}
const ns = class ns {
  static get deps() {
    if (!this._deps)
      throw new Error("Dependencies not set. Call _setDependencies first.");
    return this._deps;
  }
};
ns._deps = void 0;
let gt = ns;
function K1(e) {
  gt._deps = e;
}
class fu extends Z1 {
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
    const n = dn(this.lineStartOffsetByLineIdx, (s) => s <= t), r = n + 1, i = t - this.lineStartOffsetByLineIdx[n] + 1;
    return new ee(r, i);
  }
  getTextLength(t) {
    return gt.deps.TextLength.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new gt.deps.TextLength(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}
class hu {
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
    return this._transformer || (this._transformer = new fu(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new G(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return Zl(t);
  }
  getLinesOfRange(t) {
    return t.mapToLineArray((n) => this.getLineAt(n));
  }
  equals(t) {
    return this === t ? !0 : this.getValue() === t.getValue();
  }
}
class C1 extends hu {
  constructor(t, n) {
    ac(n >= 1), super(), this._getLineContent = t, this._lineCount = n;
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
    return new Mt(this._lineCount - 1, t.length);
  }
}
class tr extends C1 {
  constructor(t) {
    super((n) => t[n - 1], t.length);
  }
}
class zn extends hu {
  constructor(t) {
    super(), this.value = t, this._t = new fu(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}
let Ki = class At {
  static fromStringEdit(t, n) {
    const r = t.replacements.map((i) => xe.fromStringReplacement(i, n));
    return new At(r);
  }
  static replace(t, n) {
    return new At([new xe(t, n)]);
  }
  static delete(t) {
    return new At([new xe(t, "")]);
  }
  static insert(t, n) {
    return new At([new xe(G.fromPositions(t, t), n)]);
  }
  static fromParallelReplacementsUnsorted(t) {
    const n = t.slice().sort(cn((r) => r.range, G.compareRangesUsingStarts));
    return new At(n);
  }
  constructor(t) {
    this.replacements = t, $n(() => Gi(t, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
  }
  normalize() {
    const t = [];
    for (const n of this.replacements)
      if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
        const r = t[t.length - 1];
        t[t.length - 1] = new xe(r.range.plusRange(n.range), r.text + n.text);
      } else n.isEmpty || t.push(n);
    return new At(t);
  }
  mapPosition(t) {
    let n = 0, r = 0, i = 0;
    for (const s of this.replacements) {
      const a = s.range.getStartPosition();
      if (t.isBeforeOrEqual(a))
        break;
      const l = s.range.getEndPosition(), o = Mt.ofText(s.text);
      if (t.isBefore(l)) {
        const u = new ee(
          a.lineNumber + n,
          a.column + (a.lineNumber + n === r ? i : 0)
        ), h = o.addToPosition(u);
        return nr(u, h);
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
    return nr(i, s);
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
      const a = s.range, l = a.getStartPosition(), o = a.getEndPosition(), u = nr(r, l);
      u.isEmpty() || (n += t.getValueOfRange(u)), n += s.text, r = o;
    }
    const i = nr(r, t.endPositionExclusive);
    return i.isEmpty() || (n += t.getValueOfRange(i)), n;
  }
  applyToString(t) {
    const n = new zn(t);
    return this.apply(n);
  }
  inverse(t) {
    const n = this.getNewRanges();
    return new At(this.replacements.map((r, i) => new xe(n[i], t.getValueOfRange(r.range))));
  }
  getNewRanges() {
    const t = [];
    let n = 0, r = 0, i = 0;
    for (const s of this.replacements) {
      const a = Mt.ofText(s.text), l = ee.lift({
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
    return new xe(G.fromPositions(n, r), i);
  }
  equals(t) {
    return Gl(this.replacements, t.replacements, (n, r) => n.equals(r));
  }
  toString(t) {
    return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new zn(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
      const i = t.getValueOfRange(n.range), s = G.fromPositions(new ee(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition());
      let a = t.getValueOfRange(s);
      a.length > 10 && (a = "..." + a.substring(a.length - 10));
      const l = G.fromPositions(n.range.getEndPosition(), new ee(n.range.endLineNumber + 1, 1));
      let o = t.getValueOfRange(l);
      o.length > 10 && (o = o.substring(0, 10) + "...");
      let u = i;
      if (u.length > 10) {
        const f = Math.floor(5);
        u = u.substring(0, f) + "..." + u.substring(u.length - f);
      }
      let h = n.text;
      if (h.length > 10) {
        const f = Math.floor(5);
        h = h.substring(0, f) + "..." + h.substring(h.length - f);
      }
      return u.length === 0 ? `${a}❰${h}❱${o}` : `${a}❰${u}↦${h}❱${o}`;
    }).join(`
`);
  }
};
class xe {
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
    return new xe(G.fromPositions(r, i), s);
  }
  static fromStringReplacement(t, n) {
    return new xe(
      n.getTransformer().getRange(t.replaceRange),
      t.newText
    );
  }
  static delete(t) {
    return new xe(t, "");
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
    return new Ki([this]);
  }
  equals(t) {
    return xe.equals(this, t);
  }
  extendToCoverRange(t, n) {
    if (this.range.containsRange(t))
      return this;
    const r = this.range.plusRange(t), i = n.getValueOfRange(G.fromPositions(r.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(G.fromPositions(this.range.getEndPosition(), r.getEndPosition())), a = i + this.text + s;
    return new xe(r, a);
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
`), i = br(n, r), s = Mt.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), a = r.substring(i), l = G.fromPositions(s, this.range.getEndPosition());
    return new xe(l, a);
  }
  removeCommonSuffix(t) {
    const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = _r(n, r), s = Mt.ofText(n.substring(0, n.length - i)).addToPosition(this.range.getStartPosition()), a = r.substring(0, r.length - i), l = G.fromPositions(this.range.getStartPosition(), s);
    return new xe(l, a);
  }
  isEffectiveDeletion(t) {
    let n = this.text.replaceAll(`\r
`, `
`), r = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const i = br(n, r);
    n = n.substring(i), r = r.substring(i);
    const s = _r(n, r);
    return n = n.substring(0, n.length - s), r = r.substring(0, r.length - s), n === "";
  }
  toString() {
    const t = this.range.getStartPosition(), n = this.range.getEndPosition();
    return `(${t.lineNumber},${t.column} -> ${n.lineNumber},${n.column}): "${this.text}"`;
  }
}
function nr(e, t) {
  if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER)
    return G.fromPositions(t, t);
  if (!e.isBeforeOrEqual(t))
    throw new he("start must be before end");
  return new G(e.lineNumber, e.column, t.lineNumber, t.column);
}
class Ge {
  static inverse(t, n, r) {
    const i = [];
    let s = 1, a = 1;
    for (const o of t) {
      const u = new Ge(new te(s, o.original.startLineNumber), new te(a, o.modified.startLineNumber));
      u.modified.isEmpty || i.push(u), s = o.original.endLineNumberExclusive, a = o.modified.endLineNumberExclusive;
    }
    const l = new Ge(new te(s, n + 1), new te(a, r + 1));
    return l.modified.isEmpty || i.push(l), i;
  }
  static clip(t, n, r) {
    const i = [];
    for (const s of t) {
      const a = s.original.intersect(n), l = s.modified.intersect(r);
      a && !a.isEmpty && l && !l.isEmpty && i.push(new Ge(a, l));
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
    return new Ge(this.modified, this.original);
  }
  join(t) {
    return new Ge(this.original.join(t.original), this.modified.join(t.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  toRangeMapping() {
    const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
    if (t && n)
      return new Pe(t, n);
    if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
        throw new he("not a valid diff");
      return new Pe(new G(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new G(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else
      return new Pe(new G(
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
    if (to(this.original.endLineNumberExclusive, t) && to(this.modified.endLineNumberExclusive, n))
      return new Pe(new G(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new G(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty)
      return new Pe(G.fromPositions(new ee(this.original.startLineNumber, 1), Yt(new ee(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), G.fromPositions(new ee(this.modified.startLineNumber, 1), Yt(new ee(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
      return new Pe(G.fromPositions(Yt(new ee(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), Yt(new ee(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), G.fromPositions(Yt(new ee(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), Yt(new ee(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new he();
  }
}
function Yt(e, t) {
  if (e.lineNumber < 1)
    return new ee(1, 1);
  if (e.lineNumber > t.length)
    return new ee(t.length, t[t.length - 1].length + 1);
  const n = t[e.lineNumber - 1];
  return e.column > n.length + 1 ? new ee(e.lineNumber, n.length + 1) : e;
}
function to(e, t) {
  return e >= 1 && e <= t.length;
}
class ot extends Ge {
  static toTextEdit(t, n) {
    const r = [];
    for (const i of t)
      for (const s of i.innerChanges ?? []) {
        const a = s.toTextEdit(n);
        r.push(a);
      }
    return new Ki(r);
  }
  static fromRangeMappings(t) {
    const n = te.join(t.map((i) => te.fromRangeInclusive(i.originalRange))), r = te.join(t.map((i) => te.fromRangeInclusive(i.modifiedRange)));
    return new ot(n, r, t);
  }
  constructor(t, n, r) {
    super(t, n), this.innerChanges = r;
  }
  flip() {
    var t;
    return new ot(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new ot(this.original, this.modified, [this.toRangeMapping()]);
  }
}
class Pe {
  static fromEdit(t) {
    const n = t.getNewRanges();
    return t.replacements.map((i, s) => new Pe(i.range, n[s]));
  }
  static fromEditJoin(t) {
    const n = t.getNewRanges(), r = t.replacements.map((i, s) => new Pe(i.range, n[s]));
    return Pe.join(r);
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
    return new Pe(this.modifiedRange, this.originalRange);
  }
  toTextEdit(t) {
    const n = t.getValueOfRange(this.modifiedRange);
    return new xe(this.originalRange, n);
  }
  join(t) {
    return new Pe(
      this.originalRange.plusRange(t.originalRange),
      this.modifiedRange.plusRange(t.modifiedRange)
    );
  }
}
function no(e, t, n, r = !1) {
  const i = [];
  for (const s of Xu(e.map((a) => ef(a, t, n)), (a, l) => a.original.intersectsOrTouches(l.original) || a.modified.intersectsOrTouches(l.modified))) {
    const a = s[0], l = s[s.length - 1];
    i.push(new ot(
      a.original.join(l.original),
      a.modified.join(l.modified),
      s.map((o) => o.innerChanges[0])
    ));
  }
  return $n(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? !1 : Gi(i, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), i;
}
function ef(e, t, n) {
  let r = 0, i = 0;
  e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1);
  const s = new te(
    e.originalRange.startLineNumber + r,
    e.originalRange.endLineNumber + 1 + i
  ), a = new te(
    e.modifiedRange.startLineNumber + r,
    e.modifiedRange.endLineNumber + 1 + i
  );
  return new ot(s, a, [e]);
}
const tf = 3;
class nf {
  computeDiff(t, n, r) {
    var o;
    const s = new gu(t, n, {
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
      let f;
      u.modifiedEndLineNumber === 0 ? f = new te(u.modifiedStartLineNumber + 1, u.modifiedStartLineNumber + 1) : f = new te(u.modifiedStartLineNumber, u.modifiedEndLineNumber + 1);
      let m = new ot(h, f, (o = u.charChanges) == null ? void 0 : o.map((p) => new Pe(new G(
        p.originalStartLineNumber,
        p.originalStartColumn,
        p.originalEndLineNumber,
        p.originalEndColumn
      ), new G(
        p.modifiedStartLineNumber,
        p.modifiedStartColumn,
        p.modifiedEndLineNumber,
        p.modifiedEndColumn
      ))));
      l && (l.modified.endLineNumberExclusive === m.modified.startLineNumber || l.original.endLineNumberExclusive === m.original.startLineNumber) && (m = new ot(
        l.original.join(m.original),
        l.modified.join(m.modified),
        l.innerChanges && m.innerChanges ? l.innerChanges.concat(m.innerChanges) : void 0
      ), a.pop()), a.push(m), l = m;
    }
    return $n(() => Gi(a, (u, h) => h.original.startLineNumber - u.original.endLineNumberExclusive === h.modified.startLineNumber - u.modified.endLineNumberExclusive && u.original.endLineNumberExclusive < h.original.startLineNumber && u.modified.endLineNumberExclusive < h.modified.startLineNumber)), new hr(a, [], s.quitEarly);
  }
}
function mu(e, t, n, r) {
  return new kt(e, t, n).ComputeDiff(r);
}
let ro = class {
  constructor(t) {
    const n = [], r = [];
    for (let i = 0, s = t.length; i < s; i++)
      n[i] = bi(t[i], 1), r[i] = _i(t[i], 1);
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
      const u = this.lines[o], h = t ? this._startColumns[o] : 1, f = t ? this._endColumns[o] : u.length + 1;
      for (let m = h; m < f; m++)
        i[l] = u.charCodeAt(m - 1), s[l] = o + 1, a[l] = m, l++;
      !t && o < r && (i[l] = T.LineFeed, s[l] = o + 1, a[l] = u.length + 1, l++);
    }
    return new rf(i, s, a);
  }
};
class rf {
  constructor(t, n, r) {
    this._charCodes = t, this._lineNumbers = n, this._columns = r;
  }
  toString() {
    return "[" + this._charCodes.map(
      (t, n) => (t === T.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[n]},${this._columns[n]})`
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
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === T.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === T.LineFeed ? 1 : this._columns[t] + 1);
  }
}
class hn {
  constructor(t, n, r, i, s, a, l, o) {
    this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = l, this.modifiedEndColumn = o;
  }
  static createFromDiffChange(t, n, r) {
    const i = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), l = n.getEndColumn(t.originalStart + t.originalLength - 1), o = r.getStartLineNumber(t.modifiedStart), u = r.getStartColumn(t.modifiedStart), h = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), f = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
    return new hn(
      i,
      s,
      a,
      l,
      o,
      u,
      h,
      f
    );
  }
}
function sf(e) {
  if (e.length <= 1)
    return e;
  const t = [e[0]];
  let n = t[0];
  for (let r = 1, i = e.length; r < i; r++) {
    const s = e[r], a = s.originalStart - (n.originalStart + n.originalLength), l = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(a, l) < tf ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
  }
  return t;
}
class Dn {
  constructor(t, n, r, i, s) {
    this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = s;
  }
  static createFromDiffResult(t, n, r, i, s, a, l) {
    let o, u, h, f, m;
    if (n.originalLength === 0 ? (o = r.getStartLineNumber(n.originalStart) - 1, u = 0) : (o = r.getStartLineNumber(n.originalStart), u = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (h = i.getStartLineNumber(n.modifiedStart) - 1, f = 0) : (h = i.getStartLineNumber(n.modifiedStart), f = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
      const p = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), g = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (p.getElements().length > 0 && g.getElements().length > 0) {
        let d = mu(p, g, s, !0).changes;
        l && (d = sf(d)), m = [];
        for (let _ = 0, y = d.length; _ < y; _++)
          m.push(hn.createFromDiffChange(d[_], p, g));
      }
    }
    return new Dn(
      o,
      u,
      h,
      f,
      m
    );
  }
}
class gu {
  constructor(t, n, r) {
    this.shouldComputeCharChanges = r.shouldComputeCharChanges, this.shouldPostProcessCharChanges = r.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = r.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = r.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = n, this.original = new ro(t), this.modified = new ro(n), this.continueLineDiff = io(r.maxComputationTime), this.continueCharDiff = io(r.maxComputationTime === 0 ? 0 : Math.min(r.maxComputationTime, 5e3));
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
    const t = mu(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), n = t.changes, r = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const l = [];
      for (let o = 0, u = n.length; o < u; o++)
        l.push(Dn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return {
        quitEarly: r,
        changes: l
      };
    }
    const i = [];
    let s = 0, a = 0;
    for (let l = -1, o = n.length; l < o; l++) {
      const u = l + 1 < o ? n[l + 1] : null, h = u ? u.originalStart : this.originalLines.length, f = u ? u.modifiedStart : this.modifiedLines.length;
      for (; s < h && a < f; ) {
        const m = this.originalLines[s], p = this.modifiedLines[a];
        if (m !== p) {
          {
            let g = bi(m, 1), d = bi(p, 1);
            for (; g > 1 && d > 1; ) {
              const _ = m.charCodeAt(g - 2), y = p.charCodeAt(d - 2);
              if (_ !== y)
                break;
              g--, d--;
            }
            (g > 1 || d > 1) && this._pushTrimWhitespaceCharChange(i, s + 1, 1, g, a + 1, 1, d);
          }
          {
            let g = _i(m, 1), d = _i(p, 1);
            const _ = m.length + 1, y = p.length + 1;
            for (; g < _ && d < y; ) {
              const x = m.charCodeAt(g - 1), b = m.charCodeAt(d - 1);
              if (x !== b)
                break;
              g++, d++;
            }
            (g < _ || d < y) && this._pushTrimWhitespaceCharChange(i, s + 1, g, _, a + 1, d, y);
          }
        }
        s++, a++;
      }
      u && (i.push(Dn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), s += u.originalLength, a += u.modifiedLength);
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
    this.shouldComputeCharChanges && (o = [new hn(
      n,
      r,
      n,
      i,
      s,
      a,
      s,
      l
    )]), t.push(new Dn(
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
    return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === n && u.modifiedEndLineNumber === s ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new hn(
      n,
      r,
      n,
      i,
      s,
      a,
      s,
      l
    )), !0) : u.originalEndLineNumber + 1 === n && u.modifiedEndLineNumber + 1 === s ? (u.originalEndLineNumber = n, u.modifiedEndLineNumber = s, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new hn(
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
function bi(e, t) {
  const n = Dc(e);
  return n === -1 ? t : n + 1;
}
function _i(e, t) {
  const n = Oc(e);
  return n === -1 ? t : n + 2;
}
function io(e) {
  if (e === 0)
    return () => !0;
  const t = Date.now();
  return () => Date.now() - t < e;
}
class bt {
  static trivial(t, n) {
    return new bt([new ue(W.ofLength(t.length), W.ofLength(n.length))], !1);
  }
  static trivialTimedOut(t, n) {
    return new bt([new ue(W.ofLength(t.length), W.ofLength(n.length))], !0);
  }
  constructor(t, n) {
    this.diffs = t, this.hitTimeout = n;
  }
}
class ue {
  static invert(t, n) {
    const r = [];
    return Ju(t, (i, s) => {
      r.push(ue.fromOffsetPairs(i ? i.getEndExclusives() : pt.zero, s ? s.getStarts() : new pt(
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
    return new pt(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new pt(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}
const Ot = class Ot {
  constructor(t, n) {
    this.offset1 = t, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(t) {
    return t === 0 ? this : new Ot(this.offset1 + t, this.offset2 + t);
  }
  equals(t) {
    return this.offset1 === t.offset1 && this.offset2 === t.offset2;
  }
};
Ot.zero = new Ot(0, 0), Ot.max = new Ot(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
let pt = Ot;
const Br = class Br {
  isValid() {
    return !0;
  }
};
Br.instance = new Br();
let Xn = Br;
class af {
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
class jr {
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
function wi(e) {
  return e === T.Space || e === T.Tab;
}
const Bn = class Bn {
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
        const u = a[o], h = Bn.getKey(u);
        this.histogram[h] = (this.histogram[h] || 0) + 1;
      }
      i++;
      const l = Bn.getKey(`
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
Bn.chrKeys = /* @__PURE__ */ new Map();
let xr = Bn;
class of {
  compute(t, n, r = Xn.instance, i) {
    if (t.length === 0 || n.length === 0)
      return bt.trivial(t, n);
    const s = new jr(t.length, n.length), a = new jr(t.length, n.length), l = new jr(t.length, n.length);
    for (let g = 0; g < t.length; g++)
      for (let d = 0; d < n.length; d++) {
        if (!r.isValid())
          return bt.trivialTimedOut(t, n);
        const _ = g === 0 ? 0 : s.get(g - 1, d), y = d === 0 ? 0 : s.get(g, d - 1);
        let x;
        t.getElement(g) === n.getElement(d) ? (g === 0 || d === 0 ? x = 0 : x = s.get(g - 1, d - 1), g > 0 && d > 0 && a.get(g - 1, d - 1) === 3 && (x += l.get(g - 1, d - 1)), x += i ? i(g, d) : 1) : x = -1;
        const b = Math.max(_, y, x);
        if (b === x) {
          const A = g > 0 && d > 0 ? l.get(g - 1, d - 1) : 0;
          l.set(g, d, A + 1), a.set(g, d, 3);
        } else b === _ ? (l.set(g, d, 0), a.set(g, d, 1)) : b === y && (l.set(g, d, 0), a.set(g, d, 2));
        s.set(g, d, b);
      }
    const o = [];
    let u = t.length, h = n.length;
    function f(g, d) {
      (g + 1 !== u || d + 1 !== h) && o.push(new ue(new W(g + 1, u), new W(d + 1, h))), u = g, h = d;
    }
    let m = t.length - 1, p = n.length - 1;
    for (; m >= 0 && p >= 0; )
      a.get(m, p) === 3 ? (f(m, p), m--, p--) : a.get(m, p) === 1 ? m-- : p--;
    return f(-1, -1), o.reverse(), new bt(o, !1);
  }
}
class pu {
  compute(t, n, r = Xn.instance) {
    if (t.length === 0 || n.length === 0)
      return bt.trivial(t, n);
    const i = t, s = n;
    function a(d, _) {
      for (; d < i.length && _ < s.length && i.getElement(d) === s.getElement(_); )
        d++, _++;
      return d;
    }
    let l = 0;
    const o = new lf();
    o.set(0, a(0, 0));
    const u = new uf();
    u.set(0, o.get(0) === 0 ? null : new so(null, 0, 0, o.get(0)));
    let h = 0;
    e: for (; ; ) {
      if (l++, !r.isValid())
        return bt.trivialTimedOut(i, s);
      const d = -Math.min(l, s.length + l % 2), _ = Math.min(l, i.length + l % 2);
      for (h = d; h <= _; h += 2) {
        const y = h === _ ? -1 : o.get(h + 1), x = h === d ? -1 : o.get(h - 1) + 1, b = Math.min(Math.max(y, x), i.length), A = b - h;
        if (b > i.length || A > s.length)
          continue;
        const N = a(b, A);
        o.set(h, N);
        const S = b === y ? u.get(h + 1) : u.get(h - 1);
        if (u.set(h, N !== b ? new so(S, b, A, N - b) : S), o.get(h) === i.length && o.get(h) - h === s.length)
          break e;
      }
    }
    let f = u.get(h);
    const m = [];
    let p = i.length, g = s.length;
    for (; ; ) {
      const d = f ? f.x + f.length : 0, _ = f ? f.y + f.length : 0;
      if ((d !== p || _ !== g) && m.push(new ue(new W(d, p), new W(_, g))), !f)
        break;
      p = f.x, g = f.y, f = f.prev;
    }
    return m.reverse(), new bt(m, !1);
  }
}
class so {
  constructor(t, n, r, i) {
    this.prev = t, this.x = n, this.y = r, this.length = i;
  }
}
class lf {
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
class uf {
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
class Ar {
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
    const n = lo(t > 0 ? this.elements[t - 1] : -1), r = lo(t < this.elements.length ? this.elements[t] : -1);
    if (n === le.LineBreakCR && r === le.LineBreakLF)
      return 0;
    if (n === le.LineBreakLF)
      return 150;
    let i = 0;
    return n !== r && (i += 10, n === le.WordLower && r === le.WordUpper && (i += 1)), i += oo(n), i += oo(r), i;
  }
  translateOffset(t, n = "right") {
    const r = dn(this.firstElementOffsetByLineIdx, (s) => s <= t), i = t - this.firstElementOffsetByLineIdx[r];
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
    if (t < 0 || t >= this.elements.length || !Qt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && Qt(this.elements[n - 1]); )
      n--;
    let r = t;
    for (; r < this.elements.length && Qt(this.elements[r]); )
      r++;
    return new W(n, r);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !Qt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && Qt(this.elements[n - 1]) && !ao(this.elements[n]); )
      n--;
    let r = t;
    for (; r < this.elements.length && Qt(this.elements[r]) && !ao(this.elements[r]); )
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
    const n = pn(this.firstElementOffsetByLineIdx, (i) => i <= t.start) ?? 0, r = zu(this.firstElementOffsetByLineIdx, (i) => t.endExclusive <= i) ?? this.elements.length;
    return new W(n, r);
  }
}
function Qt(e) {
  return e >= T.a && e <= T.z || e >= T.A && e <= T.Z || e >= T.Digit0 && e <= T.Digit9;
}
function ao(e) {
  return e >= T.A && e <= T.Z;
}
var le;
(function(e) {
  e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(le || (le = {}));
const cf = {
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
function oo(e) {
  return cf[e];
}
function lo(e) {
  return e === T.LineFeed ? le.LineBreakLF : e === T.CarriageReturn ? le.LineBreakCR : wi(e) ? le.Space : e >= T.a && e <= T.z ? le.WordLower : e >= T.A && e <= T.Z ? le.WordUpper : e >= T.Digit0 && e <= T.Digit9 ? le.WordNumber : e === -1 ? le.End : e === T.Comma || e === T.Semicolon ? le.Separator : le.Other;
}
function ff(e, t, n, r, i, s) {
  let { moves: a, excludedChanges: l } = mf(e, t, n, s);
  if (!s.isValid())
    return [];
  const o = e.filter((h) => !l.has(h)), u = gf(o, r, i, t, n, s);
  return Qu(a, u), a = pf(a), a = a.filter((h) => {
    const f = h.original.toOffsetRange().slice(t).map((p) => p.trim());
    return f.join(`
`).length >= 15 && hf(f, (p) => p.length >= 2) >= 2;
  }), a = df(e, a), a;
}
function hf(e, t) {
  let n = 0;
  for (const r of e)
    t(r) && n++;
  return n;
}
function mf(e, t, n, r) {
  const i = [], s = e.filter((o) => o.modified.isEmpty && o.original.length >= 3).map((o) => new xr(o.original, t, o)), a = new Set(e.filter((o) => o.original.isEmpty && o.modified.length >= 3).map((o) => new xr(o.modified, n, o))), l = /* @__PURE__ */ new Set();
  for (const o of s) {
    let u = -1, h;
    for (const f of a) {
      const m = o.computeSimilarity(f);
      m > u && (u = m, h = f);
    }
    if (u > 0.9 && h && (a.delete(h), i.push(new Ge(o.range, h.range)), l.add(o.source), l.add(h.source)), !r.isValid())
      return { moves: i, excludedChanges: l };
  }
  return { moves: i, excludedChanges: l };
}
function gf(e, t, n, r, i, s) {
  const a = [], l = new ic();
  for (const m of e)
    for (let p = m.original.startLineNumber; p < m.original.endLineNumberExclusive - 2; p++) {
      const g = `${t[p - 1]}:${t[p + 1 - 1]}:${t[p + 2 - 1]}`;
      l.add(g, { range: new te(p, p + 3) });
    }
  const o = [];
  e.sort(cn((m) => m.modified.startLineNumber, In));
  for (const m of e) {
    let p = [];
    for (let g = m.modified.startLineNumber; g < m.modified.endLineNumberExclusive - 2; g++) {
      const d = `${n[g - 1]}:${n[g + 1 - 1]}:${n[g + 2 - 1]}`, _ = new te(g, g + 3), y = [];
      l.forEach(d, ({ range: x }) => {
        for (const A of p)
          if (A.originalLineRange.endLineNumberExclusive + 1 === x.endLineNumberExclusive && A.modifiedLineRange.endLineNumberExclusive + 1 === _.endLineNumberExclusive) {
            A.originalLineRange = new te(
              A.originalLineRange.startLineNumber,
              x.endLineNumberExclusive
            ), A.modifiedLineRange = new te(
              A.modifiedLineRange.startLineNumber,
              _.endLineNumberExclusive
            ), y.push(A);
            return;
          }
        const b = {
          modifiedLineRange: _,
          originalLineRange: x
        };
        o.push(b), y.push(b);
      }), p = y;
    }
    if (!s.isValid())
      return [];
  }
  o.sort(Zu(cn((m) => m.modifiedLineRange.length, In)));
  const u = new rt(), h = new rt();
  for (const m of o) {
    const p = m.modifiedLineRange.startLineNumber - m.originalLineRange.startLineNumber, g = u.subtractFrom(m.modifiedLineRange), d = h.subtractFrom(m.originalLineRange).getWithDelta(p), _ = g.getIntersection(d);
    for (const y of _.ranges) {
      if (y.length < 3)
        continue;
      const x = y, b = y.delta(-p);
      a.push(new Ge(b, x)), u.addRange(x), h.addRange(b);
    }
  }
  a.sort(cn((m) => m.original.startLineNumber, In));
  const f = new mr(e);
  for (let m = 0; m < a.length; m++) {
    const p = a[m], g = f.findLastMonotonous((S) => S.original.startLineNumber <= p.original.startLineNumber), d = pn(e, (S) => S.modified.startLineNumber <= p.modified.startLineNumber), _ = Math.max(p.original.startLineNumber - g.original.startLineNumber, p.modified.startLineNumber - d.modified.startLineNumber), y = f.findLastMonotonous((S) => S.original.startLineNumber < p.original.endLineNumberExclusive), x = pn(e, (S) => S.modified.startLineNumber < p.modified.endLineNumberExclusive), b = Math.max(y.original.endLineNumberExclusive - p.original.endLineNumberExclusive, x.modified.endLineNumberExclusive - p.modified.endLineNumberExclusive);
    let A;
    for (A = 0; A < _; A++) {
      const S = p.original.startLineNumber - A - 1, L = p.modified.startLineNumber - A - 1;
      if (S > r.length || L > i.length || u.contains(L) || h.contains(S) || !uo(r[S - 1], i[L - 1], s))
        break;
    }
    A > 0 && (h.addRange(new te(p.original.startLineNumber - A, p.original.startLineNumber)), u.addRange(new te(p.modified.startLineNumber - A, p.modified.startLineNumber)));
    let N;
    for (N = 0; N < b; N++) {
      const S = p.original.endLineNumberExclusive + N, L = p.modified.endLineNumberExclusive + N;
      if (S > r.length || L > i.length || u.contains(L) || h.contains(S) || !uo(r[S - 1], i[L - 1], s))
        break;
    }
    N > 0 && (h.addRange(new te(
      p.original.endLineNumberExclusive,
      p.original.endLineNumberExclusive + N
    )), u.addRange(new te(
      p.modified.endLineNumberExclusive,
      p.modified.endLineNumberExclusive + N
    ))), (A > 0 || N > 0) && (a[m] = new Ge(new te(
      p.original.startLineNumber - A,
      p.original.endLineNumberExclusive + N
    ), new te(
      p.modified.startLineNumber - A,
      p.modified.endLineNumberExclusive + N
    )));
  }
  return a;
}
function uo(e, t, n) {
  if (e.trim() === t.trim())
    return !0;
  if (e.length > 300 && t.length > 300)
    return !1;
  const i = new pu().compute(new Ar([e], new G(1, 1, 1, e.length), !1), new Ar([t], new G(1, 1, 1, t.length), !1), n);
  let s = 0;
  const a = ue.invert(i.diffs, e.length);
  for (const h of a)
    h.seq1Range.forEach((f) => {
      wi(e.charCodeAt(f)) || s++;
    });
  function l(h) {
    let f = 0;
    for (let m = 0; m < e.length; m++)
      wi(h.charCodeAt(m)) || f++;
    return f;
  }
  const o = l(e.length > t.length ? e : t);
  return s / o > 0.6 && o > 10;
}
function pf(e) {
  if (e.length === 0)
    return e;
  e.sort(cn((n) => n.original.startLineNumber, In));
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
function df(e, t) {
  const n = new mr(e);
  return t = t.filter((r) => {
    const i = n.findLastMonotonous((l) => l.original.startLineNumber < r.original.endLineNumberExclusive) || new Ge(new te(1, 1), new te(1, 1)), s = pn(e, (l) => l.modified.startLineNumber < r.modified.endLineNumberExclusive);
    return i !== s;
  }), t;
}
function co(e, t, n) {
  let r = n;
  return r = fo(e, t, r), r = fo(e, t, r), r = bf(e, t, r), r;
}
function fo(e, t, n) {
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
function bf(e, t, n) {
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
    s.seq1Range.isEmpty ? n[r] = ho(s, e, t, l, o) : s.seq2Range.isEmpty && (n[r] = ho(s.swap(), t, e, o, l).swap());
  }
  return n;
}
function ho(e, t, n, r, i) {
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
    const f = e.seq2Range.start + h, m = e.seq2Range.endExclusive + h, p = e.seq1Range.start + h, g = t.getBoundaryScore(p) + n.getBoundaryScore(f) + n.getBoundaryScore(m);
    g > u && (u = g, o = h);
  }
  return e.delta(o);
}
function _f(e, t, n) {
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
function mo(e, t, n, r, i = !1) {
  const s = ue.invert(n, e.length), a = [];
  let l = new pt(0, 0);
  function o(h, f) {
    if (h.offset1 < l.offset1 || h.offset2 < l.offset2)
      return;
    const m = r(e, h.offset1), p = r(t, h.offset2);
    if (!m || !p)
      return;
    let g = new ue(m, p);
    const d = g.intersect(f);
    let _ = d.seq1Range.length, y = d.seq2Range.length;
    for (; s.length > 0; ) {
      const x = s[0];
      if (!(x.seq1Range.intersects(g.seq1Range) || x.seq2Range.intersects(g.seq2Range)))
        break;
      const A = r(e, x.seq1Range.start), N = r(t, x.seq2Range.start), S = new ue(A, N), L = S.intersect(x);
      if (_ += L.seq1Range.length, y += L.seq2Range.length, g = g.join(S), g.seq1Range.endExclusive >= x.seq1Range.endExclusive)
        s.shift();
      else
        break;
    }
    (i && _ + y < g.seq1Range.length + g.seq2Range.length || _ + y < (g.seq1Range.length + g.seq2Range.length) * 2 / 3) && a.push(g), l = g.getEndExclusives();
  }
  for (; s.length > 0; ) {
    const h = s.shift();
    h.seq1Range.isEmpty || (o(h.getStarts(), h), o(h.getEndExclusives().delta(-1), h));
  }
  return wf(n, a);
}
function wf(e, t) {
  const n = [];
  for (; e.length > 0 || t.length > 0; ) {
    const r = e[0], i = t[0];
    let s;
    r && (!i || r.seq1Range.start < i.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function vf(e, t, n) {
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
      let h = function(m, p) {
        const g = new W(u.seq1Range.endExclusive, o.seq1Range.start);
        return e.getText(g).replace(/\s/g, "").length <= 4 && (m.seq1Range.length + m.seq2Range.length > 5 || p.seq1Range.length + p.seq2Range.length > 5);
      };
      const o = r[l], u = a[a.length - 1];
      h(u, o) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(o)) : a.push(o);
    }
    r = a;
  } while (i++ < 10 && s);
  return r;
}
function yf(e, t, n) {
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
      let f = function(p, g) {
        const d = new W(h.seq1Range.endExclusive, u.seq1Range.start);
        if (e.countLinesIn(d) > 5 || d.length > 500)
          return !1;
        const y = e.getText(d).trim();
        if (y.length > 20 || y.split(/\r\n|\r|\n/).length > 1)
          return !1;
        const x = e.countLinesIn(p.seq1Range), b = p.seq1Range.length, A = t.countLinesIn(p.seq2Range), N = p.seq2Range.length, S = e.countLinesIn(g.seq1Range), L = g.seq1Range.length, R = t.countLinesIn(g.seq2Range), F = g.seq2Range.length, q = 130;
        function U(k) {
          return Math.min(k, q);
        }
        return Math.pow(Math.pow(U(x * 40 + b), 1.5) + Math.pow(U(A * 40 + N), 1.5), 1.5) + Math.pow(Math.pow(U(S * 40 + L), 1.5) + Math.pow(U(R * 40 + F), 1.5), 1.5) > (q ** 1.5) ** 1.5 * 1.3;
      };
      const u = r[o], h = l[l.length - 1];
      f(h, u) ? (s = !0, l[l.length - 1] = l[l.length - 1].join(u)) : l.push(u);
    }
    r = l;
  } while (i++ < 10 && s);
  const a = [];
  return Yu(r, (l, o, u) => {
    let h = o;
    function f(y) {
      return y.length > 0 && y.trim().length <= 3 && o.seq1Range.length + o.seq2Range.length > 100;
    }
    const m = e.extendToFullLines(o.seq1Range), p = e.getText(new W(m.start, o.seq1Range.start));
    f(p) && (h = h.deltaStart(-p.length));
    const g = e.getText(new W(o.seq1Range.endExclusive, m.endExclusive));
    f(g) && (h = h.deltaEnd(g.length));
    const d = ue.fromOffsetPairs(l ? l.getEndExclusives() : pt.zero, u ? u.getStarts() : pt.max), _ = h.intersect(d);
    a.length > 0 && _.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(_) : a.push(_);
  }), a;
}
class go {
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
    const n = t === 0 ? 0 : po(this.lines[t - 1]), r = t === this.lines.length ? 0 : po(this.lines[t]);
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
function po(e) {
  let t = 0;
  for (; t < e.length && (e.charCodeAt(t) === T.Space || e.charCodeAt(t) === T.Tab); )
    t++;
  return t;
}
class Lf {
  constructor() {
    this.dynamicProgrammingDiffing = new of(), this.myersDiffingAlgorithm = new pu();
  }
  computeDiff(t, n, r) {
    if (t.length <= 1 && Gl(t, n, (L, R) => L === R))
      return new hr([], [], !1);
    if (t.length === 1 && t[0].length === 0 || n.length === 1 && n[0].length === 0)
      return new hr([
        new ot(new te(1, t.length + 1), new te(1, n.length + 1), [
          new Pe(new G(
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
    const i = r.maxComputationTimeMs === 0 ? Xn.instance : new af(r.maxComputationTimeMs), s = !r.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
    function l(L) {
      let R = a.get(L);
      return R === void 0 && (R = a.size, a.set(L, R)), R;
    }
    const o = t.map((L) => l(L.trim())), u = n.map((L) => l(L.trim())), h = new go(o, t), f = new go(u, n), m = h.length + f.length < 1700 ? this.dynamicProgrammingDiffing.compute(h, f, i, (L, R) => t[L] === n[R] ? n[R].length === 0 ? 0.1 : 1 + Math.log(1 + n[R].length) : 0.99) : this.myersDiffingAlgorithm.compute(h, f, i);
    let p = m.diffs, g = m.hitTimeout;
    p = co(h, f, p), p = vf(h, f, p);
    const d = [], _ = (L) => {
      if (s)
        for (let R = 0; R < L; R++) {
          const F = y + R, q = x + R;
          if (t[F] !== n[q]) {
            const U = this.refineDiff(t, n, new ue(new W(F, F + 1), new W(q, q + 1)), i, s, r);
            for (const k of U.mappings)
              d.push(k);
            U.hitTimeout && (g = !0);
          }
        }
    };
    let y = 0, x = 0;
    for (const L of p) {
      $n(() => L.seq1Range.start - y === L.seq2Range.start - x);
      const R = L.seq1Range.start - y;
      _(R), y = L.seq1Range.endExclusive, x = L.seq2Range.endExclusive;
      const F = this.refineDiff(t, n, L, i, s, r);
      F.hitTimeout && (g = !0);
      for (const q of F.mappings)
        d.push(q);
    }
    _(t.length - y);
    const b = new tr(t), A = new tr(n), N = no(d, b, A);
    let S = [];
    return r.computeMoves && (S = this.computeMoves(N, t, n, o, u, i, s, r)), $n(() => {
      function L(F, q) {
        if (F.lineNumber < 1 || F.lineNumber > q.length)
          return !1;
        const U = q[F.lineNumber - 1];
        return !(F.column < 1 || F.column > U.length + 1);
      }
      function R(F, q) {
        return !(F.startLineNumber < 1 || F.startLineNumber > q.length + 1 || F.endLineNumberExclusive < 1 || F.endLineNumberExclusive > q.length + 1);
      }
      for (const F of N) {
        if (!F.innerChanges)
          return !1;
        for (const q of F.innerChanges)
          if (!(L(q.modifiedRange.getStartPosition(), n) && L(q.modifiedRange.getEndPosition(), n) && L(q.originalRange.getStartPosition(), t) && L(q.originalRange.getEndPosition(), t)))
            return !1;
        if (!R(F.modified, n) || !R(F.original, t))
          return !1;
      }
      return !0;
    }), new hr(N, S, g);
  }
  computeMoves(t, n, r, i, s, a, l, o) {
    return ff(t, n, r, i, s, a).map((f) => {
      const m = this.refineDiff(n, r, new ue(f.original.toOffsetRange(), f.modified.toOffsetRange()), a, l, o), p = no(m.mappings, new tr(n), new tr(r), !0);
      return new Zi(f, p);
    });
  }
  refineDiff(t, n, r, i, s, a) {
    const o = Nf(r).toRangeMapping2(t, n), u = new Ar(t, o.originalRange, s), h = new Ar(n, o.modifiedRange, s), f = u.length + h.length < 500 ? this.dynamicProgrammingDiffing.compute(u, h, i) : this.myersDiffingAlgorithm.compute(u, h, i);
    let m = f.diffs;
    return m = co(u, h, m), m = mo(u, h, m, (g, d) => g.findWordContaining(d)), a.extendToSubwords && (m = mo(u, h, m, (g, d) => g.findSubWordContaining(d), !0)), m = _f(u, h, m), m = yf(u, h, m), {
      mappings: m.map((g) => new Pe(u.translateRange(g.seq1Range), h.translateRange(g.seq2Range))),
      hitTimeout: f.hitTimeout
    };
  }
}
function Nf(e) {
  return new Ge(new te(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new te(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const An = {
  getLegacy: () => new nf(),
  getDefault: () => new Lf()
};
function St(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
class E {
  constructor(t, n, r, i = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, r)) | 0, this.a = St(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}
class je {
  constructor(t, n, r, i) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = St(Math.max(Math.min(1, n), 0), 3), this.l = St(Math.max(Math.min(1, r), 0), 3), this.a = St(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, r = t.g / 255, i = t.b / 255, s = t.a, a = Math.max(n, r, i), l = Math.min(n, r, i);
    let o = 0, u = 0;
    const h = (l + a) / 2, f = a - l;
    if (f > 0) {
      switch (u = Math.min(h <= 0.5 ? f / (2 * h) : f / (2 - 2 * h), 1), a) {
        case n:
          o = (r - i) / f + (r < i ? 6 : 0);
          break;
        case r:
          o = (i - n) / f + 2;
          break;
        case i:
          o = (n - r) / f + 4;
          break;
      }
      o *= 60, o = Math.round(o);
    }
    return new je(o, u, h, s);
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
      a = je._hue2rgb(h, u, n + 1 / 3), l = je._hue2rgb(h, u, n), o = je._hue2rgb(h, u, n - 1 / 3);
    }
    return new E(Math.round(a * 255), Math.round(l * 255), Math.round(o * 255), s);
  }
}
class nn {
  constructor(t, n, r, i) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = St(Math.max(Math.min(1, n), 0), 3), this.v = St(Math.max(Math.min(1, r), 0), 3), this.a = St(Math.max(Math.min(1, i), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, r = t.g / 255, i = t.b / 255, s = Math.max(n, r, i), a = Math.min(n, r, i), l = s - a, o = s === 0 ? 0 : l / s;
    let u;
    return l === 0 ? u = 0 : s === n ? u = ((r - i) / l % 6 + 6) % 6 : s === r ? u = (i - n) / l + 2 : u = (n - r) / l + 4, new nn(Math.round(u * 60), o, s, t.a);
  }
  static toRGBA(t) {
    const { h: n, s: r, v: i, a: s } = t, a = i * r, l = a * (1 - Math.abs(n / 60 % 2 - 1)), o = i - a;
    let [u, h, f] = [0, 0, 0];
    return n < 60 ? (u = a, h = l) : n < 120 ? (u = l, h = a) : n < 180 ? (h = a, f = l) : n < 240 ? (h = l, f = a) : n < 300 ? (u = l, f = a) : n <= 360 && (u = a, f = l), u = Math.round((u + o) * 255), h = Math.round((h + o) * 255), f = Math.round((f + o) * 255), new E(u, h, f, s);
  }
}
var Z;
let Er = (Z = class {
  static fromHex(t) {
    return Z.Format.CSS.parseHex(t) || Z.red;
  }
  static equals(t, n) {
    return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : je.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : nn.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t)
      if (t instanceof E)
        this.rgba = t;
      else if (t instanceof je)
        this._hsla = t, this.rgba = je.toRGBA(t);
      else if (t instanceof nn)
        this._hsva = t, this.rgba = nn.toRGBA(t);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && E.equals(this.rgba, t.rgba) && je.equals(this.hsla, t.hsla) && nn.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = Z._relativeLuminanceForComponent(this.rgba.r), n = Z._relativeLuminanceForComponent(this.rgba.g), r = Z._relativeLuminanceForComponent(this.rgba.b), i = 0.2126 * t + 0.7152 * n + 0.0722 * r;
    return St(i, 4);
  }
  reduceRelativeLuminace(t, n) {
    let { r, g: i, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (r > 0 || i > 0 || s > 0); )
      r -= Math.max(0, Math.ceil(r * 0.1)), i -= Math.max(0, Math.ceil(i * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), a = this.getContrastRatio(new Z(new E(r, i, s)));
    return new Z(new E(r, i, s));
  }
  increaseRelativeLuminace(t, n) {
    let { r, g: i, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (r < 255 || i < 255 || s < 255); )
      r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), a = this.getContrastRatio(new Z(new E(r, i, s)));
    return new Z(new E(r, i, s));
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
          const h = this.increaseRelativeLuminace(t, n), f = this.getContrastRatio(h);
          return u > f ? o : h;
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
    return new Z(new je(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new Z(new je(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: n, g: r, b: i, a: s } = this.rgba;
    return new Z(new E(n, r, i, s * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new Z(new E(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const n = t.rgba, r = this.rgba.a, i = n.a, s = r + i * (1 - r);
    if (s < 1e-6)
      return Z.transparent;
    const a = this.rgba.r * r / s + n.r * i * (1 - r) / s, l = this.rgba.g * r / s + n.g * i * (1 - r) / s, o = this.rgba.b * r / s + n.b * i * (1 - r) / s;
    return new Z(new E(a, l, o, s));
  }
  mix(t, n = 0.5) {
    const r = Math.min(Math.max(n, 0), 1), i = this.rgba, s = t.rgba, a = i.r + (s.r - i.r) * r, l = i.g + (s.g - i.g) * r, o = i.b + (s.b - i.b) * r, u = i.a + (s.a - i.a) * r;
    return new Z(new E(a, l, o, u));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1)
      return this;
    const { r: n, g: r, b: i, a: s } = this.rgba;
    return new Z(new E(
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
    return new Z(new E(
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
}, Z.white = new Z(new E(255, 255, 255, 1)), Z.black = new Z(new E(0, 0, 0, 1)), Z.red = new Z(new E(255, 0, 0, 1)), Z.blue = new Z(new E(0, 0, 255, 1)), Z.green = new Z(new E(0, 255, 0, 1)), Z.cyan = new Z(new E(0, 255, 255, 1)), Z.lightgrey = new Z(new E(211, 211, 211, 1)), Z.transparent = new Z(new E(0, 0, 0, 0)), Z);
(function(e) {
  (function(t) {
    (function(n) {
      function r(d) {
        return d.rgba.a === 1 ? `rgb(${d.rgba.r}, ${d.rgba.g}, ${d.rgba.b})` : e.Format.CSS.formatRGBA(d);
      }
      n.formatRGB = r;
      function i(d) {
        return `rgba(${d.rgba.r}, ${d.rgba.g}, ${d.rgba.b}, ${+d.rgba.a.toFixed(2)})`;
      }
      n.formatRGBA = i;
      function s(d) {
        return d.hsla.a === 1 ? `hsl(${d.hsla.h}, ${Math.round(d.hsla.s * 100)}%, ${Math.round(d.hsla.l * 100)}%)` : e.Format.CSS.formatHSLA(d);
      }
      n.formatHSL = s;
      function a(d) {
        return `hsla(${d.hsla.h}, ${Math.round(d.hsla.s * 100)}%, ${Math.round(d.hsla.l * 100)}%, ${d.hsla.a.toFixed(2)})`;
      }
      n.formatHSLA = a;
      function l(d) {
        const _ = d.toString(16);
        return _.length !== 2 ? "0" + _ : _;
      }
      function o(d) {
        return `#${l(d.rgba.r)}${l(d.rgba.g)}${l(d.rgba.b)}`;
      }
      n.formatHex = o;
      function u(d, _ = !1) {
        return _ && d.rgba.a === 1 ? e.Format.CSS.formatHex(d) : `#${l(d.rgba.r)}${l(d.rgba.g)}${l(d.rgba.b)}${l(Math.round(d.rgba.a * 255))}`;
      }
      n.formatHexA = u;
      function h(d) {
        return d.isOpaque() ? e.Format.CSS.formatHex(d) : e.Format.CSS.formatRGBA(d);
      }
      n.format = h;
      function f(d) {
        var _, y, x, b, A, N, S;
        if (d === "transparent")
          return e.transparent;
        if (d.startsWith("#"))
          return p(d);
        if (d.startsWith("rgba(")) {
          const L = d.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!L)
            throw new Error("Invalid color format " + d);
          const R = parseInt(((_ = L.groups) == null ? void 0 : _.r) ?? "0"), F = parseInt(((y = L.groups) == null ? void 0 : y.g) ?? "0"), q = parseInt(((x = L.groups) == null ? void 0 : x.b) ?? "0"), U = parseFloat(((b = L.groups) == null ? void 0 : b.a) ?? "0");
          return new e(new E(R, F, q, U));
        }
        if (d.startsWith("rgb(")) {
          const L = d.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!L)
            throw new Error("Invalid color format " + d);
          const R = parseInt(((A = L.groups) == null ? void 0 : A.r) ?? "0"), F = parseInt(((N = L.groups) == null ? void 0 : N.g) ?? "0"), q = parseInt(((S = L.groups) == null ? void 0 : S.b) ?? "0");
          return new e(new E(R, F, q));
        }
        return m(d);
      }
      n.parse = f;
      function m(d) {
        switch (d) {
          case "aliceblue":
            return new e(new E(240, 248, 255, 1));
          case "antiquewhite":
            return new e(new E(250, 235, 215, 1));
          case "aqua":
            return new e(new E(0, 255, 255, 1));
          case "aquamarine":
            return new e(new E(127, 255, 212, 1));
          case "azure":
            return new e(new E(240, 255, 255, 1));
          case "beige":
            return new e(new E(245, 245, 220, 1));
          case "bisque":
            return new e(new E(255, 228, 196, 1));
          case "black":
            return new e(new E(0, 0, 0, 1));
          case "blanchedalmond":
            return new e(new E(255, 235, 205, 1));
          case "blue":
            return new e(new E(0, 0, 255, 1));
          case "blueviolet":
            return new e(new E(138, 43, 226, 1));
          case "brown":
            return new e(new E(165, 42, 42, 1));
          case "burlywood":
            return new e(new E(222, 184, 135, 1));
          case "cadetblue":
            return new e(new E(95, 158, 160, 1));
          case "chartreuse":
            return new e(new E(127, 255, 0, 1));
          case "chocolate":
            return new e(new E(210, 105, 30, 1));
          case "coral":
            return new e(new E(255, 127, 80, 1));
          case "cornflowerblue":
            return new e(new E(100, 149, 237, 1));
          case "cornsilk":
            return new e(new E(255, 248, 220, 1));
          case "crimson":
            return new e(new E(220, 20, 60, 1));
          case "cyan":
            return new e(new E(0, 255, 255, 1));
          case "darkblue":
            return new e(new E(0, 0, 139, 1));
          case "darkcyan":
            return new e(new E(0, 139, 139, 1));
          case "darkgoldenrod":
            return new e(new E(184, 134, 11, 1));
          case "darkgray":
            return new e(new E(169, 169, 169, 1));
          case "darkgreen":
            return new e(new E(0, 100, 0, 1));
          case "darkgrey":
            return new e(new E(169, 169, 169, 1));
          case "darkkhaki":
            return new e(new E(189, 183, 107, 1));
          case "darkmagenta":
            return new e(new E(139, 0, 139, 1));
          case "darkolivegreen":
            return new e(new E(85, 107, 47, 1));
          case "darkorange":
            return new e(new E(255, 140, 0, 1));
          case "darkorchid":
            return new e(new E(153, 50, 204, 1));
          case "darkred":
            return new e(new E(139, 0, 0, 1));
          case "darksalmon":
            return new e(new E(233, 150, 122, 1));
          case "darkseagreen":
            return new e(new E(143, 188, 143, 1));
          case "darkslateblue":
            return new e(new E(72, 61, 139, 1));
          case "darkslategray":
            return new e(new E(47, 79, 79, 1));
          case "darkslategrey":
            return new e(new E(47, 79, 79, 1));
          case "darkturquoise":
            return new e(new E(0, 206, 209, 1));
          case "darkviolet":
            return new e(new E(148, 0, 211, 1));
          case "deeppink":
            return new e(new E(255, 20, 147, 1));
          case "deepskyblue":
            return new e(new E(0, 191, 255, 1));
          case "dimgray":
            return new e(new E(105, 105, 105, 1));
          case "dimgrey":
            return new e(new E(105, 105, 105, 1));
          case "dodgerblue":
            return new e(new E(30, 144, 255, 1));
          case "firebrick":
            return new e(new E(178, 34, 34, 1));
          case "floralwhite":
            return new e(new E(255, 250, 240, 1));
          case "forestgreen":
            return new e(new E(34, 139, 34, 1));
          case "fuchsia":
            return new e(new E(255, 0, 255, 1));
          case "gainsboro":
            return new e(new E(220, 220, 220, 1));
          case "ghostwhite":
            return new e(new E(248, 248, 255, 1));
          case "gold":
            return new e(new E(255, 215, 0, 1));
          case "goldenrod":
            return new e(new E(218, 165, 32, 1));
          case "gray":
            return new e(new E(128, 128, 128, 1));
          case "green":
            return new e(new E(0, 128, 0, 1));
          case "greenyellow":
            return new e(new E(173, 255, 47, 1));
          case "grey":
            return new e(new E(128, 128, 128, 1));
          case "honeydew":
            return new e(new E(240, 255, 240, 1));
          case "hotpink":
            return new e(new E(255, 105, 180, 1));
          case "indianred":
            return new e(new E(205, 92, 92, 1));
          case "indigo":
            return new e(new E(75, 0, 130, 1));
          case "ivory":
            return new e(new E(255, 255, 240, 1));
          case "khaki":
            return new e(new E(240, 230, 140, 1));
          case "lavender":
            return new e(new E(230, 230, 250, 1));
          case "lavenderblush":
            return new e(new E(255, 240, 245, 1));
          case "lawngreen":
            return new e(new E(124, 252, 0, 1));
          case "lemonchiffon":
            return new e(new E(255, 250, 205, 1));
          case "lightblue":
            return new e(new E(173, 216, 230, 1));
          case "lightcoral":
            return new e(new E(240, 128, 128, 1));
          case "lightcyan":
            return new e(new E(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new e(new E(250, 250, 210, 1));
          case "lightgray":
            return new e(new E(211, 211, 211, 1));
          case "lightgreen":
            return new e(new E(144, 238, 144, 1));
          case "lightgrey":
            return new e(new E(211, 211, 211, 1));
          case "lightpink":
            return new e(new E(255, 182, 193, 1));
          case "lightsalmon":
            return new e(new E(255, 160, 122, 1));
          case "lightseagreen":
            return new e(new E(32, 178, 170, 1));
          case "lightskyblue":
            return new e(new E(135, 206, 250, 1));
          case "lightslategray":
            return new e(new E(119, 136, 153, 1));
          case "lightslategrey":
            return new e(new E(119, 136, 153, 1));
          case "lightsteelblue":
            return new e(new E(176, 196, 222, 1));
          case "lightyellow":
            return new e(new E(255, 255, 224, 1));
          case "lime":
            return new e(new E(0, 255, 0, 1));
          case "limegreen":
            return new e(new E(50, 205, 50, 1));
          case "linen":
            return new e(new E(250, 240, 230, 1));
          case "magenta":
            return new e(new E(255, 0, 255, 1));
          case "maroon":
            return new e(new E(128, 0, 0, 1));
          case "mediumaquamarine":
            return new e(new E(102, 205, 170, 1));
          case "mediumblue":
            return new e(new E(0, 0, 205, 1));
          case "mediumorchid":
            return new e(new E(186, 85, 211, 1));
          case "mediumpurple":
            return new e(new E(147, 112, 219, 1));
          case "mediumseagreen":
            return new e(new E(60, 179, 113, 1));
          case "mediumslateblue":
            return new e(new E(123, 104, 238, 1));
          case "mediumspringgreen":
            return new e(new E(0, 250, 154, 1));
          case "mediumturquoise":
            return new e(new E(72, 209, 204, 1));
          case "mediumvioletred":
            return new e(new E(199, 21, 133, 1));
          case "midnightblue":
            return new e(new E(25, 25, 112, 1));
          case "mintcream":
            return new e(new E(245, 255, 250, 1));
          case "mistyrose":
            return new e(new E(255, 228, 225, 1));
          case "moccasin":
            return new e(new E(255, 228, 181, 1));
          case "navajowhite":
            return new e(new E(255, 222, 173, 1));
          case "navy":
            return new e(new E(0, 0, 128, 1));
          case "oldlace":
            return new e(new E(253, 245, 230, 1));
          case "olive":
            return new e(new E(128, 128, 0, 1));
          case "olivedrab":
            return new e(new E(107, 142, 35, 1));
          case "orange":
            return new e(new E(255, 165, 0, 1));
          case "orangered":
            return new e(new E(255, 69, 0, 1));
          case "orchid":
            return new e(new E(218, 112, 214, 1));
          case "palegoldenrod":
            return new e(new E(238, 232, 170, 1));
          case "palegreen":
            return new e(new E(152, 251, 152, 1));
          case "paleturquoise":
            return new e(new E(175, 238, 238, 1));
          case "palevioletred":
            return new e(new E(219, 112, 147, 1));
          case "papayawhip":
            return new e(new E(255, 239, 213, 1));
          case "peachpuff":
            return new e(new E(255, 218, 185, 1));
          case "peru":
            return new e(new E(205, 133, 63, 1));
          case "pink":
            return new e(new E(255, 192, 203, 1));
          case "plum":
            return new e(new E(221, 160, 221, 1));
          case "powderblue":
            return new e(new E(176, 224, 230, 1));
          case "purple":
            return new e(new E(128, 0, 128, 1));
          case "rebeccapurple":
            return new e(new E(102, 51, 153, 1));
          case "red":
            return new e(new E(255, 0, 0, 1));
          case "rosybrown":
            return new e(new E(188, 143, 143, 1));
          case "royalblue":
            return new e(new E(65, 105, 225, 1));
          case "saddlebrown":
            return new e(new E(139, 69, 19, 1));
          case "salmon":
            return new e(new E(250, 128, 114, 1));
          case "sandybrown":
            return new e(new E(244, 164, 96, 1));
          case "seagreen":
            return new e(new E(46, 139, 87, 1));
          case "seashell":
            return new e(new E(255, 245, 238, 1));
          case "sienna":
            return new e(new E(160, 82, 45, 1));
          case "silver":
            return new e(new E(192, 192, 192, 1));
          case "skyblue":
            return new e(new E(135, 206, 235, 1));
          case "slateblue":
            return new e(new E(106, 90, 205, 1));
          case "slategray":
            return new e(new E(112, 128, 144, 1));
          case "slategrey":
            return new e(new E(112, 128, 144, 1));
          case "snow":
            return new e(new E(255, 250, 250, 1));
          case "springgreen":
            return new e(new E(0, 255, 127, 1));
          case "steelblue":
            return new e(new E(70, 130, 180, 1));
          case "tan":
            return new e(new E(210, 180, 140, 1));
          case "teal":
            return new e(new E(0, 128, 128, 1));
          case "thistle":
            return new e(new E(216, 191, 216, 1));
          case "tomato":
            return new e(new E(255, 99, 71, 1));
          case "turquoise":
            return new e(new E(64, 224, 208, 1));
          case "violet":
            return new e(new E(238, 130, 238, 1));
          case "wheat":
            return new e(new E(245, 222, 179, 1));
          case "white":
            return new e(new E(255, 255, 255, 1));
          case "whitesmoke":
            return new e(new E(245, 245, 245, 1));
          case "yellow":
            return new e(new E(255, 255, 0, 1));
          case "yellowgreen":
            return new e(new E(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function p(d) {
        const _ = d.length;
        if (_ === 0 || d.charCodeAt(0) !== T.Hash)
          return null;
        if (_ === 7) {
          const y = 16 * g(d.charCodeAt(1)) + g(d.charCodeAt(2)), x = 16 * g(d.charCodeAt(3)) + g(d.charCodeAt(4)), b = 16 * g(d.charCodeAt(5)) + g(d.charCodeAt(6));
          return new e(new E(y, x, b, 1));
        }
        if (_ === 9) {
          const y = 16 * g(d.charCodeAt(1)) + g(d.charCodeAt(2)), x = 16 * g(d.charCodeAt(3)) + g(d.charCodeAt(4)), b = 16 * g(d.charCodeAt(5)) + g(d.charCodeAt(6)), A = 16 * g(d.charCodeAt(7)) + g(d.charCodeAt(8));
          return new e(new E(y, x, b, A / 255));
        }
        if (_ === 4) {
          const y = g(d.charCodeAt(1)), x = g(d.charCodeAt(2)), b = g(d.charCodeAt(3));
          return new e(new E(16 * y + y, 16 * x + x, 16 * b + b));
        }
        if (_ === 5) {
          const y = g(d.charCodeAt(1)), x = g(d.charCodeAt(2)), b = g(d.charCodeAt(3)), A = g(d.charCodeAt(4));
          return new e(new E(16 * y + y, 16 * x + x, 16 * b + b, (16 * A + A) / 255));
        }
        return null;
      }
      n.parseHex = p;
      function g(d) {
        switch (d) {
          case T.Digit0:
            return 0;
          case T.Digit1:
            return 1;
          case T.Digit2:
            return 2;
          case T.Digit3:
            return 3;
          case T.Digit4:
            return 4;
          case T.Digit5:
            return 5;
          case T.Digit6:
            return 6;
          case T.Digit7:
            return 7;
          case T.Digit8:
            return 8;
          case T.Digit9:
            return 9;
          case T.a:
            return 10;
          case T.A:
            return 10;
          case T.b:
            return 11;
          case T.B:
            return 11;
          case T.c:
            return 12;
          case T.C:
            return 12;
          case T.d:
            return 13;
          case T.D:
            return 13;
          case T.e:
            return 14;
          case T.E:
            return 14;
          case T.f:
            return 15;
          case T.F:
            return 15;
        }
        return 0;
      }
    })(t.CSS || (t.CSS = {}));
  })(e.Format || (e.Format = {}));
})(Er || (Er = {}));
function du(e) {
  const t = [];
  for (const n of e) {
    const r = Number(n);
    (r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
  }
  return t;
}
function Ci(e, t, n, r) {
  return {
    red: e / 255,
    blue: n / 255,
    green: t / 255,
    alpha: r
  };
}
function En(e, t) {
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
function xf(e, t) {
  if (!e)
    return;
  const n = Er.Format.CSS.parseHex(t);
  if (n)
    return {
      range: e,
      color: Ci(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
    };
}
function bo(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const i = t[0].values(), s = du(i);
  return {
    range: e,
    color: Ci(s[0], s[1], s[2], n ? s[3] : 1)
  };
}
function _o(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const i = t[0].values(), s = du(i), a = new Er(new je(
    s[0],
    s[1] / 100,
    s[2] / 100,
    n ? s[3] : 1
  ));
  return {
    range: e,
    color: Ci(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a)
  };
}
function Rn(e, t) {
  return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function Af(e) {
  const t = [], n = new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{3})\\b|^(#)([A-Fa-f0-9]{4})\\b|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{3})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{4})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"), r = Rn(e, n);
  if (r.length > 0)
    for (const i of r) {
      const s = i.filter((u) => u !== void 0), a = s[1], l = s[2];
      if (!l)
        continue;
      let o;
      if (a === "rgb") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        o = bo(En(e, i), Rn(l, u), !1);
      } else if (a === "rgba") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = bo(En(e, i), Rn(l, u), !0);
      } else if (a === "hsl") {
        const u = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        o = _o(En(e, i), Rn(l, u), !1);
      } else if (a === "hsla") {
        const u = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm;
        o = _o(En(e, i), Rn(l, u), !0);
      } else a === "#" && (o = xf(En(e, i), a + l));
      o && t.push(o);
    }
  return t;
}
function Ef(e) {
  return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : Af(e);
}
const Rf = /^-+|-+$/g, wo = 100, Tf = 5;
function kf(e, t) {
  var r;
  let n = [];
  if (t.findRegionSectionHeaders && ((r = t.foldingRules) != null && r.markers)) {
    const i = Sf(e, t);
    n = n.concat(i);
  }
  if (t.findMarkSectionHeaders) {
    const i = Mf(e, t);
    n = n.concat(i);
  }
  return n;
}
function Sf(e, t) {
  const n = [], r = e.getLineCount();
  for (let i = 1; i <= r; i++) {
    const s = e.getLineContent(i), a = s.match(t.foldingRules.markers.start);
    if (a) {
      const l = { startLineNumber: i, startColumn: a[0].length + 1, endLineNumber: i, endColumn: s.length + 1 };
      if (l.endColumn > l.startColumn) {
        const o = {
          range: l,
          ...If(s.substring(a[0].length)),
          shouldBeInComments: !1
        };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  return n;
}
function Mf(e, t) {
  const n = [], r = e.getLineCount();
  if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "")
    return n;
  const i = q1(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
  if (Uc(s))
    return n;
  for (let a = 1; a <= r; a += wo - Tf) {
    const l = Math.min(a + wo - 1, r), o = [];
    for (let f = a; f <= l; f++)
      o.push(e.getLineContent(f));
    const u = o.join(`
`);
    s.lastIndex = 0;
    let h;
    for (; (h = s.exec(u)) !== null; ) {
      const f = u.substring(0, h.index), m = (f.match(/\n/g) || []).length, p = a + m, g = h[0].split(`
`), d = g.length, _ = p + d - 1, y = f.lastIndexOf(`
`) + 1, x = h.index - y + 1, b = g[g.length - 1], A = d === 1 ? x + h[0].length : b.length + 1, N = {
        startLineNumber: p,
        startColumn: x,
        endLineNumber: _,
        endColumn: A
      }, S = (h.groups ?? {}).label ?? "", L = ((h.groups ?? {}).separator ?? "") !== "", R = {
        range: N,
        text: S,
        hasSeparatorLine: L,
        shouldBeInComments: !0
      };
      (R.text || R.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < R.range.startLineNumber) && n.push(R), s.lastIndex = h.index + h[0].length;
    }
  }
  return n;
}
function If(e) {
  e = e.trim();
  const t = e.startsWith("-");
  return e = e.replace(Rf, ""), { text: e, hasSeparatorLine: t };
}
function yt(e) {
  return e === T.Slash || e === T.Backslash;
}
function bu(e) {
  return e.replace(/[\\/]/g, se.sep);
}
function Pf(e) {
  return e.indexOf("/") === -1 && (e = bu(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function vo(e, t = se.sep) {
  if (!e)
    return "";
  const n = e.length, r = e.charCodeAt(0);
  if (yt(r)) {
    if (yt(e.charCodeAt(1)) && !yt(e.charCodeAt(2))) {
      let s = 3;
      const a = s;
      for (; s < n && !yt(e.charCodeAt(s)); s++)
        ;
      if (a !== s && !yt(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (yt(e.charCodeAt(s)))
            return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Ff(r) && e.charCodeAt(1) === T.Colon)
    return yt(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let i = e.indexOf("://");
  if (i !== -1) {
    for (i += 3; i < n; i++)
      if (yt(e.charCodeAt(i)))
        return e.slice(0, i + 1);
  }
  return "";
}
function yo(e, t, n, r = cr) {
  if (e === t)
    return !0;
  if (!e || !t || t.length > e.length)
    return !1;
  if (n) {
    if (!qc(e, t))
      return !1;
    if (t.length === e.length)
      return !0;
    let s = t.length;
    return t.charAt(t.length - 1) === r && s--, e.charAt(s) === r;
  }
  return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
}
function Ff(e) {
  return e >= T.A && e <= T.Z || e >= T.a && e <= T.z;
}
var Ae;
(function(e) {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatEditor = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.vscodeChatSession = "vscode-chat-session", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
})(Ae || (Ae = {}));
const Uf = "tkn";
class Df {
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
    this._serverRootPath = se.join(n ?? "/", Bf(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return se.join(this._serverRootPath, Ae.vscodeRemoteResource);
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
        return Mn(l), t;
      }
    const n = t.authority;
    let r = this._hosts[n];
    r && r.indexOf(":") !== -1 && r.indexOf("[") === -1 && (r = `[${r}]`);
    const i = this._ports[n], s = this._connectionTokens[n];
    let a = `path=${encodeURIComponent(t.path)}`;
    return typeof s == "string" && (a += `&${Uf}=${encodeURIComponent(s)}`), Oe.from({
      scheme: Ec ? this._preferredWebSchema : Ae.vscodeRemoteResource,
      authority: `${r}:${i}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const Of = new Df();
function Bf(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const Vf = "vscode-app", un = class un {
  constructor() {
    this.staticBrowserUris = new Cr(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
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
    return t.scheme === Ae.vscodeRemote ? Of.rewrite(t) : t.scheme === Ae.file && (Ac || Tc === `${Ae.vscodeFileResource}://${un.FALLBACK_AUTHORITY}`) ? t.with({
      scheme: Ae.vscodeFileResource,
      authority: t.authority || un.FALLBACK_AUTHORITY,
      query: null,
      fragment: null
    }) : this.staticBrowserUris.get(t) ?? t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Ae.vscodeFileResource ? t.with({
      scheme: Ae.file,
      authority: t.authority !== un.FALLBACK_AUTHORITY ? t.authority : null,
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
      const r = N1(n, t);
      return Oe.file(r);
    }
    return Oe.parse(this.toUrl(t));
  }
  registerStaticBrowserUri(t, n) {
    return this.staticBrowserUris.set(t, n), qn(() => {
      this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
    });
  }
  getRegisteredBrowserUris() {
    return this.staticBrowserUris.keys();
  }
};
un.FALLBACK_AUTHORITY = Vf;
let vi = un;
new vi();
var Lo;
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
})(Lo || (Lo = {}));
function ht(e) {
  return Lr(e, !0);
}
class $f {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, n, r = !1) {
    return t === n ? 0 : Bc(this.getComparisonKey(t, r), this.getComparisonKey(n, r));
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
      if (t.scheme === Ae.file)
        return yo(ht(t), ht(n), this._ignorePathCasing(t)) && t.query === n.query && (r || t.fragment === n.fragment);
      if (No(t.authority, n.authority))
        return yo(t.path, n.path, this._ignorePathCasing(t), "/") && t.query === n.query && (r || t.fragment === n.fragment);
    }
    return !1;
  }
  joinPath(t, ...n) {
    return Oe.joinPath(t, ...n);
  }
  basenameOrAuthority(t) {
    return qf(t) || t.authority;
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
    return t.scheme === Ae.file ? n = Oe.file(E1(ht(t))).path : (n = se.dirname(t.path), t.authority && n.length && n.charCodeAt(0) !== T.Slash && (console.error(`dirname("${t.toString})) resulted in a relative path`), n = "/")), t.with({
      path: n
    });
  }
  normalizePath(t) {
    if (!t.path.length)
      return t;
    let n;
    return t.scheme === Ae.file ? n = Oe.file(L1(ht(t))).path : n = se.normalize(t.path), t.with({
      path: n
    });
  }
  relativePath(t, n) {
    if (t.scheme !== n.scheme || !No(t.authority, n.authority))
      return;
    if (t.scheme === Ae.file) {
      const s = A1(ht(t), ht(n));
      return _n ? bu(s) : s;
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
    if (t.scheme === Ae.file) {
      const r = Oe.file(x1(ht(t), n));
      return t.with({
        authority: r.authority,
        path: r.path
      });
    }
    return n = Pf(n), t.with({
      path: se.resolve(t.path, n)
    });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, n) {
    return t === n || t !== void 0 && n !== void 0 && $c(t, n);
  }
  hasTrailingPathSeparator(t, n = cr) {
    if (t.scheme === Ae.file) {
      const r = ht(t);
      return r.length > vo(r).length && r[r.length - 1] === n;
    } else {
      const r = t.path;
      return r.length > 1 && r.charCodeAt(r.length - 1) === T.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, n = cr) {
    return xo(t, n) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, n = cr) {
    let r = !1;
    if (t.scheme === Ae.file) {
      const i = ht(t);
      r = i !== void 0 && i.length === vo(i).length && i[i.length - 1] === n;
    } else {
      n = "/";
      const i = t.path;
      r = i.length === 1 && i.charCodeAt(i.length - 1) === T.Slash;
    }
    return !r && !xo(t, n) ? t.with({ path: t.path + "/" }) : t;
  }
}
const re = new $f(() => !1);
re.isEqual.bind(re);
re.isEqualOrParent.bind(re);
re.getComparisonKey.bind(re);
re.basenameOrAuthority.bind(re);
const qf = re.basename.bind(re);
re.extname.bind(re);
re.dirname.bind(re);
re.joinPath.bind(re);
re.normalizePath.bind(re);
re.relativePath.bind(re);
re.resolvePath.bind(re);
re.isAbsolutePath.bind(re);
const No = re.isEqualAuthority.bind(re), xo = re.hasTrailingPathSeparator.bind(re);
re.removeTrailingPathSeparator.bind(re);
re.addTrailingPathSeparator.bind(re);
var Ao;
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
})(Ao || (Ao = {}));
var Eo;
(function(e) {
  e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(Eo || (Eo = {}));
var Ro;
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
})(Ro || (Ro = {}));
var Ye;
(function(e) {
  e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(Ye || (Ye = {}));
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
    this._state = Ye.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new We(), queueMicrotask(async () => {
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
          if (this._state === Ye.DoneError)
            throw this._error;
          if (t < this._results.length)
            return { done: !1, value: this._results[t++] };
          if (this._state === Ye.DoneOK)
            return { done: !0, value: void 0 };
          await pr.toPromise(this._onStateChanged.event);
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
    this._state === Ye.Initial && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === Ye.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === Ye.Initial && (this._state = Ye.DoneOK, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === Ye.Initial && (this._state = Ye.DoneError, this._error = t, this._onStateChanged.fire());
  }
};
Se.EMPTY = Se.fromArray([]);
let To = Se;
class Hf {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, n) {
    t = Gt(t);
    const r = this.values, i = this.prefixSum, s = n.length;
    return s === 0 ? !1 : (this.values = new Uint32Array(r.length + s), this.values.set(r.subarray(0, t), 0), this.values.set(r.subarray(t), t + s), this.values.set(n, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  setValue(t, n) {
    return t = Gt(t), n = Gt(n), this.values[t] === n ? !1 : (this.values[t] = n, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
  }
  removeValues(t, n) {
    t = Gt(t), n = Gt(n);
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
    return t < 0 ? 0 : (t = Gt(t), this._getPrefixSum(t));
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
    return new Wf(i, t - a);
  }
}
class Wf {
  constructor(t, n) {
    this.index = t, this.remainder = n, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = n;
  }
}
class jf {
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
      this._lineStarts = new Hf(r);
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
    const r = Zl(n);
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
const Gf = "workerTextModelSync";
class zf {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(Gf, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new Xf(Oe.parse(t.url), t.lines, t.EOL, t.versionId);
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
class Xf extends jf {
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
    const r = Qi(t.column, uu(n), this._lines[t.lineNumber - 1], 0);
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
class _u {
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
        const f = i[0];
        if (!f || f.replaceRange.start + a + f.getNewLength() >= l.replaceRange.start)
          break;
        i.shift(), s.push(f), a += f.getNewLength() - f.replaceRange.length;
      }
      const o = a;
      let u, h;
      for (; ; ) {
        const f = i[0];
        if (!f || f.replaceRange.start + a > l.replaceRange.endExclusive)
          break;
        u || (u = f), h = f, i.shift(), a += f.getNewLength() - f.replaceRange.length;
      }
      if (!u)
        s.push(l.delta(-a));
      else {
        const f = Math.min(u.replaceRange.start, l.replaceRange.start - o), m = l.replaceRange.start - (u.replaceRange.start + o);
        if (m > 0) {
          const _ = u.slice(W.emptyAt(f), new W(0, m));
          s.push(_);
        }
        if (!h)
          throw new he("Invariant violation: lastIntersecting is undefined");
        const p = h.replaceRange.endExclusive + a - l.replaceRange.endExclusive;
        if (p > 0) {
          const _ = h.slice(W.ofStartAndLength(h.replaceRange.endExclusive, 0), new W(
            h.getNewLength() - p,
            h.getNewLength()
          ));
          i.unshift(_), a -= _.getNewLength() - _.replaceRange.length;
        }
        const g = new W(f, l.replaceRange.endExclusive - a), d = l.slice(g, new W(0, l.getNewLength()));
        s.push(d);
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
    return Ku(this.replacements, (t) => t.getLengthDelta());
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
class Jf {
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
const Bt = class Bt extends _u {
  static create(t) {
    return new Bt(t);
  }
  static single(t) {
    return new Bt([t]);
  }
  _createNew(t) {
    return new Bt(t);
  }
};
Bt.empty = new Bt([]);
let ko = Bt;
class wu extends _u {
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
    return new it(n);
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
    return new it(r);
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
    return new it(n);
  }
  normalizeEOL(t) {
    return new it(this.replacements.map((n) => n.normalizeEOL(t)));
  }
  normalizeOnSource(t) {
    const n = this.apply(t), i = _e.replace(W.ofLength(t.length), n).removeCommonSuffixAndPrefix(t);
    return i.isEmpty ? it.empty : i.toEdit();
  }
  removeCommonSuffixAndPrefix(t) {
    return this._createNew(this.replacements.map((n) => n.removeCommonSuffixAndPrefix(t))).normalize();
  }
  applyOnText(t) {
    return new zn(this.apply(t.value));
  }
  mapData(t) {
    return new yi(this.replacements.map((n) => new st(n.replaceRange, n.newText, t(n))));
  }
}
class vu extends Jf {
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
    const n = t.substring(this.replaceRange.start, this.replaceRange.endExclusive), r = br(n, this.newText), i = Math.min(n.length - r, this.newText.length - r, _r(n, this.newText)), s = new W(
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
    const n = this.replaceRange.substring(t), r = br(n, this.newText);
    return r === 0 ? this : this.slice(this.replaceRange.deltaStart(r), new W(r, this.newText.length));
  }
  removeCommonSuffix(t) {
    const n = this.replaceRange.substring(t), r = _r(n, this.newText);
    return r === 0 ? this : this.slice(this.replaceRange.deltaEnd(-r), new W(0, this.newText.length - r));
  }
  toEdit() {
    return new it([this]);
  }
  toJson() {
    return {
      txt: this.newText,
      pos: this.replaceRange.start,
      len: this.replaceRange.length
    };
  }
}
const Me = class Me extends wu {
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
let it = Me;
class _e extends vu {
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
const Qe = class Qe extends wu {
  static create(t) {
    return new Qe(t);
  }
  static single(t) {
    return new Qe([t]);
  }
  static replace(t, n, r) {
    return new Qe([new st(t, n, r)]);
  }
  static insert(t, n, r) {
    return new Qe([new st(W.emptyAt(t), n, r)]);
  }
  static delete(t, n) {
    return new Qe([new st(t, "", n)]);
  }
  static compose(t) {
    if (t.length === 0)
      return Qe.empty;
    let n = t[0];
    for (let r = 1; r < t.length; r++)
      n = n.compose(t[r]);
    return n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new Qe(t);
  }
  toStringEdit() {
    return new it(this.replacements.map((t) => new _e(t.replaceRange, t.newText)));
  }
};
Qe.empty = new Qe([]);
let yi = Qe;
class st extends vu {
  static insert(t, n, r) {
    return new st(W.emptyAt(t), n, r);
  }
  static replace(t, n, r) {
    return new st(t, n, r);
  }
  static delete(t, n) {
    return new st(t, "", n);
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
      return new st(
        this.replaceRange.joinRightTouching(t.replaceRange),
        this.newText + t.newText,
        n
      );
  }
  slice(t, n) {
    return new st(
      t,
      n ? n.substring(this.newText) : this.newText,
      this.data
    );
  }
}
K1({
  StringEdit: it,
  StringReplacement: _e,
  TextReplacement: xe,
  TextEdit: Ki,
  TextLength: Mt
});
const Tt = class Tt {
  constructor(t = null) {
    this._foreignModule = t, this._workerTextModelSyncServer = new zf();
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
    return i ? Y1.computeUnicodeHighlights(i, n, r) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(t, n) {
    const r = this._getModel(t);
    return r ? kf(r, n) : [];
  }
  async $computeDiff(t, n, r, i) {
    const s = this._getModel(t), a = this._getModel(n);
    return !s || !a ? null : Tt.computeDiff(s, a, r, i);
  }
  static computeDiff(t, n, r, i) {
    const s = i === "advanced" ? An.getDefault() : An.getLegacy(), a = t.getLinesContent(), l = n.getLinesContent(), o = s.computeDiff(a, l, r), u = o.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
    function h(f) {
      return f.map(
        (m) => {
          var p;
          return [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, (p = m.innerChanges) == null ? void 0 : p.map((g) => [
            g.originalRange.startLineNumber,
            g.originalRange.startColumn,
            g.originalRange.endLineNumber,
            g.originalRange.endColumn,
            g.modifiedRange.startLineNumber,
            g.modifiedRange.startColumn,
            g.modifiedRange.endLineNumber,
            g.modifiedRange.endColumn
          ])];
        }
      );
    }
    return {
      identical: u,
      quitEarly: o.hitTimeout,
      changes: h(o.changes),
      moves: o.moves.map((f) => [
        f.lineRangeMapping.original.startLineNumber,
        f.lineRangeMapping.original.endLineNumberExclusive,
        f.lineRangeMapping.modified.startLineNumber,
        f.lineRangeMapping.modified.endLineNumberExclusive,
        h(f.changes)
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
    return new gu(a, l, {
      shouldComputeCharChanges: !1,
      shouldPostProcessCharChanges: !1,
      shouldIgnoreTrimWhitespace: r,
      shouldMakePrettyDiff: !0,
      maxComputationTime: 1e3
    }).computeDiff().changes;
  }
  $computeStringDiff(t, n, r, i) {
    const s = i === "advanced" ? An.getDefault() : An.getLegacy(), a = new zn(t), l = a.getLines(), o = new zn(n), u = o.getLines(), h = s.computeDiff(l, u, { ignoreTrimWhitespace: !1, maxComputationTimeMs: r.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), f = ot.toTextEdit(h.changes, o);
    return a.getTransformer().getStringEdit(f).toJson();
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
      const h = o.range ? 0 : 1, f = u.range ? 0 : 1;
      return h - f;
    });
    let l = 0;
    for (let o = 1; o < n.length; o++)
      G.getEndPosition(n[l].range).equals(G.getStartPosition(n[o].range)) ? (n[l].range = G.fromPositions(G.getStartPosition(n[l].range), G.getEndPosition(n[o].range)), n[l].text += n[o].text) : (l++, n[l] = n[o]);
    n.length = l + 1;
    for (let { range: o, text: u, eol: h } of n) {
      if (typeof h == "number" && (a = h), G.isEmpty(o) && !u)
        continue;
      const f = i.getValueInRange(o);
      if (u = u.replace(/\r\n|\n|\r/g, i.eol), f === u)
        continue;
      if (Math.max(u.length, f.length) > Tt._diffLimit) {
        s.push({ range: o, text: u });
        continue;
      }
      const m = n1(f, u, r), p = i.offsetAt(G.lift(o).getStartPosition());
      for (const g of m) {
        const d = i.positionAt(p + g.originalStart), _ = i.positionAt(p + g.originalStart + g.originalLength), y = {
          text: u.substr(g.modifiedStart, g.modifiedLength),
          range: { startLineNumber: d.lineNumber, startColumn: d.column, endLineNumber: _.lineNumber, endColumn: _.column }
        };
        i.getValueInRange(y.range) !== y.text && s.push(y);
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
      let d = function(y, x) {
        return new ee(
          y.lineNumber + x.lineNumber - 1,
          x.lineNumber === 1 ? y.column + x.column - 1 : x.column
        );
      }, _ = function(y, x) {
        const b = [];
        for (let A = x.startLineNumber; A <= x.endLineNumber; A++) {
          const N = y[A - 1];
          A === x.startLineNumber && A === x.endLineNumber ? b.push(N.substring(x.startColumn - 1, x.endColumn - 1)) : A === x.startLineNumber ? b.push(N.substring(x.startColumn - 1)) : A === x.endLineNumber ? b.push(N.substring(0, x.endColumn - 1)) : b.push(N);
        }
        return b;
      };
      if (typeof u == "number" && (a = u), G.isEmpty(l) && !o)
        continue;
      const h = i.getValueInRange(l);
      if (o = o.replace(/\r\n|\n|\r/g, i.eol), h === o)
        continue;
      if (Math.max(o.length, h.length) > Tt._diffLimit) {
        s.push({ range: l, text: o });
        continue;
      }
      const f = h.split(/\r\n|\n|\r/), m = o.split(/\r\n|\n|\r/), p = An.getDefault().computeDiff(f, m, r), g = G.lift(l).getStartPosition();
      for (const y of p.changes)
        if (y.innerChanges)
          for (const x of y.innerChanges)
            s.push({
              range: G.fromPositions(d(g, x.originalRange.getStartPosition()), d(g, x.originalRange.getEndPosition())),
              text: _(m, x.modifiedRange).join(i.eol)
            });
        else
          throw new he("The experimental diff algorithm always produces inner changes");
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(t) {
    const n = this._getModel(t);
    return n ? o1(n) : null;
  }
  async $computeDefaultDocumentColors(t) {
    const n = this._getModel(t);
    return n ? Ef(n) : null;
  }
  async $textualSuggest(t, n, r, i) {
    const s = new Vr(), a = new RegExp(r, i), l = /* @__PURE__ */ new Set();
    e: for (const o of t) {
      const u = this._getModel(o);
      if (u) {
        for (const h of u.words(a))
          if (!(h === n || !isNaN(Number(h))) && (l.add(h), l.size > Tt._suggestionsLimit))
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
        let f = l[h.word];
        f || (f = [], l[h.word] = f), f.push({
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
    return si.INSTANCE.navigateValueSet(n, o, u, h, r);
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
Tt._diffLimit = 1e5, Tt._suggestionsLimit = 1e4;
let Rr = Tt;
typeof importScripts == "function" && (globalThis.monaco = $1());
e1(() => new Rr(null));
const Vn = class Vn {
  static getChannel(t) {
    return t.getChannel(Vn.CHANNEL_NAME);
  }
  static setChannel(t, n) {
    t.setChannel(Vn.CHANNEL_NAME, n);
  }
};
Vn.CHANNEL_NAME = "editorWorkerHost";
let Li = Vn;
function Yf(e) {
  let t;
  const n = nu((r) => {
    const i = Li.getChannel(r), a = {
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
    return t = e(a), new Rr(t);
  });
  return t;
}
function Qf(e) {
  Yf((t) => {
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
function es(e, t = !1) {
  const n = e.length;
  let r = 0, i = "", s = 0, a = 16, l = 0, o = 0, u = 0, h = 0, f = 0;
  function m(b, A) {
    let N = 0, S = 0;
    for (; N < b; ) {
      let L = e.charCodeAt(r);
      if (L >= 48 && L <= 57)
        S = S * 16 + L - 48;
      else if (L >= 65 && L <= 70)
        S = S * 16 + L - 65 + 10;
      else if (L >= 97 && L <= 102)
        S = S * 16 + L - 97 + 10;
      else
        break;
      r++, N++;
    }
    return N < b && (S = -1), S;
  }
  function p(b) {
    r = b, i = "", s = 0, a = 16, f = 0;
  }
  function g() {
    let b = r;
    if (e.charCodeAt(r) === 48)
      r++;
    else
      for (r++; r < e.length && Zt(e.charCodeAt(r)); )
        r++;
    if (r < e.length && e.charCodeAt(r) === 46)
      if (r++, r < e.length && Zt(e.charCodeAt(r)))
        for (r++; r < e.length && Zt(e.charCodeAt(r)); )
          r++;
      else
        return f = 3, e.substring(b, r);
    let A = r;
    if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101))
      if (r++, (r < e.length && e.charCodeAt(r) === 43 || e.charCodeAt(r) === 45) && r++, r < e.length && Zt(e.charCodeAt(r))) {
        for (r++; r < e.length && Zt(e.charCodeAt(r)); )
          r++;
        A = r;
      } else
        f = 3;
    return e.substring(b, A);
  }
  function d() {
    let b = "", A = r;
    for (; ; ) {
      if (r >= n) {
        b += e.substring(A, r), f = 2;
        break;
      }
      const N = e.charCodeAt(r);
      if (N === 34) {
        b += e.substring(A, r), r++;
        break;
      }
      if (N === 92) {
        if (b += e.substring(A, r), r++, r >= n) {
          f = 2;
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
            const L = m(4);
            L >= 0 ? b += String.fromCharCode(L) : f = 4;
            break;
          default:
            f = 5;
        }
        A = r;
        continue;
      }
      if (N >= 0 && N <= 31)
        if (Tn(N)) {
          b += e.substring(A, r), f = 2;
          break;
        } else
          f = 6;
      r++;
    }
    return b;
  }
  function _() {
    if (i = "", f = 0, s = r, o = l, h = u, r >= n)
      return s = n, a = 17;
    let b = e.charCodeAt(r);
    if (Gr(b)) {
      do
        r++, i += String.fromCharCode(b), b = e.charCodeAt(r);
      while (Gr(b));
      return a = 15;
    }
    if (Tn(b))
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
        return r++, i = d(), a = 10;
      case 47:
        const A = r - 1;
        if (e.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !Tn(e.charCodeAt(r)); )
            r++;
          return i = e.substring(A, r), a = 12;
        }
        if (e.charCodeAt(r + 1) === 42) {
          r += 2;
          const N = n - 1;
          let S = !1;
          for (; r < N; ) {
            const L = e.charCodeAt(r);
            if (L === 42 && e.charCodeAt(r + 1) === 47) {
              r += 2, S = !0;
              break;
            }
            r++, Tn(L) && (L === 13 && e.charCodeAt(r) === 10 && r++, l++, u = r);
          }
          return S || (r++, f = 1), i = e.substring(A, r), a = 13;
        }
        return i += String.fromCharCode(b), r++, a = 16;
      case 45:
        if (i += String.fromCharCode(b), r++, r === n || !Zt(e.charCodeAt(r)))
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
        return i += g(), a = 11;
      default:
        for (; r < n && y(b); )
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
  function y(b) {
    if (Gr(b) || Tn(b))
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
  function x() {
    let b;
    do
      b = _();
    while (b >= 12 && b <= 15);
    return b;
  }
  return {
    setPosition: p,
    getPosition: () => r,
    scan: t ? x : _,
    getToken: () => a,
    getTokenValue: () => i,
    getTokenOffset: () => s,
    getTokenLength: () => r - s,
    getTokenStartLine: () => o,
    getTokenStartCharacter: () => s - h,
    getTokenError: () => f
  };
}
function Gr(e) {
  return e === 32 || e === 9;
}
function Tn(e) {
  return e === 10 || e === 13;
}
function Zt(e) {
  return e >= 48 && e <= 57;
}
var So;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(So || (So = {}));
var He = new Array(20).fill(0).map((e, t) => " ".repeat(t)), Kt = 200, Mo = {
  " ": {
    "\n": new Array(Kt).fill(0).map((e, t) => `
` + " ".repeat(t)),
    "\r": new Array(Kt).fill(0).map((e, t) => "\r" + " ".repeat(t)),
    "\r\n": new Array(Kt).fill(0).map((e, t) => `\r
` + " ".repeat(t))
  },
  "	": {
    "\n": new Array(Kt).fill(0).map((e, t) => `
` + "	".repeat(t)),
    "\r": new Array(Kt).fill(0).map((e, t) => "\r" + "	".repeat(t)),
    "\r\n": new Array(Kt).fill(0).map((e, t) => `\r
` + "	".repeat(t))
  }
}, Zf = [`
`, "\r", `\r
`];
function Kf(e, t, n) {
  let r, i, s, a, l;
  if (t) {
    for (a = t.offset, l = a + t.length, s = a; s > 0 && !Io(e, s - 1); )
      s--;
    let N = l;
    for (; N < e.length && !Io(e, N); )
      N++;
    i = e.substring(s, N), r = Cf(i, n);
  } else
    i = e, r = 0, s = 0, a = 0, l = e.length;
  const o = eh(n, e), u = Zf.includes(o);
  let h = 0, f = 0, m;
  n.insertSpaces ? m = He[n.tabSize || 4] ?? Ct(He[1], n.tabSize || 4) : m = "	";
  const p = m === "	" ? "	" : " ";
  let g = es(i, !1), d = !1;
  function _() {
    if (h > 1)
      return Ct(o, h) + Ct(m, r + f);
    const N = m.length * (r + f);
    return !u || N > Mo[p][o].length ? o + Ct(m, r + f) : N <= 0 ? o : Mo[p][o][N];
  }
  function y() {
    let N = g.scan();
    for (h = 0; N === 15 || N === 14; )
      N === 14 && n.keepLines ? h += 1 : N === 14 && (h = 1), N = g.scan();
    return d = N === 16 || g.getTokenError() !== 0, N;
  }
  const x = [];
  function b(N, S, L) {
    !d && (!t || S < l && L > a) && e.substring(S, L) !== N && x.push({ offset: S, length: L - S, content: N });
  }
  let A = y();
  if (n.keepLines && h > 0 && b(Ct(o, h), 0, 0), A !== 17) {
    let N = g.getTokenOffset() + s, S = m.length * r < 20 && n.insertSpaces ? He[m.length * r] : Ct(m, r);
    b(S, s, N);
  }
  for (; A !== 17; ) {
    let N = g.getTokenOffset() + g.getTokenLength() + s, S = y(), L = "", R = !1;
    for (; h === 0 && (S === 12 || S === 13); ) {
      let q = g.getTokenOffset() + s;
      b(He[1], N, q), N = g.getTokenOffset() + g.getTokenLength() + s, R = S === 12, L = R ? _() : "", S = y();
    }
    if (S === 2)
      A !== 1 && f--, n.keepLines && h > 0 || !n.keepLines && A !== 1 ? L = _() : n.keepLines && (L = He[1]);
    else if (S === 4)
      A !== 3 && f--, n.keepLines && h > 0 || !n.keepLines && A !== 3 ? L = _() : n.keepLines && (L = He[1]);
    else {
      switch (A) {
        case 3:
        case 1:
          f++, n.keepLines && h > 0 || !n.keepLines ? L = _() : L = He[1];
          break;
        case 5:
          n.keepLines && h > 0 || !n.keepLines ? L = _() : L = He[1];
          break;
        case 12:
          L = _();
          break;
        case 13:
          h > 0 ? L = _() : R || (L = He[1]);
          break;
        case 6:
          n.keepLines && h > 0 ? L = _() : R || (L = He[1]);
          break;
        case 10:
          n.keepLines && h > 0 ? L = _() : S === 6 && !R && (L = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          n.keepLines && h > 0 ? L = _() : (S === 12 || S === 13) && !R ? L = He[1] : S !== 5 && S !== 17 && (d = !0);
          break;
        case 16:
          d = !0;
          break;
      }
      h > 0 && (S === 12 || S === 13) && (L = _());
    }
    S === 17 && (n.keepLines && h > 0 ? L = _() : L = n.insertFinalNewline ? o : "");
    const F = g.getTokenOffset() + s;
    b(L, N, F), A = S;
  }
  return x;
}
function Ct(e, t) {
  let n = "";
  for (let r = 0; r < t; r++)
    n += e;
  return n;
}
function Cf(e, t) {
  let n = 0, r = 0;
  const i = t.tabSize || 4;
  for (; n < e.length; ) {
    let s = e.charAt(n);
    if (s === He[1])
      r++;
    else if (s === "	")
      r += i;
    else
      break;
    n++;
  }
  return Math.floor(r / i);
}
function eh(e, t) {
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
function Io(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var Tr;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(Tr || (Tr = {}));
function th(e, t = [], n = Tr.DEFAULT) {
  let r = null, i = [];
  const s = [];
  function a(o) {
    Array.isArray(i) ? i.push(o) : r !== null && (i[r] = o);
  }
  return rh(e, {
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
function yu(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = yu(e.parent);
  if (e.parent.type === "property") {
    const n = e.parent.children[0].value;
    t.push(n);
  } else if (e.parent.type === "array") {
    const n = e.parent.children.indexOf(e);
    n !== -1 && t.push(n);
  }
  return t;
}
function Ni(e) {
  switch (e.type) {
    case "array":
      return e.children.map(Ni);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let n of e.children) {
        const r = n.children[1];
        r && (t[n.children[0].value] = Ni(r));
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
function nh(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function Lu(e, t, n = !1) {
  if (nh(e, t, n)) {
    const r = e.children;
    if (Array.isArray(r))
      for (let i = 0; i < r.length && r[i].offset <= t; i++) {
        const s = Lu(r[i], t, n);
        if (s)
          return s;
      }
    return e;
  }
}
function rh(e, t, n = Tr.DEFAULT) {
  const r = es(e, !1), i = [];
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
  const u = a(t.onObjectBegin), h = o(t.onObjectProperty), f = s(t.onObjectEnd), m = a(t.onArrayBegin), p = s(t.onArrayEnd), g = o(t.onLiteralValue), d = l(t.onSeparator), _ = s(t.onComment), y = l(t.onError), x = n && n.disallowComments, b = n && n.allowTrailingComma;
  function A() {
    for (; ; ) {
      const k = r.scan();
      switch (r.getTokenError()) {
        case 4:
          N(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          N(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          N(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          x || N(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          N(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          N(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (k) {
        case 12:
        case 13:
          x ? N(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : _();
          break;
        case 16:
          N(
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
  function N(k, I = [], P = []) {
    if (y(k), I.length + P.length > 0) {
      let V = r.getToken();
      for (; V !== 17; ) {
        if (I.indexOf(V) !== -1) {
          A();
          break;
        } else if (P.indexOf(V) !== -1)
          break;
        V = A();
      }
    }
  }
  function S(k) {
    const I = r.getTokenValue();
    return k ? g(I) : (h(I), i.push(I)), A(), !0;
  }
  function L() {
    switch (r.getToken()) {
      case 11:
        const k = r.getTokenValue();
        let I = Number(k);
        isNaN(I) && (N(
          2
          /* ParseErrorCode.InvalidNumberFormat */
        ), I = 0), g(I);
        break;
      case 7:
        g(null);
        break;
      case 8:
        g(!0);
        break;
      case 9:
        g(!1);
        break;
      default:
        return !1;
    }
    return A(), !0;
  }
  function R() {
    return r.getToken() !== 10 ? (N(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (S(!1), r.getToken() === 6 ? (d(":"), A(), U() || N(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : N(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), i.pop(), !0);
  }
  function F() {
    u(), A();
    let k = !1;
    for (; r.getToken() !== 2 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (k || N(4, [], []), d(","), A(), r.getToken() === 2 && b)
          break;
      } else k && N(6, [], []);
      R() || N(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), k = !0;
    }
    return f(), r.getToken() !== 2 ? N(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : A(), !0;
  }
  function q() {
    m(), A();
    let k = !0, I = !1;
    for (; r.getToken() !== 4 && r.getToken() !== 17; ) {
      if (r.getToken() === 5) {
        if (I || N(4, [], []), d(","), A(), r.getToken() === 4 && b)
          break;
      } else I && N(6, [], []);
      k ? (i.push(0), k = !1) : i[i.length - 1]++, U() || N(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), I = !0;
    }
    return p(), k || i.pop(), r.getToken() !== 4 ? N(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : A(), !0;
  }
  function U() {
    switch (r.getToken()) {
      case 3:
        return q();
      case 1:
        return F();
      case 10:
        return S(!0);
      default:
        return L();
    }
  }
  return A(), r.getToken() === 17 ? n.allowEmptyContent ? !0 : (N(4, [], []), !1) : U() ? (r.getToken() !== 17 && N(9, [], []), !0) : (N(4, [], []), !1);
}
var qt = es, Po;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Po || (Po = {}));
var Fo;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(Fo || (Fo = {}));
var ih = th, sh = Lu, ah = yu, oh = Ni, Uo;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Uo || (Uo = {}));
function lh(e, t, n) {
  return Kf(e, t, n);
}
function mn(e, t) {
  if (e === t)
    return !0;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t))
    return !1;
  let n, r;
  if (Array.isArray(e)) {
    if (e.length !== t.length)
      return !1;
    for (n = 0; n < e.length; n++)
      if (!mn(e[n], t[n]))
        return !1;
  } else {
    const i = [];
    for (r in e)
      i.push(r);
    i.sort();
    const s = [];
    for (r in t)
      s.push(r);
    if (s.sort(), !mn(i, s))
      return !1;
    for (n = 0; n < i.length; n++)
      if (!mn(e[i[n]], t[i[n]]))
        return !1;
  }
  return !0;
}
function Ee(e) {
  return typeof e == "number";
}
function Je(e) {
  return typeof e < "u";
}
function at(e) {
  return typeof e == "boolean";
}
function Nu(e) {
  return typeof e == "string";
}
function Rt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function uh(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Jn(e, t) {
  const n = e.length - t.length;
  return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : !1;
}
function kr(e) {
  let t = "";
  uh(e, "(?i)") && (e = e.substring(4), t = "i");
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
function Do(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    t++;
    const r = e.charCodeAt(n);
    55296 <= r && r <= 56319 && n++;
  }
  return t;
}
var Oo;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(Oo || (Oo = {}));
var xi;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(xi || (xi = {}));
var Bo;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Bo || (Bo = {}));
var Sr;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Sr || (Sr = {}));
var ce;
(function(e) {
  function t(r, i) {
    return r === Number.MAX_VALUE && (r = Sr.MAX_VALUE), i === Number.MAX_VALUE && (i = Sr.MAX_VALUE), { line: r, character: i };
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
var vn;
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
})(vn || (vn = {}));
var Vo;
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
})(Vo || (Vo = {}));
var Ai;
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
})(Ai || (Ai = {}));
var $o;
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
    return M.objectLiteral(i) && K.is(i.range) && Ai.is(i.color);
  }
  e.is = n;
})($o || ($o = {}));
var qo;
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
    return M.objectLiteral(i) && M.string(i.label) && (M.undefined(i.textEdit) || ut.is(i)) && (M.undefined(i.additionalTextEdits) || M.typedArray(i.additionalTextEdits, ut.is));
  }
  e.is = n;
})(qo || (qo = {}));
var On;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(On || (On = {}));
var Ho;
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
})(Ho || (Ho = {}));
var Ei;
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
    return M.defined(i) && vn.is(i.location) && M.string(i.message);
  }
  e.is = n;
})(Ei || (Ei = {}));
var qe;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(qe || (qe = {}));
var Wo;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(Wo || (Wo = {}));
var jo;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(r) && M.string(r.href);
  }
  e.is = t;
})(jo || (jo = {}));
var _t;
(function(e) {
  function t(r, i, s, a, l, o) {
    let u = { range: r, message: i };
    return M.defined(s) && (u.severity = s), M.defined(a) && (u.code = a), M.defined(l) && (u.source = l), M.defined(o) && (u.relatedInformation = o), u;
  }
  e.create = t;
  function n(r) {
    var i;
    let s = r;
    return M.defined(s) && K.is(s.range) && M.string(s.message) && (M.number(s.severity) || M.undefined(s.severity)) && (M.integer(s.code) || M.string(s.code) || M.undefined(s.code)) && (M.undefined(s.codeDescription) || M.string((i = s.codeDescription) === null || i === void 0 ? void 0 : i.href)) && (M.string(s.source) || M.undefined(s.source)) && (M.undefined(s.relatedInformation) || M.typedArray(s.relatedInformation, Ei.is));
  }
  e.is = n;
})(_t || (_t = {}));
var yn;
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
})(yn || (yn = {}));
var ut;
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
})(ut || (ut = {}));
var Ri;
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
})(Ri || (Ri = {}));
var Ln;
(function(e) {
  function t(n) {
    const r = n;
    return M.string(r);
  }
  e.is = t;
})(Ln || (Ln = {}));
var Go;
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
    return ut.is(a) && (Ri.is(a.annotationId) || Ln.is(a.annotationId));
  }
  e.is = i;
})(Go || (Go = {}));
var Ti;
(function(e) {
  function t(r, i) {
    return { textDocument: r, edits: i };
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && Pi.is(i.textDocument) && Array.isArray(i.edits);
  }
  e.is = n;
})(Ti || (Ti = {}));
var ki;
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
    return i && i.kind === "create" && M.string(i.uri) && (i.options === void 0 || (i.options.overwrite === void 0 || M.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || M.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ln.is(i.annotationId));
  }
  e.is = n;
})(ki || (ki = {}));
var Si;
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
    return i && i.kind === "rename" && M.string(i.oldUri) && M.string(i.newUri) && (i.options === void 0 || (i.options.overwrite === void 0 || M.boolean(i.options.overwrite)) && (i.options.ignoreIfExists === void 0 || M.boolean(i.options.ignoreIfExists))) && (i.annotationId === void 0 || Ln.is(i.annotationId));
  }
  e.is = n;
})(Si || (Si = {}));
var Mi;
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
    return i && i.kind === "delete" && M.string(i.uri) && (i.options === void 0 || (i.options.recursive === void 0 || M.boolean(i.options.recursive)) && (i.options.ignoreIfNotExists === void 0 || M.boolean(i.options.ignoreIfNotExists))) && (i.annotationId === void 0 || Ln.is(i.annotationId));
  }
  e.is = n;
})(Mi || (Mi = {}));
var Ii;
(function(e) {
  function t(n) {
    let r = n;
    return r && (r.changes !== void 0 || r.documentChanges !== void 0) && (r.documentChanges === void 0 || r.documentChanges.every((i) => M.string(i.kind) ? ki.is(i) || Si.is(i) || Mi.is(i) : Ti.is(i)));
  }
  e.is = t;
})(Ii || (Ii = {}));
var zo;
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
})(zo || (zo = {}));
var Xo;
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
})(Xo || (Xo = {}));
var Pi;
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
})(Pi || (Pi = {}));
var Jo;
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
})(Jo || (Jo = {}));
var Wt;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
  function t(n) {
    const r = n;
    return r === e.PlainText || r === e.Markdown;
  }
  e.is = t;
})(Wt || (Wt = {}));
var Yn;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(n) && Wt.is(r.kind) && M.string(r.value);
  }
  e.is = t;
})(Yn || (Yn = {}));
var $e;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})($e || ($e = {}));
var de;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(de || (de = {}));
var Yo;
(function(e) {
  e.Deprecated = 1;
})(Yo || (Yo = {}));
var Qo;
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
})(Qo || (Qo = {}));
var Zo;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(Zo || (Zo = {}));
var Ko;
(function(e) {
  function t(n) {
    const r = n;
    return r && (M.string(r.detail) || r.detail === void 0) && (M.string(r.description) || r.description === void 0);
  }
  e.is = t;
})(Ko || (Ko = {}));
var Fi;
(function(e) {
  function t(n) {
    return { label: n };
  }
  e.create = t;
})(Fi || (Fi = {}));
var Co;
(function(e) {
  function t(n, r) {
    return { items: n || [], isIncomplete: !!r };
  }
  e.create = t;
})(Co || (Co = {}));
var Mr;
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
})(Mr || (Mr = {}));
var el;
(function(e) {
  function t(n) {
    let r = n;
    return !!r && M.objectLiteral(r) && (Yn.is(r.contents) || Mr.is(r.contents) || M.typedArray(r.contents, Mr.is)) && (n.range === void 0 || K.is(n.range));
  }
  e.is = t;
})(el || (el = {}));
var tl;
(function(e) {
  function t(n, r) {
    return r ? { label: n, documentation: r } : { label: n };
  }
  e.create = t;
})(tl || (tl = {}));
var nl;
(function(e) {
  function t(n, r, ...i) {
    let s = { label: n };
    return M.defined(r) && (s.documentation = r), M.defined(i) ? s.parameters = i : s.parameters = [], s;
  }
  e.create = t;
})(nl || (nl = {}));
var rl;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(rl || (rl = {}));
var il;
(function(e) {
  function t(n, r) {
    let i = { range: n };
    return M.number(r) && (i.kind = r), i;
  }
  e.create = t;
})(il || (il = {}));
var tt;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(tt || (tt = {}));
var sl;
(function(e) {
  e.Deprecated = 1;
})(sl || (sl = {}));
var al;
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
})(al || (al = {}));
var ol;
(function(e) {
  function t(n, r, i, s) {
    return s !== void 0 ? { name: n, kind: r, location: { uri: i, range: s } } : { name: n, kind: r, location: { uri: i } };
  }
  e.create = t;
})(ol || (ol = {}));
var ll;
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
})(ll || (ll = {}));
var ul;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(ul || (ul = {}));
var Ir;
(function(e) {
  e.Invoked = 1, e.Automatic = 2;
})(Ir || (Ir = {}));
var cl;
(function(e) {
  function t(r, i, s) {
    let a = { diagnostics: r };
    return i != null && (a.only = i), s != null && (a.triggerKind = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && M.typedArray(i.diagnostics, _t.is) && (i.only === void 0 || M.typedArray(i.only, M.string)) && (i.triggerKind === void 0 || i.triggerKind === Ir.Invoked || i.triggerKind === Ir.Automatic);
  }
  e.is = n;
})(cl || (cl = {}));
var fl;
(function(e) {
  function t(r, i, s) {
    let a = { title: r }, l = !0;
    return typeof i == "string" ? (l = !1, a.kind = i) : yn.is(i) ? a.command = i : a.edit = i, l && s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return i && M.string(i.title) && (i.diagnostics === void 0 || M.typedArray(i.diagnostics, _t.is)) && (i.kind === void 0 || M.string(i.kind)) && (i.edit !== void 0 || i.command !== void 0) && (i.command === void 0 || yn.is(i.command)) && (i.isPreferred === void 0 || M.boolean(i.isPreferred)) && (i.edit === void 0 || Ii.is(i.edit));
  }
  e.is = n;
})(fl || (fl = {}));
var hl;
(function(e) {
  function t(r, i) {
    let s = { range: r };
    return M.defined(i) && (s.data = i), s;
  }
  e.create = t;
  function n(r) {
    let i = r;
    return M.defined(i) && K.is(i.range) && (M.undefined(i.command) || yn.is(i.command));
  }
  e.is = n;
})(hl || (hl = {}));
var ml;
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
})(ml || (ml = {}));
var gl;
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
})(gl || (gl = {}));
var Pr;
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
})(Pr || (Pr = {}));
var pl;
(function(e) {
  e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
})(pl || (pl = {}));
var dl;
(function(e) {
  e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
})(dl || (dl = {}));
var bl;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(r) && (r.resultId === void 0 || typeof r.resultId == "string") && Array.isArray(r.data) && (r.data.length === 0 || typeof r.data[0] == "number");
  }
  e.is = t;
})(bl || (bl = {}));
var _l;
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
})(_l || (_l = {}));
var wl;
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
})(wl || (wl = {}));
var vl;
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
})(vl || (vl = {}));
var yl;
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
})(yl || (yl = {}));
var Ui;
(function(e) {
  e.Type = 1, e.Parameter = 2;
  function t(n) {
    return n === 1 || n === 2;
  }
  e.is = t;
})(Ui || (Ui = {}));
var Di;
(function(e) {
  function t(r) {
    return { value: r };
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && (i.tooltip === void 0 || M.string(i.tooltip) || Yn.is(i.tooltip)) && (i.location === void 0 || vn.is(i.location)) && (i.command === void 0 || yn.is(i.command));
  }
  e.is = n;
})(Di || (Di = {}));
var Ll;
(function(e) {
  function t(r, i, s) {
    const a = { position: r, label: i };
    return s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(r) {
    const i = r;
    return M.objectLiteral(i) && ce.is(i.position) && (M.string(i.label) || M.typedArray(i.label, Di.is)) && (i.kind === void 0 || Ui.is(i.kind)) && i.textEdits === void 0 || M.typedArray(i.textEdits, ut.is) && (i.tooltip === void 0 || M.string(i.tooltip) || Yn.is(i.tooltip)) && (i.paddingLeft === void 0 || M.boolean(i.paddingLeft)) && (i.paddingRight === void 0 || M.boolean(i.paddingRight));
  }
  e.is = n;
})(Ll || (Ll = {}));
var Nl;
(function(e) {
  function t(n) {
    return { kind: "snippet", value: n };
  }
  e.createSnippet = t;
})(Nl || (Nl = {}));
var xl;
(function(e) {
  function t(n, r, i, s) {
    return { insertText: n, filterText: r, range: i, command: s };
  }
  e.create = t;
})(xl || (xl = {}));
var Al;
(function(e) {
  function t(n) {
    return { items: n };
  }
  e.create = t;
})(Al || (Al = {}));
var El;
(function(e) {
  e.Invoked = 0, e.Automatic = 1;
})(El || (El = {}));
var Rl;
(function(e) {
  function t(n, r) {
    return { range: n, text: r };
  }
  e.create = t;
})(Rl || (Rl = {}));
var Tl;
(function(e) {
  function t(n, r) {
    return { triggerKind: n, selectedCompletionInfo: r };
  }
  e.create = t;
})(Tl || (Tl = {}));
var kl;
(function(e) {
  function t(n) {
    const r = n;
    return M.objectLiteral(r) && xi.is(r.uri) && M.string(r.name);
  }
  e.is = t;
})(kl || (kl = {}));
var Sl;
(function(e) {
  function t(s, a, l, o) {
    return new ch(s, a, l, o);
  }
  e.create = t;
  function n(s) {
    let a = s;
    return !!(M.defined(a) && M.string(a.uri) && (M.undefined(a.languageId) || M.string(a.languageId)) && M.uinteger(a.lineCount) && M.func(a.getText) && M.func(a.positionAt) && M.func(a.offsetAt));
  }
  e.is = n;
  function r(s, a) {
    let l = s.getText(), o = i(a, (h, f) => {
      let m = h.range.start.line - f.range.start.line;
      return m === 0 ? h.range.start.character - f.range.start.character : m;
    }), u = l.length;
    for (let h = o.length - 1; h >= 0; h--) {
      let f = o[h], m = s.offsetAt(f.range.start), p = s.offsetAt(f.range.end);
      if (p <= u)
        l = l.substring(0, m) + f.newText + l.substring(p, l.length);
      else
        throw new Error("Overlapping edit");
      u = m;
    }
    return l;
  }
  e.applyEdits = r;
  function i(s, a) {
    if (s.length <= 1)
      return s;
    const l = s.length / 2 | 0, o = s.slice(0, l), u = s.slice(l);
    i(o, a), i(u, a);
    let h = 0, f = 0, m = 0;
    for (; h < o.length && f < u.length; )
      a(o[h], u[f]) <= 0 ? s[m++] = o[h++] : s[m++] = u[f++];
    for (; h < o.length; )
      s[m++] = o[h++];
    for (; f < u.length; )
      s[m++] = u[f++];
    return s;
  }
})(Sl || (Sl = {}));
var ch = class {
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
  function n(p) {
    return typeof p < "u";
  }
  e.defined = n;
  function r(p) {
    return typeof p > "u";
  }
  e.undefined = r;
  function i(p) {
    return p === !0 || p === !1;
  }
  e.boolean = i;
  function s(p) {
    return t.call(p) === "[object String]";
  }
  e.string = s;
  function a(p) {
    return t.call(p) === "[object Number]";
  }
  e.number = a;
  function l(p, g, d) {
    return t.call(p) === "[object Number]" && g <= p && p <= d;
  }
  e.numberRange = l;
  function o(p) {
    return t.call(p) === "[object Number]" && -2147483648 <= p && p <= 2147483647;
  }
  e.integer = o;
  function u(p) {
    return t.call(p) === "[object Number]" && 0 <= p && p <= 2147483647;
  }
  e.uinteger = u;
  function h(p) {
    return t.call(p) === "[object Function]";
  }
  e.func = h;
  function f(p) {
    return p !== null && typeof p == "object";
  }
  e.objectLiteral = f;
  function m(p, g) {
    return Array.isArray(p) && p.every(g);
  }
  e.typedArray = m;
})(M || (M = {}));
var Ml = class Oi {
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
      if (Oi.isIncremental(r)) {
        const i = xu(r.range), s = this.offsetAt(i.start), a = this.offsetAt(i.end);
        this._content = this._content.substring(0, s) + r.text + this._content.substring(a, this._content.length);
        const l = Math.max(i.start.line, 0), o = Math.max(i.end.line, 0);
        let u = this._lineOffsets;
        const h = Il(r.text, !1, s);
        if (o - l === h.length)
          for (let m = 0, p = h.length; m < p; m++)
            u[m + l + 1] = h[m];
        else
          h.length < 1e4 ? u.splice(l + 1, o - l, ...h) : this._lineOffsets = u = u.slice(0, l + 1).concat(h, u.slice(o + 1));
        const f = r.text.length - (a - s);
        if (f !== 0)
          for (let m = l + 1 + h.length, p = u.length; m < p; m++)
            u[m] = u[m] + f;
      } else if (Oi.isFull(r))
        this._content = r.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Il(this._content, !0)), this._lineOffsets;
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
}, Ce;
(function(e) {
  function t(i, s, a, l) {
    return new Ml(i, s, a, l);
  }
  e.create = t;
  function n(i, s, a) {
    if (i instanceof Ml)
      return i.update(s, a), i;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  e.update = n;
  function r(i, s) {
    let a = i.getText(), l = Bi(s.map(fh), (h, f) => {
      let m = h.range.start.line - f.range.start.line;
      return m === 0 ? h.range.start.character - f.range.start.character : m;
    }), o = 0;
    const u = [];
    for (const h of l) {
      let f = i.offsetAt(h.range.start);
      if (f < o)
        throw new Error("Overlapping edit");
      f > o && u.push(a.substring(o, f)), h.newText.length && u.push(h.newText), o = i.offsetAt(h.range.end);
    }
    return u.push(a.substr(o)), u.join("");
  }
  e.applyEdits = r;
})(Ce || (Ce = {}));
function Bi(e, t) {
  if (e.length <= 1)
    return e;
  const n = e.length / 2 | 0, r = e.slice(0, n), i = e.slice(n);
  Bi(r, t), Bi(i, t);
  let s = 0, a = 0, l = 0;
  for (; s < r.length && a < i.length; )
    t(r[s], i[a]) <= 0 ? e[l++] = r[s++] : e[l++] = i[a++];
  for (; s < r.length; )
    e[l++] = r[s++];
  for (; a < i.length; )
    e[l++] = i[a++];
  return e;
}
function Il(e, t, n = 0) {
  const r = t ? [n] : [];
  for (let i = 0; i < e.length; i++) {
    let s = e.charCodeAt(i);
    (s === 13 || s === 10) && (s === 13 && i + 1 < e.length && e.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function xu(e) {
  const t = e.start, n = e.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e;
}
function fh(e) {
  const t = xu(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var ne;
(function(e) {
  e[e.Undefined = 0] = "Undefined", e[e.EnumValueMismatch = 1] = "EnumValueMismatch", e[e.Deprecated = 2] = "Deprecated", e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 260] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 262] = "InvalidCharacter", e[e.PropertyExpected = 513] = "PropertyExpected", e[e.CommaExpected = 514] = "CommaExpected", e[e.ColonExpected = 515] = "ColonExpected", e[e.ValueExpected = 516] = "ValueExpected", e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected", e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected", e[e.TrailingComma = 519] = "TrailingComma", e[e.DuplicateKey = 520] = "DuplicateKey", e[e.CommentNotPermitted = 521] = "CommentNotPermitted", e[e.PropertyKeysMustBeDoublequoted = 528] = "PropertyKeysMustBeDoublequoted", e[e.SchemaResolveError = 768] = "SchemaResolveError", e[e.SchemaUnsupportedFeature = 769] = "SchemaUnsupportedFeature";
})(ne || (ne = {}));
var Ke;
(function(e) {
  e[e.v3 = 3] = "v3", e[e.v4 = 4] = "v4", e[e.v6 = 6] = "v6", e[e.v7 = 7] = "v7", e[e.v2019_09 = 19] = "v2019_09", e[e.v2020_12 = 20] = "v2020_12";
})(Ke || (Ke = {}));
var Vi;
(function(e) {
  e.LATEST = {
    textDocument: {
      completion: {
        completionItem: {
          documentationFormat: [Wt.Markdown, Wt.PlainText],
          commitCharactersSupport: !0,
          labelDetailsSupport: !0
        }
      }
    }
  };
})(Vi || (Vi = {}));
function D(...e) {
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
    return D(a, ...s);
  } else
    r = t.message, n = r, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), i = t.args ?? {};
  return mh(r, i);
}
var hh = /{([^}]+)}/g;
function mh(e, t) {
  return Object.keys(t).length === 0 ? e : e.replace(hh, (n, r) => t[r] ?? n);
}
var gh = {
  "color-hex": { errorMessage: D("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."), pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/ },
  "date-time": { errorMessage: D("String is not a RFC3339 date-time."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
  date: { errorMessage: D("String is not a RFC3339 date."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i },
  time: { errorMessage: D("String is not a RFC3339 time."), pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
  email: { errorMessage: D("String is not an e-mail address."), pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/ },
  hostname: { errorMessage: D("String is not a hostname."), pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i },
  ipv4: { errorMessage: D("String is not an IPv4 address."), pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/ },
  ipv6: { errorMessage: D("String is not an IPv6 address."), pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i }
}, jt = class {
  constructor(e, t, n = 0) {
    this.offset = t, this.length = n, this.parent = e;
  }
  get children() {
    return [];
  }
  toString() {
    return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
  }
}, ph = class extends jt {
  constructor(e, t) {
    super(e, t), this.type = "null", this.value = null;
  }
}, Pl = class extends jt {
  constructor(e, t, n) {
    super(e, n), this.type = "boolean", this.value = t;
  }
}, dh = class extends jt {
  constructor(e, t) {
    super(e, t), this.type = "array", this.items = [];
  }
  get children() {
    return this.items;
  }
}, bh = class extends jt {
  constructor(e, t) {
    super(e, t), this.type = "number", this.isInteger = !0, this.value = Number.NaN;
  }
}, zr = class extends jt {
  constructor(e, t, n) {
    super(e, t, n), this.type = "string", this.value = "";
  }
}, _h = class extends jt {
  constructor(e, t, n) {
    super(e, t), this.type = "property", this.colonOffset = -1, this.keyNode = n;
  }
  get children() {
    return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
  }
}, wh = class extends jt {
  constructor(e, t) {
    super(e, t), this.type = "object", this.properties = [];
  }
  get children() {
    return this.properties;
  }
};
function Be(e) {
  return at(e) ? e ? {} : { not: {} } : e;
}
var Fl;
(function(e) {
  e[e.Key = 0] = "Key", e[e.Enum = 1] = "Enum";
})(Fl || (Fl = {}));
var vh = {
  "http://json-schema.org/draft-03/schema#": Ke.v3,
  "http://json-schema.org/draft-04/schema#": Ke.v4,
  "http://json-schema.org/draft-06/schema#": Ke.v6,
  "http://json-schema.org/draft-07/schema#": Ke.v7,
  "https://json-schema.org/draft/2019-09/schema": Ke.v2019_09,
  "https://json-schema.org/draft/2020-12/schema": Ke.v2020_12
}, Ul = class {
  constructor(e) {
    this.schemaDraft = e;
  }
}, yh = class Au {
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
    return (this.focusOffset === -1 || Eu(t, this.focusOffset)) && t !== this.exclude;
  }
  newSub() {
    return new Au(-1, this.exclude);
  }
}, Qn = class {
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
Qn.instance = new Qn();
var Re = class {
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
        t.code === ne.EnumValueMismatch && (t.message = D("Value is not accepted. Valid values: {0}.", this.enumValues.map((n) => JSON.stringify(n)).join(", ")));
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
function Lh(e, t = []) {
  return new Ru(e, t, []);
}
function Ht(e) {
  return oh(e);
}
function $i(e) {
  return ah(e);
}
function Eu(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
var Ru = class {
  constructor(e, t = [], n = []) {
    this.root = e, this.syntaxErrors = t, this.comments = n;
  }
  getNodeFromOffset(e, t = !1) {
    if (this.root)
      return sh(this.root, e, t);
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
  validate(e, t, n = qe.Warning, r) {
    if (this.root && t) {
      const i = new Re();
      return we(this.root, t, i, Qn.instance, new Ul(r ?? Dl(t))), i.problems.map((s) => {
        const a = K.create(e.positionAt(s.location.offset), e.positionAt(s.location.offset + s.location.length));
        return _t.create(a, s.message, s.severity ?? n, s.code);
      });
    }
  }
  getMatchingSchemas(e, t = -1, n) {
    if (this.root && e) {
      const r = new yh(t, n), i = Dl(e), s = new Ul(i);
      return we(this.root, e, new Re(), r, s), r.schemas;
    }
    return [];
  }
};
function Dl(e, t = Ke.v2020_12) {
  let n = e.$schema;
  return n ? vh[n] ?? t : t;
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
    var x;
    function f(b) {
      return s.type === b || b === "integer" && s.type === "number" && s.isInteger;
    }
    if (Array.isArray(t.type) ? t.type.some(f) || n.problems.push({
      location: { offset: s.offset, length: s.length },
      message: t.errorMessage || D("Incorrect type. Expected one of {0}.", t.type.join(", "))
    }) : t.type && (f(t.type) || n.problems.push({
      location: { offset: s.offset, length: s.length },
      message: t.errorMessage || D('Incorrect type. Expected "{0}".', t.type)
    })), Array.isArray(t.allOf))
      for (const b of t.allOf) {
        const A = new Re(), N = r.newSub();
        we(s, Be(b), A, N, i), n.merge(A), r.merge(N);
      }
    const m = Be(t.not);
    if (m) {
      const b = new Re(), A = r.newSub();
      we(s, m, b, A, i), b.hasProblems() || n.problems.push({
        location: { offset: s.offset, length: s.length },
        message: t.errorMessage || D("Matches a schema that is not allowed.")
      });
      for (const N of A.schemas)
        N.inverted = !N.inverted, r.add(N);
    }
    const p = (b, A) => {
      const N = [];
      let S;
      for (const L of b) {
        const R = Be(L), F = new Re(), q = r.newSub();
        if (we(s, R, F, q, i), F.hasProblems() || N.push(R), !S)
          S = { schema: R, validationResult: F, matchingSchemas: q };
        else if (!A && !F.hasProblems() && !S.validationResult.hasProblems())
          S.matchingSchemas.merge(q), S.validationResult.propertiesMatches += F.propertiesMatches, S.validationResult.propertiesValueMatches += F.propertiesValueMatches, S.validationResult.mergeProcessedProperties(F);
        else {
          const U = F.compare(S.validationResult);
          U > 0 ? S = { schema: R, validationResult: F, matchingSchemas: q } : U === 0 && (S.matchingSchemas.merge(q), S.validationResult.mergeEnumValues(F));
        }
      }
      return N.length > 1 && A && n.problems.push({
        location: { offset: s.offset, length: 1 },
        message: D("Matches multiple schemas when only one must validate.")
      }), S && (n.merge(S.validationResult), r.merge(S.matchingSchemas)), N.length;
    };
    Array.isArray(t.anyOf) && p(t.anyOf, !1), Array.isArray(t.oneOf) && p(t.oneOf, !0);
    const g = (b) => {
      const A = new Re(), N = r.newSub();
      we(s, Be(b), A, N, i), n.merge(A), r.merge(N);
    }, d = (b, A, N) => {
      const S = Be(b), L = new Re(), R = r.newSub();
      we(s, S, L, R, i), r.merge(R), n.mergeProcessedProperties(L), L.hasProblems() ? N && g(N) : A && g(A);
    }, _ = Be(t.if);
    if (_ && d(_, Be(t.then), Be(t.else)), Array.isArray(t.enum)) {
      const b = Ht(s);
      let A = !1;
      for (const N of t.enum)
        if (mn(b, N)) {
          A = !0;
          break;
        }
      n.enumValues = t.enum, n.enumValueMatch = A, A || n.problems.push({
        location: { offset: s.offset, length: s.length },
        code: ne.EnumValueMismatch,
        message: t.errorMessage || D("Value is not accepted. Valid values: {0}.", t.enum.map((N) => JSON.stringify(N)).join(", "))
      });
    }
    if (Je(t.const)) {
      const b = Ht(s);
      mn(b, t.const) ? n.enumValueMatch = !0 : (n.problems.push({
        location: { offset: s.offset, length: s.length },
        code: ne.EnumValueMismatch,
        message: t.errorMessage || D("Value must be {0}.", JSON.stringify(t.const))
      }), n.enumValueMatch = !1), n.enumValues = [t.const];
    }
    let y = t.deprecationMessage;
    if (y || t.deprecated) {
      y = y || D("Value is deprecated");
      let b = ((x = s.parent) == null ? void 0 : x.type) === "property" ? s.parent : s;
      n.problems.push({
        location: { offset: b.offset, length: b.length },
        severity: qe.Warning,
        message: y,
        code: ne.Deprecated
      });
    }
  }
  function l(f) {
    const m = f.value;
    function p(A) {
      var S;
      const N = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(A.toString());
      return N && {
        value: Number(N[1] + (N[2] || "")),
        multiplier: (((S = N[2]) == null ? void 0 : S.length) || 0) - (parseInt(N[3]) || 0)
      };
    }
    if (Ee(t.multipleOf)) {
      let A = -1;
      if (Number.isInteger(t.multipleOf))
        A = m % t.multipleOf;
      else {
        let N = p(t.multipleOf), S = p(m);
        if (N && S) {
          const L = 10 ** Math.abs(S.multiplier - N.multiplier);
          S.multiplier < N.multiplier ? S.value *= L : N.value *= L, A = S.value % N.value;
        }
      }
      A !== 0 && n.problems.push({
        location: { offset: f.offset, length: f.length },
        message: D("Value is not divisible by {0}.", t.multipleOf)
      });
    }
    function g(A, N) {
      if (Ee(N))
        return N;
      if (at(N) && N)
        return A;
    }
    function d(A, N) {
      if (!at(N) || !N)
        return A;
    }
    const _ = g(t.minimum, t.exclusiveMinimum);
    Ee(_) && m <= _ && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Value is below the exclusive minimum of {0}.", _)
    });
    const y = g(t.maximum, t.exclusiveMaximum);
    Ee(y) && m >= y && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Value is above the exclusive maximum of {0}.", y)
    });
    const x = d(t.minimum, t.exclusiveMinimum);
    Ee(x) && m < x && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Value is below the minimum of {0}.", x)
    });
    const b = d(t.maximum, t.exclusiveMaximum);
    Ee(b) && m > b && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Value is above the maximum of {0}.", b)
    });
  }
  function o(f) {
    if (Ee(t.minLength) && Do(f.value) < t.minLength && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("String is shorter than the minimum length of {0}.", t.minLength)
    }), Ee(t.maxLength) && Do(f.value) > t.maxLength && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("String is longer than the maximum length of {0}.", t.maxLength)
    }), Nu(t.pattern)) {
      const m = kr(t.pattern);
      m != null && m.test(f.value) || n.problems.push({
        location: { offset: f.offset, length: f.length },
        message: t.patternErrorMessage || t.errorMessage || D('String does not match the pattern of "{0}".', t.pattern)
      });
    }
    if (t.format)
      switch (t.format) {
        case "uri":
        case "uri-reference":
          {
            let p;
            if (!f.value)
              p = D("URI expected.");
            else {
              const g = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(f.value);
              g ? !g[2] && t.format === "uri" && (p = D("URI with a scheme is expected.")) : p = D("URI is expected.");
            }
            p && n.problems.push({
              location: { offset: f.offset, length: f.length },
              message: t.patternErrorMessage || t.errorMessage || D("String is not a URI: {0}", p)
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
          const m = gh[t.format];
          (!f.value || !m.pattern.exec(f.value)) && n.problems.push({
            location: { offset: f.offset, length: f.length },
            message: t.patternErrorMessage || t.errorMessage || m.errorMessage
          });
      }
  }
  function u(f) {
    let m, p;
    i.schemaDraft >= Ke.v2020_12 ? (m = t.prefixItems, p = Array.isArray(t.items) ? void 0 : t.items) : (m = Array.isArray(t.items) ? t.items : void 0, p = Array.isArray(t.items) ? t.additionalItems : t.items);
    let g = 0;
    if (m !== void 0) {
      const y = Math.min(m.length, f.items.length);
      for (; g < y; g++) {
        const x = m[g], b = Be(x), A = new Re(), N = f.items[g];
        N && (we(N, b, A, r, i), n.mergePropertyMatch(A)), n.processedProperties.add(String(g));
      }
    }
    if (p !== void 0 && g < f.items.length)
      if (typeof p == "boolean")
        for (p === !1 && n.problems.push({
          location: { offset: f.offset, length: f.length },
          message: D("Array has too many items according to schema. Expected {0} or fewer.", g)
        }); g < f.items.length; g++)
          n.processedProperties.add(String(g)), n.propertiesValueMatches++;
      else
        for (; g < f.items.length; g++) {
          const y = new Re();
          we(f.items[g], p, y, r, i), n.mergePropertyMatch(y), n.processedProperties.add(String(g));
        }
    const d = Be(t.contains);
    if (d) {
      let y = 0;
      for (let x = 0; x < f.items.length; x++) {
        const b = f.items[x], A = new Re();
        we(b, d, A, Qn.instance, i), A.hasProblems() || (y++, i.schemaDraft >= Ke.v2020_12 && n.processedProperties.add(String(x)));
      }
      y === 0 && !Ee(t.minContains) && n.problems.push({
        location: { offset: f.offset, length: f.length },
        message: t.errorMessage || D("Array does not contain required item.")
      }), Ee(t.minContains) && y < t.minContains && n.problems.push({
        location: { offset: f.offset, length: f.length },
        message: t.errorMessage || D("Array has too few items that match the contains contraint. Expected {0} or more.", t.minContains)
      }), Ee(t.maxContains) && y > t.maxContains && n.problems.push({
        location: { offset: f.offset, length: f.length },
        message: t.errorMessage || D("Array has too many items that match the contains contraint. Expected {0} or less.", t.maxContains)
      });
    }
    const _ = t.unevaluatedItems;
    if (_ !== void 0)
      for (let y = 0; y < f.items.length; y++) {
        if (!n.processedProperties.has(String(y)))
          if (_ === !1)
            n.problems.push({
              location: { offset: f.offset, length: f.length },
              message: D("Item does not match any validation rule from the array.")
            });
          else {
            const x = new Re();
            we(f.items[y], t.unevaluatedItems, x, r, i), n.mergePropertyMatch(x);
          }
        n.processedProperties.add(String(y)), n.propertiesValueMatches++;
      }
    if (Ee(t.minItems) && f.items.length < t.minItems && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Array has too few items. Expected {0} or more.", t.minItems)
    }), Ee(t.maxItems) && f.items.length > t.maxItems && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Array has too many items. Expected {0} or fewer.", t.maxItems)
    }), t.uniqueItems === !0) {
      let y = function() {
        for (let b = 0; b < x.length - 1; b++) {
          const A = x[b];
          for (let N = b + 1; N < x.length; N++)
            if (mn(A, x[N]))
              return !0;
        }
        return !1;
      };
      const x = Ht(f);
      y() && n.problems.push({
        location: { offset: f.offset, length: f.length },
        message: D("Array has duplicate items.")
      });
    }
  }
  function h(f) {
    const m = /* @__PURE__ */ Object.create(null), p = /* @__PURE__ */ new Set();
    for (const b of f.properties) {
      const A = b.keyNode.value;
      m[A] = b.valueNode, p.add(A);
    }
    if (Array.isArray(t.required)) {
      for (const b of t.required)
        if (!m[b]) {
          const A = f.parent && f.parent.type === "property" && f.parent.keyNode, N = A ? { offset: A.offset, length: A.length } : { offset: f.offset, length: 1 };
          n.problems.push({
            location: N,
            message: D('Missing property "{0}".', b)
          });
        }
    }
    const g = (b) => {
      p.delete(b), n.processedProperties.add(b);
    };
    if (t.properties)
      for (const b of Object.keys(t.properties)) {
        g(b);
        const A = t.properties[b], N = m[b];
        if (N)
          if (at(A))
            if (A)
              n.propertiesMatches++, n.propertiesValueMatches++;
            else {
              const S = N.parent;
              n.problems.push({
                location: { offset: S.keyNode.offset, length: S.keyNode.length },
                message: t.errorMessage || D("Property {0} is not allowed.", b)
              });
            }
          else {
            const S = new Re();
            we(N, A, S, r, i), n.mergePropertyMatch(S);
          }
      }
    if (t.patternProperties)
      for (const b of Object.keys(t.patternProperties)) {
        const A = kr(b);
        if (A) {
          const N = [];
          for (const S of p)
            if (A.test(S)) {
              N.push(S);
              const L = m[S];
              if (L) {
                const R = t.patternProperties[b];
                if (at(R))
                  if (R)
                    n.propertiesMatches++, n.propertiesValueMatches++;
                  else {
                    const F = L.parent;
                    n.problems.push({
                      location: { offset: F.keyNode.offset, length: F.keyNode.length },
                      message: t.errorMessage || D("Property {0} is not allowed.", S)
                    });
                  }
                else {
                  const F = new Re();
                  we(L, R, F, r, i), n.mergePropertyMatch(F);
                }
              }
            }
          N.forEach(g);
        }
      }
    const d = t.additionalProperties;
    if (d !== void 0)
      for (const b of p) {
        g(b);
        const A = m[b];
        if (A) {
          if (d === !1) {
            const N = A.parent;
            n.problems.push({
              location: { offset: N.keyNode.offset, length: N.keyNode.length },
              message: t.errorMessage || D("Property {0} is not allowed.", b)
            });
          } else if (d !== !0) {
            const N = new Re();
            we(A, d, N, r, i), n.mergePropertyMatch(N);
          }
        }
      }
    const _ = t.unevaluatedProperties;
    if (_ !== void 0) {
      const b = [];
      for (const A of p)
        if (!n.processedProperties.has(A)) {
          b.push(A);
          const N = m[A];
          if (N) {
            if (_ === !1) {
              const S = N.parent;
              n.problems.push({
                location: { offset: S.keyNode.offset, length: S.keyNode.length },
                message: t.errorMessage || D("Property {0} is not allowed.", A)
              });
            } else if (_ !== !0) {
              const S = new Re();
              we(N, _, S, r, i), n.mergePropertyMatch(S);
            }
          }
        }
      b.forEach(g);
    }
    if (Ee(t.maxProperties) && f.properties.length > t.maxProperties && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Object has more properties than limit of {0}.", t.maxProperties)
    }), Ee(t.minProperties) && f.properties.length < t.minProperties && n.problems.push({
      location: { offset: f.offset, length: f.length },
      message: D("Object has fewer properties than the required number of {0}", t.minProperties)
    }), t.dependentRequired)
      for (const b in t.dependentRequired) {
        const A = m[b], N = t.dependentRequired[b];
        A && Array.isArray(N) && x(b, N);
      }
    if (t.dependentSchemas)
      for (const b in t.dependentSchemas) {
        const A = m[b], N = t.dependentSchemas[b];
        A && Rt(N) && x(b, N);
      }
    if (t.dependencies)
      for (const b in t.dependencies)
        m[b] && x(b, t.dependencies[b]);
    const y = Be(t.propertyNames);
    if (y)
      for (const b of f.properties) {
        const A = b.keyNode;
        A && we(A, y, n, Qn.instance, i);
      }
    function x(b, A) {
      if (Array.isArray(A))
        for (const N of A)
          m[N] ? n.propertiesValueMatches++ : n.problems.push({
            location: { offset: f.offset, length: f.length },
            message: D("Object is missing property {0} required by property {1}.", N, b)
          });
      else {
        const N = Be(A);
        if (N) {
          const S = new Re();
          we(f, N, S, r, i), n.mergePropertyMatch(S);
        }
      }
    }
  }
}
function Nh(e, t) {
  const n = [];
  let r = -1;
  const i = e.getText(), s = qt(i, !1), a = t && t.collectComments ? [] : void 0;
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
  function o(S, L, R, F, q = qe.Error) {
    if (n.length === 0 || R !== r) {
      const U = K.create(e.positionAt(R), e.positionAt(F));
      n.push(_t.create(U, S, q, L, e.languageId)), r = R;
    }
  }
  function u(S, L, R = void 0, F = [], q = []) {
    let U = s.getTokenOffset(), k = s.getTokenOffset() + s.getTokenLength();
    if (U === k && U > 0) {
      for (U--; U > 0 && /\s/.test(i.charAt(U)); )
        U--;
      k = U + 1;
    }
    if (o(S, L, U, k), R && f(R, !1), F.length + q.length > 0) {
      let I = s.getToken();
      for (; I !== 17; ) {
        if (F.indexOf(I) !== -1) {
          l();
          break;
        } else if (q.indexOf(I) !== -1)
          break;
        I = l();
      }
    }
    return R;
  }
  function h() {
    switch (s.getTokenError()) {
      case 4:
        return u(D("Invalid unicode sequence in string."), ne.InvalidUnicode), !0;
      case 5:
        return u(D("Invalid escape character in string."), ne.InvalidEscapeCharacter), !0;
      case 3:
        return u(D("Unexpected end of number."), ne.UnexpectedEndOfNumber), !0;
      case 1:
        return u(D("Unexpected end of comment."), ne.UnexpectedEndOfComment), !0;
      case 2:
        return u(D("Unexpected end of string."), ne.UnexpectedEndOfString), !0;
      case 6:
        return u(D("Invalid characters in string. Control characters must be escaped."), ne.InvalidCharacter), !0;
    }
    return !1;
  }
  function f(S, L) {
    return S.length = s.getTokenOffset() + s.getTokenLength() - S.offset, L && l(), S;
  }
  function m(S) {
    if (s.getToken() !== 3)
      return;
    const L = new dh(S, s.getTokenOffset());
    l();
    let R = !1;
    for (; s.getToken() !== 4 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        R || u(D("Value expected"), ne.ValueExpected);
        const q = s.getTokenOffset();
        if (l(), s.getToken() === 4) {
          R && o(D("Trailing comma"), ne.TrailingComma, q, q + 1);
          continue;
        }
      } else R && u(D("Expected comma"), ne.CommaExpected);
      const F = b(L);
      F ? L.items.push(F) : u(D("Value expected"), ne.ValueExpected, void 0, [], [
        4,
        5
        /* Json.SyntaxKind.CommaToken */
      ]), R = !0;
    }
    return s.getToken() !== 4 ? u(D("Expected comma or closing bracket"), ne.CommaOrCloseBacketExpected, L) : f(L, !0);
  }
  const p = new zr(void 0, 0, 0);
  function g(S, L) {
    const R = new _h(S, s.getTokenOffset(), p);
    let F = _(R);
    if (!F)
      if (s.getToken() === 16) {
        u(D("Property keys must be doublequoted"), ne.PropertyKeysMustBeDoublequoted);
        const U = new zr(R, s.getTokenOffset(), s.getTokenLength());
        U.value = s.getTokenValue(), F = U, l();
      } else
        return;
    if (R.keyNode = F, F.value !== "//") {
      const U = L[F.value];
      U ? (o(D("Duplicate object key"), ne.DuplicateKey, R.keyNode.offset, R.keyNode.offset + R.keyNode.length, qe.Warning), Rt(U) && o(D("Duplicate object key"), ne.DuplicateKey, U.keyNode.offset, U.keyNode.offset + U.keyNode.length, qe.Warning), L[F.value] = !0) : L[F.value] = R;
    }
    if (s.getToken() === 6)
      R.colonOffset = s.getTokenOffset(), l();
    else if (u(D("Colon expected"), ne.ColonExpected), s.getToken() === 10 && e.positionAt(F.offset + F.length).line < e.positionAt(s.getTokenOffset()).line)
      return R.length = F.length, R;
    const q = b(R);
    return q ? (R.valueNode = q, R.length = q.offset + q.length - R.offset, R) : u(D("Value expected"), ne.ValueExpected, R, [], [
      2,
      5
      /* Json.SyntaxKind.CommaToken */
    ]);
  }
  function d(S) {
    if (s.getToken() !== 1)
      return;
    const L = new wh(S, s.getTokenOffset()), R = /* @__PURE__ */ Object.create(null);
    l();
    let F = !1;
    for (; s.getToken() !== 2 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        F || u(D("Property expected"), ne.PropertyExpected);
        const U = s.getTokenOffset();
        if (l(), s.getToken() === 2) {
          F && o(D("Trailing comma"), ne.TrailingComma, U, U + 1);
          continue;
        }
      } else F && u(D("Expected comma"), ne.CommaExpected);
      const q = g(L, R);
      q ? L.properties.push(q) : u(D("Property expected"), ne.PropertyExpected, void 0, [], [
        2,
        5
        /* Json.SyntaxKind.CommaToken */
      ]), F = !0;
    }
    return s.getToken() !== 2 ? u(D("Expected comma or closing brace"), ne.CommaOrCloseBraceExpected, L) : f(L, !0);
  }
  function _(S) {
    if (s.getToken() !== 10)
      return;
    const L = new zr(S, s.getTokenOffset());
    return L.value = s.getTokenValue(), f(L, !0);
  }
  function y(S) {
    if (s.getToken() !== 11)
      return;
    const L = new bh(S, s.getTokenOffset());
    if (s.getTokenError() === 0) {
      const R = s.getTokenValue();
      try {
        const F = JSON.parse(R);
        if (!Ee(F))
          return u(D("Invalid number format."), ne.Undefined, L);
        L.value = F;
      } catch {
        return u(D("Invalid number format."), ne.Undefined, L);
      }
      L.isInteger = R.indexOf(".") === -1;
    }
    return f(L, !0);
  }
  function x(S) {
    switch (s.getToken()) {
      case 7:
        return f(new ph(S, s.getTokenOffset()), !0);
      case 8:
        return f(new Pl(S, !0, s.getTokenOffset()), !0);
      case 9:
        return f(new Pl(S, !1, s.getTokenOffset()), !0);
      default:
        return;
    }
  }
  function b(S) {
    return m(S) || d(S) || _(S) || y(S) || x(S);
  }
  let A;
  return l() !== 17 && (A = b(A), A ? s.getToken() !== 17 && u(D("End of file expected."), ne.Undefined) : u(D("Expected a JSON object, array or literal."), ne.Undefined)), new Ru(A, n, a);
}
function qi(e, t, n) {
  if (e !== null && typeof e == "object") {
    const r = t + "	";
    if (Array.isArray(e)) {
      if (e.length === 0)
        return "[]";
      let i = `[
`;
      for (let s = 0; s < e.length; s++)
        i += r + qi(e[s], r, n), s < e.length - 1 && (i += ","), i += `
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
        s += r + JSON.stringify(l) + ": " + qi(e[l], r, n), a < i.length - 1 && (s += ","), s += `
`;
      }
      return s += t + "}", s;
    }
  }
  return n(e);
}
var xh = class {
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
      const f = i[s - 1];
      (a.type === "object" && f === "}" || a.type === "array" && f === "]") && (a = a.parent);
    }
    const l = this.getCurrentWord(e, s);
    let o;
    if (a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null"))
      o = K.create(e.positionAt(a.offset), e.positionAt(a.offset + a.length));
    else {
      let f = s - l.length;
      f > 0 && i[f - 1] === '"' && f--, o = K.create(e.positionAt(f), t);
    }
    const u = /* @__PURE__ */ new Map(), h = {
      add: (f) => {
        let m = f.label;
        const p = u.get(m);
        if (p)
          p.documentation || (p.documentation = f.documentation), p.detail || (p.detail = f.detail), p.labelDetails || (p.labelDetails = f.labelDetails);
        else {
          if (m = m.replace(/[\n]/g, "↵"), m.length > 60) {
            const g = m.substr(0, 57).trim() + "...";
            u.has(g) || (m = g);
          }
          f.textEdit = ut.replace(o, f.insertText), f.label = m, u.set(m, f), r.items.push(f);
        }
      },
      setAsIncomplete: () => {
        r.isIncomplete = !0;
      },
      error: (f) => {
        console.error(f);
      },
      getNumberOfProposals: () => r.items.length
    };
    return this.schemaService.getSchemaForResource(e.uri, n).then((f) => {
      const m = [];
      let p = !0, g = "", d;
      if (a && a.type === "string") {
        const y = a.parent;
        y && y.type === "property" && y.keyNode === a && (p = !y.valueNode, d = y, g = i.substr(a.offset + 1, a.length - 2), y && (a = y.parent));
      }
      if (a && a.type === "object") {
        if (a.offset === s)
          return r;
        a.properties.forEach((A) => {
          (!d || d !== A) && u.set(A.keyNode.value, Fi.create("__"));
        });
        let x = "";
        p && (x = this.evaluateSeparatorAfter(e, e.offsetAt(o.end))), f ? this.getPropertyCompletions(f, n, a, p, x, h) : this.getSchemaLessPropertyCompletions(n, a, g, h);
        const b = $i(a);
        this.contributions.forEach((A) => {
          const N = A.collectPropertyCompletions(e.uri, b, l, p, x === "", h);
          N && m.push(N);
        }), !f && l.length > 0 && i.charAt(s - l.length - 1) !== '"' && (h.add({
          kind: $e.Property,
          label: this.getLabelForValue(l),
          insertText: this.getInsertTextForProperty(l, void 0, !1, x),
          insertTextFormat: de.Snippet,
          documentation: ""
        }), h.setAsIncomplete());
      }
      const _ = {};
      return f ? this.getValueCompletions(f, n, a, s, e, h, _) : this.getSchemaLessValueCompletions(n, a, s, e, h), this.contributions.length > 0 && this.getContributedValueCompletions(n, a, s, e, h, m), this.promiseConstructor.all(m).then(() => {
        if (h.getNumberOfProposals() === 0) {
          let y = s;
          a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null") && (y = a.offset + a.length);
          const x = this.evaluateSeparatorAfter(e, y);
          this.addFillerValueCompletions(_, x, h);
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
          const f = o[h];
          if (typeof f == "object" && !f.deprecationMessage && !f.doNotSuggest) {
            const m = {
              kind: $e.Property,
              label: h,
              insertText: this.getInsertTextForProperty(h, f, r, i),
              insertTextFormat: de.Snippet,
              filterText: this.getFilterTextForValue(h),
              documentation: this.fromMarkup(f.markdownDescription) || f.description || ""
            };
            f.suggestSortText !== void 0 && (m.sortText = f.suggestSortText), m.insertText && Jn(m.insertText, `$1${i}`) && (m.command = {
              title: "Suggest",
              command: "editor.action.triggerSuggest"
            }), s.add(m);
          }
        });
        const u = l.schema.propertyNames;
        if (typeof u == "object" && !u.deprecationMessage && !u.doNotSuggest) {
          const h = (f, m = void 0) => {
            const p = {
              kind: $e.Property,
              label: f,
              insertText: this.getInsertTextForProperty(f, void 0, r, i),
              insertTextFormat: de.Snippet,
              filterText: this.getFilterTextForValue(f),
              documentation: m || this.fromMarkup(u.markdownDescription) || u.description || ""
            };
            u.suggestSortText !== void 0 && (p.sortText = u.suggestSortText), p.insertText && Jn(p.insertText, `$1${i}`) && (p.command = {
              title: "Suggest",
              command: "editor.action.triggerSuggest"
            }), s.add(p);
          };
          if (u.enum)
            for (let f = 0; f < u.enum.length; f++) {
              let m;
              u.markdownEnumDescriptions && f < u.markdownEnumDescriptions.length ? m = this.fromMarkup(u.markdownEnumDescriptions[f]) : u.enumDescriptions && f < u.enumDescriptions.length && (m = u.enumDescriptions[f]), h(u.enum[f], m);
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
          kind: $e.Property,
          label: l,
          insertText: this.getInsertTextForValue(l, ""),
          insertTextFormat: de.Snippet,
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
      kind: $e.Property,
      label: "$schema",
      insertText: this.getInsertTextForProperty("$schema", void 0, !0, ""),
      insertTextFormat: de.Snippet,
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
        insertTextFormat: de.Snippet,
        documentation: ""
      }), i.add({
        kind: this.getSuggestionKind("array"),
        label: "Empty array",
        insertText: this.getInsertTextForValue([], ""),
        insertTextFormat: de.Snippet,
        documentation: ""
      });
      return;
    }
    const a = this.evaluateSeparatorAfter(r, s), l = (o) => {
      o.parent && !Eu(o.parent, n, !0) && i.add({
        kind: this.getSuggestionKind(o.type),
        label: this.getLabelTextForMatchingNode(o, r),
        insertText: this.getInsertTextForMatchingNode(o, r, a),
        insertTextFormat: de.Snippet,
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
      const h = this.evaluateSeparatorAfter(i, l), f = t.getMatchingSchemas(e.schema, n.offset, u);
      for (const m of f)
        if (m.node === n && !m.inverted && m.schema) {
          if (n.type === "array" && m.schema.items) {
            let p = s;
            if (m.schema.uniqueItems) {
              const g = /* @__PURE__ */ new Set();
              n.children.forEach((d) => {
                d.type !== "array" && d.type !== "object" && g.add(this.getLabelForValue(Ht(d)));
              }), p = {
                ...s,
                add(d) {
                  g.has(d.label) || s.add(d);
                }
              };
            }
            if (Array.isArray(m.schema.items)) {
              const g = this.findItemAtOffset(n, i, r);
              g < m.schema.items.length && this.addSchemaValueCompletions(m.schema.items[g], h, p, a);
            } else
              this.addSchemaValueCompletions(m.schema.items, h, p, a);
          }
          if (o !== void 0) {
            let p = !1;
            if (m.schema.properties) {
              const g = m.schema.properties[o];
              g && (p = !0, this.addSchemaValueCompletions(g, h, s, a));
            }
            if (m.schema.patternProperties && !p)
              for (const g of Object.keys(m.schema.patternProperties)) {
                const d = kr(g);
                if (d != null && d.test(o)) {
                  p = !0;
                  const _ = m.schema.patternProperties[g];
                  this.addSchemaValueCompletions(_, h, s, a);
                }
              }
            if (m.schema.additionalProperties && !p) {
              const g = m.schema.additionalProperties;
              this.addSchemaValueCompletions(g, h, s, a);
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
        const o = $i(t.parent);
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
    if (Je(e.default)) {
      let s = e.type, a = e.default;
      for (let o = r; o > 0; o--)
        a = [a], s = "array";
      const l = {
        kind: this.getSuggestionKind(s),
        label: this.getLabelForValue(a),
        insertText: this.getInsertTextForValue(a, t),
        insertTextFormat: de.Snippet
      };
      this.doesSupportsLabelDetails() ? l.labelDetails = { description: D("Default value") } : l.detail = D("Default value"), n.add(l), i = !0;
    }
    Array.isArray(e.examples) && e.examples.forEach((s) => {
      let a = e.type, l = s;
      for (let o = r; o > 0; o--)
        l = [l], a = "array";
      n.add({
        kind: this.getSuggestionKind(a),
        label: this.getLabelForValue(l),
        insertText: this.getInsertTextForValue(l, t),
        insertTextFormat: de.Snippet
      }), i = !0;
    }), Array.isArray(e.defaultSnippets) && e.defaultSnippets.forEach((s) => {
      let a = e.type, l = s.body, o = s.label, u, h;
      if (Je(l)) {
        e.type;
        for (let f = r; f > 0; f--)
          l = [l];
        u = this.getInsertTextForSnippetValue(l, t), h = this.getFilterTextForSnippetValue(l), o = o || this.getLabelForSnippetValue(l);
      } else if (typeof s.bodyText == "string") {
        let f = "", m = "", p = "";
        for (let g = r; g > 0; g--)
          f = f + p + `[
`, m = m + `
` + p + "]", p += "	", a = "array";
        u = f + p + s.bodyText.split(`
`).join(`
` + p) + m + t, o = o || u, h = u.replace(/[\n]/g, "");
      } else
        return;
      n.add({
        kind: this.getSuggestionKind(a),
        label: o,
        documentation: this.fromMarkup(s.markdownDescription) || s.description,
        insertText: u,
        insertTextFormat: de.Snippet,
        filterText: h
      }), i = !0;
    }), !i && typeof e.items == "object" && !Array.isArray(e.items) && r < 5 && this.addDefaultValueCompletions(e.items, t, n, r + 1);
  }
  addEnumValueCompletions(e, t, n) {
    if (Je(e.const) && n.add({
      kind: this.getSuggestionKind(e.type),
      label: this.getLabelForValue(e.const),
      insertText: this.getInsertTextForValue(e.const, t),
      insertTextFormat: de.Snippet,
      documentation: this.fromMarkup(e.markdownDescription) || e.description
    }), Array.isArray(e.enum))
      for (let r = 0, i = e.enum.length; r < i; r++) {
        const s = e.enum[r];
        let a = this.fromMarkup(e.markdownDescription) || e.description;
        e.markdownEnumDescriptions && r < e.markdownEnumDescriptions.length && this.doesSupportMarkdown() ? a = this.fromMarkup(e.markdownEnumDescriptions[r]) : e.enumDescriptions && r < e.enumDescriptions.length && (a = e.enumDescriptions[r]), n.add({
          kind: this.getSuggestionKind(e.type),
          label: this.getLabelForValue(s),
          insertText: this.getInsertTextForValue(s, t),
          insertTextFormat: de.Snippet,
          documentation: a
        });
      }
  }
  collectTypes(e, t) {
    if (Array.isArray(e.enum) || Je(e.const))
      return;
    const n = e.type;
    Array.isArray(n) ? n.forEach((r) => t[r] = !0) : n && (t[n] = !0);
  }
  addFillerValueCompletions(e, t, n) {
    e.object && n.add({
      kind: this.getSuggestionKind("object"),
      label: "{}",
      insertText: this.getInsertTextForGuessedValue({}, t),
      insertTextFormat: de.Snippet,
      detail: D("New object"),
      documentation: ""
    }), e.array && n.add({
      kind: this.getSuggestionKind("array"),
      label: "[]",
      insertText: this.getInsertTextForGuessedValue([], t),
      insertTextFormat: de.Snippet,
      detail: D("New array"),
      documentation: ""
    });
  }
  addBooleanValueCompletion(e, t, n) {
    n.add({
      kind: this.getSuggestionKind("boolean"),
      label: e ? "true" : "false",
      insertText: this.getInsertTextForValue(e, t),
      insertTextFormat: de.Snippet,
      documentation: ""
    });
  }
  addNullValueCompletion(e, t) {
    t.add({
      kind: this.getSuggestionKind("null"),
      label: "null",
      insertText: "null" + e,
      insertTextFormat: de.Snippet,
      documentation: ""
    });
  }
  addDollarSchemaCompletions(e, t) {
    this.schemaService.getRegisteredSchemaIds((r) => r === "http" || r === "https").forEach((r) => {
      r.startsWith("http://json-schema.org/draft-") && (r = r + "#"), t.add({
        kind: $e.Module,
        label: this.getLabelForValue(r),
        filterText: this.getFilterTextForValue(r),
        insertText: this.getInsertTextForValue(r, e),
        insertTextFormat: de.Snippet,
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
    return qi(e, "", (r) => typeof r == "string" && r[0] === "^" ? r.substr(1) : JSON.stringify(r)) + t;
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
      return $e.Value;
    switch (e) {
      case "string":
        return $e.Value;
      case "object":
        return $e.Module;
      case "property":
        return $e.Property;
      default:
        return $e.Value;
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
          Je(o) && (a = this.getInsertTextForSnippetValue(o, ""));
        }
        l += t.defaultSnippets.length;
      }
      if (t.enum && (!a && t.enum.length === 1 && (a = this.getInsertTextForGuessedValue(t.enum[0], "")), l += t.enum.length), Je(t.const) && (a || (a = this.getInsertTextForGuessedValue(t.const, "")), l++), Je(t.default) && (a || (a = this.getInsertTextForGuessedValue(t.default, "")), l++), Array.isArray(t.examples) && t.examples.length && (a || (a = this.getInsertTextForGuessedValue(t.examples[0], "")), l += t.examples.length), l === 0) {
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
    const n = qt(e.getText(), !0);
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
    const r = qt(t.getText(), !0), i = e.items;
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
    const r = qt(e.getText(), !1);
    r.setPosition(t);
    let i = r.scan();
    for (; i !== 17 && r.getTokenOffset() + r.getTokenLength() < n; )
      i = r.scan();
    return (i === 12 || i === 13) && r.getTokenOffset() <= n;
  }
  fromMarkup(e) {
    if (e && this.doesSupportMarkdown())
      return {
        kind: Wt.Markdown,
        value: e
      };
  }
  doesSupportMarkdown() {
    var e, t, n;
    if (!Je(this.supportsMarkdown)) {
      const r = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.documentationFormat;
      this.supportsMarkdown = Array.isArray(r) && r.indexOf(Wt.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
  doesSupportsCommitCharacters() {
    var e, t, n;
    return Je(this.supportsCommitCharacters) || (this.labelDetailsSupport = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.commitCharactersSupport), this.supportsCommitCharacters;
  }
  doesSupportsLabelDetails() {
    var e, t, n;
    return Je(this.labelDetailsSupport) || (this.labelDetailsSupport = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.labelDetailsSupport), this.labelDetailsSupport;
  }
}, Ah = class {
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
    }), o = $i(i);
    for (let u = this.contributions.length - 1; u >= 0; u--) {
      const f = this.contributions[u].getInfoContribution(e.uri, o);
      if (f)
        return f.then((m) => l(m));
    }
    return this.schemaService.getSchemaForResource(e.uri, n).then((u) => {
      if (u && i) {
        const h = n.getMatchingSchemas(u.schema, i.offset);
        let f, m, p, g;
        h.every((_) => {
          if (_.node === i && !_.inverted && _.schema && (f = f || _.schema.title, m = m || _.schema.markdownDescription || Xr(_.schema.description), _.schema.enum)) {
            const y = _.schema.enum.indexOf(Ht(i));
            _.schema.markdownEnumDescriptions ? p = _.schema.markdownEnumDescriptions[y] : _.schema.enumDescriptions && (p = Xr(_.schema.enumDescriptions[y])), p && (g = _.schema.enum[y], typeof g != "string" && (g = JSON.stringify(g)));
          }
          return !0;
        });
        let d = "";
        return f && (d = Xr(f)), m && (d.length > 0 && (d += `

`), d += m), p && (d.length > 0 && (d += `

`), d += `\`${Eh(g)}\`: ${p}`), l([d]);
      }
      return null;
    });
  }
};
function Xr(e) {
  if (e)
    return e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, `$1

$3`).replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
}
function Eh(e) {
  return e.indexOf("`") !== -1 ? "`` " + e + " ``" : e;
}
var Rh = class {
  constructor(e, t) {
    this.jsonSchemaService = e, this.promise = t, this.validationEnabled = !0;
  }
  configure(e) {
    e && (this.validationEnabled = e.validate !== !1, this.commentSeverity = e.allowComments ? void 0 : qe.Error);
  }
  doValidation(e, t, n, r) {
    if (!this.validationEnabled)
      return this.promise.resolve([]);
    const i = [], s = {}, a = (o) => {
      const u = o.range.start.line + " " + o.range.start.character + " " + o.message;
      s[u] || (s[u] = !0, i.push(o));
    }, l = (o) => {
      let u = n != null && n.trailingCommas ? rr(n.trailingCommas) : qe.Error, h = n != null && n.comments ? rr(n.comments) : this.commentSeverity, f = n != null && n.schemaValidation ? rr(n.schemaValidation) : qe.Warning, m = n != null && n.schemaRequest ? rr(n.schemaRequest) : qe.Warning;
      if (o) {
        const p = (g, d) => {
          if (t.root && m) {
            const _ = t.root, y = _.type === "object" ? _.properties[0] : void 0;
            if (y && y.keyNode.value === "$schema") {
              const x = y.valueNode || y, b = K.create(e.positionAt(x.offset), e.positionAt(x.offset + x.length));
              a(_t.create(b, g, m, d));
            } else {
              const x = K.create(e.positionAt(_.offset), e.positionAt(_.offset + 1));
              a(_t.create(x, g, m, d));
            }
          }
        };
        if (o.errors.length)
          p(o.errors[0], ne.SchemaResolveError);
        else if (f) {
          for (const d of o.warnings)
            p(d, ne.SchemaUnsupportedFeature);
          const g = t.validate(e, o.schema, f, n == null ? void 0 : n.schemaDraft);
          g && g.forEach(a);
        }
        Tu(o.schema) && (h = void 0), ku(o.schema) && (u = void 0);
      }
      for (const p of t.syntaxErrors) {
        if (p.code === ne.TrailingComma) {
          if (typeof u != "number")
            continue;
          p.severity = u;
        }
        a(p);
      }
      if (typeof h == "number") {
        const p = D("Comments are not permitted in JSON.");
        t.comments.forEach((g) => {
          a(_t.create(g, p, h, ne.CommentNotPermitted));
        });
      }
      return i;
    };
    if (r) {
      const o = r.id || "schemaservice://untitled/" + Th++;
      return this.jsonSchemaService.registerExternalSchema({ uri: o, schema: r }).getResolvedSchema().then((h) => l(h));
    }
    return this.jsonSchemaService.getSchemaForResource(e.uri, t).then((o) => l(o));
  }
  getLanguageStatus(e, t) {
    return { schemas: this.jsonSchemaService.getSchemaURIsForResource(e.uri, t) };
  }
}, Th = 0;
function Tu(e) {
  if (e && typeof e == "object") {
    if (at(e.allowComments))
      return e.allowComments;
    if (e.allOf)
      for (const t of e.allOf) {
        const n = Tu(t);
        if (at(n))
          return n;
      }
  }
}
function ku(e) {
  if (e && typeof e == "object") {
    if (at(e.allowTrailingCommas))
      return e.allowTrailingCommas;
    const t = e;
    if (at(t.allowsTrailingCommas))
      return t.allowsTrailingCommas;
    if (e.allOf)
      for (const n of e.allOf) {
        const r = ku(n);
        if (at(r))
          return r;
      }
  }
}
function rr(e) {
  switch (e) {
    case "error":
      return qe.Error;
    case "warning":
      return qe.Warning;
    case "ignore":
      return;
  }
}
var Ol = 48, kh = 57, Sh = 65, ir = 97, Mh = 102;
function ge(e) {
  return e < Ol ? 0 : e <= kh ? e - Ol : (e < ir && (e += ir - Sh), e >= ir && e <= Mh ? e - ir + 10 : 0);
}
function Ih(e) {
  if (e[0] === "#")
    switch (e.length) {
      case 4:
        return {
          red: ge(e.charCodeAt(1)) * 17 / 255,
          green: ge(e.charCodeAt(2)) * 17 / 255,
          blue: ge(e.charCodeAt(3)) * 17 / 255,
          alpha: 1
        };
      case 5:
        return {
          red: ge(e.charCodeAt(1)) * 17 / 255,
          green: ge(e.charCodeAt(2)) * 17 / 255,
          blue: ge(e.charCodeAt(3)) * 17 / 255,
          alpha: ge(e.charCodeAt(4)) * 17 / 255
        };
      case 7:
        return {
          red: (ge(e.charCodeAt(1)) * 16 + ge(e.charCodeAt(2))) / 255,
          green: (ge(e.charCodeAt(3)) * 16 + ge(e.charCodeAt(4))) / 255,
          blue: (ge(e.charCodeAt(5)) * 16 + ge(e.charCodeAt(6))) / 255,
          alpha: 1
        };
      case 9:
        return {
          red: (ge(e.charCodeAt(1)) * 16 + ge(e.charCodeAt(2))) / 255,
          green: (ge(e.charCodeAt(3)) * 16 + ge(e.charCodeAt(4))) / 255,
          blue: (ge(e.charCodeAt(5)) * 16 + ge(e.charCodeAt(6))) / 255,
          alpha: (ge(e.charCodeAt(7)) * 16 + ge(e.charCodeAt(8))) / 255
        };
    }
}
var Ph = class {
  constructor(e) {
    this.schemaService = e;
  }
  findDocumentSymbols(e, t, n = { resultLimit: Number.MAX_VALUE }) {
    const r = t.root;
    if (!r)
      return [];
    let i = n.resultLimit || Number.MAX_VALUE;
    const s = e.uri;
    if ((s === "vscode://defaultsettings/keybindings.json" || Jn(s.toLowerCase(), "/user/keybindings.json")) && r.type === "array") {
      const f = [];
      for (const m of r.items)
        if (m.type === "object") {
          for (const p of m.properties)
            if (p.keyNode.value === "key" && p.valueNode) {
              const g = vn.create(e.uri, Lt(e, m));
              if (f.push({ name: Bl(p.valueNode), kind: tt.Function, location: g }), i--, i <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), f;
            }
        }
      return f;
    }
    const a = [
      { node: r, containerName: "" }
    ];
    let l = 0, o = !1;
    const u = [], h = (f, m) => {
      f.type === "array" ? f.items.forEach((p) => {
        p && a.push({ node: p, containerName: m });
      }) : f.type === "object" && f.properties.forEach((p) => {
        const g = p.valueNode;
        if (g)
          if (i > 0) {
            i--;
            const d = vn.create(e.uri, Lt(e, p)), _ = m ? m + "." + p.keyNode.value : p.keyNode.value;
            u.push({ name: this.getKeyLabel(p), kind: this.getSymbolKind(g.type), location: d, containerName: m }), a.push({ node: g, containerName: _ });
          } else
            o = !0;
      });
    };
    for (; l < a.length; ) {
      const f = a[l++];
      h(f.node, f.containerName);
    }
    return o && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), u;
  }
  findDocumentSymbols2(e, t, n = { resultLimit: Number.MAX_VALUE }) {
    const r = t.root;
    if (!r)
      return [];
    let i = n.resultLimit || Number.MAX_VALUE;
    const s = e.uri;
    if ((s === "vscode://defaultsettings/keybindings.json" || Jn(s.toLowerCase(), "/user/keybindings.json")) && r.type === "array") {
      const f = [];
      for (const m of r.items)
        if (m.type === "object") {
          for (const p of m.properties)
            if (p.keyNode.value === "key" && p.valueNode) {
              const g = Lt(e, m), d = Lt(e, p.keyNode);
              if (f.push({ name: Bl(p.valueNode), kind: tt.Function, range: g, selectionRange: d }), i--, i <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), f;
            }
        }
      return f;
    }
    const a = [], l = [
      { node: r, result: a }
    ];
    let o = 0, u = !1;
    const h = (f, m) => {
      f.type === "array" ? f.items.forEach((p, g) => {
        if (p)
          if (i > 0) {
            i--;
            const d = Lt(e, p), _ = d, x = { name: String(g), kind: this.getSymbolKind(p.type), range: d, selectionRange: _, children: [] };
            m.push(x), l.push({ result: x.children, node: p });
          } else
            u = !0;
      }) : f.type === "object" && f.properties.forEach((p) => {
        const g = p.valueNode;
        if (g)
          if (i > 0) {
            i--;
            const d = Lt(e, p), _ = Lt(e, p.keyNode), y = [], x = { name: this.getKeyLabel(p), kind: this.getSymbolKind(g.type), range: d, selectionRange: _, children: y, detail: this.getDetail(g) };
            m.push(x), l.push({ result: y, node: g });
          } else
            u = !0;
      });
    };
    for (; o < l.length; ) {
      const f = l[o++];
      h(f.node, f.result);
    }
    return u && n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), a;
  }
  getSymbolKind(e) {
    switch (e) {
      case "object":
        return tt.Module;
      case "string":
        return tt.String;
      case "number":
        return tt.Number;
      case "array":
        return tt.Array;
      case "boolean":
        return tt.Boolean;
      default:
        return tt.Variable;
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
              const h = Ih(Ht(o.node));
              if (h) {
                const f = Lt(e, o.node);
                i.push({ color: h, range: f });
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
      const f = h.toString(16);
      return f.length !== 2 ? "0" + f : f;
    }
    let u;
    return n.alpha === 1 ? u = `#${o(s)}${o(a)}${o(l)}` : u = `#${o(s)}${o(a)}${o(l)}${o(Math.round(n.alpha * 255))}`, i.push({ label: u, textEdit: ut.replace(r, JSON.stringify(u)) }), i;
  }
};
function Lt(e, t) {
  return K.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
}
function Bl(e) {
  return Ht(e) || D("<empty>");
}
var Hi = {
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
}, Fh = {
  id: D("A unique identifier for the schema."),
  $schema: D("The schema to verify this document against."),
  title: D("A descriptive title of the element."),
  description: D("A long description of the element. Used in hover menus and suggestions."),
  default: D("A default value. Used by suggestions."),
  multipleOf: D("A number that should cleanly divide the current value (i.e. have no remainder)."),
  maximum: D("The maximum numerical value, inclusive by default."),
  exclusiveMaximum: D("Makes the maximum property exclusive."),
  minimum: D("The minimum numerical value, inclusive by default."),
  exclusiveMinimum: D("Makes the minimum property exclusive."),
  maxLength: D("The maximum length of a string."),
  minLength: D("The minimum length of a string."),
  pattern: D("A regular expression to match the string against. It is not implicitly anchored."),
  additionalItems: D("For arrays, only when items is set as an array. If it is a schema, then this schema validates items after the ones specified by the items array. If it is false, then additional items will cause validation to fail."),
  items: D("For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),
  maxItems: D("The maximum number of items that can be inside an array. Inclusive."),
  minItems: D("The minimum number of items that can be inside an array. Inclusive."),
  uniqueItems: D("If all of the items in the array must be unique. Defaults to false."),
  maxProperties: D("The maximum number of properties an object can have. Inclusive."),
  minProperties: D("The minimum number of properties an object can have. Inclusive."),
  required: D("An array of strings that lists the names of all properties required on this object."),
  additionalProperties: D("Either a schema or a boolean. If a schema, then used to validate all properties not matched by 'properties' or 'patternProperties'. If false, then any properties not matched by either will cause this schema to fail."),
  definitions: D("Not used for validation. Place subschemas here that you wish to reference inline with $ref."),
  properties: D("A map of property names to schemas for each property."),
  patternProperties: D("A map of regular expressions on property names to schemas for matching properties."),
  dependencies: D("A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),
  enum: D("The set of literal values that are valid."),
  type: D("Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),
  format: D("Describes the format expected for the value."),
  allOf: D("An array of schemas, all of which must match."),
  anyOf: D("An array of schemas, where at least one must match."),
  oneOf: D("An array of schemas, exactly one of which must match."),
  not: D("A schema which must not match."),
  $id: D("A unique identifier for the schema."),
  $ref: D("Reference a definition hosted on any location."),
  $comment: D("Comments from schema authors to readers or maintainers of the schema."),
  readOnly: D("Indicates that the value of the instance is managed exclusively by the owning authority."),
  examples: D("Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),
  contains: D('An array instance is valid against "contains" if at least one of its elements is valid against the given schema.'),
  propertyNames: D("If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),
  const: D("An instance validates successfully against this keyword if its value is equal to the value of the keyword."),
  contentMediaType: D("Describes the media type of a string property."),
  contentEncoding: D("Describes the content encoding of a string property."),
  if: D('The validation outcome of the "if" subschema controls which of the "then" or "else" keywords are evaluated.'),
  then: D('The "if" subschema is used for validation when the "if" subschema succeeds.'),
  else: D('The "else" subschema is used for validation when the "if" subschema fails.')
};
for (const e in Hi.schemas) {
  const t = Hi.schemas[e];
  for (const n in t.properties) {
    let r = t.properties[n];
    typeof r == "boolean" && (r = t.properties[n] = {});
    const i = Fh[n];
    i && (r.description = i);
  }
}
var Su;
(() => {
  var e = { 470: (i) => {
    function s(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function a(o, u) {
      for (var h, f = "", m = 0, p = -1, g = 0, d = 0; d <= o.length; ++d) {
        if (d < o.length)
          h = o.charCodeAt(d);
        else {
          if (h === 47)
            break;
          h = 47;
        }
        if (h === 47) {
          if (!(p === d - 1 || g === 1))
            if (p !== d - 1 && g === 2) {
              if (f.length < 2 || m !== 2 || f.charCodeAt(f.length - 1) !== 46 || f.charCodeAt(f.length - 2) !== 46) {
                if (f.length > 2) {
                  var _ = f.lastIndexOf("/");
                  if (_ !== f.length - 1) {
                    _ === -1 ? (f = "", m = 0) : m = (f = f.slice(0, _)).length - 1 - f.lastIndexOf("/"), p = d, g = 0;
                    continue;
                  }
                } else if (f.length === 2 || f.length === 1) {
                  f = "", m = 0, p = d, g = 0;
                  continue;
                }
              }
              u && (f.length > 0 ? f += "/.." : f = "..", m = 2);
            } else
              f.length > 0 ? f += "/" + o.slice(p + 1, d) : f = o.slice(p + 1, d), m = d - p - 1;
          p = d, g = 0;
        } else
          h === 46 && g !== -1 ? ++g : g = -1;
      }
      return f;
    }
    var l = { resolve: function() {
      for (var o, u = "", h = !1, f = arguments.length - 1; f >= -1 && !h; f--) {
        var m;
        f >= 0 ? m = arguments[f] : (o === void 0 && (o = process.cwd()), m = o), s(m), m.length !== 0 && (u = m + "/" + u, h = m.charCodeAt(0) === 47);
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
      for (var f = o.length, m = f - h, p = 1; p < u.length && u.charCodeAt(p) === 47; ++p)
        ;
      for (var g = u.length - p, d = m < g ? m : g, _ = -1, y = 0; y <= d; ++y) {
        if (y === d) {
          if (g > d) {
            if (u.charCodeAt(p + y) === 47)
              return u.slice(p + y + 1);
            if (y === 0)
              return u.slice(p + y);
          } else
            m > d && (o.charCodeAt(h + y) === 47 ? _ = y : y === 0 && (_ = 0));
          break;
        }
        var x = o.charCodeAt(h + y);
        if (x !== u.charCodeAt(p + y))
          break;
        x === 47 && (_ = y);
      }
      var b = "";
      for (y = h + _ + 1; y <= f; ++y)
        y !== f && o.charCodeAt(y) !== 47 || (b.length === 0 ? b += ".." : b += "/..");
      return b.length > 0 ? b + u.slice(p + _) : (p += _, u.charCodeAt(p) === 47 && ++p, u.slice(p));
    }, _makeLong: function(o) {
      return o;
    }, dirname: function(o) {
      if (s(o), o.length === 0)
        return ".";
      for (var u = o.charCodeAt(0), h = u === 47, f = -1, m = !0, p = o.length - 1; p >= 1; --p)
        if ((u = o.charCodeAt(p)) === 47) {
          if (!m) {
            f = p;
            break;
          }
        } else
          m = !1;
      return f === -1 ? h ? "/" : "." : h && f === 1 ? "//" : o.slice(0, f);
    }, basename: function(o, u) {
      if (u !== void 0 && typeof u != "string")
        throw new TypeError('"ext" argument must be a string');
      s(o);
      var h, f = 0, m = -1, p = !0;
      if (u !== void 0 && u.length > 0 && u.length <= o.length) {
        if (u.length === o.length && u === o)
          return "";
        var g = u.length - 1, d = -1;
        for (h = o.length - 1; h >= 0; --h) {
          var _ = o.charCodeAt(h);
          if (_ === 47) {
            if (!p) {
              f = h + 1;
              break;
            }
          } else
            d === -1 && (p = !1, d = h + 1), g >= 0 && (_ === u.charCodeAt(g) ? --g == -1 && (m = h) : (g = -1, m = d));
        }
        return f === m ? m = d : m === -1 && (m = o.length), o.slice(f, m);
      }
      for (h = o.length - 1; h >= 0; --h)
        if (o.charCodeAt(h) === 47) {
          if (!p) {
            f = h + 1;
            break;
          }
        } else
          m === -1 && (p = !1, m = h + 1);
      return m === -1 ? "" : o.slice(f, m);
    }, extname: function(o) {
      s(o);
      for (var u = -1, h = 0, f = -1, m = !0, p = 0, g = o.length - 1; g >= 0; --g) {
        var d = o.charCodeAt(g);
        if (d !== 47)
          f === -1 && (m = !1, f = g + 1), d === 46 ? u === -1 ? u = g : p !== 1 && (p = 1) : u !== -1 && (p = -1);
        else if (!m) {
          h = g + 1;
          break;
        }
      }
      return u === -1 || f === -1 || p === 0 || p === 1 && u === f - 1 && u === h + 1 ? "" : o.slice(u, f);
    }, format: function(o) {
      if (o === null || typeof o != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
      return (function(u, h) {
        var f = h.dir || h.root, m = h.base || (h.name || "") + (h.ext || "");
        return f ? f === h.root ? f + m : f + "/" + m : m;
      })(0, o);
    }, parse: function(o) {
      s(o);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (o.length === 0)
        return u;
      var h, f = o.charCodeAt(0), m = f === 47;
      m ? (u.root = "/", h = 1) : h = 0;
      for (var p = -1, g = 0, d = -1, _ = !0, y = o.length - 1, x = 0; y >= h; --y)
        if ((f = o.charCodeAt(y)) !== 47)
          d === -1 && (_ = !1, d = y + 1), f === 46 ? p === -1 ? p = y : x !== 1 && (x = 1) : p !== -1 && (x = -1);
        else if (!_) {
          g = y + 1;
          break;
        }
      return p === -1 || d === -1 || x === 0 || x === 1 && p === d - 1 && p === g + 1 ? d !== -1 && (u.base = u.name = g === 0 && m ? o.slice(1, d) : o.slice(g, d)) : (g === 0 && m ? (u.name = o.slice(1, p), u.base = o.slice(1, d)) : (u.name = o.slice(g, p), u.base = o.slice(g, d)), u.ext = o.slice(p, d)), g > 0 ? u.dir = o.slice(0, g - 1) : m && (u.dir = "/"), u;
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
    n.r(r), n.d(r, { URI: () => m, Utils: () => q }), typeof process == "object" ? i = process.platform === "win32" : typeof navigator == "object" && (i = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, l = /^\/\//;
    function o(U, k) {
      if (!U.scheme && k)
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${U.authority}", path: "${U.path}", query: "${U.query}", fragment: "${U.fragment}"}`);
      if (U.scheme && !s.test(U.scheme))
        throw new Error("[UriError]: Scheme contains illegal characters.");
      if (U.path) {
        if (U.authority) {
          if (!a.test(U.path))
            throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(U.path))
          throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", h = "/", f = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class m {
      constructor(k, I, P, V, B, $ = !1) {
        wt(this, "scheme");
        wt(this, "authority");
        wt(this, "path");
        wt(this, "query");
        wt(this, "fragment");
        typeof k == "object" ? (this.scheme = k.scheme || u, this.authority = k.authority || u, this.path = k.path || u, this.query = k.query || u, this.fragment = k.fragment || u) : (this.scheme = /* @__PURE__ */ (function(J, Y) {
          return J || Y ? J : "file";
        })(k, $), this.authority = I || u, this.path = (function(J, Y) {
          switch (J) {
            case "https":
            case "http":
            case "file":
              Y ? Y[0] !== h && (Y = h + Y) : Y = h;
          }
          return Y;
        })(this.scheme, P || u), this.query = V || u, this.fragment = B || u, o(this, $));
      }
      static isUri(k) {
        return k instanceof m || !!k && typeof k.authority == "string" && typeof k.fragment == "string" && typeof k.path == "string" && typeof k.query == "string" && typeof k.scheme == "string" && typeof k.fsPath == "string" && typeof k.with == "function" && typeof k.toString == "function";
      }
      get fsPath() {
        return x(this);
      }
      with(k) {
        if (!k)
          return this;
        let { scheme: I, authority: P, path: V, query: B, fragment: $ } = k;
        return I === void 0 ? I = this.scheme : I === null && (I = u), P === void 0 ? P = this.authority : P === null && (P = u), V === void 0 ? V = this.path : V === null && (V = u), B === void 0 ? B = this.query : B === null && (B = u), $ === void 0 ? $ = this.fragment : $ === null && ($ = u), I === this.scheme && P === this.authority && V === this.path && B === this.query && $ === this.fragment ? this : new g(I, P, V, B, $);
      }
      static parse(k, I = !1) {
        const P = f.exec(k);
        return P ? new g(P[2] || u, S(P[4] || u), S(P[5] || u), S(P[7] || u), S(P[9] || u), I) : new g(u, u, u, u, u);
      }
      static file(k) {
        let I = u;
        if (i && (k = k.replace(/\\/g, h)), k[0] === h && k[1] === h) {
          const P = k.indexOf(h, 2);
          P === -1 ? (I = k.substring(2), k = h) : (I = k.substring(2, P), k = k.substring(P) || h);
        }
        return new g("file", I, k, u, u);
      }
      static from(k) {
        const I = new g(k.scheme, k.authority, k.path, k.query, k.fragment);
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
          if (k instanceof m)
            return k;
          {
            const I = new g(k);
            return I._formatted = k.external, I._fsPath = k._sep === p ? k.fsPath : null, I;
          }
        }
        return k;
      }
    }
    const p = i ? 1 : void 0;
    class g extends m {
      constructor() {
        super(...arguments);
        wt(this, "_formatted", null);
        wt(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = x(this)), this._fsPath;
      }
      toString(I = !1) {
        return I ? b(this, !0) : (this._formatted || (this._formatted = b(this, !1)), this._formatted);
      }
      toJSON() {
        const I = { $mid: 1 };
        return this._fsPath && (I.fsPath = this._fsPath, I._sep = p), this._formatted && (I.external = this._formatted), this.path && (I.path = this.path), this.scheme && (I.scheme = this.scheme), this.authority && (I.authority = this.authority), this.query && (I.query = this.query), this.fragment && (I.fragment = this.fragment), I;
      }
    }
    const d = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function _(U, k, I) {
      let P, V = -1;
      for (let B = 0; B < U.length; B++) {
        const $ = U.charCodeAt(B);
        if ($ >= 97 && $ <= 122 || $ >= 65 && $ <= 90 || $ >= 48 && $ <= 57 || $ === 45 || $ === 46 || $ === 95 || $ === 126 || k && $ === 47 || I && $ === 91 || I && $ === 93 || I && $ === 58)
          V !== -1 && (P += encodeURIComponent(U.substring(V, B)), V = -1), P !== void 0 && (P += U.charAt(B));
        else {
          P === void 0 && (P = U.substr(0, B));
          const J = d[$];
          J !== void 0 ? (V !== -1 && (P += encodeURIComponent(U.substring(V, B)), V = -1), P += J) : V === -1 && (V = B);
        }
      }
      return V !== -1 && (P += encodeURIComponent(U.substring(V))), P !== void 0 ? P : U;
    }
    function y(U) {
      let k;
      for (let I = 0; I < U.length; I++) {
        const P = U.charCodeAt(I);
        P === 35 || P === 63 ? (k === void 0 && (k = U.substr(0, I)), k += d[P]) : k !== void 0 && (k += U[I]);
      }
      return k !== void 0 ? k : U;
    }
    function x(U, k) {
      let I;
      return I = U.authority && U.path.length > 1 && U.scheme === "file" ? `//${U.authority}${U.path}` : U.path.charCodeAt(0) === 47 && (U.path.charCodeAt(1) >= 65 && U.path.charCodeAt(1) <= 90 || U.path.charCodeAt(1) >= 97 && U.path.charCodeAt(1) <= 122) && U.path.charCodeAt(2) === 58 ? U.path[1].toLowerCase() + U.path.substr(2) : U.path, i && (I = I.replace(/\//g, "\\")), I;
    }
    function b(U, k) {
      const I = k ? y : _;
      let P = "", { scheme: V, authority: B, path: $, query: J, fragment: Y } = U;
      if (V && (P += V, P += ":"), (B || V === "file") && (P += h, P += h), B) {
        let C = B.indexOf("@");
        if (C !== -1) {
          const me = B.substr(0, C);
          B = B.substr(C + 1), C = me.lastIndexOf(":"), C === -1 ? P += I(me, !1, !1) : (P += I(me.substr(0, C), !1, !1), P += ":", P += I(me.substr(C + 1), !1, !0)), P += "@";
        }
        B = B.toLowerCase(), C = B.lastIndexOf(":"), C === -1 ? P += I(B, !1, !0) : (P += I(B.substr(0, C), !1, !0), P += B.substr(C));
      }
      if ($) {
        if ($.length >= 3 && $.charCodeAt(0) === 47 && $.charCodeAt(2) === 58) {
          const C = $.charCodeAt(1);
          C >= 65 && C <= 90 && ($ = `/${String.fromCharCode(C + 32)}:${$.substr(3)}`);
        } else if ($.length >= 2 && $.charCodeAt(1) === 58) {
          const C = $.charCodeAt(0);
          C >= 65 && C <= 90 && ($ = `${String.fromCharCode(C + 32)}:${$.substr(2)}`);
        }
        P += I($, !0, !1);
      }
      return J && (P += "?", P += I(J, !1, !1)), Y && (P += "#", P += k ? Y : _(Y, !1, !1)), P;
    }
    function A(U) {
      try {
        return decodeURIComponent(U);
      } catch {
        return U.length > 3 ? U.substr(0, 3) + A(U.substr(3)) : U;
      }
    }
    const N = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function S(U) {
      return U.match(N) ? U.replace(N, (k) => A(k)) : U;
    }
    var L = n(470);
    const R = L.posix || L, F = "/";
    var q;
    (function(U) {
      U.joinPath = function(k, ...I) {
        return k.with({ path: R.join(k.path, ...I) });
      }, U.resolvePath = function(k, ...I) {
        let P = k.path, V = !1;
        P[0] !== F && (P = F + P, V = !0);
        let B = R.resolve(P, ...I);
        return V && B[0] === F && !k.authority && (B = B.substring(1)), k.with({ path: B });
      }, U.dirname = function(k) {
        if (k.path.length === 0 || k.path === F)
          return k;
        let I = R.dirname(k.path);
        return I.length === 1 && I.charCodeAt(0) === 46 && (I = ""), k.with({ path: I });
      }, U.basename = function(k) {
        return R.basename(k.path);
      }, U.extname = function(k) {
        return R.extname(k.path);
      };
    })(q || (q = {}));
  })(), Su = r;
})();
var { URI: Nn, Utils: um } = Su;
function Uh(e, t) {
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
        const f = n[u - 1];
        let m = 1;
        for (; n[u + 1] === "*"; )
          m++, u++;
        const p = n[u + 1];
        s ? m > 1 && (f === "/" || f === void 0 || f === "{" || f === ",") && (p === "/" || p === void 0 || p === "," || p === "}") ? (p === "/" ? u++ : f === "/" && r.endsWith("\\/") && (r = r.substr(0, r.length - 2)), r += "((?:[^/]*(?:/|$))*)") : r += "([^/]*)" : r += ".*";
        break;
      default:
        r += o;
    }
  return (!l || !~l.indexOf("g")) && (r = "^" + r + "$"), new RegExp(r, l);
}
var Dh = "!", Oh = "/", Bh = class {
  constructor(e, t, n) {
    this.folderUri = t, this.uris = n, this.globWrappers = [];
    try {
      for (let r of e) {
        const i = r[0] !== Dh;
        i || (r = r.substring(1)), r.length > 0 && (r[0] === Oh && (r = r.substring(1)), this.globWrappers.push({
          regexp: Uh("**/" + r, { extended: !0, globstar: !0 }),
          include: i
        }));
      }
      t && (t = Mu(t), t.endsWith("/") || (t = t + "/"), this.folderUri = t);
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
}, Vh = class {
  constructor(e, t, n) {
    this.service = e, this.uri = t, this.dependencies = /* @__PURE__ */ new Set(), this.anchors = void 0, n && (this.unresolvedSchema = this.service.promise.resolve(new Sn(n)));
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
}, Sn = class {
  constructor(e, t = []) {
    this.schema = e, this.errors = t;
  }
}, Vl = class {
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
        const i = kr(r);
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
}, $h = class {
  constructor(e, t, n) {
    this.contextService = t, this.requestService = e, this.promiseConstructor = n || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = [], this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {};
  }
  getRegisteredSchemaIds(e) {
    return Object.keys(this.registeredSchemasIds).filter((t) => {
      const n = Nn.parse(t).scheme;
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
    e = Nt(e);
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
        const r = Nt(n);
        this.contributionSchemas[r] = this.addSchemaHandle(r, t[n]);
      }
    }
    if (Array.isArray(e.schemaAssociations)) {
      const t = e.schemaAssociations;
      for (let n of t) {
        const r = n.uris.map(Nt), i = this.addFilePatternAssociation(n.pattern, n.folderUri, r);
        this.contributionAssociations.push(i);
      }
    }
  }
  addSchemaHandle(e, t) {
    const n = new Vh(this, e, t);
    return this.schemasById[e] = n, n;
  }
  getOrAddSchemaHandle(e, t) {
    return this.schemasById[e] || this.addSchemaHandle(e, t);
  }
  addFilePatternAssociation(e, t, n) {
    const r = new Bh(e, t, n);
    return this.filePatternAssociations.push(r), r;
  }
  registerExternalSchema(e) {
    const t = Nt(e.uri);
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
    const t = Nt(e), n = this.schemasById[t];
    return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
  }
  loadSchema(e) {
    if (!this.requestService) {
      const t = D("Unable to load schema from '{0}'. No schema request service available", kn(e));
      return this.promise.resolve(new Sn({}, [t]));
    }
    return e.startsWith("http://json-schema.org/") && (e = "https" + e.substring(4)), this.requestService(e).then((t) => {
      if (!t) {
        const s = D("Unable to load schema from '{0}': No content.", kn(e));
        return new Sn({}, [s]);
      }
      const n = [];
      t.charCodeAt(0) === 65279 && (n.push(D("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", kn(e))), t = t.trimStart());
      let r = {};
      const i = [];
      return r = ih(t, i), i.length && n.push(D("Unable to parse content from '{0}': Parse error at offset {1}.", kn(e), i[0].offset)), new Sn(r, n);
    }, (t) => {
      let n = t.toString();
      const r = t.toString().split("Error: ");
      return r.length > 1 && (n = r[1]), Jn(n, ".") && (n = n.substr(0, n.length - 1)), new Sn({}, [D("Unable to load schema from '{0}': {1}.", kn(e), n)]);
    });
  }
  resolveSchemaContent(e, t) {
    const n = e.errors.slice(0), r = e.schema;
    let i = r.$schema ? Nt(r.$schema) : void 0;
    if (i === "http://json-schema.org/draft-03/schema")
      return this.promise.resolve(new Vl({}, [D("Draft-03 schemas are not supported.")], [], i));
    let s = /* @__PURE__ */ new Set();
    const a = this.contextService, l = (g, d) => {
      d = decodeURIComponent(d);
      let _ = g;
      return d[0] === "/" && (d = d.substring(1)), d.split("/").some((y) => (y = y.replace(/~1/g, "/").replace(/~0/g, "~"), _ = _[y], !_)), _;
    }, o = (g, d, _) => (d.anchors || (d.anchors = p(g)), d.anchors.get(_)), u = (g, d) => {
      for (const _ in d)
        d.hasOwnProperty(_) && _ !== "id" && _ !== "$id" && (g[_] = d[_]);
    }, h = (g, d, _, y) => {
      let x;
      y === void 0 || y.length === 0 ? x = d : y.charAt(0) === "/" ? x = l(d, y) : x = o(d, _, y), x ? u(g, x) : n.push(D("$ref '{0}' in '{1}' can not be resolved.", y || "", _.uri));
    }, f = (g, d, _, y) => {
      a && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(d) && (d = a.resolveRelativePath(d, y.uri)), d = Nt(d);
      const x = this.getOrAddSchemaHandle(d);
      return x.getUnresolvedSchema().then((b) => {
        if (y.dependencies.add(d), b.errors.length) {
          const A = _ ? d + "#" + _ : d;
          n.push(D("Problems loading reference '{0}': {1}", A, b.errors[0]));
        }
        return h(g, b.schema, x, _), m(g, b.schema, x);
      });
    }, m = (g, d, _) => {
      const y = [];
      return this.traverseNodes(g, (x) => {
        const b = /* @__PURE__ */ new Set();
        for (; x.$ref; ) {
          const A = x.$ref, N = A.split("#", 2);
          if (delete x.$ref, N[0].length > 0) {
            y.push(f(x, N[0], N[1], _));
            return;
          } else if (!b.has(A)) {
            const S = N[1];
            h(x, d, _, S), b.add(A);
          }
        }
        x.$recursiveRef && s.add("$recursiveRef"), x.$dynamicRef && s.add("$dynamicRef");
      }), this.promise.all(y);
    }, p = (g) => {
      const d = /* @__PURE__ */ new Map();
      return this.traverseNodes(g, (_) => {
        const y = _.$id || _.id, x = Nu(y) && y.charAt(0) === "#" ? y.substring(1) : _.$anchor;
        x && (d.has(x) ? n.push(D("Duplicate anchor declaration: '{0}'", x)) : d.set(x, _)), _.$recursiveAnchor && s.add("$recursiveAnchor"), _.$dynamicAnchor && s.add("$dynamicAnchor");
      }), d;
    };
    return m(r, r, t).then((g) => {
      let d = [];
      return s.size && d.push(D("The schema uses meta-schema features ({0}) that are not yet supported by the validator.", Array.from(s.keys()).join(", "))), new Vl(r, n, d, i);
    });
  }
  traverseNodes(e, t) {
    if (!e || typeof e != "object")
      return Promise.resolve(null);
    const n = /* @__PURE__ */ new Set(), r = (...u) => {
      for (const h of u)
        Rt(h) && l.push(h);
    }, i = (...u) => {
      for (const h of u)
        if (Rt(h))
          for (const f in h) {
            const p = h[f];
            Rt(p) && l.push(p);
          }
    }, s = (...u) => {
      for (const h of u)
        if (Array.isArray(h))
          for (const f of h)
            Rt(f) && l.push(f);
    }, a = (u) => {
      if (Array.isArray(u))
        for (const h of u)
          Rt(h) && l.push(h);
      else Rt(u) && l.push(u);
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
    const t = /* @__PURE__ */ Object.create(null), n = [], r = Mu(e);
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
        const s = Nt(i);
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
      const r = n.id || "schemaservice://untitled/matchingSchemas/" + qh++;
      return this.addSchemaHandle(r, n).getResolvedSchema().then((s) => t.getMatchingSchemas(s.schema).filter((a) => !a.inverted));
    }
    return this.getSchemaForResource(e.uri, t).then((r) => r ? t.getMatchingSchemas(r.schema).filter((i) => !i.inverted) : []);
  }
}, qh = 0;
function Nt(e) {
  try {
    return Nn.parse(e).toString(!0);
  } catch {
    return e;
  }
}
function Mu(e) {
  try {
    return Nn.parse(e).with({ fragment: null, query: null }).toString(!0);
  } catch {
    return e;
  }
}
function kn(e) {
  try {
    const t = Nn.parse(e);
    if (t.scheme === "file")
      return t.fsPath;
  } catch {
  }
  return e;
}
function Hh(e, t) {
  const n = [], r = [], i = [];
  let s = -1;
  const a = qt(e.getText(), !1);
  let l = a.scan();
  function o(g) {
    n.push(g), r.push(i.length);
  }
  for (; l !== 17; ) {
    switch (l) {
      case 1:
      case 3: {
        const g = e.positionAt(a.getTokenOffset()).line, d = { startLine: g, endLine: g, kind: l === 1 ? "object" : "array" };
        i.push(d);
        break;
      }
      case 2:
      case 4: {
        const g = l === 2 ? "object" : "array";
        if (i.length > 0 && i[i.length - 1].kind === g) {
          const d = i.pop(), _ = e.positionAt(a.getTokenOffset()).line;
          d && _ > d.startLine + 1 && s !== d.startLine && (d.endLine = _ - 1, o(d), s = d.startLine);
        }
        break;
      }
      case 13: {
        const g = e.positionAt(a.getTokenOffset()).line, d = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;
        a.getTokenError() === 1 && g + 1 < e.lineCount ? a.setPosition(e.offsetAt(ce.create(g + 1, 0))) : g < d && (o({ startLine: g, endLine: d, kind: On.Comment }), s = g);
        break;
      }
      case 12: {
        const d = e.getText().substr(a.getTokenOffset(), a.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);
        if (d) {
          const _ = e.positionAt(a.getTokenOffset()).line;
          if (d[1]) {
            const y = { startLine: _, endLine: _, kind: On.Region };
            i.push(y);
          } else {
            let y = i.length - 1;
            for (; y >= 0 && i[y].kind !== On.Region; )
              y--;
            if (y >= 0) {
              const x = i[y];
              i.length = y, _ > x.startLine && s !== x.startLine && (x.endLine = _, o(x), s = x.startLine);
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
  for (let g of r)
    g < 30 && (h[g] = (h[g] || 0) + 1);
  let f = 0, m = 0;
  for (let g = 0; g < h.length; g++) {
    const d = h[g];
    if (d) {
      if (d + f > u) {
        m = g;
        break;
      }
      f += d;
    }
  }
  const p = [];
  for (let g = 0; g < n.length; g++) {
    const d = r[g];
    typeof d == "number" && (d < m || d === m && f++ < u) && p.push(n[g]);
  }
  return p;
}
function Wh(e, t, n) {
  function r(l) {
    let o = e.offsetAt(l), u = n.getNodeFromOffset(o, !0);
    const h = [];
    for (; u; ) {
      switch (u.type) {
        case "string":
        case "object":
        case "array":
          const m = u.offset + 1, p = u.offset + u.length - 1;
          m < p && o >= m && o <= p && h.push(i(m, p)), h.push(i(u.offset, u.offset + u.length));
          break;
        case "number":
        case "boolean":
        case "null":
        case "property":
          h.push(i(u.offset, u.offset + u.length));
          break;
      }
      if (u.type === "property" || u.parent && u.parent.type === "array") {
        const m = a(
          u.offset + u.length,
          5
          /* SyntaxKind.CommaToken */
        );
        m !== -1 && h.push(i(u.offset, m));
      }
      u = u.parent;
    }
    let f;
    for (let m = h.length - 1; m >= 0; m--)
      f = Pr.create(h[m], f);
    return f || (f = Pr.create(K.create(l, l))), f;
  }
  function i(l, o) {
    return K.create(e.positionAt(l), e.positionAt(o));
  }
  const s = qt(e.getText(), !0);
  function a(l, o) {
    return s.setPosition(l), s.scan() === o ? s.getTokenOffset() + s.getTokenLength() : -1;
  }
  return t.map(r);
}
function Wi(e, t, n) {
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
  return lh(e.getText(), r, i).map((s) => ut.replace(K.create(e.positionAt(s.offset), e.positionAt(s.offset + s.length)), s.content));
}
var be;
(function(e) {
  e[e.Object = 0] = "Object", e[e.Array = 1] = "Array";
})(be || (be = {}));
var sr = class {
  constructor(e, t) {
    this.propertyName = e ?? "", this.beginningLineNumber = t, this.childrenProperties = [], this.lastProperty = !1, this.noKeyName = !1;
  }
  addChildProperty(e) {
    if (e.parent = this, this.childrenProperties.length > 0) {
      let t = 0;
      e.noKeyName ? t = this.childrenProperties.length : t = Gh(this.childrenProperties, e, jh), t < 0 && (t = t * -1 - 1), this.childrenProperties.splice(t, 0, e);
    } else
      this.childrenProperties.push(e);
    return e;
  }
};
function jh(e, t) {
  const n = e.propertyName.toLowerCase(), r = t.propertyName.toLowerCase();
  return n < r ? -1 : n > r ? 1 : 0;
}
function Gh(e, t, n) {
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
function zh(e, t) {
  const n = {
    ...t,
    keepLines: !1
    // keepLines must be false so that the properties are on separate lines for the sorting
  }, r = Ce.applyEdits(e, Wi(e, n, void 0)), i = Ce.create("test://test.json", "json", 0, r), s = Xh(i), a = Jh(i, s), l = Wi(a, n, void 0), o = Ce.applyEdits(a, l);
  return [ut.replace(K.create(ce.create(0, 0), e.positionAt(e.getText().length)), o)];
}
function Xh(e) {
  const t = e.getText(), n = qt(t, !1);
  let r = new sr(), i = r, s = r, a = r, l, o = 0, u = 0, h, f, m = -1, p = -1, g = 0, d = 0, _ = [], y = !1, x = !1;
  for (; (l = n.scan()) !== 17; ) {
    if (y === !0 && l !== 14 && l !== 15 && l !== 12 && l !== 13 && s.endLineNumber === void 0) {
      let b = n.getTokenStartLine();
      f === 2 || f === 4 ? a.endLineNumber = b - 1 : s.endLineNumber = b - 1, g = b, y = !1;
    }
    if (x === !0 && l !== 14 && l !== 15 && l !== 12 && l !== 13 && (g = n.getTokenStartLine(), x = !1), n.getTokenStartLine() !== o) {
      for (let b = o; b < n.getTokenStartLine(); b++) {
        const A = e.getText(K.create(ce.create(b, 0), ce.create(b + 1, 0))).length;
        u = u + A;
      }
      o = n.getTokenStartLine();
    }
    switch (l) {
      case 10: {
        if (h === void 0 || h === 1 || h === 5 && _[_.length - 1] === be.Object) {
          const b = new sr(n.getTokenValue(), g);
          a = s, s = i.addChildProperty(b);
        }
        break;
      }
      case 3: {
        if (r.beginningLineNumber === void 0 && (r.beginningLineNumber = n.getTokenStartLine()), _[_.length - 1] === be.Object)
          i = s;
        else if (_[_.length - 1] === be.Array) {
          const b = new sr(n.getTokenValue(), g);
          b.noKeyName = !0, a = s, s = i.addChildProperty(b), i = s;
        }
        _.push(be.Array), s.type = be.Array, g = n.getTokenStartLine(), g++;
        break;
      }
      case 1: {
        if (r.beginningLineNumber === void 0)
          r.beginningLineNumber = n.getTokenStartLine();
        else if (_[_.length - 1] === be.Array) {
          const b = new sr(n.getTokenValue(), g);
          b.noKeyName = !0, a = s, s = i.addChildProperty(b);
        }
        s.type = be.Object, _.push(be.Object), i = s, g = n.getTokenStartLine(), g++;
        break;
      }
      case 4: {
        d = n.getTokenStartLine(), _.pop(), s.endLineNumber === void 0 && (h === 2 || h === 4) && (s.endLineNumber = d - 1, s.lastProperty = !0, s.lineWhereToAddComma = m, s.indexWhereToAddComa = p, a = s, s = s ? s.parent : void 0, i = s), r.endLineNumber = d, g = d + 1;
        break;
      }
      case 2: {
        d = n.getTokenStartLine(), _.pop(), h !== 1 && (s.endLineNumber === void 0 && (s.endLineNumber = d - 1, s.lastProperty = !0, s.lineWhereToAddComma = m, s.indexWhereToAddComa = p), a = s, s = s ? s.parent : void 0, i = s), r.endLineNumber = n.getTokenStartLine(), g = d + 1;
        break;
      }
      case 5: {
        d = n.getTokenStartLine(), s.endLineNumber === void 0 && (_[_.length - 1] === be.Object || _[_.length - 1] === be.Array && (h === 2 || h === 4)) && (s.endLineNumber = d, s.commaIndex = n.getTokenOffset() - u, s.commaLine = d), (h === 2 || h === 4) && (a = s, s = s ? s.parent : void 0, i = s), g = d + 1;
        break;
      }
      case 13: {
        h === 5 && m === n.getTokenStartLine() && (_[_.length - 1] === be.Array && (f === 2 || f === 4) || _[_.length - 1] === be.Object) && (_[_.length - 1] === be.Array && (f === 2 || f === 4) || _[_.length - 1] === be.Object) && (s.endLineNumber = void 0, y = !0), (h === 1 || h === 3) && m === n.getTokenStartLine() && (x = !0);
        break;
      }
    }
    l !== 14 && l !== 13 && l !== 12 && l !== 15 && (f = h, h = l, m = n.getTokenStartLine(), p = n.getTokenOffset() + n.getTokenLength() - u);
  }
  return r;
}
function Jh(e, t) {
  if (t.childrenProperties.length === 0)
    return e;
  const n = Ce.create("test://test.json", "json", 0, e.getText()), r = [];
  for ($l(r, t, t.beginningLineNumber); r.length > 0; ) {
    const i = r.shift(), s = i.propertyTreeArray;
    let a = i.beginningLineNumber;
    for (let l = 0; l < s.length; l++) {
      const o = s[l], u = K.create(ce.create(o.beginningLineNumber, 0), ce.create(o.endLineNumber + 1, 0)), h = e.getText(u), f = Ce.create("test://test.json", "json", 0, h);
      if (o.lastProperty === !0 && l !== s.length - 1) {
        const g = o.lineWhereToAddComma - o.beginningLineNumber, d = o.indexWhereToAddComa, _ = {
          range: K.create(ce.create(g, d), ce.create(g, d)),
          text: ","
        };
        Ce.update(f, [_], 1);
      } else if (o.lastProperty === !1 && l === s.length - 1) {
        const g = o.commaIndex, _ = o.commaLine - o.beginningLineNumber, y = {
          range: K.create(ce.create(_, g), ce.create(_, g + 1)),
          text: ""
        };
        Ce.update(f, [y], 1);
      }
      const m = o.endLineNumber - o.beginningLineNumber + 1, p = {
        range: K.create(ce.create(a, 0), ce.create(a + m, 0)),
        text: f.getText()
      };
      Ce.update(n, [p], 1), $l(r, o, a), a = a + m;
    }
  }
  return n;
}
function $l(e, t, n) {
  if (t.childrenProperties.length !== 0)
    if (t.type === be.Object) {
      let r = 1 / 0;
      for (const s of t.childrenProperties)
        s.beginningLineNumber < r && (r = s.beginningLineNumber);
      const i = r - t.beginningLineNumber;
      n = n + i, e.push(new Pu(n, t.childrenProperties));
    } else t.type === be.Array && Iu(e, t, n);
}
function Iu(e, t, n) {
  for (const r of t.childrenProperties) {
    if (r.type === be.Object) {
      let i = 1 / 0;
      for (const a of r.childrenProperties)
        a.beginningLineNumber < i && (i = a.beginningLineNumber);
      const s = i - r.beginningLineNumber;
      e.push(new Pu(n + r.beginningLineNumber - t.beginningLineNumber + s, r.childrenProperties));
    }
    r.type === be.Array && Iu(e, r, n + r.beginningLineNumber - t.beginningLineNumber);
  }
}
var Pu = class {
  constructor(e, t) {
    this.beginningLineNumber = e, this.propertyTreeArray = t;
  }
};
function Yh(e, t) {
  const n = [];
  return t.visit((r) => {
    var i;
    if (r.type === "property" && r.keyNode.value === "$ref" && ((i = r.valueNode) == null ? void 0 : i.type) === "string") {
      const s = r.valueNode.value, a = Zh(t, s);
      if (a) {
        const l = e.positionAt(a.offset);
        n.push({
          target: `${e.uri}#${l.line + 1},${l.character + 1}`,
          range: Qh(e, r.valueNode)
        });
      }
    }
    return !0;
  }), Promise.resolve(n);
}
function Qh(e, t) {
  return K.create(e.positionAt(t.offset + 1), e.positionAt(t.offset + t.length - 1));
}
function Zh(e, t) {
  const n = Kh(t);
  return n ? ji(n, e.root) : null;
}
function ji(e, t) {
  if (!t)
    return null;
  if (e.length === 0)
    return t;
  const n = e.shift();
  if (t && t.type === "object") {
    const r = t.properties.find((i) => i.keyNode.value === n);
    return r ? ji(e, r.valueNode) : null;
  } else if (t && t.type === "array" && n.match(/^(0|[1-9][0-9]*)$/)) {
    const r = Number.parseInt(n), i = t.items[r];
    return i ? ji(e, i) : null;
  }
  return null;
}
function Kh(e) {
  return e === "#" ? [] : e[0] !== "#" || e[1] !== "/" ? null : e.substring(2).split(/\//).map(Ch);
}
function Ch(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function em(e) {
  const t = e.promiseConstructor || Promise, n = new $h(e.schemaRequestService, e.workspaceContext, t);
  n.setSchemaContributions(Hi);
  const r = new xh(n, e.contributions, t, e.clientCapabilities), i = new Ah(n, e.contributions, t), s = new Ph(n), a = new Rh(n, t);
  return {
    configure: (l) => {
      var o;
      n.clearExternalSchemas(), (o = l.schemas) == null || o.forEach(n.registerExternalSchema.bind(n)), a.configure(l);
    },
    resetSchema: (l) => n.onResourceChange(l),
    doValidation: a.doValidation.bind(a),
    getLanguageStatus: a.getLanguageStatus.bind(a),
    parseJSONDocument: (l) => Nh(l, { collectComments: !0 }),
    newJSONDocument: (l, o) => Lh(l, o),
    getMatchingSchemas: n.getMatchingSchemas.bind(n),
    doResolve: r.doResolve.bind(r),
    doComplete: r.doComplete.bind(r),
    findDocumentSymbols: s.findDocumentSymbols.bind(s),
    findDocumentSymbols2: s.findDocumentSymbols2.bind(s),
    findDocumentColors: s.findDocumentColors.bind(s),
    getColorPresentations: s.getColorPresentations.bind(s),
    doHover: i.doHover.bind(i),
    getFoldingRanges: Hh,
    getSelectionRanges: Wh,
    findDefinition: () => Promise.resolve([]),
    findLinks: Yh,
    format: (l, o, u) => Wi(l, u, o),
    sort: (l, o) => zh(l, o)
  };
}
var Fu;
typeof fetch < "u" && (Fu = function(e) {
  return fetch(e).then((t) => t.text());
});
var tm = class {
  constructor(e, t) {
    this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = em({
      workspaceContext: {
        resolveRelativePath: (n, r) => {
          const i = r.substr(0, r.lastIndexOf("/") + 1);
          return im(i, n);
        }
      },
      schemaRequestService: t.enableSchemaRequest ? Fu : void 0,
      clientCapabilities: Vi.LATEST
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
        return Ce.create(
          e,
          this._languageId,
          n.version,
          n.getValue()
        );
    return null;
  }
}, nm = 47, Jr = 46;
function rm(e) {
  return e.charCodeAt(0) === nm;
}
function im(e, t) {
  if (rm(t)) {
    const n = Nn.parse(e), r = t.split("/");
    return n.with({ path: Uu(r) }).toString();
  }
  return sm(e, t);
}
function Uu(e) {
  const t = [];
  for (const r of e)
    r.length === 0 || r.length === 1 && r.charCodeAt(0) === Jr || (r.length === 2 && r.charCodeAt(0) === Jr && r.charCodeAt(1) === Jr ? t.pop() : t.push(r));
  e.length > 1 && e[e.length - 1].length === 0 && t.push("");
  let n = t.join("/");
  return e[0].length === 0 && (n = "/" + n), n;
}
function sm(e, ...t) {
  const n = Nn.parse(e), r = n.path.split("/");
  for (let i of t)
    r.push(...i.split("/"));
  return n.with({ path: Uu(r) }).toString();
}
self.onmessage = () => {
  Qf((e, t) => new tm(e, t));
};
