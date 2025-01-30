"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8088],
  {
    28088: (e, r, t) => {
      t.r(r), t.d(r, { default: () => U });
      var s,
        i = t(74848),
        a = t(96540),
        l = t(86715),
        n = t(31370),
        o = t(12664),
        u = t(33750),
        d = t(29021),
        c = t(80202),
        p = t(55478),
        v = t(14125),
        h = t(46878),
        m = t(15736),
        b = t(94074);
      let g = {
          name: "French Partner Form",
          handle: "frenchPartner",
          pages: [
            {
              title:
                "Vous souhaitez devenir partenaire de Zaptec en France ?  Notre \xe9quipe est heureuse d’\xe9tudier votre demande!",
              rows: [
                {
                  fields: [
                    {
                      handle: "section",
                      label: "Dans l'IRVE, votre activit\xe9 principale est:",
                      type: "radio_group",
                      required: !0,
                      options: [
                        {
                          label:
                            "L'achat-revente d'IRVE : vous achetez du mat\xe9riel de recharge en gros et le revendez sans prestations suppl\xe9mentaires",
                          value: "L'achat-revente d'IRVE",
                        },
                        {
                          label:
                            "La fourniture et la pose d'IRVE : vous achetez du mat\xe9riel aupr\xe8s d'un fournisseur et packagez le mat\xe9riel avec vos propres prestations (\xe0 minima l'installation de la borne)",
                          value: "La fourniture et la pose d'IRVE",
                        },
                        {
                          label:
                            "La pose d'IRVE : vous \xeates sous-traitant pour le compte d'entreprises qui vous confient la r\xe9alisation de l'installation",
                          value: "La pose d'IRVE",
                        },
                        { label: "Autre", value: "Autre" },
                      ],
                    },
                  ],
                },
              ],
              rules: [
                {
                  conditions: [
                    { field: "section", value: "L'achat-revente d'IRVE" },
                  ],
                  page: 1,
                },
                {
                  conditions: [
                    {
                      field: "section",
                      value: "La fourniture et la pose d'IRVE",
                    },
                  ],
                  page: 2,
                },
                {
                  conditions: [{ field: "section", value: "La pose d'IRVE" }],
                  page: 3,
                },
                { conditions: [{ field: "section", value: "Autre" }], page: 4 },
              ],
            },
            {
              title: "Votre activit\xe9",
              description:
                "\n        <p>\n          Afin de vous orienter vers le meilleur interlocuteur dans nos \xe9quipes, nous souhaitons en savoir plus sur votre activit\xe9\n        </p>\n        <h4>Votre activit\xe9 principale IRVE est l'Achat-Revente</h4>\n        <p>\n          Vous achetez du mat\xe9riel de recharge en gros et le revendez sans prestations suppl\xe9mentaires\n        </p>\n      ",
              rows: [
                {
                  fields: [
                    {
                      handle: "region",
                      label:
                        "Sur quel territoire \xeates-vous en mesure d'offrir vos services ?",
                      type: "checkbox_group",
                      required: !0,
                      oneLine: !0,
                      options: [
                        {
                          label: "France enti\xe8re",
                          value: "France enti\xe8re",
                        },
                        {
                          label: "Auvergne-Rh\xf4ne-Alpes",
                          value: "Auvergne-Rh\xf4ne-Alpes",
                        },
                        {
                          label: "Bourgogne-Franche-Comt\xe9",
                          value: "Bourgogne-Franche-Comt\xe9",
                        },
                        { label: "Bretagne", value: "Bretagne" },
                        {
                          label: "Centre-Val de Loire",
                          value: "Centre-Val de Loire",
                        },
                        { label: "Corse", value: "Corse" },
                        { label: "Grand-Est", value: "Grand-Est" },
                        { label: "Hauts-de-France", value: "Hauts-de-France" },
                        {
                          label: "\xcele-de-France",
                          value: "\xcele-de-France",
                        },
                        { label: "Normandie", value: "Normandie" },
                        {
                          label: "Nouvelle-Aquitaine",
                          value: "Nouvelle-Aquitaine",
                        },
                        { label: "Occitanie", value: "Occitanie" },
                        {
                          label: "Pays de la Loire",
                          value: "Pays de la Loire",
                        },
                        {
                          label: "Provence-Alpes-C\xf4te d’Azur",
                          value: "Provence-Alpes-C\xf4te d’Azur",
                        },
                        { label: "Autre", value: "Autre" },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      handle: "regionOther",
                      label: "Autre",
                      type: "textarea",
                      required: !1,
                      rules: [
                        {
                          conditions: [{ field: "region", value: "Autre" }],
                          required: !0,
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Si vous en avez un, renseignez le lien vers votre site internet sur lequel sont pr\xe9sent\xe9es vos offres IRVE :",
                      handle: "website",
                      type: "text",
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Selon vous, quel int\xe9r\xeat auriez-vous \xe0 travailler avec les solutions de Zaptec ? Souhaitez-vous nous en dire plus ?",
                      handle: "interest",
                      type: "textarea",
                    },
                  ],
                },
              ],
              rules: [{ conditions: null, page: 5 }],
            },
            {
              title: "Votre activit\xe9",
              description:
                "\n        <p>\n          Afin de vous orienter vers le meilleur interlocuteur dans nos \xe9quipes, nous souhaitons en savoir plus sur votre activit\xe9\n        </p>\n        <h4>Votre activit\xe9 principale est la fourniture et la pose d'IRVE</h4>\n        <p>\n          Vous achetez du mat\xe9riel aupr\xe8s d'un fournisseur et packagez le mat\xe9riel avec vos propres prestations (\xe0 minima l'installation de la borne)\n        </p>\n      ",
              rows: [
                {
                  fields: [
                    {
                      label:
                        "Sur quel territoire \xeates-vous en mesure d'offrir vos services ?",
                      handle: "region",
                      type: "checkbox_group",
                      oneLine: !0,
                      required: !0,
                      options: [
                        {
                          label: "France enti\xe8re",
                          value: "France enti\xe8re",
                        },
                        {
                          label: "Auvergne-Rh\xf4ne-Alpes",
                          value: "Auvergne-Rh\xf4ne-Alpes",
                        },
                        {
                          label: "Bourgogne-Franche-Comt\xe9",
                          value: "Bourgogne-Franche-Comt\xe9",
                        },
                        { label: "Bretagne", value: "Bretagne" },
                        {
                          label: "Centre-Val de Loire",
                          value: "Centre-Val de Loire",
                        },
                        { label: "Corse", value: "Corse" },
                        { label: "Grand-Est", value: "Grand-Est" },
                        { label: "Hauts-de-France", value: "Hauts-de-France" },
                        {
                          label: "\xcele-de-France",
                          value: "\xcele-de-France",
                        },
                        { label: "Normandie", value: "Normandie" },
                        {
                          label: "Nouvelle-Aquitaine",
                          value: "Nouvelle-Aquitaine",
                        },
                        { label: "Occitanie", value: "Occitanie" },
                        {
                          label: "Pays de la Loire",
                          value: "Pays de la Loire",
                        },
                        {
                          label: "Provence-Alpes-C\xf4te d’Azur",
                          value: "Provence-Alpes-C\xf4te d’Azur",
                        },
                        { label: "Autre", value: "Autre" },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Autre",
                      handle: "regionOther",
                      type: "textarea",
                      required: !1,
                      rules: [
                        {
                          conditions: [{ field: "region", value: "Autre" }],
                          required: !0,
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Aupr\xe8s de quels cibles pensez-vous \xeatre comp\xe9titifs avec les bornes Zaptec ?",
                      handle: "targets",
                      type: "checkbox_group",
                      required: !0,
                      oneLine: !0,
                      options: [
                        {
                          label: "Maison individuelle",
                          value: "Maison individuelle",
                        },
                        {
                          label: "Copropri\xe9t\xe9",
                          value: "Copropri\xe9t\xe9",
                        },
                        {
                          label: "Flotte d'entreprise",
                          value: "Flotte d'entreprise",
                        },
                        {
                          label: "Parking priv\xe9 ouvert au publi",
                          value: "Parking priv\xe9 ouvert au publi",
                        },
                        {
                          label: "Espace public / voirie",
                          value: "Espace public / voirie",
                        },
                        { label: "Je ne sais pas", value: "Je ne sais pas" },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Combien de bornes pr\xe9voyez vous d'installer dans les 12 prochains mois ?",
                      handle: "installations",
                      type: "text",
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "En plus de la fourniture et l'installation d'IRVE, proposez vous d'autres services \xe0 vos clients ?",
                      handle: "services",
                      type: "checkbox_group",
                      required: !0,
                      options: [
                        {
                          label: "Aucun autre service",
                          value: "Aucun autre service",
                        },
                        {
                          label:
                            "Bureau d'\xe9tude: \xe9tude et dimensionnement de l'IRVE",
                          value:
                            "Bureau d'\xe9tude: \xe9tude et dimensionnement de l'IRVE",
                        },
                        {
                          label:
                            "Supervision technique : contr\xf4le \xe0 distance du parc de bornes install\xe9es chez vos clients",
                          value:
                            "Supervision technique : contr\xf4le \xe0 distance du parc de bornes install\xe9es chez vos clients",
                        },
                        {
                          label:
                            "Maintenance pr\xe9ventive : entretien du parc de bornes install\xe9es chez vos clients",
                          value:
                            "Maintenance pr\xe9ventive : entretien du parc de bornes install\xe9es chez vos clients",
                        },
                        {
                          label:
                            "D\xe9pannage : intervention sur site pour d\xe9panner les bornes install\xe9es chez vos clients",
                          value:
                            "D\xe9pannage : intervention sur site pour d\xe9panner les bornes install\xe9es chez vos clients",
                        },
                        {
                          label:
                            "Assistance en ligne B2B : hotline pour les propri\xe9taires des bornes de recharge",
                          value:
                            "Assistance en ligne B2B : hotline pour les propri\xe9taires des bornes de recharge",
                        },
                        {
                          label:
                            "Assistance en ligne B2C : hotline pour les utilisateurs des bornes de recharge",
                          value:
                            "Assistance en ligne B2C : hotline pour les utilisateurs des bornes de recharge",
                        },
                        {
                          label:
                            "Facturation directe : facturation, collecte et reversement des sessions de recharge des utilisateurs autoris\xe9s\xa0",
                          value:
                            "Facturation directe : facturation, collecte et reversement des sessions de recharge des utilisateurs autoris\xe9s\xa0",
                        },
                        {
                          label:
                            "Facturation indirecte : facturation, collecte des sessions de recharge des op\xe9rateurs de mobilit\xe9\xa0autoris\xe9s (roaming eMSP) et reversement des recettes au propri\xe9taire de l'IRVE",
                          value:
                            "Facturation indirecte : facturation, collecte des sessions de recharge des op\xe9rateurs de mobilit\xe9\xa0autoris\xe9s (roaming eMSP) et reversement des recettes au propri\xe9taire de l'IRVE",
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Si vous en avez un, renseignez le lien vers votre site internet sur lequel sont pr\xe9sent\xe9es vos offres IRVE: ",
                      handle: "website",
                      type: "text",
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Selon vous, quel int\xe9r\xeat auriez-vous \xe0 travailler avec les solutions de Zaptec ? Souhaitez-vous nous en dire plus ?",
                      handle: "interest",
                      type: "textarea",
                      required: !0,
                    },
                  ],
                },
              ],
              rules: [{ conditions: null, page: 5 }],
            },
            {
              title: "Votre activit\xe9",
              description:
                "\n        <p>\n          Nous vous remercions d'avoir pris le temps de r\xe9pondre \xe0 notre formulaire pour devenir un partenaire Zaptec. Compte-tenu des r\xe9ponses apport\xe9es, nous ne sommes pour l’heure pas en mesure d’\xe9tablir un partenariat en direct avec votre soci\xe9t\xe9.\n        </p>\n      ",
              rows: [],
              action: "close",
            },
            {
              title: "Votre activit\xe9",
              description:
                "\n        <p>\n          Afin de vous orienter vers le meilleur interlocuteur dans nos \xe9quipes, nous souhaitons en savoir plus sur votre activit\xe9\n        </p>\n        <h4>Autre activit\xe9 dans le secteur des IRVE</h4>\n        <p>\n          Votre activit\xe9 principale n'est pas li\xe9e \xe0 l'achat-revente, la fourniture ou l'installation d'IRVE\n        </p>\n      ",
              rows: [
                {
                  fields: [
                    {
                      label:
                        "Quelle est votre activit\xe9 dans le secteur des IRVE ",
                      handle: "activity",
                      type: "textarea",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Selon vous, quel int\xe9r\xeat auriez-vous \xe0 travailler avec les solutions de Zaptec ? Souhaitez-vous nous en dire plus ?",
                      handle: "interest",
                      type: "textarea",
                      required: !0,
                    },
                  ],
                },
              ],
              rules: [{ conditions: null, page: 5 }],
            },
            {
              title: "A Propos de vous",
              description:
                '\n        <p>\n          Merci de bien renseigner ces informations afin que nous puissions reprendre contact avec vous ! \n        </p>\n        <p>\n          Pour en savoir plus sur l\'utilisation de vos donn\xe9es: <a href="https://zaptec.com/fr/privacy-policy/" target="_blank">https://zaptec.com/fr/privacy-policy/</a><br/>\n          En envoyant ce formulaire, vous acceptez que Zaptec vous envoie des informations sur nos produits. A tout moment vous pourrez vous d\xe9sinscrire. \n        </p>\n      ',
              rows: [
                {
                  fields: [
                    {
                      label: "Nom de votre entreprise",
                      handle: "company",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "N\xb0 de SIRET",
                      handle: "siret",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  title: "Votre adresse",
                  fields: [
                    {
                      label: "Rue",
                      handle: "street",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Ville",
                      handle: "city",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Code postal",
                      handle: "postal",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Votre pr\xe9nom",
                      handle: "firstName",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Votre nom",
                      handle: "lastName",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Votre fonction",
                      handle: "function",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Votre email professionnel",
                      handle: "email",
                      type: "email",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Votre t\xe9l\xe9phone",
                      handle: "phone",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Comment nous avez-vous connu ?",
                      handle: "how",
                      type: "radio_group",
                      required: !0,
                      options: [
                        { label: "LinkedIn", value: "LinkedIn" },
                        {
                          label: "Autre r\xe9seau social",
                          value: "Autre r\xe9seau social",
                        },
                        { label: "Presse", value: "Presse" },
                        {
                          label: "Salon / Exposition",
                          value: "Salon / Exposition",
                        },
                        {
                          label: "Bouche \xe0 oreille",
                          value: "Bouche \xe0 oreille",
                        },
                        { label: "Autre", value: "Autre" },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Autre",
                      handle: "howOther",
                      type: "textarea",
                      required: !1,
                      rules: [
                        { conditions: [{ field: "how", value: "Autre" }] },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Inscrivez-vous \xe0 notre newsletter pour \xeatre inform\xe9s",
                      handle: "newsletter",
                      type: "checkbox",
                    },
                  ],
                },
              ],
            },
          ],
          initialValues: {
            section: "",
            region: [],
            regionOther: "",
            website: "",
            interest: "",
            targets: [],
            installations: "",
            services: [],
            company: "",
            siret: "",
            street: "",
            city: "",
            postal: "",
            firstName: "",
            lastName: "",
            function: "",
            email: "",
            phone: "",
            how: "",
            howOther: "",
            newsletter: !1,
          },
          errorMessage:
            "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez r\xe9essayer.",
          successMessage:
            "Votre demande a bien \xe9t\xe9 envoy\xe9e. Nous vous recontacterons dans les plus brefs d\xe9lais.",
        },
        f = [
          o
            .object()
            .shape({ section: o.string().required("Ce champ est requis") }),
          o
            .object()
            .shape({
              region: o.array().min(1, "Ce champ est requis"),
              regionOther: o
                .string()
                .when("region", {
                  is: (e) => e.includes("Autre"),
                  then: (e) => e.required("Ce champ est requis"),
                }),
              website: o
                .string()
                .test(
                  "url",
                  "Veuillez renseigner une URL valide",
                  (e) =>
                    !e ||
                    RegExp(
                      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                      "i"
                    ).test(e)
                ),
              interest: o.string(),
            }),
          o
            .object()
            .shape({
              region: o.array().min(1, "Ce champ est requis"),
              regionOther: o
                .string()
                .when("region", {
                  is: (e) => e.includes("Autre"),
                  then: (e) => e.required("Ce champ est requis"),
                }),
              targets: o.array().min(1, "Ce champ est requis"),
              installations: o.string().required("Ce champ est requis"),
              services: o.array().min(1, "Ce champ est requis"),
              website: o
                .string()
                .test(
                  "url",
                  "Veuillez renseigner une URL valide",
                  (e) =>
                    !e ||
                    RegExp(
                      "^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                      "i"
                    ).test(e)
                ),
              interest: o.string().required("Ce champ est requis"),
            }),
          o.object().shape({}),
          o
            .object()
            .shape({
              activity: o.string().required("Ce champ est requis"),
              interest: o.string().required("Ce champ est requis"),
            }),
          o
            .object()
            .shape({
              company: o.string().required("Ce champ est requis"),
              siret: o.string().required("Ce champ est requis"),
              street: o.string().required("Ce champ est requis"),
              city: o.string().required("Ce champ est requis"),
              postal: o.string().required("Ce champ est requis"),
              firstName: o.string().required("Ce champ est requis"),
              lastName: o.string().required("Ce champ est requis"),
              function: o.string().required("Ce champ est requis"),
              email: o
                .string()
                .email("Veuillez renseigner une adresse email valide")
                .required("Ce champ est requis"),
              phone: o.string().required("Ce champ est requis"),
              how: o.string().required("Ce champ est requis"),
              howOther: o
                .string()
                .when("how", {
                  is: (e) => "Autre" === e,
                  then: (e) => e.required("Ce champ est requis"),
                }),
              newsletter: o.boolean(),
            }),
        ],
        y = {
          name: "French Quote Form",
          handle: "frenchQuote",
          pages: [
            {
              title:
                "Envoyez-nous votre demande de devis et un installateur certifi\xe9 Zaptec vous recontactera!",
              rows: [
                {
                  fields: [
                    {
                      label: "Vous \xeates ?",
                      required: !0,
                      handle: "section",
                      type: "radio_group",
                      options: [
                        { label: "Un particulier", value: "particulier" },
                        { label: "Un professionnel", value: "professionnel" },
                      ],
                    },
                  ],
                },
              ],
              rules: [
                {
                  conditions: [{ field: "section", value: "particulier" }],
                  page: 1,
                },
                {
                  conditions: [{ field: "section", value: "professionnel" }],
                  page: 2,
                },
              ],
            },
            {
              title: "Cl\xf4ture du formulaire: Particulier",
              description:
                "\n        <p>\n          Nous vous remercions de l’int\xe9r\xeat que vous partez \xe0 Zaptec et nos solutions. Notre borne Schools sera bient\xf4t disponible.\n        </p>\n      ",
              rows: [],
              action: "close",
            },
            {
              title: "Professionnel",
              rows: [
                {
                  fields: [
                    {
                      label: "Quel est le lieu d'installation ?",
                      handle: "location",
                      type: "checkbox_group",
                      required: !0,
                      options: [
                        {
                          label: "Un immeuble d'habitation",
                          value: "Un immeuble d'habitation",
                        },
                        {
                          label:
                            "Un parking d'entreprise (recharge des employ\xe9s, flotte professionnelle, visiteurs…)",
                          value:
                            "Un parking d'entreprise (recharge des employ\xe9s, flotte professionnelle, visiteurs…)",
                        },
                        {
                          label: "Un \xe9tablissement recevant du public",
                          value: "Un \xe9tablissement recevant du public",
                        },
                        {
                          label:
                            "La maison d'un collaborateur de votre entreprise",
                          value:
                            "La maison d'un collaborateur de votre entreprise",
                        },
                        {
                          label:
                            "L'immeuble d'un collaborateur de votre entreprise",
                          value:
                            "L'immeuble d'un collaborateur de votre entreprise",
                        },
                        { label: "En voirie", value: "En voirie" },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Combien de bornes souhaitez-vous installer ?",
                      handle: "numberOfChargers",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Vous souhaitez installer vos bornes :",
                      handle: "installationType",
                      type: "checkbox_group",
                      required: !0,
                      options: [
                        { label: "En int\xe9rieur", value: "En int\xe9rieur" },
                        { label: "En ext\xe9rieur", value: "En ext\xe9rieur" },
                        { label: "Sur pied", value: "Sur pied" },
                        { label: "Au mur", value: "Au mur" },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Votre projet porte sur l'\xe9quipement :",
                      handle: "projectType",
                      type: "radio_group",
                      required: !0,
                      options: [
                        {
                          label: "D'un site unique",
                          value: "D'un site unique",
                        },
                        {
                          label: "De plusieurs sites",
                          value: "De plusieurs sites",
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Combien de sites souhaitez-vous \xe9quiper ?",
                      handle: "numberOfSites",
                      type: "text",
                      required: !0,
                      rules: [
                        {
                          conditions: [
                            {
                              field: "projectType",
                              value: "De plusieurs sites",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "O\xf9 sont situ\xe9s les sites que vous souhaitez \xe9quiper ?",
                      handle: "siteLocations",
                      type: "textarea",
                      required: !0,
                      rules: [
                        {
                          conditions: [
                            {
                              field: "projectType",
                              value: "De plusieurs sites",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Dans le cadre de votre projet, vous cherchez:",
                      handle: "projectScope",
                      type: "radio_group",
                      required: !0,
                      options: [
                        {
                          label:
                            "Un devis pour le mat\xe9riel (bornes de recharge)",
                          value:
                            "Un devis pour le mat\xe9riel (bornes de recharge)",
                        },
                        {
                          label:
                            "Un devis pour le mat\xe9riel et des prestations compl\xe9mentaires",
                          value:
                            "Un devis pour le mat\xe9riel et des prestations compl\xe9mentaires",
                        },
                      ],
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Quelles sont les prestations compl\xe9mentaires attendues?",
                      handle: "additionalServices",
                      type: "checkbox_group",
                      required: !0,
                      options: [
                        {
                          label: "Installation et mise en service",
                          value: "Installation et mise en service",
                        },
                        {
                          label: "Contrat de maintenance annuelle",
                          value: "Contrat de maintenance annuelle",
                        },
                        {
                          label:
                            "Gestion des acc\xe8s utilisateurs (distribution de badges, autorisation des acc\xe8s, etc.)",
                          value:
                            "Gestion des acc\xe8s utilisateurs (distribution de badges, autorisation des acc\xe8s, etc.)",
                        },
                        {
                          label: "Contrat de d\xe9pannage",
                          value: "Contrat de d\xe9pannage",
                        },
                        {
                          label: "Facturation des consommations \xe9lectriques",
                          value: "Facturation des consommations \xe9lectriques",
                        },
                      ],
                      rules: [
                        {
                          conditions: [
                            {
                              field: "projectScope",
                              value:
                                "Un devis pour le mat\xe9riel et des prestations compl\xe9mentaires",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              title: "A Propos de vous",
              description:
                '\n        <p>\n          Merci de bien renseigner ces informations afin que nous puissions reprendre contact avec vous ! \n        </p>\n        <p>\n          Pour en savoir plus sur l\'utilisation de vos donn\xe9es: <a href="https://zaptec.com/fr/privacy-policy/" target="_blank">https://zaptec.com/fr/privacy-policy/</a><br/>\n          En envoyant ce formulaire, vous acceptez que Zaptec vous envoie des informations sur nos produits. A tout moment vous pourrez vous d\xe9sinscrire. \n        </p>\n      ',
              rows: [
                {
                  fields: [
                    {
                      label: "Nom de votre entreprise",
                      handle: "company",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "Nom",
                      handle: "lastName",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Pr\xe9nom",
                      handle: "firstName",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label: "N\xb0 de t\xe9l\xe9phone",
                      handle: "phone",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Adresse mail",
                      handle: "email",
                      type: "email",
                      required: !0,
                    },
                  ],
                },
                {
                  title: "Votre adresse",
                  fields: [
                    {
                      label: "Rue",
                      handle: "street",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Ville",
                      handle: "city",
                      type: "text",
                      required: !0,
                    },
                    {
                      label: "Code postal",
                      handle: "postal",
                      type: "text",
                      required: !0,
                    },
                  ],
                },
                {
                  fields: [
                    {
                      label:
                        "Inscrivez-vous \xe0 notre newsletter pour \xeatre inform\xe9s",
                      handle: "newsletter",
                      type: "checkbox",
                    },
                  ],
                },
              ],
            },
          ],
          initialValues: {
            section: "",
            location: [],
            numberOfChargers: "",
            installationType: [],
            projectType: "",
            numberOfSites: 1,
            siteLocations: "",
            projectScope: "",
            additionalServices: [],
            company: "",
            lastName: "",
            firstName: "",
            phone: "",
            email: "",
            street: "",
            city: "",
            postal: "",
            newsletter: !1,
          },
          errorMessage:
            "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez r\xe9essayer.",
          successMessage: "Votre message a bien \xe9t\xe9 envoy\xe9!",
        },
        q = {
          frenchLead: {
            form: g,
            validationSchema: f,
            email: (e) => {
              let r = [g.pages[0]];
              switch (e.section) {
                case "L'achat-revente d'IRVE":
                  r.push(g.pages[1]);
                  break;
                case "La fourniture et la pose d'IRVE":
                  r.push(g.pages[2]);
                  break;
                case "Autre":
                  r.push(g.pages[4]);
              }
              r.push(g.pages[5]);
              let t = (0, i.jsxs)(u.E, {
                lang: "fr",
                children: [
                  (0, i.jsx)(d.p, {
                    children: (0, i.jsx)(c.K, {
                      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap",
                    }),
                  }),
                  (0, i.jsxs)(p.m, {
                    children: [
                      (0, i.jsx)(v.D, {
                        children:
                          "Vous avez une nouvelle demande de partenariat",
                      }),
                      r.map((r, t) =>
                        (0, i.jsxs)(
                          h.w,
                          {
                            children: [
                              (0, i.jsx)(v.D, { as: "h4", children: r.title }),
                              r.rows.map((r, t) =>
                                (0, i.jsxs)(
                                  a.Fragment,
                                  {
                                    children: [
                                      r.title &&
                                        (0, i.jsx)(v.D, {
                                          as: "h5",
                                          children: r.title,
                                        }),
                                      r.fields.map((r, t) =>
                                        e[r.handle]
                                          ? (0, i.jsxs)(
                                              m.E,
                                              {
                                                children: [
                                                  (0, i.jsx)("strong", {
                                                    children: r.label,
                                                  }),
                                                  ":",
                                                  (0, i.jsx)("br", {}),
                                                  Array.isArray(e[r.handle])
                                                    ? e[r.handle].join(", ")
                                                    : e[r.handle],
                                                ],
                                              },
                                              t
                                            )
                                          : null
                                      ),
                                    ],
                                  },
                                  t
                                )
                              ),
                            ],
                          },
                          t
                        )
                      ),
                      (0, i.jsx)(h.w, {
                        children: (0, i.jsx)(m.E, {
                          children: "Liturgia website",
                        }),
                      }),
                    ],
                  }),
                ],
              });
              return (0, b.XX)(t);
            },
          },
          frenchQuote: {
            form: y,
            validationSchema: [
              o
                .object()
                .shape({ section: o.string().required("Ce champ est requis") }),
              o.object().shape({}),
              o
                .object()
                .shape({
                  location: o.array().min(1, "Ce champ est requis"),
                  numberOfChargers: o.string().required("Ce champ est requis"),
                  installationType: o.array().min(1, "Ce champ est requis"),
                  projectType: o.string().required("Ce champ est requis"),
                  numberOfSites: o
                    .number()
                    .when("projectType", {
                      is: "De plusieurs sites",
                      then: (e) =>
                        e
                          .integer()
                          .typeError("Ce champ doit \xeatre un nombre")
                          .required("Ce champ est requis"),
                    }),
                  siteLocations: o
                    .string()
                    .when("projectType", {
                      is: "De plusieurs sites",
                      then: (e) => e.required("Ce champ est requis"),
                    }),
                  projectScope: o.string().required("Ce champ est requis"),
                  additionalServices: o
                    .array()
                    .when("projectScope", {
                      is: "Un devis pour le mat\xe9riel et des prestations compl\xe9mentaires",
                      then: (e) => e.min(1, "Ce champ est requis"),
                    }),
                }),
              o
                .object()
                .shape({
                  company: o.string().required("Ce champ est requis"),
                  lastName: o.string().required("Ce champ est requis"),
                  firstName: o.string().required("Ce champ est requis"),
                  phone: o.string().required("Ce champ est requis"),
                  email: o
                    .string()
                    .email("Adresse mail invalide")
                    .required("Ce champ est requis"),
                  street: o.string().required("Ce champ est requis"),
                  city: o.string().required("Ce champ est requis"),
                  postal: o.string().required("Ce champ est requis"),
                  newsletter: o.boolean(),
                }),
            ],
            email: (e) => {
              let r = [y.pages[0]];
              "professionnel" === e.section && r.push(y.pages[2]),
                r.push(y.pages[3]);
              let t = (0, i.jsxs)(u.E, {
                lang: "fr",
                children: [
                  (0, i.jsx)(d.p, {
                    children: (0, i.jsx)(c.K, {
                      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap",
                    }),
                  }),
                  (0, i.jsxs)(p.m, {
                    children: [
                      (0, i.jsx)(v.D, {
                        children: "Vous avez une nouvelle demande de devis",
                      }),
                      r.map((r, t) =>
                        (0, i.jsxs)(
                          h.w,
                          {
                            children: [
                              (0, i.jsx)(v.D, { as: "h4", children: r.title }),
                              r.rows.map((r, t) =>
                                (0, i.jsxs)(
                                  h.w,
                                  {
                                    children: [
                                      r.title &&
                                        (0, i.jsx)(v.D, {
                                          as: "h5",
                                          children: r.title,
                                        }),
                                      r.fields.map((r, t) =>
                                        !e[r.handle] ||
                                        (Array.isArray(e[r.handle]) &&
                                          0 === e[r.handle].length)
                                          ? null
                                          : (0, i.jsxs)(
                                              m.E,
                                              {
                                                children: [
                                                  (0, i.jsx)("strong", {
                                                    children: r.label,
                                                  }),
                                                  ":",
                                                  (0, i.jsx)("br", {}),
                                                  Array.isArray(e[r.handle])
                                                    ? e[r.handle].join(", ")
                                                    : e[r.handle],
                                                ],
                                              },
                                              t
                                            )
                                      ),
                                    ],
                                  },
                                  t
                                )
                              ),
                            ],
                          },
                          t
                        )
                      ),
                      (0, i.jsx)(h.w, {
                        children: (0, i.jsx)(m.E, {
                          children: "Liturgia website",
                        }),
                      }),
                    ],
                  }),
                ],
              });
              return (0, b.XX)(t);
            },
          },
        };
      var x = t(17938),
        w = t(32578),
        j = t(67667),
        C = t(89160),
        A = t(96836),
        z = t(23820),
        V = t.n(z),
        E = t(72505),
        N = t.n(E),
        S = t(39754),
        k = t.n(S),
        R = t(3027),
        L = t(79455),
        I = t(94203),
        F = t(22360),
        P = t(73997),
        _ = t(2102);
      function O() {
        return (O = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var s in t)
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }
              return e;
            }).apply(this, arguments);
      }
      var M = (0, a.forwardRef)(function (e, r) {
        return a.createElement(
          "svg",
          O(
            {
              viewBox: "0 0 13 13",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: r,
            },
            e
          ),
          s ||
            (s = a.createElement("path", {
              d: "M12 1 2 4.333 6.63 6.37M12 1 8.667 11 6.63 6.37M12 1 6.63 6.37",
            }))
        );
      });
      A.os.registerPlugin(V());
      let D = (0, n.WQ)("ui")((e) => {
          let { form: r, closeCallback: t, type: s, ui: l } = e,
            n = (0, F.y)(),
            o = (0, a.useRef)(null),
            [u, d] = (0, a.useState)([0]),
            c = (0, w.useTranslations)("common"),
            { form: p, validationSchema: v } = r,
            h = u[u.length - 1];
          return (0, i.jsx)(x.l1, {
            initialValues: p.initialValues,
            validationSchema: v[h],
            onSubmit: async (e, r) => {
              var t;
              let { setSubmitting: i, setErrors: a, setStatus: u } = r,
                c = o.current.closest(".modal");
              if (h === p.pages.length - 1) {
                let { data: r } = await N()
                  .post("/api/forms", { values: e, type: s })
                  .catch((e) => (console.log(e), { data: { error: !0 } }));
                if (r.error) a({ api: !0 }), u({ success: !1 });
                else if (null == r ? void 0 : r.success) {
                  let r = {};
                  k()(e, (e, t) => {
                    [
                      "email",
                      "name",
                      "firstName",
                      "lastName",
                      "phone",
                      "cellPhone",
                      "null",
                    ].includes(t) || (r[t] = e);
                  }),
                    n({
                      event: "form_submitted",
                      form: p.handle,
                      formName: p.name,
                      values: JSON.parse(JSON.stringify(r)),
                    }),
                    u({ success: !0 }),
                    setTimeout(() => {
                      l.closeModal();
                    }, 5e3);
                }
                A.os.to(c, { duration: 0.5, scrollTo: { y: 0, autoKill: !1 } }),
                  i(!1);
                return;
              }
              A.os.to(c, { duration: 0.5, scrollTo: { y: 0, autoKill: !1 } }),
                (null === (t = p.pages[h].rules) || void 0 === t
                  ? void 0
                  : t.length) > 0
                  ? p.pages[h].rules.some((r) => {
                      var t;
                      return (null == r
                        ? void 0
                        : null === (t = r.conditions) || void 0 === t
                        ? void 0
                        : t.length) > 0
                        ? r.conditions.some((t) => {
                            if (e[t.field] === t.value)
                              return d((e) => [...e, r.page]), !0;
                          })
                        : (d((e) => [...e, r.page]), !0);
                    })
                  : d((e) => [...e, h + 1]),
                i(!1);
            },
            children: (e) => {
              var r;
              let { isSubmitting: s, status: a, errors: n, values: u } = e;
              return (0, i.jsxs)(x.lV, {
                ref: o,
                children: [
                  (0, i.jsxs)(j.N, {
                    children: [
                      (null == n ? void 0 : n.api) &&
                        (0, i.jsx)(
                          C.P.div,
                          {
                            initial: { opacity: 0, y: -50 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 50 },
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                            className:
                              "bg-red bg-opacity-10 border border-red text-red px-4 py-3 rounded relative wysiwyg r-mb-8",
                            role: "alert",
                            children: (0, i.jsx)(I.A, {
                              content: p.errorMessage,
                            }),
                          },
                          "apiError"
                        ),
                      (null == a ? void 0 : a.success) &&
                        (0, i.jsx)(
                          C.P.div,
                          {
                            initial: { opacity: 0, y: -50 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 50 },
                            transition: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                            className:
                              "bg-green bg-opacity-10 border border-forest text-forest px-4 py-3 rounded relative wysiwyg r-mb-8",
                            role: "alert",
                            children: (0, i.jsx)(I.A, {
                              content: p.successMessage,
                            }),
                          },
                          "successMessage"
                        ),
                    ],
                  }),
                  (0, i.jsx)(j.N, {
                    mode: "wait",
                    initial: !1,
                    children: (0, i.jsxs)(
                      C.P.div,
                      {
                        initial: { opacity: 0, x: -100 },
                        animate: { opacity: 1, x: 0 },
                        exit: { opacity: 0, x: 100 },
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                        className: "flex flex-col r-gap-5 w-full",
                        children: [
                          p.pages[h].title &&
                            (0, i.jsx)("h2", {
                              className: "h3-text",
                              children: p.pages[h].title,
                            }),
                          p.pages[h].description &&
                            (0, i.jsx)("div", {
                              className: "wysiwyg",
                              children: (0, i.jsx)(I.A, {
                                content: p.pages[h].description,
                              }),
                            }),
                          p.pages[h].rows.map((e, r) =>
                            e.fields.some((e) => {
                              var r;
                              return (
                                !(
                                  (null === (r = e.rules) || void 0 === r
                                    ? void 0
                                    : r.length) > 0
                                ) ||
                                e.rules.some((e) => {
                                  var r;
                                  return (
                                    !(
                                      (null == e
                                        ? void 0
                                        : null === (r = e.conditions) ||
                                          void 0 === r
                                        ? void 0
                                        : r.length) > 0
                                    ) ||
                                    e.conditions.some((e) => {
                                      if (u[e.field].includes(e.value))
                                        return !0;
                                    })
                                  );
                                })
                              );
                            })
                              ? (0, i.jsxs)(
                                  "div",
                                  {
                                    className: "row-wrapper",
                                    children: [
                                      e.title &&
                                        (0, i.jsx)("h3", {
                                          className: "r-text-md mb-2",
                                          children: e.title,
                                        }),
                                      (0, i.jsx)("div", {
                                        className:
                                          "flex flex-col md:flex-row r-gap-5 w-full",
                                        children: e.fields.map((e) => {
                                          var t;
                                          return (null === (t = e.rules) ||
                                          void 0 === t
                                            ? void 0
                                            : t.length) > 0 &&
                                            !e.rules.some((e) => {
                                              var r;
                                              return (
                                                !(
                                                  (null == e
                                                    ? void 0
                                                    : null ===
                                                        (r = e.conditions) ||
                                                      void 0 === r
                                                    ? void 0
                                                    : r.length) > 0
                                                ) ||
                                                e.conditions.some((e) => {
                                                  if (
                                                    u[e.field].includes(e.value)
                                                  )
                                                    return !0;
                                                })
                                              );
                                            })
                                            ? null
                                            : (0, i.jsx)(
                                                L.A,
                                                { field: e },
                                                ""
                                                  .concat(r, "-")
                                                  .concat(e.handle)
                                              );
                                        }),
                                      }),
                                    ],
                                  },
                                  r
                                )
                              : null
                          ),
                        ],
                      },
                      h
                    ),
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex justify-between r-gap-8 w-full r-mt-8",
                    children: [
                      h > 0 &&
                        (0, i.jsx)("button", {
                          type: "button",
                          className: "text-grey r-text-sm",
                          onClick: () => {
                            d((e) => e.slice(0, -1));
                          },
                          children: c("form.previous"),
                        }),
                      (0, i.jsx)(R.A, {
                        type: "submit",
                        Icon: () => {
                          var e;
                          return "close" === p.pages[h].action
                            ? (0, i.jsx)(P.A, {})
                            : (null === (e = p.pages) || void 0 === e
                                ? void 0
                                : e.length) -
                                1 ===
                              h
                            ? (0, i.jsx)(M, {})
                            : (0, i.jsx)(_.A, {});
                        },
                        className: "ml-auto",
                        disabled: s,
                        onClick: (e) => {
                          "close" === p.pages[h].action &&
                            (, t(), l.closeModal());
                        },
                        children:
                          (null === (r = p.pages) || void 0 === r
                            ? void 0
                            : r.length) -
                            1 ===
                          h
                            ? c("form.submit")
                            : "close" === p.pages[h].action
                            ? c("close")
                            : c("form.next"),
                      }),
                    ],
                  }),
                ],
              });
            },
          });
        }),
        B = {
          "#obtenir-un-devis": "#form-frenchQuote",
          "#devenir-partenaire": "#form-frenchLead",
        },
        U = (0, n.WQ)("ui")((e) => {
          let { ui: r } = e,
            [t, s] = (0, a.useState)(null),
            n = (0, l.useRouter)();
          return (
            (0, a.useEffect)(() => {
              let e = () => {
                let { hash: e } = window.location;
                if (
                  (B[e] && (e = B[e]), null == e ? void 0 : e.includes("#form"))
                ) {
                  let [, ...r] = e.split("-");
                  s(r[0]);
                } else s(null);
              };
              return (
                e(),
                window.addEventListener("hashchange", e),
                () => {
                  window.removeEventListener("hashchange", e);
                }
              );
            }, [n]),
            (0, a.useEffect)(() => {
              if (!t) return;
              let e = () => {
                (window.location.hash = ""), s(null);
              };
              q[t] &&
                r.openModal({
                  content: (0, i.jsx)(D, {
                    form: q[t],
                    type: t,
                    closeCallback: e,
                  }),
                  closeCallback: e,
                });
            }, [r, t]),
            null
          );
        });
    },
    79455: (e, r, t) => {
      t.d(r, { A: () => m });
      var s = t(74848),
        i = t(14953),
        a = t.n(i);
      let l = a()(() => t.e(8422).then(t.bind(t, 78422)), {
          loadableGenerated: { webpack: () => [78422] },
        }),
        n = a()(() => t.e(2419).then(t.bind(t, 12419)), {
          loadableGenerated: { webpack: () => [12419] },
        }),
        o = a()(() => t.e(1633).then(t.bind(t, 61633)), {
          loadableGenerated: { webpack: () => [61633] },
        }),
        u = a()(() => t.e(8577).then(t.bind(t, 58577)), {
          loadableGenerated: { webpack: () => [58577] },
        }),
        d = a()(() => t.e(8528).then(t.bind(t, 18528)), {
          loadableGenerated: { webpack: () => [18528] },
        }),
        c = a()(() => t.e(9445).then(t.bind(t, 59445)), {
          loadableGenerated: { webpack: () => [59445] },
        }),
        p = a()(() => t.e(5941).then(t.bind(t, 65941)), {
          loadableGenerated: { webpack: () => [65941] },
        }),
        v = a()(() => t.e(4032).then(t.bind(t, 51651)), {
          loadableGenerated: { webpack: () => [51651] },
        }),
        h = {
          text: l,
          textarea: n,
          email: l,
          hidden: o,
          select: u,
          multiple_select: u,
          checkbox: d,
          checkbox_group: c,
          radio_group: p,
          number: l,
          html: v,
          rich_text: v,
          password: l,
          confirmation: l,
          file: a()(
            () => Promise.all([t.e(1489), t.e(287)]).then(t.bind(t, 10287)),
            { loadableGenerated: { webpack: () => [10287] } }
          ),
          mailing_list: d,
        },
        m = (e) => {
          let { field: r } = e,
            t = h[r.type];
          return (0, s.jsx)("div", {
            className:
              "freeform-field-wrapper relative flex-1 field-type-".concat(
                r.type
              ),
            children: t && (0, s.jsx)(t, { fieldData: r }),
          });
        };
    },
  },
]);
