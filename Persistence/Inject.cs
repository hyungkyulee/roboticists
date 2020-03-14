using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Inject
    {
        public static void InjectPlayerData (DataContext context)
        {
            if(!context.Players.Any())
            {
                var players = new List<Player>
                {
                    new Player
                    {
                        Name = "Hugo Lloris",
                        BackNumber = "1",
                        Position = "GoalKeeper",
                        Goals = 0,
                        Saves = 665,
                        Shoots = 0,
                        Tackles = 0,
                        YellowCards = 3,
                        RedCards = 0,
                        DebutDate = DateTime.Now.AddMonths(-5),
                        Club = "Tottenham",
                    },
                    new Player
                    {
                        Name = "Toby Alderweireld",
                        BackNumber = "4",
                        Position = "Defender",
                        Goals = 7,
                        Saves = 0,
                        Shoots = 26,
                        Tackles = 219,
                        YellowCards = 17,
                        RedCards = 0,
                        DebutDate = DateTime.Now.AddMonths(-9),
                        Club = "Tottenham",
                    },
                    new Player
                    {
                        Name = "Harry Winks",
                        BackNumber = "8",
                        Position = "Midfielder",
                        Goals = 2,
                        Saves = 0,
                        Shoots = 28,
                        Tackles = 77,
                        YellowCards = 13,
                        RedCards = 0,
                        DebutDate = DateTime.Now.AddMonths(-4),
                        Club = "Tottenham",
                    },
                    new Player
                    {
                        Name = "Delta",
                        BackNumber = "7",
                        Position = "Forward",
                        Goals = 51,
                        Saves = 0,
                        Shoots = 331,
                        Tackles = 102,
                        YellowCards = 4,
                        RedCards = 2,
                        DebutDate = DateTime.Now.AddMonths(-10),
                        Club = "Tottenham",
                    }
                };

                context.Players.AddRange(players);
                context.SaveChanges();
            }
        }    
    }
}