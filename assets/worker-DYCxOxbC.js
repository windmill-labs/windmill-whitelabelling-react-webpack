var $l = Object.defineProperty;
var Xl = (e, t, n) => t in e ? $l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var lt = (e, t, n) => Xl(e, typeof t != "symbol" ? t + "" : t, n);
var S;
(function(e) {
  e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(S || (S = {}));
class Yl {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? Ct.isErrorNoTelemetry(t) ? new Ct(t.message + `

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
const Ql = new Yl();
function rn(e) {
  Jl(e) || Ql.onUnexpectedError(e);
}
function xi(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: i } = e, r = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: n,
      stack: r,
      noTelemetry: Ct.isErrorNoTelemetry(e),
      cause: i ? xi(i) : void 0,
      code: e.code
    };
  }
  return e;
}
const Li = "Canceled";
function Jl(e) {
  return e instanceof Zl ? !0 : e instanceof Error && e.name === Li && e.message === Li;
}
class Zl extends Error {
  constructor() {
    super(Li), this.name = this.message;
  }
}
class Ct extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof Ct)
      return t;
    const n = new Ct();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}
class pe extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, pe.prototype);
  }
}
function Kl(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i of e) {
    const r = t(i);
    let s = n[r];
    s || (s = n[r] = []), s.push(i);
  }
  return n;
}
function eu(e, t) {
  const n = this;
  let i = !1, r;
  return function() {
    return i || (i = !0, r = e.apply(n, arguments)), r;
  };
}
function Gt(e, t) {
  const n = jt(e, t);
  return n === -1 ? void 0 : e[n];
}
function jt(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? r = a + 1 : s = a;
  }
  return r - 1;
}
function tu(e, t) {
  const n = ki(e, t);
  return n === e.length ? void 0 : e[n];
}
function ki(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? s = a : r = a + 1;
  }
  return r;
}
const ai = class ai {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (ai.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array)
          if (this._prevFindLastPredicate(i) && !t(i))
            throw new Error(
              "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
            );
      }
      this._prevFindLastPredicate = t;
    }
    const n = jt(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
ai.assertInvariants = !1;
let Pn = ai;
function ll(e, t, n = (i, r) => i === r) {
  if (e === t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let i = 0, r = e.length; i < r; i++)
    if (!n(e[i], t[i]))
      return !1;
  return !0;
}
function* nu(e, t) {
  let n, i;
  for (const r of e)
    i !== void 0 && t(i, r) ? n.push(r) : (n && (yield n), n = [r]), i = r;
  n && (yield n);
}
function iu(e, t) {
  for (let n = 0; n <= e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function ru(e, t) {
  for (let n = 0; n < e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function su(e, t) {
  for (const n of t)
    e.push(n);
}
var Ei;
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
})(Ei || (Ei = {}));
function sn(e, t) {
  return (n, i) => t(e(n), e(i));
}
const an = (e, t) => e - t;
function au(e) {
  return (t, n) => -e(t, n);
}
const Ht = class Ht {
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
    return new Ht((n) => this.iterate((i) => t(i) ? n(i) : !0));
  }
  map(t) {
    return new Ht((n) => this.iterate((i) => n(t(i))));
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
    return this.iterate((r) => ((i || Ei.isGreaterThan(t(r, n))) && (i = !1, n = r), !0)), n;
  }
};
Ht.empty = new Ht((t) => {
});
let kr = Ht;
var Er, Sr;
class ou {
  constructor(t, n) {
    this.uri = t, this.value = n;
  }
}
function lu(e) {
  return Array.isArray(e);
}
const vt = class vt {
  constructor(t, n) {
    if (this[Er] = "ResourceMap", t instanceof vt)
      this.map = new Map(t.map), this.toKey = n ?? vt.defaultToKey;
    else if (lu(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? vt.defaultToKey;
      for (const [i, r] of t)
        this.set(i, r);
    } else
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? vt.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new ou(t, n)), this;
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
  *[(Er = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map)
      yield [t.uri, t.value];
  }
};
vt.defaultToKey = (t) => t.toString();
let Si = vt;
var ye;
(function(e) {
  e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(ye || (ye = {}));
class uu {
  constructor() {
    this[Sr] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  get(t, n = ye.None) {
    const i = this._map.get(t);
    if (i)
      return n !== ye.None && this.touch(i, n), i.value;
  }
  set(t, n, i = ye.None) {
    let r = this._map.get(t);
    if (r)
      r.value = n, i !== ye.None && this.touch(r, i);
    else {
      switch (r = { key: t, value: n, next: void 0, previous: void 0 }, i) {
        case ye.None:
          this.addItemLast(r);
          break;
        case ye.AsOld:
          this.addItemFirst(r);
          break;
        case ye.AsNew:
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
  [(Sr = Symbol.toStringTag, Symbol.iterator)]() {
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
    if (!(n !== ye.AsOld && n !== ye.AsNew)) {
      if (n === ye.AsOld) {
        if (t === this._head)
          return;
        const i = t.next, r = t.previous;
        t === this._tail ? (r.next = void 0, this._tail = r) : (i.previous = r, r.next = i), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
      } else if (n === ye.AsNew) {
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
class cu extends uu {
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
  get(t, n = ye.AsNew) {
    return super.get(t, n);
  }
  peek(t) {
    return super.get(t, ye.None);
  }
  set(t, n) {
    return super.set(t, n, ye.AsNew), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}
class hu extends cu {
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
class ul {
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
function du(e, t = "Unreachable") {
  throw new Error(t);
}
function mu(e, t = "unexpected state") {
  if (!e)
    throw typeof t == "string" ? new pe(`Assertion Failed: ${t}`) : t;
}
function pn(e) {
  if (!e()) {
    debugger;
    e(), rn(new pe("Assertion Failed"));
  }
}
function br(e, t) {
  let n = 0;
  for (; n < e.length - 1; ) {
    const i = e[n], r = e[n + 1];
    if (!t(i, r))
      return !1;
    n++;
  }
  return !0;
}
function fu(e) {
  return typeof e == "string";
}
function pu(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var Bn;
(function(e) {
  function t(D) {
    return D && typeof D == "object" && typeof D[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function i() {
    return n;
  }
  e.empty = i;
  function* r(D) {
    yield D;
  }
  e.single = r;
  function s(D) {
    return t(D) ? D : r(D);
  }
  e.wrap = s;
  function a(D) {
    return D || n;
  }
  e.from = a;
  function* l(D) {
    for (let I = D.length - 1; I >= 0; I--)
      yield D[I];
  }
  e.reverse = l;
  function o(D) {
    return !D || D[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = o;
  function u(D) {
    return D[Symbol.iterator]().next().value;
  }
  e.first = u;
  function c(D, I) {
    let b = 0;
    for (const g of D)
      if (I(g, b++))
        return !0;
    return !1;
  }
  e.some = c;
  function h(D, I) {
    for (const b of D)
      if (I(b))
        return b;
  }
  e.find = h;
  function* m(D, I) {
    for (const b of D)
      I(b) && (yield b);
  }
  e.filter = m;
  function* p(D, I) {
    let b = 0;
    for (const g of D)
      yield I(g, b++);
  }
  e.map = p;
  function* _(D, I) {
    let b = 0;
    for (const g of D)
      yield* I(g, b++);
  }
  e.flatMap = _;
  function* f(...D) {
    for (const I of D)
      pu(I) ? yield* I : yield I;
  }
  e.concat = f;
  function L(D, I, b) {
    let g = b;
    for (const x of D)
      g = I(g, x);
    return g;
  }
  e.reduce = L;
  function A(D) {
    let I = 0;
    for (const b of D)
      I++;
    return I;
  }
  e.length = A;
  function* w(D, I, b = D.length) {
    for (I < -D.length && (I = 0), I < 0 && (I += D.length), b < 0 ? b += D.length : b > D.length && (b = D.length); I < b; I++)
      yield D[I];
  }
  e.slice = w;
  function k(D, I = Number.POSITIVE_INFINITY) {
    const b = [];
    if (I === 0)
      return [b, D];
    const g = D[Symbol.iterator]();
    for (let x = 0; x < I; x++) {
      const W = g.next();
      if (W.done)
        return [b, e.empty()];
      b.push(W.value);
    }
    return [b, { [Symbol.iterator]() {
      return g;
    } }];
  }
  e.consume = k;
  async function H(D) {
    const I = [];
    for await (const b of D)
      I.push(b);
    return Promise.resolve(I);
  }
  e.asyncToArray = H;
})(Bn || (Bn = {}));
const oi = class oi {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  getDisposableData(t) {
    let n = this.livingDisposables.get(t);
    return n || (n = { parent: null, source: null, isSingleton: !1, value: t, idx: oi.idx++ }, this.livingDisposables.set(t, n)), n;
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
      const o = /* @__PURE__ */ new Map(), u = [...this.livingDisposables.values()].filter((h) => h.source !== null && !this.getRootParent(h, o).isSingleton);
      if (u.length === 0)
        return;
      const c = new Set(u.map((h) => h.value));
      if (i = u.filter((h) => !(h.parent && c.has(h.parent))), i.length === 0)
        throw new Error("There are cyclic diposable chains!");
    }
    if (!i)
      return;
    function r(o) {
      function u(h, m) {
        for (; h.length > 0 && m.some(
          (p) => typeof p == "string" ? p === h[0] : h[0].match(p)
        ); )
          h.shift();
      }
      const c = o.source.split(`
`).map((h) => h.trim().replace("at ", "")).filter((h) => h !== "");
      return u(c, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]), c.reverse();
    }
    const s = new ul();
    for (const o of i) {
      const u = r(o);
      for (let c = 0; c <= u.length; c++)
        s.add(u.slice(0, c).join(`
`), o);
    }
    i.sort(sn((o) => o.idx, an));
    let a = "", l = 0;
    for (const o of i.slice(0, t)) {
      l++;
      const u = r(o), c = [];
      for (let h = 0; h < u.length; h++) {
        let m = u[h];
        m = `(shared with ${s.get(u.slice(0, h + 1).join(`
`)).size}/${i.length} leaks) at ${m}`;
        const _ = s.get(u.slice(0, h).join(`
`)), f = Kl([..._].map((L) => r(L)[h]), (L) => L);
        delete f[u[h]];
        for (const [L, A] of Object.entries(f))
          c.unshift(`    - stacktraces of ${A.length} other leaks continue with ${L}`);
        c.unshift(m);
      }
      a += `


==================== Leaking disposable ${l}/${i.length}: ${o.value.constructor.name} ====================
${c.join(`
`)}
============================================================

`;
    }
    return i.length > t && (a += `


... and ${i.length - t} more leaking disposables

`), { leaks: i, details: a };
  }
};
oi.idx = 0;
let Rr = oi;
function cl(e) {
  if (Bn.is(e)) {
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
function gu(...e) {
  return gn(() => cl(e));
}
function gn(e) {
  return {
    dispose: eu(() => {
      e();
    })
  };
}
const li = class li {
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
        cl(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
  }
  add(t) {
    if (!t)
      return t;
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? li.DISABLE_DISPOSED_WARNING || console.warn(new Error(
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
li.DISABLE_DISPOSED_WARNING = !1;
let bn = li;
const Lr = class Lr {
  constructor() {
    this._store = new bn(), this._store;
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
Lr.None = Object.freeze({ dispose() {
} });
let $t = Lr;
var rt;
let ce = (rt = class {
  constructor(t) {
    this.element = t, this.next = rt.Undefined, this.prev = rt.Undefined;
  }
}, rt.Undefined = new rt(void 0), rt);
class bu {
  constructor() {
    this._first = ce.Undefined, this._last = ce.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === ce.Undefined;
  }
  clear() {
    let t = this._first;
    for (; t !== ce.Undefined; ) {
      const n = t.next;
      t.prev = ce.Undefined, t.next = ce.Undefined, t = n;
    }
    this._first = ce.Undefined, this._last = ce.Undefined, this._size = 0;
  }
  unshift(t) {
    return this._insert(t, !1);
  }
  push(t) {
    return this._insert(t, !0);
  }
  _insert(t, n) {
    const i = new ce(t);
    if (this._first === ce.Undefined)
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
    if (this._first !== ce.Undefined) {
      const t = this._first.element;
      return this._remove(this._first), t;
    }
  }
  pop() {
    if (this._last !== ce.Undefined) {
      const t = this._last.element;
      return this._remove(this._last), t;
    }
  }
  _remove(t) {
    if (t.prev !== ce.Undefined && t.next !== ce.Undefined) {
      const n = t.prev;
      n.next = t.next, t.next.prev = n;
    } else t.prev === ce.Undefined && t.next === ce.Undefined ? (this._first = ce.Undefined, this._last = ce.Undefined) : t.next === ce.Undefined ? (this._last = this._last.prev, this._last.next = ce.Undefined) : t.prev === ce.Undefined && (this._first = this._first.next, this._first.prev = ce.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t = this._first;
    for (; t !== ce.Undefined; )
      yield t.element, t = t.next;
  }
}
const _u = globalThis.performance && typeof globalThis.performance.now == "function";
class mi {
  static create(t) {
    return new mi(t);
  }
  constructor(t) {
    this._now = _u && t === !1 ? Date.now : globalThis.performance.now.bind(globalThis.performance), this._startTime = this._now(), this._stopTime = -1;
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
var Hn;
(function(e) {
  e.None = () => $t.None;
  function t(M, y) {
    return m(M, () => {
    }, 0, void 0, !0, void 0, y);
  }
  e.defer = t;
  function n(M) {
    return (y, N = null, P) => {
      let B = !1, G;
      return G = M((q) => {
        if (!B)
          return G ? G.dispose() : B = !0, y.call(N, q);
      }, null, P), B && G.dispose(), G;
    };
  }
  e.once = n;
  function i(M, y) {
    return e.once(e.filter(M, y));
  }
  e.onceIf = i;
  function r(M, y, N) {
    return c((P, B = null, G) => M((q) => P.call(B, y(q)), null, G), N);
  }
  e.map = r;
  function s(M, y, N) {
    return c((P, B = null, G) => M((q) => {
      y(q), P.call(B, q);
    }, null, G), N);
  }
  e.forEach = s;
  function a(M, y, N) {
    return c((P, B = null, G) => M((q) => y(q) && P.call(B, q), null, G), N);
  }
  e.filter = a;
  function l(M) {
    return M;
  }
  e.signal = l;
  function o(...M) {
    return (y, N = null, P) => {
      const B = gu(...M.map((G) => G((q) => y.call(N, q))));
      return h(B, P);
    };
  }
  e.any = o;
  function u(M, y, N, P) {
    let B = N;
    return r(M, (G) => (B = y(B, G), B), P);
  }
  e.reduce = u;
  function c(M, y) {
    let N;
    const P = {
      onWillAddFirstListener() {
        N = M(B.fire, B);
      },
      onDidRemoveLastListener() {
        N == null || N.dispose();
      }
    }, B = new Be(P);
    return y == null || y.add(B), B.event;
  }
  function h(M, y) {
    return y instanceof Array ? y.push(M) : y && y.add(M), M;
  }
  function m(M, y, N = 100, P = !1, B = !1, G, q) {
    let V, Z, se, ge = 0, Ee;
    const fi = {
      leakWarningThreshold: G,
      onWillAddFirstListener() {
        V = M((Gl) => {
          ge++, Z = y(Z, Gl), P && !se && (An.fire(Z), Z = void 0), Ee = () => {
            const jl = Z;
            Z = void 0, se = void 0, (!P || ge > 1) && An.fire(jl), ge = 0;
          }, typeof N == "number" ? (clearTimeout(se), se = setTimeout(Ee, N)) : se === void 0 && (se = 0, queueMicrotask(Ee));
        });
      },
      onWillRemoveListener() {
        B && ge > 0 && (Ee == null || Ee());
      },
      onDidRemoveLastListener() {
        Ee = void 0, V.dispose();
      }
    }, An = new Be(fi);
    return q == null || q.add(An), An.event;
  }
  e.debounce = m;
  function p(M, y = 0, N) {
    return e.debounce(M, (P, B) => P ? (P.push(B), P) : [B], y, void 0, !0, void 0, N);
  }
  e.accumulate = p;
  function _(M, y = (P, B) => P === B, N) {
    let P = !0, B;
    return a(M, (G) => {
      const q = P || !y(G, B);
      return P = !1, B = G, q;
    }, N);
  }
  e.latch = _;
  function f(M, y, N) {
    return [
      e.filter(M, y, N),
      e.filter(M, (P) => !y(P), N)
    ];
  }
  e.split = f;
  function L(M, y = !1, N = [], P) {
    let B = N.slice(), G = M((Z) => {
      B ? B.push(Z) : V.fire(Z);
    });
    P && P.add(G);
    const q = () => {
      B == null || B.forEach((Z) => V.fire(Z)), B = null;
    }, V = new Be({
      onWillAddFirstListener() {
        G || (G = M((Z) => V.fire(Z)), P && P.add(G));
      },
      onDidAddFirstListener() {
        B && (y ? setTimeout(q) : q());
      },
      onDidRemoveLastListener() {
        G && G.dispose(), G = null;
      }
    });
    return P && P.add(V), V.event;
  }
  e.buffer = L;
  function A(M, y) {
    return (P, B, G) => {
      const q = y(new k());
      return M(function(V) {
        const Z = q.evaluate(V);
        Z !== w && P.call(B, Z);
      }, void 0, G);
    };
  }
  e.chain = A;
  const w = Symbol("HaltChainable");
  class k {
    constructor() {
      this.steps = [];
    }
    map(y) {
      return this.steps.push(y), this;
    }
    forEach(y) {
      return this.steps.push((N) => (y(N), N)), this;
    }
    filter(y) {
      return this.steps.push((N) => y(N) ? N : w), this;
    }
    reduce(y, N) {
      let P = N;
      return this.steps.push((B) => (P = y(P, B), P)), this;
    }
    latch(y = (N, P) => N === P) {
      let N = !0, P;
      return this.steps.push((B) => {
        const G = N || !y(B, P);
        return N = !1, P = B, G ? B : w;
      }), this;
    }
    evaluate(y) {
      for (const N of this.steps)
        if (y = N(y), y === w)
          break;
      return y;
    }
  }
  function H(M, y, N = (P) => P) {
    const P = (...V) => q.fire(N(...V)), B = () => M.on(y, P), G = () => M.removeListener(y, P), q = new Be(
      { onWillAddFirstListener: B, onDidRemoveLastListener: G }
    );
    return q.event;
  }
  e.fromNodeEventEmitter = H;
  function D(M, y, N = (P) => P) {
    const P = (...V) => q.fire(N(...V)), B = () => M.addEventListener(y, P), G = () => M.removeEventListener(y, P), q = new Be(
      { onWillAddFirstListener: B, onDidRemoveLastListener: G }
    );
    return q.event;
  }
  e.fromDOMEventEmitter = D;
  function I(M, y) {
    return new Promise((N) => n(M)(N, null, y));
  }
  e.toPromise = I;
  function b(M) {
    const y = new Be();
    return M.then((N) => {
      y.fire(N);
    }, () => {
      y.fire(void 0);
    }).finally(() => {
      y.dispose();
    }), y.event;
  }
  e.fromPromise = b;
  function g(M, y) {
    return M((N) => y.fire(N));
  }
  e.forward = g;
  function x(M, y, N) {
    return y(N), M((P) => y(P));
  }
  e.runAndSubscribe = x;
  class W {
    constructor(y, N) {
      this._observable = y, this._counter = 0, this._hasChanged = !1;
      const P = {
        onWillAddFirstListener: () => {
          y.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          y.removeObserver(this);
        }
      };
      this.emitter = new Be(P), N && N.add(this.emitter);
    }
    beginUpdate(y) {
      this._counter++;
    }
    handlePossibleChange(y) {
    }
    handleChange(y, N) {
      this._hasChanged = !0;
    }
    endUpdate(y) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
    }
  }
  function U(M, y) {
    return new W(M, y).emitter.event;
  }
  e.fromObservable = U;
  function E(M) {
    return (y, N, P) => {
      let B = 0, G = !1;
      const q = {
        beginUpdate() {
          B++;
        },
        endUpdate() {
          B--, B === 0 && (M.reportChanges(), G && (G = !1, y.call(N)));
        },
        handlePossibleChange() {
        },
        handleChange() {
          G = !0;
        }
      };
      M.addObserver(q), M.reportChanges();
      const V = {
        dispose() {
          M.removeObserver(q);
        }
      };
      return P instanceof bn ? P.add(V) : Array.isArray(P) && P.push(V), V;
    };
  }
  e.fromObservableLight = E;
})(Hn || (Hn = {}));
const Ot = class Ot {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Ot._idPool++}`, Ot.all.add(this);
  }
  start(t) {
    this._stopWatch = new mi(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
Ot.all = /* @__PURE__ */ new Set(), Ot._idPool = 0;
let Ri = Ot, wu = -1;
const ui = class ui {
  constructor(t, n, i = (ui._idPool++).toString(16).padStart(3, "0")) {
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
      const o = new vu(l, s);
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
ui._idPool = 1;
let Ni = ui;
class _r {
  static create() {
    const t = new Error();
    return new _r(t.stack ?? "");
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
class vu extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerLeakError", this.stack = n;
  }
}
class Tu extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerRefusalError", this.stack = n;
  }
}
let yu = 0;
class pi {
  constructor(t) {
    this.value = t, this.id = yu++;
  }
}
const Au = 2;
class Be {
  constructor(t) {
    var n, i, r, s;
    this._size = 0, this._options = t, this._leakageMon = (n = this._options) != null && n.leakWarningThreshold ? new Ni(
      (t == null ? void 0 : t.onListenerError) ?? rn,
      ((i = this._options) == null ? void 0 : i.leakWarningThreshold) ?? wu
    ) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new Ri(this._options._profName) : void 0, this._deliveryQueue = (s = this._options) == null ? void 0 : s.deliveryQueue;
  }
  dispose() {
    var t, n, i, r;
    this._disposed || (this._disposed = !0, ((t = this._deliveryQueue) == null ? void 0 : t.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (i = (n = this._options) == null ? void 0 : n.onDidRemoveLastListener) == null || i.call(n), (r = this._leakageMon) == null || r.dispose());
  }
  get event() {
    return this._event ?? (this._event = (t, n, i) => {
      var l, o, u, c, h, m, p;
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const _ = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(_);
        const f = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], L = new Tu(
          `${_}. HINT: Stack shows most frequent listener (${f[1]}-times)`,
          f[0]
        );
        return (((l = this._options) == null ? void 0 : l.onListenerError) || rn)(L), $t.None;
      }
      if (this._disposed)
        return $t.None;
      n && (t = t.bind(n));
      const r = new pi(t);
      let s;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = _r.create(), s = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof pi ? (this._deliveryQueue ?? (this._deliveryQueue = new xu()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = r, (h = (c = this._options) == null ? void 0 : c.onDidAddFirstListener) == null || h.call(c, this)), (p = (m = this._options) == null ? void 0 : m.onDidAddListener) == null || p.call(m, this), this._size++;
      const a = gn(() => {
        s == null || s(), this._removeListener(r);
      });
      return i instanceof bn ? i.add(a) : Array.isArray(i) && i.push(a), a;
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
    if (this._size * Au <= n.length) {
      let u = 0;
      for (let c = 0; c < n.length; c++)
        n[c] ? n[u++] = n[c] : r && u < this._deliveryQueue.end && (this._deliveryQueue.end--, u < this._deliveryQueue.i && this._deliveryQueue.i--);
      n.length = u;
    }
  }
  _deliver(t, n) {
    var r;
    if (!t)
      return;
    const i = ((r = this._options) == null ? void 0 : r.onListenerError) || rn;
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
    if ((n = this._deliveryQueue) != null && n.current && (this._deliverQueue(this._deliveryQueue), (i = this._perfMon) == null || i.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners) if (this._listeners instanceof pi)
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
class xu {
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
function Lu() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function hl() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
const ku = hl() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Nr(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, r) => {
    const s = r[0], a = t[s];
    let l = i;
    return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l;
  }), ku && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function X(e, t, ...n) {
  return Nr(typeof e == "number" ? Eu(e, t) : t, n);
}
function Eu(e, t) {
  var i;
  const n = (i = Lu()) == null ? void 0 : i[e];
  if (typeof n != "string") {
    if (typeof t == "string")
      return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
const Ft = "en";
let _n = !1, wn = !1, Rn = !1, dl = !1, wr = !1, ml = !1, xn, Nn = Ft, Dr = Ft, Su, qe;
const st = globalThis;
let ve;
var rl;
typeof st.vscode < "u" && typeof st.vscode.process < "u" ? ve = st.vscode.process : typeof process < "u" && typeof ((rl = process == null ? void 0 : process.versions) == null ? void 0 : rl.node) == "string" && (ve = process);
var sl;
const Ru = typeof ((sl = ve == null ? void 0 : ve.versions) == null ? void 0 : sl.electron) == "string", Nu = Ru && (ve == null ? void 0 : ve.type) === "renderer";
var al;
if (typeof ve == "object") {
  _n = ve.platform === "win32", wn = ve.platform === "darwin", Rn = ve.platform === "linux", Rn && ve.env.SNAP && ve.env.SNAP_REVISION, ve.env.CI || ve.env.BUILD_ARTIFACTSTAGINGDIRECTORY, xn = Ft, Nn = Ft;
  const e = ve.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      xn = t.userLocale, Dr = t.osLocale, Nn = t.resolvedLanguage || Ft, Su = (al = t.languagePack) == null ? void 0 : al.translationsConfigFile;
    } catch {
    }
  dl = !0;
} else typeof navigator == "object" && !Nu ? (qe = navigator.userAgent, _n = qe.indexOf("Windows") >= 0, wn = qe.indexOf("Macintosh") >= 0, ml = (qe.indexOf("Macintosh") >= 0 || qe.indexOf("iPad") >= 0 || qe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Rn = qe.indexOf("Linux") >= 0, (qe == null ? void 0 : qe.indexOf("Mobi")) >= 0, wr = !0, Nn = hl() || Ft, xn = navigator.language.toLowerCase(), Dr = xn) : console.error("Unable to resolve platform.");
var qt;
(function(e) {
  e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(qt || (qt = {}));
qt.Web;
wn ? qt.Mac : _n ? qt.Windows : Rn && qt.Linux;
const Xt = _n, Du = wn, Mu = dl, Uu = wr, Iu = wr && typeof st.importScripts == "function", Fu = Iu ? st.origin : void 0, Je = qe, ut = Nn;
var Mr;
(function(e) {
  function t() {
    return ut;
  }
  e.value = t;
  function n() {
    return ut.length === 2 ? ut === "en" : ut.length >= 3 ? ut[0] === "e" && ut[1] === "n" && ut[2] === "-" : !1;
  }
  e.isDefaultVariant = n;
  function i() {
    return ut === "en";
  }
  e.isDefault = i;
})(Mr || (Mr = {}));
const Pu = typeof st.postMessage == "function" && !st.importScripts;
(() => {
  if (Pu) {
    const e = [];
    st.addEventListener("message", (n) => {
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
      }), st.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (e) => setTimeout(e);
})();
var on;
(function(e) {
  e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(on || (on = {}));
wn || ml ? on.Macintosh : _n ? on.Windows : on.Linux;
const Bu = !!(Je && Je.indexOf("Chrome") >= 0);
Je && Je.indexOf("Firefox") >= 0;
!Bu && Je && Je.indexOf("Safari") >= 0;
Je && Je.indexOf("Edg/") >= 0;
Je && Je.indexOf("Android") >= 0;
const fl = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
});
var On;
(function(e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof Dn ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: Hn.None
  }), e.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: fl
  });
})(On || (On = {}));
class Dn {
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
    return this._isCancelled ? fl : (this._emitter || (this._emitter = new Be()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}
class Hu {
  constructor(t) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = t && t.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new Dn()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof Dn && this._token.cancel() : this._token = On.Cancelled;
  }
  dispose(t = !1) {
    var n;
    t && this.cancel(), (n = this._parentListener) == null || n.dispose(), this._token ? this._token instanceof Dn && this._token.dispose() : this._token = On.None;
  }
}
function Ou(e) {
  return e;
}
class zu {
  constructor(t, n) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = Ou) : (this._fn = n, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const n = this._computeKey(t);
    return this.lastArgKey !== n && (this.lastArgKey = n, this.lastCache = this._fn(t)), this.lastCache;
  }
}
class Ur {
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
var We;
(function(e) {
  e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(We || (We = {}));
function Ir(e) {
  return e < 0 ? 0 : e > We.MAX_UINT_8 ? We.MAX_UINT_8 : e | 0;
}
function Et(e) {
  return e < 0 ? 0 : e > We.MAX_UINT_32 ? We.MAX_UINT_32 : e | 0;
}
function Wu(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function pl(e) {
  return e.split(/\r\n|\r|\n/);
}
function qu(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i !== S.Space && i !== S.Tab)
      return t;
  }
  return -1;
}
function Vu(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const i = e.charCodeAt(n);
    if (i !== S.Space && i !== S.Tab)
      return n;
  }
  return -1;
}
function Cu(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Gu(e, t, n = 0, i = e.length, r = 0, s = t.length) {
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
function gl(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    let o = e.charCodeAt(n), u = t.charCodeAt(r);
    if (o === u)
      continue;
    if (o >= 128 || u >= 128)
      return Gu(e.toLowerCase(), t.toLowerCase(), n, i, r, s);
    Fr(o) && (o -= 32), Fr(u) && (u -= 32);
    const c = o - u;
    if (c !== 0)
      return c;
  }
  const a = i - n, l = s - r;
  return a < l ? -1 : a > l ? 1 : 0;
}
function Fr(e) {
  return e >= S.a && e <= S.z;
}
function bl(e) {
  return e >= S.A && e <= S.Z;
}
function ju(e, t) {
  return e.length === t.length && gl(e, t) === 0;
}
function $u(e, t) {
  const n = t.length;
  return t.length > e.length ? !1 : gl(e, t, 0, n) === 0;
}
function Pr(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(i) !== t.charCodeAt(i))
      return i;
  return n;
}
function Xu(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  const r = e.length - 1, s = t.length - 1;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(r - i) !== t.charCodeAt(s - i))
      return i;
  return n;
}
function zn(e) {
  return 55296 <= e && e <= 56319;
}
function Di(e) {
  return 56320 <= e && e <= 57343;
}
function _l(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function Yu(e, t, n) {
  const i = e.charCodeAt(n);
  if (zn(i) && n + 1 < t) {
    const r = e.charCodeAt(n + 1);
    if (Di(r))
      return _l(i, r);
  }
  return i;
}
const Qu = /^[\t\n\r\x20-\x7E]*$/;
function Ju(e) {
  return Qu.test(e);
}
String.fromCharCode(S.UTF8_BOM);
var wt;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(wt || (wt = {}));
const Tt = class Tt {
  static getInstance() {
    return Tt._INSTANCE || (Tt._INSTANCE = new Tt()), Tt._INSTANCE;
  }
  constructor() {
    this._data = Zu();
  }
  getGraphemeBreakType(t) {
    if (t < 32)
      return t === S.LineFeed ? wt.LF : t === S.CarriageReturn ? wt.CR : wt.Control;
    if (t < 127)
      return wt.Other;
    const n = this._data, i = n.length / 3;
    let r = 1;
    for (; r <= i; )
      if (t < n[3 * r])
        r = 2 * r;
      else if (t > n[3 * r + 1])
        r = 2 * r + 1;
      else
        return n[3 * r + 2];
    return wt.Other;
  }
};
Tt._INSTANCE = null;
let Br = Tt;
function Zu() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var Mi;
(function(e) {
  e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(Mi || (Mi = {}));
const Ye = class Ye {
  static getInstance(t) {
    return Ye.cache.get(Array.from(t));
  }
  static getLocales() {
    return Ye._locales.value;
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
Ye.ambiguousCharacterData = new Ur(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Ye.cache = new zu({ getCacheKey: JSON.stringify }, (t) => {
  function n(c) {
    const h = /* @__PURE__ */ new Map();
    for (let m = 0; m < c.length; m += 2)
      h.set(c[m], c[m + 1]);
    return h;
  }
  function i(c, h) {
    const m = new Map(c);
    for (const [p, _] of h)
      m.set(p, _);
    return m;
  }
  function r(c, h) {
    if (!c)
      return h;
    const m = /* @__PURE__ */ new Map();
    for (const [p, _] of c)
      h.has(p) && m.set(p, _);
    return m;
  }
  const s = Ye.ambiguousCharacterData.value;
  let a = t.filter((c) => !c.startsWith("_") && c in s);
  a.length === 0 && (a = ["_default"]);
  let l;
  for (const c of a) {
    const h = n(s[c]);
    l = r(l, h);
  }
  const o = n(s._common), u = i(o, l);
  return new Ye(u);
}), Ye._locales = new Ur(() => Object.keys(Ye.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
let vn = Ye;
const yt = class yt {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(yt.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return yt.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && (yt.isInvisibleCharacter(i) || i === Mi.space))
        return !0;
    }
    return !1;
  }
  static get codePoints() {
    return yt.getData();
  }
};
yt._data = void 0;
let ln = yt;
const gi = "default", Ku = "$initialize";
var De;
(function(e) {
  e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(De || (De = {}));
class ec {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.method = r, this.args = s, this.type = De.Request;
  }
}
class Hr {
  constructor(t, n, i, r) {
    this.vsWorker = t, this.seq = n, this.res = i, this.err = r, this.type = De.Reply;
  }
}
class tc {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.eventName = r, this.arg = s, this.type = De.SubscribeEvent;
  }
}
class nc {
  constructor(t, n, i) {
    this.vsWorker = t, this.req = n, this.event = i, this.type = De.Event;
  }
}
class ic {
  constructor(t, n) {
    this.vsWorker = t, this.req = n, this.type = De.UnsubscribeEvent;
  }
}
class rc {
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
      }, this._send(new ec(this._workerId, r, t, n, i));
    });
  }
  listen(t, n, i) {
    let r = null;
    const s = new Be({
      onWillAddFirstListener: () => {
        r = String(++this._lastSentReq), this._pendingEmitters.set(r, s), this._send(new tc(this._workerId, r, t, n, i));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(r), this._send(new ic(this._workerId, r)), r = null;
      }
    });
    return s.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, n) {
    const i = {
      get: (r, s) => (typeof s == "string" && !r[s] && (vl(s) ? r[s] = (a) => this.listen(t, s, a) : wl(s) ? r[s] = this.listen(t, s, void 0) : s.charCodeAt(0) === S.DollarSign && (r[s] = async (...a) => (await (n == null ? void 0 : n()), this.sendMessage(t, s, a)))), r[s])
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), i);
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
      let i = t.err;
      t.err.$isError && (i = new Error(), i.name = t.err.name, i.message = t.err.message, i.stack = t.err.stack), n.reject(i);
      return;
    }
    n.resolve(t.res);
  }
  _handleRequestMessage(t) {
    const n = t.req;
    this._handler.handleMessage(t.channel, t.method, t.args).then((r) => {
      this._send(new Hr(this._workerId, n, r, void 0));
    }, (r) => {
      r.detail instanceof Error && (r.detail = xi(r.detail)), this._send(new Hr(this._workerId, n, void 0, xi(r)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const n = t.req, i = this._handler.handleEvent(t.channel, t.eventName, t.arg)((r) => {
      this._send(new nc(this._workerId, n, r));
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
    if (t.type === De.Request)
      for (let i = 0; i < t.args.length; i++)
        t.args[i] instanceof ArrayBuffer && n.push(t.args[i]);
    else t.type === De.Reply && t.res instanceof ArrayBuffer && n.push(t.res);
    this._handler.sendMessage(t, n);
  }
}
function wl(e) {
  return e[0] === "o" && e[1] === "n" && bl(e.charCodeAt(2));
}
function vl(e) {
  return /^onDynamic/.test(e) && bl(e.charCodeAt(9));
}
class sc {
  constructor(t, n) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new rc({
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
    if (t === gi && n === Ku)
      return this.initialize(i[0]);
    const r = t === gi ? this.requestHandler : this._localChannels.get(t);
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
    const r = t === gi ? this.requestHandler : this._localChannels.get(t);
    if (!r)
      throw new Error(`Missing channel ${t} on worker thread`);
    if (vl(n)) {
      const s = r[n].call(r, i);
      if (typeof s != "function")
        throw new Error(`Missing dynamic event ${n} on request handler.`);
      return s;
    }
    if (wl(n)) {
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
let Ui = !1;
function Tl(e) {
  if (Ui)
    throw new Error("WebWorker already initialized!");
  Ui = !0;
  const t = new sc(
    (n) => globalThis.postMessage(n),
    (n) => e(n)
  );
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function ac(e) {
  globalThis.onmessage = (t) => {
    Ui || Tl(e);
  };
}
class ht {
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
function Or(e, t) {
  return (t << 5) - t + e | 0;
}
function oc(e, t) {
  t = Or(149417, t);
  for (let n = 0, i = e.length; n < i; n++)
    t = Or(e.charCodeAt(n), t);
  return t;
}
var Pe;
(function(e) {
  e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(Pe || (Pe = {}));
function bi(e, t, n = 32) {
  const i = n - t, r = ~((1 << i) - 1);
  return (e << t | (r & e) >>> i) >>> 0;
}
function Zt(e, t = 32) {
  return e instanceof ArrayBuffer ? Array.from(new Uint8Array(e)).map((n) => n.toString(16).padStart(2, "0")).join("") : (e >>> 0).toString(16).padStart(t / 4, "0");
}
const ci = class ci {
  constructor() {
    this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(Pe.BLOCK_SIZE + 3), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
  }
  update(t) {
    const n = t.length;
    if (n === 0)
      return;
    const i = this._buff;
    let r = this._buffLen, s = this._leftoverHighSurrogate, a, l;
    for (s !== 0 ? (a = s, l = -1, s = 0) : (a = t.charCodeAt(0), l = 0); ; ) {
      let o = a;
      if (zn(a))
        if (l + 1 < n) {
          const u = t.charCodeAt(l + 1);
          Di(u) ? (l++, o = _l(a, u)) : o = Pe.UNICODE_REPLACEMENT;
        } else {
          s = a;
          break;
        }
      else Di(a) && (o = Pe.UNICODE_REPLACEMENT);
      if (r = this._push(i, r, o), l++, l < n)
        a = t.charCodeAt(l);
      else
        break;
    }
    this._buffLen = r, this._leftoverHighSurrogate = s;
  }
  _push(t, n, i) {
    return i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = 192 | (i & 1984) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : i < 65536 ? (t[n++] = 224 | (i & 61440) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0) : (t[n++] = 240 | (i & 1835008) >>> 18, t[n++] = 128 | (i & 258048) >>> 12, t[n++] = 128 | (i & 4032) >>> 6, t[n++] = 128 | (i & 63) >>> 0), n >= Pe.BLOCK_SIZE && (this._step(), n -= Pe.BLOCK_SIZE, this._totalLen += Pe.BLOCK_SIZE, t[0] = t[Pe.BLOCK_SIZE + 0], t[1] = t[Pe.BLOCK_SIZE + 1], t[2] = t[Pe.BLOCK_SIZE + 2]), n;
  }
  digest() {
    return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, Pe.UNICODE_REPLACEMENT)), this._totalLen += this._buffLen, this._wrapUp()), Zt(this._h0) + Zt(this._h1) + Zt(this._h2) + Zt(this._h3) + Zt(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
    const t = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
  }
  _step() {
    const t = ci._bigBlock32, n = this._buffDV;
    for (let h = 0; h < 64; h += 4)
      t.setUint32(h, n.getUint32(h, !1), !1);
    for (let h = 64; h < 320; h += 4)
      t.setUint32(h, bi(t.getUint32(h - 12, !1) ^ t.getUint32(h - 32, !1) ^ t.getUint32(h - 56, !1) ^ t.getUint32(h - 64, !1), 1), !1);
    let i = this._h0, r = this._h1, s = this._h2, a = this._h3, l = this._h4, o, u, c;
    for (let h = 0; h < 80; h++)
      h < 20 ? (o = r & s | ~r & a, u = 1518500249) : h < 40 ? (o = r ^ s ^ a, u = 1859775393) : h < 60 ? (o = r & s | r & a | s & a, u = 2400959708) : (o = r ^ s ^ a, u = 3395469782), c = bi(i, 5) + o + l + u + t.getUint32(h * 4, !1) & 4294967295, l = a, a = s, s = bi(r, 30), r = i, i = c;
    this._h0 = this._h0 + i & 4294967295, this._h1 = this._h1 + r & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + l & 4294967295;
  }
};
ci._bigBlock32 = new DataView(new ArrayBuffer(320));
let zr = ci;
class Wr {
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
function lc(e, t, n) {
  return new ft(new Wr(e), new Wr(t)).ComputeDiff(n).changes;
}
class St {
  static Assert(t, n) {
    if (!t)
      throw new Error(n);
  }
}
class Rt {
  static Copy(t, n, i, r, s) {
    for (let a = 0; a < s; a++)
      i[r + a] = t[n + a];
  }
  static Copy2(t, n, i, r, s) {
    for (let a = 0; a < s; a++)
      i[r + a] = t[n + a];
  }
}
var tt;
(function(e) {
  e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(tt || (tt = {}));
class qr {
  constructor() {
    this.m_changes = [], this.m_originalStart = We.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = We.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new ht(
      this.m_originalStart,
      this.m_originalCount,
      this.m_modifiedStart,
      this.m_modifiedCount
    )), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = We.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = We.MAX_SAFE_SMALL_INTEGER;
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
class ft {
  constructor(t, n, i = null) {
    this.ContinueProcessingPredicate = i, this._originalSequence = t, this._modifiedSequence = n;
    const [r, s, a] = ft._getElements(t), [l, o, u] = ft._getElements(n);
    this._hasStrings = a && u, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = l, this._modifiedElementsOrHash = o, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (ft._isStringArray(n)) {
      const i = new Int32Array(n.length);
      for (let r = 0, s = n.length; r < s; r++)
        i[r] = oc(n[r], 0);
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
    const i = ft._getStrictElement(this._originalSequence, t), r = ft._getStrictElement(this._modifiedSequence, n);
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
      let h;
      return i <= r ? (St.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), h = [
        new ht(t, 0, i, r - i + 1)
      ]) : t <= n ? (St.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), h = [
        new ht(t, n - t + 1, i, 0)
      ]) : (St.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), St.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), h = []), h;
    }
    const a = [0], l = [0], o = this.ComputeRecursionPoint(t, n, i, r, a, l, s), u = a[0], c = l[0];
    if (o !== null)
      return o;
    if (!s[0]) {
      const h = this.ComputeDiffRecursive(t, u, i, c, s);
      let m = [];
      return s[0] ? m = [
        new ht(
          u + 1,
          n - (u + 1) + 1,
          c + 1,
          r - (c + 1) + 1
        )
      ] : m = this.ComputeDiffRecursive(u + 1, n, c + 1, r, s), this.ConcatenateChanges(h, m);
    }
    return [
      new ht(
        t,
        n - t + 1,
        i,
        r - i + 1
      )
    ];
  }
  WALKTRACE(t, n, i, r, s, a, l, o, u, c, h, m, p, _, f, L, A, w) {
    let k = null, H = null, D = new qr(), I = n, b = i, g = p[0] - L[0] - r, x = We.MIN_SAFE_SMALL_INTEGER, W = this.m_forwardHistory.length - 1;
    do {
      const U = g + t;
      U === I || U < b && u[U - 1] < u[U + 1] ? (h = u[U + 1], _ = h - g - r, h < x && D.MarkNextChange(), x = h, D.AddModifiedElement(h + 1, _), g = U + 1 - t) : (h = u[U - 1] + 1, _ = h - g - r, h < x && D.MarkNextChange(), x = h - 1, D.AddOriginalElement(h, _ + 1), g = U - 1 - t), W >= 0 && (u = this.m_forwardHistory[W], t = u[0], I = 1, b = u.length - 1);
    } while (--W >= -1);
    if (k = D.getReverseChanges(), w[0]) {
      let U = p[0] + 1, E = L[0] + 1;
      if (k !== null && k.length > 0) {
        const M = k[k.length - 1];
        U = Math.max(U, M.getOriginalEnd()), E = Math.max(E, M.getModifiedEnd());
      }
      H = [
        new ht(
          U,
          m - U + 1,
          E,
          f - E + 1
        )
      ];
    } else {
      D = new qr(), I = a, b = l, g = p[0] - L[0] - o, x = We.MAX_SAFE_SMALL_INTEGER, W = A ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const U = g + s;
        U === I || U < b && c[U - 1] >= c[U + 1] ? (h = c[U + 1] - 1, _ = h - g - o, h > x && D.MarkNextChange(), x = h + 1, D.AddOriginalElement(h + 1, _ + 1), g = U + 1 - s) : (h = c[U - 1], _ = h - g - o, h > x && D.MarkNextChange(), x = h, D.AddModifiedElement(h + 1, _ + 1), g = U - 1 - s), W >= 0 && (c = this.m_reverseHistory[W], s = c[0], I = 1, b = c.length - 1);
      } while (--W >= -1);
      H = D.getChanges();
    }
    return this.ConcatenateChanges(k, H);
  }
  ComputeRecursionPoint(t, n, i, r, s, a, l) {
    let o = 0, u = 0, c = 0, h = 0, m = 0, p = 0;
    t--, i--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const _ = n - t + (r - i), f = _ + 1, L = new Int32Array(f), A = new Int32Array(f), w = r - i, k = n - t, H = t - i, D = n - r, b = (k - w) % 2 === 0;
    L[w] = t, A[k] = n, l[0] = !1;
    for (let g = 1; g <= _ / 2 + 1; g++) {
      let x = 0, W = 0;
      c = this.ClipDiagonalBound(w - g, g, w, f), h = this.ClipDiagonalBound(w + g, g, w, f);
      for (let E = c; E <= h; E += 2) {
        E === c || E < h && L[E - 1] < L[E + 1] ? o = L[E + 1] : o = L[E - 1] + 1, u = o - (E - w) - H;
        const M = o;
        for (; o < n && u < r && this.ElementsAreEqual(o + 1, u + 1); )
          o++, u++;
        if (L[E] = o, o + u > x + W && (x = o, W = u), !b && Math.abs(E - k) <= g - 1 && o >= A[E])
          return s[0] = o, a[0] = u, M <= A[E] && tt.MaxDifferencesHistory > 0 && g <= tt.MaxDifferencesHistory + 1 ? this.WALKTRACE(w, c, h, H, k, m, p, D, L, A, o, n, s, u, r, a, b, l) : null;
      }
      const U = (x - t + (W - i) - g) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(x, U))
        return l[0] = !0, s[0] = x, a[0] = W, U > 0 && tt.MaxDifferencesHistory > 0 && g <= tt.MaxDifferencesHistory + 1 ? this.WALKTRACE(w, c, h, H, k, m, p, D, L, A, o, n, s, u, r, a, b, l) : (t++, i++, [
          new ht(
            t,
            n - t + 1,
            i,
            r - i + 1
          )
        ]);
      m = this.ClipDiagonalBound(k - g, g, k, f), p = this.ClipDiagonalBound(k + g, g, k, f);
      for (let E = m; E <= p; E += 2) {
        E === m || E < p && A[E - 1] >= A[E + 1] ? o = A[E + 1] - 1 : o = A[E - 1], u = o - (E - k) - D;
        const M = o;
        for (; o > t && u > i && this.ElementsAreEqual(o, u); )
          o--, u--;
        if (A[E] = o, b && Math.abs(E - w) <= g && o <= L[E])
          return s[0] = o, a[0] = u, M >= L[E] && tt.MaxDifferencesHistory > 0 && g <= tt.MaxDifferencesHistory + 1 ? this.WALKTRACE(w, c, h, H, k, m, p, D, L, A, o, n, s, u, r, a, b, l) : null;
      }
      if (g <= tt.MaxDifferencesHistory) {
        let E = new Int32Array(h - c + 2);
        E[0] = w - c + 1, Rt.Copy2(L, c, E, 1, h - c + 1), this.m_forwardHistory.push(E), E = new Int32Array(p - m + 2), E[0] = k - m + 1, Rt.Copy2(A, m, E, 1, p - m + 1), this.m_reverseHistory.push(E);
      }
    }
    return this.WALKTRACE(w, c, h, H, k, m, p, D, L, A, o, n, s, u, r, a, b, l);
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
        const h = t[n - 1];
        r = h.originalStart + h.originalLength, s = h.modifiedStart + h.modifiedLength;
      }
      const a = i.originalLength > 0, l = i.modifiedLength > 0;
      let o = 0, u = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
      for (let h = 1; ; h++) {
        const m = i.originalStart - h, p = i.modifiedStart - h;
        if (m < r || p < s || a && !this.OriginalElementsAreEqual(m, m + i.originalLength) || l && !this.ModifiedElementsAreEqual(p, p + i.modifiedLength))
          break;
        const f = (m === r && p === s ? 5 : 0) + this._boundaryScore(m, i.originalLength, p, i.modifiedLength);
        f > u && (u = f, o = h);
      }
      i.originalStart -= o, i.modifiedStart -= o;
      const c = [null];
      if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], c)) {
        t[n - 1] = c[0], t.splice(n, 1), n++;
        continue;
      }
    }
    if (this._hasStrings)
      for (let n = 1, i = t.length; n < i; n++) {
        const r = t[n - 1], s = t[n], a = s.originalStart - r.originalStart - r.originalLength, l = r.originalStart, o = s.originalStart + s.originalLength, u = o - l, c = r.modifiedStart, h = s.modifiedStart + s.modifiedLength, m = h - c;
        if (a < 5 && u < 20 && m < 20) {
          const p = this._findBetterContiguousSequence(l, u, c, m, a);
          if (p) {
            const [_, f] = p;
            (_ !== r.originalStart + r.originalLength || f !== r.modifiedStart + r.modifiedLength) && (r.originalLength = _ - r.originalStart, r.modifiedLength = f - r.modifiedStart, s.originalStart = _ + a, s.modifiedStart = f + a, s.originalLength = o - s.originalStart, s.modifiedLength = h - s.modifiedStart);
          }
        }
      }
    return t;
  }
  _findBetterContiguousSequence(t, n, i, r, s) {
    if (n < s || r < s)
      return null;
    const a = t + n - s + 1, l = i + r - s + 1;
    let o = 0, u = 0, c = 0;
    for (let h = t; h < a; h++)
      for (let m = i; m < l; m++) {
        const p = this._contiguousSequenceScore(h, m, s);
        p > 0 && p > o && (o = p, u = h, c = m);
      }
    return o > 0 ? [u, c] : null;
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
      return Rt.Copy(t, 0, r, 0, t.length - 1), r[t.length - 1] = i[0], Rt.Copy(n, 1, r, t.length, n.length - 1), r;
    } else {
      const r = new Array(t.length + n.length);
      return Rt.Copy(t, 0, r, 0, t.length), Rt.Copy(n, 0, r, t.length, n.length), r;
    }
  }
  ChangesOverlap(t, n, i) {
    if (St.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), St.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const r = t.originalStart;
      let s = t.originalLength;
      const a = t.modifiedStart;
      let l = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (l = n.modifiedStart + n.modifiedLength - t.modifiedStart), i[0] = new ht(r, s, a, l), !0;
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
let ie = class _t {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new _t(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return _t.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return _t.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return _t.isBeforeOrEqual(this, t);
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
    return new _t(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new _t(t.lineNumber, t.column);
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
}, Y = class me {
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
    const l = n.startLineNumber, o = n.startColumn, u = n.endLineNumber, c = n.endColumn;
    return i < l ? (i = l, r = o) : i === l && (r = Math.max(r, o)), s > u ? (s = u, a = c) : s === u && (a = Math.min(a, c)), i > s || i === s && r > a ? null : new me(
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
    return new ie(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return me.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new ie(t.startLineNumber, t.startColumn);
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
          const u = t.endLineNumber | 0, c = n.endLineNumber | 0;
          if (u === c) {
            const h = t.endColumn | 0, m = n.endColumn | 0;
            return h - m;
          }
          return u - c;
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
class vr {
  constructor(t) {
    const n = Ir(t);
    this._defaultValue = n, this._asciiMap = vr._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const i = Ir(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = i : this._map.set(t, i);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}
var Vr;
(function(e) {
  e[e.False = 0] = "False", e[e.True = 1] = "True";
})(Vr || (Vr = {}));
var $;
(function(e) {
  e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})($ || ($ = {}));
class uc {
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
class cc {
  constructor(t) {
    let n = 0, i = $.Invalid;
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      o > n && (n = o), l > i && (i = l), u > i && (i = u);
    }
    n++, i++;
    const r = new uc(i, n, $.Invalid);
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      r.set(l, o, u);
    }
    this._states = r, this._maxCharCode = n;
  }
  nextState(t, n) {
    return n < 0 || n >= this._maxCharCode ? $.Invalid : this._states.get(t, n);
  }
}
let _i = null;
function hc() {
  return _i === null && (_i = new cc([
    [$.Start, S.h, $.H],
    [$.Start, S.H, $.H],
    [$.Start, S.f, $.F],
    [$.Start, S.F, $.F],
    [$.H, S.t, $.HT],
    [$.H, S.T, $.HT],
    [$.HT, S.t, $.HTT],
    [$.HT, S.T, $.HTT],
    [$.HTT, S.p, $.HTTP],
    [$.HTT, S.P, $.HTTP],
    [$.HTTP, S.s, $.BeforeColon],
    [$.HTTP, S.S, $.BeforeColon],
    [$.HTTP, S.Colon, $.AfterColon],
    [$.F, S.i, $.FI],
    [$.F, S.I, $.FI],
    [$.FI, S.l, $.FIL],
    [$.FI, S.L, $.FIL],
    [$.FIL, S.e, $.BeforeColon],
    [$.FIL, S.E, $.BeforeColon],
    [$.BeforeColon, S.Colon, $.AfterColon],
    [$.AfterColon, S.Slash, $.AlmostThere],
    [$.AlmostThere, S.Slash, $.End]
  ])), _i;
}
var oe;
(function(e) {
  e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(oe || (oe = {}));
let Kt = null;
function dc() {
  if (Kt === null) {
    Kt = new vr(oe.None);
    const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…`;
    for (let n = 0; n < e.length; n++)
      Kt.set(e.charCodeAt(n), oe.ForceTermination);
    const t = ".,;:";
    for (let n = 0; n < t.length; n++)
      Kt.set(t.charCodeAt(n), oe.CannotEndIn);
  }
  return Kt;
}
class Wn {
  static _createLink(t, n, i, r, s) {
    let a = s - 1;
    do {
      const l = n.charCodeAt(a);
      if (t.get(l) !== oe.CannotEndIn)
        break;
      a--;
    } while (a > r);
    if (r > 0) {
      const l = n.charCodeAt(r - 1), o = n.charCodeAt(a);
      (l === S.OpenParen && o === S.CloseParen || l === S.OpenSquareBracket && o === S.CloseSquareBracket || l === S.OpenCurlyBrace && o === S.CloseCurlyBrace) && a--;
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
  static computeLinks(t, n = hc()) {
    const i = dc(), r = [];
    for (let s = 1, a = t.getLineCount(); s <= a; s++) {
      const l = t.getLineContent(s), o = l.length;
      let u = 0, c = 0, h = 0, m = $.Start, p = !1, _ = !1, f = !1, L = !1;
      for (; u < o; ) {
        let A = !1;
        const w = l.charCodeAt(u);
        if (m === $.Accept) {
          let k;
          switch (w) {
            case S.OpenParen:
              p = !0, k = oe.None;
              break;
            case S.CloseParen:
              k = p ? oe.None : oe.ForceTermination;
              break;
            case S.OpenSquareBracket:
              f = !0, _ = !0, k = oe.None;
              break;
            case S.CloseSquareBracket:
              f = !1, k = _ ? oe.None : oe.ForceTermination;
              break;
            case S.OpenCurlyBrace:
              L = !0, k = oe.None;
              break;
            case S.CloseCurlyBrace:
              k = L ? oe.None : oe.ForceTermination;
              break;
            case S.SingleQuote:
            case S.DoubleQuote:
            case S.BackTick:
              h === w ? k = oe.ForceTermination : h === S.SingleQuote || h === S.DoubleQuote || h === S.BackTick ? k = oe.None : k = oe.ForceTermination;
              break;
            case S.Asterisk:
              k = h === S.Asterisk ? oe.ForceTermination : oe.None;
              break;
            case S.Pipe:
              k = h === S.Pipe ? oe.ForceTermination : oe.None;
              break;
            case S.Space:
              k = f ? oe.None : oe.ForceTermination;
              break;
            default:
              k = i.get(w);
          }
          k === oe.ForceTermination && (r.push(Wn._createLink(i, l, s, c, u)), A = !0);
        } else if (m === $.End) {
          let k;
          w === S.OpenSquareBracket ? (_ = !0, k = oe.None) : k = i.get(w), k === oe.ForceTermination ? A = !0 : m = $.Accept;
        } else
          m = n.nextState(m, w), m === $.Invalid && (A = !0);
        A && (m = $.Start, p = !1, _ = !1, L = !1, c = u + 1, h = w), u++;
      }
      m === $.Accept && r.push(Wn._createLink(i, l, s, c, o));
    }
    return r;
  }
}
function mc(e) {
  return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : Wn.computeLinks(e);
}
const hi = class hi {
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
hi.INSTANCE = new hi();
let Ii = hi;
var v;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(v || (v = {}));
var T;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(T || (T = {}));
class Tr {
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
const Mn = new Tr(), Fi = new Tr(), Pi = new Tr(), fc = new Array(230), pc = /* @__PURE__ */ Object.create(null), gc = /* @__PURE__ */ Object.create(null), Bi = [];
for (let e = 0; e <= T.MAX_VALUE; e++)
  v.DependsOnKbLayout;
for (let e = 0; e <= v.MAX_VALUE; e++)
  Bi[e] = T.DependsOnKbLayout;
(function() {
  const e = "", t = [
    [1, T.None, "None", v.Unknown, "unknown", 0, "VK_UNKNOWN", e, e],
    [1, T.Hyper, "Hyper", v.Unknown, e, 0, e, e, e],
    [1, T.Super, "Super", v.Unknown, e, 0, e, e, e],
    [1, T.Fn, "Fn", v.Unknown, e, 0, e, e, e],
    [1, T.FnLock, "FnLock", v.Unknown, e, 0, e, e, e],
    [1, T.Suspend, "Suspend", v.Unknown, e, 0, e, e, e],
    [1, T.Resume, "Resume", v.Unknown, e, 0, e, e, e],
    [1, T.Turbo, "Turbo", v.Unknown, e, 0, e, e, e],
    [1, T.Sleep, "Sleep", v.Unknown, e, 0, "VK_SLEEP", e, e],
    [1, T.WakeUp, "WakeUp", v.Unknown, e, 0, e, e, e],
    [0, T.KeyA, "KeyA", v.KeyA, "A", 65, "VK_A", e, e],
    [0, T.KeyB, "KeyB", v.KeyB, "B", 66, "VK_B", e, e],
    [0, T.KeyC, "KeyC", v.KeyC, "C", 67, "VK_C", e, e],
    [0, T.KeyD, "KeyD", v.KeyD, "D", 68, "VK_D", e, e],
    [0, T.KeyE, "KeyE", v.KeyE, "E", 69, "VK_E", e, e],
    [0, T.KeyF, "KeyF", v.KeyF, "F", 70, "VK_F", e, e],
    [0, T.KeyG, "KeyG", v.KeyG, "G", 71, "VK_G", e, e],
    [0, T.KeyH, "KeyH", v.KeyH, "H", 72, "VK_H", e, e],
    [0, T.KeyI, "KeyI", v.KeyI, "I", 73, "VK_I", e, e],
    [0, T.KeyJ, "KeyJ", v.KeyJ, "J", 74, "VK_J", e, e],
    [0, T.KeyK, "KeyK", v.KeyK, "K", 75, "VK_K", e, e],
    [0, T.KeyL, "KeyL", v.KeyL, "L", 76, "VK_L", e, e],
    [0, T.KeyM, "KeyM", v.KeyM, "M", 77, "VK_M", e, e],
    [0, T.KeyN, "KeyN", v.KeyN, "N", 78, "VK_N", e, e],
    [0, T.KeyO, "KeyO", v.KeyO, "O", 79, "VK_O", e, e],
    [0, T.KeyP, "KeyP", v.KeyP, "P", 80, "VK_P", e, e],
    [0, T.KeyQ, "KeyQ", v.KeyQ, "Q", 81, "VK_Q", e, e],
    [0, T.KeyR, "KeyR", v.KeyR, "R", 82, "VK_R", e, e],
    [0, T.KeyS, "KeyS", v.KeyS, "S", 83, "VK_S", e, e],
    [0, T.KeyT, "KeyT", v.KeyT, "T", 84, "VK_T", e, e],
    [0, T.KeyU, "KeyU", v.KeyU, "U", 85, "VK_U", e, e],
    [0, T.KeyV, "KeyV", v.KeyV, "V", 86, "VK_V", e, e],
    [0, T.KeyW, "KeyW", v.KeyW, "W", 87, "VK_W", e, e],
    [0, T.KeyX, "KeyX", v.KeyX, "X", 88, "VK_X", e, e],
    [0, T.KeyY, "KeyY", v.KeyY, "Y", 89, "VK_Y", e, e],
    [0, T.KeyZ, "KeyZ", v.KeyZ, "Z", 90, "VK_Z", e, e],
    [0, T.Digit1, "Digit1", v.Digit1, "1", 49, "VK_1", e, e],
    [0, T.Digit2, "Digit2", v.Digit2, "2", 50, "VK_2", e, e],
    [0, T.Digit3, "Digit3", v.Digit3, "3", 51, "VK_3", e, e],
    [0, T.Digit4, "Digit4", v.Digit4, "4", 52, "VK_4", e, e],
    [0, T.Digit5, "Digit5", v.Digit5, "5", 53, "VK_5", e, e],
    [0, T.Digit6, "Digit6", v.Digit6, "6", 54, "VK_6", e, e],
    [0, T.Digit7, "Digit7", v.Digit7, "7", 55, "VK_7", e, e],
    [0, T.Digit8, "Digit8", v.Digit8, "8", 56, "VK_8", e, e],
    [0, T.Digit9, "Digit9", v.Digit9, "9", 57, "VK_9", e, e],
    [0, T.Digit0, "Digit0", v.Digit0, "0", 48, "VK_0", e, e],
    [1, T.Enter, "Enter", v.Enter, "Enter", 13, "VK_RETURN", e, e],
    [1, T.Escape, "Escape", v.Escape, "Escape", 27, "VK_ESCAPE", e, e],
    [1, T.Backspace, "Backspace", v.Backspace, "Backspace", 8, "VK_BACK", e, e],
    [1, T.Tab, "Tab", v.Tab, "Tab", 9, "VK_TAB", e, e],
    [1, T.Space, "Space", v.Space, "Space", 32, "VK_SPACE", e, e],
    [0, T.Minus, "Minus", v.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, T.Equal, "Equal", v.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, T.BracketLeft, "BracketLeft", v.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, T.BracketRight, "BracketRight", v.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, T.Backslash, "Backslash", v.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, T.IntlHash, "IntlHash", v.Unknown, e, 0, e, e, e],
    [0, T.Semicolon, "Semicolon", v.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, T.Quote, "Quote", v.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, T.Backquote, "Backquote", v.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, T.Comma, "Comma", v.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, T.Period, "Period", v.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, T.Slash, "Slash", v.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, T.CapsLock, "CapsLock", v.CapsLock, "CapsLock", 20, "VK_CAPITAL", e, e],
    [1, T.F1, "F1", v.F1, "F1", 112, "VK_F1", e, e],
    [1, T.F2, "F2", v.F2, "F2", 113, "VK_F2", e, e],
    [1, T.F3, "F3", v.F3, "F3", 114, "VK_F3", e, e],
    [1, T.F4, "F4", v.F4, "F4", 115, "VK_F4", e, e],
    [1, T.F5, "F5", v.F5, "F5", 116, "VK_F5", e, e],
    [1, T.F6, "F6", v.F6, "F6", 117, "VK_F6", e, e],
    [1, T.F7, "F7", v.F7, "F7", 118, "VK_F7", e, e],
    [1, T.F8, "F8", v.F8, "F8", 119, "VK_F8", e, e],
    [1, T.F9, "F9", v.F9, "F9", 120, "VK_F9", e, e],
    [1, T.F10, "F10", v.F10, "F10", 121, "VK_F10", e, e],
    [1, T.F11, "F11", v.F11, "F11", 122, "VK_F11", e, e],
    [1, T.F12, "F12", v.F12, "F12", 123, "VK_F12", e, e],
    [1, T.PrintScreen, "PrintScreen", v.Unknown, e, 0, e, e, e],
    [1, T.ScrollLock, "ScrollLock", v.ScrollLock, "ScrollLock", 145, "VK_SCROLL", e, e],
    [1, T.Pause, "Pause", v.PauseBreak, "PauseBreak", 19, "VK_PAUSE", e, e],
    [1, T.Insert, "Insert", v.Insert, "Insert", 45, "VK_INSERT", e, e],
    [1, T.Home, "Home", v.Home, "Home", 36, "VK_HOME", e, e],
    [1, T.PageUp, "PageUp", v.PageUp, "PageUp", 33, "VK_PRIOR", e, e],
    [1, T.Delete, "Delete", v.Delete, "Delete", 46, "VK_DELETE", e, e],
    [1, T.End, "End", v.End, "End", 35, "VK_END", e, e],
    [1, T.PageDown, "PageDown", v.PageDown, "PageDown", 34, "VK_NEXT", e, e],
    [1, T.ArrowRight, "ArrowRight", v.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", e],
    [1, T.ArrowLeft, "ArrowLeft", v.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", e],
    [1, T.ArrowDown, "ArrowDown", v.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", e],
    [1, T.ArrowUp, "ArrowUp", v.UpArrow, "UpArrow", 38, "VK_UP", "Up", e],
    [1, T.NumLock, "NumLock", v.NumLock, "NumLock", 144, "VK_NUMLOCK", e, e],
    [1, T.NumpadDivide, "NumpadDivide", v.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", e, e],
    [1, T.NumpadMultiply, "NumpadMultiply", v.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", e, e],
    [1, T.NumpadSubtract, "NumpadSubtract", v.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", e, e],
    [1, T.NumpadAdd, "NumpadAdd", v.NumpadAdd, "NumPad_Add", 107, "VK_ADD", e, e],
    [1, T.NumpadEnter, "NumpadEnter", v.Enter, e, 0, e, e, e],
    [1, T.Numpad1, "Numpad1", v.Numpad1, "NumPad1", 97, "VK_NUMPAD1", e, e],
    [1, T.Numpad2, "Numpad2", v.Numpad2, "NumPad2", 98, "VK_NUMPAD2", e, e],
    [1, T.Numpad3, "Numpad3", v.Numpad3, "NumPad3", 99, "VK_NUMPAD3", e, e],
    [1, T.Numpad4, "Numpad4", v.Numpad4, "NumPad4", 100, "VK_NUMPAD4", e, e],
    [1, T.Numpad5, "Numpad5", v.Numpad5, "NumPad5", 101, "VK_NUMPAD5", e, e],
    [1, T.Numpad6, "Numpad6", v.Numpad6, "NumPad6", 102, "VK_NUMPAD6", e, e],
    [1, T.Numpad7, "Numpad7", v.Numpad7, "NumPad7", 103, "VK_NUMPAD7", e, e],
    [1, T.Numpad8, "Numpad8", v.Numpad8, "NumPad8", 104, "VK_NUMPAD8", e, e],
    [1, T.Numpad9, "Numpad9", v.Numpad9, "NumPad9", 105, "VK_NUMPAD9", e, e],
    [1, T.Numpad0, "Numpad0", v.Numpad0, "NumPad0", 96, "VK_NUMPAD0", e, e],
    [1, T.NumpadDecimal, "NumpadDecimal", v.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", e, e],
    [0, T.IntlBackslash, "IntlBackslash", v.IntlBackslash, "OEM_102", 226, "VK_OEM_102", e, e],
    [1, T.ContextMenu, "ContextMenu", v.ContextMenu, "ContextMenu", 93, e, e, e],
    [1, T.Power, "Power", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadEqual, "NumpadEqual", v.Unknown, e, 0, e, e, e],
    [1, T.F13, "F13", v.F13, "F13", 124, "VK_F13", e, e],
    [1, T.F14, "F14", v.F14, "F14", 125, "VK_F14", e, e],
    [1, T.F15, "F15", v.F15, "F15", 126, "VK_F15", e, e],
    [1, T.F16, "F16", v.F16, "F16", 127, "VK_F16", e, e],
    [1, T.F17, "F17", v.F17, "F17", 128, "VK_F17", e, e],
    [1, T.F18, "F18", v.F18, "F18", 129, "VK_F18", e, e],
    [1, T.F19, "F19", v.F19, "F19", 130, "VK_F19", e, e],
    [1, T.F20, "F20", v.F20, "F20", 131, "VK_F20", e, e],
    [1, T.F21, "F21", v.F21, "F21", 132, "VK_F21", e, e],
    [1, T.F22, "F22", v.F22, "F22", 133, "VK_F22", e, e],
    [1, T.F23, "F23", v.F23, "F23", 134, "VK_F23", e, e],
    [1, T.F24, "F24", v.F24, "F24", 135, "VK_F24", e, e],
    [1, T.Open, "Open", v.Unknown, e, 0, e, e, e],
    [1, T.Help, "Help", v.Unknown, e, 0, e, e, e],
    [1, T.Select, "Select", v.Unknown, e, 0, e, e, e],
    [1, T.Again, "Again", v.Unknown, e, 0, e, e, e],
    [1, T.Undo, "Undo", v.Unknown, e, 0, e, e, e],
    [1, T.Cut, "Cut", v.Unknown, e, 0, e, e, e],
    [1, T.Copy, "Copy", v.Unknown, e, 0, e, e, e],
    [1, T.Paste, "Paste", v.Unknown, e, 0, e, e, e],
    [1, T.Find, "Find", v.Unknown, e, 0, e, e, e],
    [1, T.AudioVolumeMute, "AudioVolumeMute", v.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", e, e],
    [1, T.AudioVolumeUp, "AudioVolumeUp", v.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", e, e],
    [1, T.AudioVolumeDown, "AudioVolumeDown", v.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", e, e],
    [1, T.NumpadComma, "NumpadComma", v.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", e, e],
    [0, T.IntlRo, "IntlRo", v.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", e, e],
    [1, T.KanaMode, "KanaMode", v.Unknown, e, 0, e, e, e],
    [0, T.IntlYen, "IntlYen", v.Unknown, e, 0, e, e, e],
    [1, T.Convert, "Convert", v.Unknown, e, 0, e, e, e],
    [1, T.NonConvert, "NonConvert", v.Unknown, e, 0, e, e, e],
    [1, T.Lang1, "Lang1", v.Unknown, e, 0, e, e, e],
    [1, T.Lang2, "Lang2", v.Unknown, e, 0, e, e, e],
    [1, T.Lang3, "Lang3", v.Unknown, e, 0, e, e, e],
    [1, T.Lang4, "Lang4", v.Unknown, e, 0, e, e, e],
    [1, T.Lang5, "Lang5", v.Unknown, e, 0, e, e, e],
    [1, T.Abort, "Abort", v.Unknown, e, 0, e, e, e],
    [1, T.Props, "Props", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadParenLeft, "NumpadParenLeft", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadParenRight, "NumpadParenRight", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadBackspace, "NumpadBackspace", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadMemoryStore, "NumpadMemoryStore", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadMemoryRecall, "NumpadMemoryRecall", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadMemoryClear, "NumpadMemoryClear", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadMemoryAdd, "NumpadMemoryAdd", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadMemorySubtract, "NumpadMemorySubtract", v.Unknown, e, 0, e, e, e],
    [1, T.NumpadClear, "NumpadClear", v.Clear, "Clear", 12, "VK_CLEAR", e, e],
    [1, T.NumpadClearEntry, "NumpadClearEntry", v.Unknown, e, 0, e, e, e],
    [1, T.None, e, v.Ctrl, "Ctrl", 17, "VK_CONTROL", e, e],
    [1, T.None, e, v.Shift, "Shift", 16, "VK_SHIFT", e, e],
    [1, T.None, e, v.Alt, "Alt", 18, "VK_MENU", e, e],
    [1, T.None, e, v.Meta, "Meta", 91, "VK_COMMAND", e, e],
    [1, T.ControlLeft, "ControlLeft", v.Ctrl, e, 0, "VK_LCONTROL", e, e],
    [1, T.ShiftLeft, "ShiftLeft", v.Shift, e, 0, "VK_LSHIFT", e, e],
    [1, T.AltLeft, "AltLeft", v.Alt, e, 0, "VK_LMENU", e, e],
    [1, T.MetaLeft, "MetaLeft", v.Meta, e, 0, "VK_LWIN", e, e],
    [1, T.ControlRight, "ControlRight", v.Ctrl, e, 0, "VK_RCONTROL", e, e],
    [1, T.ShiftRight, "ShiftRight", v.Shift, e, 0, "VK_RSHIFT", e, e],
    [1, T.AltRight, "AltRight", v.Alt, e, 0, "VK_RMENU", e, e],
    [1, T.MetaRight, "MetaRight", v.Meta, e, 0, "VK_RWIN", e, e],
    [1, T.BrightnessUp, "BrightnessUp", v.Unknown, e, 0, e, e, e],
    [1, T.BrightnessDown, "BrightnessDown", v.Unknown, e, 0, e, e, e],
    [1, T.MediaPlay, "MediaPlay", v.Unknown, e, 0, e, e, e],
    [1, T.MediaRecord, "MediaRecord", v.Unknown, e, 0, e, e, e],
    [1, T.MediaFastForward, "MediaFastForward", v.Unknown, e, 0, e, e, e],
    [1, T.MediaRewind, "MediaRewind", v.Unknown, e, 0, e, e, e],
    [1, T.MediaTrackNext, "MediaTrackNext", v.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", e, e],
    [1, T.MediaTrackPrevious, "MediaTrackPrevious", v.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", e, e],
    [1, T.MediaStop, "MediaStop", v.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", e, e],
    [1, T.Eject, "Eject", v.Unknown, e, 0, e, e, e],
    [1, T.MediaPlayPause, "MediaPlayPause", v.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", e, e],
    [1, T.MediaSelect, "MediaSelect", v.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", e, e],
    [1, T.LaunchMail, "LaunchMail", v.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", e, e],
    [1, T.LaunchApp2, "LaunchApp2", v.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", e, e],
    [1, T.LaunchApp1, "LaunchApp1", v.Unknown, e, 0, "VK_MEDIA_LAUNCH_APP1", e, e],
    [1, T.SelectTask, "SelectTask", v.Unknown, e, 0, e, e, e],
    [1, T.LaunchScreenSaver, "LaunchScreenSaver", v.Unknown, e, 0, e, e, e],
    [1, T.BrowserSearch, "BrowserSearch", v.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", e, e],
    [1, T.BrowserHome, "BrowserHome", v.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", e, e],
    [1, T.BrowserBack, "BrowserBack", v.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", e, e],
    [1, T.BrowserForward, "BrowserForward", v.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", e, e],
    [1, T.BrowserStop, "BrowserStop", v.Unknown, e, 0, "VK_BROWSER_STOP", e, e],
    [1, T.BrowserRefresh, "BrowserRefresh", v.Unknown, e, 0, "VK_BROWSER_REFRESH", e, e],
    [1, T.BrowserFavorites, "BrowserFavorites", v.Unknown, e, 0, "VK_BROWSER_FAVORITES", e, e],
    [1, T.ZoomToggle, "ZoomToggle", v.Unknown, e, 0, e, e, e],
    [1, T.MailReply, "MailReply", v.Unknown, e, 0, e, e, e],
    [1, T.MailForward, "MailForward", v.Unknown, e, 0, e, e, e],
    [1, T.MailSend, "MailSend", v.Unknown, e, 0, e, e, e],
    [1, T.None, e, v.KEY_IN_COMPOSITION, "KeyInComposition", 229, e, e, e],
    [1, T.None, e, v.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", e, e],
    [1, T.None, e, v.OEM_8, "OEM_8", 223, "VK_OEM_8", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_KANA", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_HANGUL", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_JUNJA", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_FINAL", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_HANJA", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_KANJI", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_CONVERT", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_NONCONVERT", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_ACCEPT", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_MODECHANGE", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_SELECT", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_PRINT", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_EXECUTE", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_SNAPSHOT", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_HELP", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_APPS", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_PROCESSKEY", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_PACKET", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_DBE_SBCSCHAR", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_DBE_DBCSCHAR", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_ATTN", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_CRSEL", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_EXSEL", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_EREOF", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_PLAY", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_ZOOM", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_NONAME", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_PA1", e, e],
    [1, T.None, e, v.Unknown, e, 0, "VK_OEM_CLEAR", e, e]
  ], n = [], i = [];
  for (const r of t) {
    const [s, a, l, o, u, c, h, m, p] = r;
    if (i[a] || (i[a] = !0, pc[l] = a, gc[l.toLowerCase()] = a, s && o !== v.Unknown && o !== v.Enter && o !== v.Ctrl && o !== v.Shift && o !== v.Alt && o !== v.Meta && (Bi[o] = a)), !n[o]) {
      if (n[o] = !0, !u)
        throw new Error(
          `String representation missing for key code ${o} around scan code ${l}`
        );
      Mn.define(o, u), Fi.define(o, m || u), Pi.define(o, p || m || u);
    }
    c && (fc[c] = o);
  }
  Bi[v.Enter] = T.Enter;
})();
var Cr;
(function(e) {
  function t(l) {
    return Mn.keyCodeToStr(l);
  }
  e.toString = t;
  function n(l) {
    return Mn.strToKeyCode(l);
  }
  e.fromString = n;
  function i(l) {
    return Fi.keyCodeToStr(l);
  }
  e.toUserSettingsUS = i;
  function r(l) {
    return Pi.keyCodeToStr(l);
  }
  e.toUserSettingsGeneral = r;
  function s(l) {
    return Fi.strToKeyCode(l) || Pi.strToKeyCode(l);
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
    return Mn.keyCodeToStr(l);
  }
  e.toElectronAccelerator = a;
})(Cr || (Cr = {}));
var Pt;
(function(e) {
  e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(Pt || (Pt = {}));
function bc(e, t) {
  const n = (t & 65535) << 16 >>> 0;
  return (e | n) >>> 0;
}
var Hi;
(function(e) {
  e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart";
})(Hi || (Hi = {}));
let Lt;
const wi = globalThis.vscode;
var ol;
if (typeof wi < "u" && typeof wi.process < "u") {
  const e = wi.process;
  Lt = {
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
} else typeof process < "u" && typeof ((ol = process == null ? void 0 : process.versions) == null ? void 0 : ol.node) == "string" ? Lt = {
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
} : Lt = {
  get platform() {
    return Xt ? "win32" : Du ? "darwin" : "linux";
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
const qn = Lt.cwd, _c = Lt.env, wc = Lt.platform;
Lt.arch;
const vc = 65, Tc = 97, yc = 90, Ac = 122, kt = 46, be = 47, Se = 92, Ze = 58, xc = 63;
class yl extends Error {
  constructor(t, n, i) {
    let r;
    typeof n == "string" && n.indexOf("not ") === 0 ? (r = "must not be", n = n.replace(/^not /, "")) : r = "must be";
    const s = t.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${t}" ${s} ${r} of type ${n}`;
    a += `. Received type ${typeof i}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
}
function Lc(e, t) {
  if (e === null || typeof e != "object")
    throw new yl(t, "Object", e);
}
function de(e, t) {
  if (typeof e != "string")
    throw new yl(t, "string", e);
}
const $e = wc === "win32";
function K(e) {
  return e === be || e === Se;
}
function Oi(e) {
  return e === be;
}
function Ke(e) {
  return e >= vc && e <= yc || e >= Tc && e <= Ac;
}
function Vn(e, t, n, i) {
  let r = "", s = 0, a = -1, l = 0, o = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length)
      o = e.charCodeAt(u);
    else {
      if (i(o))
        break;
      o = be;
    }
    if (i(o)) {
      if (!(a === u - 1 || l === 1)) if (l === 2) {
        if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== kt || r.charCodeAt(r.length - 2) !== kt) {
          if (r.length > 2) {
            const c = r.lastIndexOf(n);
            c === -1 ? (r = "", s = 0) : (r = r.slice(0, c), s = r.length - 1 - r.lastIndexOf(n)), a = u, l = 0;
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
    } else o === kt && l !== -1 ? ++l : l = -1;
  }
  return r;
}
function kc(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function Al(e, t) {
  Lc(t, "pathObject");
  const n = t.dir || t.root, i = t.base || `${t.name || ""}${kc(t.ext)}`;
  return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
const we = {
  resolve(...e) {
    let t = "", n = "", i = !1;
    for (let r = e.length - 1; r >= -1; r--) {
      let s;
      if (r >= 0) {
        if (s = e[r], de(s, `paths[${r}]`), s.length === 0)
          continue;
      } else t.length === 0 ? s = qn() : (s = _c[`=${t}`] || qn(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === Se) && (s = `${t}\\`));
      const a = s.length;
      let l = 0, o = "", u = !1;
      const c = s.charCodeAt(0);
      if (a === 1)
        K(c) && (l = 1, u = !0);
      else if (K(c))
        if (u = !0, K(s.charCodeAt(1))) {
          let h = 2, m = h;
          for (; h < a && !K(s.charCodeAt(h)); )
            h++;
          if (h < a && h !== m) {
            const p = s.slice(m, h);
            for (m = h; h < a && K(s.charCodeAt(h)); )
              h++;
            if (h < a && h !== m) {
              for (m = h; h < a && !K(s.charCodeAt(h)); )
                h++;
              (h === a || h !== m) && (o = `\\\\${p}\\${s.slice(m, h)}`, l = h);
            }
          }
        } else
          l = 1;
      else Ke(c) && s.charCodeAt(1) === Ze && (o = s.slice(0, 2), l = 2, a > 2 && K(s.charCodeAt(2)) && (u = !0, l = 3));
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
    return n = Vn(n, !i, "\\", K), i ? `${t}\\${n}` : `${t}${n}` || ".";
  },
  normalize(e) {
    de(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = 0, i, r = !1;
    const s = e.charCodeAt(0);
    if (t === 1)
      return Oi(s) ? "\\" : e;
    if (K(s))
      if (r = !0, K(e.charCodeAt(1))) {
        let l = 2, o = l;
        for (; l < t && !K(e.charCodeAt(l)); )
          l++;
        if (l < t && l !== o) {
          const u = e.slice(o, l);
          for (o = l; l < t && K(e.charCodeAt(l)); )
            l++;
          if (l < t && l !== o) {
            for (o = l; l < t && !K(e.charCodeAt(l)); )
              l++;
            if (l === t)
              return `\\\\${u}\\${e.slice(o)}\\`;
            l !== o && (i = `\\\\${u}\\${e.slice(o, l)}`, n = l);
          }
        }
      } else
        n = 1;
    else Ke(s) && e.charCodeAt(1) === Ze && (i = e.slice(0, 2), n = 2, t > 2 && K(e.charCodeAt(2)) && (r = !0, n = 3));
    let a = n < t ? Vn(e.slice(n), !r, "\\", K) : "";
    if (a.length === 0 && !r && (a = "."), a.length > 0 && K(e.charCodeAt(t - 1)) && (a += "\\"), !r && i === void 0 && e.includes(":")) {
      if (a.length >= 2 && Ke(a.charCodeAt(0)) && a.charCodeAt(1) === Ze)
        return `.\\${a}`;
      let l = e.indexOf(":");
      do
        if (l === t - 1 || K(e.charCodeAt(l + 1)))
          return `.\\${a}`;
      while ((l = e.indexOf(":", l + 1)) !== -1);
    }
    return i === void 0 ? r ? `\\${a}` : a : r ? `${i}\\${a}` : `${i}${a}`;
  },
  isAbsolute(e) {
    de(e, "path");
    const t = e.length;
    if (t === 0)
      return !1;
    const n = e.charCodeAt(0);
    return K(n) || t > 2 && Ke(n) && e.charCodeAt(1) === Ze && K(e.charCodeAt(2));
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    let t, n;
    for (let s = 0; s < e.length; ++s) {
      const a = e[s];
      de(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
    }
    if (t === void 0)
      return ".";
    let i = !0, r = 0;
    if (typeof n == "string" && K(n.charCodeAt(0))) {
      ++r;
      const s = n.length;
      s > 1 && K(n.charCodeAt(1)) && (++r, s > 2 && (K(n.charCodeAt(2)) ? ++r : i = !1));
    }
    if (i) {
      for (; r < t.length && K(t.charCodeAt(r)); )
        r++;
      r >= 2 && (t = `\\${t.slice(r)}`);
    }
    return we.normalize(t);
  },
  relative(e, t) {
    if (de(e, "from"), de(t, "to"), e === t)
      return "";
    const n = we.resolve(e), i = we.resolve(t);
    if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t))
      return "";
    if (n.length !== e.length || i.length !== t.length) {
      const _ = n.split("\\"), f = i.split("\\");
      _[_.length - 1] === "" && _.pop(), f[f.length - 1] === "" && f.pop();
      const L = _.length, A = f.length, w = L < A ? L : A;
      let k;
      for (k = 0; k < w && _[k].toLowerCase() === f[k].toLowerCase(); k++)
        ;
      return k === 0 ? i : k === w ? A > w ? f.slice(k).join("\\") : L > w ? "..\\".repeat(L - 1 - k) + ".." : "" : "..\\".repeat(L - k) + f.slice(k).join("\\");
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
    const u = o - l, c = a < u ? a : u;
    let h = -1, m = 0;
    for (; m < c; m++) {
      const _ = e.charCodeAt(r + m);
      if (_ !== t.charCodeAt(l + m))
        break;
      _ === Se && (h = m);
    }
    if (m !== c) {
      if (h === -1)
        return i;
    } else {
      if (u > c) {
        if (t.charCodeAt(l + m) === Se)
          return i.slice(l + m + 1);
        if (m === 2)
          return i.slice(l + m);
      }
      a > c && (e.charCodeAt(r + m) === Se ? h = m : m === 2 && (h = 3)), h === -1 && (h = 0);
    }
    let p = "";
    for (m = r + h + 1; m <= s; ++m)
      (m === s || e.charCodeAt(m) === Se) && (p += p.length === 0 ? ".." : "\\..");
    return l += h, p.length > 0 ? `${p}${i.slice(l, o)}` : (i.charCodeAt(l) === Se && ++l, i.slice(l, o));
  },
  toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0)
      return e;
    const t = we.resolve(e);
    if (t.length <= 2)
      return e;
    if (t.charCodeAt(0) === Se) {
      if (t.charCodeAt(1) === Se) {
        const n = t.charCodeAt(2);
        if (n !== xc && n !== kt)
          return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (Ke(t.charCodeAt(0)) && t.charCodeAt(1) === Ze && t.charCodeAt(2) === Se)
      return `\\\\?\\${t}`;
    return t;
  },
  dirname(e) {
    de(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = -1, i = 0;
    const r = e.charCodeAt(0);
    if (t === 1)
      return K(r) ? e : ".";
    if (K(r)) {
      if (n = i = 1, K(e.charCodeAt(1))) {
        let l = 2, o = l;
        for (; l < t && !K(e.charCodeAt(l)); )
          l++;
        if (l < t && l !== o) {
          for (o = l; l < t && K(e.charCodeAt(l)); )
            l++;
          if (l < t && l !== o) {
            for (o = l; l < t && !K(e.charCodeAt(l)); )
              l++;
            if (l === t)
              return e;
            l !== o && (n = i = l + 1);
          }
        }
      }
    } else Ke(r) && e.charCodeAt(1) === Ze && (n = t > 2 && K(e.charCodeAt(2)) ? 3 : 2, i = n);
    let s = -1, a = !0;
    for (let l = t - 1; l >= i; --l)
      if (K(e.charCodeAt(l))) {
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
    t !== void 0 && de(t, "suffix"), de(e, "path");
    let n = 0, i = -1, r = !0, s;
    if (e.length >= 2 && Ke(e.charCodeAt(0)) && e.charCodeAt(1) === Ze && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, l = -1;
      for (s = e.length - 1; s >= n; --s) {
        const o = e.charCodeAt(s);
        if (K(o)) {
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
      if (K(e.charCodeAt(s))) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else i === -1 && (r = !1, i = s + 1);
    return i === -1 ? "" : e.slice(n, i);
  },
  extname(e) {
    de(e, "path");
    let t = 0, n = -1, i = 0, r = -1, s = !0, a = 0;
    e.length >= 2 && e.charCodeAt(1) === Ze && Ke(e.charCodeAt(0)) && (t = i = 2);
    for (let l = e.length - 1; l >= t; --l) {
      const o = e.charCodeAt(l);
      if (K(o)) {
        if (!s) {
          i = l + 1;
          break;
        }
        continue;
      }
      r === -1 && (s = !1, r = l + 1), o === kt ? n === -1 ? n = l : a !== 1 && (a = 1) : n !== -1 && (a = -1);
    }
    return n === -1 || r === -1 || a === 0 || a === 1 && n === r - 1 && n === i + 1 ? "" : e.slice(n, r);
  },
  format: Al.bind(null, "\\"),
  parse(e) {
    de(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.length;
    let i = 0, r = e.charCodeAt(0);
    if (n === 1)
      return K(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
    if (K(r)) {
      if (i = 1, K(e.charCodeAt(1))) {
        let h = 2, m = h;
        for (; h < n && !K(e.charCodeAt(h)); )
          h++;
        if (h < n && h !== m) {
          for (m = h; h < n && K(e.charCodeAt(h)); )
            h++;
          if (h < n && h !== m) {
            for (m = h; h < n && !K(e.charCodeAt(h)); )
              h++;
            h === n ? i = h : h !== m && (i = h + 1);
          }
        }
      }
    } else if (Ke(r) && e.charCodeAt(1) === Ze) {
      if (n <= 2)
        return t.root = t.dir = e, t;
      if (i = 2, K(e.charCodeAt(2))) {
        if (n === 3)
          return t.root = t.dir = e, t;
        i = 3;
      }
    }
    i > 0 && (t.root = e.slice(0, i));
    let s = -1, a = i, l = -1, o = !0, u = e.length - 1, c = 0;
    for (; u >= i; --u) {
      if (r = e.charCodeAt(u), K(r)) {
        if (!o) {
          a = u + 1;
          break;
        }
        continue;
      }
      l === -1 && (o = !1, l = u + 1), r === kt ? s === -1 ? s = u : c !== 1 && (c = 1) : s !== -1 && (c = -1);
    }
    return l !== -1 && (s === -1 || c === 0 || c === 1 && s === l - 1 && s === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, s), t.base = e.slice(a, l), t.ext = e.slice(s, l))), a > 0 && a !== i ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
}, Ec = (() => {
  if ($e) {
    const e = /\\/g;
    return () => {
      const t = qn().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => qn();
})(), le = {
  resolve(...e) {
    let t = "", n = !1;
    for (let i = e.length - 1; i >= 0 && !n; i--) {
      const r = e[i];
      de(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === be);
    }
    if (!n) {
      const i = Ec();
      t = `${i}/${t}`, n = i.charCodeAt(0) === be;
    }
    return t = Vn(t, !n, "/", Oi), n ? `/${t}` : t.length > 0 ? t : ".";
  },
  normalize(e) {
    if (de(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === be, n = e.charCodeAt(e.length - 1) === be;
    return e = Vn(e, !t, "/", Oi), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
  },
  isAbsolute(e) {
    return de(e, "path"), e.length > 0 && e.charCodeAt(0) === be;
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    const t = [];
    for (let n = 0; n < e.length; ++n) {
      const i = e[n];
      de(i, "path"), i.length > 0 && t.push(i);
    }
    return t.length === 0 ? "." : le.normalize(t.join("/"));
  },
  relative(e, t) {
    if (de(e, "from"), de(t, "to"), e === t || (e = le.resolve(e), t = le.resolve(t), e === t))
      return "";
    const n = 1, i = e.length, r = i - n, s = 1, a = t.length - s, l = r < a ? r : a;
    let o = -1, u = 0;
    for (; u < l; u++) {
      const h = e.charCodeAt(n + u);
      if (h !== t.charCodeAt(s + u))
        break;
      h === be && (o = u);
    }
    if (u === l)
      if (a > l) {
        if (t.charCodeAt(s + u) === be)
          return t.slice(s + u + 1);
        if (u === 0)
          return t.slice(s + u);
      } else r > l && (e.charCodeAt(n + u) === be ? o = u : u === 0 && (o = 0));
    let c = "";
    for (u = n + o + 1; u <= i; ++u)
      (u === i || e.charCodeAt(u) === be) && (c += c.length === 0 ? ".." : "/..");
    return `${c}${t.slice(s + o)}`;
  },
  toNamespacedPath(e) {
    return e;
  },
  dirname(e) {
    if (de(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === be;
    let n = -1, i = !0;
    for (let r = e.length - 1; r >= 1; --r)
      if (e.charCodeAt(r) === be) {
        if (!i) {
          n = r;
          break;
        }
      } else
        i = !1;
    return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
  },
  basename(e, t) {
    t !== void 0 && de(t, "suffix"), de(e, "path");
    let n = 0, i = -1, r = !0, s;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, l = -1;
      for (s = e.length - 1; s >= 0; --s) {
        const o = e.charCodeAt(s);
        if (o === be) {
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
      if (e.charCodeAt(s) === be) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else i === -1 && (r = !1, i = s + 1);
    return i === -1 ? "" : e.slice(n, i);
  },
  extname(e) {
    de(e, "path");
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
  format: Al.bind(null, "/"),
  parse(e) {
    de(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.charCodeAt(0) === be;
    let i;
    n ? (t.root = "/", i = 1) : i = 0;
    let r = -1, s = 0, a = -1, l = !0, o = e.length - 1, u = 0;
    for (; o >= i; --o) {
      const c = e.charCodeAt(o);
      if (c === be) {
        if (!l) {
          s = o + 1;
          break;
        }
        continue;
      }
      a === -1 && (l = !1, a = o + 1), c === kt ? r === -1 ? r = o : u !== 1 && (u = 1) : r !== -1 && (u = -1);
    }
    if (a !== -1) {
      const c = s === 0 && n ? 1 : s;
      r === -1 || u === 0 || u === 1 && r === a - 1 && r === s + 1 ? t.base = t.name = e.slice(c, a) : (t.name = e.slice(c, r), t.base = e.slice(c, a), t.ext = e.slice(r, a));
    }
    return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
le.win32 = we.win32 = we;
le.posix = we.posix = le;
const Sc = $e ? we.normalize : le.normalize;
$e ? we.isAbsolute : le.isAbsolute;
const Rc = $e ? we.join : le.join, Nc = $e ? we.resolve : le.resolve, Dc = $e ? we.relative : le.relative, Mc = $e ? we.dirname : le.dirname;
$e ? we.basename : le.basename;
$e ? we.extname : le.extname;
$e ? we.parse : le.parse;
const Un = $e ? we.sep : le.sep, Uc = /^\w[\w\d+.-]*$/, Ic = /^\//, Fc = /^\/\//;
function Pc(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
    );
  if (e.scheme && !Uc.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Ic.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (Fc.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function Bc(e, t) {
  return !e && !t ? "file" : e;
}
function Hc(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== je && (t = je + t) : t = je;
      break;
  }
  return t;
}
const ae = "", je = "/", Oc = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
let Me = class In {
  static isUri(t) {
    return t instanceof In ? !0 : t ? typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function" : !1;
  }
  constructor(t, n, i, r, s, a = !1) {
    typeof t == "object" ? (this.scheme = t.scheme || ae, this.authority = t.authority || ae, this.path = t.path || ae, this.query = t.query || ae, this.fragment = t.fragment || ae) : (this.scheme = Bc(t, a), this.authority = n || ae, this.path = Hc(this.scheme, i || ae), this.query = r || ae, this.fragment = s || ae, Pc(this, a));
  }
  get fsPath() {
    return Cn(this, !1);
  }
  with(t) {
    if (!t)
      return this;
    let { scheme: n, authority: i, path: r, query: s, fragment: a } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = ae), i === void 0 ? i = this.authority : i === null && (i = ae), r === void 0 ? r = this.path : r === null && (r = ae), s === void 0 ? s = this.query : s === null && (s = ae), a === void 0 ? a = this.fragment : a === null && (a = ae), n === this.scheme && i === this.authority && r === this.path && s === this.query && a === this.fragment ? this : new Nt(n, i, r, s, a);
  }
  static parse(t, n = !1) {
    const i = Oc.exec(t);
    return i ? new Nt(
      i[2] || ae,
      Ln(i[4] || ae),
      Ln(i[5] || ae),
      Ln(i[7] || ae),
      Ln(i[9] || ae),
      n
    ) : new Nt(ae, ae, ae, ae, ae);
  }
  static file(t) {
    let n = ae;
    if (Xt && (t = t.replace(/\\/g, je)), t[0] === je && t[1] === je) {
      const i = t.indexOf(je, 2);
      i === -1 ? (n = t.substring(2), t = je) : (n = t.substring(2, i), t = t.substring(i) || je);
    }
    return new Nt("file", n, t, ae, ae);
  }
  static from(t, n) {
    return new Nt(
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
    return Xt && t.scheme === "file" ? i = In.file(we.join(Cn(t, !0), ...n)).path : i = le.join(t.path, ...n), t.with({ path: i });
  }
  toString(t = !1) {
    return zi(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof In)
        return t;
      {
        const n = new Nt(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === xl ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
const xl = Xt ? 1 : void 0;
class Nt extends Me {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Cn(this, !1)), this._fsPath;
  }
  toString(t = !1) {
    return t ? zi(this, !0) : (this._formatted || (this._formatted = zi(this, !1)), this._formatted);
  }
  toJSON() {
    const t = {
      $mid: Hi.Uri
    };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = xl), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}
const Ll = {
  [S.Colon]: "%3A",
  [S.Slash]: "%2F",
  [S.QuestionMark]: "%3F",
  [S.Hash]: "%23",
  [S.OpenSquareBracket]: "%5B",
  [S.CloseSquareBracket]: "%5D",
  [S.AtSign]: "%40",
  [S.ExclamationMark]: "%21",
  [S.DollarSign]: "%24",
  [S.Ampersand]: "%26",
  [S.SingleQuote]: "%27",
  [S.OpenParen]: "%28",
  [S.CloseParen]: "%29",
  [S.Asterisk]: "%2A",
  [S.Plus]: "%2B",
  [S.Comma]: "%2C",
  [S.Semicolon]: "%3B",
  [S.Equals]: "%3D",
  [S.Space]: "%20"
};
function Gr(e, t, n) {
  let i, r = -1;
  for (let s = 0; s < e.length; s++) {
    const a = e.charCodeAt(s);
    if (a >= S.a && a <= S.z || a >= S.A && a <= S.Z || a >= S.Digit0 && a <= S.Digit9 || a === S.Dash || a === S.Period || a === S.Underline || a === S.Tilde || t && a === S.Slash || n && a === S.OpenSquareBracket || n && a === S.CloseSquareBracket || n && a === S.Colon)
      r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i !== void 0 && (i += e.charAt(s));
    else {
      i === void 0 && (i = e.substr(0, s));
      const l = Ll[a];
      l !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i += l) : r === -1 && (r = s);
    }
  }
  return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function zc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    i === S.Hash || i === S.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += Ll[i]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function Cn(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === S.Slash && (e.path.charCodeAt(1) >= S.A && e.path.charCodeAt(1) <= S.Z || e.path.charCodeAt(1) >= S.a && e.path.charCodeAt(1) <= S.z) && e.path.charCodeAt(2) === S.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Xt && (n = n.replace(/\//g, "\\")), n;
}
function zi(e, t) {
  const n = t ? zc : Gr;
  let i = "", { scheme: r, authority: s, path: a, query: l, fragment: o } = e;
  if (r && (i += r, i += ":"), (s || r === "file") && (i += je, i += je), s) {
    let u = s.indexOf("@");
    if (u !== -1) {
      const c = s.substr(0, u);
      s = s.substr(u + 1), u = c.lastIndexOf(":"), u === -1 ? i += n(c, !1, !1) : (i += n(c.substr(0, u), !1, !1), i += ":", i += n(c.substr(u + 1), !1, !0)), i += "@";
    }
    s = s.toLowerCase(), u = s.lastIndexOf(":"), u === -1 ? i += n(s, !1, !0) : (i += n(s.substr(0, u), !1, !0), i += s.substr(u));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === S.Slash && a.charCodeAt(2) === S.Colon) {
      const u = a.charCodeAt(1);
      u >= S.A && u <= S.Z && (a = `/${String.fromCharCode(u + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === S.Colon) {
      const u = a.charCodeAt(0);
      u >= S.A && u <= S.Z && (a = `${String.fromCharCode(u + 32)}:${a.substr(2)}`);
    }
    i += n(a, !0, !1);
  }
  return l && (i += "?", i += n(l, !1, !1)), o && (i += "#", i += t ? o : Gr(o, !1, !1)), i;
}
function kl(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + kl(e.substr(3)) : e;
  }
}
const jr = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Ln(e) {
  return e.match(jr) ? e.replace(jr, (t) => kl(t)) : e;
}
var dt;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(dt || (dt = {}));
class Ue extends Y {
  constructor(t, n, i, r) {
    super(t, n, i, r), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = i, this.positionColumn = r;
  }
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  equalsSelection(t) {
    return Ue.selectionsEqual(this, t);
  }
  static selectionsEqual(t, n) {
    return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
  }
  getDirection() {
    return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? dt.LTR : dt.RTL;
  }
  setEndPosition(t, n) {
    return this.getDirection() === dt.LTR ? new Ue(this.startLineNumber, this.startColumn, t, n) : new Ue(t, n, this.startLineNumber, this.startColumn);
  }
  getPosition() {
    return new ie(this.positionLineNumber, this.positionColumn);
  }
  getSelectionStart() {
    return new ie(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  setStartPosition(t, n) {
    return this.getDirection() === dt.LTR ? new Ue(t, n, this.endLineNumber, this.endColumn) : new Ue(this.endLineNumber, this.endColumn, t, n);
  }
  static fromPositions(t, n = t) {
    return new Ue(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static fromRange(t, n) {
    return n === dt.LTR ? new Ue(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : new Ue(
      t.endLineNumber,
      t.endColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  static liftSelection(t) {
    return new Ue(
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
    return s === dt.LTR ? new Ue(t, n, i, r) : new Ue(i, r, t, n);
  }
}
const $r = /* @__PURE__ */ Object.create(null);
function d(e, t) {
  if (fu(t)) {
    const n = $r[t];
    if (n === void 0)
      throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return $r[e] = t, { id: e };
}
const Wc = {
  add: d("add", 6e4),
  plus: d("plus", 6e4),
  gistNew: d("gist-new", 6e4),
  repoCreate: d("repo-create", 6e4),
  lightbulb: d("lightbulb", 60001),
  lightBulb: d("light-bulb", 60001),
  repo: d("repo", 60002),
  repoDelete: d("repo-delete", 60002),
  gistFork: d("gist-fork", 60003),
  repoForked: d("repo-forked", 60003),
  gitPullRequest: d("git-pull-request", 60004),
  gitPullRequestAbandoned: d("git-pull-request-abandoned", 60004),
  recordKeys: d("record-keys", 60005),
  keyboard: d("keyboard", 60005),
  tag: d("tag", 60006),
  gitPullRequestLabel: d("git-pull-request-label", 60006),
  tagAdd: d("tag-add", 60006),
  tagRemove: d("tag-remove", 60006),
  person: d("person", 60007),
  personFollow: d("person-follow", 60007),
  personOutline: d("person-outline", 60007),
  personFilled: d("person-filled", 60007),
  gitBranch: d("git-branch", 60008),
  gitBranchCreate: d("git-branch-create", 60008),
  gitBranchDelete: d("git-branch-delete", 60008),
  sourceControl: d("source-control", 60008),
  mirror: d("mirror", 60009),
  mirrorPublic: d("mirror-public", 60009),
  star: d("star", 60010),
  starAdd: d("star-add", 60010),
  starDelete: d("star-delete", 60010),
  starEmpty: d("star-empty", 60010),
  comment: d("comment", 60011),
  commentAdd: d("comment-add", 60011),
  alert: d("alert", 60012),
  warning: d("warning", 60012),
  search: d("search", 60013),
  searchSave: d("search-save", 60013),
  logOut: d("log-out", 60014),
  signOut: d("sign-out", 60014),
  logIn: d("log-in", 60015),
  signIn: d("sign-in", 60015),
  eye: d("eye", 60016),
  eyeUnwatch: d("eye-unwatch", 60016),
  eyeWatch: d("eye-watch", 60016),
  circleFilled: d("circle-filled", 60017),
  primitiveDot: d("primitive-dot", 60017),
  closeDirty: d("close-dirty", 60017),
  debugBreakpoint: d("debug-breakpoint", 60017),
  debugBreakpointDisabled: d("debug-breakpoint-disabled", 60017),
  debugHint: d("debug-hint", 60017),
  terminalDecorationSuccess: d("terminal-decoration-success", 60017),
  primitiveSquare: d("primitive-square", 60018),
  edit: d("edit", 60019),
  pencil: d("pencil", 60019),
  info: d("info", 60020),
  issueOpened: d("issue-opened", 60020),
  gistPrivate: d("gist-private", 60021),
  gitForkPrivate: d("git-fork-private", 60021),
  lock: d("lock", 60021),
  mirrorPrivate: d("mirror-private", 60021),
  close: d("close", 60022),
  removeClose: d("remove-close", 60022),
  x: d("x", 60022),
  repoSync: d("repo-sync", 60023),
  sync: d("sync", 60023),
  clone: d("clone", 60024),
  desktopDownload: d("desktop-download", 60024),
  beaker: d("beaker", 60025),
  microscope: d("microscope", 60025),
  vm: d("vm", 60026),
  deviceDesktop: d("device-desktop", 60026),
  file: d("file", 60027),
  fileText: d("file-text", 60027),
  more: d("more", 60028),
  ellipsis: d("ellipsis", 60028),
  kebabHorizontal: d("kebab-horizontal", 60028),
  mailReply: d("mail-reply", 60029),
  reply: d("reply", 60029),
  organization: d("organization", 60030),
  organizationFilled: d("organization-filled", 60030),
  organizationOutline: d("organization-outline", 60030),
  newFile: d("new-file", 60031),
  fileAdd: d("file-add", 60031),
  newFolder: d("new-folder", 60032),
  fileDirectoryCreate: d("file-directory-create", 60032),
  trash: d("trash", 60033),
  trashcan: d("trashcan", 60033),
  history: d("history", 60034),
  clock: d("clock", 60034),
  folder: d("folder", 60035),
  fileDirectory: d("file-directory", 60035),
  symbolFolder: d("symbol-folder", 60035),
  logoGithub: d("logo-github", 60036),
  markGithub: d("mark-github", 60036),
  github: d("github", 60036),
  terminal: d("terminal", 60037),
  console: d("console", 60037),
  repl: d("repl", 60037),
  zap: d("zap", 60038),
  symbolEvent: d("symbol-event", 60038),
  error: d("error", 60039),
  stop: d("stop", 60039),
  variable: d("variable", 60040),
  symbolVariable: d("symbol-variable", 60040),
  array: d("array", 60042),
  symbolArray: d("symbol-array", 60042),
  symbolModule: d("symbol-module", 60043),
  symbolPackage: d("symbol-package", 60043),
  symbolNamespace: d("symbol-namespace", 60043),
  symbolObject: d("symbol-object", 60043),
  symbolMethod: d("symbol-method", 60044),
  symbolFunction: d("symbol-function", 60044),
  symbolConstructor: d("symbol-constructor", 60044),
  symbolBoolean: d("symbol-boolean", 60047),
  symbolNull: d("symbol-null", 60047),
  symbolNumeric: d("symbol-numeric", 60048),
  symbolNumber: d("symbol-number", 60048),
  symbolStructure: d("symbol-structure", 60049),
  symbolStruct: d("symbol-struct", 60049),
  symbolParameter: d("symbol-parameter", 60050),
  symbolTypeParameter: d("symbol-type-parameter", 60050),
  symbolKey: d("symbol-key", 60051),
  symbolText: d("symbol-text", 60051),
  symbolReference: d("symbol-reference", 60052),
  goToFile: d("go-to-file", 60052),
  symbolEnum: d("symbol-enum", 60053),
  symbolValue: d("symbol-value", 60053),
  symbolRuler: d("symbol-ruler", 60054),
  symbolUnit: d("symbol-unit", 60054),
  activateBreakpoints: d("activate-breakpoints", 60055),
  archive: d("archive", 60056),
  arrowBoth: d("arrow-both", 60057),
  arrowDown: d("arrow-down", 60058),
  arrowLeft: d("arrow-left", 60059),
  arrowRight: d("arrow-right", 60060),
  arrowSmallDown: d("arrow-small-down", 60061),
  arrowSmallLeft: d("arrow-small-left", 60062),
  arrowSmallRight: d("arrow-small-right", 60063),
  arrowSmallUp: d("arrow-small-up", 60064),
  arrowUp: d("arrow-up", 60065),
  bell: d("bell", 60066),
  bold: d("bold", 60067),
  book: d("book", 60068),
  bookmark: d("bookmark", 60069),
  debugBreakpointConditionalUnverified: d("debug-breakpoint-conditional-unverified", 60070),
  debugBreakpointConditional: d("debug-breakpoint-conditional", 60071),
  debugBreakpointConditionalDisabled: d("debug-breakpoint-conditional-disabled", 60071),
  debugBreakpointDataUnverified: d("debug-breakpoint-data-unverified", 60072),
  debugBreakpointData: d("debug-breakpoint-data", 60073),
  debugBreakpointDataDisabled: d("debug-breakpoint-data-disabled", 60073),
  debugBreakpointLogUnverified: d("debug-breakpoint-log-unverified", 60074),
  debugBreakpointLog: d("debug-breakpoint-log", 60075),
  debugBreakpointLogDisabled: d("debug-breakpoint-log-disabled", 60075),
  briefcase: d("briefcase", 60076),
  broadcast: d("broadcast", 60077),
  browser: d("browser", 60078),
  bug: d("bug", 60079),
  calendar: d("calendar", 60080),
  caseSensitive: d("case-sensitive", 60081),
  check: d("check", 60082),
  checklist: d("checklist", 60083),
  chevronDown: d("chevron-down", 60084),
  chevronLeft: d("chevron-left", 60085),
  chevronRight: d("chevron-right", 60086),
  chevronUp: d("chevron-up", 60087),
  chromeClose: d("chrome-close", 60088),
  chromeMaximize: d("chrome-maximize", 60089),
  chromeMinimize: d("chrome-minimize", 60090),
  chromeRestore: d("chrome-restore", 60091),
  circleOutline: d("circle-outline", 60092),
  circle: d("circle", 60092),
  debugBreakpointUnverified: d("debug-breakpoint-unverified", 60092),
  terminalDecorationIncomplete: d("terminal-decoration-incomplete", 60092),
  circleSlash: d("circle-slash", 60093),
  circuitBoard: d("circuit-board", 60094),
  clearAll: d("clear-all", 60095),
  clippy: d("clippy", 60096),
  closeAll: d("close-all", 60097),
  cloudDownload: d("cloud-download", 60098),
  cloudUpload: d("cloud-upload", 60099),
  code: d("code", 60100),
  collapseAll: d("collapse-all", 60101),
  colorMode: d("color-mode", 60102),
  commentDiscussion: d("comment-discussion", 60103),
  creditCard: d("credit-card", 60105),
  dash: d("dash", 60108),
  dashboard: d("dashboard", 60109),
  database: d("database", 60110),
  debugContinue: d("debug-continue", 60111),
  debugDisconnect: d("debug-disconnect", 60112),
  debugPause: d("debug-pause", 60113),
  debugRestart: d("debug-restart", 60114),
  debugStart: d("debug-start", 60115),
  debugStepInto: d("debug-step-into", 60116),
  debugStepOut: d("debug-step-out", 60117),
  debugStepOver: d("debug-step-over", 60118),
  debugStop: d("debug-stop", 60119),
  debug: d("debug", 60120),
  deviceCameraVideo: d("device-camera-video", 60121),
  deviceCamera: d("device-camera", 60122),
  deviceMobile: d("device-mobile", 60123),
  diffAdded: d("diff-added", 60124),
  diffIgnored: d("diff-ignored", 60125),
  diffModified: d("diff-modified", 60126),
  diffRemoved: d("diff-removed", 60127),
  diffRenamed: d("diff-renamed", 60128),
  diff: d("diff", 60129),
  diffSidebyside: d("diff-sidebyside", 60129),
  discard: d("discard", 60130),
  editorLayout: d("editor-layout", 60131),
  emptyWindow: d("empty-window", 60132),
  exclude: d("exclude", 60133),
  extensions: d("extensions", 60134),
  eyeClosed: d("eye-closed", 60135),
  fileBinary: d("file-binary", 60136),
  fileCode: d("file-code", 60137),
  fileMedia: d("file-media", 60138),
  filePdf: d("file-pdf", 60139),
  fileSubmodule: d("file-submodule", 60140),
  fileSymlinkDirectory: d("file-symlink-directory", 60141),
  fileSymlinkFile: d("file-symlink-file", 60142),
  fileZip: d("file-zip", 60143),
  files: d("files", 60144),
  filter: d("filter", 60145),
  flame: d("flame", 60146),
  foldDown: d("fold-down", 60147),
  foldUp: d("fold-up", 60148),
  fold: d("fold", 60149),
  folderActive: d("folder-active", 60150),
  folderOpened: d("folder-opened", 60151),
  gear: d("gear", 60152),
  gift: d("gift", 60153),
  gistSecret: d("gist-secret", 60154),
  gist: d("gist", 60155),
  gitCommit: d("git-commit", 60156),
  gitCompare: d("git-compare", 60157),
  compareChanges: d("compare-changes", 60157),
  gitMerge: d("git-merge", 60158),
  githubAction: d("github-action", 60159),
  githubAlt: d("github-alt", 60160),
  globe: d("globe", 60161),
  grabber: d("grabber", 60162),
  graph: d("graph", 60163),
  gripper: d("gripper", 60164),
  heart: d("heart", 60165),
  home: d("home", 60166),
  horizontalRule: d("horizontal-rule", 60167),
  hubot: d("hubot", 60168),
  inbox: d("inbox", 60169),
  issueReopened: d("issue-reopened", 60171),
  issues: d("issues", 60172),
  italic: d("italic", 60173),
  jersey: d("jersey", 60174),
  json: d("json", 60175),
  kebabVertical: d("kebab-vertical", 60176),
  key: d("key", 60177),
  law: d("law", 60178),
  lightbulbAutofix: d("lightbulb-autofix", 60179),
  linkExternal: d("link-external", 60180),
  link: d("link", 60181),
  listOrdered: d("list-ordered", 60182),
  listUnordered: d("list-unordered", 60183),
  liveShare: d("live-share", 60184),
  loading: d("loading", 60185),
  location: d("location", 60186),
  mailRead: d("mail-read", 60187),
  mail: d("mail", 60188),
  markdown: d("markdown", 60189),
  megaphone: d("megaphone", 60190),
  mention: d("mention", 60191),
  milestone: d("milestone", 60192),
  gitPullRequestMilestone: d("git-pull-request-milestone", 60192),
  mortarBoard: d("mortar-board", 60193),
  move: d("move", 60194),
  multipleWindows: d("multiple-windows", 60195),
  mute: d("mute", 60196),
  noNewline: d("no-newline", 60197),
  note: d("note", 60198),
  octoface: d("octoface", 60199),
  openPreview: d("open-preview", 60200),
  package: d("package", 60201),
  paintcan: d("paintcan", 60202),
  pin: d("pin", 60203),
  play: d("play", 60204),
  run: d("run", 60204),
  plug: d("plug", 60205),
  preserveCase: d("preserve-case", 60206),
  preview: d("preview", 60207),
  project: d("project", 60208),
  pulse: d("pulse", 60209),
  question: d("question", 60210),
  quote: d("quote", 60211),
  radioTower: d("radio-tower", 60212),
  reactions: d("reactions", 60213),
  references: d("references", 60214),
  refresh: d("refresh", 60215),
  regex: d("regex", 60216),
  remoteExplorer: d("remote-explorer", 60217),
  remote: d("remote", 60218),
  remove: d("remove", 60219),
  replaceAll: d("replace-all", 60220),
  replace: d("replace", 60221),
  repoClone: d("repo-clone", 60222),
  repoForcePush: d("repo-force-push", 60223),
  repoPull: d("repo-pull", 60224),
  repoPush: d("repo-push", 60225),
  report: d("report", 60226),
  requestChanges: d("request-changes", 60227),
  rocket: d("rocket", 60228),
  rootFolderOpened: d("root-folder-opened", 60229),
  rootFolder: d("root-folder", 60230),
  rss: d("rss", 60231),
  ruby: d("ruby", 60232),
  saveAll: d("save-all", 60233),
  saveAs: d("save-as", 60234),
  save: d("save", 60235),
  screenFull: d("screen-full", 60236),
  screenNormal: d("screen-normal", 60237),
  searchStop: d("search-stop", 60238),
  server: d("server", 60240),
  settingsGear: d("settings-gear", 60241),
  settings: d("settings", 60242),
  shield: d("shield", 60243),
  smiley: d("smiley", 60244),
  sortPrecedence: d("sort-precedence", 60245),
  splitHorizontal: d("split-horizontal", 60246),
  splitVertical: d("split-vertical", 60247),
  squirrel: d("squirrel", 60248),
  starFull: d("star-full", 60249),
  starHalf: d("star-half", 60250),
  symbolClass: d("symbol-class", 60251),
  symbolColor: d("symbol-color", 60252),
  symbolConstant: d("symbol-constant", 60253),
  symbolEnumMember: d("symbol-enum-member", 60254),
  symbolField: d("symbol-field", 60255),
  symbolFile: d("symbol-file", 60256),
  symbolInterface: d("symbol-interface", 60257),
  symbolKeyword: d("symbol-keyword", 60258),
  symbolMisc: d("symbol-misc", 60259),
  symbolOperator: d("symbol-operator", 60260),
  symbolProperty: d("symbol-property", 60261),
  wrench: d("wrench", 60261),
  wrenchSubaction: d("wrench-subaction", 60261),
  symbolSnippet: d("symbol-snippet", 60262),
  tasklist: d("tasklist", 60263),
  telescope: d("telescope", 60264),
  textSize: d("text-size", 60265),
  threeBars: d("three-bars", 60266),
  thumbsdown: d("thumbsdown", 60267),
  thumbsup: d("thumbsup", 60268),
  tools: d("tools", 60269),
  triangleDown: d("triangle-down", 60270),
  triangleLeft: d("triangle-left", 60271),
  triangleRight: d("triangle-right", 60272),
  triangleUp: d("triangle-up", 60273),
  twitter: d("twitter", 60274),
  unfold: d("unfold", 60275),
  unlock: d("unlock", 60276),
  unmute: d("unmute", 60277),
  unverified: d("unverified", 60278),
  verified: d("verified", 60279),
  versions: d("versions", 60280),
  vmActive: d("vm-active", 60281),
  vmOutline: d("vm-outline", 60282),
  vmRunning: d("vm-running", 60283),
  watch: d("watch", 60284),
  whitespace: d("whitespace", 60285),
  wholeWord: d("whole-word", 60286),
  window: d("window", 60287),
  wordWrap: d("word-wrap", 60288),
  zoomIn: d("zoom-in", 60289),
  zoomOut: d("zoom-out", 60290),
  listFilter: d("list-filter", 60291),
  listFlat: d("list-flat", 60292),
  listSelection: d("list-selection", 60293),
  selection: d("selection", 60293),
  listTree: d("list-tree", 60294),
  debugBreakpointFunctionUnverified: d("debug-breakpoint-function-unverified", 60295),
  debugBreakpointFunction: d("debug-breakpoint-function", 60296),
  debugBreakpointFunctionDisabled: d("debug-breakpoint-function-disabled", 60296),
  debugStackframeActive: d("debug-stackframe-active", 60297),
  circleSmallFilled: d("circle-small-filled", 60298),
  debugStackframeDot: d("debug-stackframe-dot", 60298),
  terminalDecorationMark: d("terminal-decoration-mark", 60298),
  debugStackframe: d("debug-stackframe", 60299),
  debugStackframeFocused: d("debug-stackframe-focused", 60299),
  debugBreakpointUnsupported: d("debug-breakpoint-unsupported", 60300),
  symbolString: d("symbol-string", 60301),
  debugReverseContinue: d("debug-reverse-continue", 60302),
  debugStepBack: d("debug-step-back", 60303),
  debugRestartFrame: d("debug-restart-frame", 60304),
  debugAlt: d("debug-alt", 60305),
  callIncoming: d("call-incoming", 60306),
  callOutgoing: d("call-outgoing", 60307),
  menu: d("menu", 60308),
  expandAll: d("expand-all", 60309),
  feedback: d("feedback", 60310),
  gitPullRequestReviewer: d("git-pull-request-reviewer", 60310),
  groupByRefType: d("group-by-ref-type", 60311),
  ungroupByRefType: d("ungroup-by-ref-type", 60312),
  account: d("account", 60313),
  gitPullRequestAssignee: d("git-pull-request-assignee", 60313),
  bellDot: d("bell-dot", 60314),
  debugConsole: d("debug-console", 60315),
  library: d("library", 60316),
  output: d("output", 60317),
  runAll: d("run-all", 60318),
  syncIgnored: d("sync-ignored", 60319),
  pinned: d("pinned", 60320),
  githubInverted: d("github-inverted", 60321),
  serverProcess: d("server-process", 60322),
  serverEnvironment: d("server-environment", 60323),
  pass: d("pass", 60324),
  issueClosed: d("issue-closed", 60324),
  stopCircle: d("stop-circle", 60325),
  playCircle: d("play-circle", 60326),
  record: d("record", 60327),
  debugAltSmall: d("debug-alt-small", 60328),
  vmConnect: d("vm-connect", 60329),
  cloud: d("cloud", 60330),
  merge: d("merge", 60331),
  export: d("export", 60332),
  graphLeft: d("graph-left", 60333),
  magnet: d("magnet", 60334),
  notebook: d("notebook", 60335),
  redo: d("redo", 60336),
  checkAll: d("check-all", 60337),
  pinnedDirty: d("pinned-dirty", 60338),
  passFilled: d("pass-filled", 60339),
  circleLargeFilled: d("circle-large-filled", 60340),
  circleLarge: d("circle-large", 60341),
  circleLargeOutline: d("circle-large-outline", 60341),
  combine: d("combine", 60342),
  gather: d("gather", 60342),
  table: d("table", 60343),
  variableGroup: d("variable-group", 60344),
  typeHierarchy: d("type-hierarchy", 60345),
  typeHierarchySub: d("type-hierarchy-sub", 60346),
  typeHierarchySuper: d("type-hierarchy-super", 60347),
  gitPullRequestCreate: d("git-pull-request-create", 60348),
  runAbove: d("run-above", 60349),
  runBelow: d("run-below", 60350),
  notebookTemplate: d("notebook-template", 60351),
  debugRerun: d("debug-rerun", 60352),
  workspaceTrusted: d("workspace-trusted", 60353),
  workspaceUntrusted: d("workspace-untrusted", 60354),
  workspaceUnknown: d("workspace-unknown", 60355),
  terminalCmd: d("terminal-cmd", 60356),
  terminalDebian: d("terminal-debian", 60357),
  terminalLinux: d("terminal-linux", 60358),
  terminalPowershell: d("terminal-powershell", 60359),
  terminalTmux: d("terminal-tmux", 60360),
  terminalUbuntu: d("terminal-ubuntu", 60361),
  terminalBash: d("terminal-bash", 60362),
  arrowSwap: d("arrow-swap", 60363),
  copy: d("copy", 60364),
  personAdd: d("person-add", 60365),
  filterFilled: d("filter-filled", 60366),
  wand: d("wand", 60367),
  debugLineByLine: d("debug-line-by-line", 60368),
  inspect: d("inspect", 60369),
  layers: d("layers", 60370),
  layersDot: d("layers-dot", 60371),
  layersActive: d("layers-active", 60372),
  compass: d("compass", 60373),
  compassDot: d("compass-dot", 60374),
  compassActive: d("compass-active", 60375),
  azure: d("azure", 60376),
  issueDraft: d("issue-draft", 60377),
  gitPullRequestClosed: d("git-pull-request-closed", 60378),
  gitPullRequestDraft: d("git-pull-request-draft", 60379),
  debugAll: d("debug-all", 60380),
  debugCoverage: d("debug-coverage", 60381),
  runErrors: d("run-errors", 60382),
  folderLibrary: d("folder-library", 60383),
  debugContinueSmall: d("debug-continue-small", 60384),
  beakerStop: d("beaker-stop", 60385),
  graphLine: d("graph-line", 60386),
  graphScatter: d("graph-scatter", 60387),
  pieChart: d("pie-chart", 60388),
  bracket: d("bracket", 60175),
  bracketDot: d("bracket-dot", 60389),
  bracketError: d("bracket-error", 60390),
  lockSmall: d("lock-small", 60391),
  azureDevops: d("azure-devops", 60392),
  verifiedFilled: d("verified-filled", 60393),
  newline: d("newline", 60394),
  layout: d("layout", 60395),
  layoutActivitybarLeft: d("layout-activitybar-left", 60396),
  layoutActivitybarRight: d("layout-activitybar-right", 60397),
  layoutPanelLeft: d("layout-panel-left", 60398),
  layoutPanelCenter: d("layout-panel-center", 60399),
  layoutPanelJustify: d("layout-panel-justify", 60400),
  layoutPanelRight: d("layout-panel-right", 60401),
  layoutPanel: d("layout-panel", 60402),
  layoutSidebarLeft: d("layout-sidebar-left", 60403),
  layoutSidebarRight: d("layout-sidebar-right", 60404),
  layoutStatusbar: d("layout-statusbar", 60405),
  layoutMenubar: d("layout-menubar", 60406),
  layoutCentered: d("layout-centered", 60407),
  target: d("target", 60408),
  indent: d("indent", 60409),
  recordSmall: d("record-small", 60410),
  errorSmall: d("error-small", 60411),
  terminalDecorationError: d("terminal-decoration-error", 60411),
  arrowCircleDown: d("arrow-circle-down", 60412),
  arrowCircleLeft: d("arrow-circle-left", 60413),
  arrowCircleRight: d("arrow-circle-right", 60414),
  arrowCircleUp: d("arrow-circle-up", 60415),
  layoutSidebarRightOff: d("layout-sidebar-right-off", 60416),
  layoutPanelOff: d("layout-panel-off", 60417),
  layoutSidebarLeftOff: d("layout-sidebar-left-off", 60418),
  blank: d("blank", 60419),
  heartFilled: d("heart-filled", 60420),
  map: d("map", 60421),
  mapHorizontal: d("map-horizontal", 60421),
  foldHorizontal: d("fold-horizontal", 60421),
  mapFilled: d("map-filled", 60422),
  mapHorizontalFilled: d("map-horizontal-filled", 60422),
  foldHorizontalFilled: d("fold-horizontal-filled", 60422),
  circleSmall: d("circle-small", 60423),
  bellSlash: d("bell-slash", 60424),
  bellSlashDot: d("bell-slash-dot", 60425),
  commentUnresolved: d("comment-unresolved", 60426),
  gitPullRequestGoToChanges: d("git-pull-request-go-to-changes", 60427),
  gitPullRequestNewChanges: d("git-pull-request-new-changes", 60428),
  searchFuzzy: d("search-fuzzy", 60429),
  commentDraft: d("comment-draft", 60430),
  send: d("send", 60431),
  sparkle: d("sparkle", 60432),
  insert: d("insert", 60433),
  mic: d("mic", 60434),
  thumbsdownFilled: d("thumbsdown-filled", 60435),
  thumbsupFilled: d("thumbsup-filled", 60436),
  coffee: d("coffee", 60437),
  snake: d("snake", 60438),
  game: d("game", 60439),
  vr: d("vr", 60440),
  chip: d("chip", 60441),
  piano: d("piano", 60442),
  music: d("music", 60443),
  micFilled: d("mic-filled", 60444),
  repoFetch: d("repo-fetch", 60445),
  copilot: d("copilot", 60446),
  lightbulbSparkle: d("lightbulb-sparkle", 60447),
  robot: d("robot", 60448),
  sparkleFilled: d("sparkle-filled", 60449),
  diffSingle: d("diff-single", 60450),
  diffMultiple: d("diff-multiple", 60451),
  surroundWith: d("surround-with", 60452),
  share: d("share", 60453),
  gitStash: d("git-stash", 60454),
  gitStashApply: d("git-stash-apply", 60455),
  gitStashPop: d("git-stash-pop", 60456),
  vscode: d("vscode", 60457),
  vscodeInsiders: d("vscode-insiders", 60458),
  codeOss: d("code-oss", 60459),
  runCoverage: d("run-coverage", 60460),
  runAllCoverage: d("run-all-coverage", 60461),
  coverage: d("coverage", 60462),
  githubProject: d("github-project", 60463),
  mapVertical: d("map-vertical", 60464),
  foldVertical: d("fold-vertical", 60464),
  mapVerticalFilled: d("map-vertical-filled", 60465),
  foldVerticalFilled: d("fold-vertical-filled", 60465),
  goToSearch: d("go-to-search", 60466),
  percentage: d("percentage", 60467),
  sortPercentage: d("sort-percentage", 60467),
  attach: d("attach", 60468),
  goToEditingSession: d("go-to-editing-session", 60469),
  editSession: d("edit-session", 60470),
  codeReview: d("code-review", 60471),
  copilotWarning: d("copilot-warning", 60472),
  python: d("python", 60473),
  copilotLarge: d("copilot-large", 60474),
  copilotWarningLarge: d("copilot-warning-large", 60475),
  keyboardTab: d("keyboard-tab", 60476),
  copilotBlocked: d("copilot-blocked", 60477),
  copilotNotConnected: d("copilot-not-connected", 60478),
  flag: d("flag", 60479),
  lightbulbEmpty: d("lightbulb-empty", 60480),
  symbolMethodArrow: d("symbol-method-arrow", 60481)
}, qc = {
  dialogError: d("dialog-error", "error"),
  dialogWarning: d("dialog-warning", "warning"),
  dialogInfo: d("dialog-info", "info"),
  dialogClose: d("dialog-close", "close"),
  treeItemExpanded: d("tree-item-expanded", "chevron-down"),
  treeFilterOnTypeOn: d("tree-filter-on-type-on", "list-filter"),
  treeFilterOnTypeOff: d("tree-filter-on-type-off", "list-selection"),
  treeFilterClear: d("tree-filter-clear", "close"),
  treeItemLoading: d("tree-item-loading", "loading"),
  menuSelection: d("menu-selection", "check"),
  menuSubmenu: d("menu-submenu", "chevron-right"),
  menuBarMore: d("menubar-more", "more"),
  scrollbarButtonLeft: d("scrollbar-button-left", "triangle-left"),
  scrollbarButtonRight: d("scrollbar-button-right", "triangle-right"),
  scrollbarButtonUp: d("scrollbar-button-up", "triangle-up"),
  scrollbarButtonDown: d("scrollbar-button-down", "triangle-down"),
  toolBarMore: d("toolbar-more", "more"),
  quickInputBack: d("quick-input-back", "arrow-left"),
  dropDownButton: d("drop-down-button", 60084),
  symbolCustomColor: d("symbol-customcolor", 60252),
  exportIcon: d("export", 60332),
  workspaceUnspecified: d("workspace-unspecified", 60355),
  newLine: d("newline", 60394),
  thumbsDownFilled: d("thumbsdown-filled", 60435),
  thumbsUpFilled: d("thumbsup-filled", 60436),
  gitFetch: d("git-fetch", 60445),
  lightbulbSparkleAutofix: d("lightbulb-sparkle-autofix", 60447),
  debugBreakpointPending: d("debug-breakpoint-pending", 60377)
}, j = {
  ...Wc,
  ...qc
};
var Xr;
(function(e) {
  e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(Xr || (Xr = {}));
var Yr;
(function(e) {
  e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(Yr || (Yr = {}));
var Gn;
(function(e) {
  e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(Gn || (Gn = {}));
var Qr;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(Qr || (Qr = {}));
var Jr;
(function(e) {
  e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(Jr || (Jr = {}));
class El {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new Be(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(t) {
    this._onDidChange.fire({
      changedLanguages: t,
      changedColorMap: !1
    });
  }
  register(t, n) {
    return this._tokenizationSupports.set(t, n), this.handleChange([t]), gn(() => {
      this._tokenizationSupports.get(t) === n && (this._tokenizationSupports.delete(t), this.handleChange([t]));
    });
  }
  get(t) {
    return this._tokenizationSupports.get(t) || null;
  }
  registerFactory(t, n) {
    var r;
    (r = this._factories.get(t)) == null || r.dispose();
    const i = new Vc(this, t, n);
    return this._factories.set(t, i), gn(() => {
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
    return this._colorMap && this._colorMap.length > Gn.DefaultBackground ? this._colorMap[Gn.DefaultBackground] : null;
  }
}
class Vc extends $t {
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
class Cc {
  constructor(t, n, i) {
    this.offset = t, this.type = n, this.language = i, this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
}
var Zr;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Zr || (Zr = {}));
var O;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet";
})(O || (O = {}));
var Kr;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(O.Method, j.symbolMethod), t.set(O.Function, j.symbolFunction), t.set(O.Constructor, j.symbolConstructor), t.set(O.Field, j.symbolField), t.set(O.Variable, j.symbolVariable), t.set(O.Class, j.symbolClass), t.set(O.Struct, j.symbolStruct), t.set(O.Interface, j.symbolInterface), t.set(O.Module, j.symbolModule), t.set(O.Property, j.symbolProperty), t.set(O.Event, j.symbolEvent), t.set(O.Operator, j.symbolOperator), t.set(O.Unit, j.symbolUnit), t.set(O.Value, j.symbolValue), t.set(O.Enum, j.symbolEnum), t.set(O.Constant, j.symbolConstant), t.set(O.Enum, j.symbolEnum), t.set(O.EnumMember, j.symbolEnumMember), t.set(O.Keyword, j.symbolKeyword), t.set(O.Snippet, j.symbolSnippet), t.set(O.Text, j.symbolText), t.set(O.Color, j.symbolColor), t.set(O.File, j.symbolFile), t.set(O.Reference, j.symbolReference), t.set(O.Customcolor, j.symbolCustomColor), t.set(O.Folder, j.symbolFolder), t.set(O.TypeParameter, j.symbolTypeParameter), t.set(O.User, j.account), t.set(O.Issue, j.issues);
  function n(a) {
    let l = t.get(a);
    return l || (console.info("No codicon found for CompletionItemKind " + a), l = j.symbolProperty), l;
  }
  e.toIcon = n;
  function i(a) {
    switch (a) {
      case O.Method:
        return X(763, "Method");
      case O.Function:
        return X(764, "Function");
      case O.Constructor:
        return X(765, "Constructor");
      case O.Field:
        return X(766, "Field");
      case O.Variable:
        return X(767, "Variable");
      case O.Class:
        return X(768, "Class");
      case O.Struct:
        return X(769, "Struct");
      case O.Interface:
        return X(770, "Interface");
      case O.Module:
        return X(771, "Module");
      case O.Property:
        return X(772, "Property");
      case O.Event:
        return X(773, "Event");
      case O.Operator:
        return X(774, "Operator");
      case O.Unit:
        return X(775, "Unit");
      case O.Value:
        return X(776, "Value");
      case O.Constant:
        return X(777, "Constant");
      case O.Enum:
        return X(778, "Enum");
      case O.EnumMember:
        return X(779, "Enum Member");
      case O.Keyword:
        return X(780, "Keyword");
      case O.Text:
        return X(781, "Text");
      case O.Color:
        return X(782, "Color");
      case O.File:
        return X(783, "File");
      case O.Reference:
        return X(784, "Reference");
      case O.Customcolor:
        return X(785, "Custom Color");
      case O.Folder:
        return X(786, "Folder");
      case O.TypeParameter:
        return X(787, "Type Parameter");
      case O.User:
        return X(788, "User");
      case O.Issue:
        return X(789, "Issue");
      case O.Snippet:
        return X(790, "Snippet");
      default:
        return "";
    }
  }
  e.toLabel = i;
  const r = /* @__PURE__ */ new Map();
  r.set("method", O.Method), r.set("function", O.Function), r.set("constructor", O.Constructor), r.set("field", O.Field), r.set("variable", O.Variable), r.set("class", O.Class), r.set("struct", O.Struct), r.set("interface", O.Interface), r.set("module", O.Module), r.set("property", O.Property), r.set("event", O.Event), r.set("operator", O.Operator), r.set("unit", O.Unit), r.set("value", O.Value), r.set("constant", O.Constant), r.set("enum", O.Enum), r.set("enum-member", O.EnumMember), r.set("enumMember", O.EnumMember), r.set("keyword", O.Keyword), r.set("snippet", O.Snippet), r.set("text", O.Text), r.set("color", O.Color), r.set("file", O.File), r.set("reference", O.Reference), r.set("customcolor", O.Customcolor), r.set("folder", O.Folder), r.set("type-parameter", O.TypeParameter), r.set("typeParameter", O.TypeParameter), r.set("account", O.User), r.set("issue", O.Issue);
  function s(a, l) {
    let o = r.get(a);
    return typeof o > "u" && !l && (o = O.Property), o;
  }
  e.fromString = s;
})(Kr || (Kr = {}));
var es;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(es || (es = {}));
var ts;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(ts || (ts = {}));
var ns;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(ns || (ns = {}));
var is;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(is || (is = {}));
var rs;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(rs || (rs = {}));
var ss;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(ss || (ss = {}));
var as;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(as || (as = {}));
var os;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(os || (os = {}));
var ls;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(ls || (ls = {}));
var C;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(C || (C = {}));
C.Array + "", X(791, "array"), C.Boolean + "", X(792, "boolean"), C.Class + "", X(793, "class"), C.Constant + "", X(794, "constant"), C.Constructor + "", X(795, "constructor"), C.Enum + "", X(796, "enumeration"), C.EnumMember + "", X(797, "enumeration member"), C.Event + "", X(798, "event"), C.Field + "", X(799, "field"), C.File + "", X(800, "file"), C.Function + "", X(801, "function"), C.Interface + "", X(802, "interface"), C.Key + "", X(803, "key"), C.Method + "", X(804, "method"), C.Module + "", X(805, "module"), C.Namespace + "", X(806, "namespace"), C.Null + "", X(807, "null"), C.Number + "", X(808, "number"), C.Object + "", X(809, "object"), C.Operator + "", X(810, "operator"), C.Package + "", X(811, "package"), C.Property + "", X(812, "property"), C.String + "", X(813, "string"), C.Struct + "", X(814, "struct"), C.TypeParameter + "", X(815, "type parameter"), C.Variable + "", X(816, "variable");
var us;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(us || (us = {}));
var cs;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(C.File, j.symbolFile), t.set(C.Module, j.symbolModule), t.set(C.Namespace, j.symbolNamespace), t.set(C.Package, j.symbolPackage), t.set(C.Class, j.symbolClass), t.set(C.Method, j.symbolMethod), t.set(C.Property, j.symbolProperty), t.set(C.Field, j.symbolField), t.set(C.Constructor, j.symbolConstructor), t.set(C.Enum, j.symbolEnum), t.set(C.Interface, j.symbolInterface), t.set(C.Function, j.symbolFunction), t.set(C.Variable, j.symbolVariable), t.set(C.Constant, j.symbolConstant), t.set(C.String, j.symbolString), t.set(C.Number, j.symbolNumber), t.set(C.Boolean, j.symbolBoolean), t.set(C.Array, j.symbolArray), t.set(C.Object, j.symbolObject), t.set(C.Key, j.symbolKey), t.set(C.Null, j.symbolNull), t.set(C.EnumMember, j.symbolEnumMember), t.set(C.Struct, j.symbolStruct), t.set(C.Event, j.symbolEvent), t.set(C.Operator, j.symbolOperator), t.set(C.TypeParameter, j.symbolTypeParameter);
  function n(s) {
    let a = t.get(s);
    return a || (console.info("No codicon found for SymbolKind " + s), a = j.symbolProperty), a;
  }
  e.toIcon = n;
  const i = /* @__PURE__ */ new Map();
  i.set(C.File, O.File), i.set(C.Module, O.Module), i.set(C.Namespace, O.Module), i.set(C.Package, O.Module), i.set(C.Class, O.Class), i.set(C.Method, O.Method), i.set(C.Property, O.Property), i.set(C.Field, O.Field), i.set(C.Constructor, O.Constructor), i.set(C.Enum, O.Enum), i.set(C.Interface, O.Interface), i.set(C.Function, O.Function), i.set(C.Variable, O.Variable), i.set(C.Constant, O.Constant), i.set(C.String, O.Text), i.set(C.Number, O.Value), i.set(C.Boolean, O.Value), i.set(C.Array, O.Value), i.set(C.Object, O.Value), i.set(C.Key, O.Keyword), i.set(C.Null, O.Value), i.set(C.EnumMember, O.EnumMember), i.set(C.Struct, O.Struct), i.set(C.Event, O.Event), i.set(C.Operator, O.Operator), i.set(C.TypeParameter, O.TypeParameter);
  function r(s) {
    let a = i.get(s);
    return a === void 0 && (console.info("No completion kind found for SymbolKind " + s), a = O.File), a;
  }
  e.toCompletionKind = r;
})(cs || (cs = {}));
var Le;
let md = (Le = class {
  static fromValue(t) {
    switch (t) {
      case "comment":
        return Le.Comment;
      case "imports":
        return Le.Imports;
      case "region":
        return Le.Region;
    }
    return new Le(t);
  }
  constructor(t) {
    this.value = t;
  }
}, Le.Comment = new Le("comment"), Le.Imports = new Le("imports"), Le.Region = new Le("region"), Le);
var hs;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(hs || (hs = {}));
var ds;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(ds || (ds = {}));
var ms;
(function(e) {
  function t(n) {
    return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(ms || (ms = {}));
var fs;
(function(e) {
  e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(fs || (fs = {}));
var ps;
(function(e) {
  e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(ps || (ps = {}));
var gs;
(function(e) {
  e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(gs || (gs = {}));
var bs;
(function(e) {
  e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(bs || (bs = {}));
var _s;
(function(e) {
  e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(_s || (_s = {}));
var ws;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(ws || (ws = {}));
new El();
new El();
var vs;
(function(e) {
  e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(vs || (vs = {}));
var Ts;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Ts || (Ts = {}));
var ys;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(ys || (ys = {}));
var As;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(As || (As = {}));
var xs;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(xs || (xs = {}));
var Ls;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Snippet = 27] = "Snippet";
})(Ls || (Ls = {}));
var ks;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(ks || (ks = {}));
var Es;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Es || (Es = {}));
var Ss;
(function(e) {
  e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(Ss || (Ss = {}));
var Rs;
(function(e) {
  e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})(Rs || (Rs = {}));
var Ns;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Ns || (Ns = {}));
var Ds;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Ds || (Ds = {}));
var Ms;
(function(e) {
  e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(Ms || (Ms = {}));
var Us;
(function(e) {
  e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.ariaLabel = 4] = "ariaLabel", e[e.ariaRequired = 5] = "ariaRequired", e[e.autoClosingBrackets = 6] = "autoClosingBrackets", e[e.autoClosingComments = 7] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 8] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 9] = "autoClosingDelete", e[e.autoClosingOvertype = 10] = "autoClosingOvertype", e[e.autoClosingQuotes = 11] = "autoClosingQuotes", e[e.autoIndent = 12] = "autoIndent", e[e.automaticLayout = 13] = "automaticLayout", e[e.autoSurround = 14] = "autoSurround", e[e.bracketPairColorization = 15] = "bracketPairColorization", e[e.guides = 16] = "guides", e[e.codeLens = 17] = "codeLens", e[e.codeLensFontFamily = 18] = "codeLensFontFamily", e[e.codeLensFontSize = 19] = "codeLensFontSize", e[e.colorDecorators = 20] = "colorDecorators", e[e.colorDecoratorsLimit = 21] = "colorDecoratorsLimit", e[e.columnSelection = 22] = "columnSelection", e[e.comments = 23] = "comments", e[e.contextmenu = 24] = "contextmenu", e[e.copyWithSyntaxHighlighting = 25] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 26] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 27] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 28] = "cursorStyle", e[e.cursorSurroundingLines = 29] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 30] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 31] = "cursorWidth", e[e.disableLayerHinting = 32] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 33] = "disableMonospaceOptimizations", e[e.domReadOnly = 34] = "domReadOnly", e[e.dragAndDrop = 35] = "dragAndDrop", e[e.dropIntoEditor = 36] = "dropIntoEditor", e[e.experimentalEditContextEnabled = 37] = "experimentalEditContextEnabled", e[e.emptySelectionClipboard = 38] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 39] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 40] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 41] = "extraEditorClassName", e[e.fastScrollSensitivity = 42] = "fastScrollSensitivity", e[e.find = 43] = "find", e[e.fixedOverflowWidgets = 44] = "fixedOverflowWidgets", e[e.folding = 45] = "folding", e[e.foldingStrategy = 46] = "foldingStrategy", e[e.foldingHighlight = 47] = "foldingHighlight", e[e.foldingImportsByDefault = 48] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 49] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 50] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 51] = "fontFamily", e[e.fontInfo = 52] = "fontInfo", e[e.fontLigatures = 53] = "fontLigatures", e[e.fontSize = 54] = "fontSize", e[e.fontWeight = 55] = "fontWeight", e[e.fontVariations = 56] = "fontVariations", e[e.formatOnPaste = 57] = "formatOnPaste", e[e.formatOnType = 58] = "formatOnType", e[e.glyphMargin = 59] = "glyphMargin", e[e.gotoLocation = 60] = "gotoLocation", e[e.hideCursorInOverviewRuler = 61] = "hideCursorInOverviewRuler", e[e.hover = 62] = "hover", e[e.inDiffEditor = 63] = "inDiffEditor", e[e.inlineSuggest = 64] = "inlineSuggest", e[e.letterSpacing = 65] = "letterSpacing", e[e.lightbulb = 66] = "lightbulb", e[e.lineDecorationsWidth = 67] = "lineDecorationsWidth", e[e.lineHeight = 68] = "lineHeight", e[e.lineNumbers = 69] = "lineNumbers", e[e.lineNumbersMinChars = 70] = "lineNumbersMinChars", e[e.linkedEditing = 71] = "linkedEditing", e[e.links = 72] = "links", e[e.matchBrackets = 73] = "matchBrackets", e[e.minimap = 74] = "minimap", e[e.mouseStyle = 75] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 76] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 77] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 78] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 79] = "multiCursorModifier", e[e.multiCursorPaste = 80] = "multiCursorPaste", e[e.multiCursorLimit = 81] = "multiCursorLimit", e[e.occurrencesHighlight = 82] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 83] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 84] = "overtypeCursorStyle", e[e.overtypeOnPaste = 85] = "overtypeOnPaste", e[e.overviewRulerBorder = 86] = "overviewRulerBorder", e[e.overviewRulerLanes = 87] = "overviewRulerLanes", e[e.padding = 88] = "padding", e[e.pasteAs = 89] = "pasteAs", e[e.parameterHints = 90] = "parameterHints", e[e.peekWidgetDefaultFocus = 91] = "peekWidgetDefaultFocus", e[e.placeholder = 92] = "placeholder", e[e.definitionLinkOpensInPeek = 93] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 94] = "quickSuggestions", e[e.quickSuggestionsDelay = 95] = "quickSuggestionsDelay", e[e.readOnly = 96] = "readOnly", e[e.readOnlyMessage = 97] = "readOnlyMessage", e[e.renameOnType = 98] = "renameOnType", e[e.renderControlCharacters = 99] = "renderControlCharacters", e[e.renderFinalNewline = 100] = "renderFinalNewline", e[e.renderLineHighlight = 101] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 102] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 103] = "renderValidationDecorations", e[e.renderWhitespace = 104] = "renderWhitespace", e[e.revealHorizontalRightPadding = 105] = "revealHorizontalRightPadding", e[e.roundedSelection = 106] = "roundedSelection", e[e.rulers = 107] = "rulers", e[e.scrollbar = 108] = "scrollbar", e[e.scrollBeyondLastColumn = 109] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 110] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 111] = "scrollPredominantAxis", e[e.selectionClipboard = 112] = "selectionClipboard", e[e.selectionHighlight = 113] = "selectionHighlight", e[e.selectOnLineNumbers = 114] = "selectOnLineNumbers", e[e.showFoldingControls = 115] = "showFoldingControls", e[e.showUnused = 116] = "showUnused", e[e.snippetSuggestions = 117] = "snippetSuggestions", e[e.smartSelect = 118] = "smartSelect", e[e.smoothScrolling = 119] = "smoothScrolling", e[e.stickyScroll = 120] = "stickyScroll", e[e.stickyTabStops = 121] = "stickyTabStops", e[e.stopRenderingLineAfter = 122] = "stopRenderingLineAfter", e[e.suggest = 123] = "suggest", e[e.suggestFontSize = 124] = "suggestFontSize", e[e.suggestLineHeight = 125] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 126] = "suggestOnTriggerCharacters", e[e.suggestSelection = 127] = "suggestSelection", e[e.tabCompletion = 128] = "tabCompletion", e[e.tabIndex = 129] = "tabIndex", e[e.unicodeHighlighting = 130] = "unicodeHighlighting", e[e.unusualLineTerminators = 131] = "unusualLineTerminators", e[e.useShadowDOM = 132] = "useShadowDOM", e[e.useTabStops = 133] = "useTabStops", e[e.wordBreak = 134] = "wordBreak", e[e.wordSegmenterLocales = 135] = "wordSegmenterLocales", e[e.wordSeparators = 136] = "wordSeparators", e[e.wordWrap = 137] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 138] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 139] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 140] = "wordWrapColumn", e[e.wordWrapOverride1 = 141] = "wordWrapOverride1", e[e.wordWrapOverride2 = 142] = "wordWrapOverride2", e[e.wrappingIndent = 143] = "wrappingIndent", e[e.wrappingStrategy = 144] = "wrappingStrategy", e[e.showDeprecated = 145] = "showDeprecated", e[e.inlayHints = 146] = "inlayHints", e[e.effectiveCursorStyle = 147] = "effectiveCursorStyle", e[e.editorClassName = 148] = "editorClassName", e[e.pixelRatio = 149] = "pixelRatio", e[e.tabFocusMode = 150] = "tabFocusMode", e[e.layoutInfo = 151] = "layoutInfo", e[e.wrappingInfo = 152] = "wrappingInfo", e[e.defaultColorDecorators = 153] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 154] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 155] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveExperimentalEditContextEnabled = 156] = "effectiveExperimentalEditContextEnabled";
})(Us || (Us = {}));
var Is;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Is || (Is = {}));
var Fs;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Fs || (Fs = {}));
var Ps;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(Ps || (Ps = {}));
var Bs;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Bs || (Bs = {}));
var Hs;
(function(e) {
  e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(Hs || (Hs = {}));
var Os;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(Os || (Os = {}));
var zs;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(zs || (zs = {}));
var Ws;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(Ws || (Ws = {}));
var qs;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(qs || (qs = {}));
var Wi;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(Wi || (Wi = {}));
var qi;
(function(e) {
  e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(qi || (qi = {}));
var Vi;
(function(e) {
  e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})(Vi || (Vi = {}));
var Vs;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(Vs || (Vs = {}));
var Cs;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(Cs || (Cs = {}));
var Gs;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(Gs || (Gs = {}));
var js;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(js || (js = {}));
var $s;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})($s || ($s = {}));
var Xs;
(function(e) {
  e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(Xs || (Xs = {}));
var Ys;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(Ys || (Ys = {}));
var Qs;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(Qs || (Qs = {}));
var Js;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(Js || (Js = {}));
var Zs;
(function(e) {
  e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(Zs || (Zs = {}));
var Ks;
(function(e) {
  e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(Ks || (Ks = {}));
var ea;
(function(e) {
  e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(ea || (ea = {}));
var ta;
(function(e) {
  e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(ta || (ta = {}));
var Ci;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Ci || (Ci = {}));
var na;
(function(e) {
  e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(na || (na = {}));
var ia;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(ia || (ia = {}));
var ra;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(ra || (ra = {}));
var sa;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(sa || (sa = {}));
var aa;
(function(e) {
  e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(aa || (aa = {}));
var oa;
(function(e) {
  e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(oa || (oa = {}));
var la;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(la || (la = {}));
var ua;
(function(e) {
  e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})(ua || (ua = {}));
const zt = class zt {
  static chord(t, n) {
    return bc(t, n);
  }
};
zt.CtrlCmd = Pt.CtrlCmd, zt.Shift = Pt.Shift, zt.Alt = Pt.Alt, zt.WinCtrl = Pt.WinCtrl;
let Gi = zt;
function Gc() {
  return {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Hu,
    Emitter: Be,
    KeyCode: Wi,
    KeyMod: Gi,
    Position: ie,
    Range: Y,
    Selection: Ue,
    SelectionDirection: Ci,
    MarkerSeverity: qi,
    MarkerTag: Vi,
    Uri: Me,
    Token: Cc
  };
}
var Yt;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(Yt || (Yt = {}));
new hu(10);
var ca;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(ca || (ca = {}));
var ha;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(ha || (ha = {}));
var da;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(da || (da = {}));
var ma;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(ma || (ma = {}));
var fa;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(fa || (fa = {}));
var pa;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(pa || (pa = {}));
var ga;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(ga || (ga = {}));
var ba;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(ba || (ba = {}));
var _a;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(_a || (_a = {}));
var wa;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(wa || (wa = {}));
var va;
(function(e) {
  e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(va || (va = {}));
function jc(e) {
  if (!e || e.length === 0)
    return !1;
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i === S.LineFeed)
      return !0;
    if (i === S.Backslash) {
      if (t++, t >= n)
        break;
      const r = e.charCodeAt(t);
      if (r === S.n || r === S.r || r === S.W)
        return !0;
    }
  }
  return !1;
}
function $c(e, t, n, i, r) {
  if (i === 0)
    return !0;
  const s = t.charCodeAt(i - 1);
  if (e.get(s) !== Yt.Regular || s === S.CarriageReturn || s === S.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i);
    if (e.get(a) !== Yt.Regular)
      return !0;
  }
  return !1;
}
function Xc(e, t, n, i, r) {
  if (i + r === n)
    return !0;
  const s = t.charCodeAt(i + r);
  if (e.get(s) !== Yt.Regular || s === S.CarriageReturn || s === S.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i + r - 1);
    if (e.get(a) !== Yt.Regular)
      return !0;
  }
  return !1;
}
function Yc(e, t, n, i, r) {
  return $c(e, t, n, i, r) && Xc(e, t, n, i, r);
}
class Qc {
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
          Yu(t, n, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = r, this._prevMatchLength = s, !this._wordSeparators || Yc(this._wordSeparators, t, n, r, s))
        return i;
    } while (i);
    return null;
  }
}
const Jc = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function Zc(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of Jc)
    e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
const Sl = Zc();
function Rl(e) {
  let t = Sl;
  if (e && e instanceof RegExp)
    if (e.global)
      t = e;
    else {
      let n = "g";
      e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
    }
  return t.lastIndex = 0, t;
}
const Nl = new bu();
Nl.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function yr(e, t, n, i, r) {
  if (t = Rl(t), r || (r = Bn.first(Nl)), n.length > r.maxLen) {
    let u = e - r.maxLen / 2;
    return u < 0 ? u = 0 : i += u, n = n.substring(u, e + r.maxLen / 2), yr(e, t, n, i, r);
  }
  const s = Date.now(), a = e - 1 - i;
  let l = -1, o = null;
  for (let u = 1; !(Date.now() - s >= r.timeBudget); u++) {
    const c = a - r.windowSize * u;
    t.lastIndex = Math.max(0, c);
    const h = Kc(t, n, a, l);
    if (!h && o || (o = h, c <= 0))
      break;
    l = c;
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
function Kc(e, t, n, i) {
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
class eh {
  static computeUnicodeHighlights(t, n, i) {
    const r = i ? i.startLineNumber : 1, s = i ? i.endLineNumber : t.getLineCount(), a = new Ta(n), l = a.getCandidateCodePoints();
    let o;
    l === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${th(Array.from(l))}`, "g");
    const u = new Qc(null, o), c = [];
    let h = !1, m, p = 0, _ = 0, f = 0;
    e: for (let L = r, A = s; L <= A; L++) {
      const w = t.getLineContent(L), k = w.length;
      u.reset(0);
      do
        if (m = u.next(w), m) {
          let H = m.index, D = m.index + m[0].length;
          if (H > 0) {
            const x = w.charCodeAt(H - 1);
            zn(x) && H--;
          }
          if (D + 1 < k) {
            const x = w.charCodeAt(D - 1);
            zn(x) && D++;
          }
          const I = w.substring(H, D);
          let b = yr(H + 1, Sl, w, 0);
          b && b.endColumn <= H + 1 && (b = null);
          const g = a.shouldHighlightNonBasicASCII(I, b ? b.word : null);
          if (g !== Ae.None) {
            if (g === Ae.Ambiguous ? p++ : g === Ae.Invisible ? _++ : g === Ae.NonBasicASCII ? f++ : du(), c.length >= 1e3) {
              h = !0;
              break e;
            }
            c.push(new Y(L, H + 1, L, D + 1));
          }
        }
      while (m);
    }
    return {
      ranges: c,
      hasMore: h,
      ambiguousCharacterCount: p,
      invisibleCharacterCount: _,
      nonBasicAsciiCharacterCount: f
    };
  }
  static computeUnicodeHighlightReason(t, n) {
    const i = new Ta(n);
    switch (i.shouldHighlightNonBasicASCII(t, null)) {
      case Ae.None:
        return null;
      case Ae.Invisible:
        return { kind: un.Invisible };
      case Ae.Ambiguous: {
        const s = t.codePointAt(0), a = i.ambiguousCharacters.getPrimaryConfusable(s), l = vn.getLocales().filter((o) => !vn.getInstance(/* @__PURE__ */ new Set([...n.allowedLocales, o])).isAmbiguous(s));
        return { kind: un.Ambiguous, confusableWith: String.fromCodePoint(a), notAmbiguousInLocales: l };
      }
      case Ae.NonBasicASCII:
        return { kind: un.NonBasicAscii };
    }
  }
}
function th(e, t) {
  return `[${Wu(e.map((i) => String.fromCodePoint(i)).join(""))}]`;
}
var un;
(function(e) {
  e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(un || (un = {}));
class Ta {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = vn.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII)
      return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters)
      for (const n of ln.codePoints)
        ya(String.fromCodePoint(n)) || t.add(n);
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
      return Ae.None;
    if (this.options.nonBasicASCII)
      return Ae.NonBasicASCII;
    let r = !1, s = !1;
    if (n)
      for (const a of n) {
        const l = a.codePointAt(0), o = Ju(a);
        r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(l) && !ln.isInvisibleCharacter(l) && (s = !0);
      }
    return !r && s ? Ae.None : this.options.invisibleCharacters && !ya(t) && ln.isInvisibleCharacter(i) ? Ae.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(i) ? Ae.Ambiguous : Ae.None;
  }
}
function ya(e) {
  return e === " " || e === `
` || e === "	";
}
var Ae;
(function(e) {
  e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(Ae || (Ae = {}));
class Fn {
  constructor(t, n, i) {
    this.changes = t, this.moves = n, this.hitTimeout = i;
  }
}
class Ar {
  constructor(t, n) {
    this.lineRangeMapping = t, this.changes = n;
  }
  flip() {
    return new Ar(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
  }
}
class te {
  static fromTo(t, n) {
    return new te(t, n);
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
      n.splice(i, r - i, new te(s, a));
    }
  }
  static tryCreate(t, n) {
    if (!(t > n))
      return new te(t, n);
  }
  static ofLength(t) {
    return new te(0, t);
  }
  static ofStartAndLength(t, n) {
    return new te(t, t + n);
  }
  static emptyAt(t) {
    return new te(t, t);
  }
  constructor(t, n) {
    if (this.start = t, this.endExclusive = n, t > n)
      throw new pe(`Invalid range: ${this.toString()}`);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(t) {
    return new te(this.start + t, this.endExclusive + t);
  }
  deltaStart(t) {
    return new te(this.start + t, this.endExclusive);
  }
  deltaEnd(t) {
    return new te(this.start, this.endExclusive + t);
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
    return new te(
      Math.min(this.start, t.start),
      Math.max(this.endExclusive, t.endExclusive)
    );
  }
  intersect(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    if (n <= i)
      return new te(n, i);
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
      throw new pe(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, t));
  }
  clipCyclic(t) {
    if (this.isEmpty)
      throw new pe(`Invalid clipping range: ${this.toString()}`);
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
    let n = new Qe(t[0].slice());
    for (let i = 1; i < t.length; i++)
      n = n.getUnion(new Qe(t[i].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0)
      throw new pe("lineRanges cannot be empty");
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
      throw new pe(
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
    return this.isEmpty ? null : new Y(
      this.startLineNumber,
      1,
      this.endLineNumberExclusive - 1,
      Number.MAX_SAFE_INTEGER
    );
  }
  toExclusiveRange() {
    return new Y(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
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
    return new te(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
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
class Qe {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0)
      return;
    const n = ki(this._normalizedRanges, (r) => r.endLineNumberExclusive >= t.startLineNumber), i = jt(this._normalizedRanges, (r) => r.startLineNumber <= t.endLineNumberExclusive) + 1;
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
    const n = Gt(this._normalizedRanges, (i) => i.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = Gt(this._normalizedRanges, (i) => i.startLineNumber < t.endLineNumberExclusive);
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
    return s !== null && n.push(s), new Qe(n);
  }
  subtractFrom(t) {
    const n = ki(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), i = jt(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i)
      return new Qe([t]);
    const r = [];
    let s = t.startLineNumber;
    for (let a = n; a < i; a++) {
      const l = this._normalizedRanges[a];
      l.startLineNumber > s && r.push(new J(s, l.startLineNumber)), s = l.endLineNumberExclusive;
    }
    return s < t.endLineNumberExclusive && r.push(new J(s, t.endLineNumberExclusive)), new Qe(r);
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
    return new Qe(n);
  }
  getWithDelta(t) {
    return new Qe(this._normalizedRanges.map((n) => n.delta(t)));
  }
}
const Re = class Re {
  static lengthDiffNonNegative(t, n) {
    return n.isLessThan(t) ? Re.zero : t.lineCount === n.lineCount ? new Re(0, n.columnCount - t.columnCount) : new Re(n.lineCount - t.lineCount, n.columnCount);
  }
  static betweenPositions(t, n) {
    return t.lineNumber === n.lineNumber ? new Re(0, n.column - t.column) : new Re(n.lineNumber - t.lineNumber, n.column - 1);
  }
  static fromPosition(t) {
    return new Re(t.lineNumber - 1, t.column - 1);
  }
  static ofRange(t) {
    return Re.betweenPositions(t.getStartPosition(), t.getEndPosition());
  }
  static ofText(t) {
    let n = 0, i = 0;
    for (const r of t)
      r === `
` ? (n++, i = 0) : i++;
    return new Re(n, i);
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
    return t.lineCount === 0 ? new Re(this.lineCount, this.columnCount + t.columnCount) : new Re(this.lineCount + t.lineCount, t.columnCount);
  }
  createRange(t) {
    return this.lineCount === 0 ? new Y(
      t.lineNumber,
      t.column,
      t.lineNumber,
      t.column + this.columnCount
    ) : new Y(
      t.lineNumber,
      t.column,
      t.lineNumber + this.lineCount,
      this.columnCount + 1
    );
  }
  toRange() {
    return new Y(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return J.ofLength(1, this.lineCount + 1);
  }
  addToPosition(t) {
    return this.lineCount === 0 ? new ie(t.lineNumber, t.column + this.columnCount) : new ie(t.lineNumber + this.lineCount, this.columnCount + 1);
  }
  addToRange(t) {
    return Y.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
Re.zero = new Re(0, 0);
let bt = Re;
class Dl {
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
      return new ie(1, 1);
    const n = this.textLength.lineCount + 1;
    if (t.lineNumber > n) {
      const r = this.getLineLength(n);
      return new ie(n, r + 1);
    }
    if (t.column < 1)
      return new ie(t.lineNumber, 1);
    const i = this.getLineLength(t.lineNumber);
    return t.column - 1 > i ? new ie(t.lineNumber, i + 1) : t;
  }
  getOffsetRange(t) {
    return new te(
      this.getOffset(t.getStartPosition()),
      this.getOffset(t.getEndPosition())
    );
  }
  getPosition(t) {
    const n = jt(this.lineStartOffsetByLineIdx, (s) => s <= t), i = n + 1, r = t - this.lineStartOffsetByLineIdx[n] + 1;
    return new ie(i, r);
  }
  getRange(t) {
    return Y.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
  }
  getTextLength(t) {
    return bt.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new bt(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}
let nh = class It {
  static fromOffsetEdit(t, n) {
    const i = t.edits.map((r) => new He(n.getTransformer().getRange(r.replaceRange), r.newText));
    return new It(i);
  }
  static single(t, n) {
    return new It([new He(t, n)]);
  }
  static insert(t, n) {
    return new It([new He(Y.fromPositions(t, t), n)]);
  }
  constructor(t) {
    this.edits = t, pn(() => br(t, (n, i) => n.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
  }
  normalize() {
    const t = [];
    for (const n of this.edits)
      if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
        const i = t[t.length - 1];
        t[t.length - 1] = new He(i.range.plusRange(n.range), i.text + n.text);
      } else n.isEmpty || t.push(n);
    return new It(t);
  }
  mapPosition(t) {
    let n = 0, i = 0, r = 0;
    for (const s of this.edits) {
      const a = s.range.getStartPosition();
      if (t.isBeforeOrEqual(a))
        break;
      const l = s.range.getEndPosition(), o = bt.ofText(s.text);
      if (t.isBefore(l)) {
        const u = new ie(
          a.lineNumber + n,
          a.column + (a.lineNumber + n === i ? r : 0)
        ), c = o.addToPosition(u);
        return kn(u, c);
      }
      a.lineNumber + n !== i && (r = 0), n += o.lineCount - (s.range.endLineNumber - s.range.startLineNumber), o.lineCount === 0 ? l.lineNumber !== a.lineNumber ? r += o.columnCount - (l.column - 1) : r += o.columnCount - (l.column - a.column) : r = o.columnCount, i = l.lineNumber + n;
    }
    return new ie(
      t.lineNumber + n,
      t.column + (t.lineNumber + n === i ? r : 0)
    );
  }
  mapRange(t) {
    function n(a) {
      return a instanceof ie ? a : a.getStartPosition();
    }
    function i(a) {
      return a instanceof ie ? a : a.getEndPosition();
    }
    const r = n(this.mapPosition(t.getStartPosition())), s = i(this.mapPosition(t.getEndPosition()));
    return kn(r, s);
  }
  inverseMapPosition(t, n) {
    return this.inverse(n).mapPosition(t);
  }
  inverseMapRange(t, n) {
    return this.inverse(n).mapRange(t);
  }
  apply(t) {
    let n = "", i = new ie(1, 1);
    for (const s of this.edits) {
      const a = s.range, l = a.getStartPosition(), o = a.getEndPosition(), u = kn(i, l);
      u.isEmpty() || (n += t.getValueOfRange(u)), n += s.text, i = o;
    }
    const r = kn(i, t.endPositionExclusive);
    return r.isEmpty() || (n += t.getValueOfRange(r)), n;
  }
  applyToString(t) {
    const n = new rh(t);
    return this.apply(n);
  }
  inverse(t) {
    const n = this.getNewRanges();
    return new It(this.edits.map((i, r) => new He(n[r], t.getValueOfRange(i.range))));
  }
  getNewRanges() {
    const t = [];
    let n = 0, i = 0, r = 0;
    for (const s of this.edits) {
      const a = bt.ofText(s.text), l = ie.lift({
        lineNumber: s.range.startLineNumber + i,
        column: s.range.startColumn + (s.range.startLineNumber === n ? r : 0)
      }), o = a.createRange(l);
      t.push(o), i = o.endLineNumber - s.range.endLineNumber, r = o.endColumn - s.range.endColumn, n = s.range.endLineNumber;
    }
    return t;
  }
  toSingle(t) {
    if (this.edits.length === 0)
      throw new pe();
    if (this.edits.length === 1)
      return this.edits[0];
    const n = this.edits[0].range.getStartPosition(), i = this.edits[this.edits.length - 1].range.getEndPosition();
    let r = "";
    for (let s = 0; s < this.edits.length; s++) {
      const a = this.edits[s];
      if (r += a.text, s < this.edits.length - 1) {
        const l = this.edits[s + 1], o = Y.fromPositions(a.range.getEndPosition(), l.range.getStartPosition()), u = t.getValueOfRange(o);
        r += u;
      }
    }
    return new He(Y.fromPositions(n, i), r);
  }
  equals(t) {
    return ll(this.edits, t.edits, (n, i) => n.equals(i));
  }
};
class He {
  static joinEdits(t, n) {
    if (t.length === 0)
      throw new pe();
    if (t.length === 1)
      return t[0];
    const i = t[0].range.getStartPosition(), r = t[t.length - 1].range.getEndPosition();
    let s = "";
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if (s += l.text, a < t.length - 1) {
        const o = t[a + 1], u = Y.fromPositions(l.range.getEndPosition(), o.range.getStartPosition()), c = n.getValueOfRange(u);
        s += c;
      }
    }
    return new He(Y.fromPositions(i, r), s);
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
    return new nh([this]);
  }
  equals(t) {
    return He.equals(this, t);
  }
  extendToCoverRange(t, n) {
    if (this.range.containsRange(t))
      return this;
    const i = this.range.plusRange(t), r = n.getValueOfRange(Y.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(Y.fromPositions(this.range.getEndPosition(), i.getEndPosition())), a = r + this.text + s;
    return new He(i, a);
  }
  extendToFullLine(t) {
    const n = new Y(
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
`), r = Pr(n, i), s = bt.ofText(n.substring(0, r)).addToPosition(this.range.getStartPosition()), a = i.substring(r), l = Y.fromPositions(s, this.range.getEndPosition());
    return new He(l, a);
  }
  isEffectiveDeletion(t) {
    let n = this.text.replaceAll(`\r
`, `
`), i = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const r = Pr(n, i);
    n = n.substring(r), i = i.substring(r);
    const s = Xu(n, i);
    return n = n.substring(0, n.length - s), i = i.substring(0, i.length - s), n === "";
  }
}
function kn(e, t) {
  if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER)
    return Y.fromPositions(t, t);
  if (!e.isBeforeOrEqual(t))
    throw new pe("start must be before end");
  return new Y(e.lineNumber, e.column, t.lineNumber, t.column);
}
class Ml {
  constructor() {
    this._transformer = void 0;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new ie(1, 1));
  }
  get lineRange() {
    return this.length.toLineRange();
  }
  getValue() {
    return this.getValueOfRange(this.length.toRange());
  }
  getLineLength(t) {
    return this.getValueOfRange(new Y(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    return this._transformer || (this._transformer = new Dl(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new Y(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return pl(t);
  }
}
class ih extends Ml {
  constructor(t, n) {
    mu(n >= 1), super(), this._getLineContent = t, this._lineCount = n;
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
    return new bt(this._lineCount - 1, t.length);
  }
}
class En extends ih {
  constructor(t) {
    super((n) => t[n - 1], t.length);
  }
}
class rh extends Ml {
  constructor(t) {
    super(), this.value = t, this._t = new Dl(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}
class ze {
  static inverse(t, n, i) {
    const r = [];
    let s = 1, a = 1;
    for (const o of t) {
      const u = new ze(new J(s, o.original.startLineNumber), new J(a, o.modified.startLineNumber));
      u.modified.isEmpty || r.push(u), s = o.original.endLineNumberExclusive, a = o.modified.endLineNumberExclusive;
    }
    const l = new ze(new J(s, n + 1), new J(a, i + 1));
    return l.modified.isEmpty || r.push(l), r;
  }
  static clip(t, n, i) {
    const r = [];
    for (const s of t) {
      const a = s.original.intersect(n), l = s.modified.intersect(i);
      a && !a.isEmpty && l && !l.isEmpty && r.push(new ze(a, l));
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
    return new ze(this.modified, this.original);
  }
  join(t) {
    return new ze(this.original.join(t.original), this.modified.join(t.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  toRangeMapping() {
    const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
    if (t && n)
      return new ke(t, n);
    if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
        throw new pe("not a valid diff");
      return new ke(new Y(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Y(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else
      return new ke(new Y(
        this.original.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.original.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ), new Y(
        this.modified.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.modified.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ));
  }
  toRangeMapping2(t, n) {
    if (Aa(this.original.endLineNumberExclusive, t) && Aa(this.modified.endLineNumberExclusive, n))
      return new ke(new Y(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new Y(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty)
      return new ke(Y.fromPositions(new ie(this.original.startLineNumber, 1), Dt(new ie(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), Y.fromPositions(new ie(this.modified.startLineNumber, 1), Dt(new ie(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
      return new ke(Y.fromPositions(Dt(new ie(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), Dt(new ie(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), Y.fromPositions(Dt(new ie(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), Dt(new ie(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new pe();
  }
}
function Dt(e, t) {
  if (e.lineNumber < 1)
    return new ie(1, 1);
  if (e.lineNumber > t.length)
    return new ie(t.length, t[t.length - 1].length + 1);
  const n = t[e.lineNumber - 1];
  return e.column > n.length + 1 ? new ie(e.lineNumber, n.length + 1) : e;
}
function Aa(e, t) {
  return e >= 1 && e <= t.length;
}
class at extends ze {
  static fromRangeMappings(t) {
    const n = J.join(t.map((r) => J.fromRangeInclusive(r.originalRange))), i = J.join(t.map((r) => J.fromRangeInclusive(r.modifiedRange)));
    return new at(n, i, t);
  }
  constructor(t, n, i) {
    super(t, n), this.innerChanges = i;
  }
  flip() {
    var t;
    return new at(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new at(this.original, this.modified, [this.toRangeMapping()]);
  }
}
class ke {
  static fromEdit(t) {
    const n = t.getNewRanges();
    return t.edits.map((r, s) => new ke(r.range, n[s]));
  }
  static fromEditJoin(t) {
    const n = t.getNewRanges(), i = t.edits.map((r, s) => new ke(r.range, n[s]));
    return ke.join(i);
  }
  static join(t) {
    if (t.length === 0)
      throw new pe("Cannot join an empty list of range mappings");
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.join(t[i]);
    return n;
  }
  static assertSorted(t) {
    for (let n = 1; n < t.length; n++) {
      const i = t[n - 1], r = t[n];
      if (!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition()) && i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition())))
        throw new pe("Range mappings must be sorted");
    }
  }
  constructor(t, n) {
    this.originalRange = t, this.modifiedRange = n;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new ke(this.modifiedRange, this.originalRange);
  }
  toTextEdit(t) {
    const n = t.getValueOfRange(this.modifiedRange);
    return new He(this.originalRange, n);
  }
  join(t) {
    return new ke(
      this.originalRange.plusRange(t.originalRange),
      this.modifiedRange.plusRange(t.modifiedRange)
    );
  }
}
function xa(e, t, n, i = !1) {
  const r = [];
  for (const s of nu(e.map((a) => sh(a, t, n)), (a, l) => a.original.overlapOrTouch(l.original) || a.modified.overlapOrTouch(l.modified))) {
    const a = s[0], l = s[s.length - 1];
    r.push(new at(
      a.original.join(l.original),
      a.modified.join(l.modified),
      s.map((o) => o.innerChanges[0])
    ));
  }
  return pn(() => !i && r.length > 0 && (r[0].modified.startLineNumber !== r[0].original.startLineNumber || n.length.lineCount - r[r.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - r[r.length - 1].original.endLineNumberExclusive) ? !1 : br(r, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), r;
}
function sh(e, t, n) {
  let i = 0, r = 0;
  e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + i <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + i <= e.modifiedRange.endLineNumber && (r = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + r && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + r && (i = 1);
  const s = new J(
    e.originalRange.startLineNumber + i,
    e.originalRange.endLineNumber + 1 + r
  ), a = new J(
    e.modifiedRange.startLineNumber + i,
    e.modifiedRange.endLineNumber + 1 + r
  );
  return new at(s, a, [e]);
}
const ah = 3;
class oh {
  computeDiff(t, n, i) {
    var o;
    const s = new Il(t, n, {
      maxComputationTime: i.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: i.ignoreTrimWhitespace,
      shouldComputeCharChanges: !0,
      shouldMakePrettyDiff: !0,
      shouldPostProcessCharChanges: !0
    }).computeDiff(), a = [];
    let l = null;
    for (const u of s.changes) {
      let c;
      u.originalEndLineNumber === 0 ? c = new J(u.originalStartLineNumber + 1, u.originalStartLineNumber + 1) : c = new J(u.originalStartLineNumber, u.originalEndLineNumber + 1);
      let h;
      u.modifiedEndLineNumber === 0 ? h = new J(u.modifiedStartLineNumber + 1, u.modifiedStartLineNumber + 1) : h = new J(u.modifiedStartLineNumber, u.modifiedEndLineNumber + 1);
      let m = new at(c, h, (o = u.charChanges) == null ? void 0 : o.map((p) => new ke(new Y(
        p.originalStartLineNumber,
        p.originalStartColumn,
        p.originalEndLineNumber,
        p.originalEndColumn
      ), new Y(
        p.modifiedStartLineNumber,
        p.modifiedStartColumn,
        p.modifiedEndLineNumber,
        p.modifiedEndColumn
      ))));
      l && (l.modified.endLineNumberExclusive === m.modified.startLineNumber || l.original.endLineNumberExclusive === m.original.startLineNumber) && (m = new at(
        l.original.join(m.original),
        l.modified.join(m.modified),
        l.innerChanges && m.innerChanges ? l.innerChanges.concat(m.innerChanges) : void 0
      ), a.pop()), a.push(m), l = m;
    }
    return pn(() => br(a, (u, c) => c.original.startLineNumber - u.original.endLineNumberExclusive === c.modified.startLineNumber - u.modified.endLineNumberExclusive && u.original.endLineNumberExclusive < c.original.startLineNumber && u.modified.endLineNumberExclusive < c.modified.startLineNumber)), new Fn(a, [], s.quitEarly);
  }
}
function Ul(e, t, n, i) {
  return new ft(e, t, n).ComputeDiff(i);
}
let La = class {
  constructor(t) {
    const n = [], i = [];
    for (let r = 0, s = t.length; r < s; r++)
      n[r] = ji(t[r], 1), i[r] = $i(t[r], 1);
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
      const u = this.lines[o], c = t ? this._startColumns[o] : 1, h = t ? this._endColumns[o] : u.length + 1;
      for (let m = c; m < h; m++)
        r[l] = u.charCodeAt(m - 1), s[l] = o + 1, a[l] = m, l++;
      !t && o < i && (r[l] = S.LineFeed, s[l] = o + 1, a[l] = u.length + 1, l++);
    }
    return new lh(r, s, a);
  }
};
class lh {
  constructor(t, n, i) {
    this._charCodes = t, this._lineNumbers = n, this._columns = i;
  }
  toString() {
    return "[" + this._charCodes.map(
      (t, n) => (t === S.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[n]},${this._columns[n]})`
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
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === S.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === S.LineFeed ? 1 : this._columns[t] + 1);
  }
}
class Vt {
  constructor(t, n, i, r, s, a, l, o) {
    this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = i, this.originalEndColumn = r, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = l, this.modifiedEndColumn = o;
  }
  static createFromDiffChange(t, n, i) {
    const r = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), l = n.getEndColumn(t.originalStart + t.originalLength - 1), o = i.getStartLineNumber(t.modifiedStart), u = i.getStartColumn(t.modifiedStart), c = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), h = i.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
    return new Vt(
      r,
      s,
      a,
      l,
      o,
      u,
      c,
      h
    );
  }
}
function uh(e) {
  if (e.length <= 1)
    return e;
  const t = [e[0]];
  let n = t[0];
  for (let i = 1, r = e.length; i < r; i++) {
    const s = e[i], a = s.originalStart - (n.originalStart + n.originalLength), l = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(a, l) < ah ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
  }
  return t;
}
class cn {
  constructor(t, n, i, r, s) {
    this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = i, this.modifiedEndLineNumber = r, this.charChanges = s;
  }
  static createFromDiffResult(t, n, i, r, s, a, l) {
    let o, u, c, h, m;
    if (n.originalLength === 0 ? (o = i.getStartLineNumber(n.originalStart) - 1, u = 0) : (o = i.getStartLineNumber(n.originalStart), u = i.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (c = r.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (c = r.getStartLineNumber(n.modifiedStart), h = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
      const p = i.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), _ = r.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (p.getElements().length > 0 && _.getElements().length > 0) {
        let f = Ul(p, _, s, !0).changes;
        l && (f = uh(f)), m = [];
        for (let L = 0, A = f.length; L < A; L++)
          m.push(Vt.createFromDiffChange(f[L], p, _));
      }
    }
    return new cn(
      o,
      u,
      c,
      h,
      m
    );
  }
}
class Il {
  constructor(t, n, i) {
    this.shouldComputeCharChanges = i.shouldComputeCharChanges, this.shouldPostProcessCharChanges = i.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = i.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = i.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = n, this.original = new La(t), this.modified = new La(n), this.continueLineDiff = ka(i.maxComputationTime), this.continueCharDiff = ka(i.maxComputationTime === 0 ? 0 : Math.min(i.maxComputationTime, 5e3));
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
    const t = Ul(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), n = t.changes, i = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const l = [];
      for (let o = 0, u = n.length; o < u; o++)
        l.push(cn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return {
        quitEarly: i,
        changes: l
      };
    }
    const r = [];
    let s = 0, a = 0;
    for (let l = -1, o = n.length; l < o; l++) {
      const u = l + 1 < o ? n[l + 1] : null, c = u ? u.originalStart : this.originalLines.length, h = u ? u.modifiedStart : this.modifiedLines.length;
      for (; s < c && a < h; ) {
        const m = this.originalLines[s], p = this.modifiedLines[a];
        if (m !== p) {
          {
            let _ = ji(m, 1), f = ji(p, 1);
            for (; _ > 1 && f > 1; ) {
              const L = m.charCodeAt(_ - 2), A = p.charCodeAt(f - 2);
              if (L !== A)
                break;
              _--, f--;
            }
            (_ > 1 || f > 1) && this._pushTrimWhitespaceCharChange(r, s + 1, 1, _, a + 1, 1, f);
          }
          {
            let _ = $i(m, 1), f = $i(p, 1);
            const L = m.length + 1, A = p.length + 1;
            for (; _ < L && f < A; ) {
              const w = m.charCodeAt(_ - 1), k = m.charCodeAt(f - 1);
              if (w !== k)
                break;
              _++, f++;
            }
            (_ < L || f < A) && this._pushTrimWhitespaceCharChange(r, s + 1, _, L, a + 1, f, A);
          }
        }
        s++, a++;
      }
      u && (r.push(cn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), s += u.originalLength, a += u.modifiedLength);
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
    this.shouldComputeCharChanges && (o = [new Vt(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )]), t.push(new cn(
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
    return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === n && u.modifiedEndLineNumber === s ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Vt(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )), !0) : u.originalEndLineNumber + 1 === n && u.modifiedEndLineNumber + 1 === s ? (u.originalEndLineNumber = n, u.modifiedEndLineNumber = s, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Vt(
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
function ji(e, t) {
  const n = qu(e);
  return n === -1 ? t : n + 1;
}
function $i(e, t) {
  const n = Vu(e);
  return n === -1 ? t : n + 2;
}
function ka(e) {
  if (e === 0)
    return () => !0;
  const t = Date.now();
  return () => Date.now() - t < e;
}
class ot {
  static trivial(t, n) {
    return new ot([new he(te.ofLength(t.length), te.ofLength(n.length))], !1);
  }
  static trivialTimedOut(t, n) {
    return new ot([new he(te.ofLength(t.length), te.ofLength(n.length))], !0);
  }
  constructor(t, n) {
    this.diffs = t, this.hitTimeout = n;
  }
}
class he {
  static invert(t, n) {
    const i = [];
    return iu(t, (r, s) => {
      i.push(he.fromOffsetPairs(r ? r.getEndExclusives() : nt.zero, s ? s.getStarts() : new nt(
        n,
        (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n
      )));
    }), i;
  }
  static fromOffsetPairs(t, n) {
    return new he(new te(t.offset1, n.offset1), new te(t.offset2, n.offset2));
  }
  static assertSorted(t) {
    let n;
    for (const i of t) {
      if (n && !(n.seq1Range.endExclusive <= i.seq1Range.start && n.seq2Range.endExclusive <= i.seq2Range.start))
        throw new pe("Sequence diffs must be sorted");
      n = i;
    }
  }
  constructor(t, n) {
    this.seq1Range = t, this.seq2Range = n;
  }
  swap() {
    return new he(this.seq2Range, this.seq1Range);
  }
  toString() {
    return `${this.seq1Range} <-> ${this.seq2Range}`;
  }
  join(t) {
    return new he(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
  }
  delta(t) {
    return t === 0 ? this : new he(this.seq1Range.delta(t), this.seq2Range.delta(t));
  }
  deltaStart(t) {
    return t === 0 ? this : new he(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
  }
  deltaEnd(t) {
    return t === 0 ? this : new he(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
  }
  intersectsOrTouches(t) {
    return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
  }
  intersect(t) {
    const n = this.seq1Range.intersect(t.seq1Range), i = this.seq2Range.intersect(t.seq2Range);
    if (!(!n || !i))
      return new he(n, i);
  }
  getStarts() {
    return new nt(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new nt(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}
const At = class At {
  constructor(t, n) {
    this.offset1 = t, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(t) {
    return t === 0 ? this : new At(this.offset1 + t, this.offset2 + t);
  }
  equals(t) {
    return this.offset1 === t.offset1 && this.offset2 === t.offset2;
  }
};
At.zero = new At(0, 0), At.max = new At(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
let nt = At;
const di = class di {
  isValid() {
    return !0;
  }
};
di.instance = new di();
let Tn = di;
class ch {
  constructor(t) {
    if (this.timeout = t, this.startTime = Date.now(), this.valid = !0, t <= 0)
      throw new pe("timeout must be positive");
  }
  isValid() {
    return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
  }
}
class vi {
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
function Xi(e) {
  return e === S.Space || e === S.Tab;
}
const mn = class mn {
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
        const u = a[o], c = mn.getKey(u);
        this.histogram[c] = (this.histogram[c] || 0) + 1;
      }
      r++;
      const l = mn.getKey(`
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
mn.chrKeys = /* @__PURE__ */ new Map();
let jn = mn;
class hh {
  compute(t, n, i = Tn.instance, r) {
    if (t.length === 0 || n.length === 0)
      return ot.trivial(t, n);
    const s = new vi(t.length, n.length), a = new vi(t.length, n.length), l = new vi(t.length, n.length);
    for (let _ = 0; _ < t.length; _++)
      for (let f = 0; f < n.length; f++) {
        if (!i.isValid())
          return ot.trivialTimedOut(t, n);
        const L = _ === 0 ? 0 : s.get(_ - 1, f), A = f === 0 ? 0 : s.get(_, f - 1);
        let w;
        t.getElement(_) === n.getElement(f) ? (_ === 0 || f === 0 ? w = 0 : w = s.get(_ - 1, f - 1), _ > 0 && f > 0 && a.get(_ - 1, f - 1) === 3 && (w += l.get(_ - 1, f - 1)), w += r ? r(_, f) : 1) : w = -1;
        const k = Math.max(L, A, w);
        if (k === w) {
          const H = _ > 0 && f > 0 ? l.get(_ - 1, f - 1) : 0;
          l.set(_, f, H + 1), a.set(_, f, 3);
        } else k === L ? (l.set(_, f, 0), a.set(_, f, 1)) : k === A && (l.set(_, f, 0), a.set(_, f, 2));
        s.set(_, f, k);
      }
    const o = [];
    let u = t.length, c = n.length;
    function h(_, f) {
      (_ + 1 !== u || f + 1 !== c) && o.push(new he(new te(_ + 1, u), new te(f + 1, c))), u = _, c = f;
    }
    let m = t.length - 1, p = n.length - 1;
    for (; m >= 0 && p >= 0; )
      a.get(m, p) === 3 ? (h(m, p), m--, p--) : a.get(m, p) === 1 ? m-- : p--;
    return h(-1, -1), o.reverse(), new ot(o, !1);
  }
}
class Fl {
  compute(t, n, i = Tn.instance) {
    if (t.length === 0 || n.length === 0)
      return ot.trivial(t, n);
    const r = t, s = n;
    function a(f, L) {
      for (; f < r.length && L < s.length && r.getElement(f) === s.getElement(L); )
        f++, L++;
      return f;
    }
    let l = 0;
    const o = new dh();
    o.set(0, a(0, 0));
    const u = new mh();
    u.set(0, o.get(0) === 0 ? null : new Ea(null, 0, 0, o.get(0)));
    let c = 0;
    e: for (; ; ) {
      if (l++, !i.isValid())
        return ot.trivialTimedOut(r, s);
      const f = -Math.min(l, s.length + l % 2), L = Math.min(l, r.length + l % 2);
      for (c = f; c <= L; c += 2) {
        const A = c === L ? -1 : o.get(c + 1), w = c === f ? -1 : o.get(c - 1) + 1, k = Math.min(Math.max(A, w), r.length), H = k - c;
        if (k > r.length || H > s.length)
          continue;
        const D = a(k, H);
        o.set(c, D);
        const I = k === A ? u.get(c + 1) : u.get(c - 1);
        if (u.set(c, D !== k ? new Ea(I, k, H, D - k) : I), o.get(c) === r.length && o.get(c) - c === s.length)
          break e;
      }
    }
    let h = u.get(c);
    const m = [];
    let p = r.length, _ = s.length;
    for (; ; ) {
      const f = h ? h.x + h.length : 0, L = h ? h.y + h.length : 0;
      if ((f !== p || L !== _) && m.push(new he(new te(f, p), new te(L, _))), !h)
        break;
      p = h.x, _ = h.y, h = h.prev;
    }
    return m.reverse(), new ot(m, !1);
  }
}
class Ea {
  constructor(t, n, i, r) {
    this.prev = t, this.x = n, this.y = i, this.length = r;
  }
}
class dh {
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
class mh {
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
class $n {
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
    return this.getText(new te(0, this.length));
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
    const n = Na(t > 0 ? this.elements[t - 1] : -1), i = Na(t < this.elements.length ? this.elements[t] : -1);
    if (n === ue.LineBreakCR && i === ue.LineBreakLF)
      return 0;
    if (n === ue.LineBreakLF)
      return 150;
    let r = 0;
    return n !== i && (r += 10, n === ue.WordLower && i === ue.WordUpper && (r += 1)), r += Ra(n), r += Ra(i), r;
  }
  translateOffset(t, n = "right") {
    const i = jt(this.firstElementOffsetByLineIdx, (s) => s <= t), r = t - this.firstElementOffsetByLineIdx[i];
    return new ie(
      this.range.startLineNumber + i,
      1 + this.lineStartOffsets[i] + r + (r === 0 && n === "left" ? 0 : this.trimmedWsLengthsByLineIdx[i])
    );
  }
  translateRange(t) {
    const n = this.translateOffset(t.start, "right"), i = this.translateOffset(t.endExclusive, "left");
    return i.isBefore(n) ? Y.fromPositions(i, i) : Y.fromPositions(n, i);
  }
  findWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !Mt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && Mt(this.elements[n - 1]); )
      n--;
    let i = t;
    for (; i < this.elements.length && Mt(this.elements[i]); )
      i++;
    return new te(n, i);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !Mt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && Mt(this.elements[n - 1]) && !Sa(this.elements[n]); )
      n--;
    let i = t;
    for (; i < this.elements.length && Mt(this.elements[i]) && !Sa(this.elements[i]); )
      i++;
    return new te(n, i);
  }
  countLinesIn(t) {
    return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
  }
  isStronglyEqual(t, n) {
    return this.elements[t] === this.elements[n];
  }
  extendToFullLines(t) {
    const n = Gt(this.firstElementOffsetByLineIdx, (r) => r <= t.start) ?? 0, i = tu(this.firstElementOffsetByLineIdx, (r) => t.endExclusive <= r) ?? this.elements.length;
    return new te(n, i);
  }
}
function Mt(e) {
  return e >= S.a && e <= S.z || e >= S.A && e <= S.Z || e >= S.Digit0 && e <= S.Digit9;
}
function Sa(e) {
  return e >= S.A && e <= S.Z;
}
var ue;
(function(e) {
  e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(ue || (ue = {}));
const fh = {
  [ue.WordLower]: 0,
  [ue.WordUpper]: 0,
  [ue.WordNumber]: 0,
  [ue.End]: 10,
  [ue.Other]: 2,
  [ue.Separator]: 30,
  [ue.Space]: 3,
  [ue.LineBreakCR]: 10,
  [ue.LineBreakLF]: 10
};
function Ra(e) {
  return fh[e];
}
function Na(e) {
  return e === S.LineFeed ? ue.LineBreakLF : e === S.CarriageReturn ? ue.LineBreakCR : Xi(e) ? ue.Space : e >= S.a && e <= S.z ? ue.WordLower : e >= S.A && e <= S.Z ? ue.WordUpper : e >= S.Digit0 && e <= S.Digit9 ? ue.WordNumber : e === -1 ? ue.End : e === S.Comma || e === S.Semicolon ? ue.Separator : ue.Other;
}
function ph(e, t, n, i, r, s) {
  let { moves: a, excludedChanges: l } = bh(e, t, n, s);
  if (!s.isValid())
    return [];
  const o = e.filter((c) => !l.has(c)), u = _h(o, i, r, t, n, s);
  return su(a, u), a = wh(a), a = a.filter((c) => {
    const h = c.original.toOffsetRange().slice(t).map((p) => p.trim());
    return h.join(`
`).length >= 15 && gh(h, (p) => p.length >= 2) >= 2;
  }), a = vh(e, a), a;
}
function gh(e, t) {
  let n = 0;
  for (const i of e)
    t(i) && n++;
  return n;
}
function bh(e, t, n, i) {
  const r = [], s = e.filter((o) => o.modified.isEmpty && o.original.length >= 3).map((o) => new jn(o.original, t, o)), a = new Set(e.filter((o) => o.original.isEmpty && o.modified.length >= 3).map((o) => new jn(o.modified, n, o))), l = /* @__PURE__ */ new Set();
  for (const o of s) {
    let u = -1, c;
    for (const h of a) {
      const m = o.computeSimilarity(h);
      m > u && (u = m, c = h);
    }
    if (u > 0.9 && c && (a.delete(c), r.push(new ze(o.range, c.range)), l.add(o.source), l.add(c.source)), !i.isValid())
      return { moves: r, excludedChanges: l };
  }
  return { moves: r, excludedChanges: l };
}
function _h(e, t, n, i, r, s) {
  const a = [], l = new ul();
  for (const m of e)
    for (let p = m.original.startLineNumber; p < m.original.endLineNumberExclusive - 2; p++) {
      const _ = `${t[p - 1]}:${t[p + 1 - 1]}:${t[p + 2 - 1]}`;
      l.add(_, { range: new J(p, p + 3) });
    }
  const o = [];
  e.sort(sn((m) => m.modified.startLineNumber, an));
  for (const m of e) {
    let p = [];
    for (let _ = m.modified.startLineNumber; _ < m.modified.endLineNumberExclusive - 2; _++) {
      const f = `${n[_ - 1]}:${n[_ + 1 - 1]}:${n[_ + 2 - 1]}`, L = new J(_, _ + 3), A = [];
      l.forEach(f, ({ range: w }) => {
        for (const H of p)
          if (H.originalLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive && H.modifiedLineRange.endLineNumberExclusive + 1 === L.endLineNumberExclusive) {
            H.originalLineRange = new J(
              H.originalLineRange.startLineNumber,
              w.endLineNumberExclusive
            ), H.modifiedLineRange = new J(
              H.modifiedLineRange.startLineNumber,
              L.endLineNumberExclusive
            ), A.push(H);
            return;
          }
        const k = {
          modifiedLineRange: L,
          originalLineRange: w
        };
        o.push(k), A.push(k);
      }), p = A;
    }
    if (!s.isValid())
      return [];
  }
  o.sort(au(sn((m) => m.modifiedLineRange.length, an)));
  const u = new Qe(), c = new Qe();
  for (const m of o) {
    const p = m.modifiedLineRange.startLineNumber - m.originalLineRange.startLineNumber, _ = u.subtractFrom(m.modifiedLineRange), f = c.subtractFrom(m.originalLineRange).getWithDelta(p), L = _.getIntersection(f);
    for (const A of L.ranges) {
      if (A.length < 3)
        continue;
      const w = A, k = A.delta(-p);
      a.push(new ze(k, w)), u.addRange(w), c.addRange(k);
    }
  }
  a.sort(sn((m) => m.original.startLineNumber, an));
  const h = new Pn(e);
  for (let m = 0; m < a.length; m++) {
    const p = a[m], _ = h.findLastMonotonous((I) => I.original.startLineNumber <= p.original.startLineNumber), f = Gt(e, (I) => I.modified.startLineNumber <= p.modified.startLineNumber), L = Math.max(p.original.startLineNumber - _.original.startLineNumber, p.modified.startLineNumber - f.modified.startLineNumber), A = h.findLastMonotonous((I) => I.original.startLineNumber < p.original.endLineNumberExclusive), w = Gt(e, (I) => I.modified.startLineNumber < p.modified.endLineNumberExclusive), k = Math.max(A.original.endLineNumberExclusive - p.original.endLineNumberExclusive, w.modified.endLineNumberExclusive - p.modified.endLineNumberExclusive);
    let H;
    for (H = 0; H < L; H++) {
      const I = p.original.startLineNumber - H - 1, b = p.modified.startLineNumber - H - 1;
      if (I > i.length || b > r.length || u.contains(b) || c.contains(I) || !Da(i[I - 1], r[b - 1], s))
        break;
    }
    H > 0 && (c.addRange(new J(p.original.startLineNumber - H, p.original.startLineNumber)), u.addRange(new J(p.modified.startLineNumber - H, p.modified.startLineNumber)));
    let D;
    for (D = 0; D < k; D++) {
      const I = p.original.endLineNumberExclusive + D, b = p.modified.endLineNumberExclusive + D;
      if (I > i.length || b > r.length || u.contains(b) || c.contains(I) || !Da(i[I - 1], r[b - 1], s))
        break;
    }
    D > 0 && (c.addRange(new J(
      p.original.endLineNumberExclusive,
      p.original.endLineNumberExclusive + D
    )), u.addRange(new J(
      p.modified.endLineNumberExclusive,
      p.modified.endLineNumberExclusive + D
    ))), (H > 0 || D > 0) && (a[m] = new ze(new J(
      p.original.startLineNumber - H,
      p.original.endLineNumberExclusive + D
    ), new J(
      p.modified.startLineNumber - H,
      p.modified.endLineNumberExclusive + D
    )));
  }
  return a;
}
function Da(e, t, n) {
  if (e.trim() === t.trim())
    return !0;
  if (e.length > 300 && t.length > 300)
    return !1;
  const r = new Fl().compute(new $n([e], new Y(1, 1, 1, e.length), !1), new $n([t], new Y(1, 1, 1, t.length), !1), n);
  let s = 0;
  const a = he.invert(r.diffs, e.length);
  for (const c of a)
    c.seq1Range.forEach((h) => {
      Xi(e.charCodeAt(h)) || s++;
    });
  function l(c) {
    let h = 0;
    for (let m = 0; m < e.length; m++)
      Xi(c.charCodeAt(m)) || h++;
    return h;
  }
  const o = l(e.length > t.length ? e : t);
  return s / o > 0.6 && o > 10;
}
function wh(e) {
  if (e.length === 0)
    return e;
  e.sort(sn((n) => n.original.startLineNumber, an));
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
function vh(e, t) {
  const n = new Pn(e);
  return t = t.filter((i) => {
    const r = n.findLastMonotonous((l) => l.original.startLineNumber < i.original.endLineNumberExclusive) || new ze(new J(1, 1), new J(1, 1)), s = Gt(e, (l) => l.modified.startLineNumber < i.modified.endLineNumberExclusive);
    return r !== s;
  }), t;
}
function Ma(e, t, n) {
  let i = n;
  return i = Ua(e, t, i), i = Ua(e, t, i), i = Th(e, t, i), i;
}
function Ua(e, t, n) {
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
        i[i.length - 1] = new he(new te(a.seq1Range.start, l.seq1Range.endExclusive - o), new te(a.seq2Range.start, l.seq2Range.endExclusive - o));
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
        i[s + 1] = new he(new te(l.seq1Range.start + o, a.seq1Range.endExclusive), new te(l.seq2Range.start + o, a.seq2Range.endExclusive));
        continue;
      }
      u > 0 && (l = l.delta(u));
    }
    r.push(l);
  }
  return i.length > 0 && r.push(i[i.length - 1]), r;
}
function Th(e, t, n) {
  if (!e.getBoundaryScore || !t.getBoundaryScore)
    return n;
  for (let i = 0; i < n.length; i++) {
    const r = i > 0 ? n[i - 1] : void 0, s = n[i], a = i + 1 < n.length ? n[i + 1] : void 0, l = new te(
      r ? r.seq1Range.endExclusive + 1 : 0,
      a ? a.seq1Range.start - 1 : e.length
    ), o = new te(
      r ? r.seq2Range.endExclusive + 1 : 0,
      a ? a.seq2Range.start - 1 : t.length
    );
    s.seq1Range.isEmpty ? n[i] = Ia(s, e, t, l, o) : s.seq2Range.isEmpty && (n[i] = Ia(s.swap(), t, e, o, l).swap());
  }
  return n;
}
function Ia(e, t, n, i, r) {
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
  for (let c = -a; c <= l; c++) {
    const h = e.seq2Range.start + c, m = e.seq2Range.endExclusive + c, p = e.seq1Range.start + c, _ = t.getBoundaryScore(p) + n.getBoundaryScore(h) + n.getBoundaryScore(m);
    _ > u && (u = _, o = c);
  }
  return e.delta(o);
}
function yh(e, t, n) {
  const i = [];
  for (const r of n) {
    const s = i[i.length - 1];
    if (!s) {
      i.push(r);
      continue;
    }
    r.seq1Range.start - s.seq1Range.endExclusive <= 2 || r.seq2Range.start - s.seq2Range.endExclusive <= 2 ? i[i.length - 1] = new he(s.seq1Range.join(r.seq1Range), s.seq2Range.join(r.seq2Range)) : i.push(r);
  }
  return i;
}
function Fa(e, t, n, i, r = !1) {
  const s = he.invert(n, e.length), a = [];
  let l = new nt(0, 0);
  function o(c, h) {
    if (c.offset1 < l.offset1 || c.offset2 < l.offset2)
      return;
    const m = i(e, c.offset1), p = i(t, c.offset2);
    if (!m || !p)
      return;
    let _ = new he(m, p);
    const f = _.intersect(h);
    let L = f.seq1Range.length, A = f.seq2Range.length;
    for (; s.length > 0; ) {
      const w = s[0];
      if (!(w.seq1Range.intersects(_.seq1Range) || w.seq2Range.intersects(_.seq2Range)))
        break;
      const H = i(e, w.seq1Range.start), D = i(t, w.seq2Range.start), I = new he(H, D), b = I.intersect(w);
      if (L += b.seq1Range.length, A += b.seq2Range.length, _ = _.join(I), _.seq1Range.endExclusive >= w.seq1Range.endExclusive)
        s.shift();
      else
        break;
    }
    (r && L + A < _.seq1Range.length + _.seq2Range.length || L + A < (_.seq1Range.length + _.seq2Range.length) * 2 / 3) && a.push(_), l = _.getEndExclusives();
  }
  for (; s.length > 0; ) {
    const c = s.shift();
    c.seq1Range.isEmpty || (o(c.getStarts(), c), o(c.getEndExclusives().delta(-1), c));
  }
  return Ah(n, a);
}
function Ah(e, t) {
  const n = [];
  for (; e.length > 0 || t.length > 0; ) {
    const i = e[0], r = t[0];
    let s;
    i && (!r || i.seq1Range.start < r.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function xh(e, t, n) {
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
      let c = function(m, p) {
        const _ = new te(u.seq1Range.endExclusive, o.seq1Range.start);
        return e.getText(_).replace(/\s/g, "").length <= 4 && (m.seq1Range.length + m.seq2Range.length > 5 || p.seq1Range.length + p.seq2Range.length > 5);
      };
      const o = i[l], u = a[a.length - 1];
      c(u, o) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(o)) : a.push(o);
    }
    i = a;
  } while (r++ < 10 && s);
  return i;
}
function Lh(e, t, n) {
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
      let h = function(p, _) {
        const f = new te(c.seq1Range.endExclusive, u.seq1Range.start);
        if (e.countLinesIn(f) > 5 || f.length > 500)
          return !1;
        const A = e.getText(f).trim();
        if (A.length > 20 || A.split(/\r\n|\r|\n/).length > 1)
          return !1;
        const w = e.countLinesIn(p.seq1Range), k = p.seq1Range.length, H = t.countLinesIn(p.seq2Range), D = p.seq2Range.length, I = e.countLinesIn(_.seq1Range), b = _.seq1Range.length, g = t.countLinesIn(_.seq2Range), x = _.seq2Range.length, W = 2 * 40 + 50;
        function U(E) {
          return Math.min(E, W);
        }
        return Math.pow(Math.pow(U(w * 40 + k), 1.5) + Math.pow(U(H * 40 + D), 1.5), 1.5) + Math.pow(Math.pow(U(I * 40 + b), 1.5) + Math.pow(U(g * 40 + x), 1.5), 1.5) > (W ** 1.5) ** 1.5 * 1.3;
      };
      const u = i[o], c = l[l.length - 1];
      h(c, u) ? (s = !0, l[l.length - 1] = l[l.length - 1].join(u)) : l.push(u);
    }
    i = l;
  } while (r++ < 10 && s);
  const a = [];
  return ru(i, (l, o, u) => {
    let c = o;
    function h(A) {
      return A.length > 0 && A.trim().length <= 3 && o.seq1Range.length + o.seq2Range.length > 100;
    }
    const m = e.extendToFullLines(o.seq1Range), p = e.getText(new te(m.start, o.seq1Range.start));
    h(p) && (c = c.deltaStart(-p.length));
    const _ = e.getText(new te(o.seq1Range.endExclusive, m.endExclusive));
    h(_) && (c = c.deltaEnd(_.length));
    const f = he.fromOffsetPairs(l ? l.getEndExclusives() : nt.zero, u ? u.getStarts() : nt.max), L = c.intersect(f);
    a.length > 0 && L.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(L) : a.push(L);
  }), a;
}
class Pa {
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
    const n = t === 0 ? 0 : Ba(this.lines[t - 1]), i = t === this.lines.length ? 0 : Ba(this.lines[t]);
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
function Ba(e) {
  let t = 0;
  for (; t < e.length && (e.charCodeAt(t) === S.Space || e.charCodeAt(t) === S.Tab); )
    t++;
  return t;
}
class kh {
  constructor() {
    this.dynamicProgrammingDiffing = new hh(), this.myersDiffingAlgorithm = new Fl();
  }
  computeDiff(t, n, i) {
    if (t.length <= 1 && ll(t, n, (D, I) => D === I))
      return new Fn([], [], !1);
    if (t.length === 1 && t[0].length === 0 || n.length === 1 && n[0].length === 0)
      return new Fn([
        new at(new J(1, t.length + 1), new J(1, n.length + 1), [
          new ke(new Y(
            1,
            1,
            t.length,
            t[t.length - 1].length + 1
          ), new Y(
            1,
            1,
            n.length,
            n[n.length - 1].length + 1
          ))
        ])
      ], [], !1);
    const r = i.maxComputationTimeMs === 0 ? Tn.instance : new ch(i.maxComputationTimeMs), s = !i.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
    function l(D) {
      let I = a.get(D);
      return I === void 0 && (I = a.size, a.set(D, I)), I;
    }
    const o = t.map((D) => l(D.trim())), u = n.map((D) => l(D.trim())), c = new Pa(o, t), h = new Pa(u, n), m = c.length + h.length < 1700 ? this.dynamicProgrammingDiffing.compute(c, h, r, (D, I) => t[D] === n[I] ? n[I].length === 0 ? 0.1 : 1 + Math.log(1 + n[I].length) : 0.99) : this.myersDiffingAlgorithm.compute(c, h, r);
    let p = m.diffs, _ = m.hitTimeout;
    p = Ma(c, h, p), p = xh(c, h, p);
    const f = [], L = (D) => {
      if (s)
        for (let I = 0; I < D; I++) {
          const b = A + I, g = w + I;
          if (t[b] !== n[g]) {
            const x = this.refineDiff(t, n, new he(new te(b, b + 1), new te(g, g + 1)), r, s, i);
            for (const W of x.mappings)
              f.push(W);
            x.hitTimeout && (_ = !0);
          }
        }
    };
    let A = 0, w = 0;
    for (const D of p) {
      pn(() => D.seq1Range.start - A === D.seq2Range.start - w);
      const I = D.seq1Range.start - A;
      L(I), A = D.seq1Range.endExclusive, w = D.seq2Range.endExclusive;
      const b = this.refineDiff(t, n, D, r, s, i);
      b.hitTimeout && (_ = !0);
      for (const g of b.mappings)
        f.push(g);
    }
    L(t.length - A);
    const k = xa(f, new En(t), new En(n));
    let H = [];
    return i.computeMoves && (H = this.computeMoves(k, t, n, o, u, r, s, i)), pn(() => {
      function D(b, g) {
        if (b.lineNumber < 1 || b.lineNumber > g.length)
          return !1;
        const x = g[b.lineNumber - 1];
        return !(b.column < 1 || b.column > x.length + 1);
      }
      function I(b, g) {
        return !(b.startLineNumber < 1 || b.startLineNumber > g.length + 1 || b.endLineNumberExclusive < 1 || b.endLineNumberExclusive > g.length + 1);
      }
      for (const b of k) {
        if (!b.innerChanges)
          return !1;
        for (const g of b.innerChanges)
          if (!(D(g.modifiedRange.getStartPosition(), n) && D(g.modifiedRange.getEndPosition(), n) && D(g.originalRange.getStartPosition(), t) && D(g.originalRange.getEndPosition(), t)))
            return !1;
        if (!I(b.modified, n) || !I(b.original, t))
          return !1;
      }
      return !0;
    }), new Fn(k, H, _);
  }
  computeMoves(t, n, i, r, s, a, l, o) {
    return ph(t, n, i, r, s, a).map((h) => {
      const m = this.refineDiff(n, i, new he(h.original.toOffsetRange(), h.modified.toOffsetRange()), a, l, o), p = xa(m.mappings, new En(n), new En(i), !0);
      return new Ar(h, p);
    });
  }
  refineDiff(t, n, i, r, s, a) {
    const o = Eh(i).toRangeMapping2(t, n), u = new $n(t, o.originalRange, s), c = new $n(n, o.modifiedRange, s), h = u.length + c.length < 500 ? this.dynamicProgrammingDiffing.compute(u, c, r) : this.myersDiffingAlgorithm.compute(u, c, r);
    let m = h.diffs;
    return m = Ma(u, c, m), m = Fa(u, c, m, (_, f) => _.findWordContaining(f)), a.extendToSubwords && (m = Fa(u, c, m, (_, f) => _.findSubWordContaining(f), !0)), m = yh(u, c, m), m = Lh(u, c, m), {
      mappings: m.map((_) => new ke(u.translateRange(_.seq1Range), c.translateRange(_.seq2Range))),
      hitTimeout: h.hitTimeout
    };
  }
}
function Eh(e) {
  return new ze(new J(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new J(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const Ti = {
  getLegacy: () => new oh(),
  getDefault: () => new kh()
};
function pt(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
class R {
  constructor(t, n, i, r = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = pt(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}
class Oe {
  constructor(t, n, i, r) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = pt(Math.max(Math.min(1, n), 0), 3), this.l = pt(Math.max(Math.min(1, i), 0), 3), this.a = pt(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = t.a, a = Math.max(n, i, r), l = Math.min(n, i, r);
    let o = 0, u = 0;
    const c = (l + a) / 2, h = a - l;
    if (h > 0) {
      switch (u = Math.min(c <= 0.5 ? h / (2 * c) : h / (2 - 2 * c), 1), a) {
        case n:
          o = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / h + 2;
          break;
        case r:
          o = (n - i) / h + 4;
          break;
      }
      o *= 60, o = Math.round(o);
    }
    return new Oe(o, u, c, s);
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
      const u = r < 0.5 ? r * (1 + i) : r + i - r * i, c = 2 * r - u;
      a = Oe._hue2rgb(c, u, n + 1 / 3), l = Oe._hue2rgb(c, u, n), o = Oe._hue2rgb(c, u, n - 1 / 3);
    }
    return new R(Math.round(a * 255), Math.round(l * 255), Math.round(o * 255), s);
  }
}
class Bt {
  constructor(t, n, i, r) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = pt(Math.max(Math.min(1, n), 0), 3), this.v = pt(Math.max(Math.min(1, i), 0), 3), this.a = pt(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = Math.max(n, i, r), a = Math.min(n, i, r), l = s - a, o = s === 0 ? 0 : l / s;
    let u;
    return l === 0 ? u = 0 : s === n ? u = ((i - r) / l % 6 + 6) % 6 : s === i ? u = (r - n) / l + 2 : u = (n - i) / l + 4, new Bt(Math.round(u * 60), o, s, t.a);
  }
  static toRGBA(t) {
    const { h: n, s: i, v: r, a: s } = t, a = r * i, l = a * (1 - Math.abs(n / 60 % 2 - 1)), o = r - a;
    let [u, c, h] = [0, 0, 0];
    return n < 60 ? (u = a, c = l) : n < 120 ? (u = l, c = a) : n < 180 ? (c = a, h = l) : n < 240 ? (c = l, h = a) : n < 300 ? (u = l, h = a) : n <= 360 && (u = a, h = l), u = Math.round((u + o) * 255), c = Math.round((c + o) * 255), h = Math.round((h + o) * 255), new R(u, c, h, s);
  }
}
var ee;
let Xn = (ee = class {
  static fromHex(t) {
    return ee.Format.CSS.parseHex(t) || ee.red;
  }
  static equals(t, n) {
    return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : Oe.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : Bt.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t)
      if (t instanceof R)
        this.rgba = t;
      else if (t instanceof Oe)
        this._hsla = t, this.rgba = Oe.toRGBA(t);
      else if (t instanceof Bt)
        this._hsva = t, this.rgba = Bt.toRGBA(t);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && R.equals(this.rgba, t.rgba) && Oe.equals(this.hsla, t.hsla) && Bt.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = ee._relativeLuminanceForComponent(this.rgba.r), n = ee._relativeLuminanceForComponent(this.rgba.g), i = ee._relativeLuminanceForComponent(this.rgba.b), r = 0.2126 * t + 0.7152 * n + 0.0722 * i;
    return pt(r, 4);
  }
  reduceRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i > 0 || r > 0 || s > 0); )
      i -= Math.max(0, Math.ceil(i * 0.1)), r -= Math.max(0, Math.ceil(r * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), a = this.getContrastRatio(new ee(new R(i, r, s)));
    return new ee(new R(i, r, s));
  }
  increaseRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i < 255 || r < 255 || s < 255); )
      i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), a = this.getContrastRatio(new ee(new R(i, r, s)));
    return new ee(new R(i, r, s));
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
          const c = this.increaseRelativeLuminace(t, n), h = this.getContrastRatio(c);
          return u > h ? o : c;
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
    return new ee(new Oe(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new ee(new Oe(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new ee(new R(n, i, r, s * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new ee(new R(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const n = t.rgba, i = this.rgba.a, r = n.a, s = i + r * (1 - i);
    if (s < 1e-6)
      return ee.transparent;
    const a = this.rgba.r * i / s + n.r * r * (1 - i) / s, l = this.rgba.g * i / s + n.g * r * (1 - i) / s, o = this.rgba.b * i / s + n.b * r * (1 - i) / s;
    return new ee(new R(a, l, o, s));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1)
      return this;
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new ee(new R(
      t.rgba.r - s * (t.rgba.r - n),
      t.rgba.g - s * (t.rgba.g - i),
      t.rgba.b - s * (t.rgba.b - r),
      1
    ));
  }
  flatten(...t) {
    const n = t.reduceRight((i, r) => ee._flatten(r, i));
    return ee._flatten(this, n);
  }
  static _flatten(t, n) {
    const i = 1 - t.rgba.a;
    return new ee(new R(
      i * n.rgba.r + t.rgba.a * t.rgba.r,
      i * n.rgba.g + t.rgba.a * t.rgba.g,
      i * n.rgba.b + t.rgba.a * t.rgba.b
    ));
  }
  toString() {
    return this._toString || (this._toString = ee.Format.CSS.format(this)), this._toString;
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
}, ee.white = new ee(new R(255, 255, 255, 1)), ee.black = new ee(new R(0, 0, 0, 1)), ee.red = new ee(new R(255, 0, 0, 1)), ee.blue = new ee(new R(0, 0, 255, 1)), ee.green = new ee(new R(0, 255, 0, 1)), ee.cyan = new ee(new R(0, 255, 255, 1)), ee.lightgrey = new ee(new R(211, 211, 211, 1)), ee.transparent = new ee(new R(0, 0, 0, 0)), ee);
(function(e) {
  (function(t) {
    (function(n) {
      function i(f) {
        return f.rgba.a === 1 ? `rgb(${f.rgba.r}, ${f.rgba.g}, ${f.rgba.b})` : e.Format.CSS.formatRGBA(f);
      }
      n.formatRGB = i;
      function r(f) {
        return `rgba(${f.rgba.r}, ${f.rgba.g}, ${f.rgba.b}, ${+f.rgba.a.toFixed(2)})`;
      }
      n.formatRGBA = r;
      function s(f) {
        return f.hsla.a === 1 ? `hsl(${f.hsla.h}, ${(f.hsla.s * 100).toFixed(2)}%, ${(f.hsla.l * 100).toFixed(2)}%)` : e.Format.CSS.formatHSLA(f);
      }
      n.formatHSL = s;
      function a(f) {
        return `hsla(${f.hsla.h}, ${(f.hsla.s * 100).toFixed(2)}%, ${(f.hsla.l * 100).toFixed(2)}%, ${f.hsla.a.toFixed(2)})`;
      }
      n.formatHSLA = a;
      function l(f) {
        const L = f.toString(16);
        return L.length !== 2 ? "0" + L : L;
      }
      function o(f) {
        return `#${l(f.rgba.r)}${l(f.rgba.g)}${l(f.rgba.b)}`;
      }
      n.formatHex = o;
      function u(f, L = !1) {
        return L && f.rgba.a === 1 ? e.Format.CSS.formatHex(f) : `#${l(f.rgba.r)}${l(f.rgba.g)}${l(f.rgba.b)}${l(Math.round(f.rgba.a * 255))}`;
      }
      n.formatHexA = u;
      function c(f) {
        return f.isOpaque() ? e.Format.CSS.formatHex(f) : e.Format.CSS.formatRGBA(f);
      }
      n.format = c;
      function h(f) {
        var L, A, w, k, H, D, I;
        if (f === "transparent")
          return e.transparent;
        if (f.startsWith("#"))
          return p(f);
        if (f.startsWith("rgba(")) {
          const b = f.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!b)
            throw new Error("Invalid color format " + f);
          const g = parseInt(((L = b.groups) == null ? void 0 : L.r) ?? "0"), x = parseInt(((A = b.groups) == null ? void 0 : A.g) ?? "0"), W = parseInt(((w = b.groups) == null ? void 0 : w.b) ?? "0"), U = parseFloat(((k = b.groups) == null ? void 0 : k.a) ?? "0");
          return new e(new R(g, x, W, U));
        }
        if (f.startsWith("rgb(")) {
          const b = f.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!b)
            throw new Error("Invalid color format " + f);
          const g = parseInt(((H = b.groups) == null ? void 0 : H.r) ?? "0"), x = parseInt(((D = b.groups) == null ? void 0 : D.g) ?? "0"), W = parseInt(((I = b.groups) == null ? void 0 : I.b) ?? "0");
          return new e(new R(g, x, W));
        }
        return m(f);
      }
      n.parse = h;
      function m(f) {
        switch (f) {
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
      function p(f) {
        const L = f.length;
        if (L === 0 || f.charCodeAt(0) !== S.Hash)
          return null;
        if (L === 7) {
          const A = 16 * _(f.charCodeAt(1)) + _(f.charCodeAt(2)), w = 16 * _(f.charCodeAt(3)) + _(f.charCodeAt(4)), k = 16 * _(f.charCodeAt(5)) + _(f.charCodeAt(6));
          return new e(new R(A, w, k, 1));
        }
        if (L === 9) {
          const A = 16 * _(f.charCodeAt(1)) + _(f.charCodeAt(2)), w = 16 * _(f.charCodeAt(3)) + _(f.charCodeAt(4)), k = 16 * _(f.charCodeAt(5)) + _(f.charCodeAt(6)), H = 16 * _(f.charCodeAt(7)) + _(f.charCodeAt(8));
          return new e(new R(A, w, k, H / 255));
        }
        if (L === 4) {
          const A = _(f.charCodeAt(1)), w = _(f.charCodeAt(2)), k = _(f.charCodeAt(3));
          return new e(new R(16 * A + A, 16 * w + w, 16 * k + k));
        }
        if (L === 5) {
          const A = _(f.charCodeAt(1)), w = _(f.charCodeAt(2)), k = _(f.charCodeAt(3)), H = _(f.charCodeAt(4));
          return new e(new R(16 * A + A, 16 * w + w, 16 * k + k, (16 * H + H) / 255));
        }
        return null;
      }
      n.parseHex = p;
      function _(f) {
        switch (f) {
          case S.Digit0:
            return 0;
          case S.Digit1:
            return 1;
          case S.Digit2:
            return 2;
          case S.Digit3:
            return 3;
          case S.Digit4:
            return 4;
          case S.Digit5:
            return 5;
          case S.Digit6:
            return 6;
          case S.Digit7:
            return 7;
          case S.Digit8:
            return 8;
          case S.Digit9:
            return 9;
          case S.a:
            return 10;
          case S.A:
            return 10;
          case S.b:
            return 11;
          case S.B:
            return 11;
          case S.c:
            return 12;
          case S.C:
            return 12;
          case S.d:
            return 13;
          case S.D:
            return 13;
          case S.e:
            return 14;
          case S.E:
            return 14;
          case S.f:
            return 15;
          case S.F:
            return 15;
        }
        return 0;
      }
    })(t.CSS || (t.CSS = {}));
  })(e.Format || (e.Format = {}));
})(Xn || (Xn = {}));
function Pl(e) {
  const t = [];
  for (const n of e) {
    const i = Number(n);
    (i || i === 0 && n.replace(/\s/g, "") !== "") && t.push(i);
  }
  return t;
}
function xr(e, t, n, i) {
  return {
    red: e / 255,
    blue: n / 255,
    green: t / 255,
    alpha: i
  };
}
function en(e, t) {
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
function Sh(e, t) {
  if (!e)
    return;
  const n = Xn.Format.CSS.parseHex(t);
  if (n)
    return {
      range: e,
      color: xr(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
    };
}
function Ha(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = Pl(r);
  return {
    range: e,
    color: xr(s[0], s[1], s[2], n ? s[3] : 1)
  };
}
function Oa(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = Pl(r), a = new Xn(new Oe(
    s[0],
    s[1] / 100,
    s[2] / 100,
    n ? s[3] : 1
  ));
  return {
    range: e,
    color: xr(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a)
  };
}
function tn(e, t) {
  return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function Rh(e) {
  const t = [], i = tn(e, /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%]*\))|\s+(#)([A-Fa-f0-9]{6})\b|\s+(#)([A-Fa-f0-9]{8})\b|^(#)([A-Fa-f0-9]{6})\b|^(#)([A-Fa-f0-9]{8})\b/gm);
  if (i.length > 0)
    for (const r of i) {
      const s = r.filter((u) => u !== void 0), a = s[1], l = s[2];
      if (!l)
        continue;
      let o;
      if (a === "rgb") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        o = Ha(en(e, r), tn(l, u), !1);
      } else if (a === "rgba") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = Ha(en(e, r), tn(l, u), !0);
      } else if (a === "hsl") {
        const u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        o = Oa(en(e, r), tn(l, u), !1);
      } else if (a === "hsla") {
        const u = /^\(\s*(36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = Oa(en(e, r), tn(l, u), !0);
      } else a === "#" && (o = Sh(en(e, r), a + l));
      o && t.push(o);
    }
  return t;
}
function Nh(e) {
  return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : Rh(e);
}
const Dh = /^-+|-+$/g, za = 100, Mh = 5;
function Uh(e, t) {
  var i;
  let n = [];
  if (t.findRegionSectionHeaders && ((i = t.foldingRules) != null && i.markers)) {
    const r = Ih(e, t);
    n = n.concat(r);
  }
  if (t.findMarkSectionHeaders) {
    const r = Fh(e, t);
    n = n.concat(r);
  }
  return n;
}
function Ih(e, t) {
  const n = [], i = e.getLineCount();
  for (let r = 1; r <= i; r++) {
    const s = e.getLineContent(r), a = s.match(t.foldingRules.markers.start);
    if (a) {
      const l = { startLineNumber: r, startColumn: a[0].length + 1, endLineNumber: r, endColumn: s.length + 1 };
      if (l.endColumn > l.startColumn) {
        const o = {
          range: l,
          ...Ph(s.substring(a[0].length)),
          shouldBeInComments: !1
        };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  return n;
}
function Fh(e, t) {
  const n = [], i = e.getLineCount(), r = jc(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${r ? "s" : ""}`);
  for (let a = 1; a <= i; a += za - Mh) {
    const l = Math.min(a + za - 1, i), o = [];
    for (let h = a; h <= l; h++)
      o.push(e.getLineContent(h));
    const u = o.join(`
`);
    s.lastIndex = 0;
    let c;
    for (; (c = s.exec(u)) !== null; ) {
      const h = u.substring(0, c.index), m = (h.match(/\n/g) || []).length, p = a + m, _ = c[0].split(`
`), f = _.length, L = p + f - 1, A = h.lastIndexOf(`
`) + 1, w = c.index - A + 1, k = _[_.length - 1], H = f === 1 ? w + c[0].length : k.length + 1, D = {
        startLineNumber: p,
        startColumn: w,
        endLineNumber: L,
        endColumn: H
      }, I = (c.groups ?? {}).label ?? "", b = ((c.groups ?? {}).separator ?? "") !== "", g = {
        range: D,
        text: I,
        hasSeparatorLine: b,
        shouldBeInComments: !0
      };
      (g.text || g.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < g.range.startLineNumber) && n.push(g), s.lastIndex = c.index + c[0].length;
    }
  }
  return n;
}
function Ph(e) {
  e = e.trim();
  const t = e.startsWith("-");
  return e = e.replace(Dh, ""), { text: e, hasSeparatorLine: t };
}
function ct(e) {
  return e === S.Slash || e === S.Backslash;
}
function Bl(e) {
  return e.replace(/[\\/]/g, le.sep);
}
function Bh(e) {
  return e.indexOf("/") === -1 && (e = Bl(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function Wa(e, t = le.sep) {
  if (!e)
    return "";
  const n = e.length, i = e.charCodeAt(0);
  if (ct(i)) {
    if (ct(e.charCodeAt(1)) && !ct(e.charCodeAt(2))) {
      let s = 3;
      const a = s;
      for (; s < n && !ct(e.charCodeAt(s)); s++)
        ;
      if (a !== s && !ct(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (ct(e.charCodeAt(s)))
            return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Hh(i) && e.charCodeAt(1) === S.Colon)
    return ct(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < n; r++)
      if (ct(e.charCodeAt(r)))
        return e.slice(0, r + 1);
  }
  return "";
}
function qa(e, t, n, i = Un) {
  if (e === t)
    return !0;
  if (!e || !t || t.length > e.length)
    return !1;
  if (n) {
    if (!$u(e, t))
      return !1;
    if (t.length === e.length)
      return !0;
    let s = t.length;
    return t.charAt(t.length - 1) === i && s--, e.charAt(s) === i;
  }
  return t.charAt(t.length - 1) !== i && (t += i), e.indexOf(t) === 0;
}
function Hh(e) {
  return e >= S.A && e <= S.Z || e >= S.a && e <= S.z;
}
var Te;
(function(e) {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatSesssion = "vscode-chat-editor", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
})(Te || (Te = {}));
const Oh = "tkn";
class zh {
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
    this._serverRootPath = le.join(n ?? "/", qh(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return le.join(this._serverRootPath, Te.vscodeRemoteResource);
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
        return rn(l), t;
      }
    const n = t.authority;
    let i = this._hosts[n];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const r = this._ports[n], s = this._connectionTokens[n];
    let a = `path=${encodeURIComponent(t.path)}`;
    return typeof s == "string" && (a += `&${Oh}=${encodeURIComponent(s)}`), Me.from({
      scheme: Uu ? this._preferredWebSchema : Te.vscodeRemoteResource,
      authority: `${i}:${r}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const Wh = new zh();
function qh(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const Vh = "vscode-app", Wt = class Wt {
  constructor() {
    this.staticBrowserUris = new Si(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
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
    return t.scheme === Te.vscodeRemote ? Wh.rewrite(t) : t.scheme === Te.file && (Mu || Fu === `${Te.vscodeFileResource}://${Wt.FALLBACK_AUTHORITY}`) ? t.with({
      scheme: Te.vscodeFileResource,
      authority: t.authority || Wt.FALLBACK_AUTHORITY,
      query: null,
      fragment: null
    }) : this.staticBrowserUris.get(t) ?? t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === Te.vscodeFileResource ? t.with({
      scheme: Te.file,
      authority: t.authority !== Wt.FALLBACK_AUTHORITY ? t.authority : null,
      query: null,
      fragment: null
    }) : t;
  }
  toUri(t) {
    if (Me.isUri(t))
      return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n))
        return Me.joinPath(Me.parse(n, !0), t);
      const i = Rc(n, t);
      return Me.file(i);
    }
    return Me.parse(this.toUrl(t));
  }
  registerStaticBrowserUri(t, n) {
    return this.staticBrowserUris.set(t, n), gn(() => {
      this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
    });
  }
  getRegisteredBrowserUris() {
    return this.staticBrowserUris.keys();
  }
};
Wt.FALLBACK_AUTHORITY = Vh;
let Yi = Wt;
new Yi();
var Va;
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
    typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : Me.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
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
})(Va || (Va = {}));
function et(e) {
  return Cn(e, !0);
}
class Ch {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, n, i = !1) {
    return t === n ? 0 : Cu(this.getComparisonKey(t, i), this.getComparisonKey(n, i));
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
      if (t.scheme === Te.file)
        return qa(et(t), et(n), this._ignorePathCasing(t)) && t.query === n.query && (i || t.fragment === n.fragment);
      if (Ca(t.authority, n.authority))
        return qa(t.path, n.path, this._ignorePathCasing(t), "/") && t.query === n.query && (i || t.fragment === n.fragment);
    }
    return !1;
  }
  joinPath(t, ...n) {
    return Me.joinPath(t, ...n);
  }
  basenameOrAuthority(t) {
    return Gh(t) || t.authority;
  }
  basename(t) {
    return le.basename(t.path);
  }
  extname(t) {
    return le.extname(t.path);
  }
  dirname(t) {
    if (t.path.length === 0)
      return t;
    let n;
    return t.scheme === Te.file ? n = Me.file(Mc(et(t))).path : (n = le.dirname(t.path), t.authority && n.length && n.charCodeAt(0) !== S.Slash && (console.error(`dirname("${t.toString})) resulted in a relative path`), n = "/")), t.with({
      path: n
    });
  }
  normalizePath(t) {
    if (!t.path.length)
      return t;
    let n;
    return t.scheme === Te.file ? n = Me.file(Sc(et(t))).path : n = le.normalize(t.path), t.with({
      path: n
    });
  }
  relativePath(t, n) {
    if (t.scheme !== n.scheme || !Ca(t.authority, n.authority))
      return;
    if (t.scheme === Te.file) {
      const s = Dc(et(t), et(n));
      return Xt ? Bl(s) : s;
    }
    let i = t.path || "/";
    const r = n.path || "/";
    if (this._ignorePathCasing(t)) {
      let s = 0;
      for (const a = Math.min(i.length, r.length); s < a && !(i.charCodeAt(s) !== r.charCodeAt(s) && i.charAt(s).toLowerCase() !== r.charAt(s).toLowerCase()); s++)
        ;
      i = r.substr(0, s) + i.substr(s);
    }
    return le.relative(i, r);
  }
  resolvePath(t, n) {
    if (t.scheme === Te.file) {
      const i = Me.file(Nc(et(t), n));
      return t.with({
        authority: i.authority,
        path: i.path
      });
    }
    return n = Bh(n), t.with({
      path: le.resolve(t.path, n)
    });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, n) {
    return t === n || t !== void 0 && n !== void 0 && ju(t, n);
  }
  hasTrailingPathSeparator(t, n = Un) {
    if (t.scheme === Te.file) {
      const i = et(t);
      return i.length > Wa(i).length && i[i.length - 1] === n;
    } else {
      const i = t.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === S.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, n = Un) {
    return Ga(t, n) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, n = Un) {
    let i = !1;
    if (t.scheme === Te.file) {
      const r = et(t);
      i = r !== void 0 && r.length === Wa(r).length && r[r.length - 1] === n;
    } else {
      n = "/";
      const r = t.path;
      i = r.length === 1 && r.charCodeAt(r.length - 1) === S.Slash;
    }
    return !i && !Ga(t, n) ? t.with({ path: t.path + "/" }) : t;
  }
}
const re = new Ch(() => !1);
re.isEqual.bind(re);
re.isEqualOrParent.bind(re);
re.getComparisonKey.bind(re);
re.basenameOrAuthority.bind(re);
const Gh = re.basename.bind(re);
re.extname.bind(re);
re.dirname.bind(re);
re.joinPath.bind(re);
re.normalizePath.bind(re);
re.relativePath.bind(re);
re.resolvePath.bind(re);
re.isAbsolutePath.bind(re);
const Ca = re.isEqualAuthority.bind(re), Ga = re.hasTrailingPathSeparator.bind(re);
re.removeTrailingPathSeparator.bind(re);
re.addTrailingPathSeparator.bind(re);
var ja;
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
})(ja || (ja = {}));
var $a;
(function(e) {
  e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})($a || ($a = {}));
var Xa;
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
})(Xa || (Xa = {}));
var Ve;
(function(e) {
  e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(Ve || (Ve = {}));
const xe = class xe {
  static fromArray(t) {
    return new xe((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new xe(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new xe(async (n) => {
      await Promise.all(t.map(async (i) => n.emitOne(await i)));
    });
  }
  static merge(t) {
    return new xe(async (n) => {
      await Promise.all(t.map(async (i) => {
        for await (const r of i)
          n.emitOne(r);
      }));
    });
  }
  constructor(t, n) {
    this._state = Ve.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new Be(), queueMicrotask(async () => {
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
          if (this._state === Ve.DoneError)
            throw this._error;
          if (t < this._results.length)
            return { done: !1, value: this._results[t++] };
          if (this._state === Ve.DoneOK)
            return { done: !0, value: void 0 };
          await Hn.toPromise(this._onStateChanged.event);
        } while (!0);
      },
      return: async () => {
        var n;
        return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
      }
    };
  }
  static map(t, n) {
    return new xe(async (i) => {
      for await (const r of t)
        i.emitOne(n(r));
    });
  }
  map(t) {
    return xe.map(this, t);
  }
  static filter(t, n) {
    return new xe(async (i) => {
      for await (const r of t)
        n(r) && i.emitOne(r);
    });
  }
  filter(t) {
    return xe.filter(this, t);
  }
  static coalesce(t) {
    return xe.filter(t, (n) => !!n);
  }
  coalesce() {
    return xe.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const i of t)
      n.push(i);
    return n;
  }
  toPromise() {
    return xe.toPromise(this);
  }
  emitOne(t) {
    this._state === Ve.Initial && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === Ve.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === Ve.Initial && (this._state = Ve.DoneOK, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === Ve.Initial && (this._state = Ve.DoneError, this._error = t, this._onStateChanged.fire());
  }
};
xe.EMPTY = xe.fromArray([]);
let Ya = xe;
class jh {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, n) {
    t = Et(t);
    const i = this.values, r = this.prefixSum, s = n.length;
    return s === 0 ? !1 : (this.values = new Uint32Array(i.length + s), this.values.set(i.subarray(0, t), 0), this.values.set(i.subarray(t), t + s), this.values.set(n, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  setValue(t, n) {
    return t = Et(t), n = Et(n), this.values[t] === n ? !1 : (this.values[t] = n, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
  }
  removeValues(t, n) {
    t = Et(t), n = Et(n);
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
    return t < 0 ? 0 : (t = Et(t), this._getPrefixSum(t));
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
    return new $h(r, t - a);
  }
}
class $h {
  constructor(t, n) {
    this.index = t, this.remainder = n, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = n;
  }
}
class Xh {
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
      this._acceptDeleteRange(i.range), this._acceptInsertText(new ie(i.range.startLineNumber, i.range.startColumn), i.text);
    this._versionId = t.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const t = this._eol.length, n = this._lines.length, i = new Uint32Array(n);
      for (let r = 0; r < n; r++)
        i[r] = this._lines[r].length + t;
      this._lineStarts = new jh(i);
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
    const i = pl(n);
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
const Yh = "workerTextModelSync";
class Qh {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(Yh, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new Jh(Me.parse(t.url), t.lines, t.EOL, t.versionId);
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
class Jh extends Xh {
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
      const r = this._lines[i], s = this.offsetAt(new ie(i + 1, 1)), a = r.matchAll(t);
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
    const i = yr(t.column, Rl(n), this._lines[t.lineNumber - 1], 0);
    return i ? new Y(
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
    if (!ie.isIPosition(t))
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
const mt = class mt {
  constructor(t = null) {
    this._foreignModule = t, this._workerTextModelSyncServer = new Qh();
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
    return r ? eh.computeUnicodeHighlights(r, n, i) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(t, n) {
    const i = this._getModel(t);
    return i ? Uh(i, n) : [];
  }
  async $computeDiff(t, n, i, r) {
    const s = this._getModel(t), a = this._getModel(n);
    return !s || !a ? null : mt.computeDiff(s, a, i, r);
  }
  static computeDiff(t, n, i, r) {
    const s = r === "advanced" ? Ti.getDefault() : Ti.getLegacy(), a = t.getLinesContent(), l = n.getLinesContent(), o = s.computeDiff(a, l, i), u = o.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
    function c(h) {
      return h.map(
        (m) => {
          var p;
          return [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, (p = m.innerChanges) == null ? void 0 : p.map((_) => [
            _.originalRange.startLineNumber,
            _.originalRange.startColumn,
            _.originalRange.endLineNumber,
            _.originalRange.endColumn,
            _.modifiedRange.startLineNumber,
            _.modifiedRange.startColumn,
            _.modifiedRange.endLineNumber,
            _.modifiedRange.endColumn
          ])];
        }
      );
    }
    return {
      identical: u,
      quitEarly: o.hitTimeout,
      changes: c(o.changes),
      moves: o.moves.map((h) => [
        h.lineRangeMapping.original.startLineNumber,
        h.lineRangeMapping.original.endLineNumberExclusive,
        h.lineRangeMapping.modified.startLineNumber,
        h.lineRangeMapping.modified.endLineNumberExclusive,
        c(h.changes)
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
    return new Il(a, l, {
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
        return Y.compareRangesUsingStarts(o.range, u.range);
      const c = o.range ? 0 : 1, h = u.range ? 0 : 1;
      return c - h;
    });
    let l = 0;
    for (let o = 1; o < n.length; o++)
      Y.getEndPosition(n[l].range).equals(Y.getStartPosition(n[o].range)) ? (n[l].range = Y.fromPositions(Y.getStartPosition(n[l].range), Y.getEndPosition(n[o].range)), n[l].text += n[o].text) : (l++, n[l] = n[o]);
    n.length = l + 1;
    for (let { range: o, text: u, eol: c } of n) {
      if (typeof c == "number" && (a = c), Y.isEmpty(o) && !u)
        continue;
      const h = r.getValueInRange(o);
      if (u = u.replace(/\r\n|\n|\r/g, r.eol), h === u)
        continue;
      if (Math.max(u.length, h.length) > mt._diffLimit) {
        s.push({ range: o, text: u });
        continue;
      }
      const m = lc(h, u, i), p = r.offsetAt(Y.lift(o).getStartPosition());
      for (const _ of m) {
        const f = r.positionAt(p + _.originalStart), L = r.positionAt(p + _.originalStart + _.originalLength), A = {
          text: u.substr(_.modifiedStart, _.modifiedLength),
          range: { startLineNumber: f.lineNumber, startColumn: f.column, endLineNumber: L.lineNumber, endColumn: L.column }
        };
        r.getValueInRange(A.range) !== A.text && s.push(A);
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
        return Y.compareRangesUsingStarts(l.range, o.range);
      const u = l.range ? 0 : 1, c = o.range ? 0 : 1;
      return u - c;
    });
    for (let { range: l, text: o, eol: u } of n) {
      let f = function(A, w) {
        return new ie(
          A.lineNumber + w.lineNumber - 1,
          w.lineNumber === 1 ? A.column + w.column - 1 : w.column
        );
      }, L = function(A, w) {
        const k = [];
        for (let H = w.startLineNumber; H <= w.endLineNumber; H++) {
          const D = A[H - 1];
          H === w.startLineNumber && H === w.endLineNumber ? k.push(D.substring(w.startColumn - 1, w.endColumn - 1)) : H === w.startLineNumber ? k.push(D.substring(w.startColumn - 1)) : H === w.endLineNumber ? k.push(D.substring(0, w.endColumn - 1)) : k.push(D);
        }
        return k;
      };
      if (typeof u == "number" && (a = u), Y.isEmpty(l) && !o)
        continue;
      const c = r.getValueInRange(l);
      if (o = o.replace(/\r\n|\n|\r/g, r.eol), c === o)
        continue;
      if (Math.max(o.length, c.length) > mt._diffLimit) {
        s.push({ range: l, text: o });
        continue;
      }
      const h = c.split(/\r\n|\n|\r/), m = o.split(/\r\n|\n|\r/), p = Ti.getDefault().computeDiff(h, m, i), _ = Y.lift(l).getStartPosition();
      for (const A of p.changes)
        if (A.innerChanges)
          for (const w of A.innerChanges)
            s.push({
              range: Y.fromPositions(f(_, w.originalRange.getStartPosition()), f(_, w.originalRange.getEndPosition())),
              text: L(m, w.modifiedRange).join(r.eol)
            });
        else
          throw new pe("The experimental diff algorithm always produces inner changes");
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(t) {
    const n = this._getModel(t);
    return n ? mc(n) : null;
  }
  async $computeDefaultDocumentColors(t) {
    const n = this._getModel(t);
    return n ? Nh(n) : null;
  }
  async $textualSuggest(t, n, i, r) {
    const s = new mi(), a = new RegExp(i, r), l = /* @__PURE__ */ new Set();
    e: for (const o of t) {
      const u = this._getModel(o);
      if (u) {
        for (const c of u.words(a))
          if (!(c === n || !isNaN(Number(c))) && (l.add(c), l.size > mt._suggestionsLimit))
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
      for (const c of u) {
        if (!isNaN(Number(c.word)))
          continue;
        let h = l[c.word];
        h || (h = [], l[c.word] = h), h.push({
          startLineNumber: o,
          startColumn: c.startColumn,
          endLineNumber: o,
          endColumn: c.endColumn
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
    const c = a.getValueInRange(u);
    return Ii.INSTANCE.navigateValueSet(n, o, u, c, i);
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
mt._diffLimit = 1e5, mt._suggestionsLimit = 1e4;
let Yn = mt;
typeof importScripts == "function" && (globalThis.monaco = Gc());
ac(() => new Yn(null));
const fn = class fn {
  static getChannel(t) {
    return t.getChannel(fn.CHANNEL_NAME);
  }
  static setChannel(t, n) {
    t.setChannel(fn.CHANNEL_NAME, n);
  }
};
fn.CHANNEL_NAME = "editorWorkerHost";
let Qi = fn;
function Zh(e) {
  const t = Tl(() => new Yn(e)), n = Qi.getChannel(t);
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
function Kh(e) {
  let t;
  const n = new Proxy({}, {
    get(r, s) {
      return s === "$initialize" ? async (a) => {
        t || (t = e(i, a));
      } : t == null ? void 0 : t[s];
    }
  }), i = Zh(n);
}
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.2(undefined)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
function Ge(...e) {
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
    return Ge(a, ...s);
  } else
    i = t.message, n = i, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), r = t.args ?? {};
  return t1(i, r);
}
var e1 = /{([^}]+)}/g;
function t1(e, t) {
  return Object.keys(t).length === 0 ? e : e.replace(e1, (n, i) => t[i] ?? n);
}
var Qa;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(Qa || (Qa = {}));
var Ji;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(Ji || (Ji = {}));
var Ja;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Ja || (Ja = {}));
var Qn;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(Qn || (Qn = {}));
var fe;
(function(e) {
  function t(i, r) {
    return i === Number.MAX_VALUE && (i = Qn.MAX_VALUE), r === Number.MAX_VALUE && (r = Qn.MAX_VALUE), { line: i, character: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.objectLiteral(r) && F.uinteger(r.line) && F.uinteger(r.character);
  }
  e.is = n;
})(fe || (fe = {}));
var ne;
(function(e) {
  function t(i, r, s, a) {
    if (F.uinteger(i) && F.uinteger(r) && F.uinteger(s) && F.uinteger(a))
      return { start: fe.create(i, r), end: fe.create(s, a) };
    if (fe.is(i) && fe.is(r))
      return { start: i, end: r };
    throw new Error(`Range#create called with invalid arguments[${i}, ${r}, ${s}, ${a}]`);
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.objectLiteral(r) && fe.is(r.start) && fe.is(r.end);
  }
  e.is = n;
})(ne || (ne = {}));
var Jn;
(function(e) {
  function t(i, r) {
    return { uri: i, range: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.objectLiteral(r) && ne.is(r.range) && (F.string(r.uri) || F.undefined(r.uri));
  }
  e.is = n;
})(Jn || (Jn = {}));
var Za;
(function(e) {
  function t(i, r, s, a) {
    return { targetUri: i, targetRange: r, targetSelectionRange: s, originSelectionRange: a };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.objectLiteral(r) && ne.is(r.targetRange) && F.string(r.targetUri) && ne.is(r.targetSelectionRange) && (ne.is(r.originSelectionRange) || F.undefined(r.originSelectionRange));
  }
  e.is = n;
})(Za || (Za = {}));
var Zi;
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
    return F.objectLiteral(r) && F.numberRange(r.red, 0, 1) && F.numberRange(r.green, 0, 1) && F.numberRange(r.blue, 0, 1) && F.numberRange(r.alpha, 0, 1);
  }
  e.is = n;
})(Zi || (Zi = {}));
var Ka;
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
    return F.objectLiteral(r) && ne.is(r.range) && Zi.is(r.color);
  }
  e.is = n;
})(Ka || (Ka = {}));
var eo;
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
    return F.objectLiteral(r) && F.string(r.label) && (F.undefined(r.textEdit) || _e.is(r)) && (F.undefined(r.additionalTextEdits) || F.typedArray(r.additionalTextEdits, _e.is));
  }
  e.is = n;
})(eo || (eo = {}));
var Zn;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(Zn || (Zn = {}));
var to;
(function(e) {
  function t(i, r, s, a, l, o) {
    const u = {
      startLine: i,
      endLine: r
    };
    return F.defined(s) && (u.startCharacter = s), F.defined(a) && (u.endCharacter = a), F.defined(l) && (u.kind = l), F.defined(o) && (u.collapsedText = o), u;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return F.objectLiteral(r) && F.uinteger(r.startLine) && F.uinteger(r.startLine) && (F.undefined(r.startCharacter) || F.uinteger(r.startCharacter)) && (F.undefined(r.endCharacter) || F.uinteger(r.endCharacter)) && (F.undefined(r.kind) || F.string(r.kind));
  }
  e.is = n;
})(to || (to = {}));
var Ki;
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
    return F.defined(r) && Jn.is(r.location) && F.string(r.message);
  }
  e.is = n;
})(Ki || (Ki = {}));
var no;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(no || (no = {}));
var io;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(io || (io = {}));
var ro;
(function(e) {
  function t(n) {
    const i = n;
    return F.objectLiteral(i) && F.string(i.href);
  }
  e.is = t;
})(ro || (ro = {}));
var Kn;
(function(e) {
  function t(i, r, s, a, l, o) {
    let u = { range: i, message: r };
    return F.defined(s) && (u.severity = s), F.defined(a) && (u.code = a), F.defined(l) && (u.source = l), F.defined(o) && (u.relatedInformation = o), u;
  }
  e.create = t;
  function n(i) {
    var r;
    let s = i;
    return F.defined(s) && ne.is(s.range) && F.string(s.message) && (F.number(s.severity) || F.undefined(s.severity)) && (F.integer(s.code) || F.string(s.code) || F.undefined(s.code)) && (F.undefined(s.codeDescription) || F.string((r = s.codeDescription) === null || r === void 0 ? void 0 : r.href)) && (F.string(s.source) || F.undefined(s.source)) && (F.undefined(s.relatedInformation) || F.typedArray(s.relatedInformation, Ki.is));
  }
  e.is = n;
})(Kn || (Kn = {}));
var Qt;
(function(e) {
  function t(i, r, ...s) {
    let a = { title: i, command: r };
    return F.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.string(r.title) && F.string(r.command);
  }
  e.is = n;
})(Qt || (Qt = {}));
var _e;
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
    return F.objectLiteral(a) && F.string(a.newText) && ne.is(a.range);
  }
  e.is = r;
})(_e || (_e = {}));
var er;
(function(e) {
  function t(i, r, s) {
    const a = { label: i };
    return r !== void 0 && (a.needsConfirmation = r), s !== void 0 && (a.description = s), a;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return F.objectLiteral(r) && F.string(r.label) && (F.boolean(r.needsConfirmation) || r.needsConfirmation === void 0) && (F.string(r.description) || r.description === void 0);
  }
  e.is = n;
})(er || (er = {}));
var Jt;
(function(e) {
  function t(n) {
    const i = n;
    return F.string(i);
  }
  e.is = t;
})(Jt || (Jt = {}));
var so;
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
    return _e.is(a) && (er.is(a.annotationId) || Jt.is(a.annotationId));
  }
  e.is = r;
})(so || (so = {}));
var tr;
(function(e) {
  function t(i, r) {
    return { textDocument: i, edits: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && ar.is(r.textDocument) && Array.isArray(r.edits);
  }
  e.is = n;
})(tr || (tr = {}));
var nr;
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
    return r && r.kind === "create" && F.string(r.uri) && (r.options === void 0 || (r.options.overwrite === void 0 || F.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || F.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || Jt.is(r.annotationId));
  }
  e.is = n;
})(nr || (nr = {}));
var ir;
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
    return r && r.kind === "rename" && F.string(r.oldUri) && F.string(r.newUri) && (r.options === void 0 || (r.options.overwrite === void 0 || F.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || F.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || Jt.is(r.annotationId));
  }
  e.is = n;
})(ir || (ir = {}));
var rr;
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
    return r && r.kind === "delete" && F.string(r.uri) && (r.options === void 0 || (r.options.recursive === void 0 || F.boolean(r.options.recursive)) && (r.options.ignoreIfNotExists === void 0 || F.boolean(r.options.ignoreIfNotExists))) && (r.annotationId === void 0 || Jt.is(r.annotationId));
  }
  e.is = n;
})(rr || (rr = {}));
var sr;
(function(e) {
  function t(n) {
    let i = n;
    return i && (i.changes !== void 0 || i.documentChanges !== void 0) && (i.documentChanges === void 0 || i.documentChanges.every((r) => F.string(r.kind) ? nr.is(r) || ir.is(r) || rr.is(r) : tr.is(r)));
  }
  e.is = t;
})(sr || (sr = {}));
var ao;
(function(e) {
  function t(i) {
    return { uri: i };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.string(r.uri);
  }
  e.is = n;
})(ao || (ao = {}));
var oo;
(function(e) {
  function t(i, r) {
    return { uri: i, version: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.string(r.uri) && F.integer(r.version);
  }
  e.is = n;
})(oo || (oo = {}));
var ar;
(function(e) {
  function t(i, r) {
    return { uri: i, version: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.string(r.uri) && (r.version === null || F.integer(r.version));
  }
  e.is = n;
})(ar || (ar = {}));
var lo;
(function(e) {
  function t(i, r, s, a) {
    return { uri: i, languageId: r, version: s, text: a };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.string(r.uri) && F.string(r.languageId) && F.integer(r.version) && F.string(r.text);
  }
  e.is = n;
})(lo || (lo = {}));
var it;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
  function t(n) {
    const i = n;
    return i === e.PlainText || i === e.Markdown;
  }
  e.is = t;
})(it || (it = {}));
var yn;
(function(e) {
  function t(n) {
    const i = n;
    return F.objectLiteral(n) && it.is(i.kind) && F.string(i.value);
  }
  e.is = t;
})(yn || (yn = {}));
var Ne;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(Ne || (Ne = {}));
var Ce;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(Ce || (Ce = {}));
var uo;
(function(e) {
  e.Deprecated = 1;
})(uo || (uo = {}));
var co;
(function(e) {
  function t(i, r, s) {
    return { newText: i, insert: r, replace: s };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r && F.string(r.newText) && ne.is(r.insert) && ne.is(r.replace);
  }
  e.is = n;
})(co || (co = {}));
var ho;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(ho || (ho = {}));
var mo;
(function(e) {
  function t(n) {
    const i = n;
    return i && (F.string(i.detail) || i.detail === void 0) && (F.string(i.description) || i.description === void 0);
  }
  e.is = t;
})(mo || (mo = {}));
var fo;
(function(e) {
  function t(n) {
    return { label: n };
  }
  e.create = t;
})(fo || (fo = {}));
var po;
(function(e) {
  function t(n, i) {
    return { items: n || [], isIncomplete: !!i };
  }
  e.create = t;
})(po || (po = {}));
var ei;
(function(e) {
  function t(i) {
    return i.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  e.fromPlainText = t;
  function n(i) {
    const r = i;
    return F.string(r) || F.objectLiteral(r) && F.string(r.language) && F.string(r.value);
  }
  e.is = n;
})(ei || (ei = {}));
var go;
(function(e) {
  function t(n) {
    let i = n;
    return !!i && F.objectLiteral(i) && (yn.is(i.contents) || ei.is(i.contents) || F.typedArray(i.contents, ei.is)) && (n.range === void 0 || ne.is(n.range));
  }
  e.is = t;
})(go || (go = {}));
var bo;
(function(e) {
  function t(n, i) {
    return i ? { label: n, documentation: i } : { label: n };
  }
  e.create = t;
})(bo || (bo = {}));
var _o;
(function(e) {
  function t(n, i, ...r) {
    let s = { label: n };
    return F.defined(i) && (s.documentation = i), F.defined(r) ? s.parameters = r : s.parameters = [], s;
  }
  e.create = t;
})(_o || (_o = {}));
var ti;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(ti || (ti = {}));
var wo;
(function(e) {
  function t(n, i) {
    let r = { range: n };
    return F.number(i) && (r.kind = i), r;
  }
  e.create = t;
})(wo || (wo = {}));
var or;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(or || (or = {}));
var vo;
(function(e) {
  e.Deprecated = 1;
})(vo || (vo = {}));
var lr;
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
})(lr || (lr = {}));
var To;
(function(e) {
  function t(n, i, r, s) {
    return s !== void 0 ? { name: n, kind: i, location: { uri: r, range: s } } : { name: n, kind: i, location: { uri: r } };
  }
  e.create = t;
})(To || (To = {}));
var ur;
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
    return r && F.string(r.name) && F.number(r.kind) && ne.is(r.range) && ne.is(r.selectionRange) && (r.detail === void 0 || F.string(r.detail)) && (r.deprecated === void 0 || F.boolean(r.deprecated)) && (r.children === void 0 || Array.isArray(r.children)) && (r.tags === void 0 || Array.isArray(r.tags));
  }
  e.is = n;
})(ur || (ur = {}));
var yo;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(yo || (yo = {}));
var ni;
(function(e) {
  e.Invoked = 1, e.Automatic = 2;
})(ni || (ni = {}));
var Ao;
(function(e) {
  function t(i, r, s) {
    let a = { diagnostics: i };
    return r != null && (a.only = r), s != null && (a.triggerKind = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.typedArray(r.diagnostics, Kn.is) && (r.only === void 0 || F.typedArray(r.only, F.string)) && (r.triggerKind === void 0 || r.triggerKind === ni.Invoked || r.triggerKind === ni.Automatic);
  }
  e.is = n;
})(Ao || (Ao = {}));
var xo;
(function(e) {
  function t(i, r, s) {
    let a = { title: i }, l = !0;
    return typeof r == "string" ? (l = !1, a.kind = r) : Qt.is(r) ? a.command = r : a.edit = r, l && s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && F.string(r.title) && (r.diagnostics === void 0 || F.typedArray(r.diagnostics, Kn.is)) && (r.kind === void 0 || F.string(r.kind)) && (r.edit !== void 0 || r.command !== void 0) && (r.command === void 0 || Qt.is(r.command)) && (r.isPreferred === void 0 || F.boolean(r.isPreferred)) && (r.edit === void 0 || sr.is(r.edit));
  }
  e.is = n;
})(xo || (xo = {}));
var Lo;
(function(e) {
  function t(i, r) {
    let s = { range: i };
    return F.defined(r) && (s.data = r), s;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && ne.is(r.range) && (F.undefined(r.command) || Qt.is(r.command));
  }
  e.is = n;
})(Lo || (Lo = {}));
var ko;
(function(e) {
  function t(i, r) {
    return { tabSize: i, insertSpaces: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && F.uinteger(r.tabSize) && F.boolean(r.insertSpaces);
  }
  e.is = n;
})(ko || (ko = {}));
var Eo;
(function(e) {
  function t(i, r, s) {
    return { range: i, target: r, data: s };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.defined(r) && ne.is(r.range) && (F.undefined(r.target) || F.string(r.target));
  }
  e.is = n;
})(Eo || (Eo = {}));
var ii;
(function(e) {
  function t(i, r) {
    return { range: i, parent: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return F.objectLiteral(r) && ne.is(r.range) && (r.parent === void 0 || e.is(r.parent));
  }
  e.is = n;
})(ii || (ii = {}));
var So;
(function(e) {
  e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
})(So || (So = {}));
var Ro;
(function(e) {
  e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
})(Ro || (Ro = {}));
var No;
(function(e) {
  function t(n) {
    const i = n;
    return F.objectLiteral(i) && (i.resultId === void 0 || typeof i.resultId == "string") && Array.isArray(i.data) && (i.data.length === 0 || typeof i.data[0] == "number");
  }
  e.is = t;
})(No || (No = {}));
var Do;
(function(e) {
  function t(i, r) {
    return { range: i, text: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && ne.is(r.range) && F.string(r.text);
  }
  e.is = n;
})(Do || (Do = {}));
var Mo;
(function(e) {
  function t(i, r, s) {
    return { range: i, variableName: r, caseSensitiveLookup: s };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && ne.is(r.range) && F.boolean(r.caseSensitiveLookup) && (F.string(r.variableName) || r.variableName === void 0);
  }
  e.is = n;
})(Mo || (Mo = {}));
var Uo;
(function(e) {
  function t(i, r) {
    return { range: i, expression: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && ne.is(r.range) && (F.string(r.expression) || r.expression === void 0);
  }
  e.is = n;
})(Uo || (Uo = {}));
var Io;
(function(e) {
  function t(i, r) {
    return { frameId: i, stoppedLocation: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return F.defined(r) && ne.is(i.stoppedLocation);
  }
  e.is = n;
})(Io || (Io = {}));
var cr;
(function(e) {
  e.Type = 1, e.Parameter = 2;
  function t(n) {
    return n === 1 || n === 2;
  }
  e.is = t;
})(cr || (cr = {}));
var hr;
(function(e) {
  function t(i) {
    return { value: i };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return F.objectLiteral(r) && (r.tooltip === void 0 || F.string(r.tooltip) || yn.is(r.tooltip)) && (r.location === void 0 || Jn.is(r.location)) && (r.command === void 0 || Qt.is(r.command));
  }
  e.is = n;
})(hr || (hr = {}));
var Fo;
(function(e) {
  function t(i, r, s) {
    const a = { position: i, label: r };
    return s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return F.objectLiteral(r) && fe.is(r.position) && (F.string(r.label) || F.typedArray(r.label, hr.is)) && (r.kind === void 0 || cr.is(r.kind)) && r.textEdits === void 0 || F.typedArray(r.textEdits, _e.is) && (r.tooltip === void 0 || F.string(r.tooltip) || yn.is(r.tooltip)) && (r.paddingLeft === void 0 || F.boolean(r.paddingLeft)) && (r.paddingRight === void 0 || F.boolean(r.paddingRight));
  }
  e.is = n;
})(Fo || (Fo = {}));
var Po;
(function(e) {
  function t(n) {
    return { kind: "snippet", value: n };
  }
  e.createSnippet = t;
})(Po || (Po = {}));
var Bo;
(function(e) {
  function t(n, i, r, s) {
    return { insertText: n, filterText: i, range: r, command: s };
  }
  e.create = t;
})(Bo || (Bo = {}));
var Ho;
(function(e) {
  function t(n) {
    return { items: n };
  }
  e.create = t;
})(Ho || (Ho = {}));
var Oo;
(function(e) {
  e.Invoked = 0, e.Automatic = 1;
})(Oo || (Oo = {}));
var zo;
(function(e) {
  function t(n, i) {
    return { range: n, text: i };
  }
  e.create = t;
})(zo || (zo = {}));
var Wo;
(function(e) {
  function t(n, i) {
    return { triggerKind: n, selectedCompletionInfo: i };
  }
  e.create = t;
})(Wo || (Wo = {}));
var qo;
(function(e) {
  function t(n) {
    const i = n;
    return F.objectLiteral(i) && Ji.is(i.uri) && F.string(i.name);
  }
  e.is = t;
})(qo || (qo = {}));
var Vo;
(function(e) {
  function t(s, a, l, o) {
    return new n1(s, a, l, o);
  }
  e.create = t;
  function n(s) {
    let a = s;
    return !!(F.defined(a) && F.string(a.uri) && (F.undefined(a.languageId) || F.string(a.languageId)) && F.uinteger(a.lineCount) && F.func(a.getText) && F.func(a.positionAt) && F.func(a.offsetAt));
  }
  e.is = n;
  function i(s, a) {
    let l = s.getText(), o = r(a, (c, h) => {
      let m = c.range.start.line - h.range.start.line;
      return m === 0 ? c.range.start.character - h.range.start.character : m;
    }), u = l.length;
    for (let c = o.length - 1; c >= 0; c--) {
      let h = o[c], m = s.offsetAt(h.range.start), p = s.offsetAt(h.range.end);
      if (p <= u)
        l = l.substring(0, m) + h.newText + l.substring(p, l.length);
      else
        throw new Error("Overlapping edit");
      u = m;
    }
    return l;
  }
  e.applyEdits = i;
  function r(s, a) {
    if (s.length <= 1)
      return s;
    const l = s.length / 2 | 0, o = s.slice(0, l), u = s.slice(l);
    r(o, a), r(u, a);
    let c = 0, h = 0, m = 0;
    for (; c < o.length && h < u.length; )
      a(o[c], u[h]) <= 0 ? s[m++] = o[c++] : s[m++] = u[h++];
    for (; c < o.length; )
      s[m++] = o[c++];
    for (; h < u.length; )
      s[m++] = u[h++];
    return s;
  }
})(Vo || (Vo = {}));
var n1 = class {
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
      return fe.create(0, e);
    for (; n < i; ) {
      let s = Math.floor((n + i) / 2);
      t[s] > e ? i = s : n = s + 1;
    }
    let r = n - 1;
    return fe.create(r, e - t[r]);
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
}, F;
(function(e) {
  const t = Object.prototype.toString;
  function n(p) {
    return typeof p < "u";
  }
  e.defined = n;
  function i(p) {
    return typeof p > "u";
  }
  e.undefined = i;
  function r(p) {
    return p === !0 || p === !1;
  }
  e.boolean = r;
  function s(p) {
    return t.call(p) === "[object String]";
  }
  e.string = s;
  function a(p) {
    return t.call(p) === "[object Number]";
  }
  e.number = a;
  function l(p, _, f) {
    return t.call(p) === "[object Number]" && _ <= p && p <= f;
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
  function c(p) {
    return t.call(p) === "[object Function]";
  }
  e.func = c;
  function h(p) {
    return p !== null && typeof p == "object";
  }
  e.objectLiteral = h;
  function m(p, _) {
    return Array.isArray(p) && p.every(_);
  }
  e.typedArray = m;
})(F || (F = {}));
var Co = class dr {
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
      if (dr.isIncremental(i)) {
        const r = Hl(i.range), s = this.offsetAt(r.start), a = this.offsetAt(r.end);
        this._content = this._content.substring(0, s) + i.text + this._content.substring(a, this._content.length);
        const l = Math.max(r.start.line, 0), o = Math.max(r.end.line, 0);
        let u = this._lineOffsets;
        const c = Go(i.text, !1, s);
        if (o - l === c.length)
          for (let m = 0, p = c.length; m < p; m++)
            u[m + l + 1] = c[m];
        else
          c.length < 1e4 ? u.splice(l + 1, o - l, ...c) : this._lineOffsets = u = u.slice(0, l + 1).concat(c, u.slice(o + 1));
        const h = i.text.length - (a - s);
        if (h !== 0)
          for (let m = l + 1 + c.length, p = u.length; m < p; m++)
            u[m] = u[m] + h;
      } else if (dr.isFull(i))
        this._content = i.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = Go(this._content, !0)), this._lineOffsets;
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
}, mr;
(function(e) {
  function t(r, s, a, l) {
    return new Co(r, s, a, l);
  }
  e.create = t;
  function n(r, s, a) {
    if (r instanceof Co)
      return r.update(s, a), r;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  e.update = n;
  function i(r, s) {
    let a = r.getText(), l = fr(s.map(i1), (c, h) => {
      let m = c.range.start.line - h.range.start.line;
      return m === 0 ? c.range.start.character - h.range.start.character : m;
    }), o = 0;
    const u = [];
    for (const c of l) {
      let h = r.offsetAt(c.range.start);
      if (h < o)
        throw new Error("Overlapping edit");
      h > o && u.push(a.substring(o, h)), c.newText.length && u.push(c.newText), o = r.offsetAt(c.range.end);
    }
    return u.push(a.substr(o)), u.join("");
  }
  e.applyEdits = i;
})(mr || (mr = {}));
function fr(e, t) {
  if (e.length <= 1)
    return e;
  const n = e.length / 2 | 0, i = e.slice(0, n), r = e.slice(n);
  fr(i, t), fr(r, t);
  let s = 0, a = 0, l = 0;
  for (; s < i.length && a < r.length; )
    t(i[s], r[a]) <= 0 ? e[l++] = i[s++] : e[l++] = r[a++];
  for (; s < i.length; )
    e[l++] = i[s++];
  for (; a < r.length; )
    e[l++] = r[a++];
  return e;
}
function Go(e, t, n = 0) {
  const i = t ? [n] : [];
  for (let r = 0; r < e.length; r++) {
    let s = e.charCodeAt(r);
    (s === 13 || s === 10) && (s === 13 && r + 1 < e.length && e.charCodeAt(r + 1) === 10 && r++, i.push(n + r + 1));
  }
  return i;
}
function Hl(e) {
  const t = e.start, n = e.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e;
}
function i1(e) {
  const t = Hl(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var z;
(function(e) {
  e[e.StartCommentTag = 0] = "StartCommentTag", e[e.Comment = 1] = "Comment", e[e.EndCommentTag = 2] = "EndCommentTag", e[e.StartTagOpen = 3] = "StartTagOpen", e[e.StartTagClose = 4] = "StartTagClose", e[e.StartTagSelfClose = 5] = "StartTagSelfClose", e[e.StartTag = 6] = "StartTag", e[e.EndTagOpen = 7] = "EndTagOpen", e[e.EndTagClose = 8] = "EndTagClose", e[e.EndTag = 9] = "EndTag", e[e.DelimiterAssign = 10] = "DelimiterAssign", e[e.AttributeName = 11] = "AttributeName", e[e.AttributeValue = 12] = "AttributeValue", e[e.StartDoctypeTag = 13] = "StartDoctypeTag", e[e.Doctype = 14] = "Doctype", e[e.EndDoctypeTag = 15] = "EndDoctypeTag", e[e.Content = 16] = "Content", e[e.Whitespace = 17] = "Whitespace", e[e.Unknown = 18] = "Unknown", e[e.Script = 19] = "Script", e[e.Styles = 20] = "Styles", e[e.EOS = 21] = "EOS";
})(z || (z = {}));
var Q;
(function(e) {
  e[e.WithinContent = 0] = "WithinContent", e[e.AfterOpeningStartTag = 1] = "AfterOpeningStartTag", e[e.AfterOpeningEndTag = 2] = "AfterOpeningEndTag", e[e.WithinDoctype = 3] = "WithinDoctype", e[e.WithinTag = 4] = "WithinTag", e[e.WithinEndTag = 5] = "WithinEndTag", e[e.WithinComment = 6] = "WithinComment", e[e.WithinScriptContent = 7] = "WithinScriptContent", e[e.WithinStyleContent = 8] = "WithinStyleContent", e[e.AfterAttributeName = 9] = "AfterAttributeName", e[e.BeforeAttributeValue = 10] = "BeforeAttributeValue";
})(Q || (Q = {}));
var jo;
(function(e) {
  e.LATEST = {
    textDocument: {
      completion: {
        completionItem: {
          documentationFormat: [it.Markdown, it.PlainText]
        }
      },
      hover: {
        contentFormat: [it.Markdown, it.PlainText]
      }
    }
  };
})(jo || (jo = {}));
var pr;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.File = 1] = "File", e[e.Directory = 2] = "Directory", e[e.SymbolicLink = 64] = "SymbolicLink";
})(pr || (pr = {}));
var r1 = class {
  constructor(e, t) {
    this.source = e, this.len = e.length, this.position = t;
  }
  eos() {
    return this.len <= this.position;
  }
  getSource() {
    return this.source;
  }
  pos() {
    return this.position;
  }
  goBackTo(e) {
    this.position = e;
  }
  goBack(e) {
    this.position -= e;
  }
  advance(e) {
    this.position += e;
  }
  goToEnd() {
    this.position = this.source.length;
  }
  nextChar() {
    return this.source.charCodeAt(this.position++) || 0;
  }
  peekChar(e = 0) {
    return this.source.charCodeAt(this.position + e) || 0;
  }
  advanceIfChar(e) {
    return e === this.source.charCodeAt(this.position) ? (this.position++, !0) : !1;
  }
  advanceIfChars(e) {
    let t;
    if (this.position + e.length > this.source.length)
      return !1;
    for (t = 0; t < e.length; t++)
      if (this.source.charCodeAt(this.position + t) !== e[t])
        return !1;
    return this.advance(t), !0;
  }
  advanceIfRegExp(e) {
    const n = this.source.substr(this.position).match(e);
    return n ? (this.position = this.position + n.index + n[0].length, n[0]) : "";
  }
  advanceUntilRegExp(e) {
    const n = this.source.substr(this.position).match(e);
    return n ? (this.position = this.position + n.index, n[0]) : (this.goToEnd(), "");
  }
  advanceUntilChar(e) {
    for (; this.position < this.source.length; ) {
      if (this.source.charCodeAt(this.position) === e)
        return !0;
      this.advance(1);
    }
    return !1;
  }
  advanceUntilChars(e) {
    for (; this.position + e.length <= this.source.length; ) {
      let t = 0;
      for (; t < e.length && this.source.charCodeAt(this.position + t) === e[t]; t++)
        ;
      if (t === e.length)
        return !0;
      this.advance(1);
    }
    return this.goToEnd(), !1;
  }
  skipWhitespace() {
    return this.advanceWhileChar((t) => t === h1 || t === d1 || t === l1 || t === c1 || t === u1) > 0;
  }
  advanceWhileChar(e) {
    const t = this.position;
    for (; this.position < this.len && e(this.source.charCodeAt(this.position)); )
      this.position++;
    return this.position - t;
  }
}, $o = 33, Ut = 45, Sn = 60, Xe = 62, yi = 47, s1 = 61, a1 = 34, o1 = 39, l1 = 10, u1 = 13, c1 = 12, h1 = 32, d1 = 9, m1 = {
  "text/x-handlebars-template": !0,
  // Fix for https://github.com/microsoft/vscode/issues/77977
  "text/html": !0
};
function Fe(e, t = 0, n = Q.WithinContent, i = !1) {
  const r = new r1(e, t);
  let s = n, a = 0, l = z.Unknown, o, u, c, h, m;
  function p() {
    return r.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
  }
  function _() {
    return r.advanceIfRegExp(/^[^\s"'></=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase();
  }
  function f(w, k, H) {
    return l = k, a = w, o = H, k;
  }
  function L() {
    const w = r.pos(), k = s, H = A();
    return H !== z.EOS && w === r.pos() && !(i && (H === z.StartTagClose || H === z.EndTagClose)) ? (console.warn("Scanner.scan has not advanced at offset " + w + ", state before: " + k + " after: " + s), r.advance(1), f(w, z.Unknown)) : H;
  }
  function A() {
    const w = r.pos();
    if (r.eos())
      return f(w, z.EOS);
    let k;
    switch (s) {
      case Q.WithinComment:
        return r.advanceIfChars([Ut, Ut, Xe]) ? (s = Q.WithinContent, f(w, z.EndCommentTag)) : (r.advanceUntilChars([Ut, Ut, Xe]), f(w, z.Comment));
      case Q.WithinDoctype:
        return r.advanceIfChar(Xe) ? (s = Q.WithinContent, f(w, z.EndDoctypeTag)) : (r.advanceUntilChar(Xe), f(w, z.Doctype));
      case Q.WithinContent:
        if (r.advanceIfChar(Sn)) {
          if (!r.eos() && r.peekChar() === $o) {
            if (r.advanceIfChars([$o, Ut, Ut]))
              return s = Q.WithinComment, f(w, z.StartCommentTag);
            if (r.advanceIfRegExp(/^!doctype/i))
              return s = Q.WithinDoctype, f(w, z.StartDoctypeTag);
          }
          return r.advanceIfChar(yi) ? (s = Q.AfterOpeningEndTag, f(w, z.EndTagOpen)) : (s = Q.AfterOpeningStartTag, f(w, z.StartTagOpen));
        }
        return r.advanceUntilChar(Sn), f(w, z.Content);
      case Q.AfterOpeningEndTag:
        return p().length > 0 ? (s = Q.WithinEndTag, f(w, z.EndTag)) : r.skipWhitespace() ? f(w, z.Whitespace, Ge("Tag name must directly follow the open bracket.")) : (s = Q.WithinEndTag, r.advanceUntilChar(Xe), w < r.pos() ? f(w, z.Unknown, Ge("End tag name expected.")) : A());
      case Q.WithinEndTag:
        if (r.skipWhitespace())
          return f(w, z.Whitespace);
        if (r.advanceIfChar(Xe))
          return s = Q.WithinContent, f(w, z.EndTagClose);
        if (i && r.peekChar() === Sn)
          return s = Q.WithinContent, f(w, z.EndTagClose, Ge("Closing bracket missing."));
        k = Ge("Closing bracket expected.");
        break;
      case Q.AfterOpeningStartTag:
        return c = p(), m = void 0, h = void 0, c.length > 0 ? (u = !1, s = Q.WithinTag, f(w, z.StartTag)) : r.skipWhitespace() ? f(w, z.Whitespace, Ge("Tag name must directly follow the open bracket.")) : (s = Q.WithinTag, r.advanceUntilChar(Xe), w < r.pos() ? f(w, z.Unknown, Ge("Start tag name expected.")) : A());
      case Q.WithinTag:
        return r.skipWhitespace() ? (u = !0, f(w, z.Whitespace)) : u && (h = _(), h.length > 0) ? (s = Q.AfterAttributeName, u = !1, f(w, z.AttributeName)) : r.advanceIfChars([yi, Xe]) ? (s = Q.WithinContent, f(w, z.StartTagSelfClose)) : r.advanceIfChar(Xe) ? (c === "script" ? m && m1[m] ? s = Q.WithinContent : s = Q.WithinScriptContent : c === "style" ? s = Q.WithinStyleContent : s = Q.WithinContent, f(w, z.StartTagClose)) : i && r.peekChar() === Sn ? (s = Q.WithinContent, f(w, z.StartTagClose, Ge("Closing bracket missing."))) : (r.advance(1), f(w, z.Unknown, Ge("Unexpected character in tag.")));
      case Q.AfterAttributeName:
        return r.skipWhitespace() ? (u = !0, f(w, z.Whitespace)) : r.advanceIfChar(s1) ? (s = Q.BeforeAttributeValue, f(w, z.DelimiterAssign)) : (s = Q.WithinTag, A());
      case Q.BeforeAttributeValue:
        if (r.skipWhitespace())
          return f(w, z.Whitespace);
        let D = r.advanceIfRegExp(/^[^\s"'`=<>]+/);
        if (D.length > 0 && (r.peekChar() === Xe && r.peekChar(-1) === yi && (r.goBack(1), D = D.substring(0, D.length - 1)), h === "type" && (m = D), D.length > 0))
          return s = Q.WithinTag, u = !1, f(w, z.AttributeValue);
        const I = r.peekChar();
        return I === o1 || I === a1 ? (r.advance(1), r.advanceUntilChar(I) && r.advance(1), h === "type" && (m = r.getSource().substring(w + 1, r.pos() - 1)), s = Q.WithinTag, u = !1, f(w, z.AttributeValue)) : (s = Q.WithinTag, u = !1, A());
      case Q.WithinScriptContent:
        let b = 1;
        for (; !r.eos(); ) {
          const g = r.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
          if (g.length === 0)
            return r.goToEnd(), f(w, z.Script);
          if (g === "<!--")
            b === 1 && (b = 2);
          else if (g === "-->")
            b = 1;
          else if (g[1] !== "/")
            b === 2 && (b = 3);
          else if (b === 3)
            b = 2;
          else {
            r.goBack(g.length);
            break;
          }
        }
        return s = Q.WithinContent, w < r.pos() ? f(w, z.Script) : A();
      case Q.WithinStyleContent:
        return r.advanceUntilRegExp(/<\/style/i), s = Q.WithinContent, w < r.pos() ? f(w, z.Styles) : A();
    }
    return r.advance(1), s = Q.WithinContent, f(w, z.Unknown, k);
  }
  return {
    scan: L,
    getTokenType: () => l,
    getTokenOffset: () => a,
    getTokenLength: () => r.pos() - a,
    getTokenEnd: () => r.pos(),
    getTokenText: () => r.getSource().substring(a, r.pos()),
    getScannerState: () => s,
    getTokenError: () => o
  };
}
function Xo(e, t) {
  let n = 0, i = e.length;
  if (i === 0)
    return 0;
  for (; n < i; ) {
    let r = Math.floor((n + i) / 2);
    t(e[r]) ? i = r : n = r + 1;
  }
  return n;
}
function f1(e, t, n) {
  let i = 0, r = e.length - 1;
  for (; i <= r; ) {
    const s = (i + r) / 2 | 0, a = n(e[s], t);
    if (a < 0)
      i = s + 1;
    else if (a > 0)
      r = s - 1;
    else
      return s;
  }
  return -(i + 1);
}
var Yo = class {
  get attributeNames() {
    return this.attributes ? Object.keys(this.attributes) : [];
  }
  constructor(e, t, n, i) {
    this.start = e, this.end = t, this.children = n, this.parent = i, this.closed = !1;
  }
  isSameTag(e) {
    return this.tag === void 0 ? e === void 0 : e !== void 0 && this.tag.length === e.length && this.tag.toLowerCase() === e;
  }
  get firstChild() {
    return this.children[0];
  }
  get lastChild() {
    return this.children.length ? this.children[this.children.length - 1] : void 0;
  }
  findNodeBefore(e) {
    const t = Xo(this.children, (n) => e <= n.start) - 1;
    if (t >= 0) {
      const n = this.children[t];
      if (e > n.start) {
        if (e < n.end)
          return n.findNodeBefore(e);
        const i = n.lastChild;
        return i && i.end === n.end ? n.findNodeBefore(e) : n;
      }
    }
    return this;
  }
  findNodeAt(e) {
    const t = Xo(this.children, (n) => e <= n.start) - 1;
    if (t >= 0) {
      const n = this.children[t];
      if (e > n.start && e <= n.end)
        return n.findNodeAt(e);
    }
    return this;
  }
}, p1 = class {
  constructor(e) {
    this.dataManager = e;
  }
  parseDocument(e) {
    return this.parse(e.getText(), this.dataManager.getVoidElements(e.languageId));
  }
  parse(e, t) {
    const n = Fe(e, void 0, void 0, !0), i = new Yo(0, e.length, [], void 0);
    let r = i, s = -1, a, l = null, o = n.scan();
    for (; o !== z.EOS; ) {
      switch (o) {
        case z.StartTagOpen:
          const u = new Yo(n.getTokenOffset(), e.length, [], r);
          r.children.push(u), r = u;
          break;
        case z.StartTag:
          r.tag = n.getTokenText();
          break;
        case z.StartTagClose:
          r.parent && (r.end = n.getTokenEnd(), n.getTokenLength() ? (r.startTagEnd = n.getTokenEnd(), r.tag && this.dataManager.isVoidElement(r.tag, t) && (r.closed = !0, r = r.parent)) : r = r.parent);
          break;
        case z.StartTagSelfClose:
          r.parent && (r.closed = !0, r.end = n.getTokenEnd(), r.startTagEnd = n.getTokenEnd(), r = r.parent);
          break;
        case z.EndTagOpen:
          s = n.getTokenOffset(), a = void 0;
          break;
        case z.EndTag:
          a = n.getTokenText().toLowerCase();
          break;
        case z.EndTagClose:
          let c = r;
          for (; !c.isSameTag(a) && c.parent; )
            c = c.parent;
          if (c.parent) {
            for (; r !== c; )
              r.end = s, r.closed = !1, r = r.parent;
            r.closed = !0, r.endTagStart = s, r.end = n.getTokenEnd(), r = r.parent;
          }
          break;
        case z.AttributeName: {
          l = n.getTokenText();
          let h = r.attributes;
          h || (r.attributes = h = {}), h[l] = null;
          break;
        }
        case z.AttributeValue: {
          const h = n.getTokenText(), m = r.attributes;
          m && l && (m[l] = h, l = null);
          break;
        }
      }
      o = n.scan();
    }
    for (; r.parent; )
      r.end = e.length, r.closed = !1, r = r.parent;
    return {
      roots: i.children,
      findNodeBefore: i.findNodeBefore.bind(i),
      findNodeAt: i.findNodeAt.bind(i)
    };
  }
}, hn = {
  "Aacute;": "Á",
  Aacute: "Á",
  "aacute;": "á",
  aacute: "á",
  "Abreve;": "Ă",
  "abreve;": "ă",
  "ac;": "∾",
  "acd;": "∿",
  "acE;": "∾̳",
  "Acirc;": "Â",
  Acirc: "Â",
  "acirc;": "â",
  acirc: "â",
  "acute;": "´",
  acute: "´",
  "Acy;": "А",
  "acy;": "а",
  "AElig;": "Æ",
  AElig: "Æ",
  "aelig;": "æ",
  aelig: "æ",
  "af;": "⁡",
  "Afr;": "𝔄",
  "afr;": "𝔞",
  "Agrave;": "À",
  Agrave: "À",
  "agrave;": "à",
  agrave: "à",
  "alefsym;": "ℵ",
  "aleph;": "ℵ",
  "Alpha;": "Α",
  "alpha;": "α",
  "Amacr;": "Ā",
  "amacr;": "ā",
  "amalg;": "⨿",
  "AMP;": "&",
  AMP: "&",
  "amp;": "&",
  amp: "&",
  "And;": "⩓",
  "and;": "∧",
  "andand;": "⩕",
  "andd;": "⩜",
  "andslope;": "⩘",
  "andv;": "⩚",
  "ang;": "∠",
  "ange;": "⦤",
  "angle;": "∠",
  "angmsd;": "∡",
  "angmsdaa;": "⦨",
  "angmsdab;": "⦩",
  "angmsdac;": "⦪",
  "angmsdad;": "⦫",
  "angmsdae;": "⦬",
  "angmsdaf;": "⦭",
  "angmsdag;": "⦮",
  "angmsdah;": "⦯",
  "angrt;": "∟",
  "angrtvb;": "⊾",
  "angrtvbd;": "⦝",
  "angsph;": "∢",
  "angst;": "Å",
  "angzarr;": "⍼",
  "Aogon;": "Ą",
  "aogon;": "ą",
  "Aopf;": "𝔸",
  "aopf;": "𝕒",
  "ap;": "≈",
  "apacir;": "⩯",
  "apE;": "⩰",
  "ape;": "≊",
  "apid;": "≋",
  "apos;": "'",
  "ApplyFunction;": "⁡",
  "approx;": "≈",
  "approxeq;": "≊",
  "Aring;": "Å",
  Aring: "Å",
  "aring;": "å",
  aring: "å",
  "Ascr;": "𝒜",
  "ascr;": "𝒶",
  "Assign;": "≔",
  "ast;": "*",
  "asymp;": "≈",
  "asympeq;": "≍",
  "Atilde;": "Ã",
  Atilde: "Ã",
  "atilde;": "ã",
  atilde: "ã",
  "Auml;": "Ä",
  Auml: "Ä",
  "auml;": "ä",
  auml: "ä",
  "awconint;": "∳",
  "awint;": "⨑",
  "backcong;": "≌",
  "backepsilon;": "϶",
  "backprime;": "‵",
  "backsim;": "∽",
  "backsimeq;": "⋍",
  "Backslash;": "∖",
  "Barv;": "⫧",
  "barvee;": "⊽",
  "Barwed;": "⌆",
  "barwed;": "⌅",
  "barwedge;": "⌅",
  "bbrk;": "⎵",
  "bbrktbrk;": "⎶",
  "bcong;": "≌",
  "Bcy;": "Б",
  "bcy;": "б",
  "bdquo;": "„",
  "becaus;": "∵",
  "Because;": "∵",
  "because;": "∵",
  "bemptyv;": "⦰",
  "bepsi;": "϶",
  "bernou;": "ℬ",
  "Bernoullis;": "ℬ",
  "Beta;": "Β",
  "beta;": "β",
  "beth;": "ℶ",
  "between;": "≬",
  "Bfr;": "𝔅",
  "bfr;": "𝔟",
  "bigcap;": "⋂",
  "bigcirc;": "◯",
  "bigcup;": "⋃",
  "bigodot;": "⨀",
  "bigoplus;": "⨁",
  "bigotimes;": "⨂",
  "bigsqcup;": "⨆",
  "bigstar;": "★",
  "bigtriangledown;": "▽",
  "bigtriangleup;": "△",
  "biguplus;": "⨄",
  "bigvee;": "⋁",
  "bigwedge;": "⋀",
  "bkarow;": "⤍",
  "blacklozenge;": "⧫",
  "blacksquare;": "▪",
  "blacktriangle;": "▴",
  "blacktriangledown;": "▾",
  "blacktriangleleft;": "◂",
  "blacktriangleright;": "▸",
  "blank;": "␣",
  "blk12;": "▒",
  "blk14;": "░",
  "blk34;": "▓",
  "block;": "█",
  "bne;": "=⃥",
  "bnequiv;": "≡⃥",
  "bNot;": "⫭",
  "bnot;": "⌐",
  "Bopf;": "𝔹",
  "bopf;": "𝕓",
  "bot;": "⊥",
  "bottom;": "⊥",
  "bowtie;": "⋈",
  "boxbox;": "⧉",
  "boxDL;": "╗",
  "boxDl;": "╖",
  "boxdL;": "╕",
  "boxdl;": "┐",
  "boxDR;": "╔",
  "boxDr;": "╓",
  "boxdR;": "╒",
  "boxdr;": "┌",
  "boxH;": "═",
  "boxh;": "─",
  "boxHD;": "╦",
  "boxHd;": "╤",
  "boxhD;": "╥",
  "boxhd;": "┬",
  "boxHU;": "╩",
  "boxHu;": "╧",
  "boxhU;": "╨",
  "boxhu;": "┴",
  "boxminus;": "⊟",
  "boxplus;": "⊞",
  "boxtimes;": "⊠",
  "boxUL;": "╝",
  "boxUl;": "╜",
  "boxuL;": "╛",
  "boxul;": "┘",
  "boxUR;": "╚",
  "boxUr;": "╙",
  "boxuR;": "╘",
  "boxur;": "└",
  "boxV;": "║",
  "boxv;": "│",
  "boxVH;": "╬",
  "boxVh;": "╫",
  "boxvH;": "╪",
  "boxvh;": "┼",
  "boxVL;": "╣",
  "boxVl;": "╢",
  "boxvL;": "╡",
  "boxvl;": "┤",
  "boxVR;": "╠",
  "boxVr;": "╟",
  "boxvR;": "╞",
  "boxvr;": "├",
  "bprime;": "‵",
  "Breve;": "˘",
  "breve;": "˘",
  "brvbar;": "¦",
  brvbar: "¦",
  "Bscr;": "ℬ",
  "bscr;": "𝒷",
  "bsemi;": "⁏",
  "bsim;": "∽",
  "bsime;": "⋍",
  "bsol;": "\\",
  "bsolb;": "⧅",
  "bsolhsub;": "⟈",
  "bull;": "•",
  "bullet;": "•",
  "bump;": "≎",
  "bumpE;": "⪮",
  "bumpe;": "≏",
  "Bumpeq;": "≎",
  "bumpeq;": "≏",
  "Cacute;": "Ć",
  "cacute;": "ć",
  "Cap;": "⋒",
  "cap;": "∩",
  "capand;": "⩄",
  "capbrcup;": "⩉",
  "capcap;": "⩋",
  "capcup;": "⩇",
  "capdot;": "⩀",
  "CapitalDifferentialD;": "ⅅ",
  "caps;": "∩︀",
  "caret;": "⁁",
  "caron;": "ˇ",
  "Cayleys;": "ℭ",
  "ccaps;": "⩍",
  "Ccaron;": "Č",
  "ccaron;": "č",
  "Ccedil;": "Ç",
  Ccedil: "Ç",
  "ccedil;": "ç",
  ccedil: "ç",
  "Ccirc;": "Ĉ",
  "ccirc;": "ĉ",
  "Cconint;": "∰",
  "ccups;": "⩌",
  "ccupssm;": "⩐",
  "Cdot;": "Ċ",
  "cdot;": "ċ",
  "cedil;": "¸",
  cedil: "¸",
  "Cedilla;": "¸",
  "cemptyv;": "⦲",
  "cent;": "¢",
  cent: "¢",
  "CenterDot;": "·",
  "centerdot;": "·",
  "Cfr;": "ℭ",
  "cfr;": "𝔠",
  "CHcy;": "Ч",
  "chcy;": "ч",
  "check;": "✓",
  "checkmark;": "✓",
  "Chi;": "Χ",
  "chi;": "χ",
  "cir;": "○",
  "circ;": "ˆ",
  "circeq;": "≗",
  "circlearrowleft;": "↺",
  "circlearrowright;": "↻",
  "circledast;": "⊛",
  "circledcirc;": "⊚",
  "circleddash;": "⊝",
  "CircleDot;": "⊙",
  "circledR;": "®",
  "circledS;": "Ⓢ",
  "CircleMinus;": "⊖",
  "CirclePlus;": "⊕",
  "CircleTimes;": "⊗",
  "cirE;": "⧃",
  "cire;": "≗",
  "cirfnint;": "⨐",
  "cirmid;": "⫯",
  "cirscir;": "⧂",
  "ClockwiseContourIntegral;": "∲",
  "CloseCurlyDoubleQuote;": "”",
  "CloseCurlyQuote;": "’",
  "clubs;": "♣",
  "clubsuit;": "♣",
  "Colon;": "∷",
  "colon;": ":",
  "Colone;": "⩴",
  "colone;": "≔",
  "coloneq;": "≔",
  "comma;": ",",
  "commat;": "@",
  "comp;": "∁",
  "compfn;": "∘",
  "complement;": "∁",
  "complexes;": "ℂ",
  "cong;": "≅",
  "congdot;": "⩭",
  "Congruent;": "≡",
  "Conint;": "∯",
  "conint;": "∮",
  "ContourIntegral;": "∮",
  "Copf;": "ℂ",
  "copf;": "𝕔",
  "coprod;": "∐",
  "Coproduct;": "∐",
  "COPY;": "©",
  COPY: "©",
  "copy;": "©",
  copy: "©",
  "copysr;": "℗",
  "CounterClockwiseContourIntegral;": "∳",
  "crarr;": "↵",
  "Cross;": "⨯",
  "cross;": "✗",
  "Cscr;": "𝒞",
  "cscr;": "𝒸",
  "csub;": "⫏",
  "csube;": "⫑",
  "csup;": "⫐",
  "csupe;": "⫒",
  "ctdot;": "⋯",
  "cudarrl;": "⤸",
  "cudarrr;": "⤵",
  "cuepr;": "⋞",
  "cuesc;": "⋟",
  "cularr;": "↶",
  "cularrp;": "⤽",
  "Cup;": "⋓",
  "cup;": "∪",
  "cupbrcap;": "⩈",
  "CupCap;": "≍",
  "cupcap;": "⩆",
  "cupcup;": "⩊",
  "cupdot;": "⊍",
  "cupor;": "⩅",
  "cups;": "∪︀",
  "curarr;": "↷",
  "curarrm;": "⤼",
  "curlyeqprec;": "⋞",
  "curlyeqsucc;": "⋟",
  "curlyvee;": "⋎",
  "curlywedge;": "⋏",
  "curren;": "¤",
  curren: "¤",
  "curvearrowleft;": "↶",
  "curvearrowright;": "↷",
  "cuvee;": "⋎",
  "cuwed;": "⋏",
  "cwconint;": "∲",
  "cwint;": "∱",
  "cylcty;": "⌭",
  "Dagger;": "‡",
  "dagger;": "†",
  "daleth;": "ℸ",
  "Darr;": "↡",
  "dArr;": "⇓",
  "darr;": "↓",
  "dash;": "‐",
  "Dashv;": "⫤",
  "dashv;": "⊣",
  "dbkarow;": "⤏",
  "dblac;": "˝",
  "Dcaron;": "Ď",
  "dcaron;": "ď",
  "Dcy;": "Д",
  "dcy;": "д",
  "DD;": "ⅅ",
  "dd;": "ⅆ",
  "ddagger;": "‡",
  "ddarr;": "⇊",
  "DDotrahd;": "⤑",
  "ddotseq;": "⩷",
  "deg;": "°",
  deg: "°",
  "Del;": "∇",
  "Delta;": "Δ",
  "delta;": "δ",
  "demptyv;": "⦱",
  "dfisht;": "⥿",
  "Dfr;": "𝔇",
  "dfr;": "𝔡",
  "dHar;": "⥥",
  "dharl;": "⇃",
  "dharr;": "⇂",
  "DiacriticalAcute;": "´",
  "DiacriticalDot;": "˙",
  "DiacriticalDoubleAcute;": "˝",
  "DiacriticalGrave;": "`",
  "DiacriticalTilde;": "˜",
  "diam;": "⋄",
  "Diamond;": "⋄",
  "diamond;": "⋄",
  "diamondsuit;": "♦",
  "diams;": "♦",
  "die;": "¨",
  "DifferentialD;": "ⅆ",
  "digamma;": "ϝ",
  "disin;": "⋲",
  "div;": "÷",
  "divide;": "÷",
  divide: "÷",
  "divideontimes;": "⋇",
  "divonx;": "⋇",
  "DJcy;": "Ђ",
  "djcy;": "ђ",
  "dlcorn;": "⌞",
  "dlcrop;": "⌍",
  "dollar;": "$",
  "Dopf;": "𝔻",
  "dopf;": "𝕕",
  "Dot;": "¨",
  "dot;": "˙",
  "DotDot;": "⃜",
  "doteq;": "≐",
  "doteqdot;": "≑",
  "DotEqual;": "≐",
  "dotminus;": "∸",
  "dotplus;": "∔",
  "dotsquare;": "⊡",
  "doublebarwedge;": "⌆",
  "DoubleContourIntegral;": "∯",
  "DoubleDot;": "¨",
  "DoubleDownArrow;": "⇓",
  "DoubleLeftArrow;": "⇐",
  "DoubleLeftRightArrow;": "⇔",
  "DoubleLeftTee;": "⫤",
  "DoubleLongLeftArrow;": "⟸",
  "DoubleLongLeftRightArrow;": "⟺",
  "DoubleLongRightArrow;": "⟹",
  "DoubleRightArrow;": "⇒",
  "DoubleRightTee;": "⊨",
  "DoubleUpArrow;": "⇑",
  "DoubleUpDownArrow;": "⇕",
  "DoubleVerticalBar;": "∥",
  "DownArrow;": "↓",
  "Downarrow;": "⇓",
  "downarrow;": "↓",
  "DownArrowBar;": "⤓",
  "DownArrowUpArrow;": "⇵",
  "DownBreve;": "̑",
  "downdownarrows;": "⇊",
  "downharpoonleft;": "⇃",
  "downharpoonright;": "⇂",
  "DownLeftRightVector;": "⥐",
  "DownLeftTeeVector;": "⥞",
  "DownLeftVector;": "↽",
  "DownLeftVectorBar;": "⥖",
  "DownRightTeeVector;": "⥟",
  "DownRightVector;": "⇁",
  "DownRightVectorBar;": "⥗",
  "DownTee;": "⊤",
  "DownTeeArrow;": "↧",
  "drbkarow;": "⤐",
  "drcorn;": "⌟",
  "drcrop;": "⌌",
  "Dscr;": "𝒟",
  "dscr;": "𝒹",
  "DScy;": "Ѕ",
  "dscy;": "ѕ",
  "dsol;": "⧶",
  "Dstrok;": "Đ",
  "dstrok;": "đ",
  "dtdot;": "⋱",
  "dtri;": "▿",
  "dtrif;": "▾",
  "duarr;": "⇵",
  "duhar;": "⥯",
  "dwangle;": "⦦",
  "DZcy;": "Џ",
  "dzcy;": "џ",
  "dzigrarr;": "⟿",
  "Eacute;": "É",
  Eacute: "É",
  "eacute;": "é",
  eacute: "é",
  "easter;": "⩮",
  "Ecaron;": "Ě",
  "ecaron;": "ě",
  "ecir;": "≖",
  "Ecirc;": "Ê",
  Ecirc: "Ê",
  "ecirc;": "ê",
  ecirc: "ê",
  "ecolon;": "≕",
  "Ecy;": "Э",
  "ecy;": "э",
  "eDDot;": "⩷",
  "Edot;": "Ė",
  "eDot;": "≑",
  "edot;": "ė",
  "ee;": "ⅇ",
  "efDot;": "≒",
  "Efr;": "𝔈",
  "efr;": "𝔢",
  "eg;": "⪚",
  "Egrave;": "È",
  Egrave: "È",
  "egrave;": "è",
  egrave: "è",
  "egs;": "⪖",
  "egsdot;": "⪘",
  "el;": "⪙",
  "Element;": "∈",
  "elinters;": "⏧",
  "ell;": "ℓ",
  "els;": "⪕",
  "elsdot;": "⪗",
  "Emacr;": "Ē",
  "emacr;": "ē",
  "empty;": "∅",
  "emptyset;": "∅",
  "EmptySmallSquare;": "◻",
  "emptyv;": "∅",
  "EmptyVerySmallSquare;": "▫",
  "emsp;": " ",
  "emsp13;": " ",
  "emsp14;": " ",
  "ENG;": "Ŋ",
  "eng;": "ŋ",
  "ensp;": " ",
  "Eogon;": "Ę",
  "eogon;": "ę",
  "Eopf;": "𝔼",
  "eopf;": "𝕖",
  "epar;": "⋕",
  "eparsl;": "⧣",
  "eplus;": "⩱",
  "epsi;": "ε",
  "Epsilon;": "Ε",
  "epsilon;": "ε",
  "epsiv;": "ϵ",
  "eqcirc;": "≖",
  "eqcolon;": "≕",
  "eqsim;": "≂",
  "eqslantgtr;": "⪖",
  "eqslantless;": "⪕",
  "Equal;": "⩵",
  "equals;": "=",
  "EqualTilde;": "≂",
  "equest;": "≟",
  "Equilibrium;": "⇌",
  "equiv;": "≡",
  "equivDD;": "⩸",
  "eqvparsl;": "⧥",
  "erarr;": "⥱",
  "erDot;": "≓",
  "Escr;": "ℰ",
  "escr;": "ℯ",
  "esdot;": "≐",
  "Esim;": "⩳",
  "esim;": "≂",
  "Eta;": "Η",
  "eta;": "η",
  "ETH;": "Ð",
  ETH: "Ð",
  "eth;": "ð",
  eth: "ð",
  "Euml;": "Ë",
  Euml: "Ë",
  "euml;": "ë",
  euml: "ë",
  "euro;": "€",
  "excl;": "!",
  "exist;": "∃",
  "Exists;": "∃",
  "expectation;": "ℰ",
  "ExponentialE;": "ⅇ",
  "exponentiale;": "ⅇ",
  "fallingdotseq;": "≒",
  "Fcy;": "Ф",
  "fcy;": "ф",
  "female;": "♀",
  "ffilig;": "ﬃ",
  "fflig;": "ﬀ",
  "ffllig;": "ﬄ",
  "Ffr;": "𝔉",
  "ffr;": "𝔣",
  "filig;": "ﬁ",
  "FilledSmallSquare;": "◼",
  "FilledVerySmallSquare;": "▪",
  "fjlig;": "fj",
  "flat;": "♭",
  "fllig;": "ﬂ",
  "fltns;": "▱",
  "fnof;": "ƒ",
  "Fopf;": "𝔽",
  "fopf;": "𝕗",
  "ForAll;": "∀",
  "forall;": "∀",
  "fork;": "⋔",
  "forkv;": "⫙",
  "Fouriertrf;": "ℱ",
  "fpartint;": "⨍",
  "frac12;": "½",
  frac12: "½",
  "frac13;": "⅓",
  "frac14;": "¼",
  frac14: "¼",
  "frac15;": "⅕",
  "frac16;": "⅙",
  "frac18;": "⅛",
  "frac23;": "⅔",
  "frac25;": "⅖",
  "frac34;": "¾",
  frac34: "¾",
  "frac35;": "⅗",
  "frac38;": "⅜",
  "frac45;": "⅘",
  "frac56;": "⅚",
  "frac58;": "⅝",
  "frac78;": "⅞",
  "frasl;": "⁄",
  "frown;": "⌢",
  "Fscr;": "ℱ",
  "fscr;": "𝒻",
  "gacute;": "ǵ",
  "Gamma;": "Γ",
  "gamma;": "γ",
  "Gammad;": "Ϝ",
  "gammad;": "ϝ",
  "gap;": "⪆",
  "Gbreve;": "Ğ",
  "gbreve;": "ğ",
  "Gcedil;": "Ģ",
  "Gcirc;": "Ĝ",
  "gcirc;": "ĝ",
  "Gcy;": "Г",
  "gcy;": "г",
  "Gdot;": "Ġ",
  "gdot;": "ġ",
  "gE;": "≧",
  "ge;": "≥",
  "gEl;": "⪌",
  "gel;": "⋛",
  "geq;": "≥",
  "geqq;": "≧",
  "geqslant;": "⩾",
  "ges;": "⩾",
  "gescc;": "⪩",
  "gesdot;": "⪀",
  "gesdoto;": "⪂",
  "gesdotol;": "⪄",
  "gesl;": "⋛︀",
  "gesles;": "⪔",
  "Gfr;": "𝔊",
  "gfr;": "𝔤",
  "Gg;": "⋙",
  "gg;": "≫",
  "ggg;": "⋙",
  "gimel;": "ℷ",
  "GJcy;": "Ѓ",
  "gjcy;": "ѓ",
  "gl;": "≷",
  "gla;": "⪥",
  "glE;": "⪒",
  "glj;": "⪤",
  "gnap;": "⪊",
  "gnapprox;": "⪊",
  "gnE;": "≩",
  "gne;": "⪈",
  "gneq;": "⪈",
  "gneqq;": "≩",
  "gnsim;": "⋧",
  "Gopf;": "𝔾",
  "gopf;": "𝕘",
  "grave;": "`",
  "GreaterEqual;": "≥",
  "GreaterEqualLess;": "⋛",
  "GreaterFullEqual;": "≧",
  "GreaterGreater;": "⪢",
  "GreaterLess;": "≷",
  "GreaterSlantEqual;": "⩾",
  "GreaterTilde;": "≳",
  "Gscr;": "𝒢",
  "gscr;": "ℊ",
  "gsim;": "≳",
  "gsime;": "⪎",
  "gsiml;": "⪐",
  "GT;": ">",
  GT: ">",
  "Gt;": "≫",
  "gt;": ">",
  gt: ">",
  "gtcc;": "⪧",
  "gtcir;": "⩺",
  "gtdot;": "⋗",
  "gtlPar;": "⦕",
  "gtquest;": "⩼",
  "gtrapprox;": "⪆",
  "gtrarr;": "⥸",
  "gtrdot;": "⋗",
  "gtreqless;": "⋛",
  "gtreqqless;": "⪌",
  "gtrless;": "≷",
  "gtrsim;": "≳",
  "gvertneqq;": "≩︀",
  "gvnE;": "≩︀",
  "Hacek;": "ˇ",
  "hairsp;": " ",
  "half;": "½",
  "hamilt;": "ℋ",
  "HARDcy;": "Ъ",
  "hardcy;": "ъ",
  "hArr;": "⇔",
  "harr;": "↔",
  "harrcir;": "⥈",
  "harrw;": "↭",
  "Hat;": "^",
  "hbar;": "ℏ",
  "Hcirc;": "Ĥ",
  "hcirc;": "ĥ",
  "hearts;": "♥",
  "heartsuit;": "♥",
  "hellip;": "…",
  "hercon;": "⊹",
  "Hfr;": "ℌ",
  "hfr;": "𝔥",
  "HilbertSpace;": "ℋ",
  "hksearow;": "⤥",
  "hkswarow;": "⤦",
  "hoarr;": "⇿",
  "homtht;": "∻",
  "hookleftarrow;": "↩",
  "hookrightarrow;": "↪",
  "Hopf;": "ℍ",
  "hopf;": "𝕙",
  "horbar;": "―",
  "HorizontalLine;": "─",
  "Hscr;": "ℋ",
  "hscr;": "𝒽",
  "hslash;": "ℏ",
  "Hstrok;": "Ħ",
  "hstrok;": "ħ",
  "HumpDownHump;": "≎",
  "HumpEqual;": "≏",
  "hybull;": "⁃",
  "hyphen;": "‐",
  "Iacute;": "Í",
  Iacute: "Í",
  "iacute;": "í",
  iacute: "í",
  "ic;": "⁣",
  "Icirc;": "Î",
  Icirc: "Î",
  "icirc;": "î",
  icirc: "î",
  "Icy;": "И",
  "icy;": "и",
  "Idot;": "İ",
  "IEcy;": "Е",
  "iecy;": "е",
  "iexcl;": "¡",
  iexcl: "¡",
  "iff;": "⇔",
  "Ifr;": "ℑ",
  "ifr;": "𝔦",
  "Igrave;": "Ì",
  Igrave: "Ì",
  "igrave;": "ì",
  igrave: "ì",
  "ii;": "ⅈ",
  "iiiint;": "⨌",
  "iiint;": "∭",
  "iinfin;": "⧜",
  "iiota;": "℩",
  "IJlig;": "Ĳ",
  "ijlig;": "ĳ",
  "Im;": "ℑ",
  "Imacr;": "Ī",
  "imacr;": "ī",
  "image;": "ℑ",
  "ImaginaryI;": "ⅈ",
  "imagline;": "ℐ",
  "imagpart;": "ℑ",
  "imath;": "ı",
  "imof;": "⊷",
  "imped;": "Ƶ",
  "Implies;": "⇒",
  "in;": "∈",
  "incare;": "℅",
  "infin;": "∞",
  "infintie;": "⧝",
  "inodot;": "ı",
  "Int;": "∬",
  "int;": "∫",
  "intcal;": "⊺",
  "integers;": "ℤ",
  "Integral;": "∫",
  "intercal;": "⊺",
  "Intersection;": "⋂",
  "intlarhk;": "⨗",
  "intprod;": "⨼",
  "InvisibleComma;": "⁣",
  "InvisibleTimes;": "⁢",
  "IOcy;": "Ё",
  "iocy;": "ё",
  "Iogon;": "Į",
  "iogon;": "į",
  "Iopf;": "𝕀",
  "iopf;": "𝕚",
  "Iota;": "Ι",
  "iota;": "ι",
  "iprod;": "⨼",
  "iquest;": "¿",
  iquest: "¿",
  "Iscr;": "ℐ",
  "iscr;": "𝒾",
  "isin;": "∈",
  "isindot;": "⋵",
  "isinE;": "⋹",
  "isins;": "⋴",
  "isinsv;": "⋳",
  "isinv;": "∈",
  "it;": "⁢",
  "Itilde;": "Ĩ",
  "itilde;": "ĩ",
  "Iukcy;": "І",
  "iukcy;": "і",
  "Iuml;": "Ï",
  Iuml: "Ï",
  "iuml;": "ï",
  iuml: "ï",
  "Jcirc;": "Ĵ",
  "jcirc;": "ĵ",
  "Jcy;": "Й",
  "jcy;": "й",
  "Jfr;": "𝔍",
  "jfr;": "𝔧",
  "jmath;": "ȷ",
  "Jopf;": "𝕁",
  "jopf;": "𝕛",
  "Jscr;": "𝒥",
  "jscr;": "𝒿",
  "Jsercy;": "Ј",
  "jsercy;": "ј",
  "Jukcy;": "Є",
  "jukcy;": "є",
  "Kappa;": "Κ",
  "kappa;": "κ",
  "kappav;": "ϰ",
  "Kcedil;": "Ķ",
  "kcedil;": "ķ",
  "Kcy;": "К",
  "kcy;": "к",
  "Kfr;": "𝔎",
  "kfr;": "𝔨",
  "kgreen;": "ĸ",
  "KHcy;": "Х",
  "khcy;": "х",
  "KJcy;": "Ќ",
  "kjcy;": "ќ",
  "Kopf;": "𝕂",
  "kopf;": "𝕜",
  "Kscr;": "𝒦",
  "kscr;": "𝓀",
  "lAarr;": "⇚",
  "Lacute;": "Ĺ",
  "lacute;": "ĺ",
  "laemptyv;": "⦴",
  "lagran;": "ℒ",
  "Lambda;": "Λ",
  "lambda;": "λ",
  "Lang;": "⟪",
  "lang;": "⟨",
  "langd;": "⦑",
  "langle;": "⟨",
  "lap;": "⪅",
  "Laplacetrf;": "ℒ",
  "laquo;": "«",
  laquo: "«",
  "Larr;": "↞",
  "lArr;": "⇐",
  "larr;": "←",
  "larrb;": "⇤",
  "larrbfs;": "⤟",
  "larrfs;": "⤝",
  "larrhk;": "↩",
  "larrlp;": "↫",
  "larrpl;": "⤹",
  "larrsim;": "⥳",
  "larrtl;": "↢",
  "lat;": "⪫",
  "lAtail;": "⤛",
  "latail;": "⤙",
  "late;": "⪭",
  "lates;": "⪭︀",
  "lBarr;": "⤎",
  "lbarr;": "⤌",
  "lbbrk;": "❲",
  "lbrace;": "{",
  "lbrack;": "[",
  "lbrke;": "⦋",
  "lbrksld;": "⦏",
  "lbrkslu;": "⦍",
  "Lcaron;": "Ľ",
  "lcaron;": "ľ",
  "Lcedil;": "Ļ",
  "lcedil;": "ļ",
  "lceil;": "⌈",
  "lcub;": "{",
  "Lcy;": "Л",
  "lcy;": "л",
  "ldca;": "⤶",
  "ldquo;": "“",
  "ldquor;": "„",
  "ldrdhar;": "⥧",
  "ldrushar;": "⥋",
  "ldsh;": "↲",
  "lE;": "≦",
  "le;": "≤",
  "LeftAngleBracket;": "⟨",
  "LeftArrow;": "←",
  "Leftarrow;": "⇐",
  "leftarrow;": "←",
  "LeftArrowBar;": "⇤",
  "LeftArrowRightArrow;": "⇆",
  "leftarrowtail;": "↢",
  "LeftCeiling;": "⌈",
  "LeftDoubleBracket;": "⟦",
  "LeftDownTeeVector;": "⥡",
  "LeftDownVector;": "⇃",
  "LeftDownVectorBar;": "⥙",
  "LeftFloor;": "⌊",
  "leftharpoondown;": "↽",
  "leftharpoonup;": "↼",
  "leftleftarrows;": "⇇",
  "LeftRightArrow;": "↔",
  "Leftrightarrow;": "⇔",
  "leftrightarrow;": "↔",
  "leftrightarrows;": "⇆",
  "leftrightharpoons;": "⇋",
  "leftrightsquigarrow;": "↭",
  "LeftRightVector;": "⥎",
  "LeftTee;": "⊣",
  "LeftTeeArrow;": "↤",
  "LeftTeeVector;": "⥚",
  "leftthreetimes;": "⋋",
  "LeftTriangle;": "⊲",
  "LeftTriangleBar;": "⧏",
  "LeftTriangleEqual;": "⊴",
  "LeftUpDownVector;": "⥑",
  "LeftUpTeeVector;": "⥠",
  "LeftUpVector;": "↿",
  "LeftUpVectorBar;": "⥘",
  "LeftVector;": "↼",
  "LeftVectorBar;": "⥒",
  "lEg;": "⪋",
  "leg;": "⋚",
  "leq;": "≤",
  "leqq;": "≦",
  "leqslant;": "⩽",
  "les;": "⩽",
  "lescc;": "⪨",
  "lesdot;": "⩿",
  "lesdoto;": "⪁",
  "lesdotor;": "⪃",
  "lesg;": "⋚︀",
  "lesges;": "⪓",
  "lessapprox;": "⪅",
  "lessdot;": "⋖",
  "lesseqgtr;": "⋚",
  "lesseqqgtr;": "⪋",
  "LessEqualGreater;": "⋚",
  "LessFullEqual;": "≦",
  "LessGreater;": "≶",
  "lessgtr;": "≶",
  "LessLess;": "⪡",
  "lesssim;": "≲",
  "LessSlantEqual;": "⩽",
  "LessTilde;": "≲",
  "lfisht;": "⥼",
  "lfloor;": "⌊",
  "Lfr;": "𝔏",
  "lfr;": "𝔩",
  "lg;": "≶",
  "lgE;": "⪑",
  "lHar;": "⥢",
  "lhard;": "↽",
  "lharu;": "↼",
  "lharul;": "⥪",
  "lhblk;": "▄",
  "LJcy;": "Љ",
  "ljcy;": "љ",
  "Ll;": "⋘",
  "ll;": "≪",
  "llarr;": "⇇",
  "llcorner;": "⌞",
  "Lleftarrow;": "⇚",
  "llhard;": "⥫",
  "lltri;": "◺",
  "Lmidot;": "Ŀ",
  "lmidot;": "ŀ",
  "lmoust;": "⎰",
  "lmoustache;": "⎰",
  "lnap;": "⪉",
  "lnapprox;": "⪉",
  "lnE;": "≨",
  "lne;": "⪇",
  "lneq;": "⪇",
  "lneqq;": "≨",
  "lnsim;": "⋦",
  "loang;": "⟬",
  "loarr;": "⇽",
  "lobrk;": "⟦",
  "LongLeftArrow;": "⟵",
  "Longleftarrow;": "⟸",
  "longleftarrow;": "⟵",
  "LongLeftRightArrow;": "⟷",
  "Longleftrightarrow;": "⟺",
  "longleftrightarrow;": "⟷",
  "longmapsto;": "⟼",
  "LongRightArrow;": "⟶",
  "Longrightarrow;": "⟹",
  "longrightarrow;": "⟶",
  "looparrowleft;": "↫",
  "looparrowright;": "↬",
  "lopar;": "⦅",
  "Lopf;": "𝕃",
  "lopf;": "𝕝",
  "loplus;": "⨭",
  "lotimes;": "⨴",
  "lowast;": "∗",
  "lowbar;": "_",
  "LowerLeftArrow;": "↙",
  "LowerRightArrow;": "↘",
  "loz;": "◊",
  "lozenge;": "◊",
  "lozf;": "⧫",
  "lpar;": "(",
  "lparlt;": "⦓",
  "lrarr;": "⇆",
  "lrcorner;": "⌟",
  "lrhar;": "⇋",
  "lrhard;": "⥭",
  "lrm;": "‎",
  "lrtri;": "⊿",
  "lsaquo;": "‹",
  "Lscr;": "ℒ",
  "lscr;": "𝓁",
  "Lsh;": "↰",
  "lsh;": "↰",
  "lsim;": "≲",
  "lsime;": "⪍",
  "lsimg;": "⪏",
  "lsqb;": "[",
  "lsquo;": "‘",
  "lsquor;": "‚",
  "Lstrok;": "Ł",
  "lstrok;": "ł",
  "LT;": "<",
  LT: "<",
  "Lt;": "≪",
  "lt;": "<",
  lt: "<",
  "ltcc;": "⪦",
  "ltcir;": "⩹",
  "ltdot;": "⋖",
  "lthree;": "⋋",
  "ltimes;": "⋉",
  "ltlarr;": "⥶",
  "ltquest;": "⩻",
  "ltri;": "◃",
  "ltrie;": "⊴",
  "ltrif;": "◂",
  "ltrPar;": "⦖",
  "lurdshar;": "⥊",
  "luruhar;": "⥦",
  "lvertneqq;": "≨︀",
  "lvnE;": "≨︀",
  "macr;": "¯",
  macr: "¯",
  "male;": "♂",
  "malt;": "✠",
  "maltese;": "✠",
  "Map;": "⤅",
  "map;": "↦",
  "mapsto;": "↦",
  "mapstodown;": "↧",
  "mapstoleft;": "↤",
  "mapstoup;": "↥",
  "marker;": "▮",
  "mcomma;": "⨩",
  "Mcy;": "М",
  "mcy;": "м",
  "mdash;": "—",
  "mDDot;": "∺",
  "measuredangle;": "∡",
  "MediumSpace;": " ",
  "Mellintrf;": "ℳ",
  "Mfr;": "𝔐",
  "mfr;": "𝔪",
  "mho;": "℧",
  "micro;": "µ",
  micro: "µ",
  "mid;": "∣",
  "midast;": "*",
  "midcir;": "⫰",
  "middot;": "·",
  middot: "·",
  "minus;": "−",
  "minusb;": "⊟",
  "minusd;": "∸",
  "minusdu;": "⨪",
  "MinusPlus;": "∓",
  "mlcp;": "⫛",
  "mldr;": "…",
  "mnplus;": "∓",
  "models;": "⊧",
  "Mopf;": "𝕄",
  "mopf;": "𝕞",
  "mp;": "∓",
  "Mscr;": "ℳ",
  "mscr;": "𝓂",
  "mstpos;": "∾",
  "Mu;": "Μ",
  "mu;": "μ",
  "multimap;": "⊸",
  "mumap;": "⊸",
  "nabla;": "∇",
  "Nacute;": "Ń",
  "nacute;": "ń",
  "nang;": "∠⃒",
  "nap;": "≉",
  "napE;": "⩰̸",
  "napid;": "≋̸",
  "napos;": "ŉ",
  "napprox;": "≉",
  "natur;": "♮",
  "natural;": "♮",
  "naturals;": "ℕ",
  "nbsp;": " ",
  nbsp: " ",
  "nbump;": "≎̸",
  "nbumpe;": "≏̸",
  "ncap;": "⩃",
  "Ncaron;": "Ň",
  "ncaron;": "ň",
  "Ncedil;": "Ņ",
  "ncedil;": "ņ",
  "ncong;": "≇",
  "ncongdot;": "⩭̸",
  "ncup;": "⩂",
  "Ncy;": "Н",
  "ncy;": "н",
  "ndash;": "–",
  "ne;": "≠",
  "nearhk;": "⤤",
  "neArr;": "⇗",
  "nearr;": "↗",
  "nearrow;": "↗",
  "nedot;": "≐̸",
  "NegativeMediumSpace;": "​",
  "NegativeThickSpace;": "​",
  "NegativeThinSpace;": "​",
  "NegativeVeryThinSpace;": "​",
  "nequiv;": "≢",
  "nesear;": "⤨",
  "nesim;": "≂̸",
  "NestedGreaterGreater;": "≫",
  "NestedLessLess;": "≪",
  "NewLine;": `
`,
  "nexist;": "∄",
  "nexists;": "∄",
  "Nfr;": "𝔑",
  "nfr;": "𝔫",
  "ngE;": "≧̸",
  "nge;": "≱",
  "ngeq;": "≱",
  "ngeqq;": "≧̸",
  "ngeqslant;": "⩾̸",
  "nges;": "⩾̸",
  "nGg;": "⋙̸",
  "ngsim;": "≵",
  "nGt;": "≫⃒",
  "ngt;": "≯",
  "ngtr;": "≯",
  "nGtv;": "≫̸",
  "nhArr;": "⇎",
  "nharr;": "↮",
  "nhpar;": "⫲",
  "ni;": "∋",
  "nis;": "⋼",
  "nisd;": "⋺",
  "niv;": "∋",
  "NJcy;": "Њ",
  "njcy;": "њ",
  "nlArr;": "⇍",
  "nlarr;": "↚",
  "nldr;": "‥",
  "nlE;": "≦̸",
  "nle;": "≰",
  "nLeftarrow;": "⇍",
  "nleftarrow;": "↚",
  "nLeftrightarrow;": "⇎",
  "nleftrightarrow;": "↮",
  "nleq;": "≰",
  "nleqq;": "≦̸",
  "nleqslant;": "⩽̸",
  "nles;": "⩽̸",
  "nless;": "≮",
  "nLl;": "⋘̸",
  "nlsim;": "≴",
  "nLt;": "≪⃒",
  "nlt;": "≮",
  "nltri;": "⋪",
  "nltrie;": "⋬",
  "nLtv;": "≪̸",
  "nmid;": "∤",
  "NoBreak;": "⁠",
  "NonBreakingSpace;": " ",
  "Nopf;": "ℕ",
  "nopf;": "𝕟",
  "Not;": "⫬",
  "not;": "¬",
  not: "¬",
  "NotCongruent;": "≢",
  "NotCupCap;": "≭",
  "NotDoubleVerticalBar;": "∦",
  "NotElement;": "∉",
  "NotEqual;": "≠",
  "NotEqualTilde;": "≂̸",
  "NotExists;": "∄",
  "NotGreater;": "≯",
  "NotGreaterEqual;": "≱",
  "NotGreaterFullEqual;": "≧̸",
  "NotGreaterGreater;": "≫̸",
  "NotGreaterLess;": "≹",
  "NotGreaterSlantEqual;": "⩾̸",
  "NotGreaterTilde;": "≵",
  "NotHumpDownHump;": "≎̸",
  "NotHumpEqual;": "≏̸",
  "notin;": "∉",
  "notindot;": "⋵̸",
  "notinE;": "⋹̸",
  "notinva;": "∉",
  "notinvb;": "⋷",
  "notinvc;": "⋶",
  "NotLeftTriangle;": "⋪",
  "NotLeftTriangleBar;": "⧏̸",
  "NotLeftTriangleEqual;": "⋬",
  "NotLess;": "≮",
  "NotLessEqual;": "≰",
  "NotLessGreater;": "≸",
  "NotLessLess;": "≪̸",
  "NotLessSlantEqual;": "⩽̸",
  "NotLessTilde;": "≴",
  "NotNestedGreaterGreater;": "⪢̸",
  "NotNestedLessLess;": "⪡̸",
  "notni;": "∌",
  "notniva;": "∌",
  "notnivb;": "⋾",
  "notnivc;": "⋽",
  "NotPrecedes;": "⊀",
  "NotPrecedesEqual;": "⪯̸",
  "NotPrecedesSlantEqual;": "⋠",
  "NotReverseElement;": "∌",
  "NotRightTriangle;": "⋫",
  "NotRightTriangleBar;": "⧐̸",
  "NotRightTriangleEqual;": "⋭",
  "NotSquareSubset;": "⊏̸",
  "NotSquareSubsetEqual;": "⋢",
  "NotSquareSuperset;": "⊐̸",
  "NotSquareSupersetEqual;": "⋣",
  "NotSubset;": "⊂⃒",
  "NotSubsetEqual;": "⊈",
  "NotSucceeds;": "⊁",
  "NotSucceedsEqual;": "⪰̸",
  "NotSucceedsSlantEqual;": "⋡",
  "NotSucceedsTilde;": "≿̸",
  "NotSuperset;": "⊃⃒",
  "NotSupersetEqual;": "⊉",
  "NotTilde;": "≁",
  "NotTildeEqual;": "≄",
  "NotTildeFullEqual;": "≇",
  "NotTildeTilde;": "≉",
  "NotVerticalBar;": "∤",
  "npar;": "∦",
  "nparallel;": "∦",
  "nparsl;": "⫽⃥",
  "npart;": "∂̸",
  "npolint;": "⨔",
  "npr;": "⊀",
  "nprcue;": "⋠",
  "npre;": "⪯̸",
  "nprec;": "⊀",
  "npreceq;": "⪯̸",
  "nrArr;": "⇏",
  "nrarr;": "↛",
  "nrarrc;": "⤳̸",
  "nrarrw;": "↝̸",
  "nRightarrow;": "⇏",
  "nrightarrow;": "↛",
  "nrtri;": "⋫",
  "nrtrie;": "⋭",
  "nsc;": "⊁",
  "nsccue;": "⋡",
  "nsce;": "⪰̸",
  "Nscr;": "𝒩",
  "nscr;": "𝓃",
  "nshortmid;": "∤",
  "nshortparallel;": "∦",
  "nsim;": "≁",
  "nsime;": "≄",
  "nsimeq;": "≄",
  "nsmid;": "∤",
  "nspar;": "∦",
  "nsqsube;": "⋢",
  "nsqsupe;": "⋣",
  "nsub;": "⊄",
  "nsubE;": "⫅̸",
  "nsube;": "⊈",
  "nsubset;": "⊂⃒",
  "nsubseteq;": "⊈",
  "nsubseteqq;": "⫅̸",
  "nsucc;": "⊁",
  "nsucceq;": "⪰̸",
  "nsup;": "⊅",
  "nsupE;": "⫆̸",
  "nsupe;": "⊉",
  "nsupset;": "⊃⃒",
  "nsupseteq;": "⊉",
  "nsupseteqq;": "⫆̸",
  "ntgl;": "≹",
  "Ntilde;": "Ñ",
  Ntilde: "Ñ",
  "ntilde;": "ñ",
  ntilde: "ñ",
  "ntlg;": "≸",
  "ntriangleleft;": "⋪",
  "ntrianglelefteq;": "⋬",
  "ntriangleright;": "⋫",
  "ntrianglerighteq;": "⋭",
  "Nu;": "Ν",
  "nu;": "ν",
  "num;": "#",
  "numero;": "№",
  "numsp;": " ",
  "nvap;": "≍⃒",
  "nVDash;": "⊯",
  "nVdash;": "⊮",
  "nvDash;": "⊭",
  "nvdash;": "⊬",
  "nvge;": "≥⃒",
  "nvgt;": ">⃒",
  "nvHarr;": "⤄",
  "nvinfin;": "⧞",
  "nvlArr;": "⤂",
  "nvle;": "≤⃒",
  "nvlt;": "<⃒",
  "nvltrie;": "⊴⃒",
  "nvrArr;": "⤃",
  "nvrtrie;": "⊵⃒",
  "nvsim;": "∼⃒",
  "nwarhk;": "⤣",
  "nwArr;": "⇖",
  "nwarr;": "↖",
  "nwarrow;": "↖",
  "nwnear;": "⤧",
  "Oacute;": "Ó",
  Oacute: "Ó",
  "oacute;": "ó",
  oacute: "ó",
  "oast;": "⊛",
  "ocir;": "⊚",
  "Ocirc;": "Ô",
  Ocirc: "Ô",
  "ocirc;": "ô",
  ocirc: "ô",
  "Ocy;": "О",
  "ocy;": "о",
  "odash;": "⊝",
  "Odblac;": "Ő",
  "odblac;": "ő",
  "odiv;": "⨸",
  "odot;": "⊙",
  "odsold;": "⦼",
  "OElig;": "Œ",
  "oelig;": "œ",
  "ofcir;": "⦿",
  "Ofr;": "𝔒",
  "ofr;": "𝔬",
  "ogon;": "˛",
  "Ograve;": "Ò",
  Ograve: "Ò",
  "ograve;": "ò",
  ograve: "ò",
  "ogt;": "⧁",
  "ohbar;": "⦵",
  "ohm;": "Ω",
  "oint;": "∮",
  "olarr;": "↺",
  "olcir;": "⦾",
  "olcross;": "⦻",
  "oline;": "‾",
  "olt;": "⧀",
  "Omacr;": "Ō",
  "omacr;": "ō",
  "Omega;": "Ω",
  "omega;": "ω",
  "Omicron;": "Ο",
  "omicron;": "ο",
  "omid;": "⦶",
  "ominus;": "⊖",
  "Oopf;": "𝕆",
  "oopf;": "𝕠",
  "opar;": "⦷",
  "OpenCurlyDoubleQuote;": "“",
  "OpenCurlyQuote;": "‘",
  "operp;": "⦹",
  "oplus;": "⊕",
  "Or;": "⩔",
  "or;": "∨",
  "orarr;": "↻",
  "ord;": "⩝",
  "order;": "ℴ",
  "orderof;": "ℴ",
  "ordf;": "ª",
  ordf: "ª",
  "ordm;": "º",
  ordm: "º",
  "origof;": "⊶",
  "oror;": "⩖",
  "orslope;": "⩗",
  "orv;": "⩛",
  "oS;": "Ⓢ",
  "Oscr;": "𝒪",
  "oscr;": "ℴ",
  "Oslash;": "Ø",
  Oslash: "Ø",
  "oslash;": "ø",
  oslash: "ø",
  "osol;": "⊘",
  "Otilde;": "Õ",
  Otilde: "Õ",
  "otilde;": "õ",
  otilde: "õ",
  "Otimes;": "⨷",
  "otimes;": "⊗",
  "otimesas;": "⨶",
  "Ouml;": "Ö",
  Ouml: "Ö",
  "ouml;": "ö",
  ouml: "ö",
  "ovbar;": "⌽",
  "OverBar;": "‾",
  "OverBrace;": "⏞",
  "OverBracket;": "⎴",
  "OverParenthesis;": "⏜",
  "par;": "∥",
  "para;": "¶",
  para: "¶",
  "parallel;": "∥",
  "parsim;": "⫳",
  "parsl;": "⫽",
  "part;": "∂",
  "PartialD;": "∂",
  "Pcy;": "П",
  "pcy;": "п",
  "percnt;": "%",
  "period;": ".",
  "permil;": "‰",
  "perp;": "⊥",
  "pertenk;": "‱",
  "Pfr;": "𝔓",
  "pfr;": "𝔭",
  "Phi;": "Φ",
  "phi;": "φ",
  "phiv;": "ϕ",
  "phmmat;": "ℳ",
  "phone;": "☎",
  "Pi;": "Π",
  "pi;": "π",
  "pitchfork;": "⋔",
  "piv;": "ϖ",
  "planck;": "ℏ",
  "planckh;": "ℎ",
  "plankv;": "ℏ",
  "plus;": "+",
  "plusacir;": "⨣",
  "plusb;": "⊞",
  "pluscir;": "⨢",
  "plusdo;": "∔",
  "plusdu;": "⨥",
  "pluse;": "⩲",
  "PlusMinus;": "±",
  "plusmn;": "±",
  plusmn: "±",
  "plussim;": "⨦",
  "plustwo;": "⨧",
  "pm;": "±",
  "Poincareplane;": "ℌ",
  "pointint;": "⨕",
  "Popf;": "ℙ",
  "popf;": "𝕡",
  "pound;": "£",
  pound: "£",
  "Pr;": "⪻",
  "pr;": "≺",
  "prap;": "⪷",
  "prcue;": "≼",
  "prE;": "⪳",
  "pre;": "⪯",
  "prec;": "≺",
  "precapprox;": "⪷",
  "preccurlyeq;": "≼",
  "Precedes;": "≺",
  "PrecedesEqual;": "⪯",
  "PrecedesSlantEqual;": "≼",
  "PrecedesTilde;": "≾",
  "preceq;": "⪯",
  "precnapprox;": "⪹",
  "precneqq;": "⪵",
  "precnsim;": "⋨",
  "precsim;": "≾",
  "Prime;": "″",
  "prime;": "′",
  "primes;": "ℙ",
  "prnap;": "⪹",
  "prnE;": "⪵",
  "prnsim;": "⋨",
  "prod;": "∏",
  "Product;": "∏",
  "profalar;": "⌮",
  "profline;": "⌒",
  "profsurf;": "⌓",
  "prop;": "∝",
  "Proportion;": "∷",
  "Proportional;": "∝",
  "propto;": "∝",
  "prsim;": "≾",
  "prurel;": "⊰",
  "Pscr;": "𝒫",
  "pscr;": "𝓅",
  "Psi;": "Ψ",
  "psi;": "ψ",
  "puncsp;": " ",
  "Qfr;": "𝔔",
  "qfr;": "𝔮",
  "qint;": "⨌",
  "Qopf;": "ℚ",
  "qopf;": "𝕢",
  "qprime;": "⁗",
  "Qscr;": "𝒬",
  "qscr;": "𝓆",
  "quaternions;": "ℍ",
  "quatint;": "⨖",
  "quest;": "?",
  "questeq;": "≟",
  "QUOT;": '"',
  QUOT: '"',
  "quot;": '"',
  quot: '"',
  "rAarr;": "⇛",
  "race;": "∽̱",
  "Racute;": "Ŕ",
  "racute;": "ŕ",
  "radic;": "√",
  "raemptyv;": "⦳",
  "Rang;": "⟫",
  "rang;": "⟩",
  "rangd;": "⦒",
  "range;": "⦥",
  "rangle;": "⟩",
  "raquo;": "»",
  raquo: "»",
  "Rarr;": "↠",
  "rArr;": "⇒",
  "rarr;": "→",
  "rarrap;": "⥵",
  "rarrb;": "⇥",
  "rarrbfs;": "⤠",
  "rarrc;": "⤳",
  "rarrfs;": "⤞",
  "rarrhk;": "↪",
  "rarrlp;": "↬",
  "rarrpl;": "⥅",
  "rarrsim;": "⥴",
  "Rarrtl;": "⤖",
  "rarrtl;": "↣",
  "rarrw;": "↝",
  "rAtail;": "⤜",
  "ratail;": "⤚",
  "ratio;": "∶",
  "rationals;": "ℚ",
  "RBarr;": "⤐",
  "rBarr;": "⤏",
  "rbarr;": "⤍",
  "rbbrk;": "❳",
  "rbrace;": "}",
  "rbrack;": "]",
  "rbrke;": "⦌",
  "rbrksld;": "⦎",
  "rbrkslu;": "⦐",
  "Rcaron;": "Ř",
  "rcaron;": "ř",
  "Rcedil;": "Ŗ",
  "rcedil;": "ŗ",
  "rceil;": "⌉",
  "rcub;": "}",
  "Rcy;": "Р",
  "rcy;": "р",
  "rdca;": "⤷",
  "rdldhar;": "⥩",
  "rdquo;": "”",
  "rdquor;": "”",
  "rdsh;": "↳",
  "Re;": "ℜ",
  "real;": "ℜ",
  "realine;": "ℛ",
  "realpart;": "ℜ",
  "reals;": "ℝ",
  "rect;": "▭",
  "REG;": "®",
  REG: "®",
  "reg;": "®",
  reg: "®",
  "ReverseElement;": "∋",
  "ReverseEquilibrium;": "⇋",
  "ReverseUpEquilibrium;": "⥯",
  "rfisht;": "⥽",
  "rfloor;": "⌋",
  "Rfr;": "ℜ",
  "rfr;": "𝔯",
  "rHar;": "⥤",
  "rhard;": "⇁",
  "rharu;": "⇀",
  "rharul;": "⥬",
  "Rho;": "Ρ",
  "rho;": "ρ",
  "rhov;": "ϱ",
  "RightAngleBracket;": "⟩",
  "RightArrow;": "→",
  "Rightarrow;": "⇒",
  "rightarrow;": "→",
  "RightArrowBar;": "⇥",
  "RightArrowLeftArrow;": "⇄",
  "rightarrowtail;": "↣",
  "RightCeiling;": "⌉",
  "RightDoubleBracket;": "⟧",
  "RightDownTeeVector;": "⥝",
  "RightDownVector;": "⇂",
  "RightDownVectorBar;": "⥕",
  "RightFloor;": "⌋",
  "rightharpoondown;": "⇁",
  "rightharpoonup;": "⇀",
  "rightleftarrows;": "⇄",
  "rightleftharpoons;": "⇌",
  "rightrightarrows;": "⇉",
  "rightsquigarrow;": "↝",
  "RightTee;": "⊢",
  "RightTeeArrow;": "↦",
  "RightTeeVector;": "⥛",
  "rightthreetimes;": "⋌",
  "RightTriangle;": "⊳",
  "RightTriangleBar;": "⧐",
  "RightTriangleEqual;": "⊵",
  "RightUpDownVector;": "⥏",
  "RightUpTeeVector;": "⥜",
  "RightUpVector;": "↾",
  "RightUpVectorBar;": "⥔",
  "RightVector;": "⇀",
  "RightVectorBar;": "⥓",
  "ring;": "˚",
  "risingdotseq;": "≓",
  "rlarr;": "⇄",
  "rlhar;": "⇌",
  "rlm;": "‏",
  "rmoust;": "⎱",
  "rmoustache;": "⎱",
  "rnmid;": "⫮",
  "roang;": "⟭",
  "roarr;": "⇾",
  "robrk;": "⟧",
  "ropar;": "⦆",
  "Ropf;": "ℝ",
  "ropf;": "𝕣",
  "roplus;": "⨮",
  "rotimes;": "⨵",
  "RoundImplies;": "⥰",
  "rpar;": ")",
  "rpargt;": "⦔",
  "rppolint;": "⨒",
  "rrarr;": "⇉",
  "Rrightarrow;": "⇛",
  "rsaquo;": "›",
  "Rscr;": "ℛ",
  "rscr;": "𝓇",
  "Rsh;": "↱",
  "rsh;": "↱",
  "rsqb;": "]",
  "rsquo;": "’",
  "rsquor;": "’",
  "rthree;": "⋌",
  "rtimes;": "⋊",
  "rtri;": "▹",
  "rtrie;": "⊵",
  "rtrif;": "▸",
  "rtriltri;": "⧎",
  "RuleDelayed;": "⧴",
  "ruluhar;": "⥨",
  "rx;": "℞",
  "Sacute;": "Ś",
  "sacute;": "ś",
  "sbquo;": "‚",
  "Sc;": "⪼",
  "sc;": "≻",
  "scap;": "⪸",
  "Scaron;": "Š",
  "scaron;": "š",
  "sccue;": "≽",
  "scE;": "⪴",
  "sce;": "⪰",
  "Scedil;": "Ş",
  "scedil;": "ş",
  "Scirc;": "Ŝ",
  "scirc;": "ŝ",
  "scnap;": "⪺",
  "scnE;": "⪶",
  "scnsim;": "⋩",
  "scpolint;": "⨓",
  "scsim;": "≿",
  "Scy;": "С",
  "scy;": "с",
  "sdot;": "⋅",
  "sdotb;": "⊡",
  "sdote;": "⩦",
  "searhk;": "⤥",
  "seArr;": "⇘",
  "searr;": "↘",
  "searrow;": "↘",
  "sect;": "§",
  sect: "§",
  "semi;": ";",
  "seswar;": "⤩",
  "setminus;": "∖",
  "setmn;": "∖",
  "sext;": "✶",
  "Sfr;": "𝔖",
  "sfr;": "𝔰",
  "sfrown;": "⌢",
  "sharp;": "♯",
  "SHCHcy;": "Щ",
  "shchcy;": "щ",
  "SHcy;": "Ш",
  "shcy;": "ш",
  "ShortDownArrow;": "↓",
  "ShortLeftArrow;": "←",
  "shortmid;": "∣",
  "shortparallel;": "∥",
  "ShortRightArrow;": "→",
  "ShortUpArrow;": "↑",
  "shy;": "­",
  shy: "­",
  "Sigma;": "Σ",
  "sigma;": "σ",
  "sigmaf;": "ς",
  "sigmav;": "ς",
  "sim;": "∼",
  "simdot;": "⩪",
  "sime;": "≃",
  "simeq;": "≃",
  "simg;": "⪞",
  "simgE;": "⪠",
  "siml;": "⪝",
  "simlE;": "⪟",
  "simne;": "≆",
  "simplus;": "⨤",
  "simrarr;": "⥲",
  "slarr;": "←",
  "SmallCircle;": "∘",
  "smallsetminus;": "∖",
  "smashp;": "⨳",
  "smeparsl;": "⧤",
  "smid;": "∣",
  "smile;": "⌣",
  "smt;": "⪪",
  "smte;": "⪬",
  "smtes;": "⪬︀",
  "SOFTcy;": "Ь",
  "softcy;": "ь",
  "sol;": "/",
  "solb;": "⧄",
  "solbar;": "⌿",
  "Sopf;": "𝕊",
  "sopf;": "𝕤",
  "spades;": "♠",
  "spadesuit;": "♠",
  "spar;": "∥",
  "sqcap;": "⊓",
  "sqcaps;": "⊓︀",
  "sqcup;": "⊔",
  "sqcups;": "⊔︀",
  "Sqrt;": "√",
  "sqsub;": "⊏",
  "sqsube;": "⊑",
  "sqsubset;": "⊏",
  "sqsubseteq;": "⊑",
  "sqsup;": "⊐",
  "sqsupe;": "⊒",
  "sqsupset;": "⊐",
  "sqsupseteq;": "⊒",
  "squ;": "□",
  "Square;": "□",
  "square;": "□",
  "SquareIntersection;": "⊓",
  "SquareSubset;": "⊏",
  "SquareSubsetEqual;": "⊑",
  "SquareSuperset;": "⊐",
  "SquareSupersetEqual;": "⊒",
  "SquareUnion;": "⊔",
  "squarf;": "▪",
  "squf;": "▪",
  "srarr;": "→",
  "Sscr;": "𝒮",
  "sscr;": "𝓈",
  "ssetmn;": "∖",
  "ssmile;": "⌣",
  "sstarf;": "⋆",
  "Star;": "⋆",
  "star;": "☆",
  "starf;": "★",
  "straightepsilon;": "ϵ",
  "straightphi;": "ϕ",
  "strns;": "¯",
  "Sub;": "⋐",
  "sub;": "⊂",
  "subdot;": "⪽",
  "subE;": "⫅",
  "sube;": "⊆",
  "subedot;": "⫃",
  "submult;": "⫁",
  "subnE;": "⫋",
  "subne;": "⊊",
  "subplus;": "⪿",
  "subrarr;": "⥹",
  "Subset;": "⋐",
  "subset;": "⊂",
  "subseteq;": "⊆",
  "subseteqq;": "⫅",
  "SubsetEqual;": "⊆",
  "subsetneq;": "⊊",
  "subsetneqq;": "⫋",
  "subsim;": "⫇",
  "subsub;": "⫕",
  "subsup;": "⫓",
  "succ;": "≻",
  "succapprox;": "⪸",
  "succcurlyeq;": "≽",
  "Succeeds;": "≻",
  "SucceedsEqual;": "⪰",
  "SucceedsSlantEqual;": "≽",
  "SucceedsTilde;": "≿",
  "succeq;": "⪰",
  "succnapprox;": "⪺",
  "succneqq;": "⪶",
  "succnsim;": "⋩",
  "succsim;": "≿",
  "SuchThat;": "∋",
  "Sum;": "∑",
  "sum;": "∑",
  "sung;": "♪",
  "Sup;": "⋑",
  "sup;": "⊃",
  "sup1;": "¹",
  sup1: "¹",
  "sup2;": "²",
  sup2: "²",
  "sup3;": "³",
  sup3: "³",
  "supdot;": "⪾",
  "supdsub;": "⫘",
  "supE;": "⫆",
  "supe;": "⊇",
  "supedot;": "⫄",
  "Superset;": "⊃",
  "SupersetEqual;": "⊇",
  "suphsol;": "⟉",
  "suphsub;": "⫗",
  "suplarr;": "⥻",
  "supmult;": "⫂",
  "supnE;": "⫌",
  "supne;": "⊋",
  "supplus;": "⫀",
  "Supset;": "⋑",
  "supset;": "⊃",
  "supseteq;": "⊇",
  "supseteqq;": "⫆",
  "supsetneq;": "⊋",
  "supsetneqq;": "⫌",
  "supsim;": "⫈",
  "supsub;": "⫔",
  "supsup;": "⫖",
  "swarhk;": "⤦",
  "swArr;": "⇙",
  "swarr;": "↙",
  "swarrow;": "↙",
  "swnwar;": "⤪",
  "szlig;": "ß",
  szlig: "ß",
  "Tab;": "	",
  "target;": "⌖",
  "Tau;": "Τ",
  "tau;": "τ",
  "tbrk;": "⎴",
  "Tcaron;": "Ť",
  "tcaron;": "ť",
  "Tcedil;": "Ţ",
  "tcedil;": "ţ",
  "Tcy;": "Т",
  "tcy;": "т",
  "tdot;": "⃛",
  "telrec;": "⌕",
  "Tfr;": "𝔗",
  "tfr;": "𝔱",
  "there4;": "∴",
  "Therefore;": "∴",
  "therefore;": "∴",
  "Theta;": "Θ",
  "theta;": "θ",
  "thetasym;": "ϑ",
  "thetav;": "ϑ",
  "thickapprox;": "≈",
  "thicksim;": "∼",
  "ThickSpace;": "  ",
  "thinsp;": " ",
  "ThinSpace;": " ",
  "thkap;": "≈",
  "thksim;": "∼",
  "THORN;": "Þ",
  THORN: "Þ",
  "thorn;": "þ",
  thorn: "þ",
  "Tilde;": "∼",
  "tilde;": "˜",
  "TildeEqual;": "≃",
  "TildeFullEqual;": "≅",
  "TildeTilde;": "≈",
  "times;": "×",
  times: "×",
  "timesb;": "⊠",
  "timesbar;": "⨱",
  "timesd;": "⨰",
  "tint;": "∭",
  "toea;": "⤨",
  "top;": "⊤",
  "topbot;": "⌶",
  "topcir;": "⫱",
  "Topf;": "𝕋",
  "topf;": "𝕥",
  "topfork;": "⫚",
  "tosa;": "⤩",
  "tprime;": "‴",
  "TRADE;": "™",
  "trade;": "™",
  "triangle;": "▵",
  "triangledown;": "▿",
  "triangleleft;": "◃",
  "trianglelefteq;": "⊴",
  "triangleq;": "≜",
  "triangleright;": "▹",
  "trianglerighteq;": "⊵",
  "tridot;": "◬",
  "trie;": "≜",
  "triminus;": "⨺",
  "TripleDot;": "⃛",
  "triplus;": "⨹",
  "trisb;": "⧍",
  "tritime;": "⨻",
  "trpezium;": "⏢",
  "Tscr;": "𝒯",
  "tscr;": "𝓉",
  "TScy;": "Ц",
  "tscy;": "ц",
  "TSHcy;": "Ћ",
  "tshcy;": "ћ",
  "Tstrok;": "Ŧ",
  "tstrok;": "ŧ",
  "twixt;": "≬",
  "twoheadleftarrow;": "↞",
  "twoheadrightarrow;": "↠",
  "Uacute;": "Ú",
  Uacute: "Ú",
  "uacute;": "ú",
  uacute: "ú",
  "Uarr;": "↟",
  "uArr;": "⇑",
  "uarr;": "↑",
  "Uarrocir;": "⥉",
  "Ubrcy;": "Ў",
  "ubrcy;": "ў",
  "Ubreve;": "Ŭ",
  "ubreve;": "ŭ",
  "Ucirc;": "Û",
  Ucirc: "Û",
  "ucirc;": "û",
  ucirc: "û",
  "Ucy;": "У",
  "ucy;": "у",
  "udarr;": "⇅",
  "Udblac;": "Ű",
  "udblac;": "ű",
  "udhar;": "⥮",
  "ufisht;": "⥾",
  "Ufr;": "𝔘",
  "ufr;": "𝔲",
  "Ugrave;": "Ù",
  Ugrave: "Ù",
  "ugrave;": "ù",
  ugrave: "ù",
  "uHar;": "⥣",
  "uharl;": "↿",
  "uharr;": "↾",
  "uhblk;": "▀",
  "ulcorn;": "⌜",
  "ulcorner;": "⌜",
  "ulcrop;": "⌏",
  "ultri;": "◸",
  "Umacr;": "Ū",
  "umacr;": "ū",
  "uml;": "¨",
  uml: "¨",
  "UnderBar;": "_",
  "UnderBrace;": "⏟",
  "UnderBracket;": "⎵",
  "UnderParenthesis;": "⏝",
  "Union;": "⋃",
  "UnionPlus;": "⊎",
  "Uogon;": "Ų",
  "uogon;": "ų",
  "Uopf;": "𝕌",
  "uopf;": "𝕦",
  "UpArrow;": "↑",
  "Uparrow;": "⇑",
  "uparrow;": "↑",
  "UpArrowBar;": "⤒",
  "UpArrowDownArrow;": "⇅",
  "UpDownArrow;": "↕",
  "Updownarrow;": "⇕",
  "updownarrow;": "↕",
  "UpEquilibrium;": "⥮",
  "upharpoonleft;": "↿",
  "upharpoonright;": "↾",
  "uplus;": "⊎",
  "UpperLeftArrow;": "↖",
  "UpperRightArrow;": "↗",
  "Upsi;": "ϒ",
  "upsi;": "υ",
  "upsih;": "ϒ",
  "Upsilon;": "Υ",
  "upsilon;": "υ",
  "UpTee;": "⊥",
  "UpTeeArrow;": "↥",
  "upuparrows;": "⇈",
  "urcorn;": "⌝",
  "urcorner;": "⌝",
  "urcrop;": "⌎",
  "Uring;": "Ů",
  "uring;": "ů",
  "urtri;": "◹",
  "Uscr;": "𝒰",
  "uscr;": "𝓊",
  "utdot;": "⋰",
  "Utilde;": "Ũ",
  "utilde;": "ũ",
  "utri;": "▵",
  "utrif;": "▴",
  "uuarr;": "⇈",
  "Uuml;": "Ü",
  Uuml: "Ü",
  "uuml;": "ü",
  uuml: "ü",
  "uwangle;": "⦧",
  "vangrt;": "⦜",
  "varepsilon;": "ϵ",
  "varkappa;": "ϰ",
  "varnothing;": "∅",
  "varphi;": "ϕ",
  "varpi;": "ϖ",
  "varpropto;": "∝",
  "vArr;": "⇕",
  "varr;": "↕",
  "varrho;": "ϱ",
  "varsigma;": "ς",
  "varsubsetneq;": "⊊︀",
  "varsubsetneqq;": "⫋︀",
  "varsupsetneq;": "⊋︀",
  "varsupsetneqq;": "⫌︀",
  "vartheta;": "ϑ",
  "vartriangleleft;": "⊲",
  "vartriangleright;": "⊳",
  "Vbar;": "⫫",
  "vBar;": "⫨",
  "vBarv;": "⫩",
  "Vcy;": "В",
  "vcy;": "в",
  "VDash;": "⊫",
  "Vdash;": "⊩",
  "vDash;": "⊨",
  "vdash;": "⊢",
  "Vdashl;": "⫦",
  "Vee;": "⋁",
  "vee;": "∨",
  "veebar;": "⊻",
  "veeeq;": "≚",
  "vellip;": "⋮",
  "Verbar;": "‖",
  "verbar;": "|",
  "Vert;": "‖",
  "vert;": "|",
  "VerticalBar;": "∣",
  "VerticalLine;": "|",
  "VerticalSeparator;": "❘",
  "VerticalTilde;": "≀",
  "VeryThinSpace;": " ",
  "Vfr;": "𝔙",
  "vfr;": "𝔳",
  "vltri;": "⊲",
  "vnsub;": "⊂⃒",
  "vnsup;": "⊃⃒",
  "Vopf;": "𝕍",
  "vopf;": "𝕧",
  "vprop;": "∝",
  "vrtri;": "⊳",
  "Vscr;": "𝒱",
  "vscr;": "𝓋",
  "vsubnE;": "⫋︀",
  "vsubne;": "⊊︀",
  "vsupnE;": "⫌︀",
  "vsupne;": "⊋︀",
  "Vvdash;": "⊪",
  "vzigzag;": "⦚",
  "Wcirc;": "Ŵ",
  "wcirc;": "ŵ",
  "wedbar;": "⩟",
  "Wedge;": "⋀",
  "wedge;": "∧",
  "wedgeq;": "≙",
  "weierp;": "℘",
  "Wfr;": "𝔚",
  "wfr;": "𝔴",
  "Wopf;": "𝕎",
  "wopf;": "𝕨",
  "wp;": "℘",
  "wr;": "≀",
  "wreath;": "≀",
  "Wscr;": "𝒲",
  "wscr;": "𝓌",
  "xcap;": "⋂",
  "xcirc;": "◯",
  "xcup;": "⋃",
  "xdtri;": "▽",
  "Xfr;": "𝔛",
  "xfr;": "𝔵",
  "xhArr;": "⟺",
  "xharr;": "⟷",
  "Xi;": "Ξ",
  "xi;": "ξ",
  "xlArr;": "⟸",
  "xlarr;": "⟵",
  "xmap;": "⟼",
  "xnis;": "⋻",
  "xodot;": "⨀",
  "Xopf;": "𝕏",
  "xopf;": "𝕩",
  "xoplus;": "⨁",
  "xotime;": "⨂",
  "xrArr;": "⟹",
  "xrarr;": "⟶",
  "Xscr;": "𝒳",
  "xscr;": "𝓍",
  "xsqcup;": "⨆",
  "xuplus;": "⨄",
  "xutri;": "△",
  "xvee;": "⋁",
  "xwedge;": "⋀",
  "Yacute;": "Ý",
  Yacute: "Ý",
  "yacute;": "ý",
  yacute: "ý",
  "YAcy;": "Я",
  "yacy;": "я",
  "Ycirc;": "Ŷ",
  "ycirc;": "ŷ",
  "Ycy;": "Ы",
  "ycy;": "ы",
  "yen;": "¥",
  yen: "¥",
  "Yfr;": "𝔜",
  "yfr;": "𝔶",
  "YIcy;": "Ї",
  "yicy;": "ї",
  "Yopf;": "𝕐",
  "yopf;": "𝕪",
  "Yscr;": "𝒴",
  "yscr;": "𝓎",
  "YUcy;": "Ю",
  "yucy;": "ю",
  "Yuml;": "Ÿ",
  "yuml;": "ÿ",
  yuml: "ÿ",
  "Zacute;": "Ź",
  "zacute;": "ź",
  "Zcaron;": "Ž",
  "zcaron;": "ž",
  "Zcy;": "З",
  "zcy;": "з",
  "Zdot;": "Ż",
  "zdot;": "ż",
  "zeetrf;": "ℨ",
  "ZeroWidthSpace;": "​",
  "Zeta;": "Ζ",
  "zeta;": "ζ",
  "Zfr;": "ℨ",
  "zfr;": "𝔷",
  "ZHcy;": "Ж",
  "zhcy;": "ж",
  "zigrarr;": "⇝",
  "Zopf;": "ℤ",
  "zopf;": "𝕫",
  "Zscr;": "𝒵",
  "zscr;": "𝓏",
  "zwj;": "‍",
  "zwnj;": "‌"
};
function gt(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function g1(e, t) {
  const n = e.length - t.length;
  return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : !1;
}
function Qo(e, t) {
  let n = "";
  for (; t > 0; )
    (t & 1) === 1 && (n += e), e += e, t = t >>> 1;
  return n;
}
var b1 = 97, _1 = 122, w1 = 65, v1 = 90, T1 = 48, y1 = 57;
function nn(e, t) {
  const n = e.charCodeAt(t);
  return b1 <= n && n <= _1 || w1 <= n && n <= v1 || T1 <= n && n <= y1;
}
function ri(e) {
  return typeof e < "u";
}
function A1(e) {
  if (e)
    return typeof e == "string" ? {
      kind: "markdown",
      value: e
    } : {
      kind: "markdown",
      value: e.value
    };
}
var Ol = class {
  isApplicable() {
    return !0;
  }
  /**
   * Currently, unversioned data uses the V1 implementation
   * In the future when the provider handles multiple versions of HTML custom data,
   * use the latest implementation for unversioned data
   */
  constructor(e, t) {
    this.id = e, this._tags = [], this._tagMap = {}, this._valueSetMap = {}, this._tags = t.tags || [], this._globalAttributes = t.globalAttributes || [], this._tags.forEach((n) => {
      this._tagMap[n.name.toLowerCase()] = n;
    }), t.valueSets && t.valueSets.forEach((n) => {
      this._valueSetMap[n.name] = n.values;
    });
  }
  getId() {
    return this.id;
  }
  provideTags() {
    return this._tags;
  }
  provideAttributes(e) {
    const t = [], n = (r) => {
      t.push(r);
    }, i = this._tagMap[e.toLowerCase()];
    return i && i.attributes.forEach(n), this._globalAttributes.forEach(n), t;
  }
  provideValues(e, t) {
    const n = [];
    t = t.toLowerCase();
    const i = (s) => {
      s.forEach((a) => {
        a.name.toLowerCase() === t && (a.values && a.values.forEach((l) => {
          n.push(l);
        }), a.valueSet && this._valueSetMap[a.valueSet] && this._valueSetMap[a.valueSet].forEach((l) => {
          n.push(l);
        }));
      });
    }, r = this._tagMap[e.toLowerCase()];
    return r && i(r.attributes), i(this._globalAttributes), n;
  }
};
function xt(e, t = {}, n) {
  const i = {
    kind: n ? "markdown" : "plaintext",
    value: ""
  };
  if (e.description && t.documentation !== !1) {
    const r = A1(e.description);
    r && (i.value += r.value);
  }
  if (e.references && e.references.length > 0 && t.references !== !1 && (i.value.length && (i.value += `

`), n ? i.value += e.references.map((r) => `[${r.name}](${r.url})`).join(" | ") : i.value += e.references.map((r) => `${r.name}: ${r.url}`).join(`
`)), i.value !== "")
    return i;
}
var x1 = class {
  constructor(e, t) {
    this.dataManager = e, this.readDirectory = t, this.atributeCompletions = [];
  }
  onHtmlAttributeValue(e) {
    this.dataManager.isPathAttribute(e.tag, e.attribute) && this.atributeCompletions.push(e);
  }
  async computeCompletions(e, t) {
    const n = { items: [], isIncomplete: !1 };
    for (const i of this.atributeCompletions) {
      const r = k1(e.getText(i.range));
      if (E1(r))
        if (r === "." || r === "..")
          n.isIncomplete = !0;
        else {
          const s = S1(i.value, r, i.range), a = await this.providePathSuggestions(i.value, s, e, t);
          for (const l of a)
            n.items.push(l);
        }
    }
    return n;
  }
  async providePathSuggestions(e, t, n, i) {
    const r = e.substring(0, e.lastIndexOf("/") + 1);
    let s = i.resolveReference(r || ".", n.uri);
    if (s)
      try {
        const a = [], l = await this.readDirectory(s);
        for (const [o, u] of l)
          o.charCodeAt(0) !== L1 && a.push(R1(o, u === pr.Directory, t));
        return a;
      } catch {
      }
    return [];
  }
}, L1 = 46;
function k1(e) {
  return gt(e, "'") || gt(e, '"') ? e.slice(1, -1) : e;
}
function E1(e) {
  return !(gt(e, "http") || gt(e, "https") || gt(e, "//"));
}
function S1(e, t, n) {
  let i;
  const r = e.lastIndexOf("/");
  if (r === -1)
    i = N1(n, 1, -1);
  else {
    const s = t.slice(r + 1), a = dn(n.end, -1 - s.length), l = s.indexOf(" ");
    let o;
    l !== -1 ? o = dn(a, l) : o = dn(n.end, -1), i = ne.create(a, o);
  }
  return i;
}
function R1(e, t, n) {
  return t ? (e = e + "/", {
    label: e,
    kind: Ne.Folder,
    textEdit: _e.replace(n, e),
    command: {
      title: "Suggest",
      command: "editor.action.triggerSuggest"
    }
  }) : {
    label: e,
    kind: Ne.File,
    textEdit: _e.replace(n, e)
  };
}
function dn(e, t) {
  return fe.create(e.line, e.character + t);
}
function N1(e, t, n) {
  const i = dn(e.start, t), r = dn(e.end, n);
  return ne.create(i, r);
}
var D1 = class {
  constructor(e, t) {
    this.lsOptions = e, this.dataManager = t, this.completionParticipants = [];
  }
  setCompletionParticipants(e) {
    this.completionParticipants = e || [];
  }
  async doComplete2(e, t, n, i, r) {
    if (!this.lsOptions.fileSystemProvider || !this.lsOptions.fileSystemProvider.readDirectory)
      return this.doComplete(e, t, n, r);
    const s = new x1(this.dataManager, this.lsOptions.fileSystemProvider.readDirectory), a = this.completionParticipants;
    this.completionParticipants = [s].concat(a);
    const l = this.doComplete(e, t, n, r);
    try {
      const o = await s.computeCompletions(e, i);
      return {
        isIncomplete: l.isIncomplete || o.isIncomplete,
        items: o.items.concat(l.items)
      };
    } finally {
      this.completionParticipants = a;
    }
  }
  doComplete(e, t, n, i) {
    const r = this._doComplete(e, t, n, i);
    return this.convertCompletionList(r);
  }
  _doComplete(e, t, n, i) {
    const r = {
      isIncomplete: !1,
      items: []
    }, s = this.completionParticipants, a = this.dataManager.getDataProviders().filter((y) => y.isApplicable(e.languageId) && (!i || i[y.getId()] !== !1)), l = this.dataManager.getVoidElements(a), o = this.doesSupportMarkdown(), u = e.getText(), c = e.offsetAt(t), h = n.findNodeBefore(c);
    if (!h)
      return r;
    const m = Fe(u, h.start);
    let p = "", _;
    function f(y, N = c) {
      return y > c && (y = c), { start: e.positionAt(y), end: e.positionAt(N) };
    }
    function L(y, N) {
      const P = f(y, N);
      return a.forEach((B) => {
        B.provideTags().forEach((G) => {
          r.items.push({
            label: G.name,
            kind: Ne.Property,
            documentation: xt(G, void 0, o),
            textEdit: _e.replace(P, G.name),
            insertTextFormat: Ce.PlainText
          });
        });
      }), r;
    }
    function A(y) {
      let N = y;
      for (; N > 0; ) {
        const P = u.charAt(N - 1);
        if (`
\r`.indexOf(P) >= 0)
          return u.substring(N, y);
        if (!si(P))
          return null;
        N--;
      }
      return u.substring(0, y);
    }
    function w(y, N, P = c) {
      const B = f(y, P), G = Jo(u, P, Q.WithinEndTag, z.EndTagClose) ? "" : ">";
      let q = h;
      for (N && (q = q.parent); q; ) {
        const V = q.tag;
        if (V && (!q.closed || q.endTagStart && q.endTagStart > c)) {
          const Z = {
            label: "/" + V,
            kind: Ne.Property,
            filterText: "/" + V,
            textEdit: _e.replace(B, "/" + V + G),
            insertTextFormat: Ce.PlainText
          }, se = A(q.start), ge = A(y - 1);
          if (se !== null && ge !== null && se !== ge) {
            const Ee = se + "</" + V + G;
            Z.textEdit = _e.replace(f(y - 1 - ge.length), Ee), Z.filterText = ge + "</" + V;
          }
          return r.items.push(Z), r;
        }
        q = q.parent;
      }
      return N || a.forEach((V) => {
        V.provideTags().forEach((Z) => {
          r.items.push({
            label: "/" + Z.name,
            kind: Ne.Property,
            documentation: xt(Z, void 0, o),
            filterText: "/" + Z.name + G,
            textEdit: _e.replace(B, "/" + Z.name + G),
            insertTextFormat: Ce.PlainText
          });
        });
      }), r;
    }
    const k = (y, N) => {
      if (i && i.hideAutoCompleteProposals)
        return r;
      if (!this.dataManager.isVoidElement(N, l)) {
        const P = e.positionAt(y);
        r.items.push({
          label: "</" + N + ">",
          kind: Ne.Property,
          filterText: "</" + N + ">",
          textEdit: _e.insert(P, "$0</" + N + ">"),
          insertTextFormat: Ce.Snippet
        });
      }
      return r;
    };
    function H(y, N) {
      return L(y, N), w(y, !0, N), r;
    }
    function D() {
      const y = /* @__PURE__ */ Object.create(null);
      return h.attributeNames.forEach((N) => {
        y[N] = !0;
      }), y;
    }
    function I(y, N = c) {
      let P = c;
      for (; P < N && u[P] !== "<"; )
        P++;
      const B = u.substring(y, N), G = f(y, P);
      let q = "";
      if (!Jo(u, N, Q.AfterAttributeName, z.DelimiterAssign)) {
        const Z = (i == null ? void 0 : i.attributeDefaultValue) ?? "doublequotes";
        Z === "empty" ? q = "=$1" : Z === "singlequotes" ? q = "='$1'" : q = '="$1"';
      }
      const V = D();
      return V[B] = !1, a.forEach((Z) => {
        Z.provideAttributes(p).forEach((se) => {
          if (V[se.name])
            return;
          V[se.name] = !0;
          let ge = se.name, Ee;
          se.valueSet !== "v" && q.length && (ge = ge + q, (se.valueSet || se.name === "style") && (Ee = {
            title: "Suggest",
            command: "editor.action.triggerSuggest"
          })), r.items.push({
            label: se.name,
            kind: se.valueSet === "handler" ? Ne.Function : Ne.Value,
            documentation: xt(se, void 0, o),
            textEdit: _e.replace(G, ge),
            insertTextFormat: Ce.Snippet,
            command: Ee
          });
        });
      }), b(G, V), r;
    }
    function b(y, N) {
      const P = "data-", B = {};
      B[P] = `${P}$1="$2"`;
      function G(q) {
        q.attributeNames.forEach((V) => {
          gt(V, P) && !B[V] && !N[V] && (B[V] = V + '="$1"');
        }), q.children.forEach((V) => G(V));
      }
      n && n.roots.forEach((q) => G(q)), Object.keys(B).forEach((q) => r.items.push({
        label: q,
        kind: Ne.Value,
        textEdit: _e.replace(y, B[q]),
        insertTextFormat: Ce.Snippet
      }));
    }
    function g(y, N = c) {
      let P, B, G;
      if (c > y && c <= N && M1(u[y])) {
        const q = y + 1;
        let V = N;
        N > y && u[N - 1] === u[y] && V--;
        const Z = U1(u, c, q), se = I1(u, c, V);
        P = f(Z, se), G = c >= q && c <= V ? u.substring(q, c) : "", B = !1;
      } else
        P = f(y, N), G = u.substring(y, c), B = !0;
      if (s.length > 0) {
        const q = p.toLowerCase(), V = _.toLowerCase(), Z = f(y, N);
        for (const se of s)
          se.onHtmlAttributeValue && se.onHtmlAttributeValue({ document: e, position: t, tag: q, attribute: V, value: G, range: Z });
      }
      return a.forEach((q) => {
        q.provideValues(p, _).forEach((V) => {
          const Z = B ? '"' + V.name + '"' : V.name;
          r.items.push({
            label: V.name,
            filterText: Z,
            kind: Ne.Unit,
            documentation: xt(V, void 0, o),
            textEdit: _e.replace(P, Z),
            insertTextFormat: Ce.PlainText
          });
        });
      }), U(), r;
    }
    function x(y) {
      return c === m.getTokenEnd() && (M = m.scan(), M === y && m.getTokenOffset() === c) ? m.getTokenEnd() : c;
    }
    function W() {
      for (const y of s)
        y.onHtmlContent && y.onHtmlContent({ document: e, position: t });
      return U();
    }
    function U() {
      let y = c - 1, N = t.character;
      for (; y >= 0 && nn(u, y); )
        y--, N--;
      if (y >= 0 && u[y] === "&") {
        const P = ne.create(fe.create(t.line, N - 1), t);
        for (const B in hn)
          if (g1(B, ";")) {
            const G = "&" + B;
            r.items.push({
              label: G,
              kind: Ne.Keyword,
              documentation: Ge("Character entity representing '{0}'", hn[B]),
              textEdit: _e.replace(P, G),
              insertTextFormat: Ce.PlainText
            });
          }
      }
      return r;
    }
    function E(y, N) {
      const P = f(y, N);
      r.items.push({
        label: "!DOCTYPE",
        kind: Ne.Property,
        documentation: "A preamble for an HTML document.",
        textEdit: _e.replace(P, "!DOCTYPE html>"),
        insertTextFormat: Ce.PlainText
      });
    }
    let M = m.scan();
    for (; M !== z.EOS && m.getTokenOffset() <= c; ) {
      switch (M) {
        case z.StartTagOpen:
          if (m.getTokenEnd() === c) {
            const y = x(z.StartTag);
            return t.line === 0 && E(c, y), H(c, y);
          }
          break;
        case z.StartTag:
          if (m.getTokenOffset() <= c && c <= m.getTokenEnd())
            return L(m.getTokenOffset(), m.getTokenEnd());
          p = m.getTokenText();
          break;
        case z.AttributeName:
          if (m.getTokenOffset() <= c && c <= m.getTokenEnd())
            return I(m.getTokenOffset(), m.getTokenEnd());
          _ = m.getTokenText();
          break;
        case z.DelimiterAssign:
          if (m.getTokenEnd() === c) {
            const y = x(z.AttributeValue);
            return g(c, y);
          }
          break;
        case z.AttributeValue:
          if (m.getTokenOffset() <= c && c <= m.getTokenEnd())
            return g(m.getTokenOffset(), m.getTokenEnd());
          break;
        case z.Whitespace:
          if (c <= m.getTokenEnd())
            switch (m.getScannerState()) {
              case Q.AfterOpeningStartTag:
                const y = m.getTokenOffset(), N = x(z.StartTag);
                return H(y, N);
              case Q.WithinTag:
              case Q.AfterAttributeName:
                return I(m.getTokenEnd());
              case Q.BeforeAttributeValue:
                return g(m.getTokenEnd());
              case Q.AfterOpeningEndTag:
                return w(m.getTokenOffset() - 1, !1);
              case Q.WithinContent:
                return W();
            }
          break;
        case z.EndTagOpen:
          if (c <= m.getTokenEnd()) {
            const y = m.getTokenOffset() + 1, N = x(z.EndTag);
            return w(y, !1, N);
          }
          break;
        case z.EndTag:
          if (c <= m.getTokenEnd()) {
            let y = m.getTokenOffset() - 1;
            for (; y >= 0; ) {
              const N = u.charAt(y);
              if (N === "/")
                return w(y, !1, m.getTokenEnd());
              if (!si(N))
                break;
              y--;
            }
          }
          break;
        case z.StartTagClose:
          if (c <= m.getTokenEnd() && p)
            return k(m.getTokenEnd(), p);
          break;
        case z.Content:
          if (c <= m.getTokenEnd())
            return W();
          break;
        default:
          if (c <= m.getTokenEnd())
            return r;
          break;
      }
      M = m.scan();
    }
    return r;
  }
  doQuoteComplete(e, t, n, i) {
    const r = e.offsetAt(t);
    if (r <= 0)
      return null;
    const s = (i == null ? void 0 : i.attributeDefaultValue) ?? "doublequotes";
    if (s === "empty" || e.getText().charAt(r - 1) !== "=")
      return null;
    const l = s === "doublequotes" ? '"$1"' : "'$1'", o = n.findNodeBefore(r);
    if (o && o.attributes && o.start < r && (!o.endTagStart || o.endTagStart > r)) {
      const u = Fe(e.getText(), o.start);
      let c = u.scan();
      for (; c !== z.EOS && u.getTokenEnd() <= r; ) {
        if (c === z.AttributeName && u.getTokenEnd() === r - 1)
          return c = u.scan(), c !== z.DelimiterAssign || (c = u.scan(), c === z.Unknown || c === z.AttributeValue) ? null : l;
        c = u.scan();
      }
    }
    return null;
  }
  doTagComplete(e, t, n) {
    const i = e.offsetAt(t);
    if (i <= 0)
      return null;
    const r = e.getText().charAt(i - 1);
    if (r === ">") {
      const s = this.dataManager.getVoidElements(e.languageId), a = n.findNodeBefore(i);
      if (a && a.tag && !this.dataManager.isVoidElement(a.tag, s) && a.start < i && (!a.endTagStart || a.endTagStart > i)) {
        const l = Fe(e.getText(), a.start);
        let o = l.scan();
        for (; o !== z.EOS && l.getTokenEnd() <= i; ) {
          if (o === z.StartTagClose && l.getTokenEnd() === i)
            return `$0</${a.tag}>`;
          o = l.scan();
        }
      }
    } else if (r === "/") {
      let s = n.findNodeBefore(i);
      for (; s && s.closed && !(s.endTagStart && s.endTagStart > i); )
        s = s.parent;
      if (s && s.tag) {
        const a = Fe(e.getText(), s.start);
        let l = a.scan();
        for (; l !== z.EOS && a.getTokenEnd() <= i; ) {
          if (l === z.EndTagOpen && a.getTokenEnd() === i)
            return e.getText().charAt(i) !== ">" ? `${s.tag}>` : s.tag;
          l = a.scan();
        }
      }
    }
    return null;
  }
  convertCompletionList(e) {
    return this.doesSupportMarkdown() || e.items.forEach((t) => {
      t.documentation && typeof t.documentation != "string" && (t.documentation = {
        kind: "plaintext",
        value: t.documentation.value
      });
    }), e;
  }
  doesSupportMarkdown() {
    var e, t, n;
    if (!ri(this.supportsMarkdown)) {
      if (!ri(this.lsOptions.clientCapabilities))
        return this.supportsMarkdown = !0, this.supportsMarkdown;
      const i = (n = (t = (e = this.lsOptions.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.documentationFormat;
      this.supportsMarkdown = Array.isArray(i) && i.indexOf(it.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
};
function M1(e) {
  return /^["']*$/.test(e);
}
function si(e) {
  return /^\s*$/.test(e);
}
function Jo(e, t, n, i) {
  const r = Fe(e, t, n);
  let s = r.scan();
  for (; s === z.Whitespace; )
    s = r.scan();
  return s === i;
}
function U1(e, t, n) {
  for (; t > n && !si(e[t - 1]); )
    t--;
  return t;
}
function I1(e, t, n) {
  for (; t < n && !si(e[t]); )
    t++;
  return t;
}
var F1 = class {
  constructor(e, t) {
    this.lsOptions = e, this.dataManager = t;
  }
  doHover(e, t, n, i) {
    const r = this.convertContents.bind(this), s = this.doesSupportMarkdown(), a = e.offsetAt(t), l = n.findNodeAt(a), o = e.getText();
    if (!l || !l.tag)
      return null;
    const u = this.dataManager.getDataProviders().filter((I) => I.isApplicable(e.languageId));
    function c(I, b, g) {
      for (const x of u) {
        let W = null;
        if (x.provideTags().forEach((U) => {
          if (U.name.toLowerCase() === I.toLowerCase()) {
            let E = xt(U, i, s);
            E || (E = {
              kind: s ? "markdown" : "plaintext",
              value: ""
            }), W = { contents: E, range: b };
          }
        }), W)
          return W.contents = r(W.contents), W;
      }
      return null;
    }
    function h(I, b, g) {
      for (const x of u) {
        let W = null;
        if (x.provideAttributes(I).forEach((U) => {
          if (b === U.name && U.description) {
            const E = xt(U, i, s);
            E ? W = { contents: E, range: g } : W = null;
          }
        }), W)
          return W.contents = r(W.contents), W;
      }
      return null;
    }
    function m(I, b, g, x) {
      for (const W of u) {
        let U = null;
        if (W.provideValues(I, b).forEach((E) => {
          if (g === E.name && E.description) {
            const M = xt(E, i, s);
            M ? U = { contents: M, range: x } : U = null;
          }
        }), U)
          return U.contents = r(U.contents), U;
      }
      return null;
    }
    function p(I, b) {
      let g = L(I);
      for (const x in hn) {
        let W = null;
        const U = "&" + x;
        if (g === U) {
          let E = hn[x].charCodeAt(0).toString(16).toUpperCase(), M = "U+";
          if (E.length < 4) {
            const N = 4 - E.length;
            let P = 0;
            for (; P < N; )
              M += "0", P += 1;
          }
          M += E;
          const y = Ge("Character entity representing '{0}', unicode equivalent '{1}'", hn[x], M);
          y ? W = { contents: y, range: b } : W = null;
        }
        if (W)
          return W.contents = r(W.contents), W;
      }
      return null;
    }
    function _(I, b) {
      const g = Fe(e.getText(), b);
      let x = g.scan();
      for (; x !== z.EOS && (g.getTokenEnd() < a || g.getTokenEnd() === a && x !== I); )
        x = g.scan();
      return x === I && a <= g.getTokenEnd() ? { start: e.positionAt(g.getTokenOffset()), end: e.positionAt(g.getTokenEnd()) } : null;
    }
    function f() {
      let I = a - 1, b = t.character;
      for (; I >= 0 && nn(o, I); )
        I--, b--;
      let g = I + 1, x = b;
      for (; nn(o, g); )
        g++, x++;
      if (I >= 0 && o[I] === "&") {
        let W = null;
        return o[g] === ";" ? W = ne.create(fe.create(t.line, b), fe.create(t.line, x + 1)) : W = ne.create(fe.create(t.line, b), fe.create(t.line, x)), W;
      }
      return null;
    }
    function L(I) {
      let b = a - 1, g = "&";
      for (; b >= 0 && nn(I, b); )
        b--;
      for (b = b + 1; nn(I, b); )
        g += I[b], b += 1;
      return g += ";", g;
    }
    if (l.endTagStart && a >= l.endTagStart) {
      const I = _(z.EndTag, l.endTagStart);
      return I ? c(l.tag, I) : null;
    }
    const A = _(z.StartTag, l.start);
    if (A)
      return c(l.tag, A);
    const w = _(z.AttributeName, l.start);
    if (w) {
      const I = l.tag, b = e.getText(w);
      return h(I, b, w);
    }
    const k = f();
    if (k)
      return p(o, k);
    function H(I, b) {
      const g = Fe(e.getText(), I);
      let x = g.scan(), W;
      for (; x !== z.EOS && g.getTokenEnd() <= b; )
        x = g.scan(), x === z.AttributeName && (W = g.getTokenText());
      return W;
    }
    const D = _(z.AttributeValue, l.start);
    if (D) {
      const I = l.tag, b = P1(e.getText(D)), g = H(l.start, e.offsetAt(D.start));
      if (g)
        return m(I, g, b, D);
    }
    return null;
  }
  convertContents(e) {
    if (!this.doesSupportMarkdown()) {
      if (typeof e == "string")
        return e;
      if ("kind" in e)
        return {
          kind: "plaintext",
          value: e.value
        };
      if (Array.isArray(e))
        e.map((t) => typeof t == "string" ? t : t.value);
      else
        return e.value;
    }
    return e;
  }
  doesSupportMarkdown() {
    var e, t, n;
    if (!ri(this.supportsMarkdown)) {
      if (!ri(this.lsOptions.clientCapabilities))
        return this.supportsMarkdown = !0, this.supportsMarkdown;
      const i = (n = (t = (e = this.lsOptions.clientCapabilities) == null ? void 0 : e.textDocument) == null ? void 0 : t.hover) == null ? void 0 : n.contentFormat;
      this.supportsMarkdown = Array.isArray(i) && i.indexOf(it.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
};
function P1(e) {
  return e.length <= 1 ? e.replace(/['"]/, "") : ((e[0] === "'" || e[0] === '"') && (e = e.slice(1)), (e[e.length - 1] === "'" || e[e.length - 1] === '"') && (e = e.slice(0, -1)), e);
}
function B1(e, t) {
  return e;
}
var zl;
(function() {
  var e = [
    ,
    ,
    /* 2 */
    /***/
    function(r) {
      function s(o) {
        this.__parent = o, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
      }
      s.prototype.clone_empty = function() {
        var o = new s(this.__parent);
        return o.set_indent(this.__indent_count, this.__alignment_count), o;
      }, s.prototype.item = function(o) {
        return o < 0 ? this.__items[this.__items.length + o] : this.__items[o];
      }, s.prototype.has_match = function(o) {
        for (var u = this.__items.length - 1; u >= 0; u--)
          if (this.__items[u].match(o))
            return !0;
        return !1;
      }, s.prototype.set_indent = function(o, u) {
        this.is_empty() && (this.__indent_count = o || 0, this.__alignment_count = u || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
      }, s.prototype._set_wrap_point = function() {
        this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
      }, s.prototype._should_wrap = function() {
        return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
      }, s.prototype._allow_wrap = function() {
        if (this._should_wrap()) {
          this.__parent.add_new_line();
          var o = this.__parent.current_line;
          return o.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), o.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), o.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, o.__items[0] === " " && (o.__items.splice(0, 1), o.__character_count -= 1), !0;
        }
        return !1;
      }, s.prototype.is_empty = function() {
        return this.__items.length === 0;
      }, s.prototype.last = function() {
        return this.is_empty() ? null : this.__items[this.__items.length - 1];
      }, s.prototype.push = function(o) {
        this.__items.push(o);
        var u = o.lastIndexOf(`
`);
        u !== -1 ? this.__character_count = o.length - u : this.__character_count += o.length;
      }, s.prototype.pop = function() {
        var o = null;
        return this.is_empty() || (o = this.__items.pop(), this.__character_count -= o.length), o;
      }, s.prototype._remove_indent = function() {
        this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
      }, s.prototype._remove_wrap_indent = function() {
        this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
      }, s.prototype.trim = function() {
        for (; this.last() === " "; )
          this.__items.pop(), this.__character_count -= 1;
      }, s.prototype.toString = function() {
        var o = "";
        return this.is_empty() ? this.__parent.indent_empty_lines && (o = this.__parent.get_indent_string(this.__indent_count)) : (o = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), o += this.__items.join("")), o;
      };
      function a(o, u) {
        this.__cache = [""], this.__indent_size = o.indent_size, this.__indent_string = o.indent_char, o.indent_with_tabs || (this.__indent_string = new Array(o.indent_size + 1).join(o.indent_char)), u = u || "", o.indent_level > 0 && (u = new Array(o.indent_level + 1).join(this.__indent_string)), this.__base_string = u, this.__base_string_length = u.length;
      }
      a.prototype.get_indent_size = function(o, u) {
        var c = this.__base_string_length;
        return u = u || 0, o < 0 && (c = 0), c += o * this.__indent_size, c += u, c;
      }, a.prototype.get_indent_string = function(o, u) {
        var c = this.__base_string;
        return u = u || 0, o < 0 && (o = 0, c = ""), u += o * this.__indent_size, this.__ensure_cache(u), c += this.__cache[u], c;
      }, a.prototype.__ensure_cache = function(o) {
        for (; o >= this.__cache.length; )
          this.__add_column();
      }, a.prototype.__add_column = function() {
        var o = this.__cache.length, u = 0, c = "";
        this.__indent_size && o >= this.__indent_size && (u = Math.floor(o / this.__indent_size), o -= u * this.__indent_size, c = new Array(u + 1).join(this.__indent_string)), o && (c += new Array(o + 1).join(" ")), this.__cache.push(c);
      };
      function l(o, u) {
        this.__indent_cache = new a(o, u), this.raw = !1, this._end_with_newline = o.end_with_newline, this.indent_size = o.indent_size, this.wrap_line_length = o.wrap_line_length, this.indent_empty_lines = o.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new s(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
      }
      l.prototype.__add_outputline = function() {
        this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
      }, l.prototype.get_line_number = function() {
        return this.__lines.length;
      }, l.prototype.get_indent_string = function(o, u) {
        return this.__indent_cache.get_indent_string(o, u);
      }, l.prototype.get_indent_size = function(o, u) {
        return this.__indent_cache.get_indent_size(o, u);
      }, l.prototype.is_empty = function() {
        return !this.previous_line && this.current_line.is_empty();
      }, l.prototype.add_new_line = function(o) {
        return this.is_empty() || !o && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
      }, l.prototype.get_code = function(o) {
        this.trim(!0);
        var u = this.current_line.pop();
        u && (u[u.length - 1] === `
` && (u = u.replace(/\n+$/g, "")), this.current_line.push(u)), this._end_with_newline && this.__add_outputline();
        var c = this.__lines.join(`
`);
        return o !== `
` && (c = c.replace(/[\n]/g, o)), c;
      }, l.prototype.set_wrap_point = function() {
        this.current_line._set_wrap_point();
      }, l.prototype.set_indent = function(o, u) {
        return o = o || 0, u = u || 0, this.next_line.set_indent(o, u), this.__lines.length > 1 ? (this.current_line.set_indent(o, u), !0) : (this.current_line.set_indent(), !1);
      }, l.prototype.add_raw_token = function(o) {
        for (var u = 0; u < o.newlines; u++)
          this.__add_outputline();
        this.current_line.set_indent(-1), this.current_line.push(o.whitespace_before), this.current_line.push(o.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
      }, l.prototype.add_token = function(o) {
        this.__add_space_before_token(), this.current_line.push(o), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
      }, l.prototype.__add_space_before_token = function() {
        this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
      }, l.prototype.remove_indent = function(o) {
        for (var u = this.__lines.length; o < u; )
          this.__lines[o]._remove_indent(), o++;
        this.current_line._remove_wrap_indent();
      }, l.prototype.trim = function(o) {
        for (o = o === void 0 ? !1 : o, this.current_line.trim(); o && this.__lines.length > 1 && this.current_line.is_empty(); )
          this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
        this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
      }, l.prototype.just_added_newline = function() {
        return this.current_line.is_empty();
      }, l.prototype.just_added_blankline = function() {
        return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
      }, l.prototype.ensure_empty_line_above = function(o, u) {
        for (var c = this.__lines.length - 2; c >= 0; ) {
          var h = this.__lines[c];
          if (h.is_empty())
            break;
          if (h.item(0).indexOf(o) !== 0 && h.item(-1) !== u) {
            this.__lines.splice(c + 1, 0, new s(this)), this.previous_line = this.__lines[this.__lines.length - 2];
            break;
          }
          c--;
        }
      }, r.exports.Output = l;
    },
    ,
    ,
    ,
    /* 6 */
    /***/
    function(r) {
      function s(o, u) {
        this.raw_options = a(o, u), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
      }
      s.prototype._get_array = function(o, u) {
        var c = this.raw_options[o], h = u || [];
        return typeof c == "object" ? c !== null && typeof c.concat == "function" && (h = c.concat()) : typeof c == "string" && (h = c.split(/[^a-zA-Z0-9_\/\-]+/)), h;
      }, s.prototype._get_boolean = function(o, u) {
        var c = this.raw_options[o], h = c === void 0 ? !!u : !!c;
        return h;
      }, s.prototype._get_characters = function(o, u) {
        var c = this.raw_options[o], h = u || "";
        return typeof c == "string" && (h = c.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), h;
      }, s.prototype._get_number = function(o, u) {
        var c = this.raw_options[o];
        u = parseInt(u, 10), isNaN(u) && (u = 0);
        var h = parseInt(c, 10);
        return isNaN(h) && (h = u), h;
      }, s.prototype._get_selection = function(o, u, c) {
        var h = this._get_selection_list(o, u, c);
        if (h.length !== 1)
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can only be one of the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return h[0];
      }, s.prototype._get_selection_list = function(o, u, c) {
        if (!u || u.length === 0)
          throw new Error("Selection list cannot be empty.");
        if (c = c || [u[0]], !this._is_valid_selection(c, u))
          throw new Error("Invalid Default Value!");
        var h = this._get_array(o, c);
        if (!this._is_valid_selection(h, u))
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can contain only the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return h;
      }, s.prototype._is_valid_selection = function(o, u) {
        return o.length && u.length && !o.some(function(c) {
          return u.indexOf(c) === -1;
        });
      };
      function a(o, u) {
        var c = {};
        o = l(o);
        var h;
        for (h in o)
          h !== u && (c[h] = o[h]);
        if (u && o[u])
          for (h in o[u])
            c[h] = o[u][h];
        return c;
      }
      function l(o) {
        var u = {}, c;
        for (c in o) {
          var h = c.replace(/-/g, "_");
          u[h] = o[c];
        }
        return u;
      }
      r.exports.Options = s, r.exports.normalizeOpts = l, r.exports.mergeOpts = a;
    },
    ,
    /* 8 */
    /***/
    function(r) {
      var s = RegExp.prototype.hasOwnProperty("sticky");
      function a(l) {
        this.__input = l || "", this.__input_length = this.__input.length, this.__position = 0;
      }
      a.prototype.restart = function() {
        this.__position = 0;
      }, a.prototype.back = function() {
        this.__position > 0 && (this.__position -= 1);
      }, a.prototype.hasNext = function() {
        return this.__position < this.__input_length;
      }, a.prototype.next = function() {
        var l = null;
        return this.hasNext() && (l = this.__input.charAt(this.__position), this.__position += 1), l;
      }, a.prototype.peek = function(l) {
        var o = null;
        return l = l || 0, l += this.__position, l >= 0 && l < this.__input_length && (o = this.__input.charAt(l)), o;
      }, a.prototype.__match = function(l, o) {
        l.lastIndex = o;
        var u = l.exec(this.__input);
        return u && !(s && l.sticky) && u.index !== o && (u = null), u;
      }, a.prototype.test = function(l, o) {
        return o = o || 0, o += this.__position, o >= 0 && o < this.__input_length ? !!this.__match(l, o) : !1;
      }, a.prototype.testChar = function(l, o) {
        var u = this.peek(o);
        return l.lastIndex = 0, u !== null && l.test(u);
      }, a.prototype.match = function(l) {
        var o = this.__match(l, this.__position);
        return o ? this.__position += o[0].length : o = null, o;
      }, a.prototype.read = function(l, o, u) {
        var c = "", h;
        return l && (h = this.match(l), h && (c += h[0])), o && (h || !l) && (c += this.readUntil(o, u)), c;
      }, a.prototype.readUntil = function(l, o) {
        var u = "", c = this.__position;
        l.lastIndex = this.__position;
        var h = l.exec(this.__input);
        return h ? (c = h.index, o && (c += h[0].length)) : c = this.__input_length, u = this.__input.substring(this.__position, c), this.__position = c, u;
      }, a.prototype.readUntilAfter = function(l) {
        return this.readUntil(l, !0);
      }, a.prototype.get_regexp = function(l, o) {
        var u = null, c = "g";
        return o && s && (c = "y"), typeof l == "string" && l !== "" ? u = new RegExp(l, c) : l && (u = new RegExp(l.source, c)), u;
      }, a.prototype.get_literal_regexp = function(l) {
        return RegExp(l.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
      }, a.prototype.peekUntilAfter = function(l) {
        var o = this.__position, u = this.readUntilAfter(l);
        return this.__position = o, u;
      }, a.prototype.lookBack = function(l) {
        var o = this.__position - 1;
        return o >= l.length && this.__input.substring(o - l.length, o).toLowerCase() === l;
      }, r.exports.InputScanner = a;
    },
    ,
    ,
    ,
    ,
    /* 13 */
    /***/
    function(r) {
      function s(a, l) {
        a = typeof a == "string" ? a : a.source, l = typeof l == "string" ? l : l.source, this.__directives_block_pattern = new RegExp(a + / beautify( \w+[:]\w+)+ /.source + l, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(a + /\sbeautify\signore:end\s/.source + l, "g");
      }
      s.prototype.get_directives = function(a) {
        if (!a.match(this.__directives_block_pattern))
          return null;
        var l = {};
        this.__directive_pattern.lastIndex = 0;
        for (var o = this.__directive_pattern.exec(a); o; )
          l[o[1]] = o[2], o = this.__directive_pattern.exec(a);
        return l;
      }, s.prototype.readIgnored = function(a) {
        return a.readUntilAfter(this.__directives_end_ignore_pattern);
      }, r.exports.Directives = s;
    },
    ,
    /* 15 */
    /***/
    function(r, s, a) {
      var l = a(16).Beautifier, o = a(17).Options;
      function u(c, h) {
        var m = new l(c, h);
        return m.beautify();
      }
      r.exports = u, r.exports.defaultOptions = function() {
        return new o();
      };
    },
    /* 16 */
    /***/
    function(r, s, a) {
      var l = a(17).Options, o = a(2).Output, u = a(8).InputScanner, c = a(13).Directives, h = new c(/\/\*/, /\*\//), m = /\r\n|[\r\n]/, p = /\r\n|[\r\n]/g, _ = /\s/, f = /(?:\s|\n)+/g, L = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, A = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
      function w(k, H) {
        this._source_text = k || "", this._options = new l(H), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
          page: !0,
          "font-face": !0,
          keyframes: !0,
          // also in CONDITIONAL_GROUP_RULE below
          media: !0,
          supports: !0,
          document: !0
        }, this.CONDITIONAL_GROUP_RULE = {
          media: !0,
          supports: !0,
          document: !0
        }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
          "grid-template-areas",
          "grid-template"
        ];
      }
      w.prototype.eatString = function(k) {
        var H = "";
        for (this._ch = this._input.next(); this._ch; ) {
          if (H += this._ch, this._ch === "\\")
            H += this._input.next();
          else if (k.indexOf(this._ch) !== -1 || this._ch === `
`)
            break;
          this._ch = this._input.next();
        }
        return H;
      }, w.prototype.eatWhitespace = function(k) {
        for (var H = _.test(this._input.peek()), D = 0; _.test(this._input.peek()); )
          this._ch = this._input.next(), k && this._ch === `
` && (D === 0 || D < this._options.max_preserve_newlines) && (D++, this._output.add_new_line(!0));
        return H;
      }, w.prototype.foundNestedPseudoClass = function() {
        for (var k = 0, H = 1, D = this._input.peek(H); D; ) {
          if (D === "{")
            return !0;
          if (D === "(")
            k += 1;
          else if (D === ")") {
            if (k === 0)
              return !1;
            k -= 1;
          } else if (D === ";" || D === "}")
            return !1;
          H++, D = this._input.peek(H);
        }
        return !1;
      }, w.prototype.print_string = function(k) {
        this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(k);
      }, w.prototype.preserveSingleSpace = function(k) {
        k && (this._output.space_before_token = !0);
      }, w.prototype.indent = function() {
        this._indentLevel++;
      }, w.prototype.outdent = function() {
        this._indentLevel > 0 && this._indentLevel--;
      }, w.prototype.beautify = function() {
        if (this._options.disabled)
          return this._source_text;
        var k = this._source_text, H = this._options.eol;
        H === "auto" && (H = `
`, k && m.test(k || "") && (H = k.match(m)[0])), k = k.replace(p, `
`);
        var D = k.match(/^[\t ]*/)[0];
        this._output = new o(this._options, D), this._input = new u(k), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
        for (var I = 0, b = !1, g = !1, x = !1, W = !1, U = !1, E = this._ch, M = !1, y, N, P; y = this._input.read(f), N = y !== "", P = E, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), E = this._ch, this._ch; )
          if (this._ch === "/" && this._input.peek() === "*") {
            this._output.add_new_line(), this._input.back();
            var B = this._input.read(L), G = h.get_directives(B);
            G && G.ignore === "start" && (B += h.readIgnored(this._input)), this.print_string(B), this.eatWhitespace(!0), this._output.add_new_line();
          } else if (this._ch === "/" && this._input.peek() === "/")
            this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(A)), this.eatWhitespace(!0);
          else if (this._ch === "$") {
            this.preserveSingleSpace(N), this.print_string(this._ch);
            var q = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            q.match(/[ :]$/) && (q = this.eatString(": ").replace(/\s+$/, ""), this.print_string(q), this._output.space_before_token = !0), I === 0 && q.indexOf(":") !== -1 && (g = !0, this.indent());
          } else if (this._ch === "@")
            if (this.preserveSingleSpace(N), this._input.peek() === "{")
              this.print_string(this._ch + this.eatString("}"));
            else {
              this.print_string(this._ch);
              var V = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
              V.match(/[ :]$/) && (V = this.eatString(": ").replace(/\s+$/, ""), this.print_string(V), this._output.space_before_token = !0), I === 0 && V.indexOf(":") !== -1 ? (g = !0, this.indent()) : V in this.NESTED_AT_RULE ? (this._nestedLevel += 1, V in this.CONDITIONAL_GROUP_RULE && (x = !0)) : I === 0 && !g && (W = !0);
            }
          else if (this._ch === "#" && this._input.peek() === "{")
            this.preserveSingleSpace(N), this.print_string(this._ch + this.eatString("}"));
          else if (this._ch === "{")
            g && (g = !1, this.outdent()), W = !1, x ? (x = !1, b = this._indentLevel >= this._nestedLevel) : b = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && b && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (P === "(" ? this._output.space_before_token = !1 : P !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
          else if (this._ch === "}")
            this.outdent(), this._output.add_new_line(), P === "{" && this._output.trim(!0), g && (this.outdent(), g = !1), this.print_string(this._ch), b = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
          else if (this._ch === ":") {
            for (var Z = 0; Z < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; Z++)
              if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[Z])) {
                M = !0;
                break;
              }
            (b || x) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !W && I === 0 ? (this.print_string(":"), g || (g = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
          } else if (this._ch === '"' || this._ch === "'") {
            var se = P === '"' || P === "'";
            this.preserveSingleSpace(se || N), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
          } else if (this._ch === ";")
            M = !1, I === 0 ? (g && (this.outdent(), g = !1), W = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
          else if (this._ch === "(")
            if (this._input.lookBack("url"))
              this.print_string(this._ch), this.eatWhitespace(), I++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), I && (I--, this.outdent()));
            else {
              var ge = !1;
              this._input.lookBack("with") && (ge = !0), this.preserveSingleSpace(N || ge), this.print_string(this._ch), g && P === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), U = !0) : (this.eatWhitespace(), I++, this.indent());
            }
          else if (this._ch === ")")
            I && (I--, this.outdent()), U && this._input.peek() === ";" && this._options.selector_separator_newline && (U = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
          else if (this._ch === ",")
            this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!g || U) && I === 0 && !W ? this._output.add_new_line() : this._output.space_before_token = !0;
          else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !g && I === 0)
            this._options.space_around_combinator ? (this._output.space_before_token = !0, this.print_string(this._ch), this._output.space_before_token = !0) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && _.test(this._ch) && (this._ch = ""));
          else if (this._ch === "]")
            this.print_string(this._ch);
          else if (this._ch === "[")
            this.preserveSingleSpace(N), this.print_string(this._ch);
          else if (this._ch === "=")
            this.eatWhitespace(), this.print_string("="), _.test(this._ch) && (this._ch = "");
          else if (this._ch === "!" && !this._input.lookBack("\\"))
            this._output.space_before_token = !0, this.print_string(this._ch);
          else {
            var Ee = P === '"' || P === "'";
            this.preserveSingleSpace(Ee || N), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && M && this._output.add_new_line();
          }
        var fi = this._output.get_code(H);
        return fi;
      }, r.exports.Beautifier = w;
    },
    /* 17 */
    /***/
    function(r, s, a) {
      var l = a(6).Options;
      function o(u) {
        l.call(this, u, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", !0), this.newline_between_rules = this._get_boolean("newline_between_rules", !0);
        var c = this._get_boolean("space_around_selector_separator");
        this.space_around_combinator = this._get_boolean("space_around_combinator") || c;
        var h = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
        this.brace_style = "collapse";
        for (var m = 0; m < h.length; m++)
          h[m] !== "expand" ? this.brace_style = "collapse" : this.brace_style = h[m];
      }
      o.prototype = new l(), r.exports.Options = o;
    }
    /******/
  ], t = {};
  function n(r) {
    var s = t[r];
    if (s !== void 0)
      return s.exports;
    var a = t[r] = {
      /******/
      // no module.id needed
      /******/
      // no module.loaded needed
      /******/
      exports: {}
      /******/
    };
    return e[r](a, a.exports, n), a.exports;
  }
  var i = n(15);
  zl = i;
})();
var H1 = zl, Wl;
(function() {
  var e = [
    ,
    ,
    /* 2 */
    /***/
    function(r) {
      function s(o) {
        this.__parent = o, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
      }
      s.prototype.clone_empty = function() {
        var o = new s(this.__parent);
        return o.set_indent(this.__indent_count, this.__alignment_count), o;
      }, s.prototype.item = function(o) {
        return o < 0 ? this.__items[this.__items.length + o] : this.__items[o];
      }, s.prototype.has_match = function(o) {
        for (var u = this.__items.length - 1; u >= 0; u--)
          if (this.__items[u].match(o))
            return !0;
        return !1;
      }, s.prototype.set_indent = function(o, u) {
        this.is_empty() && (this.__indent_count = o || 0, this.__alignment_count = u || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
      }, s.prototype._set_wrap_point = function() {
        this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
      }, s.prototype._should_wrap = function() {
        return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
      }, s.prototype._allow_wrap = function() {
        if (this._should_wrap()) {
          this.__parent.add_new_line();
          var o = this.__parent.current_line;
          return o.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), o.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), o.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, o.__items[0] === " " && (o.__items.splice(0, 1), o.__character_count -= 1), !0;
        }
        return !1;
      }, s.prototype.is_empty = function() {
        return this.__items.length === 0;
      }, s.prototype.last = function() {
        return this.is_empty() ? null : this.__items[this.__items.length - 1];
      }, s.prototype.push = function(o) {
        this.__items.push(o);
        var u = o.lastIndexOf(`
`);
        u !== -1 ? this.__character_count = o.length - u : this.__character_count += o.length;
      }, s.prototype.pop = function() {
        var o = null;
        return this.is_empty() || (o = this.__items.pop(), this.__character_count -= o.length), o;
      }, s.prototype._remove_indent = function() {
        this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
      }, s.prototype._remove_wrap_indent = function() {
        this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
      }, s.prototype.trim = function() {
        for (; this.last() === " "; )
          this.__items.pop(), this.__character_count -= 1;
      }, s.prototype.toString = function() {
        var o = "";
        return this.is_empty() ? this.__parent.indent_empty_lines && (o = this.__parent.get_indent_string(this.__indent_count)) : (o = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), o += this.__items.join("")), o;
      };
      function a(o, u) {
        this.__cache = [""], this.__indent_size = o.indent_size, this.__indent_string = o.indent_char, o.indent_with_tabs || (this.__indent_string = new Array(o.indent_size + 1).join(o.indent_char)), u = u || "", o.indent_level > 0 && (u = new Array(o.indent_level + 1).join(this.__indent_string)), this.__base_string = u, this.__base_string_length = u.length;
      }
      a.prototype.get_indent_size = function(o, u) {
        var c = this.__base_string_length;
        return u = u || 0, o < 0 && (c = 0), c += o * this.__indent_size, c += u, c;
      }, a.prototype.get_indent_string = function(o, u) {
        var c = this.__base_string;
        return u = u || 0, o < 0 && (o = 0, c = ""), u += o * this.__indent_size, this.__ensure_cache(u), c += this.__cache[u], c;
      }, a.prototype.__ensure_cache = function(o) {
        for (; o >= this.__cache.length; )
          this.__add_column();
      }, a.prototype.__add_column = function() {
        var o = this.__cache.length, u = 0, c = "";
        this.__indent_size && o >= this.__indent_size && (u = Math.floor(o / this.__indent_size), o -= u * this.__indent_size, c = new Array(u + 1).join(this.__indent_string)), o && (c += new Array(o + 1).join(" ")), this.__cache.push(c);
      };
      function l(o, u) {
        this.__indent_cache = new a(o, u), this.raw = !1, this._end_with_newline = o.end_with_newline, this.indent_size = o.indent_size, this.wrap_line_length = o.wrap_line_length, this.indent_empty_lines = o.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new s(this), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1, this.__add_outputline();
      }
      l.prototype.__add_outputline = function() {
        this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
      }, l.prototype.get_line_number = function() {
        return this.__lines.length;
      }, l.prototype.get_indent_string = function(o, u) {
        return this.__indent_cache.get_indent_string(o, u);
      }, l.prototype.get_indent_size = function(o, u) {
        return this.__indent_cache.get_indent_size(o, u);
      }, l.prototype.is_empty = function() {
        return !this.previous_line && this.current_line.is_empty();
      }, l.prototype.add_new_line = function(o) {
        return this.is_empty() || !o && this.just_added_newline() ? !1 : (this.raw || this.__add_outputline(), !0);
      }, l.prototype.get_code = function(o) {
        this.trim(!0);
        var u = this.current_line.pop();
        u && (u[u.length - 1] === `
` && (u = u.replace(/\n+$/g, "")), this.current_line.push(u)), this._end_with_newline && this.__add_outputline();
        var c = this.__lines.join(`
`);
        return o !== `
` && (c = c.replace(/[\n]/g, o)), c;
      }, l.prototype.set_wrap_point = function() {
        this.current_line._set_wrap_point();
      }, l.prototype.set_indent = function(o, u) {
        return o = o || 0, u = u || 0, this.next_line.set_indent(o, u), this.__lines.length > 1 ? (this.current_line.set_indent(o, u), !0) : (this.current_line.set_indent(), !1);
      }, l.prototype.add_raw_token = function(o) {
        for (var u = 0; u < o.newlines; u++)
          this.__add_outputline();
        this.current_line.set_indent(-1), this.current_line.push(o.whitespace_before), this.current_line.push(o.text), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = !1;
      }, l.prototype.add_token = function(o) {
        this.__add_space_before_token(), this.current_line.push(o), this.space_before_token = !1, this.non_breaking_space = !1, this.previous_token_wrapped = this.current_line._allow_wrap();
      }, l.prototype.__add_space_before_token = function() {
        this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
      }, l.prototype.remove_indent = function(o) {
        for (var u = this.__lines.length; o < u; )
          this.__lines[o]._remove_indent(), o++;
        this.current_line._remove_wrap_indent();
      }, l.prototype.trim = function(o) {
        for (o = o === void 0 ? !1 : o, this.current_line.trim(); o && this.__lines.length > 1 && this.current_line.is_empty(); )
          this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
        this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
      }, l.prototype.just_added_newline = function() {
        return this.current_line.is_empty();
      }, l.prototype.just_added_blankline = function() {
        return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
      }, l.prototype.ensure_empty_line_above = function(o, u) {
        for (var c = this.__lines.length - 2; c >= 0; ) {
          var h = this.__lines[c];
          if (h.is_empty())
            break;
          if (h.item(0).indexOf(o) !== 0 && h.item(-1) !== u) {
            this.__lines.splice(c + 1, 0, new s(this)), this.previous_line = this.__lines[this.__lines.length - 2];
            break;
          }
          c--;
        }
      }, r.exports.Output = l;
    },
    /* 3 */
    /***/
    function(r) {
      function s(a, l, o, u) {
        this.type = a, this.text = l, this.comments_before = null, this.newlines = o || 0, this.whitespace_before = u || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
      }
      r.exports.Token = s;
    },
    ,
    ,
    /* 6 */
    /***/
    function(r) {
      function s(o, u) {
        this.raw_options = a(o, u), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", !0), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
      }
      s.prototype._get_array = function(o, u) {
        var c = this.raw_options[o], h = u || [];
        return typeof c == "object" ? c !== null && typeof c.concat == "function" && (h = c.concat()) : typeof c == "string" && (h = c.split(/[^a-zA-Z0-9_\/\-]+/)), h;
      }, s.prototype._get_boolean = function(o, u) {
        var c = this.raw_options[o], h = c === void 0 ? !!u : !!c;
        return h;
      }, s.prototype._get_characters = function(o, u) {
        var c = this.raw_options[o], h = u || "";
        return typeof c == "string" && (h = c.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), h;
      }, s.prototype._get_number = function(o, u) {
        var c = this.raw_options[o];
        u = parseInt(u, 10), isNaN(u) && (u = 0);
        var h = parseInt(c, 10);
        return isNaN(h) && (h = u), h;
      }, s.prototype._get_selection = function(o, u, c) {
        var h = this._get_selection_list(o, u, c);
        if (h.length !== 1)
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can only be one of the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return h[0];
      }, s.prototype._get_selection_list = function(o, u, c) {
        if (!u || u.length === 0)
          throw new Error("Selection list cannot be empty.");
        if (c = c || [u[0]], !this._is_valid_selection(c, u))
          throw new Error("Invalid Default Value!");
        var h = this._get_array(o, c);
        if (!this._is_valid_selection(h, u))
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can contain only the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return h;
      }, s.prototype._is_valid_selection = function(o, u) {
        return o.length && u.length && !o.some(function(c) {
          return u.indexOf(c) === -1;
        });
      };
      function a(o, u) {
        var c = {};
        o = l(o);
        var h;
        for (h in o)
          h !== u && (c[h] = o[h]);
        if (u && o[u])
          for (h in o[u])
            c[h] = o[u][h];
        return c;
      }
      function l(o) {
        var u = {}, c;
        for (c in o) {
          var h = c.replace(/-/g, "_");
          u[h] = o[c];
        }
        return u;
      }
      r.exports.Options = s, r.exports.normalizeOpts = l, r.exports.mergeOpts = a;
    },
    ,
    /* 8 */
    /***/
    function(r) {
      var s = RegExp.prototype.hasOwnProperty("sticky");
      function a(l) {
        this.__input = l || "", this.__input_length = this.__input.length, this.__position = 0;
      }
      a.prototype.restart = function() {
        this.__position = 0;
      }, a.prototype.back = function() {
        this.__position > 0 && (this.__position -= 1);
      }, a.prototype.hasNext = function() {
        return this.__position < this.__input_length;
      }, a.prototype.next = function() {
        var l = null;
        return this.hasNext() && (l = this.__input.charAt(this.__position), this.__position += 1), l;
      }, a.prototype.peek = function(l) {
        var o = null;
        return l = l || 0, l += this.__position, l >= 0 && l < this.__input_length && (o = this.__input.charAt(l)), o;
      }, a.prototype.__match = function(l, o) {
        l.lastIndex = o;
        var u = l.exec(this.__input);
        return u && !(s && l.sticky) && u.index !== o && (u = null), u;
      }, a.prototype.test = function(l, o) {
        return o = o || 0, o += this.__position, o >= 0 && o < this.__input_length ? !!this.__match(l, o) : !1;
      }, a.prototype.testChar = function(l, o) {
        var u = this.peek(o);
        return l.lastIndex = 0, u !== null && l.test(u);
      }, a.prototype.match = function(l) {
        var o = this.__match(l, this.__position);
        return o ? this.__position += o[0].length : o = null, o;
      }, a.prototype.read = function(l, o, u) {
        var c = "", h;
        return l && (h = this.match(l), h && (c += h[0])), o && (h || !l) && (c += this.readUntil(o, u)), c;
      }, a.prototype.readUntil = function(l, o) {
        var u = "", c = this.__position;
        l.lastIndex = this.__position;
        var h = l.exec(this.__input);
        return h ? (c = h.index, o && (c += h[0].length)) : c = this.__input_length, u = this.__input.substring(this.__position, c), this.__position = c, u;
      }, a.prototype.readUntilAfter = function(l) {
        return this.readUntil(l, !0);
      }, a.prototype.get_regexp = function(l, o) {
        var u = null, c = "g";
        return o && s && (c = "y"), typeof l == "string" && l !== "" ? u = new RegExp(l, c) : l && (u = new RegExp(l.source, c)), u;
      }, a.prototype.get_literal_regexp = function(l) {
        return RegExp(l.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
      }, a.prototype.peekUntilAfter = function(l) {
        var o = this.__position, u = this.readUntilAfter(l);
        return this.__position = o, u;
      }, a.prototype.lookBack = function(l) {
        var o = this.__position - 1;
        return o >= l.length && this.__input.substring(o - l.length, o).toLowerCase() === l;
      }, r.exports.InputScanner = a;
    },
    /* 9 */
    /***/
    function(r, s, a) {
      var l = a(8).InputScanner, o = a(3).Token, u = a(10).TokenStream, c = a(11).WhitespacePattern, h = {
        START: "TK_START",
        RAW: "TK_RAW",
        EOF: "TK_EOF"
      }, m = function(p, _) {
        this._input = new l(p), this._options = _ || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new c(this._input);
      };
      m.prototype.tokenize = function() {
        this._input.restart(), this.__tokens = new u(), this._reset();
        for (var p, _ = new o(h.START, ""), f = null, L = [], A = new u(); _.type !== h.EOF; ) {
          for (p = this._get_next_token(_, f); this._is_comment(p); )
            A.add(p), p = this._get_next_token(_, f);
          A.isEmpty() || (p.comments_before = A, A = new u()), p.parent = f, this._is_opening(p) ? (L.push(f), f = p) : f && this._is_closing(p, f) && (p.opened = f, f.closed = p, f = L.pop(), p.parent = f), p.previous = _, _.next = p, this.__tokens.add(p), _ = p;
        }
        return this.__tokens;
      }, m.prototype._is_first_token = function() {
        return this.__tokens.isEmpty();
      }, m.prototype._reset = function() {
      }, m.prototype._get_next_token = function(p, _) {
        this._readWhitespace();
        var f = this._input.read(/.+/g);
        return f ? this._create_token(h.RAW, f) : this._create_token(h.EOF, "");
      }, m.prototype._is_comment = function(p) {
        return !1;
      }, m.prototype._is_opening = function(p) {
        return !1;
      }, m.prototype._is_closing = function(p, _) {
        return !1;
      }, m.prototype._create_token = function(p, _) {
        var f = new o(
          p,
          _,
          this._patterns.whitespace.newline_count,
          this._patterns.whitespace.whitespace_before_token
        );
        return f;
      }, m.prototype._readWhitespace = function() {
        return this._patterns.whitespace.read();
      }, r.exports.Tokenizer = m, r.exports.TOKEN = h;
    },
    /* 10 */
    /***/
    function(r) {
      function s(a) {
        this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = a;
      }
      s.prototype.restart = function() {
        this.__position = 0;
      }, s.prototype.isEmpty = function() {
        return this.__tokens_length === 0;
      }, s.prototype.hasNext = function() {
        return this.__position < this.__tokens_length;
      }, s.prototype.next = function() {
        var a = null;
        return this.hasNext() && (a = this.__tokens[this.__position], this.__position += 1), a;
      }, s.prototype.peek = function(a) {
        var l = null;
        return a = a || 0, a += this.__position, a >= 0 && a < this.__tokens_length && (l = this.__tokens[a]), l;
      }, s.prototype.add = function(a) {
        this.__parent_token && (a.parent = this.__parent_token), this.__tokens.push(a), this.__tokens_length += 1;
      }, r.exports.TokenStream = s;
    },
    /* 11 */
    /***/
    function(r, s, a) {
      var l = a(12).Pattern;
      function o(u, c) {
        l.call(this, u, c), c ? this._line_regexp = this._input.get_regexp(c._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
      }
      o.prototype = new l(), o.prototype.__set_whitespace_patterns = function(u, c) {
        u += "\\t ", c += "\\n\\r", this._match_pattern = this._input.get_regexp(
          "[" + u + c + "]+",
          !0
        ), this._newline_regexp = this._input.get_regexp(
          "\\r\\n|[" + c + "]"
        );
      }, o.prototype.read = function() {
        this.newline_count = 0, this.whitespace_before_token = "";
        var u = this._input.read(this._match_pattern);
        if (u === " ")
          this.whitespace_before_token = " ";
        else if (u) {
          var c = this.__split(this._newline_regexp, u);
          this.newline_count = c.length - 1, this.whitespace_before_token = c[this.newline_count];
        }
        return u;
      }, o.prototype.matching = function(u, c) {
        var h = this._create();
        return h.__set_whitespace_patterns(u, c), h._update(), h;
      }, o.prototype._create = function() {
        return new o(this._input, this);
      }, o.prototype.__split = function(u, c) {
        u.lastIndex = 0;
        for (var h = 0, m = [], p = u.exec(c); p; )
          m.push(c.substring(h, p.index)), h = p.index + p[0].length, p = u.exec(c);
        return h < c.length ? m.push(c.substring(h, c.length)) : m.push(""), m;
      }, r.exports.WhitespacePattern = o;
    },
    /* 12 */
    /***/
    function(r) {
      function s(a, l) {
        this._input = a, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = !1, l && (this._starting_pattern = this._input.get_regexp(l._starting_pattern, !0), this._match_pattern = this._input.get_regexp(l._match_pattern, !0), this._until_pattern = this._input.get_regexp(l._until_pattern), this._until_after = l._until_after);
      }
      s.prototype.read = function() {
        var a = this._input.read(this._starting_pattern);
        return (!this._starting_pattern || a) && (a += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), a;
      }, s.prototype.read_match = function() {
        return this._input.match(this._match_pattern);
      }, s.prototype.until_after = function(a) {
        var l = this._create();
        return l._until_after = !0, l._until_pattern = this._input.get_regexp(a), l._update(), l;
      }, s.prototype.until = function(a) {
        var l = this._create();
        return l._until_after = !1, l._until_pattern = this._input.get_regexp(a), l._update(), l;
      }, s.prototype.starting_with = function(a) {
        var l = this._create();
        return l._starting_pattern = this._input.get_regexp(a, !0), l._update(), l;
      }, s.prototype.matching = function(a) {
        var l = this._create();
        return l._match_pattern = this._input.get_regexp(a, !0), l._update(), l;
      }, s.prototype._create = function() {
        return new s(this._input, this);
      }, s.prototype._update = function() {
      }, r.exports.Pattern = s;
    },
    /* 13 */
    /***/
    function(r) {
      function s(a, l) {
        a = typeof a == "string" ? a : a.source, l = typeof l == "string" ? l : l.source, this.__directives_block_pattern = new RegExp(a + / beautify( \w+[:]\w+)+ /.source + l, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(a + /\sbeautify\signore:end\s/.source + l, "g");
      }
      s.prototype.get_directives = function(a) {
        if (!a.match(this.__directives_block_pattern))
          return null;
        var l = {};
        this.__directive_pattern.lastIndex = 0;
        for (var o = this.__directive_pattern.exec(a); o; )
          l[o[1]] = o[2], o = this.__directive_pattern.exec(a);
        return l;
      }, s.prototype.readIgnored = function(a) {
        return a.readUntilAfter(this.__directives_end_ignore_pattern);
      }, r.exports.Directives = s;
    },
    /* 14 */
    /***/
    function(r, s, a) {
      var l = a(12).Pattern, o = {
        django: !1,
        erb: !1,
        handlebars: !1,
        php: !1,
        smarty: !1,
        angular: !1
      };
      function u(c, h) {
        l.call(this, c, h), this.__template_pattern = null, this._disabled = Object.assign({}, o), this._excluded = Object.assign({}, o), h && (this.__template_pattern = this._input.get_regexp(h.__template_pattern), this._excluded = Object.assign(this._excluded, h._excluded), this._disabled = Object.assign(this._disabled, h._disabled));
        var m = new l(c);
        this.__patterns = {
          handlebars_comment: m.starting_with(/{{!--/).until_after(/--}}/),
          handlebars_unescaped: m.starting_with(/{{{/).until_after(/}}}/),
          handlebars: m.starting_with(/{{/).until_after(/}}/),
          php: m.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
          erb: m.starting_with(/<%[^%]/).until_after(/[^%]%>/),
          // django coflicts with handlebars a bit.
          django: m.starting_with(/{%/).until_after(/%}/),
          django_value: m.starting_with(/{{/).until_after(/}}/),
          django_comment: m.starting_with(/{#/).until_after(/#}/),
          smarty: m.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
          smarty_comment: m.starting_with(/{\*/).until_after(/\*}/),
          smarty_literal: m.starting_with(/{literal}/).until_after(/{\/literal}/)
        };
      }
      u.prototype = new l(), u.prototype._create = function() {
        return new u(this._input, this);
      }, u.prototype._update = function() {
        this.__set_templated_pattern();
      }, u.prototype.disable = function(c) {
        var h = this._create();
        return h._disabled[c] = !0, h._update(), h;
      }, u.prototype.read_options = function(c) {
        var h = this._create();
        for (var m in o)
          h._disabled[m] = c.templating.indexOf(m) === -1;
        return h._update(), h;
      }, u.prototype.exclude = function(c) {
        var h = this._create();
        return h._excluded[c] = !0, h._update(), h;
      }, u.prototype.read = function() {
        var c = "";
        this._match_pattern ? c = this._input.read(this._starting_pattern) : c = this._input.read(this._starting_pattern, this.__template_pattern);
        for (var h = this._read_template(); h; )
          this._match_pattern ? h += this._input.read(this._match_pattern) : h += this._input.readUntil(this.__template_pattern), c += h, h = this._read_template();
        return this._until_after && (c += this._input.readUntilAfter(this._until_pattern)), c;
      }, u.prototype.__set_templated_pattern = function() {
        var c = [];
        this._disabled.php || c.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || c.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || c.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (c.push(this.__patterns.django._starting_pattern.source), c.push(this.__patterns.django_value._starting_pattern.source), c.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || c.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && c.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + c.join("|") + ")");
      }, u.prototype._read_template = function() {
        var c = "", h = this._input.peek();
        if (h === "<") {
          var m = this._input.peek(1);
          !this._disabled.php && !this._excluded.php && m === "?" && (c = c || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && m === "%" && (c = c || this.__patterns.erb.read());
        } else h === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (c = c || this.__patterns.handlebars_comment.read(), c = c || this.__patterns.handlebars_unescaped.read(), c = c || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (c = c || this.__patterns.django_value.read()), this._excluded.django || (c = c || this.__patterns.django_comment.read(), c = c || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (c = c || this.__patterns.smarty_comment.read(), c = c || this.__patterns.smarty_literal.read(), c = c || this.__patterns.smarty.read()));
        return c;
      }, r.exports.TemplatablePattern = u;
    },
    ,
    ,
    ,
    /* 18 */
    /***/
    function(r, s, a) {
      var l = a(19).Beautifier, o = a(20).Options;
      function u(c, h, m, p) {
        var _ = new l(c, h, m, p);
        return _.beautify();
      }
      r.exports = u, r.exports.defaultOptions = function() {
        return new o();
      };
    },
    /* 19 */
    /***/
    function(r, s, a) {
      var l = a(20).Options, o = a(2).Output, u = a(21).Tokenizer, c = a(21).TOKEN, h = /\r\n|[\r\n]/, m = /\r\n|[\r\n]/g, p = function(b, g) {
        this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = b.max_preserve_newlines, this.preserve_newlines = b.preserve_newlines, this._output = new o(b, g);
      };
      p.prototype.current_line_has_match = function(b) {
        return this._output.current_line.has_match(b);
      }, p.prototype.set_space_before_token = function(b, g) {
        this._output.space_before_token = b, this._output.non_breaking_space = g;
      }, p.prototype.set_wrap_point = function() {
        this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
      }, p.prototype.add_raw_token = function(b) {
        this._output.add_raw_token(b);
      }, p.prototype.print_preserved_newlines = function(b) {
        var g = 0;
        b.type !== c.TEXT && b.previous.type !== c.TEXT && (g = b.newlines ? 1 : 0), this.preserve_newlines && (g = b.newlines < this.max_preserve_newlines + 1 ? b.newlines : this.max_preserve_newlines + 1);
        for (var x = 0; x < g; x++)
          this.print_newline(x > 0);
        return g !== 0;
      }, p.prototype.traverse_whitespace = function(b) {
        return b.whitespace_before || b.newlines ? (this.print_preserved_newlines(b) || (this._output.space_before_token = !0), !0) : !1;
      }, p.prototype.previous_token_wrapped = function() {
        return this._output.previous_token_wrapped;
      }, p.prototype.print_newline = function(b) {
        this._output.add_new_line(b);
      }, p.prototype.print_token = function(b) {
        b.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(b.text));
      }, p.prototype.indent = function() {
        this.indent_level++;
      }, p.prototype.deindent = function() {
        this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
      }, p.prototype.get_full_indent = function(b) {
        return b = this.indent_level + (b || 0), b < 1 ? "" : this._output.get_indent_string(b);
      };
      var _ = function(b) {
        for (var g = null, x = b.next; x.type !== c.EOF && b.closed !== x; ) {
          if (x.type === c.ATTRIBUTE && x.text === "type") {
            x.next && x.next.type === c.EQUALS && x.next.next && x.next.next.type === c.VALUE && (g = x.next.next.text);
            break;
          }
          x = x.next;
        }
        return g;
      }, f = function(b, g) {
        var x = null, W = null;
        return g.closed ? (b === "script" ? x = "text/javascript" : b === "style" && (x = "text/css"), x = _(g) || x, x.search("text/css") > -1 ? W = "css" : x.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? W = "javascript" : x.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? W = "html" : x.search(/test\/null/) > -1 && (W = "null"), W) : null;
      };
      function L(b, g) {
        return g.indexOf(b) !== -1;
      }
      function A(b, g, x) {
        this.parent = b || null, this.tag = g ? g.tag_name : "", this.indent_level = x || 0, this.parser_token = g || null;
      }
      function w(b) {
        this._printer = b, this._current_frame = null;
      }
      w.prototype.get_parser_token = function() {
        return this._current_frame ? this._current_frame.parser_token : null;
      }, w.prototype.record_tag = function(b) {
        var g = new A(this._current_frame, b, this._printer.indent_level);
        this._current_frame = g;
      }, w.prototype._try_pop_frame = function(b) {
        var g = null;
        return b && (g = b.parser_token, this._printer.indent_level = b.indent_level, this._current_frame = b.parent), g;
      }, w.prototype._get_frame = function(b, g) {
        for (var x = this._current_frame; x && b.indexOf(x.tag) === -1; ) {
          if (g && g.indexOf(x.tag) !== -1) {
            x = null;
            break;
          }
          x = x.parent;
        }
        return x;
      }, w.prototype.try_pop = function(b, g) {
        var x = this._get_frame([b], g);
        return this._try_pop_frame(x);
      }, w.prototype.indent_to_tag = function(b) {
        var g = this._get_frame(b);
        g && (this._printer.indent_level = g.indent_level);
      };
      function k(b, g, x, W) {
        this._source_text = b || "", g = g || {}, this._js_beautify = x, this._css_beautify = W, this._tag_stack = null;
        var U = new l(g, "html");
        this._options = U, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
      }
      k.prototype.beautify = function() {
        if (this._options.disabled)
          return this._source_text;
        var b = this._source_text, g = this._options.eol;
        this._options.eol === "auto" && (g = `
`, b && h.test(b) && (g = b.match(h)[0])), b = b.replace(m, `
`);
        var x = b.match(/^[\t ]*/)[0], W = {
          text: "",
          type: ""
        }, U = new H(), E = new p(this._options, x), M = new u(b, this._options).tokenize();
        this._tag_stack = new w(E);
        for (var y = null, N = M.next(); N.type !== c.EOF; )
          N.type === c.TAG_OPEN || N.type === c.COMMENT ? (y = this._handle_tag_open(E, N, U, W, M), U = y) : N.type === c.ATTRIBUTE || N.type === c.EQUALS || N.type === c.VALUE || N.type === c.TEXT && !U.tag_complete ? y = this._handle_inside_tag(E, N, U, W) : N.type === c.TAG_CLOSE ? y = this._handle_tag_close(E, N, U) : N.type === c.TEXT ? y = this._handle_text(E, N, U) : N.type === c.CONTROL_FLOW_OPEN ? y = this._handle_control_flow_open(E, N) : N.type === c.CONTROL_FLOW_CLOSE ? y = this._handle_control_flow_close(E, N) : E.add_raw_token(N), W = y, N = M.next();
        var P = E._output.get_code(g);
        return P;
      }, k.prototype._handle_control_flow_open = function(b, g) {
        var x = {
          text: g.text,
          type: g.type
        };
        return b.set_space_before_token(g.newlines || g.whitespace_before !== "", !0), g.newlines ? b.print_preserved_newlines(g) : b.set_space_before_token(g.newlines || g.whitespace_before !== "", !0), b.print_token(g), b.indent(), x;
      }, k.prototype._handle_control_flow_close = function(b, g) {
        var x = {
          text: g.text,
          type: g.type
        };
        return b.deindent(), g.newlines ? b.print_preserved_newlines(g) : b.set_space_before_token(g.newlines || g.whitespace_before !== "", !0), b.print_token(g), x;
      }, k.prototype._handle_tag_close = function(b, g, x) {
        var W = {
          text: g.text,
          type: g.type
        };
        return b.alignment_size = 0, x.tag_complete = !0, b.set_space_before_token(g.newlines || g.whitespace_before !== "", !0), x.is_unformatted ? b.add_raw_token(g) : (x.tag_start_char === "<" && (b.set_space_before_token(g.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && x.has_wrapped_attrs && b.print_newline(!1)), b.print_token(g)), x.indent_content && !(x.is_unformatted || x.is_content_unformatted) && (b.indent(), x.indent_content = !1), !x.is_inline_element && !(x.is_unformatted || x.is_content_unformatted) && b.set_wrap_point(), W;
      }, k.prototype._handle_inside_tag = function(b, g, x, W) {
        var U = x.has_wrapped_attrs, E = {
          text: g.text,
          type: g.type
        };
        return b.set_space_before_token(g.newlines || g.whitespace_before !== "", !0), x.is_unformatted ? b.add_raw_token(g) : x.tag_start_char === "{" && g.type === c.TEXT ? b.print_preserved_newlines(g) ? (g.newlines = 0, b.add_raw_token(g)) : b.print_token(g) : (g.type === c.ATTRIBUTE ? b.set_space_before_token(!0) : (g.type === c.EQUALS || g.type === c.VALUE && g.previous.type === c.EQUALS) && b.set_space_before_token(!1), g.type === c.ATTRIBUTE && x.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (b.traverse_whitespace(g), U = U || g.newlines !== 0), this._is_wrap_attributes_force && x.attr_count >= this._options.wrap_attributes_min_attrs && (W.type !== c.TAG_OPEN || // ie. second attribute and beyond
        this._is_wrap_attributes_force_expand_multiline) && (b.print_newline(!1), U = !0)), b.print_token(g), U = U || b.previous_token_wrapped(), x.has_wrapped_attrs = U), E;
      }, k.prototype._handle_text = function(b, g, x) {
        var W = {
          text: g.text,
          type: "TK_CONTENT"
        };
        return x.custom_beautifier_name ? this._print_custom_beatifier_text(b, g, x) : x.is_unformatted || x.is_content_unformatted ? b.add_raw_token(g) : (b.traverse_whitespace(g), b.print_token(g)), W;
      }, k.prototype._print_custom_beatifier_text = function(b, g, x) {
        var W = this;
        if (g.text !== "") {
          var U = g.text, E, M = 1, y = "", N = "";
          x.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? E = this._js_beautify : x.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? E = this._css_beautify : x.custom_beautifier_name === "html" && (E = function(Z, se) {
            var ge = new k(Z, se, W._js_beautify, W._css_beautify);
            return ge.beautify();
          }), this._options.indent_scripts === "keep" ? M = 0 : this._options.indent_scripts === "separate" && (M = -b.indent_level);
          var P = b.get_full_indent(M);
          if (U = U.replace(/\n[ \t]*$/, ""), x.custom_beautifier_name !== "html" && U[0] === "<" && U.match(/^(<!--|<!\[CDATA\[)/)) {
            var B = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(U);
            if (!B) {
              b.add_raw_token(g);
              return;
            }
            y = P + B[1] + `
`, U = B[4], B[5] && (N = P + B[5]), U = U.replace(/\n[ \t]*$/, ""), (B[2] || B[3].indexOf(`
`) !== -1) && (B = B[3].match(/[ \t]+$/), B && (g.whitespace_before = B[0]));
          }
          if (U)
            if (E) {
              var G = function() {
                this.eol = `
`;
              };
              G.prototype = this._options.raw_options;
              var q = new G();
              U = E(P + U, q);
            } else {
              var V = g.whitespace_before;
              V && (U = U.replace(new RegExp(`
(` + V + ")?", "g"), `
`)), U = P + U.replace(/\n/g, `
` + P);
            }
          y && (U ? U = y + U + `
` + N : U = y + N), b.print_newline(!1), U && (g.text = U, g.whitespace_before = "", g.newlines = 0, b.add_raw_token(g), b.print_newline(!0));
        }
      }, k.prototype._handle_tag_open = function(b, g, x, W, U) {
        var E = this._get_tag_open_token(g);
        if ((x.is_unformatted || x.is_content_unformatted) && !x.is_empty_element && g.type === c.TAG_OPEN && !E.is_start_tag ? (b.add_raw_token(g), E.start_tag_token = this._tag_stack.try_pop(E.tag_name)) : (b.traverse_whitespace(g), this._set_tag_position(b, g, E, x, W), E.is_inline_element || b.set_wrap_point(), b.print_token(g)), E.is_start_tag && this._is_wrap_attributes_force) {
          var M = 0, y;
          do
            y = U.peek(M), y.type === c.ATTRIBUTE && (E.attr_count += 1), M += 1;
          while (y.type !== c.EOF && y.type !== c.TAG_CLOSE);
        }
        return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (E.alignment_size = g.text.length + 1), !E.tag_complete && !E.is_unformatted && (b.alignment_size = E.alignment_size), E;
      };
      var H = function(b, g) {
        if (this.parent = b || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !g)
          this.tag_complete = !0;
        else {
          var x;
          this.tag_start_char = g.text[0], this.text = g.text, this.tag_start_char === "<" ? (x = g.text.match(/^<([^\s>]*)/), this.tag_check = x ? x[1] : "") : (x = g.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = x ? x[1] : "", (g.text.startsWith("{{#>") || g.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && g.next !== null ? this.tag_check = g.next.text.split(" ")[0] : this.tag_check = g.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), g.type === c.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || g.closed && g.closed.text === "/>";
          var W = 2;
          this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (W = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(W)));
        }
      };
      k.prototype._get_tag_open_token = function(b) {
        var g = new H(this._tag_stack.get_parser_token(), b);
        return g.alignment_size = this._options.wrap_attributes_indent_size, g.is_end_tag = g.is_end_tag || L(g.tag_check, this._options.void_elements), g.is_empty_element = g.tag_complete || g.is_start_tag && g.is_end_tag, g.is_unformatted = !g.tag_complete && L(g.tag_check, this._options.unformatted), g.is_content_unformatted = !g.is_empty_element && L(g.tag_check, this._options.content_unformatted), g.is_inline_element = L(g.tag_name, this._options.inline) || this._options.inline_custom_elements && g.tag_name.includes("-") || g.tag_start_char === "{", g;
      }, k.prototype._set_tag_position = function(b, g, x, W, U) {
        if (x.is_empty_element || (x.is_end_tag ? x.start_tag_token = this._tag_stack.try_pop(x.tag_name) : (this._do_optional_end_element(x) && (x.is_inline_element || b.print_newline(!1)), this._tag_stack.record_tag(x), (x.tag_name === "script" || x.tag_name === "style") && !(x.is_unformatted || x.is_content_unformatted) && (x.custom_beautifier_name = f(x.tag_check, g)))), L(x.tag_check, this._options.extra_liners) && (b.print_newline(!1), b._output.just_added_blankline() || b.print_newline(!0)), x.is_empty_element) {
          if (x.tag_start_char === "{" && x.tag_check === "else") {
            this._tag_stack.indent_to_tag(["if", "unless", "each"]), x.indent_content = !0;
            var E = b.current_line_has_match(/{{#if/);
            E || b.print_newline(!1);
          }
          x.tag_name === "!--" && U.type === c.TAG_CLOSE && W.is_end_tag && x.text.indexOf(`
`) === -1 || (x.is_inline_element || x.is_unformatted || b.print_newline(!1), this._calcluate_parent_multiline(b, x));
        } else if (x.is_end_tag) {
          var M = !1;
          M = x.start_tag_token && x.start_tag_token.multiline_content, M = M || !x.is_inline_element && !(W.is_inline_element || W.is_unformatted) && !(U.type === c.TAG_CLOSE && x.start_tag_token === W) && U.type !== "TK_CONTENT", (x.is_content_unformatted || x.is_unformatted) && (M = !1), M && b.print_newline(!1);
        } else
          x.indent_content = !x.custom_beautifier_name, x.tag_start_char === "<" && (x.tag_name === "html" ? x.indent_content = this._options.indent_inner_html : x.tag_name === "head" ? x.indent_content = this._options.indent_head_inner_html : x.tag_name === "body" && (x.indent_content = this._options.indent_body_inner_html)), !(x.is_inline_element || x.is_unformatted) && (U.type !== "TK_CONTENT" || x.is_content_unformatted) && b.print_newline(!1), this._calcluate_parent_multiline(b, x);
      }, k.prototype._calcluate_parent_multiline = function(b, g) {
        g.parent && b._output.just_added_newline() && !((g.is_inline_element || g.is_unformatted) && g.parent.is_inline_element) && (g.parent.multiline_content = !0);
      };
      var D = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], I = ["a", "audio", "del", "ins", "map", "noscript", "video"];
      k.prototype._do_optional_end_element = function(b) {
        var g = null;
        if (!(b.is_empty_element || !b.is_start_tag || !b.parent)) {
          if (b.tag_name === "body")
            g = g || this._tag_stack.try_pop("head");
          else if (b.tag_name === "li")
            g = g || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
          else if (b.tag_name === "dd" || b.tag_name === "dt")
            g = g || this._tag_stack.try_pop("dt", ["dl"]), g = g || this._tag_stack.try_pop("dd", ["dl"]);
          else if (b.parent.tag_name === "p" && D.indexOf(b.tag_name) !== -1) {
            var x = b.parent.parent;
            (!x || I.indexOf(x.tag_name) === -1) && (g = g || this._tag_stack.try_pop("p"));
          } else b.tag_name === "rp" || b.tag_name === "rt" ? (g = g || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), g = g || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : b.tag_name === "optgroup" ? g = g || this._tag_stack.try_pop("optgroup", ["select"]) : b.tag_name === "option" ? g = g || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : b.tag_name === "colgroup" ? g = g || this._tag_stack.try_pop("caption", ["table"]) : b.tag_name === "thead" ? (g = g || this._tag_stack.try_pop("caption", ["table"]), g = g || this._tag_stack.try_pop("colgroup", ["table"])) : b.tag_name === "tbody" || b.tag_name === "tfoot" ? (g = g || this._tag_stack.try_pop("caption", ["table"]), g = g || this._tag_stack.try_pop("colgroup", ["table"]), g = g || this._tag_stack.try_pop("thead", ["table"]), g = g || this._tag_stack.try_pop("tbody", ["table"])) : b.tag_name === "tr" ? (g = g || this._tag_stack.try_pop("caption", ["table"]), g = g || this._tag_stack.try_pop("colgroup", ["table"]), g = g || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (b.tag_name === "th" || b.tag_name === "td") && (g = g || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), g = g || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
          return b.parent = this._tag_stack.get_parser_token(), g;
        }
      }, r.exports.Beautifier = k;
    },
    /* 20 */
    /***/
    function(r, s, a) {
      var l = a(6).Options;
      function o(u) {
        l.call(this, u, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", !0), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", !0), this.indent_handlebars = this._get_boolean("indent_handlebars", !0), this.wrap_attributes = this._get_selection(
          "wrap_attributes",
          ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
        ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
          "a",
          "abbr",
          "area",
          "audio",
          "b",
          "bdi",
          "bdo",
          "br",
          "button",
          "canvas",
          "cite",
          "code",
          "data",
          "datalist",
          "del",
          "dfn",
          "em",
          "embed",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "map",
          "mark",
          "math",
          "meter",
          "noscript",
          "object",
          "output",
          "progress",
          "q",
          "ruby",
          "s",
          "samp",
          /* 'script', */
          "select",
          "small",
          "span",
          "strong",
          "sub",
          "sup",
          "svg",
          "template",
          "textarea",
          "time",
          "u",
          "var",
          "video",
          "wbr",
          "text",
          // obsolete inline tags
          "acronym",
          "big",
          "strike",
          "tt"
        ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", !0), this.void_elements = this._get_array("void_elements", [
          // HTLM void elements - aka self-closing tags - aka singletons
          // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
          "area",
          "base",
          "br",
          "col",
          "embed",
          "hr",
          "img",
          "input",
          "keygen",
          "link",
          "menuitem",
          "meta",
          "param",
          "source",
          "track",
          "wbr",
          // NOTE: Optional tags are too complex for a simple list
          // they are hard coded in _do_optional_end_element
          // Doctype and xml elements
          "!doctype",
          "?xml",
          // obsolete tags
          // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
          // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
          "basefont",
          "isindex"
        ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
          "pre",
          "textarea"
        ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
      }
      o.prototype = new l(), r.exports.Options = o;
    },
    /* 21 */
    /***/
    function(r, s, a) {
      var l = a(9).Tokenizer, o = a(9).TOKEN, u = a(13).Directives, c = a(14).TemplatablePattern, h = a(12).Pattern, m = {
        TAG_OPEN: "TK_TAG_OPEN",
        TAG_CLOSE: "TK_TAG_CLOSE",
        CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
        CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
        ATTRIBUTE: "TK_ATTRIBUTE",
        EQUALS: "TK_EQUALS",
        VALUE: "TK_VALUE",
        COMMENT: "TK_COMMENT",
        TEXT: "TK_TEXT",
        UNKNOWN: "TK_UNKNOWN",
        START: o.START,
        RAW: o.RAW,
        EOF: o.EOF
      }, p = new u(/<\!--/, /-->/), _ = function(f, L) {
        l.call(this, f, L), this._current_tag_name = "";
        var A = new c(this._input).read_options(this._options), w = new h(this._input);
        if (this.__patterns = {
          word: A.until(/[\n\r\t <]/),
          word_control_flow_close_excluded: A.until(/[\n\r\t <}]/),
          single_quote: A.until_after(/'/),
          double_quote: A.until_after(/"/),
          attribute: A.until(/[\n\r\t =>]|\/>/),
          element_name: A.until(/[\n\r\t >\/]/),
          angular_control_flow_start: w.matching(/\@[a-zA-Z]+[^({]*[({]/),
          handlebars_comment: w.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: w.starting_with(/{{/).until_after(/}}/),
          handlebars_open: w.until(/[\n\r\t }]/),
          handlebars_raw_close: w.until(/}}/),
          comment: w.starting_with(/<!--/).until_after(/-->/),
          cdata: w.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
          // https://en.wikipedia.org/wiki/Conditional_comment
          conditional_comment: w.starting_with(/<!\[/).until_after(/]>/),
          processing: w.starting_with(/<\?/).until_after(/\?>/)
        }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
          var k = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
          this.__patterns.unformatted_content_delimiter = w.matching(k).until_after(k);
        }
      };
      _.prototype = new l(), _.prototype._is_comment = function(f) {
        return !1;
      }, _.prototype._is_opening = function(f) {
        return f.type === m.TAG_OPEN || f.type === m.CONTROL_FLOW_OPEN;
      }, _.prototype._is_closing = function(f, L) {
        return f.type === m.TAG_CLOSE && L && ((f.text === ">" || f.text === "/>") && L.text[0] === "<" || f.text === "}}" && L.text[0] === "{" && L.text[1] === "{") || f.type === m.CONTROL_FLOW_CLOSE && f.text === "}" && L.text.endsWith("{");
      }, _.prototype._reset = function() {
        this._current_tag_name = "";
      }, _.prototype._get_next_token = function(f, L) {
        var A = null;
        this._readWhitespace();
        var w = this._input.peek();
        return w === null ? this._create_token(m.EOF, "") : (A = A || this._read_open_handlebars(w, L), A = A || this._read_attribute(w, f, L), A = A || this._read_close(w, L), A = A || this._read_control_flows(w, L), A = A || this._read_raw_content(w, f, L), A = A || this._read_content_word(w, L), A = A || this._read_comment_or_cdata(w), A = A || this._read_processing(w), A = A || this._read_open(w, L), A = A || this._create_token(m.UNKNOWN, this._input.next()), A);
      }, _.prototype._read_comment_or_cdata = function(f) {
        var L = null, A = null, w = null;
        if (f === "<") {
          var k = this._input.peek(1);
          k === "!" && (A = this.__patterns.comment.read(), A ? (w = p.get_directives(A), w && w.ignore === "start" && (A += p.readIgnored(this._input))) : A = this.__patterns.cdata.read()), A && (L = this._create_token(m.COMMENT, A), L.directives = w);
        }
        return L;
      }, _.prototype._read_processing = function(f) {
        var L = null, A = null, w = null;
        if (f === "<") {
          var k = this._input.peek(1);
          (k === "!" || k === "?") && (A = this.__patterns.conditional_comment.read(), A = A || this.__patterns.processing.read()), A && (L = this._create_token(m.COMMENT, A), L.directives = w);
        }
        return L;
      }, _.prototype._read_open = function(f, L) {
        var A = null, w = null;
        return (!L || L.type === m.CONTROL_FLOW_OPEN) && f === "<" && (A = this._input.next(), this._input.peek() === "/" && (A += this._input.next()), A += this.__patterns.element_name.read(), w = this._create_token(m.TAG_OPEN, A)), w;
      }, _.prototype._read_open_handlebars = function(f, L) {
        var A = null, w = null;
        return (!L || L.type === m.CONTROL_FLOW_OPEN) && this._options.indent_handlebars && f === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (A = this.__patterns.handlebars_comment.read(), A = A || this.__patterns.handlebars.read(), w = this._create_token(m.COMMENT, A)) : (A = this.__patterns.handlebars_open.read(), w = this._create_token(m.TAG_OPEN, A))), w;
      }, _.prototype._read_control_flows = function(f, L) {
        var A = "", w = null;
        if (!this._options.templating.includes("angular") || !this._options.indent_handlebars)
          return w;
        if (f === "@") {
          if (A = this.__patterns.angular_control_flow_start.read(), A === "")
            return w;
          for (var k = A.endsWith("(") ? 1 : 0, H = 0; !(A.endsWith("{") && k === H); ) {
            var D = this._input.next();
            if (D === null)
              break;
            D === "(" ? k++ : D === ")" && H++, A += D;
          }
          w = this._create_token(m.CONTROL_FLOW_OPEN, A);
        } else f === "}" && L && L.type === m.CONTROL_FLOW_OPEN && (A = this._input.next(), w = this._create_token(m.CONTROL_FLOW_CLOSE, A));
        return w;
      }, _.prototype._read_close = function(f, L) {
        var A = null, w = null;
        return L && L.type === m.TAG_OPEN && (L.text[0] === "<" && (f === ">" || f === "/" && this._input.peek(1) === ">") ? (A = this._input.next(), f === "/" && (A += this._input.next()), w = this._create_token(m.TAG_CLOSE, A)) : L.text[0] === "{" && f === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), w = this._create_token(m.TAG_CLOSE, "}}"))), w;
      }, _.prototype._read_attribute = function(f, L, A) {
        var w = null, k = "";
        if (A && A.text[0] === "<")
          if (f === "=")
            w = this._create_token(m.EQUALS, this._input.next());
          else if (f === '"' || f === "'") {
            var H = this._input.next();
            f === '"' ? H += this.__patterns.double_quote.read() : H += this.__patterns.single_quote.read(), w = this._create_token(m.VALUE, H);
          } else
            k = this.__patterns.attribute.read(), k && (L.type === m.EQUALS ? w = this._create_token(m.VALUE, k) : w = this._create_token(m.ATTRIBUTE, k));
        return w;
      }, _.prototype._is_content_unformatted = function(f) {
        return this._options.void_elements.indexOf(f) === -1 && (this._options.content_unformatted.indexOf(f) !== -1 || this._options.unformatted.indexOf(f) !== -1);
      }, _.prototype._read_raw_content = function(f, L, A) {
        var w = "";
        if (A && A.text[0] === "{")
          w = this.__patterns.handlebars_raw_close.read();
        else if (L.type === m.TAG_CLOSE && L.opened.text[0] === "<" && L.text[0] !== "/") {
          var k = L.opened.text.substr(1).toLowerCase();
          if (k === "script" || k === "style") {
            var H = this._read_comment_or_cdata(f);
            if (H)
              return H.type = m.TEXT, H;
            w = this._input.readUntil(new RegExp("</" + k + "[\\n\\r\\t ]*?>", "ig"));
          } else this._is_content_unformatted(k) && (w = this._input.readUntil(new RegExp("</" + k + "[\\n\\r\\t ]*?>", "ig")));
        }
        return w ? this._create_token(m.TEXT, w) : null;
      }, _.prototype._read_content_word = function(f, L) {
        var A = "";
        if (this._options.unformatted_content_delimiter && f === this._options.unformatted_content_delimiter[0] && (A = this.__patterns.unformatted_content_delimiter.read()), A || (A = L && L.type === m.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), A)
          return this._create_token(m.TEXT, A);
      }, r.exports.Tokenizer = _, r.exports.TOKEN = m;
    }
    /******/
  ], t = {};
  function n(r) {
    var s = t[r];
    if (s !== void 0)
      return s.exports;
    var a = t[r] = {
      /******/
      // no module.id needed
      /******/
      // no module.loaded needed
      /******/
      exports: {}
      /******/
    };
    return e[r](a, a.exports, n), a.exports;
  }
  var i = n(18);
  Wl = i;
})();
function O1(e, t) {
  return Wl(e, t, B1, H1);
}
function z1(e, t, n) {
  let i = e.getText(), r = !0, s = 0;
  const a = n.tabSize || 4;
  if (t) {
    let u = e.offsetAt(t.start), c = u;
    for (; c > 0 && Ko(i, c - 1); )
      c--;
    c === 0 || Zo(i, c - 1) ? u = c : c < u && (u = c + 1);
    let h = e.offsetAt(t.end), m = h;
    for (; m < i.length && Ko(i, m); )
      m++;
    (m === i.length || Zo(i, m)) && (h = m), t = ne.create(e.positionAt(u), e.positionAt(h));
    const p = i.substring(0, u);
    if (new RegExp(/.*[<][^>]*$/).test(p))
      return i = i.substring(u, h), [{
        range: t,
        newText: i
      }];
    if (r = h === i.length, i = i.substring(u, h), u !== 0) {
      const _ = e.offsetAt(fe.create(t.start.line, 0));
      s = V1(e.getText(), _, n);
    }
  } else
    t = ne.create(fe.create(0, 0), e.positionAt(i.length));
  const l = {
    indent_size: a,
    indent_char: n.insertSpaces ? " " : "	",
    indent_empty_lines: Ie(n, "indentEmptyLines", !1),
    wrap_line_length: Ie(n, "wrapLineLength", 120),
    unformatted: Ai(n, "unformatted", void 0),
    content_unformatted: Ai(n, "contentUnformatted", void 0),
    indent_inner_html: Ie(n, "indentInnerHtml", !1),
    preserve_newlines: Ie(n, "preserveNewLines", !0),
    max_preserve_newlines: Ie(n, "maxPreserveNewLines", 32786),
    indent_handlebars: Ie(n, "indentHandlebars", !1),
    end_with_newline: r && Ie(n, "endWithNewline", !1),
    extra_liners: Ai(n, "extraLiners", void 0),
    wrap_attributes: Ie(n, "wrapAttributes", "auto"),
    wrap_attributes_indent_size: Ie(n, "wrapAttributesIndentSize", void 0),
    eol: `
`,
    indent_scripts: Ie(n, "indentScripts", "normal"),
    templating: q1(n, "all"),
    unformatted_content_delimiter: Ie(n, "unformattedContentDelimiter", "")
  };
  let o = O1(W1(i), l);
  if (s > 0) {
    const u = n.insertSpaces ? Qo(" ", a * s) : Qo("	", s);
    o = o.split(`
`).join(`
` + u), t.start.character === 0 && (o = u + o);
  }
  return [{
    range: t,
    newText: o
  }];
}
function W1(e) {
  return e.replace(/^\s+/, "");
}
function Ie(e, t, n) {
  if (e && e.hasOwnProperty(t)) {
    const i = e[t];
    if (i !== null)
      return i;
  }
  return n;
}
function Ai(e, t, n) {
  const i = Ie(e, t, null);
  return typeof i == "string" ? i.length > 0 ? i.split(",").map((r) => r.trim().toLowerCase()) : [] : n;
}
function q1(e, t) {
  const n = Ie(e, "templating", t);
  return n === !0 ? ["auto"] : n === !1 || n === t || Array.isArray(n) === !1 ? ["none"] : n;
}
function V1(e, t, n) {
  let i = t, r = 0;
  const s = n.tabSize || 4;
  for (; i < e.length; ) {
    const a = e.charAt(i);
    if (a === " ")
      r++;
    else if (a === "	")
      r += s;
    else
      break;
    i++;
  }
  return Math.floor(r / s);
}
function Zo(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
function Ko(e, t) {
  return " 	".indexOf(e.charAt(t)) !== -1;
}
var ql;
(() => {
  var e = { 470: (r) => {
    function s(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function a(o, u) {
      for (var c, h = "", m = 0, p = -1, _ = 0, f = 0; f <= o.length; ++f) {
        if (f < o.length)
          c = o.charCodeAt(f);
        else {
          if (c === 47)
            break;
          c = 47;
        }
        if (c === 47) {
          if (!(p === f - 1 || _ === 1))
            if (p !== f - 1 && _ === 2) {
              if (h.length < 2 || m !== 2 || h.charCodeAt(h.length - 1) !== 46 || h.charCodeAt(h.length - 2) !== 46) {
                if (h.length > 2) {
                  var L = h.lastIndexOf("/");
                  if (L !== h.length - 1) {
                    L === -1 ? (h = "", m = 0) : m = (h = h.slice(0, L)).length - 1 - h.lastIndexOf("/"), p = f, _ = 0;
                    continue;
                  }
                } else if (h.length === 2 || h.length === 1) {
                  h = "", m = 0, p = f, _ = 0;
                  continue;
                }
              }
              u && (h.length > 0 ? h += "/.." : h = "..", m = 2);
            } else
              h.length > 0 ? h += "/" + o.slice(p + 1, f) : h = o.slice(p + 1, f), m = f - p - 1;
          p = f, _ = 0;
        } else
          c === 46 && _ !== -1 ? ++_ : _ = -1;
      }
      return h;
    }
    var l = { resolve: function() {
      for (var o, u = "", c = !1, h = arguments.length - 1; h >= -1 && !c; h--) {
        var m;
        h >= 0 ? m = arguments[h] : (o === void 0 && (o = process.cwd()), m = o), s(m), m.length !== 0 && (u = m + "/" + u, c = m.charCodeAt(0) === 47);
      }
      return u = a(u, !c), c ? u.length > 0 ? "/" + u : "/" : u.length > 0 ? u : ".";
    }, normalize: function(o) {
      if (s(o), o.length === 0)
        return ".";
      var u = o.charCodeAt(0) === 47, c = o.charCodeAt(o.length - 1) === 47;
      return (o = a(o, !u)).length !== 0 || u || (o = "."), o.length > 0 && c && (o += "/"), u ? "/" + o : o;
    }, isAbsolute: function(o) {
      return s(o), o.length > 0 && o.charCodeAt(0) === 47;
    }, join: function() {
      if (arguments.length === 0)
        return ".";
      for (var o, u = 0; u < arguments.length; ++u) {
        var c = arguments[u];
        s(c), c.length > 0 && (o === void 0 ? o = c : o += "/" + c);
      }
      return o === void 0 ? "." : l.normalize(o);
    }, relative: function(o, u) {
      if (s(o), s(u), o === u || (o = l.resolve(o)) === (u = l.resolve(u)))
        return "";
      for (var c = 1; c < o.length && o.charCodeAt(c) === 47; ++c)
        ;
      for (var h = o.length, m = h - c, p = 1; p < u.length && u.charCodeAt(p) === 47; ++p)
        ;
      for (var _ = u.length - p, f = m < _ ? m : _, L = -1, A = 0; A <= f; ++A) {
        if (A === f) {
          if (_ > f) {
            if (u.charCodeAt(p + A) === 47)
              return u.slice(p + A + 1);
            if (A === 0)
              return u.slice(p + A);
          } else
            m > f && (o.charCodeAt(c + A) === 47 ? L = A : A === 0 && (L = 0));
          break;
        }
        var w = o.charCodeAt(c + A);
        if (w !== u.charCodeAt(p + A))
          break;
        w === 47 && (L = A);
      }
      var k = "";
      for (A = c + L + 1; A <= h; ++A)
        A !== h && o.charCodeAt(A) !== 47 || (k.length === 0 ? k += ".." : k += "/..");
      return k.length > 0 ? k + u.slice(p + L) : (p += L, u.charCodeAt(p) === 47 && ++p, u.slice(p));
    }, _makeLong: function(o) {
      return o;
    }, dirname: function(o) {
      if (s(o), o.length === 0)
        return ".";
      for (var u = o.charCodeAt(0), c = u === 47, h = -1, m = !0, p = o.length - 1; p >= 1; --p)
        if ((u = o.charCodeAt(p)) === 47) {
          if (!m) {
            h = p;
            break;
          }
        } else
          m = !1;
      return h === -1 ? c ? "/" : "." : c && h === 1 ? "//" : o.slice(0, h);
    }, basename: function(o, u) {
      if (u !== void 0 && typeof u != "string")
        throw new TypeError('"ext" argument must be a string');
      s(o);
      var c, h = 0, m = -1, p = !0;
      if (u !== void 0 && u.length > 0 && u.length <= o.length) {
        if (u.length === o.length && u === o)
          return "";
        var _ = u.length - 1, f = -1;
        for (c = o.length - 1; c >= 0; --c) {
          var L = o.charCodeAt(c);
          if (L === 47) {
            if (!p) {
              h = c + 1;
              break;
            }
          } else
            f === -1 && (p = !1, f = c + 1), _ >= 0 && (L === u.charCodeAt(_) ? --_ == -1 && (m = c) : (_ = -1, m = f));
        }
        return h === m ? m = f : m === -1 && (m = o.length), o.slice(h, m);
      }
      for (c = o.length - 1; c >= 0; --c)
        if (o.charCodeAt(c) === 47) {
          if (!p) {
            h = c + 1;
            break;
          }
        } else
          m === -1 && (p = !1, m = c + 1);
      return m === -1 ? "" : o.slice(h, m);
    }, extname: function(o) {
      s(o);
      for (var u = -1, c = 0, h = -1, m = !0, p = 0, _ = o.length - 1; _ >= 0; --_) {
        var f = o.charCodeAt(_);
        if (f !== 47)
          h === -1 && (m = !1, h = _ + 1), f === 46 ? u === -1 ? u = _ : p !== 1 && (p = 1) : u !== -1 && (p = -1);
        else if (!m) {
          c = _ + 1;
          break;
        }
      }
      return u === -1 || h === -1 || p === 0 || p === 1 && u === h - 1 && u === c + 1 ? "" : o.slice(u, h);
    }, format: function(o) {
      if (o === null || typeof o != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
      return function(u, c) {
        var h = c.dir || c.root, m = c.base || (c.name || "") + (c.ext || "");
        return h ? h === c.root ? h + m : h + "/" + m : m;
      }(0, o);
    }, parse: function(o) {
      s(o);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (o.length === 0)
        return u;
      var c, h = o.charCodeAt(0), m = h === 47;
      m ? (u.root = "/", c = 1) : c = 0;
      for (var p = -1, _ = 0, f = -1, L = !0, A = o.length - 1, w = 0; A >= c; --A)
        if ((h = o.charCodeAt(A)) !== 47)
          f === -1 && (L = !1, f = A + 1), h === 46 ? p === -1 ? p = A : w !== 1 && (w = 1) : p !== -1 && (w = -1);
        else if (!L) {
          _ = A + 1;
          break;
        }
      return p === -1 || f === -1 || w === 0 || w === 1 && p === f - 1 && p === _ + 1 ? f !== -1 && (u.base = u.name = _ === 0 && m ? o.slice(1, f) : o.slice(_, f)) : (_ === 0 && m ? (u.name = o.slice(1, p), u.base = o.slice(1, f)) : (u.name = o.slice(_, p), u.base = o.slice(_, f)), u.ext = o.slice(p, f)), _ > 0 ? u.dir = o.slice(0, _ - 1) : m && (u.dir = "/"), u;
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
    n.r(i), n.d(i, { URI: () => m, Utils: () => W }), typeof process == "object" ? r = process.platform === "win32" : typeof navigator == "object" && (r = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, l = /^\/\//;
    function o(U, E) {
      if (!U.scheme && E)
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
    const u = "", c = "/", h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class m {
      constructor(E, M, y, N, P, B = !1) {
        lt(this, "scheme");
        lt(this, "authority");
        lt(this, "path");
        lt(this, "query");
        lt(this, "fragment");
        typeof E == "object" ? (this.scheme = E.scheme || u, this.authority = E.authority || u, this.path = E.path || u, this.query = E.query || u, this.fragment = E.fragment || u) : (this.scheme = /* @__PURE__ */ function(G, q) {
          return G || q ? G : "file";
        }(E, B), this.authority = M || u, this.path = function(G, q) {
          switch (G) {
            case "https":
            case "http":
            case "file":
              q ? q[0] !== c && (q = c + q) : q = c;
          }
          return q;
        }(this.scheme, y || u), this.query = N || u, this.fragment = P || u, o(this, B));
      }
      static isUri(E) {
        return E instanceof m || !!E && typeof E.authority == "string" && typeof E.fragment == "string" && typeof E.path == "string" && typeof E.query == "string" && typeof E.scheme == "string" && typeof E.fsPath == "string" && typeof E.with == "function" && typeof E.toString == "function";
      }
      get fsPath() {
        return w(this);
      }
      with(E) {
        if (!E)
          return this;
        let { scheme: M, authority: y, path: N, query: P, fragment: B } = E;
        return M === void 0 ? M = this.scheme : M === null && (M = u), y === void 0 ? y = this.authority : y === null && (y = u), N === void 0 ? N = this.path : N === null && (N = u), P === void 0 ? P = this.query : P === null && (P = u), B === void 0 ? B = this.fragment : B === null && (B = u), M === this.scheme && y === this.authority && N === this.path && P === this.query && B === this.fragment ? this : new _(M, y, N, P, B);
      }
      static parse(E, M = !1) {
        const y = h.exec(E);
        return y ? new _(y[2] || u, I(y[4] || u), I(y[5] || u), I(y[7] || u), I(y[9] || u), M) : new _(u, u, u, u, u);
      }
      static file(E) {
        let M = u;
        if (r && (E = E.replace(/\\/g, c)), E[0] === c && E[1] === c) {
          const y = E.indexOf(c, 2);
          y === -1 ? (M = E.substring(2), E = c) : (M = E.substring(2, y), E = E.substring(y) || c);
        }
        return new _("file", M, E, u, u);
      }
      static from(E) {
        const M = new _(E.scheme, E.authority, E.path, E.query, E.fragment);
        return o(M, !0), M;
      }
      toString(E = !1) {
        return k(this, E);
      }
      toJSON() {
        return this;
      }
      static revive(E) {
        if (E) {
          if (E instanceof m)
            return E;
          {
            const M = new _(E);
            return M._formatted = E.external, M._fsPath = E._sep === p ? E.fsPath : null, M;
          }
        }
        return E;
      }
    }
    const p = r ? 1 : void 0;
    class _ extends m {
      constructor() {
        super(...arguments);
        lt(this, "_formatted", null);
        lt(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = w(this)), this._fsPath;
      }
      toString(M = !1) {
        return M ? k(this, !0) : (this._formatted || (this._formatted = k(this, !1)), this._formatted);
      }
      toJSON() {
        const M = { $mid: 1 };
        return this._fsPath && (M.fsPath = this._fsPath, M._sep = p), this._formatted && (M.external = this._formatted), this.path && (M.path = this.path), this.scheme && (M.scheme = this.scheme), this.authority && (M.authority = this.authority), this.query && (M.query = this.query), this.fragment && (M.fragment = this.fragment), M;
      }
    }
    const f = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function L(U, E, M) {
      let y, N = -1;
      for (let P = 0; P < U.length; P++) {
        const B = U.charCodeAt(P);
        if (B >= 97 && B <= 122 || B >= 65 && B <= 90 || B >= 48 && B <= 57 || B === 45 || B === 46 || B === 95 || B === 126 || E && B === 47 || M && B === 91 || M && B === 93 || M && B === 58)
          N !== -1 && (y += encodeURIComponent(U.substring(N, P)), N = -1), y !== void 0 && (y += U.charAt(P));
        else {
          y === void 0 && (y = U.substr(0, P));
          const G = f[B];
          G !== void 0 ? (N !== -1 && (y += encodeURIComponent(U.substring(N, P)), N = -1), y += G) : N === -1 && (N = P);
        }
      }
      return N !== -1 && (y += encodeURIComponent(U.substring(N))), y !== void 0 ? y : U;
    }
    function A(U) {
      let E;
      for (let M = 0; M < U.length; M++) {
        const y = U.charCodeAt(M);
        y === 35 || y === 63 ? (E === void 0 && (E = U.substr(0, M)), E += f[y]) : E !== void 0 && (E += U[M]);
      }
      return E !== void 0 ? E : U;
    }
    function w(U, E) {
      let M;
      return M = U.authority && U.path.length > 1 && U.scheme === "file" ? `//${U.authority}${U.path}` : U.path.charCodeAt(0) === 47 && (U.path.charCodeAt(1) >= 65 && U.path.charCodeAt(1) <= 90 || U.path.charCodeAt(1) >= 97 && U.path.charCodeAt(1) <= 122) && U.path.charCodeAt(2) === 58 ? U.path[1].toLowerCase() + U.path.substr(2) : U.path, r && (M = M.replace(/\//g, "\\")), M;
    }
    function k(U, E) {
      const M = E ? A : L;
      let y = "", { scheme: N, authority: P, path: B, query: G, fragment: q } = U;
      if (N && (y += N, y += ":"), (P || N === "file") && (y += c, y += c), P) {
        let V = P.indexOf("@");
        if (V !== -1) {
          const Z = P.substr(0, V);
          P = P.substr(V + 1), V = Z.lastIndexOf(":"), V === -1 ? y += M(Z, !1, !1) : (y += M(Z.substr(0, V), !1, !1), y += ":", y += M(Z.substr(V + 1), !1, !0)), y += "@";
        }
        P = P.toLowerCase(), V = P.lastIndexOf(":"), V === -1 ? y += M(P, !1, !0) : (y += M(P.substr(0, V), !1, !0), y += P.substr(V));
      }
      if (B) {
        if (B.length >= 3 && B.charCodeAt(0) === 47 && B.charCodeAt(2) === 58) {
          const V = B.charCodeAt(1);
          V >= 65 && V <= 90 && (B = `/${String.fromCharCode(V + 32)}:${B.substr(3)}`);
        } else if (B.length >= 2 && B.charCodeAt(1) === 58) {
          const V = B.charCodeAt(0);
          V >= 65 && V <= 90 && (B = `${String.fromCharCode(V + 32)}:${B.substr(2)}`);
        }
        y += M(B, !0, !1);
      }
      return G && (y += "?", y += M(G, !1, !1)), q && (y += "#", y += E ? q : L(q, !1, !1)), y;
    }
    function H(U) {
      try {
        return decodeURIComponent(U);
      } catch {
        return U.length > 3 ? U.substr(0, 3) + H(U.substr(3)) : U;
      }
    }
    const D = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function I(U) {
      return U.match(D) ? U.replace(D, (E) => H(E)) : U;
    }
    var b = n(470);
    const g = b.posix || b, x = "/";
    var W;
    (function(U) {
      U.joinPath = function(E, ...M) {
        return E.with({ path: g.join(E.path, ...M) });
      }, U.resolvePath = function(E, ...M) {
        let y = E.path, N = !1;
        y[0] !== x && (y = x + y, N = !0);
        let P = g.resolve(y, ...M);
        return N && P[0] === x && !E.authority && (P = P.substring(1)), E.with({ path: P });
      }, U.dirname = function(E) {
        if (E.path.length === 0 || E.path === x)
          return E;
        let M = g.dirname(E.path);
        return M.length === 1 && M.charCodeAt(0) === 46 && (M = ""), E.with({ path: M });
      }, U.basename = function(E) {
        return g.basename(E.path);
      }, U.extname = function(E) {
        return g.extname(E.path);
      };
    })(W || (W = {}));
  })(), ql = i;
})();
var { URI: C1, Utils: pd } = ql;
function gr(e) {
  const t = e[0], n = e[e.length - 1];
  return t === n && (t === "'" || t === '"') && (e = e.substring(1, e.length - 1)), e;
}
function G1(e, t) {
  return !e.length || t === "handlebars" && /{{|}}/.test(e) ? !1 : /\b(w[\w\d+.-]*:\/\/)?[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/.test(e);
}
function j1(e, t, n, i) {
  if (/^\s*javascript\:/i.test(t) || /[\n\r]/.test(t))
    return;
  t = t.replace(/^\s*/g, "");
  const r = t.match(/^(\w[\w\d+.-]*):/);
  if (r) {
    const s = r[1].toLowerCase();
    return s === "http" || s === "https" || s === "file" ? t : void 0;
  }
  return /^\#/i.test(t) ? e + t : /^\/\//i.test(t) ? (gt(e, "https://") ? "https" : "http") + ":" + t.replace(/^\s*/g, "") : n ? n.resolveReference(t, i || e) : t;
}
function $1(e, t, n, i, r, s) {
  const a = gr(n);
  if (!G1(a, e.languageId))
    return;
  a.length < n.length && (i++, r--);
  const l = j1(e.uri, a, t, s);
  if (!l)
    return;
  const o = Y1(l, e);
  return {
    range: ne.create(e.positionAt(i), e.positionAt(r)),
    target: o
  };
}
var X1 = 35;
function Y1(e, t) {
  try {
    let n = C1.parse(e);
    return n.scheme === "file" && n.query && (n = n.with({ query: null }), e = n.toString(
      /* skipEncodig*/
      !0
    )), n.scheme === "file" && n.fragment && !(e.startsWith(t.uri) && e.charCodeAt(t.uri.length) === X1) ? n.with({ fragment: null }).toString(
      /* skipEncodig*/
      !0
    ) : e;
  } catch {
    return;
  }
}
var Q1 = class {
  constructor(e) {
    this.dataManager = e;
  }
  findDocumentLinks(e, t) {
    const n = [], i = Fe(e.getText(), 0);
    let r = i.scan(), s, a, l = !1, o;
    const u = {};
    for (; r !== z.EOS; ) {
      switch (r) {
        case z.StartTag:
          a = i.getTokenText().toLowerCase(), o || (l = a === "base");
          break;
        case z.AttributeName:
          s = i.getTokenText().toLowerCase();
          break;
        case z.AttributeValue:
          if (a && s && this.dataManager.isPathAttribute(a, s)) {
            const c = i.getTokenText();
            if (!l) {
              const h = $1(e, t, c, i.getTokenOffset(), i.getTokenEnd(), o);
              h && n.push(h);
            }
            l && typeof o > "u" && (o = gr(c), o && t && (o = t.resolveReference(o, e.uri))), l = !1, s = void 0;
          } else if (s === "id") {
            const c = gr(i.getTokenText());
            u[c] = i.getTokenOffset();
          }
          break;
      }
      r = i.scan();
    }
    for (const c of n) {
      const h = e.uri + "#";
      if (c.target && gt(c.target, h)) {
        const m = c.target.substring(h.length), p = u[m];
        if (p !== void 0) {
          const _ = e.positionAt(p);
          c.target = `${h}${_.line + 1},${_.character + 1}`;
        } else
          c.target = e.uri;
      }
    }
    return n;
  }
};
function J1(e, t, n) {
  const i = e.offsetAt(t), r = n.findNodeAt(i);
  if (!r.tag)
    return [];
  const s = [], a = nl(z.StartTag, e, r.start), l = typeof r.endTagStart == "number" && nl(z.EndTag, e, r.endTagStart);
  return (a && tl(a, t) || l && tl(l, t)) && (a && s.push({ kind: ti.Read, range: a }), l && s.push({ kind: ti.Read, range: l })), s;
}
function el(e, t) {
  return e.line < t.line || e.line === t.line && e.character <= t.character;
}
function tl(e, t) {
  return el(e.start, t) && el(t, e.end);
}
function nl(e, t, n) {
  const i = Fe(t.getText(), n);
  let r = i.scan();
  for (; r !== z.EOS && r !== e; )
    r = i.scan();
  return r !== z.EOS ? { start: t.positionAt(i.getTokenOffset()), end: t.positionAt(i.getTokenEnd()) } : null;
}
function Z1(e, t) {
  const n = [], i = Vl(e, t);
  for (const s of i)
    r(s, void 0);
  return n;
  function r(s, a) {
    const l = lr.create(s.name, s.kind, s.range, e.uri, a == null ? void 0 : a.name);
    if (l.containerName ?? (l.containerName = ""), n.push(l), s.children)
      for (const o of s.children)
        r(o, s);
  }
}
function Vl(e, t) {
  const n = [];
  return t.roots.forEach((i) => {
    Cl(e, i, n);
  }), n;
}
function Cl(e, t, n) {
  const i = K1(t), r = ne.create(e.positionAt(t.start), e.positionAt(t.end)), s = ur.create(i, void 0, or.Field, r, r);
  n.push(s), t.children.forEach((a) => {
    s.children ?? (s.children = []), Cl(e, a, s.children);
  });
}
function K1(e) {
  let t = e.tag;
  if (e.attributes) {
    const n = e.attributes.id, i = e.attributes.class;
    n && (t += `#${n.replace(/[\"\']/g, "")}`), i && (t += i.replace(/[\"\']/g, "").split(/\s+/).map((r) => `.${r}`).join(""));
  }
  return t || "?";
}
function ed(e, t, n, i) {
  const r = e.offsetAt(t), s = i.findNodeAt(r);
  if (!s.tag || !td(s, r, s.tag))
    return null;
  const a = [], l = {
    start: e.positionAt(s.start + 1),
    end: e.positionAt(s.start + 1 + s.tag.length)
  };
  if (a.push({
    range: l,
    newText: n
  }), s.endTagStart) {
    const u = {
      start: e.positionAt(s.endTagStart + 2),
      end: e.positionAt(s.endTagStart + 2 + s.tag.length)
    };
    a.push({
      range: u,
      newText: n
    });
  }
  return {
    changes: {
      [e.uri.toString()]: a
    }
  };
}
function td(e, t, n) {
  return e.endTagStart && e.endTagStart + 2 <= t && t <= e.endTagStart + 2 + n.length ? !0 : e.start + 1 <= t && t <= e.start + 1 + n.length;
}
function nd(e, t, n) {
  const i = e.offsetAt(t), r = n.findNodeAt(i);
  if (!r.tag || !r.endTagStart)
    return null;
  if (r.start + 1 <= i && i <= r.start + 1 + r.tag.length) {
    const s = i - 1 - r.start + r.endTagStart + 2;
    return e.positionAt(s);
  }
  if (r.endTagStart + 2 <= i && i <= r.endTagStart + 2 + r.tag.length) {
    const s = i - 2 - r.endTagStart + r.start + 1;
    return e.positionAt(s);
  }
  return null;
}
function il(e, t, n) {
  const i = e.offsetAt(t), r = n.findNodeAt(i), s = r.tag ? r.tag.length : 0;
  return r.endTagStart && // Within open tag, compute close tag
  (r.start + 1 <= i && i <= r.start + 1 + s || // Within closing tag, compute open tag
  r.endTagStart + 2 <= i && i <= r.endTagStart + 2 + s) ? [
    ne.create(e.positionAt(r.start + 1), e.positionAt(r.start + 1 + s)),
    ne.create(e.positionAt(r.endTagStart + 2), e.positionAt(r.endTagStart + 2 + s))
  ] : null;
}
var id = class {
  constructor(e) {
    this.dataManager = e;
  }
  limitRanges(e, t) {
    e = e.sort((c, h) => {
      let m = c.startLine - h.startLine;
      return m === 0 && (m = c.endLine - h.endLine), m;
    });
    let n;
    const i = [], r = [], s = [], a = (c, h) => {
      r[c] = h, h < 30 && (s[h] = (s[h] || 0) + 1);
    };
    for (let c = 0; c < e.length; c++) {
      const h = e[c];
      if (!n)
        n = h, a(c, 0);
      else if (h.startLine > n.startLine) {
        if (h.endLine <= n.endLine)
          i.push(n), n = h, a(c, i.length);
        else if (h.startLine > n.endLine) {
          do
            n = i.pop();
          while (n && h.startLine > n.endLine);
          n && i.push(n), n = h, a(c, i.length);
        }
      }
    }
    let l = 0, o = 0;
    for (let c = 0; c < s.length; c++) {
      const h = s[c];
      if (h) {
        if (h + l > t) {
          o = c;
          break;
        }
        l += h;
      }
    }
    const u = [];
    for (let c = 0; c < e.length; c++) {
      const h = r[c];
      typeof h == "number" && (h < o || h === o && l++ < t) && u.push(e[c]);
    }
    return u;
  }
  getFoldingRanges(e, t) {
    const n = this.dataManager.getVoidElements(e.languageId), i = Fe(e.getText());
    let r = i.scan();
    const s = [], a = [];
    let l = null, o = -1;
    function u(h) {
      s.push(h), o = h.startLine;
    }
    for (; r !== z.EOS; ) {
      switch (r) {
        case z.StartTag: {
          const h = i.getTokenText(), m = e.positionAt(i.getTokenOffset()).line;
          a.push({ startLine: m, tagName: h }), l = h;
          break;
        }
        case z.EndTag: {
          l = i.getTokenText();
          break;
        }
        case z.StartTagClose:
          if (!l || !this.dataManager.isVoidElement(l, n))
            break;
        case z.EndTagClose:
        case z.StartTagSelfClose: {
          let h = a.length - 1;
          for (; h >= 0 && a[h].tagName !== l; )
            h--;
          if (h >= 0) {
            const m = a[h];
            a.length = h;
            const p = e.positionAt(i.getTokenOffset()).line, _ = m.startLine, f = p - 1;
            f > _ && o !== _ && u({ startLine: _, endLine: f });
          }
          break;
        }
        case z.Comment: {
          let h = e.positionAt(i.getTokenOffset()).line;
          const p = i.getTokenText().match(/^\s*#(region\b)|(endregion\b)/);
          if (p)
            if (p[1])
              a.push({ startLine: h, tagName: "" });
            else {
              let _ = a.length - 1;
              for (; _ >= 0 && a[_].tagName.length; )
                _--;
              if (_ >= 0) {
                const f = a[_];
                a.length = _;
                const L = h;
                h = f.startLine, L > h && o !== h && u({ startLine: h, endLine: L, kind: Zn.Region });
              }
            }
          else {
            const _ = e.positionAt(i.getTokenOffset() + i.getTokenLength()).line;
            h < _ && u({ startLine: h, endLine: _, kind: Zn.Comment });
          }
          break;
        }
      }
      r = i.scan();
    }
    const c = t && t.rangeLimit || Number.MAX_VALUE;
    return s.length > c ? this.limitRanges(s, c) : s;
  }
}, rd = class {
  constructor(e) {
    this.htmlParser = e;
  }
  getSelectionRanges(e, t) {
    const n = this.htmlParser.parseDocument(e);
    return t.map((i) => this.getSelectionRange(i, e, n));
  }
  getSelectionRange(e, t, n) {
    const i = this.getApplicableRanges(t, e, n);
    let r, s;
    for (let a = i.length - 1; a >= 0; a--) {
      const l = i[a];
      (!r || l[0] !== r[0] || l[1] !== r[1]) && (s = ii.create(ne.create(t.positionAt(i[a][0]), t.positionAt(i[a][1])), s)), r = l;
    }
    return s || (s = ii.create(ne.create(e, e))), s;
  }
  getApplicableRanges(e, t, n) {
    const i = e.offsetAt(t), r = n.findNodeAt(i);
    let s = this.getAllParentTagRanges(r);
    if (r.startTagEnd && !r.endTagStart) {
      if (r.startTagEnd !== r.end)
        return [[r.start, r.end]];
      const a = ne.create(e.positionAt(r.startTagEnd - 2), e.positionAt(r.startTagEnd));
      return e.getText(a) === "/>" ? s.unshift([r.start + 1, r.startTagEnd - 2]) : s.unshift([r.start + 1, r.startTagEnd - 1]), s = this.getAttributeLevelRanges(e, r, i).concat(s), s;
    }
    return !r.startTagEnd || !r.endTagStart ? s : (s.unshift([r.start, r.end]), r.start < i && i < r.startTagEnd ? (s.unshift([r.start + 1, r.startTagEnd - 1]), s = this.getAttributeLevelRanges(e, r, i).concat(s), s) : r.startTagEnd <= i && i <= r.endTagStart ? (s.unshift([r.startTagEnd, r.endTagStart]), s) : (i >= r.endTagStart + 2 && s.unshift([r.endTagStart + 2, r.end - 1]), s));
  }
  getAllParentTagRanges(e) {
    let t = e;
    const n = [];
    for (; t.parent; )
      t = t.parent, this.getNodeRanges(t).forEach((i) => n.push(i));
    return n;
  }
  getNodeRanges(e) {
    return e.startTagEnd && e.endTagStart && e.startTagEnd < e.endTagStart ? [
      [e.startTagEnd, e.endTagStart],
      [e.start, e.end]
    ] : [
      [e.start, e.end]
    ];
  }
  getAttributeLevelRanges(e, t, n) {
    const i = ne.create(e.positionAt(t.start), e.positionAt(t.end)), r = e.getText(i), s = n - t.start, a = Fe(r);
    let l = a.scan();
    const o = t.start, u = [];
    let c = !1, h = -1;
    for (; l !== z.EOS; ) {
      switch (l) {
        case z.AttributeName: {
          if (s < a.getTokenOffset()) {
            c = !1;
            break;
          }
          s <= a.getTokenEnd() && u.unshift([a.getTokenOffset(), a.getTokenEnd()]), c = !0, h = a.getTokenOffset();
          break;
        }
        case z.AttributeValue: {
          if (!c)
            break;
          const m = a.getTokenText();
          if (s < a.getTokenOffset()) {
            u.push([h, a.getTokenEnd()]);
            break;
          }
          s >= a.getTokenOffset() && s <= a.getTokenEnd() && (u.unshift([a.getTokenOffset(), a.getTokenEnd()]), (m[0] === '"' && m[m.length - 1] === '"' || m[0] === "'" && m[m.length - 1] === "'") && s >= a.getTokenOffset() + 1 && s <= a.getTokenEnd() - 1 && u.unshift([a.getTokenOffset() + 1, a.getTokenEnd() - 1]), u.push([h, a.getTokenEnd()]));
          break;
        }
      }
      l = a.scan();
    }
    return u.map((m) => [m[0] + o, m[1] + o]);
  }
}, sd = {
  version: 1.1,
  tags: [
    {
      name: "html",
      description: {
        kind: "markdown",
        value: "The html element represents the root of an HTML document."
      },
      attributes: [
        {
          name: "manifest",
          description: {
            kind: "markdown",
            value: "Specifies the URI of a resource manifest indicating resources that should be cached locally. See [Using the application cache](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_the_application_cache) for details."
          }
        },
        {
          name: "version",
          description: 'Specifies the version of the HTML [Document Type Definition](https://developer.mozilla.org/en-US/docs/Glossary/DTD "Document Type Definition: In HTML, the doctype is the required "<!DOCTYPE html>" preamble found at the top of all documents. Its sole purpose is to prevent a browser from switching into so-called “quirks mode” when rendering a document; that is, the "<!DOCTYPE html>" doctype ensures that the browser makes a best-effort attempt at following the relevant specifications, rather than using a different rendering mode that is incompatible with some specifications.") that governs the current document. This attribute is not needed, because it is redundant with the version information in the document type declaration.'
        },
        {
          name: "xmlns",
          description: 'Specifies the XML Namespace of the document. Default value is `"http://www.w3.org/1999/xhtml"`. This is required in documents parsed with XML parsers, and optional in text/html documents.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/html"
        }
      ]
    },
    {
      name: "head",
      description: {
        kind: "markdown",
        value: "The head element represents a collection of metadata for the Document."
      },
      attributes: [
        {
          name: "profile",
          description: "The URIs of one or more metadata profiles, separated by white space."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/head"
        }
      ]
    },
    {
      name: "title",
      description: {
        kind: "markdown",
        value: "The title element represents the document's title or name. Authors should use titles that identify their documents even when they are used out of context, for example in a user's history or bookmarks, or in search results. The document's title is often different from its first heading, since the first heading does not have to stand alone when taken out of context."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/title"
        }
      ]
    },
    {
      name: "base",
      description: {
        kind: "markdown",
        value: "The base element allows authors to specify the document base URL for the purposes of resolving relative URLs, and the name of the default browsing context for the purposes of following hyperlinks. The element does not represent any content beyond this information."
      },
      void: !0,
      attributes: [
        {
          name: "href",
          description: {
            kind: "markdown",
            value: "The base URL to be used throughout the document for relative URL addresses. If this attribute is specified, this element must come before any other elements with attributes whose values are URLs. Absolute and relative URLs are allowed."
          }
        },
        {
          name: "target",
          valueSet: "target",
          description: {
            kind: "markdown",
            value: "A name or keyword indicating the default location to display the result when hyperlinks or forms cause navigation, for elements that do not have an explicit target reference. It is a name of, or keyword for, a _browsing context_ (for example: tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the result into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the result into a new unnamed browsing context.\n*   `_parent`: Load the result into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the result into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n\nIf this attribute is specified, this element must come before any other elements with attributes whose values are URLs."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/base"
        }
      ]
    },
    {
      name: "link",
      description: {
        kind: "markdown",
        value: "The link element allows authors to link their document to other resources."
      },
      void: !0,
      attributes: [
        {
          name: "href",
          description: {
            kind: "markdown",
            value: 'This attribute specifies the [URL](https://developer.mozilla.org/en-US/docs/Glossary/URL "URL: Uniform Resource Locator (URL) is a text string specifying where a resource can be found on the Internet.") of the linked resource. A URL can be absolute or relative.'
          }
        },
        {
          name: "crossorigin",
          valueSet: "xo",
          description: {
            kind: "markdown",
            value: 'This enumerated attribute indicates whether [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") must be used when fetching the resource. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\n`anonymous`\n\nA cross-origin request (i.e. with an [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.") HTTP header) is performed, but no credential is sent (i.e. no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header) the image will be tainted and its usage restricted.\n\n`use-credentials`\n\nA cross-origin request (i.e. with an `Origin` HTTP header) is performed along with a credential sent (i.e. a cookie, certificate, and/or HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through [`Access-Control-Allow-Credentials`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials "The Access-Control-Allow-Credentials response header tells browsers whether to expose the response to frontend JavaScript code when the request\'s credentials mode (Request.credentials) is "include".") HTTP header), the resource will be _tainted_ and its usage restricted.\n\nIf the attribute is not present, the resource is fetched without a [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") request (i.e. without sending the `Origin` HTTP header), preventing its non-tainted usage. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for additional information.'
          }
        },
        {
          name: "rel",
          description: {
            kind: "markdown",
            value: "This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
          }
        },
        {
          name: "media",
          description: {
            kind: "markdown",
            value: "This attribute specifies the media that the linked resource applies to. Its value must be a media type / [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets — it allows the user agent to pick the best adapted one for the device it runs on.\n\n**Notes:**\n\n*   In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](https://developer.mozilla.org/en-US/docs/Web/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries), which are a superset of the allowed values of HTML 4.\n*   Browsers not supporting [CSS3 Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4."
          }
        },
        {
          name: "hreflang",
          description: {
            kind: "markdown",
            value: "This attribute indicates the language of the linked resource. It is purely advisory. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt). Use this attribute only if the [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute is present."
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: 'This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of stylesheet being referenced (such as **text/css**), but given that CSS is the only stylesheet language used on the web, not only is it possible to omit the `type` attribute, but is actually now recommended practice. It is also used on `rel="preload"` link types, to make sure the browser only downloads file types that it supports.'
          }
        },
        {
          name: "sizes",
          description: {
            kind: "markdown",
            value: "This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-rel) contains a value of `icon` or a non-standard type such as Apple's `apple-touch-icon`. It may have the following values:\n\n*   `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.\n*   a white-space separated list of sizes, each in the format `_<width in pixels>_x_<height in pixels>_` or `_<width in pixels>_X_<height in pixels>_`. Each of these sizes must be contained in the resource.\n\n**Note:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-sizes) contains only one entry. MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous; you should definitely use it."
          }
        },
        {
          name: "as",
          description: 'This attribute is only used when `rel="preload"` or `rel="prefetch"` has been set on the `<link>` element. It specifies the type of content being loaded by the `<link>`, which is necessary for content prioritization, request matching, application of correct [content security policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and setting of correct [`Accept`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept "The Accept request HTTP header advertises which content types, expressed as MIME types, the client is able to understand. Using content negotiation, the server then selects one of the proposals, uses it and informs the client of its choice with the Content-Type response header. Browsers set adequate values for this header depending on the context where the request is done: when fetching a CSS stylesheet a different value is set for the request than when fetching an image, video or a script.") request header.'
        },
        {
          name: "importance",
          description: "Indicates the relative importance of the resource. Priority hints are delegated using the values:"
        },
        {
          name: "importance",
          description: '**`auto`**: Indicates **no preference**. The browser may use its own heuristics to decide the priority of the resource.\n\n**`high`**: Indicates to the browser that the resource is of **high** priority.\n\n**`low`**: Indicates to the browser that the resource is of **low** priority.\n\n**Note:** The `importance` attribute may only be used for the `<link>` element if `rel="preload"` or `rel="prefetch"` is present.'
        },
        {
          name: "integrity",
          description: "Contains inline metadata — a base64-encoded cryptographic hash of the resource (file) you’re telling the browser to fetch. The browser can use this to verify that the fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)."
        },
        {
          name: "referrerpolicy",
          description: 'A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer` means that the [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` means that no [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior, if no policy is otherwise specified.\n*   `origin` means that the referrer will be the origin of the page, which is roughly the scheme, the host, and the port.\n*   `origin-when-cross-origin` means that navigating to other origins will be limited to the scheme, the host, and the port, while navigating on the same origin will include the referrer\'s path.\n*   `unsafe-url` means that the referrer will include the origin and the path (but not the fragment, password, or username). This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins.'
        },
        {
          name: "title",
          description: 'The `title` attribute has special semantics on the `<link>` element. When used on a `<link rel="stylesheet">` it defines a [preferred or an alternate stylesheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets). Incorrectly using it may [cause the stylesheet to be ignored](https://developer.mozilla.org/en-US/docs/Correctly_Using_Titles_With_External_Stylesheets).'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/link"
        }
      ]
    },
    {
      name: "meta",
      description: {
        kind: "markdown",
        value: "The meta element represents various kinds of metadata that cannot be expressed using the title, base, link, style, and script elements."
      },
      void: !0,
      attributes: [
        {
          name: "name",
          description: {
            kind: "markdown",
            value: `This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes [\`itemprop\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-itemprop), [\`http-equiv\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [\`charset\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) is also set.

This metadata name is associated with the value contained by the [\`content\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute. The possible values for the name attribute are:

*   \`application-name\` which defines the name of the application running in the web page.
    
    **Note:**
    
    *   Browsers may use this to identify the application. It is different from the [\`<title>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title "The HTML Title element (<title>) defines the document's title that is shown in a browser's title bar or a page's tab.") element, which usually contain the application name, but may also contain information like the document name or a status.
    *   Simple web pages shouldn't define an application-name.
    
*   \`author\` which defines the name of the document's author.
*   \`description\` which contains a short and accurate summary of the content of the page. Several browsers, like Firefox and Opera, use this as the default description of bookmarked pages.
*   \`generator\` which contains the identifier of the software that generated the page.
*   \`keywords\` which contains words relevant to the page's content separated by commas.
*   \`referrer\` which controls the [\`Referer\` HTTP header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) attached to requests sent from the document:
    
    Values for the \`content\` attribute of \`<meta name="referrer">\`
    
    \`no-referrer\`
    
    Do not send a HTTP \`Referrer\` header.
    
    \`origin\`
    
    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the document.
    
    \`no-referrer-when-downgrade\`
    
    Send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) as a referrer to URLs as secure as the current page, (https→https), but does not send a referrer to less secure URLs (https→http). This is the default behaviour.
    
    \`origin-when-cross-origin\`
    
    Send the full URL (stripped of parameters) for same-origin requests, but only send the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) for other cases.
    
    \`same-origin\`
    
    A referrer will be sent for [same-site origins](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy), but cross-origin requests will contain no referrer information.
    
    \`strict-origin\`
    
    Only send the origin of the document as the referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but don't send it to a less secure destination (HTTPS->HTTP).
    
    \`strict-origin-when-cross-origin\`
    
    Send a full URL when performing a same-origin request, only send the origin of the document to a-priori as-much-secure destination (HTTPS->HTTPS), and send no header to a less secure destination (HTTPS->HTTP).
    
    \`unsafe-URL\`
    
    Send the full URL (stripped of parameters) for same-origin or cross-origin requests.
    
    **Notes:**
    
    *   Some browsers support the deprecated values of \`always\`, \`default\`, and \`never\` for referrer.
    *   Dynamically inserting \`<meta name="referrer">\` (with [\`document.write\`](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) or [\`appendChild\`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)) makes the referrer behaviour unpredictable.
    *   When several conflicting policies are defined, the no-referrer policy is applied.
    

This attribute may also have a value taken from the extended list defined on [WHATWG Wiki MetaExtensions page](https://wiki.whatwg.org/wiki/MetaExtensions). Although none have been formally accepted yet, a few commonly used names are:

*   \`creator\` which defines the name of the creator of the document, such as an organization or institution. If there are more than one, several [\`<meta>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") elements should be used.
*   \`googlebot\`, a synonym of \`robots\`, is only followed by Googlebot (the indexing crawler for Google).
*   \`publisher\` which defines the name of the document's publisher.
*   \`robots\` which defines the behaviour that cooperative crawlers, or "robots", should use with the page. It is a comma-separated list of the values below:
    
    Values for the content of \`<meta name="robots">\`
    
    Value
    
    Description
    
    Used by
    
    \`index\`
    
    Allows the robot to index the page (default).
    
    All
    
    \`noindex\`
    
    Requests the robot to not index the page.
    
    All
    
    \`follow\`
    
    Allows the robot to follow the links on the page (default).
    
    All
    
    \`nofollow\`
    
    Requests the robot to not follow the links on the page.
    
    All
    
    \`none\`
    
    Equivalent to \`noindex, nofollow\`
    
    [Google](https://support.google.com/webmasters/answer/79812)
    
    \`noodp\`
    
    Prevents using the [Open Directory Project](https://www.dmoz.org/) description, if any, as the page description in search engine results.
    
    [Google](https://support.google.com/webmasters/answer/35624#nodmoz), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/meta-tags-robotstxt-yahoo-search-sln2213.html#cont5), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    \`noarchive\`
    
    Requests the search engine not to cache the page content.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Yahoo](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    \`nosnippet\`
    
    Prevents displaying any description of the page in search engine results.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    \`noimageindex\`
    
    Requests this page not to appear as the referring page of an indexed image.
    
    [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)
    
    \`nocache\`
    
    Synonym of \`noarchive\`.
    
    [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)
    
    **Notes:**
    
    *   Only cooperative robots follow these rules. Do not expect to prevent e-mail harvesters with them.
    *   The robot still needs to access the page in order to read these rules. To prevent bandwidth consumption, use a _[robots.txt](https://developer.mozilla.org/en-US/docs/Glossary/robots.txt "robots.txt: Robots.txt is a file which is usually placed in the root of any website. It decides whether crawlers are permitted or forbidden access to the web site.")_ file.
    *   If you want to remove a page, \`noindex\` will work, but only after the robot visits the page again. Ensure that the \`robots.txt\` file is not preventing revisits.
    *   Some values are mutually exclusive, like \`index\` and \`noindex\`, or \`follow\` and \`nofollow\`. In these cases the robot's behaviour is undefined and may vary between them.
    *   Some crawler robots, like Google, Yahoo and Bing, support the same values for the HTTP header \`X-Robots-Tag\`; this allows non-HTML documents like images to use these rules.
    
*   \`slurp\`, is a synonym of \`robots\`, but only for Slurp - the crawler for Yahoo Search.
*   \`viewport\`, which gives hints about the size of the initial size of the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport "viewport: A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you're viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view."). Used by mobile devices only.
    
    Values for the content of \`<meta name="viewport">\`
    
    Value
    
    Possible subvalues
    
    Description
    
    \`width\`
    
    A positive integer number, or the text \`device-width\`
    
    Defines the pixel width of the viewport that you want the web site to be rendered at.
    
    \`height\`
    
    A positive integer, or the text \`device-height\`
    
    Defines the height of the viewport. Not used by any browser.
    
    \`initial-scale\`
    
    A positive number between \`0.0\` and \`10.0\`
    
    Defines the ratio between the device width (\`device-width\` in portrait mode or \`device-height\` in landscape mode) and the viewport size.
    
    \`maximum-scale\`
    
    A positive number between \`0.0\` and \`10.0\`
    
    Defines the maximum amount to zoom in. It must be greater or equal to the \`minimum-scale\` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.
    
    \`minimum-scale\`
    
    A positive number between \`0.0\` and \`10.0\`
    
    Defines the minimum zoom level. It must be smaller or equal to the \`maximum-scale\` or the behaviour is undefined. Browser settings can ignore this rule and iOS10+ ignores it by default.
    
    \`user-scalable\`
    
    \`yes\` or \`no\`
    
    If set to \`no\`, the user is not able to zoom in the webpage. The default is \`yes\`. Browser settings can ignore this rule, and iOS10+ ignores it by default.
    
    Specification
    
    Status
    
    Comment
    
    [CSS Device Adaptation  
    The definition of '<meta name="viewport">' in that specification.](https://drafts.csswg.org/css-device-adapt/#viewport-meta)
    
    Working Draft
    
    Non-normatively describes the Viewport META element
    
    See also: [\`@viewport\`](https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport "The @viewport CSS at-rule lets you configure the viewport through which the document is viewed. It's primarily used for mobile devices, but is also used by desktop browsers that support features like "snap to edge" (such as Microsoft Edge).")
    
    **Notes:**
    
    *   Though unstandardized, this declaration is respected by most mobile browsers due to de-facto dominance.
    *   The default values may vary between devices and browsers.
    *   To learn about this declaration in Firefox for Mobile, see [this article](https://developer.mozilla.org/en-US/docs/Mobile/Viewport_meta_tag "Mobile/Viewport meta tag").`
          }
        },
        {
          name: "http-equiv",
          description: {
            kind: "markdown",
            value: 'Defines a pragma directive. The attribute is named `**http-equiv**(alent)` because all the allowed values are names of particular HTTP headers:\n\n*   `"content-language"`  \n    Defines the default language of the page. It can be overridden by the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) attribute on any element.\n    \n    **Warning:** Do not use this value, as it is obsolete. Prefer the `lang` attribute on the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html "The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.") element.\n    \n*   `"content-security-policy"`  \n    Allows page authors to define a [content policy](https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives) for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.\n*   `"content-type"`  \n    Defines the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the document, followed by its character encoding. It follows the same syntax as the HTTP `content-type` entity-header field, but as it is inside a HTML page, most values other than `text/html` are impossible. Therefore the valid syntax for its `content` is the string \'`text/html`\' followed by a character set with the following syntax: \'`; charset=_IANAcharset_`\', where `IANAcharset` is the _preferred MIME name_ for a character set as [defined by the IANA.](https://www.iana.org/assignments/character-sets)\n    \n    **Warning:** Do not use this value, as it is obsolete. Use the [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute on the [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element.\n    \n    **Note:** As [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") can\'t change documents\' types in XHTML or HTML5\'s XHTML serialization, never set the MIME type to an XHTML MIME type with `<meta>`.\n    \n*   `"refresh"`  \n    This instruction specifies:\n    *   The number of seconds until the page should be reloaded - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer.\n    *   The number of seconds until the page should redirect to another - only if the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) attribute contains a positive integer followed by the string \'`;url=`\', and a valid URL.\n*   `"set-cookie"`  \n    Defines a [cookie](https://developer.mozilla.org/en-US/docs/cookie) for the page. Its content must follow the syntax defined in the [IETF HTTP Cookie Specification](https://tools.ietf.org/html/draft-ietf-httpstate-cookie-14).\n    \n    **Warning:** Do not use this instruction, as it is obsolete. Use the HTTP header [`Set-Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) instead.'
          }
        },
        {
          name: "content",
          description: {
            kind: "markdown",
            value: "This attribute contains the value for the [`http-equiv`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) or [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name) attribute, depending on which is used."
          }
        },
        {
          name: "charset",
          description: {
            kind: "markdown",
            value: 'This attribute declares the page\'s character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn\'t request a specific encoding, it suggests:\n\n*   Authors are encouraged to use [`UTF-8`](https://developer.mozilla.org/en-US/docs/Glossary/UTF-8).\n*   Authors should not use ASCII-incompatible encodings to avoid security risk: browsers not supporting them may interpret harmful content as HTML. This happens with the `JIS_C6226-1983`, `JIS_X0212-1990`, `HZ-GB-2312`, `JOHAB`, the ISO-2022 family and the EBCDIC family.\n\n**Note:** ASCII-incompatible encodings are those that don\'t map the 8-bit code points `0x20` to `0x7E` to the `0x0020` to `0x007E` Unicode code points)\n\n*   Authors **must not** use `CESU-8`, `UTF-7`, `BOCU-1` and/or `SCSU` as [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting) attacks with these encodings have been demonstrated.\n*   Authors should not use `UTF-32` because not all HTML5 encoding algorithms can distinguish it from `UTF-16`.\n\n**Notes:**\n\n*   The declared character encoding must match the one the page was saved with to avoid garbled characters and security holes.\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element declaring the encoding must be inside the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head "The HTML <head> element provides general information (metadata) about the document, including its title and links to its scripts and style sheets.") element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.\n*   This [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element is only one part of the [algorithm to determine a page\'s character set](https://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#encoding-sniffing-algorithm "Algorithm charset page"). The [`Content-Type` header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) and any [Byte-Order Marks](https://developer.mozilla.org/en-US/docs/Glossary/Byte-Order_Mark "The definition of that term (Byte-Order Marks) has not been written yet; please consider contributing it!") override this element.\n*   It is strongly recommended to define the character encoding. If a page\'s encoding is undefined, cross-scripting techniques are possible, such as the [`UTF-7` fallback cross-scripting technique](https://code.google.com/p/doctype-mirror/wiki/ArticleUtf7).\n*   The [`<meta>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta "The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.") element with a `charset` attribute is a synonym for the pre-HTML5 `<meta http-equiv="Content-Type" content="text/html; charset=_IANAcharset_">`, where _`IANAcharset`_ contains the value of the equivalent [`charset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset) attribute. This syntax is still allowed, although no longer recommended.'
          }
        },
        {
          name: "scheme",
          description: "This attribute defines the scheme in which metadata is described. A scheme is a context leading to the correct interpretations of the [`content`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content) value, like a format.\n\n**Warning:** Do not use this value, as it is obsolete. There is no replacement as there was no real usage for it."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/meta"
        }
      ]
    },
    {
      name: "style",
      description: {
        kind: "markdown",
        value: "The style element allows authors to embed style information in their documents. The style element is one of several inputs to the styling processing model. The element does not represent content for the user."
      },
      attributes: [
        {
          name: "media",
          description: {
            kind: "markdown",
            value: "This attribute defines which media the style should be applied to. Its value is a [media query](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries), which defaults to `all` if the attribute is missing."
          }
        },
        {
          name: "nonce",
          description: {
            kind: "markdown",
            value: "A cryptographic nonce (number used once) used to whitelist inline styles in a [style-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource’s policy is otherwise trivial."
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: "This attribute defines the styling language as a MIME type (charset should not be specified). This attribute is optional and defaults to `text/css` if it is not specified — there is very little reason to include this in modern web documents."
          }
        },
        {
          name: "scoped",
          valueSet: "v"
        },
        {
          name: "title",
          description: "This attribute specifies [alternative style sheet](https://developer.mozilla.org/en-US/docs/Web/CSS/Alternative_style_sheets) sets."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/style"
        }
      ]
    },
    {
      name: "body",
      description: {
        kind: "markdown",
        value: "The body element represents the content of the document."
      },
      attributes: [
        {
          name: "onafterprint",
          description: {
            kind: "markdown",
            value: "Function to call after the user has printed the document."
          }
        },
        {
          name: "onbeforeprint",
          description: {
            kind: "markdown",
            value: "Function to call when the user requests printing of the document."
          }
        },
        {
          name: "onbeforeunload",
          description: {
            kind: "markdown",
            value: "Function to call when the document is about to be unloaded."
          }
        },
        {
          name: "onhashchange",
          description: {
            kind: "markdown",
            value: "Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed."
          }
        },
        {
          name: "onlanguagechange",
          description: {
            kind: "markdown",
            value: "Function to call when the preferred languages changed."
          }
        },
        {
          name: "onmessage",
          description: {
            kind: "markdown",
            value: "Function to call when the document has received a message."
          }
        },
        {
          name: "onoffline",
          description: {
            kind: "markdown",
            value: "Function to call when network communication has failed."
          }
        },
        {
          name: "ononline",
          description: {
            kind: "markdown",
            value: "Function to call when network communication has been restored."
          }
        },
        {
          name: "onpagehide"
        },
        {
          name: "onpageshow"
        },
        {
          name: "onpopstate",
          description: {
            kind: "markdown",
            value: "Function to call when the user has navigated session history."
          }
        },
        {
          name: "onstorage",
          description: {
            kind: "markdown",
            value: "Function to call when the storage area has changed."
          }
        },
        {
          name: "onunload",
          description: {
            kind: "markdown",
            value: "Function to call when the document is going away."
          }
        },
        {
          name: "alink",
          description: 'Color of text for hyperlinks when selected. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active "The :active CSS pseudo-class represents an element (such as a button) that is being activated by the user.") pseudo-class instead._'
        },
        {
          name: "background",
          description: 'URI of a image to use as a background. _This method is non-conforming, use CSS [`background`](https://developer.mozilla.org/en-US/docs/Web/CSS/background "The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.") property on the element instead._'
        },
        {
          name: "bgcolor",
          description: 'Background color for the document. _This method is non-conforming, use CSS [`background-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property on the element instead._'
        },
        {
          name: "bottommargin",
          description: 'The margin of the bottom of the body. _This method is non-conforming, use CSS [`margin-bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom "The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
        },
        {
          name: "leftmargin",
          description: 'The margin of the left of the body. _This method is non-conforming, use CSS [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
        },
        {
          name: "link",
          description: 'Color of text for unvisited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link "The :link CSS pseudo-class represents an element that has not yet been visited. It matches every unvisited <a>, <area>, or <link> element that has an href attribute.") pseudo-class instead._'
        },
        {
          name: "onblur",
          description: "Function to call when the document loses focus."
        },
        {
          name: "onerror",
          description: "Function to call when the document fails to load properly."
        },
        {
          name: "onfocus",
          description: "Function to call when the document receives focus."
        },
        {
          name: "onload",
          description: "Function to call when the document has finished loading."
        },
        {
          name: "onredo",
          description: "Function to call when the user has moved forward in undo transaction history."
        },
        {
          name: "onresize",
          description: "Function to call when the document has been resized."
        },
        {
          name: "onundo",
          description: "Function to call when the user has moved backward in undo transaction history."
        },
        {
          name: "rightmargin",
          description: 'The margin of the right of the body. _This method is non-conforming, use CSS [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
        },
        {
          name: "text",
          description: 'Foreground color of text. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property on the element instead._'
        },
        {
          name: "topmargin",
          description: 'The margin of the top of the body. _This method is non-conforming, use CSS [`margin-top`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top "The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") property on the element instead._'
        },
        {
          name: "vlink",
          description: 'Color of text for visited hypertext links. _This method is non-conforming, use CSS [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color "The color CSS property sets the foreground color value of an element\'s text and text decorations, and sets the currentcolor value.") property in conjunction with the [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited "The :visited CSS pseudo-class represents links that the user has already visited. For privacy reasons, the styles that can be modified using this selector are very limited.") pseudo-class instead._'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/body"
        }
      ]
    },
    {
      name: "article",
      description: {
        kind: "markdown",
        value: "The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. Each article should be identified, typically by including a heading (h1–h6 element) as a child of the article element."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/article"
        }
      ]
    },
    {
      name: "section",
      description: {
        kind: "markdown",
        value: "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/section"
        }
      ]
    },
    {
      name: "nav",
      description: {
        kind: "markdown",
        value: "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/nav"
        }
      ]
    },
    {
      name: "aside",
      description: {
        kind: "markdown",
        value: "The aside element represents a section of a page that consists of content that is tangentially related to the content around the aside element, and which could be considered separate from that content. Such sections are often represented as sidebars in printed typography."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/aside"
        }
      ]
    },
    {
      name: "h1",
      description: {
        kind: "markdown",
        value: "The h1 element represents a section heading."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
        }
      ]
    },
    {
      name: "h2",
      description: {
        kind: "markdown",
        value: "The h2 element represents a section heading."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
        }
      ]
    },
    {
      name: "h3",
      description: {
        kind: "markdown",
        value: "The h3 element represents a section heading."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
        }
      ]
    },
    {
      name: "h4",
      description: {
        kind: "markdown",
        value: "The h4 element represents a section heading."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
        }
      ]
    },
    {
      name: "h5",
      description: {
        kind: "markdown",
        value: "The h5 element represents a section heading."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
        }
      ]
    },
    {
      name: "h6",
      description: {
        kind: "markdown",
        value: "The h6 element represents a section heading."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/Heading_Elements"
        }
      ]
    },
    {
      name: "header",
      description: {
        kind: "markdown",
        value: "The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids. When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/header"
        }
      ]
    },
    {
      name: "footer",
      description: {
        kind: "markdown",
        value: "The footer element represents a footer for its nearest ancestor sectioning content or sectioning root element. A footer typically contains information about its section such as who wrote it, links to related documents, copyright data, and the like."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/footer"
        }
      ]
    },
    {
      name: "address",
      description: {
        kind: "markdown",
        value: "The address element represents the contact information for its nearest article or body element ancestor. If that is the body element, then the contact information applies to the document as a whole."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/address"
        }
      ]
    },
    {
      name: "p",
      description: {
        kind: "markdown",
        value: "The p element represents a paragraph."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/p"
        }
      ]
    },
    {
      name: "hr",
      description: {
        kind: "markdown",
        value: "The hr element represents a paragraph-level thematic break, e.g. a scene change in a story, or a transition to another topic within a section of a reference book."
      },
      void: !0,
      attributes: [
        {
          name: "align",
          description: "Sets the alignment of the rule on the page. If no value is specified, the default value is `left`."
        },
        {
          name: "color",
          description: "Sets the color of the rule through color name or hexadecimal value."
        },
        {
          name: "noshade",
          description: "Sets the rule to have no shading."
        },
        {
          name: "size",
          description: "Sets the height, in pixels, of the rule."
        },
        {
          name: "width",
          description: "Sets the length of the rule on the page through a pixel or percentage value."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/hr"
        }
      ]
    },
    {
      name: "pre",
      description: {
        kind: "markdown",
        value: "The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements."
      },
      attributes: [
        {
          name: "cols",
          description: 'Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attr-width). To achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.'
        },
        {
          name: "width",
          description: 'Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width "The width CSS property sets an element\'s width. By default it sets the width of the content area, but if box-sizing is set to border-box, it sets the width of the border area.") instead.'
        },
        {
          name: "wrap",
          description: 'Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS [`white-space`](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space "The white-space CSS property sets how white space inside an element is handled.") instead.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/pre"
        }
      ]
    },
    {
      name: "blockquote",
      description: {
        kind: "markdown",
        value: "The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a footer or cite element, and optionally with in-line changes such as annotations and abbreviations."
      },
      attributes: [
        {
          name: "cite",
          description: {
            kind: "markdown",
            value: "A URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/blockquote"
        }
      ]
    },
    {
      name: "ol",
      description: {
        kind: "markdown",
        value: "The ol element represents a list of items, where the items have been intentionally ordered, such that changing the order would change the meaning of the document."
      },
      attributes: [
        {
          name: "reversed",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute specifies that the items of the list are specified in reversed order."
          }
        },
        {
          name: "start",
          description: {
            kind: "markdown",
            value: 'This integer attribute specifies the start value for numbering the individual list items. Although the ordering type of list elements might be Roman numerals, such as XXXI, or letters, the value of start is always represented as a number. To start numbering elements from the letter "C", use `<ol start="3">`.\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.'
          }
        },
        {
          name: "type",
          valueSet: "lt",
          description: {
            kind: "markdown",
            value: "Indicates the numbering type:\n\n*   `'a'` indicates lowercase letters,\n*   `'A'` indicates uppercase letters,\n*   `'i'` indicates lowercase Roman numerals,\n*   `'I'` indicates uppercase Roman numerals,\n*   and `'1'` indicates numbers (default).\n\nThe type set is used for the entire list unless a different [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li#attr-type) attribute is used within an enclosed [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li \"The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.\") element.\n\n**Note:** This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\nUnless the value of the list number matters (e.g. in legal or technical documents where items are to be referenced by their number/letter), the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type \"The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.\") property should be used instead."
          }
        },
        {
          name: "compact",
          description: 'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Warning:** Do not use this attribute, as it has been deprecated: the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give an effect similar to the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height "The line-height CSS property sets the amount of space used for lines, such as in text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.") can be used with a value of `80%`.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/ol"
        }
      ]
    },
    {
      name: "ul",
      description: {
        kind: "markdown",
        value: "The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document."
      },
      attributes: [
        {
          name: "compact",
          description: 'This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn\'t work in all browsers.\n\n**Usage note: **Do not use this attribute, as it has been deprecated: the [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To give a similar effect as the `compact` attribute, the [CSS](https://developer.mozilla.org/en-US/docs/CSS) property [line-height](https://developer.mozilla.org/en-US/docs/CSS/line-height) can be used with a value of `80%`.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/ul"
        }
      ]
    },
    {
      name: "li",
      description: {
        kind: "markdown",
        value: "The li element represents a list item. If its parent element is an ol, ul, or menu element, then the element is an item of the parent element's list, as defined for those elements. Otherwise, the list item has no defined list-related relationship to any other li element."
      },
      attributes: [
        {
          name: "value",
          description: {
            kind: "markdown",
            value: 'This integer attribute indicates the current ordinal value of the list item as defined by the [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. The **value** attribute has no meaning for unordered lists ([`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul "The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.")) or for menus ([`<menu>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.")).\n\n**Note**: This attribute was deprecated in HTML4, but reintroduced in HTML5.\n\n**Note:** Prior to Gecko 9.0, negative values were incorrectly converted to 0. Starting in Gecko 9.0 all integer values are correctly parsed.'
          }
        },
        {
          name: "type",
          description: 'This character attribute indicates the numbering type:\n\n*   `a`: lowercase letters\n*   `A`: uppercase letters\n*   `i`: lowercase Roman numerals\n*   `I`: uppercase Roman numerals\n*   `1`: numbers\n\nThis type overrides the one used by its parent [`<ol>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol "The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.") element, if any.\n\n**Usage note:** This attribute has been deprecated: use the CSS [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type "The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.") property instead.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/li"
        }
      ]
    },
    {
      name: "dl",
      description: {
        kind: "markdown",
        value: "The dl element represents an association list consisting of zero or more name-value groups (a description list). A name-value group consists of one or more names (dt elements) followed by one or more values (dd elements), ignoring any nodes other than dt and dd elements. Within a single dl element, there should not be more than one dt element for each name."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/dl"
        }
      ]
    },
    {
      name: "dt",
      description: {
        kind: "markdown",
        value: "The dt element represents the term, or name, part of a term-description group in a description list (dl element)."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/dt"
        }
      ]
    },
    {
      name: "dd",
      description: {
        kind: "markdown",
        value: "The dd element represents the description, definition, or value, part of a term-description group in a description list (dl element)."
      },
      attributes: [
        {
          name: "nowrap",
          description: "If the value of this attribute is set to `yes`, the definition text will not wrap. The default value is `no`."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/dd"
        }
      ]
    },
    {
      name: "figure",
      description: {
        kind: "markdown",
        value: "The figure element represents some flow content, optionally with a caption, that is self-contained (like a complete sentence) and is typically referenced as a single unit from the main flow of the document."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/figure"
        }
      ]
    },
    {
      name: "figcaption",
      description: {
        kind: "markdown",
        value: "The figcaption element represents a caption or legend for the rest of the contents of the figcaption element's parent figure element, if any."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/figcaption"
        }
      ]
    },
    {
      name: "main",
      description: {
        kind: "markdown",
        value: "The main element represents the main content of the body of a document or application. The main content area consists of content that is directly related to or expands upon the central topic of a document or central functionality of an application."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/main"
        }
      ]
    },
    {
      name: "div",
      description: {
        kind: "markdown",
        value: "The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/div"
        }
      ]
    },
    {
      name: "a",
      description: {
        kind: "markdown",
        value: "If the a element has an href attribute, then it represents a hyperlink (a hypertext anchor) labeled by its contents."
      },
      attributes: [
        {
          name: "href",
          description: {
            kind: "markdown",
            value: 'Contains a URL or a URL fragment that the hyperlink points to.\nA URL fragment is a name preceded by a hash mark (`#`), which specifies an internal target location (an [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of an HTML element) within the current document. URLs are not restricted to Web (HTTP)-based documents, but can use any protocol supported by the browser. For example, [`file:`](https://en.wikipedia.org/wiki/File_URI_scheme), `ftp:`, and `mailto:` work in most browsers.\n\n**Note:** You can use `href="#top"` or the empty fragment `href="#"` to link to the top of the current page. [This behavior is specified by HTML5](https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid).'
          }
        },
        {
          name: "target",
          valueSet: "target",
          description: {
            kind: "markdown",
            value: 'Specifies where to display the linked URL. It is a name of, or keyword for, a _browsing context_: a tab, window, or `<iframe>`. The following keywords have special meanings:\n\n*   `_self`: Load the URL into the same browsing context as the current one. This is the default behavior.\n*   `_blank`: Load the URL into a new browsing context. This is usually a tab, but users can configure browsers to use new windows instead.\n*   `_parent`: Load the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as `_self`.\n*   `_top`: Load the URL into the top-level browsing context (that is, the "highest" browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this behaves the same way as `_self`.\n\n**Note:** When using `target`, consider adding `rel="noreferrer"` to avoid exploitation of the `window.opener` API.\n\n**Note:** Linking to another page using `target="_blank"` will run the new page on the same process as your page. If the new page is executing expensive JS, your page\'s performance may suffer. To avoid this use `rel="noopener"`.'
          }
        },
        {
          name: "download",
          description: {
            kind: "markdown",
            value: "This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). There are no restrictions on allowed values, though `/` and `\\` are converted to underscores. Most file systems limit some punctuation in file names, and browsers will adjust the suggested name accordingly.\n\n**Notes:**\n\n*   This attribute only works for [same-origin URLs](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).\n*   Although HTTP(s) URLs need to be in the same-origin, [`blob:` URLs](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL) and [`data:` URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) are allowed so that content generated by JavaScript, such as pictures created in an image-editor Web app, can be downloaded.\n*   If the HTTP header [`Content-Disposition:`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition) gives a different filename than this attribute, the HTTP header takes priority over this attribute.\n*   If `Content-Disposition:` is set to `inline`, Firefox prioritizes `Content-Disposition`, like the filename case, while Chrome prioritizes the `download` attribute."
          }
        },
        {
          name: "ping",
          description: {
            kind: "markdown",
            value: 'Contains a space-separated list of URLs to which, when the hyperlink is followed, [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.") requests with the body `PING` will be sent by the browser (in the background). Typically used for tracking.'
          }
        },
        {
          name: "rel",
          description: {
            kind: "markdown",
            value: "Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
          }
        },
        {
          name: "hreflang",
          description: {
            kind: "markdown",
            value: 'This attribute indicates the human language of the linked resource. It is purely advisory, with no built-in functionality. Allowed values are determined by [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt "Tags for Identifying Languages").'
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: 'Specifies the media type in the form of a [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type "MIME type: A MIME type (now properly called "media type", but also sometimes "content type") is a string sent along with a file indicating the type of the file (describing the content format, for example, a sound file might be labeled audio/ogg, or an image file image/png).") for the linked URL. It is purely advisory, with no built-in functionality.'
          }
        },
        {
          name: "referrerpolicy",
          description: "Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) to send when fetching the URL:\n\n*   `'no-referrer'` means the `Referer:` header will not be sent.\n*   `'no-referrer-when-downgrade'` means no `Referer:` header will be sent when navigating to an origin without HTTPS. This is the default behavior.\n*   `'origin'` means the referrer will be the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of the page, not including information after the domain.\n*   `'origin-when-cross-origin'` meaning that navigations to other origins will be limited to the scheme, the host and the port, while navigations on the same origin will include the referrer's path.\n*   `'strict-origin-when-cross-origin'`\n*   `'unsafe-url'` means the referrer will include the origin and path, but not the fragment, password, or username. This is unsafe because it can leak data from secure URLs to insecure ones."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/a"
        }
      ]
    },
    {
      name: "em",
      description: {
        kind: "markdown",
        value: "The em element represents stress emphasis of its contents."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/em"
        }
      ]
    },
    {
      name: "strong",
      description: {
        kind: "markdown",
        value: "The strong element represents strong importance, seriousness, or urgency for its contents."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/strong"
        }
      ]
    },
    {
      name: "small",
      description: {
        kind: "markdown",
        value: "The small element represents side comments such as small print."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/small"
        }
      ]
    },
    {
      name: "s",
      description: {
        kind: "markdown",
        value: "The s element represents contents that are no longer accurate or no longer relevant."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/s"
        }
      ]
    },
    {
      name: "cite",
      description: {
        kind: "markdown",
        value: "The cite element represents a reference to a creative work. It must include the title of the work or the name of the author(person, people or organization) or an URL reference, or a reference in abbreviated form as per the conventions used for the addition of citation metadata."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/cite"
        }
      ]
    },
    {
      name: "q",
      description: {
        kind: "markdown",
        value: "The q element represents some phrasing content quoted from another source."
      },
      attributes: [
        {
          name: "cite",
          description: {
            kind: "markdown",
            value: "The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/q"
        }
      ]
    },
    {
      name: "dfn",
      description: {
        kind: "markdown",
        value: "The dfn element represents the defining instance of a term. The paragraph, description list group, or section that is the nearest ancestor of the dfn element must also contain the definition(s) for the term given by the dfn element."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/dfn"
        }
      ]
    },
    {
      name: "abbr",
      description: {
        kind: "markdown",
        value: "The abbr element represents an abbreviation or acronym, optionally with its expansion. The title attribute may be used to provide an expansion of the abbreviation. The attribute, if specified, must contain an expansion of the abbreviation, and nothing else."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/abbr"
        }
      ]
    },
    {
      name: "ruby",
      description: {
        kind: "markdown",
        value: "The ruby element allows one or more spans of phrasing content to be marked with ruby annotations. Ruby annotations are short runs of text presented alongside base text, primarily used in East Asian typography as a guide for pronunciation or to include other annotations. In Japanese, this form of typography is also known as furigana. Ruby text can appear on either side, and sometimes both sides, of the base text, and it is possible to control its position using CSS. A more complete introduction to ruby can be found in the Use Cases & Exploratory Approaches for Ruby Markup document as well as in CSS Ruby Module Level 1. [RUBY-UC] [CSSRUBY]"
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/ruby"
        }
      ]
    },
    {
      name: "rb",
      description: {
        kind: "markdown",
        value: "The rb element marks the base text component of a ruby annotation. When it is the child of a ruby element, it doesn't represent anything itself, but its parent ruby element uses it as part of determining what it represents."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/rb"
        }
      ]
    },
    {
      name: "rt",
      description: {
        kind: "markdown",
        value: "The rt element marks the ruby text component of a ruby annotation. When it is the child of a ruby element or of an rtc element that is itself the child of a ruby element, it doesn't represent anything itself, but its ancestor ruby element uses it as part of determining what it represents."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/rt"
        }
      ]
    },
    {
      name: "rp",
      description: {
        kind: "markdown",
        value: "The rp element is used to provide fallback text to be shown by user agents that don't support ruby annotations. One widespread convention is to provide parentheses around the ruby text component of a ruby annotation."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/rp"
        }
      ]
    },
    {
      name: "time",
      description: {
        kind: "markdown",
        value: "The time element represents its contents, along with a machine-readable form of those contents in the datetime attribute. The kind of content is limited to various kinds of dates, times, time-zone offsets, and durations, as described below."
      },
      attributes: [
        {
          name: "datetime",
          description: {
            kind: "markdown",
            value: "This attribute indicates the time and/or date of the element and must be in one of the formats described below."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/time"
        }
      ]
    },
    {
      name: "code",
      description: {
        kind: "markdown",
        value: "The code element represents a fragment of computer code. This could be an XML element name, a file name, a computer program, or any other string that a computer would recognize."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/code"
        }
      ]
    },
    {
      name: "var",
      description: {
        kind: "markdown",
        value: "The var element represents a variable. This could be an actual variable in a mathematical expression or programming context, an identifier representing a constant, a symbol identifying a physical quantity, a function parameter, or just be a term used as a placeholder in prose."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/var"
        }
      ]
    },
    {
      name: "samp",
      description: {
        kind: "markdown",
        value: "The samp element represents sample or quoted output from another program or computing system."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/samp"
        }
      ]
    },
    {
      name: "kbd",
      description: {
        kind: "markdown",
        value: "The kbd element represents user input (typically keyboard input, although it may also be used to represent other input, such as voice commands)."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/kbd"
        }
      ]
    },
    {
      name: "sub",
      description: {
        kind: "markdown",
        value: "The sub element represents a subscript."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/sub"
        }
      ]
    },
    {
      name: "sup",
      description: {
        kind: "markdown",
        value: "The sup element represents a superscript."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/sup"
        }
      ]
    },
    {
      name: "i",
      description: {
        kind: "markdown",
        value: "The i element represents a span of text in an alternate voice or mood, or otherwise offset from the normal prose in a manner indicating a different quality of text, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/i"
        }
      ]
    },
    {
      name: "b",
      description: {
        kind: "markdown",
        value: "The b element represents a span of text to which attention is being drawn for utilitarian purposes without conveying any extra importance and with no implication of an alternate voice or mood, such as key words in a document abstract, product names in a review, actionable words in interactive text-driven software, or an article lede."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/b"
        }
      ]
    },
    {
      name: "u",
      description: {
        kind: "markdown",
        value: "The u element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/u"
        }
      ]
    },
    {
      name: "mark",
      description: {
        kind: "markdown",
        value: "The mark element represents a run of text in one document marked or highlighted for reference purposes, due to its relevance in another context. When used in a quotation or other block of text referred to from the prose, it indicates a highlight that was not originally present but which has been added to bring the reader's attention to a part of the text that might not have been considered important by the original author when the block was originally written, but which is now under previously unexpected scrutiny. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its likely relevance to the user's current activity."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/mark"
        }
      ]
    },
    {
      name: "bdi",
      description: {
        kind: "markdown",
        value: "The bdi element represents a span of text that is to be isolated from its surroundings for the purposes of bidirectional text formatting. [BIDI]"
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/bdi"
        }
      ]
    },
    {
      name: "bdo",
      description: {
        kind: "markdown",
        value: "The bdo element represents explicit text directionality formatting control for its children. It allows authors to override the Unicode bidirectional algorithm by explicitly specifying a direction override. [BIDI]"
      },
      attributes: [
        {
          name: "dir",
          description: "The direction in which text should be rendered in this element's contents. Possible values are:\n\n*   `ltr`: Indicates that the text should go in a left-to-right direction.\n*   `rtl`: Indicates that the text should go in a right-to-left direction."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/bdo"
        }
      ]
    },
    {
      name: "span",
      description: {
        kind: "markdown",
        value: "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/span"
        }
      ]
    },
    {
      name: "br",
      description: {
        kind: "markdown",
        value: "The br element represents a line break."
      },
      void: !0,
      attributes: [
        {
          name: "clear",
          description: "Indicates where to begin the next line after the break."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/br"
        }
      ]
    },
    {
      name: "wbr",
      description: {
        kind: "markdown",
        value: "The wbr element represents a line break opportunity."
      },
      void: !0,
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/wbr"
        }
      ]
    },
    {
      name: "ins",
      description: {
        kind: "markdown",
        value: "The ins element represents an addition to the document."
      },
      attributes: [
        {
          name: "cite",
          description: "This attribute defines the URI of a resource that explains the change, such as a link to meeting minutes or a ticket in a troubleshooting system."
        },
        {
          name: "datetime",
          description: 'This attribute indicates the time and date of the change and must be a valid date with an optional time string. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/ins"
        }
      ]
    },
    {
      name: "del",
      description: {
        kind: "markdown",
        value: "The del element represents a removal from the document."
      },
      attributes: [
        {
          name: "cite",
          description: {
            kind: "markdown",
            value: "A URI for a resource that explains the change (for example, meeting minutes)."
          }
        },
        {
          name: "datetime",
          description: {
            kind: "markdown",
            value: 'This attribute indicates the time and date of the change and must be a valid date string with an optional time. If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp. For the format of the string without a time, see [Format of a valid date string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_date_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article."). The format of the string if it includes both date and time is covered in [Format of a valid local date and time string](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats#Format_of_a_valid_local_date_and_time_string "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.") in [Date and time formats used in HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats "Certain HTML elements use date and/or time values. The formats of the strings that specify these are described in this article.").'
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/del"
        }
      ]
    },
    {
      name: "picture",
      description: {
        kind: "markdown",
        value: "The picture element is a container which provides multiple sources to its contained img element to allow authors to declaratively control or give hints to the user agent about which image resource to use, based on the screen pixel density, viewport size, image format, and other factors. It represents its children."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/picture"
        }
      ]
    },
    {
      name: "img",
      description: {
        kind: "markdown",
        value: "An img element represents an image."
      },
      void: !0,
      attributes: [
        {
          name: "alt",
          description: {
            kind: "markdown",
            value: 'This attribute defines an alternative text description of the image.\n\n**Note:** Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with visual impairments), if the user chooses not to display images, or if the browser cannot display the image because it is invalid or an [unsupported type](#Supported_image_formats). In these cases, the browser may replace the image with the text defined in this element\'s `alt` attribute. You should, for these reasons and others, provide a useful value for `alt` whenever possible.\n\n**Note:** Omitting this attribute altogether indicates that the image is a key part of the content, and no textual equivalent is available. Setting this attribute to an empty string (`alt=""`) indicates that this image is _not_ a key part of the content (decorative), and that non-visual browsers may omit it from rendering.'
          }
        },
        {
          name: "src",
          description: {
            kind: "markdown",
            value: "The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting `srcset`, `src` is treated like a candidate image with a pixel density descriptor `1x` unless an image with this pixel density descriptor is already defined in `srcset,` or unless `srcset` contains '`w`' descriptors."
          }
        },
        {
          name: "srcset",
          description: {
            kind: "markdown",
            value: "A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use. Each string is composed of:\n\n1.  a URL to an image,\n2.  optionally, whitespace followed by one of:\n    *   A width descriptor, or a positive integer directly followed by '`w`'. The width descriptor is divided by the source size given in the `sizes` attribute to calculate the effective pixel density.\n    *   A pixel density descriptor, which is a positive floating point number directly followed by '`x`'.\n\nIf no descriptor is specified, the source is assigned the default descriptor: `1x`.\n\nIt is incorrect to mix width descriptors and pixel density descriptors in the same `srcset` attribute. Duplicate descriptors (for instance, two sources in the same `srcset` which are both described with '`2x`') are also invalid.\n\nThe user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions. See our [Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) tutorial for an example."
          }
        },
        {
          name: "crossorigin",
          valueSet: "xo",
          description: {
            kind: "markdown",
            value: 'This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being "[tainted](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image#What_is_a_tainted_canvas)." The allowed values are:\n`anonymous`\n\nA cross-origin request (i.e., with `Origin:` HTTP header) is performed, but no credential is sent (i.e., no cookie, X.509 certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (by not setting the [`Access-Control-Allow-Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin "The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.") HTTP header), the image will be tainted and its usage restricted.\n\n`use-credentials`\n\nA cross-origin request (i.e., with the [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin "The Origin request header indicates where a fetch originates from. It doesn\'t include any path information, but only the server name. It is sent with CORS requests, as well as with POST requests. It is similar to the Referer header, but, unlike this header, it doesn\'t disclose the whole path.") HTTP header) performed along with credentials sent (i.e., a cookie, certificate, or HTTP Basic authentication). If the server does not give credentials to the origin site (through the `Access-Control-Allow-Credentials` HTTP header), the image will be tainted and its usage restricted.\n\nIf the attribute is not present, the resource is fetched without a CORS request (i.e., without sending the `Origin` HTTP header), preventing its non-tainted usage in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the `anonymous` value was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.'
          }
        },
        {
          name: "usemap",
          description: {
            kind: "markdown",
            value: 'The partial URL (starting with \'#\') of an [image map](https://developer.mozilla.org/en-US/docs/HTML/Element/map) associated with the element.\n\n**Note:** You cannot use this attribute if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") element.'
          }
        },
        {
          name: "ismap",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.\n\n**Note:** This attribute is allowed only if the `<img>` element is a descendant of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.") element with a valid [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) attribute.'
          }
        },
        {
          name: "width",
          description: {
            kind: "markdown",
            value: "The intrinsic width of the image in pixels."
          }
        },
        {
          name: "height",
          description: {
            kind: "markdown",
            value: "The intrinsic height of the image in pixels."
          }
        },
        {
          name: "decoding",
          valueSet: "decoding",
          description: {
            kind: "markdown",
            value: `Provides an image decoding hint to the browser. The allowed values are:
\`sync\`

Decode the image synchronously for atomic presentation with other content.

\`async\`

Decode the image asynchronously to reduce delay in presenting other content.

\`auto\`

Default mode, which indicates no preference for the decoding mode. The browser decides what is best for the user.`
          }
        },
        {
          name: "loading",
          valueSet: "loading",
          description: {
            kind: "markdown",
            value: "Indicates how the browser should load the image."
          }
        },
        {
          name: "referrerpolicy",
          valueSet: "referrerpolicy",
          description: {
            kind: "markdown",
            value: "A string indicating which referrer to use when fetching the resource:\n\n*   `no-referrer:` The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer \"The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.\") header will not be sent.\n*   `no-referrer-when-downgrade:` No `Referer` header will be sent when navigating to an origin without TLS (HTTPS). This is a user agent’s default behavior if no policy is otherwise specified.\n*   `origin:` The `Referer` header will include the page of origin's scheme, the host, and the port.\n*   `origin-when-cross-origin:` Navigating to other origins will limit the included referral data to the scheme, the host and the port, while navigating from the same origin will include the referrer's full path.\n*   `unsafe-url:` The `Referer` header will include the origin and the path, but not the fragment, password, or username. This case is unsafe because it can leak origins and paths from TLS-protected resources to insecure origins."
          }
        },
        {
          name: "sizes",
          description: {
            kind: "markdown",
            value: "A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:\n\n1.  a media condition. This must be omitted for the last item.\n2.  a source size value.\n\nSource size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the `srcset` attribute, when those sources are described using width ('`w`') descriptors. The selected source size affects the intrinsic size of the image (the image’s display size if no CSS styling is applied). If the `srcset` attribute is absent, or contains no values with a width (`w`) descriptor, then the `sizes` attribute has no effect."
          }
        },
        {
          name: "importance",
          description: "Indicates the relative importance of the resource. Priority hints are delegated using the values:"
        },
        {
          name: "importance",
          description: "`auto`: Indicates **no preference**. The browser may use its own heuristics to decide the priority of the image.\n\n`high`: Indicates to the browser that the image is of **high** priority.\n\n`low`: Indicates to the browser that the image is of **low** priority."
        },
        {
          name: "intrinsicsize",
          description: "This attribute tells the browser to ignore the actual intrinsic size of the image and pretend it’s the size specified in the attribute. Specifically, the image would raster at these dimensions and `naturalWidth`/`naturalHeight` on images would return the values specified in this attribute. [Explainer](https://github.com/ojanvafai/intrinsicsize-attribute), [examples](https://googlechrome.github.io/samples/intrinsic-size/index.html)"
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/img"
        }
      ]
    },
    {
      name: "iframe",
      description: {
        kind: "markdown",
        value: "The iframe element represents a nested browsing context."
      },
      attributes: [
        {
          name: "src",
          description: {
            kind: "markdown",
            value: 'The URL of the page to embed. Use a value of `about:blank` to embed an empty page that conforms to the [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Inherited_origins). Also note that programatically removing an `<iframe>`\'s src attribute (e.g. via [`Element.removeAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute "The Element method removeAttribute() removes the attribute with the specified name from the element.")) causes `about:blank` to be loaded in the frame in Firefox (from version 65), Chromium-based browsers, and Safari/iOS.'
          }
        },
        {
          name: "srcdoc",
          description: {
            kind: "markdown",
            value: "Inline HTML to embed, overriding the `src` attribute. If a browser does not support the `srcdoc` attribute, it will fall back to the URL in the `src` attribute."
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: 'A targetable name for the embedded browsing context. This can be used in the `target` attribute of the [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a "The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL."), [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server."), or [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base "The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.") elements; the `formtarget` attribute of the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") or [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") elements; or the `windowName` parameter in the [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open "The Window interface\'s open() method loads the specified resource into the browsing context (window, <iframe> or tab) with the specified name. If the name doesn\'t exist, then a new window is opened and the specified resource is loaded into its browsing context.") method.'
          }
        },
        {
          name: "sandbox",
          valueSet: "sb",
          description: {
            kind: "markdown",
            value: 'Applies extra restrictions to the content in the frame. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions:\n\n*   `allow-forms`: Allows the resource to submit forms. If this keyword is not used, form submission is blocked.\n*   `allow-modals`: Lets the resource [open modal windows](https://html.spec.whatwg.org/multipage/origin.html#sandboxed-modals-flag).\n*   `allow-orientation-lock`: Lets the resource [lock the screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation).\n*   `allow-pointer-lock`: Lets the resource use the [Pointer Lock API](https://developer.mozilla.org/en-US/docs/WebAPI/Pointer_Lock).\n*   `allow-popups`: Allows popups (such as `window.open()`, `target="_blank"`, or `showModalDialog()`). If this keyword is not used, the popup will silently fail to open.\n*   `allow-popups-to-escape-sandbox`: Lets the sandboxed document open new windows without those windows inheriting the sandboxing. For example, this can safely sandbox an advertisement without forcing the same restrictions upon the page the ad links to.\n*   `allow-presentation`: Lets the resource start a [presentation session](https://developer.mozilla.org/en-US/docs/Web/API/PresentationRequest).\n*   `allow-same-origin`: If this token is not used, the resource is treated as being from a special origin that always fails the [same-origin policy](https://developer.mozilla.org/en-US/docs/Glossary/same-origin_policy "same-origin policy: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.").\n*   `allow-scripts`: Lets the resource run scripts (but not create popup windows).\n*   `allow-storage-access-by-user-activation` : Lets the resource request access to the parent\'s storage capabilities with the [Storage Access API](https://developer.mozilla.org/en-US/docs/Web/API/Storage_Access_API).\n*   `allow-top-navigation`: Lets the resource navigate the top-level browsing context (the one named `_top`).\n*   `allow-top-navigation-by-user-activation`: Lets the resource navigate the top-level browsing context, but only if initiated by a user gesture.\n\n**Notes about sandboxing:**\n\n*   When the embedded document has the same origin as the embedding page, it is **strongly discouraged** to use both `allow-scripts` and `allow-same-origin`, as that lets the embedded document remove the `sandbox` attribute — making it no more secure than not using the `sandbox` attribute at all.\n*   Sandboxing is useless if the attacker can display content outside a sandboxed `iframe` — such as if the viewer opens the frame in a new tab. Such content should be also served from a _separate origin_ to limit potential damage.\n*   The `sandbox` attribute is unsupported in Internet Explorer 9 and earlier.'
          }
        },
        {
          name: "seamless",
          valueSet: "v"
        },
        {
          name: "allowfullscreen",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'Set to `true` if the `<iframe>` can activate fullscreen mode by calling the [`requestFullscreen()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen "The Element.requestFullscreen() method issues an asynchronous request to make the element be displayed in full-screen mode.") method.\nThis attribute is considered a legacy attribute and redefined as `allow="fullscreen"`.'
          }
        },
        {
          name: "width",
          description: {
            kind: "markdown",
            value: "The width of the frame in CSS pixels. Default is `300`."
          }
        },
        {
          name: "height",
          description: {
            kind: "markdown",
            value: "The height of the frame in CSS pixels. Default is `150`."
          }
        },
        {
          name: "allow",
          description: "Specifies a [feature policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy) for the `<iframe>`."
        },
        {
          name: "allowpaymentrequest",
          description: "Set to `true` if a cross-origin `<iframe>` should be allowed to invoke the [Payment Request API](https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API)."
        },
        {
          name: "allowpaymentrequest",
          description: 'This attribute is considered a legacy attribute and redefined as `allow="payment"`.'
        },
        {
          name: "csp",
          description: 'A [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) enforced for the embedded resource. See [`HTMLIFrameElement.csp`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp "The csp property of the HTMLIFrameElement interface specifies the Content Security Policy that an embedded document must agree to enforce upon itself.") for details.'
        },
        {
          name: "importance",
          description: `The download priority of the resource in the \`<iframe>\`'s \`src\` attribute. Allowed values:

\`auto\` (default)

No preference. The browser uses its own heuristics to decide the priority of the resource.

\`high\`

The resource should be downloaded before other lower-priority page resources.

\`low\`

The resource should be downloaded after other higher-priority page resources.`
        },
        {
          name: "referrerpolicy",
          description: 'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the frame\'s resource:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (HTTPS→HTTPS), but don\'t send it to a less secure destination (HTTPS→HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, only send the origin when the protocol security level stays the same (HTTPS→HTTPS), and send no header to a less secure destination (HTTPS→HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/iframe"
        }
      ]
    },
    {
      name: "embed",
      description: {
        kind: "markdown",
        value: "The embed element provides an integration point for an external (typically non-HTML) application or interactive content."
      },
      void: !0,
      attributes: [
        {
          name: "src",
          description: {
            kind: "markdown",
            value: "The URL of the resource being embedded."
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: "The MIME type to use to select the plug-in to instantiate."
          }
        },
        {
          name: "width",
          description: {
            kind: "markdown",
            value: "The displayed width of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed."
          }
        },
        {
          name: "height",
          description: {
            kind: "markdown",
            value: "The displayed height of the resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). This must be an absolute value; percentages are _not_ allowed."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/embed"
        }
      ]
    },
    {
      name: "object",
      description: {
        kind: "markdown",
        value: "The object element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin."
      },
      attributes: [
        {
          name: "data",
          description: {
            kind: "markdown",
            value: "The address of the resource as a valid URL. At least one of **data** and **type** must be defined."
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: "The [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource specified by **data**. At least one of **data** and **type** must be defined."
          }
        },
        {
          name: "typemustmatch",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute indicates if the **type** attribute and the actual [content type](https://developer.mozilla.org/en-US/docs/Glossary/Content_type) of the resource must match to be used."
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "The name of valid browsing context (HTML5), or the name of the control (HTML 4)."
          }
        },
        {
          name: "usemap",
          description: {
            kind: "markdown",
            value: "A hash-name reference to a [`<map>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map \"The HTML <map> element is used with <area> elements to define an image map (a clickable link area).\") element; that is a '#' followed by the value of a [`name`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attr-name) of a map element."
          }
        },
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'The form element, if any, that the object element is associated with (its _form owner_). The value of the attribute must be an ID of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document.'
          }
        },
        {
          name: "width",
          description: {
            kind: "markdown",
            value: "The width of the display resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))"
          }
        },
        {
          name: "height",
          description: {
            kind: "markdown",
            value: "The height of the displayed resource, in [CSS pixels](https://drafts.csswg.org/css-values/#px). -- (Absolute values only. [NO percentages](https://html.spec.whatwg.org/multipage/embedded-content.html#dimension-attributes))"
          }
        },
        {
          name: "archive",
          description: "A space-separated list of URIs for archives of resources for the object."
        },
        {
          name: "border",
          description: "The width of a border around the control, in pixels."
        },
        {
          name: "classid",
          description: "The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute."
        },
        {
          name: "codebase",
          description: "The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document."
        },
        {
          name: "codetype",
          description: "The content type of the data specified by **classid**."
        },
        {
          name: "declare",
          description: "The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the <object> element completely each that that the resource is reused."
        },
        {
          name: "standby",
          description: "A message that the browser can show while loading the object's implementation and data."
        },
        {
          name: "tabindex",
          description: "The position of the element in the tabbing navigation order for the current document."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/object"
        }
      ]
    },
    {
      name: "param",
      description: {
        kind: "markdown",
        value: "The param element defines parameters for plugins invoked by object elements. It does not represent anything on its own."
      },
      void: !0,
      attributes: [
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "Name of the parameter."
          }
        },
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "Specifies the value of the parameter."
          }
        },
        {
          name: "type",
          description: 'Only used if the `valuetype` is set to "ref". Specifies the MIME type of values found at the URI specified by value.'
        },
        {
          name: "valuetype",
          description: `Specifies the type of the \`value\` attribute. Possible values are:

*   data: Default value. The value is passed to the object's implementation as a string.
*   ref: The value is a URI to a resource where run-time values are stored.
*   object: An ID of another [\`<object>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object "The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.") in the same document.`
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/param"
        }
      ]
    },
    {
      name: "video",
      description: {
        kind: "markdown",
        value: "A video element is used for playing videos or movies, and audio files with captions."
      },
      attributes: [
        {
          name: "src"
        },
        {
          name: "crossorigin",
          valueSet: "xo"
        },
        {
          name: "poster"
        },
        {
          name: "preload",
          valueSet: "pl"
        },
        {
          name: "autoplay",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'A Boolean attribute; if specified, the video automatically begins to play back as soon as it can do so without stopping to finish loading the data.\n**Note**: Sites that automatically play audio (or video with an audio track) can be an unpleasant experience for users, so it should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.\n\nTo disable video autoplay, `autoplay="false"` will not work; the video will autoplay if the attribute is there in the `<video>` tag at all. To remove autoplay the attribute needs to be removed altogether.\n\nIn some browsers (e.g. Chrome 70.0) autoplay is not working if no `muted` attribute is present.'
          }
        },
        {
          name: "mediagroup"
        },
        {
          name: "loop",
          valueSet: "v"
        },
        {
          name: "muted",
          valueSet: "v"
        },
        {
          name: "controls",
          valueSet: "v"
        },
        {
          name: "width"
        },
        {
          name: "height"
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/video"
        }
      ]
    },
    {
      name: "audio",
      description: {
        kind: "markdown",
        value: "An audio element represents a sound or audio stream."
      },
      attributes: [
        {
          name: "src",
          description: {
            kind: "markdown",
            value: 'The URL of the audio to embed. This is subject to [HTTP access controls](https://developer.mozilla.org/en-US/docs/HTTP_access_control). This is optional; you may instead use the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element within the audio block to specify the audio to embed.'
          }
        },
        {
          name: "crossorigin",
          valueSet: "xo",
          description: {
            kind: "markdown",
            value: 'This enumerated attribute indicates whether to use CORS to fetch the related image. [CORS-enabled resources](https://developer.mozilla.org/en-US/docs/CORS_Enabled_Image) can be reused in the [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") element without being _tainted_. The allowed values are:\n\nanonymous\n\nSends a cross-origin request without a credential. In other words, it sends the `Origin:` HTTP header without a cookie, X.509 certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_, and its usage restricted.\n\nuse-credentials\n\nSends a cross-origin request with a credential. In other words, it sends the `Origin:` HTTP header with a cookie, a certificate, or performing HTTP Basic authentication. If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.\n\nWhen not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.") elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/HTML/CORS_settings_attributes) for additional information.'
          }
        },
        {
          name: "preload",
          valueSet: "pl",
          description: {
            kind: "markdown",
            value: "This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. It may have one of the following values:\n\n*   `none`: Indicates that the audio should not be preloaded.\n*   `metadata`: Indicates that only audio metadata (e.g. length) is fetched.\n*   `auto`: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.\n*   _empty string_: A synonym of the `auto` value.\n\nIf not set, `preload`'s default value is browser-defined (i.e. each browser may have its own default value). The spec advises it to be set to `metadata`.\n\n**Usage notes:**\n\n*   The `autoplay` attribute has precedence over `preload`. If `autoplay` is specified, the browser would obviously need to start downloading the audio for playback.\n*   The browser is not forced by the specification to follow the value of this attribute; it is a mere hint."
          }
        },
        {
          name: "autoplay",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: `A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading.

**Note**: Sites that automatically play audio (or videos with an audio track) can be an unpleasant experience for users, so should be avoided when possible. If you must offer autoplay functionality, you should make it opt-in (requiring a user to specifically enable it). However, this can be useful when creating media elements whose source will be set at a later time, under user control.`
          }
        },
        {
          name: "mediagroup"
        },
        {
          name: "loop",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "A Boolean attribute: if specified, the audio player will automatically seek back to the start upon reaching the end of the audio."
          }
        },
        {
          name: "muted",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "A Boolean attribute that indicates whether the audio will be initially silenced. Its default value is `false`."
          }
        },
        {
          name: "controls",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "If this attribute is present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/audio"
        }
      ]
    },
    {
      name: "source",
      description: {
        kind: "markdown",
        value: "The source element allows authors to specify multiple alternative media resources for media elements. It does not represent anything on its own."
      },
      void: !0,
      attributes: [
        {
          name: "src",
          description: {
            kind: "markdown",
            value: 'Required for [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") and [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document."), address of the media resource. The value of this attribute is ignored when the `<source>` element is placed inside a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.'
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: "The MIME-type of the resource, optionally with a `codecs` parameter. See [RFC 4281](https://tools.ietf.org/html/rfc4281) for information about how to specify codecs."
          }
        },
        {
          name: "sizes",
          description: 'Is a list of source sizes that describes the final rendered width of the image represented by the source. Each source size consists of a comma-separated list of media condition-length pairs. This information is used by the browser to determine, before laying the page out, which image defined in [`srcset`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-srcset) to use.  \nThe `sizes` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source "The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.'
        },
        {
          name: "srcset",
          description: "A list of one or more strings separated by commas indicating a set of possible images represented by the source for the browser to use. Each string is composed of:\n\n1.  one URL to an image,\n2.  a width descriptor, that is a positive integer directly followed by `'w'`. The default value, if missing, is the infinity.\n3.  a pixel density descriptor, that is a positive floating number directly followed by `'x'`. The default value, if missing, is `1x`.\n\nEach string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.  \nThe browser chooses the most adequate image to display at a given point of time.  \nThe `srcset` attribute has an effect only when the [`<source>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source \"The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element.\") element is the direct child of a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture \"The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.\") element."
        },
        {
          name: "media",
          description: '[Media query](https://developer.mozilla.org/en-US/docs/CSS/Media_queries) of the resource\'s intended media; this should be used only in a [`<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture "The HTML <picture> element contains zero or more <source> elements and one <img> element to provide versions of an image for different display/device scenarios.") element.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/source"
        }
      ]
    },
    {
      name: "track",
      description: {
        kind: "markdown",
        value: "The track element allows authors to specify explicit external timed text tracks for media elements. It does not represent anything on its own."
      },
      void: !0,
      attributes: [
        {
          name: "default",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This attribute indicates that the track should be enabled unless the user's preferences indicate that another track is more appropriate. This may only be used on one `track` element per media element."
          }
        },
        {
          name: "kind",
          valueSet: "tk",
          description: {
            kind: "markdown",
            value: "How the text track is meant to be used. If omitted the default kind is `subtitles`. If the attribute is not present, it will use the `subtitles`. If the attribute contains an invalid value, it will use `metadata`. (Versions of Chrome earlier than 52 treated an invalid value as `subtitles`.) The following keywords are allowed:\n\n*   `subtitles`\n    *   Subtitles provide translation of content that cannot be understood by the viewer. For example dialogue or text that is not English in an English language film.\n    *   Subtitles may contain additional content, usually extra background information. For example the text at the beginning of the Star Wars films, or the date, time, and location of a scene.\n*   `captions`\n    *   Closed captions provide a transcription and possibly a translation of audio.\n    *   It may include important non-verbal information such as music cues or sound effects. It may indicate the cue's source (e.g. music, text, character).\n    *   Suitable for users who are deaf or when the sound is muted.\n*   `descriptions`\n    *   Textual description of the video content.\n    *   Suitable for users who are blind or where the video cannot be seen.\n*   `chapters`\n    *   Chapter titles are intended to be used when the user is navigating the media resource.\n*   `metadata`\n    *   Tracks used by scripts. Not visible to the user."
          }
        },
        {
          name: "label",
          description: {
            kind: "markdown",
            value: "A user-readable title of the text track which is used by the browser when listing available text tracks."
          }
        },
        {
          name: "src",
          description: {
            kind: "markdown",
            value: 'Address of the track (`.vtt` file). Must be a valid URL. This attribute must be specified and its URL value must have the same origin as the document — unless the [`<audio>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio "The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.") or [`<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video "The HTML Video element (<video>) embeds a media player which supports video playback into the document.") parent element of the `track` element has a [`crossorigin`](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) attribute.'
          }
        },
        {
          name: "srclang",
          description: {
            kind: "markdown",
            value: "Language of the track text data. It must be a valid [BCP 47](https://r12a.github.io/app-subtags/) language tag. If the `kind` attribute is set to `subtitles,` then `srclang` must be defined."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/track"
        }
      ]
    },
    {
      name: "map",
      description: {
        kind: "markdown",
        value: "The map element, in conjunction with an img element and any area element descendants, defines an image map. The element represents its children."
      },
      attributes: [
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "The name attribute gives the map a name so that it can be referenced. The attribute must be present and must have a non-empty value with no space characters. The value of the name attribute must not be a compatibility-caseless match for the value of the name attribute of another map element in the same document. If the id attribute is also specified, both attributes must have the same value."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/map"
        }
      ]
    },
    {
      name: "area",
      description: {
        kind: "markdown",
        value: "The area element represents either a hyperlink with some text and a corresponding area on an image map, or a dead area on an image map."
      },
      void: !0,
      attributes: [
        {
          name: "alt"
        },
        {
          name: "coords"
        },
        {
          name: "shape",
          valueSet: "sh"
        },
        {
          name: "href"
        },
        {
          name: "target",
          valueSet: "target"
        },
        {
          name: "download"
        },
        {
          name: "ping"
        },
        {
          name: "rel"
        },
        {
          name: "hreflang"
        },
        {
          name: "type"
        },
        {
          name: "accesskey",
          description: "Specifies a keyboard navigation accelerator for the element. Pressing ALT or a similar key in association with the specified character selects the form control correlated with that key sequence. Page designers are forewarned to avoid key sequences already bound to browsers. This attribute is global since HTML5."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/area"
        }
      ]
    },
    {
      name: "table",
      description: {
        kind: "markdown",
        value: "The table element represents data with more than one dimension, in the form of a table."
      },
      attributes: [
        {
          name: "border"
        },
        {
          name: "align",
          description: 'This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:\n\n*   left: the table is displayed on the left side of the document;\n*   center: the table is displayed in the center of the document;\n*   right: the table is displayed on the right side of the document.\n\n**Usage Note**\n\n*   **Do not use this attribute**, as it has been deprecated. The [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table "The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). Set [`margin-left`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left "The margin-left CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") and [`margin-right`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right "The margin-right CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer.") to `auto` or [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin "The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.") to `0 auto` to achieve an effect that is similar to the align attribute.\n*   Prior to Firefox 4, Firefox also supported the `middle`, `absmiddle`, and `abscenter` values as synonyms of `center`, in quirks mode only.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/table"
        }
      ]
    },
    {
      name: "caption",
      description: {
        kind: "markdown",
        value: "The caption element represents the title of the table that is its parent, if it has a parent and that is a table element."
      },
      attributes: [
        {
          name: "align",
          description: `This enumerated attribute indicates how the caption must be aligned with respect to the table. It may have one of the following values:

\`left\`

The caption is displayed to the left of the table.

\`top\`

The caption is displayed above the table.

\`right\`

The caption is displayed to the right of the table.

\`bottom\`

The caption is displayed below the table.

**Usage note:** Do not use this attribute, as it has been deprecated. The [\`<caption>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption "The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.") element should be styled using the [CSS](https://developer.mozilla.org/en-US/docs/CSS) properties [\`caption-side\`](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side "The caption-side CSS property puts the content of a table's <caption> on the specified side. The values are relative to the writing-mode of the table.") and [\`text-align\`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.").`
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/caption"
        }
      ]
    },
    {
      name: "colgroup",
      description: {
        kind: "markdown",
        value: "The colgroup element represents a group of one or more columns in the table that is its parent, if it has a parent and that is a table element."
      },
      attributes: [
        {
          name: "span"
        },
        {
          name: "align",
          description: 'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed. The descendant [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") elements may override this value using their own [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-align) attribute.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use one `td:nth-child(an+b)` CSS selector per column, where a is the total number of the columns in the table and b is the ordinal position of this column in the table. Only after this selector the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property can be used.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/colgroup"
        }
      ]
    },
    {
      name: "col",
      description: {
        kind: "markdown",
        value: "If a col element has a parent and that is a colgroup element that itself has a parent that is a table element, then the col element represents one or more columns in the column group represented by that colgroup."
      },
      void: !0,
      attributes: [
        {
          name: "span"
        },
        {
          name: "align",
          description: 'This enumerated attribute specifies how horizontal alignment of each column cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, its value is inherited from the [`align`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup#attr-align) of the [`<colgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup "The HTML <colgroup> element defines a group of columns within a table.") element this `<col>` element belongs too. If there are none, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values:\n    *   Do not try to set the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on a selector giving a [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element. Because [`<td>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") elements are not descendant of the [`<col>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col "The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.") element, they won\'t inherit it.\n    *   If the table doesn\'t use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, use the `td:nth-child(an+b)` CSS selector. Set `a` to zero and `b` to the position of the column in the table, e.g. `td:nth-child(2) { text-align: right; }` to right-align the second column.\n    *   If the table does use a [`colspan`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-colspan) attribute, the effect can be achieved by combining adequate CSS attribute selectors like `[colspan=n]`, though this is not trivial.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/col"
        }
      ]
    },
    {
      name: "tbody",
      description: {
        kind: "markdown",
        value: "The tbody element represents a block of rows that consist of a body of data for the parent table element, if the tbody element has a parent and it is a table."
      },
      attributes: [
        {
          name: "align",
          description: 'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes.\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/tbody"
        }
      ]
    },
    {
      name: "thead",
      description: {
        kind: "markdown",
        value: "The thead element represents the block of rows that consist of the column labels (headers) for the parent table element, if the thead element has a parent and it is a table."
      },
      attributes: [
        {
          name: "align",
          description: 'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/thead"
        }
      ]
    },
    {
      name: "tfoot",
      description: {
        kind: "markdown",
        value: "The tfoot element represents the block of rows that consist of the column summaries (footers) for the parent table element, if the tfoot element has a parent and it is a table."
      },
      attributes: [
        {
          name: "align",
          description: 'This enumerated attribute specifies how horizontal alignment of each cell content will be handled. Possible values are:\n\n*   `left`, aligning the content to the left of the cell\n*   `center`, centering the content in the cell\n*   `right`, aligning the content to the right of the cell\n*   `justify`, inserting spaces into the textual content so that the content is justified in the cell\n*   `char`, aligning the textual content on a special character with a minimal offset, defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nIf this attribute is not set, the `left` value is assumed.\n\n**Note:** Do not use this attribute as it is obsolete (not supported) in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property on it.\n*   To achieve the same effect as the `char` value, in CSS3, you can use the value of the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attr-char) as the value of the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property Unimplemented.'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/tfoot"
        }
      ]
    },
    {
      name: "tr",
      description: {
        kind: "markdown",
        value: "The tr element represents a row of cells in a table."
      },
      attributes: [
        {
          name: "align",
          description: 'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") which specifies how the cell\'s context should be aligned horizontally within the cells in the row; this is shorthand for using `align` on every cell in the row individually. Possible values are:\n\n`left`\n\nAlign the content of each cell at its left edge.\n\n`center`\n\nCenter the contents of each cell between their left and right edges.\n\n`right`\n\nAlign the content of each cell at its right edge.\n\n`justify`\n\nWiden whitespaces within the text of each cell so that the text fills the full width of each cell (full justification).\n\n`char`\n\nAlign each cell in the row on a specific character (such that each row in the column that is configured this way will horizontally align its cells on that character). This uses the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attr-charoff) to establish the alignment character (typically "." or "," when aligning numerical data) and the number of characters that should follow the alignment character. This alignment type was never widely supported.\n\nIf no value is expressly set for `align`, the parent node\'s value is inherited.\n\nInstead of using the obsolete `align` attribute, you should instead use the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to establish `left`, `center`, `right`, or `justify` alignment for the row\'s cells. To apply character-based alignment, set the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the alignment character (such as `"."` or `","`).'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/tr"
        }
      ]
    },
    {
      name: "td",
      description: {
        kind: "markdown",
        value: "The td element represents a data cell in a table."
      },
      attributes: [
        {
          name: "colspan"
        },
        {
          name: "rowspan"
        },
        {
          name: "headers"
        },
        {
          name: "abbr",
          description: `This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself.

**Note:** Do not use this attribute as it is obsolete in the latest standard. Alternatively, you can put the abbreviated description inside the cell and place the long content in the **title** attribute.`
        },
        {
          name: "align",
          description: 'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-charoff) attributes Unimplemented (see [bug 2212](https://bugzilla.mozilla.org/show_bug.cgi?id=2212 "character alignment not implemented (align=char, charoff=, text-align:<string>)")).\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attr-char). Unimplemented in CSS3.'
        },
        {
          name: "axis",
          description: "This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard."
        },
        {
          name: "bgcolor",
          description: `This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

 

\`black\` = "#000000"

 

\`green\` = "#008000"

 

\`silver\` = "#C0C0C0"

 

\`lime\` = "#00FF00"

 

\`gray\` = "#808080"

 

\`olive\` = "#808000"

 

\`white\` = "#FFFFFF"

 

\`yellow\` = "#FFFF00"

 

\`maroon\` = "#800000"

 

\`navy\` = "#000080"

 

\`red\` = "#FF0000"

 

\`blue\` = "#0000FF"

 

\`purple\` = "#800080"

 

\`teal\` = "#008080"

 

\`fuchsia\` = "#FF00FF"

 

\`aqua\` = "#00FFFF"

**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [\`<td>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td "The HTML <td> element defines a cell of a table that contains data. It participates in the table model.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/CSS). To create a similar effect use the [\`background-color\`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/CSS) instead.`
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/td"
        }
      ]
    },
    {
      name: "th",
      description: {
        kind: "markdown",
        value: "The th element represents a header cell in a table."
      },
      attributes: [
        {
          name: "colspan"
        },
        {
          name: "rowspan"
        },
        {
          name: "headers"
        },
        {
          name: "scope",
          valueSet: "s"
        },
        {
          name: "sorted"
        },
        {
          name: "abbr",
          description: {
            kind: "markdown",
            value: "This attribute contains a short abbreviated description of the cell's content. Some user-agents, such as speech readers, may present this description before the content itself."
          }
        },
        {
          name: "align",
          description: 'This enumerated attribute specifies how the cell content\'s horizontal alignment will be handled. Possible values are:\n\n*   `left`: The content is aligned to the left of the cell.\n*   `center`: The content is centered in the cell.\n*   `right`: The content is aligned to the right of the cell.\n*   `justify` (with text only): The content is stretched out inside the cell so that it covers its entire width.\n*   `char` (with text only): The content is aligned to a character inside the `<th>` element with minimal offset. This character is defined by the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char) and [`charoff`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-charoff) attributes.\n\nThe default value when this attribute is not specified is `left`.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard.\n\n*   To achieve the same effect as the `left`, `center`, `right` or `justify` values, apply the CSS [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property to the element.\n*   To achieve the same effect as the `char` value, give the [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align "The text-align CSS property sets the horizontal alignment of an inline or table-cell box. This means it works like vertical-align but in the horizontal direction.") property the same value you would use for the [`char`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-char). Unimplemented in CSS3.'
        },
        {
          name: "axis",
          description: "This attribute contains a list of space-separated strings. Each string is the `id` of a group of cells that this header applies to.\n\n**Note:** Do not use this attribute as it is obsolete in the latest standard: use the [`scope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) attribute instead."
        },
        {
          name: "bgcolor",
          description: `This attribute defines the background color of each cell in a column. It consists of a 6-digit hexadecimal code as defined in [sRGB](https://www.w3.org/Graphics/Color/sRGB) and is prefixed by '#'. This attribute may be used with one of sixteen predefined color strings:

 

\`black\` = "#000000"

 

\`green\` = "#008000"

 

\`silver\` = "#C0C0C0"

 

\`lime\` = "#00FF00"

 

\`gray\` = "#808080"

 

\`olive\` = "#808000"

 

\`white\` = "#FFFFFF"

 

\`yellow\` = "#FFFF00"

 

\`maroon\` = "#800000"

 

\`navy\` = "#000080"

 

\`red\` = "#FF0000"

 

\`blue\` = "#0000FF"

 

\`purple\` = "#800080"

 

\`teal\` = "#008080"

 

\`fuchsia\` = "#FF00FF"

 

\`aqua\` = "#00FFFF"

**Note:** Do not use this attribute, as it is non-standard and only implemented in some versions of Microsoft Internet Explorer: The [\`<th>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th "The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.") element should be styled using [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS). To create a similar effect use the [\`background-color\`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color "The background-color CSS property sets the background color of an element.") property in [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) instead.`
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/th"
        }
      ]
    },
    {
      name: "form",
      description: {
        kind: "markdown",
        value: "The form element represents a collection of form-associated elements, some of which can represent editable values that can be submitted to a server for processing."
      },
      attributes: [
        {
          name: "accept-charset",
          description: {
            kind: "markdown",
            value: 'A space- or comma-delimited list of character encodings that the server accepts. The browser uses them in the order in which they are listed. The default value, the reserved string `"UNKNOWN"`, indicates the same encoding as that of the document containing the form element.  \nIn previous versions of HTML, the different character encodings could be delimited by spaces or commas. In HTML5, only spaces are allowed as delimiters.'
          }
        },
        {
          name: "action",
          description: {
            kind: "markdown",
            value: 'The URI of a program that processes the form information. This value can be overridden by a [`formaction`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
          }
        },
        {
          name: "autocomplete",
          valueSet: "o",
          description: {
            kind: "markdown",
            value: "Indicates whether input elements can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:\n\n*   `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.\n*   `on`: The browser can automatically complete values based on values that the user has previously entered in the form.\n\nFor most modern browsers (including Firefox 38+, Google Chrome 34+, IE 11+) setting the autocomplete attribute will not prevent a browser's password manager from asking the user if they want to store login fields (username and password), if the user permits the storage the browser will autofill the login the next time the user visits the page. See [The autocomplete attribute and login fields](https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields).\n**Note:** If you set `autocomplete` to `off` in a form because the document provides its own auto-completion, then you should also set `autocomplete` to `off` for each of the form's `input` elements that the document can auto-complete. For details, see the note regarding Google Chrome in the [Browser Compatibility chart](#compatChart)."
          }
        },
        {
          name: "enctype",
          valueSet: "et",
          description: {
            kind: "markdown",
            value: 'When the value of the `method` attribute is `post`, enctype is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: The value used for an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the `type` attribute set to "file".\n*   `text/plain`: (HTML5)\n\nThis value can be overridden by a [`formenctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formenctype) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
          }
        },
        {
          name: "method",
          valueSet: "m",
          description: {
            kind: "markdown",
            value: 'The [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) method that the browser uses to submit the form. Possible values are:\n\n*   `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; form data are included in the body of the form and sent to the server.\n*   `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a \'?\' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n*   `dialog`: Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog "The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.") element to close the dialog when submitted.\n\nThis value can be overridden by a [`formmethod`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formmethod) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "The name of the form. In HTML 4, its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not just an empty string in HTML 5."
          }
        },
        {
          name: "novalidate",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'This Boolean attribute indicates that the form is not to be validated when submitted. If this attribute is not specified (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formnovalidate) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element belonging to the form.'
          }
        },
        {
          name: "target",
          valueSet: "target",
          description: {
            kind: "markdown",
            value: 'A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:\n\n*   `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.\n*   `_parent`: Load the response into the HTML 4 frameset parent of the current frame, or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: HTML 4: Load the response into the full original window, and cancel all other frames. HTML5: Load the response into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.\n*   _iframename_: The response is displayed in a named [`<iframe>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe "The HTML Inline Frame element (<iframe>) represents a nested browsing context, embedding another HTML page into the current one.").\n\nHTML5: This value can be overridden by a [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formtarget) attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") or [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
          }
        },
        {
          name: "accept",
          description: 'A comma-separated list of content types that the server accepts.\n\n**Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept) attribute of the specific [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element.'
        },
        {
          name: "autocapitalize",
          description: "This is a nonstandard attribute used by iOS Safari Mobile which controls whether and how the text value for textual form control descendants should be automatically capitalized as it is entered/edited by the user. If the `autocapitalize` attribute is specified on an individual form control descendant, it trumps the form-wide `autocapitalize` setting. The non-deprecated values are available in iOS 5 and later. The default value is `sentences`. Possible values are:\n\n*   `none`: Completely disables automatic capitalization\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/form"
        }
      ]
    },
    {
      name: "label",
      description: {
        kind: "markdown",
        value: "The label element represents a caption in a user interface. The caption can be associated with a specific form control, known as the label element's labeled control, either using the for attribute, or by putting the form control inside the label element itself."
      },
      attributes: [
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'The [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element with which the label is associated (its _form owner_). If specified, the value of the attribute is the `id` of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. This lets you place label elements anywhere within a document, not just as descendants of their form elements.'
          }
        },
        {
          name: "for",
          description: {
            kind: "markdown",
            value: "The [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id) of a [labelable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Form_labelable) form-related element in the same document as the `<label>` element. The first element in the document with an `id` matching the value of the `for` attribute is the _labeled control_ for this label element, if it is a labelable element. If it is not labelable then the `for` attribute has no effect. If there are other elements which also match the `id` value, later in the document, they are not considered.\n\n**Note**: A `<label>` element can have both a `for` attribute and a contained control element, as long as the `for` attribute points to the contained control element."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/label"
        }
      ]
    },
    {
      name: "input",
      description: {
        kind: "markdown",
        value: "The input element represents a typed data field, usually with a form control to allow the user to edit the data."
      },
      void: !0,
      attributes: [
        {
          name: "accept"
        },
        {
          name: "alt"
        },
        {
          name: "autocomplete",
          valueSet: "inputautocomplete"
        },
        {
          name: "autofocus",
          valueSet: "v"
        },
        {
          name: "checked",
          valueSet: "v"
        },
        {
          name: "dirname"
        },
        {
          name: "disabled",
          valueSet: "v"
        },
        {
          name: "form"
        },
        {
          name: "formaction"
        },
        {
          name: "formenctype",
          valueSet: "et"
        },
        {
          name: "formmethod",
          valueSet: "fm"
        },
        {
          name: "formnovalidate",
          valueSet: "v"
        },
        {
          name: "formtarget"
        },
        {
          name: "height"
        },
        {
          name: "inputmode",
          valueSet: "im"
        },
        {
          name: "list"
        },
        {
          name: "max"
        },
        {
          name: "maxlength"
        },
        {
          name: "min"
        },
        {
          name: "minlength"
        },
        {
          name: "multiple",
          valueSet: "v"
        },
        {
          name: "name"
        },
        {
          name: "pattern"
        },
        {
          name: "placeholder"
        },
        {
          name: "readonly",
          valueSet: "v"
        },
        {
          name: "required",
          valueSet: "v"
        },
        {
          name: "size"
        },
        {
          name: "src"
        },
        {
          name: "step"
        },
        {
          name: "type",
          valueSet: "t"
        },
        {
          name: "value"
        },
        {
          name: "width"
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/input"
        }
      ]
    },
    {
      name: "button",
      description: {
        kind: "markdown",
        value: "The button element represents a button labeled by its contents."
      },
      attributes: [
        {
          name: "autofocus",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute lets you specify that the button should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified."
          }
        },
        {
          name: "disabled",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'This Boolean attribute indicates that the user cannot interact with the button. If this attribute is not specified, the button inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element with the **disabled** attribute set, then the button is enabled.\n\nFirefox will, unlike other browsers, by default, [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Use the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-autocomplete) attribute to control this feature.'
          }
        },
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'The form element that the button is associated with (its _form owner_). The value of the attribute must be the **id** attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element in the same document. If this attribute is not specified, the `<button>` element will be associated to an ancestor [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element, if one exists. This attribute enables you to associate `<button>` elements to [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements anywhere within a document, not just as descendants of [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") elements.'
          }
        },
        {
          name: "formaction",
          description: {
            kind: "markdown",
            value: "The URI of a program that processes the information submitted by the button. If specified, it overrides the [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-action) attribute of the button's form owner."
          }
        },
        {
          name: "formenctype",
          valueSet: "et",
          description: {
            kind: "markdown",
            value: 'If the button is a submit button, this attribute specifies the type of content that is used to submit the form to the server. Possible values are:\n\n*   `application/x-www-form-urlencoded`: The default value if the attribute is not specified.\n*   `multipart/form-data`: Use this value if you are using an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") element with the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) attribute set to `file`.\n*   `text/plain`\n\nIf this attribute is specified, it overrides the [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-enctype) attribute of the button\'s form owner.'
          }
        },
        {
          name: "formmethod",
          valueSet: "fm",
          description: {
            kind: "markdown",
            value: "If the button is a submit button, this attribute specifies the HTTP method that the browser uses to submit the form. Possible values are:\n\n*   `post`: The data from the form are included in the body of the form and sent to the server.\n*   `get`: The data from the form are appended to the **form** attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.\n\nIf specified, this attribute overrides the [`method`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) attribute of the button's form owner."
          }
        },
        {
          name: "formnovalidate",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "If the button is a submit button, this Boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides the [`novalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate) attribute of the button's form owner."
          }
        },
        {
          name: "formtarget",
          description: {
            kind: "markdown",
            value: "If the button is a submit button, this attribute is a name or keyword indicating where to display the response that is received after submitting the form. This is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). If this attribute is specified, it overrides the [`target`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-target) attribute of the button's form owner. The following keywords have special meanings:\n\n*   `_self`: Load the response into the same browsing context as the current one. This value is the default if the attribute is not specified.\n*   `_blank`: Load the response into a new unnamed browsing context.\n*   `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.\n*   `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`."
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "The name of the button, which is submitted with the form data."
          }
        },
        {
          name: "type",
          valueSet: "bt",
          description: {
            kind: "markdown",
            value: "The type of the button. Possible values are:\n\n*   `submit`: The button submits the form data to the server. This is the default if the attribute is not specified, or if the attribute is dynamically changed to an empty or invalid value.\n*   `reset`: The button resets all the controls to their initial values.\n*   `button`: The button has no default behavior. It can have client-side scripts associated with the element's events, which are triggered when the events occur."
          }
        },
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "The initial value of the button. It defines the value associated with the button which is submitted with the form data. This value is passed to the server in params when the form is submitted."
          }
        },
        {
          name: "autocomplete",
          description: 'The use of this attribute on a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") is nonstandard and Firefox-specific. By default, unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button "The HTML <button> element represents a clickable button, which can be used in forms or anywhere in a document that needs simple, standard button functionality.") across page loads. Setting the value of this attribute to `off` (i.e. `autocomplete="off"`) disables this feature. See [bug 654072](https://bugzilla.mozilla.org/show_bug.cgi?id=654072 "if disabled state is changed with javascript, the normal state doesn\'t return after refreshing the page").'
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/button"
        }
      ]
    },
    {
      name: "select",
      description: {
        kind: "markdown",
        value: "The select element represents a control for selecting amongst a set of options."
      },
      attributes: [
        {
          name: "autocomplete",
          valueSet: "inputautocomplete",
          description: {
            kind: "markdown",
            value: 'A [`DOMString`](https://developer.mozilla.org/en-US/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") providing a hint for a [user agent\'s](https://developer.mozilla.org/en-US/docs/Glossary/user_agent "user agent\'s: A user agent is a computer program representing a person, for example, a browser in a Web context.") autocomplete feature. See [The HTML autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for a complete list of values and details on how to use autocomplete.'
          }
        },
        {
          name: "autofocus",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the `autofocus` attribute."
          }
        },
        {
          name: "disabled",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example `fieldset`; if there is no containing element with the `disabled` attribute set, then the control is enabled."
          }
        },
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'This attribute lets you specify the form element to which the select element is associated (that is, its "form owner"). If this attribute is specified, its value must be the same as the `id` of a form element in the same document. This enables you to place select elements anywhere within a document, not just as descendants of their form elements.'
          }
        },
        {
          name: "multiple",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When `multiple` is specified, most browsers will show a scrolling list box instead of a single line dropdown."
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "This attribute is used to specify the name of the control."
          }
        },
        {
          name: "required",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "A Boolean attribute indicating that an option with a non-empty string value must be selected."
          }
        },
        {
          name: "size",
          description: {
            kind: "markdown",
            value: "If the control is presented as a scrolling list box (e.g. when `multiple` is specified), this attribute represents the number of rows in the list that should be visible at one time. Browsers are not required to present a select element as a scrolled list box. The default value is 0.\n\n**Note:** According to the HTML5 specification, the default value for size should be 1; however, in practice, this has been found to break some web sites, and no other browser currently does that, so Mozilla has opted to continue to return 0 for the time being with Firefox."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/select"
        }
      ]
    },
    {
      name: "datalist",
      description: {
        kind: "markdown",
        value: "The datalist element represents a set of option elements that represent predefined options for other controls. In the rendering, the datalist element represents nothing and it, along with its children, should be hidden."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/datalist"
        }
      ]
    },
    {
      name: "optgroup",
      description: {
        kind: "markdown",
        value: "The optgroup element represents a group of option elements with a common label."
      },
      attributes: [
        {
          name: "disabled",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "If this Boolean attribute is set, none of the items in this option group is selectable. Often browsers grey out such control and it won't receive any browsing events, like mouse clicks or focus-related ones."
          }
        },
        {
          name: "label",
          description: {
            kind: "markdown",
            value: "The name of the group of options, which the browser can use when labeling the options in the user interface. This attribute is mandatory if this element is used."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/optgroup"
        }
      ]
    },
    {
      name: "option",
      description: {
        kind: "markdown",
        value: "The option element represents an option in a select element or as part of a list of suggestions in a datalist element."
      },
      attributes: [
        {
          name: "disabled",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'If this Boolean attribute is set, this option is not checkable. Often browsers grey out such control and it won\'t receive any browsing event, like mouse clicks or focus-related ones. If this attribute is not set, the element can still be disabled if one of its ancestors is a disabled [`<optgroup>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup "The HTML <optgroup> element creates a grouping of options within a <select> element.") element.'
          }
        },
        {
          name: "label",
          description: {
            kind: "markdown",
            value: "This attribute is text for the label indicating the meaning of the option. If the `label` attribute isn't defined, its value is that of the element text content."
          }
        },
        {
          name: "selected",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'If present, this Boolean attribute indicates that the option is initially selected. If the `<option>` element is the descendant of a [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element whose [`multiple`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple) attribute is not set, only one single `<option>` of this [`<select>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select "The HTML <select> element represents a control that provides a menu of options") element may have the `selected` attribute.'
          }
        },
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "The content of this attribute represents the value to be submitted with the form, should this option be selected. If this attribute is omitted, the value is taken from the text content of the option element."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/option"
        }
      ]
    },
    {
      name: "textarea",
      description: {
        kind: "markdown",
        value: "The textarea element represents a multiline plain text edit control for the element's raw value. The contents of the control represent the control's default value."
      },
      attributes: [
        {
          name: "autocomplete",
          valueSet: "inputautocomplete",
          description: {
            kind: "markdown",
            value: 'This attribute indicates whether the value of the control can be automatically completed by the browser. Possible values are:\n\n*   `off`: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.\n*   `on`: The browser can automatically complete the value based on values that the user has entered during previous uses.\n\nIf the `autocomplete` attribute is not specified on a `<textarea>` element, then the browser uses the `autocomplete` attribute value of the `<textarea>` element\'s form owner. The form owner is either the [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element that this `<textarea>` element is a descendant of or the form element whose `id` is specified by the `form` attribute of the input element. For more information, see the [`autocomplete`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-autocomplete) attribute in [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.").'
          }
        },
        {
          name: "autofocus",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified."
          }
        },
        {
          name: "cols",
          description: {
            kind: "markdown",
            value: "The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is `20`."
          }
        },
        {
          name: "dirname"
        },
        {
          name: "disabled",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example [`<fieldset>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset "The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form."); if there is no containing element when the `disabled` attribute is set, the control is enabled.'
          }
        },
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'The form element that the `<textarea>` element is associated with (its "form owner"). The value of the attribute must be the `id` of a form element in the same document. If this attribute is not specified, the `<textarea>` element must be a descendant of a form element. This attribute enables you to place `<textarea>` elements anywhere within a document, not just as descendants of form elements.'
          }
        },
        {
          name: "inputmode",
          valueSet: "im"
        },
        {
          name: "maxlength",
          description: {
            kind: "markdown",
            value: "The maximum number of characters (unicode code points) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters."
          }
        },
        {
          name: "minlength",
          description: {
            kind: "markdown",
            value: "The minimum number of characters (unicode code points) required that the user should enter."
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "The name of the control."
          }
        },
        {
          name: "placeholder",
          description: {
            kind: "markdown",
            value: 'A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.\n\n**Note:** Placeholders should only be used to show an example of the type of data that should be entered into a form; they are _not_ a substitute for a proper [`<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label "The HTML <label> element represents a caption for an item in a user interface.") element tied to the input. See [Labels and placeholders](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Labels_and_placeholders "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") in [<input>: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") for a full explanation.'
          }
        },
        {
          name: "readonly",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the `disabled` attribute, the `readonly` attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form."
          }
        },
        {
          name: "required",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This attribute specifies that the user must fill in a value before submitting a form."
          }
        },
        {
          name: "rows",
          description: {
            kind: "markdown",
            value: "The number of visible text lines for the control."
          }
        },
        {
          name: "wrap",
          valueSet: "w",
          description: {
            kind: "markdown",
            value: "Indicates how the control wraps text. Possible values are:\n\n*   `hard`: The browser automatically inserts line breaks (CR+LF) so that each line has no more than the width of the control; the `cols` attribute must also be specified for this to take effect.\n*   `soft`: The browser ensures that all line breaks in the value consist of a CR+LF pair, but does not insert any additional line breaks.\n*   `off` : Like `soft` but changes appearance to `white-space: pre` so line segments exceeding `cols` are not wrapped and the `<textarea>` becomes horizontally scrollable.\n\nIf this attribute is not specified, `soft` is its default value."
          }
        },
        {
          name: "autocapitalize",
          description: "This is a non-standard attribute supported by WebKit on iOS (therefore nearly all browsers running on iOS, including Safari, Firefox, and Chrome), which controls whether and how the text value should be automatically capitalized as it is entered/edited by the user. The non-deprecated values are available in iOS 5 and later. Possible values are:\n\n*   `none`: Completely disables automatic capitalization.\n*   `sentences`: Automatically capitalize the first letter of sentences.\n*   `words`: Automatically capitalize the first letter of words.\n*   `characters`: Automatically capitalize all characters.\n*   `on`: Deprecated since iOS 5.\n*   `off`: Deprecated since iOS 5."
        },
        {
          name: "spellcheck",
          description: "Specifies whether the `<textarea>` is subject to spell checking by the underlying browser/OS. the value can be:\n\n*   `true`: Indicates that the element needs to have its spelling and grammar checked.\n*   `default` : Indicates that the element is to act according to a default behavior, possibly based on the parent element's own `spellcheck` value.\n*   `false` : Indicates that the element should not be spell checked."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/textarea"
        }
      ]
    },
    {
      name: "output",
      description: {
        kind: "markdown",
        value: "The output element represents the result of a calculation performed by the application, or the result of a user action."
      },
      attributes: [
        {
          name: "for",
          description: {
            kind: "markdown",
            value: "A space-separated list of other elements’ [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)s, indicating that those elements contributed input values to (or otherwise affected) the calculation."
          }
        },
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'The [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) that this element is associated with (its "form owner"). The value of the attribute must be an `id` of a form element in the same document. If this attribute is not specified, the output element must be a descendant of a form element. This attribute enables you to place output elements anywhere within a document, not just as descendants of their form elements.'
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: 'The name of the element, exposed in the [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement "The HTMLFormElement interface represents a <form> element in the DOM; it allows access to and in some cases modification of aspects of the form, as well as access to its component elements.") API.'
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/output"
        }
      ]
    },
    {
      name: "progress",
      description: {
        kind: "markdown",
        value: "The progress element represents the completion progress of a task. The progress is either indeterminate, indicating that progress is being made but that it is not clear how much more work remains to be done before the task is complete (e.g. because the task is waiting for a remote host to respond), or the progress is a number in the range zero to a maximum, giving the fraction of work that has so far been completed."
      },
      attributes: [
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and `max`, or between 0 and 1 if `max` is omitted. If there is no `value` attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take."
          }
        },
        {
          name: "max",
          description: {
            kind: "markdown",
            value: "This attribute describes how much work the task indicated by the `progress` element requires. The `max` attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/progress"
        }
      ]
    },
    {
      name: "meter",
      description: {
        kind: "markdown",
        value: "The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate."
      },
      attributes: [
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "The current numeric value. This must be between the minimum and maximum values (`min` attribute and `max` attribute) if they are specified. If unspecified or malformed, the value is 0. If specified, but not within the range given by the `min` attribute and `max` attribute, the value is equal to the nearest end of the range.\n\n**Usage note:** Unless the `value` attribute is between `0` and `1` (inclusive), the `min` and `max` attributes should define the range so that the `value` attribute's value is within it."
          }
        },
        {
          name: "min",
          description: {
            kind: "markdown",
            value: "The lower numeric bound of the measured range. This must be less than the maximum value (`max` attribute), if specified. If unspecified, the minimum value is 0."
          }
        },
        {
          name: "max",
          description: {
            kind: "markdown",
            value: "The upper numeric bound of the measured range. This must be greater than the minimum value (`min` attribute), if specified. If unspecified, the maximum value is 1."
          }
        },
        {
          name: "low",
          description: {
            kind: "markdown",
            value: "The upper numeric bound of the low end of the measured range. This must be greater than the minimum value (`min` attribute), and it also must be less than the high value and maximum value (`high` attribute and `max` attribute, respectively), if any are specified. If unspecified, or if less than the minimum value, the `low` value is equal to the minimum value."
          }
        },
        {
          name: "high",
          description: {
            kind: "markdown",
            value: "The lower numeric bound of the high end of the measured range. This must be less than the maximum value (`max` attribute), and it also must be greater than the low value and minimum value (`low` attribute and **min** attribute, respectively), if any are specified. If unspecified, or if greater than the maximum value, the `high` value is equal to the maximum value."
          }
        },
        {
          name: "optimum",
          description: {
            kind: "markdown",
            value: "This attribute indicates the optimal numeric value. It must be within the range (as defined by the `min` attribute and `max` attribute). When used with the `low` attribute and `high` attribute, it gives an indication where along the range is considered preferable. For example, if it is between the `min` attribute and the `low` attribute, then the lower range is considered preferred."
          }
        },
        {
          name: "form",
          description: "This attribute associates the element with a `form` element that has ownership of the `meter` element. For example, a `meter` might be displaying a range corresponding to an `input` element of `type` _number_. This attribute is only used if the `meter` element is being used as a form-associated element; even then, it may be omitted if the element appears as a descendant of a `form` element."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/meter"
        }
      ]
    },
    {
      name: "fieldset",
      description: {
        kind: "markdown",
        value: "The fieldset element represents a set of form controls optionally grouped under a common name."
      },
      attributes: [
        {
          name: "disabled",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "If this Boolean attribute is set, all form controls that are descendants of the `<fieldset>`, are disabled, meaning they are not editable and won't be submitted along with the `<form>`. They won't receive any browsing events, like mouse clicks or focus-related events. By default browsers display such controls grayed out. Note that form elements inside the [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend \"The HTML <legend> element represents a caption for the content of its parent <fieldset>.\") element won't be disabled."
          }
        },
        {
          name: "form",
          description: {
            kind: "markdown",
            value: 'This attribute takes the value of the `id` attribute of a [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form "The HTML <form> element represents a document section that contains interactive controls for submitting information to a web server.") element you want the `<fieldset>` to be part of, even if it is not inside the form.'
          }
        },
        {
          name: "name",
          description: {
            kind: "markdown",
            value: 'The name associated with the group.\n\n**Note**: The caption for the fieldset is given by the first [`<legend>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend "The HTML <legend> element represents a caption for the content of its parent <fieldset>.") element nested inside it.'
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/fieldset"
        }
      ]
    },
    {
      name: "legend",
      description: {
        kind: "markdown",
        value: "The legend element represents a caption for the rest of the contents of the legend element's parent fieldset element, if any."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/legend"
        }
      ]
    },
    {
      name: "details",
      description: {
        kind: "markdown",
        value: "The details element represents a disclosure widget from which the user can obtain additional information or controls."
      },
      attributes: [
        {
          name: "open",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: "This Boolean attribute indicates whether or not the details — that is, the contents of the `<details>` element — are currently visible. The default, `false`, means the details are not visible."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/details"
        }
      ]
    },
    {
      name: "summary",
      description: {
        kind: "markdown",
        value: "The summary element represents a summary, caption, or legend for the rest of the contents of the summary element's parent details element, if any."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/summary"
        }
      ]
    },
    {
      name: "dialog",
      description: {
        kind: "markdown",
        value: "The dialog element represents a part of an application that a user interacts with to perform a task, for example a dialog box, inspector, or window."
      },
      attributes: [
        {
          name: "open",
          description: "Indicates that the dialog is active and available for interaction. When the `open` attribute is not set, the dialog shouldn't be shown to the user."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/dialog"
        }
      ]
    },
    {
      name: "script",
      description: {
        kind: "markdown",
        value: "The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user."
      },
      attributes: [
        {
          name: "src",
          description: {
            kind: "markdown",
            value: "This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.\n\nIf a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags."
          }
        },
        {
          name: "type",
          description: {
            kind: "markdown",
            value: 'This attribute indicates the type of script represented. The value of this attribute will be in one of the following categories:\n\n*   **Omitted or a JavaScript MIME type:** For HTML5-compliant browsers this indicates the script is JavaScript. HTML5 specification urges authors to omit the attribute rather than provide a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#JavaScript_types).\n*   **`module`:** For HTML5-compliant browsers the code is treated as a JavaScript module. The processing of the script contents is not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). Code may behave differently when the `module` keyword is used.\n*   **Any other value:** The embedded content is treated as a data block which won\'t be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. The `src` attribute will be ignored.\n\n**Note:** in Firefox you could specify the version of JavaScript contained in a `<script>` element by including a non-standard `version` parameter inside the `type` attribute — for example `type="text/javascript;version=1.8"`. This has been removed in Firefox 59 (see [bug 1428745](https://bugzilla.mozilla.org/show_bug.cgi?id=1428745 "FIXED: Remove support for version parameter from script loader")).'
          }
        },
        {
          name: "charset"
        },
        {
          name: "async",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: `This is a Boolean attribute indicating that the browser should, if possible, load the script asynchronously.

This attribute must not be used if the \`src\` attribute is absent (i.e. for inline scripts). If it is included in this case it will have no effect.

Browsers usually assume the worst case scenario and load scripts synchronously, (i.e. \`async="false"\`) during HTML parsing.

Dynamically inserted scripts (using [\`document.createElement()\`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement "In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.")) load asynchronously by default, so to turn on synchronous loading (i.e. scripts load in the order they were inserted) set \`async="false"\`.

See [Browser compatibility](#Browser_compatibility) for notes on browser support. See also [Async scripts for asm.js](https://developer.mozilla.org/en-US/docs/Games/Techniques/Async_scripts).`
          }
        },
        {
          name: "defer",
          valueSet: "v",
          description: {
            kind: "markdown",
            value: 'This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing [`DOMContentLoaded`](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded "/en-US/docs/Web/Events/DOMContentLoaded").\n\nScripts with the `defer` attribute will prevent the `DOMContentLoaded` event from firing until the script has loaded and finished evaluating.\n\nThis attribute must not be used if the `src` attribute is absent (i.e. for inline scripts), in this case it would have no effect.\n\nTo achieve a similar effect for dynamically inserted scripts use `async="false"` instead. Scripts with the `defer` attribute will execute in the order in which they appear in the document.'
          }
        },
        {
          name: "crossorigin",
          valueSet: "xo",
          description: {
            kind: "markdown",
            value: 'Normal `script` elements pass minimal information to the [`window.onerror`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror "The onerror property of the GlobalEventHandlers mixin is an EventHandler that processes error events.") for scripts which do not pass the standard [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS "CORS: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.") checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for a more descriptive explanation of its valid arguments.'
          }
        },
        {
          name: "nonce",
          description: {
            kind: "markdown",
            value: "A cryptographic nonce (number used once) to list the allowed inline scripts in a [script-src Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src). The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial."
          }
        },
        {
          name: "integrity",
          description: "This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)."
        },
        {
          name: "nomodule",
          description: "This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES2015 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code."
        },
        {
          name: "referrerpolicy",
          description: 'Indicates which [referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer) to send when fetching the script, or resources fetched by the script:\n\n*   `no-referrer`: The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent.\n*   `no-referrer-when-downgrade` (default): The [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer "The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.") header will not be sent to [origin](https://developer.mozilla.org/en-US/docs/Glossary/origin "origin: Web content\'s origin is defined by the scheme (protocol), host (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, host, and port all match.")s without [TLS](https://developer.mozilla.org/en-US/docs/Glossary/TLS "TLS: Transport Layer Security (TLS), previously known as Secure Sockets Layer (SSL), is a protocol used by applications to communicate securely across a network, preventing tampering with and eavesdropping on email, web browsing, messaging, and other protocols.") ([HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS "HTTPS: HTTPS (HTTP Secure) is an encrypted version of the HTTP protocol. It usually uses SSL or TLS to encrypt all communication between a client and a server. This secure connection allows clients to safely exchange sensitive data with a server, for example for banking activities or online shopping.")).\n*   `origin`: The sent referrer will be limited to the origin of the referring page: its [scheme](https://developer.mozilla.org/en-US/docs/Archive/Mozilla/URIScheme), [host](https://developer.mozilla.org/en-US/docs/Glossary/host "host: A host is a device connected to the Internet (or a local network). Some hosts called servers offer additional services like serving webpages or storing files and emails."), and [port](https://developer.mozilla.org/en-US/docs/Glossary/port "port: For a computer connected to a network with an IP address, a port is a communication endpoint. Ports are designated by numbers, and below 1024 each port is associated by default with a specific protocol.").\n*   `origin-when-cross-origin`: The referrer sent to other origins will be limited to the scheme, the host, and the port. Navigations on the same origin will still include the path.\n*   `same-origin`: A referrer will be sent for [same origin](https://developer.mozilla.org/en-US/docs/Glossary/Same-origin_policy "same origin: The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin."), but cross-origin requests will contain no referrer information.\n*   `strict-origin`: Only send the origin of the document as the referrer when the protocol security level stays the same (e.g. HTTPS→HTTPS), but don\'t send it to a less secure destination (e.g. HTTPS→HTTP).\n*   `strict-origin-when-cross-origin`: Send a full URL when performing a same-origin request, but only send the origin when the protocol security level stays the same (e.g.HTTPS→HTTPS), and send no header to a less secure destination (e.g. HTTPS→HTTP).\n*   `unsafe-url`: The referrer will include the origin _and_ the path (but not the [fragment](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/hash), [password](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/password), or [username](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/username)). **This value is unsafe**, because it leaks origins and paths from TLS-protected resources to insecure origins.\n\n**Note**: An empty string value (`""`) is both the default value, and a fallback value if `referrerpolicy` is not supported. If `referrerpolicy` is not explicitly specified on the `<script>` element, it will adopt a higher-level referrer policy, i.e. one set on the whole document or domain. If a higher-level policy is not available, the empty string is treated as being equivalent to `no-referrer-when-downgrade`.'
        },
        {
          name: "text",
          description: "Like the `textContent` attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/script"
        }
      ]
    },
    {
      name: "noscript",
      description: {
        kind: "markdown",
        value: "The noscript element represents nothing if scripting is enabled, and represents its children if scripting is disabled. It is used to present different markup to user agents that support scripting and those that don't support scripting, by affecting how the document is parsed."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/noscript"
        }
      ]
    },
    {
      name: "template",
      description: {
        kind: "markdown",
        value: "The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/template"
        }
      ]
    },
    {
      name: "canvas",
      description: {
        kind: "markdown",
        value: "The canvas element provides scripts with a resolution-dependent bitmap canvas, which can be used for rendering graphs, game graphics, art, or other visual images on the fly."
      },
      attributes: [
        {
          name: "width",
          description: {
            kind: "markdown",
            value: "The width of the coordinate space in CSS pixels. Defaults to 300."
          }
        },
        {
          name: "height",
          description: {
            kind: "markdown",
            value: "The height of the coordinate space in CSS pixels. Defaults to 150."
          }
        },
        {
          name: "moz-opaque",
          description: "Lets the canvas know whether or not translucency will be a factor. If the canvas knows there's no translucency, painting performance can be optimized. This is only supported by Mozilla-based browsers; use the standardized [`canvas.getContext('2d', { alpha: false })`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext \"The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported.\") instead."
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/canvas"
        }
      ]
    },
    {
      name: "slot",
      description: {
        kind: "markdown",
        value: "The slot element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together."
      },
      attributes: [
        {
          name: "name",
          description: {
            kind: "markdown",
            value: "The slot's name.\nA **named slot** is a `<slot>` element with a `name` attribute."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/slot"
        }
      ]
    },
    {
      name: "data",
      description: {
        kind: "markdown",
        value: "The data element links a given piece of content with a machine-readable translation."
      },
      attributes: [
        {
          name: "value",
          description: {
            kind: "markdown",
            value: "This attribute specifies the machine-readable translation of the content of the element."
          }
        }
      ],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/data"
        }
      ]
    },
    {
      name: "hgroup",
      description: {
        kind: "markdown",
        value: "The hgroup element represents a heading and related content. It groups a single h1–h6 element with one or more p."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/hgroup"
        }
      ]
    },
    {
      name: "menu",
      description: {
        kind: "markdown",
        value: "The menu element represents an unordered list of interactive items."
      },
      attributes: [],
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Element/menu"
        }
      ]
    }
  ],
  globalAttributes: [
    {
      name: "accesskey",
      description: {
        kind: "markdown",
        value: "Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey"
        }
      ]
    },
    {
      name: "autocapitalize",
      description: {
        kind: "markdown",
        value: "Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:\n\n*   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)\n*   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase\n*   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase\n*   `characters`, all letters should default to uppercase"
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize"
        }
      ]
    },
    {
      name: "class",
      description: {
        kind: "markdown",
        value: 'A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](https://developer.mozilla.org/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").'
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class"
        }
      ]
    },
    {
      name: "contenteditable",
      description: {
        kind: "markdown",
        value: "An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:\n\n*   `true` or the _empty string_, which indicates that the element must be editable;\n*   `false`, which indicates that the element must not be editable."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable"
        }
      ]
    },
    {
      name: "contextmenu",
      description: {
        kind: "markdown",
        value: 'The `[**id**](#attr-id)` of a [`<menu>`](https://developer.mozilla.org/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.'
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu"
        }
      ]
    },
    {
      name: "dir",
      description: {
        kind: "markdown",
        value: "An enumerated attribute indicating the directionality of the element's text. It can have the following values:\n\n*   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);\n*   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);\n*   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element."
      },
      valueSet: "d",
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir"
        }
      ]
    },
    {
      name: "draggable",
      description: {
        kind: "markdown",
        value: "An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `true`, which indicates that the element may be dragged\n*   `false`, which indicates that the element may not be dragged."
      },
      valueSet: "b",
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable"
        }
      ]
    },
    {
      name: "dropzone",
      description: {
        kind: "markdown",
        value: "An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values:\n\n*   `copy`, which indicates that dropping will create a copy of the element that was dragged\n*   `move`, which indicates that the element that was dragged will be moved to this new location.\n*   `link`, will create a link to the dragged data."
      }
    },
    {
      name: "exportparts",
      description: {
        kind: "markdown",
        value: "Used to transitively export shadow parts from a nested shadow tree into a containing light tree."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts"
        }
      ]
    },
    {
      name: "hidden",
      description: {
        kind: "markdown",
        value: "A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown."
      },
      valueSet: "v",
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden"
        }
      ]
    },
    {
      name: "id",
      description: {
        kind: "markdown",
        value: "Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS)."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id"
        }
      ]
    },
    {
      name: "inputmode",
      description: {
        kind: "markdown",
        value: 'Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.'
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode"
        }
      ]
    },
    {
      name: "is",
      description: {
        kind: "markdown",
        value: "Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements) for more details)."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is"
        }
      ]
    },
    {
      name: "itemid",
      description: {
        kind: "markdown",
        value: "The unique, global identifier of an item."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid"
        }
      ]
    },
    {
      name: "itemprop",
      description: {
        kind: "markdown",
        value: "Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop"
        }
      ]
    },
    {
      name: "itemref",
      description: {
        kind: "markdown",
        value: "Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref"
        }
      ]
    },
    {
      name: "itemscope",
      description: {
        kind: "markdown",
        value: "`itemscope` (usually) works along with `[itemtype](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context."
      },
      valueSet: "v",
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope"
        }
      ]
    },
    {
      name: "itemtype",
      description: {
        kind: "markdown",
        value: "Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype"
        }
      ]
    },
    {
      name: "lang",
      description: {
        kind: "markdown",
        value: "Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang"
        }
      ]
    },
    {
      name: "part",
      description: {
        kind: "markdown",
        value: 'A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](https://developer.mozilla.org/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.'
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part"
        }
      ]
    },
    {
      name: "role",
      valueSet: "roles"
    },
    {
      name: "slot",
      description: {
        kind: "markdown",
        value: "Assigns a slot in a [shadow DOM](https://developer.mozilla.org/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](https://developer.mozilla.org/docs/Web/HTML/Element/slot \"The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.\") element whose `[name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name)` attribute's value matches that `slot` attribute's value."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot"
        }
      ]
    },
    {
      name: "spellcheck",
      description: {
        kind: "markdown",
        value: "An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:\n\n*   `true`, which indicates that the element should be, if possible, checked for spelling errors;\n*   `false`, which indicates that the element should not be checked for spelling errors."
      },
      valueSet: "b",
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck"
        }
      ]
    },
    {
      name: "style",
      description: {
        kind: "markdown",
        value: 'Contains [CSS](https://developer.mozilla.org/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](https://developer.mozilla.org/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.'
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style"
        }
      ]
    },
    {
      name: "tabindex",
      description: {
        kind: "markdown",
        value: `An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

*   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
*   \`0\` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
*   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.`
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex"
        }
      ]
    },
    {
      name: "title",
      description: {
        kind: "markdown",
        value: "Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip."
      },
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title"
        }
      ]
    },
    {
      name: "translate",
      description: {
        kind: "markdown",
        value: "An enumerated attribute that is used to specify whether an element's attribute values and the values of its [`Text`](https://developer.mozilla.org/docs/Web/API/Text \"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.\") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:\n\n*   empty string and `yes`, which indicates that the element will be translated.\n*   `no`, which indicates that the element will not be translated."
      },
      valueSet: "y",
      references: [
        {
          name: "MDN Reference",
          url: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate"
        }
      ]
    },
    {
      name: "onabort",
      description: {
        kind: "markdown",
        value: "The loading of a resource has been aborted."
      }
    },
    {
      name: "onblur",
      description: {
        kind: "markdown",
        value: "An element has lost focus (does not bubble)."
      }
    },
    {
      name: "oncanplay",
      description: {
        kind: "markdown",
        value: "The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content."
      }
    },
    {
      name: "oncanplaythrough",
      description: {
        kind: "markdown",
        value: "The user agent can play the media up to its end without having to stop for further buffering of content."
      }
    },
    {
      name: "onchange",
      description: {
        kind: "markdown",
        value: "The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user."
      }
    },
    {
      name: "onclick",
      description: {
        kind: "markdown",
        value: "A pointing device button has been pressed and released on an element."
      }
    },
    {
      name: "oncontextmenu",
      description: {
        kind: "markdown",
        value: "The right button of the mouse is clicked (before the context menu is displayed)."
      }
    },
    {
      name: "ondblclick",
      description: {
        kind: "markdown",
        value: "A pointing device button is clicked twice on an element."
      }
    },
    {
      name: "ondrag",
      description: {
        kind: "markdown",
        value: "An element or text selection is being dragged (every 350ms)."
      }
    },
    {
      name: "ondragend",
      description: {
        kind: "markdown",
        value: "A drag operation is being ended (by releasing a mouse button or hitting the escape key)."
      }
    },
    {
      name: "ondragenter",
      description: {
        kind: "markdown",
        value: "A dragged element or text selection enters a valid drop target."
      }
    },
    {
      name: "ondragleave",
      description: {
        kind: "markdown",
        value: "A dragged element or text selection leaves a valid drop target."
      }
    },
    {
      name: "ondragover",
      description: {
        kind: "markdown",
        value: "An element or text selection is being dragged over a valid drop target (every 350ms)."
      }
    },
    {
      name: "ondragstart",
      description: {
        kind: "markdown",
        value: "The user starts dragging an element or text selection."
      }
    },
    {
      name: "ondrop",
      description: {
        kind: "markdown",
        value: "An element is dropped on a valid drop target."
      }
    },
    {
      name: "ondurationchange",
      description: {
        kind: "markdown",
        value: "The duration attribute has been updated."
      }
    },
    {
      name: "onemptied",
      description: {
        kind: "markdown",
        value: "The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it."
      }
    },
    {
      name: "onended",
      description: {
        kind: "markdown",
        value: "Playback has stopped because the end of the media was reached."
      }
    },
    {
      name: "onerror",
      description: {
        kind: "markdown",
        value: "A resource failed to load."
      }
    },
    {
      name: "onfocus",
      description: {
        kind: "markdown",
        value: "An element has received focus (does not bubble)."
      }
    },
    {
      name: "onformchange"
    },
    {
      name: "onforminput"
    },
    {
      name: "oninput",
      description: {
        kind: "markdown",
        value: "The value of an element changes or the content of an element with the attribute contenteditable is modified."
      }
    },
    {
      name: "oninvalid",
      description: {
        kind: "markdown",
        value: "A submittable element has been checked and doesn't satisfy its constraints."
      }
    },
    {
      name: "onkeydown",
      description: {
        kind: "markdown",
        value: "A key is pressed down."
      }
    },
    {
      name: "onkeypress",
      description: {
        kind: "markdown",
        value: "A key is pressed down and that key normally produces a character value (use input instead)."
      }
    },
    {
      name: "onkeyup",
      description: {
        kind: "markdown",
        value: "A key is released."
      }
    },
    {
      name: "onload",
      description: {
        kind: "markdown",
        value: "A resource and its dependent resources have finished loading."
      }
    },
    {
      name: "onloadeddata",
      description: {
        kind: "markdown",
        value: "The first frame of the media has finished loading."
      }
    },
    {
      name: "onloadedmetadata",
      description: {
        kind: "markdown",
        value: "The metadata has been loaded."
      }
    },
    {
      name: "onloadstart",
      description: {
        kind: "markdown",
        value: "Progress has begun."
      }
    },
    {
      name: "onmousedown",
      description: {
        kind: "markdown",
        value: "A pointing device button (usually a mouse) is pressed on an element."
      }
    },
    {
      name: "onmousemove",
      description: {
        kind: "markdown",
        value: "A pointing device is moved over an element."
      }
    },
    {
      name: "onmouseout",
      description: {
        kind: "markdown",
        value: "A pointing device is moved off the element that has the listener attached or off one of its children."
      }
    },
    {
      name: "onmouseover",
      description: {
        kind: "markdown",
        value: "A pointing device is moved onto the element that has the listener attached or onto one of its children."
      }
    },
    {
      name: "onmouseup",
      description: {
        kind: "markdown",
        value: "A pointing device button is released over an element."
      }
    },
    {
      name: "onmousewheel"
    },
    {
      name: "onmouseenter",
      description: {
        kind: "markdown",
        value: "A pointing device is moved onto the element that has the listener attached."
      }
    },
    {
      name: "onmouseleave",
      description: {
        kind: "markdown",
        value: "A pointing device is moved off the element that has the listener attached."
      }
    },
    {
      name: "onpause",
      description: {
        kind: "markdown",
        value: "Playback has been paused."
      }
    },
    {
      name: "onplay",
      description: {
        kind: "markdown",
        value: "Playback has begun."
      }
    },
    {
      name: "onplaying",
      description: {
        kind: "markdown",
        value: "Playback is ready to start after having been paused or delayed due to lack of data."
      }
    },
    {
      name: "onprogress",
      description: {
        kind: "markdown",
        value: "In progress."
      }
    },
    {
      name: "onratechange",
      description: {
        kind: "markdown",
        value: "The playback rate has changed."
      }
    },
    {
      name: "onreset",
      description: {
        kind: "markdown",
        value: "A form is reset."
      }
    },
    {
      name: "onresize",
      description: {
        kind: "markdown",
        value: "The document view has been resized."
      }
    },
    {
      name: "onreadystatechange",
      description: {
        kind: "markdown",
        value: "The readyState attribute of a document has changed."
      }
    },
    {
      name: "onscroll",
      description: {
        kind: "markdown",
        value: "The document view or an element has been scrolled."
      }
    },
    {
      name: "onseeked",
      description: {
        kind: "markdown",
        value: "A seek operation completed."
      }
    },
    {
      name: "onseeking",
      description: {
        kind: "markdown",
        value: "A seek operation began."
      }
    },
    {
      name: "onselect",
      description: {
        kind: "markdown",
        value: "Some text is being selected."
      }
    },
    {
      name: "onshow",
      description: {
        kind: "markdown",
        value: "A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute"
      }
    },
    {
      name: "onstalled",
      description: {
        kind: "markdown",
        value: "The user agent is trying to fetch media data, but data is unexpectedly not forthcoming."
      }
    },
    {
      name: "onsubmit",
      description: {
        kind: "markdown",
        value: "A form is submitted."
      }
    },
    {
      name: "onsuspend",
      description: {
        kind: "markdown",
        value: "Media data loading has been suspended."
      }
    },
    {
      name: "ontimeupdate",
      description: {
        kind: "markdown",
        value: "The time indicated by the currentTime attribute has been updated."
      }
    },
    {
      name: "onvolumechange",
      description: {
        kind: "markdown",
        value: "The volume has changed."
      }
    },
    {
      name: "onwaiting",
      description: {
        kind: "markdown",
        value: "Playback has stopped because of a temporary lack of data."
      }
    },
    {
      name: "onpointercancel",
      description: {
        kind: "markdown",
        value: "The pointer is unlikely to produce any more events."
      }
    },
    {
      name: "onpointerdown",
      description: {
        kind: "markdown",
        value: "The pointer enters the active buttons state."
      }
    },
    {
      name: "onpointerenter",
      description: {
        kind: "markdown",
        value: "Pointing device is moved inside the hit-testing boundary."
      }
    },
    {
      name: "onpointerleave",
      description: {
        kind: "markdown",
        value: "Pointing device is moved out of the hit-testing boundary."
      }
    },
    {
      name: "onpointerlockchange",
      description: {
        kind: "markdown",
        value: "The pointer was locked or released."
      }
    },
    {
      name: "onpointerlockerror",
      description: {
        kind: "markdown",
        value: "It was impossible to lock the pointer for technical reasons or because the permission was denied."
      }
    },
    {
      name: "onpointermove",
      description: {
        kind: "markdown",
        value: "The pointer changed coordinates."
      }
    },
    {
      name: "onpointerout",
      description: {
        kind: "markdown",
        value: "The pointing device moved out of hit-testing boundary or leaves detectable hover range."
      }
    },
    {
      name: "onpointerover",
      description: {
        kind: "markdown",
        value: "The pointing device is moved into the hit-testing boundary."
      }
    },
    {
      name: "onpointerup",
      description: {
        kind: "markdown",
        value: "The pointer leaves the active buttons state."
      }
    },
    {
      name: "aria-activedescendant",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application)."
      }
    },
    {
      name: "aria-atomic",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-atomic"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute."
      }
    },
    {
      name: "aria-autocomplete",
      valueSet: "autocomplete",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made."
      }
    },
    {
      name: "aria-busy",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-busy"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user."
      }
    },
    {
      name: "aria-checked",
      valueSet: "tristate",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-checked"
        }
      ],
      description: {
        kind: "markdown",
        value: 'Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).'
      }
    },
    {
      name: "aria-colcount",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-colcount"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex)."
      }
    },
    {
      name: "aria-colindex",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-colindex"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan)."
      }
    },
    {
      name: "aria-colspan",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-colspan"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan)."
      }
    },
    {
      name: "aria-controls",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-controls"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns)."
      }
    },
    {
      name: "aria-current",
      valueSet: "current",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-current"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements."
      }
    },
    {
      name: "aria-describedby",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-describedby"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)."
      }
    },
    {
      name: "aria-disabled",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-disabled"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly)."
      }
    },
    {
      name: "aria-dropeffect",
      valueSet: "dropeffect",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect"
        }
      ],
      description: {
        kind: "markdown",
        value: "\\[Deprecated in ARIA 1.1\\] Indicates what functions can be performed when a dragged object is released on the drop target."
      }
    },
    {
      name: "aria-errormessage",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)."
      }
    },
    {
      name: "aria-expanded",
      valueSet: "u",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-expanded"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed."
      }
    },
    {
      name: "aria-flowto",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-flowto"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order."
      }
    },
    {
      name: "aria-grabbed",
      valueSet: "u",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed"
        }
      ],
      description: {
        kind: "markdown",
        value: `\\[Deprecated in ARIA 1.1\\] Indicates an element's "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.`
      }
    },
    {
      name: "aria-haspopup",
      valueSet: "haspopup",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)."
      }
    },
    {
      name: "aria-hidden",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-hidden"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled)."
      }
    },
    {
      name: "aria-invalid",
      valueSet: "invalid",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-invalid"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage)."
      }
    },
    {
      name: "aria-label",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-label"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)."
      }
    },
    {
      name: "aria-labelledby",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)."
      }
    },
    {
      name: "aria-level",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-level"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure."
      }
    },
    {
      name: "aria-live",
      valueSet: "live",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-live"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region)."
      }
    },
    {
      name: "aria-modal",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-modal"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed."
      }
    },
    {
      name: "aria-multiline",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-multiline"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether a text box accepts multiple lines of input or only a single line."
      }
    },
    {
      name: "aria-multiselectable",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates that the user may select more than one item from the current selectable descendants."
      }
    },
    {
      name: "aria-orientation",
      valueSet: "orientation",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-orientation"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous."
      }
    },
    {
      name: "aria-owns",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-owns"
        }
      ],
      description: {
        kind: "markdown",
        value: "Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls)."
      }
    },
    {
      name: "aria-placeholder",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format."
      }
    },
    {
      name: "aria-posinset",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-posinset"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize)."
      }
    },
    {
      name: "aria-pressed",
      valueSet: "tristate",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-pressed"
        }
      ],
      description: {
        kind: "markdown",
        value: 'Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).'
      }
    },
    {
      name: "aria-readonly",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-readonly"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled)."
      }
    },
    {
      name: "aria-relevant",
      valueSet: "relevant",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-relevant"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)."
      }
    },
    {
      name: "aria-required",
      valueSet: "b",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-required"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted."
      }
    },
    {
      name: "aria-roledescription",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)."
      }
    },
    {
      name: "aria-rowcount",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex)."
      }
    },
    {
      name: "aria-rowindex",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan)."
      }
    },
    {
      name: "aria-rowspan",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan)."
      }
    },
    {
      name: "aria-selected",
      valueSet: "u",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-selected"
        }
      ],
      description: {
        kind: "markdown",
        value: 'Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).'
      }
    },
    {
      name: "aria-setsize",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-setsize"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset)."
      }
    },
    {
      name: "aria-sort",
      valueSet: "sort",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-sort"
        }
      ],
      description: {
        kind: "markdown",
        value: "Indicates if items in a table or grid are sorted in ascending or descending order."
      }
    },
    {
      name: "aria-valuemax",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget)."
      }
    },
    {
      name: "aria-valuemin",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget)."
      }
    },
    {
      name: "aria-valuenow",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext)."
      }
    },
    {
      name: "aria-valuetext",
      references: [
        {
          name: "WAI-ARIA Reference",
          url: "https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext"
        }
      ],
      description: {
        kind: "markdown",
        value: "Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget)."
      }
    },
    {
      name: "aria-details",
      description: {
        kind: "markdown",
        value: "Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)."
      }
    },
    {
      name: "aria-keyshortcuts",
      description: {
        kind: "markdown",
        value: "Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element."
      }
    }
  ],
  valueSets: [
    {
      name: "b",
      values: [
        {
          name: "true"
        },
        {
          name: "false"
        }
      ]
    },
    {
      name: "u",
      values: [
        {
          name: "true"
        },
        {
          name: "false"
        },
        {
          name: "undefined"
        }
      ]
    },
    {
      name: "o",
      values: [
        {
          name: "on"
        },
        {
          name: "off"
        }
      ]
    },
    {
      name: "y",
      values: [
        {
          name: "yes"
        },
        {
          name: "no"
        }
      ]
    },
    {
      name: "w",
      values: [
        {
          name: "soft"
        },
        {
          name: "hard"
        }
      ]
    },
    {
      name: "d",
      values: [
        {
          name: "ltr"
        },
        {
          name: "rtl"
        },
        {
          name: "auto"
        }
      ]
    },
    {
      name: "m",
      values: [
        {
          name: "get",
          description: {
            kind: "markdown",
            value: "Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data are appended to the `action` attribute URI with a '?' as separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters."
          }
        },
        {
          name: "post",
          description: {
            kind: "markdown",
            value: "Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data are included in the body of the form and sent to the server."
          }
        },
        {
          name: "dialog",
          description: {
            kind: "markdown",
            value: "Use when the form is inside a [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element to close the dialog when submitted."
          }
        }
      ]
    },
    {
      name: "fm",
      values: [
        {
          name: "get"
        },
        {
          name: "post"
        }
      ]
    },
    {
      name: "s",
      values: [
        {
          name: "row"
        },
        {
          name: "col"
        },
        {
          name: "rowgroup"
        },
        {
          name: "colgroup"
        }
      ]
    },
    {
      name: "t",
      values: [
        {
          name: "hidden"
        },
        {
          name: "text"
        },
        {
          name: "search"
        },
        {
          name: "tel"
        },
        {
          name: "url"
        },
        {
          name: "email"
        },
        {
          name: "password"
        },
        {
          name: "datetime"
        },
        {
          name: "date"
        },
        {
          name: "month"
        },
        {
          name: "week"
        },
        {
          name: "time"
        },
        {
          name: "datetime-local"
        },
        {
          name: "number"
        },
        {
          name: "range"
        },
        {
          name: "color"
        },
        {
          name: "checkbox"
        },
        {
          name: "radio"
        },
        {
          name: "file"
        },
        {
          name: "submit"
        },
        {
          name: "image"
        },
        {
          name: "reset"
        },
        {
          name: "button"
        }
      ]
    },
    {
      name: "im",
      values: [
        {
          name: "verbatim"
        },
        {
          name: "latin"
        },
        {
          name: "latin-name"
        },
        {
          name: "latin-prose"
        },
        {
          name: "full-width-latin"
        },
        {
          name: "kana"
        },
        {
          name: "kana-name"
        },
        {
          name: "katakana"
        },
        {
          name: "numeric"
        },
        {
          name: "tel"
        },
        {
          name: "email"
        },
        {
          name: "url"
        }
      ]
    },
    {
      name: "bt",
      values: [
        {
          name: "button"
        },
        {
          name: "submit"
        },
        {
          name: "reset"
        },
        {
          name: "menu"
        }
      ]
    },
    {
      name: "lt",
      values: [
        {
          name: "1"
        },
        {
          name: "a"
        },
        {
          name: "A"
        },
        {
          name: "i"
        },
        {
          name: "I"
        }
      ]
    },
    {
      name: "mt",
      values: [
        {
          name: "context"
        },
        {
          name: "toolbar"
        }
      ]
    },
    {
      name: "mit",
      values: [
        {
          name: "command"
        },
        {
          name: "checkbox"
        },
        {
          name: "radio"
        }
      ]
    },
    {
      name: "et",
      values: [
        {
          name: "application/x-www-form-urlencoded"
        },
        {
          name: "multipart/form-data"
        },
        {
          name: "text/plain"
        }
      ]
    },
    {
      name: "tk",
      values: [
        {
          name: "subtitles"
        },
        {
          name: "captions"
        },
        {
          name: "descriptions"
        },
        {
          name: "chapters"
        },
        {
          name: "metadata"
        }
      ]
    },
    {
      name: "pl",
      values: [
        {
          name: "none"
        },
        {
          name: "metadata"
        },
        {
          name: "auto"
        }
      ]
    },
    {
      name: "sh",
      values: [
        {
          name: "circle"
        },
        {
          name: "default"
        },
        {
          name: "poly"
        },
        {
          name: "rect"
        }
      ]
    },
    {
      name: "xo",
      values: [
        {
          name: "anonymous"
        },
        {
          name: "use-credentials"
        }
      ]
    },
    {
      name: "target",
      values: [
        {
          name: "_self"
        },
        {
          name: "_blank"
        },
        {
          name: "_parent"
        },
        {
          name: "_top"
        }
      ]
    },
    {
      name: "sb",
      values: [
        {
          name: "allow-forms"
        },
        {
          name: "allow-modals"
        },
        {
          name: "allow-pointer-lock"
        },
        {
          name: "allow-popups"
        },
        {
          name: "allow-popups-to-escape-sandbox"
        },
        {
          name: "allow-same-origin"
        },
        {
          name: "allow-scripts"
        },
        {
          name: "allow-top-navigation"
        }
      ]
    },
    {
      name: "tristate",
      values: [
        {
          name: "true"
        },
        {
          name: "false"
        },
        {
          name: "mixed"
        },
        {
          name: "undefined"
        }
      ]
    },
    {
      name: "inputautocomplete",
      values: [
        {
          name: "additional-name"
        },
        {
          name: "address-level1"
        },
        {
          name: "address-level2"
        },
        {
          name: "address-level3"
        },
        {
          name: "address-level4"
        },
        {
          name: "address-line1"
        },
        {
          name: "address-line2"
        },
        {
          name: "address-line3"
        },
        {
          name: "bday"
        },
        {
          name: "bday-year"
        },
        {
          name: "bday-day"
        },
        {
          name: "bday-month"
        },
        {
          name: "billing"
        },
        {
          name: "cc-additional-name"
        },
        {
          name: "cc-csc"
        },
        {
          name: "cc-exp"
        },
        {
          name: "cc-exp-month"
        },
        {
          name: "cc-exp-year"
        },
        {
          name: "cc-family-name"
        },
        {
          name: "cc-given-name"
        },
        {
          name: "cc-name"
        },
        {
          name: "cc-number"
        },
        {
          name: "cc-type"
        },
        {
          name: "country"
        },
        {
          name: "country-name"
        },
        {
          name: "current-password"
        },
        {
          name: "email"
        },
        {
          name: "family-name"
        },
        {
          name: "fax"
        },
        {
          name: "given-name"
        },
        {
          name: "home"
        },
        {
          name: "honorific-prefix"
        },
        {
          name: "honorific-suffix"
        },
        {
          name: "impp"
        },
        {
          name: "language"
        },
        {
          name: "mobile"
        },
        {
          name: "name"
        },
        {
          name: "new-password"
        },
        {
          name: "nickname"
        },
        {
          name: "off"
        },
        {
          name: "on"
        },
        {
          name: "organization"
        },
        {
          name: "organization-title"
        },
        {
          name: "pager"
        },
        {
          name: "photo"
        },
        {
          name: "postal-code"
        },
        {
          name: "sex"
        },
        {
          name: "shipping"
        },
        {
          name: "street-address"
        },
        {
          name: "tel-area-code"
        },
        {
          name: "tel"
        },
        {
          name: "tel-country-code"
        },
        {
          name: "tel-extension"
        },
        {
          name: "tel-local"
        },
        {
          name: "tel-local-prefix"
        },
        {
          name: "tel-local-suffix"
        },
        {
          name: "tel-national"
        },
        {
          name: "transaction-amount"
        },
        {
          name: "transaction-currency"
        },
        {
          name: "url"
        },
        {
          name: "username"
        },
        {
          name: "work"
        }
      ]
    },
    {
      name: "autocomplete",
      values: [
        {
          name: "inline"
        },
        {
          name: "list"
        },
        {
          name: "both"
        },
        {
          name: "none"
        }
      ]
    },
    {
      name: "current",
      values: [
        {
          name: "page"
        },
        {
          name: "step"
        },
        {
          name: "location"
        },
        {
          name: "date"
        },
        {
          name: "time"
        },
        {
          name: "true"
        },
        {
          name: "false"
        }
      ]
    },
    {
      name: "dropeffect",
      values: [
        {
          name: "copy"
        },
        {
          name: "move"
        },
        {
          name: "link"
        },
        {
          name: "execute"
        },
        {
          name: "popup"
        },
        {
          name: "none"
        }
      ]
    },
    {
      name: "invalid",
      values: [
        {
          name: "grammar"
        },
        {
          name: "false"
        },
        {
          name: "spelling"
        },
        {
          name: "true"
        }
      ]
    },
    {
      name: "live",
      values: [
        {
          name: "off"
        },
        {
          name: "polite"
        },
        {
          name: "assertive"
        }
      ]
    },
    {
      name: "orientation",
      values: [
        {
          name: "vertical"
        },
        {
          name: "horizontal"
        },
        {
          name: "undefined"
        }
      ]
    },
    {
      name: "relevant",
      values: [
        {
          name: "additions"
        },
        {
          name: "removals"
        },
        {
          name: "text"
        },
        {
          name: "all"
        },
        {
          name: "additions text"
        }
      ]
    },
    {
      name: "sort",
      values: [
        {
          name: "ascending"
        },
        {
          name: "descending"
        },
        {
          name: "none"
        },
        {
          name: "other"
        }
      ]
    },
    {
      name: "roles",
      values: [
        {
          name: "alert"
        },
        {
          name: "alertdialog"
        },
        {
          name: "button"
        },
        {
          name: "checkbox"
        },
        {
          name: "dialog"
        },
        {
          name: "gridcell"
        },
        {
          name: "link"
        },
        {
          name: "log"
        },
        {
          name: "marquee"
        },
        {
          name: "menuitem"
        },
        {
          name: "menuitemcheckbox"
        },
        {
          name: "menuitemradio"
        },
        {
          name: "option"
        },
        {
          name: "progressbar"
        },
        {
          name: "radio"
        },
        {
          name: "scrollbar"
        },
        {
          name: "searchbox"
        },
        {
          name: "slider"
        },
        {
          name: "spinbutton"
        },
        {
          name: "status"
        },
        {
          name: "switch"
        },
        {
          name: "tab"
        },
        {
          name: "tabpanel"
        },
        {
          name: "textbox"
        },
        {
          name: "timer"
        },
        {
          name: "tooltip"
        },
        {
          name: "treeitem"
        },
        {
          name: "combobox"
        },
        {
          name: "grid"
        },
        {
          name: "listbox"
        },
        {
          name: "menu"
        },
        {
          name: "menubar"
        },
        {
          name: "radiogroup"
        },
        {
          name: "tablist"
        },
        {
          name: "tree"
        },
        {
          name: "treegrid"
        },
        {
          name: "application"
        },
        {
          name: "article"
        },
        {
          name: "cell"
        },
        {
          name: "columnheader"
        },
        {
          name: "definition"
        },
        {
          name: "directory"
        },
        {
          name: "document"
        },
        {
          name: "feed"
        },
        {
          name: "figure"
        },
        {
          name: "group"
        },
        {
          name: "heading"
        },
        {
          name: "img"
        },
        {
          name: "list"
        },
        {
          name: "listitem"
        },
        {
          name: "math"
        },
        {
          name: "none"
        },
        {
          name: "note"
        },
        {
          name: "presentation"
        },
        {
          name: "region"
        },
        {
          name: "row"
        },
        {
          name: "rowgroup"
        },
        {
          name: "rowheader"
        },
        {
          name: "separator"
        },
        {
          name: "table"
        },
        {
          name: "term"
        },
        {
          name: "text"
        },
        {
          name: "toolbar"
        },
        {
          name: "banner"
        },
        {
          name: "complementary"
        },
        {
          name: "contentinfo"
        },
        {
          name: "form"
        },
        {
          name: "main"
        },
        {
          name: "navigation"
        },
        {
          name: "region"
        },
        {
          name: "search"
        },
        {
          name: "doc-abstract"
        },
        {
          name: "doc-acknowledgments"
        },
        {
          name: "doc-afterword"
        },
        {
          name: "doc-appendix"
        },
        {
          name: "doc-backlink"
        },
        {
          name: "doc-biblioentry"
        },
        {
          name: "doc-bibliography"
        },
        {
          name: "doc-biblioref"
        },
        {
          name: "doc-chapter"
        },
        {
          name: "doc-colophon"
        },
        {
          name: "doc-conclusion"
        },
        {
          name: "doc-cover"
        },
        {
          name: "doc-credit"
        },
        {
          name: "doc-credits"
        },
        {
          name: "doc-dedication"
        },
        {
          name: "doc-endnote"
        },
        {
          name: "doc-endnotes"
        },
        {
          name: "doc-epigraph"
        },
        {
          name: "doc-epilogue"
        },
        {
          name: "doc-errata"
        },
        {
          name: "doc-example"
        },
        {
          name: "doc-footnote"
        },
        {
          name: "doc-foreword"
        },
        {
          name: "doc-glossary"
        },
        {
          name: "doc-glossref"
        },
        {
          name: "doc-index"
        },
        {
          name: "doc-introduction"
        },
        {
          name: "doc-noteref"
        },
        {
          name: "doc-notice"
        },
        {
          name: "doc-pagebreak"
        },
        {
          name: "doc-pagelist"
        },
        {
          name: "doc-part"
        },
        {
          name: "doc-preface"
        },
        {
          name: "doc-prologue"
        },
        {
          name: "doc-pullquote"
        },
        {
          name: "doc-qna"
        },
        {
          name: "doc-subtitle"
        },
        {
          name: "doc-tip"
        },
        {
          name: "doc-toc"
        }
      ]
    },
    {
      name: "metanames",
      values: [
        {
          name: "application-name"
        },
        {
          name: "author"
        },
        {
          name: "description"
        },
        {
          name: "format-detection"
        },
        {
          name: "generator"
        },
        {
          name: "keywords"
        },
        {
          name: "publisher"
        },
        {
          name: "referrer"
        },
        {
          name: "robots"
        },
        {
          name: "theme-color"
        },
        {
          name: "viewport"
        }
      ]
    },
    {
      name: "haspopup",
      values: [
        {
          name: "false",
          description: {
            kind: "markdown",
            value: "(default) Indicates the element does not have a popup."
          }
        },
        {
          name: "true",
          description: {
            kind: "markdown",
            value: "Indicates the popup is a menu."
          }
        },
        {
          name: "menu",
          description: {
            kind: "markdown",
            value: "Indicates the popup is a menu."
          }
        },
        {
          name: "listbox",
          description: {
            kind: "markdown",
            value: "Indicates the popup is a listbox."
          }
        },
        {
          name: "tree",
          description: {
            kind: "markdown",
            value: "Indicates the popup is a tree."
          }
        },
        {
          name: "grid",
          description: {
            kind: "markdown",
            value: "Indicates the popup is a grid."
          }
        },
        {
          name: "dialog",
          description: {
            kind: "markdown",
            value: "Indicates the popup is a dialog."
          }
        }
      ]
    },
    {
      name: "decoding",
      values: [
        {
          name: "sync"
        },
        {
          name: "async"
        },
        {
          name: "auto"
        }
      ]
    },
    {
      name: "loading",
      values: [
        {
          name: "eager",
          description: {
            kind: "markdown",
            value: "Loads the image immediately, regardless of whether or not the image is currently within the visible viewport (this is the default value)."
          }
        },
        {
          name: "lazy",
          description: {
            kind: "markdown",
            value: "Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases."
          }
        }
      ]
    },
    {
      name: "referrerpolicy",
      values: [
        {
          name: "no-referrer"
        },
        {
          name: "no-referrer-when-downgrade"
        },
        {
          name: "origin"
        },
        {
          name: "origin-when-cross-origin"
        },
        {
          name: "same-origin"
        },
        {
          name: "strict-origin"
        },
        {
          name: "strict-origin-when-cross-origin"
        },
        {
          name: "unsafe-url"
        }
      ]
    }
  ]
}, ad = class {
  constructor(e) {
    this.dataProviders = [], this.setDataProviders(e.useDefaultDataProvider !== !1, e.customDataProviders || []);
  }
  setDataProviders(e, t) {
    this.dataProviders = [], e && this.dataProviders.push(new Ol("html5", sd)), this.dataProviders.push(...t);
  }
  getDataProviders() {
    return this.dataProviders;
  }
  isVoidElement(e, t) {
    return !!e && f1(t, e.toLowerCase(), (n, i) => n.localeCompare(i)) >= 0;
  }
  getVoidElements(e) {
    const t = Array.isArray(e) ? e : this.getDataProviders().filter((i) => i.isApplicable(e)), n = [];
    return t.forEach((i) => {
      i.provideTags().filter((r) => r.void).forEach((r) => n.push(r.name));
    }), n.sort();
  }
  isPathAttribute(e, t) {
    if (t === "src" || t === "href")
      return !0;
    const n = od[e];
    return n ? typeof n == "string" ? n === t : n.indexOf(t) !== -1 : !1;
  }
}, od = {
  // HTML 4
  a: "href",
  area: "href",
  body: "background",
  blockquote: "cite",
  del: "cite",
  form: "action",
  frame: ["src", "longdesc"],
  img: ["src", "longdesc"],
  ins: "cite",
  link: "href",
  object: "data",
  q: "cite",
  script: "src",
  // HTML 5
  audio: "src",
  button: "formaction",
  command: "icon",
  embed: "src",
  html: "manifest",
  input: ["src", "formaction"],
  source: "src",
  track: "src",
  video: ["src", "poster"]
}, ld = {};
function ud(e = ld) {
  const t = new ad(e), n = new F1(e, t), i = new D1(e, t), r = new p1(t), s = new rd(r), a = new id(t), l = new Q1(t);
  return {
    setDataProviders: t.setDataProviders.bind(t),
    createScanner: Fe,
    parseHTMLDocument: r.parseDocument.bind(r),
    doComplete: i.doComplete.bind(i),
    doComplete2: i.doComplete2.bind(i),
    setCompletionParticipants: i.setCompletionParticipants.bind(i),
    doHover: n.doHover.bind(n),
    format: z1,
    findDocumentHighlights: J1,
    findDocumentLinks: l.findDocumentLinks.bind(l),
    findDocumentSymbols: Z1,
    findDocumentSymbols2: Vl,
    getFoldingRanges: a.getFoldingRanges.bind(a),
    getSelectionRanges: s.getSelectionRanges.bind(s),
    doQuoteComplete: i.doQuoteComplete.bind(i),
    doTagComplete: i.doTagComplete.bind(i),
    doRename: ed,
    findMatchingTagPosition: nd,
    findOnTypeRenameRanges: il,
    findLinkedEditingRanges: il
  };
}
function cd(e, t) {
  return new Ol(e, t);
}
var hd = class {
  constructor(e, t) {
    this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId;
    const n = this._languageSettings.data, i = n == null ? void 0 : n.useDefaultDataProvider, r = [];
    if (n != null && n.dataProviders)
      for (const s in n.dataProviders)
        r.push(cd(s, n.dataProviders[s]));
    this._languageService = ud({
      useDefaultDataProvider: i,
      customDataProviders: r
    });
  }
  async doComplete(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return null;
    let i = this._languageService.parseHTMLDocument(n);
    return Promise.resolve(
      this._languageService.doComplete(
        n,
        t,
        i,
        this._languageSettings && this._languageSettings.suggest
      )
    );
  }
  async format(e, t, n) {
    let i = this._getTextDocument(e);
    if (!i)
      return [];
    let r = { ...this._languageSettings.format, ...n }, s = this._languageService.format(i, t, r);
    return Promise.resolve(s);
  }
  async doHover(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return null;
    let i = this._languageService.parseHTMLDocument(n), r = this._languageService.doHover(n, t, i);
    return Promise.resolve(r);
  }
  async findDocumentHighlights(e, t) {
    let n = this._getTextDocument(e);
    if (!n)
      return [];
    let i = this._languageService.parseHTMLDocument(n), r = this._languageService.findDocumentHighlights(n, t, i);
    return Promise.resolve(r);
  }
  async findDocumentLinks(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.findDocumentLinks(
      t,
      null
      /*TODO@aeschli*/
    );
    return Promise.resolve(n);
  }
  async findDocumentSymbols(e) {
    let t = this._getTextDocument(e);
    if (!t)
      return [];
    let n = this._languageService.parseHTMLDocument(t), i = this._languageService.findDocumentSymbols(t, n);
    return Promise.resolve(i);
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
    let i = this._languageService.getSelectionRanges(n, t);
    return Promise.resolve(i);
  }
  async doRename(e, t, n) {
    let i = this._getTextDocument(e);
    if (!i)
      return null;
    let r = this._languageService.parseHTMLDocument(i), s = this._languageService.doRename(i, t, n, r);
    return Promise.resolve(s);
  }
  _getTextDocument(e) {
    let t = this._ctx.getMirrorModels();
    for (let n of t)
      if (n.uri.toString() === e)
        return mr.create(
          e,
          this._languageId,
          n.version,
          n.getValue()
        );
    return null;
  }
};
self.onmessage = () => {
  Kh((e, t) => new hd(e, t));
};
