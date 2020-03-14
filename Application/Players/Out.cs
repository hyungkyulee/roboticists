using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Players
{
    public class Out
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                
                _context.Remove(player);

                var response = await _context.SaveChangesAsync() > 0;
                if(response) return Unit.Value;

                throw new Exception("Error to out~!");
            }
        }
    }
}