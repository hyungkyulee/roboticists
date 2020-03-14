using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Players
{
    public class Join
    {
        public class Command : IRequest
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var player = new Player
                {
                    Id = request.Id,
                    Name = request.Name,
                    BackNumber = request.BackNumber,
                    Position = request.Position,
                    Goals = request.Goals,
                    Saves = request.Saves,
                    Shoots = request.Shoots,
                    Tackles = request.Tackles,
                    YellowCards = request.YellowCards,
                    RedCards = request.RedCards,
                    DebutDate = request.DebutDate,
                    Club = request.Club
                };

                _context.Players.Add(player);
                var response = await _context.SaveChangesAsync() > 0;

                if(response) return Unit.Value;
                throw new Exception("Error to Join Player to the Game~!!");
            }
        }
    }
}