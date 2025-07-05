var Sl = Object.defineProperty;
var Ml = (e, t, n) => t in e ? Sl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var gt = (e, t, n) => Ml(e, typeof t != "symbol" ? t + "" : t, n);
var R;
(function(e) {
  e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(R || (R = {}));
class Il {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? on.isErrorNoTelemetry(t) ? new on(t.message + `

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
const Ul = new Il();
function xn(e) {
  Dl(e) || Ul.onUnexpectedError(e);
}
function Gi(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: i } = e, r = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: n,
      stack: r,
      noTelemetry: on.isErrorNoTelemetry(e),
      cause: i ? Gi(i) : void 0,
      code: e.code
    };
  }
  return e;
}
const zi = "Canceled";
function Dl(e) {
  return e instanceof Fl ? !0 : e instanceof Error && e.name === zi && e.message === zi;
}
class Fl extends Error {
  constructor() {
    super(zi), this.name = this.message;
  }
}
class on extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof on)
      return t;
    const n = new on();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}
class be extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, be.prototype);
  }
}
function Pl(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e) {
    const r = t(i);
    let s = n[r];
    s || (s = n[r] = []), s.push(i);
  }
  return n;
}
function Ol(e, t) {
  const n = this;
  let i = !1, r;
  return function() {
    return i || (i = !0, r = e.apply(n, arguments)), r;
  };
}
function ln(e, t) {
  const n = un(e, t);
  return n === -1 ? void 0 : e[n];
}
function un(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? r = a + 1 : s = a;
  }
  return r - 1;
}
function Bl(e, t) {
  const n = Xi(e, t);
  return n === e.length ? void 0 : e[n];
}
function Xi(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? s = a : r = a + 1;
  }
  return r;
}
const yi = class yi {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (yi.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array)
          if (this._prevFindLastPredicate(i) && !t(i))
            throw new Error(
              "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
            );
      }
      this._prevFindLastPredicate = t;
    }
    const n = un(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
yi.assertInvariants = !1;
let ai = yi;
function Po(e, t, n = (i, r) => i === r) {
  if (e === t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let i = 0, r = e.length; i < r; i++)
    if (!n(e[i], t[i]))
      return !1;
  return !0;
}
function* Vl(e, t) {
  let n, i;
  for (const r of e)
    i !== void 0 && t(i, r) ? n.push(r) : (n && (yield n), n = [r]), i = r;
  n && (yield n);
}
function $l(e, t) {
  for (let n = 0; n <= e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function ql(e, t) {
  for (let n = 0; n < e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function Hl(e, t) {
  for (const n of t)
    e.push(n);
}
var Ji;
(function(e) {
  function t(s) {
    return s < 0;
  }
  e.isLessThan = t;
  function n(s) {
    return s <= 0;
  }
  e.isLessThanOrEqual = n;
  function i(s) {
    return s > 0;
  }
  e.isGreaterThan = i;
  function r(s) {
    return s === 0;
  }
  e.isNeitherLessOrGreaterThan = r, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(Ji || (Ji = {}));
function En(e, t) {
  return (n, i) => t(e(n), e(i));
}
const yn = (e, t) => e - t;
function Wl(e) {
  return (t, n) => -e(t, n);
}
const Kt = class Kt {
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
    return new Kt((n) => this.iterate((i) => t(i) ? n(i) : !0));
  }
  map(t) {
    return new Kt((n) => this.iterate((i) => n(t(i))));
  }
  some(t) {
    let n = !1;
    return this.iterate((i) => (n = t(i), !n)), n;
  }
  findFirst(t) {
    let n;
    return this.iterate((i) => t(i) ? (n = i, !1) : !0), n;
  }
  findLast(t) {
    let n;
    return this.iterate((i) => (t(i) && (n = i), !0)), n;
  }
  findLastMaxBy(t) {
    let n, i = !0;
    return this.iterate((r) => ((i || Ji.isGreaterThan(t(r, n))) && (i = !1, n = r), !0)), n;
  }
};
Kt.empty = new Kt((t) => {
});
let Zr = Kt;
var Qr, Kr;
class jl {
  constructor(t, n) {
    this.uri = t, this.value = n;
  }
}
function Gl(e) {
  return Array.isArray(e);
}
const kt = class kt {
  constructor(t, n) {
    if (this[Qr] = "ResourceMap", t instanceof kt)
      this.map = new Map(t.map), this.toKey = n ?? kt.defaultToKey;
    else if (Gl(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? kt.defaultToKey;
      for (const [i, r] of t)
        this.set(i, r);
    } else
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? kt.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new jl(t, n)), this;
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
    for (const [i, r] of this.map)
      t(r.value, r.uri, this);
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
  *[(Qr = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map)
      yield [t.uri, t.value];
  }
};
kt.defaultToKey = (t) => t.toString();
let Yi = kt;
var Ee;
(function(e) {
  e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(Ee || (Ee = {}));
class zl {
  constructor() {
    this[Kr] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  get(t, n = Ee.None) {
    const i = this._map.get(t);
    if (i)
      return n !== Ee.None && this.touch(i, n), i.value;
  }
  set(t, n, i = Ee.None) {
    let r = this._map.get(t);
    if (r)
      r.value = n, i !== Ee.None && this.touch(r, i);
    else {
      switch (r = { key: t, value: n, next: void 0, previous: void 0 }, i) {
        case Ee.None:
          this.addItemLast(r);
          break;
        case Ee.AsOld:
          this.addItemFirst(r);
          break;
        case Ee.AsNew:
          this.addItemLast(r);
          break;
        default:
          this.addItemLast(r);
          break;
      }
      this._map.set(t, r), this._size++;
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
    const i = this._state;
    let r = this._head;
    for (; r; ) {
      if (n ? t.bind(n)(r.value, r.key, this) : t(r.value, r.key, this), this._state !== i)
        throw new Error("LinkedMap got modified during iteration.");
      r = r.next;
    }
  }
  keys() {
    const t = this, n = this._state;
    let i = this._head;
    const r = {
      [Symbol.iterator]() {
        return r;
      },
      next() {
        if (t._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        if (i) {
          const s = { value: i.key, done: !1 };
          return i = i.next, s;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return r;
  }
  values() {
    const t = this, n = this._state;
    let i = this._head;
    const r = {
      [Symbol.iterator]() {
        return r;
      },
      next() {
        if (t._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        if (i) {
          const s = { value: i.value, done: !1 };
          return i = i.next, s;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return r;
  }
  entries() {
    const t = this, n = this._state;
    let i = this._head;
    const r = {
      [Symbol.iterator]() {
        return r;
      },
      next() {
        if (t._state !== n)
          throw new Error("LinkedMap got modified during iteration.");
        if (i) {
          const s = { value: [i.key, i.value], done: !1 };
          return i = i.next, s;
        } else
          return { value: void 0, done: !0 };
      }
    };
    return r;
  }
  [(Kr = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(t) {
    if (t >= this.size)
      return;
    if (t === 0) {
      this.clear();
      return;
    }
    let n = this._head, i = this.size;
    for (; n && i > t; )
      this._map.delete(n.key), n = n.next, i--;
    this._head = n, this._size = i, n && (n.previous = void 0), this._state++;
  }
  trimNew(t) {
    if (t >= this.size)
      return;
    if (t === 0) {
      this.clear();
      return;
    }
    let n = this._tail, i = this.size;
    for (; n && i > t; )
      this._map.delete(n.key), n = n.previous, i--;
    this._tail = n, this._size = i, n && (n.next = void 0), this._state++;
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
      const n = t.next, i = t.previous;
      if (!n || !i)
        throw new Error("Invalid list");
      n.previous = i, i.next = n;
    }
    t.next = void 0, t.previous = void 0, this._state++;
  }
  touch(t, n) {
    if (!this._head || !this._tail)
      throw new Error("Invalid list");
    if (!(n !== Ee.AsOld && n !== Ee.AsNew)) {
      if (n === Ee.AsOld) {
        if (t === this._head)
          return;
        const i = t.next, r = t.previous;
        t === this._tail ? (r.next = void 0, this._tail = r) : (i.previous = r, r.next = i), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
      } else if (n === Ee.AsNew) {
        if (t === this._tail)
          return;
        const i = t.next, r = t.previous;
        t === this._head ? (i.previous = void 0, this._head = i) : (i.previous = r, r.next = i), t.next = void 0, t.previous = this._tail, this._tail.next = t, this._tail = t, this._state++;
      }
    }
  }
  toJSON() {
    const t = [];
    return this.forEach((n, i) => {
      t.push([i, n]);
    }), t;
  }
  fromJSON(t) {
    this.clear();
    for (const [n, i] of t)
      this.set(n, i);
  }
}
class Xl extends zl {
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
  get(t, n = Ee.AsNew) {
    return super.get(t, n);
  }
  peek(t) {
    return super.get(t, Ee.None);
  }
  set(t, n) {
    return super.set(t, n, Ee.AsNew), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}
class Jl extends Xl {
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
class Oo {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(t, n) {
    let i = this.map.get(t);
    i || (i = /* @__PURE__ */ new Set(), this.map.set(t, i)), i.add(n);
  }
  delete(t, n) {
    const i = this.map.get(t);
    i && (i.delete(n), i.size === 0 && this.map.delete(t));
  }
  forEach(t, n) {
    const i = this.map.get(t);
    i && i.forEach(n);
  }
  get(t) {
    const n = this.map.get(t);
    return n || /* @__PURE__ */ new Set();
  }
}
function Yl(e, t = "Unreachable") {
  throw new Error(t);
}
function Zl(e, t = "unexpected state") {
  if (!e)
    throw typeof t == "string" ? new be(`Assertion Failed: ${t}`) : t;
}
function Dn(e) {
  if (!e()) {
    debugger;
    e(), xn(new be("Assertion Failed"));
  }
}
function $r(e, t) {
  let n = 0;
  for (; n < e.length - 1; ) {
    const i = e[n], r = e[n + 1];
    if (!t(i, r))
      return !1;
    n++;
  }
  return !0;
}
function Ql(e) {
  return typeof e == "string";
}
function Kl(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var oi;
(function(e) {
  function t(b) {
    return b && typeof b == "object" && typeof b[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function i() {
    return n;
  }
  e.empty = i;
  function* r(b) {
    yield b;
  }
  e.single = r;
  function s(b) {
    return t(b) ? b : r(b);
  }
  e.wrap = s;
  function a(b) {
    return b || n;
  }
  e.from = a;
  function* l(b) {
    for (let A = b.length - 1; A >= 0; A--)
      yield b[A];
  }
  e.reverse = l;
  function o(b) {
    return !b || b[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = o;
  function u(b) {
    return b[Symbol.iterator]().next().value;
  }
  e.first = u;
  function h(b, A) {
    let y = 0;
    for (const U of b)
      if (A(U, y++))
        return !0;
    return !1;
  }
  e.some = h;
  function c(b, A) {
    for (const y of b)
      if (A(y))
        return y;
  }
  e.find = c;
  function* g(b, A) {
    for (const y of b)
      A(y) && (yield y);
  }
  e.filter = g;
  function* d(b, A) {
    let y = 0;
    for (const U of b)
      yield A(U, y++);
  }
  e.map = d;
  function* m(b, A) {
    let y = 0;
    for (const U of b)
      yield* A(U, y++);
  }
  e.flatMap = m;
  function* p(...b) {
    for (const A of b)
      Kl(A) ? yield* A : yield A;
  }
  e.concat = p;
  function w(b, A, y) {
    let U = y;
    for (const $ of b)
      U = A(U, $);
    return U;
  }
  e.reduce = w;
  function N(b) {
    let A = 0;
    for (const y of b)
      A++;
    return A;
  }
  e.length = N;
  function* x(b, A, y = b.length) {
    for (A < -b.length && (A = 0), A < 0 && (A += b.length), y < 0 ? y += b.length : y > b.length && (y = b.length); A < y; A++)
      yield b[A];
  }
  e.slice = x;
  function _(b, A = Number.POSITIVE_INFINITY) {
    const y = [];
    if (A === 0)
      return [y, b];
    const U = b[Symbol.iterator]();
    for (let $ = 0; $ < A; $++) {
      const W = U.next();
      if (W.done)
        return [y, e.empty()];
      y.push(W.value);
    }
    return [y, { [Symbol.iterator]() {
      return U;
    } }];
  }
  e.consume = _;
  async function E(b) {
    const A = [];
    for await (const y of b)
      A.push(y);
    return Promise.resolve(A);
  }
  e.asyncToArray = E;
})(oi || (oi = {}));
const Ri = class Ri {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let n = this.livingDisposables.get(t);
    return n || (n = { parent: null, source: null, isSingleton: !1, value: t, idx: Ri.idx++ }, this.livingDisposables.set(t, n)), n;
  }
  trackDisposable(t) {
    const n = this.getDisposableData(t);
    n.source || (n.source = new Error().stack);
  }
  setParent(t, n) {
    const i = this.getDisposableData(t);
    i.parent = n;
  }
  markAsDisposed(t) {
    this.livingDisposables.delete(t);
  }
  markAsSingleton(t) {
    this.getDisposableData(t).isSingleton = !0;
  }
  getRootParent(t, n) {
    const i = n.get(t);
    if (i)
      return i;
    const r = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
    return n.set(t, r), r;
  }
  getTrackedDisposables() {
    const t = /* @__PURE__ */ new Map();
    return [...this.livingDisposables.entries()].filter(([, i]) => i.source !== null && !this.getRootParent(i, t).isSingleton).flatMap(([i]) => i);
  }
  computeLeakingDisposables(t = 10, n) {
    let i;
    if (n)
      i = n;
    else {
      const o = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((c) => c.source !== null && !this.getRootParent(c, o).isSingleton);
      if (u.length === 0)
        return;
      const h = new Set(u.map((c) => c.value));
      if (i = u.filter((c) => !(c.parent && h.has(c.parent))), i.length === 0)
        throw new Error("There are cyclic diposable chains!");
    }
    if (!i)
      return;
    function r(o) {
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
    const s = new Oo();
    for (const o of i) {
      const u = r(o);
      for (let h = 0; h <= u.length; h++)
        s.add(u.slice(0, h).join(`
`), o);
    }
    i.sort(En((o) => o.idx, yn));
    let a = "", l = 0;
    for (const o of i.slice(0, t)) {
      l++;
      const u = r(o), h = [];
      for (let c = 0; c < u.length; c++) {
        let g = u[c];
        g = `(shared with ${s.get(u.slice(0, c + 1).join(`
`)).size}/${i.length} leaks) at ${g}`;
        const m = s.get(u.slice(0, c).join(`
`)), p = Pl([...m].map((w) => r(w)[c]), (w) => w);
        delete p[u[c]];
        for (const [w, N] of Object.entries(p))
          h.unshift(`    - stacktraces of ${N.length} other leaks continue with ${w}`);
        h.unshift(g);
      }
      a += `


==================== Leaking disposable ${l}/${i.length}: ${o.value.constructor.name} ====================
${h.join(`
`)}
============================================================

`;
    }
    return i.length > t && (a += `


... and ${i.length - t} more leaking disposables

`), { leaks: i, details: a };
  }
};
Ri.idx = 0;
let Cr = Ri;
function Bo(e) {
  if (oi.is(e)) {
    const t = [];
    for (const n of e)
      if (n)
        try {
          n.dispose();
        } catch (i) {
          t.push(i);
        }
    if (t.length === 1)
      throw t[0];
    if (t.length > 1)
      throw new AggregateError(t, "Encountered errors while disposing of store");
    return Array.isArray(e) ? [] : e;
  } else if (e)
    return e.dispose(), e;
}
function Cl(...e) {
  return Fn(() => Bo(e));
}
function Fn(e) {
  return {
    dispose: Ol(() => {
      e();
    })
  };
}
const ki = class ki {
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
        Bo(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
  }
  add(t) {
    if (!t)
      return t;
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? ki.DISABLE_DISPOSED_WARNING || console.warn(new Error(
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
ki.DISABLE_DISPOSED_WARNING = !1;
let Pn = ki;
const Yr = class Yr {
  constructor() {
    this._store = new Pn(), this._store;
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
Yr.None = Object.freeze({ dispose() {
} });
let cn = Yr;
const Ct = class Ct {
  constructor(t) {
    this.element = t, this.next = Ct.Undefined, this.prev = Ct.Undefined;
  }
};
Ct.Undefined = new Ct(void 0);
let oe = Ct;
class eu {
  constructor() {
    this._first = oe.Undefined, this._last = oe.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === oe.Undefined;
  }
  clear() {
    let t = this._first;
    for (; t !== oe.Undefined; ) {
      const n = t.next;
      t.prev = oe.Undefined, t.next = oe.Undefined, t = n;
    }
    this._first = oe.Undefined, this._last = oe.Undefined, this._size = 0;
  }
  unshift(t) {
    return this._insert(t, !1);
  }
  push(t) {
    return this._insert(t, !0);
  }
  _insert(t, n) {
    const i = new oe(t);
    if (this._first === oe.Undefined)
      this._first = i, this._last = i;
    else if (n) {
      const s = this._last;
      this._last = i, i.prev = s, s.next = i;
    } else {
      const s = this._first;
      this._first = i, i.next = s, s.prev = i;
    }
    this._size += 1;
    let r = !1;
    return () => {
      r || (r = !0, this._remove(i));
    };
  }
  shift() {
    if (this._first !== oe.Undefined) {
      const t = this._first.element;
      return this._remove(this._first), t;
    }
  }
  pop() {
    if (this._last !== oe.Undefined) {
      const t = this._last.element;
      return this._remove(this._last), t;
    }
  }
  _remove(t) {
    if (t.prev !== oe.Undefined && t.next !== oe.Undefined) {
      const n = t.prev;
      n.next = t.next, t.next.prev = n;
    } else t.prev === oe.Undefined && t.next === oe.Undefined ? (this._first = oe.Undefined, this._last = oe.Undefined) : t.next === oe.Undefined ? (this._last = this._last.prev, this._last.next = oe.Undefined) : t.prev === oe.Undefined && (this._first = this._first.next, this._first.prev = oe.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t = this._first;
    for (; t !== oe.Undefined; )
      yield t.element, t = t.next;
  }
}
const tu = globalThis.performance && typeof globalThis.performance.now == "function";
class Ui {
  static create(t) {
    return new Ui(t);
  }
  constructor(t) {
    this._now = tu && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
var li;
(function(e) {
  e.None = () => cn.None;
  function t(M, I) {
    return g(M, () => {
    }, 0, void 0, !0, void 0, I);
  }
  e.defer = t;
  function n(M) {
    return (I, B = null, O) => {
      let V = !1, X;
      return X = M((Y) => {
        if (!V)
          return X ? X.dispose() : V = !0, I.call(B, Y);
      }, null, O), V && X.dispose(), X;
    };
  }
  e.once = n;
  function i(M, I) {
    return e.once(e.filter(M, I));
  }
  e.onceIf = i;
  function r(M, I, B) {
    return h((O, V = null, X) => M((Y) => O.call(V, I(Y)), null, X), B);
  }
  e.map = r;
  function s(M, I, B) {
    return h((O, V = null, X) => M((Y) => {
      I(Y), O.call(V, Y);
    }, null, X), B);
  }
  e.forEach = s;
  function a(M, I, B) {
    return h((O, V = null, X) => M((Y) => I(Y) && O.call(V, Y), null, X), B);
  }
  e.filter = a;
  function l(M) {
    return M;
  }
  e.signal = l;
  function o(...M) {
    return (I, B = null, O) => {
      const V = Cl(...M.map((X) => X((Y) => I.call(B, Y))));
      return c(V, O);
    };
  }
  e.any = o;
  function u(M, I, B, O) {
    let V = B;
    return r(M, (X) => (V = I(V, X), V), O);
  }
  e.reduce = u;
  function h(M, I) {
    let B;
    const O = {
      onWillAddFirstListener() {
        B = M(V.fire, V);
      },
      onDidRemoveLastListener() {
        B == null || B.dispose();
      }
    }, V = new $e(O);
    return I == null || I.add(V), V.event;
  }
  function c(M, I) {
    return I instanceof Array ? I.push(M) : I && I.add(M), M;
  }
  function g(M, I, B = 100, O = !1, V = !1, X, Y) {
    let ee, he, Bt, jn = 0, Et;
    const Rl = {
      leakWarningThreshold: X,
      onWillAddFirstListener() {
        ee = M((kl) => {
          jn++, he = I(he, kl), O && !Bt && (Gn.fire(he), he = void 0), Et = () => {
            const Tl = he;
            he = void 0, Bt = void 0, (!O || jn > 1) && Gn.fire(Tl), jn = 0;
          }, typeof B == "number" ? (clearTimeout(Bt), Bt = setTimeout(Et, B)) : Bt === void 0 && (Bt = 0, queueMicrotask(Et));
        });
      },
      onWillRemoveListener() {
        V && jn > 0 && (Et == null || Et());
      },
      onDidRemoveLastListener() {
        Et = void 0, ee.dispose();
      }
    }, Gn = new $e(Rl);
    return Y == null || Y.add(Gn), Gn.event;
  }
  e.debounce = g;
  function d(M, I = 0, B) {
    return e.debounce(M, (O, V) => O ? (O.push(V), O) : [V], I, void 0, !0, void 0, B);
  }
  e.accumulate = d;
  function m(M, I = (O, V) => O === V, B) {
    let O = !0, V;
    return a(M, (X) => {
      const Y = O || !I(X, V);
      return O = !1, V = X, Y;
    }, B);
  }
  e.latch = m;
  function p(M, I, B) {
    return [
      e.filter(M, I, B),
      e.filter(M, (O) => !I(O), B)
    ];
  }
  e.split = p;
  function w(M, I = !1, B = [], O) {
    let V = B.slice(), X = M((he) => {
      V ? V.push(he) : ee.fire(he);
    });
    O && O.add(X);
    const Y = () => {
      V == null || V.forEach((he) => ee.fire(he)), V = null;
    }, ee = new $e({
      onWillAddFirstListener() {
        X || (X = M((he) => ee.fire(he)), O && O.add(X));
      },
      onDidAddFirstListener() {
        V && (I ? setTimeout(Y) : Y());
      },
      onDidRemoveLastListener() {
        X && X.dispose(), X = null;
      }
    });
    return O && O.add(ee), ee.event;
  }
  e.buffer = w;
  function N(M, I) {
    return (O, V, X) => {
      const Y = I(new _());
      return M(function(ee) {
        const he = Y.evaluate(ee);
        he !== x && O.call(V, he);
      }, void 0, X);
    };
  }
  e.chain = N;
  const x = Symbol("HaltChainable");
  class _ {
    constructor() {
      this.steps = [];
    }
    map(I) {
      return this.steps.push(I), this;
    }
    forEach(I) {
      return this.steps.push((B) => (I(B), B)), this;
    }
    filter(I) {
      return this.steps.push((B) => I(B) ? B : x), this;
    }
    reduce(I, B) {
      let O = B;
      return this.steps.push((V) => (O = I(O, V), O)), this;
    }
    latch(I = (B, O) => B === O) {
      let B = !0, O;
      return this.steps.push((V) => {
        const X = B || !I(V, O);
        return B = !1, O = V, X ? V : x;
      }), this;
    }
    evaluate(I) {
      for (const B of this.steps)
        if (I = B(I), I === x)
          break;
      return I;
    }
  }
  function E(M, I, B = (O) => O) {
    const O = (...ee) => Y.fire(B(...ee)), V = () => M.on(I, O), X = () => M.removeListener(I, O), Y = new $e(
      { onWillAddFirstListener: V, onDidRemoveLastListener: X }
    );
    return Y.event;
  }
  e.fromNodeEventEmitter = E;
  function b(M, I, B = (O) => O) {
    const O = (...ee) => Y.fire(B(...ee)), V = () => M.addEventListener(I, O), X = () => M.removeEventListener(I, O), Y = new $e(
      { onWillAddFirstListener: V, onDidRemoveLastListener: X }
    );
    return Y.event;
  }
  e.fromDOMEventEmitter = b;
  function A(M, I) {
    return new Promise((B) => n(M)(B, null, I));
  }
  e.toPromise = A;
  function y(M) {
    const I = new $e();
    return M.then((B) => {
      I.fire(B);
    }, () => {
      I.fire(void 0);
    }).finally(() => {
      I.dispose();
    }), I.event;
  }
  e.fromPromise = y;
  function U(M, I) {
    return M((B) => I.fire(B));
  }
  e.forward = U;
  function $(M, I, B) {
    return I(B), M((O) => I(O));
  }
  e.runAndSubscribe = $;
  class W {
    constructor(I, B) {
      this._observable = I, this._counter = 0, this._hasChanged = !1;
      const O = {
        onWillAddFirstListener: () => {
          I.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          I.removeObserver(this);
        }
      };
      this.emitter = new $e(O), B && B.add(this.emitter);
    }
    beginUpdate(I) {
      this._counter++;
    }
    handlePossibleChange(I) {
    }
    handleChange(I, B) {
      this._hasChanged = !0;
    }
    endUpdate(I) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
    }
  }
  function F(M, I) {
    return new W(M, I).emitter.event;
  }
  e.fromObservable = F;
  function T(M) {
    return (I, B, O) => {
      let V = 0, X = !1;
      const Y = {
        beginUpdate() {
          V++;
        },
        endUpdate() {
          V--, V === 0 && (M.reportChanges(), X && (X = !1, I.call(B)));
        },
        handlePossibleChange() {
        },
        handleChange() {
          X = !0;
        }
      };
      M.addObserver(Y), M.reportChanges();
      const ee = {
        dispose() {
          M.removeObserver(Y);
        }
      };
      return O instanceof Pn ? O.add(ee) : Array.isArray(O) && O.push(ee), ee;
    };
  }
  e.fromObservableLight = T;
})(li || (li = {}));
const en = class en {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${en._idPool++}`, en.all.add(this);
  }
  start(t) {
    this._stopWatch = new Ui(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
en.all = /* @__PURE__ */ new Set(), en._idPool = 0;
let Zi = en, nu = -1;
const Ti = class Ti {
  constructor(t, n, i = (Ti._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = t, this.threshold = n, this.name = i, this._warnCountdown = 0;
  }
  dispose() {
    var t;
    (t = this._stacks) == null || t.clear();
  }
  check(t, n) {
    const i = this.threshold;
    if (i <= 0 || n < i)
      return;
    this._stacks || (this._stacks = /* @__PURE__ */ new Map());
    const r = this._stacks.get(t.value) || 0;
    if (this._stacks.set(t.value, r + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
      this._warnCountdown = i * 0.5;
      const [s, a] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${a}):`;
      console.warn(l), console.warn(s);
      const o = new iu(l, s);
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
    for (const [i, r] of this._stacks)
      (!t || n < r) && (t = [i, r], n = r);
    return t;
  }
};
Ti._idPool = 1;
let Qi = Ti;
class qr {
  static create() {
    const t = new Error();
    return new qr(t.stack ?? "");
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
class iu extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerLeakError", this.stack = n;
  }
}
class ru extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerRefusalError", this.stack = n;
  }
}
let su = 0;
class Di {
  constructor(t) {
    this.value = t, this.id = su++;
  }
}
const au = 2;
class $e {
  constructor(t) {
    var n, i, r, s;
    this._size = 0, this._options = t, this._leakageMon = (n = this._options) != null && n.leakWarningThreshold ? new Qi(
      (t == null ? void 0 : t.onListenerError) ?? xn,
      ((i = this._options) == null ? void 0 : i.leakWarningThreshold) ?? nu
    ) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new Zi(this._options._profName) : void 0, this._deliveryQueue = (s = this._options) == null ? void 0 : s.deliveryQueue;
  }
  dispose() {
    var t, n, i, r;
    this._disposed || (this._disposed = !0, ((t = this._deliveryQueue) == null ? void 0 : t.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (i = (n = this._options) == null ? void 0 : n.onDidRemoveLastListener) == null || i.call(n), (r = this._leakageMon) == null || r.dispose());
  }
  get event() {
    return this._event ?? (this._event = (t, n, i) => {
      var l, o, u, h, c, g, d;
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const m = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(m);
        const p = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], w = new ru(
          `${m}. HINT: Stack shows most frequent listener (${p[1]}-times)`,
          p[0]
        );
        return (((l = this._options) == null ? void 0 : l.onListenerError) || xn)(w), cn.None;
      }
      if (this._disposed)
        return cn.None;
      n && (t = t.bind(n));
      const r = new Di(t);
      let s;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = qr.create(), s = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof Di ? (this._deliveryQueue ?? (this._deliveryQueue = new ou()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = r, (c = (h = this._options) == null ? void 0 : h.onDidAddFirstListener) == null || c.call(h, this)), (d = (g = this._options) == null ? void 0 : g.onDidAddListener) == null || d.call(g, this), this._size++;
      const a = Fn(() => {
        s == null || s(), this._removeListener(r);
      });
      return i instanceof Pn ? i.add(a) : Array.isArray(i) && i.push(a), a;
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
    const n = this._listeners, i = n.indexOf(t);
    if (i === -1)
      throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, n[i] = void 0;
    const r = this._deliveryQueue.current === this;
    if (this._size * au <= n.length) {
      let u = 0;
      for (let h = 0; h < n.length; h++)
        n[h] ? n[u++] = n[h] : r && u < this._deliveryQueue.end && (this._deliveryQueue.end--, u < this._deliveryQueue.i && this._deliveryQueue.i--);
      n.length = u;
    }
  }
  _deliver(t, n) {
    var r;
    if (!t)
      return;
    const i = ((r = this._options) == null ? void 0 : r.onListenerError) || xn;
    if (!i) {
      t.value(n);
      return;
    }
    try {
      t.value(n);
    } catch (s) {
      i(s);
    }
  }
  _deliverQueue(t) {
    const n = t.current._listeners;
    for (; t.i < t.end; )
      this._deliver(n[t.i++], t.value);
    t.reset();
  }
  fire(t) {
    var n, i, r, s;
    if ((n = this._deliveryQueue) != null && n.current && (this._deliverQueue(this._deliveryQueue), (i = this._perfMon) == null || i.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners) if (this._listeners instanceof Di)
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
class ou {
  constructor() {
    this.i = -1, this.end = 0;
  }
  enqueue(t, n, i) {
    this.i = 0, this.end = i, this.current = t, this.value = n;
  }
  reset() {
    this.i = this.end, this.current = void 0, this.value = void 0;
  }
}
function lu() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function Vo() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
const uu = Vo() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function es(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, r) => {
    const s = r[0], a = t[s];
    let l = i;
    return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l;
  }), uu && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function G(e, t, ...n) {
  return es(typeof e == "number" ? cu(e, t) : t, n);
}
function cu(e, t) {
  var i;
  const n = (i = lu()) == null ? void 0 : i[e];
  if (typeof n != "string") {
    if (typeof t == "string")
      return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
const Yt = "en";
let On = !1, Bn = !1, Cn = !1, $o = !1, Hr = !1, qo = !1, zn, ei = Yt, ts = Yt, fu, Ge;
const ut = globalThis;
let Le;
var Io;
typeof ut.vscode < "u" && typeof ut.vscode.process < "u" ? Le = ut.vscode.process : typeof process < "u" && typeof ((Io = process == null ? void 0 : process.versions) == null ? void 0 : Io.node) == "string" && (Le = process);
var Uo;
const hu = typeof ((Uo = Le == null ? void 0 : Le.versions) == null ? void 0 : Uo.electron) == "string", gu = hu && (Le == null ? void 0 : Le.type) === "renderer";
var Do;
if (typeof Le == "object") {
  On = Le.platform === "win32", Bn = Le.platform === "darwin", Cn = Le.platform === "linux", Cn && Le.env.SNAP && Le.env.SNAP_REVISION, Le.env.CI || Le.env.BUILD_ARTIFACTSTAGINGDIRECTORY, zn = Yt, ei = Yt;
  const e = Le.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      zn = t.userLocale, ts = t.osLocale, ei = t.resolvedLanguage || Yt, fu = (Do = t.languagePack) == null ? void 0 : Do.translationsConfigFile;
    } catch {
    }
  $o = !0;
} else typeof navigator == "object" && !gu ? (Ge = navigator.userAgent, On = Ge.indexOf("Windows") >= 0, Bn = Ge.indexOf("Macintosh") >= 0, qo = (Ge.indexOf("Macintosh") >= 0 || Ge.indexOf("iPad") >= 0 || Ge.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Cn = Ge.indexOf("Linux") >= 0, (Ge == null ? void 0 : Ge.indexOf("Mobi")) >= 0, Hr = !0, ei = Vo() || Yt, zn = navigator.language.toLowerCase(), ts = zn) : console.error("Unable to resolve platform.");
var rn;
(function(e) {
  e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(rn || (rn = {}));
rn.Web;
Bn ? rn.Mac : On ? rn.Windows : Cn && rn.Linux;
const fn = On, mu = Bn, du = $o, pu = Hr, bu = Hr && typeof ut.importScripts == "function", _u = bu ? ut.origin : void 0, nt = Ge, mt = ei;
var ns;
(function(e) {
  function t() {
    return mt;
  }
  e.value = t;
  function n() {
    return mt.length === 2 ? mt === "en" : mt.length >= 3 ? mt[0] === "e" && mt[1] === "n" && mt[2] === "-" : !1;
  }
  e.isDefaultVariant = n;
  function i() {
    return mt === "en";
  }
  e.isDefault = i;
})(ns || (ns = {}));
const wu = typeof ut.postMessage == "function" && !ut.importScripts;
(() => {
  if (wu) {
    const e = [];
    ut.addEventListener("message", (n) => {
      if (n.data && n.data.vscodeScheduleAsyncWork)
        for (let i = 0, r = e.length; i < r; i++) {
          const s = e[i];
          if (s.id === n.data.vscodeScheduleAsyncWork) {
            e.splice(i, 1), s.callback();
            return;
          }
        }
    });
    let t = 0;
    return (n) => {
      const i = ++t;
      e.push({
        id: i,
        callback: n
      }), ut.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (e) => setTimeout(e);
})();
var Rn;
(function(e) {
  e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(Rn || (Rn = {}));
Bn || qo ? Rn.Macintosh : On ? Rn.Windows : Rn.Linux;
const vu = !!(nt && nt.indexOf("Chrome") >= 0);
nt && nt.indexOf("Firefox") >= 0;
!vu && nt && nt.indexOf("Safari") >= 0;
nt && nt.indexOf("Edg/") >= 0;
nt && nt.indexOf("Android") >= 0;
const Ho = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
});
var ui;
(function(e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof ti ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: li.None
  }), e.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: Ho
  });
})(ui || (ui = {}));
class ti {
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
    return this._isCancelled ? Ho : (this._emitter || (this._emitter = new $e()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}
class Lu {
  constructor(t) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = t && t.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new ti()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof ti && this._token.cancel() : this._token = ui.Cancelled;
  }
  dispose(t = !1) {
    var n;
    t && this.cancel(), (n = this._parentListener) == null || n.dispose(), this._token ? this._token instanceof ti && this._token.dispose() : this._token = ui.None;
  }
}
function Nu(e) {
  return e;
}
class Au {
  constructor(t, n) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = Nu) : (this._fn = n, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const n = this._computeKey(t);
    return this.lastArgKey !== n && (this.lastArgKey = n, this.lastCache = this._fn(t)), this.lastCache;
  }
}
class is {
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
var je;
(function(e) {
  e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(je || (je = {}));
function rs(e) {
  return e < 0 ? 0 : e > je.MAX_UINT_8 ? je.MAX_UINT_8 : e | 0;
}
function Vt(e) {
  return e < 0 ? 0 : e > je.MAX_UINT_32 ? je.MAX_UINT_32 : e | 0;
}
function xu(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Wo(e) {
  return e.split(/\r\n|\r|\n/);
}
function Eu(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i !== R.Space && i !== R.Tab)
      return t;
  }
  return -1;
}
function yu(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const i = e.charCodeAt(n);
    if (i !== R.Space && i !== R.Tab)
      return n;
  }
  return -1;
}
function Ru(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function ku(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    const o = e.charCodeAt(n), u = t.charCodeAt(r);
    if (o < u)
      return -1;
    if (o > u)
      return 1;
  }
  const a = i - n, l = s - r;
  return a < l ? -1 : a > l ? 1 : 0;
}
function jo(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    let o = e.charCodeAt(n), u = t.charCodeAt(r);
    if (o === u)
      continue;
    if (o >= 128 || u >= 128)
      return ku(e.toLowerCase(), t.toLowerCase(), n, i, r, s);
    ss(o) && (o -= 32), ss(u) && (u -= 32);
    const h = o - u;
    if (h !== 0)
      return h;
  }
  const a = i - n, l = s - r;
  return a < l ? -1 : a > l ? 1 : 0;
}
function ss(e) {
  return e >= R.a && e <= R.z;
}
function Go(e) {
  return e >= R.A && e <= R.Z;
}
function Tu(e, t) {
  return e.length === t.length && jo(e, t) === 0;
}
function Su(e, t) {
  const n = t.length;
  return t.length > e.length ? !1 : jo(e, t, 0, n) === 0;
}
function as(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(i) !== t.charCodeAt(i))
      return i;
  return n;
}
function Mu(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  const r = e.length - 1, s = t.length - 1;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(r - i) !== t.charCodeAt(s - i))
      return i;
  return n;
}
function ci(e) {
  return 55296 <= e && e <= 56319;
}
function Ki(e) {
  return 56320 <= e && e <= 57343;
}
function zo(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function Iu(e, t, n) {
  const i = e.charCodeAt(n);
  if (ci(i) && n + 1 < t) {
    const r = e.charCodeAt(n + 1);
    if (Ki(r))
      return zo(i, r);
  }
  return i;
}
const Uu = /^[\t\n\r\x20-\x7E]*$/;
function Du(e) {
  return Uu.test(e);
}
String.fromCharCode(R.UTF8_BOM);
var Rt;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(Rt || (Rt = {}));
const Tt = class Tt {
  static getInstance() {
    return Tt._INSTANCE || (Tt._INSTANCE = new Tt()), Tt._INSTANCE;
  }
  constructor() {
    this._data = Fu();
  }
  getGraphemeBreakType(t) {
    if (t < 32)
      return t === R.LineFeed ? Rt.LF : t === R.CarriageReturn ? Rt.CR : Rt.Control;
    if (t < 127)
      return Rt.Other;
    const n = this._data, i = n.length / 3;
    let r = 1;
    for (; r <= i; )
      if (t < n[3 * r])
        r = 2 * r;
      else if (t > n[3 * r + 1])
        r = 2 * r + 1;
      else
        return n[3 * r + 2];
    return Rt.Other;
  }
};
Tt._INSTANCE = null;
let os = Tt;
function Fu() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var Ci;
(function(e) {
  e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(Ci || (Ci = {}));
const Ce = class Ce {
  static getInstance(t) {
    return Ce.cache.get(Array.from(t));
  }
  static getLocales() {
    return Ce._locales.value;
  }
  constructor(t) {
    this.confusableDictionary = t;
  }
  isAmbiguous(t) {
    return this.confusableDictionary.has(t);
  }
  containsAmbiguousCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && this.isAmbiguous(i))
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
Ce.ambiguousCharacterData = new is(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Ce.cache = new Au({ getCacheKey: JSON.stringify }, (t) => {
  function n(h) {
    const c = /* @__PURE__ */ new Map();
    for (let g = 0; g < h.length; g += 2)
      c.set(h[g], h[g + 1]);
    return c;
  }
  function i(h, c) {
    const g = new Map(h);
    for (const [d, m] of c)
      g.set(d, m);
    return g;
  }
  function r(h, c) {
    if (!h)
      return c;
    const g = /* @__PURE__ */ new Map();
    for (const [d, m] of h)
      c.has(d) && g.set(d, m);
    return g;
  }
  const s = Ce.ambiguousCharacterData.value;
  let a = t.filter((h) => !h.startsWith("_") && h in s);
  a.length === 0 && (a = ["_default"]);
  let l;
  for (const h of a) {
    const c = n(s[h]);
    l = r(l, c);
  }
  const o = n(s._common), u = i(o, l);
  return new Ce(u);
}), Ce._locales = new is(() => Object.keys(Ce.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
let Vn = Ce;
const St = class St {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(St.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return St.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && (St.isInvisibleCharacter(i) || i === Ci.space))
        return !0;
    }
    return !1;
  }
  static get codePoints() {
    return St.getData();
  }
};
St._data = void 0;
let kn = St;
const Fi = "default", Pu = "$initialize";
var Ie;
(function(e) {
  e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(Ie || (Ie = {}));
class Ou {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.method = r, this.args = s, this.type = Ie.Request;
  }
}
class ls {
  constructor(t, n, i, r) {
    this.vsWorker = t, this.seq = n, this.res = i, this.err = r, this.type = Ie.Reply;
  }
}
class Bu {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.eventName = r, this.arg = s, this.type = Ie.SubscribeEvent;
  }
}
class Vu {
  constructor(t, n, i) {
    this.vsWorker = t, this.req = n, this.event = i, this.type = Ie.Event;
  }
}
class $u {
  constructor(t, n) {
    this.vsWorker = t, this.req = n, this.type = Ie.UnsubscribeEvent;
  }
}
class qu {
  constructor(t) {
    this._workerId = -1, this._handler = t, this._lastSentReq = 0, this._pendingReplies = /* @__PURE__ */ Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(t) {
    this._workerId = t;
  }
  sendMessage(t, n, i) {
    const r = String(++this._lastSentReq);
    return new Promise((s, a) => {
      this._pendingReplies[r] = {
        resolve: s,
        reject: a
      }, this._send(new Ou(this._workerId, r, t, n, i));
    });
  }
  listen(t, n, i) {
    let r = null;
    const s = new $e({
      onWillAddFirstListener: () => {
        r = String(++this._lastSentReq), this._pendingEmitters.set(r, s), this._send(new Bu(this._workerId, r, t, n, i));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(r), this._send(new $u(this._workerId, r)), r = null;
      }
    });
    return s.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, n) {
    const i = {
      get: (r, s) => (typeof s == "string" && !r[s] && (Jo(s) ? r[s] = (a) => this.listen(t, s, a) : Xo(s) ? r[s] = this.listen(t, s, void 0) : s.charCodeAt(0) === R.DollarSign && (r[s] = async (...a) => (await (n == null ? void 0 : n()), this.sendMessage(t, s, a)))), r[s])
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), i);
  }
  _handleMessage(t) {
    switch (t.type) {
      case Ie.Reply:
        return this._handleReplyMessage(t);
      case Ie.Request:
        return this._handleRequestMessage(t);
      case Ie.SubscribeEvent:
        return this._handleSubscribeEventMessage(t);
      case Ie.Event:
        return this._handleEventMessage(t);
      case Ie.UnsubscribeEvent:
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
      let i = t.err;
      t.err.$isError && (i = new Error(), i.name = t.err.name, i.message = t.err.message, i.stack = t.err.stack), n.reject(i);
      return;
    }
    n.resolve(t.res);
  }
  _handleRequestMessage(t) {
    const n = t.req;
    this._handler.handleMessage(t.channel, t.method, t.args).then((r) => {
      this._send(new ls(this._workerId, n, r, void 0));
    }, (r) => {
      r.detail instanceof Error && (r.detail = Gi(r.detail)), this._send(new ls(this._workerId, n, void 0, Gi(r)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const n = t.req, i = this._handler.handleEvent(t.channel, t.eventName, t.arg)((r) => {
      this._send(new Vu(this._workerId, n, r));
    });
    this._pendingEvents.set(n, i);
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
    if (t.type === Ie.Request)
      for (let i = 0; i < t.args.length; i++)
        t.args[i] instanceof ArrayBuffer && n.push(t.args[i]);
    else t.type === Ie.Reply && t.res instanceof ArrayBuffer && n.push(t.res);
    this._handler.sendMessage(t, n);
  }
}
function Xo(e) {
  return e[0] === "o" && e[1] === "n" && Go(e.charCodeAt(2));
}
function Jo(e) {
  return /^onDynamic/.test(e) && Go(e.charCodeAt(9));
}
class Hu {
  constructor(t, n) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new qu({
      sendMessage: (i, r) => {
        t(i, r);
      },
      handleMessage: (i, r, s) => this._handleMessage(i, r, s),
      handleEvent: (i, r, s) => this._handleEvent(i, r, s)
    }), this.requestHandler = n(this);
  }
  onmessage(t) {
    this._protocol.handleMessage(t);
  }
  _handleMessage(t, n, i) {
    if (t === Fi && n === Pu)
      return this.initialize(i[0]);
    const r = t === Fi ? this.requestHandler : this._localChannels.get(t);
    if (!r)
      return Promise.reject(new Error(`Missing channel ${t} on worker thread`));
    if (typeof r[n] != "function")
      return Promise.reject(new Error(`Missing method ${n} on worker thread channel ${t}`));
    try {
      return Promise.resolve(r[n].apply(r, i));
    } catch (s) {
      return Promise.reject(s);
    }
  }
  _handleEvent(t, n, i) {
    const r = t === Fi ? this.requestHandler : this._localChannels.get(t);
    if (!r)
      throw new Error(`Missing channel ${t} on worker thread`);
    if (Jo(n)) {
      const s = r[n].call(r, i);
      if (typeof s != "function")
        throw new Error(`Missing dynamic event ${n} on request handler.`);
      return s;
    }
    if (Xo(n)) {
      const s = r[n];
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
let er = !1;
function Yo(e) {
  if (er)
    throw new Error("WebWorker already initialized!");
  er = !0;
  const t = new Hu(
    (n) => globalThis.postMessage(n),
    (n) => e(n)
  );
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function Wu(e) {
  globalThis.onmessage = (t) => {
    er || Yo(e);
  };
}
class _t {
  constructor(t, n, i, r) {
    this.originalStart = t, this.originalLength = n, this.modifiedStart = i, this.modifiedLength = r;
  }
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
}
function us(e, t) {
  return (t << 5) - t + e | 0;
}
function ju(e, t) {
  t = us(149417, t);
  for (let n = 0, i = e.length; n < i; n++)
    t = us(e.charCodeAt(n), t);
  return t;
}
var Ve;
(function(e) {
  e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(Ve || (Ve = {}));
function Pi(e, t, n = 32) {
  const i = n - t, r = ~((1 << i) - 1);
  return (e << t | (r & e) >>> i) >>> 0;
}
function bn(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n) => n.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
const Si = class Si {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(Ve.BLOCK_SIZE + 3), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
  }
  update(t) {
    const n = t.length;
    if (n === 0)
      return;
    const i = this._buff;
    let r = this._buffLen, s = this._leftoverHighSurrogate, a, l;
    for (s !== 0 ? (a = s, l = -1, s = 0) : (a = t.charCodeAt(0), l = 0); ; ) {
      let o = a;
      if (ci(a))
        if (l + 1 < n) {
          const u = t.charCodeAt(l + 1);
          Ki(u) ? (l++, o = zo(a, u)) : o = Ve.UNICODE_REPLACEMENT;
        } else {
          s = a;
          break;
        }
      else Ki(a) && (o = Ve.UNICODE_REPLACEMENT);
      if (r = this._push(i, r, o), l++, l < n)
        a = t.charCodeAt(l);
      else
        break;
    }
    this._buffLen = r, this._leftoverHighSurrogate = s;
  }
  _push(t, n, i) {
    return i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = 192 | (i & 1984) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : i < 65536 ? (t[n++] = 224 | (i & 61440) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : (t[n++] = 240 | (i & 1835008) >>> 18, t[n++] = 128 | (i & 258048) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0), n >= Ve.BLOCK_SIZE && (this._step(), n -= Ve.BLOCK_SIZE, this._totalLen += Ve.BLOCK_SIZE, t[0] = t[Ve.BLOCK_SIZE + 0], t[1] = t[Ve.BLOCK_SIZE + 1], t[2] = t[Ve.BLOCK_SIZE + 2]), n;
  }
  digest() {
    return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, Ve.UNICODE_REPLACEMENT)), this._totalLen += this._buffLen, this._wrapUp()), bn(this._h0) + bn(this._h1) + bn(this._h2) + bn(this._h3) + bn(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
  }
  _step() {
    const t = Si._bigBlock32, n = this._buffDV;
    for (let c = 0; c < 64; c += 4)
      t.setUint32(c, n.getUint32(c, !1), !1);
    for (let c = 64; c < 320; c += 4)
      t.setUint32(c, Pi(t.getUint32(c - 12, !1) ^ t.getUint32(c - 32, !1) ^ t.getUint32(c - 56, !1) ^ t.getUint32(c - 64, !1), 1), !1);
    let i = this._h0, r = this._h1, s = this._h2, a = this._h3, l = this._h4, o, u, h;
    for (let c = 0; c < 80; c++)
      c < 20 ? (o = r & s | ~r & a, u = 1518500249) : c < 40 ? (o = r ^ s ^ a, u = 1859775393) : c < 60 ? (o = r & s | r & a | s & a, u = 2400959708) : (o = r ^ s ^ a, u = 3395469782), h = Pi(i, 5) + o + l + u + t.getUint32(c * 4, !1) & 4294967295, l = a, a = s, s = Pi(r, 30), r = i, i = h;
    this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + l & 4294967295;
  }
};
Si._bigBlock32 = new DataView(new ArrayBuffer(320));
let cs = Si;
class fs {
  constructor(t) {
    this.source = t;
  }
  getElements() {
    const t = this.source, n = new Int32Array(t.length);
    for (let i = 0, r = t.length; i < r; i++)
      n[i] = t.charCodeAt(i);
    return n;
  }
}
function Gu(e, t, n) {
  return new Nt(new fs(e), new fs(t)).ComputeDiff(n).changes;
}
class $t {
  static Assert(t, n) {
    if (!t)
      throw new Error(n);
  }
}
class qt {
  static Copy(t, n, i, r, s) {
    for (let a = 0; a < s; a++)
      i[r + a] = t[n + a];
  }
  static Copy2(t, n, i, r, s) {
    for (let a = 0; a < s; a++)
      i[r + a] = t[n + a];
  }
}
var ot;
(function(e) {
  e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(ot || (ot = {}));
class hs {
  constructor() {
    this.m_changes = [], this.m_originalStart = je.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = je.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new _t(
      this.m_originalStart,
      this.m_originalCount,
      this.m_modifiedStart,
      this.m_modifiedCount
    )), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = je.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = je.MAX_SAFE_SMALL_INTEGER;
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
class Nt {
  constructor(t, n, i = null) {
    this.ContinueProcessingPredicate = i, this._originalSequence = t, this._modifiedSequence = n;
    const [r, s, a] = Nt._getElements(t), [l, o, u] = Nt._getElements(n);
    this._hasStrings = a && u, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = l, this._modifiedElementsOrHash = o, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (Nt._isStringArray(n)) {
      const i = new Int32Array(n.length);
      for (let r = 0, s = n.length; r < s; r++)
        i[r] = ju(n[r], 0);
      return [n, i, !0];
    }
    return n instanceof Int32Array ? [[], n, !1] : [[], new Int32Array(n), !1];
  }
  ElementsAreEqual(t, n) {
    return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
  }
  ElementsAreStrictEqual(t, n) {
    if (!this.ElementsAreEqual(t, n))
      return !1;
    const i = Nt._getStrictElement(this._originalSequence, t), r = Nt._getStrictElement(this._modifiedSequence, n);
    return i === r;
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
  _ComputeDiff(t, n, i, r, s) {
    const a = [!1];
    let l = this.ComputeDiffRecursive(t, n, i, r, a);
    return s && (l = this.PrettifyChanges(l)), {
      quitEarly: a[0],
      changes: l
    };
  }
  ComputeDiffRecursive(t, n, i, r, s) {
    for (s[0] = !1; t <= n && i <= r && this.ElementsAreEqual(t, i); )
      t++, i++;
    for (; n >= t && r >= i && this.ElementsAreEqual(n, r); )
      n--, r--;
    if (t > n || i > r) {
      let c;
      return i <= r ? ($t.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), c = [
        new _t(t, 0, i, r - i + 1)
      ]) : t <= n ? ($t.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), c = [
        new _t(t, n - t + 1, i, 0)
      ]) : ($t.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), $t.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), c = []), c;
    }
    const a = [0], l = [0], o = this.ComputeRecursionPoint(t, n, i, r, a, l, s), u = a[0], h = l[0];
    if (o !== null)
      return o;
    if (!s[0]) {
      const c = this.ComputeDiffRecursive(t, u, i, h, s);
      let g = [];
      return s[0] ? g = [
        new _t(
          u + 1,
          n - (u + 1) + 1,
          h + 1,
          r - (h + 1) + 1
        )
      ] : g = this.ComputeDiffRecursive(u + 1, n, h + 1, r, s), this.ConcatenateChanges(c, g);
    }
    return [
      new _t(
        t,
        n - t + 1,
        i,
        r - i + 1
      )
    ];
  }
  WALKTRACE(t, n, i, r, s, a, l, o, u, h, c, g, d, m, p, w, N, x) {
    let _ = null, E = null, b = new hs(), A = n, y = i, U = d[0] - w[0] - r, $ = je.MIN_SAFE_SMALL_INTEGER, W = this.m_forwardHistory.length - 1;
    do {
      const F = U + t;
      F === A || F < y && u[F - 1] < u[F + 1] ? (c = u[F + 1], m = c - U - r, c < $ && b.MarkNextChange(), $ = c, b.AddModifiedElement(c + 1, m), U = F + 1 - t) : (c = u[F - 1] + 1, m = c - U - r, c < $ && b.MarkNextChange(), $ = c - 1, b.AddOriginalElement(c, m + 1), U = F - 1 - t), W >= 0 && (u = this.m_forwardHistory[W], t = u[0], A = 1, y = u.length - 1);
    } while (--W >= -1);
    if (_ = b.getReverseChanges(), x[0]) {
      let F = d[0] + 1, T = w[0] + 1;
      if (_ !== null && _.length > 0) {
        const M = _[_.length - 1];
        F = Math.max(F, M.getOriginalEnd()), T = Math.max(T, M.getModifiedEnd());
      }
      E = [
        new _t(
          F,
          g - F + 1,
          T,
          p - T + 1
        )
      ];
    } else {
      b = new hs(), A = a, y = l, U = d[0] - w[0] - o, $ = je.MAX_SAFE_SMALL_INTEGER, W = N ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const F = U + s;
        F === A || F < y && h[F - 1] >= h[F + 1] ? (c = h[F + 1] - 1, m = c - U - o, c > $ && b.MarkNextChange(), $ = c + 1, b.AddOriginalElement(c + 1, m + 1), U = F + 1 - s) : (c = h[F - 1], m = c - U - o, c > $ && b.MarkNextChange(), $ = c, b.AddModifiedElement(c + 1, m + 1), U = F - 1 - s), W >= 0 && (h = this.m_reverseHistory[W], s = h[0], A = 1, y = h.length - 1);
      } while (--W >= -1);
      E = b.getChanges();
    }
    return this.ConcatenateChanges(_, E);
  }
  ComputeRecursionPoint(t, n, i, r, s, a, l) {
    let o = 0, u = 0, h = 0, c = 0, g = 0, d = 0;
    t--, i--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const m = n - t + (r - i), p = m + 1, w = new Int32Array(p), N = new Int32Array(p), x = r - i, _ = n - t, E = t - i, b = n - r, y = (_ - x) % 2 === 0;
    w[x] = t, N[_] = n, l[0] = !1;
    for (let U = 1; U <= m / 2 + 1; U++) {
      let $ = 0, W = 0;
      h = this.ClipDiagonalBound(x - U, U, x, p), c = this.ClipDiagonalBound(x + U, U, x, p);
      for (let T = h; T <= c; T += 2) {
        T === h || T < c && w[T - 1] < w[T + 1] ? o = w[T + 1] : o = w[T - 1] + 1, u = o - (T - x) - E;
        const M = o;
        for (; o < n && u < r && this.ElementsAreEqual(o + 1, u + 1); )
          o++, u++;
        if (w[T] = o, o + u > $ + W && ($ = o, W = u), !y && Math.abs(T - _) <= U - 1 && o >= N[T])
          return s[0] = o, a[0] = u, M <= N[T] && ot.MaxDifferencesHistory > 0 && U <= ot.MaxDifferencesHistory + 1 ? this.WALKTRACE(x, h, c, E, _, g, d, b, w, N, o, n, s, u, r, a, y, l) : null;
      }
      const F = ($ - t + (W - i) - U) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate($, F))
        return l[0] = !0, s[0] = $, a[0] = W, F > 0 && ot.MaxDifferencesHistory > 0 && U <= ot.MaxDifferencesHistory + 1 ? this.WALKTRACE(x, h, c, E, _, g, d, b, w, N, o, n, s, u, r, a, y, l) : (t++, i++, [
          new _t(
            t,
            n - t + 1,
            i,
            r - i + 1
          )
        ]);
      g = this.ClipDiagonalBound(_ - U, U, _, p), d = this.ClipDiagonalBound(_ + U, U, _, p);
      for (let T = g; T <= d; T += 2) {
        T === g || T < d && N[T - 1] >= N[T + 1] ? o = N[T + 1] - 1 : o = N[T - 1], u = o - (T - _) - b;
        const M = o;
        for (; o > t && u > i && this.ElementsAreEqual(o, u); )
          o--, u--;
        if (N[T] = o, y && Math.abs(T - x) <= U && o <= w[T])
          return s[0] = o, a[0] = u, M >= w[T] && ot.MaxDifferencesHistory > 0 && U <= ot.MaxDifferencesHistory + 1 ? this.WALKTRACE(x, h, c, E, _, g, d, b, w, N, o, n, s, u, r, a, y, l) : null;
      }
      if (U <= ot.MaxDifferencesHistory) {
        let T = new Int32Array(c - h + 2);
        T[0] = x - h + 1, qt.Copy2(w, h, T, 1, c - h + 1), this.m_forwardHistory.push(T), T = new Int32Array(d - g + 2), T[0] = _ - g + 1, qt.Copy2(N, g, T, 1, d - g + 1), this.m_reverseHistory.push(T);
      }
    }
    return this.WALKTRACE(x, h, c, E, _, g, d, b, w, N, o, n, s, u, r, a, y, l);
  }
  PrettifyChanges(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, a = i.originalLength > 0, l = i.modifiedLength > 0;
      for (; i.originalStart + i.originalLength < r && i.modifiedStart + i.modifiedLength < s && (!a || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!l || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength)); ) {
        const u = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
        if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !u)
          break;
        i.originalStart++, i.modifiedStart++;
      }
      const o = [null];
      if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], o)) {
        t[n] = o[0], t.splice(n + 1, 1), n--;
        continue;
      }
    }
    for (let n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      let r = 0, s = 0;
      if (n > 0) {
        const c = t[n - 1];
        r = c.originalStart + c.originalLength, s = c.modifiedStart + c.modifiedLength;
      }
      const a = i.originalLength > 0, l = i.modifiedLength > 0;
      let o = 0, u = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
      for (let c = 1; ; c++) {
        const g = i.originalStart - c, d = i.modifiedStart - c;
        if (g < r || d < s || a && !this.OriginalElementsAreEqual(g, g + i.originalLength) || l && !this.ModifiedElementsAreEqual(d, d + i.modifiedLength))
          break;
        const p = (g === r && d === s ? 5 : 0) + this._boundaryScore(g, i.originalLength, d, i.modifiedLength);
        p > u && (u = p, o = c);
      }
      i.originalStart -= o, i.modifiedStart -= o;
      const h = [null];
      if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], h)) {
        t[n - 1] = h[0], t.splice(n, 1), n++;
        continue;
      }
    }
    if (this._hasStrings)
      for (let n = 1, i = t.length; n < i; n++) {
        const r = t[n - 1], s = t[n], a = s.originalStart - r.originalStart - r.originalLength, l = r.originalStart, o = s.originalStart + s.originalLength, u = o - l, h = r.modifiedStart, c = s.modifiedStart + s.modifiedLength, g = c - h;
        if (a < 5 && u < 20 && g < 20) {
          const d = this._findBetterContiguousSequence(l, u, h, g, a);
          if (d) {
            const [m, p] = d;
            (m !== r.originalStart + r.originalLength || p !== r.modifiedStart + r.modifiedLength) && (r.originalLength = m - r.originalStart, r.modifiedLength = p - r.modifiedStart, s.originalStart = m + a, s.modifiedStart = p + a, s.originalLength = o - s.originalStart, s.modifiedLength = c - s.modifiedStart);
          }
        }
      }
    return t;
  }
  _findBetterContiguousSequence(t, n, i, r, s) {
    if (n < s || r < s)
      return null;
    const a = t + n - s + 1, l = i + r - s + 1;
    let o = 0, u = 0, h = 0;
    for (let c = t; c < a; c++)
      for (let g = i; g < l; g++) {
        const d = this._contiguousSequenceScore(c, g, s);
        d > 0 && d > o && (o = d, u = c, h = g);
      }
    return o > 0 ? [u, h] : null;
  }
  _contiguousSequenceScore(t, n, i) {
    let r = 0;
    for (let s = 0; s < i; s++) {
      if (!this.ElementsAreEqual(t + s, n + s))
        return 0;
      r += this._originalStringElements[t + s].length;
    }
    return r;
  }
  _OriginalIsBoundary(t) {
    return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
  }
  _OriginalRegionIsBoundary(t, n) {
    if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1))
      return !0;
    if (n > 0) {
      const i = t + n;
      if (this._OriginalIsBoundary(i - 1) || this._OriginalIsBoundary(i))
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
      const i = t + n;
      if (this._ModifiedIsBoundary(i - 1) || this._ModifiedIsBoundary(i))
        return !0;
    }
    return !1;
  }
  _boundaryScore(t, n, i, r) {
    const s = this._OriginalRegionIsBoundary(t, n) ? 1 : 0, a = this._ModifiedRegionIsBoundary(i, r) ? 1 : 0;
    return s + a;
  }
  ConcatenateChanges(t, n) {
    const i = [];
    if (t.length === 0 || n.length === 0)
      return n.length > 0 ? n : t;
    if (this.ChangesOverlap(t[t.length - 1], n[0], i)) {
      const r = new Array(t.length + n.length - 1);
      return qt.Copy(t, 0, r, 0, t.length - 1), r[t.length - 1] = i[0], qt.Copy(n, 1, r, t.length, n.length - 1), r;
    } else {
      const r = new Array(t.length + n.length);
      return qt.Copy(t, 0, r, 0, t.length), qt.Copy(n, 0, r, t.length, n.length), r;
    }
  }
  ChangesOverlap(t, n, i) {
    if ($t.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), $t.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const r = t.originalStart;
      let s = t.originalLength;
      const a = t.modifiedStart;
      let l = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (l = n.modifiedStart + n.modifiedLength - t.modifiedStart), i[0] = new _t(r, s, a, l), !0;
    } else
      return i[0] = null, !1;
  }
  ClipDiagonalBound(t, n, i, r) {
    if (t >= 0 && t < r)
      return t;
    const s = i, a = r - i - 1, l = n % 2 === 0;
    if (t < 0) {
      const o = s % 2 === 0;
      return l === o ? 0 : 1;
    } else {
      const o = a % 2 === 0;
      return l === o ? r - 1 : r - 2;
    }
  }
}
let ne = class yt {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new yt(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return yt.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return yt.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return yt.isBeforeOrEqual(this, t);
  }
  static isBeforeOrEqual(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
  }
  static compare(t, n) {
    const i = t.lineNumber | 0, r = n.lineNumber | 0;
    if (i === r) {
      const s = t.column | 0, a = n.column | 0;
      return s - a;
    }
    return i - r;
  }
  clone() {
    return new yt(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new yt(t.lineNumber, t.column);
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
}, z = class me {
  constructor(t, n, i, r) {
    t > i || t === i && n > r ? (this.startLineNumber = i, this.startColumn = r, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = i, this.endColumn = r);
  }
  isEmpty() {
    return me.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return me.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return me.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return me.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return me.plusRange(this, t);
  }
  static plusRange(t, n) {
    let i, r, s, a;
    return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, r = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, r = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, r = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new me(i, r, s, a);
  }
  intersectRanges(t) {
    return me.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let i = t.startLineNumber, r = t.startColumn, s = t.endLineNumber, a = t.endColumn;
    const l = n.startLineNumber, o = n.startColumn, u = n.endLineNumber, h = n.endColumn;
    return i < l ? (i = l, r = o) : i === l && (r = Math.max(r, o)), s > u ? (s = u, a = h) : s === u && (a = Math.min(a, h)), i > s || i === s && r > a ? null : new me(
      i,
      r,
      s,
      a
    );
  }
  equalsRange(t) {
    return me.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return me.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new ne(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return me.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new ne(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new me(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new me(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return me.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new me(
      t.startLineNumber,
      t.startColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  collapseToEnd() {
    return me.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new me(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new me(
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
    return new me(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new me(
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
class Wr {
  constructor(t) {
    const n = rs(t);
    this._defaultValue = n, this._asciiMap = Wr._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const i = rs(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = i : this._map.set(t, i);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}
var gs;
(function(e) {
  e[e.False = 0] = "False", e[e.True = 1] = "True";
})(gs || (gs = {}));
var j;
(function(e) {
  e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})(j || (j = {}));
class zu {
  constructor(t, n, i) {
    const r = new Uint8Array(t * n);
    for (let s = 0, a = t * n; s < a; s++)
      r[s] = i;
    this._data = r, this.rows = t, this.cols = n;
  }
  get(t, n) {
    return this._data[t * this.cols + n];
  }
  set(t, n, i) {
    this._data[t * this.cols + n] = i;
  }
}
class Xu {
  constructor(t) {
    let n = 0, i = j.Invalid;
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      o > n && (n = o), l > i && (i = l), u > i && (i = u);
    }
    n++, i++;
    const r = new zu(i, n, j.Invalid);
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      r.set(l, o, u);
    }
    this._states = r, this._maxCharCode = n;
  }
  nextState(t, n) {
    return n < 0 || n >= this._maxCharCode ? j.Invalid : this._states.get(t, n);
  }
}
let Oi = null;
function Ju() {
  return Oi === null && (Oi = new Xu([
    [j.Start, R.h, j.H],
    [j.Start, R.H, j.H],
    [j.Start, R.f, j.F],
    [j.Start, R.F, j.F],
    [j.H, R.t, j.HT],
    [j.H, R.T, j.HT],
    [j.HT, R.t, j.HTT],
    [j.HT, R.T, j.HTT],
    [j.HTT, R.p, j.HTTP],
    [j.HTT, R.P, j.HTTP],
    [j.HTTP, R.s, j.BeforeColon],
    [j.HTTP, R.S, j.BeforeColon],
    [j.HTTP, R.Colon, j.AfterColon],
    [j.F, R.i, j.FI],
    [j.F, R.I, j.FI],
    [j.FI, R.l, j.FIL],
    [j.FI, R.L, j.FIL],
    [j.FIL, R.e, j.BeforeColon],
    [j.FIL, R.E, j.BeforeColon],
    [j.BeforeColon, R.Colon, j.AfterColon],
    [j.AfterColon, R.Slash, j.AlmostThere],
    [j.AlmostThere, R.Slash, j.End]
  ])), Oi;
}
var se;
(function(e) {
  e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(se || (se = {}));
let _n = null;
function Yu() {
  if (_n === null) {
    _n = new Wr(se.None);
    const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
    for (let n = 0; n < e.length; n++)
      _n.set(e.charCodeAt(n), se.ForceTermination);
    const t = ".,;:";
    for (let n = 0; n < t.length; n++)
      _n.set(t.charCodeAt(n), se.CannotEndIn);
  }
  return _n;
}
class fi {
  static _createLink(t, n, i, r, s) {
    let a = s - 1;
    do {
      const l = n.charCodeAt(a);
      if (t.get(l) !== se.CannotEndIn)
        break;
      a--;
    } while (a > r);
    if (r > 0) {
      const l = n.charCodeAt(r - 1), o = n.charCodeAt(a);
      (l === R.OpenParen && o === R.CloseParen || l === R.OpenSquareBracket && o === R.CloseSquareBracket || l === R.OpenCurlyBrace && o === R.CloseCurlyBrace) && a--;
    }
    return {
      range: {
        startLineNumber: i,
        startColumn: r + 1,
        endLineNumber: i,
        endColumn: a + 2
      },
      url: n.substring(r, a + 1)
    };
  }
  static computeLinks(t, n = Ju()) {
    const i = Yu(), r = [];
    for (let s = 1, a = t.getLineCount(); s <= a; s++) {
      const l = t.getLineContent(s), o = l.length;
      let u = 0, h = 0, c = 0, g = j.Start, d = !1, m = !1, p = !1, w = !1;
      for (; u < o; ) {
        let N = !1;
        const x = l.charCodeAt(u);
        if (g === j.Accept) {
          let _;
          switch (x) {
            case R.OpenParen:
              d = !0, _ = se.None;
              break;
            case R.CloseParen:
              _ = d ? se.None : se.ForceTermination;
              break;
            case R.OpenSquareBracket:
              p = !0, m = !0, _ = se.None;
              break;
            case R.CloseSquareBracket:
              p = !1, _ = m ? se.None : se.ForceTermination;
              break;
            case R.OpenCurlyBrace:
              w = !0, _ = se.None;
              break;
            case R.CloseCurlyBrace:
              _ = w ? se.None : se.ForceTermination;
              break;
            case R.SingleQuote:
            case R.DoubleQuote:
            case R.BackTick:
              c === x ? _ = se.ForceTermination : c === R.SingleQuote || c === R.DoubleQuote || c === R.BackTick ? _ = se.None : _ = se.ForceTermination;
              break;
            case R.Asterisk:
              _ = c === R.Asterisk ? se.ForceTermination : se.None;
              break;
            case R.Pipe:
              _ = c === R.Pipe ? se.ForceTermination : se.None;
              break;
            case R.Space:
              _ = p ? se.None : se.ForceTermination;
              break;
            default:
              _ = i.get(x);
          }
          _ === se.ForceTermination && (r.push(fi._createLink(i, l, s, h, u)), N = !0);
        } else if (g === j.End) {
          let _;
          x === R.OpenSquareBracket ? (m = !0, _ = se.None) : _ = i.get(x), _ === se.ForceTermination ? N = !0 : g = j.Accept;
        } else
          g = n.nextState(g, x), g === j.Invalid && (N = !0);
        N && (g = j.Start, d = !1, m = !1, w = !1, h = u + 1, c = x), u++;
      }
      g === j.Accept && r.push(fi._createLink(i, l, s, h, o));
    }
    return r;
  }
}
function Zu(e) {
  return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : fi.computeLinks(e);
}
const Mi = class Mi {
  constructor() {
    this._defaultValueSet = [
      ["true", "false"],
      ["True", "False"],
      ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"],
      ["public", "protected", "private"]
    ];
  }
  navigateValueSet(t, n, i, r, s) {
    if (t && n) {
      const a = this.doNavigateValueSet(n, s);
      if (a)
        return {
          range: t,
          value: a
        };
    }
    if (i && r) {
      const a = this.doNavigateValueSet(r, s);
      if (a)
        return {
          range: i,
          value: a
        };
    }
    return null;
  }
  doNavigateValueSet(t, n) {
    const i = this.numberReplace(t, n);
    return i !== null ? i : this.textReplace(t, n);
  }
  numberReplace(t, n) {
    const i = Math.pow(10, t.length - (t.lastIndexOf(".") + 1));
    let r = Number(t);
    const s = parseFloat(t);
    return !isNaN(r) && !isNaN(s) && r === s ? r === 0 && !n ? null : (r = Math.floor(r * i), r += n ? i : -i, String(r / i)) : null;
  }
  textReplace(t, n) {
    return this.valueSetsReplace(this._defaultValueSet, t, n);
  }
  valueSetsReplace(t, n, i) {
    let r = null;
    for (let s = 0, a = t.length; r === null && s < a; s++)
      r = this.valueSetReplace(t[s], n, i);
    return r;
  }
  valueSetReplace(t, n, i) {
    let r = t.indexOf(n);
    return r >= 0 ? (r += i ? 1 : -1, r < 0 ? r = t.length - 1 : r %= t.length, t[r]) : null;
  }
};
Mi.INSTANCE = new Mi();
let tr = Mi;
var v;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(v || (v = {}));
var L;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(L || (L = {}));
class jr {
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
    return this._strToKeyCode[t.toLowerCase()] || v.Unknown;
  }
}
const ni = new jr(), nr = new jr(), ir = new jr(), Qu = new Array(230), Ku = /* @__PURE__ */ Object.create(null), Cu = /* @__PURE__ */ Object.create(null), rr = [];
for (let e = 0; e <= L.MAX_VALUE; e++)
  v.DependsOnKbLayout;
for (let e = 0; e <= v.MAX_VALUE; e++)
  rr[e] = L.DependsOnKbLayout;
(function() {
  const e = "", t = [
    [1, L.None, "None", v.Unknown, "unknown", 0, "VK_UNKNOWN", e, e],
    [1, L.Hyper, "Hyper", v.Unknown, e, 0, e, e, e],
    [1, L.Super, "Super", v.Unknown, e, 0, e, e, e],
    [1, L.Fn, "Fn", v.Unknown, e, 0, e, e, e],
    [1, L.FnLock, "FnLock", v.Unknown, e, 0, e, e, e],
    [1, L.Suspend, "Suspend", v.Unknown, e, 0, e, e, e],
    [1, L.Resume, "Resume", v.Unknown, e, 0, e, e, e],
    [1, L.Turbo, "Turbo", v.Unknown, e, 0, e, e, e],
    [1, L.Sleep, "Sleep", v.Unknown, e, 0, "VK_SLEEP", e, e],
    [1, L.WakeUp, "WakeUp", v.Unknown, e, 0, e, e, e],
    [0, L.KeyA, "KeyA", v.KeyA, "A", 65, "VK_A", e, e],
    [0, L.KeyB, "KeyB", v.KeyB, "B", 66, "VK_B", e, e],
    [0, L.KeyC, "KeyC", v.KeyC, "C", 67, "VK_C", e, e],
    [0, L.KeyD, "KeyD", v.KeyD, "D", 68, "VK_D", e, e],
    [0, L.KeyE, "KeyE", v.KeyE, "E", 69, "VK_E", e, e],
    [0, L.KeyF, "KeyF", v.KeyF, "F", 70, "VK_F", e, e],
    [0, L.KeyG, "KeyG", v.KeyG, "G", 71, "VK_G", e, e],
    [0, L.KeyH, "KeyH", v.KeyH, "H", 72, "VK_H", e, e],
    [0, L.KeyI, "KeyI", v.KeyI, "I", 73, "VK_I", e, e],
    [0, L.KeyJ, "KeyJ", v.KeyJ, "J", 74, "VK_J", e, e],
    [0, L.KeyK, "KeyK", v.KeyK, "K", 75, "VK_K", e, e],
    [0, L.KeyL, "KeyL", v.KeyL, "L", 76, "VK_L", e, e],
    [0, L.KeyM, "KeyM", v.KeyM, "M", 77, "VK_M", e, e],
    [0, L.KeyN, "KeyN", v.KeyN, "N", 78, "VK_N", e, e],
    [0, L.KeyO, "KeyO", v.KeyO, "O", 79, "VK_O", e, e],
    [0, L.KeyP, "KeyP", v.KeyP, "P", 80, "VK_P", e, e],
    [0, L.KeyQ, "KeyQ", v.KeyQ, "Q", 81, "VK_Q", e, e],
    [0, L.KeyR, "KeyR", v.KeyR, "R", 82, "VK_R", e, e],
    [0, L.KeyS, "KeyS", v.KeyS, "S", 83, "VK_S", e, e],
    [0, L.KeyT, "KeyT", v.KeyT, "T", 84, "VK_T", e, e],
    [0, L.KeyU, "KeyU", v.KeyU, "U", 85, "VK_U", e, e],
    [0, L.KeyV, "KeyV", v.KeyV, "V", 86, "VK_V", e, e],
    [0, L.KeyW, "KeyW", v.KeyW, "W", 87, "VK_W", e, e],
    [0, L.KeyX, "KeyX", v.KeyX, "X", 88, "VK_X", e, e],
    [0, L.KeyY, "KeyY", v.KeyY, "Y", 89, "VK_Y", e, e],
    [0, L.KeyZ, "KeyZ", v.KeyZ, "Z", 90, "VK_Z", e, e],
    [0, L.Digit1, "Digit1", v.Digit1, "1", 49, "VK_1", e, e],
    [0, L.Digit2, "Digit2", v.Digit2, "2", 50, "VK_2", e, e],
    [0, L.Digit3, "Digit3", v.Digit3, "3", 51, "VK_3", e, e],
    [0, L.Digit4, "Digit4", v.Digit4, "4", 52, "VK_4", e, e],
    [0, L.Digit5, "Digit5", v.Digit5, "5", 53, "VK_5", e, e],
    [0, L.Digit6, "Digit6", v.Digit6, "6", 54, "VK_6", e, e],
    [0, L.Digit7, "Digit7", v.Digit7, "7", 55, "VK_7", e, e],
    [0, L.Digit8, "Digit8", v.Digit8, "8", 56, "VK_8", e, e],
    [0, L.Digit9, "Digit9", v.Digit9, "9", 57, "VK_9", e, e],
    [0, L.Digit0, "Digit0", v.Digit0, "0", 48, "VK_0", e, e],
    [1, L.Enter, "Enter", v.Enter, "Enter", 13, "VK_RETURN", e, e],
    [1, L.Escape, "Escape", v.Escape, "Escape", 27, "VK_ESCAPE", e, e],
    [1, L.Backspace, "Backspace", v.Backspace, "Backspace", 8, "VK_BACK", e, e],
    [1, L.Tab, "Tab", v.Tab, "Tab", 9, "VK_TAB", e, e],
    [1, L.Space, "Space", v.Space, "Space", 32, "VK_SPACE", e, e],
    [0, L.Minus, "Minus", v.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, L.Equal, "Equal", v.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, L.BracketLeft, "BracketLeft", v.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, L.BracketRight, "BracketRight", v.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, L.Backslash, "Backslash", v.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, L.IntlHash, "IntlHash", v.Unknown, e, 0, e, e, e],
    [0, L.Semicolon, "Semicolon", v.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, L.Quote, "Quote", v.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, L.Backquote, "Backquote", v.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, L.Comma, "Comma", v.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, L.Period, "Period", v.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, L.Slash, "Slash", v.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, L.CapsLock, "CapsLock", v.CapsLock, "CapsLock", 20, "VK_CAPITAL", e, e],
    [1, L.F1, "F1", v.F1, "F1", 112, "VK_F1", e, e],
    [1, L.F2, "F2", v.F2, "F2", 113, "VK_F2", e, e],
    [1, L.F3, "F3", v.F3, "F3", 114, "VK_F3", e, e],
    [1, L.F4, "F4", v.F4, "F4", 115, "VK_F4", e, e],
    [1, L.F5, "F5", v.F5, "F5", 116, "VK_F5", e, e],
    [1, L.F6, "F6", v.F6, "F6", 117, "VK_F6", e, e],
    [1, L.F7, "F7", v.F7, "F7", 118, "VK_F7", e, e],
    [1, L.F8, "F8", v.F8, "F8", 119, "VK_F8", e, e],
    [1, L.F9, "F9", v.F9, "F9", 120, "VK_F9", e, e],
    [1, L.F10, "F10", v.F10, "F10", 121, "VK_F10", e, e],
    [1, L.F11, "F11", v.F11, "F11", 122, "VK_F11", e, e],
    [1, L.F12, "F12", v.F12, "F12", 123, "VK_F12", e, e],
    [1, L.PrintScreen, "PrintScreen", v.Unknown, e, 0, e, e, e],
    [1, L.ScrollLock, "ScrollLock", v.ScrollLock, "ScrollLock", 145, "VK_SCROLL", e, e],
    [1, L.Pause, "Pause", v.PauseBreak, "PauseBreak", 19, "VK_PAUSE", e, e],
    [1, L.Insert, "Insert", v.Insert, "Insert", 45, "VK_INSERT", e, e],
    [1, L.Home, "Home", v.Home, "Home", 36, "VK_HOME", e, e],
    [1, L.PageUp, "PageUp", v.PageUp, "PageUp", 33, "VK_PRIOR", e, e],
    [1, L.Delete, "Delete", v.Delete, "Delete", 46, "VK_DELETE", e, e],
    [1, L.End, "End", v.End, "End", 35, "VK_END", e, e],
    [1, L.PageDown, "PageDown", v.PageDown, "PageDown", 34, "VK_NEXT", e, e],
    [1, L.ArrowRight, "ArrowRight", v.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", e],
    [1, L.ArrowLeft, "ArrowLeft", v.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", e],
    [1, L.ArrowDown, "ArrowDown", v.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", e],
    [1, L.ArrowUp, "ArrowUp", v.UpArrow, "UpArrow", 38, "VK_UP", "Up", e],
    [1, L.NumLock, "NumLock", v.NumLock, "NumLock", 144, "VK_NUMLOCK", e, e],
    [1, L.NumpadDivide, "NumpadDivide", v.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", e, e],
    [1, L.NumpadMultiply, "NumpadMultiply", v.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e],
    [1, L.NumpadSubtract, "NumpadSubtract", v.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e],
    [1, L.NumpadAdd, "NumpadAdd", v.NumpadAdd, "NumPad_Add", 107, "VK_ADD", e, e],
    [1, L.NumpadEnter, "NumpadEnter", v.Enter, e, 0, e, e, e],
    [1, L.Numpad1, "Numpad1", v.Numpad1, "NumPad1", 97, "VK_NUMPAD1", e, e],
    [1, L.Numpad2, "Numpad2", v.Numpad2, "NumPad2", 98, "VK_NUMPAD2", e, e],
    [1, L.Numpad3, "Numpad3", v.Numpad3, "NumPad3", 99, "VK_NUMPAD3", e, e],
    [1, L.Numpad4, "Numpad4", v.Numpad4, "NumPad4", 100, "VK_NUMPAD4", e, e],
    [1, L.Numpad5, "Numpad5", v.Numpad5, "NumPad5", 101, "VK_NUMPAD5", e, e],
    [1, L.Numpad6, "Numpad6", v.Numpad6, "NumPad6", 102, "VK_NUMPAD6", e, e],
    [1, L.Numpad7, "Numpad7", v.Numpad7, "NumPad7", 103, "VK_NUMPAD7", e, e],
    [1, L.Numpad8, "Numpad8", v.Numpad8, "NumPad8", 104, "VK_NUMPAD8", e, e],
    [1, L.Numpad9, "Numpad9", v.Numpad9, "NumPad9", 105, "VK_NUMPAD9", e, e],
    [1, L.Numpad0, "Numpad0", v.Numpad0, "NumPad0", 96, "VK_NUMPAD0", e, e],
    [1, L.NumpadDecimal, "NumpadDecimal", v.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", e, e],
    [0, L.IntlBackslash, "IntlBackslash", v.IntlBackslash, "OEM_102", 226, "VK_OEM_102", e, e],
    [1, L.ContextMenu, "ContextMenu", v.ContextMenu, "ContextMenu", 93, e, e, e],
    [1, L.Power, "Power", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadEqual, "NumpadEqual", v.Unknown, e, 0, e, e, e],
    [1, L.F13, "F13", v.F13, "F13", 124, "VK_F13", e, e],
    [1, L.F14, "F14", v.F14, "F14", 125, "VK_F14", e, e],
    [1, L.F15, "F15", v.F15, "F15", 126, "VK_F15", e, e],
    [1, L.F16, "F16", v.F16, "F16", 127, "VK_F16", e, e],
    [1, L.F17, "F17", v.F17, "F17", 128, "VK_F17", e, e],
    [1, L.F18, "F18", v.F18, "F18", 129, "VK_F18", e, e],
    [1, L.F19, "F19", v.F19, "F19", 130, "VK_F19", e, e],
    [1, L.F20, "F20", v.F20, "F20", 131, "VK_F20", e, e],
    [1, L.F21, "F21", v.F21, "F21", 132, "VK_F21", e, e],
    [1, L.F22, "F22", v.F22, "F22", 133, "VK_F22", e, e],
    [1, L.F23, "F23", v.F23, "F23", 134, "VK_F23", e, e],
    [1, L.F24, "F24", v.F24, "F24", 135, "VK_F24", e, e],
    [1, L.Open, "Open", v.Unknown, e, 0, e, e, e],
    [1, L.Help, "Help", v.Unknown, e, 0, e, e, e],
    [1, L.Select, "Select", v.Unknown, e, 0, e, e, e],
    [1, L.Again, "Again", v.Unknown, e, 0, e, e, e],
    [1, L.Undo, "Undo", v.Unknown, e, 0, e, e, e],
    [1, L.Cut, "Cut", v.Unknown, e, 0, e, e, e],
    [1, L.Copy, "Copy", v.Unknown, e, 0, e, e, e],
    [1, L.Paste, "Paste", v.Unknown, e, 0, e, e, e],
    [1, L.Find, "Find", v.Unknown, e, 0, e, e, e],
    [1, L.AudioVolumeMute, "AudioVolumeMute", v.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e],
    [1, L.AudioVolumeUp, "AudioVolumeUp", v.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e],
    [1, L.AudioVolumeDown, "AudioVolumeDown", v.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e],
    [1, L.NumpadComma, "NumpadComma", v.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", e, e],
    [0, L.IntlRo, "IntlRo", v.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", e, e],
    [1, L.KanaMode, "KanaMode", v.Unknown, e, 0, e, e, e],
    [0, L.IntlYen, "IntlYen", v.Unknown, e, 0, e, e, e],
    [1, L.Convert, "Convert", v.Unknown, e, 0, e, e, e],
    [1, L.NonConvert, "NonConvert", v.Unknown, e, 0, e, e, e],
    [1, L.Lang1, "Lang1", v.Unknown, e, 0, e, e, e],
    [1, L.Lang2, "Lang2", v.Unknown, e, 0, e, e, e],
    [1, L.Lang3, "Lang3", v.Unknown, e, 0, e, e, e],
    [1, L.Lang4, "Lang4", v.Unknown, e, 0, e, e, e],
    [1, L.Lang5, "Lang5", v.Unknown, e, 0, e, e, e],
    [1, L.Abort, "Abort", v.Unknown, e, 0, e, e, e],
    [1, L.Props, "Props", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadParenLeft, "NumpadParenLeft", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadParenRight, "NumpadParenRight", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadBackspace, "NumpadBackspace", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadMemoryStore, "NumpadMemoryStore", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadMemoryRecall, "NumpadMemoryRecall", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadMemoryClear, "NumpadMemoryClear", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadMemoryAdd, "NumpadMemoryAdd", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadMemorySubtract, "NumpadMemorySubtract", v.Unknown, e, 0, e, e, e],
    [1, L.NumpadClear, "NumpadClear", v.Clear, "Clear", 12, "VK_CLEAR", e, e],
    [1, L.NumpadClearEntry, "NumpadClearEntry", v.Unknown, e, 0, e, e, e],
    [1, L.None, e, v.Ctrl, "Ctrl", 17, "VK_CONTROL", e, e],
    [1, L.None, e, v.Shift, "Shift", 16, "VK_SHIFT", e, e],
    [1, L.None, e, v.Alt, "Alt", 18, "VK_MENU", e, e],
    [1, L.None, e, v.Meta, "Meta", 91, "VK_COMMAND", e, e],
    [1, L.ControlLeft, "ControlLeft", v.Ctrl, e, 0, "VK_LCONTROL", e, e],
    [1, L.ShiftLeft, "ShiftLeft", v.Shift, e, 0, "VK_LSHIFT", e, e],
    [1, L.AltLeft, "AltLeft", v.Alt, e, 0, "VK_LMENU", e, e],
    [1, L.MetaLeft, "MetaLeft", v.Meta, e, 0, "VK_LWIN", e, e],
    [1, L.ControlRight, "ControlRight", v.Ctrl, e, 0, "VK_RCONTROL", e, e],
    [1, L.ShiftRight, "ShiftRight", v.Shift, e, 0, "VK_RSHIFT", e, e],
    [1, L.AltRight, "AltRight", v.Alt, e, 0, "VK_RMENU", e, e],
    [1, L.MetaRight, "MetaRight", v.Meta, e, 0, "VK_RWIN", e, e],
    [1, L.BrightnessUp, "BrightnessUp", v.Unknown, e, 0, e, e, e],
    [1, L.BrightnessDown, "BrightnessDown", v.Unknown, e, 0, e, e, e],
    [1, L.MediaPlay, "MediaPlay", v.Unknown, e, 0, e, e, e],
    [1, L.MediaRecord, "MediaRecord", v.Unknown, e, 0, e, e, e],
    [1, L.MediaFastForward, "MediaFastForward", v.Unknown, e, 0, e, e, e],
    [1, L.MediaRewind, "MediaRewind", v.Unknown, e, 0, e, e, e],
    [1, L.MediaTrackNext, "MediaTrackNext", v.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e],
    [1, L.MediaTrackPrevious, "MediaTrackPrevious", v.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e],
    [1, L.MediaStop, "MediaStop", v.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", e, e],
    [1, L.Eject, "Eject", v.Unknown, e, 0, e, e, e],
    [1, L.MediaPlayPause, "MediaPlayPause", v.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e],
    [1, L.MediaSelect, "MediaSelect", v.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e],
    [1, L.LaunchMail, "LaunchMail", v.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e],
    [1, L.LaunchApp2, "LaunchApp2", v.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e],
    [1, L.LaunchApp1, "LaunchApp1", v.Unknown, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e],
    [1, L.SelectTask, "SelectTask", v.Unknown, e, 0, e, e, e],
    [1, L.LaunchScreenSaver, "LaunchScreenSaver", v.Unknown, e, 0, e, e, e],
    [1, L.BrowserSearch, "BrowserSearch", v.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e],
    [1, L.BrowserHome, "BrowserHome", v.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", e, e],
    [1, L.BrowserBack, "BrowserBack", v.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", e, e],
    [1, L.BrowserForward, "BrowserForward", v.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e],
    [1, L.BrowserStop, "BrowserStop", v.Unknown, e, 0, "VK_BROWSER_STOP", e, e],
    [1, L.BrowserRefresh, "BrowserRefresh", v.Unknown, e, 0, "VK_BROWSER_REFRESH", e, e],
    [1, L.BrowserFavorites, "BrowserFavorites", v.Unknown, e, 0, "VK_BROWSER_FAVORITES", e, e],
    [1, L.ZoomToggle, "ZoomToggle", v.Unknown, e, 0, e, e, e],
    [1, L.MailReply, "MailReply", v.Unknown, e, 0, e, e, e],
    [1, L.MailForward, "MailForward", v.Unknown, e, 0, e, e, e],
    [1, L.MailSend, "MailSend", v.Unknown, e, 0, e, e, e],
    [1, L.None, e, v.KEY_IN_COMPOSITION, "KeyInComposition", 229, e, e, e],
    [1, L.None, e, v.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", e, e],
    [1, L.None, e, v.OEM_8, "OEM_8", 223, "VK_OEM_8", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_KANA", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_HANGUL", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_JUNJA", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_FINAL", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_HANJA", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_KANJI", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_CONVERT", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_NONCONVERT", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_ACCEPT", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_MODECHANGE", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_SELECT", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_PRINT", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_EXECUTE", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_SNAPSHOT", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_HELP", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_APPS", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_PROCESSKEY", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_PACKET", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_DBE_SBCSCHAR", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_DBE_DBCSCHAR", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_ATTN", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_CRSEL", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_EXSEL", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_EREOF", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_PLAY", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_ZOOM", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_NONAME", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_PA1", e, e],
    [1, L.None, e, v.Unknown, e, 0, "VK_OEM_CLEAR", e, e]
  ], n = [], i = [];
  for (const r of t) {
    const [s, a, l, o, u, h, c, g, d] = r;
    if (i[a] || (i[a] = !0, Ku[l] = a, Cu[l.toLowerCase()] = a, s && o !== v.Unknown && o !== v.Enter && o !== v.Ctrl && o !== v.Shift && o !== v.Alt && o !== v.Meta && (rr[o] = a)), !n[o]) {
      if (n[o] = !0, !u)
        throw new Error(
          `String representation missing for key code ${o} around scan code ${l}`
        );
      ni.define(o, u), nr.define(o, g || u), ir.define(o, d || g || u);
    }
    h && (Qu[h] = o);
  }
  rr[v.Enter] = L.Enter;
})();
var ms;
(function(e) {
  function t(l) {
    return ni.keyCodeToStr(l);
  }
  e.toString = t;
  function n(l) {
    return ni.strToKeyCode(l);
  }
  e.fromString = n;
  function i(l) {
    return nr.keyCodeToStr(l);
  }
  e.toUserSettingsUS = i;
  function r(l) {
    return ir.keyCodeToStr(l);
  }
  e.toUserSettingsGeneral = r;
  function s(l) {
    return nr.strToKeyCode(l) || ir.strToKeyCode(l);
  }
  e.fromUserSettings = s;
  function a(l) {
    if (l >= v.Numpad0 && l <= v.NumpadDivide)
      return null;
    switch (l) {
      case v.UpArrow:
        return "Up";
      case v.DownArrow:
        return "Down";
      case v.LeftArrow:
        return "Left";
      case v.RightArrow:
        return "Right";
    }
    return ni.keyCodeToStr(l);
  }
  e.toElectronAccelerator = a;
})(ms || (ms = {}));
var Zt;
(function(e) {
  e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(Zt || (Zt = {}));
function ec(e, t) {
  const n = (t & 65535) << 16 >>> 0;
  return (e | n) >>> 0;
}
var sr;
(function(e) {
  e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart";
})(sr || (sr = {}));
let It;
const Bi = globalThis.vscode;
var Fo;
if (typeof Bi < "u" && typeof Bi.process < "u") {
  const e = Bi.process;
  It = {
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
} else typeof process < "u" && typeof ((Fo = process == null ? void 0 : process.versions) == null ? void 0 : Fo.node) == "string" ? It = {
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
} : It = {
  get platform() {
    return fn ? "win32" : mu ? "darwin" : "linux";
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
const hi = It.cwd, tc = It.env, nc = It.platform;
It.arch;
const ic = 65, rc = 97, sc = 90, ac = 122, Ut = 46, we = 47, Se = 92, rt = 58, oc = 63;
class Zo extends Error {
  constructor(t, n, i) {
    let r;
    typeof n == "string" && n.indexOf("not ") === 0 ? (r = "must not be", n = n.replace(/^not /, "")) : r = "must be";
    const s = t.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${t}" ${s} ${r} of type ${n}`;
    a += `. Received type ${typeof i}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
}
function lc(e, t) {
  if (e === null || typeof e != "object")
    throw new Zo(t, "Object", e);
}
function fe(e, t) {
  if (typeof e != "string")
    throw new Zo(t, "string", e);
}
const Qe = nc === "win32";
function Z(e) {
  return e === we || e === Se;
}
function ar(e) {
  return e === we;
}
function st(e) {
  return e >= ic && e <= sc || e >= rc && e <= ac;
}
function gi(e, t, n, i) {
  let r = "", s = 0, a = -1, l = 0, o = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length)
      o = e.charCodeAt(u);
    else {
      if (i(o))
        break;
      o = we;
    }
    if (i(o)) {
      if (!(a === u - 1 || l === 1)) if (l === 2) {
        if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== Ut || r.charCodeAt(r.length - 2) !== Ut) {
          if (r.length > 2) {
            const h = r.lastIndexOf(n);
            h === -1 ? (r = "", s = 0) : (r = r.slice(0, h), s = r.length - 1 - r.lastIndexOf(n)), a = u, l = 0;
            continue;
          } else if (r.length !== 0) {
            r = "", s = 0, a = u, l = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? `${n}..` : "..", s = 2);
      } else
        r.length > 0 ? r += `${n}${e.slice(a + 1, u)}` : r = e.slice(a + 1, u), s = u - a - 1;
      a = u, l = 0;
    } else o === Ut && l !== -1 ? ++l : l = -1;
  }
  return r;
}
function uc(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function Qo(e, t) {
  lc(t, "pathObject");
  const n = t.dir || t.root, i = t.base || `${t.name || ""}${uc(t.ext)}`;
  return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
const ve = {
  resolve(...e) {
    let t = "", n = "", i = !1;
    for (let r = e.length - 1; r >= -1; r--) {
      let s;
      if (r >= 0) {
        if (s = e[r], fe(s, `paths[${r}]`), s.length === 0)
          continue;
      } else t.length === 0 ? s = hi() : (s = tc[`=${t}`] || hi(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === Se) && (s = `${t}\\`));
      const a = s.length;
      let l = 0, o = "", u = !1;
      const h = s.charCodeAt(0);
      if (a === 1)
        Z(h) && (l = 1, u = !0);
      else if (Z(h))
        if (u = !0, Z(s.charCodeAt(1))) {
          let c = 2, g = c;
          for (; c < a && !Z(s.charCodeAt(c)); )
            c++;
          if (c < a && c !== g) {
            const d = s.slice(g, c);
            for (g = c; c < a && Z(s.charCodeAt(c)); )
              c++;
            if (c < a && c !== g) {
              for (g = c; c < a && !Z(s.charCodeAt(c)); )
                c++;
              (c === a || c !== g) && (o = `\\\\${d}\\${s.slice(g, c)}`, l = c);
            }
          }
        } else
          l = 1;
      else st(h) && s.charCodeAt(1) === rt && (o = s.slice(0, 2), l = 2, a > 2 && Z(s.charCodeAt(2)) && (u = !0, l = 3));
      if (o.length > 0)
        if (t.length > 0) {
          if (o.toLowerCase() !== t.toLowerCase())
            continue;
        } else
          t = o;
      if (i) {
        if (t.length > 0)
          break;
      } else if (n = `${s.slice(l)}\\${n}`, i = u, u && t.length > 0)
        break;
    }
    return n = gi(n, !i, "\\", Z), i ? `${t}\\${n}` : `${t}${n}` || ".";
  },
  normalize(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = 0, i, r = !1;
    const s = e.charCodeAt(0);
    if (t === 1)
      return ar(s) ? "\\" : e;
    if (Z(s))
      if (r = !0, Z(e.charCodeAt(1))) {
        let l = 2, o = l;
        for (; l < t && !Z(e.charCodeAt(l)); )
          l++;
        if (l < t && l !== o) {
          const u = e.slice(o, l);
          for (o = l; l < t && Z(e.charCodeAt(l)); )
            l++;
          if (l < t && l !== o) {
            for (o = l; l < t && !Z(e.charCodeAt(l)); )
              l++;
            if (l === t)
              return `\\\\${u}\\${e.slice(o)}\\`;
            l !== o && (i = `\\\\${u}\\${e.slice(o, l)}`, n = l);
          }
        }
      } else
        n = 1;
    else st(s) && e.charCodeAt(1) === rt && (i = e.slice(0, 2), n = 2, t > 2 && Z(e.charCodeAt(2)) && (r = !0, n = 3));
    let a = n < t ? gi(e.slice(n), !r, "\\", Z) : "";
    if (a.length === 0 && !r && (a = "."), a.length > 0 && Z(e.charCodeAt(t - 1)) && (a += "\\"), !r && i === void 0 && e.includes(":")) {
      if (a.length >= 2 && st(a.charCodeAt(0)) && a.charCodeAt(1) === rt)
        return `.\\${a}`;
      let l = e.indexOf(":");
      do
        if (l === t - 1 || Z(e.charCodeAt(l + 1)))
          return `.\\${a}`;
      while ((l = e.indexOf(":", l + 1)) !== -1);
    }
    return i === void 0 ? r ? `\\${a}` : a : r ? `${i}\\${a}` : `${i}${a}`;
  },
  isAbsolute(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return !1;
    const n = e.charCodeAt(0);
    return Z(n) || t > 2 && st(n) && e.charCodeAt(1) === rt && Z(e.charCodeAt(2));
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
    let i = !0, r = 0;
    if (typeof n == "string" && Z(n.charCodeAt(0))) {
      ++r;
      const s = n.length;
      s > 1 && Z(n.charCodeAt(1)) && (++r, s > 2 && (Z(n.charCodeAt(2)) ? ++r : i = !1));
    }
    if (i) {
      for (; r < t.length && Z(t.charCodeAt(r)); )
        r++;
      r >= 2 && (t = `\\${t.slice(r)}`);
    }
    return ve.normalize(t);
  },
  relative(e, t) {
    if (fe(e, "from"), fe(t, "to"), e === t)
      return "";
    const n = ve.resolve(e), i = ve.resolve(t);
    if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t))
      return "";
    if (n.length !== e.length || i.length !== t.length) {
      const m = n.split("\\"), p = i.split("\\");
      m[m.length - 1] === "" && m.pop(), p[p.length - 1] === "" && p.pop();
      const w = m.length, N = p.length, x = w < N ? w : N;
      let _;
      for (_ = 0; _ < x && m[_].toLowerCase() === p[_].toLowerCase(); _++)
        ;
      return _ === 0 ? i : _ === x ? N > x ? p.slice(_).join("\\") : w > x ? "..\\".repeat(w - 1 - _) + ".." : "" : "..\\".repeat(w - _) + p.slice(_).join("\\");
    }
    let r = 0;
    for (; r < e.length && e.charCodeAt(r) === Se; )
      r++;
    let s = e.length;
    for (; s - 1 > r && e.charCodeAt(s - 1) === Se; )
      s--;
    const a = s - r;
    let l = 0;
    for (; l < t.length && t.charCodeAt(l) === Se; )
      l++;
    let o = t.length;
    for (; o - 1 > l && t.charCodeAt(o - 1) === Se; )
      o--;
    const u = o - l, h = a < u ? a : u;
    let c = -1, g = 0;
    for (; g < h; g++) {
      const m = e.charCodeAt(r + g);
      if (m !== t.charCodeAt(l + g))
        break;
      m === Se && (c = g);
    }
    if (g !== h) {
      if (c === -1)
        return i;
    } else {
      if (u > h) {
        if (t.charCodeAt(l + g) === Se)
          return i.slice(l + g + 1);
        if (g === 2)
          return i.slice(l + g);
      }
      a > h && (e.charCodeAt(r + g) === Se ? c = g : g === 2 && (c = 3)), c === -1 && (c = 0);
    }
    let d = "";
    for (g = r + c + 1; g <= s; ++g)
      (g === s || e.charCodeAt(g) === Se) && (d += d.length === 0 ? ".." : "\\..");
    return l += c, d.length > 0 ? `${d}${i.slice(l, o)}` : (i.charCodeAt(l) === Se && ++l, i.slice(l, o));
  },
  toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0)
      return e;
    const t = ve.resolve(e);
    if (t.length <= 2)
      return e;
    if (t.charCodeAt(0) === Se) {
      if (t.charCodeAt(1) === Se) {
        const n = t.charCodeAt(2);
        if (n !== oc && n !== Ut)
          return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (st(t.charCodeAt(0)) && t.charCodeAt(1) === rt && t.charCodeAt(2) === Se)
      return `\\\\?\\${t}`;
    return t;
  },
  dirname(e) {
    fe(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = -1, i = 0;
    const r = e.charCodeAt(0);
    if (t === 1)
      return Z(r) ? e : ".";
    if (Z(r)) {
      if (n = i = 1, Z(e.charCodeAt(1))) {
        let l = 2, o = l;
        for (; l < t && !Z(e.charCodeAt(l)); )
          l++;
        if (l < t && l !== o) {
          for (o = l; l < t && Z(e.charCodeAt(l)); )
            l++;
          if (l < t && l !== o) {
            for (o = l; l < t && !Z(e.charCodeAt(l)); )
              l++;
            if (l === t)
              return e;
            l !== o && (n = i = l + 1);
          }
        }
      }
    } else st(r) && e.charCodeAt(1) === rt && (n = t > 2 && Z(e.charCodeAt(2)) ? 3 : 2, i = n);
    let s = -1, a = !0;
    for (let l = t - 1; l >= i; --l)
      if (Z(e.charCodeAt(l))) {
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
    let n = 0, i = -1, r = !0, s;
    if (e.length >= 2 && st(e.charCodeAt(0)) && e.charCodeAt(1) === rt && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, l = -1;
      for (s = e.length - 1; s >= n; --s) {
        const o = e.charCodeAt(s);
        if (Z(o)) {
          if (!r) {
            n = s + 1;
            break;
          }
        } else
          l === -1 && (r = !1, l = s + 1), a >= 0 && (o === t.charCodeAt(a) ? --a === -1 && (i = s) : (a = -1, i = l));
      }
      return n === i ? i = l : i === -1 && (i = e.length), e.slice(n, i);
    }
    for (s = e.length - 1; s >= n; --s)
      if (Z(e.charCodeAt(s))) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else i === -1 && (r = !1, i = s + 1);
    return i === -1 ? "" : e.slice(n, i);
  },
  extname(e) {
    fe(e, "path");
    let t = 0, n = -1, i = 0, r = -1, s = !0, a = 0;
    e.length >= 2 && e.charCodeAt(1) === rt && st(e.charCodeAt(0)) && (t = i = 2);
    for (let l = e.length - 1; l >= t; --l) {
      const o = e.charCodeAt(l);
      if (Z(o)) {
        if (!s) {
          i = l + 1;
          break;
        }
        continue;
      }
      r === -1 && (s = !1, r = l + 1), o === Ut ? n === -1 ? n = l : a !== 1 && (a = 1) : n !== -1 && (a = -1);
    }
    return n === -1 || r === -1 || a === 0 || a === 1 && n === r - 1 && n === i + 1 ? "" : e.slice(n, r);
  },
  format: Qo.bind(null, "\\"),
  parse(e) {
    fe(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.length;
    let i = 0, r = e.charCodeAt(0);
    if (n === 1)
      return Z(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
    if (Z(r)) {
      if (i = 1, Z(e.charCodeAt(1))) {
        let c = 2, g = c;
        for (; c < n && !Z(e.charCodeAt(c)); )
          c++;
        if (c < n && c !== g) {
          for (g = c; c < n && Z(e.charCodeAt(c)); )
            c++;
          if (c < n && c !== g) {
            for (g = c; c < n && !Z(e.charCodeAt(c)); )
              c++;
            c === n ? i = c : c !== g && (i = c + 1);
          }
        }
      }
    } else if (st(r) && e.charCodeAt(1) === rt) {
      if (n <= 2)
        return t.root = t.dir = e, t;
      if (i = 2, Z(e.charCodeAt(2))) {
        if (n === 3)
          return t.root = t.dir = e, t;
        i = 3;
      }
    }
    i > 0 && (t.root = e.slice(0, i));
    let s = -1, a = i, l = -1, o = !0, u = e.length - 1, h = 0;
    for (; u >= i; --u) {
      if (r = e.charCodeAt(u), Z(r)) {
        if (!o) {
          a = u + 1;
          break;
        }
        continue;
      }
      l === -1 && (o = !1, l = u + 1), r === Ut ? s === -1 ? s = u : h !== 1 && (h = 1) : s !== -1 && (h = -1);
    }
    return l !== -1 && (s === -1 || h === 0 || h === 1 && s === l - 1 && s === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, s), t.base = e.slice(a, l), t.ext = e.slice(s, l))), a > 0 && a !== i ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
}, cc = (() => {
  if (Qe) {
    const e = /\\/g;
    return () => {
      const t = hi().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => hi();
})(), ae = {
  resolve(...e) {
    let t = "", n = !1;
    for (let i = e.length - 1; i >= 0 && !n; i--) {
      const r = e[i];
      fe(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === we);
    }
    if (!n) {
      const i = cc();
      t = `${i}/${t}`, n = i.charCodeAt(0) === we;
    }
    return t = gi(t, !n, "/", ar), n ? `/${t}` : t.length > 0 ? t : ".";
  },
  normalize(e) {
    if (fe(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === we, n = e.charCodeAt(e.length - 1) === we;
    return e = gi(e, !t, "/", ar), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
  },
  isAbsolute(e) {
    return fe(e, "path"), e.length > 0 && e.charCodeAt(0) === we;
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    const t = [];
    for (let n = 0; n < e.length; ++n) {
      const i = e[n];
      fe(i, "path"), i.length > 0 && t.push(i);
    }
    return t.length === 0 ? "." : ae.normalize(t.join("/"));
  },
  relative(e, t) {
    if (fe(e, "from"), fe(t, "to"), e === t || (e = ae.resolve(e), t = ae.resolve(t), e === t))
      return "";
    const n = 1, i = e.length, r = i - n, s = 1, a = t.length - s, l = r < a ? r : a;
    let o = -1, u = 0;
    for (; u < l; u++) {
      const c = e.charCodeAt(n + u);
      if (c !== t.charCodeAt(s + u))
        break;
      c === we && (o = u);
    }
    if (u === l)
      if (a > l) {
        if (t.charCodeAt(s + u) === we)
          return t.slice(s + u + 1);
        if (u === 0)
          return t.slice(s + u);
      } else r > l && (e.charCodeAt(n + u) === we ? o = u : u === 0 && (o = 0));
    let h = "";
    for (u = n + o + 1; u <= i; ++u)
      (u === i || e.charCodeAt(u) === we) && (h += h.length === 0 ? ".." : "/..");
    return `${h}${t.slice(s + o)}`;
  },
  toNamespacedPath(e) {
    return e;
  },
  dirname(e) {
    if (fe(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === we;
    let n = -1, i = !0;
    for (let r = e.length - 1; r >= 1; --r)
      if (e.charCodeAt(r) === we) {
        if (!i) {
          n = r;
          break;
        }
      } else
        i = !1;
    return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
  },
  basename(e, t) {
    t !== void 0 && fe(t, "suffix"), fe(e, "path");
    let n = 0, i = -1, r = !0, s;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, l = -1;
      for (s = e.length - 1; s >= 0; --s) {
        const o = e.charCodeAt(s);
        if (o === we) {
          if (!r) {
            n = s + 1;
            break;
          }
        } else
          l === -1 && (r = !1, l = s + 1), a >= 0 && (o === t.charCodeAt(a) ? --a === -1 && (i = s) : (a = -1, i = l));
      }
      return n === i ? i = l : i === -1 && (i = e.length), e.slice(n, i);
    }
    for (s = e.length - 1; s >= 0; --s)
      if (e.charCodeAt(s) === we) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else i === -1 && (r = !1, i = s + 1);
    return i === -1 ? "" : e.slice(n, i);
  },
  extname(e) {
    fe(e, "path");
    let t = -1, n = 0, i = -1, r = !0, s = 0;
    for (let a = e.length - 1; a >= 0; --a) {
      const l = e[a];
      if (l === "/") {
        if (!r) {
          n = a + 1;
          break;
        }
        continue;
      }
      i === -1 && (r = !1, i = a + 1), l === "." ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1);
    }
    return t === -1 || i === -1 || s === 0 || s === 1 && t === i - 1 && t === n + 1 ? "" : e.slice(t, i);
  },
  format: Qo.bind(null, "/"),
  parse(e) {
    fe(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.charCodeAt(0) === we;
    let i;
    n ? (t.root = "/", i = 1) : i = 0;
    let r = -1, s = 0, a = -1, l = !0, o = e.length - 1, u = 0;
    for (; o >= i; --o) {
      const h = e.charCodeAt(o);
      if (h === we) {
        if (!l) {
          s = o + 1;
          break;
        }
        continue;
      }
      a === -1 && (l = !1, a = o + 1), h === Ut ? r === -1 ? r = o : u !== 1 && (u = 1) : r !== -1 && (u = -1);
    }
    if (a !== -1) {
      const h = s === 0 && n ? 1 : s;
      r === -1 || u === 0 || u === 1 && r === a - 1 && r === s + 1 ? t.base = t.name = e.slice(h, a) : (t.name = e.slice(h, r), t.base = e.slice(h, a), t.ext = e.slice(r, a));
    }
    return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
ae.win32 = ve.win32 = ve;
ae.posix = ve.posix = ae;
const fc = Qe ? ve.normalize : ae.normalize;
Qe ? ve.isAbsolute : ae.isAbsolute;
const hc = Qe ? ve.join : ae.join, gc = Qe ? ve.resolve : ae.resolve, mc = Qe ? ve.relative : ae.relative, dc = Qe ? ve.dirname : ae.dirname;
Qe ? ve.basename : ae.basename;
Qe ? ve.extname : ae.extname;
Qe ? ve.parse : ae.parse;
const ii = Qe ? ve.sep : ae.sep, pc = /^\w[\w\d+.-]*$/, bc = /^\//, _c = /^\/\//;
function wc(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
    );
  if (e.scheme && !pc.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!bc.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (_c.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function vc(e, t) {
  return !e && !t ? "file" : e;
}
function Lc(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Je && (t = Je + t) : t = Je;
      break;
  }
  return t;
}
const re = "", Je = "/", Nc = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
let Ue = class ri {
  static isUri(t) {
    return t instanceof ri ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1;
  }
  constructor(t, n, i, r, s, a = !1) {
    typeof t == "object" ? (this.scheme = t.scheme || re, this.authority = t.authority || re, this.path = t.path || re, this.query = t.query || re, this.fragment = t.fragment || re) : (this.scheme = vc(t, a), this.authority = n || re, this.path = Lc(this.scheme, i || re), this.query = r || re, this.fragment = s || re, wc(this, a));
  }
  get fsPath() {
    return mi(this, !1);
  }
  with(t) {
    if (!t)
      return this;
    let { scheme: n, authority: i, path: r, query: s, fragment: a } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = re), i === void 0 ? i = this.authority : i === null && (i = re), r === void 0 ? r = this.path : r === null && (r = re), s === void 0 ? s = this.query : s === null && (s = re), a === void 0 ? a = this.fragment : a === null && (a = re), n === this.scheme && i === this.authority && r === this.path && s === this.query && a === this.fragment ? this : new Ht(n, i, r, s, a);
  }
  static parse(t, n = !1) {
    const i = Nc.exec(t);
    return i ? new Ht(
      i[2] || re,
      Xn(i[4] || re),
      Xn(i[5] || re),
      Xn(i[7] || re),
      Xn(i[9] || re),
      n
    ) : new Ht(re, re, re, re, re);
  }
  static file(t) {
    let n = re;
    if (fn && (t = t.replace(/\\/g, Je)), t[0] === Je && t[1] === Je) {
      const i = t.indexOf(Je, 2);
      i === -1 ? (n = t.substring(2), t = Je) : (n = t.substring(2, i), t = t.substring(i) || Je);
    }
    return new Ht("file", n, t, re, re);
  }
  static from(t, n) {
    return new Ht(
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
    let i;
    return fn && t.scheme === "file" ? i = ri.file(ve.join(mi(t, !0), ...n)).path : i = ae.join(t.path, ...n), t.with({ path: i });
  }
  toString(t = !1) {
    return or(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof ri)
        return t;
      {
        const n = new Ht(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === Ko ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
const Ko = fn ? 1 : void 0;
class Ht extends Ue {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = mi(this, !1)), this._fsPath;
  }
  toString(t = !1) {
    return t ? or(this, !0) : (this._formatted || (this._formatted = or(this, !1)), this._formatted);
  }
  toJSON() {
    const t = {
      $mid: sr.Uri
    };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = Ko), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}
const Co = {
  [R.Colon]: "%3A",
  [R.Slash]: "%2F",
  [R.QuestionMark]: "%3F",
  [R.Hash]: "%23",
  [R.OpenSquareBracket]: "%5B",
  [R.CloseSquareBracket]: "%5D",
  [R.AtSign]: "%40",
  [R.ExclamationMark]: "%21",
  [R.DollarSign]: "%24",
  [R.Ampersand]: "%26",
  [R.SingleQuote]: "%27",
  [R.OpenParen]: "%28",
  [R.CloseParen]: "%29",
  [R.Asterisk]: "%2A",
  [R.Plus]: "%2B",
  [R.Comma]: "%2C",
  [R.Semicolon]: "%3B",
  [R.Equals]: "%3D",
  [R.Space]: "%20"
};
function ds(e, t, n) {
  let i, r = -1;
  for (let s = 0; s < e.length; s++) {
    const a = e.charCodeAt(s);
    if (a >= R.a && a <= R.z || a >= R.A && a <= R.Z || a >= R.Digit0 && a <= R.Digit9 || a === R.Dash || a === R.Period || a === R.Underline || a === R.Tilde || t && a === R.Slash || n && a === R.OpenSquareBracket || n && a === R.CloseSquareBracket || n && a === R.Colon)
      r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i !== void 0 && (i += e.charAt(s));
    else {
      i === void 0 && (i = e.substr(0, s));
      const l = Co[a];
      l !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i += l) : r === -1 && (r = s);
    }
  }
  return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function Ac(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    i === R.Hash || i === R.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += Co[i]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function mi(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === R.Slash && (e.path.charCodeAt(1) >= R.A && e.path.charCodeAt(1) <= R.Z || e.path.charCodeAt(1) >= R.a && e.path.charCodeAt(1) <= R.z) && e.path.charCodeAt(2) === R.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, fn && (n = n.replace(/\//g, "\\")), n;
}
function or(e, t) {
  const n = t ? Ac : ds;
  let i = "", { scheme: r, authority: s, path: a, query: l, fragment: o } = e;
  if (r && (i += r, i += ":"), (s || r === "file") && (i += Je, i += Je), s) {
    let u = s.indexOf("@");
    if (u !== -1) {
      const h = s.substr(0, u);
      s = s.substr(u + 1), u = h.lastIndexOf(":"), u === -1 ? i += n(h, !1, !1) : (i += n(h.substr(0, u), !1, !1), i += ":", i += n(h.substr(u + 1), !1, !0)), i += "@";
    }
    s = s.toLowerCase(), u = s.lastIndexOf(":"), u === -1 ? i += n(s, !1, !0) : (i += n(s.substr(0, u), !1, !0), i += s.substr(u));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === R.Slash && a.charCodeAt(2) === R.Colon) {
      const u = a.charCodeAt(1);
      u >= R.A && u <= R.Z && (a = `/${String.fromCharCode(u + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === R.Colon) {
      const u = a.charCodeAt(0);
      u >= R.A && u <= R.Z && (a = `${String.fromCharCode(u + 32)}:${a.substr(2)}`);
    }
    i += n(a, !0, !1);
  }
  return l && (i += "?", i += n(l, !1, !1)), o && (i += "#", i += t ? o : ds(o, !1, !1)), i;
}
function el(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + el(e.substr(3)) : e;
  }
}
const ps = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Xn(e) {
  return e.match(ps) ? e.replace(ps, (t) => el(t)) : e;
}
var wt;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(wt || (wt = {}));
class Fe extends z {
  constructor(t, n, i, r) {
    super(t, n, i, r), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = i, this.positionColumn = r;
  }
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  equalsSelection(t) {
    return Fe.selectionsEqual(this, t);
  }
  static selectionsEqual(t, n) {
    return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
  }
  getDirection() {
    return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? wt.LTR : wt.RTL;
  }
  setEndPosition(t, n) {
    return this.getDirection() === wt.LTR ? new Fe(this.startLineNumber, this.startColumn, t, n) : new Fe(t, n, this.startLineNumber, this.startColumn);
  }
  getPosition() {
    return new ne(this.positionLineNumber, this.positionColumn);
  }
  getSelectionStart() {
    return new ne(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  setStartPosition(t, n) {
    return this.getDirection() === wt.LTR ? new Fe(t, n, this.endLineNumber, this.endColumn) : new Fe(this.endLineNumber, this.endColumn, t, n);
  }
  static fromPositions(t, n = t) {
    return new Fe(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static fromRange(t, n) {
    return n === wt.LTR ? new Fe(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : new Fe(
      t.endLineNumber,
      t.endColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  static liftSelection(t) {
    return new Fe(
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
    for (let i = 0, r = t.length; i < r; i++)
      if (!this.selectionsEqual(t[i], n[i]))
        return !1;
    return !0;
  }
  static isISelection(t) {
    return t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number";
  }
  static createWithDirection(t, n, i, r, s) {
    return s === wt.LTR ? new Fe(t, n, i, r) : new Fe(i, r, t, n);
  }
}
const bs = /* @__PURE__ */ Object.create(null);
function f(e, t) {
  if (Ql(t)) {
    const n = bs[t];
    if (n === void 0)
      throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return bs[e] = t, { id: e };
}
const xc = {
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
  symbolMethodArrow: f("symbol-method-arrow", 60481)
}, Ec = {
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
}, H = {
  ...xc,
  ...Ec
};
var _s;
(function(e) {
  e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(_s || (_s = {}));
var ws;
(function(e) {
  e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(ws || (ws = {}));
var di;
(function(e) {
  e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(di || (di = {}));
var vs;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(vs || (vs = {}));
var Ls;
(function(e) {
  e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(Ls || (Ls = {}));
class tl {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new $e(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(t) {
    this._onDidChange.fire({
      changedLanguages: t,
      changedColorMap: !1
    });
  }
  register(t, n) {
    return this._tokenizationSupports.set(t, n), this.handleChange([t]), Fn(() => {
      this._tokenizationSupports.get(t) === n && (this._tokenizationSupports.delete(t), this.handleChange([t]));
    });
  }
  get(t) {
    return this._tokenizationSupports.get(t) || null;
  }
  registerFactory(t, n) {
    var r;
    (r = this._factories.get(t)) == null || r.dispose();
    const i = new yc(this, t, n);
    return this._factories.set(t, i), Fn(() => {
      const s = this._factories.get(t);
      !s || s !== i || (this._factories.delete(t), s.dispose());
    });
  }
  async getOrCreate(t) {
    const n = this.get(t);
    if (n)
      return n;
    const i = this._factories.get(t);
    return !i || i.isResolved ? null : (await i.resolve(), this.get(t));
  }
  isResolved(t) {
    if (this.get(t))
      return !0;
    const i = this._factories.get(t);
    return !!(!i || i.isResolved);
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
    return this._colorMap && this._colorMap.length > di.DefaultBackground ? this._colorMap[di.DefaultBackground] : null;
  }
}
class yc extends cn {
  get isResolved() {
    return this._isResolved;
  }
  constructor(t, n, i) {
    super(), this._registry = t, this._languageId = n, this._factory = i, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1;
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
class Rc {
  constructor(t, n, i) {
    this.offset = t, this.type = n, this.language = i, this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
}
var Ns;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Ns || (Ns = {}));
var P;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet";
})(P || (P = {}));
var As;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(P.Method, H.symbolMethod), t.set(P.Function, H.symbolFunction), t.set(P.Constructor, H.symbolConstructor), t.set(P.Field, H.symbolField), t.set(P.Variable, H.symbolVariable), t.set(P.Class, H.symbolClass), t.set(P.Struct, H.symbolStruct), t.set(P.Interface, H.symbolInterface), t.set(P.Module, H.symbolModule), t.set(P.Property, H.symbolProperty), t.set(P.Event, H.symbolEvent), t.set(P.Operator, H.symbolOperator), t.set(P.Unit, H.symbolUnit), t.set(P.Value, H.symbolValue), t.set(P.Enum, H.symbolEnum), t.set(P.Constant, H.symbolConstant), t.set(P.Enum, H.symbolEnum), t.set(P.EnumMember, H.symbolEnumMember), t.set(P.Keyword, H.symbolKeyword), t.set(P.Snippet, H.symbolSnippet), t.set(P.Text, H.symbolText), t.set(P.Color, H.symbolColor), t.set(P.File, H.symbolFile), t.set(P.Reference, H.symbolReference), t.set(P.Customcolor, H.symbolCustomColor), t.set(P.Folder, H.symbolFolder), t.set(P.TypeParameter, H.symbolTypeParameter), t.set(P.User, H.account), t.set(P.Issue, H.issues);
  function n(a) {
    let l = t.get(a);
    return l || (console.info("No codicon found for CompletionItemKind " + a), l = H.symbolProperty), l;
  }
  e.toIcon = n;
  function i(a) {
    switch (a) {
      case P.Method:
        return G(763, "Method");
      case P.Function:
        return G(764, "Function");
      case P.Constructor:
        return G(765, "Constructor");
      case P.Field:
        return G(766, "Field");
      case P.Variable:
        return G(767, "Variable");
      case P.Class:
        return G(768, "Class");
      case P.Struct:
        return G(769, "Struct");
      case P.Interface:
        return G(770, "Interface");
      case P.Module:
        return G(771, "Module");
      case P.Property:
        return G(772, "Property");
      case P.Event:
        return G(773, "Event");
      case P.Operator:
        return G(774, "Operator");
      case P.Unit:
        return G(775, "Unit");
      case P.Value:
        return G(776, "Value");
      case P.Constant:
        return G(777, "Constant");
      case P.Enum:
        return G(778, "Enum");
      case P.EnumMember:
        return G(779, "Enum Member");
      case P.Keyword:
        return G(780, "Keyword");
      case P.Text:
        return G(781, "Text");
      case P.Color:
        return G(782, "Color");
      case P.File:
        return G(783, "File");
      case P.Reference:
        return G(784, "Reference");
      case P.Customcolor:
        return G(785, "Custom Color");
      case P.Folder:
        return G(786, "Folder");
      case P.TypeParameter:
        return G(787, "Type Parameter");
      case P.User:
        return G(788, "User");
      case P.Issue:
        return G(789, "Issue");
      case P.Snippet:
        return G(790, "Snippet");
      default:
        return "";
    }
  }
  e.toLabel = i;
  const r = /* @__PURE__ */ new Map();
  r.set("method", P.Method), r.set("function", P.Function), r.set("constructor", P.Constructor), r.set("field", P.Field), r.set("variable", P.Variable), r.set("class", P.Class), r.set("struct", P.Struct), r.set("interface", P.Interface), r.set("module", P.Module), r.set("property", P.Property), r.set("event", P.Event), r.set("operator", P.Operator), r.set("unit", P.Unit), r.set("value", P.Value), r.set("constant", P.Constant), r.set("enum", P.Enum), r.set("enum-member", P.EnumMember), r.set("enumMember", P.EnumMember), r.set("keyword", P.Keyword), r.set("snippet", P.Snippet), r.set("text", P.Text), r.set("color", P.Color), r.set("file", P.File), r.set("reference", P.Reference), r.set("customcolor", P.Customcolor), r.set("folder", P.Folder), r.set("type-parameter", P.TypeParameter), r.set("typeParameter", P.TypeParameter), r.set("account", P.User), r.set("issue", P.Issue);
  function s(a, l) {
    let o = r.get(a);
    return typeof o > "u" && !l && (o = P.Property), o;
  }
  e.fromString = s;
})(As || (As = {}));
var xs;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(xs || (xs = {}));
var Es;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Es || (Es = {}));
var ys;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(ys || (ys = {}));
var Rs;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Rs || (Rs = {}));
var ks;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(ks || (ks = {}));
var Ts;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Ts || (Ts = {}));
var Ss;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(Ss || (Ss = {}));
var Ms;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Ms || (Ms = {}));
var Is;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Is || (Is = {}));
var q;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(q || (q = {}));
q.Array + "", G(791, "array"), q.Boolean + "", G(792, "boolean"), q.Class + "", G(793, "class"), q.Constant + "", G(794, "constant"), q.Constructor + "", G(795, "constructor"), q.Enum + "", G(796, "enumeration"), q.EnumMember + "", G(797, "enumeration member"), q.Event + "", G(798, "event"), q.Field + "", G(799, "field"), q.File + "", G(800, "file"), q.Function + "", G(801, "function"), q.Interface + "", G(802, "interface"), q.Key + "", G(803, "key"), q.Method + "", G(804, "method"), q.Module + "", G(805, "module"), q.Namespace + "", G(806, "namespace"), q.Null + "", G(807, "null"), q.Number + "", G(808, "number"), q.Object + "", G(809, "object"), q.Operator + "", G(810, "operator"), q.Package + "", G(811, "package"), q.Property + "", G(812, "property"), q.String + "", G(813, "string"), q.Struct + "", G(814, "struct"), q.TypeParameter + "", G(815, "type parameter"), q.Variable + "", G(816, "variable");
var Us;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Us || (Us = {}));
var Ds;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(q.File, H.symbolFile), t.set(q.Module, H.symbolModule), t.set(q.Namespace, H.symbolNamespace), t.set(q.Package, H.symbolPackage), t.set(q.Class, H.symbolClass), t.set(q.Method, H.symbolMethod), t.set(q.Property, H.symbolProperty), t.set(q.Field, H.symbolField), t.set(q.Constructor, H.symbolConstructor), t.set(q.Enum, H.symbolEnum), t.set(q.Interface, H.symbolInterface), t.set(q.Function, H.symbolFunction), t.set(q.Variable, H.symbolVariable), t.set(q.Constant, H.symbolConstant), t.set(q.String, H.symbolString), t.set(q.Number, H.symbolNumber), t.set(q.Boolean, H.symbolBoolean), t.set(q.Array, H.symbolArray), t.set(q.Object, H.symbolObject), t.set(q.Key, H.symbolKey), t.set(q.Null, H.symbolNull), t.set(q.EnumMember, H.symbolEnumMember), t.set(q.Struct, H.symbolStruct), t.set(q.Event, H.symbolEvent), t.set(q.Operator, H.symbolOperator), t.set(q.TypeParameter, H.symbolTypeParameter);
  function n(s) {
    let a = t.get(s);
    return a || (console.info("No codicon found for SymbolKind " + s), a = H.symbolProperty), a;
  }
  e.toIcon = n;
  const i = /* @__PURE__ */ new Map();
  i.set(q.File, P.File), i.set(q.Module, P.Module), i.set(q.Namespace, P.Module), i.set(q.Package, P.Module), i.set(q.Class, P.Class), i.set(q.Method, P.Method), i.set(q.Property, P.Property), i.set(q.Field, P.Field), i.set(q.Constructor, P.Constructor), i.set(q.Enum, P.Enum), i.set(q.Interface, P.Interface), i.set(q.Function, P.Function), i.set(q.Variable, P.Variable), i.set(q.Constant, P.Constant), i.set(q.String, P.Text), i.set(q.Number, P.Value), i.set(q.Boolean, P.Value), i.set(q.Array, P.Value), i.set(q.Object, P.Value), i.set(q.Key, P.Keyword), i.set(q.Null, P.Value), i.set(q.EnumMember, P.EnumMember), i.set(q.Struct, P.Struct), i.set(q.Event, P.Event), i.set(q.Operator, P.Operator), i.set(q.TypeParameter, P.TypeParameter);
  function r(s) {
    let a = i.get(s);
    return a === void 0 && (console.info("No completion kind found for SymbolKind " + s), a = P.File), a;
  }
  e.toCompletionKind = r;
})(Ds || (Ds = {}));
var ke;
let Jf = (ke = class {
  static fromValue(t) {
    switch (t) {
      case "comment":
        return ke.Comment;
      case "imports":
        return ke.Imports;
      case "region":
        return ke.Region;
    }
    return new ke(t);
  }
  constructor(t) {
    this.value = t;
  }
}, ke.Comment = new ke("comment"), ke.Imports = new ke("imports"), ke.Region = new ke("region"), ke);
var Fs;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(Fs || (Fs = {}));
var Ps;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Ps || (Ps = {}));
var Os;
(function(e) {
  function t(n) {
    return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(Os || (Os = {}));
var Bs;
(function(e) {
  e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(Bs || (Bs = {}));
var Vs;
(function(e) {
  e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(Vs || (Vs = {}));
var $s;
(function(e) {
  e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})($s || ($s = {}));
var qs;
(function(e) {
  e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(qs || (qs = {}));
var Hs;
(function(e) {
  e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(Hs || (Hs = {}));
var Ws;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(Ws || (Ws = {}));
new tl();
new tl();
var js;
(function(e) {
  e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(js || (js = {}));
var Gs;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Gs || (Gs = {}));
var zs;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(zs || (zs = {}));
var Xs;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Xs || (Xs = {}));
var Js;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Js || (Js = {}));
var Ys;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet";
})(Ys || (Ys = {}));
var Zs;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Zs || (Zs = {}));
var Qs;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Qs || (Qs = {}));
var Ks;
(function(e) {
  e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(Ks || (Ks = {}));
var Cs;
(function(e) {
  e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})(Cs || (Cs = {}));
var e1;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(e1 || (e1 = {}));
var t1;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(t1 || (t1 = {}));
var n1;
(function(e) {
  e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(n1 || (n1 = {}));
var i1;
(function(e) {
  e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.ariaLabel = 4] = "ariaLabel", e[e.ariaRequired = 5] = "ariaRequired", e[e.autoClosingBrackets = 6] = "autoClosingBrackets", e[e.autoClosingComments = 7] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 8] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 9] = "autoClosingDelete", e[e.autoClosingOvertype = 10] = "autoClosingOvertype", e[e.autoClosingQuotes = 11] = "autoClosingQuotes", e[e.autoIndent = 12] = "autoIndent", e[e.automaticLayout = 13] = "automaticLayout", e[e.autoSurround = 14] = "autoSurround", e[e.bracketPairColorization = 15] = "bracketPairColorization", e[e.guides = 16] = "guides", e[e.codeLens = 17] = "codeLens", e[e.codeLensFontFamily = 18] = "codeLensFontFamily", e[e.codeLensFontSize = 19] = "codeLensFontSize", e[e.colorDecorators = 20] = "colorDecorators", e[e.colorDecoratorsLimit = 21] = "colorDecoratorsLimit", e[e.columnSelection = 22] = "columnSelection", e[e.comments = 23] = "comments", e[e.contextmenu = 24] = "contextmenu", e[e.copyWithSyntaxHighlighting = 25] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 26] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 27] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 28] = "cursorStyle", e[e.cursorSurroundingLines = 29] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 30] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 31] = "cursorWidth", e[e.disableLayerHinting = 32] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 33] = "disableMonospaceOptimizations", e[e.domReadOnly = 34] = "domReadOnly", e[e.dragAndDrop = 35] = "dragAndDrop", e[e.dropIntoEditor = 36] = "dropIntoEditor", e[e.experimentalEditContextEnabled = 37] = "experimentalEditContextEnabled", e[e.emptySelectionClipboard = 38] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 39] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 40] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 41] = "extraEditorClassName", e[e.fastScrollSensitivity = 42] = "fastScrollSensitivity", e[e.find = 43] = "find", e[e.fixedOverflowWidgets = 44] = "fixedOverflowWidgets", e[e.folding = 45] = "folding", e[e.foldingStrategy = 46] = "foldingStrategy", e[e.foldingHighlight = 47] = "foldingHighlight", e[e.foldingImportsByDefault = 48] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 49] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 50] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 51] = "fontFamily", e[e.fontInfo = 52] = "fontInfo", e[e.fontLigatures = 53] = "fontLigatures", e[e.fontSize = 54] = "fontSize", e[e.fontWeight = 55] = "fontWeight", e[e.fontVariations = 56] = "fontVariations", e[e.formatOnPaste = 57] = "formatOnPaste", e[e.formatOnType = 58] = "formatOnType", e[e.glyphMargin = 59] = "glyphMargin", e[e.gotoLocation = 60] = "gotoLocation", e[e.hideCursorInOverviewRuler = 61] = "hideCursorInOverviewRuler", e[e.hover = 62] = "hover", e[e.inDiffEditor = 63] = "inDiffEditor", e[e.inlineSuggest = 64] = "inlineSuggest", e[e.letterSpacing = 65] = "letterSpacing", e[e.lightbulb = 66] = "lightbulb", e[e.lineDecorationsWidth = 67] = "lineDecorationsWidth", e[e.lineHeight = 68] = "lineHeight", e[e.lineNumbers = 69] = "lineNumbers", e[e.lineNumbersMinChars = 70] = "lineNumbersMinChars", e[e.linkedEditing = 71] = "linkedEditing", e[e.links = 72] = "links", e[e.matchBrackets = 73] = "matchBrackets", e[e.minimap = 74] = "minimap", e[e.mouseStyle = 75] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 76] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 77] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 78] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 79] = "multiCursorModifier", e[e.multiCursorPaste = 80] = "multiCursorPaste", e[e.multiCursorLimit = 81] = "multiCursorLimit", e[e.occurrencesHighlight = 82] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 83] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 84] = "overtypeCursorStyle", e[e.overtypeOnPaste = 85] = "overtypeOnPaste", e[e.overviewRulerBorder = 86] = "overviewRulerBorder", e[e.overviewRulerLanes = 87] = "overviewRulerLanes", e[e.padding = 88] = "padding", e[e.pasteAs = 89] = "pasteAs", e[e.parameterHints = 90] = "parameterHints", e[e.peekWidgetDefaultFocus = 91] = "peekWidgetDefaultFocus", e[e.placeholder = 92] = "placeholder", e[e.definitionLinkOpensInPeek = 93] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 94] = "quickSuggestions", e[e.quickSuggestionsDelay = 95] = "quickSuggestionsDelay", e[e.readOnly = 96] = "readOnly", e[e.readOnlyMessage = 97] = "readOnlyMessage", e[e.renameOnType = 98] = "renameOnType", e[e.renderControlCharacters = 99] = "renderControlCharacters", e[e.renderFinalNewline = 100] = "renderFinalNewline", e[e.renderLineHighlight = 101] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 102] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 103] = "renderValidationDecorations", e[e.renderWhitespace = 104] = "renderWhitespace", e[e.revealHorizontalRightPadding = 105] = "revealHorizontalRightPadding", e[e.roundedSelection = 106] = "roundedSelection", e[e.rulers = 107] = "rulers", e[e.scrollbar = 108] = "scrollbar", e[e.scrollBeyondLastColumn = 109] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 110] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 111] = "scrollPredominantAxis", e[e.selectionClipboard = 112] = "selectionClipboard", e[e.selectionHighlight = 113] = "selectionHighlight", e[e.selectOnLineNumbers = 114] = "selectOnLineNumbers", e[e.showFoldingControls = 115] = "showFoldingControls", e[e.showUnused = 116] = "showUnused", e[e.snippetSuggestions = 117] = "snippetSuggestions", e[e.smartSelect = 118] = "smartSelect", e[e.smoothScrolling = 119] = "smoothScrolling", e[e.stickyScroll = 120] = "stickyScroll", e[e.stickyTabStops = 121] = "stickyTabStops", e[e.stopRenderingLineAfter = 122] = "stopRenderingLineAfter", e[e.suggest = 123] = "suggest", e[e.suggestFontSize = 124] = "suggestFontSize", e[e.suggestLineHeight = 125] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 126] = "suggestOnTriggerCharacters", e[e.suggestSelection = 127] = "suggestSelection", e[e.tabCompletion = 128] = "tabCompletion", e[e.tabIndex = 129] = "tabIndex", e[e.unicodeHighlighting = 130] = "unicodeHighlighting", e[e.unusualLineTerminators = 131] = "unusualLineTerminators", e[e.useShadowDOM = 132] = "useShadowDOM", e[e.useTabStops = 133] = "useTabStops", e[e.wordBreak = 134] = "wordBreak", e[e.wordSegmenterLocales = 135] = "wordSegmenterLocales", e[e.wordSeparators = 136] = "wordSeparators", e[e.wordWrap = 137] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 138] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 139] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 140] = "wordWrapColumn", e[e.wordWrapOverride1 = 141] = "wordWrapOverride1", e[e.wordWrapOverride2 = 142] = "wordWrapOverride2", e[e.wrappingIndent = 143] = "wrappingIndent", e[e.wrappingStrategy = 144] = "wrappingStrategy", e[e.showDeprecated = 145] = "showDeprecated", e[e.inlayHints = 146] = "inlayHints", e[e.effectiveCursorStyle = 147] = "effectiveCursorStyle", e[e.editorClassName = 148] = "editorClassName", e[e.pixelRatio = 149] = "pixelRatio", e[e.tabFocusMode = 150] = "tabFocusMode", e[e.layoutInfo = 151] = "layoutInfo", e[e.wrappingInfo = 152] = "wrappingInfo", e[e.defaultColorDecorators = 153] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 154] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 155] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveExperimentalEditContextEnabled = 156] = "effectiveExperimentalEditContextEnabled";
})(i1 || (i1 = {}));
var r1;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(r1 || (r1 = {}));
var s1;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(s1 || (s1 = {}));
var a1;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(a1 || (a1 = {}));
var o1;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(o1 || (o1 = {}));
var l1;
(function(e) {
  e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(l1 || (l1 = {}));
var u1;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(u1 || (u1 = {}));
var c1;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(c1 || (c1 = {}));
var f1;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(f1 || (f1 = {}));
var h1;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(h1 || (h1 = {}));
var lr;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(lr || (lr = {}));
var ur;
(function(e) {
  e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(ur || (ur = {}));
var cr;
(function(e) {
  e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})(cr || (cr = {}));
var g1;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(g1 || (g1 = {}));
var m1;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(m1 || (m1 = {}));
var d1;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(d1 || (d1 = {}));
var p1;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(p1 || (p1 = {}));
var b1;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(b1 || (b1 = {}));
var _1;
(function(e) {
  e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(_1 || (_1 = {}));
var w1;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(w1 || (w1 = {}));
var v1;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(v1 || (v1 = {}));
var L1;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(L1 || (L1 = {}));
var N1;
(function(e) {
  e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(N1 || (N1 = {}));
var A1;
(function(e) {
  e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(A1 || (A1 = {}));
var x1;
(function(e) {
  e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(x1 || (x1 = {}));
var E1;
(function(e) {
  e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(E1 || (E1 = {}));
var fr;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(fr || (fr = {}));
var y1;
(function(e) {
  e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(y1 || (y1 = {}));
var R1;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(R1 || (R1 = {}));
var k1;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(k1 || (k1 = {}));
var T1;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(T1 || (T1 = {}));
var S1;
(function(e) {
  e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(S1 || (S1 = {}));
var M1;
(function(e) {
  e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(M1 || (M1 = {}));
var I1;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(I1 || (I1 = {}));
var U1;
(function(e) {
  e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})(U1 || (U1 = {}));
const tn = class tn {
  static chord(t, n) {
    return ec(t, n);
  }
};
tn.CtrlCmd = Zt.CtrlCmd, tn.Shift = Zt.Shift, tn.Alt = Zt.Alt, tn.WinCtrl = Zt.WinCtrl;
let hr = tn;
function kc() {
  return {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Lu,
    Emitter: $e,
    KeyCode: lr,
    KeyMod: hr,
    Position: ne,
    Range: z,
    Selection: Fe,
    SelectionDirection: fr,
    MarkerSeverity: ur,
    MarkerTag: cr,
    Uri: Ue,
    Token: Rc
  };
}
var hn;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(hn || (hn = {}));
new Jl(10);
var D1;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(D1 || (D1 = {}));
var F1;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(F1 || (F1 = {}));
var P1;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(P1 || (P1 = {}));
var O1;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(O1 || (O1 = {}));
var B1;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(B1 || (B1 = {}));
var V1;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(V1 || (V1 = {}));
var $1;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})($1 || ($1 = {}));
var q1;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(q1 || (q1 = {}));
var H1;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(H1 || (H1 = {}));
var W1;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(W1 || (W1 = {}));
var j1;
(function(e) {
  e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(j1 || (j1 = {}));
function Tc(e) {
  if (!e || e.length === 0)
    return !1;
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i === R.LineFeed)
      return !0;
    if (i === R.Backslash) {
      if (t++, t >= n)
        break;
      const r = e.charCodeAt(t);
      if (r === R.n || r === R.r || r === R.W)
        return !0;
    }
  }
  return !1;
}
function Sc(e, t, n, i, r) {
  if (i === 0)
    return !0;
  const s = t.charCodeAt(i - 1);
  if (e.get(s) !== hn.Regular || s === R.CarriageReturn || s === R.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i);
    if (e.get(a) !== hn.Regular)
      return !0;
  }
  return !1;
}
function Mc(e, t, n, i, r) {
  if (i + r === n)
    return !0;
  const s = t.charCodeAt(i + r);
  if (e.get(s) !== hn.Regular || s === R.CarriageReturn || s === R.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i + r - 1);
    if (e.get(a) !== hn.Regular)
      return !0;
  }
  return !1;
}
function Ic(e, t, n, i, r) {
  return Sc(e, t, n, i, r) && Mc(e, t, n, i, r);
}
class Uc {
  constructor(t, n) {
    this._wordSeparators = t, this._searchRegex = n, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  reset(t) {
    this._searchRegex.lastIndex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
  }
  next(t) {
    const n = t.length;
    let i;
    do {
      if (this._prevMatchStartIndex + this._prevMatchLength === n || (i = this._searchRegex.exec(t), !i))
        return null;
      const r = i.index, s = i[0].length;
      if (r === this._prevMatchStartIndex && s === this._prevMatchLength) {
        if (s === 0) {
          Iu(t, n, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = r, this._prevMatchLength = s, !this._wordSeparators || Ic(this._wordSeparators, t, n, r, s))
        return i;
    } while (i);
    return null;
  }
}
const Dc = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function Fc(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of Dc)
    e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
const nl = Fc();
function il(e) {
  let t = nl;
  if (e && e instanceof RegExp)
    if (e.global)
      t = e;
    else {
      let n = "g";
      e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
    }
  return t.lastIndex = 0, t;
}
const rl = new eu();
rl.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function Gr(e, t, n, i, r) {
  if (t = il(t), r || (r = oi.first(rl)), n.length > r.maxLen) {
    let u = e - r.maxLen / 2;
    return u < 0 ? u = 0 : i += u, n = n.substring(u, e + r.maxLen / 2), Gr(e, t, n, i, r);
  }
  const s = Date.now(), a = e - 1 - i;
  let l = -1, o = null;
  for (let u = 1; !(Date.now() - s >= r.timeBudget); u++) {
    const h = a - r.windowSize * u;
    t.lastIndex = Math.max(0, h);
    const c = Pc(t, n, a, l);
    if (!c && o || (o = c, h <= 0))
      break;
    l = h;
  }
  if (o) {
    const u = {
      word: o[0],
      startColumn: i + 1 + o.index,
      endColumn: i + 1 + o.index + o[0].length
    };
    return t.lastIndex = 0, u;
  }
  return null;
}
function Pc(e, t, n, i) {
  let r;
  for (; r = e.exec(t); ) {
    const s = r.index || 0;
    if (s <= n && e.lastIndex >= n)
      return r;
    if (i > 0 && s > i)
      return null;
  }
  return null;
}
class Oc {
  static computeUnicodeHighlights(t, n, i) {
    const r = i ? i.startLineNumber : 1, s = i ? i.endLineNumber : t.getLineCount(), a = new G1(n), l = a.getCandidateCodePoints();
    let o;
    l === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${Bc(Array.from(l))}`, "g");
    const u = new Uc(null, o), h = [];
    let c = !1, g, d = 0, m = 0, p = 0;
    e: for (let w = r, N = s; w <= N; w++) {
      const x = t.getLineContent(w), _ = x.length;
      u.reset(0);
      do
        if (g = u.next(x), g) {
          let E = g.index, b = g.index + g[0].length;
          if (E > 0) {
            const $ = x.charCodeAt(E - 1);
            ci($) && E--;
          }
          if (b + 1 < _) {
            const $ = x.charCodeAt(b - 1);
            ci($) && b++;
          }
          const A = x.substring(E, b);
          let y = Gr(E + 1, nl, x, 0);
          y && y.endColumn <= E + 1 && (y = null);
          const U = a.shouldHighlightNonBasicASCII(A, y ? y.word : null);
          if (U !== ye.None) {
            if (U === ye.Ambiguous ? d++ : U === ye.Invisible ? m++ : U === ye.NonBasicASCII ? p++ : Yl(), h.length >= 1e3) {
              c = !0;
              break e;
            }
            h.push(new z(w, E + 1, w, b + 1));
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
    const i = new G1(n);
    switch (i.shouldHighlightNonBasicASCII(t, null)) {
      case ye.None:
        return null;
      case ye.Invisible:
        return { kind: Tn.Invisible };
      case ye.Ambiguous: {
        const s = t.codePointAt(0), a = i.ambiguousCharacters.getPrimaryConfusable(s), l = Vn.getLocales().filter((o) => !Vn.getInstance(/* @__PURE__ */ new Set([...n.allowedLocales, o])).isAmbiguous(s));
        return { kind: Tn.Ambiguous, confusableWith: String.fromCodePoint(a), notAmbiguousInLocales: l };
      }
      case ye.NonBasicASCII:
        return { kind: Tn.NonBasicAscii };
    }
  }
}
function Bc(e, t) {
  return `[${xu(e.map((i) => String.fromCodePoint(i)).join(""))}]`;
}
var Tn;
(function(e) {
  e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(Tn || (Tn = {}));
class G1 {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = Vn.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII)
      return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters)
      for (const n of kn.codePoints)
        z1(String.fromCodePoint(n)) || t.add(n);
    if (this.options.ambiguousCharacters)
      for (const n of this.ambiguousCharacters.getConfusableCodePoints())
        t.add(n);
    for (const n of this.allowedCodePoints)
      t.delete(n);
    return t;
  }
  shouldHighlightNonBasicASCII(t, n) {
    const i = t.codePointAt(0);
    if (this.allowedCodePoints.has(i))
      return ye.None;
    if (this.options.nonBasicASCII)
      return ye.NonBasicASCII;
    let r = !1, s = !1;
    if (n)
      for (const a of n) {
        const l = a.codePointAt(0), o = Du(a);
        r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(l) && !kn.isInvisibleCharacter(l) && (s = !0);
      }
    return !r && s ? ye.None : this.options.invisibleCharacters && !z1(t) && kn.isInvisibleCharacter(i) ? ye.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(i) ? ye.Ambiguous : ye.None;
  }
}
function z1(e) {
  return e === " " || e === `
` || e === "	";
}
var ye;
(function(e) {
  e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(ye || (ye = {}));
class si {
  constructor(t, n, i) {
    this.changes = t, this.moves = n, this.hitTimeout = i;
  }
}
class zr {
  constructor(t, n) {
    this.lineRangeMapping = t, this.changes = n;
  }
  flip() {
    return new zr(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
  }
}
class K {
  static fromTo(t, n) {
    return new K(t, n);
  }
  static addRange(t, n) {
    let i = 0;
    for (; i < n.length && n[i].endExclusive < t.start; )
      i++;
    let r = i;
    for (; r < n.length && n[r].start <= t.endExclusive; )
      r++;
    if (i === r)
      n.splice(i, 0, t);
    else {
      const s = Math.min(t.start, n[i].start), a = Math.max(t.endExclusive, n[r - 1].endExclusive);
      n.splice(i, r - i, new K(s, a));
    }
  }
  static tryCreate(t, n) {
    if (!(t > n))
      return new K(t, n);
  }
  static ofLength(t) {
    return new K(0, t);
  }
  static ofStartAndLength(t, n) {
    return new K(t, t + n);
  }
  static emptyAt(t) {
    return new K(t, t);
  }
  constructor(t, n) {
    if (this.start = t, this.endExclusive = n, t > n)
      throw new be(`Invalid range: ${this.toString()}`);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(t) {
    return new K(this.start + t, this.endExclusive + t);
  }
  deltaStart(t) {
    return new K(this.start + t, this.endExclusive);
  }
  deltaEnd(t) {
    return new K(this.start, this.endExclusive + t);
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
    return new K(
      Math.min(this.start, t.start),
      Math.max(this.endExclusive, t.endExclusive)
    );
  }
  intersect(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    if (n <= i)
      return new K(n, i);
  }
  intersectionLength(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    return Math.max(0, i - n);
  }
  intersects(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    return n < i;
  }
  intersectsOrTouches(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    return n <= i;
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
      throw new be(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, t));
  }
  clipCyclic(t) {
    if (this.isEmpty)
      throw new be(`Invalid clipping range: ${this.toString()}`);
    return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
  }
  map(t) {
    const n = [];
    for (let i = this.start; i < this.endExclusive; i++)
      n.push(t(i));
    return n;
  }
  forEach(t) {
    for (let n = this.start; n < this.endExclusive; n++)
      t(n);
  }
}
class J {
  static fromRange(t) {
    return new J(t.startLineNumber, t.endLineNumber);
  }
  static fromRangeInclusive(t) {
    return new J(t.startLineNumber, t.endLineNumber + 1);
  }
  static subtract(t, n) {
    return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [
      new J(t.startLineNumber, n.startLineNumber),
      new J(n.endLineNumberExclusive, t.endLineNumberExclusive)
    ] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new J(
      Math.max(n.endLineNumberExclusive, t.startLineNumber),
      t.endLineNumberExclusive
    )] : [new J(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
  }
  static joinMany(t) {
    if (t.length === 0)
      return [];
    let n = new et(t[0].slice());
    for (let i = 1; i < t.length; i++)
      n = n.getUnion(new et(t[i].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0)
      throw new be("lineRanges cannot be empty");
    let n = t[0].startLineNumber, i = t[0].endLineNumberExclusive;
    for (let r = 1; r < t.length; r++)
      n = Math.min(n, t[r].startLineNumber), i = Math.max(i, t[r].endLineNumberExclusive);
    return new J(n, i);
  }
  static ofLength(t, n) {
    return new J(t, t + n);
  }
  static deserialize(t) {
    return new J(t[0], t[1]);
  }
  constructor(t, n) {
    if (t > n)
      throw new be(
        `startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`
      );
    this.startLineNumber = t, this.endLineNumberExclusive = n;
  }
  contains(t) {
    return this.startLineNumber <= t && t < this.endLineNumberExclusive;
  }
  get isEmpty() {
    return this.startLineNumber === this.endLineNumberExclusive;
  }
  delta(t) {
    return new J(this.startLineNumber + t, this.endLineNumberExclusive + t);
  }
  deltaLength(t) {
    return new J(this.startLineNumber, this.endLineNumberExclusive + t);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(t) {
    return new J(
      Math.min(this.startLineNumber, t.startLineNumber),
      Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive)
    );
  }
  toString() {
    return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
  }
  intersect(t) {
    const n = Math.max(this.startLineNumber, t.startLineNumber), i = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
    if (n <= i)
      return new J(n, i);
  }
  intersectsStrict(t) {
    return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
  }
  overlapOrTouch(t) {
    return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
  }
  equals(t) {
    return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
  }
  toInclusiveRange() {
    return this.isEmpty ? null : new z(
      this.startLineNumber,
      1,
      this.endLineNumberExclusive - 1,
      Number.MAX_SAFE_INTEGER
    );
  }
  toExclusiveRange() {
    return new z(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
  }
  mapToLineArray(t) {
    const n = [];
    for (let i = this.startLineNumber; i < this.endLineNumberExclusive; i++)
      n.push(t(i));
    return n;
  }
  forEach(t) {
    for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++)
      t(n);
  }
  serialize() {
    return [this.startLineNumber, this.endLineNumberExclusive];
  }
  includes(t) {
    return this.startLineNumber <= t && t < this.endLineNumberExclusive;
  }
  toOffsetRange() {
    return new K(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(t) {
    return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
  }
  distanceToLine(t) {
    return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
  }
  addMargin(t, n) {
    return new J(
      this.startLineNumber - t,
      this.endLineNumberExclusive + n
    );
  }
}
class et {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0)
      return;
    const n = Xi(this._normalizedRanges, (r) => r.endLineNumberExclusive >= t.startLineNumber), i = un(this._normalizedRanges, (r) => r.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i)
      this._normalizedRanges.splice(n, 0, t);
    else if (n === i - 1) {
      const r = this._normalizedRanges[n];
      this._normalizedRanges[n] = r.join(t);
    } else {
      const r = this._normalizedRanges[n].join(this._normalizedRanges[i - 1]).join(t);
      this._normalizedRanges.splice(n, i - n, r);
    }
  }
  contains(t) {
    const n = ln(this._normalizedRanges, (i) => i.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = ln(this._normalizedRanges, (i) => i.startLineNumber < t.endLineNumberExclusive);
    return !!n && n.endLineNumberExclusive > t.startLineNumber;
  }
  getUnion(t) {
    if (this._normalizedRanges.length === 0)
      return t;
    if (t._normalizedRanges.length === 0)
      return this;
    const n = [];
    let i = 0, r = 0, s = null;
    for (; i < this._normalizedRanges.length || r < t._normalizedRanges.length; ) {
      let a = null;
      if (i < this._normalizedRanges.length && r < t._normalizedRanges.length) {
        const l = this._normalizedRanges[i], o = t._normalizedRanges[r];
        l.startLineNumber < o.startLineNumber ? (a = l, i++) : (a = o, r++);
      } else i < this._normalizedRanges.length ? (a = this._normalizedRanges[i], i++) : (a = t._normalizedRanges[r], r++);
      s === null ? s = a : s.endLineNumberExclusive >= a.startLineNumber ? s = new J(
        s.startLineNumber,
        Math.max(s.endLineNumberExclusive, a.endLineNumberExclusive)
      ) : (n.push(s), s = a);
    }
    return s !== null && n.push(s), new et(n);
  }
  subtractFrom(t) {
    const n = Xi(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), i = un(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i)
      return new et([t]);
    const r = [];
    let s = t.startLineNumber;
    for (let a = n; a < i; a++) {
      const l = this._normalizedRanges[a];
      l.startLineNumber > s && r.push(new J(s, l.startLineNumber)), s = l.endLineNumberExclusive;
    }
    return s < t.endLineNumberExclusive && r.push(new J(s, t.endLineNumberExclusive)), new et(r);
  }
  toString() {
    return this._normalizedRanges.map((t) => t.toString()).join(", ");
  }
  getIntersection(t) {
    const n = [];
    let i = 0, r = 0;
    for (; i < this._normalizedRanges.length && r < t._normalizedRanges.length; ) {
      const s = this._normalizedRanges[i], a = t._normalizedRanges[r], l = s.intersect(a);
      l && !l.isEmpty && n.push(l), s.endLineNumberExclusive < a.endLineNumberExclusive ? i++ : r++;
    }
    return new et(n);
  }
  getWithDelta(t) {
    return new et(this._normalizedRanges.map((n) => n.delta(t)));
  }
}
const Me = class Me {
  static lengthDiffNonNegative(t, n) {
    return n.isLessThan(t) ? Me.zero : t.lineCount === n.lineCount ? new Me(0, n.columnCount - t.columnCount) : new Me(n.lineCount - t.lineCount, n.columnCount);
  }
  static betweenPositions(t, n) {
    return t.lineNumber === n.lineNumber ? new Me(0, n.column - t.column) : new Me(n.lineNumber - t.lineNumber, n.column - 1);
  }
  static fromPosition(t) {
    return new Me(t.lineNumber - 1, t.column - 1);
  }
  static ofRange(t) {
    return Me.betweenPositions(t.getStartPosition(), t.getEndPosition());
  }
  static ofText(t) {
    let n = 0, i = 0;
    for (const r of t)
      r === `
` ? (n++, i = 0) : i++;
    return new Me(n, i);
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
    return t.lineCount === 0 ? new Me(this.lineCount, this.columnCount + t.columnCount) : new Me(this.lineCount + t.lineCount, t.columnCount);
  }
  createRange(t) {
    return this.lineCount === 0 ? new z(
      t.lineNumber,
      t.column,
      t.lineNumber,
      t.column + this.columnCount
    ) : new z(
      t.lineNumber,
      t.column,
      t.lineNumber + this.lineCount,
      this.columnCount + 1
    );
  }
  toRange() {
    return new z(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return J.ofLength(1, this.lineCount + 1);
  }
  addToPosition(t) {
    return this.lineCount === 0 ? new ne(t.lineNumber, t.column + this.columnCount) : new ne(t.lineNumber + this.lineCount, this.columnCount + 1);
  }
  addToRange(t) {
    return z.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
Me.zero = new Me(0, 0);
let xt = Me;
class sl {
  constructor(t) {
    this.text = t, this.lineStartOffsetByLineIdx = [], this.lineEndOffsetByLineIdx = [], this.lineStartOffsetByLineIdx.push(0);
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
      return new ne(1, 1);
    const n = this.textLength.lineCount + 1;
    if (t.lineNumber > n) {
      const r = this.getLineLength(n);
      return new ne(n, r + 1);
    }
    if (t.column < 1)
      return new ne(t.lineNumber, 1);
    const i = this.getLineLength(t.lineNumber);
    return t.column - 1 > i ? new ne(t.lineNumber, i + 1) : t;
  }
  getOffsetRange(t) {
    return new K(
      this.getOffset(t.getStartPosition()),
      this.getOffset(t.getEndPosition())
    );
  }
  getPosition(t) {
    const n = un(this.lineStartOffsetByLineIdx, (s) => s <= t), i = n + 1, r = t - this.lineStartOffsetByLineIdx[n] + 1;
    return new ne(i, r);
  }
  getRange(t) {
    return z.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
  }
  getTextLength(t) {
    return xt.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new xt(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}
let Vc = class Jt {
  static fromOffsetEdit(t, n) {
    const i = t.edits.map((r) => new qe(n.getTransformer().getRange(r.replaceRange), r.newText));
    return new Jt(i);
  }
  static single(t, n) {
    return new Jt([new qe(t, n)]);
  }
  static insert(t, n) {
    return new Jt([new qe(z.fromPositions(t, t), n)]);
  }
  constructor(t) {
    this.edits = t, Dn(() => $r(t, (n, i) => n.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
  }
  normalize() {
    const t = [];
    for (const n of this.edits)
      if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
        const i = t[t.length - 1];
        t[t.length - 1] = new qe(i.range.plusRange(n.range), i.text + n.text);
      } else n.isEmpty || t.push(n);
    return new Jt(t);
  }
  mapPosition(t) {
    let n = 0, i = 0, r = 0;
    for (const s of this.edits) {
      const a = s.range.getStartPosition();
      if (t.isBeforeOrEqual(a))
        break;
      const l = s.range.getEndPosition(), o = xt.ofText(s.text);
      if (t.isBefore(l)) {
        const u = new ne(
          a.lineNumber + n,
          a.column + (a.lineNumber + n === i ? r : 0)
        ), h = o.addToPosition(u);
        return Jn(u, h);
      }
      a.lineNumber + n !== i && (r = 0), n += o.lineCount - (s.range.endLineNumber - s.range.startLineNumber), o.lineCount === 0 ? l.lineNumber !== a.lineNumber ? r += o.columnCount - (l.column - 1) : r += o.columnCount - (l.column - a.column) : r = o.columnCount, i = l.lineNumber + n;
    }
    return new ne(
      t.lineNumber + n,
      t.column + (t.lineNumber + n === i ? r : 0)
    );
  }
  mapRange(t) {
    function n(a) {
      return a instanceof ne ? a : a.getStartPosition();
    }
    function i(a) {
      return a instanceof ne ? a : a.getEndPosition();
    }
    const r = n(this.mapPosition(t.getStartPosition())), s = i(this.mapPosition(t.getEndPosition()));
    return Jn(r, s);
  }
  inverseMapPosition(t, n) {
    return this.inverse(n).mapPosition(t);
  }
  inverseMapRange(t, n) {
    return this.inverse(n).mapRange(t);
  }
  apply(t) {
    let n = "", i = new ne(1, 1);
    for (const s of this.edits) {
      const a = s.range, l = a.getStartPosition(), o = a.getEndPosition(), u = Jn(i, l);
      u.isEmpty() || (n += t.getValueOfRange(u)), n += s.text, i = o;
    }
    const r = Jn(i, t.endPositionExclusive);
    return r.isEmpty() || (n += t.getValueOfRange(r)), n;
  }
  applyToString(t) {
    const n = new qc(t);
    return this.apply(n);
  }
  inverse(t) {
    const n = this.getNewRanges();
    return new Jt(this.edits.map((i, r) => new qe(n[r], t.getValueOfRange(i.range))));
  }
  getNewRanges() {
    const t = [];
    let n = 0, i = 0, r = 0;
    for (const s of this.edits) {
      const a = xt.ofText(s.text), l = ne.lift({
        lineNumber: s.range.startLineNumber + i,
        column: s.range.startColumn + (s.range.startLineNumber === n ? r : 0)
      }), o = a.createRange(l);
      t.push(o), i = o.endLineNumber - s.range.endLineNumber, r = o.endColumn - s.range.endColumn, n = s.range.endLineNumber;
    }
    return t;
  }
  toSingle(t) {
    if (this.edits.length === 0)
      throw new be();
    if (this.edits.length === 1)
      return this.edits[0];
    const n = this.edits[0].range.getStartPosition(), i = this.edits[this.edits.length - 1].range.getEndPosition();
    let r = "";
    for (let s = 0; s < this.edits.length; s++) {
      const a = this.edits[s];
      if (r += a.text, s < this.edits.length - 1) {
        const l = this.edits[s + 1], o = z.fromPositions(a.range.getEndPosition(), l.range.getStartPosition()), u = t.getValueOfRange(o);
        r += u;
      }
    }
    return new qe(z.fromPositions(n, i), r);
  }
  equals(t) {
    return Po(this.edits, t.edits, (n, i) => n.equals(i));
  }
};
class qe {
  static joinEdits(t, n) {
    if (t.length === 0)
      throw new be();
    if (t.length === 1)
      return t[0];
    const i = t[0].range.getStartPosition(), r = t[t.length - 1].range.getEndPosition();
    let s = "";
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if (s += l.text, a < t.length - 1) {
        const o = t[a + 1], u = z.fromPositions(l.range.getEndPosition(), o.range.getStartPosition()), h = n.getValueOfRange(u);
        s += h;
      }
    }
    return new qe(z.fromPositions(i, r), s);
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
    return new Vc([this]);
  }
  equals(t) {
    return qe.equals(this, t);
  }
  extendToCoverRange(t, n) {
    if (this.range.containsRange(t))
      return this;
    const i = this.range.plusRange(t), r = n.getValueOfRange(z.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(z.fromPositions(this.range.getEndPosition(), i.getEndPosition())), a = r + this.text + s;
    return new qe(i, a);
  }
  extendToFullLine(t) {
    const n = new z(
      this.range.startLineNumber,
      1,
      this.range.endLineNumber,
      t.getTransformer().getLineLength(this.range.endLineNumber) + 1
    );
    return this.extendToCoverRange(n, t);
  }
  removeCommonPrefix(t) {
    const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = this.text.replaceAll(`\r
`, `
`), r = as(n, i), s = xt.ofText(n.substring(0, r)).addToPosition(this.range.getStartPosition()), a = i.substring(r), l = z.fromPositions(s, this.range.getEndPosition());
    return new qe(l, a);
  }
  isEffectiveDeletion(t) {
    let n = this.text.replaceAll(`\r
`, `
`), i = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const r = as(n, i);
    n = n.substring(r), i = i.substring(r);
    const s = Mu(n, i);
    return n = n.substring(0, n.length - s), i = i.substring(0, i.length - s), n === "";
  }
}
function Jn(e, t) {
  if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER)
    return z.fromPositions(t, t);
  if (!e.isBeforeOrEqual(t))
    throw new be("start must be before end");
  return new z(e.lineNumber, e.column, t.lineNumber, t.column);
}
class al {
  constructor() {
    this._transformer = void 0;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new ne(1, 1));
  }
  get lineRange() {
    return this.length.toLineRange();
  }
  getValue() {
    return this.getValueOfRange(this.length.toRange());
  }
  getLineLength(t) {
    return this.getValueOfRange(new z(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    return this._transformer || (this._transformer = new sl(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new z(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return Wo(t);
  }
}
class $c extends al {
  constructor(t, n) {
    Zl(n >= 1), super(), this._getLineContent = t, this._lineCount = n;
  }
  getValueOfRange(t) {
    if (t.startLineNumber === t.endLineNumber)
      return this._getLineContent(t.startLineNumber).substring(t.startColumn - 1, t.endColumn - 1);
    let n = this._getLineContent(t.startLineNumber).substring(t.startColumn - 1);
    for (let i = t.startLineNumber + 1; i < t.endLineNumber; i++)
      n += `
` + this._getLineContent(i);
    return n += `
` + this._getLineContent(t.endLineNumber).substring(0, t.endColumn - 1), n;
  }
  getLineLength(t) {
    return this._getLineContent(t).length;
  }
  get length() {
    const t = this._getLineContent(this._lineCount);
    return new xt(this._lineCount - 1, t.length);
  }
}
class Yn extends $c {
  constructor(t) {
    super((n) => t[n - 1], t.length);
  }
}
class qc extends al {
  constructor(t) {
    super(), this.value = t, this._t = new sl(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}
class We {
  static inverse(t, n, i) {
    const r = [];
    let s = 1, a = 1;
    for (const o of t) {
      const u = new We(new J(s, o.original.startLineNumber), new J(a, o.modified.startLineNumber));
      u.modified.isEmpty || r.push(u), s = o.original.endLineNumberExclusive, a = o.modified.endLineNumberExclusive;
    }
    const l = new We(new J(s, n + 1), new J(a, i + 1));
    return l.modified.isEmpty || r.push(l), r;
  }
  static clip(t, n, i) {
    const r = [];
    for (const s of t) {
      const a = s.original.intersect(n), l = s.modified.intersect(i);
      a && !a.isEmpty && l && !l.isEmpty && r.push(new We(a, l));
    }
    return r;
  }
  constructor(t, n) {
    this.original = t, this.modified = n;
  }
  toString() {
    return `{${this.original.toString()}->${this.modified.toString()}}`;
  }
  flip() {
    return new We(this.modified, this.original);
  }
  join(t) {
    return new We(this.original.join(t.original), this.modified.join(t.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  toRangeMapping() {
    const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
    if (t && n)
      return new Te(t, n);
    if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
        throw new be("not a valid diff");
      return new Te(new z(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new z(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else
      return new Te(new z(
        this.original.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.original.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ), new z(
        this.modified.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.modified.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ));
  }
  toRangeMapping2(t, n) {
    if (X1(this.original.endLineNumberExclusive, t) && X1(this.modified.endLineNumberExclusive, n))
      return new Te(new z(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new z(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty)
      return new Te(z.fromPositions(new ne(this.original.startLineNumber, 1), Wt(new ne(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), z.fromPositions(new ne(this.modified.startLineNumber, 1), Wt(new ne(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
      return new Te(z.fromPositions(Wt(new ne(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), Wt(new ne(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), z.fromPositions(Wt(new ne(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), Wt(new ne(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new be();
  }
}
function Wt(e, t) {
  if (e.lineNumber < 1)
    return new ne(1, 1);
  if (e.lineNumber > t.length)
    return new ne(t.length, t[t.length - 1].length + 1);
  const n = t[e.lineNumber - 1];
  return e.column > n.length + 1 ? new ne(e.lineNumber, n.length + 1) : e;
}
function X1(e, t) {
  return e >= 1 && e <= t.length;
}
class ct extends We {
  static fromRangeMappings(t) {
    const n = J.join(t.map((r) => J.fromRangeInclusive(r.originalRange))), i = J.join(t.map((r) => J.fromRangeInclusive(r.modifiedRange)));
    return new ct(n, i, t);
  }
  constructor(t, n, i) {
    super(t, n), this.innerChanges = i;
  }
  flip() {
    var t;
    return new ct(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new ct(this.original, this.modified, [this.toRangeMapping()]);
  }
}
class Te {
  static fromEdit(t) {
    const n = t.getNewRanges();
    return t.edits.map((r, s) => new Te(r.range, n[s]));
  }
  static fromEditJoin(t) {
    const n = t.getNewRanges(), i = t.edits.map((r, s) => new Te(r.range, n[s]));
    return Te.join(i);
  }
  static join(t) {
    if (t.length === 0)
      throw new be("Cannot join an empty list of range mappings");
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.join(t[i]);
    return n;
  }
  static assertSorted(t) {
    for (let n = 1; n < t.length; n++) {
      const i = t[n - 1], r = t[n];
      if (!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition()) && i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition())))
        throw new be("Range mappings must be sorted");
    }
  }
  constructor(t, n) {
    this.originalRange = t, this.modifiedRange = n;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new Te(this.modifiedRange, this.originalRange);
  }
  toTextEdit(t) {
    const n = t.getValueOfRange(this.modifiedRange);
    return new qe(this.originalRange, n);
  }
  join(t) {
    return new Te(
      this.originalRange.plusRange(t.originalRange),
      this.modifiedRange.plusRange(t.modifiedRange)
    );
  }
}
function J1(e, t, n, i = !1) {
  const r = [];
  for (const s of Vl(e.map((a) => Hc(a, t, n)), (a, l) => a.original.overlapOrTouch(l.original) || a.modified.overlapOrTouch(l.modified))) {
    const a = s[0], l = s[s.length - 1];
    r.push(new ct(
      a.original.join(l.original),
      a.modified.join(l.modified),
      s.map((o) => o.innerChanges[0])
    ));
  }
  return Dn(() => !i && r.length > 0 && (r[0].modified.startLineNumber !== r[0].original.startLineNumber || n.length.lineCount - r[r.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - r[r.length - 1].original.endLineNumberExclusive) ? !1 : $r(r, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), r;
}
function Hc(e, t, n) {
  let i = 0, r = 0;
  e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + i <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + i <= e.modifiedRange.endLineNumber && (r = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + r && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + r && (i = 1);
  const s = new J(
    e.originalRange.startLineNumber + i,
    e.originalRange.endLineNumber + 1 + r
  ), a = new J(
    e.modifiedRange.startLineNumber + i,
    e.modifiedRange.endLineNumber + 1 + r
  );
  return new ct(s, a, [e]);
}
const Wc = 3;
class jc {
  computeDiff(t, n, i) {
    var o;
    const s = new ll(t, n, {
      maxComputationTime: i.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: i.ignoreTrimWhitespace,
      shouldComputeCharChanges: !0,
      shouldMakePrettyDiff: !0,
      shouldPostProcessCharChanges: !0
    }).computeDiff(), a = [];
    let l = null;
    for (const u of s.changes) {
      let h;
      u.originalEndLineNumber === 0 ? h = new J(u.originalStartLineNumber + 1, u.originalStartLineNumber + 1) : h = new J(u.originalStartLineNumber, u.originalEndLineNumber + 1);
      let c;
      u.modifiedEndLineNumber === 0 ? c = new J(u.modifiedStartLineNumber + 1, u.modifiedStartLineNumber + 1) : c = new J(u.modifiedStartLineNumber, u.modifiedEndLineNumber + 1);
      let g = new ct(h, c, (o = u.charChanges) == null ? void 0 : o.map((d) => new Te(new z(
        d.originalStartLineNumber,
        d.originalStartColumn,
        d.originalEndLineNumber,
        d.originalEndColumn
      ), new z(
        d.modifiedStartLineNumber,
        d.modifiedStartColumn,
        d.modifiedEndLineNumber,
        d.modifiedEndColumn
      ))));
      l && (l.modified.endLineNumberExclusive === g.modified.startLineNumber || l.original.endLineNumberExclusive === g.original.startLineNumber) && (g = new ct(
        l.original.join(g.original),
        l.modified.join(g.modified),
        l.innerChanges && g.innerChanges ? l.innerChanges.concat(g.innerChanges) : void 0
      ), a.pop()), a.push(g), l = g;
    }
    return Dn(() => $r(a, (u, h) => h.original.startLineNumber - u.original.endLineNumberExclusive === h.modified.startLineNumber - u.modified.endLineNumberExclusive && u.original.endLineNumberExclusive < h.original.startLineNumber && u.modified.endLineNumberExclusive < h.modified.startLineNumber)), new si(a, [], s.quitEarly);
  }
}
function ol(e, t, n, i) {
  return new Nt(e, t, n).ComputeDiff(i);
}
let Y1 = class {
  constructor(t) {
    const n = [], i = [];
    for (let r = 0, s = t.length; r < s; r++)
      n[r] = gr(t[r], 1), i[r] = mr(t[r], 1);
    this.lines = t, this._startColumns = n, this._endColumns = i;
  }
  getElements() {
    const t = [];
    for (let n = 0, i = this.lines.length; n < i; n++)
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
  createCharSequence(t, n, i) {
    const r = [], s = [], a = [];
    let l = 0;
    for (let o = n; o <= i; o++) {
      const u = this.lines[o], h = t ? this._startColumns[o] : 1, c = t ? this._endColumns[o] : u.length + 1;
      for (let g = h; g < c; g++)
        r[l] = u.charCodeAt(g - 1), s[l] = o + 1, a[l] = g, l++;
      !t && o < i && (r[l] = R.LineFeed, s[l] = o + 1, a[l] = u.length + 1, l++);
    }
    return new Gc(r, s, a);
  }
};
class Gc {
  constructor(t, n, i) {
    this._charCodes = t, this._lineNumbers = n, this._columns = i;
  }
  toString() {
    return "[" + this._charCodes.map(
      (t, n) => (t === R.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[n]},${this._columns[n]})`
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
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === R.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === R.LineFeed ? 1 : this._columns[t] + 1);
  }
}
class sn {
  constructor(t, n, i, r, s, a, l, o) {
    this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = i, this.originalEndColumn = r, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = l, this.modifiedEndColumn = o;
  }
  static createFromDiffChange(t, n, i) {
    const r = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), l = n.getEndColumn(t.originalStart + t.originalLength - 1), o = i.getStartLineNumber(t.modifiedStart), u = i.getStartColumn(t.modifiedStart), h = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), c = i.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
    return new sn(
      r,
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
function zc(e) {
  if (e.length <= 1)
    return e;
  const t = [e[0]];
  let n = t[0];
  for (let i = 1, r = e.length; i < r; i++) {
    const s = e[i], a = s.originalStart - (n.originalStart + n.originalLength), l = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(a, l) < Wc ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
  }
  return t;
}
class Sn {
  constructor(t, n, i, r, s) {
    this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = i, this.modifiedEndLineNumber = r, this.charChanges = s;
  }
  static createFromDiffResult(t, n, i, r, s, a, l) {
    let o, u, h, c, g;
    if (n.originalLength === 0 ? (o = i.getStartLineNumber(n.originalStart) - 1, u = 0) : (o = i.getStartLineNumber(n.originalStart), u = i.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (h = r.getStartLineNumber(n.modifiedStart) - 1, c = 0) : (h = r.getStartLineNumber(n.modifiedStart), c = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
      const d = i.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), m = r.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (d.getElements().length > 0 && m.getElements().length > 0) {
        let p = ol(d, m, s, !0).changes;
        l && (p = zc(p)), g = [];
        for (let w = 0, N = p.length; w < N; w++)
          g.push(sn.createFromDiffChange(p[w], d, m));
      }
    }
    return new Sn(
      o,
      u,
      h,
      c,
      g
    );
  }
}
class ll {
  constructor(t, n, i) {
    this.shouldComputeCharChanges = i.shouldComputeCharChanges, this.shouldPostProcessCharChanges = i.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = i.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = i.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = n, this.original = new Y1(t), this.modified = new Y1(n), this.continueLineDiff = Z1(i.maxComputationTime), this.continueCharDiff = Z1(i.maxComputationTime === 0 ? 0 : Math.min(i.maxComputationTime, 5e3));
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
    const t = ol(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), n = t.changes, i = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const l = [];
      for (let o = 0, u = n.length; o < u; o++)
        l.push(Sn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return {
        quitEarly: i,
        changes: l
      };
    }
    const r = [];
    let s = 0, a = 0;
    for (let l = -1, o = n.length; l < o; l++) {
      const u = l + 1 < o ? n[l + 1] : null, h = u ? u.originalStart : this.originalLines.length, c = u ? u.modifiedStart : this.modifiedLines.length;
      for (; s < h && a < c; ) {
        const g = this.originalLines[s], d = this.modifiedLines[a];
        if (g !== d) {
          {
            let m = gr(g, 1), p = gr(d, 1);
            for (; m > 1 && p > 1; ) {
              const w = g.charCodeAt(m - 2), N = d.charCodeAt(p - 2);
              if (w !== N)
                break;
              m--, p--;
            }
            (m > 1 || p > 1) && this._pushTrimWhitespaceCharChange(r, s + 1, 1, m, a + 1, 1, p);
          }
          {
            let m = mr(g, 1), p = mr(d, 1);
            const w = g.length + 1, N = d.length + 1;
            for (; m < w && p < N; ) {
              const x = g.charCodeAt(m - 1), _ = g.charCodeAt(p - 1);
              if (x !== _)
                break;
              m++, p++;
            }
            (m < w || p < N) && this._pushTrimWhitespaceCharChange(r, s + 1, m, w, a + 1, p, N);
          }
        }
        s++, a++;
      }
      u && (r.push(Sn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), s += u.originalLength, a += u.modifiedLength);
    }
    return {
      quitEarly: i,
      changes: r
    };
  }
  _pushTrimWhitespaceCharChange(t, n, i, r, s, a, l) {
    if (this._mergeTrimWhitespaceCharChange(t, n, i, r, s, a, l))
      return;
    let o;
    this.shouldComputeCharChanges && (o = [new sn(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )]), t.push(new Sn(
      n,
      n,
      s,
      s,
      o
    ));
  }
  _mergeTrimWhitespaceCharChange(t, n, i, r, s, a, l) {
    const o = t.length;
    if (o === 0)
      return !1;
    const u = t[o - 1];
    return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === n && u.modifiedEndLineNumber === s ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new sn(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )), !0) : u.originalEndLineNumber + 1 === n && u.modifiedEndLineNumber + 1 === s ? (u.originalEndLineNumber = n, u.modifiedEndLineNumber = s, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new sn(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )), !0) : !1;
  }
}
function gr(e, t) {
  const n = Eu(e);
  return n === -1 ? t : n + 1;
}
function mr(e, t) {
  const n = yu(e);
  return n === -1 ? t : n + 2;
}
function Z1(e) {
  if (e === 0)
    return () => !0;
  const t = Date.now();
  return () => Date.now() - t < e;
}
class ft {
  static trivial(t, n) {
    return new ft([new ue(K.ofLength(t.length), K.ofLength(n.length))], !1);
  }
  static trivialTimedOut(t, n) {
    return new ft([new ue(K.ofLength(t.length), K.ofLength(n.length))], !0);
  }
  constructor(t, n) {
    this.diffs = t, this.hitTimeout = n;
  }
}
class ue {
  static invert(t, n) {
    const i = [];
    return $l(t, (r, s) => {
      i.push(ue.fromOffsetPairs(r ? r.getEndExclusives() : lt.zero, s ? s.getStarts() : new lt(
        n,
        (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n
      )));
    }), i;
  }
  static fromOffsetPairs(t, n) {
    return new ue(new K(t.offset1, n.offset1), new K(t.offset2, n.offset2));
  }
  static assertSorted(t) {
    let n;
    for (const i of t) {
      if (n && !(n.seq1Range.endExclusive <= i.seq1Range.start && n.seq2Range.endExclusive <= i.seq2Range.start))
        throw new be("Sequence diffs must be sorted");
      n = i;
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
    const n = this.seq1Range.intersect(t.seq1Range), i = this.seq2Range.intersect(t.seq2Range);
    if (!(!n || !i))
      return new ue(n, i);
  }
  getStarts() {
    return new lt(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new lt(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}
const Mt = class Mt {
  constructor(t, n) {
    this.offset1 = t, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(t) {
    return t === 0 ? this : new Mt(this.offset1 + t, this.offset2 + t);
  }
  equals(t) {
    return this.offset1 === t.offset1 && this.offset2 === t.offset2;
  }
};
Mt.zero = new Mt(0, 0), Mt.max = new Mt(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
let lt = Mt;
const Ii = class Ii {
  isValid() {
    return !0;
  }
};
Ii.instance = new Ii();
let $n = Ii;
class Xc {
  constructor(t) {
    if (this.timeout = t, this.startTime = Date.now(), this.valid = !0, t <= 0)
      throw new be("timeout must be positive");
  }
  isValid() {
    return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
  }
}
class Vi {
  constructor(t, n) {
    this.width = t, this.height = n, this.array = [], this.array = new Array(t * n);
  }
  get(t, n) {
    return this.array[t + n * this.width];
  }
  set(t, n, i) {
    this.array[t + n * this.width] = i;
  }
}
function dr(e) {
  return e === R.Space || e === R.Tab;
}
const In = class In {
  static getKey(t) {
    let n = this.chrKeys.get(t);
    return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
  }
  constructor(t, n, i) {
    this.range = t, this.lines = n, this.source = i, this.histogram = [];
    let r = 0;
    for (let s = t.startLineNumber - 1; s < t.endLineNumberExclusive - 1; s++) {
      const a = n[s];
      for (let o = 0; o < a.length; o++) {
        r++;
        const u = a[o], h = In.getKey(u);
        this.histogram[h] = (this.histogram[h] || 0) + 1;
      }
      r++;
      const l = In.getKey(`
`);
      this.histogram[l] = (this.histogram[l] || 0) + 1;
    }
    this.totalCount = r;
  }
  computeSimilarity(t) {
    let n = 0;
    const i = Math.max(this.histogram.length, t.histogram.length);
    for (let r = 0; r < i; r++)
      n += Math.abs((this.histogram[r] ?? 0) - (t.histogram[r] ?? 0));
    return 1 - n / (this.totalCount + t.totalCount);
  }
};
In.chrKeys = /* @__PURE__ */ new Map();
let pi = In;
class Jc {
  compute(t, n, i = $n.instance, r) {
    if (t.length === 0 || n.length === 0)
      return ft.trivial(t, n);
    const s = new Vi(t.length, n.length), a = new Vi(t.length, n.length), l = new Vi(t.length, n.length);
    for (let m = 0; m < t.length; m++)
      for (let p = 0; p < n.length; p++) {
        if (!i.isValid())
          return ft.trivialTimedOut(t, n);
        const w = m === 0 ? 0 : s.get(m - 1, p), N = p === 0 ? 0 : s.get(m, p - 1);
        let x;
        t.getElement(m) === n.getElement(p) ? (m === 0 || p === 0 ? x = 0 : x = s.get(m - 1, p - 1), m > 0 && p > 0 && a.get(m - 1, p - 1) === 3 && (x += l.get(m - 1, p - 1)), x += r ? r(m, p) : 1) : x = -1;
        const _ = Math.max(w, N, x);
        if (_ === x) {
          const E = m > 0 && p > 0 ? l.get(m - 1, p - 1) : 0;
          l.set(m, p, E + 1), a.set(m, p, 3);
        } else _ === w ? (l.set(m, p, 0), a.set(m, p, 1)) : _ === N && (l.set(m, p, 0), a.set(m, p, 2));
        s.set(m, p, _);
      }
    const o = [];
    let u = t.length, h = n.length;
    function c(m, p) {
      (m + 1 !== u || p + 1 !== h) && o.push(new ue(new K(m + 1, u), new K(p + 1, h))), u = m, h = p;
    }
    let g = t.length - 1, d = n.length - 1;
    for (; g >= 0 && d >= 0; )
      a.get(g, d) === 3 ? (c(g, d), g--, d--) : a.get(g, d) === 1 ? g-- : d--;
    return c(-1, -1), o.reverse(), new ft(o, !1);
  }
}
class ul {
  compute(t, n, i = $n.instance) {
    if (t.length === 0 || n.length === 0)
      return ft.trivial(t, n);
    const r = t, s = n;
    function a(p, w) {
      for (; p < r.length && w < s.length && r.getElement(p) === s.getElement(w); )
        p++, w++;
      return p;
    }
    let l = 0;
    const o = new Yc();
    o.set(0, a(0, 0));
    const u = new Zc();
    u.set(0, o.get(0) === 0 ? null : new Q1(null, 0, 0, o.get(0)));
    let h = 0;
    e: for (; ; ) {
      if (l++, !i.isValid())
        return ft.trivialTimedOut(r, s);
      const p = -Math.min(l, s.length + l % 2), w = Math.min(l, r.length + l % 2);
      for (h = p; h <= w; h += 2) {
        const N = h === w ? -1 : o.get(h + 1), x = h === p ? -1 : o.get(h - 1) + 1, _ = Math.min(Math.max(N, x), r.length), E = _ - h;
        if (_ > r.length || E > s.length)
          continue;
        const b = a(_, E);
        o.set(h, b);
        const A = _ === N ? u.get(h + 1) : u.get(h - 1);
        if (u.set(h, b !== _ ? new Q1(A, _, E, b - _) : A), o.get(h) === r.length && o.get(h) - h === s.length)
          break e;
      }
    }
    let c = u.get(h);
    const g = [];
    let d = r.length, m = s.length;
    for (; ; ) {
      const p = c ? c.x + c.length : 0, w = c ? c.y + c.length : 0;
      if ((p !== d || w !== m) && g.push(new ue(new K(p, d), new K(w, m))), !c)
        break;
      d = c.x, m = c.y, c = c.prev;
    }
    return g.reverse(), new ft(g, !1);
  }
}
class Q1 {
  constructor(t, n, i, r) {
    this.prev = t, this.x = n, this.y = i, this.length = r;
  }
}
class Yc {
  constructor() {
    this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
  }
  get(t) {
    return t < 0 ? (t = -t - 1, this.negativeArr[t]) : this.positiveArr[t];
  }
  set(t, n) {
    if (t < 0) {
      if (t = -t - 1, t >= this.negativeArr.length) {
        const i = this.negativeArr;
        this.negativeArr = new Int32Array(i.length * 2), this.negativeArr.set(i);
      }
      this.negativeArr[t] = n;
    } else {
      if (t >= this.positiveArr.length) {
        const i = this.positiveArr;
        this.positiveArr = new Int32Array(i.length * 2), this.positiveArr.set(i);
      }
      this.positiveArr[t] = n;
    }
  }
}
class Zc {
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
class bi {
  constructor(t, n, i) {
    this.lines = t, this.range = n, this.considerWhitespaceChanges = i, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
    for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
      let s = t[r - 1], a = 0;
      r === this.range.startLineNumber && this.range.startColumn > 1 && (a = this.range.startColumn - 1, s = s.substring(a)), this.lineStartOffsets.push(a);
      let l = 0;
      if (!i) {
        const u = s.trimStart();
        l = s.length - u.length, s = u.trimEnd();
      }
      this.trimmedWsLengthsByLineIdx.push(l);
      const o = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - a - l, s.length) : s.length;
      for (let u = 0; u < o; u++)
        this.elements.push(s.charCodeAt(u));
      r < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
    }
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new K(0, this.length));
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
    const n = ea(t > 0 ? this.elements[t - 1] : -1), i = ea(t < this.elements.length ? this.elements[t] : -1);
    if (n === le.LineBreakCR && i === le.LineBreakLF)
      return 0;
    if (n === le.LineBreakLF)
      return 150;
    let r = 0;
    return n !== i && (r += 10, n === le.WordLower && i === le.WordUpper && (r += 1)), r += C1(n), r += C1(i), r;
  }
  translateOffset(t, n = "right") {
    const i = un(this.firstElementOffsetByLineIdx, (s) => s <= t), r = t - this.firstElementOffsetByLineIdx[i];
    return new ne(
      this.range.startLineNumber + i,
      1 + this.lineStartOffsets[i] + r + (r === 0 && n === "left" ? 0 : this.trimmedWsLengthsByLineIdx[i])
    );
  }
  translateRange(t) {
    const n = this.translateOffset(t.start, "right"), i = this.translateOffset(t.endExclusive, "left");
    return i.isBefore(n) ? z.fromPositions(i, i) : z.fromPositions(n, i);
  }
  findWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !jt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && jt(this.elements[n - 1]); )
      n--;
    let i = t;
    for (; i < this.elements.length && jt(this.elements[i]); )
      i++;
    return new K(n, i);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !jt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && jt(this.elements[n - 1]) && !K1(this.elements[n]); )
      n--;
    let i = t;
    for (; i < this.elements.length && jt(this.elements[i]) && !K1(this.elements[i]); )
      i++;
    return new K(n, i);
  }
  countLinesIn(t) {
    return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
  }
  isStronglyEqual(t, n) {
    return this.elements[t] === this.elements[n];
  }
  extendToFullLines(t) {
    const n = ln(this.firstElementOffsetByLineIdx, (r) => r <= t.start) ?? 0, i = Bl(this.firstElementOffsetByLineIdx, (r) => t.endExclusive <= r) ?? this.elements.length;
    return new K(n, i);
  }
}
function jt(e) {
  return e >= R.a && e <= R.z || e >= R.A && e <= R.Z || e >= R.Digit0 && e <= R.Digit9;
}
function K1(e) {
  return e >= R.A && e <= R.Z;
}
var le;
(function(e) {
  e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(le || (le = {}));
const Qc = {
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
function C1(e) {
  return Qc[e];
}
function ea(e) {
  return e === R.LineFeed ? le.LineBreakLF : e === R.CarriageReturn ? le.LineBreakCR : dr(e) ? le.Space : e >= R.a && e <= R.z ? le.WordLower : e >= R.A && e <= R.Z ? le.WordUpper : e >= R.Digit0 && e <= R.Digit9 ? le.WordNumber : e === -1 ? le.End : e === R.Comma || e === R.Semicolon ? le.Separator : le.Other;
}
function Kc(e, t, n, i, r, s) {
  let { moves: a, excludedChanges: l } = e0(e, t, n, s);
  if (!s.isValid())
    return [];
  const o = e.filter((h) => !l.has(h)), u = t0(o, i, r, t, n, s);
  return Hl(a, u), a = n0(a), a = a.filter((h) => {
    const c = h.original.toOffsetRange().slice(t).map((d) => d.trim());
    return c.join(`
`).length >= 15 && Cc(c, (d) => d.length >= 2) >= 2;
  }), a = i0(e, a), a;
}
function Cc(e, t) {
  let n = 0;
  for (const i of e)
    t(i) && n++;
  return n;
}
function e0(e, t, n, i) {
  const r = [], s = e.filter((o) => o.modified.isEmpty && o.original.length >= 3).map((o) => new pi(o.original, t, o)), a = new Set(e.filter((o) => o.original.isEmpty && o.modified.length >= 3).map((o) => new pi(o.modified, n, o))), l = /* @__PURE__ */ new Set();
  for (const o of s) {
    let u = -1, h;
    for (const c of a) {
      const g = o.computeSimilarity(c);
      g > u && (u = g, h = c);
    }
    if (u > 0.9 && h && (a.delete(h), r.push(new We(o.range, h.range)), l.add(o.source), l.add(h.source)), !i.isValid())
      return { moves: r, excludedChanges: l };
  }
  return { moves: r, excludedChanges: l };
}
function t0(e, t, n, i, r, s) {
  const a = [], l = new Oo();
  for (const g of e)
    for (let d = g.original.startLineNumber; d < g.original.endLineNumberExclusive - 2; d++) {
      const m = `${t[d - 1]}:${t[d + 1 - 1]}:${t[d + 2 - 1]}`;
      l.add(m, { range: new J(d, d + 3) });
    }
  const o = [];
  e.sort(En((g) => g.modified.startLineNumber, yn));
  for (const g of e) {
    let d = [];
    for (let m = g.modified.startLineNumber; m < g.modified.endLineNumberExclusive - 2; m++) {
      const p = `${n[m - 1]}:${n[m + 1 - 1]}:${n[m + 2 - 1]}`, w = new J(m, m + 3), N = [];
      l.forEach(p, ({ range: x }) => {
        for (const E of d)
          if (E.originalLineRange.endLineNumberExclusive + 1 === x.endLineNumberExclusive && E.modifiedLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive) {
            E.originalLineRange = new J(
              E.originalLineRange.startLineNumber,
              x.endLineNumberExclusive
            ), E.modifiedLineRange = new J(
              E.modifiedLineRange.startLineNumber,
              w.endLineNumberExclusive
            ), N.push(E);
            return;
          }
        const _ = {
          modifiedLineRange: w,
          originalLineRange: x
        };
        o.push(_), N.push(_);
      }), d = N;
    }
    if (!s.isValid())
      return [];
  }
  o.sort(Wl(En((g) => g.modifiedLineRange.length, yn)));
  const u = new et(), h = new et();
  for (const g of o) {
    const d = g.modifiedLineRange.startLineNumber - g.originalLineRange.startLineNumber, m = u.subtractFrom(g.modifiedLineRange), p = h.subtractFrom(g.originalLineRange).getWithDelta(d), w = m.getIntersection(p);
    for (const N of w.ranges) {
      if (N.length < 3)
        continue;
      const x = N, _ = N.delta(-d);
      a.push(new We(_, x)), u.addRange(x), h.addRange(_);
    }
  }
  a.sort(En((g) => g.original.startLineNumber, yn));
  const c = new ai(e);
  for (let g = 0; g < a.length; g++) {
    const d = a[g], m = c.findLastMonotonous((A) => A.original.startLineNumber <= d.original.startLineNumber), p = ln(e, (A) => A.modified.startLineNumber <= d.modified.startLineNumber), w = Math.max(d.original.startLineNumber - m.original.startLineNumber, d.modified.startLineNumber - p.modified.startLineNumber), N = c.findLastMonotonous((A) => A.original.startLineNumber < d.original.endLineNumberExclusive), x = ln(e, (A) => A.modified.startLineNumber < d.modified.endLineNumberExclusive), _ = Math.max(N.original.endLineNumberExclusive - d.original.endLineNumberExclusive, x.modified.endLineNumberExclusive - d.modified.endLineNumberExclusive);
    let E;
    for (E = 0; E < w; E++) {
      const A = d.original.startLineNumber - E - 1, y = d.modified.startLineNumber - E - 1;
      if (A > i.length || y > r.length || u.contains(y) || h.contains(A) || !ta(i[A - 1], r[y - 1], s))
        break;
    }
    E > 0 && (h.addRange(new J(d.original.startLineNumber - E, d.original.startLineNumber)), u.addRange(new J(d.modified.startLineNumber - E, d.modified.startLineNumber)));
    let b;
    for (b = 0; b < _; b++) {
      const A = d.original.endLineNumberExclusive + b, y = d.modified.endLineNumberExclusive + b;
      if (A > i.length || y > r.length || u.contains(y) || h.contains(A) || !ta(i[A - 1], r[y - 1], s))
        break;
    }
    b > 0 && (h.addRange(new J(
      d.original.endLineNumberExclusive,
      d.original.endLineNumberExclusive + b
    )), u.addRange(new J(
      d.modified.endLineNumberExclusive,
      d.modified.endLineNumberExclusive + b
    ))), (E > 0 || b > 0) && (a[g] = new We(new J(
      d.original.startLineNumber - E,
      d.original.endLineNumberExclusive + b
    ), new J(
      d.modified.startLineNumber - E,
      d.modified.endLineNumberExclusive + b
    )));
  }
  return a;
}
function ta(e, t, n) {
  if (e.trim() === t.trim())
    return !0;
  if (e.length > 300 && t.length > 300)
    return !1;
  const r = new ul().compute(new bi([e], new z(1, 1, 1, e.length), !1), new bi([t], new z(1, 1, 1, t.length), !1), n);
  let s = 0;
  const a = ue.invert(r.diffs, e.length);
  for (const h of a)
    h.seq1Range.forEach((c) => {
      dr(e.charCodeAt(c)) || s++;
    });
  function l(h) {
    let c = 0;
    for (let g = 0; g < e.length; g++)
      dr(h.charCodeAt(g)) || c++;
    return c;
  }
  const o = l(e.length > t.length ? e : t);
  return s / o > 0.6 && o > 10;
}
function n0(e) {
  if (e.length === 0)
    return e;
  e.sort(En((n) => n.original.startLineNumber, yn));
  const t = [e[0]];
  for (let n = 1; n < e.length; n++) {
    const i = t[t.length - 1], r = e[n], s = r.original.startLineNumber - i.original.endLineNumberExclusive, a = r.modified.startLineNumber - i.modified.endLineNumberExclusive;
    if (s >= 0 && a >= 0 && s + a <= 2) {
      t[t.length - 1] = i.join(r);
      continue;
    }
    t.push(r);
  }
  return t;
}
function i0(e, t) {
  const n = new ai(e);
  return t = t.filter((i) => {
    const r = n.findLastMonotonous((l) => l.original.startLineNumber < i.original.endLineNumberExclusive) || new We(new J(1, 1), new J(1, 1)), s = ln(e, (l) => l.modified.startLineNumber < i.modified.endLineNumberExclusive);
    return r !== s;
  }), t;
}
function na(e, t, n) {
  let i = n;
  return i = ia(e, t, i), i = ia(e, t, i), i = r0(e, t, i), i;
}
function ia(e, t, n) {
  if (n.length === 0)
    return n;
  const i = [];
  i.push(n[0]);
  for (let s = 1; s < n.length; s++) {
    const a = i[i.length - 1];
    let l = n[s];
    if (l.seq1Range.isEmpty || l.seq2Range.isEmpty) {
      const o = l.seq1Range.start - a.seq1Range.endExclusive;
      let u;
      for (u = 1; u <= o && !(e.getElement(l.seq1Range.start - u) !== e.getElement(l.seq1Range.endExclusive - u) || t.getElement(l.seq2Range.start - u) !== t.getElement(l.seq2Range.endExclusive - u)); u++)
        ;
      if (u--, u === o) {
        i[i.length - 1] = new ue(new K(a.seq1Range.start, l.seq1Range.endExclusive - o), new K(a.seq2Range.start, l.seq2Range.endExclusive - o));
        continue;
      }
      l = l.delta(-u);
    }
    i.push(l);
  }
  const r = [];
  for (let s = 0; s < i.length - 1; s++) {
    const a = i[s + 1];
    let l = i[s];
    if (l.seq1Range.isEmpty || l.seq2Range.isEmpty) {
      const o = a.seq1Range.start - l.seq1Range.endExclusive;
      let u;
      for (u = 0; u < o && !(!e.isStronglyEqual(l.seq1Range.start + u, l.seq1Range.endExclusive + u) || !t.isStronglyEqual(l.seq2Range.start + u, l.seq2Range.endExclusive + u)); u++)
        ;
      if (u === o) {
        i[s + 1] = new ue(new K(l.seq1Range.start + o, a.seq1Range.endExclusive), new K(l.seq2Range.start + o, a.seq2Range.endExclusive));
        continue;
      }
      u > 0 && (l = l.delta(u));
    }
    r.push(l);
  }
  return i.length > 0 && r.push(i[i.length - 1]), r;
}
function r0(e, t, n) {
  if (!e.getBoundaryScore || !t.getBoundaryScore)
    return n;
  for (let i = 0; i < n.length; i++) {
    const r = i > 0 ? n[i - 1] : void 0, s = n[i], a = i + 1 < n.length ? n[i + 1] : void 0, l = new K(
      r ? r.seq1Range.endExclusive + 1 : 0,
      a ? a.seq1Range.start - 1 : e.length
    ), o = new K(
      r ? r.seq2Range.endExclusive + 1 : 0,
      a ? a.seq2Range.start - 1 : t.length
    );
    s.seq1Range.isEmpty ? n[i] = ra(s, e, t, l, o) : s.seq2Range.isEmpty && (n[i] = ra(s.swap(), t, e, o, l).swap());
  }
  return n;
}
function ra(e, t, n, i, r) {
  let a = 1;
  for (; e.seq1Range.start - a >= i.start && e.seq2Range.start - a >= r.start && n.isStronglyEqual(e.seq2Range.start - a, e.seq2Range.endExclusive - a) && a < 100; )
    a++;
  a--;
  let l = 0;
  for (; e.seq1Range.start + l < i.endExclusive && e.seq2Range.endExclusive + l < r.endExclusive && n.isStronglyEqual(e.seq2Range.start + l, e.seq2Range.endExclusive + l) && l < 100; )
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
function s0(e, t, n) {
  const i = [];
  for (const r of n) {
    const s = i[i.length - 1];
    if (!s) {
      i.push(r);
      continue;
    }
    r.seq1Range.start - s.seq1Range.endExclusive <= 2 || r.seq2Range.start - s.seq2Range.endExclusive <= 2 ? i[i.length - 1] = new ue(s.seq1Range.join(r.seq1Range), s.seq2Range.join(r.seq2Range)) : i.push(r);
  }
  return i;
}
function sa(e, t, n, i, r = !1) {
  const s = ue.invert(n, e.length), a = [];
  let l = new lt(0, 0);
  function o(h, c) {
    if (h.offset1 < l.offset1 || h.offset2 < l.offset2)
      return;
    const g = i(e, h.offset1), d = i(t, h.offset2);
    if (!g || !d)
      return;
    let m = new ue(g, d);
    const p = m.intersect(c);
    let w = p.seq1Range.length, N = p.seq2Range.length;
    for (; s.length > 0; ) {
      const x = s[0];
      if (!(x.seq1Range.intersects(m.seq1Range) || x.seq2Range.intersects(m.seq2Range)))
        break;
      const E = i(e, x.seq1Range.start), b = i(t, x.seq2Range.start), A = new ue(E, b), y = A.intersect(x);
      if (w += y.seq1Range.length, N += y.seq2Range.length, m = m.join(A), m.seq1Range.endExclusive >= x.seq1Range.endExclusive)
        s.shift();
      else
        break;
    }
    (r && w + N < m.seq1Range.length + m.seq2Range.length || w + N < (m.seq1Range.length + m.seq2Range.length) * 2 / 3) && a.push(m), l = m.getEndExclusives();
  }
  for (; s.length > 0; ) {
    const h = s.shift();
    h.seq1Range.isEmpty || (o(h.getStarts(), h), o(h.getEndExclusives().delta(-1), h));
  }
  return a0(n, a);
}
function a0(e, t) {
  const n = [];
  for (; e.length > 0 || t.length > 0; ) {
    const i = e[0], r = t[0];
    let s;
    i && (!r || i.seq1Range.start < r.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function o0(e, t, n) {
  let i = n;
  if (i.length === 0)
    return i;
  let r = 0, s;
  do {
    s = !1;
    const a = [
      i[0]
    ];
    for (let l = 1; l < i.length; l++) {
      let h = function(g, d) {
        const m = new K(u.seq1Range.endExclusive, o.seq1Range.start);
        return e.getText(m).replace(/\s/g, "").length <= 4 && (g.seq1Range.length + g.seq2Range.length > 5 || d.seq1Range.length + d.seq2Range.length > 5);
      };
      const o = i[l], u = a[a.length - 1];
      h(u, o) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(o)) : a.push(o);
    }
    i = a;
  } while (r++ < 10 && s);
  return i;
}
function l0(e, t, n) {
  let i = n;
  if (i.length === 0)
    return i;
  let r = 0, s;
  do {
    s = !1;
    const l = [
      i[0]
    ];
    for (let o = 1; o < i.length; o++) {
      let c = function(d, m) {
        const p = new K(h.seq1Range.endExclusive, u.seq1Range.start);
        if (e.countLinesIn(p) > 5 || p.length > 500)
          return !1;
        const N = e.getText(p).trim();
        if (N.length > 20 || N.split(/\r\n|\r|\n/).length > 1)
          return !1;
        const x = e.countLinesIn(d.seq1Range), _ = d.seq1Range.length, E = t.countLinesIn(d.seq2Range), b = d.seq2Range.length, A = e.countLinesIn(m.seq1Range), y = m.seq1Range.length, U = t.countLinesIn(m.seq2Range), $ = m.seq2Range.length, W = 2 * 40 + 50;
        function F(T) {
          return Math.min(T, W);
        }
        return Math.pow(Math.pow(F(x * 40 + _), 1.5) + Math.pow(F(E * 40 + b), 1.5), 1.5) + Math.pow(Math.pow(F(A * 40 + y), 1.5) + Math.pow(F(U * 40 + $), 1.5), 1.5) > (W ** 1.5) ** 1.5 * 1.3;
      };
      const u = i[o], h = l[l.length - 1];
      c(h, u) ? (s = !0, l[l.length - 1] = l[l.length - 1].join(u)) : l.push(u);
    }
    i = l;
  } while (r++ < 10 && s);
  const a = [];
  return ql(i, (l, o, u) => {
    let h = o;
    function c(N) {
      return N.length > 0 && N.trim().length <= 3 && o.seq1Range.length + o.seq2Range.length > 100;
    }
    const g = e.extendToFullLines(o.seq1Range), d = e.getText(new K(g.start, o.seq1Range.start));
    c(d) && (h = h.deltaStart(-d.length));
    const m = e.getText(new K(o.seq1Range.endExclusive, g.endExclusive));
    c(m) && (h = h.deltaEnd(m.length));
    const p = ue.fromOffsetPairs(l ? l.getEndExclusives() : lt.zero, u ? u.getStarts() : lt.max), w = h.intersect(p);
    a.length > 0 && w.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(w) : a.push(w);
  }), a;
}
class aa {
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
    const n = t === 0 ? 0 : oa(this.lines[t - 1]), i = t === this.lines.length ? 0 : oa(this.lines[t]);
    return 1e3 - (n + i);
  }
  getText(t) {
    return this.lines.slice(t.start, t.endExclusive).join(`
`);
  }
  isStronglyEqual(t, n) {
    return this.lines[t] === this.lines[n];
  }
}
function oa(e) {
  let t = 0;
  for (; t < e.length && (e.charCodeAt(t) === R.Space || e.charCodeAt(t) === R.Tab); )
    t++;
  return t;
}
class u0 {
  constructor() {
    this.dynamicProgrammingDiffing = new Jc(), this.myersDiffingAlgorithm = new ul();
  }
  computeDiff(t, n, i) {
    if (t.length <= 1 && Po(t, n, (b, A) => b === A))
      return new si([], [], !1);
    if (t.length === 1 && t[0].length === 0 || n.length === 1 && n[0].length === 0)
      return new si([
        new ct(new J(1, t.length + 1), new J(1, n.length + 1), [
          new Te(new z(
            1,
            1,
            t.length,
            t[t.length - 1].length + 1
          ), new z(
            1,
            1,
            n.length,
            n[n.length - 1].length + 1
          ))
        ])
      ], [], !1);
    const r = i.maxComputationTimeMs === 0 ? $n.instance : new Xc(i.maxComputationTimeMs), s = !i.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
    function l(b) {
      let A = a.get(b);
      return A === void 0 && (A = a.size, a.set(b, A)), A;
    }
    const o = t.map((b) => l(b.trim())), u = n.map((b) => l(b.trim())), h = new aa(o, t), c = new aa(u, n), g = h.length + c.length < 1700 ? this.dynamicProgrammingDiffing.compute(h, c, r, (b, A) => t[b] === n[A] ? n[A].length === 0 ? 0.1 : 1 + Math.log(1 + n[A].length) : 0.99) : this.myersDiffingAlgorithm.compute(h, c, r);
    let d = g.diffs, m = g.hitTimeout;
    d = na(h, c, d), d = o0(h, c, d);
    const p = [], w = (b) => {
      if (s)
        for (let A = 0; A < b; A++) {
          const y = N + A, U = x + A;
          if (t[y] !== n[U]) {
            const $ = this.refineDiff(t, n, new ue(new K(y, y + 1), new K(U, U + 1)), r, s, i);
            for (const W of $.mappings)
              p.push(W);
            $.hitTimeout && (m = !0);
          }
        }
    };
    let N = 0, x = 0;
    for (const b of d) {
      Dn(() => b.seq1Range.start - N === b.seq2Range.start - x);
      const A = b.seq1Range.start - N;
      w(A), N = b.seq1Range.endExclusive, x = b.seq2Range.endExclusive;
      const y = this.refineDiff(t, n, b, r, s, i);
      y.hitTimeout && (m = !0);
      for (const U of y.mappings)
        p.push(U);
    }
    w(t.length - N);
    const _ = J1(p, new Yn(t), new Yn(n));
    let E = [];
    return i.computeMoves && (E = this.computeMoves(_, t, n, o, u, r, s, i)), Dn(() => {
      function b(y, U) {
        if (y.lineNumber < 1 || y.lineNumber > U.length)
          return !1;
        const $ = U[y.lineNumber - 1];
        return !(y.column < 1 || y.column > $.length + 1);
      }
      function A(y, U) {
        return !(y.startLineNumber < 1 || y.startLineNumber > U.length + 1 || y.endLineNumberExclusive < 1 || y.endLineNumberExclusive > U.length + 1);
      }
      for (const y of _) {
        if (!y.innerChanges)
          return !1;
        for (const U of y.innerChanges)
          if (!(b(U.modifiedRange.getStartPosition(), n) && b(U.modifiedRange.getEndPosition(), n) && b(U.originalRange.getStartPosition(), t) && b(U.originalRange.getEndPosition(), t)))
            return !1;
        if (!A(y.modified, n) || !A(y.original, t))
          return !1;
      }
      return !0;
    }), new si(_, E, m);
  }
  computeMoves(t, n, i, r, s, a, l, o) {
    return Kc(t, n, i, r, s, a).map((c) => {
      const g = this.refineDiff(n, i, new ue(c.original.toOffsetRange(), c.modified.toOffsetRange()), a, l, o), d = J1(g.mappings, new Yn(n), new Yn(i), !0);
      return new zr(c, d);
    });
  }
  refineDiff(t, n, i, r, s, a) {
    const o = c0(i).toRangeMapping2(t, n), u = new bi(t, o.originalRange, s), h = new bi(n, o.modifiedRange, s), c = u.length + h.length < 500 ? this.dynamicProgrammingDiffing.compute(u, h, r) : this.myersDiffingAlgorithm.compute(u, h, r);
    let g = c.diffs;
    return g = na(u, h, g), g = sa(u, h, g, (m, p) => m.findWordContaining(p)), a.extendToSubwords && (g = sa(u, h, g, (m, p) => m.findSubWordContaining(p), !0)), g = s0(u, h, g), g = l0(u, h, g), {
      mappings: g.map((m) => new Te(u.translateRange(m.seq1Range), h.translateRange(m.seq2Range))),
      hitTimeout: c.hitTimeout
    };
  }
}
function c0(e) {
  return new We(new J(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new J(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const $i = {
  getLegacy: () => new jc(),
  getDefault: () => new u0()
};
function At(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
class k {
  constructor(t, n, i, r = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = At(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}
class He {
  constructor(t, n, i, r) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = At(Math.max(Math.min(1, n), 0), 3), this.l = At(Math.max(Math.min(1, i), 0), 3), this.a = At(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = t.a, a = Math.max(n, i, r), l = Math.min(n, i, r);
    let o = 0, u = 0;
    const h = (l + a) / 2, c = a - l;
    if (c > 0) {
      switch (u = Math.min(h <= 0.5 ? c / (2 * h) : c / (2 - 2 * h), 1), a) {
        case n:
          o = (i - r) / c + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / c + 2;
          break;
        case r:
          o = (n - i) / c + 4;
          break;
      }
      o *= 60, o = Math.round(o);
    }
    return new He(o, u, h, s);
  }
  static _hue2rgb(t, n, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (n - t) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? t + (n - t) * (2 / 3 - i) * 6 : t;
  }
  static toRGBA(t) {
    const n = t.h / 360, { s: i, l: r, a: s } = t;
    let a, l, o;
    if (i === 0)
      a = l = o = r;
    else {
      const u = r < 0.5 ? r * (1 + i) : r + i - r * i, h = 2 * r - u;
      a = He._hue2rgb(h, u, n + 1 / 3), l = He._hue2rgb(h, u, n), o = He._hue2rgb(h, u, n - 1 / 3);
    }
    return new k(Math.round(a * 255), Math.round(l * 255), Math.round(o * 255), s);
  }
}
class Qt {
  constructor(t, n, i, r) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = At(Math.max(Math.min(1, n), 0), 3), this.v = At(Math.max(Math.min(1, i), 0), 3), this.a = At(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = Math.max(n, i, r), a = Math.min(n, i, r), l = s - a, o = s === 0 ? 0 : l / s;
    let u;
    return l === 0 ? u = 0 : s === n ? u = ((i - r) / l % 6 + 6) % 6 : s === i ? u = (r - n) / l + 2 : u = (n - i) / l + 4, new Qt(Math.round(u * 60), o, s, t.a);
  }
  static toRGBA(t) {
    const { h: n, s: i, v: r, a: s } = t, a = r * i, l = a * (1 - Math.abs(n / 60 % 2 - 1)), o = r - a;
    let [u, h, c] = [0, 0, 0];
    return n < 60 ? (u = a, h = l) : n < 120 ? (u = l, h = a) : n < 180 ? (h = a, c = l) : n < 240 ? (h = l, c = a) : n < 300 ? (u = l, c = a) : n <= 360 && (u = a, c = l), u = Math.round((u + o) * 255), h = Math.round((h + o) * 255), c = Math.round((c + o) * 255), new k(u, h, c, s);
  }
}
var Q;
let _i = (Q = class {
  static fromHex(t) {
    return Q.Format.CSS.parseHex(t) || Q.red;
  }
  static equals(t, n) {
    return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : He.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : Qt.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t)
      if (t instanceof k)
        this.rgba = t;
      else if (t instanceof He)
        this._hsla = t, this.rgba = He.toRGBA(t);
      else if (t instanceof Qt)
        this._hsva = t, this.rgba = Qt.toRGBA(t);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && k.equals(this.rgba, t.rgba) && He.equals(this.hsla, t.hsla) && Qt.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = Q._relativeLuminanceForComponent(this.rgba.r), n = Q._relativeLuminanceForComponent(this.rgba.g), i = Q._relativeLuminanceForComponent(this.rgba.b), r = 0.2126 * t + 0.7152 * n + 0.0722 * i;
    return At(r, 4);
  }
  reduceRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i > 0 || r > 0 || s > 0); )
      i -= Math.max(0, Math.ceil(i * 0.1)), r -= Math.max(0, Math.ceil(r * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), a = this.getContrastRatio(new Q(new k(i, r, s)));
    return new Q(new k(i, r, s));
  }
  increaseRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i < 255 || r < 255 || s < 255); )
      i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), a = this.getContrastRatio(new Q(new k(i, r, s)));
    return new Q(new k(i, r, s));
  }
  static _relativeLuminanceForComponent(t) {
    const n = t / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  }
  getContrastRatio(t) {
    const n = this.getRelativeLuminance(), i = t.getRelativeLuminance();
    return n > i ? (n + 0.05) / (i + 0.05) : (i + 0.05) / (n + 0.05);
  }
  isDarker() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
  }
  isLighter() {
    return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
  }
  isLighterThan(t) {
    const n = this.getRelativeLuminance(), i = t.getRelativeLuminance();
    return n > i;
  }
  isDarkerThan(t) {
    const n = this.getRelativeLuminance(), i = t.getRelativeLuminance();
    return n < i;
  }
  ensureConstrast(t, n) {
    const i = this.getRelativeLuminance(), r = t.getRelativeLuminance();
    if (this.getContrastRatio(t) < n) {
      if (r < i) {
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
    return new Q(new He(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new Q(new He(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new Q(new k(n, i, r, s * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new Q(new k(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const n = t.rgba, i = this.rgba.a, r = n.a, s = i + r * (1 - i);
    if (s < 1e-6)
      return Q.transparent;
    const a = this.rgba.r * i / s + n.r * r * (1 - i) / s, l = this.rgba.g * i / s + n.g * r * (1 - i) / s, o = this.rgba.b * i / s + n.b * r * (1 - i) / s;
    return new Q(new k(a, l, o, s));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1)
      return this;
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new Q(new k(
      t.rgba.r - s * (t.rgba.r - n),
      t.rgba.g - s * (t.rgba.g - i),
      t.rgba.b - s * (t.rgba.b - r),
      1
    ));
  }
  flatten(...t) {
    const n = t.reduceRight((i, r) => Q._flatten(r, i));
    return Q._flatten(this, n);
  }
  static _flatten(t, n) {
    const i = 1 - t.rgba.a;
    return new Q(new k(
      i * n.rgba.r + t.rgba.a * t.rgba.r,
      i * n.rgba.g + t.rgba.a * t.rgba.g,
      i * n.rgba.b + t.rgba.a * t.rgba.b
    ));
  }
  toString() {
    return this._toString || (this._toString = Q.Format.CSS.format(this)), this._toString;
  }
  toNumber32Bit() {
    return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
  }
  static getLighterColor(t, n, i) {
    if (t.isLighterThan(n))
      return t;
    i = i || 0.5;
    const r = t.getRelativeLuminance(), s = n.getRelativeLuminance();
    return i = i * (s - r) / s, t.lighten(i);
  }
  static getDarkerColor(t, n, i) {
    if (t.isDarkerThan(n))
      return t;
    i = i || 0.5;
    const r = t.getRelativeLuminance(), s = n.getRelativeLuminance();
    return i = i * (r - s) / r, t.darken(i);
  }
}, Q.white = new Q(new k(255, 255, 255, 1)), Q.black = new Q(new k(0, 0, 0, 1)), Q.red = new Q(new k(255, 0, 0, 1)), Q.blue = new Q(new k(0, 0, 255, 1)), Q.green = new Q(new k(0, 255, 0, 1)), Q.cyan = new Q(new k(0, 255, 255, 1)), Q.lightgrey = new Q(new k(211, 211, 211, 1)), Q.transparent = new Q(new k(0, 0, 0, 0)), Q);
(function(e) {
  (function(t) {
    (function(n) {
      function i(p) {
        return p.rgba.a === 1 ? `rgb(${p.rgba.r}, ${p.rgba.g}, ${p.rgba.b})` : e.Format.CSS.formatRGBA(p);
      }
      n.formatRGB = i;
      function r(p) {
        return `rgba(${p.rgba.r}, ${p.rgba.g}, ${p.rgba.b}, ${+p.rgba.a.toFixed(2)})`;
      }
      n.formatRGBA = r;
      function s(p) {
        return p.hsla.a === 1 ? `hsl(${p.hsla.h}, ${(p.hsla.s * 100).toFixed(2)}%, ${(p.hsla.l * 100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(p);
      }
      n.formatHSL = s;
      function a(p) {
        return `hsla(${p.hsla.h}, ${(p.hsla.s * 100).toFixed(2)}%, ${(p.hsla.l * 100).toFixed(2)}%, ${p.hsla.a.toFixed(2)})`;
      }
      n.formatHSLA = a;
      function l(p) {
        const w = p.toString(16);
        return w.length !== 2 ? "0" + w : w;
      }
      function o(p) {
        return `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}`;
      }
      n.formatHex = o;
      function u(p, w = !1) {
        return w && p.rgba.a === 1 ? e.Format.CSS.formatHex(p) : `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}${l(Math.round(p.rgba.a * 255))}`;
      }
      n.formatHexA = u;
      function h(p) {
        return p.isOpaque() ? e.Format.CSS.formatHex(p) : e.Format.CSS.formatRGBA(p);
      }
      n.format = h;
      function c(p) {
        var w, N, x, _, E, b, A;
        if (p === "transparent")
          return e.transparent;
        if (p.startsWith("#"))
          return d(p);
        if (p.startsWith("rgba(")) {
          const y = p.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!y)
            throw new Error("Invalid color format " + p);
          const U = parseInt(((w = y.groups) == null ? void 0 : w.r) ?? "0"), $ = parseInt(((N = y.groups) == null ? void 0 : N.g) ?? "0"), W = parseInt(((x = y.groups) == null ? void 0 : x.b) ?? "0"), F = parseFloat(((_ = y.groups) == null ? void 0 : _.a) ?? "0");
          return new e(new k(U, $, W, F));
        }
        if (p.startsWith("rgb(")) {
          const y = p.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!y)
            throw new Error("Invalid color format " + p);
          const U = parseInt(((E = y.groups) == null ? void 0 : E.r) ?? "0"), $ = parseInt(((b = y.groups) == null ? void 0 : b.g) ?? "0"), W = parseInt(((A = y.groups) == null ? void 0 : A.b) ?? "0");
          return new e(new k(U, $, W));
        }
        return g(p);
      }
      n.parse = c;
      function g(p) {
        switch (p) {
          case "aliceblue":
            return new e(new k(240, 248, 255, 1));
          case "antiquewhite":
            return new e(new k(250, 235, 215, 1));
          case "aqua":
            return new e(new k(0, 255, 255, 1));
          case "aquamarine":
            return new e(new k(127, 255, 212, 1));
          case "azure":
            return new e(new k(240, 255, 255, 1));
          case "beige":
            return new e(new k(245, 245, 220, 1));
          case "bisque":
            return new e(new k(255, 228, 196, 1));
          case "black":
            return new e(new k(0, 0, 0, 1));
          case "blanchedalmond":
            return new e(new k(255, 235, 205, 1));
          case "blue":
            return new e(new k(0, 0, 255, 1));
          case "blueviolet":
            return new e(new k(138, 43, 226, 1));
          case "brown":
            return new e(new k(165, 42, 42, 1));
          case "burlywood":
            return new e(new k(222, 184, 135, 1));
          case "cadetblue":
            return new e(new k(95, 158, 160, 1));
          case "chartreuse":
            return new e(new k(127, 255, 0, 1));
          case "chocolate":
            return new e(new k(210, 105, 30, 1));
          case "coral":
            return new e(new k(255, 127, 80, 1));
          case "cornflowerblue":
            return new e(new k(100, 149, 237, 1));
          case "cornsilk":
            return new e(new k(255, 248, 220, 1));
          case "crimson":
            return new e(new k(220, 20, 60, 1));
          case "cyan":
            return new e(new k(0, 255, 255, 1));
          case "darkblue":
            return new e(new k(0, 0, 139, 1));
          case "darkcyan":
            return new e(new k(0, 139, 139, 1));
          case "darkgoldenrod":
            return new e(new k(184, 134, 11, 1));
          case "darkgray":
            return new e(new k(169, 169, 169, 1));
          case "darkgreen":
            return new e(new k(0, 100, 0, 1));
          case "darkgrey":
            return new e(new k(169, 169, 169, 1));
          case "darkkhaki":
            return new e(new k(189, 183, 107, 1));
          case "darkmagenta":
            return new e(new k(139, 0, 139, 1));
          case "darkolivegreen":
            return new e(new k(85, 107, 47, 1));
          case "darkorange":
            return new e(new k(255, 140, 0, 1));
          case "darkorchid":
            return new e(new k(153, 50, 204, 1));
          case "darkred":
            return new e(new k(139, 0, 0, 1));
          case "darksalmon":
            return new e(new k(233, 150, 122, 1));
          case "darkseagreen":
            return new e(new k(143, 188, 143, 1));
          case "darkslateblue":
            return new e(new k(72, 61, 139, 1));
          case "darkslategray":
            return new e(new k(47, 79, 79, 1));
          case "darkslategrey":
            return new e(new k(47, 79, 79, 1));
          case "darkturquoise":
            return new e(new k(0, 206, 209, 1));
          case "darkviolet":
            return new e(new k(148, 0, 211, 1));
          case "deeppink":
            return new e(new k(255, 20, 147, 1));
          case "deepskyblue":
            return new e(new k(0, 191, 255, 1));
          case "dimgray":
            return new e(new k(105, 105, 105, 1));
          case "dimgrey":
            return new e(new k(105, 105, 105, 1));
          case "dodgerblue":
            return new e(new k(30, 144, 255, 1));
          case "firebrick":
            return new e(new k(178, 34, 34, 1));
          case "floralwhite":
            return new e(new k(255, 250, 240, 1));
          case "forestgreen":
            return new e(new k(34, 139, 34, 1));
          case "fuchsia":
            return new e(new k(255, 0, 255, 1));
          case "gainsboro":
            return new e(new k(220, 220, 220, 1));
          case "ghostwhite":
            return new e(new k(248, 248, 255, 1));
          case "gold":
            return new e(new k(255, 215, 0, 1));
          case "goldenrod":
            return new e(new k(218, 165, 32, 1));
          case "gray":
            return new e(new k(128, 128, 128, 1));
          case "green":
            return new e(new k(0, 128, 0, 1));
          case "greenyellow":
            return new e(new k(173, 255, 47, 1));
          case "grey":
            return new e(new k(128, 128, 128, 1));
          case "honeydew":
            return new e(new k(240, 255, 240, 1));
          case "hotpink":
            return new e(new k(255, 105, 180, 1));
          case "indianred":
            return new e(new k(205, 92, 92, 1));
          case "indigo":
            return new e(new k(75, 0, 130, 1));
          case "ivory":
            return new e(new k(255, 255, 240, 1));
          case "khaki":
            return new e(new k(240, 230, 140, 1));
          case "lavender":
            return new e(new k(230, 230, 250, 1));
          case "lavenderblush":
            return new e(new k(255, 240, 245, 1));
          case "lawngreen":
            return new e(new k(124, 252, 0, 1));
          case "lemonchiffon":
            return new e(new k(255, 250, 205, 1));
          case "lightblue":
            return new e(new k(173, 216, 230, 1));
          case "lightcoral":
            return new e(new k(240, 128, 128, 1));
          case "lightcyan":
            return new e(new k(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new e(new k(250, 250, 210, 1));
          case "lightgray":
            return new e(new k(211, 211, 211, 1));
          case "lightgreen":
            return new e(new k(144, 238, 144, 1));
          case "lightgrey":
            return new e(new k(211, 211, 211, 1));
          case "lightpink":
            return new e(new k(255, 182, 193, 1));
          case "lightsalmon":
            return new e(new k(255, 160, 122, 1));
          case "lightseagreen":
            return new e(new k(32, 178, 170, 1));
          case "lightskyblue":
            return new e(new k(135, 206, 250, 1));
          case "lightslategray":
            return new e(new k(119, 136, 153, 1));
          case "lightslategrey":
            return new e(new k(119, 136, 153, 1));
          case "lightsteelblue":
            return new e(new k(176, 196, 222, 1));
          case "lightyellow":
            return new e(new k(255, 255, 224, 1));
          case "lime":
            return new e(new k(0, 255, 0, 1));
          case "limegreen":
            return new e(new k(50, 205, 50, 1));
          case "linen":
            return new e(new k(250, 240, 230, 1));
          case "magenta":
            return new e(new k(255, 0, 255, 1));
          case "maroon":
            return new e(new k(128, 0, 0, 1));
          case "mediumaquamarine":
            return new e(new k(102, 205, 170, 1));
          case "mediumblue":
            return new e(new k(0, 0, 205, 1));
          case "mediumorchid":
            return new e(new k(186, 85, 211, 1));
          case "mediumpurple":
            return new e(new k(147, 112, 219, 1));
          case "mediumseagreen":
            return new e(new k(60, 179, 113, 1));
          case "mediumslateblue":
            return new e(new k(123, 104, 238, 1));
          case "mediumspringgreen":
            return new e(new k(0, 250, 154, 1));
          case "mediumturquoise":
            return new e(new k(72, 209, 204, 1));
          case "mediumvioletred":
            return new e(new k(199, 21, 133, 1));
          case "midnightblue":
            return new e(new k(25, 25, 112, 1));
          case "mintcream":
            return new e(new k(245, 255, 250, 1));
          case "mistyrose":
            return new e(new k(255, 228, 225, 1));
          case "moccasin":
            return new e(new k(255, 228, 181, 1));
          case "navajowhite":
            return new e(new k(255, 222, 173, 1));
          case "navy":
            return new e(new k(0, 0, 128, 1));
          case "oldlace":
            return new e(new k(253, 245, 230, 1));
          case "olive":
            return new e(new k(128, 128, 0, 1));
          case "olivedrab":
            return new e(new k(107, 142, 35, 1));
          case "orange":
            return new e(new k(255, 165, 0, 1));
          case "orangered":
            return new e(new k(255, 69, 0, 1));
          case "orchid":
            return new e(new k(218, 112, 214, 1));
          case "palegoldenrod":
            return new e(new k(238, 232, 170, 1));
          case "palegreen":
            return new e(new k(152, 251, 152, 1));
          case "paleturquoise":
            return new e(new k(175, 238, 238, 1));
          case "palevioletred":
            return new e(new k(219, 112, 147, 1));
          case "papayawhip":
            return new e(new k(255, 239, 213, 1));
          case "peachpuff":
            return new e(new k(255, 218, 185, 1));
          case "peru":
            return new e(new k(205, 133, 63, 1));
          case "pink":
            return new e(new k(255, 192, 203, 1));
          case "plum":
            return new e(new k(221, 160, 221, 1));
          case "powderblue":
            return new e(new k(176, 224, 230, 1));
          case "purple":
            return new e(new k(128, 0, 128, 1));
          case "rebeccapurple":
            return new e(new k(102, 51, 153, 1));
          case "red":
            return new e(new k(255, 0, 0, 1));
          case "rosybrown":
            return new e(new k(188, 143, 143, 1));
          case "royalblue":
            return new e(new k(65, 105, 225, 1));
          case "saddlebrown":
            return new e(new k(139, 69, 19, 1));
          case "salmon":
            return new e(new k(250, 128, 114, 1));
          case "sandybrown":
            return new e(new k(244, 164, 96, 1));
          case "seagreen":
            return new e(new k(46, 139, 87, 1));
          case "seashell":
            return new e(new k(255, 245, 238, 1));
          case "sienna":
            return new e(new k(160, 82, 45, 1));
          case "silver":
            return new e(new k(192, 192, 192, 1));
          case "skyblue":
            return new e(new k(135, 206, 235, 1));
          case "slateblue":
            return new e(new k(106, 90, 205, 1));
          case "slategray":
            return new e(new k(112, 128, 144, 1));
          case "slategrey":
            return new e(new k(112, 128, 144, 1));
          case "snow":
            return new e(new k(255, 250, 250, 1));
          case "springgreen":
            return new e(new k(0, 255, 127, 1));
          case "steelblue":
            return new e(new k(70, 130, 180, 1));
          case "tan":
            return new e(new k(210, 180, 140, 1));
          case "teal":
            return new e(new k(0, 128, 128, 1));
          case "thistle":
            return new e(new k(216, 191, 216, 1));
          case "tomato":
            return new e(new k(255, 99, 71, 1));
          case "turquoise":
            return new e(new k(64, 224, 208, 1));
          case "violet":
            return new e(new k(238, 130, 238, 1));
          case "wheat":
            return new e(new k(245, 222, 179, 1));
          case "white":
            return new e(new k(255, 255, 255, 1));
          case "whitesmoke":
            return new e(new k(245, 245, 245, 1));
          case "yellow":
            return new e(new k(255, 255, 0, 1));
          case "yellowgreen":
            return new e(new k(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function d(p) {
        const w = p.length;
        if (w === 0 || p.charCodeAt(0) !== R.Hash)
          return null;
        if (w === 7) {
          const N = 16 * m(p.charCodeAt(1)) + m(p.charCodeAt(2)), x = 16 * m(p.charCodeAt(3)) + m(p.charCodeAt(4)), _ = 16 * m(p.charCodeAt(5)) + m(p.charCodeAt(6));
          return new e(new k(N, x, _, 1));
        }
        if (w === 9) {
          const N = 16 * m(p.charCodeAt(1)) + m(p.charCodeAt(2)), x = 16 * m(p.charCodeAt(3)) + m(p.charCodeAt(4)), _ = 16 * m(p.charCodeAt(5)) + m(p.charCodeAt(6)), E = 16 * m(p.charCodeAt(7)) + m(p.charCodeAt(8));
          return new e(new k(N, x, _, E / 255));
        }
        if (w === 4) {
          const N = m(p.charCodeAt(1)), x = m(p.charCodeAt(2)), _ = m(p.charCodeAt(3));
          return new e(new k(16 * N + N, 16 * x + x, 16 * _ + _));
        }
        if (w === 5) {
          const N = m(p.charCodeAt(1)), x = m(p.charCodeAt(2)), _ = m(p.charCodeAt(3)), E = m(p.charCodeAt(4));
          return new e(new k(16 * N + N, 16 * x + x, 16 * _ + _, (16 * E + E) / 255));
        }
        return null;
      }
      n.parseHex = d;
      function m(p) {
        switch (p) {
          case R.Digit0:
            return 0;
          case R.Digit1:
            return 1;
          case R.Digit2:
            return 2;
          case R.Digit3:
            return 3;
          case R.Digit4:
            return 4;
          case R.Digit5:
            return 5;
          case R.Digit6:
            return 6;
          case R.Digit7:
            return 7;
          case R.Digit8:
            return 8;
          case R.Digit9:
            return 9;
          case R.a:
            return 10;
          case R.A:
            return 10;
          case R.b:
            return 11;
          case R.B:
            return 11;
          case R.c:
            return 12;
          case R.C:
            return 12;
          case R.d:
            return 13;
          case R.D:
            return 13;
          case R.e:
            return 14;
          case R.E:
            return 14;
          case R.f:
            return 15;
          case R.F:
            return 15;
        }
        return 0;
      }
    })(t.CSS || (t.CSS = {}));
  })(e.Format || (e.Format = {}));
})(_i || (_i = {}));
function cl(e) {
  const t = [];
  for (const n of e) {
    const i = Number(n);
    (i || i === 0 && n.replace(/\s/g, "") !== "") && t.push(i);
  }
  return t;
}
function Xr(e, t, n, i) {
  return {
    red: e / 255,
    blue: n / 255,
    green: t / 255,
    alpha: i
  };
}
function wn(e, t) {
  const n = t.index, i = t[0].length;
  if (n === void 0)
    return;
  const r = e.positionAt(n);
  return {
    startLineNumber: r.lineNumber,
    startColumn: r.column,
    endLineNumber: r.lineNumber,
    endColumn: r.column + i
  };
}
function f0(e, t) {
  if (!e)
    return;
  const n = _i.Format.CSS.parseHex(t);
  if (n)
    return {
      range: e,
      color: Xr(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
    };
}
function la(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = cl(r);
  return {
    range: e,
    color: Xr(s[0], s[1], s[2], n ? s[3] : 1)
  };
}
function ua(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = cl(r), a = new _i(new He(
    s[0],
    s[1] / 100,
    s[2] / 100,
    n ? s[3] : 1
  ));
  return {
    range: e,
    color: Xr(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a)
  };
}
function vn(e, t) {
  return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function h0(e) {
  const t = [], i = vn(e, /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|\s+(#)([A-Fa-f0-9]{6})\b|\s+(#)([A-Fa-f0-9]{8})\b|^(#)([A-Fa-f0-9]{6})\b|^(#)([A-Fa-f0-9]{8})\b/gm);
  if (i.length > 0)
    for (const r of i) {
      const s = r.filter((u) => u !== void 0), a = s[1], l = s[2];
      if (!l)
        continue;
      let o;
      if (a === "rgb") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        o = la(wn(e, r), vn(l, u), !1);
      } else if (a === "rgba") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = la(wn(e, r), vn(l, u), !0);
      } else if (a === "hsl") {
        const u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        o = ua(wn(e, r), vn(l, u), !1);
      } else if (a === "hsla") {
        const u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = ua(wn(e, r), vn(l, u), !0);
      } else a === "#" && (o = f0(wn(e, r), a + l));
      o && t.push(o);
    }
  return t;
}
function g0(e) {
  return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : h0(e);
}
const m0 = /^-+|-+$/g, ca = 100, d0 = 5;
function p0(e, t) {
  var i;
  let n = [];
  if (t.findRegionSectionHeaders && ((i = t.foldingRules) != null && i.markers)) {
    const r = b0(e, t);
    n = n.concat(r);
  }
  if (t.findMarkSectionHeaders) {
    const r = _0(e, t);
    n = n.concat(r);
  }
  return n;
}
function b0(e, t) {
  const n = [], i = e.getLineCount();
  for (let r = 1; r <= i; r++) {
    const s = e.getLineContent(r), a = s.match(t.foldingRules.markers.start);
    if (a) {
      const l = { startLineNumber: r, startColumn: a[0].length + 1, endLineNumber: r, endColumn: s.length + 1 };
      if (l.endColumn > l.startColumn) {
        const o = {
          range: l,
          ...w0(s.substring(a[0].length)),
          shouldBeInComments: !1
        };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  return n;
}
function _0(e, t) {
  const n = [], i = e.getLineCount(), r = Tc(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${r ? "s" : ""}`);
  for (let a = 1; a <= i; a += ca - d0) {
    const l = Math.min(a + ca - 1, i), o = [];
    for (let c = a; c <= l; c++)
      o.push(e.getLineContent(c));
    const u = o.join(`
`);
    s.lastIndex = 0;
    let h;
    for (; (h = s.exec(u)) !== null; ) {
      const c = u.substring(0, h.index), g = (c.match(/\n/g) || []).length, d = a + g, m = h[0].split(`
`), p = m.length, w = d + p - 1, N = c.lastIndexOf(`
`) + 1, x = h.index - N + 1, _ = m[m.length - 1], E = p === 1 ? x + h[0].length : _.length + 1, b = {
        startLineNumber: d,
        startColumn: x,
        endLineNumber: w,
        endColumn: E
      }, A = (h.groups ?? {}).label ?? "", y = ((h.groups ?? {}).separator ?? "") !== "", U = {
        range: b,
        text: A,
        hasSeparatorLine: y,
        shouldBeInComments: !0
      };
      (U.text || U.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < U.range.startLineNumber) && n.push(U), s.lastIndex = h.index + h[0].length;
    }
  }
  return n;
}
function w0(e) {
  e = e.trim();
  const t = e.startsWith("-");
  return e = e.replace(m0, ""), { text: e, hasSeparatorLine: t };
}
function dt(e) {
  return e === R.Slash || e === R.Backslash;
}
function fl(e) {
  return e.replace(/[\\/]/g, ae.sep);
}
function v0(e) {
  return e.indexOf("/") === -1 && (e = fl(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function fa(e, t = ae.sep) {
  if (!e)
    return "";
  const n = e.length, i = e.charCodeAt(0);
  if (dt(i)) {
    if (dt(e.charCodeAt(1)) && !dt(e.charCodeAt(2))) {
      let s = 3;
      const a = s;
      for (; s < n && !dt(e.charCodeAt(s)); s++)
        ;
      if (a !== s && !dt(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (dt(e.charCodeAt(s)))
            return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (L0(i) && e.charCodeAt(1) === R.Colon)
    return dt(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < n; r++)
      if (dt(e.charCodeAt(r)))
        return e.slice(0, r + 1);
  }
  return "";
}
function ha(e, t, n, i = ii) {
  if (e === t)
    return !0;
  if (!e || !t || t.length > e.length)
    return !1;
  if (n) {
    if (!Su(e, t))
      return !1;
    if (t.length === e.length)
      return !0;
    let s = t.length;
    return t.charAt(t.length - 1) === i && s--, e.charAt(s) === i;
  }
  return t.charAt(t.length - 1) !== i && (t += i), e.indexOf(t) === 0;
}
function L0(e) {
  return e >= R.A && e <= R.Z || e >= R.a && e <= R.z;
}
var Ne;
(function(e) {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
})(Ne || (Ne = {}));
const N0 = "tkn";
class A0 {
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
    this._serverRootPath = ae.join(n ?? "/", E0(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return ae.join(this._serverRootPath, Ne.vscodeRemoteResource);
  }
  set(t, n, i) {
    this._hosts[t] = n, this._ports[t] = i;
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
        return xn(l), t;
      }
    const n = t.authority;
    let i = this._hosts[n];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const r = this._ports[n], s = this._connectionTokens[n];
    let a = `path=${encodeURIComponent(t.path)}`;
    return typeof s == "string" && (a += `&${N0}=${encodeURIComponent(s)}`), Ue.from({
      scheme: pu ? this._preferredWebSchema : Ne.vscodeRemoteResource,
      authority: `${i}:${r}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const x0 = new A0();
function E0(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const y0 = "vscode-app", nn = class nn {
  constructor() {
    this.staticBrowserUris = new Yi(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
  }
  registerAppResourcePathUrl(t, n) {
    this.appResourcePathUrls.set(t, n);
  }
  toUrl(t) {
    var i;
    let n = this.appResourcePathUrls.get(t);
    return typeof n == "function" && (n = n()), new URL(n ?? t, ((i = globalThis.location) == null ? void 0 : i.href) ?? import.meta.url).toString();
  }
  asBrowserUri(t) {
    const n = this.toUri(t);
    return this.uriToBrowserUri(n);
  }
  uriToBrowserUri(t) {
    return t.scheme === Ne.vscodeRemote ? x0.rewrite(t) : t.scheme === Ne.file && (du || _u === `${Ne.vscodeFileResource}://${nn.FALLBACK_AUTHORITY}`) ? t.with({
      scheme: Ne.vscodeFileResource,
      authority: t.authority || nn.FALLBACK_AUTHORITY,
      query: null,
      fragment: null
    }) : this.staticBrowserUris.get(t) ?? t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Ne.vscodeFileResource ? t.with({
      scheme: Ne.file,
      authority: t.authority !== nn.FALLBACK_AUTHORITY ? t.authority : null,
      query: null,
      fragment: null
    }) : t;
  }
  toUri(t) {
    if (Ue.isUri(t))
      return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n))
        return Ue.joinPath(Ue.parse(n, !0), t);
      const i = hc(n, t);
      return Ue.file(i);
    }
    return Ue.parse(this.toUrl(t));
  }
  registerStaticBrowserUri(t, n) {
    return this.staticBrowserUris.set(t, n), Fn(() => {
      this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
    });
  }
  getRegisteredBrowserUris() {
    return this.staticBrowserUris.keys();
  }
};
nn.FALLBACK_AUTHORITY = y0;
let pr = nn;
new pr();
var ga;
(function(e) {
  const t = /* @__PURE__ */ new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
  ]);
  e.CoopAndCoep = Object.freeze(t.get("3"));
  const n = "vscode-coi";
  function i(s) {
    let a;
    typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : Ue.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
    const l = a == null ? void 0 : a.get(n);
    if (l)
      return t.get(l);
  }
  e.getHeadersFromQuery = i;
  function r(s, a, l) {
    if (!globalThis.crossOriginIsolated)
      return;
    const o = a && l ? "3" : l ? "2" : "1";
    s instanceof URLSearchParams ? s.set(n, o) : s[n] = o;
  }
  e.addSearchParam = r;
})(ga || (ga = {}));
function at(e) {
  return mi(e, !0);
}
class R0 {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, n, i = !1) {
    return t === n ? 0 : Ru(this.getComparisonKey(t, i), this.getComparisonKey(n, i));
  }
  isEqual(t, n, i = !1) {
    return t === n ? !0 : !t || !n ? !1 : this.getComparisonKey(t, i) === this.getComparisonKey(n, i);
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
  isEqualOrParent(t, n, i = !1) {
    if (t.scheme === n.scheme) {
      if (t.scheme === Ne.file)
        return ha(at(t), at(n), this._ignorePathCasing(t)) && t.query === n.query && (i || t.fragment === n.fragment);
      if (ma(t.authority, n.authority))
        return ha(t.path, n.path, this._ignorePathCasing(t), "/") && t.query === n.query && (i || t.fragment === n.fragment);
    }
    return !1;
  }
  joinPath(t, ...n) {
    return Ue.joinPath(t, ...n);
  }
  basenameOrAuthority(t) {
    return k0(t) || t.authority;
  }
  basename(t) {
    return ae.basename(t.path);
  }
  extname(t) {
    return ae.extname(t.path);
  }
  dirname(t) {
    if (t.path.length === 0)
      return t;
    let n;
    return t.scheme === Ne.file ? n = Ue.file(dc(at(t))).path : (n = ae.dirname(t.path), t.authority && n.length && n.charCodeAt(0) !== R.Slash && (console.error(`dirname("${t.toString})) resulted in a relative path`), n = "/")), t.with({
      path: n
    });
  }
  normalizePath(t) {
    if (!t.path.length)
      return t;
    let n;
    return t.scheme === Ne.file ? n = Ue.file(fc(at(t))).path : n = ae.normalize(t.path), t.with({
      path: n
    });
  }
  relativePath(t, n) {
    if (t.scheme !== n.scheme || !ma(t.authority, n.authority))
      return;
    if (t.scheme === Ne.file) {
      const s = mc(at(t), at(n));
      return fn ? fl(s) : s;
    }
    let i = t.path || "/";
    const r = n.path || "/";
    if (this._ignorePathCasing(t)) {
      let s = 0;
      for (const a = Math.min(i.length, r.length); s < a && !(i.charCodeAt(s) !== r.charCodeAt(s) && i.charAt(s).toLowerCase() !== r.charAt(s).toLowerCase()); s++)
        ;
      i = r.substr(0, s) + i.substr(s);
    }
    return ae.relative(i, r);
  }
  resolvePath(t, n) {
    if (t.scheme === Ne.file) {
      const i = Ue.file(gc(at(t), n));
      return t.with({
        authority: i.authority,
        path: i.path
      });
    }
    return n = v0(n), t.with({
      path: ae.resolve(t.path, n)
    });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, n) {
    return t === n || t !== void 0 && n !== void 0 && Tu(t, n);
  }
  hasTrailingPathSeparator(t, n = ii) {
    if (t.scheme === Ne.file) {
      const i = at(t);
      return i.length > fa(i).length && i[i.length - 1] === n;
    } else {
      const i = t.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === R.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, n = ii) {
    return da(t, n) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, n = ii) {
    let i = !1;
    if (t.scheme === Ne.file) {
      const r = at(t);
      i = r !== void 0 && r.length === fa(r).length && r[r.length - 1] === n;
    } else {
      n = "/";
      const r = t.path;
      i = r.length === 1 && r.charCodeAt(r.length - 1) === R.Slash;
    }
    return !i && !da(t, n) ? t.with({ path: t.path + "/" }) : t;
  }
}
const ie = new R0(() => !1);
ie.isEqual.bind(ie);
ie.isEqualOrParent.bind(ie);
ie.getComparisonKey.bind(ie);
ie.basenameOrAuthority.bind(ie);
const k0 = ie.basename.bind(ie);
ie.extname.bind(ie);
ie.dirname.bind(ie);
ie.joinPath.bind(ie);
ie.normalizePath.bind(ie);
ie.relativePath.bind(ie);
ie.resolvePath.bind(ie);
ie.isAbsolutePath.bind(ie);
const ma = ie.isEqualAuthority.bind(ie), da = ie.hasTrailingPathSeparator.bind(ie);
ie.removeTrailingPathSeparator.bind(ie);
ie.addTrailingPathSeparator.bind(ie);
var pa;
(function(e) {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(n) {
    const i = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((a) => {
      const [l, o] = a.split(":");
      l && o && i.set(l, o);
    });
    const s = n.path.substring(0, n.path.indexOf(";"));
    return s && i.set(e.META_DATA_MIME, s), i;
  }
  e.parseMetaData = t;
})(pa || (pa = {}));
var ba;
(function(e) {
  e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(ba || (ba = {}));
var _a;
(function(e) {
  async function t(i) {
    let r;
    const s = await Promise.all(i.map((a) => a.then((l) => l, (l) => {
      r || (r = l);
    })));
    if (typeof r < "u")
      throw r;
    return s;
  }
  e.settled = t;
  function n(i) {
    return new Promise(async (r, s) => {
      try {
        await i(r, s);
      } catch (a) {
        s(a);
      }
    });
  }
  e.withAsyncBody = n;
})(_a || (_a = {}));
var Xe;
(function(e) {
  e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(Xe || (Xe = {}));
const Re = class Re {
  static fromArray(t) {
    return new Re((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new Re(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new Re(async (n) => {
      await Promise.all(t.map(async (i) => n.emitOne(await i)));
    });
  }
  static merge(t) {
    return new Re(async (n) => {
      await Promise.all(t.map(async (i) => {
        for await (const r of i)
          n.emitOne(r);
      }));
    });
  }
  constructor(t, n) {
    this._state = Xe.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new $e(), queueMicrotask(async () => {
      const i = {
        emitOne: (r) => this.emitOne(r),
        emitMany: (r) => this.emitMany(r),
        reject: (r) => this.reject(r)
      };
      try {
        await Promise.resolve(t(i)), this.resolve();
      } catch (r) {
        this.reject(r);
      } finally {
        i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let t = 0;
    return {
      next: async () => {
        do {
          if (this._state === Xe.DoneError)
            throw this._error;
          if (t < this._results.length)
            return { done: !1, value: this._results[t++] };
          if (this._state === Xe.DoneOK)
            return { done: !0, value: void 0 };
          await li.toPromise(this._onStateChanged.event);
        } while (!0);
      },
      return: async () => {
        var n;
        return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
      }
    };
  }
  static map(t, n) {
    return new Re(async (i) => {
      for await (const r of t)
        i.emitOne(n(r));
    });
  }
  map(t) {
    return Re.map(this, t);
  }
  static filter(t, n) {
    return new Re(async (i) => {
      for await (const r of t)
        n(r) && i.emitOne(r);
    });
  }
  filter(t) {
    return Re.filter(this, t);
  }
  static coalesce(t) {
    return Re.filter(t, (n) => !!n);
  }
  coalesce() {
    return Re.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const i of t)
      n.push(i);
    return n;
  }
  toPromise() {
    return Re.toPromise(this);
  }
  emitOne(t) {
    this._state === Xe.Initial && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === Xe.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === Xe.Initial && (this._state = Xe.DoneOK, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === Xe.Initial && (this._state = Xe.DoneError, this._error = t, this._onStateChanged.fire());
  }
};
Re.EMPTY = Re.fromArray([]);
let wa = Re;
class T0 {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, n) {
    t = Vt(t);
    const i = this.values, r = this.prefixSum, s = n.length;
    return s === 0 ? !1 : (this.values = new Uint32Array(i.length + s), this.values.set(i.subarray(0, t), 0), this.values.set(i.subarray(t), t + s), this.values.set(n, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  setValue(t, n) {
    return t = Vt(t), n = Vt(n), this.values[t] === n ? !1 : (this.values[t] = n, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
  }
  removeValues(t, n) {
    t = Vt(t), n = Vt(n);
    const i = this.values, r = this.prefixSum;
    if (t >= i.length)
      return !1;
    const s = i.length - t;
    return n >= s && (n = s), n === 0 ? !1 : (this.values = new Uint32Array(i.length - n), this.values.set(i.subarray(0, t), 0), this.values.set(i.subarray(t + n), t), this.prefixSum = new Uint32Array(this.values.length), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  getTotalSum() {
    return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
  }
  getPrefixSum(t) {
    return t < 0 ? 0 : (t = Vt(t), this._getPrefixSum(t));
  }
  _getPrefixSum(t) {
    if (t <= this.prefixSumValidIndex[0])
      return this.prefixSum[t];
    let n = this.prefixSumValidIndex[0] + 1;
    n === 0 && (this.prefixSum[0] = this.values[0], n++), t >= this.values.length && (t = this.values.length - 1);
    for (let i = n; i <= t; i++)
      this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
    return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], t), this.prefixSum[t];
  }
  getIndexOf(t) {
    t = Math.floor(t), this.getTotalSum();
    let n = 0, i = this.values.length - 1, r = 0, s = 0, a = 0;
    for (; n <= i; )
      if (r = n + (i - n) / 2 | 0, s = this.prefixSum[r], a = s - this.values[r], t < a)
        i = r - 1;
      else if (t >= s)
        n = r + 1;
      else
        break;
    return new S0(r, t - a);
  }
}
class S0 {
  constructor(t, n) {
    this.index = t, this.remainder = n, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = n;
  }
}
class M0 {
  constructor(t, n, i, r) {
    this._uri = t, this._lines = n, this._eol = i, this._versionId = r, this._lineStarts = null, this._cachedTextValue = null;
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
    for (const i of n)
      this._acceptDeleteRange(i.range), this._acceptInsertText(new ne(i.range.startLineNumber, i.range.startColumn), i.text);
    this._versionId = t.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const t = this._eol.length, n = this._lines.length, i = new Uint32Array(n);
      for (let r = 0; r < n; r++)
        i[r] = this._lines[r].length + t;
      this._lineStarts = new T0(i);
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
    const i = Wo(n);
    if (i.length === 1) {
      this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + i[0] + this._lines[t.lineNumber - 1].substring(t.column - 1));
      return;
    }
    i[i.length - 1] += this._lines[t.lineNumber - 1].substring(t.column - 1), this._setLineText(t.lineNumber - 1, this._lines[t.lineNumber - 1].substring(0, t.column - 1) + i[0]);
    const r = new Uint32Array(i.length - 1);
    for (let s = 1; s < i.length; s++)
      this._lines.splice(t.lineNumber + s - 1, 0, i[s]), r[s - 1] = i[s].length + this._eol.length;
    this._lineStarts && this._lineStarts.insertValues(t.lineNumber, r);
  }
}
const I0 = "workerTextModelSync";
class U0 {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(I0, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new D0(Ue.parse(t.url), t.lines, t.EOL, t.versionId);
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
class D0 extends M0 {
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
    for (let i = 0; i < this._lines.length; i++) {
      const r = this._lines[i], s = this.offsetAt(new ne(i + 1, 1)), a = r.matchAll(t);
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
    const i = Gr(t.column, il(n), this._lines[t.lineNumber - 1], 0);
    return i ? new z(
      t.lineNumber,
      i.startColumn,
      t.lineNumber,
      i.endColumn
    ) : null;
  }
  getWordUntilPosition(t, n) {
    const i = this.getWordAtPosition(t, n);
    return i ? {
      word: this._lines[t.lineNumber - 1].substring(i.startColumn - 1, t.column - 1),
      startColumn: i.startColumn,
      endColumn: t.column
    } : {
      word: "",
      startColumn: t.column,
      endColumn: t.column
    };
  }
  words(t) {
    const n = this._lines, i = this._wordenize.bind(this);
    let r = 0, s = "", a = 0, l = [];
    return {
      *[Symbol.iterator]() {
        for (; ; )
          if (a < l.length) {
            const o = s.substring(l[a].start, l[a].end);
            a += 1, yield o;
          } else if (r < n.length)
            s = n[r], l = i(s, t), a = 0, r += 1;
          else
            break;
      }
    };
  }
  getLineWords(t, n) {
    const i = this._lines[t - 1], r = this._wordenize(i, n), s = [];
    for (const a of r)
      s.push({
        word: i.substring(a.start, a.end),
        startColumn: a.start + 1,
        endColumn: a.end + 1
      });
    return s;
  }
  _wordenize(t, n) {
    const i = [];
    let r;
    for (n.lastIndex = 0; (r = n.exec(t)) && r[0].length !== 0; )
      i.push({ start: r.index, end: r.index + r[0].length });
    return i;
  }
  getValueInRange(t) {
    if (t = this._validateRange(t), t.startLineNumber === t.endLineNumber)
      return this._lines[t.startLineNumber - 1].substring(t.startColumn - 1, t.endColumn - 1);
    const n = this._eol, i = t.startLineNumber - 1, r = t.endLineNumber - 1, s = [];
    s.push(this._lines[i].substring(t.startColumn - 1));
    for (let a = i + 1; a < r; a++)
      s.push(this._lines[a]);
    return s.push(this._lines[r].substring(0, t.endColumn - 1)), s.join(n);
  }
  offsetAt(t) {
    return t = this._validatePosition(t), this._ensureLineStarts(), this._lineStarts.getPrefixSum(t.lineNumber - 2) + (t.column - 1);
  }
  positionAt(t) {
    t = Math.floor(t), t = Math.max(0, t), this._ensureLineStarts();
    const n = this._lineStarts.getIndexOf(t), i = this._lines[n.index].length;
    return {
      lineNumber: 1 + n.index,
      column: 1 + Math.min(n.remainder, i)
    };
  }
  _validateRange(t) {
    const n = this._validatePosition({ lineNumber: t.startLineNumber, column: t.startColumn }), i = this._validatePosition({ lineNumber: t.endLineNumber, column: t.endColumn });
    return n.lineNumber !== t.startLineNumber || n.column !== t.startColumn || i.lineNumber !== t.endLineNumber || i.column !== t.endColumn ? {
      startLineNumber: n.lineNumber,
      startColumn: n.column,
      endLineNumber: i.lineNumber,
      endColumn: i.column
    } : t;
  }
  _validatePosition(t) {
    if (!ne.isIPosition(t))
      throw new Error("bad position");
    let { lineNumber: n, column: i } = t, r = !1;
    if (n < 1)
      n = 1, i = 1, r = !0;
    else if (n > this._lines.length)
      n = this._lines.length, i = this._lines[n - 1].length + 1, r = !0;
    else {
      const s = this._lines[n - 1].length + 1;
      i < 1 ? (i = 1, r = !0) : i > s && (i = s, r = !0);
    }
    return r ? { lineNumber: n, column: i } : t;
  }
}
const Lt = class Lt {
  constructor(t = null) {
    this._foreignModule = t, this._workerTextModelSyncServer = new U0();
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
  async $computeUnicodeHighlights(t, n, i) {
    const r = this._getModel(t);
    return r ? Oc.computeUnicodeHighlights(r, n, i) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(t, n) {
    const i = this._getModel(t);
    return i ? p0(i, n) : [];
  }
  async $computeDiff(t, n, i, r) {
    const s = this._getModel(t), a = this._getModel(n);
    return !s || !a ? null : Lt.computeDiff(s, a, i, r);
  }
  static computeDiff(t, n, i, r) {
    const s = r === "advanced" ? $i.getDefault() : $i.getLegacy(), a = t.getLinesContent(), l = n.getLinesContent(), o = s.computeDiff(a, l, i), u = o.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
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
    const i = t.getLineCount(), r = n.getLineCount();
    if (i !== r)
      return !1;
    for (let s = 1; s <= i; s++) {
      const a = t.getLineContent(s), l = n.getLineContent(s);
      if (a !== l)
        return !1;
    }
    return !0;
  }
  async $computeDirtyDiff(t, n, i) {
    const r = this._getModel(t), s = this._getModel(n);
    if (!r || !s)
      return null;
    const a = r.getLinesContent(), l = s.getLinesContent();
    return new ll(a, l, {
      shouldComputeCharChanges: !1,
      shouldPostProcessCharChanges: !1,
      shouldIgnoreTrimWhitespace: i,
      shouldMakePrettyDiff: !0,
      maxComputationTime: 1e3
    }).computeDiff().changes;
  }
  async $computeMoreMinimalEdits(t, n, i) {
    const r = this._getModel(t);
    if (!r)
      return n;
    const s = [];
    let a;
    n = n.slice(0).sort((o, u) => {
      if (o.range && u.range)
        return z.compareRangesUsingStarts(o.range, u.range);
      const h = o.range ? 0 : 1, c = u.range ? 0 : 1;
      return h - c;
    });
    let l = 0;
    for (let o = 1; o < n.length; o++)
      z.getEndPosition(n[l].range).equals(z.getStartPosition(n[o].range)) ? (n[l].range = z.fromPositions(z.getStartPosition(n[l].range), z.getEndPosition(n[o].range)), n[l].text += n[o].text) : (l++, n[l] = n[o]);
    n.length = l + 1;
    for (let { range: o, text: u, eol: h } of n) {
      if (typeof h == "number" && (a = h), z.isEmpty(o) && !u)
        continue;
      const c = r.getValueInRange(o);
      if (u = u.replace(/\r\n|\n|\r/g, r.eol), c === u)
        continue;
      if (Math.max(u.length, c.length) > Lt._diffLimit) {
        s.push({ range: o, text: u });
        continue;
      }
      const g = Gu(c, u, i), d = r.offsetAt(z.lift(o).getStartPosition());
      for (const m of g) {
        const p = r.positionAt(d + m.originalStart), w = r.positionAt(d + m.originalStart + m.originalLength), N = {
          text: u.substr(m.modifiedStart, m.modifiedLength),
          range: { startLineNumber: p.lineNumber, startColumn: p.column, endLineNumber: w.lineNumber, endColumn: w.column }
        };
        r.getValueInRange(N.range) !== N.text && s.push(N);
      }
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  $computeHumanReadableDiff(t, n, i) {
    const r = this._getModel(t);
    if (!r)
      return n;
    const s = [];
    let a;
    n = n.slice(0).sort((l, o) => {
      if (l.range && o.range)
        return z.compareRangesUsingStarts(l.range, o.range);
      const u = l.range ? 0 : 1, h = o.range ? 0 : 1;
      return u - h;
    });
    for (let { range: l, text: o, eol: u } of n) {
      let p = function(N, x) {
        return new ne(
          N.lineNumber + x.lineNumber - 1,
          x.lineNumber === 1 ? N.column + x.column - 1 : x.column
        );
      }, w = function(N, x) {
        const _ = [];
        for (let E = x.startLineNumber; E <= x.endLineNumber; E++) {
          const b = N[E - 1];
          E === x.startLineNumber && E === x.endLineNumber ? _.push(b.substring(x.startColumn - 1, x.endColumn - 1)) : E === x.startLineNumber ? _.push(b.substring(x.startColumn - 1)) : E === x.endLineNumber ? _.push(b.substring(0, x.endColumn - 1)) : _.push(b);
        }
        return _;
      };
      if (typeof u == "number" && (a = u), z.isEmpty(l) && !o)
        continue;
      const h = r.getValueInRange(l);
      if (o = o.replace(/\r\n|\n|\r/g, r.eol), h === o)
        continue;
      if (Math.max(o.length, h.length) > Lt._diffLimit) {
        s.push({ range: l, text: o });
        continue;
      }
      const c = h.split(/\r\n|\n|\r/), g = o.split(/\r\n|\n|\r/), d = $i.getDefault().computeDiff(c, g, i), m = z.lift(l).getStartPosition();
      for (const N of d.changes)
        if (N.innerChanges)
          for (const x of N.innerChanges)
            s.push({
              range: z.fromPositions(p(m, x.originalRange.getStartPosition()), p(m, x.originalRange.getEndPosition())),
              text: w(g, x.modifiedRange).join(r.eol)
            });
        else
          throw new be("The experimental diff algorithm always produces inner changes");
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(t) {
    const n = this._getModel(t);
    return n ? Zu(n) : null;
  }
  async $computeDefaultDocumentColors(t) {
    const n = this._getModel(t);
    return n ? g0(n) : null;
  }
  async $textualSuggest(t, n, i, r) {
    const s = new Ui(), a = new RegExp(i, r), l = /* @__PURE__ */ new Set();
    e: for (const o of t) {
      const u = this._getModel(o);
      if (u) {
        for (const h of u.words(a))
          if (!(h === n || !isNaN(Number(h))) && (l.add(h), l.size > Lt._suggestionsLimit))
            break e;
      }
    }
    return { words: Array.from(l), duration: s.elapsed() };
  }
  async $computeWordRanges(t, n, i, r) {
    const s = this._getModel(t);
    if (!s)
      return /* @__PURE__ */ Object.create(null);
    const a = new RegExp(i, r), l = /* @__PURE__ */ Object.create(null);
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
  async $navigateValueSet(t, n, i, r, s) {
    const a = this._getModel(t);
    if (!a)
      return null;
    const l = new RegExp(r, s);
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
    return tr.INSTANCE.navigateValueSet(n, o, u, h, i);
  }
  $fmr(t, n) {
    if (!this._foreignModule || typeof this._foreignModule[t] != "function")
      return Promise.reject(new Error("Missing requestHandler or method: " + t));
    try {
      return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n));
    } catch (i) {
      return Promise.reject(i);
    }
  }
};
Lt._diffLimit = 1e5, Lt._suggestionsLimit = 1e4;
let wi = Lt;
typeof importScripts == "function" && (globalThis.monaco = kc());
Wu(() => new wi(null));
const Un = class Un {
  static getChannel(t) {
    return t.getChannel(Un.CHANNEL_NAME);
  }
  static setChannel(t, n) {
    t.setChannel(Un.CHANNEL_NAME, n);
  }
};
Un.CHANNEL_NAME = "editorWorkerHost";
let br = Un;
function F0(e) {
  const t = Yo(() => new wi(e)), n = br.getChannel(t);
  return {
    host: new Proxy({}, {
      get(r, s, a) {
        if (typeof s != "string")
          throw new Error("Not supported");
        return (...l) => n.$fhr(s, l);
      }
    }),
    getMirrorModels: () => t.requestHandler.getModels()
  };
}
function P0(e) {
  let t;
  const n = new Proxy({}, {
    get(r, s) {
      return s === "$initialize" ? async (a) => {
        t || (t = e(i, a));
      } : t == null ? void 0 : t[s];
    }
  }), i = F0(n);
}
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.2(undefined)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
function Jr(e, t = !1) {
  const n = e.length;
  let i = 0, r = "", s = 0, a = 16, l = 0, o = 0, u = 0, h = 0, c = 0;
  function g(_, E) {
    let b = 0, A = 0;
    for (; b < _; ) {
      let y = e.charCodeAt(i);
      if (y >= 48 && y <= 57)
        A = A * 16 + y - 48;
      else if (y >= 65 && y <= 70)
        A = A * 16 + y - 65 + 10;
      else if (y >= 97 && y <= 102)
        A = A * 16 + y - 97 + 10;
      else
        break;
      i++, b++;
    }
    return b < _ && (A = -1), A;
  }
  function d(_) {
    i = _, r = "", s = 0, a = 16, c = 0;
  }
  function m() {
    let _ = i;
    if (e.charCodeAt(i) === 48)
      i++;
    else
      for (i++; i < e.length && Gt(e.charCodeAt(i)); )
        i++;
    if (i < e.length && e.charCodeAt(i) === 46)
      if (i++, i < e.length && Gt(e.charCodeAt(i)))
        for (i++; i < e.length && Gt(e.charCodeAt(i)); )
          i++;
      else
        return c = 3, e.substring(_, i);
    let E = i;
    if (i < e.length && (e.charCodeAt(i) === 69 || e.charCodeAt(i) === 101))
      if (i++, (i < e.length && e.charCodeAt(i) === 43 || e.charCodeAt(i) === 45) && i++, i < e.length && Gt(e.charCodeAt(i))) {
        for (i++; i < e.length && Gt(e.charCodeAt(i)); )
          i++;
        E = i;
      } else
        c = 3;
    return e.substring(_, E);
  }
  function p() {
    let _ = "", E = i;
    for (; ; ) {
      if (i >= n) {
        _ += e.substring(E, i), c = 2;
        break;
      }
      const b = e.charCodeAt(i);
      if (b === 34) {
        _ += e.substring(E, i), i++;
        break;
      }
      if (b === 92) {
        if (_ += e.substring(E, i), i++, i >= n) {
          c = 2;
          break;
        }
        switch (e.charCodeAt(i++)) {
          case 34:
            _ += '"';
            break;
          case 92:
            _ += "\\";
            break;
          case 47:
            _ += "/";
            break;
          case 98:
            _ += "\b";
            break;
          case 102:
            _ += "\f";
            break;
          case 110:
            _ += `
`;
            break;
          case 114:
            _ += "\r";
            break;
          case 116:
            _ += "	";
            break;
          case 117:
            const y = g(4);
            y >= 0 ? _ += String.fromCharCode(y) : c = 4;
            break;
          default:
            c = 5;
        }
        E = i;
        continue;
      }
      if (b >= 0 && b <= 31)
        if (Ln(b)) {
          _ += e.substring(E, i), c = 2;
          break;
        } else
          c = 6;
      i++;
    }
    return _;
  }
  function w() {
    if (r = "", c = 0, s = i, o = l, h = u, i >= n)
      return s = n, a = 17;
    let _ = e.charCodeAt(i);
    if (qi(_)) {
      do
        i++, r += String.fromCharCode(_), _ = e.charCodeAt(i);
      while (qi(_));
      return a = 15;
    }
    if (Ln(_))
      return i++, r += String.fromCharCode(_), _ === 13 && e.charCodeAt(i) === 10 && (i++, r += `
`), l++, u = i, a = 14;
    switch (_) {
      case 123:
        return i++, a = 1;
      case 125:
        return i++, a = 2;
      case 91:
        return i++, a = 3;
      case 93:
        return i++, a = 4;
      case 58:
        return i++, a = 6;
      case 44:
        return i++, a = 5;
      case 34:
        return i++, r = p(), a = 10;
      case 47:
        const E = i - 1;
        if (e.charCodeAt(i + 1) === 47) {
          for (i += 2; i < n && !Ln(e.charCodeAt(i)); )
            i++;
          return r = e.substring(E, i), a = 12;
        }
        if (e.charCodeAt(i + 1) === 42) {
          i += 2;
          const b = n - 1;
          let A = !1;
          for (; i < b; ) {
            const y = e.charCodeAt(i);
            if (y === 42 && e.charCodeAt(i + 1) === 47) {
              i += 2, A = !0;
              break;
            }
            i++, Ln(y) && (y === 13 && e.charCodeAt(i) === 10 && i++, l++, u = i);
          }
          return A || (i++, c = 1), r = e.substring(E, i), a = 13;
        }
        return r += String.fromCharCode(_), i++, a = 16;
      case 45:
        if (r += String.fromCharCode(_), i++, i === n || !Gt(e.charCodeAt(i)))
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
        return r += m(), a = 11;
      default:
        for (; i < n && N(_); )
          i++, _ = e.charCodeAt(i);
        if (s !== i) {
          switch (r = e.substring(s, i), r) {
            case "true":
              return a = 8;
            case "false":
              return a = 9;
            case "null":
              return a = 7;
          }
          return a = 16;
        }
        return r += String.fromCharCode(_), i++, a = 16;
    }
  }
  function N(_) {
    if (qi(_) || Ln(_))
      return !1;
    switch (_) {
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
    let _;
    do
      _ = w();
    while (_ >= 12 && _ <= 15);
    return _;
  }
  return {
    setPosition: d,
    getPosition: () => i,
    scan: t ? x : w,
    getToken: () => a,
    getTokenValue: () => r,
    getTokenOffset: () => s,
    getTokenLength: () => i - s,
    getTokenStartLine: () => o,
    getTokenStartCharacter: () => s - h,
    getTokenError: () => c
  };
}
function qi(e) {
  return e === 32 || e === 9;
}
function Ln(e) {
  return e === 10 || e === 13;
}
function Gt(e) {
  return e >= 48 && e <= 57;
}
var va;
(function(e) {
  e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
})(va || (va = {}));
var Be = new Array(20).fill(0).map((e, t) => " ".repeat(t)), zt = 200, La = {
  " ": {
    "\n": new Array(zt).fill(0).map((e, t) => `
` + " ".repeat(t)),
    "\r": new Array(zt).fill(0).map((e, t) => "\r" + " ".repeat(t)),
    "\r\n": new Array(zt).fill(0).map((e, t) => `\r
` + " ".repeat(t))
  },
  "	": {
    "\n": new Array(zt).fill(0).map((e, t) => `
` + "	".repeat(t)),
    "\r": new Array(zt).fill(0).map((e, t) => "\r" + "	".repeat(t)),
    "\r\n": new Array(zt).fill(0).map((e, t) => `\r
` + "	".repeat(t))
  }
}, O0 = [`
`, "\r", `\r
`];
function B0(e, t, n) {
  let i, r, s, a, l;
  if (t) {
    for (a = t.offset, l = a + t.length, s = a; s > 0 && !Na(e, s - 1); )
      s--;
    let b = l;
    for (; b < e.length && !Na(e, b); )
      b++;
    r = e.substring(s, b), i = V0(r, n);
  } else
    r = e, i = 0, s = 0, a = 0, l = e.length;
  const o = $0(n, e), u = O0.includes(o);
  let h = 0, c = 0, g;
  n.insertSpaces ? g = Be[n.tabSize || 4] ?? Xt(Be[1], n.tabSize || 4) : g = "	";
  const d = g === "	" ? "	" : " ";
  let m = Jr(r, !1), p = !1;
  function w() {
    if (h > 1)
      return Xt(o, h) + Xt(g, i + c);
    const b = g.length * (i + c);
    return !u || b > La[d][o].length ? o + Xt(g, i + c) : b <= 0 ? o : La[d][o][b];
  }
  function N() {
    let b = m.scan();
    for (h = 0; b === 15 || b === 14; )
      b === 14 && n.keepLines ? h += 1 : b === 14 && (h = 1), b = m.scan();
    return p = b === 16 || m.getTokenError() !== 0, b;
  }
  const x = [];
  function _(b, A, y) {
    !p && (!t || A < l && y > a) && e.substring(A, y) !== b && x.push({ offset: A, length: y - A, content: b });
  }
  let E = N();
  if (n.keepLines && h > 0 && _(Xt(o, h), 0, 0), E !== 17) {
    let b = m.getTokenOffset() + s, A = g.length * i < 20 && n.insertSpaces ? Be[g.length * i] : Xt(g, i);
    _(A, s, b);
  }
  for (; E !== 17; ) {
    let b = m.getTokenOffset() + m.getTokenLength() + s, A = N(), y = "", U = !1;
    for (; h === 0 && (A === 12 || A === 13); ) {
      let W = m.getTokenOffset() + s;
      _(Be[1], b, W), b = m.getTokenOffset() + m.getTokenLength() + s, U = A === 12, y = U ? w() : "", A = N();
    }
    if (A === 2)
      E !== 1 && c--, n.keepLines && h > 0 || !n.keepLines && E !== 1 ? y = w() : n.keepLines && (y = Be[1]);
    else if (A === 4)
      E !== 3 && c--, n.keepLines && h > 0 || !n.keepLines && E !== 3 ? y = w() : n.keepLines && (y = Be[1]);
    else {
      switch (E) {
        case 3:
        case 1:
          c++, n.keepLines && h > 0 || !n.keepLines ? y = w() : y = Be[1];
          break;
        case 5:
          n.keepLines && h > 0 || !n.keepLines ? y = w() : y = Be[1];
          break;
        case 12:
          y = w();
          break;
        case 13:
          h > 0 ? y = w() : U || (y = Be[1]);
          break;
        case 6:
          n.keepLines && h > 0 ? y = w() : U || (y = Be[1]);
          break;
        case 10:
          n.keepLines && h > 0 ? y = w() : A === 6 && !U && (y = "");
          break;
        case 7:
        case 8:
        case 9:
        case 11:
        case 2:
        case 4:
          n.keepLines && h > 0 ? y = w() : (A === 12 || A === 13) && !U ? y = Be[1] : A !== 5 && A !== 17 && (p = !0);
          break;
        case 16:
          p = !0;
          break;
      }
      h > 0 && (A === 12 || A === 13) && (y = w());
    }
    A === 17 && (n.keepLines && h > 0 ? y = w() : y = n.insertFinalNewline ? o : "");
    const $ = m.getTokenOffset() + s;
    _(y, b, $), E = A;
  }
  return x;
}
function Xt(e, t) {
  let n = "";
  for (let i = 0; i < t; i++)
    n += e;
  return n;
}
function V0(e, t) {
  let n = 0, i = 0;
  const r = t.tabSize || 4;
  for (; n < e.length; ) {
    let s = e.charAt(n);
    if (s === Be[1])
      i++;
    else if (s === "	")
      i += r;
    else
      break;
    n++;
  }
  return Math.floor(i / r);
}
function $0(e, t) {
  for (let n = 0; n < t.length; n++) {
    const i = t.charAt(n);
    if (i === "\r")
      return n + 1 < t.length && t.charAt(n + 1) === `
` ? `\r
` : "\r";
    if (i === `
`)
      return `
`;
  }
  return e && e.eol || `
`;
}
function Na(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
var vi;
(function(e) {
  e.DEFAULT = {
    allowTrailingComma: !1
  };
})(vi || (vi = {}));
function q0(e, t = [], n = vi.DEFAULT) {
  let i = null, r = [];
  const s = [];
  function a(o) {
    Array.isArray(r) ? r.push(o) : i !== null && (r[i] = o);
  }
  return W0(e, {
    onObjectBegin: () => {
      const o = {};
      a(o), s.push(r), r = o, i = null;
    },
    onObjectProperty: (o) => {
      i = o;
    },
    onObjectEnd: () => {
      r = s.pop();
    },
    onArrayBegin: () => {
      const o = [];
      a(o), s.push(r), r = o, i = null;
    },
    onArrayEnd: () => {
      r = s.pop();
    },
    onLiteralValue: a,
    onError: (o, u, h) => {
      t.push({ error: o, offset: u, length: h });
    }
  }, n), r[0];
}
function hl(e) {
  if (!e.parent || !e.parent.children)
    return [];
  const t = hl(e.parent);
  if (e.parent.type === "property") {
    const n = e.parent.children[0].value;
    t.push(n);
  } else if (e.parent.type === "array") {
    const n = e.parent.children.indexOf(e);
    n !== -1 && t.push(n);
  }
  return t;
}
function _r(e) {
  switch (e.type) {
    case "array":
      return e.children.map(_r);
    case "object":
      const t = /* @__PURE__ */ Object.create(null);
      for (let n of e.children) {
        const i = n.children[1];
        i && (t[n.children[0].value] = _r(i));
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
function H0(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function gl(e, t, n = !1) {
  if (H0(e, t, n)) {
    const i = e.children;
    if (Array.isArray(i))
      for (let r = 0; r < i.length && i[r].offset <= t; r++) {
        const s = gl(i[r], t, n);
        if (s)
          return s;
      }
    return e;
  }
}
function W0(e, t, n = vi.DEFAULT) {
  const i = Jr(e, !1), r = [];
  function s(T) {
    return T ? () => T(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter()) : () => !0;
  }
  function a(T) {
    return T ? () => T(i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter(), () => r.slice()) : () => !0;
  }
  function l(T) {
    return T ? (M) => T(M, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter()) : () => !0;
  }
  function o(T) {
    return T ? (M) => T(M, i.getTokenOffset(), i.getTokenLength(), i.getTokenStartLine(), i.getTokenStartCharacter(), () => r.slice()) : () => !0;
  }
  const u = a(t.onObjectBegin), h = o(t.onObjectProperty), c = s(t.onObjectEnd), g = a(t.onArrayBegin), d = s(t.onArrayEnd), m = o(t.onLiteralValue), p = l(t.onSeparator), w = s(t.onComment), N = l(t.onError), x = n && n.disallowComments, _ = n && n.allowTrailingComma;
  function E() {
    for (; ; ) {
      const T = i.scan();
      switch (i.getTokenError()) {
        case 4:
          b(
            14
            /* ParseErrorCode.InvalidUnicode */
          );
          break;
        case 5:
          b(
            15
            /* ParseErrorCode.InvalidEscapeCharacter */
          );
          break;
        case 3:
          b(
            13
            /* ParseErrorCode.UnexpectedEndOfNumber */
          );
          break;
        case 1:
          x || b(
            11
            /* ParseErrorCode.UnexpectedEndOfComment */
          );
          break;
        case 2:
          b(
            12
            /* ParseErrorCode.UnexpectedEndOfString */
          );
          break;
        case 6:
          b(
            16
            /* ParseErrorCode.InvalidCharacter */
          );
          break;
      }
      switch (T) {
        case 12:
        case 13:
          x ? b(
            10
            /* ParseErrorCode.InvalidCommentToken */
          ) : w();
          break;
        case 16:
          b(
            1
            /* ParseErrorCode.InvalidSymbol */
          );
          break;
        case 15:
        case 14:
          break;
        default:
          return T;
      }
    }
  }
  function b(T, M = [], I = []) {
    if (N(T), M.length + I.length > 0) {
      let B = i.getToken();
      for (; B !== 17; ) {
        if (M.indexOf(B) !== -1) {
          E();
          break;
        } else if (I.indexOf(B) !== -1)
          break;
        B = E();
      }
    }
  }
  function A(T) {
    const M = i.getTokenValue();
    return T ? m(M) : (h(M), r.push(M)), E(), !0;
  }
  function y() {
    switch (i.getToken()) {
      case 11:
        const T = i.getTokenValue();
        let M = Number(T);
        isNaN(M) && (b(
          2
          /* ParseErrorCode.InvalidNumberFormat */
        ), M = 0), m(M);
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
  function U() {
    return i.getToken() !== 10 ? (b(3, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), !1) : (A(!1), i.getToken() === 6 ? (p(":"), E(), F() || b(4, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ])) : b(5, [], [
      2,
      5
      /* SyntaxKind.CommaToken */
    ]), r.pop(), !0);
  }
  function $() {
    u(), E();
    let T = !1;
    for (; i.getToken() !== 2 && i.getToken() !== 17; ) {
      if (i.getToken() === 5) {
        if (T || b(4, [], []), p(","), E(), i.getToken() === 2 && _)
          break;
      } else T && b(6, [], []);
      U() || b(4, [], [
        2,
        5
        /* SyntaxKind.CommaToken */
      ]), T = !0;
    }
    return c(), i.getToken() !== 2 ? b(7, [
      2
      /* SyntaxKind.CloseBraceToken */
    ], []) : E(), !0;
  }
  function W() {
    g(), E();
    let T = !0, M = !1;
    for (; i.getToken() !== 4 && i.getToken() !== 17; ) {
      if (i.getToken() === 5) {
        if (M || b(4, [], []), p(","), E(), i.getToken() === 4 && _)
          break;
      } else M && b(6, [], []);
      T ? (r.push(0), T = !1) : r[r.length - 1]++, F() || b(4, [], [
        4,
        5
        /* SyntaxKind.CommaToken */
      ]), M = !0;
    }
    return d(), T || r.pop(), i.getToken() !== 4 ? b(8, [
      4
      /* SyntaxKind.CloseBracketToken */
    ], []) : E(), !0;
  }
  function F() {
    switch (i.getToken()) {
      case 3:
        return W();
      case 1:
        return $();
      case 10:
        return A(!0);
      default:
        return y();
    }
  }
  return E(), i.getToken() === 17 ? n.allowEmptyContent ? !0 : (b(4, [], []), !1) : F() ? (i.getToken() !== 17 && b(9, [], []), !0) : (b(4, [], []), !1);
}
var Dt = Jr, Aa;
(function(e) {
  e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
})(Aa || (Aa = {}));
var xa;
(function(e) {
  e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
})(xa || (xa = {}));
var j0 = q0, G0 = gl, z0 = hl, X0 = _r, Ea;
(function(e) {
  e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
})(Ea || (Ea = {}));
function J0(e, t, n) {
  return B0(e, t, n);
}
function an(e, t) {
  if (e === t)
    return !0;
  if (e == null || t === null || t === void 0 || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t))
    return !1;
  let n, i;
  if (Array.isArray(e)) {
    if (e.length !== t.length)
      return !1;
    for (n = 0; n < e.length; n++)
      if (!an(e[n], t[n]))
        return !1;
  } else {
    const r = [];
    for (i in e)
      r.push(i);
    r.sort();
    const s = [];
    for (i in t)
      s.push(i);
    if (s.sort(), !an(r, s))
      return !1;
    for (n = 0; n < r.length; n++)
      if (!an(e[r[n]], t[r[n]]))
        return !1;
  }
  return !0;
}
function Ae(e) {
  return typeof e == "number";
}
function ze(e) {
  return typeof e < "u";
}
function tt(e) {
  return typeof e == "boolean";
}
function ml(e) {
  return typeof e == "string";
}
function vt(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Y0(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function qn(e, t) {
  const n = e.length - t.length;
  return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : !1;
}
function Li(e) {
  let t = "";
  Y0(e, "(?i)") && (e = e.substring(4), t = "i");
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
function ya(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    t++;
    const i = e.charCodeAt(n);
    55296 <= i && i <= 56319 && n++;
  }
  return t;
}
var Ra;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(Ra || (Ra = {}));
var wr;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(wr || (wr = {}));
var ka;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(ka || (ka = {}));
var Ni;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Ni || (Ni = {}));
var ce;
(function(e) {
  function t(i, r) {
    return i === Number.MAX_VALUE && (i = Ni.MAX_VALUE), r === Number.MAX_VALUE && (r = Ni.MAX_VALUE), { line: i, character: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.objectLiteral(r) && S.uinteger(r.line) && S.uinteger(r.character);
  }
  e.is = n;
})(ce || (ce = {}));
var C;
(function(e) {
  function t(i, r, s, a) {
    if (S.uinteger(i) && S.uinteger(r) && S.uinteger(s) && S.uinteger(a))
      return { start: ce.create(i, r), end: ce.create(s, a) };
    if (ce.is(i) && ce.is(r))
      return { start: i, end: r };
    throw new Error(`Range#create called with invalid arguments[${i}, ${r}, ${s}, ${a}]`);
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.objectLiteral(r) && ce.is(r.start) && ce.is(r.end);
  }
  e.is = n;
})(C || (C = {}));
var gn;
(function(e) {
  function t(i, r) {
    return { uri: i, range: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.objectLiteral(r) && C.is(r.range) && (S.string(r.uri) || S.undefined(r.uri));
  }
  e.is = n;
})(gn || (gn = {}));
var Ta;
(function(e) {
  function t(i, r, s, a) {
    return { targetUri: i, targetRange: r, targetSelectionRange: s, originSelectionRange: a };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.objectLiteral(r) && C.is(r.targetRange) && S.string(r.targetUri) && C.is(r.targetSelectionRange) && (C.is(r.originSelectionRange) || S.undefined(r.originSelectionRange));
  }
  e.is = n;
})(Ta || (Ta = {}));
var vr;
(function(e) {
  function t(i, r, s, a) {
    return {
      red: i,
      green: r,
      blue: s,
      alpha: a
    };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && S.numberRange(r.red, 0, 1) && S.numberRange(r.green, 0, 1) && S.numberRange(r.blue, 0, 1) && S.numberRange(r.alpha, 0, 1);
  }
  e.is = n;
})(vr || (vr = {}));
var Sa;
(function(e) {
  function t(i, r) {
    return {
      range: i,
      color: r
    };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && C.is(r.range) && vr.is(r.color);
  }
  e.is = n;
})(Sa || (Sa = {}));
var Ma;
(function(e) {
  function t(i, r, s) {
    return {
      label: i,
      textEdit: r,
      additionalTextEdits: s
    };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && S.string(r.label) && (S.undefined(r.textEdit) || it.is(r)) && (S.undefined(r.additionalTextEdits) || S.typedArray(r.additionalTextEdits, it.is));
  }
  e.is = n;
})(Ma || (Ma = {}));
var Mn;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(Mn || (Mn = {}));
var Ia;
(function(e) {
  function t(i, r, s, a, l, o) {
    const u = {
      startLine: i,
      endLine: r
    };
    return S.defined(s) && (u.startCharacter = s), S.defined(a) && (u.endCharacter = a), S.defined(l) && (u.kind = l), S.defined(o) && (u.collapsedText = o), u;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && S.uinteger(r.startLine) && S.uinteger(r.startLine) && (S.undefined(r.startCharacter) || S.uinteger(r.startCharacter)) && (S.undefined(r.endCharacter) || S.uinteger(r.endCharacter)) && (S.undefined(r.kind) || S.string(r.kind));
  }
  e.is = n;
})(Ia || (Ia = {}));
var Lr;
(function(e) {
  function t(i, r) {
    return {
      location: i,
      message: r
    };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && gn.is(r.location) && S.string(r.message);
  }
  e.is = n;
})(Lr || (Lr = {}));
var Oe;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(Oe || (Oe = {}));
var Ua;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(Ua || (Ua = {}));
var Da;
(function(e) {
  function t(n) {
    const i = n;
    return S.objectLiteral(i) && S.string(i.href);
  }
  e.is = t;
})(Da || (Da = {}));
var ht;
(function(e) {
  function t(i, r, s, a, l, o) {
    let u = { range: i, message: r };
    return S.defined(s) && (u.severity = s), S.defined(a) && (u.code = a), S.defined(l) && (u.source = l), S.defined(o) && (u.relatedInformation = o), u;
  }
  e.create = t;
  function n(i) {
    var r;
    let s = i;
    return S.defined(s) && C.is(s.range) && S.string(s.message) && (S.number(s.severity) || S.undefined(s.severity)) && (S.integer(s.code) || S.string(s.code) || S.undefined(s.code)) && (S.undefined(s.codeDescription) || S.string((r = s.codeDescription) === null || r === void 0 ? void 0 : r.href)) && (S.string(s.source) || S.undefined(s.source)) && (S.undefined(s.relatedInformation) || S.typedArray(s.relatedInformation, Lr.is));
  }
  e.is = n;
})(ht || (ht = {}));
var mn;
(function(e) {
  function t(i, r, ...s) {
    let a = { title: i, command: r };
    return S.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.string(r.title) && S.string(r.command);
  }
  e.is = n;
})(mn || (mn = {}));
var it;
(function(e) {
  function t(s, a) {
    return { range: s, newText: a };
  }
  e.replace = t;
  function n(s, a) {
    return { range: { start: s, end: s }, newText: a };
  }
  e.insert = n;
  function i(s) {
    return { range: s, newText: "" };
  }
  e.del = i;
  function r(s) {
    const a = s;
    return S.objectLiteral(a) && S.string(a.newText) && C.is(a.range);
  }
  e.is = r;
})(it || (it = {}));
var Nr;
(function(e) {
  function t(i, r, s) {
    const a = { label: i };
    return r !== void 0 && (a.needsConfirmation = r), s !== void 0 && (a.description = s), a;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && S.string(r.label) && (S.boolean(r.needsConfirmation) || r.needsConfirmation === void 0) && (S.string(r.description) || r.description === void 0);
  }
  e.is = n;
})(Nr || (Nr = {}));
var dn;
(function(e) {
  function t(n) {
    const i = n;
    return S.string(i);
  }
  e.is = t;
})(dn || (dn = {}));
var Fa;
(function(e) {
  function t(s, a, l) {
    return { range: s, newText: a, annotationId: l };
  }
  e.replace = t;
  function n(s, a, l) {
    return { range: { start: s, end: s }, newText: a, annotationId: l };
  }
  e.insert = n;
  function i(s, a) {
    return { range: s, newText: "", annotationId: a };
  }
  e.del = i;
  function r(s) {
    const a = s;
    return it.is(a) && (Nr.is(a.annotationId) || dn.is(a.annotationId));
  }
  e.is = r;
})(Fa || (Fa = {}));
var Ar;
(function(e) {
  function t(i, r) {
    return { textDocument: i, edits: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && kr.is(r.textDocument) && Array.isArray(r.edits);
  }
  e.is = n;
})(Ar || (Ar = {}));
var xr;
(function(e) {
  function t(i, r, s) {
    let a = {
      kind: "create",
      uri: i
    };
    return r !== void 0 && (r.overwrite !== void 0 || r.ignoreIfExists !== void 0) && (a.options = r), s !== void 0 && (a.annotationId = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && r.kind === "create" && S.string(r.uri) && (r.options === void 0 || (r.options.overwrite === void 0 || S.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || S.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || dn.is(r.annotationId));
  }
  e.is = n;
})(xr || (xr = {}));
var Er;
(function(e) {
  function t(i, r, s, a) {
    let l = {
      kind: "rename",
      oldUri: i,
      newUri: r
    };
    return s !== void 0 && (s.overwrite !== void 0 || s.ignoreIfExists !== void 0) && (l.options = s), a !== void 0 && (l.annotationId = a), l;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && r.kind === "rename" && S.string(r.oldUri) && S.string(r.newUri) && (r.options === void 0 || (r.options.overwrite === void 0 || S.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || S.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || dn.is(r.annotationId));
  }
  e.is = n;
})(Er || (Er = {}));
var yr;
(function(e) {
  function t(i, r, s) {
    let a = {
      kind: "delete",
      uri: i
    };
    return r !== void 0 && (r.recursive !== void 0 || r.ignoreIfNotExists !== void 0) && (a.options = r), s !== void 0 && (a.annotationId = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && r.kind === "delete" && S.string(r.uri) && (r.options === void 0 || (r.options.recursive === void 0 || S.boolean(r.options.recursive)) && (r.options.ignoreIfNotExists === void 0 || S.boolean(r.options.ignoreIfNotExists))) && (r.annotationId === void 0 || dn.is(r.annotationId));
  }
  e.is = n;
})(yr || (yr = {}));
var Rr;
(function(e) {
  function t(n) {
    let i = n;
    return i && (i.changes !== void 0 || i.documentChanges !== void 0) && (i.documentChanges === void 0 || i.documentChanges.every((r) => S.string(r.kind) ? xr.is(r) || Er.is(r) || yr.is(r) : Ar.is(r)));
  }
  e.is = t;
})(Rr || (Rr = {}));
var Pa;
(function(e) {
  function t(i) {
    return { uri: i };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.string(r.uri);
  }
  e.is = n;
})(Pa || (Pa = {}));
var Oa;
(function(e) {
  function t(i, r) {
    return { uri: i, version: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.string(r.uri) && S.integer(r.version);
  }
  e.is = n;
})(Oa || (Oa = {}));
var kr;
(function(e) {
  function t(i, r) {
    return { uri: i, version: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.string(r.uri) && (r.version === null || S.integer(r.version));
  }
  e.is = n;
})(kr || (kr = {}));
var Ba;
(function(e) {
  function t(i, r, s, a) {
    return { uri: i, languageId: r, version: s, text: a };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.string(r.uri) && S.string(r.languageId) && S.integer(r.version) && S.string(r.text);
  }
  e.is = n;
})(Ba || (Ba = {}));
var Pt;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
  function t(n) {
    const i = n;
    return i === e.PlainText || i === e.Markdown;
  }
  e.is = t;
})(Pt || (Pt = {}));
var Hn;
(function(e) {
  function t(n) {
    const i = n;
    return S.objectLiteral(n) && Pt.is(i.kind) && S.string(i.value);
  }
  e.is = t;
})(Hn || (Hn = {}));
var Pe;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(Pe || (Pe = {}));
var de;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(de || (de = {}));
var Va;
(function(e) {
  e.Deprecated = 1;
})(Va || (Va = {}));
var $a;
(function(e) {
  function t(i, r, s) {
    return { newText: i, insert: r, replace: s };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r && S.string(r.newText) && C.is(r.insert) && C.is(r.replace);
  }
  e.is = n;
})($a || ($a = {}));
var qa;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(qa || (qa = {}));
var Ha;
(function(e) {
  function t(n) {
    const i = n;
    return i && (S.string(i.detail) || i.detail === void 0) && (S.string(i.description) || i.description === void 0);
  }
  e.is = t;
})(Ha || (Ha = {}));
var Tr;
(function(e) {
  function t(n) {
    return { label: n };
  }
  e.create = t;
})(Tr || (Tr = {}));
var Wa;
(function(e) {
  function t(n, i) {
    return { items: n || [], isIncomplete: !!i };
  }
  e.create = t;
})(Wa || (Wa = {}));
var Ai;
(function(e) {
  function t(i) {
    return i.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  e.fromPlainText = t;
  function n(i) {
    const r = i;
    return S.string(r) || S.objectLiteral(r) && S.string(r.language) && S.string(r.value);
  }
  e.is = n;
})(Ai || (Ai = {}));
var ja;
(function(e) {
  function t(n) {
    let i = n;
    return !!i && S.objectLiteral(i) && (Hn.is(i.contents) || Ai.is(i.contents) || S.typedArray(i.contents, Ai.is)) && (n.range === void 0 || C.is(n.range));
  }
  e.is = t;
})(ja || (ja = {}));
var Ga;
(function(e) {
  function t(n, i) {
    return i ? { label: n, documentation: i } : { label: n };
  }
  e.create = t;
})(Ga || (Ga = {}));
var za;
(function(e) {
  function t(n, i, ...r) {
    let s = { label: n };
    return S.defined(i) && (s.documentation = i), S.defined(r) ? s.parameters = r : s.parameters = [], s;
  }
  e.create = t;
})(za || (za = {}));
var Xa;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(Xa || (Xa = {}));
var Ja;
(function(e) {
  function t(n, i) {
    let r = { range: n };
    return S.number(i) && (r.kind = i), r;
  }
  e.create = t;
})(Ja || (Ja = {}));
var Ke;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(Ke || (Ke = {}));
var Ya;
(function(e) {
  e.Deprecated = 1;
})(Ya || (Ya = {}));
var Za;
(function(e) {
  function t(n, i, r, s, a) {
    let l = {
      name: n,
      kind: i,
      location: { uri: s, range: r }
    };
    return a && (l.containerName = a), l;
  }
  e.create = t;
})(Za || (Za = {}));
var Qa;
(function(e) {
  function t(n, i, r, s) {
    return s !== void 0 ? { name: n, kind: i, location: { uri: r, range: s } } : { name: n, kind: i, location: { uri: r } };
  }
  e.create = t;
})(Qa || (Qa = {}));
var Ka;
(function(e) {
  function t(i, r, s, a, l, o) {
    let u = {
      name: i,
      detail: r,
      kind: s,
      range: a,
      selectionRange: l
    };
    return o !== void 0 && (u.children = o), u;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && S.string(r.name) && S.number(r.kind) && C.is(r.range) && C.is(r.selectionRange) && (r.detail === void 0 || S.string(r.detail)) && (r.deprecated === void 0 || S.boolean(r.deprecated)) && (r.children === void 0 || Array.isArray(r.children)) && (r.tags === void 0 || Array.isArray(r.tags));
  }
  e.is = n;
})(Ka || (Ka = {}));
var Ca;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(Ca || (Ca = {}));
var xi;
(function(e) {
  e.Invoked = 1, e.Automatic = 2;
})(xi || (xi = {}));
var eo;
(function(e) {
  function t(i, r, s) {
    let a = { diagnostics: i };
    return r != null && (a.only = r), s != null && (a.triggerKind = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.typedArray(r.diagnostics, ht.is) && (r.only === void 0 || S.typedArray(r.only, S.string)) && (r.triggerKind === void 0 || r.triggerKind === xi.Invoked || r.triggerKind === xi.Automatic);
  }
  e.is = n;
})(eo || (eo = {}));
var to;
(function(e) {
  function t(i, r, s) {
    let a = { title: i }, l = !0;
    return typeof r == "string" ? (l = !1, a.kind = r) : mn.is(r) ? a.command = r : a.edit = r, l && s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && S.string(r.title) && (r.diagnostics === void 0 || S.typedArray(r.diagnostics, ht.is)) && (r.kind === void 0 || S.string(r.kind)) && (r.edit !== void 0 || r.command !== void 0) && (r.command === void 0 || mn.is(r.command)) && (r.isPreferred === void 0 || S.boolean(r.isPreferred)) && (r.edit === void 0 || Rr.is(r.edit));
  }
  e.is = n;
})(to || (to = {}));
var no;
(function(e) {
  function t(i, r) {
    let s = { range: i };
    return S.defined(r) && (s.data = r), s;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && C.is(r.range) && (S.undefined(r.command) || mn.is(r.command));
  }
  e.is = n;
})(no || (no = {}));
var io;
(function(e) {
  function t(i, r) {
    return { tabSize: i, insertSpaces: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && S.uinteger(r.tabSize) && S.boolean(r.insertSpaces);
  }
  e.is = n;
})(io || (io = {}));
var ro;
(function(e) {
  function t(i, r, s) {
    return { range: i, target: r, data: s };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.defined(r) && C.is(r.range) && (S.undefined(r.target) || S.string(r.target));
  }
  e.is = n;
})(ro || (ro = {}));
var Ei;
(function(e) {
  function t(i, r) {
    return { range: i, parent: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return S.objectLiteral(r) && C.is(r.range) && (r.parent === void 0 || e.is(r.parent));
  }
  e.is = n;
})(Ei || (Ei = {}));
var so;
(function(e) {
  e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
})(so || (so = {}));
var ao;
(function(e) {
  e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
})(ao || (ao = {}));
var oo;
(function(e) {
  function t(n) {
    const i = n;
    return S.objectLiteral(i) && (i.resultId === void 0 || typeof i.resultId == "string") && Array.isArray(i.data) && (i.data.length === 0 || typeof i.data[0] == "number");
  }
  e.is = t;
})(oo || (oo = {}));
var lo;
(function(e) {
  function t(i, r) {
    return { range: i, text: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && C.is(r.range) && S.string(r.text);
  }
  e.is = n;
})(lo || (lo = {}));
var uo;
(function(e) {
  function t(i, r, s) {
    return { range: i, variableName: r, caseSensitiveLookup: s };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && C.is(r.range) && S.boolean(r.caseSensitiveLookup) && (S.string(r.variableName) || r.variableName === void 0);
  }
  e.is = n;
})(uo || (uo = {}));
var co;
(function(e) {
  function t(i, r) {
    return { range: i, expression: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && C.is(r.range) && (S.string(r.expression) || r.expression === void 0);
  }
  e.is = n;
})(co || (co = {}));
var fo;
(function(e) {
  function t(i, r) {
    return { frameId: i, stoppedLocation: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.defined(r) && C.is(i.stoppedLocation);
  }
  e.is = n;
})(fo || (fo = {}));
var Sr;
(function(e) {
  e.Type = 1, e.Parameter = 2;
  function t(n) {
    return n === 1 || n === 2;
  }
  e.is = t;
})(Sr || (Sr = {}));
var Mr;
(function(e) {
  function t(i) {
    return { value: i };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && (r.tooltip === void 0 || S.string(r.tooltip) || Hn.is(r.tooltip)) && (r.location === void 0 || gn.is(r.location)) && (r.command === void 0 || mn.is(r.command));
  }
  e.is = n;
})(Mr || (Mr = {}));
var ho;
(function(e) {
  function t(i, r, s) {
    const a = { position: i, label: r };
    return s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return S.objectLiteral(r) && ce.is(r.position) && (S.string(r.label) || S.typedArray(r.label, Mr.is)) && (r.kind === void 0 || Sr.is(r.kind)) && r.textEdits === void 0 || S.typedArray(r.textEdits, it.is) && (r.tooltip === void 0 || S.string(r.tooltip) || Hn.is(r.tooltip)) && (r.paddingLeft === void 0 || S.boolean(r.paddingLeft)) && (r.paddingRight === void 0 || S.boolean(r.paddingRight));
  }
  e.is = n;
})(ho || (ho = {}));
var go;
(function(e) {
  function t(n) {
    return { kind: "snippet", value: n };
  }
  e.createSnippet = t;
})(go || (go = {}));
var mo;
(function(e) {
  function t(n, i, r, s) {
    return { insertText: n, filterText: i, range: r, command: s };
  }
  e.create = t;
})(mo || (mo = {}));
var po;
(function(e) {
  function t(n) {
    return { items: n };
  }
  e.create = t;
})(po || (po = {}));
var bo;
(function(e) {
  e.Invoked = 0, e.Automatic = 1;
})(bo || (bo = {}));
var _o;
(function(e) {
  function t(n, i) {
    return { range: n, text: i };
  }
  e.create = t;
})(_o || (_o = {}));
var wo;
(function(e) {
  function t(n, i) {
    return { triggerKind: n, selectedCompletionInfo: i };
  }
  e.create = t;
})(wo || (wo = {}));
var vo;
(function(e) {
  function t(n) {
    const i = n;
    return S.objectLiteral(i) && wr.is(i.uri) && S.string(i.name);
  }
  e.is = t;
})(vo || (vo = {}));
var Lo;
(function(e) {
  function t(s, a, l, o) {
    return new Z0(s, a, l, o);
  }
  e.create = t;
  function n(s) {
    let a = s;
    return !!(S.defined(a) && S.string(a.uri) && (S.undefined(a.languageId) || S.string(a.languageId)) && S.uinteger(a.lineCount) && S.func(a.getText) && S.func(a.positionAt) && S.func(a.offsetAt));
  }
  e.is = n;
  function i(s, a) {
    let l = s.getText(), o = r(a, (h, c) => {
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
  e.applyEdits = i;
  function r(s, a) {
    if (s.length <= 1)
      return s;
    const l = s.length / 2 | 0, o = s.slice(0, l), u = s.slice(l);
    r(o, a), r(u, a);
    let h = 0, c = 0, g = 0;
    for (; h < o.length && c < u.length; )
      a(o[h], u[c]) <= 0 ? s[g++] = o[h++] : s[g++] = u[c++];
    for (; h < o.length; )
      s[g++] = o[h++];
    for (; c < u.length; )
      s[g++] = u[c++];
    return s;
  }
})(Lo || (Lo = {}));
var Z0 = class {
  constructor(e, t, n, i) {
    this._uri = e, this._languageId = t, this._version = n, this._content = i, this._lineOffsets = void 0;
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
      for (let i = 0; i < t.length; i++) {
        n && (e.push(i), n = !1);
        let r = t.charAt(i);
        n = r === "\r" || r === `
`, r === "\r" && i + 1 < t.length && t.charAt(i + 1) === `
` && i++;
      }
      n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
    }
    return this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    let t = this.getLineOffsets(), n = 0, i = t.length;
    if (i === 0)
      return ce.create(0, e);
    for (; n < i; ) {
      let s = Math.floor((n + i) / 2);
      t[s] > e ? i = s : n = s + 1;
    }
    let r = n - 1;
    return ce.create(r, e - t[r]);
  }
  offsetAt(e) {
    let t = this.getLineOffsets();
    if (e.line >= t.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    let n = t[e.line], i = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
    return Math.max(Math.min(n + e.character, i), n);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
}, S;
(function(e) {
  const t = Object.prototype.toString;
  function n(d) {
    return typeof d < "u";
  }
  e.defined = n;
  function i(d) {
    return typeof d > "u";
  }
  e.undefined = i;
  function r(d) {
    return d === !0 || d === !1;
  }
  e.boolean = r;
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
})(S || (S = {}));
var No = class Ir {
  constructor(t, n, i, r) {
    this._uri = t, this._languageId = n, this._version = i, this._content = r, this._lineOffsets = void 0;
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
      const n = this.offsetAt(t.start), i = this.offsetAt(t.end);
      return this._content.substring(n, i);
    }
    return this._content;
  }
  update(t, n) {
    for (let i of t)
      if (Ir.isIncremental(i)) {
        const r = dl(i.range), s = this.offsetAt(r.start), a = this.offsetAt(r.end);
        this._content = this._content.substring(0, s) + i.text + this._content.substring(a, this._content.length);
        const l = Math.max(r.start.line, 0), o = Math.max(r.end.line, 0);
        let u = this._lineOffsets;
        const h = Ao(i.text, !1, s);
        if (o - l === h.length)
          for (let g = 0, d = h.length; g < d; g++)
            u[g + l + 1] = h[g];
        else
          h.length < 1e4 ? u.splice(l + 1, o - l, ...h) : this._lineOffsets = u = u.slice(0, l + 1).concat(h, u.slice(o + 1));
        const c = i.text.length - (a - s);
        if (c !== 0)
          for (let g = l + 1 + h.length, d = u.length; g < d; g++)
            u[g] = u[g] + c;
      } else if (Ir.isFull(i))
        this._content = i.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Ao(this._content, !0)), this._lineOffsets;
  }
  positionAt(t) {
    t = Math.max(Math.min(t, this._content.length), 0);
    let n = this.getLineOffsets(), i = 0, r = n.length;
    if (r === 0)
      return { line: 0, character: t };
    for (; i < r; ) {
      let a = Math.floor((i + r) / 2);
      n[a] > t ? r = a : i = a + 1;
    }
    let s = i - 1;
    return { line: s, character: t - n[s] };
  }
  offsetAt(t) {
    let n = this.getLineOffsets();
    if (t.line >= n.length)
      return this._content.length;
    if (t.line < 0)
      return 0;
    let i = n[t.line], r = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
    return Math.max(Math.min(i + t.character, r), i);
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
}, Ze;
(function(e) {
  function t(r, s, a, l) {
    return new No(r, s, a, l);
  }
  e.create = t;
  function n(r, s, a) {
    if (r instanceof No)
      return r.update(s, a), r;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  e.update = n;
  function i(r, s) {
    let a = r.getText(), l = Ur(s.map(Q0), (h, c) => {
      let g = h.range.start.line - c.range.start.line;
      return g === 0 ? h.range.start.character - c.range.start.character : g;
    }), o = 0;
    const u = [];
    for (const h of l) {
      let c = r.offsetAt(h.range.start);
      if (c < o)
        throw new Error("Overlapping edit");
      c > o && u.push(a.substring(o, c)), h.newText.length && u.push(h.newText), o = r.offsetAt(h.range.end);
    }
    return u.push(a.substr(o)), u.join("");
  }
  e.applyEdits = i;
})(Ze || (Ze = {}));
function Ur(e, t) {
  if (e.length <= 1)
    return e;
  const n = e.length / 2 | 0, i = e.slice(0, n), r = e.slice(n);
  Ur(i, t), Ur(r, t);
  let s = 0, a = 0, l = 0;
  for (; s < i.length && a < r.length; )
    t(i[s], r[a]) <= 0 ? e[l++] = i[s++] : e[l++] = r[a++];
  for (; s < i.length; )
    e[l++] = i[s++];
  for (; a < r.length; )
    e[l++] = r[a++];
  return e;
}
function Ao(e, t, n = 0) {
  const i = t ? [n] : [];
  for (let r = 0; r < e.length; r++) {
    let s = e.charCodeAt(r);
    (s === 13 || s === 10) && (s === 13 && r + 1 < e.length && e.charCodeAt(r + 1) === 10 && r++, i.push(n + r + 1));
  }
  return i;
}
function dl(e) {
  const t = e.start, n = e.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e;
}
function Q0(e) {
  const t = dl(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var te;
(function(e) {
  e[e.Undefined = 0] = "Undefined", e[e.EnumValueMismatch = 1] = "EnumValueMismatch", e[e.Deprecated = 2] = "Deprecated", e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 260] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 262] = "InvalidCharacter", e[e.PropertyExpected = 513] = "PropertyExpected", e[e.CommaExpected = 514] = "CommaExpected", e[e.ColonExpected = 515] = "ColonExpected", e[e.ValueExpected = 516] = "ValueExpected", e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected", e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected", e[e.TrailingComma = 519] = "TrailingComma", e[e.DuplicateKey = 520] = "DuplicateKey", e[e.CommentNotPermitted = 521] = "CommentNotPermitted", e[e.PropertyKeysMustBeDoublequoted = 528] = "PropertyKeysMustBeDoublequoted", e[e.SchemaResolveError = 768] = "SchemaResolveError", e[e.SchemaUnsupportedFeature = 769] = "SchemaUnsupportedFeature";
})(te || (te = {}));
var Ye;
(function(e) {
  e[e.v3 = 3] = "v3", e[e.v4 = 4] = "v4", e[e.v6 = 6] = "v6", e[e.v7 = 7] = "v7", e[e.v2019_09 = 19] = "v2019_09", e[e.v2020_12 = 20] = "v2020_12";
})(Ye || (Ye = {}));
var Dr;
(function(e) {
  e.LATEST = {
    textDocument: {
      completion: {
        completionItem: {
          documentationFormat: [Pt.Markdown, Pt.PlainText],
          commitCharactersSupport: !0,
          labelDetailsSupport: !0
        }
      }
    }
  };
})(Dr || (Dr = {}));
function D(...e) {
  const t = e[0];
  let n, i, r;
  if (typeof t == "string")
    n = t, i = t, e.splice(0, 1), r = !e || typeof e[0] != "object" ? e : e[0];
  else if (t instanceof Array) {
    const s = e.slice(1);
    if (t.length !== s.length + 1)
      throw new Error("expected a string as the first argument to l10n.t");
    let a = t[0];
    for (let l = 1; l < t.length; l++)
      a += `{${l - 1}}` + t[l];
    return D(a, ...s);
  } else
    i = t.message, n = i, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), r = t.args ?? {};
  return C0(i, r);
}
var K0 = /{([^}]+)}/g;
function C0(e, t) {
  return Object.keys(t).length === 0 ? e : e.replace(K0, (n, i) => t[i] ?? n);
}
var ef = {
  "color-hex": { errorMessage: D("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."), pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/ },
  "date-time": { errorMessage: D("String is not a RFC3339 date-time."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
  date: { errorMessage: D("String is not a RFC3339 date."), pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i },
  time: { errorMessage: D("String is not a RFC3339 time."), pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i },
  email: { errorMessage: D("String is not an e-mail address."), pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/ },
  hostname: { errorMessage: D("String is not a hostname."), pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i },
  ipv4: { errorMessage: D("String is not an IPv4 address."), pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/ },
  ipv6: { errorMessage: D("String is not an IPv6 address."), pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i }
}, Ot = class {
  constructor(e, t, n = 0) {
    this.offset = t, this.length = n, this.parent = e;
  }
  get children() {
    return [];
  }
  toString() {
    return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
  }
}, tf = class extends Ot {
  constructor(e, t) {
    super(e, t), this.type = "null", this.value = null;
  }
}, xo = class extends Ot {
  constructor(e, t, n) {
    super(e, n), this.type = "boolean", this.value = t;
  }
}, nf = class extends Ot {
  constructor(e, t) {
    super(e, t), this.type = "array", this.items = [];
  }
  get children() {
    return this.items;
  }
}, rf = class extends Ot {
  constructor(e, t) {
    super(e, t), this.type = "number", this.isInteger = !0, this.value = Number.NaN;
  }
}, Hi = class extends Ot {
  constructor(e, t, n) {
    super(e, t, n), this.type = "string", this.value = "";
  }
}, sf = class extends Ot {
  constructor(e, t, n) {
    super(e, t), this.type = "property", this.colonOffset = -1, this.keyNode = n;
  }
  get children() {
    return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
  }
}, af = class extends Ot {
  constructor(e, t) {
    super(e, t), this.type = "object", this.properties = [];
  }
  get children() {
    return this.properties;
  }
};
function De(e) {
  return tt(e) ? e ? {} : { not: {} } : e;
}
var Eo;
(function(e) {
  e[e.Key = 0] = "Key", e[e.Enum = 1] = "Enum";
})(Eo || (Eo = {}));
var of = {
  "http://json-schema.org/draft-03/schema#": Ye.v3,
  "http://json-schema.org/draft-04/schema#": Ye.v4,
  "http://json-schema.org/draft-06/schema#": Ye.v6,
  "http://json-schema.org/draft-07/schema#": Ye.v7,
  "https://json-schema.org/draft/2019-09/schema": Ye.v2019_09,
  "https://json-schema.org/draft/2020-12/schema": Ye.v2020_12
}, yo = class {
  constructor(e) {
    this.schemaDraft = e;
  }
}, lf = class pl {
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
    return (this.focusOffset === -1 || bl(t, this.focusOffset)) && t !== this.exclude;
  }
  newSub() {
    return new pl(-1, this.exclude);
  }
}, Wn = class {
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
Wn.instance = new Wn();
var xe = class {
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
        t.code === te.EnumValueMismatch && (t.message = D("Value is not accepted. Valid values: {0}.", this.enumValues.map((n) => JSON.stringify(n)).join(", ")));
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
function uf(e, t = []) {
  return new _l(e, t, []);
}
function Ft(e) {
  return X0(e);
}
function Fr(e) {
  return z0(e);
}
function bl(e, t, n = !1) {
  return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
var _l = class {
  constructor(e, t = [], n = []) {
    this.root = e, this.syntaxErrors = t, this.comments = n;
  }
  getNodeFromOffset(e, t = !1) {
    if (this.root)
      return G0(this.root, e, t);
  }
  visit(e) {
    if (this.root) {
      const t = (n) => {
        let i = e(n);
        const r = n.children;
        if (Array.isArray(r))
          for (let s = 0; s < r.length && i; s++)
            i = t(r[s]);
        return i;
      };
      t(this.root);
    }
  }
  validate(e, t, n = Oe.Warning, i) {
    if (this.root && t) {
      const r = new xe();
      return _e(this.root, t, r, Wn.instance, new yo(i ?? Ro(t))), r.problems.map((s) => {
        const a = C.create(e.positionAt(s.location.offset), e.positionAt(s.location.offset + s.location.length));
        return ht.create(a, s.message, s.severity ?? n, s.code);
      });
    }
  }
  getMatchingSchemas(e, t = -1, n) {
    if (this.root && e) {
      const i = new lf(t, n), r = Ro(e), s = new yo(r);
      return _e(this.root, e, new xe(), i, s), i.schemas;
    }
    return [];
  }
};
function Ro(e, t = Ye.v2020_12) {
  let n = e.$schema;
  return n ? of[n] ?? t : t;
}
function _e(e, t, n, i, r) {
  if (!e || !i.include(e))
    return;
  if (e.type === "property")
    return _e(e.valueNode, t, n, i, r);
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
  i.add({ node: s, schema: t });
  function a() {
    var x;
    function c(_) {
      return s.type === _ || _ === "integer" && s.type === "number" && s.isInteger;
    }
    if (Array.isArray(t.type) ? t.type.some(c) || n.problems.push({
      location: { offset: s.offset, length: s.length },
      message: t.errorMessage || D("Incorrect type. Expected one of {0}.", t.type.join(", "))
    }) : t.type && (c(t.type) || n.problems.push({
      location: { offset: s.offset, length: s.length },
      message: t.errorMessage || D('Incorrect type. Expected "{0}".', t.type)
    })), Array.isArray(t.allOf))
      for (const _ of t.allOf) {
        const E = new xe(), b = i.newSub();
        _e(s, De(_), E, b, r), n.merge(E), i.merge(b);
      }
    const g = De(t.not);
    if (g) {
      const _ = new xe(), E = i.newSub();
      _e(s, g, _, E, r), _.hasProblems() || n.problems.push({
        location: { offset: s.offset, length: s.length },
        message: t.errorMessage || D("Matches a schema that is not allowed.")
      });
      for (const b of E.schemas)
        b.inverted = !b.inverted, i.add(b);
    }
    const d = (_, E) => {
      const b = [];
      let A;
      for (const y of _) {
        const U = De(y), $ = new xe(), W = i.newSub();
        if (_e(s, U, $, W, r), $.hasProblems() || b.push(U), !A)
          A = { schema: U, validationResult: $, matchingSchemas: W };
        else if (!E && !$.hasProblems() && !A.validationResult.hasProblems())
          A.matchingSchemas.merge(W), A.validationResult.propertiesMatches += $.propertiesMatches, A.validationResult.propertiesValueMatches += $.propertiesValueMatches, A.validationResult.mergeProcessedProperties($);
        else {
          const F = $.compare(A.validationResult);
          F > 0 ? A = { schema: U, validationResult: $, matchingSchemas: W } : F === 0 && (A.matchingSchemas.merge(W), A.validationResult.mergeEnumValues($));
        }
      }
      return b.length > 1 && E && n.problems.push({
        location: { offset: s.offset, length: 1 },
        message: D("Matches multiple schemas when only one must validate.")
      }), A && (n.merge(A.validationResult), i.merge(A.matchingSchemas)), b.length;
    };
    Array.isArray(t.anyOf) && d(t.anyOf, !1), Array.isArray(t.oneOf) && d(t.oneOf, !0);
    const m = (_) => {
      const E = new xe(), b = i.newSub();
      _e(s, De(_), E, b, r), n.merge(E), i.merge(b);
    }, p = (_, E, b) => {
      const A = De(_), y = new xe(), U = i.newSub();
      _e(s, A, y, U, r), i.merge(U), n.mergeProcessedProperties(y), y.hasProblems() ? b && m(b) : E && m(E);
    }, w = De(t.if);
    if (w && p(w, De(t.then), De(t.else)), Array.isArray(t.enum)) {
      const _ = Ft(s);
      let E = !1;
      for (const b of t.enum)
        if (an(_, b)) {
          E = !0;
          break;
        }
      n.enumValues = t.enum, n.enumValueMatch = E, E || n.problems.push({
        location: { offset: s.offset, length: s.length },
        code: te.EnumValueMismatch,
        message: t.errorMessage || D("Value is not accepted. Valid values: {0}.", t.enum.map((b) => JSON.stringify(b)).join(", "))
      });
    }
    if (ze(t.const)) {
      const _ = Ft(s);
      an(_, t.const) ? n.enumValueMatch = !0 : (n.problems.push({
        location: { offset: s.offset, length: s.length },
        code: te.EnumValueMismatch,
        message: t.errorMessage || D("Value must be {0}.", JSON.stringify(t.const))
      }), n.enumValueMatch = !1), n.enumValues = [t.const];
    }
    let N = t.deprecationMessage;
    if (N || t.deprecated) {
      N = N || D("Value is deprecated");
      let _ = ((x = s.parent) == null ? void 0 : x.type) === "property" ? s.parent : s;
      n.problems.push({
        location: { offset: _.offset, length: _.length },
        severity: Oe.Warning,
        message: N,
        code: te.Deprecated
      });
    }
  }
  function l(c) {
    const g = c.value;
    function d(E) {
      var A;
      const b = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(E.toString());
      return b && {
        value: Number(b[1] + (b[2] || "")),
        multiplier: (((A = b[2]) == null ? void 0 : A.length) || 0) - (parseInt(b[3]) || 0)
      };
    }
    if (Ae(t.multipleOf)) {
      let E = -1;
      if (Number.isInteger(t.multipleOf))
        E = g % t.multipleOf;
      else {
        let b = d(t.multipleOf), A = d(g);
        if (b && A) {
          const y = 10 ** Math.abs(A.multiplier - b.multiplier);
          A.multiplier < b.multiplier ? A.value *= y : b.value *= y, E = A.value % b.value;
        }
      }
      E !== 0 && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: D("Value is not divisible by {0}.", t.multipleOf)
      });
    }
    function m(E, b) {
      if (Ae(b))
        return b;
      if (tt(b) && b)
        return E;
    }
    function p(E, b) {
      if (!tt(b) || !b)
        return E;
    }
    const w = m(t.minimum, t.exclusiveMinimum);
    Ae(w) && g <= w && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Value is below the exclusive minimum of {0}.", w)
    });
    const N = m(t.maximum, t.exclusiveMaximum);
    Ae(N) && g >= N && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Value is above the exclusive maximum of {0}.", N)
    });
    const x = p(t.minimum, t.exclusiveMinimum);
    Ae(x) && g < x && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Value is below the minimum of {0}.", x)
    });
    const _ = p(t.maximum, t.exclusiveMaximum);
    Ae(_) && g > _ && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Value is above the maximum of {0}.", _)
    });
  }
  function o(c) {
    if (Ae(t.minLength) && ya(c.value) < t.minLength && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("String is shorter than the minimum length of {0}.", t.minLength)
    }), Ae(t.maxLength) && ya(c.value) > t.maxLength && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("String is longer than the maximum length of {0}.", t.maxLength)
    }), ml(t.pattern)) {
      const g = Li(t.pattern);
      g != null && g.test(c.value) || n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.patternErrorMessage || t.errorMessage || D('String does not match the pattern of "{0}".', t.pattern)
      });
    }
    if (t.format)
      switch (t.format) {
        case "uri":
        case "uri-reference":
          {
            let d;
            if (!c.value)
              d = D("URI expected.");
            else {
              const m = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(c.value);
              m ? !m[2] && t.format === "uri" && (d = D("URI with a scheme is expected.")) : d = D("URI is expected.");
            }
            d && n.problems.push({
              location: { offset: c.offset, length: c.length },
              message: t.patternErrorMessage || t.errorMessage || D("String is not a URI: {0}", d)
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
          const g = ef[t.format];
          (!c.value || !g.pattern.exec(c.value)) && n.problems.push({
            location: { offset: c.offset, length: c.length },
            message: t.patternErrorMessage || t.errorMessage || g.errorMessage
          });
      }
  }
  function u(c) {
    let g, d;
    r.schemaDraft >= Ye.v2020_12 ? (g = t.prefixItems, d = Array.isArray(t.items) ? void 0 : t.items) : (g = Array.isArray(t.items) ? t.items : void 0, d = Array.isArray(t.items) ? t.additionalItems : t.items);
    let m = 0;
    if (g !== void 0) {
      const N = Math.min(g.length, c.items.length);
      for (; m < N; m++) {
        const x = g[m], _ = De(x), E = new xe(), b = c.items[m];
        b && (_e(b, _, E, i, r), n.mergePropertyMatch(E)), n.processedProperties.add(String(m));
      }
    }
    if (d !== void 0 && m < c.items.length)
      if (typeof d == "boolean")
        for (d === !1 && n.problems.push({
          location: { offset: c.offset, length: c.length },
          message: D("Array has too many items according to schema. Expected {0} or fewer.", m)
        }); m < c.items.length; m++)
          n.processedProperties.add(String(m)), n.propertiesValueMatches++;
      else
        for (; m < c.items.length; m++) {
          const N = new xe();
          _e(c.items[m], d, N, i, r), n.mergePropertyMatch(N), n.processedProperties.add(String(m));
        }
    const p = De(t.contains);
    if (p) {
      let N = 0;
      for (let x = 0; x < c.items.length; x++) {
        const _ = c.items[x], E = new xe();
        _e(_, p, E, Wn.instance, r), E.hasProblems() || (N++, r.schemaDraft >= Ye.v2020_12 && n.processedProperties.add(String(x)));
      }
      N === 0 && !Ae(t.minContains) && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.errorMessage || D("Array does not contain required item.")
      }), Ae(t.minContains) && N < t.minContains && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.errorMessage || D("Array has too few items that match the contains contraint. Expected {0} or more.", t.minContains)
      }), Ae(t.maxContains) && N > t.maxContains && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: t.errorMessage || D("Array has too many items that match the contains contraint. Expected {0} or less.", t.maxContains)
      });
    }
    const w = t.unevaluatedItems;
    if (w !== void 0)
      for (let N = 0; N < c.items.length; N++) {
        if (!n.processedProperties.has(String(N)))
          if (w === !1)
            n.problems.push({
              location: { offset: c.offset, length: c.length },
              message: D("Item does not match any validation rule from the array.")
            });
          else {
            const x = new xe();
            _e(c.items[N], t.unevaluatedItems, x, i, r), n.mergePropertyMatch(x);
          }
        n.processedProperties.add(String(N)), n.propertiesValueMatches++;
      }
    if (Ae(t.minItems) && c.items.length < t.minItems && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Array has too few items. Expected {0} or more.", t.minItems)
    }), Ae(t.maxItems) && c.items.length > t.maxItems && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Array has too many items. Expected {0} or fewer.", t.maxItems)
    }), t.uniqueItems === !0) {
      let N = function() {
        for (let _ = 0; _ < x.length - 1; _++) {
          const E = x[_];
          for (let b = _ + 1; b < x.length; b++)
            if (an(E, x[b]))
              return !0;
        }
        return !1;
      };
      const x = Ft(c);
      N() && n.problems.push({
        location: { offset: c.offset, length: c.length },
        message: D("Array has duplicate items.")
      });
    }
  }
  function h(c) {
    const g = /* @__PURE__ */ Object.create(null), d = /* @__PURE__ */ new Set();
    for (const _ of c.properties) {
      const E = _.keyNode.value;
      g[E] = _.valueNode, d.add(E);
    }
    if (Array.isArray(t.required)) {
      for (const _ of t.required)
        if (!g[_]) {
          const E = c.parent && c.parent.type === "property" && c.parent.keyNode, b = E ? { offset: E.offset, length: E.length } : { offset: c.offset, length: 1 };
          n.problems.push({
            location: b,
            message: D('Missing property "{0}".', _)
          });
        }
    }
    const m = (_) => {
      d.delete(_), n.processedProperties.add(_);
    };
    if (t.properties)
      for (const _ of Object.keys(t.properties)) {
        m(_);
        const E = t.properties[_], b = g[_];
        if (b)
          if (tt(E))
            if (E)
              n.propertiesMatches++, n.propertiesValueMatches++;
            else {
              const A = b.parent;
              n.problems.push({
                location: { offset: A.keyNode.offset, length: A.keyNode.length },
                message: t.errorMessage || D("Property {0} is not allowed.", _)
              });
            }
          else {
            const A = new xe();
            _e(b, E, A, i, r), n.mergePropertyMatch(A);
          }
      }
    if (t.patternProperties)
      for (const _ of Object.keys(t.patternProperties)) {
        const E = Li(_);
        if (E) {
          const b = [];
          for (const A of d)
            if (E.test(A)) {
              b.push(A);
              const y = g[A];
              if (y) {
                const U = t.patternProperties[_];
                if (tt(U))
                  if (U)
                    n.propertiesMatches++, n.propertiesValueMatches++;
                  else {
                    const $ = y.parent;
                    n.problems.push({
                      location: { offset: $.keyNode.offset, length: $.keyNode.length },
                      message: t.errorMessage || D("Property {0} is not allowed.", A)
                    });
                  }
                else {
                  const $ = new xe();
                  _e(y, U, $, i, r), n.mergePropertyMatch($);
                }
              }
            }
          b.forEach(m);
        }
      }
    const p = t.additionalProperties;
    if (p !== void 0)
      for (const _ of d) {
        m(_);
        const E = g[_];
        if (E) {
          if (p === !1) {
            const b = E.parent;
            n.problems.push({
              location: { offset: b.keyNode.offset, length: b.keyNode.length },
              message: t.errorMessage || D("Property {0} is not allowed.", _)
            });
          } else if (p !== !0) {
            const b = new xe();
            _e(E, p, b, i, r), n.mergePropertyMatch(b);
          }
        }
      }
    const w = t.unevaluatedProperties;
    if (w !== void 0) {
      const _ = [];
      for (const E of d)
        if (!n.processedProperties.has(E)) {
          _.push(E);
          const b = g[E];
          if (b) {
            if (w === !1) {
              const A = b.parent;
              n.problems.push({
                location: { offset: A.keyNode.offset, length: A.keyNode.length },
                message: t.errorMessage || D("Property {0} is not allowed.", E)
              });
            } else if (w !== !0) {
              const A = new xe();
              _e(b, w, A, i, r), n.mergePropertyMatch(A);
            }
          }
        }
      _.forEach(m);
    }
    if (Ae(t.maxProperties) && c.properties.length > t.maxProperties && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Object has more properties than limit of {0}.", t.maxProperties)
    }), Ae(t.minProperties) && c.properties.length < t.minProperties && n.problems.push({
      location: { offset: c.offset, length: c.length },
      message: D("Object has fewer properties than the required number of {0}", t.minProperties)
    }), t.dependentRequired)
      for (const _ in t.dependentRequired) {
        const E = g[_], b = t.dependentRequired[_];
        E && Array.isArray(b) && x(_, b);
      }
    if (t.dependentSchemas)
      for (const _ in t.dependentSchemas) {
        const E = g[_], b = t.dependentSchemas[_];
        E && vt(b) && x(_, b);
      }
    if (t.dependencies)
      for (const _ in t.dependencies)
        g[_] && x(_, t.dependencies[_]);
    const N = De(t.propertyNames);
    if (N)
      for (const _ of c.properties) {
        const E = _.keyNode;
        E && _e(E, N, n, Wn.instance, r);
      }
    function x(_, E) {
      if (Array.isArray(E))
        for (const b of E)
          g[b] ? n.propertiesValueMatches++ : n.problems.push({
            location: { offset: c.offset, length: c.length },
            message: D("Object is missing property {0} required by property {1}.", b, _)
          });
      else {
        const b = De(E);
        if (b) {
          const A = new xe();
          _e(c, b, A, i, r), n.mergePropertyMatch(A);
        }
      }
    }
  }
}
function cf(e, t) {
  const n = [];
  let i = -1;
  const r = e.getText(), s = Dt(r, !1), a = t && t.collectComments ? [] : void 0;
  function l() {
    for (; ; ) {
      const A = s.scan();
      switch (h(), A) {
        case 12:
        case 13:
          Array.isArray(a) && a.push(C.create(e.positionAt(s.getTokenOffset()), e.positionAt(s.getTokenOffset() + s.getTokenLength())));
          break;
        case 15:
        case 14:
          break;
        default:
          return A;
      }
    }
  }
  function o(A, y, U, $, W = Oe.Error) {
    if (n.length === 0 || U !== i) {
      const F = C.create(e.positionAt(U), e.positionAt($));
      n.push(ht.create(F, A, W, y, e.languageId)), i = U;
    }
  }
  function u(A, y, U = void 0, $ = [], W = []) {
    let F = s.getTokenOffset(), T = s.getTokenOffset() + s.getTokenLength();
    if (F === T && F > 0) {
      for (F--; F > 0 && /\s/.test(r.charAt(F)); )
        F--;
      T = F + 1;
    }
    if (o(A, y, F, T), U && c(U, !1), $.length + W.length > 0) {
      let M = s.getToken();
      for (; M !== 17; ) {
        if ($.indexOf(M) !== -1) {
          l();
          break;
        } else if (W.indexOf(M) !== -1)
          break;
        M = l();
      }
    }
    return U;
  }
  function h() {
    switch (s.getTokenError()) {
      case 4:
        return u(D("Invalid unicode sequence in string."), te.InvalidUnicode), !0;
      case 5:
        return u(D("Invalid escape character in string."), te.InvalidEscapeCharacter), !0;
      case 3:
        return u(D("Unexpected end of number."), te.UnexpectedEndOfNumber), !0;
      case 1:
        return u(D("Unexpected end of comment."), te.UnexpectedEndOfComment), !0;
      case 2:
        return u(D("Unexpected end of string."), te.UnexpectedEndOfString), !0;
      case 6:
        return u(D("Invalid characters in string. Control characters must be escaped."), te.InvalidCharacter), !0;
    }
    return !1;
  }
  function c(A, y) {
    return A.length = s.getTokenOffset() + s.getTokenLength() - A.offset, y && l(), A;
  }
  function g(A) {
    if (s.getToken() !== 3)
      return;
    const y = new nf(A, s.getTokenOffset());
    l();
    let U = !1;
    for (; s.getToken() !== 4 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        U || u(D("Value expected"), te.ValueExpected);
        const W = s.getTokenOffset();
        if (l(), s.getToken() === 4) {
          U && o(D("Trailing comma"), te.TrailingComma, W, W + 1);
          continue;
        }
      } else U && u(D("Expected comma"), te.CommaExpected);
      const $ = _(y);
      $ ? y.items.push($) : u(D("Value expected"), te.ValueExpected, void 0, [], [
        4,
        5
        /* Json.SyntaxKind.CommaToken */
      ]), U = !0;
    }
    return s.getToken() !== 4 ? u(D("Expected comma or closing bracket"), te.CommaOrCloseBacketExpected, y) : c(y, !0);
  }
  const d = new Hi(void 0, 0, 0);
  function m(A, y) {
    const U = new sf(A, s.getTokenOffset(), d);
    let $ = w(U);
    if (!$)
      if (s.getToken() === 16) {
        u(D("Property keys must be doublequoted"), te.PropertyKeysMustBeDoublequoted);
        const F = new Hi(U, s.getTokenOffset(), s.getTokenLength());
        F.value = s.getTokenValue(), $ = F, l();
      } else
        return;
    if (U.keyNode = $, $.value !== "//") {
      const F = y[$.value];
      F ? (o(D("Duplicate object key"), te.DuplicateKey, U.keyNode.offset, U.keyNode.offset + U.keyNode.length, Oe.Warning), vt(F) && o(D("Duplicate object key"), te.DuplicateKey, F.keyNode.offset, F.keyNode.offset + F.keyNode.length, Oe.Warning), y[$.value] = !0) : y[$.value] = U;
    }
    if (s.getToken() === 6)
      U.colonOffset = s.getTokenOffset(), l();
    else if (u(D("Colon expected"), te.ColonExpected), s.getToken() === 10 && e.positionAt($.offset + $.length).line < e.positionAt(s.getTokenOffset()).line)
      return U.length = $.length, U;
    const W = _(U);
    return W ? (U.valueNode = W, U.length = W.offset + W.length - U.offset, U) : u(D("Value expected"), te.ValueExpected, U, [], [
      2,
      5
      /* Json.SyntaxKind.CommaToken */
    ]);
  }
  function p(A) {
    if (s.getToken() !== 1)
      return;
    const y = new af(A, s.getTokenOffset()), U = /* @__PURE__ */ Object.create(null);
    l();
    let $ = !1;
    for (; s.getToken() !== 2 && s.getToken() !== 17; ) {
      if (s.getToken() === 5) {
        $ || u(D("Property expected"), te.PropertyExpected);
        const F = s.getTokenOffset();
        if (l(), s.getToken() === 2) {
          $ && o(D("Trailing comma"), te.TrailingComma, F, F + 1);
          continue;
        }
      } else $ && u(D("Expected comma"), te.CommaExpected);
      const W = m(y, U);
      W ? y.properties.push(W) : u(D("Property expected"), te.PropertyExpected, void 0, [], [
        2,
        5
        /* Json.SyntaxKind.CommaToken */
      ]), $ = !0;
    }
    return s.getToken() !== 2 ? u(D("Expected comma or closing brace"), te.CommaOrCloseBraceExpected, y) : c(y, !0);
  }
  function w(A) {
    if (s.getToken() !== 10)
      return;
    const y = new Hi(A, s.getTokenOffset());
    return y.value = s.getTokenValue(), c(y, !0);
  }
  function N(A) {
    if (s.getToken() !== 11)
      return;
    const y = new rf(A, s.getTokenOffset());
    if (s.getTokenError() === 0) {
      const U = s.getTokenValue();
      try {
        const $ = JSON.parse(U);
        if (!Ae($))
          return u(D("Invalid number format."), te.Undefined, y);
        y.value = $;
      } catch {
        return u(D("Invalid number format."), te.Undefined, y);
      }
      y.isInteger = U.indexOf(".") === -1;
    }
    return c(y, !0);
  }
  function x(A) {
    switch (s.getToken()) {
      case 7:
        return c(new tf(A, s.getTokenOffset()), !0);
      case 8:
        return c(new xo(A, !0, s.getTokenOffset()), !0);
      case 9:
        return c(new xo(A, !1, s.getTokenOffset()), !0);
      default:
        return;
    }
  }
  function _(A) {
    return g(A) || p(A) || w(A) || N(A) || x(A);
  }
  let E;
  return l() !== 17 && (E = _(E), E ? s.getToken() !== 17 && u(D("End of file expected."), te.Undefined) : u(D("Expected a JSON object, array or literal."), te.Undefined)), new _l(E, n, a);
}
function Pr(e, t, n) {
  if (e !== null && typeof e == "object") {
    const i = t + "	";
    if (Array.isArray(e)) {
      if (e.length === 0)
        return "[]";
      let r = `[
`;
      for (let s = 0; s < e.length; s++)
        r += i + Pr(e[s], i, n), s < e.length - 1 && (r += ","), r += `
`;
      return r += t + "]", r;
    } else {
      const r = Object.keys(e);
      if (r.length === 0)
        return "{}";
      let s = `{
`;
      for (let a = 0; a < r.length; a++) {
        const l = r[a];
        s += i + JSON.stringify(l) + ": " + Pr(e[l], i, n), a < r.length - 1 && (s += ","), s += `
`;
      }
      return s += t + "}", s;
    }
  }
  return n(e);
}
var ff = class {
  constructor(e, t = [], n = Promise, i = {}) {
    this.schemaService = e, this.contributions = t, this.promiseConstructor = n, this.clientCapabilities = i;
  }
  doResolve(e) {
    for (let t = this.contributions.length - 1; t >= 0; t--) {
      const n = this.contributions[t].resolveCompletion;
      if (n) {
        const i = n(e);
        if (i)
          return i;
      }
    }
    return this.promiseConstructor.resolve(e);
  }
  doComplete(e, t, n) {
    const i = {
      items: [],
      isIncomplete: !1
    }, r = e.getText(), s = e.offsetAt(t);
    let a = n.getNodeFromOffset(s, !0);
    if (this.isInComment(e, a ? a.offset : 0, s))
      return Promise.resolve(i);
    if (a && s === a.offset + a.length && s > 0) {
      const c = r[s - 1];
      (a.type === "object" && c === "}" || a.type === "array" && c === "]") && (a = a.parent);
    }
    const l = this.getCurrentWord(e, s);
    let o;
    if (a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null"))
      o = C.create(e.positionAt(a.offset), e.positionAt(a.offset + a.length));
    else {
      let c = s - l.length;
      c > 0 && r[c - 1] === '"' && c--, o = C.create(e.positionAt(c), t);
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
          c.textEdit = it.replace(o, c.insertText), c.label = g, u.set(g, c), i.items.push(c);
        }
      },
      setAsIncomplete: () => {
        i.isIncomplete = !0;
      },
      error: (c) => {
        console.error(c);
      },
      getNumberOfProposals: () => i.items.length
    };
    return this.schemaService.getSchemaForResource(e.uri, n).then((c) => {
      const g = [];
      let d = !0, m = "", p;
      if (a && a.type === "string") {
        const N = a.parent;
        N && N.type === "property" && N.keyNode === a && (d = !N.valueNode, p = N, m = r.substr(a.offset + 1, a.length - 2), N && (a = N.parent));
      }
      if (a && a.type === "object") {
        if (a.offset === s)
          return i;
        a.properties.forEach((E) => {
          (!p || p !== E) && u.set(E.keyNode.value, Tr.create("__"));
        });
        let x = "";
        d && (x = this.evaluateSeparatorAfter(e, e.offsetAt(o.end))), c ? this.getPropertyCompletions(c, n, a, d, x, h) : this.getSchemaLessPropertyCompletions(n, a, m, h);
        const _ = Fr(a);
        this.contributions.forEach((E) => {
          const b = E.collectPropertyCompletions(e.uri, _, l, d, x === "", h);
          b && g.push(b);
        }), !c && l.length > 0 && r.charAt(s - l.length - 1) !== '"' && (h.add({
          kind: Pe.Property,
          label: this.getLabelForValue(l),
          insertText: this.getInsertTextForProperty(l, void 0, !1, x),
          insertTextFormat: de.Snippet,
          documentation: ""
        }), h.setAsIncomplete());
      }
      const w = {};
      return c ? this.getValueCompletions(c, n, a, s, e, h, w) : this.getSchemaLessValueCompletions(n, a, s, e, h), this.contributions.length > 0 && this.getContributedValueCompletions(n, a, s, e, h, g), this.promiseConstructor.all(g).then(() => {
        if (h.getNumberOfProposals() === 0) {
          let N = s;
          a && (a.type === "string" || a.type === "number" || a.type === "boolean" || a.type === "null") && (N = a.offset + a.length);
          const x = this.evaluateSeparatorAfter(e, N);
          this.addFillerValueCompletions(w, x, h);
        }
        return i;
      });
    });
  }
  getPropertyCompletions(e, t, n, i, r, s) {
    t.getMatchingSchemas(e.schema, n.offset).forEach((l) => {
      if (l.node === n && !l.inverted) {
        const o = l.schema.properties;
        o && Object.keys(o).forEach((h) => {
          const c = o[h];
          if (typeof c == "object" && !c.deprecationMessage && !c.doNotSuggest) {
            const g = {
              kind: Pe.Property,
              label: h,
              insertText: this.getInsertTextForProperty(h, c, i, r),
              insertTextFormat: de.Snippet,
              filterText: this.getFilterTextForValue(h),
              documentation: this.fromMarkup(c.markdownDescription) || c.description || ""
            };
            c.suggestSortText !== void 0 && (g.sortText = c.suggestSortText), g.insertText && qn(g.insertText, `$1${r}`) && (g.command = {
              title: "Suggest",
              command: "editor.action.triggerSuggest"
            }), s.add(g);
          }
        });
        const u = l.schema.propertyNames;
        if (typeof u == "object" && !u.deprecationMessage && !u.doNotSuggest) {
          const h = (c, g = void 0) => {
            const d = {
              kind: Pe.Property,
              label: c,
              insertText: this.getInsertTextForProperty(c, void 0, i, r),
              insertTextFormat: de.Snippet,
              filterText: this.getFilterTextForValue(c),
              documentation: g || this.fromMarkup(u.markdownDescription) || u.description || ""
            };
            u.suggestSortText !== void 0 && (d.sortText = u.suggestSortText), d.insertText && qn(d.insertText, `$1${r}`) && (d.command = {
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
  getSchemaLessPropertyCompletions(e, t, n, i) {
    const r = (s) => {
      s.properties.forEach((a) => {
        const l = a.keyNode.value;
        i.add({
          kind: Pe.Property,
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
        e.visit((a) => (a.type === "property" && a !== t.parent && a.keyNode.value === s && a.valueNode && a.valueNode.type === "object" && r(a.valueNode), !0));
      } else t.parent.type === "array" && t.parent.items.forEach((s) => {
        s.type === "object" && s !== t && r(s);
      });
    else t.type === "object" && i.add({
      kind: Pe.Property,
      label: "$schema",
      insertText: this.getInsertTextForProperty("$schema", void 0, !0, ""),
      insertTextFormat: de.Snippet,
      documentation: "",
      filterText: this.getFilterTextForValue("$schema")
    });
  }
  getSchemaLessValueCompletions(e, t, n, i, r) {
    let s = n;
    if (t && (t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") && (s = t.offset + t.length, t = t.parent), !t) {
      r.add({
        kind: this.getSuggestionKind("object"),
        label: "Empty object",
        insertText: this.getInsertTextForValue({}, ""),
        insertTextFormat: de.Snippet,
        documentation: ""
      }), r.add({
        kind: this.getSuggestionKind("array"),
        label: "Empty array",
        insertText: this.getInsertTextForValue([], ""),
        insertTextFormat: de.Snippet,
        documentation: ""
      });
      return;
    }
    const a = this.evaluateSeparatorAfter(i, s), l = (o) => {
      o.parent && !bl(o.parent, n, !0) && r.add({
        kind: this.getSuggestionKind(o.type),
        label: this.getLabelTextForMatchingNode(o, i),
        insertText: this.getInsertTextForMatchingNode(o, i, a),
        insertTextFormat: de.Snippet,
        documentation: ""
      }), o.type === "boolean" && this.addBooleanValueCompletion(!o.value, a, r);
    };
    if (t.type === "property" && n > (t.colonOffset || 0)) {
      const o = t.valueNode;
      if (o && (n > o.offset + o.length || o.type === "object" || o.type === "array"))
        return;
      const u = t.keyNode.value;
      e.visit((h) => (h.type === "property" && h.keyNode.value === u && h.valueNode && l(h.valueNode), !0)), u === "$schema" && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(a, r);
    }
    if (t.type === "array")
      if (t.parent && t.parent.type === "property") {
        const o = t.parent.keyNode.value;
        e.visit((u) => (u.type === "property" && u.keyNode.value === o && u.valueNode && u.valueNode.type === "array" && u.valueNode.items.forEach(l), !0));
      } else
        t.items.forEach(l);
  }
  getValueCompletions(e, t, n, i, r, s, a) {
    let l = i, o, u;
    if (n && (n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null") && (l = n.offset + n.length, u = n, n = n.parent), !n) {
      this.addSchemaValueCompletions(e.schema, "", s, a);
      return;
    }
    if (n.type === "property" && i > (n.colonOffset || 0)) {
      const h = n.valueNode;
      if (h && i > h.offset + h.length)
        return;
      o = n.keyNode.value, n = n.parent;
    }
    if (n && (o !== void 0 || n.type === "array")) {
      const h = this.evaluateSeparatorAfter(r, l), c = t.getMatchingSchemas(e.schema, n.offset, u);
      for (const g of c)
        if (g.node === n && !g.inverted && g.schema) {
          if (n.type === "array" && g.schema.items) {
            let d = s;
            if (g.schema.uniqueItems) {
              const m = /* @__PURE__ */ new Set();
              n.children.forEach((p) => {
                p.type !== "array" && p.type !== "object" && m.add(this.getLabelForValue(Ft(p)));
              }), d = {
                ...s,
                add(p) {
                  m.has(p.label) || s.add(p);
                }
              };
            }
            if (Array.isArray(g.schema.items)) {
              const m = this.findItemAtOffset(n, r, i);
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
                const p = Li(m);
                if (p != null && p.test(o)) {
                  d = !0;
                  const w = g.schema.patternProperties[m];
                  this.addSchemaValueCompletions(w, h, s, a);
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
  getContributedValueCompletions(e, t, n, i, r, s) {
    if (!t)
      this.contributions.forEach((a) => {
        const l = a.collectDefaultCompletions(i.uri, r);
        l && s.push(l);
      });
    else if ((t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") && (t = t.parent), t && t.type === "property" && n > (t.colonOffset || 0)) {
      const a = t.keyNode.value, l = t.valueNode;
      if ((!l || n <= l.offset + l.length) && t.parent) {
        const o = Fr(t.parent);
        this.contributions.forEach((u) => {
          const h = u.collectValueCompletions(i.uri, o, a, r);
          h && s.push(h);
        });
      }
    }
  }
  addSchemaValueCompletions(e, t, n, i) {
    typeof e == "object" && (this.addEnumValueCompletions(e, t, n), this.addDefaultValueCompletions(e, t, n), this.collectTypes(e, i), Array.isArray(e.allOf) && e.allOf.forEach((r) => this.addSchemaValueCompletions(r, t, n, i)), Array.isArray(e.anyOf) && e.anyOf.forEach((r) => this.addSchemaValueCompletions(r, t, n, i)), Array.isArray(e.oneOf) && e.oneOf.forEach((r) => this.addSchemaValueCompletions(r, t, n, i)));
  }
  addDefaultValueCompletions(e, t, n, i = 0) {
    let r = !1;
    if (ze(e.default)) {
      let s = e.type, a = e.default;
      for (let o = i; o > 0; o--)
        a = [a], s = "array";
      const l = {
        kind: this.getSuggestionKind(s),
        label: this.getLabelForValue(a),
        insertText: this.getInsertTextForValue(a, t),
        insertTextFormat: de.Snippet
      };
      this.doesSupportsLabelDetails() ? l.labelDetails = { description: D("Default value") } : l.detail = D("Default value"), n.add(l), r = !0;
    }
    Array.isArray(e.examples) && e.examples.forEach((s) => {
      let a = e.type, l = s;
      for (let o = i; o > 0; o--)
        l = [l], a = "array";
      n.add({
        kind: this.getSuggestionKind(a),
        label: this.getLabelForValue(l),
        insertText: this.getInsertTextForValue(l, t),
        insertTextFormat: de.Snippet
      }), r = !0;
    }), Array.isArray(e.defaultSnippets) && e.defaultSnippets.forEach((s) => {
      let a = e.type, l = s.body, o = s.label, u, h;
      if (ze(l)) {
        e.type;
        for (let c = i; c > 0; c--)
          l = [l];
        u = this.getInsertTextForSnippetValue(l, t), h = this.getFilterTextForSnippetValue(l), o = o || this.getLabelForSnippetValue(l);
      } else if (typeof s.bodyText == "string") {
        let c = "", g = "", d = "";
        for (let m = i; m > 0; m--)
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
        insertTextFormat: de.Snippet,
        filterText: h
      }), r = !0;
    }), !r && typeof e.items == "object" && !Array.isArray(e.items) && i < 5 && this.addDefaultValueCompletions(e.items, t, n, i + 1);
  }
  addEnumValueCompletions(e, t, n) {
    if (ze(e.const) && n.add({
      kind: this.getSuggestionKind(e.type),
      label: this.getLabelForValue(e.const),
      insertText: this.getInsertTextForValue(e.const, t),
      insertTextFormat: de.Snippet,
      documentation: this.fromMarkup(e.markdownDescription) || e.description
    }), Array.isArray(e.enum))
      for (let i = 0, r = e.enum.length; i < r; i++) {
        const s = e.enum[i];
        let a = this.fromMarkup(e.markdownDescription) || e.description;
        e.markdownEnumDescriptions && i < e.markdownEnumDescriptions.length && this.doesSupportMarkdown() ? a = this.fromMarkup(e.markdownEnumDescriptions[i]) : e.enumDescriptions && i < e.enumDescriptions.length && (a = e.enumDescriptions[i]), n.add({
          kind: this.getSuggestionKind(e.type),
          label: this.getLabelForValue(s),
          insertText: this.getInsertTextForValue(s, t),
          insertTextFormat: de.Snippet,
          documentation: a
        });
      }
  }
  collectTypes(e, t) {
    if (Array.isArray(e.enum) || ze(e.const))
      return;
    const n = e.type;
    Array.isArray(n) ? n.forEach((i) => t[i] = !0) : n && (t[n] = !0);
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
    this.schemaService.getRegisteredSchemaIds((i) => i === "http" || i === "https").forEach((i) => {
      i.startsWith("http://json-schema.org/draft-") && (i = i + "#"), t.add({
        kind: Pe.Module,
        label: this.getLabelForValue(i),
        filterText: this.getFilterTextForValue(i),
        insertText: this.getInsertTextForValue(i, e),
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
    return Pr(e, "", (i) => typeof i == "string" && i[0] === "^" ? i.substr(1) : JSON.stringify(i)) + t;
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
      return Pe.Value;
    switch (e) {
      case "string":
        return Pe.Value;
      case "object":
        return Pe.Module;
      case "property":
        return Pe.Property;
      default:
        return Pe.Value;
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
        const i = t.getText().substr(e.offset, e.length) + n;
        return this.getInsertTextForPlainText(i);
    }
  }
  getInsertTextForProperty(e, t, n, i) {
    const r = this.getInsertTextForValue(e, "");
    if (!n)
      return r;
    const s = r + ": ";
    let a, l = 0;
    if (t) {
      if (Array.isArray(t.defaultSnippets)) {
        if (t.defaultSnippets.length === 1) {
          const o = t.defaultSnippets[0].body;
          ze(o) && (a = this.getInsertTextForSnippetValue(o, ""));
        }
        l += t.defaultSnippets.length;
      }
      if (t.enum && (!a && t.enum.length === 1 && (a = this.getInsertTextForGuessedValue(t.enum[0], "")), l += t.enum.length), ze(t.const) && (a || (a = this.getInsertTextForGuessedValue(t.const, "")), l++), ze(t.default) && (a || (a = this.getInsertTextForGuessedValue(t.default, "")), l++), Array.isArray(t.examples) && t.examples.length && (a || (a = this.getInsertTextForGuessedValue(t.examples[0], "")), l += t.examples.length), l === 0) {
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
            return r;
        }
      }
    }
    return (!a || l > 1) && (a = "$1"), s + a + i;
  }
  getCurrentWord(e, t) {
    let n = t - 1;
    const i = e.getText();
    for (; n >= 0 && ` 	
\r\v":{[,]}`.indexOf(i.charAt(n)) === -1; )
      n--;
    return i.substring(n + 1, t);
  }
  evaluateSeparatorAfter(e, t) {
    const n = Dt(e.getText(), !0);
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
    const i = Dt(t.getText(), !0), r = e.items;
    for (let s = r.length - 1; s >= 0; s--) {
      const a = r[s];
      if (n > a.offset + a.length)
        return i.setPosition(a.offset + a.length), i.scan() === 5 && n >= i.getTokenOffset() + i.getTokenLength() ? s + 1 : s;
      if (n >= a.offset)
        return s;
    }
    return 0;
  }
  isInComment(e, t, n) {
    const i = Dt(e.getText(), !1);
    i.setPosition(t);
    let r = i.scan();
    for (; r !== 17 && i.getTokenOffset() + i.getTokenLength() < n; )
      r = i.scan();
    return (r === 12 || r === 13) && i.getTokenOffset() <= n;
  }
  fromMarkup(e) {
    if (e && this.doesSupportMarkdown())
      return {
        kind: Pt.Markdown,
        value: e
      };
  }
  doesSupportMarkdown() {
    var e, t, n;
    if (!ze(this.supportsMarkdown)) {
      const i = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.documentationFormat;
      this.supportsMarkdown = Array.isArray(i) && i.indexOf(Pt.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
  doesSupportsCommitCharacters() {
    var e, t, n;
    return ze(this.supportsCommitCharacters) || (this.labelDetailsSupport = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.commitCharactersSupport), this.supportsCommitCharacters;
  }
  doesSupportsLabelDetails() {
    var e, t, n;
    return ze(this.labelDetailsSupport) || (this.labelDetailsSupport = (n = (t = (e = this.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.labelDetailsSupport), this.labelDetailsSupport;
  }
}, hf = class {
  constructor(e, t = [], n) {
    this.schemaService = e, this.contributions = t, this.promise = n || Promise;
  }
  doHover(e, t, n) {
    const i = e.offsetAt(t);
    let r = n.getNodeFromOffset(i);
    if (!r || (r.type === "object" || r.type === "array") && i > r.offset + 1 && i < r.offset + r.length - 1)
      return this.promise.resolve(null);
    const s = r;
    if (r.type === "string") {
      const u = r.parent;
      if (u && u.type === "property" && u.keyNode === r && (r = u.valueNode, !r))
        return this.promise.resolve(null);
    }
    const a = C.create(e.positionAt(s.offset), e.positionAt(s.offset + s.length)), l = (u) => ({
      contents: u,
      range: a
    }), o = Fr(r);
    for (let u = this.contributions.length - 1; u >= 0; u--) {
      const c = this.contributions[u].getInfoContribution(e.uri, o);
      if (c)
        return c.then((g) => l(g));
    }
    return this.schemaService.getSchemaForResource(e.uri, n).then((u) => {
      if (u && r) {
        const h = n.getMatchingSchemas(u.schema, r.offset);
        let c, g, d, m;
        h.every((w) => {
          if (w.node === r && !w.inverted && w.schema && (c = c || w.schema.title, g = g || w.schema.markdownDescription || Wi(w.schema.description), w.schema.enum)) {
            const N = w.schema.enum.indexOf(Ft(r));
            w.schema.markdownEnumDescriptions ? d = w.schema.markdownEnumDescriptions[N] : w.schema.enumDescriptions && (d = Wi(w.schema.enumDescriptions[N])), d && (m = w.schema.enum[N], typeof m != "string" && (m = JSON.stringify(m)));
          }
          return !0;
        });
        let p = "";
        return c && (p = Wi(c)), g && (p.length > 0 && (p += `

`), p += g), d && (p.length > 0 && (p += `

`), p += `\`${gf(m)}\`: ${d}`), l([p]);
      }
      return null;
    });
  }
};
function Wi(e) {
  if (e)
    return e.replace(/([^\n\r])(\r?\n)([^\n\r])/gm, `$1

$3`).replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
}
function gf(e) {
  return e.indexOf("`") !== -1 ? "`` " + e + " ``" : e;
}
var mf = class {
  constructor(e, t) {
    this.jsonSchemaService = e, this.promise = t, this.validationEnabled = !0;
  }
  configure(e) {
    e && (this.validationEnabled = e.validate !== !1, this.commentSeverity = e.allowComments ? void 0 : Oe.Error);
  }
  doValidation(e, t, n, i) {
    if (!this.validationEnabled)
      return this.promise.resolve([]);
    const r = [], s = {}, a = (o) => {
      const u = o.range.start.line + " " + o.range.start.character + " " + o.message;
      s[u] || (s[u] = !0, r.push(o));
    }, l = (o) => {
      let u = n != null && n.trailingCommas ? Zn(n.trailingCommas) : Oe.Error, h = n != null && n.comments ? Zn(n.comments) : this.commentSeverity, c = n != null && n.schemaValidation ? Zn(n.schemaValidation) : Oe.Warning, g = n != null && n.schemaRequest ? Zn(n.schemaRequest) : Oe.Warning;
      if (o) {
        const d = (m, p) => {
          if (t.root && g) {
            const w = t.root, N = w.type === "object" ? w.properties[0] : void 0;
            if (N && N.keyNode.value === "$schema") {
              const x = N.valueNode || N, _ = C.create(e.positionAt(x.offset), e.positionAt(x.offset + x.length));
              a(ht.create(_, m, g, p));
            } else {
              const x = C.create(e.positionAt(w.offset), e.positionAt(w.offset + 1));
              a(ht.create(x, m, g, p));
            }
          }
        };
        if (o.errors.length)
          d(o.errors[0], te.SchemaResolveError);
        else if (c) {
          for (const p of o.warnings)
            d(p, te.SchemaUnsupportedFeature);
          const m = t.validate(e, o.schema, c, n == null ? void 0 : n.schemaDraft);
          m && m.forEach(a);
        }
        wl(o.schema) && (h = void 0), vl(o.schema) && (u = void 0);
      }
      for (const d of t.syntaxErrors) {
        if (d.code === te.TrailingComma) {
          if (typeof u != "number")
            continue;
          d.severity = u;
        }
        a(d);
      }
      if (typeof h == "number") {
        const d = D("Comments are not permitted in JSON.");
        t.comments.forEach((m) => {
          a(ht.create(m, d, h, te.CommentNotPermitted));
        });
      }
      return r;
    };
    if (i) {
      const o = i.id || "schemaservice://untitled/" + df++;
      return this.jsonSchemaService.registerExternalSchema({ uri: o, schema: i }).getResolvedSchema().then((h) => l(h));
    }
    return this.jsonSchemaService.getSchemaForResource(e.uri, t).then((o) => l(o));
  }
  getLanguageStatus(e, t) {
    return { schemas: this.jsonSchemaService.getSchemaURIsForResource(e.uri, t) };
  }
}, df = 0;
function wl(e) {
  if (e && typeof e == "object") {
    if (tt(e.allowComments))
      return e.allowComments;
    if (e.allOf)
      for (const t of e.allOf) {
        const n = wl(t);
        if (tt(n))
          return n;
      }
  }
}
function vl(e) {
  if (e && typeof e == "object") {
    if (tt(e.allowTrailingCommas))
      return e.allowTrailingCommas;
    const t = e;
    if (tt(t.allowsTrailingCommas))
      return t.allowsTrailingCommas;
    if (e.allOf)
      for (const n of e.allOf) {
        const i = vl(n);
        if (tt(i))
          return i;
      }
  }
}
function Zn(e) {
  switch (e) {
    case "error":
      return Oe.Error;
    case "warning":
      return Oe.Warning;
    case "ignore":
      return;
  }
}
var ko = 48, pf = 57, bf = 65, Qn = 97, _f = 102;
function ge(e) {
  return e < ko ? 0 : e <= pf ? e - ko : (e < Qn && (e += Qn - bf), e >= Qn && e <= _f ? e - Qn + 10 : 0);
}
function wf(e) {
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
var vf = class {
  constructor(e) {
    this.schemaService = e;
  }
  findDocumentSymbols(e, t, n = { resultLimit: Number.MAX_VALUE }) {
    const i = t.root;
    if (!i)
      return [];
    let r = n.resultLimit || Number.MAX_VALUE;
    const s = e.uri;
    if ((s === "vscode://defaultsettings/keybindings.json" || qn(s.toLowerCase(), "/user/keybindings.json")) && i.type === "array") {
      const c = [];
      for (const g of i.items)
        if (g.type === "object") {
          for (const d of g.properties)
            if (d.keyNode.value === "key" && d.valueNode) {
              const m = gn.create(e.uri, pt(e, g));
              if (c.push({ name: To(d.valueNode), kind: Ke.Function, location: m }), r--, r <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), c;
            }
        }
      return c;
    }
    const a = [
      { node: i, containerName: "" }
    ];
    let l = 0, o = !1;
    const u = [], h = (c, g) => {
      c.type === "array" ? c.items.forEach((d) => {
        d && a.push({ node: d, containerName: g });
      }) : c.type === "object" && c.properties.forEach((d) => {
        const m = d.valueNode;
        if (m)
          if (r > 0) {
            r--;
            const p = gn.create(e.uri, pt(e, d)), w = g ? g + "." + d.keyNode.value : d.keyNode.value;
            u.push({ name: this.getKeyLabel(d), kind: this.getSymbolKind(m.type), location: p, containerName: g }), a.push({ node: m, containerName: w });
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
    const i = t.root;
    if (!i)
      return [];
    let r = n.resultLimit || Number.MAX_VALUE;
    const s = e.uri;
    if ((s === "vscode://defaultsettings/keybindings.json" || qn(s.toLowerCase(), "/user/keybindings.json")) && i.type === "array") {
      const c = [];
      for (const g of i.items)
        if (g.type === "object") {
          for (const d of g.properties)
            if (d.keyNode.value === "key" && d.valueNode) {
              const m = pt(e, g), p = pt(e, d.keyNode);
              if (c.push({ name: To(d.valueNode), kind: Ke.Function, range: m, selectionRange: p }), r--, r <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(s), c;
            }
        }
      return c;
    }
    const a = [], l = [
      { node: i, result: a }
    ];
    let o = 0, u = !1;
    const h = (c, g) => {
      c.type === "array" ? c.items.forEach((d, m) => {
        if (d)
          if (r > 0) {
            r--;
            const p = pt(e, d), w = p, x = { name: String(m), kind: this.getSymbolKind(d.type), range: p, selectionRange: w, children: [] };
            g.push(x), l.push({ result: x.children, node: d });
          } else
            u = !0;
      }) : c.type === "object" && c.properties.forEach((d) => {
        const m = d.valueNode;
        if (m)
          if (r > 0) {
            r--;
            const p = pt(e, d), w = pt(e, d.keyNode), N = [], x = { name: this.getKeyLabel(d), kind: this.getSymbolKind(m.type), range: p, selectionRange: w, children: N, detail: this.getDetail(m) };
            g.push(x), l.push({ result: N, node: m });
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
        return Ke.Module;
      case "string":
        return Ke.String;
      case "number":
        return Ke.Number;
      case "array":
        return Ke.Array;
      case "boolean":
        return Ke.Boolean;
      default:
        return Ke.Variable;
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
    return this.schemaService.getSchemaForResource(e.uri, t).then((i) => {
      const r = [];
      if (i) {
        let s = n && typeof n.resultLimit == "number" ? n.resultLimit : Number.MAX_VALUE;
        const a = t.getMatchingSchemas(i.schema), l = {};
        for (const o of a)
          if (!o.inverted && o.schema && (o.schema.format === "color" || o.schema.format === "color-hex") && o.node && o.node.type === "string") {
            const u = String(o.node.offset);
            if (!l[u]) {
              const h = wf(Ft(o.node));
              if (h) {
                const c = pt(e, o.node);
                r.push({ color: h, range: c });
              }
              if (l[u] = !0, s--, s <= 0)
                return n && n.onResultLimitExceeded && n.onResultLimitExceeded(e.uri), r;
            }
          }
      }
      return r;
    });
  }
  getColorPresentations(e, t, n, i) {
    const r = [], s = Math.round(n.red * 255), a = Math.round(n.green * 255), l = Math.round(n.blue * 255);
    function o(h) {
      const c = h.toString(16);
      return c.length !== 2 ? "0" + c : c;
    }
    let u;
    return n.alpha === 1 ? u = `#${o(s)}${o(a)}${o(l)}` : u = `#${o(s)}${o(a)}${o(l)}${o(Math.round(n.alpha * 255))}`, r.push({ label: u, textEdit: it.replace(i, JSON.stringify(u)) }), r;
  }
};
function pt(e, t) {
  return C.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
}
function To(e) {
  return Ft(e) || D("<empty>");
}
var Or = {
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
}, Lf = {
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
for (const e in Or.schemas) {
  const t = Or.schemas[e];
  for (const n in t.properties) {
    let i = t.properties[n];
    typeof i == "boolean" && (i = t.properties[n] = {});
    const r = Lf[n];
    r && (i.description = r);
  }
}
var Ll;
(() => {
  var e = { 470: (r) => {
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
                  var w = c.lastIndexOf("/");
                  if (w !== c.length - 1) {
                    w === -1 ? (c = "", g = 0) : g = (c = c.slice(0, w)).length - 1 - c.lastIndexOf("/"), d = p, m = 0;
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
      for (var m = u.length - d, p = g < m ? g : m, w = -1, N = 0; N <= p; ++N) {
        if (N === p) {
          if (m > p) {
            if (u.charCodeAt(d + N) === 47)
              return u.slice(d + N + 1);
            if (N === 0)
              return u.slice(d + N);
          } else
            g > p && (o.charCodeAt(h + N) === 47 ? w = N : N === 0 && (w = 0));
          break;
        }
        var x = o.charCodeAt(h + N);
        if (x !== u.charCodeAt(d + N))
          break;
        x === 47 && (w = N);
      }
      var _ = "";
      for (N = h + w + 1; N <= c; ++N)
        N !== c && o.charCodeAt(N) !== 47 || (_.length === 0 ? _ += ".." : _ += "/..");
      return _.length > 0 ? _ + u.slice(d + w) : (d += w, u.charCodeAt(d) === 47 && ++d, u.slice(d));
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
          var w = o.charCodeAt(h);
          if (w === 47) {
            if (!d) {
              c = h + 1;
              break;
            }
          } else
            p === -1 && (d = !1, p = h + 1), m >= 0 && (w === u.charCodeAt(m) ? --m == -1 && (g = h) : (m = -1, g = p));
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
      for (var d = -1, m = 0, p = -1, w = !0, N = o.length - 1, x = 0; N >= h; --N)
        if ((c = o.charCodeAt(N)) !== 47)
          p === -1 && (w = !1, p = N + 1), c === 46 ? d === -1 ? d = N : x !== 1 && (x = 1) : d !== -1 && (x = -1);
        else if (!w) {
          m = N + 1;
          break;
        }
      return d === -1 || p === -1 || x === 0 || x === 1 && d === p - 1 && d === m + 1 ? p !== -1 && (u.base = u.name = m === 0 && g ? o.slice(1, p) : o.slice(m, p)) : (m === 0 && g ? (u.name = o.slice(1, d), u.base = o.slice(1, p)) : (u.name = o.slice(m, d), u.base = o.slice(m, p)), u.ext = o.slice(d, p)), m > 0 ? u.dir = o.slice(0, m - 1) : g && (u.dir = "/"), u;
    }, sep: "/", delimiter: ":", win32: null, posix: null };
    l.posix = l, r.exports = l;
  } }, t = {};
  function n(r) {
    var s = t[r];
    if (s !== void 0)
      return s.exports;
    var a = t[r] = { exports: {} };
    return e[r](a, a.exports, n), a.exports;
  }
  n.d = (r, s) => {
    for (var a in s)
      n.o(s, a) && !n.o(r, a) && Object.defineProperty(r, a, { enumerable: !0, get: s[a] });
  }, n.o = (r, s) => Object.prototype.hasOwnProperty.call(r, s), n.r = (r) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
  };
  var i = {};
  (() => {
    let r;
    n.r(i), n.d(i, { URI: () => g, Utils: () => W }), typeof process == "object" ? r = process.platform === "win32" : typeof navigator == "object" && (r = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, l = /^\/\//;
    function o(F, T) {
      if (!F.scheme && T)
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
      constructor(T, M, I, B, O, V = !1) {
        gt(this, "scheme");
        gt(this, "authority");
        gt(this, "path");
        gt(this, "query");
        gt(this, "fragment");
        typeof T == "object" ? (this.scheme = T.scheme || u, this.authority = T.authority || u, this.path = T.path || u, this.query = T.query || u, this.fragment = T.fragment || u) : (this.scheme = /* @__PURE__ */ function(X, Y) {
          return X || Y ? X : "file";
        }(T, V), this.authority = M || u, this.path = function(X, Y) {
          switch (X) {
            case "https":
            case "http":
            case "file":
              Y ? Y[0] !== h && (Y = h + Y) : Y = h;
          }
          return Y;
        }(this.scheme, I || u), this.query = B || u, this.fragment = O || u, o(this, V));
      }
      static isUri(T) {
        return T instanceof g || !!T && typeof T.authority == "string" && typeof T.fragment == "string" && typeof T.path == "string" && typeof T.query == "string" && typeof T.scheme == "string" && typeof T.fsPath == "string" && typeof T.with == "function" && typeof T.toString == "function";
      }
      get fsPath() {
        return x(this);
      }
      with(T) {
        if (!T)
          return this;
        let { scheme: M, authority: I, path: B, query: O, fragment: V } = T;
        return M === void 0 ? M = this.scheme : M === null && (M = u), I === void 0 ? I = this.authority : I === null && (I = u), B === void 0 ? B = this.path : B === null && (B = u), O === void 0 ? O = this.query : O === null && (O = u), V === void 0 ? V = this.fragment : V === null && (V = u), M === this.scheme && I === this.authority && B === this.path && O === this.query && V === this.fragment ? this : new m(M, I, B, O, V);
      }
      static parse(T, M = !1) {
        const I = c.exec(T);
        return I ? new m(I[2] || u, A(I[4] || u), A(I[5] || u), A(I[7] || u), A(I[9] || u), M) : new m(u, u, u, u, u);
      }
      static file(T) {
        let M = u;
        if (r && (T = T.replace(/\\/g, h)), T[0] === h && T[1] === h) {
          const I = T.indexOf(h, 2);
          I === -1 ? (M = T.substring(2), T = h) : (M = T.substring(2, I), T = T.substring(I) || h);
        }
        return new m("file", M, T, u, u);
      }
      static from(T) {
        const M = new m(T.scheme, T.authority, T.path, T.query, T.fragment);
        return o(M, !0), M;
      }
      toString(T = !1) {
        return _(this, T);
      }
      toJSON() {
        return this;
      }
      static revive(T) {
        if (T) {
          if (T instanceof g)
            return T;
          {
            const M = new m(T);
            return M._formatted = T.external, M._fsPath = T._sep === d ? T.fsPath : null, M;
          }
        }
        return T;
      }
    }
    const d = r ? 1 : void 0;
    class m extends g {
      constructor() {
        super(...arguments);
        gt(this, "_formatted", null);
        gt(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = x(this)), this._fsPath;
      }
      toString(M = !1) {
        return M ? _(this, !0) : (this._formatted || (this._formatted = _(this, !1)), this._formatted);
      }
      toJSON() {
        const M = { $mid: 1 };
        return this._fsPath && (M.fsPath = this._fsPath, M._sep = d), this._formatted && (M.external = this._formatted), this.path && (M.path = this.path), this.scheme && (M.scheme = this.scheme), this.authority && (M.authority = this.authority), this.query && (M.query = this.query), this.fragment && (M.fragment = this.fragment), M;
      }
    }
    const p = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function w(F, T, M) {
      let I, B = -1;
      for (let O = 0; O < F.length; O++) {
        const V = F.charCodeAt(O);
        if (V >= 97 && V <= 122 || V >= 65 && V <= 90 || V >= 48 && V <= 57 || V === 45 || V === 46 || V === 95 || V === 126 || T && V === 47 || M && V === 91 || M && V === 93 || M && V === 58)
          B !== -1 && (I += encodeURIComponent(F.substring(B, O)), B = -1), I !== void 0 && (I += F.charAt(O));
        else {
          I === void 0 && (I = F.substr(0, O));
          const X = p[V];
          X !== void 0 ? (B !== -1 && (I += encodeURIComponent(F.substring(B, O)), B = -1), I += X) : B === -1 && (B = O);
        }
      }
      return B !== -1 && (I += encodeURIComponent(F.substring(B))), I !== void 0 ? I : F;
    }
    function N(F) {
      let T;
      for (let M = 0; M < F.length; M++) {
        const I = F.charCodeAt(M);
        I === 35 || I === 63 ? (T === void 0 && (T = F.substr(0, M)), T += p[I]) : T !== void 0 && (T += F[M]);
      }
      return T !== void 0 ? T : F;
    }
    function x(F, T) {
      let M;
      return M = F.authority && F.path.length > 1 && F.scheme === "file" ? `//${F.authority}${F.path}` : F.path.charCodeAt(0) === 47 && (F.path.charCodeAt(1) >= 65 && F.path.charCodeAt(1) <= 90 || F.path.charCodeAt(1) >= 97 && F.path.charCodeAt(1) <= 122) && F.path.charCodeAt(2) === 58 ? F.path[1].toLowerCase() + F.path.substr(2) : F.path, r && (M = M.replace(/\//g, "\\")), M;
    }
    function _(F, T) {
      const M = T ? N : w;
      let I = "", { scheme: B, authority: O, path: V, query: X, fragment: Y } = F;
      if (B && (I += B, I += ":"), (O || B === "file") && (I += h, I += h), O) {
        let ee = O.indexOf("@");
        if (ee !== -1) {
          const he = O.substr(0, ee);
          O = O.substr(ee + 1), ee = he.lastIndexOf(":"), ee === -1 ? I += M(he, !1, !1) : (I += M(he.substr(0, ee), !1, !1), I += ":", I += M(he.substr(ee + 1), !1, !0)), I += "@";
        }
        O = O.toLowerCase(), ee = O.lastIndexOf(":"), ee === -1 ? I += M(O, !1, !0) : (I += M(O.substr(0, ee), !1, !0), I += O.substr(ee));
      }
      if (V) {
        if (V.length >= 3 && V.charCodeAt(0) === 47 && V.charCodeAt(2) === 58) {
          const ee = V.charCodeAt(1);
          ee >= 65 && ee <= 90 && (V = `/${String.fromCharCode(ee + 32)}:${V.substr(3)}`);
        } else if (V.length >= 2 && V.charCodeAt(1) === 58) {
          const ee = V.charCodeAt(0);
          ee >= 65 && ee <= 90 && (V = `${String.fromCharCode(ee + 32)}:${V.substr(2)}`);
        }
        I += M(V, !0, !1);
      }
      return X && (I += "?", I += M(X, !1, !1)), Y && (I += "#", I += T ? Y : w(Y, !1, !1)), I;
    }
    function E(F) {
      try {
        return decodeURIComponent(F);
      } catch {
        return F.length > 3 ? F.substr(0, 3) + E(F.substr(3)) : F;
      }
    }
    const b = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function A(F) {
      return F.match(b) ? F.replace(b, (T) => E(T)) : F;
    }
    var y = n(470);
    const U = y.posix || y, $ = "/";
    var W;
    (function(F) {
      F.joinPath = function(T, ...M) {
        return T.with({ path: U.join(T.path, ...M) });
      }, F.resolvePath = function(T, ...M) {
        let I = T.path, B = !1;
        I[0] !== $ && (I = $ + I, B = !0);
        let O = U.resolve(I, ...M);
        return B && O[0] === $ && !T.authority && (O = O.substring(1)), T.with({ path: O });
      }, F.dirname = function(T) {
        if (T.path.length === 0 || T.path === $)
          return T;
        let M = U.dirname(T.path);
        return M.length === 1 && M.charCodeAt(0) === 46 && (M = ""), T.with({ path: M });
      }, F.basename = function(T) {
        return U.basename(T.path);
      }, F.extname = function(T) {
        return U.extname(T.path);
      };
    })(W || (W = {}));
  })(), Ll = i;
})();
var { URI: pn, Utils: Zf } = Ll;
function Nf(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  const n = String(e);
  let i = "";
  const r = !!t, s = !!t;
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
        i += "\\" + o;
        break;
      case "?":
        if (r) {
          i += ".";
          break;
        }
      case "[":
      case "]":
        if (r) {
          i += o;
          break;
        }
      case "{":
        if (r) {
          a = !0, i += "(";
          break;
        }
      case "}":
        if (r) {
          a = !1, i += ")";
          break;
        }
      case ",":
        if (a) {
          i += "|";
          break;
        }
        i += "\\" + o;
        break;
      case "*":
        const c = n[u - 1];
        let g = 1;
        for (; n[u + 1] === "*"; )
          g++, u++;
        const d = n[u + 1];
        s ? g > 1 && (c === "/" || c === void 0 || c === "{" || c === ",") && (d === "/" || d === void 0 || d === "," || d === "}") ? (d === "/" ? u++ : c === "/" && i.endsWith("\\/") && (i = i.substr(0, i.length - 2)), i += "((?:[^/]*(?:/|$))*)") : i += "([^/]*)" : i += ".*";
        break;
      default:
        i += o;
    }
  return (!l || !~l.indexOf("g")) && (i = "^" + i + "$"), new RegExp(i, l);
}
var Af = "!", xf = "/", Ef = class {
  constructor(e, t, n) {
    this.folderUri = t, this.uris = n, this.globWrappers = [];
    try {
      for (let i of e) {
        const r = i[0] !== Af;
        r || (i = i.substring(1)), i.length > 0 && (i[0] === xf && (i = i.substring(1)), this.globWrappers.push({
          regexp: Nf("**/" + i, { extended: !0, globstar: !0 }),
          include: r
        }));
      }
      t && (t = Nl(t), t.endsWith("/") || (t = t + "/"), this.folderUri = t);
    } catch {
      this.globWrappers.length = 0, this.uris = [];
    }
  }
  matchesPattern(e) {
    if (this.folderUri && !e.startsWith(this.folderUri))
      return !1;
    let t = !1;
    for (const { regexp: n, include: i } of this.globWrappers)
      n.test(e) && (t = i);
    return t;
  }
  getURIs() {
    return this.uris;
  }
}, yf = class {
  constructor(e, t, n) {
    this.service = e, this.uri = t, this.dependencies = /* @__PURE__ */ new Set(), this.anchors = void 0, n && (this.unresolvedSchema = this.service.promise.resolve(new An(n)));
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
}, An = class {
  constructor(e, t = []) {
    this.schema = e, this.errors = t;
  }
}, So = class {
  constructor(e, t = [], n = [], i) {
    this.schema = e, this.errors = t, this.warnings = n, this.schemaDraft = i;
  }
  getSection(e) {
    const t = this.getSectionRecursive(e, this.schema);
    if (t)
      return De(t);
  }
  getSectionRecursive(e, t) {
    if (!t || typeof t == "boolean" || e.length === 0)
      return t;
    const n = e.shift();
    if (t.properties && typeof t.properties[n])
      return this.getSectionRecursive(e, t.properties[n]);
    if (t.patternProperties)
      for (const i of Object.keys(t.patternProperties)) {
        const r = Li(i);
        if (r != null && r.test(n))
          return this.getSectionRecursive(e, t.patternProperties[i]);
      }
    else {
      if (typeof t.additionalProperties == "object")
        return this.getSectionRecursive(e, t.additionalProperties);
      if (n.match("[0-9]+")) {
        if (Array.isArray(t.items)) {
          const i = parseInt(n, 10);
          if (!isNaN(i) && t.items[i])
            return this.getSectionRecursive(e, t.items[i]);
        } else if (t.items)
          return this.getSectionRecursive(e, t.items);
      }
    }
  }
}, Rf = class {
  constructor(e, t, n) {
    this.contextService = t, this.requestService = e, this.promiseConstructor = n || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = [], this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {};
  }
  getRegisteredSchemaIds(e) {
    return Object.keys(this.registeredSchemasIds).filter((t) => {
      const n = pn.parse(t).scheme;
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
    e = bt(e);
    const n = [e], i = Object.keys(this.schemasById).map((r) => this.schemasById[r]);
    for (; n.length; ) {
      const r = n.pop();
      for (let s = 0; s < i.length; s++) {
        const a = i[s];
        a && (a.uri === r || a.dependencies.has(r)) && (a.uri !== r && n.push(a.uri), a.clearSchema() && (t = !0), i[s] = void 0);
      }
    }
    return t;
  }
  setSchemaContributions(e) {
    if (e.schemas) {
      const t = e.schemas;
      for (const n in t) {
        const i = bt(n);
        this.contributionSchemas[i] = this.addSchemaHandle(i, t[n]);
      }
    }
    if (Array.isArray(e.schemaAssociations)) {
      const t = e.schemaAssociations;
      for (let n of t) {
        const i = n.uris.map(bt), r = this.addFilePatternAssociation(n.pattern, n.folderUri, i);
        this.contributionAssociations.push(r);
      }
    }
  }
  addSchemaHandle(e, t) {
    const n = new yf(this, e, t);
    return this.schemasById[e] = n, n;
  }
  getOrAddSchemaHandle(e, t) {
    return this.schemasById[e] || this.addSchemaHandle(e, t);
  }
  addFilePatternAssociation(e, t, n) {
    const i = new Ef(e, t, n);
    return this.filePatternAssociations.push(i), i;
  }
  registerExternalSchema(e) {
    const t = bt(e.uri);
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
    const t = bt(e), n = this.schemasById[t];
    return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
  }
  loadSchema(e) {
    if (!this.requestService) {
      const t = D("Unable to load schema from '{0}'. No schema request service available", Nn(e));
      return this.promise.resolve(new An({}, [t]));
    }
    return e.startsWith("http://json-schema.org/") && (e = "https" + e.substring(4)), this.requestService(e).then((t) => {
      if (!t) {
        const s = D("Unable to load schema from '{0}': No content.", Nn(e));
        return new An({}, [s]);
      }
      const n = [];
      t.charCodeAt(0) === 65279 && (n.push(D("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", Nn(e))), t = t.trimStart());
      let i = {};
      const r = [];
      return i = j0(t, r), r.length && n.push(D("Unable to parse content from '{0}': Parse error at offset {1}.", Nn(e), r[0].offset)), new An(i, n);
    }, (t) => {
      let n = t.toString();
      const i = t.toString().split("Error: ");
      return i.length > 1 && (n = i[1]), qn(n, ".") && (n = n.substr(0, n.length - 1)), new An({}, [D("Unable to load schema from '{0}': {1}.", Nn(e), n)]);
    });
  }
  resolveSchemaContent(e, t) {
    const n = e.errors.slice(0), i = e.schema;
    let r = i.$schema ? bt(i.$schema) : void 0;
    if (r === "http://json-schema.org/draft-03/schema")
      return this.promise.resolve(new So({}, [D("Draft-03 schemas are not supported.")], [], r));
    let s = /* @__PURE__ */ new Set();
    const a = this.contextService, l = (m, p) => {
      p = decodeURIComponent(p);
      let w = m;
      return p[0] === "/" && (p = p.substring(1)), p.split("/").some((N) => (N = N.replace(/~1/g, "/").replace(/~0/g, "~"), w = w[N], !w)), w;
    }, o = (m, p, w) => (p.anchors || (p.anchors = d(m)), p.anchors.get(w)), u = (m, p) => {
      for (const w in p)
        p.hasOwnProperty(w) && w !== "id" && w !== "$id" && (m[w] = p[w]);
    }, h = (m, p, w, N) => {
      let x;
      N === void 0 || N.length === 0 ? x = p : N.charAt(0) === "/" ? x = l(p, N) : x = o(p, w, N), x ? u(m, x) : n.push(D("$ref '{0}' in '{1}' can not be resolved.", N || "", w.uri));
    }, c = (m, p, w, N) => {
      a && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/\/.*/.test(p) && (p = a.resolveRelativePath(p, N.uri)), p = bt(p);
      const x = this.getOrAddSchemaHandle(p);
      return x.getUnresolvedSchema().then((_) => {
        if (N.dependencies.add(p), _.errors.length) {
          const E = w ? p + "#" + w : p;
          n.push(D("Problems loading reference '{0}': {1}", E, _.errors[0]));
        }
        return h(m, _.schema, x, w), g(m, _.schema, x);
      });
    }, g = (m, p, w) => {
      const N = [];
      return this.traverseNodes(m, (x) => {
        const _ = /* @__PURE__ */ new Set();
        for (; x.$ref; ) {
          const E = x.$ref, b = E.split("#", 2);
          if (delete x.$ref, b[0].length > 0) {
            N.push(c(x, b[0], b[1], w));
            return;
          } else if (!_.has(E)) {
            const A = b[1];
            h(x, p, w, A), _.add(E);
          }
        }
        x.$recursiveRef && s.add("$recursiveRef"), x.$dynamicRef && s.add("$dynamicRef");
      }), this.promise.all(N);
    }, d = (m) => {
      const p = /* @__PURE__ */ new Map();
      return this.traverseNodes(m, (w) => {
        const N = w.$id || w.id, x = ml(N) && N.charAt(0) === "#" ? N.substring(1) : w.$anchor;
        x && (p.has(x) ? n.push(D("Duplicate anchor declaration: '{0}'", x)) : p.set(x, w)), w.$recursiveAnchor && s.add("$recursiveAnchor"), w.$dynamicAnchor && s.add("$dynamicAnchor");
      }), p;
    };
    return g(i, i, t).then((m) => {
      let p = [];
      return s.size && p.push(D("The schema uses meta-schema features ({0}) that are not yet supported by the validator.", Array.from(s.keys()).join(", "))), new So(i, n, p, r);
    });
  }
  traverseNodes(e, t) {
    if (!e || typeof e != "object")
      return Promise.resolve(null);
    const n = /* @__PURE__ */ new Set(), i = (...u) => {
      for (const h of u)
        vt(h) && l.push(h);
    }, r = (...u) => {
      for (const h of u)
        if (vt(h))
          for (const c in h) {
            const d = h[c];
            vt(d) && l.push(d);
          }
    }, s = (...u) => {
      for (const h of u)
        if (Array.isArray(h))
          for (const c of h)
            vt(c) && l.push(c);
    }, a = (u) => {
      if (Array.isArray(u))
        for (const h of u)
          vt(h) && l.push(h);
      else vt(u) && l.push(u);
    }, l = [e];
    let o = l.pop();
    for (; o; )
      n.has(o) || (n.add(o), t(o), i(o.additionalItems, o.additionalProperties, o.not, o.contains, o.propertyNames, o.if, o.then, o.else, o.unevaluatedItems, o.unevaluatedProperties), r(o.definitions, o.$defs, o.properties, o.patternProperties, o.dependencies, o.dependentSchemas), s(o.anyOf, o.allOf, o.oneOf, o.prefixItems), a(o.items)), o = l.pop();
  }
  getSchemaFromProperty(e, t) {
    var n, i;
    if (((n = t.root) == null ? void 0 : n.type) === "object") {
      for (const r of t.root.properties)
        if (r.keyNode.value === "$schema" && ((i = r.valueNode) == null ? void 0 : i.type) === "string") {
          let s = r.valueNode.value;
          return this.contextService && !/^\w[\w\d+.-]*:/.test(s) && (s = this.contextService.resolveRelativePath(s, e)), s;
        }
    }
  }
  getAssociatedSchemas(e) {
    const t = /* @__PURE__ */ Object.create(null), n = [], i = Nl(e);
    for (const r of this.filePatternAssociations)
      if (r.matchesPattern(i))
        for (const s of r.getURIs())
          t[s] || (n.push(s), t[s] = !0);
    return n;
  }
  getSchemaURIsForResource(e, t) {
    let n = t && this.getSchemaFromProperty(e, t);
    return n ? [n] : this.getAssociatedSchemas(e);
  }
  getSchemaForResource(e, t) {
    if (t) {
      let r = this.getSchemaFromProperty(e, t);
      if (r) {
        const s = bt(r);
        return this.getOrAddSchemaHandle(s).getResolvedSchema();
      }
    }
    if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === e)
      return this.cachedSchemaForResource.resolvedSchema;
    const n = this.getAssociatedSchemas(e), i = n.length > 0 ? this.createCombinedSchema(e, n).getResolvedSchema() : this.promise.resolve(void 0);
    return this.cachedSchemaForResource = { resource: e, resolvedSchema: i }, i;
  }
  createCombinedSchema(e, t) {
    if (t.length === 1)
      return this.getOrAddSchemaHandle(t[0]);
    {
      const n = "schemaservice://combinedSchema/" + encodeURIComponent(e), i = {
        allOf: t.map((r) => ({ $ref: r }))
      };
      return this.addSchemaHandle(n, i);
    }
  }
  getMatchingSchemas(e, t, n) {
    if (n) {
      const i = n.id || "schemaservice://untitled/matchingSchemas/" + kf++;
      return this.addSchemaHandle(i, n).getResolvedSchema().then((s) => t.getMatchingSchemas(s.schema).filter((a) => !a.inverted));
    }
    return this.getSchemaForResource(e.uri, t).then((i) => i ? t.getMatchingSchemas(i.schema).filter((r) => !r.inverted) : []);
  }
}, kf = 0;
function bt(e) {
  try {
    return pn.parse(e).toString(!0);
  } catch {
    return e;
  }
}
function Nl(e) {
  try {
    return pn.parse(e).with({ fragment: null, query: null }).toString(!0);
  } catch {
    return e;
  }
}
function Nn(e) {
  try {
    const t = pn.parse(e);
    if (t.scheme === "file")
      return t.fsPath;
  } catch {
  }
  return e;
}
function Tf(e, t) {
  const n = [], i = [], r = [];
  let s = -1;
  const a = Dt(e.getText(), !1);
  let l = a.scan();
  function o(m) {
    n.push(m), i.push(r.length);
  }
  for (; l !== 17; ) {
    switch (l) {
      case 1:
      case 3: {
        const m = e.positionAt(a.getTokenOffset()).line, p = { startLine: m, endLine: m, kind: l === 1 ? "object" : "array" };
        r.push(p);
        break;
      }
      case 2:
      case 4: {
        const m = l === 2 ? "object" : "array";
        if (r.length > 0 && r[r.length - 1].kind === m) {
          const p = r.pop(), w = e.positionAt(a.getTokenOffset()).line;
          p && w > p.startLine + 1 && s !== p.startLine && (p.endLine = w - 1, o(p), s = p.startLine);
        }
        break;
      }
      case 13: {
        const m = e.positionAt(a.getTokenOffset()).line, p = e.positionAt(a.getTokenOffset() + a.getTokenLength()).line;
        a.getTokenError() === 1 && m + 1 < e.lineCount ? a.setPosition(e.offsetAt(ce.create(m + 1, 0))) : m < p && (o({ startLine: m, endLine: p, kind: Mn.Comment }), s = m);
        break;
      }
      case 12: {
        const p = e.getText().substr(a.getTokenOffset(), a.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);
        if (p) {
          const w = e.positionAt(a.getTokenOffset()).line;
          if (p[1]) {
            const N = { startLine: w, endLine: w, kind: Mn.Region };
            r.push(N);
          } else {
            let N = r.length - 1;
            for (; N >= 0 && r[N].kind !== Mn.Region; )
              N--;
            if (N >= 0) {
              const x = r[N];
              r.length = N, w > x.startLine && s !== x.startLine && (x.endLine = w, o(x), s = x.startLine);
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
  for (let m of i)
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
    const p = i[m];
    typeof p == "number" && (p < g || p === g && c++ < u) && d.push(n[m]);
  }
  return d;
}
function Sf(e, t, n) {
  function i(l) {
    let o = e.offsetAt(l), u = n.getNodeFromOffset(o, !0);
    const h = [];
    for (; u; ) {
      switch (u.type) {
        case "string":
        case "object":
        case "array":
          const g = u.offset + 1, d = u.offset + u.length - 1;
          g < d && o >= g && o <= d && h.push(r(g, d)), h.push(r(u.offset, u.offset + u.length));
          break;
        case "number":
        case "boolean":
        case "null":
        case "property":
          h.push(r(u.offset, u.offset + u.length));
          break;
      }
      if (u.type === "property" || u.parent && u.parent.type === "array") {
        const g = a(
          u.offset + u.length,
          5
          /* SyntaxKind.CommaToken */
        );
        g !== -1 && h.push(r(u.offset, g));
      }
      u = u.parent;
    }
    let c;
    for (let g = h.length - 1; g >= 0; g--)
      c = Ei.create(h[g], c);
    return c || (c = Ei.create(C.create(l, l))), c;
  }
  function r(l, o) {
    return C.create(e.positionAt(l), e.positionAt(o));
  }
  const s = Dt(e.getText(), !0);
  function a(l, o) {
    return s.setPosition(l), s.scan() === o ? s.getTokenOffset() + s.getTokenLength() : -1;
  }
  return t.map(i);
}
function Br(e, t, n) {
  let i;
  if (n) {
    const s = e.offsetAt(n.start), a = e.offsetAt(n.end) - s;
    i = { offset: s, length: a };
  }
  const r = {
    tabSize: t ? t.tabSize : 4,
    insertSpaces: (t == null ? void 0 : t.insertSpaces) === !0,
    insertFinalNewline: (t == null ? void 0 : t.insertFinalNewline) === !0,
    eol: `
`,
    keepLines: (t == null ? void 0 : t.keepLines) === !0
  };
  return J0(e.getText(), i, r).map((s) => it.replace(C.create(e.positionAt(s.offset), e.positionAt(s.offset + s.length)), s.content));
}
var pe;
(function(e) {
  e[e.Object = 0] = "Object", e[e.Array = 1] = "Array";
})(pe || (pe = {}));
var Kn = class {
  constructor(e, t) {
    this.propertyName = e ?? "", this.beginningLineNumber = t, this.childrenProperties = [], this.lastProperty = !1, this.noKeyName = !1;
  }
  addChildProperty(e) {
    if (e.parent = this, this.childrenProperties.length > 0) {
      let t = 0;
      e.noKeyName ? t = this.childrenProperties.length : t = If(this.childrenProperties, e, Mf), t < 0 && (t = t * -1 - 1), this.childrenProperties.splice(t, 0, e);
    } else
      this.childrenProperties.push(e);
    return e;
  }
};
function Mf(e, t) {
  const n = e.propertyName.toLowerCase(), i = t.propertyName.toLowerCase();
  return n < i ? -1 : n > i ? 1 : 0;
}
function If(e, t, n) {
  const i = t.propertyName.toLowerCase(), r = e[0].propertyName.toLowerCase(), s = e[e.length - 1].propertyName.toLowerCase();
  if (i < r)
    return 0;
  if (i > s)
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
function Uf(e, t) {
  const n = {
    ...t,
    keepLines: !1
    // keepLines must be false so that the properties are on separate lines for the sorting
  }, i = Ze.applyEdits(e, Br(e, n, void 0)), r = Ze.create("test://test.json", "json", 0, i), s = Df(r), a = Ff(r, s), l = Br(a, n, void 0), o = Ze.applyEdits(a, l);
  return [it.replace(C.create(ce.create(0, 0), e.positionAt(e.getText().length)), o)];
}
function Df(e) {
  const t = e.getText(), n = Dt(t, !1);
  let i = new Kn(), r = i, s = i, a = i, l, o = 0, u = 0, h, c, g = -1, d = -1, m = 0, p = 0, w = [], N = !1, x = !1;
  for (; (l = n.scan()) !== 17; ) {
    if (N === !0 && l !== 14 && l !== 15 && l !== 12 && l !== 13 && s.endLineNumber === void 0) {
      let _ = n.getTokenStartLine();
      c === 2 || c === 4 ? a.endLineNumber = _ - 1 : s.endLineNumber = _ - 1, m = _, N = !1;
    }
    if (x === !0 && l !== 14 && l !== 15 && l !== 12 && l !== 13 && (m = n.getTokenStartLine(), x = !1), n.getTokenStartLine() !== o) {
      for (let _ = o; _ < n.getTokenStartLine(); _++) {
        const E = e.getText(C.create(ce.create(_, 0), ce.create(_ + 1, 0))).length;
        u = u + E;
      }
      o = n.getTokenStartLine();
    }
    switch (l) {
      case 10: {
        if (h === void 0 || h === 1 || h === 5 && w[w.length - 1] === pe.Object) {
          const _ = new Kn(n.getTokenValue(), m);
          a = s, s = r.addChildProperty(_);
        }
        break;
      }
      case 3: {
        if (i.beginningLineNumber === void 0 && (i.beginningLineNumber = n.getTokenStartLine()), w[w.length - 1] === pe.Object)
          r = s;
        else if (w[w.length - 1] === pe.Array) {
          const _ = new Kn(n.getTokenValue(), m);
          _.noKeyName = !0, a = s, s = r.addChildProperty(_), r = s;
        }
        w.push(pe.Array), s.type = pe.Array, m = n.getTokenStartLine(), m++;
        break;
      }
      case 1: {
        if (i.beginningLineNumber === void 0)
          i.beginningLineNumber = n.getTokenStartLine();
        else if (w[w.length - 1] === pe.Array) {
          const _ = new Kn(n.getTokenValue(), m);
          _.noKeyName = !0, a = s, s = r.addChildProperty(_);
        }
        s.type = pe.Object, w.push(pe.Object), r = s, m = n.getTokenStartLine(), m++;
        break;
      }
      case 4: {
        p = n.getTokenStartLine(), w.pop(), s.endLineNumber === void 0 && (h === 2 || h === 4) && (s.endLineNumber = p - 1, s.lastProperty = !0, s.lineWhereToAddComma = g, s.indexWhereToAddComa = d, a = s, s = s ? s.parent : void 0, r = s), i.endLineNumber = p, m = p + 1;
        break;
      }
      case 2: {
        p = n.getTokenStartLine(), w.pop(), h !== 1 && (s.endLineNumber === void 0 && (s.endLineNumber = p - 1, s.lastProperty = !0, s.lineWhereToAddComma = g, s.indexWhereToAddComa = d), a = s, s = s ? s.parent : void 0, r = s), i.endLineNumber = n.getTokenStartLine(), m = p + 1;
        break;
      }
      case 5: {
        p = n.getTokenStartLine(), s.endLineNumber === void 0 && (w[w.length - 1] === pe.Object || w[w.length - 1] === pe.Array && (h === 2 || h === 4)) && (s.endLineNumber = p, s.commaIndex = n.getTokenOffset() - u, s.commaLine = p), (h === 2 || h === 4) && (a = s, s = s ? s.parent : void 0, r = s), m = p + 1;
        break;
      }
      case 13: {
        h === 5 && g === n.getTokenStartLine() && (w[w.length - 1] === pe.Array && (c === 2 || c === 4) || w[w.length - 1] === pe.Object) && (w[w.length - 1] === pe.Array && (c === 2 || c === 4) || w[w.length - 1] === pe.Object) && (s.endLineNumber = void 0, N = !0), (h === 1 || h === 3) && g === n.getTokenStartLine() && (x = !0);
        break;
      }
    }
    l !== 14 && l !== 13 && l !== 12 && l !== 15 && (c = h, h = l, g = n.getTokenStartLine(), d = n.getTokenOffset() + n.getTokenLength() - u);
  }
  return i;
}
function Ff(e, t) {
  if (t.childrenProperties.length === 0)
    return e;
  const n = Ze.create("test://test.json", "json", 0, e.getText()), i = [];
  for (Mo(i, t, t.beginningLineNumber); i.length > 0; ) {
    const r = i.shift(), s = r.propertyTreeArray;
    let a = r.beginningLineNumber;
    for (let l = 0; l < s.length; l++) {
      const o = s[l], u = C.create(ce.create(o.beginningLineNumber, 0), ce.create(o.endLineNumber + 1, 0)), h = e.getText(u), c = Ze.create("test://test.json", "json", 0, h);
      if (o.lastProperty === !0 && l !== s.length - 1) {
        const m = o.lineWhereToAddComma - o.beginningLineNumber, p = o.indexWhereToAddComa, w = {
          range: C.create(ce.create(m, p), ce.create(m, p)),
          text: ","
        };
        Ze.update(c, [w], 1);
      } else if (o.lastProperty === !1 && l === s.length - 1) {
        const m = o.commaIndex, w = o.commaLine - o.beginningLineNumber, N = {
          range: C.create(ce.create(w, m), ce.create(w, m + 1)),
          text: ""
        };
        Ze.update(c, [N], 1);
      }
      const g = o.endLineNumber - o.beginningLineNumber + 1, d = {
        range: C.create(ce.create(a, 0), ce.create(a + g, 0)),
        text: c.getText()
      };
      Ze.update(n, [d], 1), Mo(i, o, a), a = a + g;
    }
  }
  return n;
}
function Mo(e, t, n) {
  if (t.childrenProperties.length !== 0)
    if (t.type === pe.Object) {
      let i = 1 / 0;
      for (const s of t.childrenProperties)
        s.beginningLineNumber < i && (i = s.beginningLineNumber);
      const r = i - t.beginningLineNumber;
      n = n + r, e.push(new xl(n, t.childrenProperties));
    } else t.type === pe.Array && Al(e, t, n);
}
function Al(e, t, n) {
  for (const i of t.childrenProperties) {
    if (i.type === pe.Object) {
      let r = 1 / 0;
      for (const a of i.childrenProperties)
        a.beginningLineNumber < r && (r = a.beginningLineNumber);
      const s = r - i.beginningLineNumber;
      e.push(new xl(n + i.beginningLineNumber - t.beginningLineNumber + s, i.childrenProperties));
    }
    i.type === pe.Array && Al(e, i, n + i.beginningLineNumber - t.beginningLineNumber);
  }
}
var xl = class {
  constructor(e, t) {
    this.beginningLineNumber = e, this.propertyTreeArray = t;
  }
};
function Pf(e, t) {
  const n = [];
  return t.visit((i) => {
    var r;
    if (i.type === "property" && i.keyNode.value === "$ref" && ((r = i.valueNode) == null ? void 0 : r.type) === "string") {
      const s = i.valueNode.value, a = Bf(t, s);
      if (a) {
        const l = e.positionAt(a.offset);
        n.push({
          target: `${e.uri}#${l.line + 1},${l.character + 1}`,
          range: Of(e, i.valueNode)
        });
      }
    }
    return !0;
  }), Promise.resolve(n);
}
function Of(e, t) {
  return C.create(e.positionAt(t.offset + 1), e.positionAt(t.offset + t.length - 1));
}
function Bf(e, t) {
  const n = Vf(t);
  return n ? Vr(n, e.root) : null;
}
function Vr(e, t) {
  if (!t)
    return null;
  if (e.length === 0)
    return t;
  const n = e.shift();
  if (t && t.type === "object") {
    const i = t.properties.find((r) => r.keyNode.value === n);
    return i ? Vr(e, i.valueNode) : null;
  } else if (t && t.type === "array" && n.match(/^(0|[1-9][0-9]*)$/)) {
    const i = Number.parseInt(n), r = t.items[i];
    return r ? Vr(e, r) : null;
  }
  return null;
}
function Vf(e) {
  return e === "#" ? [] : e[0] !== "#" || e[1] !== "/" ? null : e.substring(2).split(/\//).map($f);
}
function $f(e) {
  return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
function qf(e) {
  const t = e.promiseConstructor || Promise, n = new Rf(e.schemaRequestService, e.workspaceContext, t);
  n.setSchemaContributions(Or);
  const i = new ff(n, e.contributions, t, e.clientCapabilities), r = new hf(n, e.contributions, t), s = new vf(n), a = new mf(n, t);
  return {
    configure: (l) => {
      var o;
      n.clearExternalSchemas(), (o = l.schemas) == null || o.forEach(n.registerExternalSchema.bind(n)), a.configure(l);
    },
    resetSchema: (l) => n.onResourceChange(l),
    doValidation: a.doValidation.bind(a),
    getLanguageStatus: a.getLanguageStatus.bind(a),
    parseJSONDocument: (l) => cf(l, { collectComments: !0 }),
    newJSONDocument: (l, o) => uf(l, o),
    getMatchingSchemas: n.getMatchingSchemas.bind(n),
    doResolve: i.doResolve.bind(i),
    doComplete: i.doComplete.bind(i),
    findDocumentSymbols: s.findDocumentSymbols.bind(s),
    findDocumentSymbols2: s.findDocumentSymbols2.bind(s),
    findDocumentColors: s.findDocumentColors.bind(s),
    getColorPresentations: s.getColorPresentations.bind(s),
    doHover: r.doHover.bind(r),
    getFoldingRanges: Tf,
    getSelectionRanges: Sf,
    findDefinition: () => Promise.resolve([]),
    findLinks: Pf,
    format: (l, o, u) => Br(l, u, o),
    sort: (l, o) => Uf(l, o)
  };
}
var El;
typeof fetch < "u" && (El = function(e) {
  return fetch(e).then((t) => t.text());
});
var Hf = class {
  constructor(e, t) {
    this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageService = qf({
      workspaceContext: {
        resolveRelativePath: (n, i) => {
          const r = i.substr(0, i.lastIndexOf("/") + 1);
          return Gf(r, n);
        }
      },
      schemaRequestService: t.enableSchemaRequest ? El : void 0,
      clientCapabilities: Dr.LATEST
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
    let i = this._languageService.parseJSONDocument(n);
    return this._languageService.doComplete(n, t, i);
  }
  async doResolve(e) {
    return this._languageService.doResolve(e);
  }
  async doHover(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return null;
    let i = this._languageService.parseJSONDocument(n);
    return this._languageService.doHover(n, t, i);
  }
  async format(e, t, n) {
    let i = this._getTextDocument(e);
    if (!i)
      return [];
    let r = this._languageService.format(i, t, n);
    return Promise.resolve(r);
  }
  async resetSchema(e) {
    return Promise.resolve(this._languageService.resetSchema(e));
  }
  async findDocumentSymbols(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.parseJSONDocument(t), i = this._languageService.findDocumentSymbols2(t, n);
    return Promise.resolve(i);
  }
  async findDocumentColors(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.parseJSONDocument(t), i = this._languageService.findDocumentColors(t, n);
    return Promise.resolve(i);
  }
  async getColorPresentations(e, t, n) {
    let i = this._getTextDocument(e);
    if (!i)
      return [];
    let r = this._languageService.parseJSONDocument(i), s = this._languageService.getColorPresentations(
      i,
      r,
      t,
      n
    );
    return Promise.resolve(s);
  }
  async getFoldingRanges(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return [];
    let i = this._languageService.getFoldingRanges(n, t);
    return Promise.resolve(i);
  }
  async getSelectionRanges(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return [];
    let i = this._languageService.parseJSONDocument(n), r = this._languageService.getSelectionRanges(n, t, i);
    return Promise.resolve(r);
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
        return Ze.create(
          e,
          this._languageId,
          n.version,
          n.getValue()
        );
    return null;
  }
}, Wf = 47, ji = 46;
function jf(e) {
  return e.charCodeAt(0) === Wf;
}
function Gf(e, t) {
  if (jf(t)) {
    const n = pn.parse(e), i = t.split("/");
    return n.with({ path: yl(i) }).toString();
  }
  return zf(e, t);
}
function yl(e) {
  const t = [];
  for (const i of e)
    i.length === 0 || i.length === 1 && i.charCodeAt(0) === ji || (i.length === 2 && i.charCodeAt(0) === ji && i.charCodeAt(1) === ji ? t.pop() : t.push(i));
  e.length > 1 && e[e.length - 1].length === 0 && t.push("");
  let n = t.join("/");
  return e[0].length === 0 && (n = "/" + n), n;
}
function zf(e, ...t) {
  const n = pn.parse(e), i = n.path.split("/");
  for (let r of t)
    i.push(...r.split("/"));
  return n.with({ path: yl(i) }).toString();
}
self.onmessage = () => {
  P0((e, t) => new Hf(e, t));
};
