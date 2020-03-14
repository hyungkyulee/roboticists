using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Players
{
    public class Edit
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
                var player = await _context.Players.FindAsync(request.Id);

                if(player == null)
                    throw new Exception("Could not find the player.");

                {
                    player.Name = request.Name ?? player.Name;
                    player.BackNumber = request.BackNumber ?? player.BackNumber;
                    player.Position = request.Position ?? player.Position;
                    if(player.Goals != request.Goals) player.Goals = request.Goals; 
                    if(player.Saves != request.Saves) player.Saves = request.Saves;
                    if(player.Shoots != request.Shoots) player.Shoots = request.Shoots;
                    if(player.Tackles != request.Tackles) player.Tackles = request.Tackles;
                    if(player.YellowCards != request.YellowCards) player.YellowCards = request.YellowCards;
                    if(player.RedCards != request.RedCards) player.RedCards = request.RedCards;
                    if(player.DebutDate != request.DebutDate) player.DebutDate = request.DebutDate;
                    player.Club = request.Club ?? player.Club;
                }

                var response = await _context.SaveChangesAsync() > 0;
                if(response) return Unit.Value;

                throw new Exception("Error to save the update~!!");
            }
        }
    }
}