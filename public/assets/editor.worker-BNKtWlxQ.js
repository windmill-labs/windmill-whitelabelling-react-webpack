var w;
(function(e) {
  e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(w || (w = {}));
class Fa {
  constructor() {
    this.listeners = [], this.unexpectedErrorHandler = function(t) {
      setTimeout(() => {
        throw t.stack ? Dt.isErrorNoTelemetry(t) ? new Dt(t.message + `

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
const Sa = new Fa();
function Wt(e) {
  Ia(e) || Sa.onUnexpectedError(e);
}
function qn(e) {
  if (e instanceof Error) {
    const { name: t, message: n, cause: i } = e, r = e.stacktrace || e.stack;
    return {
      $isError: !0,
      name: t,
      message: n,
      stack: r,
      noTelemetry: Dt.isErrorNoTelemetry(e),
      cause: i ? qn(i) : void 0,
      code: e.code
    };
  }
  return e;
}
const Hn = "Canceled";
function Ia(e) {
  return e instanceof Pa ? !0 : e instanceof Error && e.name === Hn && e.message === Hn;
}
class Pa extends Error {
  constructor() {
    super(Hn), this.name = this.message;
  }
}
const xt = class xt extends Error {
  static is(t) {
    return t instanceof xt || t instanceof Error && t.name === xt._name;
  }
  constructor(t) {
    super(t), this.name = xt._name;
  }
};
xt._name = "PendingMigrationError";
let Ei = xt;
class Dt extends Error {
  constructor(t) {
    super(t), this.name = "CodeExpectedError";
  }
  static fromError(t) {
    if (t instanceof Dt)
      return t;
    const n = new Dt();
    return n.message = t.message, n.stack = t.stack, n;
  }
  static isErrorNoTelemetry(t) {
    return t.name === "CodeExpectedError";
  }
}
class ae extends Error {
  constructor(t) {
    super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, ae.prototype);
  }
}
function Ba(e, t) {
  const n = this;
  let i = !1, r;
  return function() {
    return i || (i = !0, r = e.apply(n, arguments)), r;
  };
}
function kt(e, t) {
  const n = Ft(e, t);
  return n === -1 ? void 0 : e[n];
}
function Ft(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? r = a + 1 : s = a;
  }
  return r - 1;
}
function Oa(e, t) {
  const n = Wn(e, t);
  return n === e.length ? void 0 : e[n];
}
function Wn(e, t, n = 0, i = e.length) {
  let r = n, s = i;
  for (; r < s; ) {
    const a = Math.floor((r + s) / 2);
    t(e[a]) ? s = a : r = a + 1;
  }
  return r;
}
const Mn = class Mn {
  constructor(t) {
    this._array = t, this._findLastMonotonousLastIdx = 0;
  }
  findLastMonotonous(t) {
    if (Mn.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const i of this._array)
          if (this._prevFindLastPredicate(i) && !t(i))
            throw new Error(
              "MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate."
            );
      }
      this._prevFindLastPredicate = t;
    }
    const n = Ft(this._array, t, this._findLastMonotonousLastIdx);
    return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
  }
};
Mn.assertInvariants = !1;
let pn = Mn;
function ta(e, t, n = (i, r) => i === r) {
  if (e === t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let i = 0, r = e.length; i < r; i++)
    if (!n(e[i], t[i]))
      return !1;
  return !0;
}
function* Va(e, t) {
  let n, i;
  for (const r of e)
    i !== void 0 && t(i, r) ? n.push(r) : (n && (yield n), n = [r]), i = r;
  n && (yield n);
}
function qa(e, t) {
  for (let n = 0; n <= e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function Ha(e, t) {
  for (let n = 0; n < e.length; n++)
    t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function Wa(e, t) {
  for (const n of t)
    e.push(n);
}
var Gn;
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
})(Gn || (Gn = {}));
function Tt(e, t) {
  return (n, i) => t(e(n), e(i));
}
const Gt = (e, t) => e - t;
function Ga(e) {
  return (t, n) => -e(t, n);
}
const Rt = class Rt {
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
    return new Rt((n) => this.iterate((i) => t(i) ? n(i) : !0));
  }
  map(t) {
    return new Rt((n) => this.iterate((i) => n(t(i))));
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
    return this.iterate((r) => ((i || Gn.isGreaterThan(t(r, n))) && (i = !1, n = r), !0)), n;
  }
};
Rt.empty = new Rt((t) => {
});
let Ai = Rt;
function $a(e, t) {
  return e.reduce((n, i) => n + t(i), 0);
}
var vi, yi;
class za {
  constructor(t, n) {
    this.uri = t, this.value = n;
  }
}
function ja(e) {
  return Array.isArray(e);
}
const lt = class lt {
  constructor(t, n) {
    if (this[vi] = "ResourceMap", t instanceof lt)
      this.map = new Map(t.map), this.toKey = n ?? lt.defaultToKey;
    else if (ja(t)) {
      this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? lt.defaultToKey;
      for (const [i, r] of t)
        this.set(i, r);
    } else
      this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? lt.defaultToKey;
  }
  set(t, n) {
    return this.map.set(this.toKey(t), new za(t, n)), this;
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
  *[(vi = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, t] of this.map)
      yield [t.uri, t.value];
  }
};
lt.defaultToKey = (t) => t.toString();
let $n = lt;
var be;
(function(e) {
  e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(be || (be = {}));
class Xa {
  constructor() {
    this[yi] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
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
  get(t, n = be.None) {
    const i = this._map.get(t);
    if (i)
      return n !== be.None && this.touch(i, n), i.value;
  }
  set(t, n, i = be.None) {
    let r = this._map.get(t);
    if (r)
      r.value = n, i !== be.None && this.touch(r, i);
    else {
      switch (r = { key: t, value: n, next: void 0, previous: void 0 }, i) {
        case be.None:
          this.addItemLast(r);
          break;
        case be.AsOld:
          this.addItemFirst(r);
          break;
        case be.AsNew:
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
  [(yi = Symbol.toStringTag, Symbol.iterator)]() {
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
    if (!(n !== be.AsOld && n !== be.AsNew)) {
      if (n === be.AsOld) {
        if (t === this._head)
          return;
        const i = t.next, r = t.previous;
        t === this._tail ? (r.next = void 0, this._tail = r) : (i.previous = r, r.next = i), t.previous = void 0, t.next = this._head, this._head.previous = t, this._head = t, this._state++;
      } else if (n === be.AsNew) {
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
class Ya extends Xa {
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
  get(t, n = be.AsNew) {
    return super.get(t, n);
  }
  peek(t) {
    return super.get(t, be.None);
  }
  set(t, n) {
    return super.set(t, n, be.AsNew), this;
  }
  checkTrim() {
    this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
  }
}
class Qa extends Ya {
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
class Ja {
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
function Za(e, t = "Unreachable") {
  throw new Error(t);
}
function Ka(e, t = "unexpected state") {
  if (!e)
    throw typeof t == "string" ? new ae(`Assertion Failed: ${t}`) : t;
}
function Qt(e) {
  if (!e()) {
    debugger;
    e(), Wt(new ae("Assertion Failed"));
  }
}
function gi(e, t) {
  let n = 0;
  for (; n < e.length - 1; ) {
    const i = e[n], r = e[n + 1];
    if (!t(i, r))
      return !1;
    n++;
  }
  return !0;
}
function Ca(e) {
  return typeof e == "string";
}
function el(e) {
  return !!e && typeof e[Symbol.iterator] == "function";
}
var bn;
(function(e) {
  function t(N) {
    return !!N && typeof N == "object" && typeof N[Symbol.iterator] == "function";
  }
  e.is = t;
  const n = Object.freeze([]);
  function i() {
    return n;
  }
  e.empty = i;
  function* r(N) {
    yield N;
  }
  e.single = r;
  function s(N) {
    return t(N) ? N : r(N);
  }
  e.wrap = s;
  function a(N) {
    return N || n;
  }
  e.from = a;
  function* u(N) {
    for (let A = N.length - 1; A >= 0; A--)
      yield N[A];
  }
  e.reverse = u;
  function o(N) {
    return !N || N[Symbol.iterator]().next().done === !0;
  }
  e.isEmpty = o;
  function c(N) {
    return N[Symbol.iterator]().next().value;
  }
  e.first = c;
  function m(N, A) {
    let T = 0;
    for (const W of N)
      if (A(W, T++))
        return !0;
    return !1;
  }
  e.some = m;
  function h(N, A) {
    let T = 0;
    for (const W of N)
      if (!A(W, T++))
        return !1;
    return !0;
  }
  e.every = h;
  function _(N, A) {
    for (const T of N)
      if (A(T))
        return T;
  }
  e.find = _;
  function* L(N, A) {
    for (const T of N)
      A(T) && (yield T);
  }
  e.filter = L;
  function* b(N, A) {
    let T = 0;
    for (const W of N)
      yield A(W, T++);
  }
  e.map = b;
  function* p(N, A) {
    let T = 0;
    for (const W of N)
      yield* A(W, T++);
  }
  e.flatMap = p;
  function* E(...N) {
    for (const A of N)
      el(A) ? yield* A : yield A;
  }
  e.concat = E;
  function y(N, A, T) {
    let W = T;
    for (const $ of N)
      W = A(W, $);
    return W;
  }
  e.reduce = y;
  function R(N) {
    let A = 0;
    for (const T of N)
      A++;
    return A;
  }
  e.length = R;
  function* v(N, A, T = N.length) {
    for (A < -N.length && (A = 0), A < 0 && (A += N.length), T < 0 ? T += N.length : T > N.length && (T = N.length); A < T; A++)
      yield N[A];
  }
  e.slice = v;
  function k(N, A = Number.POSITIVE_INFINITY) {
    const T = [];
    if (A === 0)
      return [T, N];
    const W = N[Symbol.iterator]();
    for (let $ = 0; $ < A; $++) {
      const G = W.next();
      if (G.done)
        return [T, e.empty()];
      T.push(G.value);
    }
    return [T, { [Symbol.iterator]() {
      return W;
    } }];
  }
  e.consume = k;
  async function B(N) {
    const A = [];
    for await (const T of N)
      A.push(T);
    return A;
  }
  e.asyncToArray = B;
  async function z(N) {
    let A = [];
    for await (const T of N)
      A = A.concat(T);
    return A;
  }
  e.asyncToArrayFlat = z;
})(bn || (bn = {}));
function na(e) {
  if (bn.is(e)) {
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
function tl(...e) {
  return Jt(() => na(e));
}
function Jt(e) {
  return {
    dispose: Ba(() => {
      e();
    })
  };
}
const Un = class Un {
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
        na(this._toDispose);
      } finally {
        this._toDispose.clear();
      }
  }
  add(t) {
    if (!t)
      return t;
    if (t === this)
      throw new Error("Cannot register a disposable on itself!");
    return this._isDisposed ? Un.DISABLE_DISPOSED_WARNING || console.warn(new Error(
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
Un.DISABLE_DISPOSED_WARNING = !1;
let Zt = Un;
const xi = class xi {
  constructor() {
    this._store = new Zt(), this._store;
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
xi.None = Object.freeze({ dispose() {
} });
let St = xi;
const Et = class Et {
  constructor(t) {
    this.element = t, this.next = Et.Undefined, this.prev = Et.Undefined;
  }
};
Et.Undefined = new Et(void 0);
let te = Et;
class nl {
  constructor() {
    this._first = te.Undefined, this._last = te.Undefined, this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === te.Undefined;
  }
  clear() {
    let t = this._first;
    for (; t !== te.Undefined; ) {
      const n = t.next;
      t.prev = te.Undefined, t.next = te.Undefined, t = n;
    }
    this._first = te.Undefined, this._last = te.Undefined, this._size = 0;
  }
  unshift(t) {
    return this._insert(t, !1);
  }
  push(t) {
    return this._insert(t, !0);
  }
  _insert(t, n) {
    const i = new te(t);
    if (this._first === te.Undefined)
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
    if (this._first !== te.Undefined) {
      const t = this._first.element;
      return this._remove(this._first), t;
    }
  }
  pop() {
    if (this._last !== te.Undefined) {
      const t = this._last.element;
      return this._remove(this._last), t;
    }
  }
  _remove(t) {
    if (t.prev !== te.Undefined && t.next !== te.Undefined) {
      const n = t.prev;
      n.next = t.next, t.next.prev = n;
    } else t.prev === te.Undefined && t.next === te.Undefined ? (this._first = te.Undefined, this._last = te.Undefined) : t.next === te.Undefined ? (this._last = this._last.prev, this._last.next = te.Undefined) : t.prev === te.Undefined && (this._first = this._first.next, this._first.prev = te.Undefined);
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let t = this._first;
    for (; t !== te.Undefined; )
      yield t.element, t = t.next;
  }
}
const il = globalThis.performance.now.bind(globalThis.performance);
class Sn {
  static create(t) {
    return new Sn(t);
  }
  constructor(t) {
    this._now = t === !1 ? Date.now : il, this._startTime = this._now(), this._stopTime = -1;
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
var dn;
(function(e) {
  e.None = () => St.None;
  function t(F, M) {
    return _(F, () => {
    }, 0, void 0, !0, void 0, M);
  }
  e.defer = t;
  function n(F) {
    return (M, I = null, S) => {
      let V = !1, Y;
      return Y = F((Z) => {
        if (!V)
          return Y ? Y.dispose() : V = !0, M.call(I, Z);
      }, null, S), V && Y.dispose(), Y;
    };
  }
  e.once = n;
  function i(F, M) {
    return e.once(e.filter(F, M));
  }
  e.onceIf = i;
  function r(F, M, I) {
    return m((S, V = null, Y) => F((Z) => S.call(V, M(Z)), null, Y), I);
  }
  e.map = r;
  function s(F, M, I) {
    return m((S, V = null, Y) => F((Z) => {
      M(Z), S.call(V, Z);
    }, null, Y), I);
  }
  e.forEach = s;
  function a(F, M, I) {
    return m((S, V = null, Y) => F((Z) => M(Z) && S.call(V, Z), null, Y), I);
  }
  e.filter = a;
  function u(F) {
    return F;
  }
  e.signal = u;
  function o(...F) {
    return (M, I = null, S) => {
      const V = tl(...F.map((Y) => Y((Z) => M.call(I, Z))));
      return h(V, S);
    };
  }
  e.any = o;
  function c(F, M, I, S) {
    let V = I;
    return r(F, (Y) => (V = M(V, Y), V), S);
  }
  e.reduce = c;
  function m(F, M) {
    let I;
    const S = {
      onWillAddFirstListener() {
        I = F(V.fire, V);
      },
      onDidRemoveLastListener() {
        I == null || I.dispose();
      }
    }, V = new ye(S);
    return M == null || M.add(V), V.event;
  }
  function h(F, M) {
    return M instanceof Array ? M.push(F) : M && M.add(F), F;
  }
  function _(F, M, I = 100, S = !1, V = !1, Y, Z) {
    let ue, pe, st, rn = 0, at;
    const Ua = {
      leakWarningThreshold: Y,
      onWillAddFirstListener() {
        ue = F((Da) => {
          rn++, pe = M(pe, Da), S && !st && (sn.fire(pe), pe = void 0), at = () => {
            const ka = pe;
            pe = void 0, st = void 0, (!S || rn > 1) && sn.fire(ka), rn = 0;
          }, typeof I == "number" ? (st && clearTimeout(st), st = setTimeout(at, I)) : st === void 0 && (st = null, queueMicrotask(at));
        });
      },
      onWillRemoveListener() {
        V && rn > 0 && (at == null || at());
      },
      onDidRemoveLastListener() {
        at = void 0, ue.dispose();
      }
    }, sn = new ye(Ua);
    return Z == null || Z.add(sn), sn.event;
  }
  e.debounce = _;
  function L(F, M = 0, I) {
    return e.debounce(F, (S, V) => S ? (S.push(V), S) : [V], M, void 0, !0, void 0, I);
  }
  e.accumulate = L;
  function b(F, M = (S, V) => S === V, I) {
    let S = !0, V;
    return a(F, (Y) => {
      const Z = S || !M(Y, V);
      return S = !1, V = Y, Z;
    }, I);
  }
  e.latch = b;
  function p(F, M, I) {
    return [
      e.filter(F, M, I),
      e.filter(F, (S) => !M(S), I)
    ];
  }
  e.split = p;
  function E(F, M = !1, I = [], S) {
    let V = I.slice(), Y = F((pe) => {
      V ? V.push(pe) : ue.fire(pe);
    });
    S && S.add(Y);
    const Z = () => {
      V == null || V.forEach((pe) => ue.fire(pe)), V = null;
    }, ue = new ye({
      onWillAddFirstListener() {
        Y || (Y = F((pe) => ue.fire(pe)), S && S.add(Y));
      },
      onDidAddFirstListener() {
        V && (M ? setTimeout(Z) : Z());
      },
      onDidRemoveLastListener() {
        Y && Y.dispose(), Y = null;
      }
    });
    return S && S.add(ue), ue.event;
  }
  e.buffer = E;
  function y(F, M) {
    return (S, V, Y) => {
      const Z = M(new v());
      return F(function(ue) {
        const pe = Z.evaluate(ue);
        pe !== R && S.call(V, pe);
      }, void 0, Y);
    };
  }
  e.chain = y;
  const R = Symbol("HaltChainable");
  class v {
    constructor() {
      this.steps = [];
    }
    map(M) {
      return this.steps.push(M), this;
    }
    forEach(M) {
      return this.steps.push((I) => (M(I), I)), this;
    }
    filter(M) {
      return this.steps.push((I) => M(I) ? I : R), this;
    }
    reduce(M, I) {
      let S = I;
      return this.steps.push((V) => (S = M(S, V), S)), this;
    }
    latch(M = (I, S) => I === S) {
      let I = !0, S;
      return this.steps.push((V) => {
        const Y = I || !M(V, S);
        return I = !1, S = V, Y ? V : R;
      }), this;
    }
    evaluate(M) {
      for (const I of this.steps)
        if (M = I(M), M === R)
          break;
      return M;
    }
  }
  function k(F, M, I = (S) => S) {
    const S = (...ue) => Z.fire(I(...ue)), V = () => F.on(M, S), Y = () => F.removeListener(M, S), Z = new ye(
      { onWillAddFirstListener: V, onDidRemoveLastListener: Y }
    );
    return Z.event;
  }
  e.fromNodeEventEmitter = k;
  function B(F, M, I = (S) => S) {
    const S = (...ue) => Z.fire(I(...ue)), V = () => F.addEventListener(M, S), Y = () => F.removeEventListener(M, S), Z = new ye(
      { onWillAddFirstListener: V, onDidRemoveLastListener: Y }
    );
    return Z.event;
  }
  e.fromDOMEventEmitter = B;
  function z(F, M) {
    let I;
    const S = new Promise((V, Y) => {
      const Z = n(F)(V, null, M);
      I = () => Z.dispose();
    });
    return S.cancel = I, S;
  }
  e.toPromise = z;
  function N(F) {
    const M = new ye();
    return F.then((I) => {
      M.fire(I);
    }, () => {
      M.fire(void 0);
    }).finally(() => {
      M.dispose();
    }), M.event;
  }
  e.fromPromise = N;
  function A(F, M) {
    return F((I) => M.fire(I));
  }
  e.forward = A;
  function T(F, M, I) {
    return M(I), F((S) => M(S));
  }
  e.runAndSubscribe = T;
  class W {
    constructor(M, I) {
      this._observable = M, this._counter = 0, this._hasChanged = !1;
      const S = {
        onWillAddFirstListener: () => {
          M.addObserver(this), this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          M.removeObserver(this);
        }
      };
      this.emitter = new ye(S), I && I.add(this.emitter);
    }
    beginUpdate(M) {
      this._counter++;
    }
    handlePossibleChange(M) {
    }
    handleChange(M, I) {
      this._hasChanged = !0;
    }
    endUpdate(M) {
      this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
    }
  }
  function $(F, M) {
    return new W(F, M).emitter.event;
  }
  e.fromObservable = $;
  function G(F) {
    return (M, I, S) => {
      let V = 0, Y = !1;
      const Z = {
        beginUpdate() {
          V++;
        },
        endUpdate() {
          V--, V === 0 && (F.reportChanges(), Y && (Y = !1, M.call(I)));
        },
        handlePossibleChange() {
        },
        handleChange() {
          Y = !0;
        }
      };
      F.addObserver(Z), F.reportChanges();
      const ue = {
        dispose() {
          F.removeObserver(Z);
        }
      };
      return S instanceof Zt ? S.add(ue) : Array.isArray(S) && S.push(ue), ue;
    };
  }
  e.fromObservableLight = G;
})(dn || (dn = {}));
const At = class At {
  constructor(t) {
    this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${At._idPool++}`, At.all.add(this);
  }
  start(t) {
    this._stopWatch = new Sn(), this.listenerCount = t;
  }
  stop() {
    if (this._stopWatch) {
      const t = this._stopWatch.elapsed();
      this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
    }
  }
};
At.all = /* @__PURE__ */ new Set(), At._idPool = 0;
let zn = At, rl = -1;
const Dn = class Dn {
  constructor(t, n, i = (Dn._idPool++).toString(16).padStart(3, "0")) {
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
      const [s, a] = this.getMostFrequentStack(), u = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${a}):`;
      console.warn(u), console.warn(s);
      const o = new sl(u, s);
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
Dn._idPool = 1;
let jn = Dn;
class _i {
  static create() {
    const t = new Error();
    return new _i(t.stack ?? "");
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
class sl extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerLeakError", this.stack = n;
  }
}
class al extends Error {
  constructor(t, n) {
    super(t), this.name = "ListenerRefusalError", this.stack = n;
  }
}
let ll = 0;
class In {
  constructor(t) {
    this.value = t, this.id = ll++;
  }
}
const ul = 2;
class ye {
  constructor(t) {
    var n, i, r, s;
    this._size = 0, this._options = t, this._leakageMon = (n = this._options) != null && n.leakWarningThreshold ? new jn(
      (t == null ? void 0 : t.onListenerError) ?? Wt,
      ((i = this._options) == null ? void 0 : i.leakWarningThreshold) ?? rl
    ) : void 0, this._perfMon = (r = this._options) != null && r._profName ? new zn(this._options._profName) : void 0, this._deliveryQueue = (s = this._options) == null ? void 0 : s.deliveryQueue;
  }
  dispose() {
    var t, n, i, r;
    this._disposed || (this._disposed = !0, ((t = this._deliveryQueue) == null ? void 0 : t.current) === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), (i = (n = this._options) == null ? void 0 : n.onDidRemoveLastListener) == null || i.call(n), (r = this._leakageMon) == null || r.dispose());
  }
  get event() {
    return this._event ?? (this._event = (t, n, i) => {
      var u, o, c, m, h, _, L;
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const b = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(b);
        const p = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], E = new al(
          `${b}. HINT: Stack shows most frequent listener (${p[1]}-times)`,
          p[0]
        );
        return (((u = this._options) == null ? void 0 : u.onListenerError) || Wt)(E), St.None;
      }
      if (this._disposed)
        return St.None;
      n && (t = t.bind(n));
      const r = new In(t);
      let s;
      this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2) && (r.stack = _i.create(), s = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof In ? (this._deliveryQueue ?? (this._deliveryQueue = new ol()), this._listeners = [this._listeners, r]) : this._listeners.push(r) : ((c = (o = this._options) == null ? void 0 : o.onWillAddFirstListener) == null || c.call(o, this), this._listeners = r, (h = (m = this._options) == null ? void 0 : m.onDidAddFirstListener) == null || h.call(m, this)), (L = (_ = this._options) == null ? void 0 : _.onDidAddListener) == null || L.call(_, this), this._size++;
      const a = Jt(() => {
        s == null || s(), this._removeListener(r);
      });
      return i instanceof Zt ? i.add(a) : Array.isArray(i) && i.push(a), a;
    }), this._event;
  }
  _removeListener(t) {
    var s, a, u, o;
    if ((a = (s = this._options) == null ? void 0 : s.onWillRemoveListener) == null || a.call(s, this), !this._listeners)
      return;
    if (this._size === 1) {
      this._listeners = void 0, (o = (u = this._options) == null ? void 0 : u.onDidRemoveLastListener) == null || o.call(u, this), this._size = 0;
      return;
    }
    const n = this._listeners, i = n.indexOf(t);
    if (i === -1)
      throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), new Error("Attempted to dispose unknown listener");
    this._size--, n[i] = void 0;
    const r = this._deliveryQueue.current === this;
    if (this._size * ul <= n.length) {
      let c = 0;
      for (let m = 0; m < n.length; m++)
        n[m] ? n[c++] = n[m] : r && c < this._deliveryQueue.end && (this._deliveryQueue.end--, c < this._deliveryQueue.i && this._deliveryQueue.i--);
      n.length = c;
    }
  }
  _deliver(t, n) {
    var r;
    if (!t)
      return;
    const i = ((r = this._options) == null ? void 0 : r.onListenerError) || Wt;
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
    if ((n = this._deliveryQueue) != null && n.current && (this._deliverQueue(this._deliveryQueue), (i = this._perfMon) == null || i.stop()), (r = this._perfMon) == null || r.start(this._size), this._listeners) if (this._listeners instanceof In)
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
class ol {
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
function cl() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function ia() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}
const ml = ia() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Ti(e, t) {
  let n;
  return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, r) => {
    const s = r[0], a = t[s];
    let u = i;
    return typeof a == "string" ? u = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (u = String(a)), u;
  }), ml && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function H(e, t, ...n) {
  return Ti(typeof e == "number" ? hl(e, t) : t, n);
}
function hl(e, t) {
  var i;
  const n = (i = cl()) == null ? void 0 : i[e];
  if (typeof n != "string") {
    if (typeof t == "string")
      return t;
    throw new Error(`!!! NLS MISSING: ${e} !!!`);
  }
  return n;
}
const wt = "en";
let Kt = !1, Ct = !1, cn = !1, ra = !1, pi = !1, sa = !1, an, mn = wt, Mi = wt, fl, De;
const Qe = globalThis;
let ce;
var Zs;
typeof Qe.vscode < "u" && typeof Qe.vscode.process < "u" ? ce = Qe.vscode.process : typeof process < "u" && typeof ((Zs = process == null ? void 0 : process.versions) == null ? void 0 : Zs.node) == "string" && (ce = process);
var Ks;
const gl = typeof ((Ks = ce == null ? void 0 : ce.versions) == null ? void 0 : Ks.electron) == "string", _l = gl && (ce == null ? void 0 : ce.type) === "renderer";
var Cs;
if (typeof ce == "object") {
  Kt = ce.platform === "win32", Ct = ce.platform === "darwin", cn = ce.platform === "linux", cn && ce.env.SNAP && ce.env.SNAP_REVISION, ce.env.CI || ce.env.BUILD_ARTIFACTSTAGINGDIRECTORY || ce.env.GITHUB_WORKSPACE, an = wt, mn = wt;
  const e = ce.env.VSCODE_NLS_CONFIG;
  if (e)
    try {
      const t = JSON.parse(e);
      an = t.userLocale, Mi = t.osLocale, mn = t.resolvedLanguage || wt, fl = (Cs = t.languagePack) == null ? void 0 : Cs.translationsConfigFile;
    } catch {
    }
  ra = !0;
} else typeof navigator == "object" && !_l ? (De = navigator.userAgent, Kt = De.indexOf("Windows") >= 0, Ct = De.indexOf("Macintosh") >= 0, sa = (De.indexOf("Macintosh") >= 0 || De.indexOf("iPad") >= 0 || De.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, cn = De.indexOf("Linux") >= 0, (De == null ? void 0 : De.indexOf("Mobi")) >= 0, pi = !0, mn = ia() || wt, an = navigator.language.toLowerCase(), Mi = an) : console.error("Unable to resolve platform.");
var Mt;
(function(e) {
  e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(Mt || (Mt = {}));
Mt.Web;
Ct ? Mt.Mac : Kt ? Mt.Windows : cn && Mt.Linux;
const It = Kt, pl = Ct, bl = ra, dl = pi, wl = pi && typeof Qe.importScripts == "function", Ll = wl ? Qe.origin : void 0, We = De, Ze = mn;
var Ui;
(function(e) {
  function t() {
    return Ze;
  }
  e.value = t;
  function n() {
    return Ze.length === 2 ? Ze === "en" : Ze.length >= 3 ? Ze[0] === "e" && Ze[1] === "n" && Ze[2] === "-" : !1;
  }
  e.isDefaultVariant = n;
  function i() {
    return Ze === "en";
  }
  e.isDefault = i;
})(Ui || (Ui = {}));
const Nl = typeof Qe.postMessage == "function" && !Qe.importScripts;
(() => {
  if (Nl) {
    const e = [];
    Qe.addEventListener("message", (n) => {
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
      }), Qe.postMessage({ vscodeScheduleAsyncWork: i }, "*");
    };
  }
  return (e) => setTimeout(e);
})();
var $t;
(function(e) {
  e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})($t || ($t = {}));
Ct || sa ? $t.Macintosh : Kt ? $t.Windows : $t.Linux;
const xl = !!(We && We.indexOf("Chrome") >= 0);
We && We.indexOf("Firefox") >= 0;
!xl && We && We.indexOf("Safari") >= 0;
We && We.indexOf("Edg/") >= 0;
We && We.indexOf("Android") >= 0;
const aa = Object.freeze(function(e, t) {
  const n = setTimeout(e.bind(t), 0);
  return { dispose() {
    clearTimeout(n);
  } };
});
var wn;
(function(e) {
  function t(n) {
    return n === e.None || n === e.Cancelled || n instanceof hn ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
  }
  e.isCancellationToken = t, e.None = Object.freeze({
    isCancellationRequested: !1,
    onCancellationRequested: dn.None
  }), e.Cancelled = Object.freeze({
    isCancellationRequested: !0,
    onCancellationRequested: aa
  });
})(wn || (wn = {}));
class hn {
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
    return this._isCancelled ? aa : (this._emitter || (this._emitter = new ye()), this._emitter.event);
  }
  dispose() {
    this._emitter && (this._emitter.dispose(), this._emitter = null);
  }
}
class Rl {
  constructor(t) {
    this._token = void 0, this._parentListener = void 0, this._parentListener = t && t.onCancellationRequested(this.cancel, this);
  }
  get token() {
    return this._token || (this._token = new hn()), this._token;
  }
  cancel() {
    this._token ? this._token instanceof hn && this._token.cancel() : this._token = wn.Cancelled;
  }
  dispose(t = !1) {
    var n;
    t && this.cancel(), (n = this._parentListener) == null || n.dispose(), this._token ? this._token instanceof hn && this._token.dispose() : this._token = wn.None;
  }
}
function El(e) {
  return e;
}
class Al {
  constructor(t, n) {
    this.lastCache = void 0, this.lastArgKey = void 0, typeof t == "function" ? (this._fn = t, this._computeKey = El) : (this._fn = n, this._computeKey = t.getCacheKey);
  }
  get(t) {
    const n = this._computeKey(t);
    return this.lastArgKey !== n && (this.lastArgKey = n, this.lastCache = this._fn(t)), this.lastCache;
  }
}
class Di {
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
var Ue;
(function(e) {
  e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(Ue || (Ue = {}));
function ki(e) {
  return e < 0 ? 0 : e > Ue.MAX_UINT_8 ? Ue.MAX_UINT_8 : e | 0;
}
function ft(e) {
  return e < 0 ? 0 : e > Ue.MAX_UINT_32 ? Ue.MAX_UINT_32 : e | 0;
}
function vl(e) {
  return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function yl(e) {
  return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
}
function la(e) {
  return e.split(/\r\n|\r|\n/);
}
function Tl(e) {
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i !== w.Space && i !== w.Tab)
      return t;
  }
  return -1;
}
function Ml(e, t = e.length - 1) {
  for (let n = t; n >= 0; n--) {
    const i = e.charCodeAt(n);
    if (i !== w.Space && i !== w.Tab)
      return n;
  }
  return -1;
}
function Ul(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
function Dl(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    const o = e.charCodeAt(n), c = t.charCodeAt(r);
    if (o < c)
      return -1;
    if (o > c)
      return 1;
  }
  const a = i - n, u = s - r;
  return a < u ? -1 : a > u ? 1 : 0;
}
function ua(e, t, n = 0, i = e.length, r = 0, s = t.length) {
  for (; n < i && r < s; n++, r++) {
    let o = e.charCodeAt(n), c = t.charCodeAt(r);
    if (o === c)
      continue;
    if (o >= 128 || c >= 128)
      return Dl(e.toLowerCase(), t.toLowerCase(), n, i, r, s);
    Fi(o) && (o -= 32), Fi(c) && (c -= 32);
    const m = o - c;
    if (m !== 0)
      return m;
  }
  const a = i - n, u = s - r;
  return a < u ? -1 : a > u ? 1 : 0;
}
function Fi(e) {
  return e >= w.a && e <= w.z;
}
function oa(e) {
  return e >= w.A && e <= w.Z;
}
function kl(e, t) {
  return e.length === t.length && ua(e, t) === 0;
}
function Fl(e, t) {
  const n = t.length;
  return t.length > e.length ? !1 : ua(e, t, 0, n) === 0;
}
function Ln(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(i) !== t.charCodeAt(i))
      return i;
  return n;
}
function Nn(e, t) {
  const n = Math.min(e.length, t.length);
  let i;
  const r = e.length - 1, s = t.length - 1;
  for (i = 0; i < n; i++)
    if (e.charCodeAt(r - i) !== t.charCodeAt(s - i))
      return i;
  return n;
}
function Xn(e) {
  return 55296 <= e && e <= 56319;
}
function Sl(e) {
  return 56320 <= e && e <= 57343;
}
function Il(e, t) {
  return (e - 55296 << 10) + (t - 56320) + 65536;
}
function Pl(e, t, n) {
  const i = e.charCodeAt(n);
  if (Xn(i) && n + 1 < t) {
    const r = e.charCodeAt(n + 1);
    if (Sl(r))
      return Il(i, r);
  }
  return i;
}
const Bl = /^[\t\n\r\x20-\x7E]*$/;
function Ol(e) {
  return Bl.test(e);
}
String.fromCharCode(w.UTF8_BOM);
var Si;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(Si || (Si = {}));
var Yn;
(function(e) {
  e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(Yn || (Yn = {}));
const Be = class Be {
  static getInstance(t) {
    return Be.cache.get(Array.from(t));
  }
  static getLocales() {
    return Be._locales.value;
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
Be.ambiguousCharacterData = new Di(() => JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}')), Be.cache = new Al({ getCacheKey: JSON.stringify }, (t) => {
  function n(m) {
    const h = /* @__PURE__ */ new Map();
    for (let _ = 0; _ < m.length; _ += 2)
      h.set(m[_], m[_ + 1]);
    return h;
  }
  function i(m, h) {
    const _ = new Map(m);
    for (const [L, b] of h)
      _.set(L, b);
    return _;
  }
  function r(m, h) {
    if (!m)
      return h;
    const _ = /* @__PURE__ */ new Map();
    for (const [L, b] of m)
      h.has(L) && _.set(L, b);
    return _;
  }
  const s = Be.ambiguousCharacterData.value;
  let a = t.filter((m) => !m.startsWith("_") && m in s);
  a.length === 0 && (a = ["_default"]);
  let u;
  for (const m of a) {
    const h = n(s[m]);
    u = r(u, h);
  }
  const o = n(s._common), c = i(o, u);
  return new Be(c);
}), Be._locales = new Di(() => Object.keys(Be.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
let en = Be;
const ut = class ut {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static getData() {
    return this._data || (this._data = new Set([...Object.values(ut.getRawData())].flat())), this._data;
  }
  static isInvisibleCharacter(t) {
    return ut.getData().has(t);
  }
  static containsInvisibleCharacter(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t.codePointAt(n);
      if (typeof i == "number" && (ut.isInvisibleCharacter(i) || i === Yn.space))
        return !0;
    }
    return !1;
  }
  static get codePoints() {
    return ut.getData();
  }
};
ut._data = void 0;
let zt = ut;
const Pn = "default", Vl = "$initialize";
var Ee;
(function(e) {
  e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(Ee || (Ee = {}));
class ql {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.method = r, this.args = s, this.type = Ee.Request;
  }
}
class Ii {
  constructor(t, n, i, r) {
    this.vsWorker = t, this.seq = n, this.res = i, this.err = r, this.type = Ee.Reply;
  }
}
class Hl {
  constructor(t, n, i, r, s) {
    this.vsWorker = t, this.req = n, this.channel = i, this.eventName = r, this.arg = s, this.type = Ee.SubscribeEvent;
  }
}
class Wl {
  constructor(t, n, i) {
    this.vsWorker = t, this.req = n, this.event = i, this.type = Ee.Event;
  }
}
class Gl {
  constructor(t, n) {
    this.vsWorker = t, this.req = n, this.type = Ee.UnsubscribeEvent;
  }
}
class $l {
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
      }, this._send(new ql(this._workerId, r, t, n, i));
    });
  }
  listen(t, n, i) {
    let r = null;
    const s = new ye({
      onWillAddFirstListener: () => {
        r = String(++this._lastSentReq), this._pendingEmitters.set(r, s), this._send(new Hl(this._workerId, r, t, n, i));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(r), this._send(new Gl(this._workerId, r)), r = null;
      }
    });
    return s.event;
  }
  handleMessage(t) {
    !t || !t.vsWorker || this._workerId !== -1 && t.vsWorker !== this._workerId || this._handleMessage(t);
  }
  createProxyToRemoteChannel(t, n) {
    const i = {
      get: (r, s) => (typeof s == "string" && !r[s] && (ma(s) ? r[s] = (a) => this.listen(t, s, a) : ca(s) ? r[s] = this.listen(t, s, void 0) : s.charCodeAt(0) === w.DollarSign && (r[s] = async (...a) => (await (n == null ? void 0 : n()), this.sendMessage(t, s, a)))), r[s])
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), i);
  }
  _handleMessage(t) {
    switch (t.type) {
      case Ee.Reply:
        return this._handleReplyMessage(t);
      case Ee.Request:
        return this._handleRequestMessage(t);
      case Ee.SubscribeEvent:
        return this._handleSubscribeEventMessage(t);
      case Ee.Event:
        return this._handleEventMessage(t);
      case Ee.UnsubscribeEvent:
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
      this._send(new Ii(this._workerId, n, r, void 0));
    }, (r) => {
      r.detail instanceof Error && (r.detail = qn(r.detail)), this._send(new Ii(this._workerId, n, void 0, qn(r)));
    });
  }
  _handleSubscribeEventMessage(t) {
    const n = t.req, i = this._handler.handleEvent(t.channel, t.eventName, t.arg)((r) => {
      this._send(new Wl(this._workerId, n, r));
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
    if (t.type === Ee.Request)
      for (let i = 0; i < t.args.length; i++)
        t.args[i] instanceof ArrayBuffer && n.push(t.args[i]);
    else t.type === Ee.Reply && t.res instanceof ArrayBuffer && n.push(t.res);
    this._handler.sendMessage(t, n);
  }
}
function ca(e) {
  return e[0] === "o" && e[1] === "n" && oa(e.charCodeAt(2));
}
function ma(e) {
  return /^onDynamic/.test(e) && oa(e.charCodeAt(9));
}
class zl {
  constructor(t, n) {
    this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new $l({
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
    if (t === Pn && n === Vl)
      return this.initialize(i[0]);
    const r = t === Pn ? this.requestHandler : this._localChannels.get(t);
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
    const r = t === Pn ? this.requestHandler : this._localChannels.get(t);
    if (!r)
      throw new Error(`Missing channel ${t} on worker thread`);
    if (ma(n)) {
      const s = r[n].call(r, i);
      if (typeof s != "function")
        throw new Error(`Missing dynamic event ${n} on request handler.`);
      return s;
    }
    if (ca(n)) {
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
let Qn = !1;
function jl(e) {
  if (Qn)
    throw new Error("WebWorker already initialized!");
  Qn = !0;
  const t = new zl(
    (n) => globalThis.postMessage(n),
    (n) => e(n)
  );
  return globalThis.onmessage = (n) => {
    t.onmessage(n.data);
  }, t;
}
function Xl(e) {
  globalThis.onmessage = (t) => {
    Qn || jl(e);
  };
}
class Ce {
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
function Pi(e, t) {
  return (t << 5) - t + e | 0;
}
function Yl(e, t) {
  t = Pi(149417, t);
  for (let n = 0, i = e.length; n < i; n++)
    t = Pi(e.charCodeAt(n), t);
  return t;
}
var Bi;
(function(e) {
  e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(Bi || (Bi = {}));
class Oi {
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
function Ql(e, t, n) {
  return new nt(new Oi(e), new Oi(t)).ComputeDiff(n).changes;
}
class gt {
  static Assert(t, n) {
    if (!t)
      throw new Error(n);
  }
}
class _t {
  static Copy(t, n, i, r, s) {
    for (let a = 0; a < s; a++)
      i[r + a] = t[n + a];
  }
  static Copy2(t, n, i, r, s) {
    for (let a = 0; a < s; a++)
      i[r + a] = t[n + a];
  }
}
var je;
(function(e) {
  e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(je || (je = {}));
class Vi {
  constructor() {
    this.m_changes = [], this.m_originalStart = Ue.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = Ue.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
  }
  MarkNextChange() {
    (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Ce(
      this.m_originalStart,
      this.m_originalCount,
      this.m_modifiedStart,
      this.m_modifiedCount
    )), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Ue.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = Ue.MAX_SAFE_SMALL_INTEGER;
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
class nt {
  constructor(t, n, i = null) {
    this.ContinueProcessingPredicate = i, this._originalSequence = t, this._modifiedSequence = n;
    const [r, s, a] = nt._getElements(t), [u, o, c] = nt._getElements(n);
    this._hasStrings = a && c, this._originalStringElements = r, this._originalElementsOrHash = s, this._modifiedStringElements = u, this._modifiedElementsOrHash = o, this.m_forwardHistory = [], this.m_reverseHistory = [];
  }
  static _isStringArray(t) {
    return t.length > 0 && typeof t[0] == "string";
  }
  static _getElements(t) {
    const n = t.getElements();
    if (nt._isStringArray(n)) {
      const i = new Int32Array(n.length);
      for (let r = 0, s = n.length; r < s; r++)
        i[r] = Yl(n[r], 0);
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
    const i = nt._getStrictElement(this._originalSequence, t), r = nt._getStrictElement(this._modifiedSequence, n);
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
    let u = this.ComputeDiffRecursive(t, n, i, r, a);
    return s && (u = this.PrettifyChanges(u)), {
      quitEarly: a[0],
      changes: u
    };
  }
  ComputeDiffRecursive(t, n, i, r, s) {
    for (s[0] = !1; t <= n && i <= r && this.ElementsAreEqual(t, i); )
      t++, i++;
    for (; n >= t && r >= i && this.ElementsAreEqual(n, r); )
      n--, r--;
    if (t > n || i > r) {
      let h;
      return i <= r ? (gt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), h = [
        new Ce(t, 0, i, r - i + 1)
      ]) : t <= n ? (gt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), h = [
        new Ce(t, n - t + 1, i, 0)
      ]) : (gt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), gt.Assert(i === r + 1, "modifiedStart should only be one more than modifiedEnd"), h = []), h;
    }
    const a = [0], u = [0], o = this.ComputeRecursionPoint(t, n, i, r, a, u, s), c = a[0], m = u[0];
    if (o !== null)
      return o;
    if (!s[0]) {
      const h = this.ComputeDiffRecursive(t, c, i, m, s);
      let _ = [];
      return s[0] ? _ = [
        new Ce(
          c + 1,
          n - (c + 1) + 1,
          m + 1,
          r - (m + 1) + 1
        )
      ] : _ = this.ComputeDiffRecursive(c + 1, n, m + 1, r, s), this.ConcatenateChanges(h, _);
    }
    return [
      new Ce(
        t,
        n - t + 1,
        i,
        r - i + 1
      )
    ];
  }
  WALKTRACE(t, n, i, r, s, a, u, o, c, m, h, _, L, b, p, E, y, R) {
    let v = null, k = null, B = new Vi(), z = n, N = i, A = L[0] - E[0] - r, T = Ue.MIN_SAFE_SMALL_INTEGER, W = this.m_forwardHistory.length - 1;
    do {
      const $ = A + t;
      $ === z || $ < N && c[$ - 1] < c[$ + 1] ? (h = c[$ + 1], b = h - A - r, h < T && B.MarkNextChange(), T = h, B.AddModifiedElement(h + 1, b), A = $ + 1 - t) : (h = c[$ - 1] + 1, b = h - A - r, h < T && B.MarkNextChange(), T = h - 1, B.AddOriginalElement(h, b + 1), A = $ - 1 - t), W >= 0 && (c = this.m_forwardHistory[W], t = c[0], z = 1, N = c.length - 1);
    } while (--W >= -1);
    if (v = B.getReverseChanges(), R[0]) {
      let $ = L[0] + 1, G = E[0] + 1;
      if (v !== null && v.length > 0) {
        const F = v[v.length - 1];
        $ = Math.max($, F.getOriginalEnd()), G = Math.max(G, F.getModifiedEnd());
      }
      k = [
        new Ce(
          $,
          _ - $ + 1,
          G,
          p - G + 1
        )
      ];
    } else {
      B = new Vi(), z = a, N = u, A = L[0] - E[0] - o, T = Ue.MAX_SAFE_SMALL_INTEGER, W = y ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const $ = A + s;
        $ === z || $ < N && m[$ - 1] >= m[$ + 1] ? (h = m[$ + 1] - 1, b = h - A - o, h > T && B.MarkNextChange(), T = h + 1, B.AddOriginalElement(h + 1, b + 1), A = $ + 1 - s) : (h = m[$ - 1], b = h - A - o, h > T && B.MarkNextChange(), T = h, B.AddModifiedElement(h + 1, b + 1), A = $ - 1 - s), W >= 0 && (m = this.m_reverseHistory[W], s = m[0], z = 1, N = m.length - 1);
      } while (--W >= -1);
      k = B.getChanges();
    }
    return this.ConcatenateChanges(v, k);
  }
  ComputeRecursionPoint(t, n, i, r, s, a, u) {
    let o = 0, c = 0, m = 0, h = 0, _ = 0, L = 0;
    t--, i--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
    const b = n - t + (r - i), p = b + 1, E = new Int32Array(p), y = new Int32Array(p), R = r - i, v = n - t, k = t - i, B = n - r, N = (v - R) % 2 === 0;
    E[R] = t, y[v] = n, u[0] = !1;
    for (let A = 1; A <= b / 2 + 1; A++) {
      let T = 0, W = 0;
      m = this.ClipDiagonalBound(R - A, A, R, p), h = this.ClipDiagonalBound(R + A, A, R, p);
      for (let G = m; G <= h; G += 2) {
        G === m || G < h && E[G - 1] < E[G + 1] ? o = E[G + 1] : o = E[G - 1] + 1, c = o - (G - R) - k;
        const F = o;
        for (; o < n && c < r && this.ElementsAreEqual(o + 1, c + 1); )
          o++, c++;
        if (E[G] = o, o + c > T + W && (T = o, W = c), !N && Math.abs(G - v) <= A - 1 && o >= y[G])
          return s[0] = o, a[0] = c, F <= y[G] && je.MaxDifferencesHistory > 0 && A <= je.MaxDifferencesHistory + 1 ? this.WALKTRACE(R, m, h, k, v, _, L, B, E, y, o, n, s, c, r, a, N, u) : null;
      }
      const $ = (T - t + (W - i) - A) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(T, $))
        return u[0] = !0, s[0] = T, a[0] = W, $ > 0 && je.MaxDifferencesHistory > 0 && A <= je.MaxDifferencesHistory + 1 ? this.WALKTRACE(R, m, h, k, v, _, L, B, E, y, o, n, s, c, r, a, N, u) : (t++, i++, [
          new Ce(
            t,
            n - t + 1,
            i,
            r - i + 1
          )
        ]);
      _ = this.ClipDiagonalBound(v - A, A, v, p), L = this.ClipDiagonalBound(v + A, A, v, p);
      for (let G = _; G <= L; G += 2) {
        G === _ || G < L && y[G - 1] >= y[G + 1] ? o = y[G + 1] - 1 : o = y[G - 1], c = o - (G - v) - B;
        const F = o;
        for (; o > t && c > i && this.ElementsAreEqual(o, c); )
          o--, c--;
        if (y[G] = o, N && Math.abs(G - R) <= A && o <= E[G])
          return s[0] = o, a[0] = c, F >= E[G] && je.MaxDifferencesHistory > 0 && A <= je.MaxDifferencesHistory + 1 ? this.WALKTRACE(R, m, h, k, v, _, L, B, E, y, o, n, s, c, r, a, N, u) : null;
      }
      if (A <= je.MaxDifferencesHistory) {
        let G = new Int32Array(h - m + 2);
        G[0] = R - m + 1, _t.Copy2(E, m, G, 1, h - m + 1), this.m_forwardHistory.push(G), G = new Int32Array(L - _ + 2), G[0] = v - _ + 1, _t.Copy2(y, _, G, 1, L - _ + 1), this.m_reverseHistory.push(G);
      }
    }
    return this.WALKTRACE(R, m, h, k, v, _, L, B, E, y, o, n, s, c, r, a, N, u);
  }
  PrettifyChanges(t) {
    for (let n = 0; n < t.length; n++) {
      const i = t[n], r = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, a = i.originalLength > 0, u = i.modifiedLength > 0;
      for (; i.originalStart + i.originalLength < r && i.modifiedStart + i.modifiedLength < s && (!a || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!u || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength)); ) {
        const c = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
        if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !c)
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
      const a = i.originalLength > 0, u = i.modifiedLength > 0;
      let o = 0, c = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
      for (let h = 1; ; h++) {
        const _ = i.originalStart - h, L = i.modifiedStart - h;
        if (_ < r || L < s || a && !this.OriginalElementsAreEqual(_, _ + i.originalLength) || u && !this.ModifiedElementsAreEqual(L, L + i.modifiedLength))
          break;
        const p = (_ === r && L === s ? 5 : 0) + this._boundaryScore(_, i.originalLength, L, i.modifiedLength);
        p > c && (c = p, o = h);
      }
      i.originalStart -= o, i.modifiedStart -= o;
      const m = [null];
      if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], m)) {
        t[n - 1] = m[0], t.splice(n, 1), n++;
        continue;
      }
    }
    if (this._hasStrings)
      for (let n = 1, i = t.length; n < i; n++) {
        const r = t[n - 1], s = t[n], a = s.originalStart - r.originalStart - r.originalLength, u = r.originalStart, o = s.originalStart + s.originalLength, c = o - u, m = r.modifiedStart, h = s.modifiedStart + s.modifiedLength, _ = h - m;
        if (a < 5 && c < 20 && _ < 20) {
          const L = this._findBetterContiguousSequence(u, c, m, _, a);
          if (L) {
            const [b, p] = L;
            (b !== r.originalStart + r.originalLength || p !== r.modifiedStart + r.modifiedLength) && (r.originalLength = b - r.originalStart, r.modifiedLength = p - r.modifiedStart, s.originalStart = b + a, s.modifiedStart = p + a, s.originalLength = o - s.originalStart, s.modifiedLength = h - s.modifiedStart);
          }
        }
      }
    return t;
  }
  _findBetterContiguousSequence(t, n, i, r, s) {
    if (n < s || r < s)
      return null;
    const a = t + n - s + 1, u = i + r - s + 1;
    let o = 0, c = 0, m = 0;
    for (let h = t; h < a; h++)
      for (let _ = i; _ < u; _++) {
        const L = this._contiguousSequenceScore(h, _, s);
        L > 0 && L > o && (o = L, c = h, m = _);
      }
    return o > 0 ? [c, m] : null;
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
      return _t.Copy(t, 0, r, 0, t.length - 1), r[t.length - 1] = i[0], _t.Copy(n, 1, r, t.length, n.length - 1), r;
    } else {
      const r = new Array(t.length + n.length);
      return _t.Copy(t, 0, r, 0, t.length), _t.Copy(n, 0, r, t.length, n.length), r;
    }
  }
  ChangesOverlap(t, n, i) {
    if (gt.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), gt.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
      const r = t.originalStart;
      let s = t.originalLength;
      const a = t.modifiedStart;
      let u = t.modifiedLength;
      return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (u = n.modifiedStart + n.modifiedLength - t.modifiedStart), i[0] = new Ce(r, s, a, u), !0;
    } else
      return i[0] = null, !1;
  }
  ClipDiagonalBound(t, n, i, r) {
    if (t >= 0 && t < r)
      return t;
    const s = i, a = r - i - 1, u = n % 2 === 0;
    if (t < 0) {
      const o = s % 2 === 0;
      return u === o ? 0 : 1;
    } else {
      const o = a % 2 === 0;
      return u === o ? r - 1 : r - 2;
    }
  }
}
class j {
  constructor(t, n) {
    this.lineNumber = t, this.column = n;
  }
  with(t = this.lineNumber, n = this.column) {
    return t === this.lineNumber && n === this.column ? this : new j(t, n);
  }
  delta(t = 0, n = 0) {
    return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
  }
  equals(t) {
    return j.equals(this, t);
  }
  static equals(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
  }
  isBefore(t) {
    return j.isBefore(this, t);
  }
  static isBefore(t, n) {
    return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
  }
  isBeforeOrEqual(t) {
    return j.isBeforeOrEqual(this, t);
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
    return new j(this.lineNumber, this.column);
  }
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  static lift(t) {
    return new j(t.lineNumber, t.column);
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
}
class D {
  constructor(t, n, i, r) {
    t > i || t === i && n > r ? (this.startLineNumber = i, this.startColumn = r, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = i, this.endColumn = r);
  }
  isEmpty() {
    return D.isEmpty(this);
  }
  static isEmpty(t) {
    return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
  }
  containsPosition(t) {
    return D.containsPosition(this, t);
  }
  static containsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
  }
  static strictContainsPosition(t, n) {
    return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
  }
  containsRange(t) {
    return D.containsRange(this, t);
  }
  static containsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
  }
  strictContainsRange(t) {
    return D.strictContainsRange(this, t);
  }
  static strictContainsRange(t, n) {
    return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
  }
  plusRange(t) {
    return D.plusRange(this, t);
  }
  static plusRange(t, n) {
    let i, r, s, a;
    return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, r = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, r = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, r = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new D(i, r, s, a);
  }
  intersectRanges(t) {
    return D.intersectRanges(this, t);
  }
  static intersectRanges(t, n) {
    let i = t.startLineNumber, r = t.startColumn, s = t.endLineNumber, a = t.endColumn;
    const u = n.startLineNumber, o = n.startColumn, c = n.endLineNumber, m = n.endColumn;
    return i < u ? (i = u, r = o) : i === u && (r = Math.max(r, o)), s > c ? (s = c, a = m) : s === c && (a = Math.min(a, m)), i > s || i === s && r > a ? null : new D(
      i,
      r,
      s,
      a
    );
  }
  equalsRange(t) {
    return D.equalsRange(this, t);
  }
  static equalsRange(t, n) {
    return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
  }
  getEndPosition() {
    return D.getEndPosition(this);
  }
  static getEndPosition(t) {
    return new j(t.endLineNumber, t.endColumn);
  }
  getStartPosition() {
    return D.getStartPosition(this);
  }
  static getStartPosition(t) {
    return new j(t.startLineNumber, t.startColumn);
  }
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  setEndPosition(t, n) {
    return new D(this.startLineNumber, this.startColumn, t, n);
  }
  setStartPosition(t, n) {
    return new D(t, n, this.endLineNumber, this.endColumn);
  }
  collapseToStart() {
    return D.collapseToStart(this);
  }
  static collapseToStart(t) {
    return new D(
      t.startLineNumber,
      t.startColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  collapseToEnd() {
    return D.collapseToEnd(this);
  }
  static collapseToEnd(t) {
    return new D(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
  }
  delta(t) {
    return new D(
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
    return new D(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static lift(t) {
    return t ? new D(
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
        const u = t.startColumn | 0, o = n.startColumn | 0;
        if (u === o) {
          const c = t.endLineNumber | 0, m = n.endLineNumber | 0;
          if (c === m) {
            const h = t.endColumn | 0, _ = n.endColumn | 0;
            return h - _;
          }
          return c - m;
        }
        return u - o;
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
}
class bi {
  constructor(t) {
    const n = ki(t);
    this._defaultValue = n, this._asciiMap = bi._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(t) {
    const n = new Uint8Array(256);
    return n.fill(t), n;
  }
  set(t, n) {
    const i = ki(n);
    t >= 0 && t < 256 ? this._asciiMap[t] = i : this._map.set(t, i);
  }
  get(t) {
    return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
  }
  clear() {
    this._asciiMap.fill(this._defaultValue), this._map.clear();
  }
}
var qi;
(function(e) {
  e[e.False = 0] = "False", e[e.True = 1] = "True";
})(qi || (qi = {}));
var q;
(function(e) {
  e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})(q || (q = {}));
class Jl {
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
class Zl {
  constructor(t) {
    let n = 0, i = q.Invalid;
    for (let s = 0, a = t.length; s < a; s++) {
      const [u, o, c] = t[s];
      o > n && (n = o), u > i && (i = u), c > i && (i = c);
    }
    n++, i++;
    const r = new Jl(i, n, q.Invalid);
    for (let s = 0, a = t.length; s < a; s++) {
      const [u, o, c] = t[s];
      r.set(u, o, c);
    }
    this._states = r, this._maxCharCode = n;
  }
  nextState(t, n) {
    return n < 0 || n >= this._maxCharCode ? q.Invalid : this._states.get(t, n);
  }
}
let Bn = null;
function Kl() {
  return Bn === null && (Bn = new Zl([
    [q.Start, w.h, q.H],
    [q.Start, w.H, q.H],
    [q.Start, w.f, q.F],
    [q.Start, w.F, q.F],
    [q.H, w.t, q.HT],
    [q.H, w.T, q.HT],
    [q.HT, w.t, q.HTT],
    [q.HT, w.T, q.HTT],
    [q.HTT, w.p, q.HTTP],
    [q.HTT, w.P, q.HTTP],
    [q.HTTP, w.s, q.BeforeColon],
    [q.HTTP, w.S, q.BeforeColon],
    [q.HTTP, w.Colon, q.AfterColon],
    [q.F, w.i, q.FI],
    [q.F, w.I, q.FI],
    [q.FI, w.l, q.FIL],
    [q.FI, w.L, q.FIL],
    [q.FIL, w.e, q.BeforeColon],
    [q.FIL, w.E, q.BeforeColon],
    [q.BeforeColon, w.Colon, q.AfterColon],
    [q.AfterColon, w.Slash, q.AlmostThere],
    [q.AlmostThere, w.Slash, q.End]
  ])), Bn;
}
var ne;
(function(e) {
  e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(ne || (ne = {}));
let Ot = null;
function Cl() {
  if (Ot === null) {
    Ot = new bi(ne.None);
    const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…|`;
    for (let n = 0; n < e.length; n++)
      Ot.set(e.charCodeAt(n), ne.ForceTermination);
    const t = ".,;:";
    for (let n = 0; n < t.length; n++)
      Ot.set(t.charCodeAt(n), ne.CannotEndIn);
  }
  return Ot;
}
class xn {
  static _createLink(t, n, i, r, s) {
    let a = s - 1;
    do {
      const u = n.charCodeAt(a);
      if (t.get(u) !== ne.CannotEndIn)
        break;
      a--;
    } while (a > r);
    if (r > 0) {
      const u = n.charCodeAt(r - 1), o = n.charCodeAt(a);
      (u === w.OpenParen && o === w.CloseParen || u === w.OpenSquareBracket && o === w.CloseSquareBracket || u === w.OpenCurlyBrace && o === w.CloseCurlyBrace) && a--;
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
  static computeLinks(t, n = Kl()) {
    const i = Cl(), r = [];
    for (let s = 1, a = t.getLineCount(); s <= a; s++) {
      const u = t.getLineContent(s), o = u.length;
      let c = 0, m = 0, h = 0, _ = q.Start, L = !1, b = !1, p = !1, E = !1;
      for (; c < o; ) {
        let y = !1;
        const R = u.charCodeAt(c);
        if (_ === q.Accept) {
          let v;
          switch (R) {
            case w.OpenParen:
              L = !0, v = ne.None;
              break;
            case w.CloseParen:
              v = L ? ne.None : ne.ForceTermination;
              break;
            case w.OpenSquareBracket:
              p = !0, b = !0, v = ne.None;
              break;
            case w.CloseSquareBracket:
              p = !1, v = b ? ne.None : ne.ForceTermination;
              break;
            case w.OpenCurlyBrace:
              E = !0, v = ne.None;
              break;
            case w.CloseCurlyBrace:
              v = E ? ne.None : ne.ForceTermination;
              break;
            case w.SingleQuote:
            case w.DoubleQuote:
            case w.BackTick:
              h === R ? v = ne.ForceTermination : h === w.SingleQuote || h === w.DoubleQuote || h === w.BackTick ? v = ne.None : v = ne.ForceTermination;
              break;
            case w.Asterisk:
              v = h === w.Asterisk ? ne.ForceTermination : ne.None;
              break;
            case w.Space:
              v = p ? ne.None : ne.ForceTermination;
              break;
            default:
              v = i.get(R);
          }
          v === ne.ForceTermination && (r.push(xn._createLink(i, u, s, m, c)), y = !0);
        } else if (_ === q.End) {
          let v;
          R === w.OpenSquareBracket ? (b = !0, v = ne.None) : v = i.get(R), v === ne.ForceTermination ? y = !0 : _ = q.Accept;
        } else
          _ = n.nextState(_, R), _ === q.Invalid && (y = !0);
        y && (_ = q.Start, L = !1, b = !1, E = !1, m = c + 1, h = R), c++;
      }
      _ === q.Accept && r.push(xn._createLink(i, u, s, m, o));
    }
    return r;
  }
}
function eu(e) {
  return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : xn.computeLinks(e);
}
const kn = class kn {
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
kn.INSTANCE = new kn();
let Jn = kn;
var f;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(f || (f = {}));
var g;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(g || (g = {}));
class di {
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
    return this._strToKeyCode[t.toLowerCase()] || f.Unknown;
  }
}
const fn = new di(), Zn = new di(), Kn = new di(), tu = new Array(230), nu = /* @__PURE__ */ Object.create(null), iu = /* @__PURE__ */ Object.create(null), Cn = [];
for (let e = 0; e <= g.MAX_VALUE; e++)
  f.DependsOnKbLayout;
for (let e = 0; e <= f.MAX_VALUE; e++)
  Cn[e] = g.DependsOnKbLayout;
(function() {
  const t = [
    [1, g.None, "None", f.Unknown, "unknown", 0, "VK_UNKNOWN", "", ""],
    [1, g.Hyper, "Hyper", f.Unknown, "", 0, "", "", ""],
    [1, g.Super, "Super", f.Unknown, "", 0, "", "", ""],
    [1, g.Fn, "Fn", f.Unknown, "", 0, "", "", ""],
    [1, g.FnLock, "FnLock", f.Unknown, "", 0, "", "", ""],
    [1, g.Suspend, "Suspend", f.Unknown, "", 0, "", "", ""],
    [1, g.Resume, "Resume", f.Unknown, "", 0, "", "", ""],
    [1, g.Turbo, "Turbo", f.Unknown, "", 0, "", "", ""],
    [1, g.Sleep, "Sleep", f.Unknown, "", 0, "VK_SLEEP", "", ""],
    [1, g.WakeUp, "WakeUp", f.Unknown, "", 0, "", "", ""],
    [0, g.KeyA, "KeyA", f.KeyA, "A", 65, "VK_A", "", ""],
    [0, g.KeyB, "KeyB", f.KeyB, "B", 66, "VK_B", "", ""],
    [0, g.KeyC, "KeyC", f.KeyC, "C", 67, "VK_C", "", ""],
    [0, g.KeyD, "KeyD", f.KeyD, "D", 68, "VK_D", "", ""],
    [0, g.KeyE, "KeyE", f.KeyE, "E", 69, "VK_E", "", ""],
    [0, g.KeyF, "KeyF", f.KeyF, "F", 70, "VK_F", "", ""],
    [0, g.KeyG, "KeyG", f.KeyG, "G", 71, "VK_G", "", ""],
    [0, g.KeyH, "KeyH", f.KeyH, "H", 72, "VK_H", "", ""],
    [0, g.KeyI, "KeyI", f.KeyI, "I", 73, "VK_I", "", ""],
    [0, g.KeyJ, "KeyJ", f.KeyJ, "J", 74, "VK_J", "", ""],
    [0, g.KeyK, "KeyK", f.KeyK, "K", 75, "VK_K", "", ""],
    [0, g.KeyL, "KeyL", f.KeyL, "L", 76, "VK_L", "", ""],
    [0, g.KeyM, "KeyM", f.KeyM, "M", 77, "VK_M", "", ""],
    [0, g.KeyN, "KeyN", f.KeyN, "N", 78, "VK_N", "", ""],
    [0, g.KeyO, "KeyO", f.KeyO, "O", 79, "VK_O", "", ""],
    [0, g.KeyP, "KeyP", f.KeyP, "P", 80, "VK_P", "", ""],
    [0, g.KeyQ, "KeyQ", f.KeyQ, "Q", 81, "VK_Q", "", ""],
    [0, g.KeyR, "KeyR", f.KeyR, "R", 82, "VK_R", "", ""],
    [0, g.KeyS, "KeyS", f.KeyS, "S", 83, "VK_S", "", ""],
    [0, g.KeyT, "KeyT", f.KeyT, "T", 84, "VK_T", "", ""],
    [0, g.KeyU, "KeyU", f.KeyU, "U", 85, "VK_U", "", ""],
    [0, g.KeyV, "KeyV", f.KeyV, "V", 86, "VK_V", "", ""],
    [0, g.KeyW, "KeyW", f.KeyW, "W", 87, "VK_W", "", ""],
    [0, g.KeyX, "KeyX", f.KeyX, "X", 88, "VK_X", "", ""],
    [0, g.KeyY, "KeyY", f.KeyY, "Y", 89, "VK_Y", "", ""],
    [0, g.KeyZ, "KeyZ", f.KeyZ, "Z", 90, "VK_Z", "", ""],
    [0, g.Digit1, "Digit1", f.Digit1, "1", 49, "VK_1", "", ""],
    [0, g.Digit2, "Digit2", f.Digit2, "2", 50, "VK_2", "", ""],
    [0, g.Digit3, "Digit3", f.Digit3, "3", 51, "VK_3", "", ""],
    [0, g.Digit4, "Digit4", f.Digit4, "4", 52, "VK_4", "", ""],
    [0, g.Digit5, "Digit5", f.Digit5, "5", 53, "VK_5", "", ""],
    [0, g.Digit6, "Digit6", f.Digit6, "6", 54, "VK_6", "", ""],
    [0, g.Digit7, "Digit7", f.Digit7, "7", 55, "VK_7", "", ""],
    [0, g.Digit8, "Digit8", f.Digit8, "8", 56, "VK_8", "", ""],
    [0, g.Digit9, "Digit9", f.Digit9, "9", 57, "VK_9", "", ""],
    [0, g.Digit0, "Digit0", f.Digit0, "0", 48, "VK_0", "", ""],
    [1, g.Enter, "Enter", f.Enter, "Enter", 13, "VK_RETURN", "", ""],
    [1, g.Escape, "Escape", f.Escape, "Escape", 27, "VK_ESCAPE", "", ""],
    [1, g.Backspace, "Backspace", f.Backspace, "Backspace", 8, "VK_BACK", "", ""],
    [1, g.Tab, "Tab", f.Tab, "Tab", 9, "VK_TAB", "", ""],
    [1, g.Space, "Space", f.Space, "Space", 32, "VK_SPACE", "", ""],
    [0, g.Minus, "Minus", f.Minus, "-", 189, "VK_OEM_MINUS", "-", "OEM_MINUS"],
    [0, g.Equal, "Equal", f.Equal, "=", 187, "VK_OEM_PLUS", "=", "OEM_PLUS"],
    [0, g.BracketLeft, "BracketLeft", f.BracketLeft, "[", 219, "VK_OEM_4", "[", "OEM_4"],
    [0, g.BracketRight, "BracketRight", f.BracketRight, "]", 221, "VK_OEM_6", "]", "OEM_6"],
    [0, g.Backslash, "Backslash", f.Backslash, "\\", 220, "VK_OEM_5", "\\", "OEM_5"],
    [0, g.IntlHash, "IntlHash", f.Unknown, "", 0, "", "", ""],
    [0, g.Semicolon, "Semicolon", f.Semicolon, ";", 186, "VK_OEM_1", ";", "OEM_1"],
    [0, g.Quote, "Quote", f.Quote, "'", 222, "VK_OEM_7", "'", "OEM_7"],
    [0, g.Backquote, "Backquote", f.Backquote, "`", 192, "VK_OEM_3", "`", "OEM_3"],
    [0, g.Comma, "Comma", f.Comma, ",", 188, "VK_OEM_COMMA", ",", "OEM_COMMA"],
    [0, g.Period, "Period", f.Period, ".", 190, "VK_OEM_PERIOD", ".", "OEM_PERIOD"],
    [0, g.Slash, "Slash", f.Slash, "/", 191, "VK_OEM_2", "/", "OEM_2"],
    [1, g.CapsLock, "CapsLock", f.CapsLock, "CapsLock", 20, "VK_CAPITAL", "", ""],
    [1, g.F1, "F1", f.F1, "F1", 112, "VK_F1", "", ""],
    [1, g.F2, "F2", f.F2, "F2", 113, "VK_F2", "", ""],
    [1, g.F3, "F3", f.F3, "F3", 114, "VK_F3", "", ""],
    [1, g.F4, "F4", f.F4, "F4", 115, "VK_F4", "", ""],
    [1, g.F5, "F5", f.F5, "F5", 116, "VK_F5", "", ""],
    [1, g.F6, "F6", f.F6, "F6", 117, "VK_F6", "", ""],
    [1, g.F7, "F7", f.F7, "F7", 118, "VK_F7", "", ""],
    [1, g.F8, "F8", f.F8, "F8", 119, "VK_F8", "", ""],
    [1, g.F9, "F9", f.F9, "F9", 120, "VK_F9", "", ""],
    [1, g.F10, "F10", f.F10, "F10", 121, "VK_F10", "", ""],
    [1, g.F11, "F11", f.F11, "F11", 122, "VK_F11", "", ""],
    [1, g.F12, "F12", f.F12, "F12", 123, "VK_F12", "", ""],
    [1, g.PrintScreen, "PrintScreen", f.Unknown, "", 0, "", "", ""],
    [1, g.ScrollLock, "ScrollLock", f.ScrollLock, "ScrollLock", 145, "VK_SCROLL", "", ""],
    [1, g.Pause, "Pause", f.PauseBreak, "PauseBreak", 19, "VK_PAUSE", "", ""],
    [1, g.Insert, "Insert", f.Insert, "Insert", 45, "VK_INSERT", "", ""],
    [1, g.Home, "Home", f.Home, "Home", 36, "VK_HOME", "", ""],
    [1, g.PageUp, "PageUp", f.PageUp, "PageUp", 33, "VK_PRIOR", "", ""],
    [1, g.Delete, "Delete", f.Delete, "Delete", 46, "VK_DELETE", "", ""],
    [1, g.End, "End", f.End, "End", 35, "VK_END", "", ""],
    [1, g.PageDown, "PageDown", f.PageDown, "PageDown", 34, "VK_NEXT", "", ""],
    [1, g.ArrowRight, "ArrowRight", f.RightArrow, "RightArrow", 39, "VK_RIGHT", "Right", ""],
    [1, g.ArrowLeft, "ArrowLeft", f.LeftArrow, "LeftArrow", 37, "VK_LEFT", "Left", ""],
    [1, g.ArrowDown, "ArrowDown", f.DownArrow, "DownArrow", 40, "VK_DOWN", "Down", ""],
    [1, g.ArrowUp, "ArrowUp", f.UpArrow, "UpArrow", 38, "VK_UP", "Up", ""],
    [1, g.NumLock, "NumLock", f.NumLock, "NumLock", 144, "VK_NUMLOCK", "", ""],
    [1, g.NumpadDivide, "NumpadDivide", f.NumpadDivide, "NumPad_Divide", 111, "VK_DIVIDE", "", ""],
    [1, g.NumpadMultiply, "NumpadMultiply", f.NumpadMultiply, "NumPad_Multiply", 106, "VK_MULTIPLY", "", ""],
    [1, g.NumpadSubtract, "NumpadSubtract", f.NumpadSubtract, "NumPad_Subtract", 109, "VK_SUBTRACT", "", ""],
    [1, g.NumpadAdd, "NumpadAdd", f.NumpadAdd, "NumPad_Add", 107, "VK_ADD", "", ""],
    [1, g.NumpadEnter, "NumpadEnter", f.Enter, "", 0, "", "", ""],
    [1, g.Numpad1, "Numpad1", f.Numpad1, "NumPad1", 97, "VK_NUMPAD1", "", ""],
    [1, g.Numpad2, "Numpad2", f.Numpad2, "NumPad2", 98, "VK_NUMPAD2", "", ""],
    [1, g.Numpad3, "Numpad3", f.Numpad3, "NumPad3", 99, "VK_NUMPAD3", "", ""],
    [1, g.Numpad4, "Numpad4", f.Numpad4, "NumPad4", 100, "VK_NUMPAD4", "", ""],
    [1, g.Numpad5, "Numpad5", f.Numpad5, "NumPad5", 101, "VK_NUMPAD5", "", ""],
    [1, g.Numpad6, "Numpad6", f.Numpad6, "NumPad6", 102, "VK_NUMPAD6", "", ""],
    [1, g.Numpad7, "Numpad7", f.Numpad7, "NumPad7", 103, "VK_NUMPAD7", "", ""],
    [1, g.Numpad8, "Numpad8", f.Numpad8, "NumPad8", 104, "VK_NUMPAD8", "", ""],
    [1, g.Numpad9, "Numpad9", f.Numpad9, "NumPad9", 105, "VK_NUMPAD9", "", ""],
    [1, g.Numpad0, "Numpad0", f.Numpad0, "NumPad0", 96, "VK_NUMPAD0", "", ""],
    [1, g.NumpadDecimal, "NumpadDecimal", f.NumpadDecimal, "NumPad_Decimal", 110, "VK_DECIMAL", "", ""],
    [0, g.IntlBackslash, "IntlBackslash", f.IntlBackslash, "OEM_102", 226, "VK_OEM_102", "", ""],
    [1, g.ContextMenu, "ContextMenu", f.ContextMenu, "ContextMenu", 93, "", "", ""],
    [1, g.Power, "Power", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadEqual, "NumpadEqual", f.Unknown, "", 0, "", "", ""],
    [1, g.F13, "F13", f.F13, "F13", 124, "VK_F13", "", ""],
    [1, g.F14, "F14", f.F14, "F14", 125, "VK_F14", "", ""],
    [1, g.F15, "F15", f.F15, "F15", 126, "VK_F15", "", ""],
    [1, g.F16, "F16", f.F16, "F16", 127, "VK_F16", "", ""],
    [1, g.F17, "F17", f.F17, "F17", 128, "VK_F17", "", ""],
    [1, g.F18, "F18", f.F18, "F18", 129, "VK_F18", "", ""],
    [1, g.F19, "F19", f.F19, "F19", 130, "VK_F19", "", ""],
    [1, g.F20, "F20", f.F20, "F20", 131, "VK_F20", "", ""],
    [1, g.F21, "F21", f.F21, "F21", 132, "VK_F21", "", ""],
    [1, g.F22, "F22", f.F22, "F22", 133, "VK_F22", "", ""],
    [1, g.F23, "F23", f.F23, "F23", 134, "VK_F23", "", ""],
    [1, g.F24, "F24", f.F24, "F24", 135, "VK_F24", "", ""],
    [1, g.Open, "Open", f.Unknown, "", 0, "", "", ""],
    [1, g.Help, "Help", f.Unknown, "", 0, "", "", ""],
    [1, g.Select, "Select", f.Unknown, "", 0, "", "", ""],
    [1, g.Again, "Again", f.Unknown, "", 0, "", "", ""],
    [1, g.Undo, "Undo", f.Unknown, "", 0, "", "", ""],
    [1, g.Cut, "Cut", f.Unknown, "", 0, "", "", ""],
    [1, g.Copy, "Copy", f.Unknown, "", 0, "", "", ""],
    [1, g.Paste, "Paste", f.Unknown, "", 0, "", "", ""],
    [1, g.Find, "Find", f.Unknown, "", 0, "", "", ""],
    [1, g.AudioVolumeMute, "AudioVolumeMute", f.AudioVolumeMute, "AudioVolumeMute", 173, "VK_VOLUME_MUTE", "", ""],
    [1, g.AudioVolumeUp, "AudioVolumeUp", f.AudioVolumeUp, "AudioVolumeUp", 175, "VK_VOLUME_UP", "", ""],
    [1, g.AudioVolumeDown, "AudioVolumeDown", f.AudioVolumeDown, "AudioVolumeDown", 174, "VK_VOLUME_DOWN", "", ""],
    [1, g.NumpadComma, "NumpadComma", f.NUMPAD_SEPARATOR, "NumPad_Separator", 108, "VK_SEPARATOR", "", ""],
    [0, g.IntlRo, "IntlRo", f.ABNT_C1, "ABNT_C1", 193, "VK_ABNT_C1", "", ""],
    [1, g.KanaMode, "KanaMode", f.Unknown, "", 0, "", "", ""],
    [0, g.IntlYen, "IntlYen", f.Unknown, "", 0, "", "", ""],
    [1, g.Convert, "Convert", f.Unknown, "", 0, "", "", ""],
    [1, g.NonConvert, "NonConvert", f.Unknown, "", 0, "", "", ""],
    [1, g.Lang1, "Lang1", f.Unknown, "", 0, "", "", ""],
    [1, g.Lang2, "Lang2", f.Unknown, "", 0, "", "", ""],
    [1, g.Lang3, "Lang3", f.Unknown, "", 0, "", "", ""],
    [1, g.Lang4, "Lang4", f.Unknown, "", 0, "", "", ""],
    [1, g.Lang5, "Lang5", f.Unknown, "", 0, "", "", ""],
    [1, g.Abort, "Abort", f.Unknown, "", 0, "", "", ""],
    [1, g.Props, "Props", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadParenLeft, "NumpadParenLeft", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadParenRight, "NumpadParenRight", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadBackspace, "NumpadBackspace", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadMemoryStore, "NumpadMemoryStore", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadMemoryRecall, "NumpadMemoryRecall", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadMemoryClear, "NumpadMemoryClear", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadMemoryAdd, "NumpadMemoryAdd", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadMemorySubtract, "NumpadMemorySubtract", f.Unknown, "", 0, "", "", ""],
    [1, g.NumpadClear, "NumpadClear", f.Clear, "Clear", 12, "VK_CLEAR", "", ""],
    [1, g.NumpadClearEntry, "NumpadClearEntry", f.Unknown, "", 0, "", "", ""],
    [1, g.None, "", f.Ctrl, "Ctrl", 17, "VK_CONTROL", "", ""],
    [1, g.None, "", f.Shift, "Shift", 16, "VK_SHIFT", "", ""],
    [1, g.None, "", f.Alt, "Alt", 18, "VK_MENU", "", ""],
    [1, g.None, "", f.Meta, "Meta", 91, "VK_COMMAND", "", ""],
    [1, g.ControlLeft, "ControlLeft", f.Ctrl, "", 0, "VK_LCONTROL", "", ""],
    [1, g.ShiftLeft, "ShiftLeft", f.Shift, "", 0, "VK_LSHIFT", "", ""],
    [1, g.AltLeft, "AltLeft", f.Alt, "", 0, "VK_LMENU", "", ""],
    [1, g.MetaLeft, "MetaLeft", f.Meta, "", 0, "VK_LWIN", "", ""],
    [1, g.ControlRight, "ControlRight", f.Ctrl, "", 0, "VK_RCONTROL", "", ""],
    [1, g.ShiftRight, "ShiftRight", f.Shift, "", 0, "VK_RSHIFT", "", ""],
    [1, g.AltRight, "AltRight", f.Alt, "", 0, "VK_RMENU", "", ""],
    [1, g.MetaRight, "MetaRight", f.Meta, "", 0, "VK_RWIN", "", ""],
    [1, g.BrightnessUp, "BrightnessUp", f.Unknown, "", 0, "", "", ""],
    [1, g.BrightnessDown, "BrightnessDown", f.Unknown, "", 0, "", "", ""],
    [1, g.MediaPlay, "MediaPlay", f.Unknown, "", 0, "", "", ""],
    [1, g.MediaRecord, "MediaRecord", f.Unknown, "", 0, "", "", ""],
    [1, g.MediaFastForward, "MediaFastForward", f.Unknown, "", 0, "", "", ""],
    [1, g.MediaRewind, "MediaRewind", f.Unknown, "", 0, "", "", ""],
    [1, g.MediaTrackNext, "MediaTrackNext", f.MediaTrackNext, "MediaTrackNext", 176, "VK_MEDIA_NEXT_TRACK", "", ""],
    [1, g.MediaTrackPrevious, "MediaTrackPrevious", f.MediaTrackPrevious, "MediaTrackPrevious", 177, "VK_MEDIA_PREV_TRACK", "", ""],
    [1, g.MediaStop, "MediaStop", f.MediaStop, "MediaStop", 178, "VK_MEDIA_STOP", "", ""],
    [1, g.Eject, "Eject", f.Unknown, "", 0, "", "", ""],
    [1, g.MediaPlayPause, "MediaPlayPause", f.MediaPlayPause, "MediaPlayPause", 179, "VK_MEDIA_PLAY_PAUSE", "", ""],
    [1, g.MediaSelect, "MediaSelect", f.LaunchMediaPlayer, "LaunchMediaPlayer", 181, "VK_MEDIA_LAUNCH_MEDIA_SELECT", "", ""],
    [1, g.LaunchMail, "LaunchMail", f.LaunchMail, "LaunchMail", 180, "VK_MEDIA_LAUNCH_MAIL", "", ""],
    [1, g.LaunchApp2, "LaunchApp2", f.LaunchApp2, "LaunchApp2", 183, "VK_MEDIA_LAUNCH_APP2", "", ""],
    [1, g.LaunchApp1, "LaunchApp1", f.Unknown, "", 0, "VK_MEDIA_LAUNCH_APP1", "", ""],
    [1, g.SelectTask, "SelectTask", f.Unknown, "", 0, "", "", ""],
    [1, g.LaunchScreenSaver, "LaunchScreenSaver", f.Unknown, "", 0, "", "", ""],
    [1, g.BrowserSearch, "BrowserSearch", f.BrowserSearch, "BrowserSearch", 170, "VK_BROWSER_SEARCH", "", ""],
    [1, g.BrowserHome, "BrowserHome", f.BrowserHome, "BrowserHome", 172, "VK_BROWSER_HOME", "", ""],
    [1, g.BrowserBack, "BrowserBack", f.BrowserBack, "BrowserBack", 166, "VK_BROWSER_BACK", "", ""],
    [1, g.BrowserForward, "BrowserForward", f.BrowserForward, "BrowserForward", 167, "VK_BROWSER_FORWARD", "", ""],
    [1, g.BrowserStop, "BrowserStop", f.Unknown, "", 0, "VK_BROWSER_STOP", "", ""],
    [1, g.BrowserRefresh, "BrowserRefresh", f.Unknown, "", 0, "VK_BROWSER_REFRESH", "", ""],
    [1, g.BrowserFavorites, "BrowserFavorites", f.Unknown, "", 0, "VK_BROWSER_FAVORITES", "", ""],
    [1, g.ZoomToggle, "ZoomToggle", f.Unknown, "", 0, "", "", ""],
    [1, g.MailReply, "MailReply", f.Unknown, "", 0, "", "", ""],
    [1, g.MailForward, "MailForward", f.Unknown, "", 0, "", "", ""],
    [1, g.MailSend, "MailSend", f.Unknown, "", 0, "", "", ""],
    [1, g.None, "", f.KEY_IN_COMPOSITION, "KeyInComposition", 229, "", "", ""],
    [1, g.None, "", f.ABNT_C2, "ABNT_C2", 194, "VK_ABNT_C2", "", ""],
    [1, g.None, "", f.OEM_8, "OEM_8", 223, "VK_OEM_8", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_KANA", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_HANGUL", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_JUNJA", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_FINAL", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_HANJA", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_KANJI", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_CONVERT", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_NONCONVERT", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_ACCEPT", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_MODECHANGE", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_SELECT", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_PRINT", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_EXECUTE", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_SNAPSHOT", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_HELP", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_APPS", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_PROCESSKEY", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_PACKET", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_DBE_SBCSCHAR", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_DBE_DBCSCHAR", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_ATTN", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_CRSEL", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_EXSEL", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_EREOF", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_PLAY", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_ZOOM", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_NONAME", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_PA1", "", ""],
    [1, g.None, "", f.Unknown, "", 0, "VK_OEM_CLEAR", "", ""]
  ], n = [], i = [];
  for (const r of t) {
    const [s, a, u, o, c, m, h, _, L] = r;
    if (i[a] || (i[a] = !0, nu[u] = a, iu[u.toLowerCase()] = a, s && o !== f.Unknown && o !== f.Enter && o !== f.Ctrl && o !== f.Shift && o !== f.Alt && o !== f.Meta && (Cn[o] = a)), !n[o]) {
      if (n[o] = !0, !c)
        throw new Error(
          `String representation missing for key code ${o} around scan code ${u}`
        );
      fn.define(o, c), Zn.define(o, _ || c), Kn.define(o, L || _ || c);
    }
    m && (tu[m] = o);
  }
  Cn[f.Enter] = g.Enter;
})();
var Hi;
(function(e) {
  function t(u) {
    return fn.keyCodeToStr(u);
  }
  e.toString = t;
  function n(u) {
    return fn.strToKeyCode(u);
  }
  e.fromString = n;
  function i(u) {
    return Zn.keyCodeToStr(u);
  }
  e.toUserSettingsUS = i;
  function r(u) {
    return Kn.keyCodeToStr(u);
  }
  e.toUserSettingsGeneral = r;
  function s(u) {
    return Zn.strToKeyCode(u) || Kn.strToKeyCode(u);
  }
  e.fromUserSettings = s;
  function a(u) {
    if (u >= f.Numpad0 && u <= f.NumpadDivide)
      return null;
    switch (u) {
      case f.UpArrow:
        return "Up";
      case f.DownArrow:
        return "Down";
      case f.LeftArrow:
        return "Left";
      case f.RightArrow:
        return "Right";
    }
    return fn.keyCodeToStr(u);
  }
  e.toElectronAccelerator = a;
})(Hi || (Hi = {}));
var Lt;
(function(e) {
  e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(Lt || (Lt = {}));
function ru(e, t) {
  const n = (t & 65535) << 16 >>> 0;
  return (e | n) >>> 0;
}
var ei;
(function(e) {
  e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelPromptTsxPart = 22] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 23] = "LanguageModelDataPart", e[e.ChatSessionContext = 24] = "ChatSessionContext", e[e.ChatResponsePullRequestPart = 25] = "ChatResponsePullRequestPart";
})(ei || (ei = {}));
let mt;
const On = globalThis.vscode;
var ea;
if (typeof On < "u" && typeof On.process < "u") {
  const e = On.process;
  mt = {
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
} else typeof process < "u" && typeof ((ea = process == null ? void 0 : process.versions) == null ? void 0 : ea.node) == "string" ? mt = {
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
} : mt = {
  get platform() {
    return It ? "win32" : pl ? "darwin" : "linux";
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
const Rn = mt.cwd, su = mt.env, au = mt.platform;
mt.arch;
const lu = 65, uu = 97, ou = 90, cu = 122, ht = 46, oe = 47, xe = 92, Ge = 58, mu = 63;
class ha extends Error {
  constructor(t, n, i) {
    let r;
    typeof n == "string" && n.indexOf("not ") === 0 ? (r = "must not be", n = n.replace(/^not /, "")) : r = "must be";
    const s = t.indexOf(".") !== -1 ? "property" : "argument";
    let a = `The "${t}" ${s} ${r} of type ${n}`;
    a += `. Received type ${typeof i}`, super(a), this.code = "ERR_INVALID_ARG_TYPE";
  }
}
function hu(e, t) {
  if (e === null || typeof e != "object")
    throw new ha(t, "Object", e);
}
function se(e, t) {
  if (typeof e != "string")
    throw new ha(t, "string", e);
}
const Pe = au === "win32";
function X(e) {
  return e === oe || e === xe;
}
function ti(e) {
  return e === oe;
}
function $e(e) {
  return e >= lu && e <= ou || e >= uu && e <= cu;
}
function En(e, t, n, i) {
  let r = "", s = 0, a = -1, u = 0, o = 0;
  for (let c = 0; c <= e.length; ++c) {
    if (c < e.length)
      o = e.charCodeAt(c);
    else {
      if (i(o))
        break;
      o = oe;
    }
    if (i(o)) {
      if (!(a === c - 1 || u === 1)) if (u === 2) {
        if (r.length < 2 || s !== 2 || r.charCodeAt(r.length - 1) !== ht || r.charCodeAt(r.length - 2) !== ht) {
          if (r.length > 2) {
            const m = r.lastIndexOf(n);
            m === -1 ? (r = "", s = 0) : (r = r.slice(0, m), s = r.length - 1 - r.lastIndexOf(n)), a = c, u = 0;
            continue;
          } else if (r.length !== 0) {
            r = "", s = 0, a = c, u = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? `${n}..` : "..", s = 2);
      } else
        r.length > 0 ? r += `${n}${e.slice(a + 1, c)}` : r = e.slice(a + 1, c), s = c - a - 1;
      a = c, u = 0;
    } else o === ht && u !== -1 ? ++u : u = -1;
  }
  return r;
}
function fu(e) {
  return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function fa(e, t) {
  hu(t, "pathObject");
  const n = t.dir || t.root, i = t.base || `${t.name || ""}${fu(t.ext)}`;
  return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
const he = {
  resolve(...e) {
    let t = "", n = "", i = !1;
    for (let r = e.length - 1; r >= -1; r--) {
      let s;
      if (r >= 0) {
        if (s = e[r], se(s, `paths[${r}]`), s.length === 0)
          continue;
      } else t.length === 0 ? s = Rn() : (s = su[`=${t}`] || Rn(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === xe) && (s = `${t}\\`));
      const a = s.length;
      let u = 0, o = "", c = !1;
      const m = s.charCodeAt(0);
      if (a === 1)
        X(m) && (u = 1, c = !0);
      else if (X(m))
        if (c = !0, X(s.charCodeAt(1))) {
          let h = 2, _ = h;
          for (; h < a && !X(s.charCodeAt(h)); )
            h++;
          if (h < a && h !== _) {
            const L = s.slice(_, h);
            for (_ = h; h < a && X(s.charCodeAt(h)); )
              h++;
            if (h < a && h !== _) {
              for (_ = h; h < a && !X(s.charCodeAt(h)); )
                h++;
              (h === a || h !== _) && (o = `\\\\${L}\\${s.slice(_, h)}`, u = h);
            }
          }
        } else
          u = 1;
      else $e(m) && s.charCodeAt(1) === Ge && (o = s.slice(0, 2), u = 2, a > 2 && X(s.charCodeAt(2)) && (c = !0, u = 3));
      if (o.length > 0)
        if (t.length > 0) {
          if (o.toLowerCase() !== t.toLowerCase())
            continue;
        } else
          t = o;
      if (i) {
        if (t.length > 0)
          break;
      } else if (n = `${s.slice(u)}\\${n}`, i = c, c && t.length > 0)
        break;
    }
    return n = En(n, !i, "\\", X), i ? `${t}\\${n}` : `${t}${n}` || ".";
  },
  normalize(e) {
    se(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = 0, i, r = !1;
    const s = e.charCodeAt(0);
    if (t === 1)
      return ti(s) ? "\\" : e;
    if (X(s))
      if (r = !0, X(e.charCodeAt(1))) {
        let u = 2, o = u;
        for (; u < t && !X(e.charCodeAt(u)); )
          u++;
        if (u < t && u !== o) {
          const c = e.slice(o, u);
          for (o = u; u < t && X(e.charCodeAt(u)); )
            u++;
          if (u < t && u !== o) {
            for (o = u; u < t && !X(e.charCodeAt(u)); )
              u++;
            if (u === t)
              return `\\\\${c}\\${e.slice(o)}\\`;
            u !== o && (i = `\\\\${c}\\${e.slice(o, u)}`, n = u);
          }
        }
      } else
        n = 1;
    else $e(s) && e.charCodeAt(1) === Ge && (i = e.slice(0, 2), n = 2, t > 2 && X(e.charCodeAt(2)) && (r = !0, n = 3));
    let a = n < t ? En(e.slice(n), !r, "\\", X) : "";
    if (a.length === 0 && !r && (a = "."), a.length > 0 && X(e.charCodeAt(t - 1)) && (a += "\\"), !r && i === void 0 && e.includes(":")) {
      if (a.length >= 2 && $e(a.charCodeAt(0)) && a.charCodeAt(1) === Ge)
        return `.\\${a}`;
      let u = e.indexOf(":");
      do
        if (u === t - 1 || X(e.charCodeAt(u + 1)))
          return `.\\${a}`;
      while ((u = e.indexOf(":", u + 1)) !== -1);
    }
    return i === void 0 ? r ? `\\${a}` : a : r ? `${i}\\${a}` : `${i}${a}`;
  },
  isAbsolute(e) {
    se(e, "path");
    const t = e.length;
    if (t === 0)
      return !1;
    const n = e.charCodeAt(0);
    return X(n) || t > 2 && $e(n) && e.charCodeAt(1) === Ge && X(e.charCodeAt(2));
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    let t, n;
    for (let s = 0; s < e.length; ++s) {
      const a = e[s];
      se(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
    }
    if (t === void 0)
      return ".";
    let i = !0, r = 0;
    if (typeof n == "string" && X(n.charCodeAt(0))) {
      ++r;
      const s = n.length;
      s > 1 && X(n.charCodeAt(1)) && (++r, s > 2 && (X(n.charCodeAt(2)) ? ++r : i = !1));
    }
    if (i) {
      for (; r < t.length && X(t.charCodeAt(r)); )
        r++;
      r >= 2 && (t = `\\${t.slice(r)}`);
    }
    return he.normalize(t);
  },
  relative(e, t) {
    if (se(e, "from"), se(t, "to"), e === t)
      return "";
    const n = he.resolve(e), i = he.resolve(t);
    if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t))
      return "";
    if (n.length !== e.length || i.length !== t.length) {
      const b = n.split("\\"), p = i.split("\\");
      b[b.length - 1] === "" && b.pop(), p[p.length - 1] === "" && p.pop();
      const E = b.length, y = p.length, R = E < y ? E : y;
      let v;
      for (v = 0; v < R && b[v].toLowerCase() === p[v].toLowerCase(); v++)
        ;
      return v === 0 ? i : v === R ? y > R ? p.slice(v).join("\\") : E > R ? "..\\".repeat(E - 1 - v) + ".." : "" : "..\\".repeat(E - v) + p.slice(v).join("\\");
    }
    let r = 0;
    for (; r < e.length && e.charCodeAt(r) === xe; )
      r++;
    let s = e.length;
    for (; s - 1 > r && e.charCodeAt(s - 1) === xe; )
      s--;
    const a = s - r;
    let u = 0;
    for (; u < t.length && t.charCodeAt(u) === xe; )
      u++;
    let o = t.length;
    for (; o - 1 > u && t.charCodeAt(o - 1) === xe; )
      o--;
    const c = o - u, m = a < c ? a : c;
    let h = -1, _ = 0;
    for (; _ < m; _++) {
      const b = e.charCodeAt(r + _);
      if (b !== t.charCodeAt(u + _))
        break;
      b === xe && (h = _);
    }
    if (_ !== m) {
      if (h === -1)
        return i;
    } else {
      if (c > m) {
        if (t.charCodeAt(u + _) === xe)
          return i.slice(u + _ + 1);
        if (_ === 2)
          return i.slice(u + _);
      }
      a > m && (e.charCodeAt(r + _) === xe ? h = _ : _ === 2 && (h = 3)), h === -1 && (h = 0);
    }
    let L = "";
    for (_ = r + h + 1; _ <= s; ++_)
      (_ === s || e.charCodeAt(_) === xe) && (L += L.length === 0 ? ".." : "\\..");
    return u += h, L.length > 0 ? `${L}${i.slice(u, o)}` : (i.charCodeAt(u) === xe && ++u, i.slice(u, o));
  },
  toNamespacedPath(e) {
    if (typeof e != "string" || e.length === 0)
      return e;
    const t = he.resolve(e);
    if (t.length <= 2)
      return e;
    if (t.charCodeAt(0) === xe) {
      if (t.charCodeAt(1) === xe) {
        const n = t.charCodeAt(2);
        if (n !== mu && n !== ht)
          return `\\\\?\\UNC\\${t.slice(2)}`;
      }
    } else if ($e(t.charCodeAt(0)) && t.charCodeAt(1) === Ge && t.charCodeAt(2) === xe)
      return `\\\\?\\${t}`;
    return t;
  },
  dirname(e) {
    se(e, "path");
    const t = e.length;
    if (t === 0)
      return ".";
    let n = -1, i = 0;
    const r = e.charCodeAt(0);
    if (t === 1)
      return X(r) ? e : ".";
    if (X(r)) {
      if (n = i = 1, X(e.charCodeAt(1))) {
        let u = 2, o = u;
        for (; u < t && !X(e.charCodeAt(u)); )
          u++;
        if (u < t && u !== o) {
          for (o = u; u < t && X(e.charCodeAt(u)); )
            u++;
          if (u < t && u !== o) {
            for (o = u; u < t && !X(e.charCodeAt(u)); )
              u++;
            if (u === t)
              return e;
            u !== o && (n = i = u + 1);
          }
        }
      }
    } else $e(r) && e.charCodeAt(1) === Ge && (n = t > 2 && X(e.charCodeAt(2)) ? 3 : 2, i = n);
    let s = -1, a = !0;
    for (let u = t - 1; u >= i; --u)
      if (X(e.charCodeAt(u))) {
        if (!a) {
          s = u;
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
    t !== void 0 && se(t, "suffix"), se(e, "path");
    let n = 0, i = -1, r = !0, s;
    if (e.length >= 2 && $e(e.charCodeAt(0)) && e.charCodeAt(1) === Ge && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, u = -1;
      for (s = e.length - 1; s >= n; --s) {
        const o = e.charCodeAt(s);
        if (X(o)) {
          if (!r) {
            n = s + 1;
            break;
          }
        } else
          u === -1 && (r = !1, u = s + 1), a >= 0 && (o === t.charCodeAt(a) ? --a === -1 && (i = s) : (a = -1, i = u));
      }
      return n === i ? i = u : i === -1 && (i = e.length), e.slice(n, i);
    }
    for (s = e.length - 1; s >= n; --s)
      if (X(e.charCodeAt(s))) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else i === -1 && (r = !1, i = s + 1);
    return i === -1 ? "" : e.slice(n, i);
  },
  extname(e) {
    se(e, "path");
    let t = 0, n = -1, i = 0, r = -1, s = !0, a = 0;
    e.length >= 2 && e.charCodeAt(1) === Ge && $e(e.charCodeAt(0)) && (t = i = 2);
    for (let u = e.length - 1; u >= t; --u) {
      const o = e.charCodeAt(u);
      if (X(o)) {
        if (!s) {
          i = u + 1;
          break;
        }
        continue;
      }
      r === -1 && (s = !1, r = u + 1), o === ht ? n === -1 ? n = u : a !== 1 && (a = 1) : n !== -1 && (a = -1);
    }
    return n === -1 || r === -1 || a === 0 || a === 1 && n === r - 1 && n === i + 1 ? "" : e.slice(n, r);
  },
  format: fa.bind(null, "\\"),
  parse(e) {
    se(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.length;
    let i = 0, r = e.charCodeAt(0);
    if (n === 1)
      return X(r) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
    if (X(r)) {
      if (i = 1, X(e.charCodeAt(1))) {
        let h = 2, _ = h;
        for (; h < n && !X(e.charCodeAt(h)); )
          h++;
        if (h < n && h !== _) {
          for (_ = h; h < n && X(e.charCodeAt(h)); )
            h++;
          if (h < n && h !== _) {
            for (_ = h; h < n && !X(e.charCodeAt(h)); )
              h++;
            h === n ? i = h : h !== _ && (i = h + 1);
          }
        }
      }
    } else if ($e(r) && e.charCodeAt(1) === Ge) {
      if (n <= 2)
        return t.root = t.dir = e, t;
      if (i = 2, X(e.charCodeAt(2))) {
        if (n === 3)
          return t.root = t.dir = e, t;
        i = 3;
      }
    }
    i > 0 && (t.root = e.slice(0, i));
    let s = -1, a = i, u = -1, o = !0, c = e.length - 1, m = 0;
    for (; c >= i; --c) {
      if (r = e.charCodeAt(c), X(r)) {
        if (!o) {
          a = c + 1;
          break;
        }
        continue;
      }
      u === -1 && (o = !1, u = c + 1), r === ht ? s === -1 ? s = c : m !== 1 && (m = 1) : s !== -1 && (m = -1);
    }
    return u !== -1 && (s === -1 || m === 0 || m === 1 && s === u - 1 && s === a + 1 ? t.base = t.name = e.slice(a, u) : (t.name = e.slice(a, s), t.base = e.slice(a, u), t.ext = e.slice(s, u))), a > 0 && a !== i ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
}, gu = (() => {
  if (Pe) {
    const e = /\\/g;
    return () => {
      const t = Rn().replace(e, "/");
      return t.slice(t.indexOf("/"));
    };
  }
  return () => Rn();
})(), ee = {
  resolve(...e) {
    let t = "", n = !1;
    for (let i = e.length - 1; i >= 0 && !n; i--) {
      const r = e[i];
      se(r, `paths[${i}]`), r.length !== 0 && (t = `${r}/${t}`, n = r.charCodeAt(0) === oe);
    }
    if (!n) {
      const i = gu();
      t = `${i}/${t}`, n = i.charCodeAt(0) === oe;
    }
    return t = En(t, !n, "/", ti), n ? `/${t}` : t.length > 0 ? t : ".";
  },
  normalize(e) {
    if (se(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === oe, n = e.charCodeAt(e.length - 1) === oe;
    return e = En(e, !t, "/", ti), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
  },
  isAbsolute(e) {
    return se(e, "path"), e.length > 0 && e.charCodeAt(0) === oe;
  },
  join(...e) {
    if (e.length === 0)
      return ".";
    const t = [];
    for (let n = 0; n < e.length; ++n) {
      const i = e[n];
      se(i, "path"), i.length > 0 && t.push(i);
    }
    return t.length === 0 ? "." : ee.normalize(t.join("/"));
  },
  relative(e, t) {
    if (se(e, "from"), se(t, "to"), e === t || (e = ee.resolve(e), t = ee.resolve(t), e === t))
      return "";
    const n = 1, i = e.length, r = i - n, s = 1, a = t.length - s, u = r < a ? r : a;
    let o = -1, c = 0;
    for (; c < u; c++) {
      const h = e.charCodeAt(n + c);
      if (h !== t.charCodeAt(s + c))
        break;
      h === oe && (o = c);
    }
    if (c === u)
      if (a > u) {
        if (t.charCodeAt(s + c) === oe)
          return t.slice(s + c + 1);
        if (c === 0)
          return t.slice(s + c);
      } else r > u && (e.charCodeAt(n + c) === oe ? o = c : c === 0 && (o = 0));
    let m = "";
    for (c = n + o + 1; c <= i; ++c)
      (c === i || e.charCodeAt(c) === oe) && (m += m.length === 0 ? ".." : "/..");
    return `${m}${t.slice(s + o)}`;
  },
  toNamespacedPath(e) {
    return e;
  },
  dirname(e) {
    if (se(e, "path"), e.length === 0)
      return ".";
    const t = e.charCodeAt(0) === oe;
    let n = -1, i = !0;
    for (let r = e.length - 1; r >= 1; --r)
      if (e.charCodeAt(r) === oe) {
        if (!i) {
          n = r;
          break;
        }
      } else
        i = !1;
    return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
  },
  basename(e, t) {
    t !== void 0 && se(t, "suffix"), se(e, "path");
    let n = 0, i = -1, r = !0, s;
    if (t !== void 0 && t.length > 0 && t.length <= e.length) {
      if (t === e)
        return "";
      let a = t.length - 1, u = -1;
      for (s = e.length - 1; s >= 0; --s) {
        const o = e.charCodeAt(s);
        if (o === oe) {
          if (!r) {
            n = s + 1;
            break;
          }
        } else
          u === -1 && (r = !1, u = s + 1), a >= 0 && (o === t.charCodeAt(a) ? --a === -1 && (i = s) : (a = -1, i = u));
      }
      return n === i ? i = u : i === -1 && (i = e.length), e.slice(n, i);
    }
    for (s = e.length - 1; s >= 0; --s)
      if (e.charCodeAt(s) === oe) {
        if (!r) {
          n = s + 1;
          break;
        }
      } else i === -1 && (r = !1, i = s + 1);
    return i === -1 ? "" : e.slice(n, i);
  },
  extname(e) {
    se(e, "path");
    let t = -1, n = 0, i = -1, r = !0, s = 0;
    for (let a = e.length - 1; a >= 0; --a) {
      const u = e[a];
      if (u === "/") {
        if (!r) {
          n = a + 1;
          break;
        }
        continue;
      }
      i === -1 && (r = !1, i = a + 1), u === "." ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1);
    }
    return t === -1 || i === -1 || s === 0 || s === 1 && t === i - 1 && t === n + 1 ? "" : e.slice(t, i);
  },
  format: fa.bind(null, "/"),
  parse(e) {
    se(e, "path");
    const t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0)
      return t;
    const n = e.charCodeAt(0) === oe;
    let i;
    n ? (t.root = "/", i = 1) : i = 0;
    let r = -1, s = 0, a = -1, u = !0, o = e.length - 1, c = 0;
    for (; o >= i; --o) {
      const m = e.charCodeAt(o);
      if (m === oe) {
        if (!u) {
          s = o + 1;
          break;
        }
        continue;
      }
      a === -1 && (u = !1, a = o + 1), m === ht ? r === -1 ? r = o : c !== 1 && (c = 1) : r !== -1 && (c = -1);
    }
    if (a !== -1) {
      const m = s === 0 && n ? 1 : s;
      r === -1 || c === 0 || c === 1 && r === a - 1 && r === s + 1 ? t.base = t.name = e.slice(m, a) : (t.name = e.slice(m, r), t.base = e.slice(m, a), t.ext = e.slice(r, a));
    }
    return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
ee.win32 = he.win32 = he;
ee.posix = he.posix = ee;
const _u = Pe ? he.normalize : ee.normalize;
Pe ? he.isAbsolute : ee.isAbsolute;
const pu = Pe ? he.join : ee.join, bu = Pe ? he.resolve : ee.resolve, du = Pe ? he.relative : ee.relative, wu = Pe ? he.dirname : ee.dirname;
Pe ? he.basename : ee.basename;
Pe ? he.extname : ee.extname;
Pe ? he.parse : ee.parse;
const gn = Pe ? he.sep : ee.sep, Lu = /^\w[\w\d+.-]*$/, Nu = /^\//, xu = /^\/\//;
function Ru(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`
    );
  if (e.scheme && !Lu.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Nu.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character'
        );
    } else if (xu.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")'
      );
  }
}
function Eu(e, t) {
  return !e && !t ? "file" : e;
}
function Au(e, t) {
  switch (e) {
    case "https":
    case "http":
    case "file":
      t ? t[0] !== Ie && (t = Ie + t) : t = Ie;
      break;
  }
  return t;
}
const C = "", Ie = "/", vu = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
class me {
  static isUri(t) {
    return t instanceof me ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
  }
  constructor(t, n, i, r, s, a = !1) {
    typeof t == "object" ? (this.scheme = t.scheme || C, this.authority = t.authority || C, this.path = t.path || C, this.query = t.query || C, this.fragment = t.fragment || C) : (this.scheme = Eu(t, a), this.authority = n || C, this.path = Au(this.scheme, i || C), this.query = r || C, this.fragment = s || C, Ru(this, a));
  }
  get fsPath() {
    return An(this, !1);
  }
  with(t) {
    if (!t)
      return this;
    let { scheme: n, authority: i, path: r, query: s, fragment: a } = t;
    return n === void 0 ? n = this.scheme : n === null && (n = C), i === void 0 ? i = this.authority : i === null && (i = C), r === void 0 ? r = this.path : r === null && (r = C), s === void 0 ? s = this.query : s === null && (s = C), a === void 0 ? a = this.fragment : a === null && (a = C), n === this.scheme && i === this.authority && r === this.path && s === this.query && a === this.fragment ? this : new pt(n, i, r, s, a);
  }
  static parse(t, n = !1) {
    const i = vu.exec(t);
    return i ? new pt(
      i[2] || C,
      ln(i[4] || C),
      ln(i[5] || C),
      ln(i[7] || C),
      ln(i[9] || C),
      n
    ) : new pt(C, C, C, C, C);
  }
  static file(t) {
    let n = C;
    if (It && (t = t.replace(/\\/g, Ie)), t[0] === Ie && t[1] === Ie) {
      const i = t.indexOf(Ie, 2);
      i === -1 ? (n = t.substring(2), t = Ie) : (n = t.substring(2, i), t = t.substring(i) || Ie);
    }
    return new pt("file", n, t, C, C);
  }
  static from(t, n) {
    return new pt(
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
    return It && t.scheme === "file" ? i = me.file(he.join(An(t, !0), ...n)).path : i = ee.join(t.path, ...n), t.with({ path: i });
  }
  toString(t = !1) {
    return ni(this, t);
  }
  toJSON() {
    return this;
  }
  static revive(t) {
    if (t) {
      if (t instanceof me)
        return t;
      {
        const n = new pt(t);
        return n._formatted = t.external ?? null, n._fsPath = t._sep === ga ? t.fsPath ?? null : null, n;
      }
    } else return t;
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
}
const ga = It ? 1 : void 0;
class pt extends me {
  constructor() {
    super(...arguments), this._formatted = null, this._fsPath = null;
  }
  get fsPath() {
    return this._fsPath || (this._fsPath = An(this, !1)), this._fsPath;
  }
  toString(t = !1) {
    return t ? ni(this, !0) : (this._formatted || (this._formatted = ni(this, !1)), this._formatted);
  }
  toJSON() {
    const t = {
      $mid: ei.Uri
    };
    return this._fsPath && (t.fsPath = this._fsPath, t._sep = ga), this._formatted && (t.external = this._formatted), this.path && (t.path = this.path), this.scheme && (t.scheme = this.scheme), this.authority && (t.authority = this.authority), this.query && (t.query = this.query), this.fragment && (t.fragment = this.fragment), t;
  }
}
const _a = {
  [w.Colon]: "%3A",
  [w.Slash]: "%2F",
  [w.QuestionMark]: "%3F",
  [w.Hash]: "%23",
  [w.OpenSquareBracket]: "%5B",
  [w.CloseSquareBracket]: "%5D",
  [w.AtSign]: "%40",
  [w.ExclamationMark]: "%21",
  [w.DollarSign]: "%24",
  [w.Ampersand]: "%26",
  [w.SingleQuote]: "%27",
  [w.OpenParen]: "%28",
  [w.CloseParen]: "%29",
  [w.Asterisk]: "%2A",
  [w.Plus]: "%2B",
  [w.Comma]: "%2C",
  [w.Semicolon]: "%3B",
  [w.Equals]: "%3D",
  [w.Space]: "%20"
};
function Wi(e, t, n) {
  let i, r = -1;
  for (let s = 0; s < e.length; s++) {
    const a = e.charCodeAt(s);
    if (a >= w.a && a <= w.z || a >= w.A && a <= w.Z || a >= w.Digit0 && a <= w.Digit9 || a === w.Dash || a === w.Period || a === w.Underline || a === w.Tilde || t && a === w.Slash || n && a === w.OpenSquareBracket || n && a === w.CloseSquareBracket || n && a === w.Colon)
      r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i !== void 0 && (i += e.charAt(s));
    else {
      i === void 0 && (i = e.substr(0, s));
      const u = _a[a];
      u !== void 0 ? (r !== -1 && (i += encodeURIComponent(e.substring(r, s)), r = -1), i += u) : r === -1 && (r = s);
    }
  }
  return r !== -1 && (i += encodeURIComponent(e.substring(r))), i !== void 0 ? i : e;
}
function yu(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    const i = e.charCodeAt(n);
    i === w.Hash || i === w.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += _a[i]) : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function An(e, t) {
  let n;
  return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === w.Slash && (e.path.charCodeAt(1) >= w.A && e.path.charCodeAt(1) <= w.Z || e.path.charCodeAt(1) >= w.a && e.path.charCodeAt(1) <= w.z) && e.path.charCodeAt(2) === w.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, It && (n = n.replace(/\//g, "\\")), n;
}
function ni(e, t) {
  const n = t ? yu : Wi;
  let i = "", { scheme: r, authority: s, path: a, query: u, fragment: o } = e;
  if (r && (i += r, i += ":"), (s || r === "file") && (i += Ie, i += Ie), s) {
    let c = s.indexOf("@");
    if (c !== -1) {
      const m = s.substr(0, c);
      s = s.substr(c + 1), c = m.lastIndexOf(":"), c === -1 ? i += n(m, !1, !1) : (i += n(m.substr(0, c), !1, !1), i += ":", i += n(m.substr(c + 1), !1, !0)), i += "@";
    }
    s = s.toLowerCase(), c = s.lastIndexOf(":"), c === -1 ? i += n(s, !1, !0) : (i += n(s.substr(0, c), !1, !0), i += s.substr(c));
  }
  if (a) {
    if (a.length >= 3 && a.charCodeAt(0) === w.Slash && a.charCodeAt(2) === w.Colon) {
      const c = a.charCodeAt(1);
      c >= w.A && c <= w.Z && (a = `/${String.fromCharCode(c + 32)}:${a.substr(3)}`);
    } else if (a.length >= 2 && a.charCodeAt(1) === w.Colon) {
      const c = a.charCodeAt(0);
      c >= w.A && c <= w.Z && (a = `${String.fromCharCode(c + 32)}:${a.substr(2)}`);
    }
    i += n(a, !0, !1);
  }
  return u && (i += "?", i += n(u, !1, !1)), o && (i += "#", i += t ? o : Wi(o, !1, !1)), i;
}
function pa(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + pa(e.substr(3)) : e;
  }
}
const Gi = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function ln(e) {
  return e.match(Gi) ? e.replace(Gi, (t) => pa(t)) : e;
}
var et;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(et || (et = {}));
class Ae extends D {
  constructor(t, n, i, r) {
    super(t, n, i, r), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = i, this.positionColumn = r;
  }
  toString() {
    return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
  }
  equalsSelection(t) {
    return Ae.selectionsEqual(this, t);
  }
  static selectionsEqual(t, n) {
    return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
  }
  getDirection() {
    return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? et.LTR : et.RTL;
  }
  setEndPosition(t, n) {
    return this.getDirection() === et.LTR ? new Ae(this.startLineNumber, this.startColumn, t, n) : new Ae(t, n, this.startLineNumber, this.startColumn);
  }
  getPosition() {
    return new j(this.positionLineNumber, this.positionColumn);
  }
  getSelectionStart() {
    return new j(this.selectionStartLineNumber, this.selectionStartColumn);
  }
  setStartPosition(t, n) {
    return this.getDirection() === et.LTR ? new Ae(t, n, this.endLineNumber, this.endColumn) : new Ae(this.endLineNumber, this.endColumn, t, n);
  }
  static fromPositions(t, n = t) {
    return new Ae(t.lineNumber, t.column, n.lineNumber, n.column);
  }
  static fromRange(t, n) {
    return n === et.LTR ? new Ae(
      t.startLineNumber,
      t.startColumn,
      t.endLineNumber,
      t.endColumn
    ) : new Ae(
      t.endLineNumber,
      t.endColumn,
      t.startLineNumber,
      t.startColumn
    );
  }
  static liftSelection(t) {
    return new Ae(
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
    return s === et.LTR ? new Ae(t, n, i, r) : new Ae(i, r, t, n);
  }
}
const $i = /* @__PURE__ */ Object.create(null);
function l(e, t) {
  if (Ca(t)) {
    const n = $i[t];
    if (n === void 0)
      throw new Error(`${e} references an unknown codicon: ${t}`);
    t = n;
  }
  return $i[e] = t, { id: e };
}
const Tu = {
  add: l("add", 6e4),
  plus: l("plus", 6e4),
  gistNew: l("gist-new", 6e4),
  repoCreate: l("repo-create", 6e4),
  lightbulb: l("lightbulb", 60001),
  lightBulb: l("light-bulb", 60001),
  repo: l("repo", 60002),
  repoDelete: l("repo-delete", 60002),
  gistFork: l("gist-fork", 60003),
  repoForked: l("repo-forked", 60003),
  gitPullRequest: l("git-pull-request", 60004),
  gitPullRequestAbandoned: l("git-pull-request-abandoned", 60004),
  recordKeys: l("record-keys", 60005),
  keyboard: l("keyboard", 60005),
  tag: l("tag", 60006),
  gitPullRequestLabel: l("git-pull-request-label", 60006),
  tagAdd: l("tag-add", 60006),
  tagRemove: l("tag-remove", 60006),
  person: l("person", 60007),
  personFollow: l("person-follow", 60007),
  personOutline: l("person-outline", 60007),
  personFilled: l("person-filled", 60007),
  gitBranch: l("git-branch", 60008),
  gitBranchCreate: l("git-branch-create", 60008),
  gitBranchDelete: l("git-branch-delete", 60008),
  sourceControl: l("source-control", 60008),
  mirror: l("mirror", 60009),
  mirrorPublic: l("mirror-public", 60009),
  star: l("star", 60010),
  starAdd: l("star-add", 60010),
  starDelete: l("star-delete", 60010),
  starEmpty: l("star-empty", 60010),
  comment: l("comment", 60011),
  commentAdd: l("comment-add", 60011),
  alert: l("alert", 60012),
  warning: l("warning", 60012),
  search: l("search", 60013),
  searchSave: l("search-save", 60013),
  logOut: l("log-out", 60014),
  signOut: l("sign-out", 60014),
  logIn: l("log-in", 60015),
  signIn: l("sign-in", 60015),
  eye: l("eye", 60016),
  eyeUnwatch: l("eye-unwatch", 60016),
  eyeWatch: l("eye-watch", 60016),
  circleFilled: l("circle-filled", 60017),
  primitiveDot: l("primitive-dot", 60017),
  closeDirty: l("close-dirty", 60017),
  debugBreakpoint: l("debug-breakpoint", 60017),
  debugBreakpointDisabled: l("debug-breakpoint-disabled", 60017),
  debugHint: l("debug-hint", 60017),
  terminalDecorationSuccess: l("terminal-decoration-success", 60017),
  primitiveSquare: l("primitive-square", 60018),
  edit: l("edit", 60019),
  pencil: l("pencil", 60019),
  info: l("info", 60020),
  issueOpened: l("issue-opened", 60020),
  gistPrivate: l("gist-private", 60021),
  gitForkPrivate: l("git-fork-private", 60021),
  lock: l("lock", 60021),
  mirrorPrivate: l("mirror-private", 60021),
  close: l("close", 60022),
  removeClose: l("remove-close", 60022),
  x: l("x", 60022),
  repoSync: l("repo-sync", 60023),
  sync: l("sync", 60023),
  clone: l("clone", 60024),
  desktopDownload: l("desktop-download", 60024),
  beaker: l("beaker", 60025),
  microscope: l("microscope", 60025),
  vm: l("vm", 60026),
  deviceDesktop: l("device-desktop", 60026),
  file: l("file", 60027),
  fileText: l("file-text", 60027),
  more: l("more", 60028),
  ellipsis: l("ellipsis", 60028),
  kebabHorizontal: l("kebab-horizontal", 60028),
  mailReply: l("mail-reply", 60029),
  reply: l("reply", 60029),
  organization: l("organization", 60030),
  organizationFilled: l("organization-filled", 60030),
  organizationOutline: l("organization-outline", 60030),
  newFile: l("new-file", 60031),
  fileAdd: l("file-add", 60031),
  newFolder: l("new-folder", 60032),
  fileDirectoryCreate: l("file-directory-create", 60032),
  trash: l("trash", 60033),
  trashcan: l("trashcan", 60033),
  history: l("history", 60034),
  clock: l("clock", 60034),
  folder: l("folder", 60035),
  fileDirectory: l("file-directory", 60035),
  symbolFolder: l("symbol-folder", 60035),
  logoGithub: l("logo-github", 60036),
  markGithub: l("mark-github", 60036),
  github: l("github", 60036),
  terminal: l("terminal", 60037),
  console: l("console", 60037),
  repl: l("repl", 60037),
  zap: l("zap", 60038),
  symbolEvent: l("symbol-event", 60038),
  error: l("error", 60039),
  stop: l("stop", 60039),
  variable: l("variable", 60040),
  symbolVariable: l("symbol-variable", 60040),
  array: l("array", 60042),
  symbolArray: l("symbol-array", 60042),
  symbolModule: l("symbol-module", 60043),
  symbolPackage: l("symbol-package", 60043),
  symbolNamespace: l("symbol-namespace", 60043),
  symbolObject: l("symbol-object", 60043),
  symbolMethod: l("symbol-method", 60044),
  symbolFunction: l("symbol-function", 60044),
  symbolConstructor: l("symbol-constructor", 60044),
  symbolBoolean: l("symbol-boolean", 60047),
  symbolNull: l("symbol-null", 60047),
  symbolNumeric: l("symbol-numeric", 60048),
  symbolNumber: l("symbol-number", 60048),
  symbolStructure: l("symbol-structure", 60049),
  symbolStruct: l("symbol-struct", 60049),
  symbolParameter: l("symbol-parameter", 60050),
  symbolTypeParameter: l("symbol-type-parameter", 60050),
  symbolKey: l("symbol-key", 60051),
  symbolText: l("symbol-text", 60051),
  symbolReference: l("symbol-reference", 60052),
  goToFile: l("go-to-file", 60052),
  symbolEnum: l("symbol-enum", 60053),
  symbolValue: l("symbol-value", 60053),
  symbolRuler: l("symbol-ruler", 60054),
  symbolUnit: l("symbol-unit", 60054),
  activateBreakpoints: l("activate-breakpoints", 60055),
  archive: l("archive", 60056),
  arrowBoth: l("arrow-both", 60057),
  arrowDown: l("arrow-down", 60058),
  arrowLeft: l("arrow-left", 60059),
  arrowRight: l("arrow-right", 60060),
  arrowSmallDown: l("arrow-small-down", 60061),
  arrowSmallLeft: l("arrow-small-left", 60062),
  arrowSmallRight: l("arrow-small-right", 60063),
  arrowSmallUp: l("arrow-small-up", 60064),
  arrowUp: l("arrow-up", 60065),
  bell: l("bell", 60066),
  bold: l("bold", 60067),
  book: l("book", 60068),
  bookmark: l("bookmark", 60069),
  debugBreakpointConditionalUnverified: l("debug-breakpoint-conditional-unverified", 60070),
  debugBreakpointConditional: l("debug-breakpoint-conditional", 60071),
  debugBreakpointConditionalDisabled: l("debug-breakpoint-conditional-disabled", 60071),
  debugBreakpointDataUnverified: l("debug-breakpoint-data-unverified", 60072),
  debugBreakpointData: l("debug-breakpoint-data", 60073),
  debugBreakpointDataDisabled: l("debug-breakpoint-data-disabled", 60073),
  debugBreakpointLogUnverified: l("debug-breakpoint-log-unverified", 60074),
  debugBreakpointLog: l("debug-breakpoint-log", 60075),
  debugBreakpointLogDisabled: l("debug-breakpoint-log-disabled", 60075),
  briefcase: l("briefcase", 60076),
  broadcast: l("broadcast", 60077),
  browser: l("browser", 60078),
  bug: l("bug", 60079),
  calendar: l("calendar", 60080),
  caseSensitive: l("case-sensitive", 60081),
  check: l("check", 60082),
  checklist: l("checklist", 60083),
  chevronDown: l("chevron-down", 60084),
  chevronLeft: l("chevron-left", 60085),
  chevronRight: l("chevron-right", 60086),
  chevronUp: l("chevron-up", 60087),
  chromeClose: l("chrome-close", 60088),
  chromeMaximize: l("chrome-maximize", 60089),
  chromeMinimize: l("chrome-minimize", 60090),
  chromeRestore: l("chrome-restore", 60091),
  circleOutline: l("circle-outline", 60092),
  circle: l("circle", 60092),
  debugBreakpointUnverified: l("debug-breakpoint-unverified", 60092),
  terminalDecorationIncomplete: l("terminal-decoration-incomplete", 60092),
  circleSlash: l("circle-slash", 60093),
  circuitBoard: l("circuit-board", 60094),
  clearAll: l("clear-all", 60095),
  clippy: l("clippy", 60096),
  closeAll: l("close-all", 60097),
  cloudDownload: l("cloud-download", 60098),
  cloudUpload: l("cloud-upload", 60099),
  code: l("code", 60100),
  collapseAll: l("collapse-all", 60101),
  colorMode: l("color-mode", 60102),
  commentDiscussion: l("comment-discussion", 60103),
  creditCard: l("credit-card", 60105),
  dash: l("dash", 60108),
  dashboard: l("dashboard", 60109),
  database: l("database", 60110),
  debugContinue: l("debug-continue", 60111),
  debugDisconnect: l("debug-disconnect", 60112),
  debugPause: l("debug-pause", 60113),
  debugRestart: l("debug-restart", 60114),
  debugStart: l("debug-start", 60115),
  debugStepInto: l("debug-step-into", 60116),
  debugStepOut: l("debug-step-out", 60117),
  debugStepOver: l("debug-step-over", 60118),
  debugStop: l("debug-stop", 60119),
  debug: l("debug", 60120),
  deviceCameraVideo: l("device-camera-video", 60121),
  deviceCamera: l("device-camera", 60122),
  deviceMobile: l("device-mobile", 60123),
  diffAdded: l("diff-added", 60124),
  diffIgnored: l("diff-ignored", 60125),
  diffModified: l("diff-modified", 60126),
  diffRemoved: l("diff-removed", 60127),
  diffRenamed: l("diff-renamed", 60128),
  diff: l("diff", 60129),
  diffSidebyside: l("diff-sidebyside", 60129),
  discard: l("discard", 60130),
  editorLayout: l("editor-layout", 60131),
  emptyWindow: l("empty-window", 60132),
  exclude: l("exclude", 60133),
  extensions: l("extensions", 60134),
  eyeClosed: l("eye-closed", 60135),
  fileBinary: l("file-binary", 60136),
  fileCode: l("file-code", 60137),
  fileMedia: l("file-media", 60138),
  filePdf: l("file-pdf", 60139),
  fileSubmodule: l("file-submodule", 60140),
  fileSymlinkDirectory: l("file-symlink-directory", 60141),
  fileSymlinkFile: l("file-symlink-file", 60142),
  fileZip: l("file-zip", 60143),
  files: l("files", 60144),
  filter: l("filter", 60145),
  flame: l("flame", 60146),
  foldDown: l("fold-down", 60147),
  foldUp: l("fold-up", 60148),
  fold: l("fold", 60149),
  folderActive: l("folder-active", 60150),
  folderOpened: l("folder-opened", 60151),
  gear: l("gear", 60152),
  gift: l("gift", 60153),
  gistSecret: l("gist-secret", 60154),
  gist: l("gist", 60155),
  gitCommit: l("git-commit", 60156),
  gitCompare: l("git-compare", 60157),
  compareChanges: l("compare-changes", 60157),
  gitMerge: l("git-merge", 60158),
  githubAction: l("github-action", 60159),
  githubAlt: l("github-alt", 60160),
  globe: l("globe", 60161),
  grabber: l("grabber", 60162),
  graph: l("graph", 60163),
  gripper: l("gripper", 60164),
  heart: l("heart", 60165),
  home: l("home", 60166),
  horizontalRule: l("horizontal-rule", 60167),
  hubot: l("hubot", 60168),
  inbox: l("inbox", 60169),
  issueReopened: l("issue-reopened", 60171),
  issues: l("issues", 60172),
  italic: l("italic", 60173),
  jersey: l("jersey", 60174),
  json: l("json", 60175),
  kebabVertical: l("kebab-vertical", 60176),
  key: l("key", 60177),
  law: l("law", 60178),
  lightbulbAutofix: l("lightbulb-autofix", 60179),
  linkExternal: l("link-external", 60180),
  link: l("link", 60181),
  listOrdered: l("list-ordered", 60182),
  listUnordered: l("list-unordered", 60183),
  liveShare: l("live-share", 60184),
  loading: l("loading", 60185),
  location: l("location", 60186),
  mailRead: l("mail-read", 60187),
  mail: l("mail", 60188),
  markdown: l("markdown", 60189),
  megaphone: l("megaphone", 60190),
  mention: l("mention", 60191),
  milestone: l("milestone", 60192),
  gitPullRequestMilestone: l("git-pull-request-milestone", 60192),
  mortarBoard: l("mortar-board", 60193),
  move: l("move", 60194),
  multipleWindows: l("multiple-windows", 60195),
  mute: l("mute", 60196),
  noNewline: l("no-newline", 60197),
  note: l("note", 60198),
  octoface: l("octoface", 60199),
  openPreview: l("open-preview", 60200),
  package: l("package", 60201),
  paintcan: l("paintcan", 60202),
  pin: l("pin", 60203),
  play: l("play", 60204),
  run: l("run", 60204),
  plug: l("plug", 60205),
  preserveCase: l("preserve-case", 60206),
  preview: l("preview", 60207),
  project: l("project", 60208),
  pulse: l("pulse", 60209),
  question: l("question", 60210),
  quote: l("quote", 60211),
  radioTower: l("radio-tower", 60212),
  reactions: l("reactions", 60213),
  references: l("references", 60214),
  refresh: l("refresh", 60215),
  regex: l("regex", 60216),
  remoteExplorer: l("remote-explorer", 60217),
  remote: l("remote", 60218),
  remove: l("remove", 60219),
  replaceAll: l("replace-all", 60220),
  replace: l("replace", 60221),
  repoClone: l("repo-clone", 60222),
  repoForcePush: l("repo-force-push", 60223),
  repoPull: l("repo-pull", 60224),
  repoPush: l("repo-push", 60225),
  report: l("report", 60226),
  requestChanges: l("request-changes", 60227),
  rocket: l("rocket", 60228),
  rootFolderOpened: l("root-folder-opened", 60229),
  rootFolder: l("root-folder", 60230),
  rss: l("rss", 60231),
  ruby: l("ruby", 60232),
  saveAll: l("save-all", 60233),
  saveAs: l("save-as", 60234),
  save: l("save", 60235),
  screenFull: l("screen-full", 60236),
  screenNormal: l("screen-normal", 60237),
  searchStop: l("search-stop", 60238),
  server: l("server", 60240),
  settingsGear: l("settings-gear", 60241),
  settings: l("settings", 60242),
  shield: l("shield", 60243),
  smiley: l("smiley", 60244),
  sortPrecedence: l("sort-precedence", 60245),
  splitHorizontal: l("split-horizontal", 60246),
  splitVertical: l("split-vertical", 60247),
  squirrel: l("squirrel", 60248),
  starFull: l("star-full", 60249),
  starHalf: l("star-half", 60250),
  symbolClass: l("symbol-class", 60251),
  symbolColor: l("symbol-color", 60252),
  symbolConstant: l("symbol-constant", 60253),
  symbolEnumMember: l("symbol-enum-member", 60254),
  symbolField: l("symbol-field", 60255),
  symbolFile: l("symbol-file", 60256),
  symbolInterface: l("symbol-interface", 60257),
  symbolKeyword: l("symbol-keyword", 60258),
  symbolMisc: l("symbol-misc", 60259),
  symbolOperator: l("symbol-operator", 60260),
  symbolProperty: l("symbol-property", 60261),
  wrench: l("wrench", 60261),
  wrenchSubaction: l("wrench-subaction", 60261),
  symbolSnippet: l("symbol-snippet", 60262),
  tasklist: l("tasklist", 60263),
  telescope: l("telescope", 60264),
  textSize: l("text-size", 60265),
  threeBars: l("three-bars", 60266),
  thumbsdown: l("thumbsdown", 60267),
  thumbsup: l("thumbsup", 60268),
  tools: l("tools", 60269),
  triangleDown: l("triangle-down", 60270),
  triangleLeft: l("triangle-left", 60271),
  triangleRight: l("triangle-right", 60272),
  triangleUp: l("triangle-up", 60273),
  twitter: l("twitter", 60274),
  unfold: l("unfold", 60275),
  unlock: l("unlock", 60276),
  unmute: l("unmute", 60277),
  unverified: l("unverified", 60278),
  verified: l("verified", 60279),
  versions: l("versions", 60280),
  vmActive: l("vm-active", 60281),
  vmOutline: l("vm-outline", 60282),
  vmRunning: l("vm-running", 60283),
  watch: l("watch", 60284),
  whitespace: l("whitespace", 60285),
  wholeWord: l("whole-word", 60286),
  window: l("window", 60287),
  wordWrap: l("word-wrap", 60288),
  zoomIn: l("zoom-in", 60289),
  zoomOut: l("zoom-out", 60290),
  listFilter: l("list-filter", 60291),
  listFlat: l("list-flat", 60292),
  listSelection: l("list-selection", 60293),
  selection: l("selection", 60293),
  listTree: l("list-tree", 60294),
  debugBreakpointFunctionUnverified: l("debug-breakpoint-function-unverified", 60295),
  debugBreakpointFunction: l("debug-breakpoint-function", 60296),
  debugBreakpointFunctionDisabled: l("debug-breakpoint-function-disabled", 60296),
  debugStackframeActive: l("debug-stackframe-active", 60297),
  circleSmallFilled: l("circle-small-filled", 60298),
  debugStackframeDot: l("debug-stackframe-dot", 60298),
  terminalDecorationMark: l("terminal-decoration-mark", 60298),
  debugStackframe: l("debug-stackframe", 60299),
  debugStackframeFocused: l("debug-stackframe-focused", 60299),
  debugBreakpointUnsupported: l("debug-breakpoint-unsupported", 60300),
  symbolString: l("symbol-string", 60301),
  debugReverseContinue: l("debug-reverse-continue", 60302),
  debugStepBack: l("debug-step-back", 60303),
  debugRestartFrame: l("debug-restart-frame", 60304),
  debugAlt: l("debug-alt", 60305),
  callIncoming: l("call-incoming", 60306),
  callOutgoing: l("call-outgoing", 60307),
  menu: l("menu", 60308),
  expandAll: l("expand-all", 60309),
  feedback: l("feedback", 60310),
  gitPullRequestReviewer: l("git-pull-request-reviewer", 60310),
  groupByRefType: l("group-by-ref-type", 60311),
  ungroupByRefType: l("ungroup-by-ref-type", 60312),
  account: l("account", 60313),
  gitPullRequestAssignee: l("git-pull-request-assignee", 60313),
  bellDot: l("bell-dot", 60314),
  debugConsole: l("debug-console", 60315),
  library: l("library", 60316),
  output: l("output", 60317),
  runAll: l("run-all", 60318),
  syncIgnored: l("sync-ignored", 60319),
  pinned: l("pinned", 60320),
  githubInverted: l("github-inverted", 60321),
  serverProcess: l("server-process", 60322),
  serverEnvironment: l("server-environment", 60323),
  pass: l("pass", 60324),
  issueClosed: l("issue-closed", 60324),
  stopCircle: l("stop-circle", 60325),
  playCircle: l("play-circle", 60326),
  record: l("record", 60327),
  debugAltSmall: l("debug-alt-small", 60328),
  vmConnect: l("vm-connect", 60329),
  cloud: l("cloud", 60330),
  merge: l("merge", 60331),
  export: l("export", 60332),
  graphLeft: l("graph-left", 60333),
  magnet: l("magnet", 60334),
  notebook: l("notebook", 60335),
  redo: l("redo", 60336),
  checkAll: l("check-all", 60337),
  pinnedDirty: l("pinned-dirty", 60338),
  passFilled: l("pass-filled", 60339),
  circleLargeFilled: l("circle-large-filled", 60340),
  circleLarge: l("circle-large", 60341),
  circleLargeOutline: l("circle-large-outline", 60341),
  combine: l("combine", 60342),
  gather: l("gather", 60342),
  table: l("table", 60343),
  variableGroup: l("variable-group", 60344),
  typeHierarchy: l("type-hierarchy", 60345),
  typeHierarchySub: l("type-hierarchy-sub", 60346),
  typeHierarchySuper: l("type-hierarchy-super", 60347),
  gitPullRequestCreate: l("git-pull-request-create", 60348),
  runAbove: l("run-above", 60349),
  runBelow: l("run-below", 60350),
  notebookTemplate: l("notebook-template", 60351),
  debugRerun: l("debug-rerun", 60352),
  workspaceTrusted: l("workspace-trusted", 60353),
  workspaceUntrusted: l("workspace-untrusted", 60354),
  workspaceUnknown: l("workspace-unknown", 60355),
  terminalCmd: l("terminal-cmd", 60356),
  terminalDebian: l("terminal-debian", 60357),
  terminalLinux: l("terminal-linux", 60358),
  terminalPowershell: l("terminal-powershell", 60359),
  terminalTmux: l("terminal-tmux", 60360),
  terminalUbuntu: l("terminal-ubuntu", 60361),
  terminalBash: l("terminal-bash", 60362),
  arrowSwap: l("arrow-swap", 60363),
  copy: l("copy", 60364),
  personAdd: l("person-add", 60365),
  filterFilled: l("filter-filled", 60366),
  wand: l("wand", 60367),
  debugLineByLine: l("debug-line-by-line", 60368),
  inspect: l("inspect", 60369),
  layers: l("layers", 60370),
  layersDot: l("layers-dot", 60371),
  layersActive: l("layers-active", 60372),
  compass: l("compass", 60373),
  compassDot: l("compass-dot", 60374),
  compassActive: l("compass-active", 60375),
  azure: l("azure", 60376),
  issueDraft: l("issue-draft", 60377),
  gitPullRequestClosed: l("git-pull-request-closed", 60378),
  gitPullRequestDraft: l("git-pull-request-draft", 60379),
  debugAll: l("debug-all", 60380),
  debugCoverage: l("debug-coverage", 60381),
  runErrors: l("run-errors", 60382),
  folderLibrary: l("folder-library", 60383),
  debugContinueSmall: l("debug-continue-small", 60384),
  beakerStop: l("beaker-stop", 60385),
  graphLine: l("graph-line", 60386),
  graphScatter: l("graph-scatter", 60387),
  pieChart: l("pie-chart", 60388),
  bracket: l("bracket", 60175),
  bracketDot: l("bracket-dot", 60389),
  bracketError: l("bracket-error", 60390),
  lockSmall: l("lock-small", 60391),
  azureDevops: l("azure-devops", 60392),
  verifiedFilled: l("verified-filled", 60393),
  newline: l("newline", 60394),
  layout: l("layout", 60395),
  layoutActivitybarLeft: l("layout-activitybar-left", 60396),
  layoutActivitybarRight: l("layout-activitybar-right", 60397),
  layoutPanelLeft: l("layout-panel-left", 60398),
  layoutPanelCenter: l("layout-panel-center", 60399),
  layoutPanelJustify: l("layout-panel-justify", 60400),
  layoutPanelRight: l("layout-panel-right", 60401),
  layoutPanel: l("layout-panel", 60402),
  layoutSidebarLeft: l("layout-sidebar-left", 60403),
  layoutSidebarRight: l("layout-sidebar-right", 60404),
  layoutStatusbar: l("layout-statusbar", 60405),
  layoutMenubar: l("layout-menubar", 60406),
  layoutCentered: l("layout-centered", 60407),
  target: l("target", 60408),
  indent: l("indent", 60409),
  recordSmall: l("record-small", 60410),
  errorSmall: l("error-small", 60411),
  terminalDecorationError: l("terminal-decoration-error", 60411),
  arrowCircleDown: l("arrow-circle-down", 60412),
  arrowCircleLeft: l("arrow-circle-left", 60413),
  arrowCircleRight: l("arrow-circle-right", 60414),
  arrowCircleUp: l("arrow-circle-up", 60415),
  layoutSidebarRightOff: l("layout-sidebar-right-off", 60416),
  layoutPanelOff: l("layout-panel-off", 60417),
  layoutSidebarLeftOff: l("layout-sidebar-left-off", 60418),
  blank: l("blank", 60419),
  heartFilled: l("heart-filled", 60420),
  map: l("map", 60421),
  mapHorizontal: l("map-horizontal", 60421),
  foldHorizontal: l("fold-horizontal", 60421),
  mapFilled: l("map-filled", 60422),
  mapHorizontalFilled: l("map-horizontal-filled", 60422),
  foldHorizontalFilled: l("fold-horizontal-filled", 60422),
  circleSmall: l("circle-small", 60423),
  bellSlash: l("bell-slash", 60424),
  bellSlashDot: l("bell-slash-dot", 60425),
  commentUnresolved: l("comment-unresolved", 60426),
  gitPullRequestGoToChanges: l("git-pull-request-go-to-changes", 60427),
  gitPullRequestNewChanges: l("git-pull-request-new-changes", 60428),
  searchFuzzy: l("search-fuzzy", 60429),
  commentDraft: l("comment-draft", 60430),
  send: l("send", 60431),
  sparkle: l("sparkle", 60432),
  insert: l("insert", 60433),
  mic: l("mic", 60434),
  thumbsdownFilled: l("thumbsdown-filled", 60435),
  thumbsupFilled: l("thumbsup-filled", 60436),
  coffee: l("coffee", 60437),
  snake: l("snake", 60438),
  game: l("game", 60439),
  vr: l("vr", 60440),
  chip: l("chip", 60441),
  piano: l("piano", 60442),
  music: l("music", 60443),
  micFilled: l("mic-filled", 60444),
  repoFetch: l("repo-fetch", 60445),
  copilot: l("copilot", 60446),
  lightbulbSparkle: l("lightbulb-sparkle", 60447),
  robot: l("robot", 60448),
  sparkleFilled: l("sparkle-filled", 60449),
  diffSingle: l("diff-single", 60450),
  diffMultiple: l("diff-multiple", 60451),
  surroundWith: l("surround-with", 60452),
  share: l("share", 60453),
  gitStash: l("git-stash", 60454),
  gitStashApply: l("git-stash-apply", 60455),
  gitStashPop: l("git-stash-pop", 60456),
  vscode: l("vscode", 60457),
  vscodeInsiders: l("vscode-insiders", 60458),
  codeOss: l("code-oss", 60459),
  runCoverage: l("run-coverage", 60460),
  runAllCoverage: l("run-all-coverage", 60461),
  coverage: l("coverage", 60462),
  githubProject: l("github-project", 60463),
  mapVertical: l("map-vertical", 60464),
  foldVertical: l("fold-vertical", 60464),
  mapVerticalFilled: l("map-vertical-filled", 60465),
  foldVerticalFilled: l("fold-vertical-filled", 60465),
  goToSearch: l("go-to-search", 60466),
  percentage: l("percentage", 60467),
  sortPercentage: l("sort-percentage", 60467),
  attach: l("attach", 60468),
  goToEditingSession: l("go-to-editing-session", 60469),
  editSession: l("edit-session", 60470),
  codeReview: l("code-review", 60471),
  copilotWarning: l("copilot-warning", 60472),
  python: l("python", 60473),
  copilotLarge: l("copilot-large", 60474),
  copilotWarningLarge: l("copilot-warning-large", 60475),
  keyboardTab: l("keyboard-tab", 60476),
  copilotBlocked: l("copilot-blocked", 60477),
  copilotNotConnected: l("copilot-not-connected", 60478),
  flag: l("flag", 60479),
  lightbulbEmpty: l("lightbulb-empty", 60480),
  symbolMethodArrow: l("symbol-method-arrow", 60481),
  copilotUnavailable: l("copilot-unavailable", 60482),
  repoPinned: l("repo-pinned", 60483),
  keyboardTabAbove: l("keyboard-tab-above", 60484),
  keyboardTabBelow: l("keyboard-tab-below", 60485),
  gitPullRequestDone: l("git-pull-request-done", 60486),
  mcp: l("mcp", 60487),
  extensionsLarge: l("extensions-large", 60488),
  layoutPanelDock: l("layout-panel-dock", 60489),
  layoutSidebarLeftDock: l("layout-sidebar-left-dock", 60490),
  layoutSidebarRightDock: l("layout-sidebar-right-dock", 60491),
  copilotInProgress: l("copilot-in-progress", 60492),
  copilotError: l("copilot-error", 60493),
  copilotSuccess: l("copilot-success", 60494),
  chatSparkle: l("chat-sparkle", 60495),
  searchSparkle: l("search-sparkle", 60496),
  editSparkle: l("edit-sparkle", 60497),
  copilotSnooze: l("copilot-snooze", 60498),
  sendToRemoteAgent: l("send-to-remote-agent", 60499)
}, Mu = {
  dialogError: l("dialog-error", "error"),
  dialogWarning: l("dialog-warning", "warning"),
  dialogInfo: l("dialog-info", "info"),
  dialogClose: l("dialog-close", "close"),
  treeItemExpanded: l("tree-item-expanded", "chevron-down"),
  treeFilterOnTypeOn: l("tree-filter-on-type-on", "list-filter"),
  treeFilterOnTypeOff: l("tree-filter-on-type-off", "list-selection"),
  treeFilterClear: l("tree-filter-clear", "close"),
  treeItemLoading: l("tree-item-loading", "loading"),
  menuSelection: l("menu-selection", "check"),
  menuSubmenu: l("menu-submenu", "chevron-right"),
  menuBarMore: l("menubar-more", "more"),
  scrollbarButtonLeft: l("scrollbar-button-left", "triangle-left"),
  scrollbarButtonRight: l("scrollbar-button-right", "triangle-right"),
  scrollbarButtonUp: l("scrollbar-button-up", "triangle-up"),
  scrollbarButtonDown: l("scrollbar-button-down", "triangle-down"),
  toolBarMore: l("toolbar-more", "more"),
  quickInputBack: l("quick-input-back", "arrow-left"),
  dropDownButton: l("drop-down-button", 60084),
  symbolCustomColor: l("symbol-customcolor", 60252),
  exportIcon: l("export", 60332),
  workspaceUnspecified: l("workspace-unspecified", 60355),
  newLine: l("newline", 60394),
  thumbsDownFilled: l("thumbsdown-filled", 60435),
  thumbsUpFilled: l("thumbsup-filled", 60436),
  gitFetch: l("git-fetch", 60445),
  lightbulbSparkleAutofix: l("lightbulb-sparkle-autofix", 60447),
  debugBreakpointPending: l("debug-breakpoint-pending", 60377)
}, O = {
  ...Tu,
  ...Mu
};
var zi;
(function(e) {
  e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(zi || (zi = {}));
var ji;
(function(e) {
  e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(ji || (ji = {}));
var vn;
(function(e) {
  e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(vn || (vn = {}));
var Xi;
(function(e) {
  e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(Xi || (Xi = {}));
var Yi;
(function(e) {
  e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(Yi || (Yi = {}));
class Uu {
  constructor() {
    this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new ye(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
  }
  handleChange(t) {
    this._onDidChange.fire({
      changedLanguages: t,
      changedColorMap: !1
    });
  }
  register(t, n) {
    return this._tokenizationSupports.set(t, n), this.handleChange([t]), Jt(() => {
      this._tokenizationSupports.get(t) === n && (this._tokenizationSupports.delete(t), this.handleChange([t]));
    });
  }
  get(t) {
    return this._tokenizationSupports.get(t) || null;
  }
  registerFactory(t, n) {
    var r;
    (r = this._factories.get(t)) == null || r.dispose();
    const i = new Du(this, t, n);
    return this._factories.set(t, i), Jt(() => {
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
    return this._colorMap && this._colorMap.length > vn.DefaultBackground ? this._colorMap[vn.DefaultBackground] : null;
  }
}
class Du extends St {
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
class ku {
  constructor(t, n, i) {
    this.offset = t, this.type = n, this.language = i, this._tokenBrand = void 0;
  }
  toString() {
    return "(" + this.offset + ", " + this.type + ")";
  }
}
var Qi;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Qi || (Qi = {}));
var x;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(x || (x = {}));
var Ji;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(x.Method, O.symbolMethod), t.set(x.Function, O.symbolFunction), t.set(x.Constructor, O.symbolConstructor), t.set(x.Field, O.symbolField), t.set(x.Variable, O.symbolVariable), t.set(x.Class, O.symbolClass), t.set(x.Struct, O.symbolStruct), t.set(x.Interface, O.symbolInterface), t.set(x.Module, O.symbolModule), t.set(x.Property, O.symbolProperty), t.set(x.Event, O.symbolEvent), t.set(x.Operator, O.symbolOperator), t.set(x.Unit, O.symbolUnit), t.set(x.Value, O.symbolValue), t.set(x.Enum, O.symbolEnum), t.set(x.Constant, O.symbolConstant), t.set(x.Enum, O.symbolEnum), t.set(x.EnumMember, O.symbolEnumMember), t.set(x.Keyword, O.symbolKeyword), t.set(x.Snippet, O.symbolSnippet), t.set(x.Text, O.symbolText), t.set(x.Color, O.symbolColor), t.set(x.File, O.symbolFile), t.set(x.Reference, O.symbolReference), t.set(x.Customcolor, O.symbolCustomColor), t.set(x.Folder, O.symbolFolder), t.set(x.TypeParameter, O.symbolTypeParameter), t.set(x.User, O.account), t.set(x.Issue, O.issues), t.set(x.Tool, O.tools);
  function n(a) {
    let u = t.get(a);
    return u || (console.info("No codicon found for CompletionItemKind " + a), u = O.symbolProperty), u;
  }
  e.toIcon = n;
  function i(a) {
    switch (a) {
      case x.Method:
        return H(786, "Method");
      case x.Function:
        return H(787, "Function");
      case x.Constructor:
        return H(788, "Constructor");
      case x.Field:
        return H(789, "Field");
      case x.Variable:
        return H(790, "Variable");
      case x.Class:
        return H(791, "Class");
      case x.Struct:
        return H(792, "Struct");
      case x.Interface:
        return H(793, "Interface");
      case x.Module:
        return H(794, "Module");
      case x.Property:
        return H(795, "Property");
      case x.Event:
        return H(796, "Event");
      case x.Operator:
        return H(797, "Operator");
      case x.Unit:
        return H(798, "Unit");
      case x.Value:
        return H(799, "Value");
      case x.Constant:
        return H(800, "Constant");
      case x.Enum:
        return H(801, "Enum");
      case x.EnumMember:
        return H(802, "Enum Member");
      case x.Keyword:
        return H(803, "Keyword");
      case x.Text:
        return H(804, "Text");
      case x.Color:
        return H(805, "Color");
      case x.File:
        return H(806, "File");
      case x.Reference:
        return H(807, "Reference");
      case x.Customcolor:
        return H(808, "Custom Color");
      case x.Folder:
        return H(809, "Folder");
      case x.TypeParameter:
        return H(810, "Type Parameter");
      case x.User:
        return H(811, "User");
      case x.Issue:
        return H(812, "Issue");
      case x.Tool:
        return H(813, "Tool");
      case x.Snippet:
        return H(814, "Snippet");
      default:
        return "";
    }
  }
  e.toLabel = i;
  const r = /* @__PURE__ */ new Map();
  r.set("method", x.Method), r.set("function", x.Function), r.set("constructor", x.Constructor), r.set("field", x.Field), r.set("variable", x.Variable), r.set("class", x.Class), r.set("struct", x.Struct), r.set("interface", x.Interface), r.set("module", x.Module), r.set("property", x.Property), r.set("event", x.Event), r.set("operator", x.Operator), r.set("unit", x.Unit), r.set("value", x.Value), r.set("constant", x.Constant), r.set("enum", x.Enum), r.set("enum-member", x.EnumMember), r.set("enumMember", x.EnumMember), r.set("keyword", x.Keyword), r.set("snippet", x.Snippet), r.set("text", x.Text), r.set("color", x.Color), r.set("file", x.File), r.set("reference", x.Reference), r.set("customcolor", x.Customcolor), r.set("folder", x.Folder), r.set("type-parameter", x.TypeParameter), r.set("typeParameter", x.TypeParameter), r.set("account", x.User), r.set("issue", x.Issue), r.set("tool", x.Tool);
  function s(a, u) {
    let o = r.get(a);
    return typeof o > "u" && !u && (o = x.Property), o;
  }
  e.fromString = s;
})(Ji || (Ji = {}));
var Zi;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Zi || (Zi = {}));
var Ki;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Ki || (Ki = {}));
var Ci;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(Ci || (Ci = {}));
var er;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(er || (er = {}));
var tr;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(tr || (tr = {}));
var nr;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(nr || (nr = {}));
var ir;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(ir || (ir = {}));
var rr;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(rr || (rr = {}));
var sr;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(sr || (sr = {}));
var ar;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(ar || (ar = {}));
var U;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(U || (U = {}));
U.Array + "", H(815, "array"), U.Boolean + "", H(816, "boolean"), U.Class + "", H(817, "class"), U.Constant + "", H(818, "constant"), U.Constructor + "", H(819, "constructor"), U.Enum + "", H(820, "enumeration"), U.EnumMember + "", H(821, "enumeration member"), U.Event + "", H(822, "event"), U.Field + "", H(823, "field"), U.File + "", H(824, "file"), U.Function + "", H(825, "function"), U.Interface + "", H(826, "interface"), U.Key + "", H(827, "key"), U.Method + "", H(828, "method"), U.Module + "", H(829, "module"), U.Namespace + "", H(830, "namespace"), U.Null + "", H(831, "null"), U.Number + "", H(832, "number"), U.Object + "", H(833, "object"), U.Operator + "", H(834, "operator"), U.Package + "", H(835, "package"), U.Property + "", H(836, "property"), U.String + "", H(837, "string"), U.Struct + "", H(838, "struct"), U.TypeParameter + "", H(839, "type parameter"), U.Variable + "", H(840, "variable");
var lr;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(lr || (lr = {}));
var ur;
(function(e) {
  const t = /* @__PURE__ */ new Map();
  t.set(U.File, O.symbolFile), t.set(U.Module, O.symbolModule), t.set(U.Namespace, O.symbolNamespace), t.set(U.Package, O.symbolPackage), t.set(U.Class, O.symbolClass), t.set(U.Method, O.symbolMethod), t.set(U.Property, O.symbolProperty), t.set(U.Field, O.symbolField), t.set(U.Constructor, O.symbolConstructor), t.set(U.Enum, O.symbolEnum), t.set(U.Interface, O.symbolInterface), t.set(U.Function, O.symbolFunction), t.set(U.Variable, O.symbolVariable), t.set(U.Constant, O.symbolConstant), t.set(U.String, O.symbolString), t.set(U.Number, O.symbolNumber), t.set(U.Boolean, O.symbolBoolean), t.set(U.Array, O.symbolArray), t.set(U.Object, O.symbolObject), t.set(U.Key, O.symbolKey), t.set(U.Null, O.symbolNull), t.set(U.EnumMember, O.symbolEnumMember), t.set(U.Struct, O.symbolStruct), t.set(U.Event, O.symbolEvent), t.set(U.Operator, O.symbolOperator), t.set(U.TypeParameter, O.symbolTypeParameter);
  function n(s) {
    let a = t.get(s);
    return a || (console.info("No codicon found for SymbolKind " + s), a = O.symbolProperty), a;
  }
  e.toIcon = n;
  const i = /* @__PURE__ */ new Map();
  i.set(U.File, x.File), i.set(U.Module, x.Module), i.set(U.Namespace, x.Module), i.set(U.Package, x.Module), i.set(U.Class, x.Class), i.set(U.Method, x.Method), i.set(U.Property, x.Property), i.set(U.Field, x.Field), i.set(U.Constructor, x.Constructor), i.set(U.Enum, x.Enum), i.set(U.Interface, x.Interface), i.set(U.Function, x.Function), i.set(U.Variable, x.Variable), i.set(U.Constant, x.Constant), i.set(U.String, x.Text), i.set(U.Number, x.Value), i.set(U.Boolean, x.Value), i.set(U.Array, x.Value), i.set(U.Object, x.Value), i.set(U.Key, x.Keyword), i.set(U.Null, x.Value), i.set(U.EnumMember, x.EnumMember), i.set(U.Struct, x.Struct), i.set(U.Event, x.Event), i.set(U.Operator, x.Operator), i.set(U.TypeParameter, x.TypeParameter);
  function r(s) {
    let a = i.get(s);
    return a === void 0 && (console.info("No completion kind found for SymbolKind " + s), a = x.File), a;
  }
  e.toCompletionKind = r;
})(ur || (ur = {}));
const ve = class ve {
  static fromValue(t) {
    switch (t) {
      case "comment":
        return ve.Comment;
      case "imports":
        return ve.Imports;
      case "region":
        return ve.Region;
    }
    return new ve(t);
  }
  constructor(t) {
    this.value = t;
  }
};
ve.Comment = new ve("comment"), ve.Imports = new ve("imports"), ve.Region = new ve("region");
let or = ve;
var cr;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})(cr || (cr = {}));
var mr;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(mr || (mr = {}));
var hr;
(function(e) {
  function t(n) {
    return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
  }
  e.is = t;
})(hr || (hr = {}));
var fr;
(function(e) {
  e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(fr || (fr = {}));
var gr;
(function(e) {
  e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(gr || (gr = {}));
var _r;
(function(e) {
  e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(_r || (_r = {}));
var pr;
(function(e) {
  e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(pr || (pr = {}));
var br;
(function(e) {
  e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(br || (br = {}));
var dr;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(dr || (dr = {}));
new Uu();
var wr;
(function(e) {
  e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(wr || (wr = {}));
var Lr;
(function(e) {
  e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(Lr || (Lr = {}));
var Nr;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Nr || (Nr = {}));
var xr;
(function(e) {
  e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(xr || (xr = {}));
var Rr;
(function(e) {
  e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(Rr || (Rr = {}));
var Er;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(Er || (Er = {}));
var Ar;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Ar || (Ar = {}));
var vr;
(function(e) {
  e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(vr || (vr = {}));
var yr;
(function(e) {
  e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})(yr || (yr = {}));
var Tr;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Tr || (Tr = {}));
var Mr;
(function(e) {
  e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Mr || (Mr = {}));
var Ur;
(function(e) {
  e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(Ur || (Ur = {}));
var Dr;
(function(e) {
  e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowOverflow = 4] = "allowOverflow", e[e.allowVariableLineHeights = 5] = "allowVariableLineHeights", e[e.allowVariableFonts = 6] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 7] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 8] = "ariaLabel", e[e.ariaRequired = 9] = "ariaRequired", e[e.autoClosingBrackets = 10] = "autoClosingBrackets", e[e.autoClosingComments = 11] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 12] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 13] = "autoClosingDelete", e[e.autoClosingOvertype = 14] = "autoClosingOvertype", e[e.autoClosingQuotes = 15] = "autoClosingQuotes", e[e.autoIndent = 16] = "autoIndent", e[e.autoIndentOnPaste = 17] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 18] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 19] = "automaticLayout", e[e.autoSurround = 20] = "autoSurround", e[e.bracketPairColorization = 21] = "bracketPairColorization", e[e.guides = 22] = "guides", e[e.codeLens = 23] = "codeLens", e[e.codeLensFontFamily = 24] = "codeLensFontFamily", e[e.codeLensFontSize = 25] = "codeLensFontSize", e[e.colorDecorators = 26] = "colorDecorators", e[e.colorDecoratorsLimit = 27] = "colorDecoratorsLimit", e[e.columnSelection = 28] = "columnSelection", e[e.comments = 29] = "comments", e[e.contextmenu = 30] = "contextmenu", e[e.copyWithSyntaxHighlighting = 31] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 32] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 33] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 34] = "cursorStyle", e[e.cursorSurroundingLines = 35] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 36] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 37] = "cursorWidth", e[e.cursorHeight = 38] = "cursorHeight", e[e.disableLayerHinting = 39] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 40] = "disableMonospaceOptimizations", e[e.domReadOnly = 41] = "domReadOnly", e[e.dragAndDrop = 42] = "dragAndDrop", e[e.dropIntoEditor = 43] = "dropIntoEditor", e[e.editContext = 44] = "editContext", e[e.emptySelectionClipboard = 45] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 46] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 47] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 48] = "extraEditorClassName", e[e.fastScrollSensitivity = 49] = "fastScrollSensitivity", e[e.find = 50] = "find", e[e.fixedOverflowWidgets = 51] = "fixedOverflowWidgets", e[e.folding = 52] = "folding", e[e.foldingStrategy = 53] = "foldingStrategy", e[e.foldingHighlight = 54] = "foldingHighlight", e[e.foldingImportsByDefault = 55] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 56] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 57] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 58] = "fontFamily", e[e.fontInfo = 59] = "fontInfo", e[e.fontLigatures = 60] = "fontLigatures", e[e.fontSize = 61] = "fontSize", e[e.fontWeight = 62] = "fontWeight", e[e.fontVariations = 63] = "fontVariations", e[e.formatOnPaste = 64] = "formatOnPaste", e[e.formatOnType = 65] = "formatOnType", e[e.glyphMargin = 66] = "glyphMargin", e[e.gotoLocation = 67] = "gotoLocation", e[e.hideCursorInOverviewRuler = 68] = "hideCursorInOverviewRuler", e[e.hover = 69] = "hover", e[e.inDiffEditor = 70] = "inDiffEditor", e[e.inlineSuggest = 71] = "inlineSuggest", e[e.letterSpacing = 72] = "letterSpacing", e[e.lightbulb = 73] = "lightbulb", e[e.lineDecorationsWidth = 74] = "lineDecorationsWidth", e[e.lineHeight = 75] = "lineHeight", e[e.lineNumbers = 76] = "lineNumbers", e[e.lineNumbersMinChars = 77] = "lineNumbersMinChars", e[e.linkedEditing = 78] = "linkedEditing", e[e.links = 79] = "links", e[e.matchBrackets = 80] = "matchBrackets", e[e.minimap = 81] = "minimap", e[e.mouseStyle = 82] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 83] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 84] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 85] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 86] = "multiCursorModifier", e[e.multiCursorPaste = 87] = "multiCursorPaste", e[e.multiCursorLimit = 88] = "multiCursorLimit", e[e.occurrencesHighlight = 89] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 90] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 91] = "overtypeCursorStyle", e[e.overtypeOnPaste = 92] = "overtypeOnPaste", e[e.overviewRulerBorder = 93] = "overviewRulerBorder", e[e.overviewRulerLanes = 94] = "overviewRulerLanes", e[e.padding = 95] = "padding", e[e.pasteAs = 96] = "pasteAs", e[e.parameterHints = 97] = "parameterHints", e[e.peekWidgetDefaultFocus = 98] = "peekWidgetDefaultFocus", e[e.placeholder = 99] = "placeholder", e[e.definitionLinkOpensInPeek = 100] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 101] = "quickSuggestions", e[e.quickSuggestionsDelay = 102] = "quickSuggestionsDelay", e[e.readOnly = 103] = "readOnly", e[e.readOnlyMessage = 104] = "readOnlyMessage", e[e.renameOnType = 105] = "renameOnType", e[e.renderRichScreenReaderContent = 106] = "renderRichScreenReaderContent", e[e.renderControlCharacters = 107] = "renderControlCharacters", e[e.renderFinalNewline = 108] = "renderFinalNewline", e[e.renderLineHighlight = 109] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 110] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 111] = "renderValidationDecorations", e[e.renderWhitespace = 112] = "renderWhitespace", e[e.revealHorizontalRightPadding = 113] = "revealHorizontalRightPadding", e[e.roundedSelection = 114] = "roundedSelection", e[e.rulers = 115] = "rulers", e[e.scrollbar = 116] = "scrollbar", e[e.scrollBeyondLastColumn = 117] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 118] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 119] = "scrollPredominantAxis", e[e.selectionClipboard = 120] = "selectionClipboard", e[e.selectionHighlight = 121] = "selectionHighlight", e[e.selectionHighlightMaxLength = 122] = "selectionHighlightMaxLength", e[e.selectionHighlightMultiline = 123] = "selectionHighlightMultiline", e[e.selectOnLineNumbers = 124] = "selectOnLineNumbers", e[e.showFoldingControls = 125] = "showFoldingControls", e[e.showUnused = 126] = "showUnused", e[e.snippetSuggestions = 127] = "snippetSuggestions", e[e.smartSelect = 128] = "smartSelect", e[e.smoothScrolling = 129] = "smoothScrolling", e[e.stickyScroll = 130] = "stickyScroll", e[e.stickyTabStops = 131] = "stickyTabStops", e[e.stopRenderingLineAfter = 132] = "stopRenderingLineAfter", e[e.suggest = 133] = "suggest", e[e.suggestFontSize = 134] = "suggestFontSize", e[e.suggestLineHeight = 135] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 136] = "suggestOnTriggerCharacters", e[e.suggestSelection = 137] = "suggestSelection", e[e.tabCompletion = 138] = "tabCompletion", e[e.tabIndex = 139] = "tabIndex", e[e.trimWhitespaceOnDelete = 140] = "trimWhitespaceOnDelete", e[e.unicodeHighlighting = 141] = "unicodeHighlighting", e[e.unusualLineTerminators = 142] = "unusualLineTerminators", e[e.useShadowDOM = 143] = "useShadowDOM", e[e.useTabStops = 144] = "useTabStops", e[e.wordBreak = 145] = "wordBreak", e[e.wordSegmenterLocales = 146] = "wordSegmenterLocales", e[e.wordSeparators = 147] = "wordSeparators", e[e.wordWrap = 148] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 149] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 150] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 151] = "wordWrapColumn", e[e.wordWrapOverride1 = 152] = "wordWrapOverride1", e[e.wordWrapOverride2 = 153] = "wordWrapOverride2", e[e.wrappingIndent = 154] = "wrappingIndent", e[e.wrappingStrategy = 155] = "wrappingStrategy", e[e.showDeprecated = 156] = "showDeprecated", e[e.inertialScroll = 157] = "inertialScroll", e[e.inlayHints = 158] = "inlayHints", e[e.wrapOnEscapedLineFeeds = 159] = "wrapOnEscapedLineFeeds", e[e.effectiveCursorStyle = 160] = "effectiveCursorStyle", e[e.editorClassName = 161] = "editorClassName", e[e.pixelRatio = 162] = "pixelRatio", e[e.tabFocusMode = 163] = "tabFocusMode", e[e.layoutInfo = 164] = "layoutInfo", e[e.wrappingInfo = 165] = "wrappingInfo", e[e.defaultColorDecorators = 166] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 167] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 168] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 169] = "effectiveEditContext", e[e.scrollOnMiddleClick = 170] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 171] = "effectiveAllowVariableFonts";
})(Dr || (Dr = {}));
var kr;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(kr || (kr = {}));
var Fr;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Fr || (Fr = {}));
var Sr;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(Sr || (Sr = {}));
var Ir;
(function(e) {
  e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Ir || (Ir = {}));
var Pr;
(function(e) {
  e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(Pr || (Pr = {}));
var Br;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(Br || (Br = {}));
var Or;
(function(e) {
  e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(Or || (Or = {}));
var Vr;
(function(e) {
  e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(Vr || (Vr = {}));
var qr;
(function(e) {
  e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(qr || (qr = {}));
var ii;
(function(e) {
  e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(ii || (ii = {}));
var ri;
(function(e) {
  e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(ri || (ri = {}));
var si;
(function(e) {
  e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})(si || (si = {}));
var Hr;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(Hr || (Hr = {}));
var Wr;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(Wr || (Wr = {}));
var Gr;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(Gr || (Gr = {}));
var $r;
(function(e) {
  e[e.AIGenerated = 1] = "AIGenerated";
})($r || ($r = {}));
var zr;
(function(e) {
  e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(zr || (zr = {}));
var jr;
(function(e) {
  e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(jr || (jr = {}));
var Xr;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(Xr || (Xr = {}));
var Yr;
(function(e) {
  e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(Yr || (Yr = {}));
var Qr;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(Qr || (Qr = {}));
var Jr;
(function(e) {
  e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(Jr || (Jr = {}));
var Zr;
(function(e) {
  e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(Zr || (Zr = {}));
var Kr;
(function(e) {
  e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(Kr || (Kr = {}));
var Cr;
(function(e) {
  e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(Cr || (Cr = {}));
var ai;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(ai || (ai = {}));
var es;
(function(e) {
  e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(es || (es = {}));
var ts;
(function(e) {
  e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(ts || (ts = {}));
var ns;
(function(e) {
  e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(ns || (ns = {}));
var is;
(function(e) {
  e[e.Deprecated = 1] = "Deprecated";
})(is || (is = {}));
var rs;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(rs || (rs = {}));
var ss;
(function(e) {
  e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(ss || (ss = {}));
var as;
(function(e) {
  e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(as || (as = {}));
var ls;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(ls || (ls = {}));
var us;
(function(e) {
  e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})(us || (us = {}));
const vt = class vt {
  static chord(t, n) {
    return ru(t, n);
  }
};
vt.CtrlCmd = Lt.CtrlCmd, vt.Shift = Lt.Shift, vt.Alt = Lt.Alt, vt.WinCtrl = Lt.WinCtrl;
let li = vt;
function Fu() {
  return {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Rl,
    Emitter: ye,
    KeyCode: ii,
    KeyMod: li,
    Position: j,
    Range: D,
    Selection: Ae,
    SelectionDirection: ai,
    MarkerSeverity: ri,
    MarkerTag: si,
    Uri: me,
    Token: ku
  };
}
var Pt;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(Pt || (Pt = {}));
new Qa(10);
var os;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(os || (os = {}));
var cs;
(function(e) {
  e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(cs || (cs = {}));
var ms;
(function(e) {
  e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(ms || (ms = {}));
var hs;
(function(e) {
  e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(hs || (hs = {}));
var fs;
(function(e) {
  e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(fs || (fs = {}));
var gs;
(function(e) {
  e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(gs || (gs = {}));
var _s;
(function(e) {
  e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(_s || (_s = {}));
var ps;
(function(e) {
  e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(ps || (ps = {}));
var bs;
(function(e) {
  e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(bs || (bs = {}));
var ds;
(function(e) {
  e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(ds || (ds = {}));
var ws;
(function(e) {
  e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(ws || (ws = {}));
var Ls;
(function(e) {
  e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(Ls || (Ls = {}));
function Su(e) {
  if (!e || e.length === 0)
    return !1;
  for (let t = 0, n = e.length; t < n; t++) {
    const i = e.charCodeAt(t);
    if (i === w.LineFeed)
      return !0;
    if (i === w.Backslash) {
      if (t++, t >= n)
        break;
      const r = e.charCodeAt(t);
      if (r === w.n || r === w.r || r === w.W)
        return !0;
    }
  }
  return !1;
}
function Iu(e, t, n, i, r) {
  if (i === 0)
    return !0;
  const s = t.charCodeAt(i - 1);
  if (e.get(s) !== Pt.Regular || s === w.CarriageReturn || s === w.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i);
    if (e.get(a) !== Pt.Regular)
      return !0;
  }
  return !1;
}
function Pu(e, t, n, i, r) {
  if (i + r === n)
    return !0;
  const s = t.charCodeAt(i + r);
  if (e.get(s) !== Pt.Regular || s === w.CarriageReturn || s === w.LineFeed)
    return !0;
  if (r > 0) {
    const a = t.charCodeAt(i + r - 1);
    if (e.get(a) !== Pt.Regular)
      return !0;
  }
  return !1;
}
function Bu(e, t, n, i, r) {
  return Iu(e, t, n, i, r) && Pu(e, t, n, i, r);
}
class Ou {
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
          Pl(t, n, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
          continue;
        }
        return null;
      }
      if (this._prevMatchStartIndex = r, this._prevMatchLength = s, !this._wordSeparators || Bu(this._wordSeparators, t, n, r, s))
        return i;
    } while (i);
    return null;
  }
}
const Vu = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function qu(e = "") {
  let t = "(-?\\d*\\.\\d\\w*)|([^";
  for (const n of Vu)
    e.indexOf(n) >= 0 || (t += "\\" + n);
  return t += "\\s]+)", new RegExp(t, "g");
}
const ba = qu();
function da(e) {
  let t = ba;
  if (e && e instanceof RegExp)
    if (e.global)
      t = e;
    else {
      let n = "g";
      e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
    }
  return t.lastIndex = 0, t;
}
const wa = new nl();
wa.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function wi(e, t, n, i, r) {
  if (t = da(t), r || (r = bn.first(wa)), n.length > r.maxLen) {
    let c = e - r.maxLen / 2;
    return c < 0 ? c = 0 : i += c, n = n.substring(c, e + r.maxLen / 2), wi(e, t, n, i, r);
  }
  const s = Date.now(), a = e - 1 - i;
  let u = -1, o = null;
  for (let c = 1; !(Date.now() - s >= r.timeBudget); c++) {
    const m = a - r.windowSize * c;
    t.lastIndex = Math.max(0, m);
    const h = Hu(t, n, a, u);
    if (!h && o || (o = h, m <= 0))
      break;
    u = m;
  }
  if (o) {
    const c = {
      word: o[0],
      startColumn: i + 1 + o.index,
      endColumn: i + 1 + o.index + o[0].length
    };
    return t.lastIndex = 0, c;
  }
  return null;
}
function Hu(e, t, n, i) {
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
class Wu {
  static computeUnicodeHighlights(t, n, i) {
    const r = i ? i.startLineNumber : 1, s = i ? i.endLineNumber : t.getLineCount(), a = new Ns(n), u = a.getCandidateCodePoints();
    let o;
    u === "allNonBasicAscii" ? o = new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${Gu(Array.from(u))}`, "g");
    const c = new Ou(null, o), m = [];
    let h = !1, _, L = 0, b = 0, p = 0;
    e: for (let E = r, y = s; E <= y; E++) {
      const R = t.getLineContent(E), v = R.length;
      c.reset(0);
      do
        if (_ = c.next(R), _) {
          let k = _.index, B = _.index + _[0].length;
          if (k > 0) {
            const T = R.charCodeAt(k - 1);
            Xn(T) && k--;
          }
          if (B + 1 < v) {
            const T = R.charCodeAt(B - 1);
            Xn(T) && B++;
          }
          const z = R.substring(k, B);
          let N = wi(k + 1, ba, R, 0);
          N && N.endColumn <= k + 1 && (N = null);
          const A = a.shouldHighlightNonBasicASCII(z, N ? N.word : null);
          if (A !== de.None) {
            if (A === de.Ambiguous ? L++ : A === de.Invisible ? b++ : A === de.NonBasicASCII ? p++ : Za(), m.length >= 1e3) {
              h = !0;
              break e;
            }
            m.push(new D(E, k + 1, E, B + 1));
          }
        }
      while (_);
    }
    return {
      ranges: m,
      hasMore: h,
      ambiguousCharacterCount: L,
      invisibleCharacterCount: b,
      nonBasicAsciiCharacterCount: p
    };
  }
  static computeUnicodeHighlightReason(t, n) {
    const i = new Ns(n);
    switch (i.shouldHighlightNonBasicASCII(t, null)) {
      case de.None:
        return null;
      case de.Invisible:
        return { kind: jt.Invisible };
      case de.Ambiguous: {
        const s = t.codePointAt(0), a = i.ambiguousCharacters.getPrimaryConfusable(s), u = en.getLocales().filter((o) => !en.getInstance(/* @__PURE__ */ new Set([...n.allowedLocales, o])).isAmbiguous(s));
        return { kind: jt.Ambiguous, confusableWith: String.fromCodePoint(a), notAmbiguousInLocales: u };
      }
      case de.NonBasicASCII:
        return { kind: jt.NonBasicAscii };
    }
  }
}
function Gu(e, t) {
  return `[${vl(e.map((i) => String.fromCodePoint(i)).join(""))}]`;
}
var jt;
(function(e) {
  e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(jt || (jt = {}));
class Ns {
  constructor(t) {
    this.options = t, this.allowedCodePoints = new Set(t.allowedCodePoints), this.ambiguousCharacters = en.getInstance(new Set(t.allowedLocales));
  }
  getCandidateCodePoints() {
    if (this.options.nonBasicASCII)
      return "allNonBasicAscii";
    const t = /* @__PURE__ */ new Set();
    if (this.options.invisibleCharacters)
      for (const n of zt.codePoints)
        xs(String.fromCodePoint(n)) || t.add(n);
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
      return de.None;
    if (this.options.nonBasicASCII)
      return de.NonBasicASCII;
    let r = !1, s = !1;
    if (n)
      for (const a of n) {
        const u = a.codePointAt(0), o = Ol(a);
        r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(u) && !zt.isInvisibleCharacter(u) && (s = !0);
      }
    return !r && s ? de.None : this.options.invisibleCharacters && !xs(t) && zt.isInvisibleCharacter(i) ? de.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(i) ? de.Ambiguous : de.None;
  }
}
function xs(e) {
  return e === " " || e === `
` || e === "	";
}
var de;
(function(e) {
  e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(de || (de = {}));
class _n {
  constructor(t, n, i) {
    this.changes = t, this.moves = n, this.hitTimeout = i;
  }
}
class Li {
  constructor(t, n) {
    this.lineRangeMapping = t, this.changes = n;
  }
  flip() {
    return new Li(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
  }
}
class P {
  static fromTo(t, n) {
    return new P(t, n);
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
      n.splice(i, r - i, new P(s, a));
    }
  }
  static tryCreate(t, n) {
    if (!(t > n))
      return new P(t, n);
  }
  static ofLength(t) {
    return new P(0, t);
  }
  static ofStartAndLength(t, n) {
    return new P(t, t + n);
  }
  static emptyAt(t) {
    return new P(t, t);
  }
  constructor(t, n) {
    if (this.start = t, this.endExclusive = n, t > n)
      throw new ae(`Invalid range: ${this.toString()}`);
  }
  get isEmpty() {
    return this.start === this.endExclusive;
  }
  delta(t) {
    return new P(this.start + t, this.endExclusive + t);
  }
  deltaStart(t) {
    return new P(this.start + t, this.endExclusive);
  }
  deltaEnd(t) {
    return new P(this.start, this.endExclusive + t);
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
    return new P(
      Math.min(this.start, t.start),
      Math.max(this.endExclusive, t.endExclusive)
    );
  }
  intersect(t) {
    const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
    if (n <= i)
      return new P(n, i);
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
      throw new ae(`Invalid clipping range: ${this.toString()}`);
    return Math.max(this.start, Math.min(this.endExclusive - 1, t));
  }
  clipCyclic(t) {
    if (this.isEmpty)
      throw new ae(`Invalid clipping range: ${this.toString()}`);
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
      throw new ae(`Invalid join: ${this.toString()} and ${t.toString()}`);
    return new P(this.start, t.endExclusive);
  }
}
const fe = class fe {
  static ofLength(t, n) {
    return new fe(t, t + n);
  }
  static fromRange(t) {
    return new fe(t.startLineNumber, t.endLineNumber);
  }
  static fromRangeInclusive(t) {
    return new fe(t.startLineNumber, t.endLineNumber + 1);
  }
  static subtract(t, n) {
    return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [
      new fe(t.startLineNumber, n.startLineNumber),
      new fe(n.endLineNumberExclusive, t.endLineNumberExclusive)
    ] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new fe(
      Math.max(n.endLineNumberExclusive, t.startLineNumber),
      t.endLineNumberExclusive
    )] : [new fe(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
  }
  static joinMany(t) {
    if (t.length === 0)
      return [];
    let n = new Oe(t[0].slice());
    for (let i = 1; i < t.length; i++)
      n = n.getUnion(new Oe(t[i].slice()));
    return n.ranges;
  }
  static join(t) {
    if (t.length === 0)
      throw new ae("lineRanges cannot be empty");
    let n = t[0].startLineNumber, i = t[0].endLineNumberExclusive;
    for (let r = 1; r < t.length; r++)
      n = Math.min(n, t[r].startLineNumber), i = Math.max(i, t[r].endLineNumberExclusive);
    return new fe(n, i);
  }
  static deserialize(t) {
    return new fe(t[0], t[1]);
  }
  constructor(t, n) {
    if (t > n)
      throw new ae(
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
    return new fe(this.startLineNumber + t, this.endLineNumberExclusive + t);
  }
  deltaLength(t) {
    return new fe(this.startLineNumber, this.endLineNumberExclusive + t);
  }
  get length() {
    return this.endLineNumberExclusive - this.startLineNumber;
  }
  join(t) {
    return new fe(
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
      return new fe(n, i);
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
    return this.isEmpty ? null : new D(
      this.startLineNumber,
      1,
      this.endLineNumberExclusive - 1,
      Number.MAX_SAFE_INTEGER
    );
  }
  toExclusiveRange() {
    return new D(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
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
    return new P(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
  }
  distanceToRange(t) {
    return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
  }
  distanceToLine(t) {
    return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
  }
  addMargin(t, n) {
    return new fe(
      this.startLineNumber - t,
      this.endLineNumberExclusive + n
    );
  }
};
fe.compareByStart = Tt((t) => t.startLineNumber, Gt);
let J = fe;
class Oe {
  constructor(t = []) {
    this._normalizedRanges = t;
  }
  get ranges() {
    return this._normalizedRanges;
  }
  addRange(t) {
    if (t.length === 0)
      return;
    const n = Wn(this._normalizedRanges, (r) => r.endLineNumberExclusive >= t.startLineNumber), i = Ft(this._normalizedRanges, (r) => r.startLineNumber <= t.endLineNumberExclusive) + 1;
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
    const n = kt(this._normalizedRanges, (i) => i.startLineNumber <= t);
    return !!n && n.endLineNumberExclusive > t;
  }
  intersects(t) {
    const n = kt(this._normalizedRanges, (i) => i.startLineNumber < t.endLineNumberExclusive);
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
        const u = this._normalizedRanges[i], o = t._normalizedRanges[r];
        u.startLineNumber < o.startLineNumber ? (a = u, i++) : (a = o, r++);
      } else i < this._normalizedRanges.length ? (a = this._normalizedRanges[i], i++) : (a = t._normalizedRanges[r], r++);
      s === null ? s = a : s.endLineNumberExclusive >= a.startLineNumber ? s = new J(
        s.startLineNumber,
        Math.max(s.endLineNumberExclusive, a.endLineNumberExclusive)
      ) : (n.push(s), s = a);
    }
    return s !== null && n.push(s), new Oe(n);
  }
  subtractFrom(t) {
    const n = Wn(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), i = Ft(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
    if (n === i)
      return new Oe([t]);
    const r = [];
    let s = t.startLineNumber;
    for (let a = n; a < i; a++) {
      const u = this._normalizedRanges[a];
      u.startLineNumber > s && r.push(new J(s, u.startLineNumber)), s = u.endLineNumberExclusive;
    }
    return s < t.endLineNumberExclusive && r.push(new J(s, t.endLineNumberExclusive)), new Oe(r);
  }
  toString() {
    return this._normalizedRanges.map((t) => t.toString()).join(", ");
  }
  getIntersection(t) {
    const n = [];
    let i = 0, r = 0;
    for (; i < this._normalizedRanges.length && r < t._normalizedRanges.length; ) {
      const s = this._normalizedRanges[i], a = t._normalizedRanges[r], u = s.intersect(a);
      u && !u.isEmpty && n.push(u), s.endLineNumberExclusive < a.endLineNumberExclusive ? i++ : r++;
    }
    return new Oe(n);
  }
  getWithDelta(t) {
    return new Oe(this._normalizedRanges.map((n) => n.delta(t)));
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
    return this.lineCount === 0 ? new D(
      t.lineNumber,
      t.column,
      t.lineNumber,
      t.column + this.columnCount
    ) : new D(
      t.lineNumber,
      t.column,
      t.lineNumber + this.lineCount,
      this.columnCount + 1
    );
  }
  toRange() {
    return new D(1, 1, this.lineCount + 1, this.columnCount + 1);
  }
  toLineRange() {
    return J.ofLength(1, this.lineCount + 1);
  }
  addToPosition(t) {
    return this.lineCount === 0 ? new j(t.lineNumber, t.column + this.columnCount) : new j(t.lineNumber + this.lineCount, this.columnCount + 1);
  }
  addToRange(t) {
    return D.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
  }
  toString() {
    return `${this.lineCount},${this.columnCount}`;
  }
};
Re.zero = new Re(0, 0);
let rt = Re;
class $u {
  getOffsetRange(t) {
    return new P(
      this.getOffset(t.getStartPosition()),
      this.getOffset(t.getEndPosition())
    );
  }
  getRange(t) {
    return D.fromPositions(this.getPosition(t.start), this.getPosition(t.endExclusive));
  }
  getStringEdit(t) {
    const n = t.replacements.map((i) => this.getStringReplacement(i));
    return new Xe.deps.StringEdit(n);
  }
  getStringReplacement(t) {
    return new Xe.deps.StringReplacement(this.getOffsetRange(t.range), t.text);
  }
  getTextReplacement(t) {
    return new Xe.deps.TextReplacement(this.getRange(t.replaceRange), t.newText);
  }
  getTextEdit(t) {
    const n = t.replacements.map((i) => this.getTextReplacement(i));
    return new Xe.deps.TextEdit(n);
  }
}
const Ri = class Ri {
  static get deps() {
    if (!this._deps)
      throw new Error("Dependencies not set. Call _setDependencies first.");
    return this._deps;
  }
};
Ri._deps = void 0;
let Xe = Ri;
function zu(e) {
  Xe._deps = e;
}
class La extends $u {
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
      return new j(1, 1);
    const n = this.textLength.lineCount + 1;
    if (t.lineNumber > n) {
      const r = this.getLineLength(n);
      return new j(n, r + 1);
    }
    if (t.column < 1)
      return new j(t.lineNumber, 1);
    const i = this.getLineLength(t.lineNumber);
    return t.column - 1 > i ? new j(t.lineNumber, i + 1) : t;
  }
  getPosition(t) {
    const n = Ft(this.lineStartOffsetByLineIdx, (s) => s <= t), i = n + 1, r = t - this.lineStartOffsetByLineIdx[n] + 1;
    return new j(i, r);
  }
  getTextLength(t) {
    return Xe.deps.TextLength.ofRange(this.getRange(t));
  }
  get textLength() {
    const t = this.lineStartOffsetByLineIdx.length - 1;
    return new Xe.deps.TextLength(t, this.text.length - this.lineStartOffsetByLineIdx[t]);
  }
  getLineLength(t) {
    return this.lineEndOffsetByLineIdx[t - 1] - this.lineStartOffsetByLineIdx[t - 1];
  }
}
class Na {
  constructor() {
    this._transformer = void 0;
  }
  get endPositionExclusive() {
    return this.length.addToPosition(new j(1, 1));
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
    return this.getValueOfRange(new D(t, 1, t, Number.MAX_SAFE_INTEGER)).length;
  }
  getTransformer() {
    return this._transformer || (this._transformer = new La(this.getValue())), this._transformer;
  }
  getLineAt(t) {
    return this.getValueOfRange(new D(t, 1, t, Number.MAX_SAFE_INTEGER));
  }
  getLines() {
    const t = this.getValue();
    return la(t);
  }
  getLinesOfRange(t) {
    return t.mapToLineArray((n) => this.getLineAt(n));
  }
  equals(t) {
    return this === t ? !0 : this.getValue() === t.getValue();
  }
}
class ju extends Na {
  constructor(t, n) {
    Ka(n >= 1), super(), this._getLineContent = t, this._lineCount = n;
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
    return new rt(this._lineCount - 1, t.length);
  }
}
class un extends ju {
  constructor(t) {
    super((n) => t[n - 1], t.length);
  }
}
class tn extends Na {
  constructor(t) {
    super(), this.value = t, this._t = new La(this.value);
  }
  getValueOfRange(t) {
    return this._t.getOffsetRange(t).substring(this.value);
  }
  get length() {
    return this._t.textLength;
  }
}
class Se {
  static fromStringEdit(t, n) {
    const i = t.replacements.map((r) => ge.fromStringReplacement(r, n));
    return new Se(i);
  }
  static replace(t, n) {
    return new Se([new ge(t, n)]);
  }
  static delete(t) {
    return new Se([new ge(t, "")]);
  }
  static insert(t, n) {
    return new Se([new ge(D.fromPositions(t, t), n)]);
  }
  static fromParallelReplacementsUnsorted(t) {
    const n = t.slice().sort(Tt((i) => i.range, D.compareRangesUsingStarts));
    return new Se(n);
  }
  constructor(t) {
    this.replacements = t, Qt(() => gi(t, (n, i) => n.range.getEndPosition().isBeforeOrEqual(i.range.getStartPosition())));
  }
  normalize() {
    const t = [];
    for (const n of this.replacements)
      if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
        const i = t[t.length - 1];
        t[t.length - 1] = new ge(i.range.plusRange(n.range), i.text + n.text);
      } else n.isEmpty || t.push(n);
    return new Se(t);
  }
  mapPosition(t) {
    let n = 0, i = 0, r = 0;
    for (const s of this.replacements) {
      const a = s.range.getStartPosition();
      if (t.isBeforeOrEqual(a))
        break;
      const u = s.range.getEndPosition(), o = rt.ofText(s.text);
      if (t.isBefore(u)) {
        const c = new j(
          a.lineNumber + n,
          a.column + (a.lineNumber + n === i ? r : 0)
        ), m = o.addToPosition(c);
        return on(c, m);
      }
      a.lineNumber + n !== i && (r = 0), n += o.lineCount - (s.range.endLineNumber - s.range.startLineNumber), o.lineCount === 0 ? u.lineNumber !== a.lineNumber ? r += o.columnCount - (u.column - 1) : r += o.columnCount - (u.column - a.column) : r = o.columnCount, i = u.lineNumber + n;
    }
    return new j(
      t.lineNumber + n,
      t.column + (t.lineNumber + n === i ? r : 0)
    );
  }
  mapRange(t) {
    function n(a) {
      return a instanceof j ? a : a.getStartPosition();
    }
    function i(a) {
      return a instanceof j ? a : a.getEndPosition();
    }
    const r = n(this.mapPosition(t.getStartPosition())), s = i(this.mapPosition(t.getEndPosition()));
    return on(r, s);
  }
  inverseMapPosition(t, n) {
    return this.inverse(n).mapPosition(t);
  }
  inverseMapRange(t, n) {
    return this.inverse(n).mapRange(t);
  }
  apply(t) {
    let n = "", i = new j(1, 1);
    for (const s of this.replacements) {
      const a = s.range, u = a.getStartPosition(), o = a.getEndPosition(), c = on(i, u);
      c.isEmpty() || (n += t.getValueOfRange(c)), n += s.text, i = o;
    }
    const r = on(i, t.endPositionExclusive);
    return r.isEmpty() || (n += t.getValueOfRange(r)), n;
  }
  applyToString(t) {
    const n = new tn(t);
    return this.apply(n);
  }
  inverse(t) {
    const n = this.getNewRanges();
    return new Se(this.replacements.map((i, r) => new ge(n[r], t.getValueOfRange(i.range))));
  }
  getNewRanges() {
    const t = [];
    let n = 0, i = 0, r = 0;
    for (const s of this.replacements) {
      const a = rt.ofText(s.text), u = j.lift({
        lineNumber: s.range.startLineNumber + i,
        column: s.range.startColumn + (s.range.startLineNumber === n ? r : 0)
      }), o = a.createRange(u);
      t.push(o), i = o.endLineNumber - s.range.endLineNumber, r = o.endColumn - s.range.endColumn, n = s.range.endLineNumber;
    }
    return t;
  }
  toReplacement(t) {
    if (this.replacements.length === 0)
      throw new ae();
    if (this.replacements.length === 1)
      return this.replacements[0];
    const n = this.replacements[0].range.getStartPosition(), i = this.replacements[this.replacements.length - 1].range.getEndPosition();
    let r = "";
    for (let s = 0; s < this.replacements.length; s++) {
      const a = this.replacements[s];
      if (r += a.text, s < this.replacements.length - 1) {
        const u = this.replacements[s + 1], o = D.fromPositions(a.range.getEndPosition(), u.range.getStartPosition()), c = t.getValueOfRange(o);
        r += c;
      }
    }
    return new ge(D.fromPositions(n, i), r);
  }
  equals(t) {
    return ta(this.replacements, t.replacements, (n, i) => n.equals(i));
  }
  toString(t) {
    return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new tn(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
      const r = t.getValueOfRange(n.range), s = D.fromPositions(new j(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition());
      let a = t.getValueOfRange(s);
      a.length > 10 && (a = "..." + a.substring(a.length - 10));
      const u = D.fromPositions(n.range.getEndPosition(), new j(n.range.endLineNumber + 1, 1));
      let o = t.getValueOfRange(u);
      o.length > 10 && (o = o.substring(0, 10) + "...");
      let c = r;
      if (c.length > 10) {
        const h = Math.floor(5);
        c = c.substring(0, h) + "..." + c.substring(c.length - h);
      }
      let m = n.text;
      if (m.length > 10) {
        const h = Math.floor(5);
        m = m.substring(0, h) + "..." + m.substring(m.length - h);
      }
      return c.length === 0 ? `${a}❰${m}❱${o}` : `${a}❰${c}↦${m}❱${o}`;
    }).join(`
`);
  }
}
class ge {
  static joinReplacements(t, n) {
    if (t.length === 0)
      throw new ae();
    if (t.length === 1)
      return t[0];
    const i = t[0].range.getStartPosition(), r = t[t.length - 1].range.getEndPosition();
    let s = "";
    for (let a = 0; a < t.length; a++) {
      const u = t[a];
      if (s += u.text, a < t.length - 1) {
        const o = t[a + 1], c = D.fromPositions(u.range.getEndPosition(), o.range.getStartPosition()), m = n.getValueOfRange(c);
        s += m;
      }
    }
    return new ge(D.fromPositions(i, r), s);
  }
  static fromStringReplacement(t, n) {
    return new ge(
      n.getTransformer().getRange(t.replaceRange),
      t.newText
    );
  }
  static delete(t) {
    return new ge(t, "");
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
    return new Se([this]);
  }
  equals(t) {
    return ge.equals(this, t);
  }
  extendToCoverRange(t, n) {
    if (this.range.containsRange(t))
      return this;
    const i = this.range.plusRange(t), r = n.getValueOfRange(D.fromPositions(i.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(D.fromPositions(this.range.getEndPosition(), i.getEndPosition())), a = r + this.text + s;
    return new ge(i, a);
  }
  extendToFullLine(t) {
    const n = new D(
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
`), r = Ln(n, i), s = rt.ofText(n.substring(0, r)).addToPosition(this.range.getStartPosition()), a = i.substring(r), u = D.fromPositions(s, this.range.getEndPosition());
    return new ge(u, a);
  }
  removeCommonSuffix(t) {
    const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), i = this.text.replaceAll(`\r
`, `
`), r = Nn(n, i), s = rt.ofText(n.substring(0, n.length - r)).addToPosition(this.range.getStartPosition()), a = i.substring(0, i.length - r), u = D.fromPositions(this.range.getStartPosition(), s);
    return new ge(u, a);
  }
  isEffectiveDeletion(t) {
    let n = this.text.replaceAll(`\r
`, `
`), i = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
    const r = Ln(n, i);
    n = n.substring(r), i = i.substring(r);
    const s = Nn(n, i);
    return n = n.substring(0, n.length - s), i = i.substring(0, i.length - s), n === "";
  }
  toString() {
    const t = this.range.getStartPosition(), n = this.range.getEndPosition();
    return `(${t.lineNumber},${t.column} -> ${n.lineNumber},${n.column}): "${this.text}"`;
  }
}
function on(e, t) {
  if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER)
    return D.fromPositions(t, t);
  if (!e.isBeforeOrEqual(t))
    throw new ae("start must be before end");
  return new D(e.lineNumber, e.column, t.lineNumber, t.column);
}
class Me {
  static inverse(t, n, i) {
    const r = [];
    let s = 1, a = 1;
    for (const o of t) {
      const c = new Me(new J(s, o.original.startLineNumber), new J(a, o.modified.startLineNumber));
      c.modified.isEmpty || r.push(c), s = o.original.endLineNumberExclusive, a = o.modified.endLineNumberExclusive;
    }
    const u = new Me(new J(s, n + 1), new J(a, i + 1));
    return u.modified.isEmpty || r.push(u), r;
  }
  static clip(t, n, i) {
    const r = [];
    for (const s of t) {
      const a = s.original.intersect(n), u = s.modified.intersect(i);
      a && !a.isEmpty && u && !u.isEmpty && r.push(new Me(a, u));
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
    return new Me(this.modified, this.original);
  }
  join(t) {
    return new Me(this.original.join(t.original), this.modified.join(t.modified));
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
        throw new ae("not a valid diff");
      return new Ne(new D(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new D(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    } else
      return new Ne(new D(
        this.original.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.original.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ), new D(
        this.modified.startLineNumber - 1,
        Number.MAX_SAFE_INTEGER,
        this.modified.endLineNumberExclusive - 1,
        Number.MAX_SAFE_INTEGER
      ));
  }
  toRangeMapping2(t, n) {
    if (Rs(this.original.endLineNumberExclusive, t) && Rs(this.modified.endLineNumberExclusive, n))
      return new Ne(new D(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new D(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
    if (!this.original.isEmpty && !this.modified.isEmpty)
      return new Ne(D.fromPositions(new j(this.original.startLineNumber, 1), bt(new j(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), D.fromPositions(new j(this.modified.startLineNumber, 1), bt(new j(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1)
      return new Ne(D.fromPositions(bt(new j(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), bt(new j(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), D.fromPositions(bt(new j(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), bt(new j(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
    throw new ae();
  }
}
function bt(e, t) {
  if (e.lineNumber < 1)
    return new j(1, 1);
  if (e.lineNumber > t.length)
    return new j(t.length, t[t.length - 1].length + 1);
  const n = t[e.lineNumber - 1];
  return e.column > n.length + 1 ? new j(e.lineNumber, n.length + 1) : e;
}
function Rs(e, t) {
  return e >= 1 && e <= t.length;
}
class He extends Me {
  static toTextEdit(t, n) {
    const i = [];
    for (const r of t)
      for (const s of r.innerChanges ?? []) {
        const a = s.toTextEdit(n);
        i.push(a);
      }
    return new Se(i);
  }
  static fromRangeMappings(t) {
    const n = J.join(t.map((r) => J.fromRangeInclusive(r.originalRange))), i = J.join(t.map((r) => J.fromRangeInclusive(r.modifiedRange)));
    return new He(n, i, t);
  }
  constructor(t, n, i) {
    super(t, n), this.innerChanges = i;
  }
  flip() {
    var t;
    return new He(this.modified, this.original, (t = this.innerChanges) == null ? void 0 : t.map((n) => n.flip()));
  }
  withInnerChangesFromLineRanges() {
    return new He(this.original, this.modified, [this.toRangeMapping()]);
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
      throw new ae("Cannot join an empty list of range mappings");
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.join(t[i]);
    return n;
  }
  static assertSorted(t) {
    for (let n = 1; n < t.length; n++) {
      const i = t[n - 1], r = t[n];
      if (!(i.originalRange.getEndPosition().isBeforeOrEqual(r.originalRange.getStartPosition()) && i.modifiedRange.getEndPosition().isBeforeOrEqual(r.modifiedRange.getStartPosition())))
        throw new ae("Range mappings must be sorted");
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
    return new ge(this.originalRange, n);
  }
  join(t) {
    return new Ne(
      this.originalRange.plusRange(t.originalRange),
      this.modifiedRange.plusRange(t.modifiedRange)
    );
  }
}
function Es(e, t, n, i = !1) {
  const r = [];
  for (const s of Va(e.map((a) => Xu(a, t, n)), (a, u) => a.original.intersectsOrTouches(u.original) || a.modified.intersectsOrTouches(u.modified))) {
    const a = s[0], u = s[s.length - 1];
    r.push(new He(
      a.original.join(u.original),
      a.modified.join(u.modified),
      s.map((o) => o.innerChanges[0])
    ));
  }
  return Qt(() => !i && r.length > 0 && (r[0].modified.startLineNumber !== r[0].original.startLineNumber || n.length.lineCount - r[r.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - r[r.length - 1].original.endLineNumberExclusive) ? !1 : gi(r, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), r;
}
function Xu(e, t, n) {
  let i = 0, r = 0;
  e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + i <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + i <= e.modifiedRange.endLineNumber && (r = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + r && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + r && (i = 1);
  const s = new J(
    e.originalRange.startLineNumber + i,
    e.originalRange.endLineNumber + 1 + r
  ), a = new J(
    e.modifiedRange.startLineNumber + i,
    e.modifiedRange.endLineNumber + 1 + r
  );
  return new He(s, a, [e]);
}
const Yu = 3;
class Qu {
  computeDiff(t, n, i) {
    var o;
    const s = new Ra(t, n, {
      maxComputationTime: i.maxComputationTimeMs,
      shouldIgnoreTrimWhitespace: i.ignoreTrimWhitespace,
      shouldComputeCharChanges: !0,
      shouldMakePrettyDiff: !0,
      shouldPostProcessCharChanges: !0
    }).computeDiff(), a = [];
    let u = null;
    for (const c of s.changes) {
      let m;
      c.originalEndLineNumber === 0 ? m = new J(c.originalStartLineNumber + 1, c.originalStartLineNumber + 1) : m = new J(c.originalStartLineNumber, c.originalEndLineNumber + 1);
      let h;
      c.modifiedEndLineNumber === 0 ? h = new J(c.modifiedStartLineNumber + 1, c.modifiedStartLineNumber + 1) : h = new J(c.modifiedStartLineNumber, c.modifiedEndLineNumber + 1);
      let _ = new He(m, h, (o = c.charChanges) == null ? void 0 : o.map((L) => new Ne(new D(
        L.originalStartLineNumber,
        L.originalStartColumn,
        L.originalEndLineNumber,
        L.originalEndColumn
      ), new D(
        L.modifiedStartLineNumber,
        L.modifiedStartColumn,
        L.modifiedEndLineNumber,
        L.modifiedEndColumn
      ))));
      u && (u.modified.endLineNumberExclusive === _.modified.startLineNumber || u.original.endLineNumberExclusive === _.original.startLineNumber) && (_ = new He(
        u.original.join(_.original),
        u.modified.join(_.modified),
        u.innerChanges && _.innerChanges ? u.innerChanges.concat(_.innerChanges) : void 0
      ), a.pop()), a.push(_), u = _;
    }
    return Qt(() => gi(a, (c, m) => m.original.startLineNumber - c.original.endLineNumberExclusive === m.modified.startLineNumber - c.modified.endLineNumberExclusive && c.original.endLineNumberExclusive < m.original.startLineNumber && c.modified.endLineNumberExclusive < m.modified.startLineNumber)), new _n(a, [], s.quitEarly);
  }
}
function xa(e, t, n, i) {
  return new nt(e, t, n).ComputeDiff(i);
}
let As = class {
  constructor(t) {
    const n = [], i = [];
    for (let r = 0, s = t.length; r < s; r++)
      n[r] = ui(t[r], 1), i[r] = oi(t[r], 1);
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
    let u = 0;
    for (let o = n; o <= i; o++) {
      const c = this.lines[o], m = t ? this._startColumns[o] : 1, h = t ? this._endColumns[o] : c.length + 1;
      for (let _ = m; _ < h; _++)
        r[u] = c.charCodeAt(_ - 1), s[u] = o + 1, a[u] = _, u++;
      !t && o < i && (r[u] = w.LineFeed, s[u] = o + 1, a[u] = c.length + 1, u++);
    }
    return new Ju(r, s, a);
  }
};
class Ju {
  constructor(t, n, i) {
    this._charCodes = t, this._lineNumbers = n, this._columns = i;
  }
  toString() {
    return "[" + this._charCodes.map(
      (t, n) => (t === w.LineFeed ? "\\n" : String.fromCharCode(t)) + `-(${this._lineNumbers[n]},${this._columns[n]})`
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
    return t === -1 ? this.getStartLineNumber(t + 1) : (this._assertIndex(t, this._lineNumbers), this._charCodes[t] === w.LineFeed ? this._lineNumbers[t] + 1 : this._lineNumbers[t]);
  }
  getStartColumn(t) {
    return t > 0 && t === this._columns.length ? this.getEndColumn(t - 1) : (this._assertIndex(t, this._columns), this._columns[t]);
  }
  getEndColumn(t) {
    return t === -1 ? this.getStartColumn(t + 1) : (this._assertIndex(t, this._columns), this._charCodes[t] === w.LineFeed ? 1 : this._columns[t] + 1);
  }
}
class Ut {
  constructor(t, n, i, r, s, a, u, o) {
    this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = i, this.originalEndColumn = r, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = u, this.modifiedEndColumn = o;
  }
  static createFromDiffChange(t, n, i) {
    const r = n.getStartLineNumber(t.originalStart), s = n.getStartColumn(t.originalStart), a = n.getEndLineNumber(t.originalStart + t.originalLength - 1), u = n.getEndColumn(t.originalStart + t.originalLength - 1), o = i.getStartLineNumber(t.modifiedStart), c = i.getStartColumn(t.modifiedStart), m = i.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), h = i.getEndColumn(t.modifiedStart + t.modifiedLength - 1);
    return new Ut(
      r,
      s,
      a,
      u,
      o,
      c,
      m,
      h
    );
  }
}
function Zu(e) {
  if (e.length <= 1)
    return e;
  const t = [e[0]];
  let n = t[0];
  for (let i = 1, r = e.length; i < r; i++) {
    const s = e[i], a = s.originalStart - (n.originalStart + n.originalLength), u = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
    Math.min(a, u) < Yu ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
  }
  return t;
}
class Xt {
  constructor(t, n, i, r, s) {
    this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = i, this.modifiedEndLineNumber = r, this.charChanges = s;
  }
  static createFromDiffResult(t, n, i, r, s, a, u) {
    let o, c, m, h, _;
    if (n.originalLength === 0 ? (o = i.getStartLineNumber(n.originalStart) - 1, c = 0) : (o = i.getStartLineNumber(n.originalStart), c = i.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (m = r.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (m = r.getStartLineNumber(n.modifiedStart), h = r.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
      const L = i.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), b = r.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
      if (L.getElements().length > 0 && b.getElements().length > 0) {
        let p = xa(L, b, s, !0).changes;
        u && (p = Zu(p)), _ = [];
        for (let E = 0, y = p.length; E < y; E++)
          _.push(Ut.createFromDiffChange(p[E], L, b));
      }
    }
    return new Xt(
      o,
      c,
      m,
      h,
      _
    );
  }
}
class Ra {
  constructor(t, n, i) {
    this.shouldComputeCharChanges = i.shouldComputeCharChanges, this.shouldPostProcessCharChanges = i.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = i.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = i.shouldMakePrettyDiff, this.originalLines = t, this.modifiedLines = n, this.original = new As(t), this.modified = new As(n), this.continueLineDiff = vs(i.maxComputationTime), this.continueCharDiff = vs(i.maxComputationTime === 0 ? 0 : Math.min(i.maxComputationTime, 5e3));
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
    const t = xa(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), n = t.changes, i = t.quitEarly;
    if (this.shouldIgnoreTrimWhitespace) {
      const u = [];
      for (let o = 0, c = n.length; o < c; o++)
        u.push(Xt.createFromDiffResult(this.shouldIgnoreTrimWhitespace, n[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
      return {
        quitEarly: i,
        changes: u
      };
    }
    const r = [];
    let s = 0, a = 0;
    for (let u = -1, o = n.length; u < o; u++) {
      const c = u + 1 < o ? n[u + 1] : null, m = c ? c.originalStart : this.originalLines.length, h = c ? c.modifiedStart : this.modifiedLines.length;
      for (; s < m && a < h; ) {
        const _ = this.originalLines[s], L = this.modifiedLines[a];
        if (_ !== L) {
          {
            let b = ui(_, 1), p = ui(L, 1);
            for (; b > 1 && p > 1; ) {
              const E = _.charCodeAt(b - 2), y = L.charCodeAt(p - 2);
              if (E !== y)
                break;
              b--, p--;
            }
            (b > 1 || p > 1) && this._pushTrimWhitespaceCharChange(r, s + 1, 1, b, a + 1, 1, p);
          }
          {
            let b = oi(_, 1), p = oi(L, 1);
            const E = _.length + 1, y = L.length + 1;
            for (; b < E && p < y; ) {
              const R = _.charCodeAt(b - 1), v = _.charCodeAt(p - 1);
              if (R !== v)
                break;
              b++, p++;
            }
            (b < E || p < y) && this._pushTrimWhitespaceCharChange(r, s + 1, b, E, a + 1, p, y);
          }
        }
        s++, a++;
      }
      c && (r.push(Xt.createFromDiffResult(this.shouldIgnoreTrimWhitespace, c, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), s += c.originalLength, a += c.modifiedLength);
    }
    return {
      quitEarly: i,
      changes: r
    };
  }
  _pushTrimWhitespaceCharChange(t, n, i, r, s, a, u) {
    if (this._mergeTrimWhitespaceCharChange(t, n, i, r, s, a, u))
      return;
    let o;
    this.shouldComputeCharChanges && (o = [new Ut(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      u
    )]), t.push(new Xt(
      n,
      n,
      s,
      s,
      o
    ));
  }
  _mergeTrimWhitespaceCharChange(t, n, i, r, s, a, u) {
    const o = t.length;
    if (o === 0)
      return !1;
    const c = t[o - 1];
    return c.originalEndLineNumber === 0 || c.modifiedEndLineNumber === 0 ? !1 : c.originalEndLineNumber === n && c.modifiedEndLineNumber === s ? (this.shouldComputeCharChanges && c.charChanges && c.charChanges.push(new Ut(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      u
    )), !0) : c.originalEndLineNumber + 1 === n && c.modifiedEndLineNumber + 1 === s ? (c.originalEndLineNumber = n, c.modifiedEndLineNumber = s, this.shouldComputeCharChanges && c.charChanges && c.charChanges.push(new Ut(
      n,
      i,
      n,
      r,
      s,
      a,
      s,
      u
    )), !0) : !1;
  }
}
function ui(e, t) {
  const n = Tl(e);
  return n === -1 ? t : n + 1;
}
function oi(e, t) {
  const n = Ml(e);
  return n === -1 ? t : n + 2;
}
function vs(e) {
  if (e === 0)
    return () => !0;
  const t = Date.now();
  return () => Date.now() - t < e;
}
class Je {
  static trivial(t, n) {
    return new Je([new re(P.ofLength(t.length), P.ofLength(n.length))], !1);
  }
  static trivialTimedOut(t, n) {
    return new Je([new re(P.ofLength(t.length), P.ofLength(n.length))], !0);
  }
  constructor(t, n) {
    this.diffs = t, this.hitTimeout = n;
  }
}
class re {
  static invert(t, n) {
    const i = [];
    return qa(t, (r, s) => {
      i.push(re.fromOffsetPairs(r ? r.getEndExclusives() : Ye.zero, s ? s.getStarts() : new Ye(
        n,
        (r ? r.seq2Range.endExclusive - r.seq1Range.endExclusive : 0) + n
      )));
    }), i;
  }
  static fromOffsetPairs(t, n) {
    return new re(new P(t.offset1, n.offset1), new P(t.offset2, n.offset2));
  }
  static assertSorted(t) {
    let n;
    for (const i of t) {
      if (n && !(n.seq1Range.endExclusive <= i.seq1Range.start && n.seq2Range.endExclusive <= i.seq2Range.start))
        throw new ae("Sequence diffs must be sorted");
      n = i;
    }
  }
  constructor(t, n) {
    this.seq1Range = t, this.seq2Range = n;
  }
  swap() {
    return new re(this.seq2Range, this.seq1Range);
  }
  toString() {
    return `${this.seq1Range} <-> ${this.seq2Range}`;
  }
  join(t) {
    return new re(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
  }
  delta(t) {
    return t === 0 ? this : new re(this.seq1Range.delta(t), this.seq2Range.delta(t));
  }
  deltaStart(t) {
    return t === 0 ? this : new re(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
  }
  deltaEnd(t) {
    return t === 0 ? this : new re(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
  }
  intersectsOrTouches(t) {
    return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
  }
  intersect(t) {
    const n = this.seq1Range.intersect(t.seq1Range), i = this.seq2Range.intersect(t.seq2Range);
    if (!(!n || !i))
      return new re(n, i);
  }
  getStarts() {
    return new Ye(this.seq1Range.start, this.seq2Range.start);
  }
  getEndExclusives() {
    return new Ye(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
  }
}
const ot = class ot {
  constructor(t, n) {
    this.offset1 = t, this.offset2 = n;
  }
  toString() {
    return `${this.offset1} <-> ${this.offset2}`;
  }
  delta(t) {
    return t === 0 ? this : new ot(this.offset1 + t, this.offset2 + t);
  }
  equals(t) {
    return this.offset1 === t.offset1 && this.offset2 === t.offset2;
  }
};
ot.zero = new ot(0, 0), ot.max = new ot(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
let Ye = ot;
const Fn = class Fn {
  isValid() {
    return !0;
  }
};
Fn.instance = new Fn();
let nn = Fn;
class Ku {
  constructor(t) {
    if (this.timeout = t, this.startTime = Date.now(), this.valid = !0, t <= 0)
      throw new ae("timeout must be positive");
  }
  isValid() {
    return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
  }
  disable() {
    this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
  }
}
class Vn {
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
function ci(e) {
  return e === w.Space || e === w.Tab;
}
const Yt = class Yt {
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
        const c = a[o], m = Yt.getKey(c);
        this.histogram[m] = (this.histogram[m] || 0) + 1;
      }
      r++;
      const u = Yt.getKey(`
`);
      this.histogram[u] = (this.histogram[u] || 0) + 1;
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
Yt.chrKeys = /* @__PURE__ */ new Map();
let yn = Yt;
class Cu {
  compute(t, n, i = nn.instance, r) {
    if (t.length === 0 || n.length === 0)
      return Je.trivial(t, n);
    const s = new Vn(t.length, n.length), a = new Vn(t.length, n.length), u = new Vn(t.length, n.length);
    for (let b = 0; b < t.length; b++)
      for (let p = 0; p < n.length; p++) {
        if (!i.isValid())
          return Je.trivialTimedOut(t, n);
        const E = b === 0 ? 0 : s.get(b - 1, p), y = p === 0 ? 0 : s.get(b, p - 1);
        let R;
        t.getElement(b) === n.getElement(p) ? (b === 0 || p === 0 ? R = 0 : R = s.get(b - 1, p - 1), b > 0 && p > 0 && a.get(b - 1, p - 1) === 3 && (R += u.get(b - 1, p - 1)), R += r ? r(b, p) : 1) : R = -1;
        const v = Math.max(E, y, R);
        if (v === R) {
          const k = b > 0 && p > 0 ? u.get(b - 1, p - 1) : 0;
          u.set(b, p, k + 1), a.set(b, p, 3);
        } else v === E ? (u.set(b, p, 0), a.set(b, p, 1)) : v === y && (u.set(b, p, 0), a.set(b, p, 2));
        s.set(b, p, v);
      }
    const o = [];
    let c = t.length, m = n.length;
    function h(b, p) {
      (b + 1 !== c || p + 1 !== m) && o.push(new re(new P(b + 1, c), new P(p + 1, m))), c = b, m = p;
    }
    let _ = t.length - 1, L = n.length - 1;
    for (; _ >= 0 && L >= 0; )
      a.get(_, L) === 3 ? (h(_, L), _--, L--) : a.get(_, L) === 1 ? _-- : L--;
    return h(-1, -1), o.reverse(), new Je(o, !1);
  }
}
class Ea {
  compute(t, n, i = nn.instance) {
    if (t.length === 0 || n.length === 0)
      return Je.trivial(t, n);
    const r = t, s = n;
    function a(p, E) {
      for (; p < r.length && E < s.length && r.getElement(p) === s.getElement(E); )
        p++, E++;
      return p;
    }
    let u = 0;
    const o = new e1();
    o.set(0, a(0, 0));
    const c = new t1();
    c.set(0, o.get(0) === 0 ? null : new ys(null, 0, 0, o.get(0)));
    let m = 0;
    e: for (; ; ) {
      if (u++, !i.isValid())
        return Je.trivialTimedOut(r, s);
      const p = -Math.min(u, s.length + u % 2), E = Math.min(u, r.length + u % 2);
      for (m = p; m <= E; m += 2) {
        const y = m === E ? -1 : o.get(m + 1), R = m === p ? -1 : o.get(m - 1) + 1, v = Math.min(Math.max(y, R), r.length), k = v - m;
        if (v > r.length || k > s.length)
          continue;
        const B = a(v, k);
        o.set(m, B);
        const z = v === y ? c.get(m + 1) : c.get(m - 1);
        if (c.set(m, B !== v ? new ys(z, v, k, B - v) : z), o.get(m) === r.length && o.get(m) - m === s.length)
          break e;
      }
    }
    let h = c.get(m);
    const _ = [];
    let L = r.length, b = s.length;
    for (; ; ) {
      const p = h ? h.x + h.length : 0, E = h ? h.y + h.length : 0;
      if ((p !== L || E !== b) && _.push(new re(new P(p, L), new P(E, b))), !h)
        break;
      L = h.x, b = h.y, h = h.prev;
    }
    return _.reverse(), new Je(_, !1);
  }
}
class ys {
  constructor(t, n, i, r) {
    this.prev = t, this.x = n, this.y = i, this.length = r;
  }
}
class e1 {
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
class t1 {
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
class Tn {
  constructor(t, n, i) {
    this.lines = t, this.range = n, this.considerWhitespaceChanges = i, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
    for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
      let s = t[r - 1], a = 0;
      r === this.range.startLineNumber && this.range.startColumn > 1 && (a = this.range.startColumn - 1, s = s.substring(a)), this.lineStartOffsets.push(a);
      let u = 0;
      if (!i) {
        const c = s.trimStart();
        u = s.length - c.length, s = c.trimEnd();
      }
      this.trimmedWsLengthsByLineIdx.push(u);
      const o = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - a - u, s.length) : s.length;
      for (let c = 0; c < o; c++)
        this.elements.push(s.charCodeAt(c));
      r < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
    }
  }
  toString() {
    return `Slice: "${this.text}"`;
  }
  get text() {
    return this.getText(new P(0, this.length));
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
    const n = Us(t > 0 ? this.elements[t - 1] : -1), i = Us(t < this.elements.length ? this.elements[t] : -1);
    if (n === ie.LineBreakCR && i === ie.LineBreakLF)
      return 0;
    if (n === ie.LineBreakLF)
      return 150;
    let r = 0;
    return n !== i && (r += 10, n === ie.WordLower && i === ie.WordUpper && (r += 1)), r += Ms(n), r += Ms(i), r;
  }
  translateOffset(t, n = "right") {
    const i = Ft(this.firstElementOffsetByLineIdx, (s) => s <= t), r = t - this.firstElementOffsetByLineIdx[i];
    return new j(
      this.range.startLineNumber + i,
      1 + this.lineStartOffsets[i] + r + (r === 0 && n === "left" ? 0 : this.trimmedWsLengthsByLineIdx[i])
    );
  }
  translateRange(t) {
    const n = this.translateOffset(t.start, "right"), i = this.translateOffset(t.endExclusive, "left");
    return i.isBefore(n) ? D.fromPositions(i, i) : D.fromPositions(n, i);
  }
  findWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !dt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && dt(this.elements[n - 1]); )
      n--;
    let i = t;
    for (; i < this.elements.length && dt(this.elements[i]); )
      i++;
    return new P(n, i);
  }
  findSubWordContaining(t) {
    if (t < 0 || t >= this.elements.length || !dt(this.elements[t]))
      return;
    let n = t;
    for (; n > 0 && dt(this.elements[n - 1]) && !Ts(this.elements[n]); )
      n--;
    let i = t;
    for (; i < this.elements.length && dt(this.elements[i]) && !Ts(this.elements[i]); )
      i++;
    return new P(n, i);
  }
  countLinesIn(t) {
    return this.translateOffset(t.endExclusive).lineNumber - this.translateOffset(t.start).lineNumber;
  }
  isStronglyEqual(t, n) {
    return this.elements[t] === this.elements[n];
  }
  extendToFullLines(t) {
    const n = kt(this.firstElementOffsetByLineIdx, (r) => r <= t.start) ?? 0, i = Oa(this.firstElementOffsetByLineIdx, (r) => t.endExclusive <= r) ?? this.elements.length;
    return new P(n, i);
  }
}
function dt(e) {
  return e >= w.a && e <= w.z || e >= w.A && e <= w.Z || e >= w.Digit0 && e <= w.Digit9;
}
function Ts(e) {
  return e >= w.A && e <= w.Z;
}
var ie;
(function(e) {
  e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(ie || (ie = {}));
const n1 = {
  [ie.WordLower]: 0,
  [ie.WordUpper]: 0,
  [ie.WordNumber]: 0,
  [ie.End]: 10,
  [ie.Other]: 2,
  [ie.Separator]: 30,
  [ie.Space]: 3,
  [ie.LineBreakCR]: 10,
  [ie.LineBreakLF]: 10
};
function Ms(e) {
  return n1[e];
}
function Us(e) {
  return e === w.LineFeed ? ie.LineBreakLF : e === w.CarriageReturn ? ie.LineBreakCR : ci(e) ? ie.Space : e >= w.a && e <= w.z ? ie.WordLower : e >= w.A && e <= w.Z ? ie.WordUpper : e >= w.Digit0 && e <= w.Digit9 ? ie.WordNumber : e === -1 ? ie.End : e === w.Comma || e === w.Semicolon ? ie.Separator : ie.Other;
}
function i1(e, t, n, i, r, s) {
  let { moves: a, excludedChanges: u } = s1(e, t, n, s);
  if (!s.isValid())
    return [];
  const o = e.filter((m) => !u.has(m)), c = a1(o, i, r, t, n, s);
  return Wa(a, c), a = l1(a), a = a.filter((m) => {
    const h = m.original.toOffsetRange().slice(t).map((L) => L.trim());
    return h.join(`
`).length >= 15 && r1(h, (L) => L.length >= 2) >= 2;
  }), a = u1(e, a), a;
}
function r1(e, t) {
  let n = 0;
  for (const i of e)
    t(i) && n++;
  return n;
}
function s1(e, t, n, i) {
  const r = [], s = e.filter((o) => o.modified.isEmpty && o.original.length >= 3).map((o) => new yn(o.original, t, o)), a = new Set(e.filter((o) => o.original.isEmpty && o.modified.length >= 3).map((o) => new yn(o.modified, n, o))), u = /* @__PURE__ */ new Set();
  for (const o of s) {
    let c = -1, m;
    for (const h of a) {
      const _ = o.computeSimilarity(h);
      _ > c && (c = _, m = h);
    }
    if (c > 0.9 && m && (a.delete(m), r.push(new Me(o.range, m.range)), u.add(o.source), u.add(m.source)), !i.isValid())
      return { moves: r, excludedChanges: u };
  }
  return { moves: r, excludedChanges: u };
}
function a1(e, t, n, i, r, s) {
  const a = [], u = new Ja();
  for (const _ of e)
    for (let L = _.original.startLineNumber; L < _.original.endLineNumberExclusive - 2; L++) {
      const b = `${t[L - 1]}:${t[L + 1 - 1]}:${t[L + 2 - 1]}`;
      u.add(b, { range: new J(L, L + 3) });
    }
  const o = [];
  e.sort(Tt((_) => _.modified.startLineNumber, Gt));
  for (const _ of e) {
    let L = [];
    for (let b = _.modified.startLineNumber; b < _.modified.endLineNumberExclusive - 2; b++) {
      const p = `${n[b - 1]}:${n[b + 1 - 1]}:${n[b + 2 - 1]}`, E = new J(b, b + 3), y = [];
      u.forEach(p, ({ range: R }) => {
        for (const k of L)
          if (k.originalLineRange.endLineNumberExclusive + 1 === R.endLineNumberExclusive && k.modifiedLineRange.endLineNumberExclusive + 1 === E.endLineNumberExclusive) {
            k.originalLineRange = new J(
              k.originalLineRange.startLineNumber,
              R.endLineNumberExclusive
            ), k.modifiedLineRange = new J(
              k.modifiedLineRange.startLineNumber,
              E.endLineNumberExclusive
            ), y.push(k);
            return;
          }
        const v = {
          modifiedLineRange: E,
          originalLineRange: R
        };
        o.push(v), y.push(v);
      }), L = y;
    }
    if (!s.isValid())
      return [];
  }
  o.sort(Ga(Tt((_) => _.modifiedLineRange.length, Gt)));
  const c = new Oe(), m = new Oe();
  for (const _ of o) {
    const L = _.modifiedLineRange.startLineNumber - _.originalLineRange.startLineNumber, b = c.subtractFrom(_.modifiedLineRange), p = m.subtractFrom(_.originalLineRange).getWithDelta(L), E = b.getIntersection(p);
    for (const y of E.ranges) {
      if (y.length < 3)
        continue;
      const R = y, v = y.delta(-L);
      a.push(new Me(v, R)), c.addRange(R), m.addRange(v);
    }
  }
  a.sort(Tt((_) => _.original.startLineNumber, Gt));
  const h = new pn(e);
  for (let _ = 0; _ < a.length; _++) {
    const L = a[_], b = h.findLastMonotonous((z) => z.original.startLineNumber <= L.original.startLineNumber), p = kt(e, (z) => z.modified.startLineNumber <= L.modified.startLineNumber), E = Math.max(L.original.startLineNumber - b.original.startLineNumber, L.modified.startLineNumber - p.modified.startLineNumber), y = h.findLastMonotonous((z) => z.original.startLineNumber < L.original.endLineNumberExclusive), R = kt(e, (z) => z.modified.startLineNumber < L.modified.endLineNumberExclusive), v = Math.max(y.original.endLineNumberExclusive - L.original.endLineNumberExclusive, R.modified.endLineNumberExclusive - L.modified.endLineNumberExclusive);
    let k;
    for (k = 0; k < E; k++) {
      const z = L.original.startLineNumber - k - 1, N = L.modified.startLineNumber - k - 1;
      if (z > i.length || N > r.length || c.contains(N) || m.contains(z) || !Ds(i[z - 1], r[N - 1], s))
        break;
    }
    k > 0 && (m.addRange(new J(L.original.startLineNumber - k, L.original.startLineNumber)), c.addRange(new J(L.modified.startLineNumber - k, L.modified.startLineNumber)));
    let B;
    for (B = 0; B < v; B++) {
      const z = L.original.endLineNumberExclusive + B, N = L.modified.endLineNumberExclusive + B;
      if (z > i.length || N > r.length || c.contains(N) || m.contains(z) || !Ds(i[z - 1], r[N - 1], s))
        break;
    }
    B > 0 && (m.addRange(new J(
      L.original.endLineNumberExclusive,
      L.original.endLineNumberExclusive + B
    )), c.addRange(new J(
      L.modified.endLineNumberExclusive,
      L.modified.endLineNumberExclusive + B
    ))), (k > 0 || B > 0) && (a[_] = new Me(new J(
      L.original.startLineNumber - k,
      L.original.endLineNumberExclusive + B
    ), new J(
      L.modified.startLineNumber - k,
      L.modified.endLineNumberExclusive + B
    )));
  }
  return a;
}
function Ds(e, t, n) {
  if (e.trim() === t.trim())
    return !0;
  if (e.length > 300 && t.length > 300)
    return !1;
  const r = new Ea().compute(new Tn([e], new D(1, 1, 1, e.length), !1), new Tn([t], new D(1, 1, 1, t.length), !1), n);
  let s = 0;
  const a = re.invert(r.diffs, e.length);
  for (const m of a)
    m.seq1Range.forEach((h) => {
      ci(e.charCodeAt(h)) || s++;
    });
  function u(m) {
    let h = 0;
    for (let _ = 0; _ < e.length; _++)
      ci(m.charCodeAt(_)) || h++;
    return h;
  }
  const o = u(e.length > t.length ? e : t);
  return s / o > 0.6 && o > 10;
}
function l1(e) {
  if (e.length === 0)
    return e;
  e.sort(Tt((n) => n.original.startLineNumber, Gt));
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
function u1(e, t) {
  const n = new pn(e);
  return t = t.filter((i) => {
    const r = n.findLastMonotonous((u) => u.original.startLineNumber < i.original.endLineNumberExclusive) || new Me(new J(1, 1), new J(1, 1)), s = kt(e, (u) => u.modified.startLineNumber < i.modified.endLineNumberExclusive);
    return r !== s;
  }), t;
}
function ks(e, t, n) {
  let i = n;
  return i = Fs(e, t, i), i = Fs(e, t, i), i = o1(e, t, i), i;
}
function Fs(e, t, n) {
  if (n.length === 0)
    return n;
  const i = [];
  i.push(n[0]);
  for (let s = 1; s < n.length; s++) {
    const a = i[i.length - 1];
    let u = n[s];
    if (u.seq1Range.isEmpty || u.seq2Range.isEmpty) {
      const o = u.seq1Range.start - a.seq1Range.endExclusive;
      let c;
      for (c = 1; c <= o && !(e.getElement(u.seq1Range.start - c) !== e.getElement(u.seq1Range.endExclusive - c) || t.getElement(u.seq2Range.start - c) !== t.getElement(u.seq2Range.endExclusive - c)); c++)
        ;
      if (c--, c === o) {
        i[i.length - 1] = new re(new P(a.seq1Range.start, u.seq1Range.endExclusive - o), new P(a.seq2Range.start, u.seq2Range.endExclusive - o));
        continue;
      }
      u = u.delta(-c);
    }
    i.push(u);
  }
  const r = [];
  for (let s = 0; s < i.length - 1; s++) {
    const a = i[s + 1];
    let u = i[s];
    if (u.seq1Range.isEmpty || u.seq2Range.isEmpty) {
      const o = a.seq1Range.start - u.seq1Range.endExclusive;
      let c;
      for (c = 0; c < o && !(!e.isStronglyEqual(u.seq1Range.start + c, u.seq1Range.endExclusive + c) || !t.isStronglyEqual(u.seq2Range.start + c, u.seq2Range.endExclusive + c)); c++)
        ;
      if (c === o) {
        i[s + 1] = new re(new P(u.seq1Range.start + o, a.seq1Range.endExclusive), new P(u.seq2Range.start + o, a.seq2Range.endExclusive));
        continue;
      }
      c > 0 && (u = u.delta(c));
    }
    r.push(u);
  }
  return i.length > 0 && r.push(i[i.length - 1]), r;
}
function o1(e, t, n) {
  if (!e.getBoundaryScore || !t.getBoundaryScore)
    return n;
  for (let i = 0; i < n.length; i++) {
    const r = i > 0 ? n[i - 1] : void 0, s = n[i], a = i + 1 < n.length ? n[i + 1] : void 0, u = new P(
      r ? r.seq1Range.endExclusive + 1 : 0,
      a ? a.seq1Range.start - 1 : e.length
    ), o = new P(
      r ? r.seq2Range.endExclusive + 1 : 0,
      a ? a.seq2Range.start - 1 : t.length
    );
    s.seq1Range.isEmpty ? n[i] = Ss(s, e, t, u, o) : s.seq2Range.isEmpty && (n[i] = Ss(s.swap(), t, e, o, u).swap());
  }
  return n;
}
function Ss(e, t, n, i, r) {
  let a = 1;
  for (; e.seq1Range.start - a >= i.start && e.seq2Range.start - a >= r.start && n.isStronglyEqual(e.seq2Range.start - a, e.seq2Range.endExclusive - a) && a < 100; )
    a++;
  a--;
  let u = 0;
  for (; e.seq1Range.start + u < i.endExclusive && e.seq2Range.endExclusive + u < r.endExclusive && n.isStronglyEqual(e.seq2Range.start + u, e.seq2Range.endExclusive + u) && u < 100; )
    u++;
  if (a === 0 && u === 0)
    return e;
  let o = 0, c = -1;
  for (let m = -a; m <= u; m++) {
    const h = e.seq2Range.start + m, _ = e.seq2Range.endExclusive + m, L = e.seq1Range.start + m, b = t.getBoundaryScore(L) + n.getBoundaryScore(h) + n.getBoundaryScore(_);
    b > c && (c = b, o = m);
  }
  return e.delta(o);
}
function c1(e, t, n) {
  const i = [];
  for (const r of n) {
    const s = i[i.length - 1];
    if (!s) {
      i.push(r);
      continue;
    }
    r.seq1Range.start - s.seq1Range.endExclusive <= 2 || r.seq2Range.start - s.seq2Range.endExclusive <= 2 ? i[i.length - 1] = new re(s.seq1Range.join(r.seq1Range), s.seq2Range.join(r.seq2Range)) : i.push(r);
  }
  return i;
}
function Is(e, t, n, i, r = !1) {
  const s = re.invert(n, e.length), a = [];
  let u = new Ye(0, 0);
  function o(m, h) {
    if (m.offset1 < u.offset1 || m.offset2 < u.offset2)
      return;
    const _ = i(e, m.offset1), L = i(t, m.offset2);
    if (!_ || !L)
      return;
    let b = new re(_, L);
    const p = b.intersect(h);
    let E = p.seq1Range.length, y = p.seq2Range.length;
    for (; s.length > 0; ) {
      const R = s[0];
      if (!(R.seq1Range.intersects(b.seq1Range) || R.seq2Range.intersects(b.seq2Range)))
        break;
      const k = i(e, R.seq1Range.start), B = i(t, R.seq2Range.start), z = new re(k, B), N = z.intersect(R);
      if (E += N.seq1Range.length, y += N.seq2Range.length, b = b.join(z), b.seq1Range.endExclusive >= R.seq1Range.endExclusive)
        s.shift();
      else
        break;
    }
    (r && E + y < b.seq1Range.length + b.seq2Range.length || E + y < (b.seq1Range.length + b.seq2Range.length) * 2 / 3) && a.push(b), u = b.getEndExclusives();
  }
  for (; s.length > 0; ) {
    const m = s.shift();
    m.seq1Range.isEmpty || (o(m.getStarts(), m), o(m.getEndExclusives().delta(-1), m));
  }
  return m1(n, a);
}
function m1(e, t) {
  const n = [];
  for (; e.length > 0 || t.length > 0; ) {
    const i = e[0], r = t[0];
    let s;
    i && (!r || i.seq1Range.start < r.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
  }
  return n;
}
function h1(e, t, n) {
  let i = n;
  if (i.length === 0)
    return i;
  let r = 0, s;
  do {
    s = !1;
    const a = [
      i[0]
    ];
    for (let u = 1; u < i.length; u++) {
      let m = function(_, L) {
        const b = new P(c.seq1Range.endExclusive, o.seq1Range.start);
        return e.getText(b).replace(/\s/g, "").length <= 4 && (_.seq1Range.length + _.seq2Range.length > 5 || L.seq1Range.length + L.seq2Range.length > 5);
      };
      const o = i[u], c = a[a.length - 1];
      m(c, o) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(o)) : a.push(o);
    }
    i = a;
  } while (r++ < 10 && s);
  return i;
}
function f1(e, t, n) {
  let i = n;
  if (i.length === 0)
    return i;
  let r = 0, s;
  do {
    s = !1;
    const u = [
      i[0]
    ];
    for (let o = 1; o < i.length; o++) {
      let h = function(L, b) {
        const p = new P(m.seq1Range.endExclusive, c.seq1Range.start);
        if (e.countLinesIn(p) > 5 || p.length > 500)
          return !1;
        const y = e.getText(p).trim();
        if (y.length > 20 || y.split(/\r\n|\r|\n/).length > 1)
          return !1;
        const R = e.countLinesIn(L.seq1Range), v = L.seq1Range.length, k = t.countLinesIn(L.seq2Range), B = L.seq2Range.length, z = e.countLinesIn(b.seq1Range), N = b.seq1Range.length, A = t.countLinesIn(b.seq2Range), T = b.seq2Range.length, W = 130;
        function $(G) {
          return Math.min(G, W);
        }
        return Math.pow(Math.pow($(R * 40 + v), 1.5) + Math.pow($(k * 40 + B), 1.5), 1.5) + Math.pow(Math.pow($(z * 40 + N), 1.5) + Math.pow($(A * 40 + T), 1.5), 1.5) > (W ** 1.5) ** 1.5 * 1.3;
      };
      const c = i[o], m = u[u.length - 1];
      h(m, c) ? (s = !0, u[u.length - 1] = u[u.length - 1].join(c)) : u.push(c);
    }
    i = u;
  } while (r++ < 10 && s);
  const a = [];
  return Ha(i, (u, o, c) => {
    let m = o;
    function h(y) {
      return y.length > 0 && y.trim().length <= 3 && o.seq1Range.length + o.seq2Range.length > 100;
    }
    const _ = e.extendToFullLines(o.seq1Range), L = e.getText(new P(_.start, o.seq1Range.start));
    h(L) && (m = m.deltaStart(-L.length));
    const b = e.getText(new P(o.seq1Range.endExclusive, _.endExclusive));
    h(b) && (m = m.deltaEnd(b.length));
    const p = re.fromOffsetPairs(u ? u.getEndExclusives() : Ye.zero, c ? c.getStarts() : Ye.max), E = m.intersect(p);
    a.length > 0 && E.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(E) : a.push(E);
  }), a;
}
class Ps {
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
    const n = t === 0 ? 0 : Bs(this.lines[t - 1]), i = t === this.lines.length ? 0 : Bs(this.lines[t]);
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
function Bs(e) {
  let t = 0;
  for (; t < e.length && (e.charCodeAt(t) === w.Space || e.charCodeAt(t) === w.Tab); )
    t++;
  return t;
}
class g1 {
  constructor() {
    this.dynamicProgrammingDiffing = new Cu(), this.myersDiffingAlgorithm = new Ea();
  }
  computeDiff(t, n, i) {
    if (t.length <= 1 && ta(t, n, (N, A) => N === A))
      return new _n([], [], !1);
    if (t.length === 1 && t[0].length === 0 || n.length === 1 && n[0].length === 0)
      return new _n([
        new He(new J(1, t.length + 1), new J(1, n.length + 1), [
          new Ne(new D(
            1,
            1,
            t.length,
            t[t.length - 1].length + 1
          ), new D(
            1,
            1,
            n.length,
            n[n.length - 1].length + 1
          ))
        ])
      ], [], !1);
    const r = i.maxComputationTimeMs === 0 ? nn.instance : new Ku(i.maxComputationTimeMs), s = !i.ignoreTrimWhitespace, a = /* @__PURE__ */ new Map();
    function u(N) {
      let A = a.get(N);
      return A === void 0 && (A = a.size, a.set(N, A)), A;
    }
    const o = t.map((N) => u(N.trim())), c = n.map((N) => u(N.trim())), m = new Ps(o, t), h = new Ps(c, n), _ = m.length + h.length < 1700 ? this.dynamicProgrammingDiffing.compute(m, h, r, (N, A) => t[N] === n[A] ? n[A].length === 0 ? 0.1 : 1 + Math.log(1 + n[A].length) : 0.99) : this.myersDiffingAlgorithm.compute(m, h, r);
    let L = _.diffs, b = _.hitTimeout;
    L = ks(m, h, L), L = h1(m, h, L);
    const p = [], E = (N) => {
      if (s)
        for (let A = 0; A < N; A++) {
          const T = y + A, W = R + A;
          if (t[T] !== n[W]) {
            const $ = this.refineDiff(t, n, new re(new P(T, T + 1), new P(W, W + 1)), r, s, i);
            for (const G of $.mappings)
              p.push(G);
            $.hitTimeout && (b = !0);
          }
        }
    };
    let y = 0, R = 0;
    for (const N of L) {
      Qt(() => N.seq1Range.start - y === N.seq2Range.start - R);
      const A = N.seq1Range.start - y;
      E(A), y = N.seq1Range.endExclusive, R = N.seq2Range.endExclusive;
      const T = this.refineDiff(t, n, N, r, s, i);
      T.hitTimeout && (b = !0);
      for (const W of T.mappings)
        p.push(W);
    }
    E(t.length - y);
    const v = new un(t), k = new un(n), B = Es(p, v, k);
    let z = [];
    return i.computeMoves && (z = this.computeMoves(B, t, n, o, c, r, s, i)), Qt(() => {
      function N(T, W) {
        if (T.lineNumber < 1 || T.lineNumber > W.length)
          return !1;
        const $ = W[T.lineNumber - 1];
        return !(T.column < 1 || T.column > $.length + 1);
      }
      function A(T, W) {
        return !(T.startLineNumber < 1 || T.startLineNumber > W.length + 1 || T.endLineNumberExclusive < 1 || T.endLineNumberExclusive > W.length + 1);
      }
      for (const T of B) {
        if (!T.innerChanges)
          return !1;
        for (const W of T.innerChanges)
          if (!(N(W.modifiedRange.getStartPosition(), n) && N(W.modifiedRange.getEndPosition(), n) && N(W.originalRange.getStartPosition(), t) && N(W.originalRange.getEndPosition(), t)))
            return !1;
        if (!A(T.modified, n) || !A(T.original, t))
          return !1;
      }
      return !0;
    }), new _n(B, z, b);
  }
  computeMoves(t, n, i, r, s, a, u, o) {
    return i1(t, n, i, r, s, a).map((h) => {
      const _ = this.refineDiff(n, i, new re(h.original.toOffsetRange(), h.modified.toOffsetRange()), a, u, o), L = Es(_.mappings, new un(n), new un(i), !0);
      return new Li(h, L);
    });
  }
  refineDiff(t, n, i, r, s, a) {
    const o = _1(i).toRangeMapping2(t, n), c = new Tn(t, o.originalRange, s), m = new Tn(n, o.modifiedRange, s), h = c.length + m.length < 500 ? this.dynamicProgrammingDiffing.compute(c, m, r) : this.myersDiffingAlgorithm.compute(c, m, r);
    let _ = h.diffs;
    return _ = ks(c, m, _), _ = Is(c, m, _, (b, p) => b.findWordContaining(p)), a.extendToSubwords && (_ = Is(c, m, _, (b, p) => b.findSubWordContaining(p), !0)), _ = c1(c, m, _), _ = f1(c, m, _), {
      mappings: _.map((b) => new Ne(c.translateRange(b.seq1Range), m.translateRange(b.seq2Range))),
      hitTimeout: h.hitTimeout
    };
  }
}
function _1(e) {
  return new Me(new J(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new J(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const Vt = {
  getLegacy: () => new Qu(),
  getDefault: () => new g1()
};
function it(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
class d {
  constructor(t, n, i, r = 1) {
    this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, t)) | 0, this.g = Math.min(255, Math.max(0, n)) | 0, this.b = Math.min(255, Math.max(0, i)) | 0, this.a = it(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.r === n.r && t.g === n.g && t.b === n.b && t.a === n.a;
  }
}
class Te {
  constructor(t, n, i, r) {
    this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = it(Math.max(Math.min(1, n), 0), 3), this.l = it(Math.max(Math.min(1, i), 0), 3), this.a = it(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = t.a, a = Math.max(n, i, r), u = Math.min(n, i, r);
    let o = 0, c = 0;
    const m = (u + a) / 2, h = a - u;
    if (h > 0) {
      switch (c = Math.min(m <= 0.5 ? h / (2 * m) : h / (2 - 2 * m), 1), a) {
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
    return new Te(o, c, m, s);
  }
  static _hue2rgb(t, n, i) {
    return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + (n - t) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? t + (n - t) * (2 / 3 - i) * 6 : t;
  }
  static toRGBA(t) {
    const n = t.h / 360, { s: i, l: r, a: s } = t;
    let a, u, o;
    if (i === 0)
      a = u = o = r;
    else {
      const c = r < 0.5 ? r * (1 + i) : r + i - r * i, m = 2 * r - c;
      a = Te._hue2rgb(m, c, n + 1 / 3), u = Te._hue2rgb(m, c, n), o = Te._hue2rgb(m, c, n - 1 / 3);
    }
    return new d(Math.round(a * 255), Math.round(u * 255), Math.round(o * 255), s);
  }
}
class Nt {
  constructor(t, n, i, r) {
    this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = it(Math.max(Math.min(1, n), 0), 3), this.v = it(Math.max(Math.min(1, i), 0), 3), this.a = it(Math.max(Math.min(1, r), 0), 3);
  }
  static equals(t, n) {
    return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
  }
  static fromRGBA(t) {
    const n = t.r / 255, i = t.g / 255, r = t.b / 255, s = Math.max(n, i, r), a = Math.min(n, i, r), u = s - a, o = s === 0 ? 0 : u / s;
    let c;
    return u === 0 ? c = 0 : s === n ? c = ((i - r) / u % 6 + 6) % 6 : s === i ? c = (r - n) / u + 2 : c = (n - i) / u + 4, new Nt(Math.round(c * 60), o, s, t.a);
  }
  static toRGBA(t) {
    const { h: n, s: i, v: r, a: s } = t, a = r * i, u = a * (1 - Math.abs(n / 60 % 2 - 1)), o = r - a;
    let [c, m, h] = [0, 0, 0];
    return n < 60 ? (c = a, m = u) : n < 120 ? (c = u, m = a) : n < 180 ? (m = a, h = u) : n < 240 ? (m = u, h = a) : n < 300 ? (c = u, h = a) : n <= 360 && (c = a, h = u), c = Math.round((c + o) * 255), m = Math.round((m + o) * 255), h = Math.round((h + o) * 255), new d(c, m, h, s);
  }
}
const Q = class Q {
  static fromHex(t) {
    return Q.Format.CSS.parseHex(t) || Q.red;
  }
  static equals(t, n) {
    return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
  }
  get hsla() {
    return this._hsla ? this._hsla : Te.fromRGBA(this.rgba);
  }
  get hsva() {
    return this._hsva ? this._hsva : Nt.fromRGBA(this.rgba);
  }
  constructor(t) {
    if (t)
      if (t instanceof d)
        this.rgba = t;
      else if (t instanceof Te)
        this._hsla = t, this.rgba = Te.toRGBA(t);
      else if (t instanceof Nt)
        this._hsva = t, this.rgba = Nt.toRGBA(t);
      else
        throw new Error("Invalid color ctor argument");
    else throw new Error("Color needs a value");
  }
  equals(t) {
    return !!t && d.equals(this.rgba, t.rgba) && Te.equals(this.hsla, t.hsla) && Nt.equals(this.hsva, t.hsva);
  }
  getRelativeLuminance() {
    const t = Q._relativeLuminanceForComponent(this.rgba.r), n = Q._relativeLuminanceForComponent(this.rgba.g), i = Q._relativeLuminanceForComponent(this.rgba.b), r = 0.2126 * t + 0.7152 * n + 0.0722 * i;
    return it(r, 4);
  }
  reduceRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i > 0 || r > 0 || s > 0); )
      i -= Math.max(0, Math.ceil(i * 0.1)), r -= Math.max(0, Math.ceil(r * 0.1)), s -= Math.max(0, Math.ceil(s * 0.1)), a = this.getContrastRatio(new Q(new d(i, r, s)));
    return new Q(new d(i, r, s));
  }
  increaseRelativeLuminace(t, n) {
    let { r: i, g: r, b: s } = t.rgba, a = this.getContrastRatio(t);
    for (; a < n && (i < 255 || r < 255 || s < 255); )
      i = Math.min(255, i + Math.ceil((255 - i) * 0.1)), r = Math.min(255, r + Math.ceil((255 - r) * 0.1)), s = Math.min(255, s + Math.ceil((255 - s) * 0.1)), a = this.getContrastRatio(new Q(new d(i, r, s)));
    return new Q(new d(i, r, s));
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
        const o = this.reduceRelativeLuminace(t, n), c = this.getContrastRatio(o);
        if (c < n) {
          const m = this.increaseRelativeLuminace(t, n), h = this.getContrastRatio(m);
          return c > h ? o : m;
        }
        return o;
      }
      const a = this.increaseRelativeLuminace(t, n), u = this.getContrastRatio(a);
      if (u < n) {
        const o = this.reduceRelativeLuminace(t, n), c = this.getContrastRatio(o);
        return u > c ? a : o;
      }
      return a;
    }
    return t;
  }
  lighten(t) {
    return new Q(new Te(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
  }
  darken(t) {
    return new Q(new Te(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
  }
  transparent(t) {
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new Q(new d(n, i, r, s * t));
  }
  isTransparent() {
    return this.rgba.a === 0;
  }
  isOpaque() {
    return this.rgba.a === 1;
  }
  opposite() {
    return new Q(new d(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
  }
  blend(t) {
    const n = t.rgba, i = this.rgba.a, r = n.a, s = i + r * (1 - i);
    if (s < 1e-6)
      return Q.transparent;
    const a = this.rgba.r * i / s + n.r * r * (1 - i) / s, u = this.rgba.g * i / s + n.g * r * (1 - i) / s, o = this.rgba.b * i / s + n.b * r * (1 - i) / s;
    return new Q(new d(a, u, o, s));
  }
  mix(t, n = 0.5) {
    const i = Math.min(Math.max(n, 0), 1), r = this.rgba, s = t.rgba, a = r.r + (s.r - r.r) * i, u = r.g + (s.g - r.g) * i, o = r.b + (s.b - r.b) * i, c = r.a + (s.a - r.a) * i;
    return new Q(new d(a, u, o, c));
  }
  makeOpaque(t) {
    if (this.isOpaque() || t.rgba.a !== 1)
      return this;
    const { r: n, g: i, b: r, a: s } = this.rgba;
    return new Q(new d(
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
    return new Q(new d(
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
};
Q.white = new Q(new d(255, 255, 255, 1)), Q.black = new Q(new d(0, 0, 0, 1)), Q.red = new Q(new d(255, 0, 0, 1)), Q.blue = new Q(new d(0, 0, 255, 1)), Q.green = new Q(new d(0, 255, 0, 1)), Q.cyan = new Q(new d(0, 255, 255, 1)), Q.lightgrey = new Q(new d(211, 211, 211, 1)), Q.transparent = new Q(new d(0, 0, 0, 0));
let Bt = Q;
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
      function u(p) {
        const E = p.toString(16);
        return E.length !== 2 ? "0" + E : E;
      }
      function o(p) {
        return `#${u(p.rgba.r)}${u(p.rgba.g)}${u(p.rgba.b)}`;
      }
      n.formatHex = o;
      function c(p, E = !1) {
        return E && p.rgba.a === 1 ? e.Format.CSS.formatHex(p) : `#${u(p.rgba.r)}${u(p.rgba.g)}${u(p.rgba.b)}${u(Math.round(p.rgba.a * 255))}`;
      }
      n.formatHexA = c;
      function m(p) {
        return p.isOpaque() ? e.Format.CSS.formatHex(p) : e.Format.CSS.formatRGBA(p);
      }
      n.format = m;
      function h(p) {
        var E, y, R, v, k, B, z;
        if (p === "transparent")
          return e.transparent;
        if (p.startsWith("#"))
          return L(p);
        if (p.startsWith("rgba(")) {
          const N = p.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
          if (!N)
            throw new Error("Invalid color format " + p);
          const A = parseInt(((E = N.groups) == null ? void 0 : E.r) ?? "0"), T = parseInt(((y = N.groups) == null ? void 0 : y.g) ?? "0"), W = parseInt(((R = N.groups) == null ? void 0 : R.b) ?? "0"), $ = parseFloat(((v = N.groups) == null ? void 0 : v.a) ?? "0");
          return new e(new d(A, T, W, $));
        }
        if (p.startsWith("rgb(")) {
          const N = p.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
          if (!N)
            throw new Error("Invalid color format " + p);
          const A = parseInt(((k = N.groups) == null ? void 0 : k.r) ?? "0"), T = parseInt(((B = N.groups) == null ? void 0 : B.g) ?? "0"), W = parseInt(((z = N.groups) == null ? void 0 : z.b) ?? "0");
          return new e(new d(A, T, W));
        }
        return _(p);
      }
      n.parse = h;
      function _(p) {
        switch (p) {
          case "aliceblue":
            return new e(new d(240, 248, 255, 1));
          case "antiquewhite":
            return new e(new d(250, 235, 215, 1));
          case "aqua":
            return new e(new d(0, 255, 255, 1));
          case "aquamarine":
            return new e(new d(127, 255, 212, 1));
          case "azure":
            return new e(new d(240, 255, 255, 1));
          case "beige":
            return new e(new d(245, 245, 220, 1));
          case "bisque":
            return new e(new d(255, 228, 196, 1));
          case "black":
            return new e(new d(0, 0, 0, 1));
          case "blanchedalmond":
            return new e(new d(255, 235, 205, 1));
          case "blue":
            return new e(new d(0, 0, 255, 1));
          case "blueviolet":
            return new e(new d(138, 43, 226, 1));
          case "brown":
            return new e(new d(165, 42, 42, 1));
          case "burlywood":
            return new e(new d(222, 184, 135, 1));
          case "cadetblue":
            return new e(new d(95, 158, 160, 1));
          case "chartreuse":
            return new e(new d(127, 255, 0, 1));
          case "chocolate":
            return new e(new d(210, 105, 30, 1));
          case "coral":
            return new e(new d(255, 127, 80, 1));
          case "cornflowerblue":
            return new e(new d(100, 149, 237, 1));
          case "cornsilk":
            return new e(new d(255, 248, 220, 1));
          case "crimson":
            return new e(new d(220, 20, 60, 1));
          case "cyan":
            return new e(new d(0, 255, 255, 1));
          case "darkblue":
            return new e(new d(0, 0, 139, 1));
          case "darkcyan":
            return new e(new d(0, 139, 139, 1));
          case "darkgoldenrod":
            return new e(new d(184, 134, 11, 1));
          case "darkgray":
            return new e(new d(169, 169, 169, 1));
          case "darkgreen":
            return new e(new d(0, 100, 0, 1));
          case "darkgrey":
            return new e(new d(169, 169, 169, 1));
          case "darkkhaki":
            return new e(new d(189, 183, 107, 1));
          case "darkmagenta":
            return new e(new d(139, 0, 139, 1));
          case "darkolivegreen":
            return new e(new d(85, 107, 47, 1));
          case "darkorange":
            return new e(new d(255, 140, 0, 1));
          case "darkorchid":
            return new e(new d(153, 50, 204, 1));
          case "darkred":
            return new e(new d(139, 0, 0, 1));
          case "darksalmon":
            return new e(new d(233, 150, 122, 1));
          case "darkseagreen":
            return new e(new d(143, 188, 143, 1));
          case "darkslateblue":
            return new e(new d(72, 61, 139, 1));
          case "darkslategray":
            return new e(new d(47, 79, 79, 1));
          case "darkslategrey":
            return new e(new d(47, 79, 79, 1));
          case "darkturquoise":
            return new e(new d(0, 206, 209, 1));
          case "darkviolet":
            return new e(new d(148, 0, 211, 1));
          case "deeppink":
            return new e(new d(255, 20, 147, 1));
          case "deepskyblue":
            return new e(new d(0, 191, 255, 1));
          case "dimgray":
            return new e(new d(105, 105, 105, 1));
          case "dimgrey":
            return new e(new d(105, 105, 105, 1));
          case "dodgerblue":
            return new e(new d(30, 144, 255, 1));
          case "firebrick":
            return new e(new d(178, 34, 34, 1));
          case "floralwhite":
            return new e(new d(255, 250, 240, 1));
          case "forestgreen":
            return new e(new d(34, 139, 34, 1));
          case "fuchsia":
            return new e(new d(255, 0, 255, 1));
          case "gainsboro":
            return new e(new d(220, 220, 220, 1));
          case "ghostwhite":
            return new e(new d(248, 248, 255, 1));
          case "gold":
            return new e(new d(255, 215, 0, 1));
          case "goldenrod":
            return new e(new d(218, 165, 32, 1));
          case "gray":
            return new e(new d(128, 128, 128, 1));
          case "green":
            return new e(new d(0, 128, 0, 1));
          case "greenyellow":
            return new e(new d(173, 255, 47, 1));
          case "grey":
            return new e(new d(128, 128, 128, 1));
          case "honeydew":
            return new e(new d(240, 255, 240, 1));
          case "hotpink":
            return new e(new d(255, 105, 180, 1));
          case "indianred":
            return new e(new d(205, 92, 92, 1));
          case "indigo":
            return new e(new d(75, 0, 130, 1));
          case "ivory":
            return new e(new d(255, 255, 240, 1));
          case "khaki":
            return new e(new d(240, 230, 140, 1));
          case "lavender":
            return new e(new d(230, 230, 250, 1));
          case "lavenderblush":
            return new e(new d(255, 240, 245, 1));
          case "lawngreen":
            return new e(new d(124, 252, 0, 1));
          case "lemonchiffon":
            return new e(new d(255, 250, 205, 1));
          case "lightblue":
            return new e(new d(173, 216, 230, 1));
          case "lightcoral":
            return new e(new d(240, 128, 128, 1));
          case "lightcyan":
            return new e(new d(224, 255, 255, 1));
          case "lightgoldenrodyellow":
            return new e(new d(250, 250, 210, 1));
          case "lightgray":
            return new e(new d(211, 211, 211, 1));
          case "lightgreen":
            return new e(new d(144, 238, 144, 1));
          case "lightgrey":
            return new e(new d(211, 211, 211, 1));
          case "lightpink":
            return new e(new d(255, 182, 193, 1));
          case "lightsalmon":
            return new e(new d(255, 160, 122, 1));
          case "lightseagreen":
            return new e(new d(32, 178, 170, 1));
          case "lightskyblue":
            return new e(new d(135, 206, 250, 1));
          case "lightslategray":
            return new e(new d(119, 136, 153, 1));
          case "lightslategrey":
            return new e(new d(119, 136, 153, 1));
          case "lightsteelblue":
            return new e(new d(176, 196, 222, 1));
          case "lightyellow":
            return new e(new d(255, 255, 224, 1));
          case "lime":
            return new e(new d(0, 255, 0, 1));
          case "limegreen":
            return new e(new d(50, 205, 50, 1));
          case "linen":
            return new e(new d(250, 240, 230, 1));
          case "magenta":
            return new e(new d(255, 0, 255, 1));
          case "maroon":
            return new e(new d(128, 0, 0, 1));
          case "mediumaquamarine":
            return new e(new d(102, 205, 170, 1));
          case "mediumblue":
            return new e(new d(0, 0, 205, 1));
          case "mediumorchid":
            return new e(new d(186, 85, 211, 1));
          case "mediumpurple":
            return new e(new d(147, 112, 219, 1));
          case "mediumseagreen":
            return new e(new d(60, 179, 113, 1));
          case "mediumslateblue":
            return new e(new d(123, 104, 238, 1));
          case "mediumspringgreen":
            return new e(new d(0, 250, 154, 1));
          case "mediumturquoise":
            return new e(new d(72, 209, 204, 1));
          case "mediumvioletred":
            return new e(new d(199, 21, 133, 1));
          case "midnightblue":
            return new e(new d(25, 25, 112, 1));
          case "mintcream":
            return new e(new d(245, 255, 250, 1));
          case "mistyrose":
            return new e(new d(255, 228, 225, 1));
          case "moccasin":
            return new e(new d(255, 228, 181, 1));
          case "navajowhite":
            return new e(new d(255, 222, 173, 1));
          case "navy":
            return new e(new d(0, 0, 128, 1));
          case "oldlace":
            return new e(new d(253, 245, 230, 1));
          case "olive":
            return new e(new d(128, 128, 0, 1));
          case "olivedrab":
            return new e(new d(107, 142, 35, 1));
          case "orange":
            return new e(new d(255, 165, 0, 1));
          case "orangered":
            return new e(new d(255, 69, 0, 1));
          case "orchid":
            return new e(new d(218, 112, 214, 1));
          case "palegoldenrod":
            return new e(new d(238, 232, 170, 1));
          case "palegreen":
            return new e(new d(152, 251, 152, 1));
          case "paleturquoise":
            return new e(new d(175, 238, 238, 1));
          case "palevioletred":
            return new e(new d(219, 112, 147, 1));
          case "papayawhip":
            return new e(new d(255, 239, 213, 1));
          case "peachpuff":
            return new e(new d(255, 218, 185, 1));
          case "peru":
            return new e(new d(205, 133, 63, 1));
          case "pink":
            return new e(new d(255, 192, 203, 1));
          case "plum":
            return new e(new d(221, 160, 221, 1));
          case "powderblue":
            return new e(new d(176, 224, 230, 1));
          case "purple":
            return new e(new d(128, 0, 128, 1));
          case "rebeccapurple":
            return new e(new d(102, 51, 153, 1));
          case "red":
            return new e(new d(255, 0, 0, 1));
          case "rosybrown":
            return new e(new d(188, 143, 143, 1));
          case "royalblue":
            return new e(new d(65, 105, 225, 1));
          case "saddlebrown":
            return new e(new d(139, 69, 19, 1));
          case "salmon":
            return new e(new d(250, 128, 114, 1));
          case "sandybrown":
            return new e(new d(244, 164, 96, 1));
          case "seagreen":
            return new e(new d(46, 139, 87, 1));
          case "seashell":
            return new e(new d(255, 245, 238, 1));
          case "sienna":
            return new e(new d(160, 82, 45, 1));
          case "silver":
            return new e(new d(192, 192, 192, 1));
          case "skyblue":
            return new e(new d(135, 206, 235, 1));
          case "slateblue":
            return new e(new d(106, 90, 205, 1));
          case "slategray":
            return new e(new d(112, 128, 144, 1));
          case "slategrey":
            return new e(new d(112, 128, 144, 1));
          case "snow":
            return new e(new d(255, 250, 250, 1));
          case "springgreen":
            return new e(new d(0, 255, 127, 1));
          case "steelblue":
            return new e(new d(70, 130, 180, 1));
          case "tan":
            return new e(new d(210, 180, 140, 1));
          case "teal":
            return new e(new d(0, 128, 128, 1));
          case "thistle":
            return new e(new d(216, 191, 216, 1));
          case "tomato":
            return new e(new d(255, 99, 71, 1));
          case "turquoise":
            return new e(new d(64, 224, 208, 1));
          case "violet":
            return new e(new d(238, 130, 238, 1));
          case "wheat":
            return new e(new d(245, 222, 179, 1));
          case "white":
            return new e(new d(255, 255, 255, 1));
          case "whitesmoke":
            return new e(new d(245, 245, 245, 1));
          case "yellow":
            return new e(new d(255, 255, 0, 1));
          case "yellowgreen":
            return new e(new d(154, 205, 50, 1));
          default:
            return null;
        }
      }
      function L(p) {
        const E = p.length;
        if (E === 0 || p.charCodeAt(0) !== w.Hash)
          return null;
        if (E === 7) {
          const y = 16 * b(p.charCodeAt(1)) + b(p.charCodeAt(2)), R = 16 * b(p.charCodeAt(3)) + b(p.charCodeAt(4)), v = 16 * b(p.charCodeAt(5)) + b(p.charCodeAt(6));
          return new e(new d(y, R, v, 1));
        }
        if (E === 9) {
          const y = 16 * b(p.charCodeAt(1)) + b(p.charCodeAt(2)), R = 16 * b(p.charCodeAt(3)) + b(p.charCodeAt(4)), v = 16 * b(p.charCodeAt(5)) + b(p.charCodeAt(6)), k = 16 * b(p.charCodeAt(7)) + b(p.charCodeAt(8));
          return new e(new d(y, R, v, k / 255));
        }
        if (E === 4) {
          const y = b(p.charCodeAt(1)), R = b(p.charCodeAt(2)), v = b(p.charCodeAt(3));
          return new e(new d(16 * y + y, 16 * R + R, 16 * v + v));
        }
        if (E === 5) {
          const y = b(p.charCodeAt(1)), R = b(p.charCodeAt(2)), v = b(p.charCodeAt(3)), k = b(p.charCodeAt(4));
          return new e(new d(16 * y + y, 16 * R + R, 16 * v + v, (16 * k + k) / 255));
        }
        return null;
      }
      n.parseHex = L;
      function b(p) {
        switch (p) {
          case w.Digit0:
            return 0;
          case w.Digit1:
            return 1;
          case w.Digit2:
            return 2;
          case w.Digit3:
            return 3;
          case w.Digit4:
            return 4;
          case w.Digit5:
            return 5;
          case w.Digit6:
            return 6;
          case w.Digit7:
            return 7;
          case w.Digit8:
            return 8;
          case w.Digit9:
            return 9;
          case w.a:
            return 10;
          case w.A:
            return 10;
          case w.b:
            return 11;
          case w.B:
            return 11;
          case w.c:
            return 12;
          case w.C:
            return 12;
          case w.d:
            return 13;
          case w.D:
            return 13;
          case w.e:
            return 14;
          case w.E:
            return 14;
          case w.f:
            return 15;
          case w.F:
            return 15;
        }
        return 0;
      }
    })(t.CSS || (t.CSS = {}));
  })(e.Format || (e.Format = {}));
})(Bt || (Bt = {}));
function Aa(e) {
  const t = [];
  for (const n of e) {
    const i = Number(n);
    (i || i === 0 && n.replace(/\s/g, "") !== "") && t.push(i);
  }
  return t;
}
function Ni(e, t, n, i) {
  return {
    red: e / 255,
    blue: n / 255,
    green: t / 255,
    alpha: i
  };
}
function qt(e, t) {
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
function p1(e, t) {
  if (!e)
    return;
  const n = Bt.Format.CSS.parseHex(t);
  if (n)
    return {
      range: e,
      color: Ni(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
    };
}
function Os(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = Aa(r);
  return {
    range: e,
    color: Ni(s[0], s[1], s[2], n ? s[3] : 1)
  };
}
function Vs(e, t, n) {
  if (!e || t.length !== 1)
    return;
  const r = t[0].values(), s = Aa(r), a = new Bt(new Te(
    s[0],
    s[1] / 100,
    s[2] / 100,
    n ? s[3] : 1
  ));
  return {
    range: e,
    color: Ni(a.rgba.r, a.rgba.g, a.rgba.b, a.rgba.a)
  };
}
function Ht(e, t) {
  return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function b1(e) {
  const t = [], n = new RegExp(`\\b(rgb|rgba|hsl|hsla)(\\([0-9\\s,.\\%]*\\))|^(#)([A-Fa-f0-9]{3})\\b|^(#)([A-Fa-f0-9]{4})\\b|^(#)([A-Fa-f0-9]{6})\\b|^(#)([A-Fa-f0-9]{8})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{3})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{4})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{6})\\b|(?<=['"\\s])(#)([A-Fa-f0-9]{8})\\b`, "gm"), i = Ht(e, n);
  if (i.length > 0)
    for (const r of i) {
      const s = r.filter((c) => c !== void 0), a = s[1], u = s[2];
      if (!u)
        continue;
      let o;
      if (a === "rgb") {
        const c = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm;
        o = Os(qt(e, r), Ht(u, c), !1);
      } else if (a === "rgba") {
        const c = /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*,\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm;
        o = Os(qt(e, r), Ht(u, c), !0);
      } else if (a === "hsl") {
        const c = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm;
        o = Vs(qt(e, r), Ht(u, c), !1);
      } else if (a === "hsla") {
        const c = /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm;
        o = Vs(qt(e, r), Ht(u, c), !0);
      } else a === "#" && (o = p1(qt(e, r), a + u));
      o && t.push(o);
    }
  return t;
}
function d1(e) {
  return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : b1(e);
}
const w1 = /^-+|-+$/g, qs = 100, L1 = 5;
function N1(e, t) {
  var i;
  let n = [];
  if (t.findRegionSectionHeaders && ((i = t.foldingRules) != null && i.markers)) {
    const r = x1(e, t);
    n = n.concat(r);
  }
  if (t.findMarkSectionHeaders) {
    const r = R1(e, t);
    n = n.concat(r);
  }
  return n;
}
function x1(e, t) {
  const n = [], i = e.getLineCount();
  for (let r = 1; r <= i; r++) {
    const s = e.getLineContent(r), a = s.match(t.foldingRules.markers.start);
    if (a) {
      const u = { startLineNumber: r, startColumn: a[0].length + 1, endLineNumber: r, endColumn: s.length + 1 };
      if (u.endColumn > u.startColumn) {
        const o = {
          range: u,
          ...E1(s.substring(a[0].length)),
          shouldBeInComments: !1
        };
        (o.text || o.hasSeparatorLine) && n.push(o);
      }
    }
  }
  return n;
}
function R1(e, t) {
  const n = [], i = e.getLineCount();
  if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "")
    return n;
  const r = Su(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${r ? "s" : ""}`);
  if (yl(s))
    return n;
  for (let a = 1; a <= i; a += qs - L1) {
    const u = Math.min(a + qs - 1, i), o = [];
    for (let h = a; h <= u; h++)
      o.push(e.getLineContent(h));
    const c = o.join(`
`);
    s.lastIndex = 0;
    let m;
    for (; (m = s.exec(c)) !== null; ) {
      const h = c.substring(0, m.index), _ = (h.match(/\n/g) || []).length, L = a + _, b = m[0].split(`
`), p = b.length, E = L + p - 1, y = h.lastIndexOf(`
`) + 1, R = m.index - y + 1, v = b[b.length - 1], k = p === 1 ? R + m[0].length : v.length + 1, B = {
        startLineNumber: L,
        startColumn: R,
        endLineNumber: E,
        endColumn: k
      }, z = (m.groups ?? {}).label ?? "", N = ((m.groups ?? {}).separator ?? "") !== "", A = {
        range: B,
        text: z,
        hasSeparatorLine: N,
        shouldBeInComments: !0
      };
      (A.text || A.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < A.range.startLineNumber) && n.push(A), s.lastIndex = m.index + m[0].length;
    }
  }
  return n;
}
function E1(e) {
  e = e.trim();
  const t = e.startsWith("-");
  return e = e.replace(w1, ""), { text: e, hasSeparatorLine: t };
}
function Ke(e) {
  return e === w.Slash || e === w.Backslash;
}
function va(e) {
  return e.replace(/[\\/]/g, ee.sep);
}
function A1(e) {
  return e.indexOf("/") === -1 && (e = va(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function Hs(e, t = ee.sep) {
  if (!e)
    return "";
  const n = e.length, i = e.charCodeAt(0);
  if (Ke(i)) {
    if (Ke(e.charCodeAt(1)) && !Ke(e.charCodeAt(2))) {
      let s = 3;
      const a = s;
      for (; s < n && !Ke(e.charCodeAt(s)); s++)
        ;
      if (a !== s && !Ke(e.charCodeAt(s + 1))) {
        for (s += 1; s < n; s++)
          if (Ke(e.charCodeAt(s)))
            return e.slice(0, s + 1).replace(/[\\/]/g, t);
      }
    }
    return t;
  } else if (v1(i) && e.charCodeAt(1) === w.Colon)
    return Ke(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
  let r = e.indexOf("://");
  if (r !== -1) {
    for (r += 3; r < n; r++)
      if (Ke(e.charCodeAt(r)))
        return e.slice(0, r + 1);
  }
  return "";
}
function Ws(e, t, n, i = gn) {
  if (e === t)
    return !0;
  if (!e || !t || t.length > e.length)
    return !1;
  if (n) {
    if (!Fl(e, t))
      return !1;
    if (t.length === e.length)
      return !0;
    let s = t.length;
    return t.charAt(t.length - 1) === i && s--, e.charAt(s) === i;
  }
  return t.charAt(t.length - 1) !== i && (t += i), e.indexOf(t) === 0;
}
function v1(e) {
  return e >= w.A && e <= w.Z || e >= w.a && e <= w.z;
}
var _e;
(function(e) {
  e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatEditor = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.vscodeChatSession = "vscode-chat-session", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view";
})(_e || (_e = {}));
const y1 = "tkn";
class T1 {
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
    this._serverRootPath = ee.join(n ?? "/", U1(t));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return ee.join(this._serverRootPath, _e.vscodeRemoteResource);
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
      } catch (u) {
        return Wt(u), t;
      }
    const n = t.authority;
    let i = this._hosts[n];
    i && i.indexOf(":") !== -1 && i.indexOf("[") === -1 && (i = `[${i}]`);
    const r = this._ports[n], s = this._connectionTokens[n];
    let a = `path=${encodeURIComponent(t.path)}`;
    return typeof s == "string" && (a += `&${y1}=${encodeURIComponent(s)}`), me.from({
      scheme: dl ? this._preferredWebSchema : _e.vscodeRemoteResource,
      authority: `${i}:${r}`,
      path: this._remoteResourcesPath,
      query: a
    });
  }
}
const M1 = new T1();
function U1(e) {
  return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const D1 = "vscode-app", yt = class yt {
  constructor() {
    this.staticBrowserUris = new $n(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
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
    return t.scheme === _e.vscodeRemote ? M1.rewrite(t) : t.scheme === _e.file && (bl || Ll === `${_e.vscodeFileResource}://${yt.FALLBACK_AUTHORITY}`) ? t.with({
      scheme: _e.vscodeFileResource,
      authority: t.authority || yt.FALLBACK_AUTHORITY,
      query: null,
      fragment: null
    }) : this.staticBrowserUris.get(t) ?? t;
  }
  asFileUri(t) {
    const n = this.toUri(t);
    return this.uriToFileUri(n);
  }
  uriToFileUri(t) {
    return t.scheme === _e.vscodeFileResource ? t.with({
      scheme: _e.file,
      authority: t.authority !== yt.FALLBACK_AUTHORITY ? t.authority : null,
      query: null,
      fragment: null
    }) : t;
  }
  toUri(t) {
    if (me.isUri(t))
      return t;
    if (globalThis._VSCODE_FILE_ROOT) {
      const n = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(n))
        return me.joinPath(me.parse(n, !0), t);
      const i = pu(n, t);
      return me.file(i);
    }
    return me.parse(this.toUrl(t));
  }
  registerStaticBrowserUri(t, n) {
    return this.staticBrowserUris.set(t, n), Jt(() => {
      this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
    });
  }
  getRegisteredBrowserUris() {
    return this.staticBrowserUris.keys();
  }
};
yt.FALLBACK_AUTHORITY = D1;
let mi = yt;
new mi();
var Gs;
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
    typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : me.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
    const u = a == null ? void 0 : a.get(n);
    if (u)
      return t.get(u);
  }
  e.getHeadersFromQuery = i;
  function r(s, a, u) {
    if (!globalThis.crossOriginIsolated)
      return;
    const o = a && u ? "3" : u ? "2" : "1";
    s instanceof URLSearchParams ? s.set(n, o) : s[n] = o;
  }
  e.addSearchParam = r;
})(Gs || (Gs = {}));
function ze(e) {
  return An(e, !0);
}
class k1 {
  constructor(t) {
    this._ignorePathCasing = t;
  }
  compare(t, n, i = !1) {
    return t === n ? 0 : Ul(this.getComparisonKey(t, i), this.getComparisonKey(n, i));
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
      if (t.scheme === _e.file)
        return Ws(ze(t), ze(n), this._ignorePathCasing(t)) && t.query === n.query && (i || t.fragment === n.fragment);
      if ($s(t.authority, n.authority))
        return Ws(t.path, n.path, this._ignorePathCasing(t), "/") && t.query === n.query && (i || t.fragment === n.fragment);
    }
    return !1;
  }
  joinPath(t, ...n) {
    return me.joinPath(t, ...n);
  }
  basenameOrAuthority(t) {
    return F1(t) || t.authority;
  }
  basename(t) {
    return ee.basename(t.path);
  }
  extname(t) {
    return ee.extname(t.path);
  }
  dirname(t) {
    if (t.path.length === 0)
      return t;
    let n;
    return t.scheme === _e.file ? n = me.file(wu(ze(t))).path : (n = ee.dirname(t.path), t.authority && n.length && n.charCodeAt(0) !== w.Slash && (console.error(`dirname("${t.toString})) resulted in a relative path`), n = "/")), t.with({
      path: n
    });
  }
  normalizePath(t) {
    if (!t.path.length)
      return t;
    let n;
    return t.scheme === _e.file ? n = me.file(_u(ze(t))).path : n = ee.normalize(t.path), t.with({
      path: n
    });
  }
  relativePath(t, n) {
    if (t.scheme !== n.scheme || !$s(t.authority, n.authority))
      return;
    if (t.scheme === _e.file) {
      const s = du(ze(t), ze(n));
      return It ? va(s) : s;
    }
    let i = t.path || "/";
    const r = n.path || "/";
    if (this._ignorePathCasing(t)) {
      let s = 0;
      for (const a = Math.min(i.length, r.length); s < a && !(i.charCodeAt(s) !== r.charCodeAt(s) && i.charAt(s).toLowerCase() !== r.charAt(s).toLowerCase()); s++)
        ;
      i = r.substr(0, s) + i.substr(s);
    }
    return ee.relative(i, r);
  }
  resolvePath(t, n) {
    if (t.scheme === _e.file) {
      const i = me.file(bu(ze(t), n));
      return t.with({
        authority: i.authority,
        path: i.path
      });
    }
    return n = A1(n), t.with({
      path: ee.resolve(t.path, n)
    });
  }
  isAbsolutePath(t) {
    return !!t.path && t.path[0] === "/";
  }
  isEqualAuthority(t, n) {
    return t === n || t !== void 0 && n !== void 0 && kl(t, n);
  }
  hasTrailingPathSeparator(t, n = gn) {
    if (t.scheme === _e.file) {
      const i = ze(t);
      return i.length > Hs(i).length && i[i.length - 1] === n;
    } else {
      const i = t.path;
      return i.length > 1 && i.charCodeAt(i.length - 1) === w.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath);
    }
  }
  removeTrailingPathSeparator(t, n = gn) {
    return zs(t, n) ? t.with({ path: t.path.substr(0, t.path.length - 1) }) : t;
  }
  addTrailingPathSeparator(t, n = gn) {
    let i = !1;
    if (t.scheme === _e.file) {
      const r = ze(t);
      i = r !== void 0 && r.length === Hs(r).length && r[r.length - 1] === n;
    } else {
      n = "/";
      const r = t.path;
      i = r.length === 1 && r.charCodeAt(r.length - 1) === w.Slash;
    }
    return !i && !zs(t, n) ? t.with({ path: t.path + "/" }) : t;
  }
}
const K = new k1(() => !1);
K.isEqual.bind(K);
K.isEqualOrParent.bind(K);
K.getComparisonKey.bind(K);
K.basenameOrAuthority.bind(K);
const F1 = K.basename.bind(K);
K.extname.bind(K);
K.dirname.bind(K);
K.joinPath.bind(K);
K.normalizePath.bind(K);
K.relativePath.bind(K);
K.resolvePath.bind(K);
K.isAbsolutePath.bind(K);
const $s = K.isEqualAuthority.bind(K), zs = K.hasTrailingPathSeparator.bind(K);
K.removeTrailingPathSeparator.bind(K);
K.addTrailingPathSeparator.bind(K);
var js;
(function(e) {
  e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
  function t(n) {
    const i = /* @__PURE__ */ new Map();
    n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((a) => {
      const [u, o] = a.split(":");
      u && o && i.set(u, o);
    });
    const s = n.path.substring(0, n.path.indexOf(";"));
    return s && i.set(e.META_DATA_MIME, s), i;
  }
  e.parseMetaData = t;
})(js || (js = {}));
var Xs;
(function(e) {
  e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(Xs || (Xs = {}));
var Ys;
(function(e) {
  async function t(i) {
    let r;
    const s = await Promise.all(i.map((a) => a.then((u) => u, (u) => {
      r || (r = u);
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
})(Ys || (Ys = {}));
var ke;
(function(e) {
  e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(ke || (ke = {}));
const we = class we {
  static fromArray(t) {
    return new we((n) => {
      n.emitMany(t);
    });
  }
  static fromPromise(t) {
    return new we(async (n) => {
      n.emitMany(await t);
    });
  }
  static fromPromisesResolveOrder(t) {
    return new we(async (n) => {
      await Promise.all(t.map(async (i) => n.emitOne(await i)));
    });
  }
  static merge(t) {
    return new we(async (n) => {
      await Promise.all(t.map(async (i) => {
        for await (const r of i)
          n.emitOne(r);
      }));
    });
  }
  constructor(t, n) {
    this._state = ke.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new ye(), queueMicrotask(async () => {
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
          if (this._state === ke.DoneError)
            throw this._error;
          if (t < this._results.length)
            return { done: !1, value: this._results[t++] };
          if (this._state === ke.DoneOK)
            return { done: !0, value: void 0 };
          await dn.toPromise(this._onStateChanged.event);
        } while (!0);
      },
      return: async () => {
        var n;
        return (n = this._onReturn) == null || n.call(this), { done: !0, value: void 0 };
      }
    };
  }
  static map(t, n) {
    return new we(async (i) => {
      for await (const r of t)
        i.emitOne(n(r));
    });
  }
  map(t) {
    return we.map(this, t);
  }
  static filter(t, n) {
    return new we(async (i) => {
      for await (const r of t)
        n(r) && i.emitOne(r);
    });
  }
  filter(t) {
    return we.filter(this, t);
  }
  static coalesce(t) {
    return we.filter(t, (n) => !!n);
  }
  coalesce() {
    return we.coalesce(this);
  }
  static async toPromise(t) {
    const n = [];
    for await (const i of t)
      n.push(i);
    return n;
  }
  toPromise() {
    return we.toPromise(this);
  }
  emitOne(t) {
    this._state === ke.Initial && (this._results.push(t), this._onStateChanged.fire());
  }
  emitMany(t) {
    this._state === ke.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
  }
  resolve() {
    this._state === ke.Initial && (this._state = ke.DoneOK, this._onStateChanged.fire());
  }
  reject(t) {
    this._state === ke.Initial && (this._state = ke.DoneError, this._error = t, this._onStateChanged.fire());
  }
};
we.EMPTY = we.fromArray([]);
let Qs = we;
class S1 {
  constructor(t) {
    this.values = t, this.prefixSum = new Uint32Array(t.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(t, n) {
    t = ft(t);
    const i = this.values, r = this.prefixSum, s = n.length;
    return s === 0 ? !1 : (this.values = new Uint32Array(i.length + s), this.values.set(i.subarray(0, t), 0), this.values.set(i.subarray(t), t + s), this.values.set(n, t), t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
  }
  setValue(t, n) {
    return t = ft(t), n = ft(n), this.values[t] === n ? !1 : (this.values[t] = n, t - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = t - 1), !0);
  }
  removeValues(t, n) {
    t = ft(t), n = ft(n);
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
    return t < 0 ? 0 : (t = ft(t), this._getPrefixSum(t));
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
    return new I1(r, t - a);
  }
}
class I1 {
  constructor(t, n) {
    this.index = t, this.remainder = n, this._prefixSumIndexOfResultBrand = void 0, this.index = t, this.remainder = n;
  }
}
class P1 {
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
      this._acceptDeleteRange(i.range), this._acceptInsertText(new j(i.range.startLineNumber, i.range.startColumn), i.text);
    this._versionId = t.versionId, this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const t = this._eol.length, n = this._lines.length, i = new Uint32Array(n);
      for (let r = 0; r < n; r++)
        i[r] = this._lines[r].length + t;
      this._lineStarts = new S1(i);
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
    const i = la(n);
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
const B1 = "workerTextModelSync";
class O1 {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  bindToServer(t) {
    t.setChannel(B1, this);
  }
  getModel(t) {
    return this._models[t];
  }
  getModels() {
    const t = [];
    return Object.keys(this._models).forEach((n) => t.push(this._models[n])), t;
  }
  $acceptNewModel(t) {
    this._models[t.url] = new V1(me.parse(t.url), t.lines, t.EOL, t.versionId);
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
class V1 extends P1 {
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
      const r = this._lines[i], s = this.offsetAt(new j(i + 1, 1)), a = r.matchAll(t);
      for (const u of a)
        (u.index || u.index === 0) && (u.index = u.index + s), n.push(u);
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
    const i = wi(t.column, da(n), this._lines[t.lineNumber - 1], 0);
    return i ? new D(
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
    let r = 0, s = "", a = 0, u = [];
    return {
      *[Symbol.iterator]() {
        for (; ; )
          if (a < u.length) {
            const o = s.substring(u[a].start, u[a].end);
            a += 1, yield o;
          } else if (r < n.length)
            s = n[r], u = i(s, t), a = 0, r += 1;
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
    if (!j.isIPosition(t))
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
class ya {
  constructor(t) {
    this.replacements = t;
    let n = -1;
    for (const i of t) {
      if (!(i.replaceRange.start >= n))
        throw new ae(
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
    for (const u of i.replacements) {
      for (; ; ) {
        const h = r[0];
        if (!h || h.replaceRange.start + a + h.getNewLength() >= u.replaceRange.start)
          break;
        r.shift(), s.push(h), a += h.getNewLength() - h.replaceRange.length;
      }
      const o = a;
      let c, m;
      for (; ; ) {
        const h = r[0];
        if (!h || h.replaceRange.start + a > u.replaceRange.endExclusive)
          break;
        c || (c = h), m = h, r.shift(), a += h.getNewLength() - h.replaceRange.length;
      }
      if (!c)
        s.push(u.delta(-a));
      else {
        const h = Math.min(c.replaceRange.start, u.replaceRange.start - o), _ = u.replaceRange.start - (c.replaceRange.start + o);
        if (_ > 0) {
          const E = c.slice(P.emptyAt(h), new P(0, _));
          s.push(E);
        }
        if (!m)
          throw new ae("Invariant violation: lastIntersecting is undefined");
        const L = m.replaceRange.endExclusive + a - u.replaceRange.endExclusive;
        if (L > 0) {
          const E = m.slice(P.ofStartAndLength(m.replaceRange.endExclusive, 0), new P(
            m.getNewLength() - L,
            m.getNewLength()
          ));
          r.unshift(E), a -= E.getNewLength() - E.replaceRange.length;
        }
        const b = new P(h, u.replaceRange.endExclusive - a), p = u.slice(b, new P(0, u.getNewLength()));
        s.push(p);
      }
    }
    for (; ; ) {
      const u = r.shift();
      if (!u)
        break;
      s.push(u);
    }
    return this._createNew(s).normalize();
  }
  decomposeSplit(t) {
    const n = [], i = [];
    let r = 0;
    for (const s of this.replacements)
      t(s) ? (n.push(s), r += s.getNewLength() - s.replaceRange.length) : i.push(s.slice(s.replaceRange.delta(r), new P(0, s.getNewLength())));
    return { e1: this._createNew(n), e2: this._createNew(i) };
  }
  getNewRanges() {
    const t = [];
    let n = 0;
    for (const i of this.replacements)
      t.push(P.ofStartAndLength(i.replaceRange.start + n, i.getNewLength())), n += i.getLengthDelta();
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
    return $a(this.replacements, (t) => t.getLengthDelta());
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
    return new P(
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
      return new P(n, i);
  }
}
class q1 {
  constructor(t) {
    this.replaceRange = t;
  }
  delta(t) {
    return this.slice(this.replaceRange.delta(t), new P(0, this.getNewLength()));
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
    return new P(this.replaceRange.start, this.replaceRange.start + this.getNewLength());
  }
}
const ct = class ct extends ya {
  static create(t) {
    return new ct(t);
  }
  static single(t) {
    return new ct([t]);
  }
  _createNew(t) {
    return new ct(t);
  }
};
ct.empty = new ct([]);
let Js = ct;
class Ta extends ya {
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
    const i = t.inverseOnSlice((a, u) => " ".repeat(u - a)), r = n.tryRebase(i);
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
      n.push(le.replace(P.ofStartAndLength(r.replaceRange.start + i, r.newText.length), t(r.replaceRange.start, r.replaceRange.endExclusive))), i += r.newText.length - r.replaceRange.length;
    return new Ve(n);
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
      const u = t.replacements[r], o = this.replacements[s];
      if (o)
        if (!u)
          i.push(new le(o.replaceRange.delta(a), o.newText)), s++;
        else if (o.replaceRange.intersectsOrTouches(u.replaceRange)) {
          if (s++, n)
            return;
        } else o.replaceRange.start < u.replaceRange.start ? (i.push(new le(o.replaceRange.delta(a), o.newText)), s++) : (r++, a += u.newText.length - u.replaceRange.length);
      else break;
    }
    return new Ve(i);
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
    return new Ve(n);
  }
  normalizeEOL(t) {
    return new Ve(this.replacements.map((n) => n.normalizeEOL(t)));
  }
  normalizeOnSource(t) {
    const n = this.apply(t), r = le.replace(P.ofLength(t.length), n).removeCommonSuffixAndPrefix(t);
    return r.isEmpty ? Ve.empty : r.toEdit();
  }
  removeCommonSuffixAndPrefix(t) {
    return this._createNew(this.replacements.map((n) => n.removeCommonSuffixAndPrefix(t))).normalize();
  }
  applyOnText(t) {
    return new tn(this.apply(t.value));
  }
  mapData(t) {
    return new hi(this.replacements.map((n) => new qe(n.replaceRange, n.newText, t(n))));
  }
}
class Ma extends q1 {
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
    const n = t.substring(this.replaceRange.start, this.replaceRange.endExclusive), i = Ln(n, this.newText), r = Math.min(n.length - i, this.newText.length - i, Nn(n, this.newText)), s = new P(
      this.replaceRange.start + i,
      this.replaceRange.endExclusive - r
    ), a = this.newText.substring(i, this.newText.length - r);
    return new le(s, a);
  }
  normalizeEOL(t) {
    const n = this.newText.replace(/\r\n|\n/g, t);
    return new le(this.replaceRange, n);
  }
  removeCommonSuffixAndPrefix(t) {
    return this.removeCommonSuffix(t).removeCommonPrefix(t);
  }
  removeCommonPrefix(t) {
    const n = this.replaceRange.substring(t), i = Ln(n, this.newText);
    return i === 0 ? this : this.slice(this.replaceRange.deltaStart(i), new P(i, this.newText.length));
  }
  removeCommonSuffix(t) {
    const n = this.replaceRange.substring(t), i = Nn(n, this.newText);
    return i === 0 ? this : this.slice(this.replaceRange.deltaEnd(-i), new P(0, this.newText.length - i));
  }
  toEdit() {
    return new Ve([this]);
  }
  toJson() {
    return {
      txt: this.newText,
      pos: this.replaceRange.start,
      len: this.replaceRange.length
    };
  }
}
const Le = class Le extends Ta {
  static create(t) {
    return new Le(t);
  }
  static single(t) {
    return new Le([t]);
  }
  static replace(t, n) {
    return new Le([new le(t, n)]);
  }
  static insert(t, n) {
    return new Le([new le(P.emptyAt(t), n)]);
  }
  static delete(t) {
    return new Le([new le(t, "")]);
  }
  static fromJson(t) {
    return new Le(t.map(le.fromJson));
  }
  static compose(t) {
    if (t.length === 0)
      return Le.empty;
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.compose(t[i]);
    return n;
  }
  static composeSequentialReplacements(t) {
    let n = Le.empty, i = [];
    for (const r of t) {
      const s = i.at(-1);
      !s || r.replaceRange.isBefore(s.replaceRange) ? i.push(r) : (n = n.compose(Le.create(i.reverse())), i = [r]);
    }
    return n = n.compose(Le.create(i.reverse())), n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new Le(t);
  }
};
Le.empty = new Le([]);
let Ve = Le;
class le extends Ma {
  static insert(t, n) {
    return new le(P.emptyAt(t), n);
  }
  static replace(t, n) {
    return new le(t, n);
  }
  static delete(t) {
    return new le(t, "");
  }
  static fromJson(t) {
    return new le(P.ofStartAndLength(t.pos, t.len), t.txt);
  }
  equals(t) {
    return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
  }
  tryJoinTouching(t) {
    return new le(
      this.replaceRange.joinRightTouching(t.replaceRange),
      this.newText + t.newText
    );
  }
  slice(t, n) {
    return new le(
      t,
      n ? n.substring(this.newText) : this.newText
    );
  }
}
const Fe = class Fe extends Ta {
  static create(t) {
    return new Fe(t);
  }
  static single(t) {
    return new Fe([t]);
  }
  static replace(t, n, i) {
    return new Fe([new qe(t, n, i)]);
  }
  static insert(t, n, i) {
    return new Fe([new qe(P.emptyAt(t), n, i)]);
  }
  static delete(t, n) {
    return new Fe([new qe(t, "", n)]);
  }
  static compose(t) {
    if (t.length === 0)
      return Fe.empty;
    let n = t[0];
    for (let i = 1; i < t.length; i++)
      n = n.compose(t[i]);
    return n;
  }
  constructor(t) {
    super(t);
  }
  _createNew(t) {
    return new Fe(t);
  }
  toStringEdit() {
    return new Ve(this.replacements.map((t) => new le(t.replaceRange, t.newText)));
  }
};
Fe.empty = new Fe([]);
let hi = Fe;
class qe extends Ma {
  static insert(t, n, i) {
    return new qe(P.emptyAt(t), n, i);
  }
  static replace(t, n, i) {
    return new qe(t, n, i);
  }
  static delete(t, n) {
    return new qe(t, "", n);
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
      return new qe(
        this.replaceRange.joinRightTouching(t.replaceRange),
        this.newText + t.newText,
        n
      );
  }
  slice(t, n) {
    return new qe(
      t,
      n ? n.substring(this.newText) : this.newText,
      this.data
    );
  }
}
zu({
  StringEdit: Ve,
  StringReplacement: le,
  TextReplacement: ge,
  TextEdit: Se,
  TextLength: rt
});
const tt = class tt {
  constructor(t = null) {
    this._foreignModule = t, this._workerTextModelSyncServer = new O1();
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
    return r ? Wu.computeUnicodeHighlights(r, n, i) : { ranges: [], hasMore: !1, ambiguousCharacterCount: 0, invisibleCharacterCount: 0, nonBasicAsciiCharacterCount: 0 };
  }
  async $findSectionHeaders(t, n) {
    const i = this._getModel(t);
    return i ? N1(i, n) : [];
  }
  async $computeDiff(t, n, i, r) {
    const s = this._getModel(t), a = this._getModel(n);
    return !s || !a ? null : tt.computeDiff(s, a, i, r);
  }
  static computeDiff(t, n, i, r) {
    const s = r === "advanced" ? Vt.getDefault() : Vt.getLegacy(), a = t.getLinesContent(), u = n.getLinesContent(), o = s.computeDiff(a, u, i), c = o.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
    function m(h) {
      return h.map(
        (_) => {
          var L;
          return [_.original.startLineNumber, _.original.endLineNumberExclusive, _.modified.startLineNumber, _.modified.endLineNumberExclusive, (L = _.innerChanges) == null ? void 0 : L.map((b) => [
            b.originalRange.startLineNumber,
            b.originalRange.startColumn,
            b.originalRange.endLineNumber,
            b.originalRange.endColumn,
            b.modifiedRange.startLineNumber,
            b.modifiedRange.startColumn,
            b.modifiedRange.endLineNumber,
            b.modifiedRange.endColumn
          ])];
        }
      );
    }
    return {
      identical: c,
      quitEarly: o.hitTimeout,
      changes: m(o.changes),
      moves: o.moves.map((h) => [
        h.lineRangeMapping.original.startLineNumber,
        h.lineRangeMapping.original.endLineNumberExclusive,
        h.lineRangeMapping.modified.startLineNumber,
        h.lineRangeMapping.modified.endLineNumberExclusive,
        m(h.changes)
      ])
    };
  }
  static _modelsAreIdentical(t, n) {
    const i = t.getLineCount(), r = n.getLineCount();
    if (i !== r)
      return !1;
    for (let s = 1; s <= i; s++) {
      const a = t.getLineContent(s), u = n.getLineContent(s);
      if (a !== u)
        return !1;
    }
    return !0;
  }
  async $computeDirtyDiff(t, n, i) {
    const r = this._getModel(t), s = this._getModel(n);
    if (!r || !s)
      return null;
    const a = r.getLinesContent(), u = s.getLinesContent();
    return new Ra(a, u, {
      shouldComputeCharChanges: !1,
      shouldPostProcessCharChanges: !1,
      shouldIgnoreTrimWhitespace: i,
      shouldMakePrettyDiff: !0,
      maxComputationTime: 1e3
    }).computeDiff().changes;
  }
  $computeStringDiff(t, n, i, r) {
    const s = r === "advanced" ? Vt.getDefault() : Vt.getLegacy(), a = new tn(t), u = a.getLines(), o = new tn(n), c = o.getLines(), m = s.computeDiff(u, c, { ignoreTrimWhitespace: !1, maxComputationTimeMs: i.maxComputationTimeMs, computeMoves: !1, extendToSubwords: !1 }), h = He.toTextEdit(m.changes, o);
    return a.getTransformer().getStringEdit(h).toJson();
  }
  async $computeMoreMinimalEdits(t, n, i) {
    const r = this._getModel(t);
    if (!r)
      return n;
    const s = [];
    let a;
    n = n.slice(0).sort((o, c) => {
      if (o.range && c.range)
        return D.compareRangesUsingStarts(o.range, c.range);
      const m = o.range ? 0 : 1, h = c.range ? 0 : 1;
      return m - h;
    });
    let u = 0;
    for (let o = 1; o < n.length; o++)
      D.getEndPosition(n[u].range).equals(D.getStartPosition(n[o].range)) ? (n[u].range = D.fromPositions(D.getStartPosition(n[u].range), D.getEndPosition(n[o].range)), n[u].text += n[o].text) : (u++, n[u] = n[o]);
    n.length = u + 1;
    for (let { range: o, text: c, eol: m } of n) {
      if (typeof m == "number" && (a = m), D.isEmpty(o) && !c)
        continue;
      const h = r.getValueInRange(o);
      if (c = c.replace(/\r\n|\n|\r/g, r.eol), h === c)
        continue;
      if (Math.max(c.length, h.length) > tt._diffLimit) {
        s.push({ range: o, text: c });
        continue;
      }
      const _ = Ql(h, c, i), L = r.offsetAt(D.lift(o).getStartPosition());
      for (const b of _) {
        const p = r.positionAt(L + b.originalStart), E = r.positionAt(L + b.originalStart + b.originalLength), y = {
          text: c.substr(b.modifiedStart, b.modifiedLength),
          range: { startLineNumber: p.lineNumber, startColumn: p.column, endLineNumber: E.lineNumber, endColumn: E.column }
        };
        r.getValueInRange(y.range) !== y.text && s.push(y);
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
    n = n.slice(0).sort((u, o) => {
      if (u.range && o.range)
        return D.compareRangesUsingStarts(u.range, o.range);
      const c = u.range ? 0 : 1, m = o.range ? 0 : 1;
      return c - m;
    });
    for (let { range: u, text: o, eol: c } of n) {
      let p = function(y, R) {
        return new j(
          y.lineNumber + R.lineNumber - 1,
          R.lineNumber === 1 ? y.column + R.column - 1 : R.column
        );
      }, E = function(y, R) {
        const v = [];
        for (let k = R.startLineNumber; k <= R.endLineNumber; k++) {
          const B = y[k - 1];
          k === R.startLineNumber && k === R.endLineNumber ? v.push(B.substring(R.startColumn - 1, R.endColumn - 1)) : k === R.startLineNumber ? v.push(B.substring(R.startColumn - 1)) : k === R.endLineNumber ? v.push(B.substring(0, R.endColumn - 1)) : v.push(B);
        }
        return v;
      };
      if (typeof c == "number" && (a = c), D.isEmpty(u) && !o)
        continue;
      const m = r.getValueInRange(u);
      if (o = o.replace(/\r\n|\n|\r/g, r.eol), m === o)
        continue;
      if (Math.max(o.length, m.length) > tt._diffLimit) {
        s.push({ range: u, text: o });
        continue;
      }
      const h = m.split(/\r\n|\n|\r/), _ = o.split(/\r\n|\n|\r/), L = Vt.getDefault().computeDiff(h, _, i), b = D.lift(u).getStartPosition();
      for (const y of L.changes)
        if (y.innerChanges)
          for (const R of y.innerChanges)
            s.push({
              range: D.fromPositions(p(b, R.originalRange.getStartPosition()), p(b, R.originalRange.getEndPosition())),
              text: E(_, R.modifiedRange).join(r.eol)
            });
        else
          throw new ae("The experimental diff algorithm always produces inner changes");
    }
    return typeof a == "number" && s.push({ eol: a, text: "", range: { startLineNumber: 0, startColumn: 0, endLineNumber: 0, endColumn: 0 } }), s;
  }
  async $computeLinks(t) {
    const n = this._getModel(t);
    return n ? eu(n) : null;
  }
  async $computeDefaultDocumentColors(t) {
    const n = this._getModel(t);
    return n ? d1(n) : null;
  }
  async $textualSuggest(t, n, i, r) {
    const s = new Sn(), a = new RegExp(i, r), u = /* @__PURE__ */ new Set();
    e: for (const o of t) {
      const c = this._getModel(o);
      if (c) {
        for (const m of c.words(a))
          if (!(m === n || !isNaN(Number(m))) && (u.add(m), u.size > tt._suggestionsLimit))
            break e;
      }
    }
    return { words: Array.from(u), duration: s.elapsed() };
  }
  async $computeWordRanges(t, n, i, r) {
    const s = this._getModel(t);
    if (!s)
      return /* @__PURE__ */ Object.create(null);
    const a = new RegExp(i, r), u = /* @__PURE__ */ Object.create(null);
    for (let o = n.startLineNumber; o < n.endLineNumber; o++) {
      const c = s.getLineWords(o, a);
      for (const m of c) {
        if (!isNaN(Number(m.word)))
          continue;
        let h = u[m.word];
        h || (h = [], u[m.word] = h), h.push({
          startLineNumber: o,
          startColumn: m.startColumn,
          endLineNumber: o,
          endColumn: m.endColumn
        });
      }
    }
    return u;
  }
  async $navigateValueSet(t, n, i, r, s) {
    const a = this._getModel(t);
    if (!a)
      return null;
    const u = new RegExp(r, s);
    n.startColumn === n.endColumn && (n = {
      startLineNumber: n.startLineNumber,
      startColumn: n.startColumn,
      endLineNumber: n.endLineNumber,
      endColumn: n.endColumn + 1
    });
    const o = a.getValueInRange(n), c = a.getWordAtPosition({ lineNumber: n.startLineNumber, column: n.startColumn }, u);
    if (!c)
      return null;
    const m = a.getValueInRange(c);
    return Jn.INSTANCE.navigateValueSet(n, o, c, m, i);
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
tt._diffLimit = 1e5, tt._suggestionsLimit = 1e4;
let fi = tt;
typeof importScripts == "function" && (globalThis.monaco = Fu());
Xl(() => new fi(null));
