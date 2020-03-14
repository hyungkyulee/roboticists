using System;

namespace Domain
{
    public class Player
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string BackNumber { get; set; }
        public string Position { get; set; }
        public int Goals { get; set; }
        public int Saves { get; set; }
        public int Shoots { get; set; }
        public int Tackles { get; set; }    
        public int YellowCards { get; set; }
        public int RedCards { get; set; }
        public DateTime DebutDate { get; set; }
        public string Club { get; set; }
    }
}