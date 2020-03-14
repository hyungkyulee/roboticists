using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class PlayerEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Players",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    BackNumber = table.Column<string>(nullable: true),
                    Position = table.Column<string>(nullable: true),
                    Goals = table.Column<int>(nullable: false),
                    Saves = table.Column<int>(nullable: false),
                    Shoots = table.Column<int>(nullable: false),
                    Tackles = table.Column<int>(nullable: false),
                    YellowCards = table.Column<int>(nullable: false),
                    RedCards = table.Column<int>(nullable: false),
                    DebutDate = table.Column<DateTime>(nullable: false),
                    Club = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Players", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Players");
        }
    }
}
