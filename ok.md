start a mermaid diagram

``` mermaid 
graph TD

    subgraph Fournisseur
        A[Ouvrir dossier de commande]
        B[Transmettre commande au Service d'Achat]
        C[Attendre reçu de paiement OU contacter le Comptable après une semaine]
        D[Fermer dossier de commande]
    end

    subgraph ServiceAchat
        E[Recevoir commande du Fournisseur]
        F[Accepter la commande]
        G[Refuser la commande]
    end

    subgraph Comptable
        H[Traiter la facture]
        I[Envoyer reçu de paiement au Fournisseur]
    end

    subgraph Magasinier
        J[Recevoir la commande]
        K[Vérifier le type d'articles]
        L[Mettre dans les grandes boîtes OU mettre dans les petites boîtes]
        M[Stocker la marchandise]
        N[Notifier Service d'Achat de la réception]
    end

    A -->|1.1| B
    B -->|1.2| E
    E -->|2.1| F
    E -->|2.2| G
    F -->|2.3| I
    G -->|2.4| C
    C -->|3.1| D
    J -->|4.1| K
    K -->|4.2| L
    L -->|4.3| M
    M -->|4.4| N
    N -->|4.5| F




```