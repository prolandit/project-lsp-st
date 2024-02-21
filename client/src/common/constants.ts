const Constants = {
    registerSuccessMessage: 'Register berhasil. Silahkan masuk ke akun Anda',
    reLoginMessage: 'Silahkan Masuk ulang dengan Password Baru Anda',
    genderOptions: [
        {
            key: 'pria',
            value: 'Pria',
        },
        {
            key: 'wanita',
            value: 'Wanita',
        },
    ],
    educationOptions: [
        {
            key: 'sd',
            value: 'SD',
        },
        {
            key: 'smp',
            value: 'SMP',
        },
        {
            key: 'sma',
            value: 'SMA',
        },
        {
            key: 'd1',
            value: 'D1',
        },
        {
            key: 'd2',
            value: 'D2',
        },
        {
            key: 'd3',
            value: 'D3',
        },
        {
            key: 'd4',
            value: 'D4',
        },
        {
            key: 's1',
            value: 'S1',
        },
        {
            key: 's2',
            value: 'S2',
        },
        {
            key: 's3',
            value: 'S3',
        },
    ],
    listTuk: [
        {
            key: 'tuk1',
            value: 'Tuk1',
        },
        {
            key: 'tuk2',
            value: 'Tuk2',
        },
    ],
    institutions: [
        {
            key: 'kementrianAgama',
            value: 'Kementrian Agama',
        },
        {
            key: 'kementrianKeuangan',
            value: 'Kementrian Keuangan',
        },
    ],
    funds: [
        {
            key: 'sumberMandiri',
            value: 'Sumber Anggaran Biaya Mandiri',
        },
        {
            key: 'sumberPerusahaan',
            value: 'Sumber Anggaran Biaya Perusahaan',
        },
    ],
    jobs: [
        {
            key: 'tidakBekerja',
            value: 'Tidak/Belum Bekerja',
        },
        {
            key: 'pelajar',
            value: 'Pelajar/Mahasiswa',
        },
    ],
    nationalities: [
        { key: 'Afghanistan', value: 'Afganistan' },
        { key: 'Albania', value: 'Albania' },
        { key: 'Algeria', value: 'Aljazair' },
        { key: 'Andorra', value: 'Andorra' },
        { key: 'Angola', value: 'Angola' },
        { key: 'Antigua and Barbuda', value: 'Antigua dan Barbuda' },
        { key: 'Argentina', value: 'Argentina' },
        { key: 'Armenia', value: 'Armenia' },
        { key: 'Australia', value: 'Australia' },
        { key: 'Austria', value: 'Austria' },
        { key: 'Azerbaijan', value: 'Azerbaijan' },
        { key: 'Bahamas', value: 'Bahama' },
        { key: 'Bahrain', value: 'Bahrain' },
        { key: 'Bangladesh', value: 'Bangladesh' },
        { key: 'Barbados', value: 'Barbados' },
        { key: 'Belarus', value: 'Belarus' },
        { key: 'Belgium', value: 'Belgia' },
        { key: 'Belize', value: 'Belize' },
        { key: 'Benin', value: 'Benin' },
        { key: 'Bhutan', value: 'Bhutan' },
        { key: 'Bolivia', value: 'Bolivia' },
        { key: 'Bosnia and Herzegovina', value: 'Bosnia dan Herzegovina' },
        { key: 'Botswana', value: 'Botswana' },
        { key: 'Brazil', value: 'Brasil' },
        { key: 'Brunei', value: 'Brunei' },
        { key: 'Bulgaria', value: 'Bulgaria' },
        { key: 'Burkina Faso', value: 'Burkina Faso' },
        { key: 'Burundi', value: 'Burundi' },
        { key: 'Cabo Verde', value: 'Tanjung Verde' },
        { key: 'Cambodia', value: 'Kamboja' },
        { key: 'Cameroon', value: 'Kamerun' },
        { key: 'Canada', value: 'Kanada' },
        { key: 'Central African Republic', value: 'Republik Afrika Tengah' },
        { key: 'Chad', value: 'Chad' },
        { key: 'Chile', value: 'Cile' },
        { key: 'China', value: 'Tiongkok (atau Cina)' },
        { key: 'Colombia', value: 'Kolombia' },
        { key: 'Comoros', value: 'Komoro' },
        {
            key: 'Congo, Democratic Republic of the',
            value: 'Republik Demokratik Kongo',
        },
        { key: 'Congo, Republic of the', value: 'Republik Kongo' },
        { key: 'Costa Rica', value: 'Kosta Rika' },
        { key: 'Croatia', value: 'Kroasia' },
        { key: 'Cuba', value: 'Kuba' },
        { key: 'Cyprus', value: 'Siprus' },
        { key: 'Czech Republic', value: 'Republik Ceko' },
        { key: 'Denmark', value: 'Denmark' },
        { key: 'Djibouti', value: 'Djibouti' },
        { key: 'Dominica', value: 'Dominika' },
        { key: 'Dominican Republic', value: 'Republik Dominika' },
        { key: 'East Timor (Timor-Leste)', value: 'Timor Timur (Timor-Leste)' },
        { key: 'Ecuador', value: 'Ekuador' },
        { key: 'Egypt', value: 'Mesir' },
        { key: 'El Salvador', value: 'El Salvador' },
        { key: 'Equatorial Guinea', value: 'Guinea Khatulistiwa' },
        { key: 'Eritrea', value: 'Eritrea' },
        { key: 'Estonia', value: 'Estonia' },
        { key: 'Eswatini', value: 'Eswatini' },
        { key: 'Ethiopia', value: 'Etiopia' },
        { key: 'Fiji', value: 'Fiji' },
        { key: 'Finland', value: 'Finlandia' },
        { key: 'France', value: 'Prancis' },
        { key: 'Gabon', value: 'Gabon' },
        { key: 'Gambia', value: 'Gambia' },
        { key: 'Georgia', value: 'Georgia' },
        { key: 'Germany', value: 'Jerman' },
        { key: 'Ghana', value: 'Ghana' },
        { key: 'Greece', value: 'Yunani' },
        { key: 'Grenada', value: 'Grenada' },
        { key: 'Guatemala', value: 'Guatemala' },
        { key: 'Guinea', value: 'Guinea' },
        { key: 'Guinea-Bissau', value: 'Guinea-Bissau' },
        { key: 'Guyana', value: 'Guyana' },
        { key: 'Haiti', value: 'Haiti' },
        { key: 'Honduras', value: 'Honduras' },
        { key: 'Hungary', value: 'Hungaria' },
        { key: 'Iceland', value: 'Islandia' },
        { key: 'India', value: 'India' },
        { key: 'Indonesia', value: 'Indonesia' },
        { key: 'Iran', value: 'Iran' },
        { key: 'Iraq', value: 'Irak' },
        { key: 'Ireland', value: 'Irlandia' },
        { key: 'Israel', value: 'Israel' },
        { key: 'Italy', value: 'Italia' },
        { key: 'Ivory Coast', value: 'Pantai Gading' },
        { key: 'Jamaica', value: 'Jamaika' },
        { key: 'Japan', value: 'Jepang' },
        { key: 'Jordan', value: 'Yordania' },
        { key: 'Kazakhstan', value: 'Kazakhstan' },
        { key: 'Kenya', value: 'Kenya' },
        { key: 'Kiribati', value: 'Kiribati' },
        { key: 'Korea, North', value: 'Korea Utara' },
        { key: 'Korea, South', value: 'Korea Selatan' },
        { key: 'Kosovo', value: 'Kosovo' },
        { key: 'Kuwait', value: 'Kuwait' },
        { key: 'Kyrgyzstan', value: 'Kirgistan' },
        { key: 'Laos', value: 'Laos' },
        { key: 'Latvia', value: 'Latvia' },
        { key: 'Lebanon', value: 'Lebanon' },
        { key: 'Lesotho', value: 'Lesotho' },
        { key: 'Liberia', value: 'Liberia' },
        { key: 'Libya', value: 'Libya' },
        { key: 'Liechtenstein', value: 'Liechtenstein' },
        { key: 'Lithuania', value: 'Lituania' },
        { key: 'Luxembourg', value: 'Luksemburg' },
        { key: 'Madagascar', value: 'Madagaskar' },
        { key: 'Malawi', value: 'Malawi' },
        { key: 'Malaysia', value: 'Malaysia' },
        { key: 'Maldives', value: 'Maladewa' },
        { key: 'Mali', value: 'Mali' },
        { key: 'Malta', value: 'Malta' },
        { key: 'Marshall Islands', value: 'Kepulauan Marshall' },
        { key: 'Mauritania', value: 'Mauritania' },
        { key: 'Mauritius', value: 'Mauritius' },
        { key: 'Mexico', value: 'Meksiko' },
        { key: 'Micronesia', value: 'Mikronesia' },
        { key: 'Moldova', value: 'Moldova' },
        { key: 'Monaco', value: 'Monako' },
        { key: 'Mongolia', value: 'Mongolia' },
        { key: 'Montenegro', value: 'Montenegro' },
        { key: 'Morocco', value: 'Maroko' },
        { key: 'Mozambique', value: 'Mozambik' },
        { key: 'Myanmar (Burma)', value: 'Myanmar (Burma)' },
        { key: 'Namibia', value: 'Namibia' },
        { key: 'Nauru', value: 'Nauru' },
        { key: 'Nepal', value: 'Nepal' },
        { key: 'Netherlands', value: 'Belanda' },
        { key: 'New Zealand', value: 'Selandia Baru' },
        { key: 'Nicaragua', value: 'Nikaragua' },
        { key: 'Niger', value: 'Niger' },
        { key: 'Nigeria', value: 'Nigeria' },
        { key: 'North Macedonia (Macedonia)', value: 'Makedonia Utara' },
        { key: 'Norway', value: 'Norwegia' },
        { key: 'Oman', value: 'Oman' },
        { key: 'Pakistan', value: 'Pakistan' },
        { key: 'Palau', value: 'Palau' },
        { key: 'Panama', value: 'Panama' },
        { key: 'Papua New Guinea', value: 'Papua Nugini' },
        { key: 'Paraguay', value: 'Paraguay' },
        { key: 'Peru', value: 'Peru' },
        { key: 'Philippines', value: 'Filipina' },
        { key: 'Poland', value: 'Polandia' },
        { key: 'Portugal', value: 'Portugal' },
        { key: 'Qatar', value: 'Qatar' },
        { key: 'Romania', value: 'Rumania' },
        { key: 'Russia', value: 'Rusia' },
        { key: 'Rwanda', value: 'Rwanda' },
        { key: 'Saint Kitts and Nevis', value: 'Saint Kitts dan Nevis' },
        { key: 'Saint Lucia', value: 'Saint Lucia' },
        {
            key: 'Saint Vincent and the Grenadines',
            value: 'Saint Vincent dan Grenadines',
        },
        { key: 'Samoa', value: 'Samoa' },
        { key: 'San Marino', value: 'San Marino' },
        { key: 'Sao Tome and Principe', value: 'Sao Tome dan Principe' },
        { key: 'Saudi Arabia', value: 'Arab Saudi' },
        { key: 'Senegal', value: 'Senegal' },
        { key: 'Serbia', value: 'Serbia' },
        { key: 'Seychelles', value: 'Seychelles' },
        { key: 'Sierra Leone', value: 'Sierra Leone' },
        { key: 'Singapore', value: 'Singapura' },
        { key: 'Slovakia', value: 'Slovakia' },
        { key: 'Slovenia', value: 'Slovenia' },
        { key: 'Solomon Islands', value: 'Kepulauan Solomon' },
        { key: 'Somalia', value: 'Somalia' },
        { key: 'South Africa', value: 'Afrika Selatan' },
        { key: 'South Sudan', value: 'Sudan Selatan' },
        { key: 'Spain', value: 'Spanyol' },
        { key: 'Sri Lanka', value: 'Sri Lanka' },
        { key: 'Sudan', value: 'Sudan' },
        { key: 'Suriname', value: 'Suriname' },
        { key: 'Sweden', value: 'Swedia' },
        { key: 'Switzerland', value: 'Swiss' },
        { key: 'Syria', value: 'Suriah' },
        { key: 'Taiwan', value: 'Taiwan' },
        { key: 'Tajikistan', value: 'Tajikistan' },
        { key: 'Tanzania', value: 'Tanzania' },
        { key: 'Thailand', value: 'Thailand' },
        { key: 'Togo', value: 'Togo' },
        { key: 'Tonga', value: 'Tonga' },
        { key: 'Trinidad and Tobago', value: 'Trinidad dan Tobago' },
        { key: 'Tunisia', value: 'Tunisia' },
        { key: 'Turkey', value: 'Turki' },
        { key: 'Turkmenistan', value: 'Turkmenistan' },
        { key: 'Tuvalu', value: 'Tuvalu' },
        { key: 'Uganda', value: 'Uganda' },
        { key: 'Ukraine', value: 'Ukraina' },
        { key: 'United Arab Emirates', value: 'Uni Emirat Arab' },
        { key: 'United Kingdom', value: 'Britania Raya' },
        { key: 'United States', value: 'Amerika Serikat' },
        { key: 'Uruguay', value: 'Uruguay' },
        { key: 'Uzbekistan', value: 'Uzbekistan' },
        { key: 'Vanuatu', value: 'Vanuatu' },
        { key: 'Vatican City', value: 'Kota Vatikan' },
        { key: 'Venezuela', value: 'Venezuela' },
        { key: 'Vietnam', value: 'Vietnam' },
        { key: 'Yemen', value: 'Yaman' },
        { key: 'Zambia', value: 'Zambia' },
        { key: 'Zimbabwe', value: 'Zimbabwe' },
    ],
};

export default Constants;
