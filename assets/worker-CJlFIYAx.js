var nu = Object.defineProperty;
var iu = (e, t, n) => t in e ? nu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ft = (e, t, n) => iu(e, typeof t != "symbol" ? t + "" : t, n);
var M;
(function(e) {
  e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(M || (M = {}));
class ru {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? Jt.isErrorNoTelemetry(t) ? new Jt(t.message + `

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
const su = new ru();
function hn(e) {
  au(e) || su.onUnexpectedError(e);
}
function Ri(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: i } = e, r = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: n,
      stack: r,
      noTelemetry: Jt.isErrorNoTelemetry(e),
      cause: i ? Ri(i) : void 0,
      code: e.code
    };
  }
  return e;
}
const Si = "Canceled";
function au(e) {
  return e instanceof ou ? !0 : e instanceof Error && e.name === Si && e.message === Si;
}
class ou extends Error {
  constructor() {
    super(Si), this.name = this.message;
  }
}
const Vt = class Vt extends Error {
  static is(t) {
    return t instanceof Vt || t instanceof Error && t.name === Vt._name;
  }
  constructor(t) {
    super(t), this.name = Vt._name;
  }
};
Vt._name = "PendingMigrationError";
let Ur = Vt;
class Jt extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof Jt)
      return t;
    const n = new Jt();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}
class me extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, me.prototype);
  }
}
function lu(e, t) {
  const n = this;
  let i = !1, r;
  return function() {
    return i || (i = !0, r = e.apply(n, arguments)), r;
  };
}
function Zt(e, t) {
  const n = Kt(e, t);
  return n === -1 ? void 0 : e[n];
}
function Kt(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? r = a + 1 : s = a;
  }
  return r - 1;
}
function uu(e, t) {
  const n = Ni(e, t);
  return n === e.length ? void 0 : e[n];
}
function Ni(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? s = a : r = a + 1;
  }
  return r;
}
const fi = class fi {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (fi.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array)
          if (this._prevFindLastPredicate(i) && !t(i))
            throw new Error(
              "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
            );
      }
      this._prevFindLastPredicate = t;
    }
    const n = Kt(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
fi.assertInvariants = !1;
let Vn = fi;
function bl(e, t, n = (i, r) => i === r) {
  if (e === t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let i = 0, r = e.length; i < r; i++)
    if (!n(e[i], t[i]))
      return !1;
  return !0;
}
function* cu(e, t) {
  let n, i;
  for (const r of e)
    i !== void 0 && t(i, r) ? n.push(r) : (n && (yield n), n = [r]), i = r;
  n && (yield n);
}
function hu(e, t) {
  for (let n = 0; n <= e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function du(e, t) {
  for (let n = 0; n < e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function mu(e, t) {
  for (const n of t)
    e.push(n);
}
var Mi;
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
})(Mi || (Mi = {}));
function Xt(e, t) {
  return (n, i) => t(e(n), e(i));
}
const dn = (e, t) => e - t;
function fu(e) {
  return (t, n) => -e(t, n);
}
const Ct = class Ct {
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
    return new Ct((n) => this.iterate((i) => t(i) ? n(i) : !0));
  }
  map(t) {
    return new Ct((n) => this.iterate((i) => n(t(i))));
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
    return this.iterate((r) => ((i || Mi.isGreaterThan(t(r, n))) && (i = !1, n = r), !0)), n;
  }
};
Ct.empty = new Ct((t) => {
});
let Ir = Ct;
function pu(e, t) {
  return e.reduce((n, i) => n + t(i), 0);
}
var Fr, Pr;
class gu {
  constructor(t, n) {
    this.uri = t, this.value = n;
  }
}
function bu(e) {
  return Array.isArray(e);
}
const kt = class kt {
  constructor(t, n) {
    if (this[Fr] = "ResourceMap", t instanceof kt)
      this.map = new Map(t.map), this.toKey = n ?? kt.defaultToKey;
    else if (bu(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? kt.defaultToKey;
      for (const [i, r] of t)
        this.set(i, r);
    } else
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? kt.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new gu(t, n)), this;
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
  *[(Fr = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map)
      yield [t.uri, t.value];
  }
};
kt.defaultToKey = (t) => t.toString();
let Di = kt;
var Le;
(function(e) {
  e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(Le || (Le = {}));
class _u {
  constructor() {
    this[Pr] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  get(t, n = Le.None) {
    const i = this._map.get(t);
    if (i)
      return n !== Le.None && this.touch(i, n), i.value;
  }
  set(t, n, i = Le.None) {
    let r = this._map.get(t);
    if (r)
      r.value = n, i !== Le.None && this.touch(r, i);
    else {
      switch (r = { key: t, value: n, next: void 0, previous: void 0 }, i) {
        case Le.None:
          this.addItemLast(r);
          break;
        case Le.AsOld:
          this.addItemFirst(r);
          break;
        case Le.AsNew:
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
  [(Pr = Symbol.toStringTag, Symbol.iterator)]() {
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
    if (!(n !== Le.AsOld && n !== Le.AsNew)) {
      if (n === Le.AsOld) {
        if (t === this._head)
          return;
        const i = t.next, r = t.previous;
        t === this._tail ? (r.next = void 0, this._tail = r) : (i.previous = r, r.next = i), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
      } else if (n === Le.AsNew) {
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
  get(t, n = Le.AsNew) {
    return super.get(t, n);
  }
  peek(t) {
    return super.get(t, Le.None);
  }
  set(t, n) {
    return super.set(t, n, Le.AsNew), this;
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
class yu {
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
function Tu(e, t = "Unreachable") {
  throw new Error(t);
}
function xu(e, t = "unexpected state") {
  if (!e)
    throw typeof t == "string" ? new me(`Assertion Failed: ${t}`) : t;
}
function yn(e) {
  if (!e()) {
    debugger;
    e(), hn(new me("Assertion Failed"));
  }
}
function Tr(e, t) {
  let n = 0;
  for (; n < e.length - 1; ) {
    const i = e[n], r = e[n + 1];
    if (!t(i, r))
      return !1;
    n++;
  }
  return !0;
}
function Au(e) {
  return typeof e == "string";
}
function Lu(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var Cn;
(function(e) {
  function t(b) {
    return !!b && typeof b == "object" && typeof b[Symbol.iterator] == "function";
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
    for (let f = b.length - 1; f >= 0; f--)
      yield b[f];
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
  function c(b, f) {
    let v = 0;
    for (const P of b)
      if (f(P, v++))
        return !0;
    return !1;
  }
  e.some = c;
  function d(b, f) {
    let v = 0;
    for (const P of b)
      if (!f(P, v++))
        return !1;
    return !0;
  }
  e.every = d;
  function m(b, f) {
    for (const v of b)
      if (f(v))
        return v;
  }
  e.find = m;
  function* g(b, f) {
    for (const v of b)
      f(v) && (yield v);
  }
  e.filter = g;
  function* _(b, f) {
    let v = 0;
    for (const P of b)
      yield f(P, v++);
  }
  e.map = _;
  function* p(b, f) {
    let v = 0;
    for (const P of b)
      yield* f(P, v++);
  }
  e.flatMap = p;
  function* L(...b) {
    for (const f of b)
      Lu(f) ? yield* f : yield f;
  }
  e.concat = L;
  function A(b, f, v) {
    let P = v;
    for (const R of b)
      P = f(P, R);
    return P;
  }
  e.reduce = A;
  function w(b) {
    let f = 0;
    for (const v of b)
      f++;
    return f;
  }
  e.length = w;
  function* E(b, f, v = b.length) {
    for (f < -b.length && (f = 0), f < 0 && (f += b.length), v < 0 ? v += b.length : v > b.length && (v = b.length); f < v; f++)
      yield b[f];
  }
  e.slice = E;
  function H(b, f = Number.POSITIVE_INFINITY) {
    const v = [];
    if (f === 0)
      return [v, b];
    const P = b[Symbol.iterator]();
    for (let R = 0; R < f; R++) {
      const k = P.next();
      if (k.done)
        return [v, e.empty()];
      v.push(k.value);
    }
    return [v, { [Symbol.iterator]() {
      return P;
    } }];
  }
  e.consume = H;
  async function W(b) {
    const f = [];
    for await (const v of b)
      f.push(v);
    return f;
  }
  e.asyncToArray = W;
  async function O(b) {
    let f = [];
    for await (const v of b)
      f = f.concat(v);
    return f;
  }
  e.asyncToArrayFlat = O;
})(Cn || (Cn = {}));
function _l(e) {
  if (Cn.is(e)) {
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
function ku(...e) {
  return Tn(() => _l(e));
}
function Tn(e) {
  return {
    dispose: lu(() => {
      e();
    })
  };
}
const pi = class pi {
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
        _l(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
  }
  add(t) {
    if (!t)
      return t;
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? pi.DISABLE_DISPOSED_WARNING || console.warn(new Error(
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
pi.DISABLE_DISPOSED_WARNING = !1;
let xn = pi;
const Mr = class Mr {
  constructor() {
    this._store = new xn(), this._store;
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
Mr.None = Object.freeze({ dispose() {
} });
let en = Mr;
var ht;
let ce = (ht = class {
  constructor(t) {
    this.element = t, this.next = ht.Undefined, this.prev = ht.Undefined;
  }
}, ht.Undefined = new ht(void 0), ht);
class Eu {
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
const Ru = globalThis.performance.now.bind(globalThis.performance);
class wi {
  static create(t) {
    return new wi(t);
  }
  constructor(t) {
    this._now = t === !1 ? Date.now : Ru, this._startTime = this._now(), this._stopTime = -1;
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
var Gn;
(function(e) {
  e.None = () => en.None;
  function t(D, x) {
    return m(D, () => {
    }, 0, void 0, !0, void 0, x);
  }
  e.defer = t;
  function n(D) {
    return (x, N = null, I) => {
      let F = !1, C;
      return C = D((q) => {
        if (!F)
          return C ? C.dispose() : F = !0, x.call(N, q);
      }, null, I), F && C.dispose(), C;
    };
  }
  e.once = n;
  function i(D, x) {
    return e.once(e.filter(D, x));
  }
  e.onceIf = i;
  function r(D, x, N) {
    return c((I, F = null, C) => D((q) => I.call(F, x(q)), null, C), N);
  }
  e.map = r;
  function s(D, x, N) {
    return c((I, F = null, C) => D((q) => {
      x(q), I.call(F, q);
    }, null, C), N);
  }
  e.forEach = s;
  function a(D, x, N) {
    return c((I, F = null, C) => D((q) => x(q) && I.call(F, q), null, C), N);
  }
  e.filter = a;
  function l(D) {
    return D;
  }
  e.signal = l;
  function o(...D) {
    return (x, N = null, I) => {
      const F = ku(...D.map((C) => C((q) => x.call(N, q))));
      return d(F, I);
    };
  }
  e.any = o;
  function u(D, x, N, I) {
    let F = N;
    return r(D, (C) => (F = x(F, C), F), I);
  }
  e.reduce = u;
  function c(D, x) {
    let N;
    const I = {
      onWillAddFirstListener() {
        N = D(F.fire, F);
      },
      onDidRemoveLastListener() {
        N == null || N.dispose();
      }
    }, F = new ze(I);
    return x == null || x.add(F), F.event;
  }
  function d(D, x) {
    return x instanceof Array ? x.push(D) : x && x.add(D), D;
  }
  function m(D, x, N = 100, I = !1, F = !1, C, q) {
    let V, Z, se, be = 0, Me;
    const vi = {
      leakWarningThreshold: C,
      onWillAddFirstListener() {
        V = D((eu) => {
          be++, Z = x(Z, eu), I && !se && (Nn.fire(Z), Z = void 0), Me = () => {
            const tu = Z;
            Z = void 0, se = void 0, (!I || be > 1) && Nn.fire(tu), be = 0;
          }, typeof N == "number" ? (se && clearTimeout(se), se = setTimeout(Me, N)) : se === void 0 && (se = null, queueMicrotask(Me));
        });
      },
      onWillRemoveListener() {
        F && be > 0 && (Me == null || Me());
      },
      onDidRemoveLastListener() {
        Me = void 0, V.dispose();
      }
    }, Nn = new ze(vi);
    return q == null || q.add(Nn), Nn.event;
  }
  e.debounce = m;
  function g(D, x = 0, N) {
    return e.debounce(D, (I, F) => I ? (I.push(F), I) : [F], x, void 0, !0, void 0, N);
  }
  e.accumulate = g;
  function _(D, x = (I, F) => I === F, N) {
    let I = !0, F;
    return a(D, (C) => {
      const q = I || !x(C, F);
      return I = !1, F = C, q;
    }, N);
  }
  e.latch = _;
  function p(D, x, N) {
    return [
      e.filter(D, x, N),
      e.filter(D, (I) => !x(I), N)
    ];
  }
  e.split = p;
  function L(D, x = !1, N = [], I) {
    let F = N.slice(), C = D((Z) => {
      F ? F.push(Z) : V.fire(Z);
    });
    I && I.add(C);
    const q = () => {
      F == null || F.forEach((Z) => V.fire(Z)), F = null;
    }, V = new ze({
      onWillAddFirstListener() {
        C || (C = D((Z) => V.fire(Z)), I && I.add(C));
      },
      onDidAddFirstListener() {
        F && (x ? setTimeout(q) : q());
      },
      onDidRemoveLastListener() {
        C && C.dispose(), C = null;
      }
    });
    return I && I.add(V), V.event;
  }
  e.buffer = L;
  function A(D, x) {
    return (I, F, C) => {
      const q = x(new E());
      return D(function(V) {
        const Z = q.evaluate(V);
        Z !== w && I.call(F, Z);
      }, void 0, C);
    };
  }
  e.chain = A;
  const w = Symbol("HaltChainable");
  class E {
    constructor() {
      this.steps = [];
    }
    map(x) {
      return this.steps.push(x), this;
    }
    forEach(x) {
      return this.steps.push((N) => (x(N), N)), this;
    }
    filter(x) {
      return this.steps.push((N) => x(N) ? N : w), this;
    }
    reduce(x, N) {
      let I = N;
      return this.steps.push((F) => (I = x(I, F), I)), this;
    }
    latch(x = (N, I) => N === I) {
      let N = !0, I;
      return this.steps.push((F) => {
        const C = N || !x(F, I);
        return N = !1, I = F, C ? F : w;
      }), this;
    }
    evaluate(x) {
      for (const N of this.steps)
        if (x = N(x), x === w)
          break;
      return x;
    }
  }
  function H(D, x, N = (I) => I) {
    const I = (...V) => q.fire(N(...V)), F = () => D.on(x, I), C = () => D.removeListener(x, I), q = new ze(
      { onWillAddFirstListener: F, onDidRemoveLastListener: C }
    );
    return q.event;
  }
  e.fromNodeEventEmitter = H;
  function W(D, x, N = (I) => I) {
    const I = (...V) => q.fire(N(...V)), F = () => D.addEventListener(x, I), C = () => D.removeEventListener(x, I), q = new ze(
      { onWillAddFirstListener: F, onDidRemoveLastListener: C }
    );
    return q.event;
  }
  e.fromDOMEventEmitter = W;
  function O(D, x) {
    let N;
    const I = new Promise((F, C) => {
      const q = n(D)(F, null, x);
      N = () => q.dispose();
    });
    return I.cancel = N, I;
  }
  e.toPromise = O;
  function b(D) {
    const x = new ze();
    return D.then((N) => {
      x.fire(N);
    }, () => {
      x.fire(void 0);
    }).finally(() => {
      x.dispose();
    }), x.event;
  }
  e.fromPromise = b;
  function f(D, x) {
    return D((N) => x.fire(N));
  }
  e.forward = f;
  function v(D, x, N) {
    return x(N), D((I) => x(I));
  }
  e.runAndSubscribe = v;
  class P {
    constructor(x, N) {
      this._observable = x, this._counter = 0, this._hasChanged = !1;
      const I = {
        onWillAddFirstListener: () => {
          x.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          x.removeObserver(this);
        }
      };
      this.emitter = new ze(I), N && N.add(this.emitter);
    }
    beginUpdate(x) {
      this._counter++;
    }
    handlePossibleChange(x) {
    }
    handleChange(x, N) {
      this._hasChanged = !0;
    }
    endUpdate(x) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
    }
  }
  function R(D, x) {
    return new P(D, x).emitter.event;
  }
  e.fromObservable = R;
  function k(D) {
    return (x, N, I) => {
      let F = 0, C = !1;
      const q = {
        beginUpdate() {
          F++;
        },
        endUpdate() {
          F--, F === 0 && (D.reportChanges(), C && (C = !1, x.call(N)));
        },
        handlePossibleChange() {
        },
        handleChange() {
          C = !0;
        }
      };
      D.addObserver(q), D.reportChanges();
      const V = {
        dispose() {
          D.removeObserver(q);
        }
      };
      return I instanceof xn ? I.add(V) : Array.isArray(I) && I.push(V), V;
    };
  }
  e.fromObservableLight = k;
})(Gn || (Gn = {}));
const Gt = class Gt {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${Gt._idPool++}`, Gt.all.add(this);
  }
  start(t) {
    this._stopWatch = new wi(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
Gt.all = /* @__PURE__ */ new Set(), Gt._idPool = 0;
let Ui = Gt, Su = -1;
const gi = class gi {
  constructor(t, n, i = (gi._idPool++).toString(16).padStart(3, "0")) {
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
      const o = new Nu(l, s);
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
gi._idPool = 1;
let Ii = gi;
class xr {
  static create() {
    const t = new Error();
    return new xr(t.stack ?? "");
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
class Nu extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerLeakError", this.stack = n;
  }
}
class Mu extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerRefusalError", this.stack = n;
  }
}
let Du = 0;
class yi {
  constructor(t) {
    this.value = t, this.id = Du++;
  }
}
const Uu = 2;
class ze {
  constructor(t) {
    var n, i, r, s;
    this._size = 0, this._options = t, this._leakageMon = (n = this._options) != null && n.leakWarningThreshold ? new Ii(
      (t == null ? void 0 : t.onListenerError) ?? hn,
      ((i = this._options) == null ? void 0 : i.leakWarningThreshold) ?? Su
    ) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new Ui(this._options._profName) : void 0, this._deliveryQueue = (s = this._options) == null ? void 0 : s.deliveryQueue;
  }
  dispose() {
    var t, n, i, r;
    this._disposed || (this._disposed = !0, ((t = this._deliveryQueue) == null ? void 0 : t.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (i = (n = this._options) == null ? void 0 : n.onDidRemoveLastListener) == null || i.call(n), (r = this._leakageMon) == null || r.dispose());
  }
  get event() {
    return this._event ?? (this._event = (t, n, i) => {
      var l, o, u, c, d, m, g;
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const _ = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(_);
        const p = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], L = new Mu(
          `${_}. HINT: Stack shows most frequent listener (${p[1]}-times)`,
          p[0]
        );
        return (((l = this._options) == null ? void 0 : l.onListenerError) || hn)(L), en.None;
      }
      if (this._disposed)
        return en.None;
      n && (t = t.bind(n));
      const r = new yi(t);
      let s;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = xr.create(), s = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof yi ? (this._deliveryQueue ?? (this._deliveryQueue = new Iu()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((u = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || u.call(o, this), this._listeners = r, (d = (c = this._options) == null ? void 0 : c.onDidAddFirstListener) == null || d.call(c, this)), (g = (m = this._options) == null ? void 0 : m.onDidAddListener) == null || g.call(m, this), this._size++;
      const a = Tn(() => {
        s == null || s(), this._removeListener(r);
      });
      return i instanceof xn ? i.add(a) : Array.isArray(i) && i.push(a), a;
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
    if (this._size * Uu <= n.length) {
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
    const i = ((r = this._options) == null ? void 0 : r.onListenerError) || hn;
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
    if ((n = this._deliveryQueue) != null && n.current && (this._deliverQueue(this._deliveryQueue), (i = this._perfMon) == null || i.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners) if (this._listeners instanceof yi)
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
class Iu {
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
function Fu() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function wl() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
const Pu = wl() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Br(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, r) => {
    const s = r[0], a = t[s];
    let l = i;
    return typeof a == "string" ? l = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (l = String(a)), l;
  }), Pu && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function Q(e, t, ...n) {
  return Br(typeof e == "number" ? Bu(e, t) : t, n);
}
function Bu(e, t) {
  var i;
  const n = (i = Fu()) == null ? void 0 : i[e];
  if (typeof n != "string") {
    if (typeof t == "string")
      return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
const zt = "en";
let An = !1, Ln = !1, Pn = !1, vl = !1, Ar = !1, yl = !1, Mn, Bn = zt, Hr = zt, Hu, Ce;
const dt = globalThis;
let we;
var ml;
typeof dt.vscode < "u" && typeof dt.vscode.process < "u" ? we = dt.vscode.process : typeof process < "u" && typeof ((ml = process == null ? void 0 : process.versions) == null ? void 0 : ml.node) == "string" && (we = process);
var fl;
const Ou = typeof ((fl = we == null ? void 0 : we.versions) == null ? void 0 : fl.electron) == "string", zu = Ou && (we == null ? void 0 : we.type) === "renderer";
var pl;
if (typeof we == "object") {
  An = we.platform === "win32", Ln = we.platform === "darwin", Pn = we.platform === "linux", Pn && we.env.SNAP && we.env.SNAP_REVISION, we.env.CI || we.env.BUILD_ARTIFACTSTAGINGDIRECTORY || we.env.GITHUB_WORKSPACE, Mn = zt, Bn = zt;
  const e = we.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      Mn = t.userLocale, Hr = t.osLocale, Bn = t.resolvedLanguage || zt, Hu = (pl = t.languagePack) == null ? void 0 : pl.translationsConfigFile;
    } catch {
    }
  vl = !0;
} else typeof navigator == "object" && !zu ? (Ce = navigator.userAgent, An = Ce.indexOf("Windows") >= 0, Ln = Ce.indexOf("Macintosh") >= 0, yl = (Ce.indexOf("Macintosh") >= 0 || Ce.indexOf("iPad") >= 0 || Ce.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Pn = Ce.indexOf("Linux") >= 0, (Ce == null ? void 0 : Ce.indexOf("Mobi")) >= 0, Ar = !0, Bn = wl() || zt, Mn = navigator.language.toLowerCase(), Hr = Mn) : console.error("Unable to resolve platform.");
var Yt;
(function(e) {
  e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(Yt || (Yt = {}));
Yt.Web;
Ln ? Yt.Mac : An ? Yt.Windows : Pn && Yt.Linux;
const tn = An, Wu = Ln, qu = vl, Vu = Ar, Cu = Ar && typeof dt.importScripts == "function", Gu = Cu ? dt.origin : void 0, it = Ce, pt = Bn;
var Or;
(function(e) {
  function t() {
    return pt;
  }
  e.value = t;
  function n() {
    return pt.length === 2 ? pt === "en" : pt.length >= 3 ? pt[0] === "e" && pt[1] === "n" && pt[2] === "-" : !1;
  }
  e.isDefaultVariant = n;
  function i() {
    return pt === "en";
  }
  e.isDefault = i;
})(Or || (Or = {}));
const ju = typeof dt.postMessage == "function" && !dt.importScripts;
(() => {
  if (ju) {
    const e = [];
    dt.addEventListener("message", (n) => {
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
      }), dt.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (e) => setTimeout(e);
})();
var mn;
(function(e) {
  e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(mn || (mn = {}));
Ln || yl ? mn.Macintosh : An ? mn.Windows : mn.Linux;
const $u = !!(it && it.indexOf("Chrome") >= 0);
it && it.indexOf("Firefox") >= 0;
!$u && it && it.indexOf("Safari") >= 0;
it && it.indexOf("Edg/") >= 0;
it && it.indexOf("Android") >= 0;
const Tl = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
});
var jn;
(function(e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof Hn ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: Gn.None
  }), e.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: Tl
  });
})(jn || (jn = {}));
class Hn {
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
    return this._isCancelled ? Tl : (this._emitter || (this._emitter = new ze()), this._emitter.event);
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
    return this._token || (this._token = new Hn()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof Hn && this._token.cancel() : this._token = jn.Cancelled;
  }
  dispose(t = !1) {
    var n;
    t && this.cancel(), (n = this._parentListener) == null || n.dispose(), this._token ? this._token instanceof Hn && this._token.dispose() : this._token = jn.None;
  }
}
function Yu(e) {
  return e;
}
class Qu {
  constructor(t, n) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = Yu) : (this._fn = n, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const n = this._computeKey(t);
    return this.lastArgKey !== n && (this.lastArgKey = n, this.lastCache = this._fn(t)), this.lastCache;
  }
}
class zr {
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
var Ve;
(function(e) {
  e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(Ve || (Ve = {}));
function Wr(e) {
  return e < 0 ? 0 : e > Ve.MAX_UINT_8 ? Ve.MAX_UINT_8 : e | 0;
}
function Ut(e) {
  return e < 0 ? 0 : e > Ve.MAX_UINT_32 ? Ve.MAX_UINT_32 : e | 0;
}
function Ju(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function Zu(e) {
  return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
}
function xl(e) {
  return e.split(/\r\n|\r|\n/);
}
function Ku(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i !== M.Space && i !== M.Tab)
      return t;
  }
  return -1;
}
function ec(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const i = e.charCodeAt(n);
    if (i !== M.Space && i !== M.Tab)
      return n;
  }
  return -1;
}
function tc(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function nc(e, t, n = 0, i = e.length, r = 0, s = t.length) {
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
function Al(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    let o = e.charCodeAt(n), u = t.charCodeAt(r);
    if (o === u)
      continue;
    if (o >= 128 || u >= 128)
      return nc(e.toLowerCase(), t.toLowerCase(), n, i, r, s);
    qr(o) && (o -= 32), qr(u) && (u -= 32);
    const c = o - u;
    if (c !== 0)
      return c;
  }
  const a = i - n, l = s - r;
  return a < l ? -1 : a > l ? 1 : 0;
}
function qr(e) {
  return e >= M.a && e <= M.z;
}
function Ll(e) {
  return e >= M.A && e <= M.Z;
}
function ic(e, t) {
  return e.length === t.length && Al(e, t) === 0;
}
function rc(e, t) {
  const n = t.length;
  return t.length > e.length ? !1 : Al(e, t, 0, n) === 0;
}
function $n(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(i) !== t.charCodeAt(i))
      return i;
  return n;
}
function Xn(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  const r = e.length - 1, s = t.length - 1;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(r - i) !== t.charCodeAt(s - i))
      return i;
  return n;
}
function Fi(e) {
  return 55296 <= e && e <= 56319;
}
function sc(e) {
  return 56320 <= e && e <= 57343;
}
function ac(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function oc(e, t, n) {
  const i = e.charCodeAt(n);
  if (Fi(i) && n + 1 < t) {
    const r = e.charCodeAt(n + 1);
    if (sc(r))
      return ac(i, r);
  }
  return i;
}
const lc = /^[\t\n\r\x20-\x7E]*$/;
function uc(e) {
  return lc.test(e);
}
String.fromCharCode(M.UTF8_BOM);
var Vr;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(Vr || (Vr = {}));
var Pi;
(function(e) {
  e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(Pi || (Pi = {}));
const Ze = class Ze {
  static getInstance(t) {
    return Ze.cache.get(Array.from(t));
  }
  static getLocales() {
    return Ze._locales.value;
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
Ze.ambiguousCharacterData = new zr(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Ze.cache = new Qu({ getCacheKey: JSON.stringify }, (t) => {
  function n(c) {
    const d = /* @__PURE__ */ new Map();
    for (let m = 0; m < c.length; m += 2)
      d.set(c[m], c[m + 1]);
    return d;
  }
  function i(c, d) {
    const m = new Map(c);
    for (const [g, _] of d)
      m.set(g, _);
    return m;
  }
  function r(c, d) {
    if (!c)
      return d;
    const m = /* @__PURE__ */ new Map();
    for (const [g, _] of c)
      d.has(g) && m.set(g, _);
    return m;
  }
  const s = Ze.ambiguousCharacterData.value;
  let a = t.filter((c) => !c.startsWith("_") && c in s);
  a.length === 0 && (a = ["_default"]);
  let l;
  for (const c of a) {
    const d = n(s[c]);
    l = r(l, d);
  }
  const o = n(s._common), u = i(o, l);
  return new Ze(u);
}), Ze._locales = new zr(() => Object.keys(Ze.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
let kn = Ze;
const Et = class Et {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(Et.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return Et.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && (Et.isInvisibleCharacter(i) || i === Pi.space))
        return !0;
    }
    return !1;
  }
  static get codePoints() {
    return Et.getData();
  }
};
Et._data = void 0;
let fn = Et;
const Ti = "default", cc = "$initialize";
var Fe;
(function(e) {
  e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(Fe || (Fe = {}));
class hc {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.method = r, this.args = s, this.type = Fe.Request;
  }
}
class Cr {
  constructor(t, n, i, r) {
    this.vsWorker = t, this.seq = n, this.res = i, this.err = r, this.type = Fe.Reply;
  }
}
class dc {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.eventName = r, this.arg = s, this.type = Fe.SubscribeEvent;
  }
}
class mc {
  constructor(t, n, i) {
    this.vsWorker = t, this.req = n, this.event = i, this.type = Fe.Event;
  }
}
class fc {
  constructor(t, n) {
    this.vsWorker = t, this.req = n, this.type = Fe.UnsubscribeEvent;
  }
}
class pc {
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
      }, this._send(new hc(this._workerId, r, t, n, i));
    });
  }
  listen(t, n, i) {
    let r = null;
    const s = new ze({
      onWillAddFirstListener: () => {
        r = String(++this._lastSentReq), this._pendingEmitters.set(r, s), this._send(new dc(this._workerId, r, t, n, i));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(r), this._send(new fc(this._workerId, r)), r = null;
      }
    });
    return s.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, n) {
    const i = {
      get: (r, s) => (typeof s == "string" && !r[s] && (El(s) ? r[s] = (a) => this.listen(t, s, a) : kl(s) ? r[s] = this.listen(t, s, void 0) : s.charCodeAt(0) === M.DollarSign && (r[s] = async (...a) => (await (n == null ? void 0 : n()), this.sendMessage(t, s, a)))), r[s])
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), i);
  }
  _handleMessage(t) {
    switch (t.type) {
      case Fe.Reply:
        return this._handleReplyMessage(t);
      case Fe.Request:
        return this._handleRequestMessage(t);
      case Fe.SubscribeEvent:
        return this._handleSubscribeEventMessage(t);
      case Fe.Event:
        return this._handleEventMessage(t);
      case Fe.UnsubscribeEvent:
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
      this._send(new Cr(this._workerId, n, r, void 0));
    }, (r) => {
      r.detail instanceof Error && (r.detail = Ri(r.detail)), this._send(new Cr(this._workerId, n, void 0, Ri(r)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const n = t.req, i = this._handler.handleEvent(t.channel, t.eventName, t.arg)((r) => {
      this._send(new mc(this._workerId, n, r));
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
    if (t.type === Fe.Request)
      for (let i = 0; i < t.args.length; i++)
        t.args[i] instanceof ArrayBuffer && n.push(t.args[i]);
    else t.type === Fe.Reply && t.res instanceof ArrayBuffer && n.push(t.res);
    this._handler.sendMessage(t, n);
  }
}
function kl(e) {
  return e[0] === "o" && e[1] === "n" && Ll(e.charCodeAt(2));
}
function El(e) {
  return /^onDynamic/.test(e) && Ll(e.charCodeAt(9));
}
class gc {
  constructor(t, n) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new pc({
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
    if (t === Ti && n === cc)
      return this.initialize(i[0]);
    const r = t === Ti ? this.requestHandler : this._localChannels.get(t);
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
    const r = t === Ti ? this.requestHandler : this._localChannels.get(t);
    if (!r)
      throw new Error(`Missing channel ${t} on worker thread`);
    if (El(n)) {
      const s = r[n].call(r, i);
      if (typeof s != "function")
        throw new Error(`Missing dynamic event ${n} on request handler.`);
      return s;
    }
    if (kl(n)) {
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
let Bi = !1;
function Rl(e) {
  if (Bi)
    throw new Error("WebWorker already initialized!");
  Bi = !0;
  const t = new gc(
    (n) => globalThis.postMessage(n),
    (n) => e(n)
  );
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function bc(e) {
  globalThis.onmessage = (t) => {
    Bi || Rl(e);
  };
}
class bt {
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
function Gr(e, t) {
  return (t << 5) - t + e | 0;
}
function _c(e, t) {
  t = Gr(149417, t);
  for (let n = 0, i = e.length; n < i; n++)
    t = Gr(e.charCodeAt(n), t);
  return t;
}
var jr;
(function(e) {
  e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(jr || (jr = {}));
class $r {
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
function wc(e, t, n) {
  return new yt(new $r(e), new $r(t)).ComputeDiff(n).changes;
}
class It {
  static Assert(t, n) {
    if (!t)
      throw new Error(n);
  }
}
class Ft {
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
class Xr {
  constructor() {
    this.m_changes = [], this.m_originalStart = Ve.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = Ve.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new bt(
      this.m_originalStart,
      this.m_originalCount,
      this.m_modifiedStart,
      this.m_modifiedCount
    )), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Ve.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = Ve.MAX_SAFE_SMALL_INTEGER;
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
class yt {
  constructor(t, n, i = null) {
    this.ContinueProcessingPredicate = i, this._originalSequence = t, this._modifiedSequence = n;
    const [r, s, a] = yt._getElements(t), [l, o, u] = yt._getElements(n);
    this._hasStrings = a && u, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = l, this._modifiedElementsOrHash = o, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (yt._isStringArray(n)) {
      const i = new Int32Array(n.length);
      for (let r = 0, s = n.length; r < s; r++)
        i[r] = _c(n[r], 0);
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
    const i = yt._getStrictElement(this._originalSequence, t), r = yt._getStrictElement(this._modifiedSequence, n);
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
      let d;
      return i <= r ? (It.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), d = [
        new bt(t, 0, i, r - i + 1)
      ]) : t <= n ? (It.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), d = [
        new bt(t, n - t + 1, i, 0)
      ]) : (It.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), It.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), d = []), d;
    }
    const a = [0], l = [0], o = this.ComputeRecursionPoint(t, n, i, r, a, l, s), u = a[0], c = l[0];
    if (o !== null)
      return o;
    if (!s[0]) {
      const d = this.ComputeDiffRecursive(t, u, i, c, s);
      let m = [];
      return s[0] ? m = [
        new bt(
          u + 1,
          n - (u + 1) + 1,
          c + 1,
          r - (c + 1) + 1
        )
      ] : m = this.ComputeDiffRecursive(u + 1, n, c + 1, r, s), this.ConcatenateChanges(d, m);
    }
    return [
      new bt(
        t,
        n - t + 1,
        i,
        r - i + 1
      )
    ];
  }
  WALKTRACE(t, n, i, r, s, a, l, o, u, c, d, m, g, _, p, L, A, w) {
    let E = null, H = null, W = new Xr(), O = n, b = i, f = g[0] - L[0] - r, v = Ve.MIN_SAFE_SMALL_INTEGER, P = this.m_forwardHistory.length - 1;
    do {
      const R = f + t;
      R === O || R < b && u[R - 1] < u[R + 1] ? (d = u[R + 1], _ = d - f - r, d < v && W.MarkNextChange(), v = d, W.AddModifiedElement(d + 1, _), f = R + 1 - t) : (d = u[R - 1] + 1, _ = d - f - r, d < v && W.MarkNextChange(), v = d - 1, W.AddOriginalElement(d, _ + 1), f = R - 1 - t), P >= 0 && (u = this.m_forwardHistory[P], t = u[0], O = 1, b = u.length - 1);
    } while (--P >= -1);
    if (E = W.getReverseChanges(), w[0]) {
      let R = g[0] + 1, k = L[0] + 1;
      if (E !== null && E.length > 0) {
        const D = E[E.length - 1];
        R = Math.max(R, D.getOriginalEnd()), k = Math.max(k, D.getModifiedEnd());
      }
      H = [
        new bt(
          R,
          m - R + 1,
          k,
          p - k + 1
        )
      ];
    } else {
      W = new Xr(), O = a, b = l, f = g[0] - L[0] - o, v = Ve.MAX_SAFE_SMALL_INTEGER, P = A ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const R = f + s;
        R === O || R < b && c[R - 1] >= c[R + 1] ? (d = c[R + 1] - 1, _ = d - f - o, d > v && W.MarkNextChange(), v = d + 1, W.AddOriginalElement(d + 1, _ + 1), f = R + 1 - s) : (d = c[R - 1], _ = d - f - o, d > v && W.MarkNextChange(), v = d, W.AddModifiedElement(d + 1, _ + 1), f = R - 1 - s), P >= 0 && (c = this.m_reverseHistory[P], s = c[0], O = 1, b = c.length - 1);
      } while (--P >= -1);
      H = W.getChanges();
    }
    return this.ConcatenateChanges(E, H);
  }
  ComputeRecursionPoint(t, n, i, r, s, a, l) {
    let o = 0, u = 0, c = 0, d = 0, m = 0, g = 0;
    t--, i--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const _ = n - t + (r - i), p = _ + 1, L = new Int32Array(p), A = new Int32Array(p), w = r - i, E = n - t, H = t - i, W = n - r, b = (E - w) % 2 === 0;
    L[w] = t, A[E] = n, l[0] = !1;
    for (let f = 1; f <= _ / 2 + 1; f++) {
      let v = 0, P = 0;
      c = this.ClipDiagonalBound(w - f, f, w, p), d = this.ClipDiagonalBound(w + f, f, w, p);
      for (let k = c; k <= d; k += 2) {
        k === c || k < d && L[k - 1] < L[k + 1] ? o = L[k + 1] : o = L[k - 1] + 1, u = o - (k - w) - H;
        const D = o;
        for (; o < n && u < r && this.ElementsAreEqual(o + 1, u + 1); )
          o++, u++;
        if (L[k] = o, o + u > v + P && (v = o, P = u), !b && Math.abs(k - E) <= f - 1 && o >= A[k])
          return s[0] = o, a[0] = u, D <= A[k] && ot.MaxDifferencesHistory > 0 && f <= ot.MaxDifferencesHistory + 1 ? this.WALKTRACE(w, c, d, H, E, m, g, W, L, A, o, n, s, u, r, a, b, l) : null;
      }
      const R = (v - t + (P - i) - f) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(v, R))
        return l[0] = !0, s[0] = v, a[0] = P, R > 0 && ot.MaxDifferencesHistory > 0 && f <= ot.MaxDifferencesHistory + 1 ? this.WALKTRACE(w, c, d, H, E, m, g, W, L, A, o, n, s, u, r, a, b, l) : (t++, i++, [
          new bt(
            t,
            n - t + 1,
            i,
            r - i + 1
          )
        ]);
      m = this.ClipDiagonalBound(E - f, f, E, p), g = this.ClipDiagonalBound(E + f, f, E, p);
      for (let k = m; k <= g; k += 2) {
        k === m || k < g && A[k - 1] >= A[k + 1] ? o = A[k + 1] - 1 : o = A[k - 1], u = o - (k - E) - W;
        const D = o;
        for (; o > t && u > i && this.ElementsAreEqual(o, u); )
          o--, u--;
        if (A[k] = o, b && Math.abs(k - w) <= f && o <= L[k])
          return s[0] = o, a[0] = u, D >= L[k] && ot.MaxDifferencesHistory > 0 && f <= ot.MaxDifferencesHistory + 1 ? this.WALKTRACE(w, c, d, H, E, m, g, W, L, A, o, n, s, u, r, a, b, l) : null;
      }
      if (f <= ot.MaxDifferencesHistory) {
        let k = new Int32Array(d - c + 2);
        k[0] = w - c + 1, Ft.Copy2(L, c, k, 1, d - c + 1), this.m_forwardHistory.push(k), k = new Int32Array(g - m + 2), k[0] = E - m + 1, Ft.Copy2(A, m, k, 1, g - m + 1), this.m_reverseHistory.push(k);
      }
    }
    return this.WALKTRACE(w, c, d, H, E, m, g, W, L, A, o, n, s, u, r, a, b, l);
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
        const d = t[n - 1];
        r = d.originalStart + d.originalLength, s = d.modifiedStart + d.modifiedLength;
      }
      const a = i.originalLength > 0, l = i.modifiedLength > 0;
      let o = 0, u = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
      for (let d = 1; ; d++) {
        const m = i.originalStart - d, g = i.modifiedStart - d;
        if (m < r || g < s || a && !this.OriginalElementsAreEqual(m, m + i.originalLength) || l && !this.ModifiedElementsAreEqual(g, g + i.modifiedLength))
          break;
        const p = (m === r && g === s ? 5 : 0) + this._boundaryScore(m, i.originalLength, g, i.modifiedLength);
        p > u && (u = p, o = d);
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
        const r = t[n - 1], s = t[n], a = s.originalStart - r.originalStart - r.originalLength, l = r.originalStart, o = s.originalStart + s.originalLength, u = o - l, c = r.modifiedStart, d = s.modifiedStart + s.modifiedLength, m = d - c;
        if (a < 5 && u < 20 && m < 20) {
          const g = this._findBetterContiguousSequence(l, u, c, m, a);
          if (g) {
            const [_, p] = g;
            (_ !== r.originalStart + r.originalLength || p !== r.modifiedStart + r.modifiedLength) && (r.originalLength = _ - r.originalStart, r.modifiedLength = p - r.modifiedStart, s.originalStart = _ + a, s.modifiedStart = p + a, s.originalLength = o - s.originalStart, s.modifiedLength = d - s.modifiedStart);
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
    for (let d = t; d < a; d++)
      for (let m = i; m < l; m++) {
        const g = this._contiguousSequenceScore(d, m, s);
        g > 0 && g > o && (o = g, u = d, c = m);
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
      return Ft.Copy(t, 0, r, 0, t.length - 1), r[t.length - 1] = i[0], Ft.Copy(n, 1, r, t.length, n.length - 1), r;
    } else {
      const r = new Array(t.length + n.length);
      return Ft.Copy(t, 0, r, 0, t.length), Ft.Copy(n, 0, r, t.length, n.length), r;
    }
  }
  ChangesOverlap(t, n, i) {
    if (It.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), It.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const r = t.originalStart;
      let s = t.originalLength;
      const a = t.modifiedStart;
      let l = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (l = n.modifiedStart + n.modifiedLength - t.modifiedStart), i[0] = new bt(r, s, a, l), !0;
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
let te = class Lt {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new Lt(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return Lt.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return Lt.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return Lt.isBeforeOrEqual(this, t);
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
    return new Lt(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new Lt(t.lineNumber, t.column);
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
}, X = class fe {
  constructor(t, n, i, r) {
    t > i || t === i && n > r ? (this.startLineNumber = i, this.startColumn = r, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = i, this.endColumn = r);
  }
  isEmpty() {
    return fe.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return fe.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return fe.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return fe.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return fe.plusRange(this, t);
  }
  static plusRange(t, n) {
    let i, r, s, a;
    return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, r = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, r = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, r = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new fe(i, r, s, a);
  }
  intersectRanges(t) {
    return fe.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let i = t.startLineNumber, r = t.startColumn, s = t.endLineNumber, a = t.endColumn;
    const l = n.startLineNumber, o = n.startColumn, u = n.endLineNumber, c = n.endColumn;
    return i < l ? (i = l, r = o) : i === l && (r = Math.max(r, o)), s > u ? (s = u, a = c) : s === u && (a = Math.min(a, c)), i > s || i === s && r > a ? null : new fe(
      i,
      r,
      s,
      a
    );
  }
  equalsRange(t) {
    return fe.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return fe.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new te(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return fe.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new te(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new fe(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new fe(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return fe.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new fe(
      t.startLineNumber,
      t.startColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  collapseToEnd() {
    return fe.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new fe(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new fe(
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
    return new fe(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new fe(
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
            const d = t.endColumn | 0, m = n.endColumn | 0;
            return d - m;
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
class Lr {
  constructor(t) {
    const n = Wr(t);
    this._defaultValue = n, this._asciiMap = Lr._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const i = Wr(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = i : this._map.set(t, i);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}
var Yr;
(function(e) {
  e[e.False = 0] = "False", e[e.True = 1] = "True";
})(Yr || (Yr = {}));
var Y;
(function(e) {
  e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})(Y || (Y = {}));
class vc {
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
class yc {
  constructor(t) {
    let n = 0, i = Y.Invalid;
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      o > n && (n = o), l > i && (i = l), u > i && (i = u);
    }
    n++, i++;
    const r = new vc(i, n, Y.Invalid);
    for (let s = 0, a = t.length; s < a; s++) {
      const [l, o, u] = t[s];
      r.set(l, o, u);
    }
    this._states = r, this._maxCharCode = n;
  }
  nextState(t, n) {
    return n < 0 || n >= this._maxCharCode ? Y.Invalid : this._states.get(t, n);
  }
}
let xi = null;
function Tc() {
  return xi === null && (xi = new yc([
    [Y.Start, M.h, Y.H],
    [Y.Start, M.H, Y.H],
    [Y.Start, M.f, Y.F],
    [Y.Start, M.F, Y.F],
    [Y.H, M.t, Y.HT],
    [Y.H, M.T, Y.HT],
    [Y.HT, M.t, Y.HTT],
    [Y.HT, M.T, Y.HTT],
    [Y.HTT, M.p, Y.HTTP],
    [Y.HTT, M.P, Y.HTTP],
    [Y.HTTP, M.s, Y.BeforeColon],
    [Y.HTTP, M.S, Y.BeforeColon],
    [Y.HTTP, M.Colon, Y.AfterColon],
    [Y.F, M.i, Y.FI],
    [Y.F, M.I, Y.FI],
    [Y.FI, M.l, Y.FIL],
    [Y.FI, M.L, Y.FIL],
    [Y.FIL, M.e, Y.BeforeColon],
    [Y.FIL, M.E, Y.BeforeColon],
    [Y.BeforeColon, M.Colon, Y.AfterColon],
    [Y.AfterColon, M.Slash, Y.AlmostThere],
    [Y.AlmostThere, M.Slash, Y.End]
  ])), xi;
}
var le;
(function(e) {
  e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(le || (le = {}));
let an = null;
function xc() {
  if (an === null) {
    an = new Lr(le.None);
    const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…|`;
    for (let n = 0; n < e.length; n++)
      an.set(e.charCodeAt(n), le.ForceTermination);
    const t = ".,;:";
    for (let n = 0; n < t.length; n++)
      an.set(t.charCodeAt(n), le.CannotEndIn);
  }
  return an;
}
class Yn {
  static _createLink(t, n, i, r, s) {
    let a = s - 1;
    do {
      const l = n.charCodeAt(a);
      if (t.get(l) !== le.CannotEndIn)
        break;
      a--;
    } while (a > r);
    if (r > 0) {
      const l = n.charCodeAt(r - 1), o = n.charCodeAt(a);
      (l === M.OpenParen && o === M.CloseParen || l === M.OpenSquareBracket && o === M.CloseSquareBracket || l === M.OpenCurlyBrace && o === M.CloseCurlyBrace) && a--;
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
  static computeLinks(t, n = Tc()) {
    const i = xc(), r = [];
    for (let s = 1, a = t.getLineCount(); s <= a; s++) {
      const l = t.getLineContent(s), o = l.length;
      let u = 0, c = 0, d = 0, m = Y.Start, g = !1, _ = !1, p = !1, L = !1;
      for (; u < o; ) {
        let A = !1;
        const w = l.charCodeAt(u);
        if (m === Y.Accept) {
          let E;
          switch (w) {
            case M.OpenParen:
              g = !0, E = le.None;
              break;
            case M.CloseParen:
              E = g ? le.None : le.ForceTermination;
              break;
            case M.OpenSquareBracket:
              p = !0, _ = !0, E = le.None;
              break;
            case M.CloseSquareBracket:
              p = !1, E = _ ? le.None : le.ForceTermination;
              break;
            case M.OpenCurlyBrace:
              L = !0, E = le.None;
              break;
            case M.CloseCurlyBrace:
              E = L ? le.None : le.ForceTermination;
              break;
            case M.SingleQuote:
            case M.DoubleQuote:
            case M.BackTick:
              d === w ? E = le.ForceTermination : d === M.SingleQuote || d === M.DoubleQuote || d === M.BackTick ? E = le.None : E = le.ForceTermination;
              break;
            case M.Asterisk:
              E = d === M.Asterisk ? le.ForceTermination : le.None;
              break;
            case M.Space:
              E = p ? le.None : le.ForceTermination;
              break;
            default:
              E = i.get(w);
          }
          E === le.ForceTermination && (r.push(Yn._createLink(i, l, s, c, u)), A = !0);
        } else if (m === Y.End) {
          let E;
          w === M.OpenSquareBracket ? (_ = !0, E = le.None) : E = i.get(w), E === le.ForceTermination ? A = !0 : m = Y.Accept;
        } else
          m = n.nextState(m, w), m === Y.Invalid && (A = !0);
        A && (m = Y.Start, g = !1, _ = !1, L = !1, c = u + 1, d = w), u++;
      }
      m === Y.Accept && r.push(Yn._createLink(i, l, s, c, o));
    }
    return r;
  }
}
function Ac(e) {
  return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : Yn.computeLinks(e);
}
const bi = class bi {
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
bi.INSTANCE = new bi();
let Hi = bi;
var y;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(y || (y = {}));
var T;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(T || (T = {}));
class kr {
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
    return this._strToKeyCode[t.toLowerCase()] || y.Unknown;
  }
}
const On = new kr(), Oi = new kr(), zi = new kr(), Lc = new Array(230), kc = /* @__PURE__ */ Object.create(null), Ec = /* @__PURE__ */ Object.create(null), Wi = [];
for (let e = 0; e <= T.MAX_VALUE; e++)
  y.DependsOnKbLayout;
for (let e = 0; e <= y.MAX_VALUE; e++)
  Wi[e] = T.DependsOnKbLayout;
(function() {
  const t = [
    [1, T.None, "None", y.Unknown, "unknown", 0, "VK_UNKNOWN", "", ""],
    [1, T.Hyper, "Hyper", y.Unknown, "", 0, "", "", ""],
    [1, T.Super, "Super", y.Unknown, "", 0, "", "", ""],
    [1, T.Fn, "Fn", y.Unknown, "", 0, "", "", ""],
    [1, T.FnLock, "FnLock", y.Unknown, "", 0, "", "", ""],
    [1, T.Suspend, "Suspend", y.Unknown, "", 0, "", "", ""],
    [1, T.Resume, "Resume", y.Unknown, "", 0, "", "", ""],
    [1, T.Turbo, "Turbo", y.Unknown, "", 0, "", "", ""],
    [1, T.Sleep, "Sleep", y.Unknown, "", 0, "VK_SLEEP", "", ""],
    [1, T.WakeUp, "WakeUp", y.Unknown, "", 0, "", "", ""],
    [0, T.KeyA, "KeyA", y.KeyA, "A", 65, "VK_A", "", ""],
    [0, T.KeyB, "KeyB", y.KeyB, "B", 66, "VK_B", "", ""],
    [0, T.KeyC, "KeyC", y.KeyC, "C", 67, "VK_C", "", ""],
    [0, T.KeyD, "KeyD", y.KeyD, "D", 68, "VK_D", "", ""],
    [0, T.KeyE, "KeyE", y.KeyE, "E", 69, "VK_E", "", ""],
    [0, T.KeyF, "KeyF", y.KeyF, "F", 70, "VK_F", "", ""],
    [0, T.KeyG, "KeyG", y.KeyG, "G", 71, "VK_G", "", ""],
    [0, T.KeyH, "KeyH", y.KeyH, "H", 72, "VK_H", "", ""],
    [0, T.KeyI, "KeyI", y.KeyI, "I", 73, "VK_I", "", ""],
    [0, T.KeyJ, "KeyJ", y.KeyJ, "J", 74, "VK_J", "", ""],
    [0, T.KeyK, "KeyK", y.KeyK, "K", 75, "VK_K", "", ""],
    [0, T.KeyL, "KeyL", y.KeyL, "L", 76, "VK_L", "", ""],
    [0, T.KeyM, "KeyM", y.KeyM, "M", 77, "VK_M", "", ""],
    [0, T.KeyN, "KeyN", y.KeyN, "N", 78, "VK_N", "", ""],
    [0, T.KeyO, "KeyO", y.KeyO, "O", 79, "VK_O", "", ""],
    [0, T.KeyP, "KeyP", y.KeyP, "P", 80, "VK_P", "", ""],
    [0, T.KeyQ, "KeyQ", y.KeyQ, "Q", 81, "VK_Q", "", ""],
    [0, T.KeyR, "KeyR", y.KeyR, "R", 82, "VK_R", "", ""],
    [0, T.KeyS, "KeyS", y.KeyS, "S", 83, "VK_S", "", ""],
    [0, T.KeyT, "KeyT", y.KeyT, "T", 84, "VK_T", "", ""],
    [0, T.KeyU, "KeyU", y.KeyU, "U", 85, "VK_U", "", ""],
    [0, T.KeyV, "KeyV", y.KeyV, "V", 86, "VK_V", "", ""],
    [0, T.KeyW, "KeyW", y.KeyW, "W", 87, "VK_W", "", ""],
    [0, T.KeyX, "KeyX", y.KeyX, "X", 88, "VK_X", "", ""],
    [0, T.KeyY, "KeyY", y.KeyY, "Y", 89, "VK_Y", "", ""],
    [0, T.KeyZ, "KeyZ", y.KeyZ, "Z", 90, "VK_Z", "", ""],
    [0, T.Digit1, "Digit1", y.Digit1, "1", 49, "VK_1", "", ""],
    [0, T.Digit2, "Digit2", y.Digit2, "2", 50, "VK_2", "", ""],
    [0, T.Digit3, "Digit3", y.Digit3, "3", 51, "VK_3", "", ""],
    [0, T.Digit4, "Digit4", y.Digit4, "4", 52, "VK_4", "", ""],
    [0, T.Digit5, "Digit5", y.Digit5, "5", 53, "VK_5", "", ""],
    [0, T.Digit6, "Digit6", y.Digit6, "6", 54, "VK_6", "", ""],
    [0, T.Digit7, "Digit7", y.Digit7, "7", 55, "VK_7", "", ""],
    [0, T.Digit8, "Digit8", y.Digit8, "8", 56, "VK_8", "", ""],
    [0, T.Digit9, "Digit9", y.Digit9, "9", 57, "VK_9", "", ""],
    [0, T.Digit0, "Digit0", y.Digit0, "0", 48, "VK_0", "", ""],
    [1, T.Enter, "Enter", y.Enter, "Enter", 13, "VK_RETURN", "", ""],
    [1, T.Escape, "Escape", y.Escape, "Escape", 27, "VK_ESCAPE", "", ""],
    [1, T.Backspace, "Backspace", y.Backspace, "Backspace", 8, "VK_BACK", "", ""],
    [1, T.Tab, "Tab", y.Tab, "Tab", 9, "VK_TAB", "", ""],
    [1, T.Space, "Space", y.Space, "Space", 32, "VK_SPACE", "", ""],
    [0, T.Minus, "Minus", y.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, T.Equal, "Equal", y.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, T.BracketLeft, "BracketLeft", y.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, T.BracketRight, "BracketRight", y.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, T.Backslash, "Backslash", y.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, T.IntlHash, "IntlHash", y.Unknown, "", 0, "", "", ""],
    [0, T.Semicolon, "Semicolon", y.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, T.Quote, "Quote", y.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, T.Backquote, "Backquote", y.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, T.Comma, "Comma", y.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, T.Period, "Period", y.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, T.Slash, "Slash", y.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, T.CapsLock, "CapsLock", y.CapsLock, "CapsLock", 20, "VK_CAPITAL", "", ""],
    [1, T.F1, "F1", y.F1, "F1", 112, "VK_F1", "", ""],
    [1, T.F2, "F2", y.F2, "F2", 113, "VK_F2", "", ""],
    [1, T.F3, "F3", y.F3, "F3", 114, "VK_F3", "", ""],
    [1, T.F4, "F4", y.F4, "F4", 115, "VK_F4", "", ""],
    [1, T.F5, "F5", y.F5, "F5", 116, "VK_F5", "", ""],
    [1, T.F6, "F6", y.F6, "F6", 117, "VK_F6", "", ""],
    [1, T.F7, "F7", y.F7, "F7", 118, "VK_F7", "", ""],
    [1, T.F8, "F8", y.F8, "F8", 119, "VK_F8", "", ""],
    [1, T.F9, "F9", y.F9, "F9", 120, "VK_F9", "", ""],
    [1, T.F10, "F10", y.F10, "F10", 121, "VK_F10", "", ""],
    [1, T.F11, "F11", y.F11, "F11", 122, "VK_F11", "", ""],
    [1, T.F12, "F12", y.F12, "F12", 123, "VK_F12", "", ""],
    [1, T.PrintScreen, "PrintScreen", y.Unknown, "", 0, "", "", ""],
    [1, T.ScrollLock, "ScrollLock", y.ScrollLock, "ScrollLock", 145, "VK_SCROLL", "", ""],
    [1, T.Pause, "Pause", y.PauseBreak, "PauseBreak", 19, "VK_PAUSE", "", ""],
    [1, T.Insert, "Insert", y.Insert, "Insert", 45, "VK_INSERT", "", ""],
    [1, T.Home, "Home", y.Home, "Home", 36, "VK_HOME", "", ""],
    [1, T.PageUp, "PageUp", y.PageUp, "PageUp", 33, "VK_PRIOR", "", ""],
    [1, T.Delete, "Delete", y.Delete, "Delete", 46, "VK_DELETE", "", ""],
    [1, T.End, "End", y.End, "End", 35, "VK_END", "", ""],
    [1, T.PageDown, "PageDown", y.PageDown, "PageDown", 34, "VK_NEXT", "", ""],
    [1, T.ArrowRight, "ArrowRight", y.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", ""],
    [1, T.ArrowLeft, "ArrowLeft", y.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", ""],
    [1, T.ArrowDown, "ArrowDown", y.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", ""],
    [1, T.ArrowUp, "ArrowUp", y.UpArrow, "UpArrow", 38, "VK_UP", "Up", ""],
    [1, T.NumLock, "NumLock", y.NumLock, "NumLock", 144, "VK_NUMLOCK", "", ""],
    [1, T.NumpadDivide, "NumpadDivide", y.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", "", ""],
    [1, T.NumpadMultiply, "NumpadMultiply", y.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", "", ""],
    [1, T.NumpadSubtract, "NumpadSubtract", y.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", "", ""],
    [1, T.NumpadAdd, "NumpadAdd", y.NumpadAdd, "NumPad_Add", 107, "VK_ADD", "", ""],
    [1, T.NumpadEnter, "NumpadEnter", y.Enter, "", 0, "", "", ""],
    [1, T.Numpad1, "Numpad1", y.Numpad1, "NumPad1", 97, "VK_NUMPAD1", "", ""],
    [1, T.Numpad2, "Numpad2", y.Numpad2, "NumPad2", 98, "VK_NUMPAD2", "", ""],
    [1, T.Numpad3, "Numpad3", y.Numpad3, "NumPad3", 99, "VK_NUMPAD3", "", ""],
    [1, T.Numpad4, "Numpad4", y.Numpad4, "NumPad4", 100, "VK_NUMPAD4", "", ""],
    [1, T.Numpad5, "Numpad5", y.Numpad5, "NumPad5", 101, "VK_NUMPAD5", "", ""],
    [1, T.Numpad6, "Numpad6", y.Numpad6, "NumPad6", 102, "VK_NUMPAD6", "", ""],
    [1, T.Numpad7, "Numpad7", y.Numpad7, "NumPad7", 103, "VK_NUMPAD7", "", ""],
    [1, T.Numpad8, "Numpad8", y.Numpad8, "NumPad8", 104, "VK_NUMPAD8", "", ""],
    [1, T.Numpad9, "Numpad9", y.Numpad9, "NumPad9", 105, "VK_NUMPAD9", "", ""],
    [1, T.Numpad0, "Numpad0", y.Numpad0, "NumPad0", 96, "VK_NUMPAD0", "", ""],
    [1, T.NumpadDecimal, "NumpadDecimal", y.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", "", ""],
    [0, T.IntlBackslash, "IntlBackslash", y.IntlBackslash, "OEM_102", 226, "VK_OEM_102", "", ""],
    [1, T.ContextMenu, "ContextMenu", y.ContextMenu, "ContextMenu", 93, "", "", ""],
    [1, T.Power, "Power", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadEqual, "NumpadEqual", y.Unknown, "", 0, "", "", ""],
    [1, T.F13, "F13", y.F13, "F13", 124, "VK_F13", "", ""],
    [1, T.F14, "F14", y.F14, "F14", 125, "VK_F14", "", ""],
    [1, T.F15, "F15", y.F15, "F15", 126, "VK_F15", "", ""],
    [1, T.F16, "F16", y.F16, "F16", 127, "VK_F16", "", ""],
    [1, T.F17, "F17", y.F17, "F17", 128, "VK_F17", "", ""],
    [1, T.F18, "F18", y.F18, "F18", 129, "VK_F18", "", ""],
    [1, T.F19, "F19", y.F19, "F19", 130, "VK_F19", "", ""],
    [1, T.F20, "F20", y.F20, "F20", 131, "VK_F20", "", ""],
    [1, T.F21, "F21", y.F21, "F21", 132, "VK_F21", "", ""],
    [1, T.F22, "F22", y.F22, "F22", 133, "VK_F22", "", ""],
    [1, T.F23, "F23", y.F23, "F23", 134, "VK_F23", "", ""],
    [1, T.F24, "F24", y.F24, "F24", 135, "VK_F24", "", ""],
    [1, T.Open, "Open", y.Unknown, "", 0, "", "", ""],
    [1, T.Help, "Help", y.Unknown, "", 0, "", "", ""],
    [1, T.Select, "Select", y.Unknown, "", 0, "", "", ""],
    [1, T.Again, "Again", y.Unknown, "", 0, "", "", ""],
    [1, T.Undo, "Undo", y.Unknown, "", 0, "", "", ""],
    [1, T.Cut, "Cut", y.Unknown, "", 0, "", "", ""],
    [1, T.Copy, "Copy", y.Unknown, "", 0, "", "", ""],
    [1, T.Paste, "Paste", y.Unknown, "", 0, "", "", ""],
    [1, T.Find, "Find", y.Unknown, "", 0, "", "", ""],
    [1, T.AudioVolumeMute, "AudioVolumeMute", y.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", "", ""],
    [1, T.AudioVolumeUp, "AudioVolumeUp", y.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", "", ""],
    [1, T.AudioVolumeDown, "AudioVolumeDown", y.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", "", ""],
    [1, T.NumpadComma, "NumpadComma", y.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", "", ""],
    [0, T.IntlRo, "IntlRo", y.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", "", ""],
    [1, T.KanaMode, "KanaMode", y.Unknown, "", 0, "", "", ""],
    [0, T.IntlYen, "IntlYen", y.Unknown, "", 0, "", "", ""],
    [1, T.Convert, "Convert", y.Unknown, "", 0, "", "", ""],
    [1, T.NonConvert, "NonConvert", y.Unknown, "", 0, "", "", ""],
    [1, T.Lang1, "Lang1", y.Unknown, "", 0, "", "", ""],
    [1, T.Lang2, "Lang2", y.Unknown, "", 0, "", "", ""],
    [1, T.Lang3, "Lang3", y.Unknown, "", 0, "", "", ""],
    [1, T.Lang4, "Lang4", y.Unknown, "", 0, "", "", ""],
    [1, T.Lang5, "Lang5", y.Unknown, "", 0, "", "", ""],
    [1, T.Abort, "Abort", y.Unknown, "", 0, "", "", ""],
    [1, T.Props, "Props", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadParenLeft, "NumpadParenLeft", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadParenRight, "NumpadParenRight", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadBackspace, "NumpadBackspace", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadMemoryStore, "NumpadMemoryStore", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadMemoryRecall, "NumpadMemoryRecall", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadMemoryClear, "NumpadMemoryClear", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadMemoryAdd, "NumpadMemoryAdd", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadMemorySubtract, "NumpadMemorySubtract", y.Unknown, "", 0, "", "", ""],
    [1, T.NumpadClear, "NumpadClear", y.Clear, "Clear", 12, "VK_CLEAR", "", ""],
    [1, T.NumpadClearEntry, "NumpadClearEntry", y.Unknown, "", 0, "", "", ""],
    [1, T.None, "", y.Ctrl, "Ctrl", 17, "VK_CONTROL", "", ""],
    [1, T.None, "", y.Shift, "Shift", 16, "VK_SHIFT", "", ""],
    [1, T.None, "", y.Alt, "Alt", 18, "VK_MENU", "", ""],
    [1, T.None, "", y.Meta, "Meta", 91, "VK_COMMAND", "", ""],
    [1, T.ControlLeft, "ControlLeft", y.Ctrl, "", 0, "VK_LCONTROL", "", ""],
    [1, T.ShiftLeft, "ShiftLeft", y.Shift, "", 0, "VK_LSHIFT", "", ""],
    [1, T.AltLeft, "AltLeft", y.Alt, "", 0, "VK_LMENU", "", ""],
    [1, T.MetaLeft, "MetaLeft", y.Meta, "", 0, "VK_LWIN", "", ""],
    [1, T.ControlRight, "ControlRight", y.Ctrl, "", 0, "VK_RCONTROL", "", ""],
    [1, T.ShiftRight, "ShiftRight", y.Shift, "", 0, "VK_RSHIFT", "", ""],
    [1, T.AltRight, "AltRight", y.Alt, "", 0, "VK_RMENU", "", ""],
    [1, T.MetaRight, "MetaRight", y.Meta, "", 0, "VK_RWIN", "", ""],
    [1, T.BrightnessUp, "BrightnessUp", y.Unknown, "", 0, "", "", ""],
    [1, T.BrightnessDown, "BrightnessDown", y.Unknown, "", 0, "", "", ""],
    [1, T.MediaPlay, "MediaPlay", y.Unknown, "", 0, "", "", ""],
    [1, T.MediaRecord, "MediaRecord", y.Unknown, "", 0, "", "", ""],
    [1, T.MediaFastForward, "MediaFastForward", y.Unknown, "", 0, "", "", ""],
    [1, T.MediaRewind, "MediaRewind", y.Unknown, "", 0, "", "", ""],
    [1, T.MediaTrackNext, "MediaTrackNext", y.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", "", ""],
    [1, T.MediaTrackPrevious, "MediaTrackPrevious", y.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", "", ""],
    [1, T.MediaStop, "MediaStop", y.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", "", ""],
    [1, T.Eject, "Eject", y.Unknown, "", 0, "", "", ""],
    [1, T.MediaPlayPause, "MediaPlayPause", y.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", "", ""],
    [1, T.MediaSelect, "MediaSelect", y.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", "", ""],
    [1, T.LaunchMail, "LaunchMail", y.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", "", ""],
    [1, T.LaunchApp2, "LaunchApp2", y.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", "", ""],
    [1, T.LaunchApp1, "LaunchApp1", y.Unknown, "", 0, "VK_MEDIA_LAUNCH_APP1", "", ""],
    [1, T.SelectTask, "SelectTask", y.Unknown, "", 0, "", "", ""],
    [1, T.LaunchScreenSaver, "LaunchScreenSaver", y.Unknown, "", 0, "", "", ""],
    [1, T.BrowserSearch, "BrowserSearch", y.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", "", ""],
    [1, T.BrowserHome, "BrowserHome", y.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", "", ""],
    [1, T.BrowserBack, "BrowserBack", y.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", "", ""],
    [1, T.BrowserForward, "BrowserForward", y.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", "", ""],
    [1, T.BrowserStop, "BrowserStop", y.Unknown, "", 0, "VK_BROWSER_STOP", "", ""],
    [1, T.BrowserRefresh, "BrowserRefresh", y.Unknown, "", 0, "VK_BROWSER_REFRESH", "", ""],
    [1, T.BrowserFavorites, "BrowserFavorites", y.Unknown, "", 0, "VK_BROWSER_FAVORITES", "", ""],
    [1, T.ZoomToggle, "ZoomToggle", y.Unknown, "", 0, "", "", ""],
    [1, T.MailReply, "MailReply", y.Unknown, "", 0, "", "", ""],
    [1, T.MailForward, "MailForward", y.Unknown, "", 0, "", "", ""],
    [1, T.MailSend, "MailSend", y.Unknown, "", 0, "", "", ""],
    [1, T.None, "", y.KEY_IN_COMPOSITION, "KeyInComposition", 229, "", "", ""],
    [1, T.None, "", y.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", "", ""],
    [1, T.None, "", y.OEM_8, "OEM_8", 223, "VK_OEM_8", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_KANA", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_HANGUL", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_JUNJA", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_FINAL", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_HANJA", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_KANJI", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_CONVERT", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_NONCONVERT", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_ACCEPT", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_MODECHANGE", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_SELECT", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_PRINT", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_EXECUTE", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_SNAPSHOT", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_HELP", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_APPS", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_PROCESSKEY", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_PACKET", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_DBE_SBCSCHAR", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_DBE_DBCSCHAR", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_ATTN", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_CRSEL", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_EXSEL", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_EREOF", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_PLAY", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_ZOOM", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_NONAME", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_PA1", "", ""],
    [1, T.None, "", y.Unknown, "", 0, "VK_OEM_CLEAR", "", ""]
  ], n = [], i = [];
  for (const r of t) {
    const [s, a, l, o, u, c, d, m, g] = r;
    if (i[a] || (i[a] = !0, kc[l] = a, Ec[l.toLowerCase()] = a, s && o !== y.Unknown && o !== y.Enter && o !== y.Ctrl && o !== y.Shift && o !== y.Alt && o !== y.Meta && (Wi[o] = a)), !n[o]) {
      if (n[o] = !0, !u)
        throw new Error(
          `String representation missing for key code ${o} around scan code ${l}`
        );
      On.define(o, u), Oi.define(o, m || u), zi.define(o, g || m || u);
    }
    c && (Lc[c] = o);
  }
  Wi[y.Enter] = T.Enter;
})();
var Qr;
(function(e) {
  function t(l) {
    return On.keyCodeToStr(l);
  }
  e.toString = t;
  function n(l) {
    return On.strToKeyCode(l);
  }
  e.fromString = n;
  function i(l) {
    return Oi.keyCodeToStr(l);
  }
  e.toUserSettingsUS = i;
  function r(l) {
    return zi.keyCodeToStr(l);
  }
  e.toUserSettingsGeneral = r;
  function s(l) {
    return Oi.strToKeyCode(l) || zi.strToKeyCode(l);
  }
  e.fromUserSettings = s;
  function a(l) {
    if (l >= y.Numpad0 && l <= y.NumpadDivide)
      return null;
    switch (l) {
      case y.UpArrow:
        return "Up";
      case y.DownArrow:
        return "Down";
      case y.LeftArrow:
        return "Left";
      case y.RightArrow:
        return "Right";
    }
    return On.keyCodeToStr(l);
  }
  e.toElectronAccelerator = a;
})(Qr || (Qr = {}));
var Wt;
(function(e) {
  e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(Wt || (Wt = {}));
function Rc(e, t) {
  const n = (t & 65535) << 16 >>> 0;
  return (e | n) >>> 0;
}
var qi;
(function(e) {
  e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart", e[e.ChatSessionContext = 24] = "ChatSessionContext", e[e.ChatResponsePullRequestPart = 25] = "ChatResponsePullRequestPart";
})(qi || (qi = {}));
let Mt;
const Ai = globalThis.vscode;
var gl;
if (typeof Ai < "u" && typeof Ai.process < "u") {
  const e = Ai.process;
  Mt = {
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
} else typeof process < "u" && typeof ((gl = process == null ? void 0 : process.versions) == null ? void 0 : gl.node) == "string" ? Mt = {
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
} : Mt = {
  get platform() {
    return tn ? "win32" : Wu ? "darwin" : "linux";
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
const Qn = Mt.cwd, Sc = Mt.env, Nc = Mt.platform;
Mt.arch;
const Mc = 65, Dc = 97, Uc = 90, Ic = 122, Dt = 46, _e = 47, De = 92, rt = 58, Fc = 63;
class Sl extends Error {
  constructor(t, n, i) {
    let r;
    typeof n == "string" && n.indexOf("not ") === 0 ? (r = "must not be", n = n.replace(/^not /, "")) : r = "must be";
    const s = t.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${t}" ${s} ${r} of type ${n}`;
    a += `. Received type ${typeof i}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
}
function Pc(e, t) {
  if (e === null || typeof e != "object")
    throw new Sl(t, "Object", e);
}
function de(e, t) {
  if (typeof e != "string")
    throw new Sl(t, "string", e);
}
const Qe = Nc === "win32";
function K(e) {
  return e === _e || e === De;
}
function Vi(e) {
  return e === _e;
}
function st(e) {
  return e >= Mc && e <= Uc || e >= Dc && e <= Ic;
}
function Jn(e, t, n, i) {
  let r = "", s = 0, a = -1, l = 0, o = 0;
  for (let u = 0; u <= e.length; ++u) {
    if (u < e.length)
      o = e.charCodeAt(u);
    else {
      if (i(o))
        break;
      o = _e;
    }
    if (i(o)) {
      if (!(a === u - 1 || l === 1)) if (l === 2) {
        if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== Dt || r.charCodeAt(r.length - 2) !== Dt) {
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
    } else o === Dt && l !== -1 ? ++l : l = -1;
  }
  return r;
}
function Bc(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function Nl(e, t) {
  Pc(t, "pathObject");
  const n = t.dir || t.root, i = t.base || `${t.name || ""}${Bc(t.ext)}`;
  return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
const ye = {
  resolve(...e) {
    let t = "", n = "", i = !1;
    for (let r = e.length - 1; r >= -1; r--) {
      let s;
      if (r >= 0) {
        if (s = e[r], de(s, `paths[${r}]`), s.length === 0)
          continue;
      } else t.length === 0 ? s = Qn() : (s = Sc[`=${t}`] || Qn(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === De) && (s = `${t}\\`));
      const a = s.length;
      let l = 0, o = "", u = !1;
      const c = s.charCodeAt(0);
      if (a === 1)
        K(c) && (l = 1, u = !0);
      else if (K(c))
        if (u = !0, K(s.charCodeAt(1))) {
          let d = 2, m = d;
          for (; d < a && !K(s.charCodeAt(d)); )
            d++;
          if (d < a && d !== m) {
            const g = s.slice(m, d);
            for (m = d; d < a && K(s.charCodeAt(d)); )
              d++;
            if (d < a && d !== m) {
              for (m = d; d < a && !K(s.charCodeAt(d)); )
                d++;
              (d === a || d !== m) && (o = `\\\\${g}\\${s.slice(m, d)}`, l = d);
            }
          }
        } else
          l = 1;
      else st(c) && s.charCodeAt(1) === rt && (o = s.slice(0, 2), l = 2, a > 2 && K(s.charCodeAt(2)) && (u = !0, l = 3));
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
    return n = Jn(n, !i, "\\", K), i ? `${t}\\${n}` : `${t}${n}` || ".";
  },
  normalize(e) {
    de(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = 0, i, r = !1;
    const s = e.charCodeAt(0);
    if (t === 1)
      return Vi(s) ? "\\" : e;
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
    else st(s) && e.charCodeAt(1) === rt && (i = e.slice(0, 2), n = 2, t > 2 && K(e.charCodeAt(2)) && (r = !0, n = 3));
    let a = n < t ? Jn(e.slice(n), !r, "\\", K) : "";
    if (a.length === 0 && !r && (a = "."), a.length > 0 && K(e.charCodeAt(t - 1)) && (a += "\\"), !r && i === void 0 && e.includes(":")) {
      if (a.length >= 2 && st(a.charCodeAt(0)) && a.charCodeAt(1) === rt)
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
    return K(n) || t > 2 && st(n) && e.charCodeAt(1) === rt && K(e.charCodeAt(2));
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
    return ye.normalize(t);
  },
  relative(e, t) {
    if (de(e, "from"), de(t, "to"), e === t)
      return "";
    const n = ye.resolve(e), i = ye.resolve(t);
    if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t))
      return "";
    if (n.length !== e.length || i.length !== t.length) {
      const _ = n.split("\\"), p = i.split("\\");
      _[_.length - 1] === "" && _.pop(), p[p.length - 1] === "" && p.pop();
      const L = _.length, A = p.length, w = L < A ? L : A;
      let E;
      for (E = 0; E < w && _[E].toLowerCase() === p[E].toLowerCase(); E++)
        ;
      return E === 0 ? i : E === w ? A > w ? p.slice(E).join("\\") : L > w ? "..\\".repeat(L - 1 - E) + ".." : "" : "..\\".repeat(L - E) + p.slice(E).join("\\");
    }
    let r = 0;
    for (; r < e.length && e.charCodeAt(r) === De; )
      r++;
    let s = e.length;
    for (; s - 1 > r && e.charCodeAt(s - 1) === De; )
      s--;
    const a = s - r;
    let l = 0;
    for (; l < t.length && t.charCodeAt(l) === De; )
      l++;
    let o = t.length;
    for (; o - 1 > l && t.charCodeAt(o - 1) === De; )
      o--;
    const u = o - l, c = a < u ? a : u;
    let d = -1, m = 0;
    for (; m < c; m++) {
      const _ = e.charCodeAt(r + m);
      if (_ !== t.charCodeAt(l + m))
        break;
      _ === De && (d = m);
    }
    if (m !== c) {
      if (d === -1)
        return i;
    } else {
      if (u > c) {
        if (t.charCodeAt(l + m) === De)
          return i.slice(l + m + 1);
        if (m === 2)
          return i.slice(l + m);
      }
      a > c && (e.charCodeAt(r + m) === De ? d = m : m === 2 && (d = 3)), d === -1 && (d = 0);
    }
    let g = "";
    for (m = r + d + 1; m <= s; ++m)
      (m === s || e.charCodeAt(m) === De) && (g += g.length === 0 ? ".." : "\\..");
    return l += d, g.length > 0 ? `${g}${i.slice(l, o)}` : (i.charCodeAt(l) === De && ++l, i.slice(l, o));
  },
  toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0)
      return e;
    const t = ye.resolve(e);
    if (t.length <= 2)
      return e;
    if (t.charCodeAt(0) === De) {
      if (t.charCodeAt(1) === De) {
        const n = t.charCodeAt(2);
        if (n !== Fc && n !== Dt)
          return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if (st(t.charCodeAt(0)) && t.charCodeAt(1) === rt && t.charCodeAt(2) === De)
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
    } else st(r) && e.charCodeAt(1) === rt && (n = t > 2 && K(e.charCodeAt(2)) ? 3 : 2, i = n);
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
    if (e.length >= 2 && st(e.charCodeAt(0)) && e.charCodeAt(1) === rt && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
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
    e.length >= 2 && e.charCodeAt(1) === rt && st(e.charCodeAt(0)) && (t = i = 2);
    for (let l = e.length - 1; l >= t; --l) {
      const o = e.charCodeAt(l);
      if (K(o)) {
        if (!s) {
          i = l + 1;
          break;
        }
        continue;
      }
      r === -1 && (s = !1, r = l + 1), o === Dt ? n === -1 ? n = l : a !== 1 && (a = 1) : n !== -1 && (a = -1);
    }
    return n === -1 || r === -1 || a === 0 || a === 1 && n === r - 1 && n === i + 1 ? "" : e.slice(n, r);
  },
  format: Nl.bind(null, "\\"),
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
        let d = 2, m = d;
        for (; d < n && !K(e.charCodeAt(d)); )
          d++;
        if (d < n && d !== m) {
          for (m = d; d < n && K(e.charCodeAt(d)); )
            d++;
          if (d < n && d !== m) {
            for (m = d; d < n && !K(e.charCodeAt(d)); )
              d++;
            d === n ? i = d : d !== m && (i = d + 1);
          }
        }
      }
    } else if (st(r) && e.charCodeAt(1) === rt) {
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
      l === -1 && (o = !1, l = u + 1), r === Dt ? s === -1 ? s = u : c !== 1 && (c = 1) : s !== -1 && (c = -1);
    }
    return l !== -1 && (s === -1 || c === 0 || c === 1 && s === l - 1 && s === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, s), t.base = e.slice(a, l), t.ext = e.slice(s, l))), a > 0 && a !== i ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
}, Hc = (() => {
  if (Qe) {
    const e = /\\/g;
    return () => {
      const t = Qn().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => Qn();
})(), oe = {
  resolve(...e) {
    let t = "", n = !1;
    for (let i = e.length - 1; i >= 0 && !n; i--) {
      const r = e[i];
      de(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === _e);
    }
    if (!n) {
      const i = Hc();
      t = `${i}/${t}`, n = i.charCodeAt(0) === _e;
    }
    return t = Jn(t, !n, "/", Vi), n ? `/${t}` : t.length > 0 ? t : ".";
  },
  normalize(e) {
    if (de(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === _e, n = e.charCodeAt(e.length - 1) === _e;
    return e = Jn(e, !t, "/", Vi), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
  },
  isAbsolute(e) {
    return de(e, "path"), e.length > 0 && e.charCodeAt(0) === _e;
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    const t = [];
    for (let n = 0; n < e.length; ++n) {
      const i = e[n];
      de(i, "path"), i.length > 0 && t.push(i);
    }
    return t.length === 0 ? "." : oe.normalize(t.join("/"));
  },
  relative(e, t) {
    if (de(e, "from"), de(t, "to"), e === t || (e = oe.resolve(e), t = oe.resolve(t), e === t))
      return "";
    const n = 1, i = e.length, r = i - n, s = 1, a = t.length - s, l = r < a ? r : a;
    let o = -1, u = 0;
    for (; u < l; u++) {
      const d = e.charCodeAt(n + u);
      if (d !== t.charCodeAt(s + u))
        break;
      d === _e && (o = u);
    }
    if (u === l)
      if (a > l) {
        if (t.charCodeAt(s + u) === _e)
          return t.slice(s + u + 1);
        if (u === 0)
          return t.slice(s + u);
      } else r > l && (e.charCodeAt(n + u) === _e ? o = u : u === 0 && (o = 0));
    let c = "";
    for (u = n + o + 1; u <= i; ++u)
      (u === i || e.charCodeAt(u) === _e) && (c += c.length === 0 ? ".." : "/..");
    return `${c}${t.slice(s + o)}`;
  },
  toNamespacedPath(e) {
    return e;
  },
  dirname(e) {
    if (de(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === _e;
    let n = -1, i = !0;
    for (let r = e.length - 1; r >= 1; --r)
      if (e.charCodeAt(r) === _e) {
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
        if (o === _e) {
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
      if (e.charCodeAt(s) === _e) {
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
  format: Nl.bind(null, "/"),
  parse(e) {
    de(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.charCodeAt(0) === _e;
    let i;
    n ? (t.root = "/", i = 1) : i = 0;
    let r = -1, s = 0, a = -1, l = !0, o = e.length - 1, u = 0;
    for (; o >= i; --o) {
      const c = e.charCodeAt(o);
      if (c === _e) {
        if (!l) {
          s = o + 1;
          break;
        }
        continue;
      }
      a === -1 && (l = !1, a = o + 1), c === Dt ? r === -1 ? r = o : u !== 1 && (u = 1) : r !== -1 && (u = -1);
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
oe.win32 = ye.win32 = ye;
oe.posix = ye.posix = oe;
const Oc = Qe ? ye.normalize : oe.normalize;
Qe ? ye.isAbsolute : oe.isAbsolute;
const zc = Qe ? ye.join : oe.join, Wc = Qe ? ye.resolve : oe.resolve, qc = Qe ? ye.relative : oe.relative, Vc = Qe ? ye.dirname : oe.dirname;
Qe ? ye.basename : oe.basename;
Qe ? ye.extname : oe.extname;
Qe ? ye.parse : oe.parse;
const zn = Qe ? ye.sep : oe.sep, Cc = /^\w[\w\d+.-]*$/, Gc = /^\//, jc = /^\/\//;
function $c(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
    );
  if (e.scheme && !Cc.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Gc.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (jc.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function Xc(e, t) {
  return !e && !t ? "file" : e;
}
function Yc(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Ye && (t = Ye + t) : t = Ye;
      break;
  }
  return t;
}
const ae = "", Ye = "/", Qc = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
let Pe = class Wn {
  static isUri(t) {
    return t instanceof Wn ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
  }
  constructor(t, n, i, r, s, a = !1) {
    typeof t == "object" ? (this.scheme = t.scheme || ae, this.authority = t.authority || ae, this.path = t.path || ae, this.query = t.query || ae, this.fragment = t.fragment || ae) : (this.scheme = Xc(t, a), this.authority = n || ae, this.path = Yc(this.scheme, i || ae), this.query = r || ae, this.fragment = s || ae, $c(this, a));
  }
  get fsPath() {
    return Zn(this, !1);
  }
  with(t) {
    if (!t)
      return this;
    let { scheme: n, authority: i, path: r, query: s, fragment: a } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = ae), i === void 0 ? i = this.authority : i === null && (i = ae), r === void 0 ? r = this.path : r === null && (r = ae), s === void 0 ? s = this.query : s === null && (s = ae), a === void 0 ? a = this.fragment : a === null && (a = ae), n === this.scheme && i === this.authority && r === this.path && s === this.query && a === this.fragment ? this : new Pt(n, i, r, s, a);
  }
  static parse(t, n = !1) {
    const i = Qc.exec(t);
    return i ? new Pt(
      i[2] || ae,
      Dn(i[4] || ae),
      Dn(i[5] || ae),
      Dn(i[7] || ae),
      Dn(i[9] || ae),
      n
    ) : new Pt(ae, ae, ae, ae, ae);
  }
  static file(t) {
    let n = ae;
    if (tn && (t = t.replace(/\\/g, Ye)), t[0] === Ye && t[1] === Ye) {
      const i = t.indexOf(Ye, 2);
      i === -1 ? (n = t.substring(2), t = Ye) : (n = t.substring(2, i), t = t.substring(i) || Ye);
    }
    return new Pt("file", n, t, ae, ae);
  }
  static from(t, n) {
    return new Pt(
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
    return tn && t.scheme === "file" ? i = Wn.file(ye.join(Zn(t, !0), ...n)).path : i = oe.join(t.path, ...n), t.with({ path: i });
  }
  toString(t = !1) {
    return Ci(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof Wn)
        return t;
      {
        const n = new Pt(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === Ml ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
const Ml = tn ? 1 : void 0;
class Pt extends Pe {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = Zn(this, !1)), this._fsPath;
  }
  toString(t = !1) {
    return t ? Ci(this, !0) : (this._formatted || (this._formatted = Ci(this, !1)), this._formatted);
  }
  toJSON() {
    const t = {
      $mid: qi.Uri
    };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = Ml), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}
const Dl = {
  [M.Colon]: "%3A",
  [M.Slash]: "%2F",
  [M.QuestionMark]: "%3F",
  [M.Hash]: "%23",
  [M.OpenSquareBracket]: "%5B",
  [M.CloseSquareBracket]: "%5D",
  [M.AtSign]: "%40",
  [M.ExclamationMark]: "%21",
  [M.DollarSign]: "%24",
  [M.Ampersand]: "%26",
  [M.SingleQuote]: "%27",
  [M.OpenParen]: "%28",
  [M.CloseParen]: "%29",
  [M.Asterisk]: "%2A",
  [M.Plus]: "%2B",
  [M.Comma]: "%2C",
  [M.Semicolon]: "%3B",
  [M.Equals]: "%3D",
  [M.Space]: "%20"
};
function Jr(e, t, n) {
  let i, r = -1;
  for (let s = 0; s < e.length; s++) {
    const a = e.charCodeAt(s);
    if (a >= M.a && a <= M.z || a >= M.A && a <= M.Z || a >= M.Digit0 && a <= M.Digit9 || a === M.Dash || a === M.Period || a === M.Underline || a === M.Tilde || t && a === M.Slash || n && a === M.OpenSquareBracket || n && a === M.CloseSquareBracket || n && a === M.Colon)
      r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i !== void 0 && (i += e.charAt(s));
    else {
      i === void 0 && (i = e.substr(0, s));
      const l = Dl[a];
      l !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i += l) : r === -1 && (r = s);
    }
  }
  return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function Jc(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    i === M.Hash || i === M.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += Dl[i]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function Zn(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === M.Slash && (e.path.charCodeAt(1) >= M.A && e.path.charCodeAt(1) <= M.Z || e.path.charCodeAt(1) >= M.a && e.path.charCodeAt(1) <= M.z) && e.path.charCodeAt(2) === M.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, tn && (n = n.replace(/\//g, "\\")), n;
}
function Ci(e, t) {
  const n = t ? Jc : Jr;
  let i = "", { scheme: r, authority: s, path: a, query: l, fragment: o } = e;
  if (r && (i += r, i += ":"), (s || r === "file") && (i += Ye, i += Ye), s) {
    let u = s.indexOf("@");
    if (u !== -1) {
      const c = s.substr(0, u);
      s = s.substr(u + 1), u = c.lastIndexOf(":"), u === -1 ? i += n(c, !1, !1) : (i += n(c.substr(0, u), !1, !1), i += ":", i += n(c.substr(u + 1), !1, !0)), i += "@";
    }
    s = s.toLowerCase(), u = s.lastIndexOf(":"), u === -1 ? i += n(s, !1, !0) : (i += n(s.substr(0, u), !1, !0), i += s.substr(u));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === M.Slash && a.charCodeAt(2) === M.Colon) {
      const u = a.charCodeAt(1);
      u >= M.A && u <= M.Z && (a = `/${String.fromCharCode(u + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === M.Colon) {
      const u = a.charCodeAt(0);
      u >= M.A && u <= M.Z && (a = `${String.fromCharCode(u + 32)}:${a.substr(2)}`);
    }
    i += n(a, !0, !1);
  }
  return l && (i += "?", i += n(l, !1, !1)), o && (i += "#", i += t ? o : Jr(o, !1, !1)), i;
}
function Ul(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + Ul(e.substr(3)) : e;
  }
}
const Zr = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Dn(e) {
  return e.match(Zr) ? e.replace(Zr, (t) => Ul(t)) : e;
}
var wt;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(wt || (wt = {}));
class Be extends X {
  constructor(t, n, i, r) {
    super(t, n, i, r), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = i, this.positionColumn = r;
  }
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  equalsSelection(t) {
    return Be.selectionsEqual(this, t);
  }
  static selectionsEqual(t, n) {
    return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
  }
  getDirection() {
    return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? wt.LTR : wt.RTL;
  }
  setEndPosition(t, n) {
    return this.getDirection() === wt.LTR ? new Be(this.startLineNumber, this.startColumn, t, n) : new Be(t, n, this.startLineNumber, this.startColumn);
  }
  getPosition() {
    return new te(this.positionLineNumber, this.positionColumn);
  }
  getSelectionStart() {
    return new te(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  setStartPosition(t, n) {
    return this.getDirection() === wt.LTR ? new Be(t, n, this.endLineNumber, this.endColumn) : new Be(this.endLineNumber, this.endColumn, t, n);
  }
  static fromPositions(t, n = t) {
    return new Be(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static fromRange(t, n) {
    return n === wt.LTR ? new Be(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : new Be(
      t.endLineNumber,
      t.endColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  static liftSelection(t) {
    return new Be(
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
    return s === wt.LTR ? new Be(t, n, i, r) : new Be(i, r, t, n);
  }
}
const Kr = /* @__PURE__ */ Object.create(null);
function h(e, t) {
  if (Au(t)) {
    const n = Kr[t];
    if (n === void 0)
      throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return Kr[e] = t, { id: e };
}
const Zc = {
  add: h("add", 6e4),
  plus: h("plus", 6e4),
  gistNew: h("gist-new", 6e4),
  repoCreate: h("repo-create", 6e4),
  lightbulb: h("lightbulb", 60001),
  lightBulb: h("light-bulb", 60001),
  repo: h("repo", 60002),
  repoDelete: h("repo-delete", 60002),
  gistFork: h("gist-fork", 60003),
  repoForked: h("repo-forked", 60003),
  gitPullRequest: h("git-pull-request", 60004),
  gitPullRequestAbandoned: h("git-pull-request-abandoned", 60004),
  recordKeys: h("record-keys", 60005),
  keyboard: h("keyboard", 60005),
  tag: h("tag", 60006),
  gitPullRequestLabel: h("git-pull-request-label", 60006),
  tagAdd: h("tag-add", 60006),
  tagRemove: h("tag-remove", 60006),
  person: h("person", 60007),
  personFollow: h("person-follow", 60007),
  personOutline: h("person-outline", 60007),
  personFilled: h("person-filled", 60007),
  gitBranch: h("git-branch", 60008),
  gitBranchCreate: h("git-branch-create", 60008),
  gitBranchDelete: h("git-branch-delete", 60008),
  sourceControl: h("source-control", 60008),
  mirror: h("mirror", 60009),
  mirrorPublic: h("mirror-public", 60009),
  star: h("star", 60010),
  starAdd: h("star-add", 60010),
  starDelete: h("star-delete", 60010),
  starEmpty: h("star-empty", 60010),
  comment: h("comment", 60011),
  commentAdd: h("comment-add", 60011),
  alert: h("alert", 60012),
  warning: h("warning", 60012),
  search: h("search", 60013),
  searchSave: h("search-save", 60013),
  logOut: h("log-out", 60014),
  signOut: h("sign-out", 60014),
  logIn: h("log-in", 60015),
  signIn: h("sign-in", 60015),
  eye: h("eye", 60016),
  eyeUnwatch: h("eye-unwatch", 60016),
  eyeWatch: h("eye-watch", 60016),
  circleFilled: h("circle-filled", 60017),
  primitiveDot: h("primitive-dot", 60017),
  closeDirty: h("close-dirty", 60017),
  debugBreakpoint: h("debug-breakpoint", 60017),
  debugBreakpointDisabled: h("debug-breakpoint-disabled", 60017),
  debugHint: h("debug-hint", 60017),
  terminalDecorationSuccess: h("terminal-decoration-success", 60017),
  primitiveSquare: h("primitive-square", 60018),
  edit: h("edit", 60019),
  pencil: h("pencil", 60019),
  info: h("info", 60020),
  issueOpened: h("issue-opened", 60020),
  gistPrivate: h("gist-private", 60021),
  gitForkPrivate: h("git-fork-private", 60021),
  lock: h("lock", 60021),
  mirrorPrivate: h("mirror-private", 60021),
  close: h("close", 60022),
  removeClose: h("remove-close", 60022),
  x: h("x", 60022),
  repoSync: h("repo-sync", 60023),
  sync: h("sync", 60023),
  clone: h("clone", 60024),
  desktopDownload: h("desktop-download", 60024),
  beaker: h("beaker", 60025),
  microscope: h("microscope", 60025),
  vm: h("vm", 60026),
  deviceDesktop: h("device-desktop", 60026),
  file: h("file", 60027),
  fileText: h("file-text", 60027),
  more: h("more", 60028),
  ellipsis: h("ellipsis", 60028),
  kebabHorizontal: h("kebab-horizontal", 60028),
  mailReply: h("mail-reply", 60029),
  reply: h("reply", 60029),
  organization: h("organization", 60030),
  organizationFilled: h("organization-filled", 60030),
  organizationOutline: h("organization-outline", 60030),
  newFile: h("new-file", 60031),
  fileAdd: h("file-add", 60031),
  newFolder: h("new-folder", 60032),
  fileDirectoryCreate: h("file-directory-create", 60032),
  trash: h("trash", 60033),
  trashcan: h("trashcan", 60033),
  history: h("history", 60034),
  clock: h("clock", 60034),
  folder: h("folder", 60035),
  fileDirectory: h("file-directory", 60035),
  symbolFolder: h("symbol-folder", 60035),
  logoGithub: h("logo-github", 60036),
  markGithub: h("mark-github", 60036),
  github: h("github", 60036),
  terminal: h("terminal", 60037),
  console: h("console", 60037),
  repl: h("repl", 60037),
  zap: h("zap", 60038),
  symbolEvent: h("symbol-event", 60038),
  error: h("error", 60039),
  stop: h("stop", 60039),
  variable: h("variable", 60040),
  symbolVariable: h("symbol-variable", 60040),
  array: h("array", 60042),
  symbolArray: h("symbol-array", 60042),
  symbolModule: h("symbol-module", 60043),
  symbolPackage: h("symbol-package", 60043),
  symbolNamespace: h("symbol-namespace", 60043),
  symbolObject: h("symbol-object", 60043),
  symbolMethod: h("symbol-method", 60044),
  symbolFunction: h("symbol-function", 60044),
  symbolConstructor: h("symbol-constructor", 60044),
  symbolBoolean: h("symbol-boolean", 60047),
  symbolNull: h("symbol-null", 60047),
  symbolNumeric: h("symbol-numeric", 60048),
  symbolNumber: h("symbol-number", 60048),
  symbolStructure: h("symbol-structure", 60049),
  symbolStruct: h("symbol-struct", 60049),
  symbolParameter: h("symbol-parameter", 60050),
  symbolTypeParameter: h("symbol-type-parameter", 60050),
  symbolKey: h("symbol-key", 60051),
  symbolText: h("symbol-text", 60051),
  symbolReference: h("symbol-reference", 60052),
  goToFile: h("go-to-file", 60052),
  symbolEnum: h("symbol-enum", 60053),
  symbolValue: h("symbol-value", 60053),
  symbolRuler: h("symbol-ruler", 60054),
  symbolUnit: h("symbol-unit", 60054),
  activateBreakpoints: h("activate-breakpoints", 60055),
  archive: h("archive", 60056),
  arrowBoth: h("arrow-both", 60057),
  arrowDown: h("arrow-down", 60058),
  arrowLeft: h("arrow-left", 60059),
  arrowRight: h("arrow-right", 60060),
  arrowSmallDown: h("arrow-small-down", 60061),
  arrowSmallLeft: h("arrow-small-left", 60062),
  arrowSmallRight: h("arrow-small-right", 60063),
  arrowSmallUp: h("arrow-small-up", 60064),
  arrowUp: h("arrow-up", 60065),
  bell: h("bell", 60066),
  bold: h("bold", 60067),
  book: h("book", 60068),
  bookmark: h("bookmark", 60069),
  debugBreakpointConditionalUnverified: h("debug-breakpoint-conditional-unverified", 60070),
  debugBreakpointConditional: h("debug-breakpoint-conditional", 60071),
  debugBreakpointConditionalDisabled: h("debug-breakpoint-conditional-disabled", 60071),
  debugBreakpointDataUnverified: h("debug-breakpoint-data-unverified", 60072),
  debugBreakpointData: h("debug-breakpoint-data", 60073),
  debugBreakpointDataDisabled: h("debug-breakpoint-data-disabled", 60073),
  debugBreakpointLogUnverified: h("debug-breakpoint-log-unverified", 60074),
  debugBreakpointLog: h("debug-breakpoint-log", 60075),
  debugBreakpointLogDisabled: h("debug-breakpoint-log-disabled", 60075),
  briefcase: h("briefcase", 60076),
  broadcast: h("broadcast", 60077),
  browser: h("browser", 60078),
  bug: h("bug", 60079),
  calendar: h("calendar", 60080),
  caseSensitive: h("case-sensitive", 60081),
  check: h("check", 60082),
  checklist: h("checklist", 60083),
  chevronDown: h("chevron-down", 60084),
  chevronLeft: h("chevron-left", 60085),
  chevronRight: h("chevron-right", 60086),
  chevronUp: h("chevron-up", 60087),
  chromeClose: h("chrome-close", 60088),
  chromeMaximize: h("chrome-maximize", 60089),
  chromeMinimize: h("chrome-minimize", 60090),
  chromeRestore: h("chrome-restore", 60091),
  circleOutline: h("circle-outline", 60092),
  circle: h("circle", 60092),
  debugBreakpointUnverified: h("debug-breakpoint-unverified", 60092),
  terminalDecorationIncomplete: h("terminal-decoration-incomplete", 60092),
  circleSlash: h("circle-slash", 60093),
  circuitBoard: h("circuit-board", 60094),
  clearAll: h("clear-all", 60095),
  clippy: h("clippy", 60096),
  closeAll: h("close-all", 60097),
  cloudDownload: h("cloud-download", 60098),
  cloudUpload: h("cloud-upload", 60099),
  code: h("code", 60100),
  collapseAll: h("collapse-all", 60101),
  colorMode: h("color-mode", 60102),
  commentDiscussion: h("comment-discussion", 60103),
  creditCard: h("credit-card", 60105),
  dash: h("dash", 60108),
  dashboard: h("dashboard", 60109),
  database: h("database", 60110),
  debugContinue: h("debug-continue", 60111),
  debugDisconnect: h("debug-disconnect", 60112),
  debugPause: h("debug-pause", 60113),
  debugRestart: h("debug-restart", 60114),
  debugStart: h("debug-start", 60115),
  debugStepInto: h("debug-step-into", 60116),
  debugStepOut: h("debug-step-out", 60117),
  debugStepOver: h("debug-step-over", 60118),
  debugStop: h("debug-stop", 60119),
  debug: h("debug", 60120),
  deviceCameraVideo: h("device-camera-video", 60121),
  deviceCamera: h("device-camera", 60122),
  deviceMobile: h("device-mobile", 60123),
  diffAdded: h("diff-added", 60124),
  diffIgnored: h("diff-ignored", 60125),
  diffModified: h("diff-modified", 60126),
  diffRemoved: h("diff-removed", 60127),
  diffRenamed: h("diff-renamed", 60128),
  diff: h("diff", 60129),
  diffSidebyside: h("diff-sidebyside", 60129),
  discard: h("discard", 60130),
  editorLayout: h("editor-layout", 60131),
  emptyWindow: h("empty-window", 60132),
  exclude: h("exclude", 60133),
  extensions: h("extensions", 60134),
  eyeClosed: h("eye-closed", 60135),
  fileBinary: h("file-binary", 60136),
  fileCode: h("file-code", 60137),
  fileMedia: h("file-media", 60138),
  filePdf: h("file-pdf", 60139),
  fileSubmodule: h("file-submodule", 60140),
  fileSymlinkDirectory: h("file-symlink-directory", 60141),
  fileSymlinkFile: h("file-symlink-file", 60142),
  fileZip: h("file-zip", 60143),
  files: h("files", 60144),
  filter: h("filter", 60145),
  flame: h("flame", 60146),
  foldDown: h("fold-down", 60147),
  foldUp: h("fold-up", 60148),
  fold: h("fold", 60149),
  folderActive: h("folder-active", 60150),
  folderOpened: h("folder-opened", 60151),
  gear: h("gear", 60152),
  gift: h("gift", 60153),
  gistSecret: h("gist-secret", 60154),
  gist: h("gist", 60155),
  gitCommit: h("git-commit", 60156),
  gitCompare: h("git-compare", 60157),
  compareChanges: h("compare-changes", 60157),
  gitMerge: h("git-merge", 60158),
  githubAction: h("github-action", 60159),
  githubAlt: h("github-alt", 60160),
  globe: h("globe", 60161),
  grabber: h("grabber", 60162),
  graph: h("graph", 60163),
  gripper: h("gripper", 60164),
  heart: h("heart", 60165),
  home: h("home", 60166),
  horizontalRule: h("horizontal-rule", 60167),
  hubot: h("hubot", 60168),
  inbox: h("inbox", 60169),
  issueReopened: h("issue-reopened", 60171),
  issues: h("issues", 60172),
  italic: h("italic", 60173),
  jersey: h("jersey", 60174),
  json: h("json", 60175),
  kebabVertical: h("kebab-vertical", 60176),
  key: h("key", 60177),
  law: h("law", 60178),
  lightbulbAutofix: h("lightbulb-autofix", 60179),
  linkExternal: h("link-external", 60180),
  link: h("link", 60181),
  listOrdered: h("list-ordered", 60182),
  listUnordered: h("list-unordered", 60183),
  liveShare: h("live-share", 60184),
  loading: h("loading", 60185),
  location: h("location", 60186),
  mailRead: h("mail-read", 60187),
  mail: h("mail", 60188),
  markdown: h("markdown", 60189),
  megaphone: h("megaphone", 60190),
  mention: h("mention", 60191),
  milestone: h("milestone", 60192),
  gitPullRequestMilestone: h("git-pull-request-milestone", 60192),
  mortarBoard: h("mortar-board", 60193),
  move: h("move", 60194),
  multipleWindows: h("multiple-windows", 60195),
  mute: h("mute", 60196),
  noNewline: h("no-newline", 60197),
  note: h("note", 60198),
  octoface: h("octoface", 60199),
  openPreview: h("open-preview", 60200),
  package: h("package", 60201),
  paintcan: h("paintcan", 60202),
  pin: h("pin", 60203),
  play: h("play", 60204),
  run: h("run", 60204),
  plug: h("plug", 60205),
  preserveCase: h("preserve-case", 60206),
  preview: h("preview", 60207),
  project: h("project", 60208),
  pulse: h("pulse", 60209),
  question: h("question", 60210),
  quote: h("quote", 60211),
  radioTower: h("radio-tower", 60212),
  reactions: h("reactions", 60213),
  references: h("references", 60214),
  refresh: h("refresh", 60215),
  regex: h("regex", 60216),
  remoteExplorer: h("remote-explorer", 60217),
  remote: h("remote", 60218),
  remove: h("remove", 60219),
  replaceAll: h("replace-all", 60220),
  replace: h("replace", 60221),
  repoClone: h("repo-clone", 60222),
  repoForcePush: h("repo-force-push", 60223),
  repoPull: h("repo-pull", 60224),
  repoPush: h("repo-push", 60225),
  report: h("report", 60226),
  requestChanges: h("request-changes", 60227),
  rocket: h("rocket", 60228),
  rootFolderOpened: h("root-folder-opened", 60229),
  rootFolder: h("root-folder", 60230),
  rss: h("rss", 60231),
  ruby: h("ruby", 60232),
  saveAll: h("save-all", 60233),
  saveAs: h("save-as", 60234),
  save: h("save", 60235),
  screenFull: h("screen-full", 60236),
  screenNormal: h("screen-normal", 60237),
  searchStop: h("search-stop", 60238),
  server: h("server", 60240),
  settingsGear: h("settings-gear", 60241),
  settings: h("settings", 60242),
  shield: h("shield", 60243),
  smiley: h("smiley", 60244),
  sortPrecedence: h("sort-precedence", 60245),
  splitHorizontal: h("split-horizontal", 60246),
  splitVertical: h("split-vertical", 60247),
  squirrel: h("squirrel", 60248),
  starFull: h("star-full", 60249),
  starHalf: h("star-half", 60250),
  symbolClass: h("symbol-class", 60251),
  symbolColor: h("symbol-color", 60252),
  symbolConstant: h("symbol-constant", 60253),
  symbolEnumMember: h("symbol-enum-member", 60254),
  symbolField: h("symbol-field", 60255),
  symbolFile: h("symbol-file", 60256),
  symbolInterface: h("symbol-interface", 60257),
  symbolKeyword: h("symbol-keyword", 60258),
  symbolMisc: h("symbol-misc", 60259),
  symbolOperator: h("symbol-operator", 60260),
  symbolProperty: h("symbol-property", 60261),
  wrench: h("wrench", 60261),
  wrenchSubaction: h("wrench-subaction", 60261),
  symbolSnippet: h("symbol-snippet", 60262),
  tasklist: h("tasklist", 60263),
  telescope: h("telescope", 60264),
  textSize: h("text-size", 60265),
  threeBars: h("three-bars", 60266),
  thumbsdown: h("thumbsdown", 60267),
  thumbsup: h("thumbsup", 60268),
  tools: h("tools", 60269),
  triangleDown: h("triangle-down", 60270),
  triangleLeft: h("triangle-left", 60271),
  triangleRight: h("triangle-right", 60272),
  triangleUp: h("triangle-up", 60273),
  twitter: h("twitter", 60274),
  unfold: h("unfold", 60275),
  unlock: h("unlock", 60276),
  unmute: h("unmute", 60277),
  unverified: h("unverified", 60278),
  verified: h("verified", 60279),
  versions: h("versions", 60280),
  vmActive: h("vm-active", 60281),
  vmOutline: h("vm-outline", 60282),
  vmRunning: h("vm-running", 60283),
  watch: h("watch", 60284),
  whitespace: h("whitespace", 60285),
  wholeWord: h("whole-word", 60286),
  window: h("window", 60287),
  wordWrap: h("word-wrap", 60288),
  zoomIn: h("zoom-in", 60289),
  zoomOut: h("zoom-out", 60290),
  listFilter: h("list-filter", 60291),
  listFlat: h("list-flat", 60292),
  listSelection: h("list-selection", 60293),
  selection: h("selection", 60293),
  listTree: h("list-tree", 60294),
  debugBreakpointFunctionUnverified: h("debug-breakpoint-function-unverified", 60295),
  debugBreakpointFunction: h("debug-breakpoint-function", 60296),
  debugBreakpointFunctionDisabled: h("debug-breakpoint-function-disabled", 60296),
  debugStackframeActive: h("debug-stackframe-active", 60297),
  circleSmallFilled: h("circle-small-filled", 60298),
  debugStackframeDot: h("debug-stackframe-dot", 60298),
  terminalDecorationMark: h("terminal-decoration-mark", 60298),
  debugStackframe: h("debug-stackframe", 60299),
  debugStackframeFocused: h("debug-stackframe-focused", 60299),
  debugBreakpointUnsupported: h("debug-breakpoint-unsupported", 60300),
  symbolString: h("symbol-string", 60301),
  debugReverseContinue: h("debug-reverse-continue", 60302),
  debugStepBack: h("debug-step-back", 60303),
  debugRestartFrame: h("debug-restart-frame", 60304),
  debugAlt: h("debug-alt", 60305),
  callIncoming: h("call-incoming", 60306),
  callOutgoing: h("call-outgoing", 60307),
  menu: h("menu", 60308),
  expandAll: h("expand-all", 60309),
  feedback: h("feedback", 60310),
  gitPullRequestReviewer: h("git-pull-request-reviewer", 60310),
  groupByRefType: h("group-by-ref-type", 60311),
  ungroupByRefType: h("ungroup-by-ref-type", 60312),
  account: h("account", 60313),
  gitPullRequestAssignee: h("git-pull-request-assignee", 60313),
  bellDot: h("bell-dot", 60314),
  debugConsole: h("debug-console", 60315),
  library: h("library", 60316),
  output: h("output", 60317),
  runAll: h("run-all", 60318),
  syncIgnored: h("sync-ignored", 60319),
  pinned: h("pinned", 60320),
  githubInverted: h("github-inverted", 60321),
  serverProcess: h("server-process", 60322),
  serverEnvironment: h("server-environment", 60323),
  pass: h("pass", 60324),
  issueClosed: h("issue-closed", 60324),
  stopCircle: h("stop-circle", 60325),
  playCircle: h("play-circle", 60326),
  record: h("record", 60327),
  debugAltSmall: h("debug-alt-small", 60328),
  vmConnect: h("vm-connect", 60329),
  cloud: h("cloud", 60330),
  merge: h("merge", 60331),
  export: h("export", 60332),
  graphLeft: h("graph-left", 60333),
  magnet: h("magnet", 60334),
  notebook: h("notebook", 60335),
  redo: h("redo", 60336),
  checkAll: h("check-all", 60337),
  pinnedDirty: h("pinned-dirty", 60338),
  passFilled: h("pass-filled", 60339),
  circleLargeFilled: h("circle-large-filled", 60340),
  circleLarge: h("circle-large", 60341),
  circleLargeOutline: h("circle-large-outline", 60341),
  combine: h("combine", 60342),
  gather: h("gather", 60342),
  table: h("table", 60343),
  variableGroup: h("variable-group", 60344),
  typeHierarchy: h("type-hierarchy", 60345),
  typeHierarchySub: h("type-hierarchy-sub", 60346),
  typeHierarchySuper: h("type-hierarchy-super", 60347),
  gitPullRequestCreate: h("git-pull-request-create", 60348),
  runAbove: h("run-above", 60349),
  runBelow: h("run-below", 60350),
  notebookTemplate: h("notebook-template", 60351),
  debugRerun: h("debug-rerun", 60352),
  workspaceTrusted: h("workspace-trusted", 60353),
  workspaceUntrusted: h("workspace-untrusted", 60354),
  workspaceUnknown: h("workspace-unknown", 60355),
  terminalCmd: h("terminal-cmd", 60356),
  terminalDebian: h("terminal-debian", 60357),
  terminalLinux: h("terminal-linux", 60358),
  terminalPowershell: h("terminal-powershell", 60359),
  terminalTmux: h("terminal-tmux", 60360),
  terminalUbuntu: h("terminal-ubuntu", 60361),
  terminalBash: h("terminal-bash", 60362),
  arrowSwap: h("arrow-swap", 60363),
  copy: h("copy", 60364),
  personAdd: h("person-add", 60365),
  filterFilled: h("filter-filled", 60366),
  wand: h("wand", 60367),
  debugLineByLine: h("debug-line-by-line", 60368),
  inspect: h("inspect", 60369),
  layers: h("layers", 60370),
  layersDot: h("layers-dot", 60371),
  layersActive: h("layers-active", 60372),
  compass: h("compass", 60373),
  compassDot: h("compass-dot", 60374),
  compassActive: h("compass-active", 60375),
  azure: h("azure", 60376),
  issueDraft: h("issue-draft", 60377),
  gitPullRequestClosed: h("git-pull-request-closed", 60378),
  gitPullRequestDraft: h("git-pull-request-draft", 60379),
  debugAll: h("debug-all", 60380),
  debugCoverage: h("debug-coverage", 60381),
  runErrors: h("run-errors", 60382),
  folderLibrary: h("folder-library", 60383),
  debugContinueSmall: h("debug-continue-small", 60384),
  beakerStop: h("beaker-stop", 60385),
  graphLine: h("graph-line", 60386),
  graphScatter: h("graph-scatter", 60387),
  pieChart: h("pie-chart", 60388),
  bracket: h("bracket", 60175),
  bracketDot: h("bracket-dot", 60389),
  bracketError: h("bracket-error", 60390),
  lockSmall: h("lock-small", 60391),
  azureDevops: h("azure-devops", 60392),
  verifiedFilled: h("verified-filled", 60393),
  newline: h("newline", 60394),
  layout: h("layout", 60395),
  layoutActivitybarLeft: h("layout-activitybar-left", 60396),
  layoutActivitybarRight: h("layout-activitybar-right", 60397),
  layoutPanelLeft: h("layout-panel-left", 60398),
  layoutPanelCenter: h("layout-panel-center", 60399),
  layoutPanelJustify: h("layout-panel-justify", 60400),
  layoutPanelRight: h("layout-panel-right", 60401),
  layoutPanel: h("layout-panel", 60402),
  layoutSidebarLeft: h("layout-sidebar-left", 60403),
  layoutSidebarRight: h("layout-sidebar-right", 60404),
  layoutStatusbar: h("layout-statusbar", 60405),
  layoutMenubar: h("layout-menubar", 60406),
  layoutCentered: h("layout-centered", 60407),
  target: h("target", 60408),
  indent: h("indent", 60409),
  recordSmall: h("record-small", 60410),
  errorSmall: h("error-small", 60411),
  terminalDecorationError: h("terminal-decoration-error", 60411),
  arrowCircleDown: h("arrow-circle-down", 60412),
  arrowCircleLeft: h("arrow-circle-left", 60413),
  arrowCircleRight: h("arrow-circle-right", 60414),
  arrowCircleUp: h("arrow-circle-up", 60415),
  layoutSidebarRightOff: h("layout-sidebar-right-off", 60416),
  layoutPanelOff: h("layout-panel-off", 60417),
  layoutSidebarLeftOff: h("layout-sidebar-left-off", 60418),
  blank: h("blank", 60419),
  heartFilled: h("heart-filled", 60420),
  map: h("map", 60421),
  mapHorizontal: h("map-horizontal", 60421),
  foldHorizontal: h("fold-horizontal", 60421),
  mapFilled: h("map-filled", 60422),
  mapHorizontalFilled: h("map-horizontal-filled", 60422),
  foldHorizontalFilled: h("fold-horizontal-filled", 60422),
  circleSmall: h("circle-small", 60423),
  bellSlash: h("bell-slash", 60424),
  bellSlashDot: h("bell-slash-dot", 60425),
  commentUnresolved: h("comment-unresolved", 60426),
  gitPullRequestGoToChanges: h("git-pull-request-go-to-changes", 60427),
  gitPullRequestNewChanges: h("git-pull-request-new-changes", 60428),
  searchFuzzy: h("search-fuzzy", 60429),
  commentDraft: h("comment-draft", 60430),
  send: h("send", 60431),
  sparkle: h("sparkle", 60432),
  insert: h("insert", 60433),
  mic: h("mic", 60434),
  thumbsdownFilled: h("thumbsdown-filled", 60435),
  thumbsupFilled: h("thumbsup-filled", 60436),
  coffee: h("coffee", 60437),
  snake: h("snake", 60438),
  game: h("game", 60439),
  vr: h("vr", 60440),
  chip: h("chip", 60441),
  piano: h("piano", 60442),
  music: h("music", 60443),
  micFilled: h("mic-filled", 60444),
  repoFetch: h("repo-fetch", 60445),
  copilot: h("copilot", 60446),
  lightbulbSparkle: h("lightbulb-sparkle", 60447),
  robot: h("robot", 60448),
  sparkleFilled: h("sparkle-filled", 60449),
  diffSingle: h("diff-single", 60450),
  diffMultiple: h("diff-multiple", 60451),
  surroundWith: h("surround-with", 60452),
  share: h("share", 60453),
  gitStash: h("git-stash", 60454),
  gitStashApply: h("git-stash-apply", 60455),
  gitStashPop: h("git-stash-pop", 60456),
  vscode: h("vscode", 60457),
  vscodeInsiders: h("vscode-insiders", 60458),
  codeOss: h("code-oss", 60459),
  runCoverage: h("run-coverage", 60460),
  runAllCoverage: h("run-all-coverage", 60461),
  coverage: h("coverage", 60462),
  githubProject: h("github-project", 60463),
  mapVertical: h("map-vertical", 60464),
  foldVertical: h("fold-vertical", 60464),
  mapVerticalFilled: h("map-vertical-filled", 60465),
  foldVerticalFilled: h("fold-vertical-filled", 60465),
  goToSearch: h("go-to-search", 60466),
  percentage: h("percentage", 60467),
  sortPercentage: h("sort-percentage", 60467),
  attach: h("attach", 60468),
  goToEditingSession: h("go-to-editing-session", 60469),
  editSession: h("edit-session", 60470),
  codeReview: h("code-review", 60471),
  copilotWarning: h("copilot-warning", 60472),
  python: h("python", 60473),
  copilotLarge: h("copilot-large", 60474),
  copilotWarningLarge: h("copilot-warning-large", 60475),
  keyboardTab: h("keyboard-tab", 60476),
  copilotBlocked: h("copilot-blocked", 60477),
  copilotNotConnected: h("copilot-not-connected", 60478),
  flag: h("flag", 60479),
  lightbulbEmpty: h("lightbulb-empty", 60480),
  symbolMethodArrow: h("symbol-method-arrow", 60481),
  copilotUnavailable: h("copilot-unavailable", 60482),
  repoPinned: h("repo-pinned", 60483),
  keyboardTabAbove: h("keyboard-tab-above", 60484),
  keyboardTabBelow: h("keyboard-tab-below", 60485),
  gitPullRequestDone: h("git-pull-request-done", 60486),
  mcp: h("mcp", 60487),
  extensionsLarge: h("extensions-large", 60488),
  layoutPanelDock: h("layout-panel-dock", 60489),
  layoutSidebarLeftDock: h("layout-sidebar-left-dock", 60490),
  layoutSidebarRightDock: h("layout-sidebar-right-dock", 60491),
  copilotInProgress: h("copilot-in-progress", 60492),
  copilotError: h("copilot-error", 60493),
  copilotSuccess: h("copilot-success", 60494),
  chatSparkle: h("chat-sparkle", 60495),
  searchSparkle: h("search-sparkle", 60496),
  editSparkle: h("edit-sparkle", 60497),
  copilotSnooze: h("copilot-snooze", 60498),
  sendToRemoteAgent: h("send-to-remote-agent", 60499)
}, Kc = {
  dialogError: h("dialog-error", "error"),
  dialogWarning: h("dialog-warning", "warning"),
  dialogInfo: h("dialog-info", "info"),
  dialogClose: h("dialog-close", "close"),
  treeItemExpanded: h("tree-item-expanded", "chevron-down"),
  treeFilterOnTypeOn: h("tree-filter-on-type-on", "list-filter"),
  treeFilterOnTypeOff: h("tree-filter-on-type-off", "list-selection"),
  treeFilterClear: h("tree-filter-clear", "close"),
  treeItemLoading: h("tree-item-loading", "loading"),
  menuSelection: h("menu-selection", "check"),
  menuSubmenu: h("menu-submenu", "chevron-right"),
  menuBarMore: h("menubar-more", "more"),
  scrollbarButtonLeft: h("scrollbar-button-left", "triangle-left"),
  scrollbarButtonRight: h("scrollbar-button-right", "triangle-right"),
  scrollbarButtonUp: h("scrollbar-button-up", "triangle-up"),
  scrollbarButtonDown: h("scrollbar-button-down", "triangle-down"),
  toolBarMore: h("toolbar-more", "more"),
  quickInputBack: h("quick-input-back", "arrow-left"),
  dropDownButton: h("drop-down-button", 60084),
  symbolCustomColor: h("symbol-customcolor", 60252),
  exportIcon: h("export", 60332),
  workspaceUnspecified: h("workspace-unspecified", 60355),
  newLine: h("newline", 60394),
  thumbsDownFilled: h("thumbsdown-filled", 60435),
  thumbsUpFilled: h("thumbsup-filled", 60436),
  gitFetch: h("git-fetch", 60445),
  lightbulbSparkleAutofix: h("lightbulb-sparkle-autofix", 60447),
  debugBreakpointPending: h("debug-breakpoint-pending", 60377)
}, $ = {
  ...Zc,
  ...Kc
};
var es;
(function(e) {
  e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(es || (es = {}));
var ts;
(function(e) {
  e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(ts || (ts = {}));
var Kn;
(function(e) {
  e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(Kn || (Kn = {}));
var ns;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(ns || (ns = {}));
var is;
(function(e) {
  e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(is || (is = {}));
class eh {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new ze(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(t) {
    this._onDidChange.fire({
      changedLanguages: t,
      changedColorMap: !1
    });
  }
  register(t, n) {
    return this._tokenizationSupports.set(t, n), this.handleChange([t]), Tn(() => {
      this._tokenizationSupports.get(t) === n && (this._tokenizationSupports.delete(t), this.handleChange([t]));
    });
  }
  get(t) {
    return this._tokenizationSupports.get(t) || null;
  }
  registerFactory(t, n) {
    var r;
    (r = this._factories.get(t)) == null || r.dispose();
    const i = new th(this, t, n);
    return this._factories.set(t, i), Tn(() => {
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
    return this._colorMap && this._colorMap.length > Kn.DefaultBackground ? this._colorMap[Kn.DefaultBackground] : null;
  }
}
class th extends en {
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
class nh {
  constructor(t, n, i) {
    this.offset = t, this.type = n, this.language = i, this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
}
var rs;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(rs || (rs = {}));
var B;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(B || (B = {}));
var ss;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(B.Method, $.symbolMethod), t.set(B.Function, $.symbolFunction), t.set(B.Constructor, $.symbolConstructor), t.set(B.Field, $.symbolField), t.set(B.Variable, $.symbolVariable), t.set(B.Class, $.symbolClass), t.set(B.Struct, $.symbolStruct), t.set(B.Interface, $.symbolInterface), t.set(B.Module, $.symbolModule), t.set(B.Property, $.symbolProperty), t.set(B.Event, $.symbolEvent), t.set(B.Operator, $.symbolOperator), t.set(B.Unit, $.symbolUnit), t.set(B.Value, $.symbolValue), t.set(B.Enum, $.symbolEnum), t.set(B.Constant, $.symbolConstant), t.set(B.Enum, $.symbolEnum), t.set(B.EnumMember, $.symbolEnumMember), t.set(B.Keyword, $.symbolKeyword), t.set(B.Snippet, $.symbolSnippet), t.set(B.Text, $.symbolText), t.set(B.Color, $.symbolColor), t.set(B.File, $.symbolFile), t.set(B.Reference, $.symbolReference), t.set(B.Customcolor, $.symbolCustomColor), t.set(B.Folder, $.symbolFolder), t.set(B.TypeParameter, $.symbolTypeParameter), t.set(B.User, $.account), t.set(B.Issue, $.issues), t.set(B.Tool, $.tools);
  function n(a) {
    let l = t.get(a);
    return l || (console.info("No codicon found for CompletionItemKind " + a), l = $.symbolProperty), l;
  }
  e.toIcon = n;
  function i(a) {
    switch (a) {
      case B.Method:
        return Q(786, "Method");
      case B.Function:
        return Q(787, "Function");
      case B.Constructor:
        return Q(788, "Constructor");
      case B.Field:
        return Q(789, "Field");
      case B.Variable:
        return Q(790, "Variable");
      case B.Class:
        return Q(791, "Class");
      case B.Struct:
        return Q(792, "Struct");
      case B.Interface:
        return Q(793, "Interface");
      case B.Module:
        return Q(794, "Module");
      case B.Property:
        return Q(795, "Property");
      case B.Event:
        return Q(796, "Event");
      case B.Operator:
        return Q(797, "Operator");
      case B.Unit:
        return Q(798, "Unit");
      case B.Value:
        return Q(799, "Value");
      case B.Constant:
        return Q(800, "Constant");
      case B.Enum:
        return Q(801, "Enum");
      case B.EnumMember:
        return Q(802, "Enum Member");
      case B.Keyword:
        return Q(803, "Keyword");
      case B.Text:
        return Q(804, "Text");
      case B.Color:
        return Q(805, "Color");
      case B.File:
        return Q(806, "File");
      case B.Reference:
        return Q(807, "Reference");
      case B.Customcolor:
        return Q(808, "Custom Color");
      case B.Folder:
        return Q(809, "Folder");
      case B.TypeParameter:
        return Q(810, "Type Parameter");
      case B.User:
        return Q(811, "User");
      case B.Issue:
        return Q(812, "Issue");
      case B.Tool:
        return Q(813, "Tool");
      case B.Snippet:
        return Q(814, "Snippet");
      default:
        return "";
    }
  }
  e.toLabel = i;
  const r = /* @__PURE__ */ new Map();
  r.set("method", B.Method), r.set("function", B.Function), r.set("constructor", B.Constructor), r.set("field", B.Field), r.set("variable", B.Variable), r.set("class", B.Class), r.set("struct", B.Struct), r.set("interface", B.Interface), r.set("module", B.Module), r.set("property", B.Property), r.set("event", B.Event), r.set("operator", B.Operator), r.set("unit", B.Unit), r.set("value", B.Value), r.set("constant", B.Constant), r.set("enum", B.Enum), r.set("enum-member", B.EnumMember), r.set("enumMember", B.EnumMember), r.set("keyword", B.Keyword), r.set("snippet", B.Snippet), r.set("text", B.Text), r.set("color", B.Color), r.set("file", B.File), r.set("reference", B.Reference), r.set("customcolor", B.Customcolor), r.set("folder", B.Folder), r.set("type-parameter", B.TypeParameter), r.set("typeParameter", B.TypeParameter), r.set("account", B.User), r.set("issue", B.Issue), r.set("tool", B.Tool);
  function s(a, l) {
    let o = r.get(a);
    return typeof o > "u" && !l && (o = B.Property), o;
  }
  e.fromString = s;
})(ss || (ss = {}));
var as;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(as || (as = {}));
var os;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(os || (os = {}));
var ls;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(ls || (ls = {}));
var us;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(us || (us = {}));
var cs;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(cs || (cs = {}));
var hs;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(hs || (hs = {}));
var ds;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(ds || (ds = {}));
var ms;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(ms || (ms = {}));
var fs;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(fs || (fs = {}));
var ps;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(ps || (ps = {}));
var G;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(G || (G = {}));
G.Array + "", Q(815, "array"), G.Boolean + "", Q(816, "boolean"), G.Class + "", Q(817, "class"), G.Constant + "", Q(818, "constant"), G.Constructor + "", Q(819, "constructor"), G.Enum + "", Q(820, "enumeration"), G.EnumMember + "", Q(821, "enumeration member"), G.Event + "", Q(822, "event"), G.Field + "", Q(823, "field"), G.File + "", Q(824, "file"), G.Function + "", Q(825, "function"), G.Interface + "", Q(826, "interface"), G.Key + "", Q(827, "key"), G.Method + "", Q(828, "method"), G.Module + "", Q(829, "module"), G.Namespace + "", Q(830, "namespace"), G.Null + "", Q(831, "null"), G.Number + "", Q(832, "number"), G.Object + "", Q(833, "object"), G.Operator + "", Q(834, "operator"), G.Package + "", Q(835, "package"), G.Property + "", Q(836, "property"), G.String + "", Q(837, "string"), G.Struct + "", Q(838, "struct"), G.TypeParameter + "", Q(839, "type parameter"), G.Variable + "", Q(840, "variable");
var gs;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(gs || (gs = {}));
var bs;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(G.File, $.symbolFile), t.set(G.Module, $.symbolModule), t.set(G.Namespace, $.symbolNamespace), t.set(G.Package, $.symbolPackage), t.set(G.Class, $.symbolClass), t.set(G.Method, $.symbolMethod), t.set(G.Property, $.symbolProperty), t.set(G.Field, $.symbolField), t.set(G.Constructor, $.symbolConstructor), t.set(G.Enum, $.symbolEnum), t.set(G.Interface, $.symbolInterface), t.set(G.Function, $.symbolFunction), t.set(G.Variable, $.symbolVariable), t.set(G.Constant, $.symbolConstant), t.set(G.String, $.symbolString), t.set(G.Number, $.symbolNumber), t.set(G.Boolean, $.symbolBoolean), t.set(G.Array, $.symbolArray), t.set(G.Object, $.symbolObject), t.set(G.Key, $.symbolKey), t.set(G.Null, $.symbolNull), t.set(G.EnumMember, $.symbolEnumMember), t.set(G.Struct, $.symbolStruct), t.set(G.Event, $.symbolEvent), t.set(G.Operator, $.symbolOperator), t.set(G.TypeParameter, $.symbolTypeParameter);
  function n(s) {
    let a = t.get(s);
    return a || (console.info("No codicon found for SymbolKind " + s), a = $.symbolProperty), a;
  }
  e.toIcon = n;
  const i = /* @__PURE__ */ new Map();
  i.set(G.File, B.File), i.set(G.Module, B.Module), i.set(G.Namespace, B.Module), i.set(G.Package, B.Module), i.set(G.Class, B.Class), i.set(G.Method, B.Method), i.set(G.Property, B.Property), i.set(G.Field, B.Field), i.set(G.Constructor, B.Constructor), i.set(G.Enum, B.Enum), i.set(G.Interface, B.Interface), i.set(G.Function, B.Function), i.set(G.Variable, B.Variable), i.set(G.Constant, B.Constant), i.set(G.String, B.Text), i.set(G.Number, B.Value), i.set(G.Boolean, B.Value), i.set(G.Array, B.Value), i.set(G.Object, B.Value), i.set(G.Key, B.Keyword), i.set(G.Null, B.Value), i.set(G.EnumMember, B.EnumMember), i.set(G.Struct, B.Struct), i.set(G.Event, B.Event), i.set(G.Operator, B.Operator), i.set(G.TypeParameter, B.TypeParameter);
  function r(s) {
    let a = i.get(s);
    return a === void 0 && (console.info("No completion kind found for SymbolKind " + s), a = B.File), a;
  }
  e.toCompletionKind = r;
})(bs || (bs = {}));
var Se;
let km = (Se = class {
  static fromValue(t) {
    switch (t) {
      case "comment":
        return Se.Comment;
      case "imports":
        return Se.Imports;
      case "region":
        return Se.Region;
    }
    return new Se(t);
  }
  constructor(t) {
    this.value = t;
  }
}, Se.Comment = new Se("comment"), Se.Imports = new Se("imports"), Se.Region = new Se("region"), Se);
var _s;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(_s || (_s = {}));
var ws;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(ws || (ws = {}));
var vs;
(function(e) {
  function t(n) {
    return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(vs || (vs = {}));
var ys;
(function(e) {
  e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(ys || (ys = {}));
var Ts;
(function(e) {
  e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(Ts || (Ts = {}));
var xs;
(function(e) {
  e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(xs || (xs = {}));
var As;
(function(e) {
  e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(As || (As = {}));
var Ls;
(function(e) {
  e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(Ls || (Ls = {}));
var ks;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(ks || (ks = {}));
new eh();
var Es;
(function(e) {
  e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(Es || (Es = {}));
var Rs;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(Rs || (Rs = {}));
var Ss;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Ss || (Ss = {}));
var Ns;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Ns || (Ns = {}));
var Ms;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(Ms || (Ms = {}));
var Ds;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Ds || (Ds = {}));
var Us;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Us || (Us = {}));
var Is;
(function(e) {
  e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(Is || (Is = {}));
var Fs;
(function(e) {
  e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})(Fs || (Fs = {}));
var Ps;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Ps || (Ps = {}));
var Bs;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Bs || (Bs = {}));
var Hs;
(function(e) {
  e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(Hs || (Hs = {}));
var Os;
(function(e) {
  e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowOverflow = 4] = "allowOverflow", e[e.allowVariableLineHeights = 5] = "allowVariableLineHeights", e[e.allowVariableFonts = 6] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 7] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 8] = "ariaLabel", e[e.ariaRequired = 9] = "ariaRequired", e[e.autoClosingBrackets = 10] = "autoClosingBrackets", e[e.autoClosingComments = 11] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 12] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 13] = "autoClosingDelete", e[e.autoClosingOvertype = 14] = "autoClosingOvertype", e[e.autoClosingQuotes = 15] = "autoClosingQuotes", e[e.autoIndent = 16] = "autoIndent", e[e.autoIndentOnPaste = 17] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 18] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 19] = "automaticLayout", e[e.autoSurround = 20] = "autoSurround", e[e.bracketPairColorization = 21] = "bracketPairColorization", e[e.guides = 22] = "guides", e[e.codeLens = 23] = "codeLens", e[e.codeLensFontFamily = 24] = "codeLensFontFamily", e[e.codeLensFontSize = 25] = "codeLensFontSize", e[e.colorDecorators = 26] = "colorDecorators", e[e.colorDecoratorsLimit = 27] = "colorDecoratorsLimit", e[e.columnSelection = 28] = "columnSelection", e[e.comments = 29] = "comments", e[e.contextmenu = 30] = "contextmenu", e[e.copyWithSyntaxHighlighting = 31] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 32] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 33] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 34] = "cursorStyle", e[e.cursorSurroundingLines = 35] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 36] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 37] = "cursorWidth", e[e.cursorHeight = 38] = "cursorHeight", e[e.disableLayerHinting = 39] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 40] = "disableMonospaceOptimizations", e[e.domReadOnly = 41] = "domReadOnly", e[e.dragAndDrop = 42] = "dragAndDrop", e[e.dropIntoEditor = 43] = "dropIntoEditor", e[e.editContext = 44] = "editContext", e[e.emptySelectionClipboard = 45] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 46] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 47] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 48] = "extraEditorClassName", e[e.fastScrollSensitivity = 49] = "fastScrollSensitivity", e[e.find = 50] = "find", e[e.fixedOverflowWidgets = 51] = "fixedOverflowWidgets", e[e.folding = 52] = "folding", e[e.foldingStrategy = 53] = "foldingStrategy", e[e.foldingHighlight = 54] = "foldingHighlight", e[e.foldingImportsByDefault = 55] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 56] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 57] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 58] = "fontFamily", e[e.fontInfo = 59] = "fontInfo", e[e.fontLigatures = 60] = "fontLigatures", e[e.fontSize = 61] = "fontSize", e[e.fontWeight = 62] = "fontWeight", e[e.fontVariations = 63] = "fontVariations", e[e.formatOnPaste = 64] = "formatOnPaste", e[e.formatOnType = 65] = "formatOnType", e[e.glyphMargin = 66] = "glyphMargin", e[e.gotoLocation = 67] = "gotoLocation", e[e.hideCursorInOverviewRuler = 68] = "hideCursorInOverviewRuler", e[e.hover = 69] = "hover", e[e.inDiffEditor = 70] = "inDiffEditor", e[e.inlineSuggest = 71] = "inlineSuggest", e[e.letterSpacing = 72] = "letterSpacing", e[e.lightbulb = 73] = "lightbulb", e[e.lineDecorationsWidth = 74] = "lineDecorationsWidth", e[e.lineHeight = 75] = "lineHeight", e[e.lineNumbers = 76] = "lineNumbers", e[e.lineNumbersMinChars = 77] = "lineNumbersMinChars", e[e.linkedEditing = 78] = "linkedEditing", e[e.links = 79] = "links", e[e.matchBrackets = 80] = "matchBrackets", e[e.minimap = 81] = "minimap", e[e.mouseStyle = 82] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 83] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 84] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 85] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 86] = "multiCursorModifier", e[e.multiCursorPaste = 87] = "multiCursorPaste", e[e.multiCursorLimit = 88] = "multiCursorLimit", e[e.occurrencesHighlight = 89] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 90] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 91] = "overtypeCursorStyle", e[e.overtypeOnPaste = 92] = "overtypeOnPaste", e[e.overviewRulerBorder = 93] = "overviewRulerBorder", e[e.overviewRulerLanes = 94] = "overviewRulerLanes", e[e.padding = 95] = "padding", e[e.pasteAs = 96] = "pasteAs", e[e.parameterHints = 97] = "parameterHints", e[e.peekWidgetDefaultFocus = 98] = "peekWidgetDefaultFocus", e[e.placeholder = 99] = "placeholder", e[e.definitionLinkOpensInPeek = 100] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 101] = "quickSuggestions", e[e.quickSuggestionsDelay = 102] = "quickSuggestionsDelay", e[e.readOnly = 103] = "readOnly", e[e.readOnlyMessage = 104] = "readOnlyMessage", e[e.renameOnType = 105] = "renameOnType", e[e.renderRichScreenReaderContent = 106] = "renderRichScreenReaderContent", e[e.renderControlCharacters = 107] = "renderControlCharacters", e[e.renderFinalNewline = 108] = "renderFinalNewline", e[e.renderLineHighlight = 109] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 110] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 111] = "renderValidationDecorations", e[e.renderWhitespace = 112] = "renderWhitespace", e[e.revealHorizontalRightPadding = 113] = "revealHorizontalRightPadding", e[e.roundedSelection = 114] = "roundedSelection", e[e.rulers = 115] = "rulers", e[e.scrollbar = 116] = "scrollbar", e[e.scrollBeyondLastColumn = 117] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 118] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 119] = "scrollPredominantAxis", e[e.selectionClipboard = 120] = "selectionClipboard", e[e.selectionHighlight = 121] = "selectionHighlight", e[e.selectionHighlightMaxLength = 122] = "selectionHighlightMaxLength", e[e.selectionHighlightMultiline = 123] = "selectionHighlightMultiline", e[e.selectOnLineNumbers = 124] = "selectOnLineNumbers", e[e.showFoldingControls = 125] = "showFoldingControls", e[e.showUnused = 126] = "showUnused", e[e.snippetSuggestions = 127] = "snippetSuggestions", e[e.smartSelect = 128] = "smartSelect", e[e.smoothScrolling = 129] = "smoothScrolling", e[e.stickyScroll = 130] = "stickyScroll", e[e.stickyTabStops = 131] = "stickyTabStops", e[e.stopRenderingLineAfter = 132] = "stopRenderingLineAfter", e[e.suggest = 133] = "suggest", e[e.suggestFontSize = 134] = "suggestFontSize", e[e.suggestLineHeight = 135] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 136] = "suggestOnTriggerCharacters", e[e.suggestSelection = 137] = "suggestSelection", e[e.tabCompletion = 138] = "tabCompletion", e[e.tabIndex = 139] = "tabIndex", e[e.trimWhitespaceOnDelete = 140] = "trimWhitespaceOnDelete", e[e.unicodeHighlighting = 141] = "unicodeHighlighting", e[e.unusualLineTerminators = 142] = "unusualLineTerminators", e[e.useShadowDOM = 143] = "useShadowDOM", e[e.useTabStops = 144] = "useTabStops", e[e.wordBreak = 145] = "wordBreak", e[e.wordSegmenterLocales = 146] = "wordSegmenterLocales", e[e.wordSeparators = 147] = "wordSeparators", e[e.wordWrap = 148] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 149] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 150] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 151] = "wordWrapColumn", e[e.wordWrapOverride1 = 152] = "wordWrapOverride1", e[e.wordWrapOverride2 = 153] = "wordWrapOverride2", e[e.wrappingIndent = 154] = "wrappingIndent", e[e.wrappingStrategy = 155] = "wrappingStrategy", e[e.showDeprecated = 156] = "showDeprecated", e[e.inertialScroll = 157] = "inertialScroll", e[e.inlayHints = 158] = "inlayHints", e[e.wrapOnEscapedLineFeeds = 159] = "wrapOnEscapedLineFeeds", e[e.effectiveCursorStyle = 160] = "effectiveCursorStyle", e[e.editorClassName = 161] = "editorClassName", e[e.pixelRatio = 162] = "pixelRatio", e[e.tabFocusMode = 163] = "tabFocusMode", e[e.layoutInfo = 164] = "layoutInfo", e[e.wrappingInfo = 165] = "wrappingInfo", e[e.defaultColorDecorators = 166] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 167] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 168] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 169] = "effectiveEditContext", e[e.scrollOnMiddleClick = 170] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 171] = "effectiveAllowVariableFonts";
})(Os || (Os = {}));
var zs;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(zs || (zs = {}));
var Ws;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Ws || (Ws = {}));
var qs;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(qs || (qs = {}));
var Vs;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Vs || (Vs = {}));
var Cs;
(function(e) {
  e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(Cs || (Cs = {}));
var Gs;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(Gs || (Gs = {}));
var js;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(js || (js = {}));
var $s;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})($s || ($s = {}));
var Xs;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(Xs || (Xs = {}));
var Gi;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(Gi || (Gi = {}));
var ji;
(function(e) {
  e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(ji || (ji = {}));
var $i;
(function(e) {
  e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})($i || ($i = {}));
var Ys;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(Ys || (Ys = {}));
var Qs;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(Qs || (Qs = {}));
var Js;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(Js || (Js = {}));
var Zs;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(Zs || (Zs = {}));
var Ks;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Ks || (Ks = {}));
var ea;
(function(e) {
  e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(ea || (ea = {}));
var ta;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(ta || (ta = {}));
var na;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(na || (na = {}));
var ia;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(ia || (ia = {}));
var ra;
(function(e) {
  e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(ra || (ra = {}));
var sa;
(function(e) {
  e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(sa || (sa = {}));
var aa;
(function(e) {
  e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(aa || (aa = {}));
var oa;
(function(e) {
  e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(oa || (oa = {}));
var Xi;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Xi || (Xi = {}));
var la;
(function(e) {
  e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(la || (la = {}));
var ua;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(ua || (ua = {}));
var ca;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(ca || (ca = {}));
var ha;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(ha || (ha = {}));
var da;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(da || (da = {}));
var ma;
(function(e) {
  e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(ma || (ma = {}));
var fa;
(function(e) {
  e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(fa || (fa = {}));
var pa;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(pa || (pa = {}));
var ga;
(function(e) {
  e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})(ga || (ga = {}));
const jt = class jt {
  static chord(t, n) {
    return Rc(t, n);
  }
};
jt.CtrlCmd = Wt.CtrlCmd, jt.Shift = Wt.Shift, jt.Alt = Wt.Alt, jt.WinCtrl = Wt.WinCtrl;
let Yi = jt;
function ih() {
  return {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Xu,
    Emitter: ze,
    KeyCode: Gi,
    KeyMod: Yi,
    Position: te,
    Range: X,
    Selection: Be,
    SelectionDirection: Xi,
    MarkerSeverity: ji,
    MarkerTag: $i,
    Uri: Pe,
    Token: nh
  };
}
var nn;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(nn || (nn = {}));
new vu(10);
var ba;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(ba || (ba = {}));
var _a;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(_a || (_a = {}));
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
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(ya || (ya = {}));
var Ta;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(Ta || (Ta = {}));
var xa;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(xa || (xa = {}));
var Aa;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Aa || (Aa = {}));
var La;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(La || (La = {}));
var ka;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(ka || (ka = {}));
var Ea;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(Ea || (Ea = {}));
var Ra;
(function(e) {
  e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(Ra || (Ra = {}));
function rh(e) {
  if (!e || e.length === 0)
    return !1;
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i === M.LineFeed)
      return !0;
    if (i === M.Backslash) {
      if (t++, t >= n)
        break;
      const r = e.charCodeAt(t);
      if (r === M.n || r === M.r || r === M.W)
        return !0;
    }
  }
  return !1;
}
function sh(e, t, n, i, r) {
  if (i === 0)
    return !0;
  const s = t.charCodeAt(i - 1);
  if (e.get(s) !== nn.Regular || s === M.CarriageReturn || s === M.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i);
    if (e.get(a) !== nn.Regular)
      return !0;
  }
  return !1;
}
function ah(e, t, n, i, r) {
  if (i + r === n)
    return !0;
  const s = t.charCodeAt(i + r);
  if (e.get(s) !== nn.Regular || s === M.CarriageReturn || s === M.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i + r - 1);
    if (e.get(a) !== nn.Regular)
      return !0;
  }
  return !1;
}
function oh(e, t, n, i, r) {
  return sh(e, t, n, i, r) && ah(e, t, n, i, r);
}
class lh {
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
          oc(t, n, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = r, this._prevMatchLength = s, !this._wordSeparators || oh(this._wordSeparators, t, n, r, s))
        return i;
    } while (i);
    return null;
  }
}
const uh = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function ch(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of uh)
    e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
const Il = ch();
function Fl(e) {
  let t = Il;
  if (e && e instanceof RegExp)
    if (e.global)
      t = e;
    else {
      let n = "g";
      e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
    }
  return t.lastIndex = 0, t;
}
const Pl = new Eu();
Pl.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function Er(e, t, n, i, r) {
  if (t = Fl(t), r || (r = Cn.first(Pl)), n.length > r.maxLen) {
    let u = e - r.maxLen / 2;
    return u < 0 ? u = 0 : i += u, n = n.substring(u, e + r.maxLen / 2), Er(e, t, n, i, r);
  }
  const s = Date.now(), a = e - 1 - i;
  let l = -1, o = null;
  for (let u = 1; !(Date.now() - s >= r.timeBudget); u++) {
    const c = a - r.windowSize * u;
    t.lastIndex = Math.max(0, c);
    const d = hh(t, n, a, l);
    if (!d && o || (o = d, c <= 0))
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
function hh(e, t, n, i) {
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
class dh {
  static computeUnicodeHighlights(t, n, i) {
    const r = i ? i.startLineNumber : 1, s = i ? i.endLineNumber : t.getLineCount(), a = new Sa(n), l = a.getCandidateCodePoints();
    let o;
    l === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${mh(Array.from(l))}`, "g");
    const u = new lh(null, o), c = [];
    let d = !1, m, g = 0, _ = 0, p = 0;
    e: for (let L = r, A = s; L <= A; L++) {
      const w = t.getLineContent(L), E = w.length;
      u.reset(0);
      do
        if (m = u.next(w), m) {
          let H = m.index, W = m.index + m[0].length;
          if (H > 0) {
            const v = w.charCodeAt(H - 1);
            Fi(v) && H--;
          }
          if (W + 1 < E) {
            const v = w.charCodeAt(W - 1);
            Fi(v) && W++;
          }
          const O = w.substring(H, W);
          let b = Er(H + 1, Il, w, 0);
          b && b.endColumn <= H + 1 && (b = null);
          const f = a.shouldHighlightNonBasicASCII(O, b ? b.word : null);
          if (f !== ke.None) {
            if (f === ke.Ambiguous ? g++ : f === ke.Invisible ? _++ : f === ke.NonBasicASCII ? p++ : Tu(), c.length >= 1e3) {
              d = !0;
              break e;
            }
            c.push(new X(L, H + 1, L, W + 1));
          }
        }
      while (m);
    }
    return {
      ranges: c,
      hasMore: d,
      ambiguousCharacterCount: g,
      invisibleCharacterCount: _,
      nonBasicAsciiCharacterCount: p
    };
  }
  static computeUnicodeHighlightReason(t, n) {
    const i = new Sa(n);
    switch (i.shouldHighlightNonBasicASCII(t, null)) {
      case ke.None:
        return null;
      case ke.Invisible:
        return { kind: pn.Invisible };
      case ke.Ambiguous: {
        const s = t.codePointAt(0), a = i.ambiguousCharacters.getPrimaryConfusable(s), l = kn.getLocales().filter((o) => !kn.getInstance(/* @__PURE__ */ new Set([...n.allowedLocales, o])).isAmbiguous(s));
        return { kind: pn.Ambiguous, confusableWith: String.fromCodePoint(a), notAmbiguousInLocales: l };
      }
      case ke.NonBasicASCII:
        return { kind: pn.NonBasicAscii };
    }
  }
}
function mh(e, t) {
  return `[${Ju(e.map((i) => String.fromCodePoint(i)).join(""))}]`;
}
var pn;
(function(e) {
  e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(pn || (pn = {}));
class Sa {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = kn.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII)
      return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters)
      for (const n of fn.codePoints)
        Na(String.fromCodePoint(n)) || t.add(n);
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
      return ke.None;
    if (this.options.nonBasicASCII)
      return ke.NonBasicASCII;
    let r = !1, s = !1;
    if (n)
      for (const a of n) {
        const l = a.codePointAt(0), o = uc(a);
        r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(l) && !fn.isInvisibleCharacter(l) && (s = !0);
      }
    return !r && s ? ke.None : this.options.invisibleCharacters && !Na(t) && fn.isInvisibleCharacter(i) ? ke.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(i) ? ke.Ambiguous : ke.None;
  }
}
function Na(e) {
  return e === " " || e === `
` || e === "	";
}
var ke;
(function(e) {
  e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(ke || (ke = {}));
class qn {
  constructor(t, n, i) {
    this.changes = t, this.moves = n, this.hitTimeout = i;
  }
}
class Rr {
  constructor(t, n) {
    this.lineRangeMapping = t, this.changes = n;
  }
  flip() {
    return new Rr(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
  }
}
class j {
  static fromTo(t, n) {
    return new j(t, n);
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
      n.splice(i, r - i, new j(s, a));
    }
  }
  static tryCreate(t, n) {
    if (!(t > n))
      return new j(t, n);
  }
  static ofLength(t) {
    return new j(0, t);
  }
  static ofStartAndLength(t, n) {
    return new j(t, t + n);
  }
  static emptyAt(t) {
    return new j(t, t);
  }
  constructor(t, n) {
    if (this.start = t, this.endExclusive = n, t > n)
      throw new me(`Invalid range: ${this.toString()}`);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(t) {
    return new j(this.start + t, this.endExclusive + t);
  }
  deltaStart(t) {
    return new j(this.start + t, this.endExclusive);
  }
  deltaEnd(t) {
    return new j(this.start, this.endExclusive + t);
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
    return new j(
      Math.min(this.start, t.start),
      Math.max(this.endExclusive, t.endExclusive)
    );
  }
  intersect(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    if (n <= i)
      return new j(n, i);
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
      throw new me(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, t));
  }
  clipCyclic(t) {
    if (this.isEmpty)
      throw new me(`Invalid clipping range: ${this.toString()}`);
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
  joinRightTouching(t) {
    if (this.endExclusive !== t.start)
      throw new me(`Invalid join: ${this.toString()} and ${t.toString()}`);
    return new j(this.start, t.endExclusive);
  }
}
const Te = class Te {
  static ofLength(t, n) {
    return new Te(t, t + n);
  }
  static fromRange(t) {
    return new Te(t.startLineNumber, t.endLineNumber);
  }
  static fromRangeInclusive(t) {
    return new Te(t.startLineNumber, t.endLineNumber + 1);
  }
  static subtract(t, n) {
    return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [
      new Te(t.startLineNumber, n.startLineNumber),
      new Te(n.endLineNumberExclusive, t.endLineNumberExclusive)
    ] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new Te(
      Math.max(n.endLineNumberExclusive, t.startLineNumber),
      t.endLineNumberExclusive
    )] : [new Te(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
  }
  static joinMany(t) {
    if (t.length === 0)
      return [];
    let n = new Ke(t[0].slice());
    for (let i = 1; i < t.length; i++)
      n = n.getUnion(new Ke(t[i].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0)
      throw new me("lineRanges cannot be empty");
    let n = t[0].startLineNumber, i = t[0].endLineNumberExclusive;
    for (let r = 1; r < t.length; r++)
      n = Math.min(n, t[r].startLineNumber), i = Math.max(i, t[r].endLineNumberExclusive);
    return new Te(n, i);
  }
  static deserialize(t) {
    return new Te(t[0], t[1]);
  }
  constructor(t, n) {
    if (t > n)
      throw new me(
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
    return new Te(this.startLineNumber + t, this.endLineNumberExclusive + t);
  }
  deltaLength(t) {
    return new Te(this.startLineNumber, this.endLineNumberExclusive + t);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(t) {
    return new Te(
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
      return new Te(n, i);
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
    return this.isEmpty ? null : new X(
      this.startLineNumber,
      1,
      this.endLineNumberExclusive - 1,
      Number.MAX_SAFE_INTEGER
    );
  }
  toExclusiveRange() {
    return new X(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
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
  toOffsetRange() {
    return new j(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(t) {
    return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
  }
  distanceToLine(t) {
    return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
  }
  addMargin(t, n) {
    return new Te(
      this.startLineNumber - t,
      this.endLineNumberExclusive + n
    );
  }
};
Te.compareByStart = Xt((t) => t.startLineNumber, dn);
let ne = Te;
class Ke {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0)
      return;
    const n = Ni(this._normalizedRanges, (r) => r.endLineNumberExclusive >= t.startLineNumber), i = Kt(this._normalizedRanges, (r) => r.startLineNumber <= t.endLineNumberExclusive) + 1;
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
    const n = Zt(this._normalizedRanges, (i) => i.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = Zt(this._normalizedRanges, (i) => i.startLineNumber < t.endLineNumberExclusive);
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
      s === null ? s = a : s.endLineNumberExclusive >= a.startLineNumber ? s = new ne(
        s.startLineNumber,
        Math.max(s.endLineNumberExclusive, a.endLineNumberExclusive)
      ) : (n.push(s), s = a);
    }
    return s !== null && n.push(s), new Ke(n);
  }
  subtractFrom(t) {
    const n = Ni(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), i = Kt(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i)
      return new Ke([t]);
    const r = [];
    let s = t.startLineNumber;
    for (let a = n; a < i; a++) {
      const l = this._normalizedRanges[a];
      l.startLineNumber > s && r.push(new ne(s, l.startLineNumber)), s = l.endLineNumberExclusive;
    }
    return s < t.endLineNumberExclusive && r.push(new ne(s, t.endLineNumberExclusive)), new Ke(r);
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
    return new Ke(n);
  }
  getWithDelta(t) {
    return new Ke(this._normalizedRanges.map((n) => n.delta(t)));
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
    let n = 0, i = 0;
    for (const r of t)
      r === `
` ? (n++, i = 0) : i++;
    return new Ue(n, i);
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
    return this.lineCount === 0 ? new X(
      t.lineNumber,
      t.column,
      t.lineNumber,
      t.column + this.columnCount
    ) : new X(
      t.lineNumber,
      t.column,
      t.lineNumber + this.lineCount,
      this.columnCount + 1
    );
  }
  toRange() {
    return new X(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return ne.ofLength(1, this.lineCount + 1);
  }
  addToPosition(t) {
    return this.lineCount === 0 ? new te(t.lineNumber, t.column + this.columnCount) : new te(t.lineNumber + this.lineCount, this.columnCount + 1);
  }
  addToRange(t) {
    return X.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
Ue.zero = new Ue(0, 0);
let At = Ue;
class fh {
  getOffsetRange(t) {
    return new j(
      this.getOffset(t.getStartPosition()),
      this.getOffset(t.getEndPosition())
    );
  }
  getRange(t) {
    return X.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
  }
  getStringEdit(t) {
    const n = t.replacements.map((i) => this.getStringReplacement(i));
    return new lt.deps.StringEdit(n);
  }
  getStringReplacement(t) {
    return new lt.deps.StringReplacement(this.getOffsetRange(t.range), t.text);
  }
  getTextReplacement(t) {
    return new lt.deps.TextReplacement(this.getRange(t.replaceRange), t.newText);
  }
  getTextEdit(t) {
    const n = t.replacements.map((i) => this.getTextReplacement(i));
    return new lt.deps.TextEdit(n);
  }
}
const Dr = class Dr {
  static get deps() {
    if (!this._deps)
      throw new Error("Dependencies not set. Call _setDependencies first.");
    return this._deps;
  }
};
Dr._deps = void 0;
let lt = Dr;
function ph(e) {
  lt._deps = e;
}
class Bl extends fh {
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
      return new te(1, 1);
    const n = this.textLength.lineCount + 1;
    if (t.lineNumber > n) {
      const r = this.getLineLength(n);
      return new te(n, r + 1);
    }
    if (t.column < 1)
      return new te(t.lineNumber, 1);
    const i = this.getLineLength(t.lineNumber);
    return t.column - 1 > i ? new te(t.lineNumber, i + 1) : t;
  }
  getPosition(t) {
    const n = Kt(this.lineStartOffsetByLineIdx, (s) => s <= t), i = n + 1, r = t - this.lineStartOffsetByLineIdx[n] + 1;
    return new te(i, r);
  }
  getTextLength(t) {
    return lt.deps.TextLength.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new lt.deps.TextLength(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}
class Hl {
  constructor() {
    this._transformer = void 0;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new te(1, 1));
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
    return this.getValueOfRange(new X(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    return this._transformer || (this._transformer = new Bl(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new X(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return xl(t);
  }
  getLinesOfRange(t) {
    return t.mapToLineArray((n) => this.getLineAt(n));
  }
  equals(t) {
    return this === t ? !0 : this.getValue() === t.getValue();
  }
}
class gh extends Hl {
  constructor(t, n) {
    xu(n >= 1), super(), this._getLineContent = t, this._lineCount = n;
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
    return new At(this._lineCount - 1, t.length);
  }
}
class Un extends gh {
  constructor(t) {
    super((n) => t[n - 1], t.length);
  }
}
class En extends Hl {
  constructor(t) {
    super(), this.value = t, this._t = new Bl(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}
let Sr = class _t {
  static fromStringEdit(t, n) {
    const i = t.replacements.map((r) => xe.fromStringReplacement(r, n));
    return new _t(i);
  }
  static replace(t, n) {
    return new _t([new xe(t, n)]);
  }
  static delete(t) {
    return new _t([new xe(t, "")]);
  }
  static insert(t, n) {
    return new _t([new xe(X.fromPositions(t, t), n)]);
  }
  static fromParallelReplacementsUnsorted(t) {
    const n = t.slice().sort(Xt((i) => i.range, X.compareRangesUsingStarts));
    return new _t(n);
  }
  constructor(t) {
    this.replacements = t, yn(() => Tr(t, (n, i) => n.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
  }
  normalize() {
    const t = [];
    for (const n of this.replacements)
      if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
        const i = t[t.length - 1];
        t[t.length - 1] = new xe(i.range.plusRange(n.range), i.text + n.text);
      } else n.isEmpty || t.push(n);
    return new _t(t);
  }
  mapPosition(t) {
    let n = 0, i = 0, r = 0;
    for (const s of this.replacements) {
      const a = s.range.getStartPosition();
      if (t.isBeforeOrEqual(a))
        break;
      const l = s.range.getEndPosition(), o = At.ofText(s.text);
      if (t.isBefore(l)) {
        const u = new te(
          a.lineNumber + n,
          a.column + (a.lineNumber + n === i ? r : 0)
        ), c = o.addToPosition(u);
        return In(u, c);
      }
      a.lineNumber + n !== i && (r = 0), n += o.lineCount - (s.range.endLineNumber - s.range.startLineNumber), o.lineCount === 0 ? l.lineNumber !== a.lineNumber ? r += o.columnCount - (l.column - 1) : r += o.columnCount - (l.column - a.column) : r = o.columnCount, i = l.lineNumber + n;
    }
    return new te(
      t.lineNumber + n,
      t.column + (t.lineNumber + n === i ? r : 0)
    );
  }
  mapRange(t) {
    function n(a) {
      return a instanceof te ? a : a.getStartPosition();
    }
    function i(a) {
      return a instanceof te ? a : a.getEndPosition();
    }
    const r = n(this.mapPosition(t.getStartPosition())), s = i(this.mapPosition(t.getEndPosition()));
    return In(r, s);
  }
  inverseMapPosition(t, n) {
    return this.inverse(n).mapPosition(t);
  }
  inverseMapRange(t, n) {
    return this.inverse(n).mapRange(t);
  }
  apply(t) {
    let n = "", i = new te(1, 1);
    for (const s of this.replacements) {
      const a = s.range, l = a.getStartPosition(), o = a.getEndPosition(), u = In(i, l);
      u.isEmpty() || (n += t.getValueOfRange(u)), n += s.text, i = o;
    }
    const r = In(i, t.endPositionExclusive);
    return r.isEmpty() || (n += t.getValueOfRange(r)), n;
  }
  applyToString(t) {
    const n = new En(t);
    return this.apply(n);
  }
  inverse(t) {
    const n = this.getNewRanges();
    return new _t(this.replacements.map((i, r) => new xe(n[r], t.getValueOfRange(i.range))));
  }
  getNewRanges() {
    const t = [];
    let n = 0, i = 0, r = 0;
    for (const s of this.replacements) {
      const a = At.ofText(s.text), l = te.lift({
        lineNumber: s.range.startLineNumber + i,
        column: s.range.startColumn + (s.range.startLineNumber === n ? r : 0)
      }), o = a.createRange(l);
      t.push(o), i = o.endLineNumber - s.range.endLineNumber, r = o.endColumn - s.range.endColumn, n = s.range.endLineNumber;
    }
    return t;
  }
  toReplacement(t) {
    if (this.replacements.length === 0)
      throw new me();
    if (this.replacements.length === 1)
      return this.replacements[0];
    const n = this.replacements[0].range.getStartPosition(), i = this.replacements[this.replacements.length - 1].range.getEndPosition();
    let r = "";
    for (let s = 0; s < this.replacements.length; s++) {
      const a = this.replacements[s];
      if (r += a.text, s < this.replacements.length - 1) {
        const l = this.replacements[s + 1], o = X.fromPositions(a.range.getEndPosition(), l.range.getStartPosition()), u = t.getValueOfRange(o);
        r += u;
      }
    }
    return new xe(X.fromPositions(n, i), r);
  }
  equals(t) {
    return bl(this.replacements, t.replacements, (n, i) => n.equals(i));
  }
  toString(t) {
    return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new En(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
      const r = t.getValueOfRange(n.range), s = X.fromPositions(new te(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition());
      let a = t.getValueOfRange(s);
      a.length > 10 && (a = "..." + a.substring(a.length - 10));
      const l = X.fromPositions(n.range.getEndPosition(), new te(n.range.endLineNumber + 1, 1));
      let o = t.getValueOfRange(l);
      o.length > 10 && (o = o.substring(0, 10) + "...");
      let u = r;
      if (u.length > 10) {
        const d = Math.floor(5);
        u = u.substring(0, d) + "..." + u.substring(u.length - d);
      }
      let c = n.text;
      if (c.length > 10) {
        const d = Math.floor(5);
        c = c.substring(0, d) + "..." + c.substring(c.length - d);
      }
      return u.length === 0 ? `${a}❰${c}❱${o}` : `${a}❰${u}↦${c}❱${o}`;
    }).join(`
`);
  }
};
class xe {
  static joinReplacements(t, n) {
    if (t.length === 0)
      throw new me();
    if (t.length === 1)
      return t[0];
    const i = t[0].range.getStartPosition(), r = t[t.length - 1].range.getEndPosition();
    let s = "";
    for (let a = 0; a < t.length; a++) {
      const l = t[a];
      if (s += l.text, a < t.length - 1) {
        const o = t[a + 1], u = X.fromPositions(l.range.getEndPosition(), o.range.getStartPosition()), c = n.getValueOfRange(u);
        s += c;
      }
    }
    return new xe(X.fromPositions(i, r), s);
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
    return new Sr([this]);
  }
  equals(t) {
    return xe.equals(this, t);
  }
  extendToCoverRange(t, n) {
    if (this.range.containsRange(t))
      return this;
    const i = this.range.plusRange(t), r = n.getValueOfRange(X.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(X.fromPositions(this.range.getEndPosition(), i.getEndPosition())), a = r + this.text + s;
    return new xe(i, a);
  }
  extendToFullLine(t) {
    const n = new X(
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
`), i = this.text.replaceAll(`\r
`, `
`), r = $n(n, i), s = At.ofText(n.substring(0, r)).addToPosition(this.range.getStartPosition()), a = i.substring(r), l = X.fromPositions(s, this.range.getEndPosition());
    return new xe(l, a);
  }
  removeCommonSuffix(t) {
    const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = this.text.replaceAll(`\r
`, `
`), r = Xn(n, i), s = At.ofText(n.substring(0, n.length - r)).addToPosition(this.range.getStartPosition()), a = i.substring(0, i.length - r), l = X.fromPositions(this.range.getStartPosition(), s);
    return new xe(l, a);
  }
  isEffectiveDeletion(t) {
    let n = this.text.replaceAll(`\r
`, `
`), i = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const r = $n(n, i);
    n = n.substring(r), i = i.substring(r);
    const s = Xn(n, i);
    return n = n.substring(0, n.length - s), i = i.substring(0, i.length - s), n === "";
  }
  toString() {
    const t = this.range.getStartPosition(), n = this.range.getEndPosition();
    return `(${t.lineNumber},${t.column} -> ${n.lineNumber},${n.column}): "${this.text}"`;
  }
}
function In(e, t) {
  if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER)
    return X.fromPositions(t, t);
  if (!e.isBeforeOrEqual(t))
    throw new me("start must be before end");
  return new X(e.lineNumber, e.column, t.lineNumber, t.column);
}
class qe {
  static inverse(t, n, i) {
    const r = [];
    let s = 1, a = 1;
    for (const o of t) {
      const u = new qe(new ne(s, o.original.startLineNumber), new ne(a, o.modified.startLineNumber));
      u.modified.isEmpty || r.push(u), s = o.original.endLineNumberExclusive, a = o.modified.endLineNumberExclusive;
    }
    const l = new qe(new ne(s, n + 1), new ne(a, i + 1));
    return l.modified.isEmpty || r.push(l), r;
  }
  static clip(t, n, i) {
    const r = [];
    for (const s of t) {
      const a = s.original.intersect(n), l = s.modified.intersect(i);
      a && !a.isEmpty && l && !l.isEmpty && r.push(new qe(a, l));
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
    return new qe(this.modified, this.original);
  }
  join(t) {
    return new qe(this.original.join(t.original), this.modified.join(t.modified));
  }
  get changedLineCount() {
    return Math.max(this.original.length, this.modified.length);
  }
  toRangeMapping() {
    const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
    if (t && n)
      return new Ne(t, n);
    if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
      if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1))
        throw new me("not a valid diff");
      return new Ne(new X(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new X(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else
      return new Ne(new X(
        this.original.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.original.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ), new X(
        this.modified.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.modified.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ));
  }
  toRangeMapping2(t, n) {
    if (Ma(this.original.endLineNumberExclusive, t) && Ma(this.modified.endLineNumberExclusive, n))
      return new Ne(new X(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new X(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty)
      return new Ne(X.fromPositions(new te(this.original.startLineNumber, 1), Bt(new te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), X.fromPositions(new te(this.modified.startLineNumber, 1), Bt(new te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
      return new Ne(X.fromPositions(Bt(new te(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), Bt(new te(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), X.fromPositions(Bt(new te(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), Bt(new te(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new me();
  }
}
function Bt(e, t) {
  if (e.lineNumber < 1)
    return new te(1, 1);
  if (e.lineNumber > t.length)
    return new te(t.length, t[t.length - 1].length + 1);
  const n = t[e.lineNumber - 1];
  return e.column > n.length + 1 ? new te(e.lineNumber, n.length + 1) : e;
}
function Ma(e, t) {
  return e >= 1 && e <= t.length;
}
class nt extends qe {
  static toTextEdit(t, n) {
    const i = [];
    for (const r of t)
      for (const s of r.innerChanges ?? []) {
        const a = s.toTextEdit(n);
        i.push(a);
      }
    return new Sr(i);
  }
  static fromRangeMappings(t) {
    const n = ne.join(t.map((r) => ne.fromRangeInclusive(r.originalRange))), i = ne.join(t.map((r) => ne.fromRangeInclusive(r.modifiedRange)));
    return new nt(n, i, t);
  }
  constructor(t, n, i) {
    super(t, n), this.innerChanges = i;
  }
  flip() {
    var t;
    return new nt(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new nt(this.original, this.modified, [this.toRangeMapping()]);
  }
}
class Ne {
  static fromEdit(t) {
    const n = t.getNewRanges();
    return t.replacements.map((r, s) => new Ne(r.range, n[s]));
  }
  static fromEditJoin(t) {
    const n = t.getNewRanges(), i = t.replacements.map((r, s) => new Ne(r.range, n[s]));
    return Ne.join(i);
  }
  static join(t) {
    if (t.length === 0)
      throw new me("Cannot join an empty list of range mappings");
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.join(t[i]);
    return n;
  }
  static assertSorted(t) {
    for (let n = 1; n < t.length; n++) {
      const i = t[n - 1], r = t[n];
      if (!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition()) && i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition())))
        throw new me("Range mappings must be sorted");
    }
  }
  constructor(t, n) {
    this.originalRange = t, this.modifiedRange = n;
  }
  toString() {
    return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
  }
  flip() {
    return new Ne(this.modifiedRange, this.originalRange);
  }
  toTextEdit(t) {
    const n = t.getValueOfRange(this.modifiedRange);
    return new xe(this.originalRange, n);
  }
  join(t) {
    return new Ne(
      this.originalRange.plusRange(t.originalRange),
      this.modifiedRange.plusRange(t.modifiedRange)
    );
  }
}
function Da(e, t, n, i = !1) {
  const r = [];
  for (const s of cu(e.map((a) => bh(a, t, n)), (a, l) => a.original.intersectsOrTouches(l.original) || a.modified.intersectsOrTouches(l.modified))) {
    const a = s[0], l = s[s.length - 1];
    r.push(new nt(
      a.original.join(l.original),
      a.modified.join(l.modified),
      s.map((o) => o.innerChanges[0])
    ));
  }
  return yn(() => !i && r.length > 0 && (r[0].modified.startLineNumber !== r[0].original.startLineNumber || n.length.lineCount - r[r.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - r[r.length - 1].original.endLineNumberExclusive) ? !1 : Tr(r, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), r;
}
function bh(e, t, n) {
  let i = 0, r = 0;
  e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + i <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + i <= e.modifiedRange.endLineNumber && (r = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + r && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + r && (i = 1);
  const s = new ne(
    e.originalRange.startLineNumber + i,
    e.originalRange.endLineNumber + 1 + r
  ), a = new ne(
    e.modifiedRange.startLineNumber + i,
    e.modifiedRange.endLineNumber + 1 + r
  );
  return new nt(s, a, [e]);
}
const _h = 3;
class wh {
  computeDiff(t, n, i) {
    var o;
    const s = new zl(t, n, {
      maxComputationTime: i.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: i.ignoreTrimWhitespace,
      shouldComputeCharChanges: !0,
      shouldMakePrettyDiff: !0,
      shouldPostProcessCharChanges: !0
    }).computeDiff(), a = [];
    let l = null;
    for (const u of s.changes) {
      let c;
      u.originalEndLineNumber === 0 ? c = new ne(u.originalStartLineNumber + 1, u.originalStartLineNumber + 1) : c = new ne(u.originalStartLineNumber, u.originalEndLineNumber + 1);
      let d;
      u.modifiedEndLineNumber === 0 ? d = new ne(u.modifiedStartLineNumber + 1, u.modifiedStartLineNumber + 1) : d = new ne(u.modifiedStartLineNumber, u.modifiedEndLineNumber + 1);
      let m = new nt(c, d, (o = u.charChanges) == null ? void 0 : o.map((g) => new Ne(new X(
        g.originalStartLineNumber,
        g.originalStartColumn,
        g.originalEndLineNumber,
        g.originalEndColumn
      ), new X(
        g.modifiedStartLineNumber,
        g.modifiedStartColumn,
        g.modifiedEndLineNumber,
        g.modifiedEndColumn
      ))));
      l && (l.modified.endLineNumberExclusive === m.modified.startLineNumber || l.original.endLineNumberExclusive === m.original.startLineNumber) && (m = new nt(
        l.original.join(m.original),
        l.modified.join(m.modified),
        l.innerChanges && m.innerChanges ? l.innerChanges.concat(m.innerChanges) : void 0
      ), a.pop()), a.push(m), l = m;
    }
    return yn(() => Tr(a, (u, c) => c.original.startLineNumber - u.original.endLineNumberExclusive === c.modified.startLineNumber - u.modified.endLineNumberExclusive && u.original.endLineNumberExclusive < c.original.startLineNumber && u.modified.endLineNumberExclusive < c.modified.startLineNumber)), new qn(a, [], s.quitEarly);
  }
}
function Ol(e, t, n, i) {
  return new yt(e, t, n).ComputeDiff(i);
}
let Ua = class {
  constructor(t) {
    const n = [], i = [];
    for (let r = 0, s = t.length; r < s; r++)
      n[r] = Qi(t[r], 1), i[r] = Ji(t[r], 1);
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
      const u = this.lines[o], c = t ? this._startColumns[o] : 1, d = t ? this._endColumns[o] : u.length + 1;
      for (let m = c; m < d; m++)
        r[l] = u.charCodeAt(m - 1), s[l] = o + 1, a[l] = m, l++;
      !t && o < i && (r[l] = M.LineFeed, s[l] = o + 1, a[l] = u.length + 1, l++);
    }
    return new vh(r, s, a);
  }
};
class vh {
  constructor(t, n, i) {
    this._charCodes = t, this._lineNumbers = n, this._columns = i;
  }
  toString() {
    return "[" + this._charCodes.map(
      (t, n) => (t === M.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[n]},${this._columns[n]})`
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
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === M.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === M.LineFeed ? 1 : this._columns[t] + 1);
  }
}
class Qt {
  constructor(t, n, i, r, s, a, l, o) {
    this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = i, this.originalEndColumn = r, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = l, this.modifiedEndColumn = o;
  }
  static createFromDiffChange(t, n, i) {
    const r = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), l = n.getEndColumn(t.originalStart + t.originalLength - 1), o = i.getStartLineNumber(t.modifiedStart), u = i.getStartColumn(t.modifiedStart), c = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), d = i.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
    return new Qt(
      r,
      s,
      a,
      l,
      o,
      u,
      c,
      d
    );
  }
}
function yh(e) {
  if (e.length <= 1)
    return e;
  const t = [e[0]];
  let n = t[0];
  for (let i = 1, r = e.length; i < r; i++) {
    const s = e[i], a = s.originalStart - (n.originalStart + n.originalLength), l = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(a, l) < _h ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
  }
  return t;
}
class gn {
  constructor(t, n, i, r, s) {
    this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = i, this.modifiedEndLineNumber = r, this.charChanges = s;
  }
  static createFromDiffResult(t, n, i, r, s, a, l) {
    let o, u, c, d, m;
    if (n.originalLength === 0 ? (o = i.getStartLineNumber(n.originalStart) - 1, u = 0) : (o = i.getStartLineNumber(n.originalStart), u = i.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (c = r.getStartLineNumber(n.modifiedStart) - 1, d = 0) : (c = r.getStartLineNumber(n.modifiedStart), d = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
      const g = i.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), _ = r.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (g.getElements().length > 0 && _.getElements().length > 0) {
        let p = Ol(g, _, s, !0).changes;
        l && (p = yh(p)), m = [];
        for (let L = 0, A = p.length; L < A; L++)
          m.push(Qt.createFromDiffChange(p[L], g, _));
      }
    }
    return new gn(
      o,
      u,
      c,
      d,
      m
    );
  }
}
class zl {
  constructor(t, n, i) {
    this.shouldComputeCharChanges = i.shouldComputeCharChanges, this.shouldPostProcessCharChanges = i.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = i.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = i.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = n, this.original = new Ua(t), this.modified = new Ua(n), this.continueLineDiff = Ia(i.maxComputationTime), this.continueCharDiff = Ia(i.maxComputationTime === 0 ? 0 : Math.min(i.maxComputationTime, 5e3));
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
    const t = Ol(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), n = t.changes, i = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const l = [];
      for (let o = 0, u = n.length; o < u; o++)
        l.push(gn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return {
        quitEarly: i,
        changes: l
      };
    }
    const r = [];
    let s = 0, a = 0;
    for (let l = -1, o = n.length; l < o; l++) {
      const u = l + 1 < o ? n[l + 1] : null, c = u ? u.originalStart : this.originalLines.length, d = u ? u.modifiedStart : this.modifiedLines.length;
      for (; s < c && a < d; ) {
        const m = this.originalLines[s], g = this.modifiedLines[a];
        if (m !== g) {
          {
            let _ = Qi(m, 1), p = Qi(g, 1);
            for (; _ > 1 && p > 1; ) {
              const L = m.charCodeAt(_ - 2), A = g.charCodeAt(p - 2);
              if (L !== A)
                break;
              _--, p--;
            }
            (_ > 1 || p > 1) && this._pushTrimWhitespaceCharChange(r, s + 1, 1, _, a + 1, 1, p);
          }
          {
            let _ = Ji(m, 1), p = Ji(g, 1);
            const L = m.length + 1, A = g.length + 1;
            for (; _ < L && p < A; ) {
              const w = m.charCodeAt(_ - 1), E = m.charCodeAt(p - 1);
              if (w !== E)
                break;
              _++, p++;
            }
            (_ < L || p < A) && this._pushTrimWhitespaceCharChange(r, s + 1, _, L, a + 1, p, A);
          }
        }
        s++, a++;
      }
      u && (r.push(gn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), s += u.originalLength, a += u.modifiedLength);
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
    this.shouldComputeCharChanges && (o = [new Qt(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )]), t.push(new gn(
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
    return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === n && u.modifiedEndLineNumber === s ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Qt(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      l
    )), !0) : u.originalEndLineNumber + 1 === n && u.modifiedEndLineNumber + 1 === s ? (u.originalEndLineNumber = n, u.modifiedEndLineNumber = s, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Qt(
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
function Qi(e, t) {
  const n = Ku(e);
  return n === -1 ? t : n + 1;
}
function Ji(e, t) {
  const n = ec(e);
  return n === -1 ? t : n + 2;
}
function Ia(e) {
  if (e === 0)
    return () => !0;
  const t = Date.now();
  return () => Date.now() - t < e;
}
class mt {
  static trivial(t, n) {
    return new mt([new he(j.ofLength(t.length), j.ofLength(n.length))], !1);
  }
  static trivialTimedOut(t, n) {
    return new mt([new he(j.ofLength(t.length), j.ofLength(n.length))], !0);
  }
  constructor(t, n) {
    this.diffs = t, this.hitTimeout = n;
  }
}
class he {
  static invert(t, n) {
    const i = [];
    return hu(t, (r, s) => {
      i.push(he.fromOffsetPairs(r ? r.getEndExclusives() : ut.zero, s ? s.getStarts() : new ut(
        n,
        (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n
      )));
    }), i;
  }
  static fromOffsetPairs(t, n) {
    return new he(new j(t.offset1, n.offset1), new j(t.offset2, n.offset2));
  }
  static assertSorted(t) {
    let n;
    for (const i of t) {
      if (n && !(n.seq1Range.endExclusive <= i.seq1Range.start && n.seq2Range.endExclusive <= i.seq2Range.start))
        throw new me("Sequence diffs must be sorted");
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
    return new ut(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new ut(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}
const Rt = class Rt {
  constructor(t, n) {
    this.offset1 = t, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(t) {
    return t === 0 ? this : new Rt(this.offset1 + t, this.offset2 + t);
  }
  equals(t) {
    return this.offset1 === t.offset1 && this.offset2 === t.offset2;
  }
};
Rt.zero = new Rt(0, 0), Rt.max = new Rt(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
let ut = Rt;
const _i = class _i {
  isValid() {
    return !0;
  }
};
_i.instance = new _i();
let Rn = _i;
class Th {
  constructor(t) {
    if (this.timeout = t, this.startTime = Date.now(), this.valid = !0, t <= 0)
      throw new me("timeout must be positive");
  }
  isValid() {
    return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
  }
}
class Li {
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
function Zi(e) {
  return e === M.Space || e === M.Tab;
}
const wn = class wn {
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
        const u = a[o], c = wn.getKey(u);
        this.histogram[c] = (this.histogram[c] || 0) + 1;
      }
      r++;
      const l = wn.getKey(`
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
wn.chrKeys = /* @__PURE__ */ new Map();
let ei = wn;
class xh {
  compute(t, n, i = Rn.instance, r) {
    if (t.length === 0 || n.length === 0)
      return mt.trivial(t, n);
    const s = new Li(t.length, n.length), a = new Li(t.length, n.length), l = new Li(t.length, n.length);
    for (let _ = 0; _ < t.length; _++)
      for (let p = 0; p < n.length; p++) {
        if (!i.isValid())
          return mt.trivialTimedOut(t, n);
        const L = _ === 0 ? 0 : s.get(_ - 1, p), A = p === 0 ? 0 : s.get(_, p - 1);
        let w;
        t.getElement(_) === n.getElement(p) ? (_ === 0 || p === 0 ? w = 0 : w = s.get(_ - 1, p - 1), _ > 0 && p > 0 && a.get(_ - 1, p - 1) === 3 && (w += l.get(_ - 1, p - 1)), w += r ? r(_, p) : 1) : w = -1;
        const E = Math.max(L, A, w);
        if (E === w) {
          const H = _ > 0 && p > 0 ? l.get(_ - 1, p - 1) : 0;
          l.set(_, p, H + 1), a.set(_, p, 3);
        } else E === L ? (l.set(_, p, 0), a.set(_, p, 1)) : E === A && (l.set(_, p, 0), a.set(_, p, 2));
        s.set(_, p, E);
      }
    const o = [];
    let u = t.length, c = n.length;
    function d(_, p) {
      (_ + 1 !== u || p + 1 !== c) && o.push(new he(new j(_ + 1, u), new j(p + 1, c))), u = _, c = p;
    }
    let m = t.length - 1, g = n.length - 1;
    for (; m >= 0 && g >= 0; )
      a.get(m, g) === 3 ? (d(m, g), m--, g--) : a.get(m, g) === 1 ? m-- : g--;
    return d(-1, -1), o.reverse(), new mt(o, !1);
  }
}
class Wl {
  compute(t, n, i = Rn.instance) {
    if (t.length === 0 || n.length === 0)
      return mt.trivial(t, n);
    const r = t, s = n;
    function a(p, L) {
      for (; p < r.length && L < s.length && r.getElement(p) === s.getElement(L); )
        p++, L++;
      return p;
    }
    let l = 0;
    const o = new Ah();
    o.set(0, a(0, 0));
    const u = new Lh();
    u.set(0, o.get(0) === 0 ? null : new Fa(null, 0, 0, o.get(0)));
    let c = 0;
    e: for (; ; ) {
      if (l++, !i.isValid())
        return mt.trivialTimedOut(r, s);
      const p = -Math.min(l, s.length + l % 2), L = Math.min(l, r.length + l % 2);
      for (c = p; c <= L; c += 2) {
        const A = c === L ? -1 : o.get(c + 1), w = c === p ? -1 : o.get(c - 1) + 1, E = Math.min(Math.max(A, w), r.length), H = E - c;
        if (E > r.length || H > s.length)
          continue;
        const W = a(E, H);
        o.set(c, W);
        const O = E === A ? u.get(c + 1) : u.get(c - 1);
        if (u.set(c, W !== E ? new Fa(O, E, H, W - E) : O), o.get(c) === r.length && o.get(c) - c === s.length)
          break e;
      }
    }
    let d = u.get(c);
    const m = [];
    let g = r.length, _ = s.length;
    for (; ; ) {
      const p = d ? d.x + d.length : 0, L = d ? d.y + d.length : 0;
      if ((p !== g || L !== _) && m.push(new he(new j(p, g), new j(L, _))), !d)
        break;
      g = d.x, _ = d.y, d = d.prev;
    }
    return m.reverse(), new mt(m, !1);
  }
}
class Fa {
  constructor(t, n, i, r) {
    this.prev = t, this.x = n, this.y = i, this.length = r;
  }
}
class Ah {
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
class Lh {
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
class ti {
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
    return this.getText(new j(0, this.length));
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
    const n = Ha(t > 0 ? this.elements[t - 1] : -1), i = Ha(t < this.elements.length ? this.elements[t] : -1);
    if (n === ue.LineBreakCR && i === ue.LineBreakLF)
      return 0;
    if (n === ue.LineBreakLF)
      return 150;
    let r = 0;
    return n !== i && (r += 10, n === ue.WordLower && i === ue.WordUpper && (r += 1)), r += Ba(n), r += Ba(i), r;
  }
  translateOffset(t, n = "right") {
    const i = Kt(this.firstElementOffsetByLineIdx, (s) => s <= t), r = t - this.firstElementOffsetByLineIdx[i];
    return new te(
      this.range.startLineNumber + i,
      1 + this.lineStartOffsets[i] + r + (r === 0 && n === "left" ? 0 : this.trimmedWsLengthsByLineIdx[i])
    );
  }
  translateRange(t) {
    const n = this.translateOffset(t.start, "right"), i = this.translateOffset(t.endExclusive, "left");
    return i.isBefore(n) ? X.fromPositions(i, i) : X.fromPositions(n, i);
  }
  findWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !Ht(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && Ht(this.elements[n - 1]); )
      n--;
    let i = t;
    for (; i < this.elements.length && Ht(this.elements[i]); )
      i++;
    return new j(n, i);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !Ht(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && Ht(this.elements[n - 1]) && !Pa(this.elements[n]); )
      n--;
    let i = t;
    for (; i < this.elements.length && Ht(this.elements[i]) && !Pa(this.elements[i]); )
      i++;
    return new j(n, i);
  }
  countLinesIn(t) {
    return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
  }
  isStronglyEqual(t, n) {
    return this.elements[t] === this.elements[n];
  }
  extendToFullLines(t) {
    const n = Zt(this.firstElementOffsetByLineIdx, (r) => r <= t.start) ?? 0, i = uu(this.firstElementOffsetByLineIdx, (r) => t.endExclusive <= r) ?? this.elements.length;
    return new j(n, i);
  }
}
function Ht(e) {
  return e >= M.a && e <= M.z || e >= M.A && e <= M.Z || e >= M.Digit0 && e <= M.Digit9;
}
function Pa(e) {
  return e >= M.A && e <= M.Z;
}
var ue;
(function(e) {
  e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(ue || (ue = {}));
const kh = {
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
function Ba(e) {
  return kh[e];
}
function Ha(e) {
  return e === M.LineFeed ? ue.LineBreakLF : e === M.CarriageReturn ? ue.LineBreakCR : Zi(e) ? ue.Space : e >= M.a && e <= M.z ? ue.WordLower : e >= M.A && e <= M.Z ? ue.WordUpper : e >= M.Digit0 && e <= M.Digit9 ? ue.WordNumber : e === -1 ? ue.End : e === M.Comma || e === M.Semicolon ? ue.Separator : ue.Other;
}
function Eh(e, t, n, i, r, s) {
  let { moves: a, excludedChanges: l } = Sh(e, t, n, s);
  if (!s.isValid())
    return [];
  const o = e.filter((c) => !l.has(c)), u = Nh(o, i, r, t, n, s);
  return mu(a, u), a = Mh(a), a = a.filter((c) => {
    const d = c.original.toOffsetRange().slice(t).map((g) => g.trim());
    return d.join(`
`).length >= 15 && Rh(d, (g) => g.length >= 2) >= 2;
  }), a = Dh(e, a), a;
}
function Rh(e, t) {
  let n = 0;
  for (const i of e)
    t(i) && n++;
  return n;
}
function Sh(e, t, n, i) {
  const r = [], s = e.filter((o) => o.modified.isEmpty && o.original.length >= 3).map((o) => new ei(o.original, t, o)), a = new Set(e.filter((o) => o.original.isEmpty && o.modified.length >= 3).map((o) => new ei(o.modified, n, o))), l = /* @__PURE__ */ new Set();
  for (const o of s) {
    let u = -1, c;
    for (const d of a) {
      const m = o.computeSimilarity(d);
      m > u && (u = m, c = d);
    }
    if (u > 0.9 && c && (a.delete(c), r.push(new qe(o.range, c.range)), l.add(o.source), l.add(c.source)), !i.isValid())
      return { moves: r, excludedChanges: l };
  }
  return { moves: r, excludedChanges: l };
}
function Nh(e, t, n, i, r, s) {
  const a = [], l = new yu();
  for (const m of e)
    for (let g = m.original.startLineNumber; g < m.original.endLineNumberExclusive - 2; g++) {
      const _ = `${t[g - 1]}:${t[g + 1 - 1]}:${t[g + 2 - 1]}`;
      l.add(_, { range: new ne(g, g + 3) });
    }
  const o = [];
  e.sort(Xt((m) => m.modified.startLineNumber, dn));
  for (const m of e) {
    let g = [];
    for (let _ = m.modified.startLineNumber; _ < m.modified.endLineNumberExclusive - 2; _++) {
      const p = `${n[_ - 1]}:${n[_ + 1 - 1]}:${n[_ + 2 - 1]}`, L = new ne(_, _ + 3), A = [];
      l.forEach(p, ({ range: w }) => {
        for (const H of g)
          if (H.originalLineRange.endLineNumberExclusive + 1 === w.endLineNumberExclusive && H.modifiedLineRange.endLineNumberExclusive + 1 === L.endLineNumberExclusive) {
            H.originalLineRange = new ne(
              H.originalLineRange.startLineNumber,
              w.endLineNumberExclusive
            ), H.modifiedLineRange = new ne(
              H.modifiedLineRange.startLineNumber,
              L.endLineNumberExclusive
            ), A.push(H);
            return;
          }
        const E = {
          modifiedLineRange: L,
          originalLineRange: w
        };
        o.push(E), A.push(E);
      }), g = A;
    }
    if (!s.isValid())
      return [];
  }
  o.sort(fu(Xt((m) => m.modifiedLineRange.length, dn)));
  const u = new Ke(), c = new Ke();
  for (const m of o) {
    const g = m.modifiedLineRange.startLineNumber - m.originalLineRange.startLineNumber, _ = u.subtractFrom(m.modifiedLineRange), p = c.subtractFrom(m.originalLineRange).getWithDelta(g), L = _.getIntersection(p);
    for (const A of L.ranges) {
      if (A.length < 3)
        continue;
      const w = A, E = A.delta(-g);
      a.push(new qe(E, w)), u.addRange(w), c.addRange(E);
    }
  }
  a.sort(Xt((m) => m.original.startLineNumber, dn));
  const d = new Vn(e);
  for (let m = 0; m < a.length; m++) {
    const g = a[m], _ = d.findLastMonotonous((O) => O.original.startLineNumber <= g.original.startLineNumber), p = Zt(e, (O) => O.modified.startLineNumber <= g.modified.startLineNumber), L = Math.max(g.original.startLineNumber - _.original.startLineNumber, g.modified.startLineNumber - p.modified.startLineNumber), A = d.findLastMonotonous((O) => O.original.startLineNumber < g.original.endLineNumberExclusive), w = Zt(e, (O) => O.modified.startLineNumber < g.modified.endLineNumberExclusive), E = Math.max(A.original.endLineNumberExclusive - g.original.endLineNumberExclusive, w.modified.endLineNumberExclusive - g.modified.endLineNumberExclusive);
    let H;
    for (H = 0; H < L; H++) {
      const O = g.original.startLineNumber - H - 1, b = g.modified.startLineNumber - H - 1;
      if (O > i.length || b > r.length || u.contains(b) || c.contains(O) || !Oa(i[O - 1], r[b - 1], s))
        break;
    }
    H > 0 && (c.addRange(new ne(g.original.startLineNumber - H, g.original.startLineNumber)), u.addRange(new ne(g.modified.startLineNumber - H, g.modified.startLineNumber)));
    let W;
    for (W = 0; W < E; W++) {
      const O = g.original.endLineNumberExclusive + W, b = g.modified.endLineNumberExclusive + W;
      if (O > i.length || b > r.length || u.contains(b) || c.contains(O) || !Oa(i[O - 1], r[b - 1], s))
        break;
    }
    W > 0 && (c.addRange(new ne(
      g.original.endLineNumberExclusive,
      g.original.endLineNumberExclusive + W
    )), u.addRange(new ne(
      g.modified.endLineNumberExclusive,
      g.modified.endLineNumberExclusive + W
    ))), (H > 0 || W > 0) && (a[m] = new qe(new ne(
      g.original.startLineNumber - H,
      g.original.endLineNumberExclusive + W
    ), new ne(
      g.modified.startLineNumber - H,
      g.modified.endLineNumberExclusive + W
    )));
  }
  return a;
}
function Oa(e, t, n) {
  if (e.trim() === t.trim())
    return !0;
  if (e.length > 300 && t.length > 300)
    return !1;
  const r = new Wl().compute(new ti([e], new X(1, 1, 1, e.length), !1), new ti([t], new X(1, 1, 1, t.length), !1), n);
  let s = 0;
  const a = he.invert(r.diffs, e.length);
  for (const c of a)
    c.seq1Range.forEach((d) => {
      Zi(e.charCodeAt(d)) || s++;
    });
  function l(c) {
    let d = 0;
    for (let m = 0; m < e.length; m++)
      Zi(c.charCodeAt(m)) || d++;
    return d;
  }
  const o = l(e.length > t.length ? e : t);
  return s / o > 0.6 && o > 10;
}
function Mh(e) {
  if (e.length === 0)
    return e;
  e.sort(Xt((n) => n.original.startLineNumber, dn));
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
function Dh(e, t) {
  const n = new Vn(e);
  return t = t.filter((i) => {
    const r = n.findLastMonotonous((l) => l.original.startLineNumber < i.original.endLineNumberExclusive) || new qe(new ne(1, 1), new ne(1, 1)), s = Zt(e, (l) => l.modified.startLineNumber < i.modified.endLineNumberExclusive);
    return r !== s;
  }), t;
}
function za(e, t, n) {
  let i = n;
  return i = Wa(e, t, i), i = Wa(e, t, i), i = Uh(e, t, i), i;
}
function Wa(e, t, n) {
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
        i[i.length - 1] = new he(new j(a.seq1Range.start, l.seq1Range.endExclusive - o), new j(a.seq2Range.start, l.seq2Range.endExclusive - o));
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
        i[s + 1] = new he(new j(l.seq1Range.start + o, a.seq1Range.endExclusive), new j(l.seq2Range.start + o, a.seq2Range.endExclusive));
        continue;
      }
      u > 0 && (l = l.delta(u));
    }
    r.push(l);
  }
  return i.length > 0 && r.push(i[i.length - 1]), r;
}
function Uh(e, t, n) {
  if (!e.getBoundaryScore || !t.getBoundaryScore)
    return n;
  for (let i = 0; i < n.length; i++) {
    const r = i > 0 ? n[i - 1] : void 0, s = n[i], a = i + 1 < n.length ? n[i + 1] : void 0, l = new j(
      r ? r.seq1Range.endExclusive + 1 : 0,
      a ? a.seq1Range.start - 1 : e.length
    ), o = new j(
      r ? r.seq2Range.endExclusive + 1 : 0,
      a ? a.seq2Range.start - 1 : t.length
    );
    s.seq1Range.isEmpty ? n[i] = qa(s, e, t, l, o) : s.seq2Range.isEmpty && (n[i] = qa(s.swap(), t, e, o, l).swap());
  }
  return n;
}
function qa(e, t, n, i, r) {
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
    const d = e.seq2Range.start + c, m = e.seq2Range.endExclusive + c, g = e.seq1Range.start + c, _ = t.getBoundaryScore(g) + n.getBoundaryScore(d) + n.getBoundaryScore(m);
    _ > u && (u = _, o = c);
  }
  return e.delta(o);
}
function Ih(e, t, n) {
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
function Va(e, t, n, i, r = !1) {
  const s = he.invert(n, e.length), a = [];
  let l = new ut(0, 0);
  function o(c, d) {
    if (c.offset1 < l.offset1 || c.offset2 < l.offset2)
      return;
    const m = i(e, c.offset1), g = i(t, c.offset2);
    if (!m || !g)
      return;
    let _ = new he(m, g);
    const p = _.intersect(d);
    let L = p.seq1Range.length, A = p.seq2Range.length;
    for (; s.length > 0; ) {
      const w = s[0];
      if (!(w.seq1Range.intersects(_.seq1Range) || w.seq2Range.intersects(_.seq2Range)))
        break;
      const H = i(e, w.seq1Range.start), W = i(t, w.seq2Range.start), O = new he(H, W), b = O.intersect(w);
      if (L += b.seq1Range.length, A += b.seq2Range.length, _ = _.join(O), _.seq1Range.endExclusive >= w.seq1Range.endExclusive)
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
  return Fh(n, a);
}
function Fh(e, t) {
  const n = [];
  for (; e.length > 0 || t.length > 0; ) {
    const i = e[0], r = t[0];
    let s;
    i && (!r || i.seq1Range.start < r.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function Ph(e, t, n) {
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
      let c = function(m, g) {
        const _ = new j(u.seq1Range.endExclusive, o.seq1Range.start);
        return e.getText(_).replace(/\s/g, "").length <= 4 && (m.seq1Range.length + m.seq2Range.length > 5 || g.seq1Range.length + g.seq2Range.length > 5);
      };
      const o = i[l], u = a[a.length - 1];
      c(u, o) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(o)) : a.push(o);
    }
    i = a;
  } while (r++ < 10 && s);
  return i;
}
function Bh(e, t, n) {
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
      let d = function(g, _) {
        const p = new j(c.seq1Range.endExclusive, u.seq1Range.start);
        if (e.countLinesIn(p) > 5 || p.length > 500)
          return !1;
        const A = e.getText(p).trim();
        if (A.length > 20 || A.split(/\r\n|\r|\n/).length > 1)
          return !1;
        const w = e.countLinesIn(g.seq1Range), E = g.seq1Range.length, H = t.countLinesIn(g.seq2Range), W = g.seq2Range.length, O = e.countLinesIn(_.seq1Range), b = _.seq1Range.length, f = t.countLinesIn(_.seq2Range), v = _.seq2Range.length, P = 130;
        function R(k) {
          return Math.min(k, P);
        }
        return Math.pow(Math.pow(R(w * 40 + E), 1.5) + Math.pow(R(H * 40 + W), 1.5), 1.5) + Math.pow(Math.pow(R(O * 40 + b), 1.5) + Math.pow(R(f * 40 + v), 1.5), 1.5) > (P ** 1.5) ** 1.5 * 1.3;
      };
      const u = i[o], c = l[l.length - 1];
      d(c, u) ? (s = !0, l[l.length - 1] = l[l.length - 1].join(u)) : l.push(u);
    }
    i = l;
  } while (r++ < 10 && s);
  const a = [];
  return du(i, (l, o, u) => {
    let c = o;
    function d(A) {
      return A.length > 0 && A.trim().length <= 3 && o.seq1Range.length + o.seq2Range.length > 100;
    }
    const m = e.extendToFullLines(o.seq1Range), g = e.getText(new j(m.start, o.seq1Range.start));
    d(g) && (c = c.deltaStart(-g.length));
    const _ = e.getText(new j(o.seq1Range.endExclusive, m.endExclusive));
    d(_) && (c = c.deltaEnd(_.length));
    const p = he.fromOffsetPairs(l ? l.getEndExclusives() : ut.zero, u ? u.getStarts() : ut.max), L = c.intersect(p);
    a.length > 0 && L.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(L) : a.push(L);
  }), a;
}
class Ca {
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
    const n = t === 0 ? 0 : Ga(this.lines[t - 1]), i = t === this.lines.length ? 0 : Ga(this.lines[t]);
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
function Ga(e) {
  let t = 0;
  for (; t < e.length && (e.charCodeAt(t) === M.Space || e.charCodeAt(t) === M.Tab); )
    t++;
  return t;
}
class Hh {
  constructor() {
    this.dynamicProgrammingDiffing = new xh(), this.myersDiffingAlgorithm = new Wl();
  }
  computeDiff(t, n, i) {
    if (t.length <= 1 && bl(t, n, (b, f) => b === f))
      return new qn([], [], !1);
    if (t.length === 1 && t[0].length === 0 || n.length === 1 && n[0].length === 0)
      return new qn([
        new nt(new ne(1, t.length + 1), new ne(1, n.length + 1), [
          new Ne(new X(
            1,
            1,
            t.length,
            t[t.length - 1].length + 1
          ), new X(
            1,
            1,
            n.length,
            n[n.length - 1].length + 1
          ))
        ])
      ], [], !1);
    const r = i.maxComputationTimeMs === 0 ? Rn.instance : new Th(i.maxComputationTimeMs), s = !i.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
    function l(b) {
      let f = a.get(b);
      return f === void 0 && (f = a.size, a.set(b, f)), f;
    }
    const o = t.map((b) => l(b.trim())), u = n.map((b) => l(b.trim())), c = new Ca(o, t), d = new Ca(u, n), m = c.length + d.length < 1700 ? this.dynamicProgrammingDiffing.compute(c, d, r, (b, f) => t[b] === n[f] ? n[f].length === 0 ? 0.1 : 1 + Math.log(1 + n[f].length) : 0.99) : this.myersDiffingAlgorithm.compute(c, d, r);
    let g = m.diffs, _ = m.hitTimeout;
    g = za(c, d, g), g = Ph(c, d, g);
    const p = [], L = (b) => {
      if (s)
        for (let f = 0; f < b; f++) {
          const v = A + f, P = w + f;
          if (t[v] !== n[P]) {
            const R = this.refineDiff(t, n, new he(new j(v, v + 1), new j(P, P + 1)), r, s, i);
            for (const k of R.mappings)
              p.push(k);
            R.hitTimeout && (_ = !0);
          }
        }
    };
    let A = 0, w = 0;
    for (const b of g) {
      yn(() => b.seq1Range.start - A === b.seq2Range.start - w);
      const f = b.seq1Range.start - A;
      L(f), A = b.seq1Range.endExclusive, w = b.seq2Range.endExclusive;
      const v = this.refineDiff(t, n, b, r, s, i);
      v.hitTimeout && (_ = !0);
      for (const P of v.mappings)
        p.push(P);
    }
    L(t.length - A);
    const E = new Un(t), H = new Un(n), W = Da(p, E, H);
    let O = [];
    return i.computeMoves && (O = this.computeMoves(W, t, n, o, u, r, s, i)), yn(() => {
      function b(v, P) {
        if (v.lineNumber < 1 || v.lineNumber > P.length)
          return !1;
        const R = P[v.lineNumber - 1];
        return !(v.column < 1 || v.column > R.length + 1);
      }
      function f(v, P) {
        return !(v.startLineNumber < 1 || v.startLineNumber > P.length + 1 || v.endLineNumberExclusive < 1 || v.endLineNumberExclusive > P.length + 1);
      }
      for (const v of W) {
        if (!v.innerChanges)
          return !1;
        for (const P of v.innerChanges)
          if (!(b(P.modifiedRange.getStartPosition(), n) && b(P.modifiedRange.getEndPosition(), n) && b(P.originalRange.getStartPosition(), t) && b(P.originalRange.getEndPosition(), t)))
            return !1;
        if (!f(v.modified, n) || !f(v.original, t))
          return !1;
      }
      return !0;
    }), new qn(W, O, _);
  }
  computeMoves(t, n, i, r, s, a, l, o) {
    return Eh(t, n, i, r, s, a).map((d) => {
      const m = this.refineDiff(n, i, new he(d.original.toOffsetRange(), d.modified.toOffsetRange()), a, l, o), g = Da(m.mappings, new Un(n), new Un(i), !0);
      return new Rr(d, g);
    });
  }
  refineDiff(t, n, i, r, s, a) {
    const o = Oh(i).toRangeMapping2(t, n), u = new ti(t, o.originalRange, s), c = new ti(n, o.modifiedRange, s), d = u.length + c.length < 500 ? this.dynamicProgrammingDiffing.compute(u, c, r) : this.myersDiffingAlgorithm.compute(u, c, r);
    let m = d.diffs;
    return m = za(u, c, m), m = Va(u, c, m, (_, p) => _.findWordContaining(p)), a.extendToSubwords && (m = Va(u, c, m, (_, p) => _.findSubWordContaining(p), !0)), m = Ih(u, c, m), m = Bh(u, c, m), {
      mappings: m.map((_) => new Ne(u.translateRange(_.seq1Range), c.translateRange(_.seq2Range))),
      hitTimeout: d.hitTimeout
    };
  }
}
function Oh(e) {
  return new qe(new ne(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new ne(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const on = {
  getLegacy: () => new wh(),
  getDefault: () => new Hh()
};
function Tt(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
class S {
  constructor(t, n, i, r = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = Tt(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}
class We {
  constructor(t, n, i, r) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Tt(Math.max(Math.min(1, n), 0), 3), this.l = Tt(Math.max(Math.min(1, i), 0), 3), this.a = Tt(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = t.a, a = Math.max(n, i, r), l = Math.min(n, i, r);
    let o = 0, u = 0;
    const c = (l + a) / 2, d = a - l;
    if (d > 0) {
      switch (u = Math.min(c <= 0.5 ? d / (2 * c) : d / (2 - 2 * c), 1), a) {
        case n:
          o = (i - r) / d + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / d + 2;
          break;
        case r:
          o = (n - i) / d + 4;
          break;
      }
      o *= 60, o = Math.round(o);
    }
    return new We(o, u, c, s);
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
      a = We._hue2rgb(c, u, n + 1 / 3), l = We._hue2rgb(c, u, n), o = We._hue2rgb(c, u, n - 1 / 3);
    }
    return new S(Math.round(a * 255), Math.round(l * 255), Math.round(o * 255), s);
  }
}
class qt {
  constructor(t, n, i, r) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Tt(Math.max(Math.min(1, n), 0), 3), this.v = Tt(Math.max(Math.min(1, i), 0), 3), this.a = Tt(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = Math.max(n, i, r), a = Math.min(n, i, r), l = s - a, o = s === 0 ? 0 : l / s;
    let u;
    return l === 0 ? u = 0 : s === n ? u = ((i - r) / l % 6 + 6) % 6 : s === i ? u = (r - n) / l + 2 : u = (n - i) / l + 4, new qt(Math.round(u * 60), o, s, t.a);
  }
  static toRGBA(t) {
    const { h: n, s: i, v: r, a: s } = t, a = r * i, l = a * (1 - Math.abs(n / 60 % 2 - 1)), o = r - a;
    let [u, c, d] = [0, 0, 0];
    return n < 60 ? (u = a, c = l) : n < 120 ? (u = l, c = a) : n < 180 ? (c = a, d = l) : n < 240 ? (c = l, d = a) : n < 300 ? (u = l, d = a) : n <= 360 && (u = a, d = l), u = Math.round((u + o) * 255), c = Math.round((c + o) * 255), d = Math.round((d + o) * 255), new S(u, c, d, s);
  }
}
var ee;
let ni = (ee = class {
  static fromHex(t) {
    return ee.Format.CSS.parseHex(t) || ee.red;
  }
  static equals(t, n) {
    return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : We.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : qt.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t)
      if (t instanceof S)
        this.rgba = t;
      else if (t instanceof We)
        this._hsla = t, this.rgba = We.toRGBA(t);
      else if (t instanceof qt)
        this._hsva = t, this.rgba = qt.toRGBA(t);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && S.equals(this.rgba, t.rgba) && We.equals(this.hsla, t.hsla) && qt.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = ee._relativeLuminanceForComponent(this.rgba.r), n = ee._relativeLuminanceForComponent(this.rgba.g), i = ee._relativeLuminanceForComponent(this.rgba.b), r = 0.2126 * t + 0.7152 * n + 0.0722 * i;
    return Tt(r, 4);
  }
  reduceRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i > 0 || r > 0 || s > 0); )
      i -= Math.max(0, Math.ceil(i * 0.1)), r -= Math.max(0, Math.ceil(r * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), a = this.getContrastRatio(new ee(new S(i, r, s)));
    return new ee(new S(i, r, s));
  }
  increaseRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i < 255 || r < 255 || s < 255); )
      i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), a = this.getContrastRatio(new ee(new S(i, r, s)));
    return new ee(new S(i, r, s));
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
          const c = this.increaseRelativeLuminace(t, n), d = this.getContrastRatio(c);
          return u > d ? o : c;
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
    return new ee(new We(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new ee(new We(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new ee(new S(n, i, r, s * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new ee(new S(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const n = t.rgba, i = this.rgba.a, r = n.a, s = i + r * (1 - i);
    if (s < 1e-6)
      return ee.transparent;
    const a = this.rgba.r * i / s + n.r * r * (1 - i) / s, l = this.rgba.g * i / s + n.g * r * (1 - i) / s, o = this.rgba.b * i / s + n.b * r * (1 - i) / s;
    return new ee(new S(a, l, o, s));
  }
  mix(t, n = 0.5) {
    const i = Math.min(Math.max(n, 0), 1), r = this.rgba, s = t.rgba, a = r.r + (s.r - r.r) * i, l = r.g + (s.g - r.g) * i, o = r.b + (s.b - r.b) * i, u = r.a + (s.a - r.a) * i;
    return new ee(new S(a, l, o, u));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1)
      return this;
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new ee(new S(
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
    return new ee(new S(
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
}, ee.white = new ee(new S(255, 255, 255, 1)), ee.black = new ee(new S(0, 0, 0, 1)), ee.red = new ee(new S(255, 0, 0, 1)), ee.blue = new ee(new S(0, 0, 255, 1)), ee.green = new ee(new S(0, 255, 0, 1)), ee.cyan = new ee(new S(0, 255, 255, 1)), ee.lightgrey = new ee(new S(211, 211, 211, 1)), ee.transparent = new ee(new S(0, 0, 0, 0)), ee);
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
        return p.hsla.a === 1 ? `hsl(${p.hsla.h}, ${Math.round(p.hsla.s * 100)}%, ${Math.round(p.hsla.l * 100)}%)` : e.Format.CSS.formatHSLA(p);
      }
      n.formatHSL = s;
      function a(p) {
        return `hsla(${p.hsla.h}, ${Math.round(p.hsla.s * 100)}%, ${Math.round(p.hsla.l * 100)}%, ${p.hsla.a.toFixed(2)})`;
      }
      n.formatHSLA = a;
      function l(p) {
        const L = p.toString(16);
        return L.length !== 2 ? "0" + L : L;
      }
      function o(p) {
        return `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}`;
      }
      n.formatHex = o;
      function u(p, L = !1) {
        return L && p.rgba.a === 1 ? e.Format.CSS.formatHex(p) : `#${l(p.rgba.r)}${l(p.rgba.g)}${l(p.rgba.b)}${l(Math.round(p.rgba.a * 255))}`;
      }
      n.formatHexA = u;
      function c(p) {
        return p.isOpaque() ? e.Format.CSS.formatHex(p) : e.Format.CSS.formatRGBA(p);
      }
      n.format = c;
      function d(p) {
        var L, A, w, E, H, W, O;
        if (p === "transparent")
          return e.transparent;
        if (p.startsWith("#"))
          return g(p);
        if (p.startsWith("rgba(")) {
          const b = p.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!b)
            throw new Error("Invalid color format " + p);
          const f = parseInt(((L = b.groups) == null ? void 0 : L.r) ?? "0"), v = parseInt(((A = b.groups) == null ? void 0 : A.g) ?? "0"), P = parseInt(((w = b.groups) == null ? void 0 : w.b) ?? "0"), R = parseFloat(((E = b.groups) == null ? void 0 : E.a) ?? "0");
          return new e(new S(f, v, P, R));
        }
        if (p.startsWith("rgb(")) {
          const b = p.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!b)
            throw new Error("Invalid color format " + p);
          const f = parseInt(((H = b.groups) == null ? void 0 : H.r) ?? "0"), v = parseInt(((W = b.groups) == null ? void 0 : W.g) ?? "0"), P = parseInt(((O = b.groups) == null ? void 0 : O.b) ?? "0");
          return new e(new S(f, v, P));
        }
        return m(p);
      }
      n.parse = d;
      function m(p) {
        switch (p) {
          case "aliceblue":
            return new e(new S(240, 248, 255, 1));
          case "antiquewhite":
            return new e(new S(250, 235, 215, 1));
          case "aqua":
            return new e(new S(0, 255, 255, 1));
          case "aquamarine":
            return new e(new S(127, 255, 212, 1));
          case "azure":
            return new e(new S(240, 255, 255, 1));
          case "beige":
            return new e(new S(245, 245, 220, 1));
          case "bisque":
            return new e(new S(255, 228, 196, 1));
          case "black":
            return new e(new S(0, 0, 0, 1));
          case "blanchedalmond":
            return new e(new S(255, 235, 205, 1));
          case "blue":
            return new e(new S(0, 0, 255, 1));
          case "blueviolet":
            return new e(new S(138, 43, 226, 1));
          case "brown":
            return new e(new S(165, 42, 42, 1));
          case "burlywood":
            return new e(new S(222, 184, 135, 1));
          case "cadetblue":
            return new e(new S(95, 158, 160, 1));
          case "chartreuse":
            return new e(new S(127, 255, 0, 1));
          case "chocolate":
            return new e(new S(210, 105, 30, 1));
          case "coral":
            return new e(new S(255, 127, 80, 1));
          case "cornflowerblue":
            return new e(new S(100, 149, 237, 1));
          case "cornsilk":
            return new e(new S(255, 248, 220, 1));
          case "crimson":
            return new e(new S(220, 20, 60, 1));
          case "cyan":
            return new e(new S(0, 255, 255, 1));
          case "darkblue":
            return new e(new S(0, 0, 139, 1));
          case "darkcyan":
            return new e(new S(0, 139, 139, 1));
          case "darkgoldenrod":
            return new e(new S(184, 134, 11, 1));
          case "darkgray":
            return new e(new S(169, 169, 169, 1));
          case "darkgreen":
            return new e(new S(0, 100, 0, 1));
          case "darkgrey":
            return new e(new S(169, 169, 169, 1));
          case "darkkhaki":
            return new e(new S(189, 183, 107, 1));
          case "darkmagenta":
            return new e(new S(139, 0, 139, 1));
          case "darkolivegreen":
            return new e(new S(85, 107, 47, 1));
          case "darkorange":
            return new e(new S(255, 140, 0, 1));
          case "darkorchid":
            return new e(new S(153, 50, 204, 1));
          case "darkred":
            return new e(new S(139, 0, 0, 1));
          case "darksalmon":
            return new e(new S(233, 150, 122, 1));
          case "darkseagreen":
            return new e(new S(143, 188, 143, 1));
          case "darkslateblue":
            return new e(new S(72, 61, 139, 1));
          case "darkslategray":
            return new e(new S(47, 79, 79, 1));
          case "darkslategrey":
            return new e(new S(47, 79, 79, 1));
          case "darkturquoise":
            return new e(new S(0, 206, 209, 1));
          case "darkviolet":
            return new e(new S(148, 0, 211, 1));
          case "deeppink":
            return new e(new S(255, 20, 147, 1));
          case "deepskyblue":
            return new e(new S(0, 191, 255, 1));
          case "dimgray":
            return new e(new S(105, 105, 105, 1));
          case "dimgrey":
            return new e(new S(105, 105, 105, 1));
          case "dodgerblue":
            return new e(new S(30, 144, 255, 1));
          case "firebrick":
            return new e(new S(178, 34, 34, 1));
          case "floralwhite":
            return new e(new S(255, 250, 240, 1));
          case "forestgreen":
            return new e(new S(34, 139, 34, 1));
          case "fuchsia":
            return new e(new S(255, 0, 255, 1));
          case "gainsboro":
            return new e(new S(220, 220, 220, 1));
          case "ghostwhite":
            return new e(new S(248, 248, 255, 1));
          case "gold":
            return new e(new S(255, 215, 0, 1));
          case "goldenrod":
            return new e(new S(218, 165, 32, 1));
          case "gray":
            return new e(new S(128, 128, 128, 1));
          case "green":
            return new e(new S(0, 128, 0, 1));
          case "greenyellow":
            return new e(new S(173, 255, 47, 1));
          case "grey":
            return new e(new S(128, 128, 128, 1));
          case "honeydew":
            return new e(new S(240, 255, 240, 1));
          case "hotpink":
            return new e(new S(255, 105, 180, 1));
          case "indianred":
            return new e(new S(205, 92, 92, 1));
          case "indigo":
            return new e(new S(75, 0, 130, 1));
          case "ivory":
            return new e(new S(255, 255, 240, 1));
          case "khaki":
            return new e(new S(240, 230, 140, 1));
          case "lavender":
            return new e(new S(230, 230, 250, 1));
          case "lavenderblush":
            return new e(new S(255, 240, 245, 1));
          case "lawngreen":
            return new e(new S(124, 252, 0, 1));
          case "lemonchiffon":
            return new e(new S(255, 250, 205, 1));
          case "lightblue":
            return new e(new S(173, 216, 230, 1));
          case "lightcoral":
            return new e(new S(240, 128, 128, 1));
          case "lightcyan":
            return new e(new S(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new e(new S(250, 250, 210, 1));
          case "lightgray":
            return new e(new S(211, 211, 211, 1));
          case "lightgreen":
            return new e(new S(144, 238, 144, 1));
          case "lightgrey":
            return new e(new S(211, 211, 211, 1));
          case "lightpink":
            return new e(new S(255, 182, 193, 1));
          case "lightsalmon":
            return new e(new S(255, 160, 122, 1));
          case "lightseagreen":
            return new e(new S(32, 178, 170, 1));
          case "lightskyblue":
            return new e(new S(135, 206, 250, 1));
          case "lightslategray":
            return new e(new S(119, 136, 153, 1));
          case "lightslategrey":
            return new e(new S(119, 136, 153, 1));
          case "lightsteelblue":
            return new e(new S(176, 196, 222, 1));
          case "lightyellow":
            return new e(new S(255, 255, 224, 1));
          case "lime":
            return new e(new S(0, 255, 0, 1));
          case "limegreen":
            return new e(new S(50, 205, 50, 1));
          case "linen":
            return new e(new S(250, 240, 230, 1));
          case "magenta":
            return new e(new S(255, 0, 255, 1));
          case "maroon":
            return new e(new S(128, 0, 0, 1));
          case "mediumaquamarine":
            return new e(new S(102, 205, 170, 1));
          case "mediumblue":
            return new e(new S(0, 0, 205, 1));
          case "mediumorchid":
            return new e(new S(186, 85, 211, 1));
          case "mediumpurple":
            return new e(new S(147, 112, 219, 1));
          case "mediumseagreen":
            return new e(new S(60, 179, 113, 1));
          case "mediumslateblue":
            return new e(new S(123, 104, 238, 1));
          case "mediumspringgreen":
            return new e(new S(0, 250, 154, 1));
          case "mediumturquoise":
            return new e(new S(72, 209, 204, 1));
          case "mediumvioletred":
            return new e(new S(199, 21, 133, 1));
          case "midnightblue":
            return new e(new S(25, 25, 112, 1));
          case "mintcream":
            return new e(new S(245, 255, 250, 1));
          case "mistyrose":
            return new e(new S(255, 228, 225, 1));
          case "moccasin":
            return new e(new S(255, 228, 181, 1));
          case "navajowhite":
            return new e(new S(255, 222, 173, 1));
          case "navy":
            return new e(new S(0, 0, 128, 1));
          case "oldlace":
            return new e(new S(253, 245, 230, 1));
          case "olive":
            return new e(new S(128, 128, 0, 1));
          case "olivedrab":
            return new e(new S(107, 142, 35, 1));
          case "orange":
            return new e(new S(255, 165, 0, 1));
          case "orangered":
            return new e(new S(255, 69, 0, 1));
          case "orchid":
            return new e(new S(218, 112, 214, 1));
          case "palegoldenrod":
            return new e(new S(238, 232, 170, 1));
          case "palegreen":
            return new e(new S(152, 251, 152, 1));
          case "paleturquoise":
            return new e(new S(175, 238, 238, 1));
          case "palevioletred":
            return new e(new S(219, 112, 147, 1));
          case "papayawhip":
            return new e(new S(255, 239, 213, 1));
          case "peachpuff":
            return new e(new S(255, 218, 185, 1));
          case "peru":
            return new e(new S(205, 133, 63, 1));
          case "pink":
            return new e(new S(255, 192, 203, 1));
          case "plum":
            return new e(new S(221, 160, 221, 1));
          case "powderblue":
            return new e(new S(176, 224, 230, 1));
          case "purple":
            return new e(new S(128, 0, 128, 1));
          case "rebeccapurple":
            return new e(new S(102, 51, 153, 1));
          case "red":
            return new e(new S(255, 0, 0, 1));
          case "rosybrown":
            return new e(new S(188, 143, 143, 1));
          case "royalblue":
            return new e(new S(65, 105, 225, 1));
          case "saddlebrown":
            return new e(new S(139, 69, 19, 1));
          case "salmon":
            return new e(new S(250, 128, 114, 1));
          case "sandybrown":
            return new e(new S(244, 164, 96, 1));
          case "seagreen":
            return new e(new S(46, 139, 87, 1));
          case "seashell":
            return new e(new S(255, 245, 238, 1));
          case "sienna":
            return new e(new S(160, 82, 45, 1));
          case "silver":
            return new e(new S(192, 192, 192, 1));
          case "skyblue":
            return new e(new S(135, 206, 235, 1));
          case "slateblue":
            return new e(new S(106, 90, 205, 1));
          case "slategray":
            return new e(new S(112, 128, 144, 1));
          case "slategrey":
            return new e(new S(112, 128, 144, 1));
          case "snow":
            return new e(new S(255, 250, 250, 1));
          case "springgreen":
            return new e(new S(0, 255, 127, 1));
          case "steelblue":
            return new e(new S(70, 130, 180, 1));
          case "tan":
            return new e(new S(210, 180, 140, 1));
          case "teal":
            return new e(new S(0, 128, 128, 1));
          case "thistle":
            return new e(new S(216, 191, 216, 1));
          case "tomato":
            return new e(new S(255, 99, 71, 1));
          case "turquoise":
            return new e(new S(64, 224, 208, 1));
          case "violet":
            return new e(new S(238, 130, 238, 1));
          case "wheat":
            return new e(new S(245, 222, 179, 1));
          case "white":
            return new e(new S(255, 255, 255, 1));
          case "whitesmoke":
            return new e(new S(245, 245, 245, 1));
          case "yellow":
            return new e(new S(255, 255, 0, 1));
          case "yellowgreen":
            return new e(new S(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function g(p) {
        const L = p.length;
        if (L === 0 || p.charCodeAt(0) !== M.Hash)
          return null;
        if (L === 7) {
          const A = 16 * _(p.charCodeAt(1)) + _(p.charCodeAt(2)), w = 16 * _(p.charCodeAt(3)) + _(p.charCodeAt(4)), E = 16 * _(p.charCodeAt(5)) + _(p.charCodeAt(6));
          return new e(new S(A, w, E, 1));
        }
        if (L === 9) {
          const A = 16 * _(p.charCodeAt(1)) + _(p.charCodeAt(2)), w = 16 * _(p.charCodeAt(3)) + _(p.charCodeAt(4)), E = 16 * _(p.charCodeAt(5)) + _(p.charCodeAt(6)), H = 16 * _(p.charCodeAt(7)) + _(p.charCodeAt(8));
          return new e(new S(A, w, E, H / 255));
        }
        if (L === 4) {
          const A = _(p.charCodeAt(1)), w = _(p.charCodeAt(2)), E = _(p.charCodeAt(3));
          return new e(new S(16 * A + A, 16 * w + w, 16 * E + E));
        }
        if (L === 5) {
          const A = _(p.charCodeAt(1)), w = _(p.charCodeAt(2)), E = _(p.charCodeAt(3)), H = _(p.charCodeAt(4));
          return new e(new S(16 * A + A, 16 * w + w, 16 * E + E, (16 * H + H) / 255));
        }
        return null;
      }
      n.parseHex = g;
      function _(p) {
        switch (p) {
          case M.Digit0:
            return 0;
          case M.Digit1:
            return 1;
          case M.Digit2:
            return 2;
          case M.Digit3:
            return 3;
          case M.Digit4:
            return 4;
          case M.Digit5:
            return 5;
          case M.Digit6:
            return 6;
          case M.Digit7:
            return 7;
          case M.Digit8:
            return 8;
          case M.Digit9:
            return 9;
          case M.a:
            return 10;
          case M.A:
            return 10;
          case M.b:
            return 11;
          case M.B:
            return 11;
          case M.c:
            return 12;
          case M.C:
            return 12;
          case M.d:
            return 13;
          case M.D:
            return 13;
          case M.e:
            return 14;
          case M.E:
            return 14;
          case M.f:
            return 15;
          case M.F:
            return 15;
        }
        return 0;
      }
    })(t.CSS || (t.CSS = {}));
  })(e.Format || (e.Format = {}));
})(ni || (ni = {}));
function ql(e) {
  const t = [];
  for (const n of e) {
    const i = Number(n);
    (i || i === 0 && n.replace(/\s/g, "") !== "") && t.push(i);
  }
  return t;
}
function Nr(e, t, n, i) {
  return {
    red: e / 255,
    blue: n / 255,
    green: t / 255,
    alpha: i
  };
}
function ln(e, t) {
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
function zh(e, t) {
  if (!e)
    return;
  const n = ni.Format.CSS.parseHex(t);
  if (n)
    return {
      range: e,
      color: Nr(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
    };
}
function ja(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = ql(r);
  return {
    range: e,
    color: Nr(s[0], s[1], s[2], n ? s[3] : 1)
  };
}
function $a(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = ql(r), a = new ni(new We(
    s[0],
    s[1] / 100,
    s[2] / 100,
    n ? s[3] : 1
  ));
  return {
    range: e,
    color: Nr(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a)
  };
}
function un(e, t) {
  return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function Wh(e) {
  const t = [], n = new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{3})\\b|^(#)([A-Fa-f0-9]{4})\\b|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{3})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{4})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"), i = un(e, n);
  if (i.length > 0)
    for (const r of i) {
      const s = r.filter((u) => u !== void 0), a = s[1], l = s[2];
      if (!l)
        continue;
      let o;
      if (a === "rgb") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        o = ja(ln(e, r), un(l, u), !1);
      } else if (a === "rgba") {
        const u = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = ja(ln(e, r), un(l, u), !0);
      } else if (a === "hsl") {
        const u = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        o = $a(ln(e, r), un(l, u), !1);
      } else if (a === "hsla") {
        const u = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm;
        o = $a(ln(e, r), un(l, u), !0);
      } else a === "#" && (o = zh(ln(e, r), a + l));
      o && t.push(o);
    }
  return t;
}
function qh(e) {
  return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : Wh(e);
}
const Vh = /^-+|-+$/g, Xa = 100, Ch = 5;
function Gh(e, t) {
  var i;
  let n = [];
  if (t.findRegionSectionHeaders && ((i = t.foldingRules) != null && i.markers)) {
    const r = jh(e, t);
    n = n.concat(r);
  }
  if (t.findMarkSectionHeaders) {
    const r = $h(e, t);
    n = n.concat(r);
  }
  return n;
}
function jh(e, t) {
  const n = [], i = e.getLineCount();
  for (let r = 1; r <= i; r++) {
    const s = e.getLineContent(r), a = s.match(t.foldingRules.markers.start);
    if (a) {
      const l = { startLineNumber: r, startColumn: a[0].length + 1, endLineNumber: r, endColumn: s.length + 1 };
      if (l.endColumn > l.startColumn) {
        const o = {
          range: l,
          ...Xh(s.substring(a[0].length)),
          shouldBeInComments: !1
        };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  return n;
}
function $h(e, t) {
  const n = [], i = e.getLineCount();
  if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "")
    return n;
  const r = rh(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${r ? "s" : ""}`);
  if (Zu(s))
    return n;
  for (let a = 1; a <= i; a += Xa - Ch) {
    const l = Math.min(a + Xa - 1, i), o = [];
    for (let d = a; d <= l; d++)
      o.push(e.getLineContent(d));
    const u = o.join(`
`);
    s.lastIndex = 0;
    let c;
    for (; (c = s.exec(u)) !== null; ) {
      const d = u.substring(0, c.index), m = (d.match(/\n/g) || []).length, g = a + m, _ = c[0].split(`
`), p = _.length, L = g + p - 1, A = d.lastIndexOf(`
`) + 1, w = c.index - A + 1, E = _[_.length - 1], H = p === 1 ? w + c[0].length : E.length + 1, W = {
        startLineNumber: g,
        startColumn: w,
        endLineNumber: L,
        endColumn: H
      }, O = (c.groups ?? {}).label ?? "", b = ((c.groups ?? {}).separator ?? "") !== "", f = {
        range: W,
        text: O,
        hasSeparatorLine: b,
        shouldBeInComments: !0
      };
      (f.text || f.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < f.range.startLineNumber) && n.push(f), s.lastIndex = c.index + c[0].length;
    }
  }
  return n;
}
function Xh(e) {
  e = e.trim();
  const t = e.startsWith("-");
  return e = e.replace(Vh, ""), { text: e, hasSeparatorLine: t };
}
function gt(e) {
  return e === M.Slash || e === M.Backslash;
}
function Vl(e) {
  return e.replace(/[\\/]/g, oe.sep);
}
function Yh(e) {
  return e.indexOf("/") === -1 && (e = Vl(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function Ya(e, t = oe.sep) {
  if (!e)
    return "";
  const n = e.length, i = e.charCodeAt(0);
  if (gt(i)) {
    if (gt(e.charCodeAt(1)) && !gt(e.charCodeAt(2))) {
      let s = 3;
      const a = s;
      for (; s < n && !gt(e.charCodeAt(s)); s++)
        ;
      if (a !== s && !gt(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (gt(e.charCodeAt(s)))
            return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (Qh(i) && e.charCodeAt(1) === M.Colon)
    return gt(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < n; r++)
      if (gt(e.charCodeAt(r)))
        return e.slice(0, r + 1);
  }
  return "";
}
function Qa(e, t, n, i = zn) {
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
    return t.charAt(t.length - 1) === i && s--, e.charAt(s) === i;
  }
  return t.charAt(t.length - 1) !== i && (t += i), e.indexOf(t) === 0;
}
function Qh(e) {
  return e >= M.A && e <= M.Z || e >= M.a && e <= M.z;
}
var Ae;
(function(e) {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatEditor = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.vscodeChatSession = "vscode-chat-session", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
})(Ae || (Ae = {}));
const Jh = "tkn";
class Zh {
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
    this._serverRootPath = oe.join(n ?? "/", ed(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return oe.join(this._serverRootPath, Ae.vscodeRemoteResource);
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
        return hn(l), t;
      }
    const n = t.authority;
    let i = this._hosts[n];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const r = this._ports[n], s = this._connectionTokens[n];
    let a = `path=${encodeURIComponent(t.path)}`;
    return typeof s == "string" && (a += `&${Jh}=${encodeURIComponent(s)}`), Pe.from({
      scheme: Vu ? this._preferredWebSchema : Ae.vscodeRemoteResource,
      authority: `${i}:${r}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const Kh = new Zh();
function ed(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const td = "vscode-app", $t = class $t {
  constructor() {
    this.staticBrowserUris = new Di(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
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
    return t.scheme === Ae.vscodeRemote ? Kh.rewrite(t) : t.scheme === Ae.file && (qu || Gu === `${Ae.vscodeFileResource}://${$t.FALLBACK_AUTHORITY}`) ? t.with({
      scheme: Ae.vscodeFileResource,
      authority: t.authority || $t.FALLBACK_AUTHORITY,
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
      authority: t.authority !== $t.FALLBACK_AUTHORITY ? t.authority : null,
      query: null,
      fragment: null
    }) : t;
  }
  toUri(t) {
    if (Pe.isUri(t))
      return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n))
        return Pe.joinPath(Pe.parse(n, !0), t);
      const i = zc(n, t);
      return Pe.file(i);
    }
    return Pe.parse(this.toUrl(t));
  }
  registerStaticBrowserUri(t, n) {
    return this.staticBrowserUris.set(t, n), Tn(() => {
      this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
    });
  }
  getRegisteredBrowserUris() {
    return this.staticBrowserUris.keys();
  }
};
$t.FALLBACK_AUTHORITY = td;
let Ki = $t;
new Ki();
var Ja;
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
    typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : Pe.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
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
})(Ja || (Ja = {}));
function at(e) {
  return Zn(e, !0);
}
class nd {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, n, i = !1) {
    return t === n ? 0 : tc(this.getComparisonKey(t, i), this.getComparisonKey(n, i));
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
      if (t.scheme === Ae.file)
        return Qa(at(t), at(n), this._ignorePathCasing(t)) && t.query === n.query && (i || t.fragment === n.fragment);
      if (Za(t.authority, n.authority))
        return Qa(t.path, n.path, this._ignorePathCasing(t), "/") && t.query === n.query && (i || t.fragment === n.fragment);
    }
    return !1;
  }
  joinPath(t, ...n) {
    return Pe.joinPath(t, ...n);
  }
  basenameOrAuthority(t) {
    return id(t) || t.authority;
  }
  basename(t) {
    return oe.basename(t.path);
  }
  extname(t) {
    return oe.extname(t.path);
  }
  dirname(t) {
    if (t.path.length === 0)
      return t;
    let n;
    return t.scheme === Ae.file ? n = Pe.file(Vc(at(t))).path : (n = oe.dirname(t.path), t.authority && n.length && n.charCodeAt(0) !== M.Slash && (console.error(`dirname("${t.toString})) resulted in a relative path`), n = "/")), t.with({
      path: n
    });
  }
  normalizePath(t) {
    if (!t.path.length)
      return t;
    let n;
    return t.scheme === Ae.file ? n = Pe.file(Oc(at(t))).path : n = oe.normalize(t.path), t.with({
      path: n
    });
  }
  relativePath(t, n) {
    if (t.scheme !== n.scheme || !Za(t.authority, n.authority))
      return;
    if (t.scheme === Ae.file) {
      const s = qc(at(t), at(n));
      return tn ? Vl(s) : s;
    }
    let i = t.path || "/";
    const r = n.path || "/";
    if (this._ignorePathCasing(t)) {
      let s = 0;
      for (const a = Math.min(i.length, r.length); s < a && !(i.charCodeAt(s) !== r.charCodeAt(s) && i.charAt(s).toLowerCase() !== r.charAt(s).toLowerCase()); s++)
        ;
      i = r.substr(0, s) + i.substr(s);
    }
    return oe.relative(i, r);
  }
  resolvePath(t, n) {
    if (t.scheme === Ae.file) {
      const i = Pe.file(Wc(at(t), n));
      return t.with({
        authority: i.authority,
        path: i.path
      });
    }
    return n = Yh(n), t.with({
      path: oe.resolve(t.path, n)
    });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, n) {
    return t === n || t !== void 0 && n !== void 0 && ic(t, n);
  }
  hasTrailingPathSeparator(t, n = zn) {
    if (t.scheme === Ae.file) {
      const i = at(t);
      return i.length > Ya(i).length && i[i.length - 1] === n;
    } else {
      const i = t.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === M.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, n = zn) {
    return Ka(t, n) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, n = zn) {
    let i = !1;
    if (t.scheme === Ae.file) {
      const r = at(t);
      i = r !== void 0 && r.length === Ya(r).length && r[r.length - 1] === n;
    } else {
      n = "/";
      const r = t.path;
      i = r.length === 1 && r.charCodeAt(r.length - 1) === M.Slash;
    }
    return !i && !Ka(t, n) ? t.with({ path: t.path + "/" }) : t;
  }
}
const re = new nd(() => !1);
re.isEqual.bind(re);
re.isEqualOrParent.bind(re);
re.getComparisonKey.bind(re);
re.basenameOrAuthority.bind(re);
const id = re.basename.bind(re);
re.extname.bind(re);
re.dirname.bind(re);
re.joinPath.bind(re);
re.normalizePath.bind(re);
re.relativePath.bind(re);
re.resolvePath.bind(re);
re.isAbsolutePath.bind(re);
const Za = re.isEqualAuthority.bind(re), Ka = re.hasTrailingPathSeparator.bind(re);
re.removeTrailingPathSeparator.bind(re);
re.addTrailingPathSeparator.bind(re);
var eo;
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
})(eo || (eo = {}));
var to;
(function(e) {
  e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(to || (to = {}));
var no;
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
})(no || (no = {}));
var Ge;
(function(e) {
  e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(Ge || (Ge = {}));
const Ee = class Ee {
  static fromArray(t) {
    return new Ee((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new Ee(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new Ee(async (n) => {
      await Promise.all(t.map(async (i) => n.emitOne(await i)));
    });
  }
  static merge(t) {
    return new Ee(async (n) => {
      await Promise.all(t.map(async (i) => {
        for await (const r of i)
          n.emitOne(r);
      }));
    });
  }
  constructor(t, n) {
    this._state = Ge.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new ze(), queueMicrotask(async () => {
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
          if (this._state === Ge.DoneError)
            throw this._error;
          if (t < this._results.length)
            return { done: !1, value: this._results[t++] };
          if (this._state === Ge.DoneOK)
            return { done: !0, value: void 0 };
          await Gn.toPromise(this._onStateChanged.event);
        } while (!0);
      },
      return: async () => {
        var n;
        return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
      }
    };
  }
  static map(t, n) {
    return new Ee(async (i) => {
      for await (const r of t)
        i.emitOne(n(r));
    });
  }
  map(t) {
    return Ee.map(this, t);
  }
  static filter(t, n) {
    return new Ee(async (i) => {
      for await (const r of t)
        n(r) && i.emitOne(r);
    });
  }
  filter(t) {
    return Ee.filter(this, t);
  }
  static coalesce(t) {
    return Ee.filter(t, (n) => !!n);
  }
  coalesce() {
    return Ee.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const i of t)
      n.push(i);
    return n;
  }
  toPromise() {
    return Ee.toPromise(this);
  }
  emitOne(t) {
    this._state === Ge.Initial && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === Ge.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === Ge.Initial && (this._state = Ge.DoneOK, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === Ge.Initial && (this._state = Ge.DoneError, this._error = t, this._onStateChanged.fire());
  }
};
Ee.EMPTY = Ee.fromArray([]);
let io = Ee;
class rd {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, n) {
    t = Ut(t);
    const i = this.values, r = this.prefixSum, s = n.length;
    return s === 0 ? !1 : (this.values = new Uint32Array(i.length + s), this.values.set(i.subarray(0, t), 0), this.values.set(i.subarray(t), t + s), this.values.set(n, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  setValue(t, n) {
    return t = Ut(t), n = Ut(n), this.values[t] === n ? !1 : (this.values[t] = n, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
  }
  removeValues(t, n) {
    t = Ut(t), n = Ut(n);
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
    return t < 0 ? 0 : (t = Ut(t), this._getPrefixSum(t));
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
    return new sd(r, t - a);
  }
}
class sd {
  constructor(t, n) {
    this.index = t, this.remainder = n, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = n;
  }
}
class ad {
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
      this._acceptDeleteRange(i.range), this._acceptInsertText(new te(i.range.startLineNumber, i.range.startColumn), i.text);
    this._versionId = t.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const t = this._eol.length, n = this._lines.length, i = new Uint32Array(n);
      for (let r = 0; r < n; r++)
        i[r] = this._lines[r].length + t;
      this._lineStarts = new rd(i);
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
    const i = xl(n);
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
const od = "workerTextModelSync";
class ld {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(od, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new ud(Pe.parse(t.url), t.lines, t.EOL, t.versionId);
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
class ud extends ad {
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
      const r = this._lines[i], s = this.offsetAt(new te(i + 1, 1)), a = r.matchAll(t);
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
    const i = Er(t.column, Fl(n), this._lines[t.lineNumber - 1], 0);
    return i ? new X(
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
    if (!te.isIPosition(t))
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
class Cl {
  constructor(t) {
    this.replacements = t;
    let n = -1;
    for (const i of t) {
      if (!(i.replaceRange.start >= n))
        throw new me(
          `Edits must be disjoint and sorted. Found ${i} after ${n}`
        );
      n = i.replaceRange.endExclusive;
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
    for (const i of this.replacements)
      if (!(i.getNewLength() === 0 && i.replaceRange.length === 0)) {
        if (n && n.replaceRange.endExclusive === i.replaceRange.start) {
          const r = n.tryJoinTouching(i);
          if (r) {
            n = r;
            continue;
          }
        }
        n && t.push(n), n = i;
      }
    return n && t.push(n), this._createNew(t);
  }
  compose(t) {
    const n = this.normalize(), i = t.normalize();
    if (n.isEmpty())
      return i;
    if (i.isEmpty())
      return n;
    const r = [...n.replacements], s = [];
    let a = 0;
    for (const l of i.replacements) {
      for (; ; ) {
        const d = r[0];
        if (!d || d.replaceRange.start + a + d.getNewLength() >= l.replaceRange.start)
          break;
        r.shift(), s.push(d), a += d.getNewLength() - d.replaceRange.length;
      }
      const o = a;
      let u, c;
      for (; ; ) {
        const d = r[0];
        if (!d || d.replaceRange.start + a > l.replaceRange.endExclusive)
          break;
        u || (u = d), c = d, r.shift(), a += d.getNewLength() - d.replaceRange.length;
      }
      if (!u)
        s.push(l.delta(-a));
      else {
        const d = Math.min(u.replaceRange.start, l.replaceRange.start - o), m = l.replaceRange.start - (u.replaceRange.start + o);
        if (m > 0) {
          const L = u.slice(j.emptyAt(d), new j(0, m));
          s.push(L);
        }
        if (!c)
          throw new me("Invariant violation: lastIntersecting is undefined");
        const g = c.replaceRange.endExclusive + a - l.replaceRange.endExclusive;
        if (g > 0) {
          const L = c.slice(j.ofStartAndLength(c.replaceRange.endExclusive, 0), new j(
            c.getNewLength() - g,
            c.getNewLength()
          ));
          r.unshift(L), a -= L.getNewLength() - L.replaceRange.length;
        }
        const _ = new j(d, l.replaceRange.endExclusive - a), p = l.slice(_, new j(0, l.getNewLength()));
        s.push(p);
      }
    }
    for (; ; ) {
      const l = r.shift();
      if (!l)
        break;
      s.push(l);
    }
    return this._createNew(s).normalize();
  }
  decomposeSplit(t) {
    const n = [], i = [];
    let r = 0;
    for (const s of this.replacements)
      t(s) ? (n.push(s), r += s.getNewLength() - s.replaceRange.length) : i.push(s.slice(s.replaceRange.delta(r), new j(0, s.getNewLength())));
    return { e1: this._createNew(n), e2: this._createNew(i) };
  }
  getNewRanges() {
    const t = [];
    let n = 0;
    for (const i of this.replacements)
      t.push(j.ofStartAndLength(i.replaceRange.start + n, i.getNewLength())), n += i.getLengthDelta();
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
    return pu(this.replacements, (t) => t.getLengthDelta());
  }
  getNewDataLength(t) {
    return t + this.getLengthDelta();
  }
  applyToOffset(t) {
    let n = 0;
    for (const i of this.replacements)
      if (i.replaceRange.start <= t) {
        if (t < i.replaceRange.endExclusive)
          return i.replaceRange.start + n;
        n += i.getNewLength() - i.replaceRange.length;
      } else
        break;
    return t + n;
  }
  applyToOffsetRange(t) {
    return new j(
      this.applyToOffset(t.start),
      this.applyToOffset(t.endExclusive)
    );
  }
  applyInverseToOffset(t) {
    let n = 0;
    for (const i of this.replacements) {
      const r = i.getNewLength();
      if (i.replaceRange.start <= t - n) {
        if (t - n < i.replaceRange.start + r)
          return i.replaceRange.start;
        n += r - i.replaceRange.length;
      } else
        break;
    }
    return t - n;
  }
  applyToOffsetOrUndefined(t) {
    let n = 0;
    for (const i of this.replacements)
      if (i.replaceRange.start <= t) {
        if (t < i.replaceRange.endExclusive)
          return;
        n += i.getNewLength() - i.replaceRange.length;
      } else
        break;
    return t + n;
  }
  applyToOffsetRangeOrUndefined(t) {
    const n = this.applyToOffsetOrUndefined(t.start);
    if (n === void 0)
      return;
    const i = this.applyToOffsetOrUndefined(t.endExclusive);
    if (i !== void 0)
      return new j(n, i);
  }
}
class cd {
  constructor(t) {
    this.replaceRange = t;
  }
  delta(t) {
    return this.slice(this.replaceRange.delta(t), new j(0, this.getNewLength()));
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
    return new j(this.replaceRange.start, this.replaceRange.start + this.getNewLength());
  }
}
const St = class St extends Cl {
  static create(t) {
    return new St(t);
  }
  static single(t) {
    return new St([t]);
  }
  _createNew(t) {
    return new St(t);
  }
};
St.empty = new St([]);
let ro = St;
class Gl extends Cl {
  get TReplacement() {
    throw new Error("TReplacement is not defined for BaseStringEdit");
  }
  static composeOrUndefined(t) {
    if (t.length === 0)
      return;
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.compose(t[i]);
    return n;
  }
  static trySwap(t, n) {
    const i = t.inverseOnSlice((a, l) => " ".repeat(l - a)), r = n.tryRebase(i);
    if (!r)
      return;
    const s = t.tryRebase(r);
    if (s)
      return { e1: r, e2: s };
  }
  apply(t) {
    const n = [];
    let i = 0;
    for (const r of this.replacements)
      n.push(t.substring(i, r.replaceRange.start)), n.push(r.newText), i = r.replaceRange.endExclusive;
    return n.push(t.substring(i)), n.join("");
  }
  inverseOnSlice(t) {
    const n = [];
    let i = 0;
    for (const r of this.replacements)
      n.push(pe.replace(j.ofStartAndLength(r.replaceRange.start + i, r.newText.length), t(r.replaceRange.start, r.replaceRange.endExclusive))), i += r.newText.length - r.replaceRange.length;
    return new et(n);
  }
  inverse(t) {
    return this.inverseOnSlice((n, i) => t.substring(n, i));
  }
  rebaseSkipConflicting(t) {
    return this._tryRebase(t, !1);
  }
  tryRebase(t) {
    return this._tryRebase(t, !0);
  }
  _tryRebase(t, n) {
    const i = [];
    let r = 0, s = 0, a = 0;
    for (; s < this.replacements.length || r < t.replacements.length; ) {
      const l = t.replacements[r], o = this.replacements[s];
      if (o)
        if (!l)
          i.push(new pe(o.replaceRange.delta(a), o.newText)), s++;
        else if (o.replaceRange.intersectsOrTouches(l.replaceRange)) {
          if (s++, n)
            return;
        } else o.replaceRange.start < l.replaceRange.start ? (i.push(new pe(o.replaceRange.delta(a), o.newText)), s++) : (r++, a += l.newText.length - l.replaceRange.length);
      else break;
    }
    return new et(i);
  }
  toJson() {
    return this.replacements.map((t) => t.toJson());
  }
  isNeutralOn(t) {
    return this.replacements.every((n) => n.isNeutralOn(t));
  }
  removeCommonSuffixPrefix(t) {
    const n = [];
    for (const i of this.replacements) {
      const r = i.removeCommonSuffixPrefix(t);
      r.isEmpty || n.push(r);
    }
    return new et(n);
  }
  normalizeEOL(t) {
    return new et(this.replacements.map((n) => n.normalizeEOL(t)));
  }
  normalizeOnSource(t) {
    const n = this.apply(t), r = pe.replace(j.ofLength(t.length), n).removeCommonSuffixAndPrefix(t);
    return r.isEmpty ? et.empty : r.toEdit();
  }
  removeCommonSuffixAndPrefix(t) {
    return this._createNew(this.replacements.map((n) => n.removeCommonSuffixAndPrefix(t))).normalize();
  }
  applyOnText(t) {
    return new En(this.apply(t.value));
  }
  mapData(t) {
    return new er(this.replacements.map((n) => new tt(n.replaceRange, n.newText, t(n))));
  }
}
class jl extends cd {
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
    const n = t.substring(this.replaceRange.start, this.replaceRange.endExclusive), i = $n(n, this.newText), r = Math.min(n.length - i, this.newText.length - i, Xn(n, this.newText)), s = new j(
      this.replaceRange.start + i,
      this.replaceRange.endExclusive - r
    ), a = this.newText.substring(i, this.newText.length - r);
    return new pe(s, a);
  }
  normalizeEOL(t) {
    const n = this.newText.replace(/\r\n|\n/g, t);
    return new pe(this.replaceRange, n);
  }
  removeCommonSuffixAndPrefix(t) {
    return this.removeCommonSuffix(t).removeCommonPrefix(t);
  }
  removeCommonPrefix(t) {
    const n = this.replaceRange.substring(t), i = $n(n, this.newText);
    return i === 0 ? this : this.slice(this.replaceRange.deltaStart(i), new j(i, this.newText.length));
  }
  removeCommonSuffix(t) {
    const n = this.replaceRange.substring(t), i = Xn(n, this.newText);
    return i === 0 ? this : this.slice(this.replaceRange.deltaEnd(-i), new j(0, this.newText.length - i));
  }
  toEdit() {
    return new et([this]);
  }
  toJson() {
    return {
      txt: this.newText,
      pos: this.replaceRange.start,
      len: this.replaceRange.length
    };
  }
}
const Re = class Re extends Gl {
  static create(t) {
    return new Re(t);
  }
  static single(t) {
    return new Re([t]);
  }
  static replace(t, n) {
    return new Re([new pe(t, n)]);
  }
  static insert(t, n) {
    return new Re([new pe(j.emptyAt(t), n)]);
  }
  static delete(t) {
    return new Re([new pe(t, "")]);
  }
  static fromJson(t) {
    return new Re(t.map(pe.fromJson));
  }
  static compose(t) {
    if (t.length === 0)
      return Re.empty;
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.compose(t[i]);
    return n;
  }
  static composeSequentialReplacements(t) {
    let n = Re.empty, i = [];
    for (const r of t) {
      const s = i.at(-1);
      !s || r.replaceRange.isBefore(s.replaceRange) ? i.push(r) : (n = n.compose(Re.create(i.reverse())), i = [r]);
    }
    return n = n.compose(Re.create(i.reverse())), n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new Re(t);
  }
};
Re.empty = new Re([]);
let et = Re;
class pe extends jl {
  static insert(t, n) {
    return new pe(j.emptyAt(t), n);
  }
  static replace(t, n) {
    return new pe(t, n);
  }
  static delete(t) {
    return new pe(t, "");
  }
  static fromJson(t) {
    return new pe(j.ofStartAndLength(t.pos, t.len), t.txt);
  }
  equals(t) {
    return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
  }
  tryJoinTouching(t) {
    return new pe(
      this.replaceRange.joinRightTouching(t.replaceRange),
      this.newText + t.newText
    );
  }
  slice(t, n) {
    return new pe(
      t,
      n ? n.substring(this.newText) : this.newText
    );
  }
}
const $e = class $e extends Gl {
  static create(t) {
    return new $e(t);
  }
  static single(t) {
    return new $e([t]);
  }
  static replace(t, n, i) {
    return new $e([new tt(t, n, i)]);
  }
  static insert(t, n, i) {
    return new $e([new tt(j.emptyAt(t), n, i)]);
  }
  static delete(t, n) {
    return new $e([new tt(t, "", n)]);
  }
  static compose(t) {
    if (t.length === 0)
      return $e.empty;
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.compose(t[i]);
    return n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new $e(t);
  }
  toStringEdit() {
    return new et(this.replacements.map((t) => new pe(t.replaceRange, t.newText)));
  }
};
$e.empty = new $e([]);
let er = $e;
class tt extends jl {
  static insert(t, n, i) {
    return new tt(j.emptyAt(t), n, i);
  }
  static replace(t, n, i) {
    return new tt(t, n, i);
  }
  static delete(t, n) {
    return new tt(t, "", n);
  }
  constructor(t, n, i) {
    super(t, n), this.data = i;
  }
  equals(t) {
    return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText && this.data === t.data;
  }
  tryJoinTouching(t) {
    const n = this.data.join(t.data);
    if (n !== void 0)
      return new tt(
        this.replaceRange.joinRightTouching(t.replaceRange),
        this.newText + t.newText,
        n
      );
  }
  slice(t, n) {
    return new tt(
      t,
      n ? n.substring(this.newText) : this.newText,
      this.data
    );
  }
}
ph({
  StringEdit: et,
  StringReplacement: pe,
  TextReplacement: xe,
  TextEdit: Sr,
  TextLength: At
});
const vt = class vt {
  constructor(t = null) {
    this._foreignModule = t, this._workerTextModelSyncServer = new ld();
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
    return r ? dh.computeUnicodeHighlights(r, n, i) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(t, n) {
    const i = this._getModel(t);
    return i ? Gh(i, n) : [];
  }
  async $computeDiff(t, n, i, r) {
    const s = this._getModel(t), a = this._getModel(n);
    return !s || !a ? null : vt.computeDiff(s, a, i, r);
  }
  static computeDiff(t, n, i, r) {
    const s = r === "advanced" ? on.getDefault() : on.getLegacy(), a = t.getLinesContent(), l = n.getLinesContent(), o = s.computeDiff(a, l, i), u = o.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
    function c(d) {
      return d.map(
        (m) => {
          var g;
          return [m.original.startLineNumber, m.original.endLineNumberExclusive, m.modified.startLineNumber, m.modified.endLineNumberExclusive, (g = m.innerChanges) == null ? void 0 : g.map((_) => [
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
      moves: o.moves.map((d) => [
        d.lineRangeMapping.original.startLineNumber,
        d.lineRangeMapping.original.endLineNumberExclusive,
        d.lineRangeMapping.modified.startLineNumber,
        d.lineRangeMapping.modified.endLineNumberExclusive,
        c(d.changes)
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
    return new zl(a, l, {
      shouldComputeCharChanges: !1,
      shouldPostProcessCharChanges: !1,
      shouldIgnoreTrimWhitespace: i,
      shouldMakePrettyDiff: !0,
      maxComputationTime: 1e3
    }).computeDiff().changes;
  }
  $computeStringDiff(t, n, i, r) {
    const s = r === "advanced" ? on.getDefault() : on.getLegacy(), a = new En(t), l = a.getLines(), o = new En(n), u = o.getLines(), c = s.computeDiff(l, u, { ignoreTrimWhitespace: !1, maxComputationTimeMs: i.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), d = nt.toTextEdit(c.changes, o);
    return a.getTransformer().getStringEdit(d).toJson();
  }
  async $computeMoreMinimalEdits(t, n, i) {
    const r = this._getModel(t);
    if (!r)
      return n;
    const s = [];
    let a;
    n = n.slice(0).sort((o, u) => {
      if (o.range && u.range)
        return X.compareRangesUsingStarts(o.range, u.range);
      const c = o.range ? 0 : 1, d = u.range ? 0 : 1;
      return c - d;
    });
    let l = 0;
    for (let o = 1; o < n.length; o++)
      X.getEndPosition(n[l].range).equals(X.getStartPosition(n[o].range)) ? (n[l].range = X.fromPositions(X.getStartPosition(n[l].range), X.getEndPosition(n[o].range)), n[l].text += n[o].text) : (l++, n[l] = n[o]);
    n.length = l + 1;
    for (let { range: o, text: u, eol: c } of n) {
      if (typeof c == "number" && (a = c), X.isEmpty(o) && !u)
        continue;
      const d = r.getValueInRange(o);
      if (u = u.replace(/\r\n|\n|\r/g, r.eol), d === u)
        continue;
      if (Math.max(u.length, d.length) > vt._diffLimit) {
        s.push({ range: o, text: u });
        continue;
      }
      const m = wc(d, u, i), g = r.offsetAt(X.lift(o).getStartPosition());
      for (const _ of m) {
        const p = r.positionAt(g + _.originalStart), L = r.positionAt(g + _.originalStart + _.originalLength), A = {
          text: u.substr(_.modifiedStart, _.modifiedLength),
          range: { startLineNumber: p.lineNumber, startColumn: p.column, endLineNumber: L.lineNumber, endColumn: L.column }
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
        return X.compareRangesUsingStarts(l.range, o.range);
      const u = l.range ? 0 : 1, c = o.range ? 0 : 1;
      return u - c;
    });
    for (let { range: l, text: o, eol: u } of n) {
      let p = function(A, w) {
        return new te(
          A.lineNumber + w.lineNumber - 1,
          w.lineNumber === 1 ? A.column + w.column - 1 : w.column
        );
      }, L = function(A, w) {
        const E = [];
        for (let H = w.startLineNumber; H <= w.endLineNumber; H++) {
          const W = A[H - 1];
          H === w.startLineNumber && H === w.endLineNumber ? E.push(W.substring(w.startColumn - 1, w.endColumn - 1)) : H === w.startLineNumber ? E.push(W.substring(w.startColumn - 1)) : H === w.endLineNumber ? E.push(W.substring(0, w.endColumn - 1)) : E.push(W);
        }
        return E;
      };
      if (typeof u == "number" && (a = u), X.isEmpty(l) && !o)
        continue;
      const c = r.getValueInRange(l);
      if (o = o.replace(/\r\n|\n|\r/g, r.eol), c === o)
        continue;
      if (Math.max(o.length, c.length) > vt._diffLimit) {
        s.push({ range: l, text: o });
        continue;
      }
      const d = c.split(/\r\n|\n|\r/), m = o.split(/\r\n|\n|\r/), g = on.getDefault().computeDiff(d, m, i), _ = X.lift(l).getStartPosition();
      for (const A of g.changes)
        if (A.innerChanges)
          for (const w of A.innerChanges)
            s.push({
              range: X.fromPositions(p(_, w.originalRange.getStartPosition()), p(_, w.originalRange.getEndPosition())),
              text: L(m, w.modifiedRange).join(r.eol)
            });
        else
          throw new me("The experimental diff algorithm always produces inner changes");
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(t) {
    const n = this._getModel(t);
    return n ? Ac(n) : null;
  }
  async $computeDefaultDocumentColors(t) {
    const n = this._getModel(t);
    return n ? qh(n) : null;
  }
  async $textualSuggest(t, n, i, r) {
    const s = new wi(), a = new RegExp(i, r), l = /* @__PURE__ */ new Set();
    e: for (const o of t) {
      const u = this._getModel(o);
      if (u) {
        for (const c of u.words(a))
          if (!(c === n || !isNaN(Number(c))) && (l.add(c), l.size > vt._suggestionsLimit))
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
        let d = l[c.word];
        d || (d = [], l[c.word] = d), d.push({
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
    return Hi.INSTANCE.navigateValueSet(n, o, u, c, i);
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
vt._diffLimit = 1e5, vt._suggestionsLimit = 1e4;
let ii = vt;
typeof importScripts == "function" && (globalThis.monaco = ih());
bc(() => new ii(null));
const vn = class vn {
  static getChannel(t) {
    return t.getChannel(vn.CHANNEL_NAME);
  }
  static setChannel(t, n) {
    t.setChannel(vn.CHANNEL_NAME, n);
  }
};
vn.CHANNEL_NAME = "editorWorkerHost";
let tr = vn;
function hd(e) {
  let t;
  const n = Rl((i) => {
    const r = tr.getChannel(i), a = {
      host: new Proxy({}, {
        get(l, o, u) {
          if (o !== "then") {
            if (typeof o != "string")
              throw new Error("Not supported");
            return (...c) => r.$fhr(o, c);
          }
        }
      }),
      getMirrorModels: () => n.requestHandler.getModels()
    };
    return t = e(a), new ii(t);
  });
  return t;
}
function dd(e) {
  hd((t) => {
    let n;
    return new Proxy({}, {
      get(i, r) {
        if (r === "$initialize")
          return async (a) => {
            n || (n = e(t, a));
          };
        const s = n == null ? void 0 : n[r];
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
function Xe(...e) {
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
    return Xe(a, ...s);
  } else
    i = t.message, n = i, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), r = t.args ?? {};
  return fd(i, r);
}
var md = /{([^}]+)}/g;
function fd(e, t) {
  return Object.keys(t).length === 0 ? e : e.replace(md, (n, i) => t[i] ?? n);
}
var so;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(so || (so = {}));
var nr;
(function(e) {
  function t(n) {
    return typeof n == "string";
  }
  e.is = t;
})(nr || (nr = {}));
var ao;
(function(e) {
  e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(ao || (ao = {}));
var ri;
(function(e) {
  e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
  function t(n) {
    return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
  }
  e.is = t;
})(ri || (ri = {}));
var ge;
(function(e) {
  function t(i, r) {
    return i === Number.MAX_VALUE && (i = ri.MAX_VALUE), r === Number.MAX_VALUE && (r = ri.MAX_VALUE), { line: i, character: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.objectLiteral(r) && U.uinteger(r.line) && U.uinteger(r.character);
  }
  e.is = n;
})(ge || (ge = {}));
var ie;
(function(e) {
  function t(i, r, s, a) {
    if (U.uinteger(i) && U.uinteger(r) && U.uinteger(s) && U.uinteger(a))
      return { start: ge.create(i, r), end: ge.create(s, a) };
    if (ge.is(i) && ge.is(r))
      return { start: i, end: r };
    throw new Error(`Range#create called with invalid arguments[${i}, ${r}, ${s}, ${a}]`);
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.objectLiteral(r) && ge.is(r.start) && ge.is(r.end);
  }
  e.is = n;
})(ie || (ie = {}));
var si;
(function(e) {
  function t(i, r) {
    return { uri: i, range: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.objectLiteral(r) && ie.is(r.range) && (U.string(r.uri) || U.undefined(r.uri));
  }
  e.is = n;
})(si || (si = {}));
var oo;
(function(e) {
  function t(i, r, s, a) {
    return { targetUri: i, targetRange: r, targetSelectionRange: s, originSelectionRange: a };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.objectLiteral(r) && ie.is(r.targetRange) && U.string(r.targetUri) && ie.is(r.targetSelectionRange) && (ie.is(r.originSelectionRange) || U.undefined(r.originSelectionRange));
  }
  e.is = n;
})(oo || (oo = {}));
var ir;
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
    return U.objectLiteral(r) && U.numberRange(r.red, 0, 1) && U.numberRange(r.green, 0, 1) && U.numberRange(r.blue, 0, 1) && U.numberRange(r.alpha, 0, 1);
  }
  e.is = n;
})(ir || (ir = {}));
var lo;
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
    return U.objectLiteral(r) && ie.is(r.range) && ir.is(r.color);
  }
  e.is = n;
})(lo || (lo = {}));
var uo;
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
    return U.objectLiteral(r) && U.string(r.label) && (U.undefined(r.textEdit) || ve.is(r)) && (U.undefined(r.additionalTextEdits) || U.typedArray(r.additionalTextEdits, ve.is));
  }
  e.is = n;
})(uo || (uo = {}));
var ai;
(function(e) {
  e.Comment = "comment", e.Imports = "imports", e.Region = "region";
})(ai || (ai = {}));
var co;
(function(e) {
  function t(i, r, s, a, l, o) {
    const u = {
      startLine: i,
      endLine: r
    };
    return U.defined(s) && (u.startCharacter = s), U.defined(a) && (u.endCharacter = a), U.defined(l) && (u.kind = l), U.defined(o) && (u.collapsedText = o), u;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return U.objectLiteral(r) && U.uinteger(r.startLine) && U.uinteger(r.startLine) && (U.undefined(r.startCharacter) || U.uinteger(r.startCharacter)) && (U.undefined(r.endCharacter) || U.uinteger(r.endCharacter)) && (U.undefined(r.kind) || U.string(r.kind));
  }
  e.is = n;
})(co || (co = {}));
var rr;
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
    return U.defined(r) && si.is(r.location) && U.string(r.message);
  }
  e.is = n;
})(rr || (rr = {}));
var ho;
(function(e) {
  e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
})(ho || (ho = {}));
var mo;
(function(e) {
  e.Unnecessary = 1, e.Deprecated = 2;
})(mo || (mo = {}));
var fo;
(function(e) {
  function t(n) {
    const i = n;
    return U.objectLiteral(i) && U.string(i.href);
  }
  e.is = t;
})(fo || (fo = {}));
var oi;
(function(e) {
  function t(i, r, s, a, l, o) {
    let u = { range: i, message: r };
    return U.defined(s) && (u.severity = s), U.defined(a) && (u.code = a), U.defined(l) && (u.source = l), U.defined(o) && (u.relatedInformation = o), u;
  }
  e.create = t;
  function n(i) {
    var r;
    let s = i;
    return U.defined(s) && ie.is(s.range) && U.string(s.message) && (U.number(s.severity) || U.undefined(s.severity)) && (U.integer(s.code) || U.string(s.code) || U.undefined(s.code)) && (U.undefined(s.codeDescription) || U.string((r = s.codeDescription) === null || r === void 0 ? void 0 : r.href)) && (U.string(s.source) || U.undefined(s.source)) && (U.undefined(s.relatedInformation) || U.typedArray(s.relatedInformation, rr.is));
  }
  e.is = n;
})(oi || (oi = {}));
var rn;
(function(e) {
  function t(i, r, ...s) {
    let a = { title: i, command: r };
    return U.defined(s) && s.length > 0 && (a.arguments = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.string(r.title) && U.string(r.command);
  }
  e.is = n;
})(rn || (rn = {}));
var ve;
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
    return U.objectLiteral(a) && U.string(a.newText) && ie.is(a.range);
  }
  e.is = r;
})(ve || (ve = {}));
var sr;
(function(e) {
  function t(i, r, s) {
    const a = { label: i };
    return r !== void 0 && (a.needsConfirmation = r), s !== void 0 && (a.description = s), a;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return U.objectLiteral(r) && U.string(r.label) && (U.boolean(r.needsConfirmation) || r.needsConfirmation === void 0) && (U.string(r.description) || r.description === void 0);
  }
  e.is = n;
})(sr || (sr = {}));
var sn;
(function(e) {
  function t(n) {
    const i = n;
    return U.string(i);
  }
  e.is = t;
})(sn || (sn = {}));
var po;
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
    return ve.is(a) && (sr.is(a.annotationId) || sn.is(a.annotationId));
  }
  e.is = r;
})(po || (po = {}));
var ar;
(function(e) {
  function t(i, r) {
    return { textDocument: i, edits: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && hr.is(r.textDocument) && Array.isArray(r.edits);
  }
  e.is = n;
})(ar || (ar = {}));
var or;
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
    return r && r.kind === "create" && U.string(r.uri) && (r.options === void 0 || (r.options.overwrite === void 0 || U.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || U.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || sn.is(r.annotationId));
  }
  e.is = n;
})(or || (or = {}));
var lr;
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
    return r && r.kind === "rename" && U.string(r.oldUri) && U.string(r.newUri) && (r.options === void 0 || (r.options.overwrite === void 0 || U.boolean(r.options.overwrite)) && (r.options.ignoreIfExists === void 0 || U.boolean(r.options.ignoreIfExists))) && (r.annotationId === void 0 || sn.is(r.annotationId));
  }
  e.is = n;
})(lr || (lr = {}));
var ur;
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
    return r && r.kind === "delete" && U.string(r.uri) && (r.options === void 0 || (r.options.recursive === void 0 || U.boolean(r.options.recursive)) && (r.options.ignoreIfNotExists === void 0 || U.boolean(r.options.ignoreIfNotExists))) && (r.annotationId === void 0 || sn.is(r.annotationId));
  }
  e.is = n;
})(ur || (ur = {}));
var cr;
(function(e) {
  function t(n) {
    let i = n;
    return i && (i.changes !== void 0 || i.documentChanges !== void 0) && (i.documentChanges === void 0 || i.documentChanges.every((r) => U.string(r.kind) ? or.is(r) || lr.is(r) || ur.is(r) : ar.is(r)));
  }
  e.is = t;
})(cr || (cr = {}));
var go;
(function(e) {
  function t(i) {
    return { uri: i };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.string(r.uri);
  }
  e.is = n;
})(go || (go = {}));
var bo;
(function(e) {
  function t(i, r) {
    return { uri: i, version: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.string(r.uri) && U.integer(r.version);
  }
  e.is = n;
})(bo || (bo = {}));
var hr;
(function(e) {
  function t(i, r) {
    return { uri: i, version: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.string(r.uri) && (r.version === null || U.integer(r.version));
  }
  e.is = n;
})(hr || (hr = {}));
var _o;
(function(e) {
  function t(i, r, s, a) {
    return { uri: i, languageId: r, version: s, text: a };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.string(r.uri) && U.string(r.languageId) && U.integer(r.version) && U.string(r.text);
  }
  e.is = n;
})(_o || (_o = {}));
var ct;
(function(e) {
  e.PlainText = "plaintext", e.Markdown = "markdown";
  function t(n) {
    const i = n;
    return i === e.PlainText || i === e.Markdown;
  }
  e.is = t;
})(ct || (ct = {}));
var Sn;
(function(e) {
  function t(n) {
    const i = n;
    return U.objectLiteral(n) && ct.is(i.kind) && U.string(i.value);
  }
  e.is = t;
})(Sn || (Sn = {}));
var Ie;
(function(e) {
  e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
})(Ie || (Ie = {}));
var je;
(function(e) {
  e.PlainText = 1, e.Snippet = 2;
})(je || (je = {}));
var wo;
(function(e) {
  e.Deprecated = 1;
})(wo || (wo = {}));
var vo;
(function(e) {
  function t(i, r, s) {
    return { newText: i, insert: r, replace: s };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r && U.string(r.newText) && ie.is(r.insert) && ie.is(r.replace);
  }
  e.is = n;
})(vo || (vo = {}));
var yo;
(function(e) {
  e.asIs = 1, e.adjustIndentation = 2;
})(yo || (yo = {}));
var To;
(function(e) {
  function t(n) {
    const i = n;
    return i && (U.string(i.detail) || i.detail === void 0) && (U.string(i.description) || i.description === void 0);
  }
  e.is = t;
})(To || (To = {}));
var xo;
(function(e) {
  function t(n) {
    return { label: n };
  }
  e.create = t;
})(xo || (xo = {}));
var Ao;
(function(e) {
  function t(n, i) {
    return { items: n || [], isIncomplete: !!i };
  }
  e.create = t;
})(Ao || (Ao = {}));
var li;
(function(e) {
  function t(i) {
    return i.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  e.fromPlainText = t;
  function n(i) {
    const r = i;
    return U.string(r) || U.objectLiteral(r) && U.string(r.language) && U.string(r.value);
  }
  e.is = n;
})(li || (li = {}));
var Lo;
(function(e) {
  function t(n) {
    let i = n;
    return !!i && U.objectLiteral(i) && (Sn.is(i.contents) || li.is(i.contents) || U.typedArray(i.contents, li.is)) && (n.range === void 0 || ie.is(n.range));
  }
  e.is = t;
})(Lo || (Lo = {}));
var ko;
(function(e) {
  function t(n, i) {
    return i ? { label: n, documentation: i } : { label: n };
  }
  e.create = t;
})(ko || (ko = {}));
var Eo;
(function(e) {
  function t(n, i, ...r) {
    let s = { label: n };
    return U.defined(i) && (s.documentation = i), U.defined(r) ? s.parameters = r : s.parameters = [], s;
  }
  e.create = t;
})(Eo || (Eo = {}));
var ui;
(function(e) {
  e.Text = 1, e.Read = 2, e.Write = 3;
})(ui || (ui = {}));
var Ro;
(function(e) {
  function t(n, i) {
    let r = { range: n };
    return U.number(i) && (r.kind = i), r;
  }
  e.create = t;
})(Ro || (Ro = {}));
var dr;
(function(e) {
  e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
})(dr || (dr = {}));
var So;
(function(e) {
  e.Deprecated = 1;
})(So || (So = {}));
var mr;
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
})(mr || (mr = {}));
var No;
(function(e) {
  function t(n, i, r, s) {
    return s !== void 0 ? { name: n, kind: i, location: { uri: r, range: s } } : { name: n, kind: i, location: { uri: r } };
  }
  e.create = t;
})(No || (No = {}));
var fr;
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
    return r && U.string(r.name) && U.number(r.kind) && ie.is(r.range) && ie.is(r.selectionRange) && (r.detail === void 0 || U.string(r.detail)) && (r.deprecated === void 0 || U.boolean(r.deprecated)) && (r.children === void 0 || Array.isArray(r.children)) && (r.tags === void 0 || Array.isArray(r.tags));
  }
  e.is = n;
})(fr || (fr = {}));
var Mo;
(function(e) {
  e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll";
})(Mo || (Mo = {}));
var ci;
(function(e) {
  e.Invoked = 1, e.Automatic = 2;
})(ci || (ci = {}));
var Do;
(function(e) {
  function t(i, r, s) {
    let a = { diagnostics: i };
    return r != null && (a.only = r), s != null && (a.triggerKind = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.typedArray(r.diagnostics, oi.is) && (r.only === void 0 || U.typedArray(r.only, U.string)) && (r.triggerKind === void 0 || r.triggerKind === ci.Invoked || r.triggerKind === ci.Automatic);
  }
  e.is = n;
})(Do || (Do = {}));
var Uo;
(function(e) {
  function t(i, r, s) {
    let a = { title: i }, l = !0;
    return typeof r == "string" ? (l = !1, a.kind = r) : rn.is(r) ? a.command = r : a.edit = r, l && s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return r && U.string(r.title) && (r.diagnostics === void 0 || U.typedArray(r.diagnostics, oi.is)) && (r.kind === void 0 || U.string(r.kind)) && (r.edit !== void 0 || r.command !== void 0) && (r.command === void 0 || rn.is(r.command)) && (r.isPreferred === void 0 || U.boolean(r.isPreferred)) && (r.edit === void 0 || cr.is(r.edit));
  }
  e.is = n;
})(Uo || (Uo = {}));
var Io;
(function(e) {
  function t(i, r) {
    let s = { range: i };
    return U.defined(r) && (s.data = r), s;
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && ie.is(r.range) && (U.undefined(r.command) || rn.is(r.command));
  }
  e.is = n;
})(Io || (Io = {}));
var Fo;
(function(e) {
  function t(i, r) {
    return { tabSize: i, insertSpaces: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && U.uinteger(r.tabSize) && U.boolean(r.insertSpaces);
  }
  e.is = n;
})(Fo || (Fo = {}));
var Po;
(function(e) {
  function t(i, r, s) {
    return { range: i, target: r, data: s };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.defined(r) && ie.is(r.range) && (U.undefined(r.target) || U.string(r.target));
  }
  e.is = n;
})(Po || (Po = {}));
var hi;
(function(e) {
  function t(i, r) {
    return { range: i, parent: r };
  }
  e.create = t;
  function n(i) {
    let r = i;
    return U.objectLiteral(r) && ie.is(r.range) && (r.parent === void 0 || e.is(r.parent));
  }
  e.is = n;
})(hi || (hi = {}));
var Bo;
(function(e) {
  e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator";
})(Bo || (Bo = {}));
var Ho;
(function(e) {
  e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
})(Ho || (Ho = {}));
var Oo;
(function(e) {
  function t(n) {
    const i = n;
    return U.objectLiteral(i) && (i.resultId === void 0 || typeof i.resultId == "string") && Array.isArray(i.data) && (i.data.length === 0 || typeof i.data[0] == "number");
  }
  e.is = t;
})(Oo || (Oo = {}));
var zo;
(function(e) {
  function t(i, r) {
    return { range: i, text: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && ie.is(r.range) && U.string(r.text);
  }
  e.is = n;
})(zo || (zo = {}));
var Wo;
(function(e) {
  function t(i, r, s) {
    return { range: i, variableName: r, caseSensitiveLookup: s };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && ie.is(r.range) && U.boolean(r.caseSensitiveLookup) && (U.string(r.variableName) || r.variableName === void 0);
  }
  e.is = n;
})(Wo || (Wo = {}));
var qo;
(function(e) {
  function t(i, r) {
    return { range: i, expression: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return r != null && ie.is(r.range) && (U.string(r.expression) || r.expression === void 0);
  }
  e.is = n;
})(qo || (qo = {}));
var Vo;
(function(e) {
  function t(i, r) {
    return { frameId: i, stoppedLocation: r };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return U.defined(r) && ie.is(i.stoppedLocation);
  }
  e.is = n;
})(Vo || (Vo = {}));
var pr;
(function(e) {
  e.Type = 1, e.Parameter = 2;
  function t(n) {
    return n === 1 || n === 2;
  }
  e.is = t;
})(pr || (pr = {}));
var gr;
(function(e) {
  function t(i) {
    return { value: i };
  }
  e.create = t;
  function n(i) {
    const r = i;
    return U.objectLiteral(r) && (r.tooltip === void 0 || U.string(r.tooltip) || Sn.is(r.tooltip)) && (r.location === void 0 || si.is(r.location)) && (r.command === void 0 || rn.is(r.command));
  }
  e.is = n;
})(gr || (gr = {}));
var Co;
(function(e) {
  function t(i, r, s) {
    const a = { position: i, label: r };
    return s !== void 0 && (a.kind = s), a;
  }
  e.create = t;
  function n(i) {
    const r = i;
    return U.objectLiteral(r) && ge.is(r.position) && (U.string(r.label) || U.typedArray(r.label, gr.is)) && (r.kind === void 0 || pr.is(r.kind)) && r.textEdits === void 0 || U.typedArray(r.textEdits, ve.is) && (r.tooltip === void 0 || U.string(r.tooltip) || Sn.is(r.tooltip)) && (r.paddingLeft === void 0 || U.boolean(r.paddingLeft)) && (r.paddingRight === void 0 || U.boolean(r.paddingRight));
  }
  e.is = n;
})(Co || (Co = {}));
var Go;
(function(e) {
  function t(n) {
    return { kind: "snippet", value: n };
  }
  e.createSnippet = t;
})(Go || (Go = {}));
var jo;
(function(e) {
  function t(n, i, r, s) {
    return { insertText: n, filterText: i, range: r, command: s };
  }
  e.create = t;
})(jo || (jo = {}));
var $o;
(function(e) {
  function t(n) {
    return { items: n };
  }
  e.create = t;
})($o || ($o = {}));
var Xo;
(function(e) {
  e.Invoked = 0, e.Automatic = 1;
})(Xo || (Xo = {}));
var Yo;
(function(e) {
  function t(n, i) {
    return { range: n, text: i };
  }
  e.create = t;
})(Yo || (Yo = {}));
var Qo;
(function(e) {
  function t(n, i) {
    return { triggerKind: n, selectedCompletionInfo: i };
  }
  e.create = t;
})(Qo || (Qo = {}));
var Jo;
(function(e) {
  function t(n) {
    const i = n;
    return U.objectLiteral(i) && nr.is(i.uri) && U.string(i.name);
  }
  e.is = t;
})(Jo || (Jo = {}));
var Zo;
(function(e) {
  function t(s, a, l, o) {
    return new pd(s, a, l, o);
  }
  e.create = t;
  function n(s) {
    let a = s;
    return !!(U.defined(a) && U.string(a.uri) && (U.undefined(a.languageId) || U.string(a.languageId)) && U.uinteger(a.lineCount) && U.func(a.getText) && U.func(a.positionAt) && U.func(a.offsetAt));
  }
  e.is = n;
  function i(s, a) {
    let l = s.getText(), o = r(a, (c, d) => {
      let m = c.range.start.line - d.range.start.line;
      return m === 0 ? c.range.start.character - d.range.start.character : m;
    }), u = l.length;
    for (let c = o.length - 1; c >= 0; c--) {
      let d = o[c], m = s.offsetAt(d.range.start), g = s.offsetAt(d.range.end);
      if (g <= u)
        l = l.substring(0, m) + d.newText + l.substring(g, l.length);
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
    let c = 0, d = 0, m = 0;
    for (; c < o.length && d < u.length; )
      a(o[c], u[d]) <= 0 ? s[m++] = o[c++] : s[m++] = u[d++];
    for (; c < o.length; )
      s[m++] = o[c++];
    for (; d < u.length; )
      s[m++] = u[d++];
    return s;
  }
})(Zo || (Zo = {}));
var pd = class {
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
      return ge.create(0, e);
    for (; n < i; ) {
      let s = Math.floor((n + i) / 2);
      t[s] > e ? i = s : n = s + 1;
    }
    let r = n - 1;
    return ge.create(r, e - t[r]);
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
}, U;
(function(e) {
  const t = Object.prototype.toString;
  function n(g) {
    return typeof g < "u";
  }
  e.defined = n;
  function i(g) {
    return typeof g > "u";
  }
  e.undefined = i;
  function r(g) {
    return g === !0 || g === !1;
  }
  e.boolean = r;
  function s(g) {
    return t.call(g) === "[object String]";
  }
  e.string = s;
  function a(g) {
    return t.call(g) === "[object Number]";
  }
  e.number = a;
  function l(g, _, p) {
    return t.call(g) === "[object Number]" && _ <= g && g <= p;
  }
  e.numberRange = l;
  function o(g) {
    return t.call(g) === "[object Number]" && -2147483648 <= g && g <= 2147483647;
  }
  e.integer = o;
  function u(g) {
    return t.call(g) === "[object Number]" && 0 <= g && g <= 2147483647;
  }
  e.uinteger = u;
  function c(g) {
    return t.call(g) === "[object Function]";
  }
  e.func = c;
  function d(g) {
    return g !== null && typeof g == "object";
  }
  e.objectLiteral = d;
  function m(g, _) {
    return Array.isArray(g) && g.every(_);
  }
  e.typedArray = m;
})(U || (U = {}));
var Ko = class br {
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
      if (br.isIncremental(i)) {
        const r = $l(i.range), s = this.offsetAt(r.start), a = this.offsetAt(r.end);
        this._content = this._content.substring(0, s) + i.text + this._content.substring(a, this._content.length);
        const l = Math.max(r.start.line, 0), o = Math.max(r.end.line, 0);
        let u = this._lineOffsets;
        const c = el(i.text, !1, s);
        if (o - l === c.length)
          for (let m = 0, g = c.length; m < g; m++)
            u[m + l + 1] = c[m];
        else
          c.length < 1e4 ? u.splice(l + 1, o - l, ...c) : this._lineOffsets = u = u.slice(0, l + 1).concat(c, u.slice(o + 1));
        const d = i.text.length - (a - s);
        if (d !== 0)
          for (let m = l + 1 + c.length, g = u.length; m < g; m++)
            u[m] = u[m] + d;
      } else if (br.isFull(i))
        this._content = i.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = n;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = el(this._content, !0)), this._lineOffsets;
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
}, _r;
(function(e) {
  function t(r, s, a, l) {
    return new Ko(r, s, a, l);
  }
  e.create = t;
  function n(r, s, a) {
    if (r instanceof Ko)
      return r.update(s, a), r;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  e.update = n;
  function i(r, s) {
    let a = r.getText(), l = wr(s.map(gd), (c, d) => {
      let m = c.range.start.line - d.range.start.line;
      return m === 0 ? c.range.start.character - d.range.start.character : m;
    }), o = 0;
    const u = [];
    for (const c of l) {
      let d = r.offsetAt(c.range.start);
      if (d < o)
        throw new Error("Overlapping edit");
      d > o && u.push(a.substring(o, d)), c.newText.length && u.push(c.newText), o = r.offsetAt(c.range.end);
    }
    return u.push(a.substr(o)), u.join("");
  }
  e.applyEdits = i;
})(_r || (_r = {}));
function wr(e, t) {
  if (e.length <= 1)
    return e;
  const n = e.length / 2 | 0, i = e.slice(0, n), r = e.slice(n);
  wr(i, t), wr(r, t);
  let s = 0, a = 0, l = 0;
  for (; s < i.length && a < r.length; )
    t(i[s], r[a]) <= 0 ? e[l++] = i[s++] : e[l++] = r[a++];
  for (; s < i.length; )
    e[l++] = i[s++];
  for (; a < r.length; )
    e[l++] = r[a++];
  return e;
}
function el(e, t, n = 0) {
  const i = t ? [n] : [];
  for (let r = 0; r < e.length; r++) {
    let s = e.charCodeAt(r);
    (s === 13 || s === 10) && (s === 13 && r + 1 < e.length && e.charCodeAt(r + 1) === 10 && r++, i.push(n + r + 1));
  }
  return i;
}
function $l(e) {
  const t = e.start, n = e.end;
  return t.line > n.line || t.line === n.line && t.character > n.character ? { start: n, end: t } : e;
}
function gd(e) {
  const t = $l(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var z;
(function(e) {
  e[e.StartCommentTag = 0] = "StartCommentTag", e[e.Comment = 1] = "Comment", e[e.EndCommentTag = 2] = "EndCommentTag", e[e.StartTagOpen = 3] = "StartTagOpen", e[e.StartTagClose = 4] = "StartTagClose", e[e.StartTagSelfClose = 5] = "StartTagSelfClose", e[e.StartTag = 6] = "StartTag", e[e.EndTagOpen = 7] = "EndTagOpen", e[e.EndTagClose = 8] = "EndTagClose", e[e.EndTag = 9] = "EndTag", e[e.DelimiterAssign = 10] = "DelimiterAssign", e[e.AttributeName = 11] = "AttributeName", e[e.AttributeValue = 12] = "AttributeValue", e[e.StartDoctypeTag = 13] = "StartDoctypeTag", e[e.Doctype = 14] = "Doctype", e[e.EndDoctypeTag = 15] = "EndDoctypeTag", e[e.Content = 16] = "Content", e[e.Whitespace = 17] = "Whitespace", e[e.Unknown = 18] = "Unknown", e[e.Script = 19] = "Script", e[e.Styles = 20] = "Styles", e[e.EOS = 21] = "EOS";
})(z || (z = {}));
var J;
(function(e) {
  e[e.WithinContent = 0] = "WithinContent", e[e.AfterOpeningStartTag = 1] = "AfterOpeningStartTag", e[e.AfterOpeningEndTag = 2] = "AfterOpeningEndTag", e[e.WithinDoctype = 3] = "WithinDoctype", e[e.WithinTag = 4] = "WithinTag", e[e.WithinEndTag = 5] = "WithinEndTag", e[e.WithinComment = 6] = "WithinComment", e[e.WithinScriptContent = 7] = "WithinScriptContent", e[e.WithinStyleContent = 8] = "WithinStyleContent", e[e.AfterAttributeName = 9] = "AfterAttributeName", e[e.BeforeAttributeValue = 10] = "BeforeAttributeValue";
})(J || (J = {}));
var tl;
(function(e) {
  e.LATEST = {
    textDocument: {
      completion: {
        completionItem: {
          documentationFormat: [ct.Markdown, ct.PlainText]
        }
      },
      hover: {
        contentFormat: [ct.Markdown, ct.PlainText]
      }
    }
  };
})(tl || (tl = {}));
var vr;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.File = 1] = "File", e[e.Directory = 2] = "Directory", e[e.SymbolicLink = 64] = "SymbolicLink";
})(vr || (vr = {}));
var bd = class {
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
    return this.advanceWhileChar((t) => t === Ad || t === Ld || t === yd || t === xd || t === Td) > 0;
  }
  advanceWhileChar(e) {
    const t = this.position;
    for (; this.position < this.len && e(this.source.charCodeAt(this.position)); )
      this.position++;
    return this.position - t;
  }
}, nl = 33, Ot = 45, Fn = 60, Je = 62, ki = 47, _d = 61, wd = 34, vd = 39, yd = 10, Td = 13, xd = 12, Ad = 32, Ld = 9, kd = {
  "text/x-handlebars-template": !0,
  // Fix for https://github.com/microsoft/vscode/issues/77977
  "text/html": !0
};
function Oe(e, t = 0, n = J.WithinContent, i = !1) {
  const r = new bd(e, t);
  let s = n, a = 0, l = z.Unknown, o, u, c, d, m;
  function g() {
    return r.advanceIfRegExp(/^[_:\w][_:\w-.\d]*/).toLowerCase();
  }
  function _() {
    return r.advanceIfRegExp(/^[^\s"'></=\x00-\x0F\x7F\x80-\x9F]*/).toLowerCase();
  }
  function p(w, E, H) {
    return l = E, a = w, o = H, E;
  }
  function L() {
    const w = r.pos(), E = s, H = A();
    return H !== z.EOS && w === r.pos() && !(i && (H === z.StartTagClose || H === z.EndTagClose)) ? (console.warn("Scanner.scan has not advanced at offset " + w + ", state before: " + E + " after: " + s), r.advance(1), p(w, z.Unknown)) : H;
  }
  function A() {
    const w = r.pos();
    if (r.eos())
      return p(w, z.EOS);
    let E;
    switch (s) {
      case J.WithinComment:
        return r.advanceIfChars([Ot, Ot, Je]) ? (s = J.WithinContent, p(w, z.EndCommentTag)) : (r.advanceUntilChars([Ot, Ot, Je]), p(w, z.Comment));
      case J.WithinDoctype:
        return r.advanceIfChar(Je) ? (s = J.WithinContent, p(w, z.EndDoctypeTag)) : (r.advanceUntilChar(Je), p(w, z.Doctype));
      case J.WithinContent:
        if (r.advanceIfChar(Fn)) {
          if (!r.eos() && r.peekChar() === nl) {
            if (r.advanceIfChars([nl, Ot, Ot]))
              return s = J.WithinComment, p(w, z.StartCommentTag);
            if (r.advanceIfRegExp(/^!doctype/i))
              return s = J.WithinDoctype, p(w, z.StartDoctypeTag);
          }
          return r.advanceIfChar(ki) ? (s = J.AfterOpeningEndTag, p(w, z.EndTagOpen)) : (s = J.AfterOpeningStartTag, p(w, z.StartTagOpen));
        }
        return r.advanceUntilChar(Fn), p(w, z.Content);
      case J.AfterOpeningEndTag:
        return g().length > 0 ? (s = J.WithinEndTag, p(w, z.EndTag)) : r.skipWhitespace() ? p(w, z.Whitespace, Xe("Tag name must directly follow the open bracket.")) : (s = J.WithinEndTag, r.advanceUntilChar(Je), w < r.pos() ? p(w, z.Unknown, Xe("End tag name expected.")) : A());
      case J.WithinEndTag:
        if (r.skipWhitespace())
          return p(w, z.Whitespace);
        if (r.advanceIfChar(Je))
          return s = J.WithinContent, p(w, z.EndTagClose);
        if (i && r.peekChar() === Fn)
          return s = J.WithinContent, p(w, z.EndTagClose, Xe("Closing bracket missing."));
        E = Xe("Closing bracket expected.");
        break;
      case J.AfterOpeningStartTag:
        return c = g(), m = void 0, d = void 0, c.length > 0 ? (u = !1, s = J.WithinTag, p(w, z.StartTag)) : r.skipWhitespace() ? p(w, z.Whitespace, Xe("Tag name must directly follow the open bracket.")) : (s = J.WithinTag, r.advanceUntilChar(Je), w < r.pos() ? p(w, z.Unknown, Xe("Start tag name expected.")) : A());
      case J.WithinTag:
        return r.skipWhitespace() ? (u = !0, p(w, z.Whitespace)) : u && (d = _(), d.length > 0) ? (s = J.AfterAttributeName, u = !1, p(w, z.AttributeName)) : r.advanceIfChars([ki, Je]) ? (s = J.WithinContent, p(w, z.StartTagSelfClose)) : r.advanceIfChar(Je) ? (c === "script" ? m && kd[m] ? s = J.WithinContent : s = J.WithinScriptContent : c === "style" ? s = J.WithinStyleContent : s = J.WithinContent, p(w, z.StartTagClose)) : i && r.peekChar() === Fn ? (s = J.WithinContent, p(w, z.StartTagClose, Xe("Closing bracket missing."))) : (r.advance(1), p(w, z.Unknown, Xe("Unexpected character in tag.")));
      case J.AfterAttributeName:
        return r.skipWhitespace() ? (u = !0, p(w, z.Whitespace)) : r.advanceIfChar(_d) ? (s = J.BeforeAttributeValue, p(w, z.DelimiterAssign)) : (s = J.WithinTag, A());
      case J.BeforeAttributeValue:
        if (r.skipWhitespace())
          return p(w, z.Whitespace);
        let W = r.advanceIfRegExp(/^[^\s"'`=<>]+/);
        if (W.length > 0 && (r.peekChar() === Je && r.peekChar(-1) === ki && (r.goBack(1), W = W.substring(0, W.length - 1)), d === "type" && (m = W), W.length > 0))
          return s = J.WithinTag, u = !1, p(w, z.AttributeValue);
        const O = r.peekChar();
        return O === vd || O === wd ? (r.advance(1), r.advanceUntilChar(O) && r.advance(1), d === "type" && (m = r.getSource().substring(w + 1, r.pos() - 1)), s = J.WithinTag, u = !1, p(w, z.AttributeValue)) : (s = J.WithinTag, u = !1, A());
      case J.WithinScriptContent:
        let b = 1;
        for (; !r.eos(); ) {
          const f = r.advanceIfRegExp(/<!--|-->|<\/?script\s*\/?>?/i);
          if (f.length === 0)
            return r.goToEnd(), p(w, z.Script);
          if (f === "<!--")
            b === 1 && (b = 2);
          else if (f === "-->")
            b = 1;
          else if (f[1] !== "/")
            b === 2 && (b = 3);
          else if (b === 3)
            b = 2;
          else {
            r.goBack(f.length);
            break;
          }
        }
        return s = J.WithinContent, w < r.pos() ? p(w, z.Script) : A();
      case J.WithinStyleContent:
        return r.advanceUntilRegExp(/<\/style/i), s = J.WithinContent, w < r.pos() ? p(w, z.Styles) : A();
    }
    return r.advance(1), s = J.WithinContent, p(w, z.Unknown, E);
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
function il(e, t) {
  let n = 0, i = e.length;
  if (i === 0)
    return 0;
  for (; n < i; ) {
    let r = Math.floor((n + i) / 2);
    t(e[r]) ? i = r : n = r + 1;
  }
  return n;
}
function Ed(e, t, n) {
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
var rl = class {
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
    const t = il(this.children, (n) => e <= n.start) - 1;
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
    const t = il(this.children, (n) => e <= n.start) - 1;
    if (t >= 0) {
      const n = this.children[t];
      if (e > n.start && e <= n.end)
        return n.findNodeAt(e);
    }
    return this;
  }
}, Rd = class {
  constructor(e) {
    this.dataManager = e;
  }
  parseDocument(e) {
    return this.parse(e.getText(), this.dataManager.getVoidElements(e.languageId));
  }
  parse(e, t) {
    const n = Oe(e, void 0, void 0, !0), i = new rl(0, e.length, [], void 0);
    let r = i, s = -1, a, l = null, o = n.scan();
    for (; o !== z.EOS; ) {
      switch (o) {
        case z.StartTagOpen:
          const u = new rl(n.getTokenOffset(), e.length, [], r);
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
          let d = r.attributes;
          d || (r.attributes = d = {}), d[l] = null;
          break;
        }
        case z.AttributeValue: {
          const d = n.getTokenText(), m = r.attributes;
          m && l && (m[l] = d, l = null);
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
}, bn = {
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
function xt(e, t) {
  if (e.length < t.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Sd(e, t) {
  const n = e.length - t.length;
  return n > 0 ? e.lastIndexOf(t) === n : n === 0 ? e === t : !1;
}
function sl(e, t) {
  let n = "";
  for (; t > 0; )
    (t & 1) === 1 && (n += e), e += e, t = t >>> 1;
  return n;
}
var Nd = 97, Md = 122, Dd = 65, Ud = 90, Id = 48, Fd = 57;
function cn(e, t) {
  const n = e.charCodeAt(t);
  return Nd <= n && n <= Md || Dd <= n && n <= Ud || Id <= n && n <= Fd;
}
function di(e) {
  return typeof e < "u";
}
function Pd(e) {
  if (e)
    return typeof e == "string" ? {
      kind: "markdown",
      value: e
    } : {
      kind: "markdown",
      value: e.value
    };
}
var Xl = class {
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
function Nt(e, t = {}, n) {
  const i = {
    kind: n ? "markdown" : "plaintext",
    value: ""
  };
  if (e.description && t.documentation !== !1) {
    const r = Pd(e.description);
    r && (i.value += r.value);
  }
  if (e.references && e.references.length > 0 && t.references !== !1 && (i.value.length && (i.value += `

`), n ? i.value += e.references.map((r) => `[${r.name}](${r.url})`).join(" | ") : i.value += e.references.map((r) => `${r.name}: ${r.url}`).join(`
`)), i.value !== "")
    return i;
}
var Bd = class {
  constructor(e, t) {
    this.dataManager = e, this.readDirectory = t, this.atributeCompletions = [];
  }
  onHtmlAttributeValue(e) {
    this.dataManager.isPathAttribute(e.tag, e.attribute) && this.atributeCompletions.push(e);
  }
  async computeCompletions(e, t) {
    const n = { items: [], isIncomplete: !1 };
    for (const i of this.atributeCompletions) {
      const r = Od(e.getText(i.range));
      if (zd(r))
        if (r === "." || r === "..")
          n.isIncomplete = !0;
        else {
          const s = Wd(i.value, r, i.range), a = await this.providePathSuggestions(i.value, s, e, t);
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
          o.charCodeAt(0) !== Hd && a.push(qd(o, u === vr.Directory, t));
        return a;
      } catch {
      }
    return [];
  }
}, Hd = 46;
function Od(e) {
  return xt(e, "'") || xt(e, '"') ? e.slice(1, -1) : e;
}
function zd(e) {
  return !(xt(e, "http") || xt(e, "https") || xt(e, "//"));
}
function Wd(e, t, n) {
  let i;
  const r = e.lastIndexOf("/");
  if (r === -1)
    i = Vd(n, 1, -1);
  else {
    const s = t.slice(r + 1), a = _n(n.end, -1 - s.length), l = s.indexOf(" ");
    let o;
    l !== -1 ? o = _n(a, l) : o = _n(n.end, -1), i = ie.create(a, o);
  }
  return i;
}
function qd(e, t, n) {
  return t ? (e = e + "/", {
    label: e,
    kind: Ie.Folder,
    textEdit: ve.replace(n, e),
    command: {
      title: "Suggest",
      command: "editor.action.triggerSuggest"
    }
  }) : {
    label: e,
    kind: Ie.File,
    textEdit: ve.replace(n, e)
  };
}
function _n(e, t) {
  return ge.create(e.line, e.character + t);
}
function Vd(e, t, n) {
  const i = _n(e.start, t), r = _n(e.end, n);
  return ie.create(i, r);
}
var Cd = class {
  constructor(e, t) {
    this.lsOptions = e, this.dataManager = t, this.completionParticipants = [];
  }
  setCompletionParticipants(e) {
    this.completionParticipants = e || [];
  }
  async doComplete2(e, t, n, i, r) {
    if (!this.lsOptions.fileSystemProvider || !this.lsOptions.fileSystemProvider.readDirectory)
      return this.doComplete(e, t, n, r);
    const s = new Bd(this.dataManager, this.lsOptions.fileSystemProvider.readDirectory), a = this.completionParticipants;
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
    }, s = this.completionParticipants, a = this.dataManager.getDataProviders().filter((x) => x.isApplicable(e.languageId) && (!i || i[x.getId()] !== !1)), l = this.dataManager.getVoidElements(a), o = this.doesSupportMarkdown(), u = e.getText(), c = e.offsetAt(t), d = n.findNodeBefore(c);
    if (!d)
      return r;
    const m = Oe(u, d.start);
    let g = "", _;
    function p(x, N = c) {
      return x > c && (x = c), { start: e.positionAt(x), end: e.positionAt(N) };
    }
    function L(x, N) {
      const I = p(x, N);
      return a.forEach((F) => {
        F.provideTags().forEach((C) => {
          r.items.push({
            label: C.name,
            kind: Ie.Property,
            documentation: Nt(C, void 0, o),
            textEdit: ve.replace(I, C.name),
            insertTextFormat: je.PlainText
          });
        });
      }), r;
    }
    function A(x) {
      let N = x;
      for (; N > 0; ) {
        const I = u.charAt(N - 1);
        if (`
\r`.indexOf(I) >= 0)
          return u.substring(N, x);
        if (!mi(I))
          return null;
        N--;
      }
      return u.substring(0, x);
    }
    function w(x, N, I = c) {
      const F = p(x, I), C = al(u, I, J.WithinEndTag, z.EndTagClose) ? "" : ">";
      let q = d;
      for (N && (q = q.parent); q; ) {
        const V = q.tag;
        if (V && (!q.closed || q.endTagStart && q.endTagStart > c)) {
          const Z = {
            label: "/" + V,
            kind: Ie.Property,
            filterText: "/" + V,
            textEdit: ve.replace(F, "/" + V + C),
            insertTextFormat: je.PlainText
          }, se = A(q.start), be = A(x - 1);
          if (se !== null && be !== null && se !== be) {
            const Me = se + "</" + V + C;
            Z.textEdit = ve.replace(p(x - 1 - be.length), Me), Z.filterText = be + "</" + V;
          }
          return r.items.push(Z), r;
        }
        q = q.parent;
      }
      return N || a.forEach((V) => {
        V.provideTags().forEach((Z) => {
          r.items.push({
            label: "/" + Z.name,
            kind: Ie.Property,
            documentation: Nt(Z, void 0, o),
            filterText: "/" + Z.name + C,
            textEdit: ve.replace(F, "/" + Z.name + C),
            insertTextFormat: je.PlainText
          });
        });
      }), r;
    }
    const E = (x, N) => {
      if (i && i.hideAutoCompleteProposals)
        return r;
      if (!this.dataManager.isVoidElement(N, l)) {
        const I = e.positionAt(x);
        r.items.push({
          label: "</" + N + ">",
          kind: Ie.Property,
          filterText: "</" + N + ">",
          textEdit: ve.insert(I, "$0</" + N + ">"),
          insertTextFormat: je.Snippet
        });
      }
      return r;
    };
    function H(x, N) {
      return L(x, N), w(x, !0, N), r;
    }
    function W() {
      const x = /* @__PURE__ */ Object.create(null);
      return d.attributeNames.forEach((N) => {
        x[N] = !0;
      }), x;
    }
    function O(x, N = c) {
      let I = c;
      for (; I < N && u[I] !== "<"; )
        I++;
      const F = u.substring(x, N), C = p(x, I);
      let q = "";
      if (!al(u, N, J.AfterAttributeName, z.DelimiterAssign)) {
        const Z = (i == null ? void 0 : i.attributeDefaultValue) ?? "doublequotes";
        Z === "empty" ? q = "=$1" : Z === "singlequotes" ? q = "='$1'" : q = '="$1"';
      }
      const V = W();
      return V[F] = !1, a.forEach((Z) => {
        Z.provideAttributes(g).forEach((se) => {
          if (V[se.name])
            return;
          V[se.name] = !0;
          let be = se.name, Me;
          se.valueSet !== "v" && q.length && (be = be + q, (se.valueSet || se.name === "style") && (Me = {
            title: "Suggest",
            command: "editor.action.triggerSuggest"
          })), r.items.push({
            label: se.name,
            kind: se.valueSet === "handler" ? Ie.Function : Ie.Value,
            documentation: Nt(se, void 0, o),
            textEdit: ve.replace(C, be),
            insertTextFormat: je.Snippet,
            command: Me
          });
        });
      }), b(C, V), r;
    }
    function b(x, N) {
      const I = "data-", F = {};
      F[I] = `${I}$1="$2"`;
      function C(q) {
        q.attributeNames.forEach((V) => {
          xt(V, I) && !F[V] && !N[V] && (F[V] = V + '="$1"');
        }), q.children.forEach((V) => C(V));
      }
      n && n.roots.forEach((q) => C(q)), Object.keys(F).forEach((q) => r.items.push({
        label: q,
        kind: Ie.Value,
        textEdit: ve.replace(x, F[q]),
        insertTextFormat: je.Snippet
      }));
    }
    function f(x, N = c) {
      let I, F, C;
      if (c > x && c <= N && Gd(u[x])) {
        const q = x + 1;
        let V = N;
        N > x && u[N - 1] === u[x] && V--;
        const Z = jd(u, c, q), se = $d(u, c, V);
        I = p(Z, se), C = c >= q && c <= V ? u.substring(q, c) : "", F = !1;
      } else
        I = p(x, N), C = u.substring(x, c), F = !0;
      if (s.length > 0) {
        const q = g.toLowerCase(), V = _.toLowerCase(), Z = p(x, N);
        for (const se of s)
          se.onHtmlAttributeValue && se.onHtmlAttributeValue({ document: e, position: t, tag: q, attribute: V, value: C, range: Z });
      }
      return a.forEach((q) => {
        q.provideValues(g, _).forEach((V) => {
          const Z = F ? '"' + V.name + '"' : V.name;
          r.items.push({
            label: V.name,
            filterText: Z,
            kind: Ie.Unit,
            documentation: Nt(V, void 0, o),
            textEdit: ve.replace(I, Z),
            insertTextFormat: je.PlainText
          });
        });
      }), R(), r;
    }
    function v(x) {
      return c === m.getTokenEnd() && (D = m.scan(), D === x && m.getTokenOffset() === c) ? m.getTokenEnd() : c;
    }
    function P() {
      for (const x of s)
        x.onHtmlContent && x.onHtmlContent({ document: e, position: t });
      return R();
    }
    function R() {
      let x = c - 1, N = t.character;
      for (; x >= 0 && cn(u, x); )
        x--, N--;
      if (x >= 0 && u[x] === "&") {
        const I = ie.create(ge.create(t.line, N - 1), t);
        for (const F in bn)
          if (Sd(F, ";")) {
            const C = "&" + F;
            r.items.push({
              label: C,
              kind: Ie.Keyword,
              documentation: Xe("Character entity representing '{0}'", bn[F]),
              textEdit: ve.replace(I, C),
              insertTextFormat: je.PlainText
            });
          }
      }
      return r;
    }
    function k(x, N) {
      const I = p(x, N);
      r.items.push({
        label: "!DOCTYPE",
        kind: Ie.Property,
        documentation: "A preamble for an HTML document.",
        textEdit: ve.replace(I, "!DOCTYPE html>"),
        insertTextFormat: je.PlainText
      });
    }
    let D = m.scan();
    for (; D !== z.EOS && m.getTokenOffset() <= c; ) {
      switch (D) {
        case z.StartTagOpen:
          if (m.getTokenEnd() === c) {
            const x = v(z.StartTag);
            return t.line === 0 && k(c, x), H(c, x);
          }
          break;
        case z.StartTag:
          if (m.getTokenOffset() <= c && c <= m.getTokenEnd())
            return L(m.getTokenOffset(), m.getTokenEnd());
          g = m.getTokenText();
          break;
        case z.AttributeName:
          if (m.getTokenOffset() <= c && c <= m.getTokenEnd())
            return O(m.getTokenOffset(), m.getTokenEnd());
          _ = m.getTokenText();
          break;
        case z.DelimiterAssign:
          if (m.getTokenEnd() === c) {
            const x = v(z.AttributeValue);
            return f(c, x);
          }
          break;
        case z.AttributeValue:
          if (m.getTokenOffset() <= c && c <= m.getTokenEnd())
            return f(m.getTokenOffset(), m.getTokenEnd());
          break;
        case z.Whitespace:
          if (c <= m.getTokenEnd())
            switch (m.getScannerState()) {
              case J.AfterOpeningStartTag:
                const x = m.getTokenOffset(), N = v(z.StartTag);
                return H(x, N);
              case J.WithinTag:
              case J.AfterAttributeName:
                return O(m.getTokenEnd());
              case J.BeforeAttributeValue:
                return f(m.getTokenEnd());
              case J.AfterOpeningEndTag:
                return w(m.getTokenOffset() - 1, !1);
              case J.WithinContent:
                return P();
            }
          break;
        case z.EndTagOpen:
          if (c <= m.getTokenEnd()) {
            const x = m.getTokenOffset() + 1, N = v(z.EndTag);
            return w(x, !1, N);
          }
          break;
        case z.EndTag:
          if (c <= m.getTokenEnd()) {
            let x = m.getTokenOffset() - 1;
            for (; x >= 0; ) {
              const N = u.charAt(x);
              if (N === "/")
                return w(x, !1, m.getTokenEnd());
              if (!mi(N))
                break;
              x--;
            }
          }
          break;
        case z.StartTagClose:
          if (c <= m.getTokenEnd() && g)
            return E(m.getTokenEnd(), g);
          break;
        case z.Content:
          if (c <= m.getTokenEnd())
            return P();
          break;
        default:
          if (c <= m.getTokenEnd())
            return r;
          break;
      }
      D = m.scan();
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
      const u = Oe(e.getText(), o.start);
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
        const l = Oe(e.getText(), a.start);
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
        const a = Oe(e.getText(), s.start);
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
    if (!di(this.supportsMarkdown)) {
      if (!di(this.lsOptions.clientCapabilities))
        return this.supportsMarkdown = !0, this.supportsMarkdown;
      const i = (n = (t = (e = this.lsOptions.clientCapabilities.textDocument) == null ? void 0 : e.completion) == null ? void 0 : t.completionItem) == null ? void 0 : n.documentationFormat;
      this.supportsMarkdown = Array.isArray(i) && i.indexOf(ct.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
};
function Gd(e) {
  return /^["']*$/.test(e);
}
function mi(e) {
  return /^\s*$/.test(e);
}
function al(e, t, n, i) {
  const r = Oe(e, t, n);
  let s = r.scan();
  for (; s === z.Whitespace; )
    s = r.scan();
  return s === i;
}
function jd(e, t, n) {
  for (; t > n && !mi(e[t - 1]); )
    t--;
  return t;
}
function $d(e, t, n) {
  for (; t < n && !mi(e[t]); )
    t++;
  return t;
}
var Xd = class {
  constructor(e, t) {
    this.lsOptions = e, this.dataManager = t;
  }
  doHover(e, t, n, i) {
    const r = this.convertContents.bind(this), s = this.doesSupportMarkdown(), a = e.offsetAt(t), l = n.findNodeAt(a), o = e.getText();
    if (!l || !l.tag)
      return null;
    const u = this.dataManager.getDataProviders().filter((O) => O.isApplicable(e.languageId));
    function c(O, b, f) {
      for (const v of u) {
        let P = null;
        if (v.provideTags().forEach((R) => {
          if (R.name.toLowerCase() === O.toLowerCase()) {
            let k = Nt(R, i, s);
            k || (k = {
              kind: s ? "markdown" : "plaintext",
              value: ""
            }), P = { contents: k, range: b };
          }
        }), P)
          return P.contents = r(P.contents), P;
      }
      return null;
    }
    function d(O, b, f) {
      for (const v of u) {
        let P = null;
        if (v.provideAttributes(O).forEach((R) => {
          if (b === R.name && R.description) {
            const k = Nt(R, i, s);
            k ? P = { contents: k, range: f } : P = null;
          }
        }), P)
          return P.contents = r(P.contents), P;
      }
      return null;
    }
    function m(O, b, f, v) {
      for (const P of u) {
        let R = null;
        if (P.provideValues(O, b).forEach((k) => {
          if (f === k.name && k.description) {
            const D = Nt(k, i, s);
            D ? R = { contents: D, range: v } : R = null;
          }
        }), R)
          return R.contents = r(R.contents), R;
      }
      return null;
    }
    function g(O, b) {
      let f = L(O);
      for (const v in bn) {
        let P = null;
        const R = "&" + v;
        if (f === R) {
          let k = bn[v].charCodeAt(0).toString(16).toUpperCase(), D = "U+";
          if (k.length < 4) {
            const N = 4 - k.length;
            let I = 0;
            for (; I < N; )
              D += "0", I += 1;
          }
          D += k;
          const x = Xe("Character entity representing '{0}', unicode equivalent '{1}'", bn[v], D);
          x ? P = { contents: x, range: b } : P = null;
        }
        if (P)
          return P.contents = r(P.contents), P;
      }
      return null;
    }
    function _(O, b) {
      const f = Oe(e.getText(), b);
      let v = f.scan();
      for (; v !== z.EOS && (f.getTokenEnd() < a || f.getTokenEnd() === a && v !== O); )
        v = f.scan();
      return v === O && a <= f.getTokenEnd() ? { start: e.positionAt(f.getTokenOffset()), end: e.positionAt(f.getTokenEnd()) } : null;
    }
    function p() {
      let O = a - 1, b = t.character;
      for (; O >= 0 && cn(o, O); )
        O--, b--;
      let f = O + 1, v = b;
      for (; cn(o, f); )
        f++, v++;
      if (O >= 0 && o[O] === "&") {
        let P = null;
        return o[f] === ";" ? P = ie.create(ge.create(t.line, b), ge.create(t.line, v + 1)) : P = ie.create(ge.create(t.line, b), ge.create(t.line, v)), P;
      }
      return null;
    }
    function L(O) {
      let b = a - 1, f = "&";
      for (; b >= 0 && cn(O, b); )
        b--;
      for (b = b + 1; cn(O, b); )
        f += O[b], b += 1;
      return f += ";", f;
    }
    if (l.endTagStart && a >= l.endTagStart) {
      const O = _(z.EndTag, l.endTagStart);
      return O ? c(l.tag, O) : null;
    }
    const A = _(z.StartTag, l.start);
    if (A)
      return c(l.tag, A);
    const w = _(z.AttributeName, l.start);
    if (w) {
      const O = l.tag, b = e.getText(w);
      return d(O, b, w);
    }
    const E = p();
    if (E)
      return g(o, E);
    function H(O, b) {
      const f = Oe(e.getText(), O);
      let v = f.scan(), P;
      for (; v !== z.EOS && f.getTokenEnd() <= b; )
        v = f.scan(), v === z.AttributeName && (P = f.getTokenText());
      return P;
    }
    const W = _(z.AttributeValue, l.start);
    if (W) {
      const O = l.tag, b = Yd(e.getText(W)), f = H(l.start, e.offsetAt(W.start));
      if (f)
        return m(O, f, b, W);
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
    if (!di(this.supportsMarkdown)) {
      if (!di(this.lsOptions.clientCapabilities))
        return this.supportsMarkdown = !0, this.supportsMarkdown;
      const i = (n = (t = (e = this.lsOptions.clientCapabilities) == null ? void 0 : e.textDocument) == null ? void 0 : t.hover) == null ? void 0 : n.contentFormat;
      this.supportsMarkdown = Array.isArray(i) && i.indexOf(ct.Markdown) !== -1;
    }
    return this.supportsMarkdown;
  }
};
function Yd(e) {
  return e.length <= 1 ? e.replace(/['"]/, "") : ((e[0] === "'" || e[0] === '"') && (e = e.slice(1)), (e[e.length - 1] === "'" || e[e.length - 1] === '"') && (e = e.slice(0, -1)), e);
}
function Qd(e, t) {
  return e;
}
var Yl;
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
          var d = this.__lines[c];
          if (d.is_empty())
            break;
          if (d.item(0).indexOf(o) !== 0 && d.item(-1) !== u) {
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
        var c = this.raw_options[o], d = u || [];
        return typeof c == "object" ? c !== null && typeof c.concat == "function" && (d = c.concat()) : typeof c == "string" && (d = c.split(/[^a-zA-Z0-9_\/\-]+/)), d;
      }, s.prototype._get_boolean = function(o, u) {
        var c = this.raw_options[o], d = c === void 0 ? !!u : !!c;
        return d;
      }, s.prototype._get_characters = function(o, u) {
        var c = this.raw_options[o], d = u || "";
        return typeof c == "string" && (d = c.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), d;
      }, s.prototype._get_number = function(o, u) {
        var c = this.raw_options[o];
        u = parseInt(u, 10), isNaN(u) && (u = 0);
        var d = parseInt(c, 10);
        return isNaN(d) && (d = u), d;
      }, s.prototype._get_selection = function(o, u, c) {
        var d = this._get_selection_list(o, u, c);
        if (d.length !== 1)
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can only be one of the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return d[0];
      }, s.prototype._get_selection_list = function(o, u, c) {
        if (!u || u.length === 0)
          throw new Error("Selection list cannot be empty.");
        if (c = c || [u[0]], !this._is_valid_selection(c, u))
          throw new Error("Invalid Default Value!");
        var d = this._get_array(o, c);
        if (!this._is_valid_selection(d, u))
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can contain only the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return d;
      }, s.prototype._is_valid_selection = function(o, u) {
        return o.length && u.length && !o.some(function(c) {
          return u.indexOf(c) === -1;
        });
      };
      function a(o, u) {
        var c = {};
        o = l(o);
        var d;
        for (d in o)
          d !== u && (c[d] = o[d]);
        if (u && o[u])
          for (d in o[u])
            c[d] = o[u][d];
        return c;
      }
      function l(o) {
        var u = {}, c;
        for (c in o) {
          var d = c.replace(/-/g, "_");
          u[d] = o[c];
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
        var c = "", d;
        return l && (d = this.match(l), d && (c += d[0])), o && (d || !l) && (c += this.readUntil(o, u)), c;
      }, a.prototype.readUntil = function(l, o) {
        var u = "", c = this.__position;
        l.lastIndex = this.__position;
        var d = l.exec(this.__input);
        return d ? (c = d.index, o && (c += d[0].length)) : c = this.__input_length, u = this.__input.substring(this.__position, c), this.__position = c, u;
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
      function u(c, d) {
        var m = new l(c, d);
        return m.beautify();
      }
      r.exports = u, r.exports.defaultOptions = function() {
        return new o();
      };
    },
    /* 16 */
    /***/
    function(r, s, a) {
      var l = a(17).Options, o = a(2).Output, u = a(8).InputScanner, c = a(13).Directives, d = new c(/\/\*/, /\*\//), m = /\r\n|[\r\n]/, g = /\r\n|[\r\n]/g, _ = /\s/, p = /(?:\s|\n)+/g, L = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, A = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
      function w(E, H) {
        this._source_text = E || "", this._options = new l(H), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
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
      w.prototype.eatString = function(E) {
        var H = "";
        for (this._ch = this._input.next(); this._ch; ) {
          if (H += this._ch, this._ch === "\\")
            H += this._input.next();
          else if (E.indexOf(this._ch) !== -1 || this._ch === `
`)
            break;
          this._ch = this._input.next();
        }
        return H;
      }, w.prototype.eatWhitespace = function(E) {
        for (var H = _.test(this._input.peek()), W = 0; _.test(this._input.peek()); )
          this._ch = this._input.next(), E && this._ch === `
` && (W === 0 || W < this._options.max_preserve_newlines) && (W++, this._output.add_new_line(!0));
        return H;
      }, w.prototype.foundNestedPseudoClass = function() {
        for (var E = 0, H = 1, W = this._input.peek(H); W; ) {
          if (W === "{")
            return !0;
          if (W === "(")
            E += 1;
          else if (W === ")") {
            if (E === 0)
              return !1;
            E -= 1;
          } else if (W === ";" || W === "}")
            return !1;
          H++, W = this._input.peek(H);
        }
        return !1;
      }, w.prototype.print_string = function(E) {
        this._output.set_indent(this._indentLevel), this._output.non_breaking_space = !0, this._output.add_token(E);
      }, w.prototype.preserveSingleSpace = function(E) {
        E && (this._output.space_before_token = !0);
      }, w.prototype.indent = function() {
        this._indentLevel++;
      }, w.prototype.outdent = function() {
        this._indentLevel > 0 && this._indentLevel--;
      }, w.prototype.beautify = function() {
        if (this._options.disabled)
          return this._source_text;
        var E = this._source_text, H = this._options.eol;
        H === "auto" && (H = `
`, E && m.test(E || "") && (H = E.match(m)[0])), E = E.replace(g, `
`);
        var W = E.match(/^[\t ]*/)[0];
        this._output = new o(this._options, W), this._input = new u(E), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
        for (var O = 0, b = !1, f = !1, v = !1, P = !1, R = !1, k = this._ch, D = !1, x, N, I; x = this._input.read(p), N = x !== "", I = k, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), k = this._ch, this._ch; )
          if (this._ch === "/" && this._input.peek() === "*") {
            this._output.add_new_line(), this._input.back();
            var F = this._input.read(L), C = d.get_directives(F);
            C && C.ignore === "start" && (F += d.readIgnored(this._input)), this.print_string(F), this.eatWhitespace(!0), this._output.add_new_line();
          } else if (this._ch === "/" && this._input.peek() === "/")
            this._output.space_before_token = !0, this._input.back(), this.print_string(this._input.read(A)), this.eatWhitespace(!0);
          else if (this._ch === "$") {
            this.preserveSingleSpace(N), this.print_string(this._ch);
            var q = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
            q.match(/[ :]$/) && (q = this.eatString(": ").replace(/\s+$/, ""), this.print_string(q), this._output.space_before_token = !0), O === 0 && q.indexOf(":") !== -1 && (f = !0, this.indent());
          } else if (this._ch === "@")
            if (this.preserveSingleSpace(N), this._input.peek() === "{")
              this.print_string(this._ch + this.eatString("}"));
            else {
              this.print_string(this._ch);
              var V = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
              V.match(/[ :]$/) && (V = this.eatString(": ").replace(/\s+$/, ""), this.print_string(V), this._output.space_before_token = !0), O === 0 && V.indexOf(":") !== -1 ? (f = !0, this.indent()) : V in this.NESTED_AT_RULE ? (this._nestedLevel += 1, V in this.CONDITIONAL_GROUP_RULE && (v = !0)) : O === 0 && !f && (P = !0);
            }
          else if (this._ch === "#" && this._input.peek() === "{")
            this.preserveSingleSpace(N), this.print_string(this._ch + this.eatString("}"));
          else if (this._ch === "{")
            f && (f = !1, this.outdent()), P = !1, v ? (v = !1, b = this._indentLevel >= this._nestedLevel) : b = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && b && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = !0, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (I === "(" ? this._output.space_before_token = !1 : I !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(!0), this._output.add_new_line();
          else if (this._ch === "}")
            this.outdent(), this._output.add_new_line(), I === "{" && this._output.trim(!0), f && (this.outdent(), f = !1), this.print_string(this._ch), b = !1, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(!0), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(!0), this._input.peek() === ")" && (this._output.trim(!0), this._options.brace_style === "expand" && this._output.add_new_line(!0));
          else if (this._ch === ":") {
            for (var Z = 0; Z < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; Z++)
              if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[Z])) {
                D = !0;
                break;
              }
            (b || v) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !P && O === 0 ? (this.print_string(":"), f || (f = !0, this._output.space_before_token = !0, this.eatWhitespace(!0), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = !0), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
          } else if (this._ch === '"' || this._ch === "'") {
            var se = I === '"' || I === "'";
            this.preserveSingleSpace(se || N), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(!0);
          } else if (this._ch === ";")
            D = !1, O === 0 ? (f && (this.outdent(), f = !1), P = !1, this.print_string(this._ch), this.eatWhitespace(!0), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(!0), this._output.space_before_token = !0);
          else if (this._ch === "(")
            if (this._input.lookBack("url"))
              this.print_string(this._ch), this.eatWhitespace(), O++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), O && (O--, this.outdent()));
            else {
              var be = !1;
              this._input.lookBack("with") && (be = !0), this.preserveSingleSpace(N || be), this.print_string(this._ch), f && I === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), R = !0) : (this.eatWhitespace(), O++, this.indent());
            }
          else if (this._ch === ")")
            O && (O--, this.outdent()), R && this._input.peek() === ";" && this._options.selector_separator_newline && (R = !1, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
          else if (this._ch === ",")
            this.print_string(this._ch), this.eatWhitespace(!0), this._options.selector_separator_newline && (!f || R) && O === 0 && !P ? this._output.add_new_line() : this._output.space_before_token = !0;
          else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !f && O === 0)
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
            var Me = I === '"' || I === "'";
            this.preserveSingleSpace(Me || N), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && D && this._output.add_new_line();
          }
        var vi = this._output.get_code(H);
        return vi;
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
        var d = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
        this.brace_style = "collapse";
        for (var m = 0; m < d.length; m++)
          d[m] !== "expand" ? this.brace_style = "collapse" : this.brace_style = d[m];
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
  Yl = i;
})();
var Jd = Yl, Ql;
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
          var d = this.__lines[c];
          if (d.is_empty())
            break;
          if (d.item(0).indexOf(o) !== 0 && d.item(-1) !== u) {
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
        var c = this.raw_options[o], d = u || [];
        return typeof c == "object" ? c !== null && typeof c.concat == "function" && (d = c.concat()) : typeof c == "string" && (d = c.split(/[^a-zA-Z0-9_\/\-]+/)), d;
      }, s.prototype._get_boolean = function(o, u) {
        var c = this.raw_options[o], d = c === void 0 ? !!u : !!c;
        return d;
      }, s.prototype._get_characters = function(o, u) {
        var c = this.raw_options[o], d = u || "";
        return typeof c == "string" && (d = c.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), d;
      }, s.prototype._get_number = function(o, u) {
        var c = this.raw_options[o];
        u = parseInt(u, 10), isNaN(u) && (u = 0);
        var d = parseInt(c, 10);
        return isNaN(d) && (d = u), d;
      }, s.prototype._get_selection = function(o, u, c) {
        var d = this._get_selection_list(o, u, c);
        if (d.length !== 1)
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can only be one of the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return d[0];
      }, s.prototype._get_selection_list = function(o, u, c) {
        if (!u || u.length === 0)
          throw new Error("Selection list cannot be empty.");
        if (c = c || [u[0]], !this._is_valid_selection(c, u))
          throw new Error("Invalid Default Value!");
        var d = this._get_array(o, c);
        if (!this._is_valid_selection(d, u))
          throw new Error(
            "Invalid Option Value: The option '" + o + `' can contain only the following values:
` + u + `
You passed in: '` + this.raw_options[o] + "'"
          );
        return d;
      }, s.prototype._is_valid_selection = function(o, u) {
        return o.length && u.length && !o.some(function(c) {
          return u.indexOf(c) === -1;
        });
      };
      function a(o, u) {
        var c = {};
        o = l(o);
        var d;
        for (d in o)
          d !== u && (c[d] = o[d]);
        if (u && o[u])
          for (d in o[u])
            c[d] = o[u][d];
        return c;
      }
      function l(o) {
        var u = {}, c;
        for (c in o) {
          var d = c.replace(/-/g, "_");
          u[d] = o[c];
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
        var c = "", d;
        return l && (d = this.match(l), d && (c += d[0])), o && (d || !l) && (c += this.readUntil(o, u)), c;
      }, a.prototype.readUntil = function(l, o) {
        var u = "", c = this.__position;
        l.lastIndex = this.__position;
        var d = l.exec(this.__input);
        return d ? (c = d.index, o && (c += d[0].length)) : c = this.__input_length, u = this.__input.substring(this.__position, c), this.__position = c, u;
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
      var l = a(8).InputScanner, o = a(3).Token, u = a(10).TokenStream, c = a(11).WhitespacePattern, d = {
        START: "TK_START",
        RAW: "TK_RAW",
        EOF: "TK_EOF"
      }, m = function(g, _) {
        this._input = new l(g), this._options = _ || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new c(this._input);
      };
      m.prototype.tokenize = function() {
        this._input.restart(), this.__tokens = new u(), this._reset();
        for (var g, _ = new o(d.START, ""), p = null, L = [], A = new u(); _.type !== d.EOF; ) {
          for (g = this._get_next_token(_, p); this._is_comment(g); )
            A.add(g), g = this._get_next_token(_, p);
          A.isEmpty() || (g.comments_before = A, A = new u()), g.parent = p, this._is_opening(g) ? (L.push(p), p = g) : p && this._is_closing(g, p) && (g.opened = p, p.closed = g, p = L.pop(), g.parent = p), g.previous = _, _.next = g, this.__tokens.add(g), _ = g;
        }
        return this.__tokens;
      }, m.prototype._is_first_token = function() {
        return this.__tokens.isEmpty();
      }, m.prototype._reset = function() {
      }, m.prototype._get_next_token = function(g, _) {
        this._readWhitespace();
        var p = this._input.read(/.+/g);
        return p ? this._create_token(d.RAW, p) : this._create_token(d.EOF, "");
      }, m.prototype._is_comment = function(g) {
        return !1;
      }, m.prototype._is_opening = function(g) {
        return !1;
      }, m.prototype._is_closing = function(g, _) {
        return !1;
      }, m.prototype._create_token = function(g, _) {
        var p = new o(
          g,
          _,
          this._patterns.whitespace.newline_count,
          this._patterns.whitespace.whitespace_before_token
        );
        return p;
      }, m.prototype._readWhitespace = function() {
        return this._patterns.whitespace.read();
      }, r.exports.Tokenizer = m, r.exports.TOKEN = d;
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
        var d = this._create();
        return d.__set_whitespace_patterns(u, c), d._update(), d;
      }, o.prototype._create = function() {
        return new o(this._input, this);
      }, o.prototype.__split = function(u, c) {
        u.lastIndex = 0;
        for (var d = 0, m = [], g = u.exec(c); g; )
          m.push(c.substring(d, g.index)), d = g.index + g[0].length, g = u.exec(c);
        return d < c.length ? m.push(c.substring(d, c.length)) : m.push(""), m;
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
      function u(c, d) {
        l.call(this, c, d), this.__template_pattern = null, this._disabled = Object.assign({}, o), this._excluded = Object.assign({}, o), d && (this.__template_pattern = this._input.get_regexp(d.__template_pattern), this._excluded = Object.assign(this._excluded, d._excluded), this._disabled = Object.assign(this._disabled, d._disabled));
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
        var d = this._create();
        return d._disabled[c] = !0, d._update(), d;
      }, u.prototype.read_options = function(c) {
        var d = this._create();
        for (var m in o)
          d._disabled[m] = c.templating.indexOf(m) === -1;
        return d._update(), d;
      }, u.prototype.exclude = function(c) {
        var d = this._create();
        return d._excluded[c] = !0, d._update(), d;
      }, u.prototype.read = function() {
        var c = "";
        this._match_pattern ? c = this._input.read(this._starting_pattern) : c = this._input.read(this._starting_pattern, this.__template_pattern);
        for (var d = this._read_template(); d; )
          this._match_pattern ? d += this._input.read(this._match_pattern) : d += this._input.readUntil(this.__template_pattern), c += d, d = this._read_template();
        return this._until_after && (c += this._input.readUntilAfter(this._until_pattern)), c;
      }, u.prototype.__set_templated_pattern = function() {
        var c = [];
        this._disabled.php || c.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || c.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || c.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (c.push(this.__patterns.django._starting_pattern.source), c.push(this.__patterns.django_value._starting_pattern.source), c.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || c.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && c.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + c.join("|") + ")");
      }, u.prototype._read_template = function() {
        var c = "", d = this._input.peek();
        if (d === "<") {
          var m = this._input.peek(1);
          !this._disabled.php && !this._excluded.php && m === "?" && (c = c || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && m === "%" && (c = c || this.__patterns.erb.read());
        } else d === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (c = c || this.__patterns.handlebars_comment.read(), c = c || this.__patterns.handlebars_unescaped.read(), c = c || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (c = c || this.__patterns.django_value.read()), this._excluded.django || (c = c || this.__patterns.django_comment.read(), c = c || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (c = c || this.__patterns.smarty_comment.read(), c = c || this.__patterns.smarty_literal.read(), c = c || this.__patterns.smarty.read()));
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
      function u(c, d, m, g) {
        var _ = new l(c, d, m, g);
        return _.beautify();
      }
      r.exports = u, r.exports.defaultOptions = function() {
        return new o();
      };
    },
    /* 19 */
    /***/
    function(r, s, a) {
      var l = a(20).Options, o = a(2).Output, u = a(21).Tokenizer, c = a(21).TOKEN, d = /\r\n|[\r\n]/, m = /\r\n|[\r\n]/g, g = function(b, f) {
        this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = b.max_preserve_newlines, this.preserve_newlines = b.preserve_newlines, this._output = new o(b, f);
      };
      g.prototype.current_line_has_match = function(b) {
        return this._output.current_line.has_match(b);
      }, g.prototype.set_space_before_token = function(b, f) {
        this._output.space_before_token = b, this._output.non_breaking_space = f;
      }, g.prototype.set_wrap_point = function() {
        this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
      }, g.prototype.add_raw_token = function(b) {
        this._output.add_raw_token(b);
      }, g.prototype.print_preserved_newlines = function(b) {
        var f = 0;
        b.type !== c.TEXT && b.previous.type !== c.TEXT && (f = b.newlines ? 1 : 0), this.preserve_newlines && (f = b.newlines < this.max_preserve_newlines + 1 ? b.newlines : this.max_preserve_newlines + 1);
        for (var v = 0; v < f; v++)
          this.print_newline(v > 0);
        return f !== 0;
      }, g.prototype.traverse_whitespace = function(b) {
        return b.whitespace_before || b.newlines ? (this.print_preserved_newlines(b) || (this._output.space_before_token = !0), !0) : !1;
      }, g.prototype.previous_token_wrapped = function() {
        return this._output.previous_token_wrapped;
      }, g.prototype.print_newline = function(b) {
        this._output.add_new_line(b);
      }, g.prototype.print_token = function(b) {
        b.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(b.text));
      }, g.prototype.indent = function() {
        this.indent_level++;
      }, g.prototype.deindent = function() {
        this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
      }, g.prototype.get_full_indent = function(b) {
        return b = this.indent_level + (b || 0), b < 1 ? "" : this._output.get_indent_string(b);
      };
      var _ = function(b) {
        for (var f = null, v = b.next; v.type !== c.EOF && b.closed !== v; ) {
          if (v.type === c.ATTRIBUTE && v.text === "type") {
            v.next && v.next.type === c.EQUALS && v.next.next && v.next.next.type === c.VALUE && (f = v.next.next.text);
            break;
          }
          v = v.next;
        }
        return f;
      }, p = function(b, f) {
        var v = null, P = null;
        return f.closed ? (b === "script" ? v = "text/javascript" : b === "style" && (v = "text/css"), v = _(f) || v, v.search("text/css") > -1 ? P = "css" : v.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? P = "javascript" : v.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? P = "html" : v.search(/test\/null/) > -1 && (P = "null"), P) : null;
      };
      function L(b, f) {
        return f.indexOf(b) !== -1;
      }
      function A(b, f, v) {
        this.parent = b || null, this.tag = f ? f.tag_name : "", this.indent_level = v || 0, this.parser_token = f || null;
      }
      function w(b) {
        this._printer = b, this._current_frame = null;
      }
      w.prototype.get_parser_token = function() {
        return this._current_frame ? this._current_frame.parser_token : null;
      }, w.prototype.record_tag = function(b) {
        var f = new A(this._current_frame, b, this._printer.indent_level);
        this._current_frame = f;
      }, w.prototype._try_pop_frame = function(b) {
        var f = null;
        return b && (f = b.parser_token, this._printer.indent_level = b.indent_level, this._current_frame = b.parent), f;
      }, w.prototype._get_frame = function(b, f) {
        for (var v = this._current_frame; v && b.indexOf(v.tag) === -1; ) {
          if (f && f.indexOf(v.tag) !== -1) {
            v = null;
            break;
          }
          v = v.parent;
        }
        return v;
      }, w.prototype.try_pop = function(b, f) {
        var v = this._get_frame([b], f);
        return this._try_pop_frame(v);
      }, w.prototype.indent_to_tag = function(b) {
        var f = this._get_frame(b);
        f && (this._printer.indent_level = f.indent_level);
      };
      function E(b, f, v, P) {
        this._source_text = b || "", f = f || {}, this._js_beautify = v, this._css_beautify = P, this._tag_stack = null;
        var R = new l(f, "html");
        this._options = R, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
      }
      E.prototype.beautify = function() {
        if (this._options.disabled)
          return this._source_text;
        var b = this._source_text, f = this._options.eol;
        this._options.eol === "auto" && (f = `
`, b && d.test(b) && (f = b.match(d)[0])), b = b.replace(m, `
`);
        var v = b.match(/^[\t ]*/)[0], P = {
          text: "",
          type: ""
        }, R = new H(), k = new g(this._options, v), D = new u(b, this._options).tokenize();
        this._tag_stack = new w(k);
        for (var x = null, N = D.next(); N.type !== c.EOF; )
          N.type === c.TAG_OPEN || N.type === c.COMMENT ? (x = this._handle_tag_open(k, N, R, P, D), R = x) : N.type === c.ATTRIBUTE || N.type === c.EQUALS || N.type === c.VALUE || N.type === c.TEXT && !R.tag_complete ? x = this._handle_inside_tag(k, N, R, P) : N.type === c.TAG_CLOSE ? x = this._handle_tag_close(k, N, R) : N.type === c.TEXT ? x = this._handle_text(k, N, R) : N.type === c.CONTROL_FLOW_OPEN ? x = this._handle_control_flow_open(k, N) : N.type === c.CONTROL_FLOW_CLOSE ? x = this._handle_control_flow_close(k, N) : k.add_raw_token(N), P = x, N = D.next();
        var I = k._output.get_code(f);
        return I;
      }, E.prototype._handle_control_flow_open = function(b, f) {
        var v = {
          text: f.text,
          type: f.type
        };
        return b.set_space_before_token(f.newlines || f.whitespace_before !== "", !0), f.newlines ? b.print_preserved_newlines(f) : b.set_space_before_token(f.newlines || f.whitespace_before !== "", !0), b.print_token(f), b.indent(), v;
      }, E.prototype._handle_control_flow_close = function(b, f) {
        var v = {
          text: f.text,
          type: f.type
        };
        return b.deindent(), f.newlines ? b.print_preserved_newlines(f) : b.set_space_before_token(f.newlines || f.whitespace_before !== "", !0), b.print_token(f), v;
      }, E.prototype._handle_tag_close = function(b, f, v) {
        var P = {
          text: f.text,
          type: f.type
        };
        return b.alignment_size = 0, v.tag_complete = !0, b.set_space_before_token(f.newlines || f.whitespace_before !== "", !0), v.is_unformatted ? b.add_raw_token(f) : (v.tag_start_char === "<" && (b.set_space_before_token(f.text[0] === "/", !0), this._is_wrap_attributes_force_expand_multiline && v.has_wrapped_attrs && b.print_newline(!1)), b.print_token(f)), v.indent_content && !(v.is_unformatted || v.is_content_unformatted) && (b.indent(), v.indent_content = !1), !v.is_inline_element && !(v.is_unformatted || v.is_content_unformatted) && b.set_wrap_point(), P;
      }, E.prototype._handle_inside_tag = function(b, f, v, P) {
        var R = v.has_wrapped_attrs, k = {
          text: f.text,
          type: f.type
        };
        return b.set_space_before_token(f.newlines || f.whitespace_before !== "", !0), v.is_unformatted ? b.add_raw_token(f) : v.tag_start_char === "{" && f.type === c.TEXT ? b.print_preserved_newlines(f) ? (f.newlines = 0, b.add_raw_token(f)) : b.print_token(f) : (f.type === c.ATTRIBUTE ? b.set_space_before_token(!0) : (f.type === c.EQUALS || f.type === c.VALUE && f.previous.type === c.EQUALS) && b.set_space_before_token(!1), f.type === c.ATTRIBUTE && v.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (b.traverse_whitespace(f), R = R || f.newlines !== 0), this._is_wrap_attributes_force && v.attr_count >= this._options.wrap_attributes_min_attrs && (P.type !== c.TAG_OPEN || // ie. second attribute and beyond
        this._is_wrap_attributes_force_expand_multiline) && (b.print_newline(!1), R = !0)), b.print_token(f), R = R || b.previous_token_wrapped(), v.has_wrapped_attrs = R), k;
      }, E.prototype._handle_text = function(b, f, v) {
        var P = {
          text: f.text,
          type: "TK_CONTENT"
        };
        return v.custom_beautifier_name ? this._print_custom_beatifier_text(b, f, v) : v.is_unformatted || v.is_content_unformatted ? b.add_raw_token(f) : (b.traverse_whitespace(f), b.print_token(f)), P;
      }, E.prototype._print_custom_beatifier_text = function(b, f, v) {
        var P = this;
        if (f.text !== "") {
          var R = f.text, k, D = 1, x = "", N = "";
          v.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? k = this._js_beautify : v.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? k = this._css_beautify : v.custom_beautifier_name === "html" && (k = function(Z, se) {
            var be = new E(Z, se, P._js_beautify, P._css_beautify);
            return be.beautify();
          }), this._options.indent_scripts === "keep" ? D = 0 : this._options.indent_scripts === "separate" && (D = -b.indent_level);
          var I = b.get_full_indent(D);
          if (R = R.replace(/\n[ \t]*$/, ""), v.custom_beautifier_name !== "html" && R[0] === "<" && R.match(/^(<!--|<!\[CDATA\[)/)) {
            var F = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(R);
            if (!F) {
              b.add_raw_token(f);
              return;
            }
            x = I + F[1] + `
`, R = F[4], F[5] && (N = I + F[5]), R = R.replace(/\n[ \t]*$/, ""), (F[2] || F[3].indexOf(`
`) !== -1) && (F = F[3].match(/[ \t]+$/), F && (f.whitespace_before = F[0]));
          }
          if (R)
            if (k) {
              var C = function() {
                this.eol = `
`;
              };
              C.prototype = this._options.raw_options;
              var q = new C();
              R = k(I + R, q);
            } else {
              var V = f.whitespace_before;
              V && (R = R.replace(new RegExp(`
(` + V + ")?", "g"), `
`)), R = I + R.replace(/\n/g, `
` + I);
            }
          x && (R ? R = x + R + `
` + N : R = x + N), b.print_newline(!1), R && (f.text = R, f.whitespace_before = "", f.newlines = 0, b.add_raw_token(f), b.print_newline(!0));
        }
      }, E.prototype._handle_tag_open = function(b, f, v, P, R) {
        var k = this._get_tag_open_token(f);
        if ((v.is_unformatted || v.is_content_unformatted) && !v.is_empty_element && f.type === c.TAG_OPEN && !k.is_start_tag ? (b.add_raw_token(f), k.start_tag_token = this._tag_stack.try_pop(k.tag_name)) : (b.traverse_whitespace(f), this._set_tag_position(b, f, k, v, P), k.is_inline_element || b.set_wrap_point(), b.print_token(f)), k.is_start_tag && this._is_wrap_attributes_force) {
          var D = 0, x;
          do
            x = R.peek(D), x.type === c.ATTRIBUTE && (k.attr_count += 1), D += 1;
          while (x.type !== c.EOF && x.type !== c.TAG_CLOSE);
        }
        return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (k.alignment_size = f.text.length + 1), !k.tag_complete && !k.is_unformatted && (b.alignment_size = k.alignment_size), k;
      };
      var H = function(b, f) {
        if (this.parent = b || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = !1, this.is_unformatted = !1, this.is_content_unformatted = !1, this.is_empty_element = !1, this.is_start_tag = !1, this.is_end_tag = !1, this.indent_content = !1, this.multiline_content = !1, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = !1, this.alignment_size = 0, this.tag_complete = !1, this.tag_start_char = "", this.tag_check = "", !f)
          this.tag_complete = !0;
        else {
          var v;
          this.tag_start_char = f.text[0], this.text = f.text, this.tag_start_char === "<" ? (v = f.text.match(/^<([^\s>]*)/), this.tag_check = v ? v[1] : "") : (v = f.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = v ? v[1] : "", (f.text.startsWith("{{#>") || f.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && f.next !== null ? this.tag_check = f.next.text.split(" ")[0] : this.tag_check = f.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), f.type === c.COMMENT && (this.tag_complete = !0), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || f.closed && f.closed.text === "/>";
          var P = 2;
          this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (P = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(P)));
        }
      };
      E.prototype._get_tag_open_token = function(b) {
        var f = new H(this._tag_stack.get_parser_token(), b);
        return f.alignment_size = this._options.wrap_attributes_indent_size, f.is_end_tag = f.is_end_tag || L(f.tag_check, this._options.void_elements), f.is_empty_element = f.tag_complete || f.is_start_tag && f.is_end_tag, f.is_unformatted = !f.tag_complete && L(f.tag_check, this._options.unformatted), f.is_content_unformatted = !f.is_empty_element && L(f.tag_check, this._options.content_unformatted), f.is_inline_element = L(f.tag_name, this._options.inline) || this._options.inline_custom_elements && f.tag_name.includes("-") || f.tag_start_char === "{", f;
      }, E.prototype._set_tag_position = function(b, f, v, P, R) {
        if (v.is_empty_element || (v.is_end_tag ? v.start_tag_token = this._tag_stack.try_pop(v.tag_name) : (this._do_optional_end_element(v) && (v.is_inline_element || b.print_newline(!1)), this._tag_stack.record_tag(v), (v.tag_name === "script" || v.tag_name === "style") && !(v.is_unformatted || v.is_content_unformatted) && (v.custom_beautifier_name = p(v.tag_check, f)))), L(v.tag_check, this._options.extra_liners) && (b.print_newline(!1), b._output.just_added_blankline() || b.print_newline(!0)), v.is_empty_element) {
          if (v.tag_start_char === "{" && v.tag_check === "else") {
            this._tag_stack.indent_to_tag(["if", "unless", "each"]), v.indent_content = !0;
            var k = b.current_line_has_match(/{{#if/);
            k || b.print_newline(!1);
          }
          v.tag_name === "!--" && R.type === c.TAG_CLOSE && P.is_end_tag && v.text.indexOf(`
`) === -1 || (v.is_inline_element || v.is_unformatted || b.print_newline(!1), this._calcluate_parent_multiline(b, v));
        } else if (v.is_end_tag) {
          var D = !1;
          D = v.start_tag_token && v.start_tag_token.multiline_content, D = D || !v.is_inline_element && !(P.is_inline_element || P.is_unformatted) && !(R.type === c.TAG_CLOSE && v.start_tag_token === P) && R.type !== "TK_CONTENT", (v.is_content_unformatted || v.is_unformatted) && (D = !1), D && b.print_newline(!1);
        } else
          v.indent_content = !v.custom_beautifier_name, v.tag_start_char === "<" && (v.tag_name === "html" ? v.indent_content = this._options.indent_inner_html : v.tag_name === "head" ? v.indent_content = this._options.indent_head_inner_html : v.tag_name === "body" && (v.indent_content = this._options.indent_body_inner_html)), !(v.is_inline_element || v.is_unformatted) && (R.type !== "TK_CONTENT" || v.is_content_unformatted) && b.print_newline(!1), this._calcluate_parent_multiline(b, v);
      }, E.prototype._calcluate_parent_multiline = function(b, f) {
        f.parent && b._output.just_added_newline() && !((f.is_inline_element || f.is_unformatted) && f.parent.is_inline_element) && (f.parent.multiline_content = !0);
      };
      var W = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], O = ["a", "audio", "del", "ins", "map", "noscript", "video"];
      E.prototype._do_optional_end_element = function(b) {
        var f = null;
        if (!(b.is_empty_element || !b.is_start_tag || !b.parent)) {
          if (b.tag_name === "body")
            f = f || this._tag_stack.try_pop("head");
          else if (b.tag_name === "li")
            f = f || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
          else if (b.tag_name === "dd" || b.tag_name === "dt")
            f = f || this._tag_stack.try_pop("dt", ["dl"]), f = f || this._tag_stack.try_pop("dd", ["dl"]);
          else if (b.parent.tag_name === "p" && W.indexOf(b.tag_name) !== -1) {
            var v = b.parent.parent;
            (!v || O.indexOf(v.tag_name) === -1) && (f = f || this._tag_stack.try_pop("p"));
          } else b.tag_name === "rp" || b.tag_name === "rt" ? (f = f || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), f = f || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : b.tag_name === "optgroup" ? f = f || this._tag_stack.try_pop("optgroup", ["select"]) : b.tag_name === "option" ? f = f || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : b.tag_name === "colgroup" ? f = f || this._tag_stack.try_pop("caption", ["table"]) : b.tag_name === "thead" ? (f = f || this._tag_stack.try_pop("caption", ["table"]), f = f || this._tag_stack.try_pop("colgroup", ["table"])) : b.tag_name === "tbody" || b.tag_name === "tfoot" ? (f = f || this._tag_stack.try_pop("caption", ["table"]), f = f || this._tag_stack.try_pop("colgroup", ["table"]), f = f || this._tag_stack.try_pop("thead", ["table"]), f = f || this._tag_stack.try_pop("tbody", ["table"])) : b.tag_name === "tr" ? (f = f || this._tag_stack.try_pop("caption", ["table"]), f = f || this._tag_stack.try_pop("colgroup", ["table"]), f = f || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (b.tag_name === "th" || b.tag_name === "td") && (f = f || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), f = f || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
          return b.parent = this._tag_stack.get_parser_token(), f;
        }
      }, r.exports.Beautifier = E;
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
      var l = a(9).Tokenizer, o = a(9).TOKEN, u = a(13).Directives, c = a(14).TemplatablePattern, d = a(12).Pattern, m = {
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
      }, g = new u(/<\!--/, /-->/), _ = function(p, L) {
        l.call(this, p, L), this._current_tag_name = "";
        var A = new c(this._input).read_options(this._options), w = new d(this._input);
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
          var E = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
          this.__patterns.unformatted_content_delimiter = w.matching(E).until_after(E);
        }
      };
      _.prototype = new l(), _.prototype._is_comment = function(p) {
        return !1;
      }, _.prototype._is_opening = function(p) {
        return p.type === m.TAG_OPEN || p.type === m.CONTROL_FLOW_OPEN;
      }, _.prototype._is_closing = function(p, L) {
        return p.type === m.TAG_CLOSE && L && ((p.text === ">" || p.text === "/>") && L.text[0] === "<" || p.text === "}}" && L.text[0] === "{" && L.text[1] === "{") || p.type === m.CONTROL_FLOW_CLOSE && p.text === "}" && L.text.endsWith("{");
      }, _.prototype._reset = function() {
        this._current_tag_name = "";
      }, _.prototype._get_next_token = function(p, L) {
        var A = null;
        this._readWhitespace();
        var w = this._input.peek();
        return w === null ? this._create_token(m.EOF, "") : (A = A || this._read_open_handlebars(w, L), A = A || this._read_attribute(w, p, L), A = A || this._read_close(w, L), A = A || this._read_control_flows(w, L), A = A || this._read_raw_content(w, p, L), A = A || this._read_content_word(w, L), A = A || this._read_comment_or_cdata(w), A = A || this._read_processing(w), A = A || this._read_open(w, L), A = A || this._create_token(m.UNKNOWN, this._input.next()), A);
      }, _.prototype._read_comment_or_cdata = function(p) {
        var L = null, A = null, w = null;
        if (p === "<") {
          var E = this._input.peek(1);
          E === "!" && (A = this.__patterns.comment.read(), A ? (w = g.get_directives(A), w && w.ignore === "start" && (A += g.readIgnored(this._input))) : A = this.__patterns.cdata.read()), A && (L = this._create_token(m.COMMENT, A), L.directives = w);
        }
        return L;
      }, _.prototype._read_processing = function(p) {
        var L = null, A = null, w = null;
        if (p === "<") {
          var E = this._input.peek(1);
          (E === "!" || E === "?") && (A = this.__patterns.conditional_comment.read(), A = A || this.__patterns.processing.read()), A && (L = this._create_token(m.COMMENT, A), L.directives = w);
        }
        return L;
      }, _.prototype._read_open = function(p, L) {
        var A = null, w = null;
        return (!L || L.type === m.CONTROL_FLOW_OPEN) && p === "<" && (A = this._input.next(), this._input.peek() === "/" && (A += this._input.next()), A += this.__patterns.element_name.read(), w = this._create_token(m.TAG_OPEN, A)), w;
      }, _.prototype._read_open_handlebars = function(p, L) {
        var A = null, w = null;
        return (!L || L.type === m.CONTROL_FLOW_OPEN) && this._options.indent_handlebars && p === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (A = this.__patterns.handlebars_comment.read(), A = A || this.__patterns.handlebars.read(), w = this._create_token(m.COMMENT, A)) : (A = this.__patterns.handlebars_open.read(), w = this._create_token(m.TAG_OPEN, A))), w;
      }, _.prototype._read_control_flows = function(p, L) {
        var A = "", w = null;
        if (!this._options.templating.includes("angular") || !this._options.indent_handlebars)
          return w;
        if (p === "@") {
          if (A = this.__patterns.angular_control_flow_start.read(), A === "")
            return w;
          for (var E = A.endsWith("(") ? 1 : 0, H = 0; !(A.endsWith("{") && E === H); ) {
            var W = this._input.next();
            if (W === null)
              break;
            W === "(" ? E++ : W === ")" && H++, A += W;
          }
          w = this._create_token(m.CONTROL_FLOW_OPEN, A);
        } else p === "}" && L && L.type === m.CONTROL_FLOW_OPEN && (A = this._input.next(), w = this._create_token(m.CONTROL_FLOW_CLOSE, A));
        return w;
      }, _.prototype._read_close = function(p, L) {
        var A = null, w = null;
        return L && L.type === m.TAG_OPEN && (L.text[0] === "<" && (p === ">" || p === "/" && this._input.peek(1) === ">") ? (A = this._input.next(), p === "/" && (A += this._input.next()), w = this._create_token(m.TAG_CLOSE, A)) : L.text[0] === "{" && p === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), w = this._create_token(m.TAG_CLOSE, "}}"))), w;
      }, _.prototype._read_attribute = function(p, L, A) {
        var w = null, E = "";
        if (A && A.text[0] === "<")
          if (p === "=")
            w = this._create_token(m.EQUALS, this._input.next());
          else if (p === '"' || p === "'") {
            var H = this._input.next();
            p === '"' ? H += this.__patterns.double_quote.read() : H += this.__patterns.single_quote.read(), w = this._create_token(m.VALUE, H);
          } else
            E = this.__patterns.attribute.read(), E && (L.type === m.EQUALS ? w = this._create_token(m.VALUE, E) : w = this._create_token(m.ATTRIBUTE, E));
        return w;
      }, _.prototype._is_content_unformatted = function(p) {
        return this._options.void_elements.indexOf(p) === -1 && (this._options.content_unformatted.indexOf(p) !== -1 || this._options.unformatted.indexOf(p) !== -1);
      }, _.prototype._read_raw_content = function(p, L, A) {
        var w = "";
        if (A && A.text[0] === "{")
          w = this.__patterns.handlebars_raw_close.read();
        else if (L.type === m.TAG_CLOSE && L.opened.text[0] === "<" && L.text[0] !== "/") {
          var E = L.opened.text.substr(1).toLowerCase();
          if (E === "script" || E === "style") {
            var H = this._read_comment_or_cdata(p);
            if (H)
              return H.type = m.TEXT, H;
            w = this._input.readUntil(new RegExp("</" + E + "[\\n\\r\\t ]*?>", "ig"));
          } else this._is_content_unformatted(E) && (w = this._input.readUntil(new RegExp("</" + E + "[\\n\\r\\t ]*?>", "ig")));
        }
        return w ? this._create_token(m.TEXT, w) : null;
      }, _.prototype._read_content_word = function(p, L) {
        var A = "";
        if (this._options.unformatted_content_delimiter && p === this._options.unformatted_content_delimiter[0] && (A = this.__patterns.unformatted_content_delimiter.read()), A || (A = L && L.type === m.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), A)
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
  Ql = i;
})();
function Zd(e, t) {
  return Ql(e, t, Qd, Jd);
}
function Kd(e, t, n) {
  let i = e.getText(), r = !0, s = 0;
  const a = n.tabSize || 4;
  if (t) {
    let u = e.offsetAt(t.start), c = u;
    for (; c > 0 && ll(i, c - 1); )
      c--;
    c === 0 || ol(i, c - 1) ? u = c : c < u && (u = c + 1);
    let d = e.offsetAt(t.end), m = d;
    for (; m < i.length && ll(i, m); )
      m++;
    (m === i.length || ol(i, m)) && (d = m), t = ie.create(e.positionAt(u), e.positionAt(d));
    const g = i.substring(0, u);
    if (new RegExp(/.*[<][^>]*$/).test(g))
      return i = i.substring(u, d), [{
        range: t,
        newText: i
      }];
    if (r = d === i.length, i = i.substring(u, d), u !== 0) {
      const _ = e.offsetAt(ge.create(t.start.line, 0));
      s = nm(e.getText(), _, n);
    }
  } else
    t = ie.create(ge.create(0, 0), e.positionAt(i.length));
  const l = {
    indent_size: a,
    indent_char: n.insertSpaces ? " " : "	",
    indent_empty_lines: He(n, "indentEmptyLines", !1),
    wrap_line_length: He(n, "wrapLineLength", 120),
    unformatted: Ei(n, "unformatted", void 0),
    content_unformatted: Ei(n, "contentUnformatted", void 0),
    indent_inner_html: He(n, "indentInnerHtml", !1),
    preserve_newlines: He(n, "preserveNewLines", !0),
    max_preserve_newlines: He(n, "maxPreserveNewLines", 32786),
    indent_handlebars: He(n, "indentHandlebars", !1),
    end_with_newline: r && He(n, "endWithNewline", !1),
    extra_liners: Ei(n, "extraLiners", void 0),
    wrap_attributes: He(n, "wrapAttributes", "auto"),
    wrap_attributes_indent_size: He(n, "wrapAttributesIndentSize", void 0),
    eol: `
`,
    indent_scripts: He(n, "indentScripts", "normal"),
    templating: tm(n, "all"),
    unformatted_content_delimiter: He(n, "unformattedContentDelimiter", "")
  };
  let o = Zd(em(i), l);
  if (s > 0) {
    const u = n.insertSpaces ? sl(" ", a * s) : sl("	", s);
    o = o.split(`
`).join(`
` + u), t.start.character === 0 && (o = u + o);
  }
  return [{
    range: t,
    newText: o
  }];
}
function em(e) {
  return e.replace(/^\s+/, "");
}
function He(e, t, n) {
  if (e && e.hasOwnProperty(t)) {
    const i = e[t];
    if (i !== null)
      return i;
  }
  return n;
}
function Ei(e, t, n) {
  const i = He(e, t, null);
  return typeof i == "string" ? i.length > 0 ? i.split(",").map((r) => r.trim().toLowerCase()) : [] : n;
}
function tm(e, t) {
  const n = He(e, "templating", t);
  return n === !0 ? ["auto"] : n === !1 || n === t || Array.isArray(n) === !1 ? ["none"] : n;
}
function nm(e, t, n) {
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
function ol(e, t) {
  return `\r
`.indexOf(e.charAt(t)) !== -1;
}
function ll(e, t) {
  return " 	".indexOf(e.charAt(t)) !== -1;
}
var Jl;
(() => {
  var e = { 470: (r) => {
    function s(o) {
      if (typeof o != "string")
        throw new TypeError("Path must be a string. Received " + JSON.stringify(o));
    }
    function a(o, u) {
      for (var c, d = "", m = 0, g = -1, _ = 0, p = 0; p <= o.length; ++p) {
        if (p < o.length)
          c = o.charCodeAt(p);
        else {
          if (c === 47)
            break;
          c = 47;
        }
        if (c === 47) {
          if (!(g === p - 1 || _ === 1))
            if (g !== p - 1 && _ === 2) {
              if (d.length < 2 || m !== 2 || d.charCodeAt(d.length - 1) !== 46 || d.charCodeAt(d.length - 2) !== 46) {
                if (d.length > 2) {
                  var L = d.lastIndexOf("/");
                  if (L !== d.length - 1) {
                    L === -1 ? (d = "", m = 0) : m = (d = d.slice(0, L)).length - 1 - d.lastIndexOf("/"), g = p, _ = 0;
                    continue;
                  }
                } else if (d.length === 2 || d.length === 1) {
                  d = "", m = 0, g = p, _ = 0;
                  continue;
                }
              }
              u && (d.length > 0 ? d += "/.." : d = "..", m = 2);
            } else
              d.length > 0 ? d += "/" + o.slice(g + 1, p) : d = o.slice(g + 1, p), m = p - g - 1;
          g = p, _ = 0;
        } else
          c === 46 && _ !== -1 ? ++_ : _ = -1;
      }
      return d;
    }
    var l = { resolve: function() {
      for (var o, u = "", c = !1, d = arguments.length - 1; d >= -1 && !c; d--) {
        var m;
        d >= 0 ? m = arguments[d] : (o === void 0 && (o = process.cwd()), m = o), s(m), m.length !== 0 && (u = m + "/" + u, c = m.charCodeAt(0) === 47);
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
      for (var d = o.length, m = d - c, g = 1; g < u.length && u.charCodeAt(g) === 47; ++g)
        ;
      for (var _ = u.length - g, p = m < _ ? m : _, L = -1, A = 0; A <= p; ++A) {
        if (A === p) {
          if (_ > p) {
            if (u.charCodeAt(g + A) === 47)
              return u.slice(g + A + 1);
            if (A === 0)
              return u.slice(g + A);
          } else
            m > p && (o.charCodeAt(c + A) === 47 ? L = A : A === 0 && (L = 0));
          break;
        }
        var w = o.charCodeAt(c + A);
        if (w !== u.charCodeAt(g + A))
          break;
        w === 47 && (L = A);
      }
      var E = "";
      for (A = c + L + 1; A <= d; ++A)
        A !== d && o.charCodeAt(A) !== 47 || (E.length === 0 ? E += ".." : E += "/..");
      return E.length > 0 ? E + u.slice(g + L) : (g += L, u.charCodeAt(g) === 47 && ++g, u.slice(g));
    }, _makeLong: function(o) {
      return o;
    }, dirname: function(o) {
      if (s(o), o.length === 0)
        return ".";
      for (var u = o.charCodeAt(0), c = u === 47, d = -1, m = !0, g = o.length - 1; g >= 1; --g)
        if ((u = o.charCodeAt(g)) === 47) {
          if (!m) {
            d = g;
            break;
          }
        } else
          m = !1;
      return d === -1 ? c ? "/" : "." : c && d === 1 ? "//" : o.slice(0, d);
    }, basename: function(o, u) {
      if (u !== void 0 && typeof u != "string")
        throw new TypeError('"ext" argument must be a string');
      s(o);
      var c, d = 0, m = -1, g = !0;
      if (u !== void 0 && u.length > 0 && u.length <= o.length) {
        if (u.length === o.length && u === o)
          return "";
        var _ = u.length - 1, p = -1;
        for (c = o.length - 1; c >= 0; --c) {
          var L = o.charCodeAt(c);
          if (L === 47) {
            if (!g) {
              d = c + 1;
              break;
            }
          } else
            p === -1 && (g = !1, p = c + 1), _ >= 0 && (L === u.charCodeAt(_) ? --_ == -1 && (m = c) : (_ = -1, m = p));
        }
        return d === m ? m = p : m === -1 && (m = o.length), o.slice(d, m);
      }
      for (c = o.length - 1; c >= 0; --c)
        if (o.charCodeAt(c) === 47) {
          if (!g) {
            d = c + 1;
            break;
          }
        } else
          m === -1 && (g = !1, m = c + 1);
      return m === -1 ? "" : o.slice(d, m);
    }, extname: function(o) {
      s(o);
      for (var u = -1, c = 0, d = -1, m = !0, g = 0, _ = o.length - 1; _ >= 0; --_) {
        var p = o.charCodeAt(_);
        if (p !== 47)
          d === -1 && (m = !1, d = _ + 1), p === 46 ? u === -1 ? u = _ : g !== 1 && (g = 1) : u !== -1 && (g = -1);
        else if (!m) {
          c = _ + 1;
          break;
        }
      }
      return u === -1 || d === -1 || g === 0 || g === 1 && u === d - 1 && u === c + 1 ? "" : o.slice(u, d);
    }, format: function(o) {
      if (o === null || typeof o != "object")
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof o);
      return (function(u, c) {
        var d = c.dir || c.root, m = c.base || (c.name || "") + (c.ext || "");
        return d ? d === c.root ? d + m : d + "/" + m : m;
      })(0, o);
    }, parse: function(o) {
      s(o);
      var u = { root: "", dir: "", base: "", ext: "", name: "" };
      if (o.length === 0)
        return u;
      var c, d = o.charCodeAt(0), m = d === 47;
      m ? (u.root = "/", c = 1) : c = 0;
      for (var g = -1, _ = 0, p = -1, L = !0, A = o.length - 1, w = 0; A >= c; --A)
        if ((d = o.charCodeAt(A)) !== 47)
          p === -1 && (L = !1, p = A + 1), d === 46 ? g === -1 ? g = A : w !== 1 && (w = 1) : g !== -1 && (w = -1);
        else if (!L) {
          _ = A + 1;
          break;
        }
      return g === -1 || p === -1 || w === 0 || w === 1 && g === p - 1 && g === _ + 1 ? p !== -1 && (u.base = u.name = _ === 0 && m ? o.slice(1, p) : o.slice(_, p)) : (_ === 0 && m ? (u.name = o.slice(1, g), u.base = o.slice(1, p)) : (u.name = o.slice(_, g), u.base = o.slice(_, p)), u.ext = o.slice(g, p)), _ > 0 ? u.dir = o.slice(0, _ - 1) : m && (u.dir = "/"), u;
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
    n.r(i), n.d(i, { URI: () => m, Utils: () => P }), typeof process == "object" ? r = process.platform === "win32" : typeof navigator == "object" && (r = navigator.userAgent.indexOf("Windows") >= 0);
    const s = /^\w[\w\d+.-]*$/, a = /^\//, l = /^\/\//;
    function o(R, k) {
      if (!R.scheme && k)
        throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${R.authority}", path: "${R.path}", query: "${R.query}", fragment: "${R.fragment}"}`);
      if (R.scheme && !s.test(R.scheme))
        throw new Error("[UriError]: Scheme contains illegal characters.");
      if (R.path) {
        if (R.authority) {
          if (!a.test(R.path))
            throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
        } else if (l.test(R.path))
          throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
    const u = "", c = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    class m {
      constructor(k, D, x, N, I, F = !1) {
        ft(this, "scheme");
        ft(this, "authority");
        ft(this, "path");
        ft(this, "query");
        ft(this, "fragment");
        typeof k == "object" ? (this.scheme = k.scheme || u, this.authority = k.authority || u, this.path = k.path || u, this.query = k.query || u, this.fragment = k.fragment || u) : (this.scheme = /* @__PURE__ */ (function(C, q) {
          return C || q ? C : "file";
        })(k, F), this.authority = D || u, this.path = (function(C, q) {
          switch (C) {
            case "https":
            case "http":
            case "file":
              q ? q[0] !== c && (q = c + q) : q = c;
          }
          return q;
        })(this.scheme, x || u), this.query = N || u, this.fragment = I || u, o(this, F));
      }
      static isUri(k) {
        return k instanceof m || !!k && typeof k.authority == "string" && typeof k.fragment == "string" && typeof k.path == "string" && typeof k.query == "string" && typeof k.scheme == "string" && typeof k.fsPath == "string" && typeof k.with == "function" && typeof k.toString == "function";
      }
      get fsPath() {
        return w(this);
      }
      with(k) {
        if (!k)
          return this;
        let { scheme: D, authority: x, path: N, query: I, fragment: F } = k;
        return D === void 0 ? D = this.scheme : D === null && (D = u), x === void 0 ? x = this.authority : x === null && (x = u), N === void 0 ? N = this.path : N === null && (N = u), I === void 0 ? I = this.query : I === null && (I = u), F === void 0 ? F = this.fragment : F === null && (F = u), D === this.scheme && x === this.authority && N === this.path && I === this.query && F === this.fragment ? this : new _(D, x, N, I, F);
      }
      static parse(k, D = !1) {
        const x = d.exec(k);
        return x ? new _(x[2] || u, O(x[4] || u), O(x[5] || u), O(x[7] || u), O(x[9] || u), D) : new _(u, u, u, u, u);
      }
      static file(k) {
        let D = u;
        if (r && (k = k.replace(/\\/g, c)), k[0] === c && k[1] === c) {
          const x = k.indexOf(c, 2);
          x === -1 ? (D = k.substring(2), k = c) : (D = k.substring(2, x), k = k.substring(x) || c);
        }
        return new _("file", D, k, u, u);
      }
      static from(k) {
        const D = new _(k.scheme, k.authority, k.path, k.query, k.fragment);
        return o(D, !0), D;
      }
      toString(k = !1) {
        return E(this, k);
      }
      toJSON() {
        return this;
      }
      static revive(k) {
        if (k) {
          if (k instanceof m)
            return k;
          {
            const D = new _(k);
            return D._formatted = k.external, D._fsPath = k._sep === g ? k.fsPath : null, D;
          }
        }
        return k;
      }
    }
    const g = r ? 1 : void 0;
    class _ extends m {
      constructor() {
        super(...arguments);
        ft(this, "_formatted", null);
        ft(this, "_fsPath", null);
      }
      get fsPath() {
        return this._fsPath || (this._fsPath = w(this)), this._fsPath;
      }
      toString(D = !1) {
        return D ? E(this, !0) : (this._formatted || (this._formatted = E(this, !1)), this._formatted);
      }
      toJSON() {
        const D = { $mid: 1 };
        return this._fsPath && (D.fsPath = this._fsPath, D._sep = g), this._formatted && (D.external = this._formatted), this.path && (D.path = this.path), this.scheme && (D.scheme = this.scheme), this.authority && (D.authority = this.authority), this.query && (D.query = this.query), this.fragment && (D.fragment = this.fragment), D;
      }
    }
    const p = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
    function L(R, k, D) {
      let x, N = -1;
      for (let I = 0; I < R.length; I++) {
        const F = R.charCodeAt(I);
        if (F >= 97 && F <= 122 || F >= 65 && F <= 90 || F >= 48 && F <= 57 || F === 45 || F === 46 || F === 95 || F === 126 || k && F === 47 || D && F === 91 || D && F === 93 || D && F === 58)
          N !== -1 && (x += encodeURIComponent(R.substring(N, I)), N = -1), x !== void 0 && (x += R.charAt(I));
        else {
          x === void 0 && (x = R.substr(0, I));
          const C = p[F];
          C !== void 0 ? (N !== -1 && (x += encodeURIComponent(R.substring(N, I)), N = -1), x += C) : N === -1 && (N = I);
        }
      }
      return N !== -1 && (x += encodeURIComponent(R.substring(N))), x !== void 0 ? x : R;
    }
    function A(R) {
      let k;
      for (let D = 0; D < R.length; D++) {
        const x = R.charCodeAt(D);
        x === 35 || x === 63 ? (k === void 0 && (k = R.substr(0, D)), k += p[x]) : k !== void 0 && (k += R[D]);
      }
      return k !== void 0 ? k : R;
    }
    function w(R, k) {
      let D;
      return D = R.authority && R.path.length > 1 && R.scheme === "file" ? `//${R.authority}${R.path}` : R.path.charCodeAt(0) === 47 && (R.path.charCodeAt(1) >= 65 && R.path.charCodeAt(1) <= 90 || R.path.charCodeAt(1) >= 97 && R.path.charCodeAt(1) <= 122) && R.path.charCodeAt(2) === 58 ? R.path[1].toLowerCase() + R.path.substr(2) : R.path, r && (D = D.replace(/\//g, "\\")), D;
    }
    function E(R, k) {
      const D = k ? A : L;
      let x = "", { scheme: N, authority: I, path: F, query: C, fragment: q } = R;
      if (N && (x += N, x += ":"), (I || N === "file") && (x += c, x += c), I) {
        let V = I.indexOf("@");
        if (V !== -1) {
          const Z = I.substr(0, V);
          I = I.substr(V + 1), V = Z.lastIndexOf(":"), V === -1 ? x += D(Z, !1, !1) : (x += D(Z.substr(0, V), !1, !1), x += ":", x += D(Z.substr(V + 1), !1, !0)), x += "@";
        }
        I = I.toLowerCase(), V = I.lastIndexOf(":"), V === -1 ? x += D(I, !1, !0) : (x += D(I.substr(0, V), !1, !0), x += I.substr(V));
      }
      if (F) {
        if (F.length >= 3 && F.charCodeAt(0) === 47 && F.charCodeAt(2) === 58) {
          const V = F.charCodeAt(1);
          V >= 65 && V <= 90 && (F = `/${String.fromCharCode(V + 32)}:${F.substr(3)}`);
        } else if (F.length >= 2 && F.charCodeAt(1) === 58) {
          const V = F.charCodeAt(0);
          V >= 65 && V <= 90 && (F = `${String.fromCharCode(V + 32)}:${F.substr(2)}`);
        }
        x += D(F, !0, !1);
      }
      return C && (x += "?", x += D(C, !1, !1)), q && (x += "#", x += k ? q : L(q, !1, !1)), x;
    }
    function H(R) {
      try {
        return decodeURIComponent(R);
      } catch {
        return R.length > 3 ? R.substr(0, 3) + H(R.substr(3)) : R;
      }
    }
    const W = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    function O(R) {
      return R.match(W) ? R.replace(W, (k) => H(k)) : R;
    }
    var b = n(470);
    const f = b.posix || b, v = "/";
    var P;
    (function(R) {
      R.joinPath = function(k, ...D) {
        return k.with({ path: f.join(k.path, ...D) });
      }, R.resolvePath = function(k, ...D) {
        let x = k.path, N = !1;
        x[0] !== v && (x = v + x, N = !0);
        let I = f.resolve(x, ...D);
        return N && I[0] === v && !k.authority && (I = I.substring(1)), k.with({ path: I });
      }, R.dirname = function(k) {
        if (k.path.length === 0 || k.path === v)
          return k;
        let D = f.dirname(k.path);
        return D.length === 1 && D.charCodeAt(0) === 46 && (D = ""), k.with({ path: D });
      }, R.basename = function(k) {
        return f.basename(k.path);
      }, R.extname = function(k) {
        return f.extname(k.path);
      };
    })(P || (P = {}));
  })(), Jl = i;
})();
var { URI: im, Utils: Rm } = Jl;
function yr(e) {
  const t = e[0], n = e[e.length - 1];
  return t === n && (t === "'" || t === '"') && (e = e.substring(1, e.length - 1)), e;
}
function rm(e, t) {
  return !e.length || t === "handlebars" && /{{|}}/.test(e) ? !1 : /\b(w[\w\d+.-]*:\/\/)?[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/.test(e);
}
function sm(e, t, n, i) {
  if (/^\s*javascript\:/i.test(t) || /[\n\r]/.test(t))
    return;
  t = t.replace(/^\s*/g, "");
  const r = t.match(/^(\w[\w\d+.-]*):/);
  if (r) {
    const s = r[1].toLowerCase();
    return s === "http" || s === "https" || s === "file" ? t : void 0;
  }
  return /^\#/i.test(t) ? e + t : /^\/\//i.test(t) ? (xt(e, "https://") ? "https" : "http") + ":" + t.replace(/^\s*/g, "") : n ? n.resolveReference(t, i || e) : t;
}
function am(e, t, n, i, r, s) {
  const a = yr(n);
  if (!rm(a, e.languageId))
    return;
  a.length < n.length && (i++, r--);
  const l = sm(e.uri, a, t, s);
  if (!l)
    return;
  const o = lm(l, e);
  return {
    range: ie.create(e.positionAt(i), e.positionAt(r)),
    target: o
  };
}
var om = 35;
function lm(e, t) {
  try {
    let n = im.parse(e);
    return n.scheme === "file" && n.query && (n = n.with({ query: null }), e = n.toString(
      /* skipEncodig*/
      !0
    )), n.scheme === "file" && n.fragment && !(e.startsWith(t.uri) && e.charCodeAt(t.uri.length) === om) ? n.with({ fragment: null }).toString(
      /* skipEncodig*/
      !0
    ) : e;
  } catch {
    return;
  }
}
var um = class {
  constructor(e) {
    this.dataManager = e;
  }
  findDocumentLinks(e, t) {
    const n = [], i = Oe(e.getText(), 0);
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
              const d = am(e, t, c, i.getTokenOffset(), i.getTokenEnd(), o);
              d && n.push(d);
            }
            l && typeof o > "u" && (o = yr(c), o && t && (o = t.resolveReference(o, e.uri))), l = !1, s = void 0;
          } else if (s === "id") {
            const c = yr(i.getTokenText());
            u[c] = i.getTokenOffset();
          }
          break;
      }
      r = i.scan();
    }
    for (const c of n) {
      const d = e.uri + "#";
      if (c.target && xt(c.target, d)) {
        const m = c.target.substring(d.length), g = u[m];
        if (g !== void 0) {
          const _ = e.positionAt(g);
          c.target = `${d}${_.line + 1},${_.character + 1}`;
        } else
          c.target = e.uri;
      }
    }
    return n;
  }
};
function cm(e, t, n) {
  const i = e.offsetAt(t), r = n.findNodeAt(i);
  if (!r.tag)
    return [];
  const s = [], a = hl(z.StartTag, e, r.start), l = typeof r.endTagStart == "number" && hl(z.EndTag, e, r.endTagStart);
  return (a && cl(a, t) || l && cl(l, t)) && (a && s.push({ kind: ui.Read, range: a }), l && s.push({ kind: ui.Read, range: l })), s;
}
function ul(e, t) {
  return e.line < t.line || e.line === t.line && e.character <= t.character;
}
function cl(e, t) {
  return ul(e.start, t) && ul(t, e.end);
}
function hl(e, t, n) {
  const i = Oe(t.getText(), n);
  let r = i.scan();
  for (; r !== z.EOS && r !== e; )
    r = i.scan();
  return r !== z.EOS ? { start: t.positionAt(i.getTokenOffset()), end: t.positionAt(i.getTokenEnd()) } : null;
}
function hm(e, t) {
  const n = [], i = Zl(e, t);
  for (const s of i)
    r(s, void 0);
  return n;
  function r(s, a) {
    const l = mr.create(s.name, s.kind, s.range, e.uri, a == null ? void 0 : a.name);
    if (l.containerName ?? (l.containerName = ""), n.push(l), s.children)
      for (const o of s.children)
        r(o, s);
  }
}
function Zl(e, t) {
  const n = [];
  return t.roots.forEach((i) => {
    Kl(e, i, n);
  }), n;
}
function Kl(e, t, n) {
  const i = dm(t), r = ie.create(e.positionAt(t.start), e.positionAt(t.end)), s = fr.create(i, void 0, dr.Field, r, r);
  n.push(s), t.children.forEach((a) => {
    s.children ?? (s.children = []), Kl(e, a, s.children);
  });
}
function dm(e) {
  let t = e.tag;
  if (e.attributes) {
    const n = e.attributes.id, i = e.attributes.class;
    n && (t += `#${n.replace(/[\"\']/g, "")}`), i && (t += i.replace(/[\"\']/g, "").split(/\s+/).map((r) => `.${r}`).join(""));
  }
  return t || "?";
}
function mm(e, t, n, i) {
  const r = e.offsetAt(t), s = i.findNodeAt(r);
  if (!s.tag || !fm(s, r, s.tag))
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
function fm(e, t, n) {
  return e.endTagStart && e.endTagStart + 2 <= t && t <= e.endTagStart + 2 + n.length ? !0 : e.start + 1 <= t && t <= e.start + 1 + n.length;
}
function pm(e, t, n) {
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
function dl(e, t, n) {
  const i = e.offsetAt(t), r = n.findNodeAt(i), s = r.tag ? r.tag.length : 0;
  return r.endTagStart && // Within open tag, compute close tag
  (r.start + 1 <= i && i <= r.start + 1 + s || // Within closing tag, compute open tag
  r.endTagStart + 2 <= i && i <= r.endTagStart + 2 + s) ? [
    ie.create(e.positionAt(r.start + 1), e.positionAt(r.start + 1 + s)),
    ie.create(e.positionAt(r.endTagStart + 2), e.positionAt(r.endTagStart + 2 + s))
  ] : null;
}
var gm = class {
  constructor(e) {
    this.dataManager = e;
  }
  limitRanges(e, t) {
    e = e.sort((c, d) => {
      let m = c.startLine - d.startLine;
      return m === 0 && (m = c.endLine - d.endLine), m;
    });
    let n;
    const i = [], r = [], s = [], a = (c, d) => {
      r[c] = d, d < 30 && (s[d] = (s[d] || 0) + 1);
    };
    for (let c = 0; c < e.length; c++) {
      const d = e[c];
      if (!n)
        n = d, a(c, 0);
      else if (d.startLine > n.startLine) {
        if (d.endLine <= n.endLine)
          i.push(n), n = d, a(c, i.length);
        else if (d.startLine > n.endLine) {
          do
            n = i.pop();
          while (n && d.startLine > n.endLine);
          n && i.push(n), n = d, a(c, i.length);
        }
      }
    }
    let l = 0, o = 0;
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      if (d) {
        if (d + l > t) {
          o = c;
          break;
        }
        l += d;
      }
    }
    const u = [];
    for (let c = 0; c < e.length; c++) {
      const d = r[c];
      typeof d == "number" && (d < o || d === o && l++ < t) && u.push(e[c]);
    }
    return u;
  }
  getFoldingRanges(e, t) {
    const n = this.dataManager.getVoidElements(e.languageId), i = Oe(e.getText());
    let r = i.scan();
    const s = [], a = [];
    let l = null, o = -1;
    function u(d) {
      s.push(d), o = d.startLine;
    }
    for (; r !== z.EOS; ) {
      switch (r) {
        case z.StartTag: {
          const d = i.getTokenText(), m = e.positionAt(i.getTokenOffset()).line;
          a.push({ startLine: m, tagName: d }), l = d;
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
          let d = a.length - 1;
          for (; d >= 0 && a[d].tagName !== l; )
            d--;
          if (d >= 0) {
            const m = a[d];
            a.length = d;
            const g = e.positionAt(i.getTokenOffset()).line, _ = m.startLine, p = g - 1;
            p > _ && o !== _ && u({ startLine: _, endLine: p });
          }
          break;
        }
        case z.Comment: {
          let d = e.positionAt(i.getTokenOffset()).line;
          const g = i.getTokenText().match(/^\s*#(region\b)|(endregion\b)/);
          if (g)
            if (g[1])
              a.push({ startLine: d, tagName: "" });
            else {
              let _ = a.length - 1;
              for (; _ >= 0 && a[_].tagName.length; )
                _--;
              if (_ >= 0) {
                const p = a[_];
                a.length = _;
                const L = d;
                d = p.startLine, L > d && o !== d && u({ startLine: d, endLine: L, kind: ai.Region });
              }
            }
          else {
            const _ = e.positionAt(i.getTokenOffset() + i.getTokenLength()).line;
            d < _ && u({ startLine: d, endLine: _, kind: ai.Comment });
          }
          break;
        }
      }
      r = i.scan();
    }
    const c = t && t.rangeLimit || Number.MAX_VALUE;
    return s.length > c ? this.limitRanges(s, c) : s;
  }
}, bm = class {
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
      (!r || l[0] !== r[0] || l[1] !== r[1]) && (s = hi.create(ie.create(t.positionAt(i[a][0]), t.positionAt(i[a][1])), s)), r = l;
    }
    return s || (s = hi.create(ie.create(e, e))), s;
  }
  getApplicableRanges(e, t, n) {
    const i = e.offsetAt(t), r = n.findNodeAt(i);
    let s = this.getAllParentTagRanges(r);
    if (r.startTagEnd && !r.endTagStart) {
      if (r.startTagEnd !== r.end)
        return [[r.start, r.end]];
      const a = ie.create(e.positionAt(r.startTagEnd - 2), e.positionAt(r.startTagEnd));
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
    const i = ie.create(e.positionAt(t.start), e.positionAt(t.end)), r = e.getText(i), s = n - t.start, a = Oe(r);
    let l = a.scan();
    const o = t.start, u = [];
    let c = !1, d = -1;
    for (; l !== z.EOS; ) {
      switch (l) {
        case z.AttributeName: {
          if (s < a.getTokenOffset()) {
            c = !1;
            break;
          }
          s <= a.getTokenEnd() && u.unshift([a.getTokenOffset(), a.getTokenEnd()]), c = !0, d = a.getTokenOffset();
          break;
        }
        case z.AttributeValue: {
          if (!c)
            break;
          const m = a.getTokenText();
          if (s < a.getTokenOffset()) {
            u.push([d, a.getTokenEnd()]);
            break;
          }
          s >= a.getTokenOffset() && s <= a.getTokenEnd() && (u.unshift([a.getTokenOffset(), a.getTokenEnd()]), (m[0] === '"' && m[m.length - 1] === '"' || m[0] === "'" && m[m.length - 1] === "'") && s >= a.getTokenOffset() + 1 && s <= a.getTokenEnd() - 1 && u.unshift([a.getTokenOffset() + 1, a.getTokenEnd() - 1]), u.push([d, a.getTokenEnd()]));
          break;
        }
      }
      l = a.scan();
    }
    return u.map((m) => [m[0] + o, m[1] + o]);
  }
}, _m = {
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
}, wm = class {
  constructor(e) {
    this.dataProviders = [], this.setDataProviders(e.useDefaultDataProvider !== !1, e.customDataProviders || []);
  }
  setDataProviders(e, t) {
    this.dataProviders = [], e && this.dataProviders.push(new Xl("html5", _m)), this.dataProviders.push(...t);
  }
  getDataProviders() {
    return this.dataProviders;
  }
  isVoidElement(e, t) {
    return !!e && Ed(t, e.toLowerCase(), (n, i) => n.localeCompare(i)) >= 0;
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
    const n = vm[e];
    return n ? typeof n == "string" ? n === t : n.indexOf(t) !== -1 : !1;
  }
}, vm = {
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
}, ym = {};
function Tm(e = ym) {
  const t = new wm(e), n = new Xd(e, t), i = new Cd(e, t), r = new Rd(t), s = new bm(r), a = new gm(t), l = new um(t);
  return {
    setDataProviders: t.setDataProviders.bind(t),
    createScanner: Oe,
    parseHTMLDocument: r.parseDocument.bind(r),
    doComplete: i.doComplete.bind(i),
    doComplete2: i.doComplete2.bind(i),
    setCompletionParticipants: i.setCompletionParticipants.bind(i),
    doHover: n.doHover.bind(n),
    format: Kd,
    findDocumentHighlights: cm,
    findDocumentLinks: l.findDocumentLinks.bind(l),
    findDocumentSymbols: hm,
    findDocumentSymbols2: Zl,
    getFoldingRanges: a.getFoldingRanges.bind(a),
    getSelectionRanges: s.getSelectionRanges.bind(s),
    doQuoteComplete: i.doQuoteComplete.bind(i),
    doTagComplete: i.doTagComplete.bind(i),
    doRename: mm,
    findMatchingTagPosition: pm,
    findOnTypeRenameRanges: dl,
    findLinkedEditingRanges: dl
  };
}
function xm(e, t) {
  return new Xl(e, t);
}
var Am = class {
  constructor(e, t) {
    this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId;
    const n = this._languageSettings.data, i = n == null ? void 0 : n.useDefaultDataProvider, r = [];
    if (n != null && n.dataProviders)
      for (const s in n.dataProviders)
        r.push(xm(s, n.dataProviders[s]));
    this._languageService = Tm({
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
        return _r.create(
          e,
          this._languageId,
          n.version,
          n.getValue()
        );
    return null;
  }
};
self.onmessage = () => {
  dd((e, t) => new Am(e, t));
};
